import { test } from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, rmSync, statSync, cpSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { buildLastmodMap, createRevisionReader } from '../scripts/sitemap-lastmod.mjs';

const git = (root, ...args) => execFileSync('git', args, { cwd: root, stdio: 'pipe' });
const write = (root, file, text) => { mkdirSync(path.dirname(path.join(root, file)), { recursive: true }); writeFileSync(path.join(root, file), text); };
function fixture(t) {
 const root = mkdtempSync(path.join(tmpdir(), 'clipdock-lastmod-'));
 t.after(() => rmSync(root, { recursive: true, force: true }));
 git(root, 'init', '-q');
 git(root, 'config', 'user.name', 'Sitemap Test');
 git(root, 'config', 'user.email', 'sitemap@example.invalid');
 write(root, 'package.json', '{}');
 const articles = ['alpha', 'beta'].map(slug => ({ slug, category: 'platform', screenshotsReady: true, related: [], steps: slug === 'alpha' ? [{ image: 'a' }] : [] }));
 write(root, 'src/content/tutorial-structure.ts', `export const tutorialStructure=${JSON.stringify(articles)}; export const screenshotAssets={a:{src:'/assets/a.png'}};`);
 write(root, 'src/i18n/locales.ts', "export const publishedLocales=['en-US']; export const localeMeta={'en-US':{htmlLang:'en'}};");
 write(root, 'src/i18n/en-US/meta.ts', "export const meta={htmlLang:'en'};");
 write(root, 'src/i18n/en-US/common.ts', "export const common={home:'Home',breadcrumb:'Breadcrumb',language:'Language'};");
 write(root, 'src/i18n/en-US/site-ui.ts', "export const ui={header:'Header',read:'Read'};");
 write(root, 'src/i18n/en-US/landing.ts', "export const landing={name:'App',shortName:'App',labels:{privacy:'Privacy',terms:'Terms'}};");
 write(root, 'src/i18n/en-US/home.ts', "export const featureSections=[]; export const ui={heroLine1:'Download videos'};");
 write(root, 'src/i18n/en-US/demo-captions.ts', 'export const captions={};');
 write(root, 'src/i18n/en-US/tutorial-index.ts', "export const categories=[{id:'platform',name:'Downloads'}]; export const platformNotes={platform:'Available resources vary'};");
 write(root, 'src/i18n/en-US/screenshots.ts', "export const screenshotCopy={a:{title:'Copy a link',brief:'Internal screenshot instructions'}};");
 write(root, 'src/i18n/en-US/tutorials/index.ts', "export const tutorialCopy={alpha:{title:'Alpha',description:'Alpha guide',intro:'Copy a link',exampleNote:'Internal test record'},beta:{title:'Beta',description:'Beta guide',intro:'Download a video'}};");
 write(root, 'src/i18n/en-US/legal.ts', "export const legal={privacy:{title:'Privacy',content:'Privacy text'},terms:{title:'Terms',content:'Terms text'}};");
 write(root, 'src/layouts/TutorialArticle.astro', '<main>{article.intro}</main>\n<style>.main { color: red; }</style>');
 write(root, 'src/layouts/ClipDockLanding.astro', '<main>{ui.heroLine1}</main>');
 write(root, 'public/assets/a.png', 'image-one');
 return root;
}
function commit(root, date) {
 git(root, 'add', '.');
 execFileSync('git', ['commit', '-qm', `Content ${date}`], { cwd: root, env: { ...process.env, GIT_AUTHOR_DATE: date, GIT_COMMITTER_DATE: date }, stdio: 'pipe' });
}
const replace = (root, file, before, after) => write(root, file, readFileSync(path.join(root, file), 'utf8').replace(before, after));
const catalog = 'src/i18n/en-US/tutorials/index.ts';
const first = '2020-01-01T00:00:00.000Z';
const second = '2020-02-01T00:00:00.000Z';

test('a change to one tutorial in a shared file updates that tutorial and its directory only', t => {
 const root = fixture(t); commit(root, first);
 replace(root, catalog, 'Alpha guide', 'Updated Alpha guide'); commit(root, second);
 const dates = buildLastmodMap({ root });
 assert.equal(dates.get('/articles/alpha/'), second);
 assert.equal(dates.get('/articles/'), second);
 assert.equal(dates.get('/articles/beta/'), first);
 assert.equal(dates.get('/'), first);
 assert.deepEqual(buildLastmodMap({ root }), dates);
});

test('internal notes, image briefs, comments and styling do not refresh public content dates', t => {
 const root = fixture(t); commit(root, first);
 replace(root, catalog, 'Internal test record', 'A different internal record');
 replace(root, 'src/i18n/en-US/screenshots.ts', 'Internal screenshot instructions', 'New internal brief');
 replace(root, 'src/layouts/TutorialArticle.astro', 'red', 'blue');
 const template = 'src/layouts/TutorialArticle.astro';
 write(root, template, readFileSync(path.join(root, template), 'utf8') + '\n<!-- Internal production note -->');
 write(root, 'src/styles/example.css', 'body { color: green; }');
 commit(root, second);
 assert.ok([...buildLastmodMap({ root }).values()].every(date => date === first));
});

test('image bytes update only the page that uses the image', t => {
 const root = fixture(t); commit(root, first);
 write(root, 'public/assets/a.png', 'image-two'); commit(root, second);
 const dates = buildLastmodMap({ root });
 assert.equal(dates.get('/articles/alpha/'), second);
 assert.equal(dates.get('/articles/beta/'), first);
 assert.equal(dates.get('/articles/'), first);
 const head = git(root, 'rev-parse', 'HEAD').toString().trim();
 assert.equal(createRevisionReader(root).asset('/assets/a.png'), createRevisionReader(root, head).asset('/assets/a.png'));
});

test('changing privacy prose keeps the terms date intact', t => {
 const root = fixture(t); commit(root, first);
 replace(root, 'src/i18n/en-US/legal.ts', 'Privacy text', 'Updated privacy text'); commit(root, second);
 const dates = buildLastmodMap({ root });
 assert.equal(dates.get('/privacy/'), second);
 assert.equal(dates.get('/terms/'), first);
});

test('a translated tutorial change does not refresh other languages', t => {
 const root = fixture(t);
 cpSync(path.join(root, 'src/i18n/en-US'), path.join(root, 'src/i18n/zh-Hans'), { recursive: true });
 write(root, 'src/i18n/locales.ts', "export const publishedLocales=['en-US','zh-Hans']; export const localeMeta={'en-US':{htmlLang:'en'},'zh-Hans':{htmlLang:'zh-Hans'}};");
 commit(root, first);
 replace(root, 'src/i18n/zh-Hans/tutorials/index.ts', 'Alpha guide', 'Alpha 中文教程'); commit(root, second);
 const dates = buildLastmodMap({ root });
 assert.equal(dates.get('/zh-Hans/articles/alpha/'), second);
 assert.equal(dates.get('/articles/alpha/'), first);
 assert.equal(dates.get('/zh-Hans/articles/beta/'), first);
});

test('structured data and shared content templates update affected pages', t => {
 const root = fixture(t); commit(root, first);
 const file = 'src/layouts/TutorialArticle.astro';
 write(root, file, readFileSync(path.join(root, file), 'utf8') + '\n<script type="application/ld+json">{"@type":"Article"}</script>');
 commit(root, second);
 const dates = buildLastmodMap({ root });
 assert.equal(dates.get('/articles/alpha/'), second);
 assert.equal(dates.get('/articles/beta/'), second);
 assert.equal(dates.get('/privacy/'), first);
});

test('local content previews use the edit time, including staged changes', t => {
 const root = fixture(t); commit(root, first);
 replace(root, catalog, 'Alpha guide', 'Preview Alpha guide');
 git(root, 'add', catalog);
 const editTime = new Date(statSync(path.join(root, catalog)).mtimeMs).toISOString();
 assert.equal(buildLastmodMap({ root }).get('/articles/alpha/'), editTime);
 assert.equal(buildLastmodMap({ root }).get('/articles/beta/'), first);
});

test('shallow checkouts fail instead of inventing modification dates', t => {
 const root = fixture(t); commit(root, first);
 const clone = path.join(root, 'shallow');
 execFileSync('git', ['clone', '-q', '--depth=1', pathToFileURL(root).href, clone], { stdio: 'pipe' });
 assert.throws(() => buildLastmodMap({ root: clone }), /fetch-depth: 0/);
});
