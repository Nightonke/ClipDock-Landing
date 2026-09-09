const { test } = require('node:test');
const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const ts = require('typescript');

// Load the same TypeScript catalogs used by Astro, without starting the website.
require.extensions['.ts'] = (module, filename) => module._compile(ts.transpileModule(readFileSync(filename, 'utf8'), {
 compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
}).outputText, filename);
const { catalogs, getCatalog } = require('../src/i18n/catalog.ts');
const { assembleTutorials } = require('../src/content/localized-tutorials.ts');
const { tutorialStructure } = require('../src/content/tutorial-structure.ts');
const { validateCopy } = require('../src/i18n/shared/validate.ts');
const { demoTimings } = require('../src/config/demo-timings.ts');
const { captionAt } = require('../src/config/demoCaptions.ts');
const { homeContent } = require('../src/i18n/home/index.ts');
const { publishedLocales, localeMeta, getLanguageLinks } = require('../src/i18n/locales.ts');
const { headingParts } = require('../src/lib/heading-parts.ts');
const { legalContent } = require('../src/i18n/legal.ts');

test('every published catalog covers the same tutorials and uses its own screenshot titles', () => {
 for (const [locale, catalog] of Object.entries(catalogs)) {
  const articles = assembleTutorials(locale);
  assert.deepEqual(articles.map(a => a.slug), tutorialStructure.map(a => a.slug));
  for (const article of articles) for (const step of article.steps) if (step.image) assert.ok(catalog.screenshotCopy[step.image].title.trim());
 }
 assert.throws(() => getCatalog('__unregistered_test_locale__'), /No published language catalog/);
});

test('missing translation, verification limit, or screenshot title blocks assembly', () => {
 const catalog = catalogs['en-US'];
 const source = tutorialStructure[0];
 const required = source.requiresVerificationNote;
 const original = catalog.tutorialCopy[source.slug];
 try {
  delete catalog.tutorialCopy[source.slug];
  assert.throws(() => assembleTutorials('en-US'), /coverage differs/);
  catalog.tutorialCopy[source.slug] = { ...original, verificationNote: undefined };
  source.requiresVerificationNote = true;
  assert.throws(() => assembleTutorials('en-US'), /verification note/);
 } finally { catalog.tutorialCopy[source.slug] = original; source.requiresVerificationNote = required; }
 const image = source.steps.find(s => s.image).image;
 const screenshot = catalog.screenshotCopy[image];
 try {
  delete catalog.screenshotCopy[image];
  assert.throws(() => assembleTutorials('en-US'), /screenshot/);
 } finally { catalog.screenshotCopy[image] = screenshot; }
});

test('blank text and missing nested UI labels are rejected', () => {
 assert.throws(() => validateCopy({ nav: { home: 'Home' } }, { nav: {} }, 'copy'), /Missing key/);
 assert.throws(() => validateCopy({ heading: 'Title' }, { heading: '  ' }, 'copy'), /Missing text/);
});

test('each language keeps caption timing and end boundaries on local and CDN URLs', () => {
 for (const [locale, catalog] of Object.entries(catalogs)) for (const [src, cues] of Object.entries(demoTimings)) {
  assert.equal(catalog.captions[src].length, cues.length);
  cues.forEach((cue, index) => assert.equal(captionAt(`https://cdn.example/releases/test${src}`, cue.start, 'fallback', locale), catalog.captions[src][index]));
  assert.equal(captionAt(src, cues.at(-1).end, 'fallback', locale), 'fallback');
 }
});


test('published locale registries and language links stay in sync', () => {
 assert.deepEqual(Object.keys(catalogs).sort(), [...publishedLocales].sort());
 assert.deepEqual(Object.keys(homeContent).sort(), [...publishedLocales].sort());
 for (const locale of publishedLocales) {
  assert.match(localeMeta[locale].ogLocale, /^[a-z]{2}_[A-Z]{2}$/);
  const links = getLanguageLinks(locale, 'articles/example');
  assert.equal(links.length, publishedLocales.length);
  assert.equal(links.filter(link => link.isActive).length, 1);
  assert.ok(links.every(link => link.href.endsWith('/articles/example/')));
  assert.deepEqual(homeContent[locale].tools.map(tool => tool.slug), homeContent['en-US'].tools.map(tool => tool.slug));
 }
 assert.equal(localeMeta['zh-Hant'].ogLocale, 'zh_TW');
 assert.equal(localeMeta['zh-Hant'].htmlLang, 'zh-Hant');
 assert.deepEqual(Object.keys(legalContent).sort(), [...publishedLocales].sort());
 assert.equal(localeMeta.ja.ogLocale, 'ja_JP');
 assert.equal(localeMeta.ja.htmlLang, 'ja');
 assert.equal(localeMeta.ja.label, '日本語');
});

test('Japanese prose is translated independently, including captions and legal documents', () => {
 const check = (source, translated, path = '') => {
  if (typeof source === 'string') {
   // Japanese shares kanji with Chinese: compare whole source sentences, not characters.
   if (/[。？！]/.test(source) && /[\u3400-\u9fff]/.test(source)) assert.notEqual(translated, source, path);
  } else if (source && typeof source === 'object') {
   for (const [key, value] of Object.entries(source)) check(value, translated?.[key], `${path}/${key}`);
  }
 };
 check(catalogs['zh-Hans'], catalogs.ja, 'catalog');
 check(homeContent['zh-Hans'], homeContent.ja, 'home');
 check(legalContent['zh-Hans'], legalContent.ja, 'legal');
 for (const page of ['privacy', 'terms']) {
  assert.ok(legalContent.ja[page].content.length > 1000);
  assert.doesNotMatch(legalContent.ja[page].content, /\]\(\/zh-/);
 }
});

test('translations preserve placeholders and media UI list lengths', () => {
 const source = catalogs['en-US'].ui;
 for (const catalog of Object.values(catalogs)) {
  for (const key of ['toolCount', 'draftCount']) {
   assert.deepEqual(catalog.ui[key].match(/\{[a-z]+\}/g), source[key].match(/\{[a-z]+\}/g));
  }
  for (const key of ['demoTitles', 'demoDescriptions', 'slideTitles']) assert.equal(catalog.ui[key].length, source[key].length);
 }
});

test('Chinese heading segmentation preserves text, spaces, punctuation and regional terms', () => {
 for (const [locale, texts] of Object.entries({
  'zh-Hans': ['如何将视频转为实况照片？', 'X（Twitter）与 B 站 UP 主', '（链接）  ClipDock'],
  'zh-Hant': ['如何將影片轉為實況照片？', 'X（Twitter）與 B 站 UP 主', '「影隨存」  連結與剪貼簿'],
 })) for (const text of texts) assert.equal(headingParts(text, locale).join(''), text);
 const words = headingParts('影隨存連結與實況照片', 'zh-Hant');
 for (const word of ['影隨存', '連結', '實況照片']) assert.ok(words.includes(word));
});
