"""Regression tests for mistakes that can block otherwise successful deployments."""
import json
from pathlib import Path
import subprocess
import tempfile
import unittest

CHECK = Path(__file__).resolve().parents[1] / 'scripts' / 'verify-site.py'
SITE = 'https://clipdock.video'


class SeoVerification(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.addCleanup(self.temp.cleanup)
        self.root = Path(self.temp.name)
        self.put('robots.txt', f'User-agent: *\nAllow: /\nSitemap: {SITE}/sitemap-index.xml\n')
        self.put('index.html', self.page('/', '<a href="/fr/">Français</a>'))
        self.put('fr/index.html', self.page('/fr/', '<a href="/">English</a>'))
        self.put('draft/index.html', '<meta name="robots" content="noindex, follow"><link rel="canonical" href="' + SITE + '/draft/">')
        self.put('404.html', '<meta name="robots" content="noindex, nofollow">')
        self.put('sitemap-index.xml', '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><sitemap><loc>' + SITE + '/sitemap-0.xml</loc></sitemap></sitemapindex>')
        self.sitemap(['/', '/fr/'])

    def page(self, route, links):
        return (f'<link rel="canonical" href="{SITE}{route}">'
                f'<link rel="alternate" hreflang="en" href="{SITE}/">'
                f'<link rel="alternate" hreflang="fr" href="{SITE}/fr/">'
                f'<link rel="alternate" hreflang="x-default" href="{SITE}/">'
                '<meta name="robots" content="index, follow">' + links)

    def put(self, path, text):
        target = self.root / path
        target.parent.mkdir(parents=True, exist_ok=True)
        target.write_text(text)

    def sitemap(self, routes):
        self.put('sitemap-0.xml', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' + ''.join(
            f'<url><loc>{SITE}{route}</loc><lastmod>2020-01-01T00:00:00Z</lastmod></url>' for route in routes) + '</urlset>')

    def result(self):
        run = subprocess.run(['python3', str(CHECK), '--dist', str(self.root)], capture_output=True, text=True)
        self.assertIn(run.returncode, (0, 1), run.stderr)
        return json.loads(run.stdout)

    def assert_error(self, text):
        self.assertTrue(any(text in error for error in self.result()['errors']), text)

    def test_valid_site_allows_unlinked_noindex_draft(self):
        self.assertEqual(self.result()['errors'], [])

    def test_same_count_does_not_hide_wrong_sitemap_membership(self):
        self.sitemap(['/', '/'])
        self.assert_error('Duplicate sitemap URL')
        self.assert_error('Indexable page missing from sitemap')

    def test_canonical_must_point_to_its_own_page(self):
        path = self.root / 'fr/index.html'
        path.write_text(path.read_text().replace(f'rel="canonical" href="{SITE}/fr/"', f'rel="canonical" href="{SITE}/"'))
        self.assert_error('self-referencing canonical')

    def test_googlebot_block_is_detected(self):
        self.put('robots.txt', f'User-agent: Googlebot\nDisallow: /fr/\nSitemap: {SITE}/sitemap-index.xml\n')
        self.assert_error('robots.txt blocks Googlebot')

    def test_noindex_cannot_enter_sitemap_or_navigation(self):
        self.put('fr/index.html', self.page('/fr/', '') + '<meta name="googlebot" content="noindex">')
        self.assert_error('Sitemap URL is not indexable')
        self.assert_error('Published page links to a non-indexable page')

    def test_hreflang_does_not_replace_a_crawlable_link(self):
        self.put('index.html', self.page('/', ''))
        self.assert_error('unreachable through crawlable links')

    def test_hreflang_must_be_reciprocal(self):
        self.put('fr/index.html', f'<link rel="canonical" href="{SITE}/fr/"><link rel="alternate" hreflang="fr" href="{SITE}/fr/">')
        self.assert_error('Hreflang is not reciprocal')


if __name__ == '__main__':
    unittest.main()
