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
require('../src/i18n/home/index.ts');

test('every published catalog covers the same tutorials and uses its own screenshot titles', () => {
 for (const [locale, catalog] of Object.entries(catalogs)) {
  const articles = assembleTutorials(locale);
  assert.deepEqual(articles.map(a => a.slug), tutorialStructure.map(a => a.slug));
  for (const article of articles) for (const step of article.steps) if (step.image) assert.ok(catalog.screenshotCopy[step.image].title.trim());
 }
 assert.throws(() => getCatalog('fr-FR'), /No published language catalog/);
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
