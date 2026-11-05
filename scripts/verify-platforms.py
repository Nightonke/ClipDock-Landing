"""Verify platform choice, store destinations and app identity in the built site."""
from html.parser import HTMLParser
from pathlib import Path
import json

ROOT = Path(__file__).resolve().parents[1]
DIST = ROOT / 'dist'
STORES = json.loads((ROOT / 'src/config/store-links.json').read_text())
LOCALES = ['', 'zh-Hans', 'zh-Hant', 'ja', 'ko', 'es', 'pt-BR', 'de', 'fr']

class Page(HTMLParser):
    def __init__(self, path):
        super().__init__()
        self.main = False
        self.links = []
        self.main_links = []
        self.qr = False
        self.in_json = False
        self.json_parts = []
        self.apps = []
        self.feed(path.read_text())

    def handle_starttag(self, tag, pairs):
        attrs = dict(pairs)
        if tag == 'main': self.main = True
        if tag == 'a':
            self.links.append(attrs.get('href'))
            if self.main: self.main_links.append(attrs.get('href'))
        if tag == 'img' and attrs.get('src') == '/download-qr.svg': self.qr = True
        if tag == 'script' and attrs.get('type') == 'application/ld+json':
            self.in_json = True
            self.json_parts = []

    def handle_data(self, text):
        if self.in_json: self.json_parts.append(text)

    def handle_endtag(self, tag):
        if tag == 'main': self.main = False
        if tag == 'script' and self.in_json:
            data = json.loads(''.join(self.json_parts))
            entries = data if isinstance(data, list) else [data]
            self.apps.extend(item for item in entries if item.get('@type') == 'MobileApplication')
            self.in_json = False

def require(condition, message):
    if not condition: raise SystemExit(message)

for locale in LOCALES:
    prefix = f'/{locale}' if locale else ''
    folder = DIST / locale
    home = Page(folder / 'index.html')
    download = Page(folder / 'download/index.html')
    android_path = '/zh-Hans/android/' if locale == 'zh-Hans' else '/android/'
    for label, page in [('home', home), ('download', download)]:
        for store in ['apple', 'google']:
            require(STORES[store] in page.main_links, f'{prefix}/{label}: missing main {store} download')
        require(android_path in page.main_links, f'{prefix}/{label}: Android details unreachable')
    require(home.qr and f'{prefix}/download/' in home.main_links, f'{prefix}: QR or download choice link missing')
    require(len(home.apps) == 2, f'{prefix}: expected separate iOS and Android app descriptions')
    for app in home.apps:
        if 'Android' in app.get('operatingSystem', ''):
            require(app.get('downloadUrl') == STORES['google'], f'{prefix}: Android linked to wrong store')
            require('aggregateRating' not in app, f'{prefix}: Android must not inherit iOS rating')
            require('softwareVersion' not in app, f'{prefix}: Android version has not been verified against the release')
        else:
            require(app.get('downloadUrl') == STORES['apple'], f'{prefix}: iOS linked to wrong store')
    guide = Page(folder / 'articles/resize-video-iphone/index.html')
    require(STORES['apple'] in guide.main_links and STORES['google'] not in guide.main_links,
            f'{prefix}: iPhone instructions must retain the iOS primary download')

for locale in ['', 'zh-Hans']:
    prefix = f'/{locale}' if locale else ''
    page = Page(DIST / locale / 'android/index.html')
    require(len(page.apps) == 1, f'{prefix}/android: expected one Android app')
    app = page.apps[0]
    require(app.get('downloadUrl') == STORES['google'] and 'Android' in app.get('operatingSystem', ''), 'Invalid Android identity')
    require('aggregateRating' not in app and 'softwareVersion' not in app, 'Unverified Android store facts')
    for suffix in ['privacy', 'terms', 'delete-account']:
        require(f'{prefix}/android/{suffix}/' in page.main_links, f'{prefix}/android: missing {suffix}')

require(STORES['download'] == 'https://clipdock.video/download/', 'QR must lead to the first-party choice page')
require((DIST / 'download-qr.svg').is_file(), 'Download QR missing')
print('Platform verification passed: 9 homepages, 9 download pages, 2 Android pages, 9 iOS tutorial CTAs.')
