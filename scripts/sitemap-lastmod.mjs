import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { existsSync, readFileSync, statSync } from 'node:fs';
import { createRequire } from 'node:module';
import path from 'node:path';
import ts from 'typescript';

const locales = ['en-US', 'zh-Hans', 'zh-Hant', 'ja', 'ko', 'es', 'pt-BR', 'de', 'fr'];
const digest = value => createHash('sha256').update(value).digest('hex');
const stable = value => JSON.stringify(value, (_, item) => item && !Array.isArray(item) && typeof item === 'object'
 ? Object.fromEntries(Object.entries(item).sort(([a], [b]) => a.localeCompare(b))) : item);
const pick = (value = {}, keys) => Object.fromEntries(keys.filter(key => value[key] !== undefined).map(key => [key, value[key]]));
const route = (locale, page = '') => `${locale === 'en-US' ? '/' : `/${locale}/`}${page ? `${page}/` : ''}`;
const git = (root, args) => execFileSync('git', args, { cwd: root, encoding: 'utf8', maxBuffer: 32 * 1024 * 1024 }).trim();

/** Data modules are evaluated from each Git revision, so edits to one article in
 * a shared catalog do not change the dates of every article in that file. */
export function createRevisionReader(root, revision, cache = { sources: new Map(), compiled: new Map() }) {
 const working = revision === undefined;
 const files = new Map();
 if (!working) for (const record of git(root, ['ls-tree', '-r', '-z', revision, '--', 'src', 'public/assets']).split('\0')) {
  if (!record) continue;
  const [metadata, name] = record.split('\t');
  files.set(name, metadata.split(' ')[2]);
 }
 const modules = new Map();
 const externalRequire = createRequire(path.join(root, 'package.json'));
 const has = filename => working ? existsSync(path.join(root, filename)) && statSync(path.join(root, filename)).isFile() : files.has(filename);
 const read = filename => {
  if (!has(filename)) throw new Error(`Missing source: ${filename}`);
  if (working) return readFileSync(path.join(root, filename), 'utf8');
  const blob = files.get(filename);
  if (!cache.sources.has(blob)) cache.sources.set(blob, git(root, ['cat-file', 'blob', blob]));
  return cache.sources.get(blob);
 };
 const asset = filename => {
  const relative = `public${filename}`;
  if (!working) return files.get(relative);
  if (!has(relative)) return undefined;
  const data = readFileSync(path.join(root, relative));
  cache.objectFormat ??= git(root, ['rev-parse', '--show-object-format']);
  return createHash(cache.objectFormat).update(`blob ${data.length}\0`).update(data).digest('hex');
 };
 const load = filename => {
  const resolved = [filename, `${filename}.ts`, `${filename}/index.ts`, `${filename}.json`].find(has);
  if (!resolved) throw new Error(`Missing source: ${filename}`);
  if (modules.has(resolved)) return modules.get(resolved).exports;
  const source = read(resolved);
  const module = { exports: {} };
  modules.set(resolved, module);
  if (resolved.endsWith('.json')) return module.exports = JSON.parse(source);
  const key = digest(source);
  if (!cache.compiled.has(key)) cache.compiled.set(key, ts.transpileModule(source, {
   compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  }).outputText);
  const require = name => {
   if (name.startsWith('.')) return load(path.posix.normalize(path.posix.join(path.posix.dirname(resolved), name)));
   if (name.startsWith('@/')) return load(`src/${name.slice(2)}`);
   if (name.startsWith('@config/')) return load(`src/config/${name.slice(8)}`);
   return externalRequire(name);
  };
  new Function('require', 'module', 'exports', cache.compiled.get(key))(require, module, module.exports);
  return module.exports;
 };
 return { read, has, load, asset };
}

function publicTemplate(source) {
 // Styling, browser scripts, comments and formatting do not reset lastmod.
 const [_, frontmatter = '', markup = source] = source.match(/^---\s*\n([\s\S]*?)\n---([\s\S]*)$/) ?? [];
 const code = ts.transpileModule(frontmatter, { compilerOptions: { target: ts.ScriptTarget.ES2022, removeComments: true } }).outputText;
 return code + markup.replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, '')
  .replace(/<script\b([^>]*)>[\s\S]*?<\/script>/gi, (source, attributes) => attributes.includes('application/ld+json') ? source : '')
  .replace(/<!--[\s\S]*?-->/g, '').replace(/\s+/g, ' ').trim();
}

export function collectPageSnapshots(reader) {
 const result = new Map();
 if (!reader.has('src/content/tutorial-structure.ts')) return result;
 const { tutorialStructure: structure, screenshotAssets } = reader.load('src/content/tutorial-structure.ts');
 const registry = reader.load('src/i18n/locales.ts');
 const languages = (registry.publishedLocales ?? locales).map(locale => [locale, registry.localeMeta?.[locale]]);
 const template = filename => reader.has(filename) ? publicTemplate(reader.read(filename)) : '';
 const sharedTemplates = ['src/components/sections/SiteHeader.astro', 'src/components/sections/SiteFooter.astro'];
 const articleTemplates = ['src/layouts/TutorialLayout.astro', 'src/layouts/TutorialArticle.astro', 'src/components/TutorialScreenshot.astro', 'src/components/OrangePhoneFrame.astro'];
 const homeTemplates = ['src/layouts/Layout.astro', 'src/layouts/ClipDockLanding.astro', 'src/components/HeroDemos.astro', 'src/components/SubtitleCarousel.astro'];
 const indexTemplates = ['src/layouts/TutorialLayout.astro', 'src/layouts/TutorialIndex.astro'];
 const legalTemplates = ['src/layouts/Layout.astro', 'src/layouts/LegalPage.astro'];
 const androidTemplates = ['src/layouts/Layout.astro', 'src/layouts/AndroidLegalPage.astro'];
 const android = reader.has('src/i18n/android-legal.ts') ? reader.load('src/i18n/android-legal.ts') : undefined;
 const templates = files => files.map(template);
 const usedUI = (ui, files) => pick(ui, [...new Set(files.flatMap(file => [...template(file).matchAll(/\bui\.(\w+)/g)].map(match => match[1])))]);
 const media = value => [...new Set((stable(value).match(/\/assets\/[^"\s]+\.(?:webp|png|jpg|mp4)/g) ?? []))].map(src => [src, reader.asset(src)]);
 for (const locale of locales) {
  const directory = `src/i18n/${locale}`;
  if (!reader.has(`${directory}/tutorials/index.ts`)) continue;
  const { tutorialCopy } = reader.load(`${directory}/tutorials/index.ts`);
  const { ui } = reader.load(`${directory}/site-ui.ts`);
  const { categories, platformNotes } = reader.load(`${directory}/tutorial-index.ts`);
  const { screenshotCopy } = reader.load(`${directory}/screenshots.ts`);
  const { landing } = reader.load(`${directory}/landing.ts`);
  const { common } = reader.load(`${directory}/common.ts`);
  const meta = reader.load(`${directory}/meta.ts`).meta;
  const shared = { templates: templates(sharedTemplates), ui: usedUI(ui, sharedTemplates),
   app: pick(landing, ['name', 'shortName', 'logo', 'storeLinks']), labels: pick(landing.labels, ['privacy', 'terms']),
   common: pick(common, ['home', 'breadcrumb', 'language']), meta, languages };
  const guideFiles = ['src/components/DownloadGuides.astro'];
  const guidesFor = files => {
   if (!files.some(file => template(file).includes('<DownloadGuides '))) return undefined;
   const { downloadGuideSlugs } = reader.load('src/content/download-guides.ts');
   const copy = reader.load('src/i18n/download-guides.ts').downloadGuideCopy[locale];
   return { copy, templates: templates(guideFiles), guides: downloadGuideSlugs.map(slug => ({ slug, ...pick(tutorialCopy[slug], ['title']) })) };
  };
  const add = (page, content) => result.set(route(locale, page), digest(stable(content)));
  const home = reader.load(`${directory}/home.ts`);
  const homeCopy = { ...home, ui: usedUI(home.ui, ['src/layouts/ClipDockLanding.astro']) };
  const captions = reader.load(`${directory}/demo-captions.ts`).captions;
  const homeMedia = [...media([homeCopy, templates(homeTemplates)]), ...home.featureSections.filter(feature => feature.video).flatMap(feature =>
   ['mp4', 'jpg'].map(extension => { const src = `/assets/demos/${feature.video}.${extension}`; return [src, reader.asset(src)]; }))];
  add('', { shared, templates: templates(homeTemplates), home: homeCopy, captions, guides: guidesFor(homeTemplates),
   app: pick(landing, ['seoTitle', 'metaDescription', 'description', 'version', 'rating']),
   ui: usedUI(ui, homeTemplates), media: homeMedia });
  add('articles', { shared, templates: templates(indexTemplates), ui: usedUI(ui, indexTemplates), categories,
   guides: guidesFor(indexTemplates), articles: structure.map(article => ({ ...pick(article, ['slug', 'category', 'screenshotsReady']), ...pick(tutorialCopy[article.slug], ['title', 'description']) })) });
  for (const article of structure) {
   const raw = tutorialCopy[article.slug];
   if (!raw || !article.screenshotsReady) continue;
   const copy = pick(raw, ['title', 'description', 'intro', 'steps', 'tips', 'faq', 'overview']);
   const markup = template('src/layouts/TutorialArticle.astro');
   if (markup.includes('article.exampleNote')) copy.exampleNote = raw.exampleNote;
   if (markup.includes('article.verificationNote')) copy.verificationNote = raw.verificationNote;
   const images = article.steps.filter(step => step.image).map(step => ({
    ...screenshotAssets[step.image], title: screenshotCopy[step.image].title,
   }));
   add(`articles/${article.slug}`, { shared, templates: templates(articleTemplates), copy, images, media: media(images),
    category: categories.find(category => category.id === article.category)?.name, platformNote: platformNotes[article.category],
    ui: usedUI(ui, articleTemplates), related: article.related.map(slug => ({ slug, ...pick(tutorialCopy[slug], ['title', 'description']) })) });
  }
  if (reader.has(`${directory}/legal.ts`)) {
   const { legal } = reader.load(`${directory}/legal.ts`);
   for (const page of ['privacy', 'terms']) add(page, { shared, templates: templates(legalTemplates), ui: usedUI(ui, legalTemplates),
    platformNotice: template('src/layouts/LegalPage.astro').includes('platformNotices') ? android?.platformNotices?.[locale] : undefined,
    document: legal[page], navigation: [legal.privacy.title, legal.terms.title],
    date: pick(legal, ['navigationLabel', 'effectiveDateLabel', 'effectiveDate', 'effectiveDateText']) });
  }
  const androidCopy = android?.androidLegalContent?.[locale];
  if (androidCopy) {
   const pages = ['privacy', 'terms', 'delete-account'];
   for (const page of pages) add(`android/${page}`, {
    shared: { ...shared, languages: languages.filter(([language]) => android.androidLegalLocales.includes(language)) },
    templates: templates(androidTemplates), document: androidCopy[page],
    navigation: pages.map(key => androidCopy[key].title),
    date: pick(androidCopy, ['label', 'effectiveDateLabel', 'effectiveDateText']),
   });
  }
 }
 return result;
}

export function buildLastmodMap({ root, collect = collectPageSnapshots }) {
 if (git(root, ['rev-parse', '--is-shallow-repository']) === 'true') throw new Error('Accurate sitemap lastmod needs complete Git history; check out with fetch-depth: 0.');
 const commits = git(root, ['log', '--first-parent', '--format=%H %cI']).split('\n').map(line => {
  const [revision, timestamp] = line.split(' ');
  return { revision, timestamp: new Date(timestamp).toISOString() };
 });
 const cache = { sources: new Map(), compiled: new Map() };
 const current = collect(createRevisionReader(root, undefined, cache));
 const pending = new Map(current);
 const dates = new Map();
 const previous = new Map();
 const changedFiles = [...new Set([
  ...git(root, ['diff', 'HEAD', '--name-only', '-z', '--', 'src', 'public/assets']).split('\0'),
  ...git(root, ['ls-files', '-o', '-z', '--exclude-standard', '--', 'src', 'public/assets']).split('\0'),
 ].filter(Boolean))];
 const existing = changedFiles.filter(file => existsSync(path.join(root, file)));
 // Only local previews use file times. Committed builds use the content-changing
 // commit, including staged changes and full history in CI.
 const workingTime = existing.length ? new Date(Math.max(...existing.map(file => statSync(path.join(root, file)).mtimeMs))).toISOString() : undefined;
 for (const { revision, timestamp } of commits) {
  const snapshot = collect(createRevisionReader(root, revision, cache));
  for (const [page, fingerprint] of pending) {
   if (snapshot.get(page) !== fingerprint) {
    const lastmod = previous.get(page) ?? workingTime;
    if (!lastmod) throw new Error(`Cannot establish content timestamp for ${page}`);
    dates.set(page, lastmod);
    pending.delete(page);
   } else previous.set(page, timestamp);
  }
  if (!pending.size) break;
 }
 for (const page of pending.keys()) dates.set(page, previous.get(page));
 return dates;
}

export function sitemapLastmod(root) {
 let dates;
 return {
  integration: { name: 'clipdock:sitemap-lastmod', hooks: { 'astro:build:done': ({ logger }) => {
   dates = buildLastmodMap({ root });
   if (!dates.size || [...dates.values()].some(date => !date || !Number.isFinite(Date.parse(date)))) throw new Error('Incomplete sitemap content dates');
   logger.info(`Resolved content modification dates for ${dates.size} pages from Git history.`);
  } } },
  serialize: item => {
   const lastmod = dates?.get(new URL(item.url).pathname);
   if (!lastmod) throw new Error(`Missing sitemap lastmod: ${item.url}`);
   return { ...item, lastmod };
  },
 };
}
