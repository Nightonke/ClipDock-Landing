import { validateCopy } from "../i18n/shared/validate";
import { getLanguageLinks, publishedLocales, type Locale } from '../i18n/locales';
import { getCatalog } from '../i18n/catalog';
import type { TutorialCopy } from '../i18n/types';
import { tutorialStructure, screenshotAssets } from './tutorial-structure';

export interface Tutorial extends Omit<TutorialCopy, 'steps'> {
 slug: string; category: string; screenshotsReady?: boolean; related: string[];
 steps: Array<TutorialCopy['steps'][number] & { image?: string }>;
}
export function assembleTutorials(locale: string): Tutorial[] {
 const { tutorialCopy, categories, screenshotCopy } = getCatalog(locale);
 const slugs = tutorialStructure.map(article => article.slug);
 if (Object.keys(tutorialCopy).length !== slugs.length || Object.keys(tutorialCopy).some(slug => !slugs.includes(slug))) throw new Error(`Tutorial coverage differs: ${locale}`);
 return tutorialStructure.map(source => {
  const copy = tutorialCopy[source.slug];
  const fail = (field: string) => { throw new Error(`Incomplete ${locale}/${source.slug}: ${field}`); };
  if (!copy) return fail('copy');
  validateCopy({ title: 'required', description: 'required', intro: 'required', steps: [{ title: 'required', text: 'required' }], tips: [{ title: 'required', text: 'required' }], faq: [{ question: 'required', answer: 'required' }] }, copy, `${locale}/${source.slug}`);
  copy.steps.forEach((step, index) => step.sections?.forEach((section, sectionIndex) => validateCopy({ title: 'required', text: 'required' }, section, `${locale}/${source.slug}/steps/${index}/sections/${sectionIndex}`)));
  if (!categories.some(category => category.id === source.category)) fail('category');
  if (copy.steps.length !== source.steps.length) fail('steps');
  if (copy.tips.length !== source.tipCount || copy.faq.length !== source.faqCount) fail('tips/FAQ');
  if (copy.exampleNote !== undefined) validateCopy({ exampleNote: 'required' }, copy, `${locale}/${source.slug}/example note`);
  if (source.requiresVerificationNote && !copy.verificationNote) fail('verification note');
  const steps = copy.steps.map((step, index) => {
   const evidence = source.steps[index];
   if ((step.sections?.length ?? 0) !== evidence.sectionCount) fail(`step ${index + 1} details`);
   if (evidence.image && (!screenshotAssets[evidence.image] || !screenshotCopy[evidence.image]?.title)) fail(`screenshot ${evidence.image}`);
   return { ...step, image: evidence.image };
  });
  return { ...copy, slug: source.slug, category: source.category, screenshotsReady: source.screenshotsReady, related: source.related, steps };
 });
}
const articles = new Map<string, Tutorial[]>(publishedLocales.map(locale => [locale, assembleTutorials(locale)]));
export const getTutorials = (locale: Locale) => articles.get(locale) ?? [];
export const getCategories = (locale: Locale) => getCatalog(locale).categories;
export const getPlatformNote = (locale: Locale, category: string) => getCatalog(locale).platformNotes[category];
export const getScreenshot = (locale: string, id: string) => {
 const asset = screenshotAssets[id];
 const copy = getCatalog(locale).screenshotCopy[id];
 if (!asset || !copy?.title) throw new Error(`Missing screenshot: ${locale}/${id}`);
 return { ...asset, ...copy };
};
export const hasTutorial = (locale: Locale, slug: string) => getTutorials(locale).some(article => article.slug === slug);
export const tutorialLanguageLinks = (locale: Locale, slug?: string) => getLanguageLinks(locale, slug ? `articles/${slug}` : 'articles').filter(link => slug ? hasTutorial(link.locale, slug) : getTutorials(link.locale).length > 0);
// Compatibility for tooling that still consumes the original Chinese collection.
export const tutorials = getTutorials('zh-Hans');
export const categories = getCategories('zh-Hans');
export const screenshotBriefs = Object.fromEntries(Object.keys(screenshotAssets).map(id => [id, getScreenshot('zh-Hans', id)]));
