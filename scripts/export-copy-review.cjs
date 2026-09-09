#!/usr/bin/env node
// Export effective published copy, without historical marketing/legal drafts or asset coordinates.
const { readFileSync } = require('node:fs');
const path = require('node:path');
const ts = require('typescript');
require.extensions['.ts'] = (module, filename) => module._compile(ts.transpileModule(readFileSync(filename, 'utf8'), {
 compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
}).outputText, filename);
const { publishedLocales } = require('../src/i18n/locales.ts');
const locale = process.argv[2];
if (!publishedLocales.includes(locale)) {
 process.stderr.write(`Choose a published language: ${publishedLocales.join(', ')}\n`);
 process.exit(1);
}
const load = name => require(path.resolve(__dirname, `../src/i18n/${locale}/${name}.ts`));
const { landing } = load('landing');
const { getCatalog } = require('../src/i18n/catalog.ts');
const catalog = getCatalog(locale);
const { assembleTutorials } = require('../src/content/localized-tutorials.ts');
const articles = assembleTutorials(locale);
const imageIds = new Set(articles.flatMap(a => a.steps.map(s => s.image).filter(Boolean)));
const metadataKeys = ['name', 'shortName', 'description', 'seoTitle', 'metaDescription', 'keywords', 'labels'];
const review = {
 locale,
 metadata: Object.fromEntries(metadataKeys.map(key => [key, landing[key]])),
 home: load('home'), common: load('common').common, ui: catalog.ui,
 errors: load('errors').notFound,
 categories: catalog.categories, platformNotes: catalog.platformNotes,
 tutorials: catalog.tutorialCopy,
 screenshots: Object.fromEntries([...imageIds].map(id => [id, catalog.screenshotCopy[id]])),
 demoCaptions: catalog.captions,
};
process.stdout.write(JSON.stringify(review, null, 2) + '\n');
