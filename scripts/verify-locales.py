#!/usr/bin/env python3
"""Check rendered language boundaries and reciprocal translation links after a build."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlparse
import json
import re

ROOT = Path(__file__).resolve().parents[1] / 'dist'
class Page(HTMLParser):
    def __init__(self, path):
        super().__init__()
        self.lang = ''
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
        self.feed(path.read_text())

    def handle_starttag(self, tag, pairs):
        attrs = dict(pairs)
        if tag == 'html': self.lang = attrs.get('lang', '')
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
            expected = 'en' if lang == 'en-US' else lang
            if target.lang != expected: errors.append(f'{route}: alternate language mismatch: {href}')
            if page.canonical not in target.alternates.values():
                errors.append(f'{route}: alternate is not reciprocal: {href}')

# Every published Chinese guide must now have a complete English counterpart.
chinese_articles = {route.removeprefix('/zh-Hans'): page for route, page in pages.items()
                    if route.startswith('/zh-Hans/articles/') and route != '/zh-Hans/articles/'}
english_articles = {route: page for route, page in pages.items()
                    if route.startswith('/articles/') and route != '/articles/'}
if chinese_articles.keys() != english_articles.keys():
    errors.append('English and Chinese tutorial route sets differ')
for route, source in chinese_articles.items():
    translated = english_articles.get(route)
    if translated and (translated.step_ids != source.step_ids or translated.screenshots != source.screenshots):
        errors.append(f'{route}: incomplete translated steps or screenshots')

for required in ('/', '/zh-Hans/', '/articles/', '/articles/extract-youtube-subtitles-iphone/'):
    if required not in pages or not pages[required].lang:
        errors.append(f'{required}: required localized page missing')
if (ROOT / 'zh-Hant/index.html').exists() or (ROOT / 'en-US/index.html').exists():
    errors.append('Unpublished or duplicate locale homepage generated')
print(json.dumps({'localized_pages': sum(bool(p.lang) for p in pages.values()), 'english_tutorials': len(english_articles), 'chinese_tutorials': len(chinese_articles), 'errors': errors}, indent=2))
raise SystemExit(bool(errors))
