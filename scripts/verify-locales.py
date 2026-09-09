#!/usr/bin/env python3
"""Check rendered language boundaries and reciprocal translation links after a build."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlparse
import json
import re
import subprocess
import xml.etree.ElementTree as ET

REGISTRY = json.loads(subprocess.check_output(["node", str(Path(__file__).with_name("export-locale-registry.cjs"))], text=True))
DEFAULT = REGISTRY["defaultLocale"]
PUBLISHED = REGISTRY["publishedLocales"]
META = REGISTRY["localeMeta"]

def localized(locale, page=""):
    prefix = "" if locale == DEFAULT else locale + "/"
    return "/" + prefix + (page.strip("/") + "/" if page else "")

ROOT = Path(__file__).resolve().parents[1] / 'dist'
class Page(HTMLParser):
    def __init__(self, path):
        super().__init__()
        self.lang = ''
        self.direction = ''
        self.og_locale = ''
        self.canonical = ''
        self.alternates = {}
        self.main = False
        self.skip = False
        self.text = []
        self.links = []
        self.h1 = 0
        self.step_ids = []
        self.screenshots = 0
        self.metadata = []
        self.redirect = False
        self.feed(path.read_text())

    def handle_starttag(self, tag, pairs):
        attrs = dict(pairs)
        if tag == 'html':
            self.lang = attrs.get('lang', '')
            self.direction = attrs.get('dir', '')
        if tag == 'meta' and attrs.get('property') == 'og:locale': self.og_locale = attrs.get('content', '')
        if tag == 'meta' and attrs.get('http-equiv', '').lower() == 'refresh': self.redirect = True
        if tag == 'link' and attrs.get('rel') == 'canonical': self.canonical = attrs['href']
        if tag == 'link' and attrs.get('rel') == 'alternate' and 'hreflang' in attrs:
            self.alternates[attrs['hreflang']] = attrs['href']
        if tag == 'main': self.main = True
        if tag in ('script', 'style'): self.skip = True
        if tag == 'h1': self.h1 += 1
        if tag == 'section' and attrs.get('id', '').startswith('step-'): self.step_ids.append(attrs['id'])
        if tag == 'figure' and 'tutorial-shot' in attrs.get('class', '').split(): self.screenshots += 1
        if tag == 'meta' and attrs.get('name') == 'description': self.metadata.append(attrs.get('content', ''))
        if self.main:
            self.text.extend(attrs.get(key, '') for key in ('alt', 'aria-label', 'data-failed', 'data-title', 'data-description'))
            if tag == 'a': self.links.append(attrs.get('href', ''))

    def handle_endtag(self, tag):
        if tag == 'main': self.main = False
        if tag in ('script', 'style'): self.skip = False

    def handle_data(self, text):
        if self.main and not self.skip: self.text.append(text)

pages = { '/' + str(path.relative_to(ROOT)).replace('index.html', ''): Page(path)
          for path in ROOT.rglob('index.html') }
errors = []
for route, page in pages.items():
    if not page.lang: continue  # Redirects have no content language.
    if page.h1 != 1: errors.append(f'{route}: expected one H1, got {page.h1}')
    if page.lang == 'en':
        if any(re.search(r'[\u3400-\u9fff]', text) for text in page.text + page.metadata):
            errors.append(f'{route}: Chinese content in English main')
        if any(urlparse(link).path.startswith('/zh-') for link in page.links):
            errors.append(f'{route}: untranslated tutorial link in English main')
    for lang, href in page.alternates.items():
        target = pages.get(urlparse(href).path)
        if target is None:
            errors.append(f'{route}: missing alternate {href}')
            continue
        if lang != 'x-default':
            expected = next((meta['htmlLang'] for meta in META.values() if meta['hrefLang'] == lang), None)
            if target.lang != expected: errors.append(f'{route}: alternate language mismatch: {href}')
            if page.canonical not in target.alternates.values():
                errors.append(f'{route}: alternate is not reciprocal: {href}')

# Check all routes against the actual language and tutorial registries.
counts = {}
for locale in PUBLISHED:
    article_prefix = localized(locale, 'articles')
    articles = {route.removeprefix(article_prefix): page for route, page in pages.items()
                if route.startswith(article_prefix) and route != article_prefix}
    counts[locale] = len(articles)
    expected_articles = {article['slug'] + '/' for article in REGISTRY['articles']}
    if articles.keys() != expected_articles:
        errors.append(f'{locale}: tutorial route set differs from registry')
    for suffix in ['', 'articles', 'privacy', 'terms'] + ['articles/' + article['slug'] for article in REGISTRY['articles']]:
        route = localized(locale, suffix)
        page = pages.get(route)
        if page is None:
            errors.append(f'{route}: required localized page missing')
            continue
        if (page.lang, page.direction, page.og_locale) != (META[locale]['htmlLang'], META[locale]['dir'], META[locale]['ogLocale']):
            errors.append(f'{route}: incorrect lang, dir or OG locale')
        if urlparse(page.canonical).path != route or not page.canonical.startswith('https://'):
            errors.append(f'{route}: canonical must point to itself with an absolute URL')
        expected_alternates = {META[other]['hrefLang']: localized(other, suffix) for other in PUBLISHED}
        expected_alternates['x-default'] = localized(DEFAULT, suffix)
        if {lang: urlparse(href).path for lang, href in page.alternates.items()} != expected_alternates:
            errors.append(f'{route}: incomplete or incorrect hreflang set')
        if any(not href.startswith('https://') for href in page.alternates.values()):
            errors.append(f'{route}: hreflang URL must be absolute')
        source = pages.get(localized(DEFAULT, suffix))
        if source and (page.step_ids, page.screenshots) != (source.step_ids, source.screenshots):
            errors.append(f'{route}: incomplete steps or screenshots')
        for link in page.links:
            target = pages.get(urlparse(link).path)
            if target and target.lang and target.lang != page.lang:
                errors.append(f'{route}: cross-language content link: {link}')
        if locale == 'zh-Hant' and any(re.search(r'[这为与从个们来时载链视频图选择开关设网页]', text) for text in page.text + page.metadata):
            errors.append(f'{route}: Simplified Chinese residue in Traditional Chinese copy')
        if locale == 'ja' and any(re.search(r'点击|粘贴|下载完成|保存到相册|已加载|选择视频|本例使用|截图展示', text) for text in page.text + page.metadata):
            errors.append(f'{route}: untranslated Chinese instruction in Japanese copy')
    for legal in ['privacy', 'terms']:
        page = pages.get(localized(locale, legal))
        if page is None or page.redirect or sum(len(text.strip()) for text in page.text) < 1000:
            errors.append(f'{locale}: legal page must contain the full policy without a redirect: {legal}')

for locale in REGISTRY['locales']:
    if (locale not in PUBLISHED or locale == DEFAULT) and (ROOT / locale / 'index.html').exists():
        errors.append(f'{locale}: unpublished or duplicate locale homepage generated')

sitemap_urls = set()
for path in ROOT.glob('sitemap-*.xml'):
    tree = ET.parse(path)
    sitemap_urls.update(urlparse(node.text).path for node in tree.findall('.//{*}url/{*}loc'))
if not sitemap_urls:
    errors.append('Sitemap contains no page URLs')
for locale in PUBLISHED:
    for legal in ['privacy', 'terms']:
        if localized(locale, legal) not in sitemap_urls:
            errors.append(f'{locale}: legal page missing from sitemap: {legal}')
    for article in REGISTRY['articles']:
        route = localized(locale, 'articles/' + article['slug'])
        if (route in sitemap_urls) != article['screenshotsReady']:
            errors.append(f'{route}: sitemap published/draft mismatch')

print(json.dumps({'localized_pages': sum(bool(p.lang) for p in pages.values()), 'tutorials_by_locale': counts, 'errors': errors}, indent=2))
raise SystemExit(bool(errors))
