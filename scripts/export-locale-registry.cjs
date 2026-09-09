#!/usr/bin/env node
// Read the exact registry used by Astro for build-output verification.
const { readFileSync } = require('node:fs');
const ts = require('typescript');
require.extensions['.ts'] = (module, filename) => module._compile(ts.transpileModule(readFileSync(filename, 'utf8'), {
 compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
}).outputText, filename);
const { locales, publishedLocales, defaultLocale, localeMeta } = require('../src/i18n/locales.ts');
const { tutorialStructure } = require('../src/content/tutorial-structure.ts');
process.stdout.write(JSON.stringify({ locales, publishedLocales, defaultLocale, localeMeta,
 articles: tutorialStructure.map(({ slug, screenshotsReady }) => ({ slug, screenshotsReady })),
}));
