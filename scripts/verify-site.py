"""Check the generated site before any production upload."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urljoin, urlparse
import json
import xml.etree.ElementTree as ET
from datetime import datetime, timezone
from collections import Counter, deque
from urllib.robotparser import RobotFileParser
import argparse

ROOT = Path(__file__).resolve().parents[1]
arguments = argparse.ArgumentParser(description=__doc__)
arguments.add_argument('--dist', type=Path, default=ROOT / 'dist')
DIST = arguments.parse_args().dist.resolve()
errors = []
checked = 0

class Page(HTMLParser):
    def __init__(self, path):
        super().__init__()
        self.path = path
        self.canonical = None
        self.canonicals = []
        self.robots = ''
        self.redirect = False
        self.base = 'https://clipdock.video/' + path.relative_to(DIST).as_posix().removesuffix('index.html')
        self.links = set()
        self.alternates = []

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
        if tag == "video" and attrs.get("crossorigin") != "anonymous":
            errors.append(f"{self.path}: video must use anonymous CORS for CDN range redirects")
        if tag == 'link' and attrs.get('rel') == 'canonical':
            self.canonical = attrs.get('href')
            self.canonicals.append(self.canonical)
            return
        if tag == 'link' and attrs.get('rel') == 'alternate' and 'hreflang' in attrs:
            self.alternates.append((attrs['hreflang'], attrs.get('href', '')))
        if tag == 'a' and 'href' in attrs and 'nofollow' not in attrs.get('rel', '').split():
            url = urlparse(urljoin(self.base, attrs['href']))
            if url.netloc == 'clipdock.video':
                self.links.add(url._replace(query='', fragment='').geturl())
        if tag == 'meta' and attrs.get('http-equiv', '').lower() == 'refresh':
            self.redirect = True
        if tag == 'meta' and attrs.get('name', '').lower() in ('robots', 'googlebot'):
            self.robots += ',' + attrs.get('content', '').lower()
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
indexable_urls = set()
parsed_pages = {}
for path in pages:
    parser = Page(path)
    text = path.read_text()
    parser.feed(text)
    parsed_pages[parser.base] = parser
    if not parser.redirect and path.name != '404.html' and parser.canonicals != [parser.base]:
        errors.append(f'{path}: expected one self-referencing canonical {parser.base}, got {parser.canonicals}')
    directives = {token.strip() for token in parser.robots.replace(';', ',').split(',')}
    if not parser.redirect and path.name != '404.html' and not directives.intersection({'noindex', 'none'}):
        indexable_urls.add(parser.base)
    if path.name == '404.html' and 'noindex' not in parser.robots:
        errors.append(f'{path}: 404 page must be noindex')
    if any(old in text for old in ['Split Screen Player', '分屏播放器', 'IPTV + Xtream']):
        errors.append(f'{path}: inherited product copy remains')

ns = {'s': 'http://www.sitemaps.org/schemas/sitemap/0.9'}
urls = []
lastmod_count = 0
for sitemap in DIST.glob('sitemap-*.xml'):
    tree = ET.parse(sitemap)
    for item in tree.findall('.//s:url', ns):
        url = item.findtext('s:loc', namespaces=ns)
        urls.append(url)
        lastmod = item.findtext('s:lastmod', namespaces=ns)
        try:
            timestamp = datetime.fromisoformat(lastmod.replace('Z', '+00:00'))
            if timestamp.tzinfo is None or timestamp > datetime.now(timezone.utc):
                raise ValueError('missing timezone or future date')
            lastmod_count += 1
        except (AttributeError, ValueError):
            errors.append(f'Invalid or missing sitemap lastmod: {url}: {lastmod}')
for url in urls:
    if not url.startswith('https://clipdock.video/') or '/404' in url:
        errors.append(f'Invalid sitemap entry {url}')
    target = DIST / urlparse(url).path.lstrip('/') / 'index.html'
    if not target.is_file():
        errors.append(f'Sitemap target missing: {url}')
for url, count in Counter(urls).items():
    if count > 1:
        errors.append(f'Duplicate sitemap URL: {url}')
for url in sorted(set(urls) - indexable_urls):
    errors.append(f'Sitemap URL is not indexable: {url}')
for url in sorted(indexable_urls - set(urls)):
    errors.append(f'Indexable page missing from sitemap: {url}')

robots_path = DIST / 'robots.txt'
if not robots_path.is_file():
    errors.append('Missing robots.txt')
else:
    robots = RobotFileParser()
    robots.parse(robots_path.read_text().splitlines())
    if 'https://clipdock.video/sitemap-index.xml' not in (robots.site_maps() or []):
        errors.append('robots.txt must declare the production sitemap index')
    for url in sorted(indexable_urls | {'https://clipdock.video/sitemap-index.xml'}):
        if not robots.can_fetch('Googlebot', url):
            errors.append(f'robots.txt blocks Googlebot: {url}')

for url, page in parsed_pages.items():
    if url not in indexable_urls:
        if page.alternates:
            errors.append(f'Non-indexable page emits hreflang: {url}')
        continue
    languages = [lang for lang, _ in page.alternates]
    if len(languages) != len(set(languages)):
        errors.append(f'Duplicate hreflang language: {url}')
    if url not in [href for lang, href in page.alternates if lang != 'x-default']:
        errors.append(f'Missing self-referencing hreflang: {url}')
    for lang, href in page.alternates:
        if href not in indexable_urls:
            errors.append(f'Hreflang target is not indexable: {url} -> {href}')
        elif url not in [target for _, target in parsed_pages[href].alternates]:
            errors.append(f'Hreflang is not reciprocal: {url} -> {href}')
    for link in page.links & parsed_pages.keys():
        if link not in indexable_urls:
            errors.append(f'Published page links to a non-indexable page: {url} -> {link}')

home = 'https://clipdock.video/'
depth = {home: 0} if home in indexable_urls else {}
pending = deque(depth)
while pending:
    url = pending.popleft()
    for target in parsed_pages[url].links & indexable_urls:
        if target not in depth:
            depth[target] = depth[url] + 1
            pending.append(target)
for url in sorted(indexable_urls - depth.keys()):
    errors.append(f'Page is unreachable through crawlable links from the homepage: {url}')
print(json.dumps({'pages': len(pages), 'sitemap_urls': len(urls), 'sitemap_lastmod': lastmod_count, 'local_references_checked': checked, 'indexable_pages': len(indexable_urls), 'max_click_depth': max(depth.values(), default=0), 'errors': errors}, ensure_ascii=False, indent=2))
raise SystemExit(bool(errors))
