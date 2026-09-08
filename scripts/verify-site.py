"""Check the generated site before any production upload."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urljoin, urlparse
import json
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
DIST = ROOT / 'dist'
errors = []
checked = 0

class Page(HTMLParser):
    def __init__(self, path):
        super().__init__()
        self.path = path
        self.canonical = None
        self.robots = ''
        self.redirect = False
        self.base = 'https://clipdock.video/' + str(path.relative_to(DIST)).replace('index.html', '')

    def check_url(self, value):
        global checked
        if not value or value.startswith(('#', 'data:', 'mailto:', 'tel:')):
            return
        url = urlparse(urljoin(self.base, value))
        if url.hostname in ('assets.clipdock.video', 'assets-cn.clipdock.video'):
            offset = url.path.find('/assets/')
            if offset < 0:
                errors.append(f'{self.path}: invalid media URL {value}')
                return
            target = DIST / unquote(url.path[offset:]).lstrip('/')
        elif url.hostname == 'clipdock.video':
            target = DIST / unquote(url.path).lstrip('/')
        else:
            return
        if target.is_dir():
            target /= 'index.html'
        checked += 1
        if not target.is_file():
            errors.append(f'{self.path.relative_to(DIST)}: missing {value}')

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == 'link' and attrs.get('rel') == 'canonical':
            self.canonical = attrs.get('href')
            return
        if tag == 'meta' and attrs.get('http-equiv', '').lower() == 'refresh':
            self.redirect = True
        if tag == 'meta' and attrs.get('name') == 'robots':
            self.robots = attrs.get('content', '')
        for attr in ('src', 'poster', 'href', 'data-src', 'data-poster'):
            if attr in attrs:
                self.check_url(attrs[attr])
        for entry in attrs.get('srcset', '').split(','):
            if entry.strip():
                self.check_url(entry.strip().split()[0])
        if 'tutorial-shot-placeholder' in attrs.get('class', '').split():
            errors.append(f'{self.path}: screenshot placeholder remains')

pages = list(DIST.rglob('*.html'))
if not pages:
    raise SystemExit('No generated pages; run npm run build first')
indexable = 0
for path in pages:
    parser = Page(path)
    text = path.read_text()
    parser.feed(text)
    if not parser.redirect and (not parser.canonical or not parser.canonical.startswith('https://clipdock.video/')):
        errors.append(f'{path}: missing production canonical')
    if not parser.redirect and path.name != '404.html':
        indexable += 1
    if '/articles/' in str(path) and 'noindex' in parser.robots:
        errors.append(f'{path}: published tutorial is noindex')
    if any(old in text for old in ['Split Screen Player', '分屏播放器', 'IPTV + Xtream']):
        errors.append(f'{path}: inherited product copy remains')

ns = {'s': 'http://www.sitemaps.org/schemas/sitemap/0.9'}
urls = []
for sitemap in DIST.glob('sitemap-*.xml'):
    tree = ET.parse(sitemap)
    urls.extend(item.text for item in tree.findall('.//s:url/s:loc', ns))
for url in urls:
    if not url.startswith('https://clipdock.video/') or '/404' in url:
        errors.append(f'Invalid sitemap entry {url}')
    target = DIST / urlparse(url).path.lstrip('/') / 'index.html'
    if not target.is_file():
        errors.append(f'Sitemap target missing: {url}')
if len(urls) != indexable:
    errors.append(f'Expected {indexable} sitemap URLs, got {len(urls)}')
print(json.dumps({'pages': len(pages), 'sitemap_urls': len(urls), 'local_references_checked': checked, 'errors': errors}, ensure_ascii=False, indent=2))
raise SystemExit(bool(errors))
