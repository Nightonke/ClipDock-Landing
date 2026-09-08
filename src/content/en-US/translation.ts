import { tutorials, type Tutorial } from '../tutorials';

type Section = { title: string; text: string };
export const detail = (title: string, text: string): Section => ({ title, text });
export const step = (title: string, text: string, sections?: Section[]): Tutorial['steps'][number] => ({ title, text, ...(sections ? { sections } : {}) });
export const question = (question: string, answer: string) => ({ question, answer });
type Copy = Pick<Tutorial, 'title' | 'description' | 'intro' | 'steps' | 'tips' | 'faq'> & Pick<Partial<Tutorial>, 'verificationNote'>;

/** Share identifiers and evidence assets, never untranslated prose. */
export function translateTutorial(slug: string, copy: Copy): Tutorial {
 const source = tutorials.find(article => article.slug === slug);
 if (!source) throw new Error(`Unknown tutorial: ${slug}`);
 if (source.steps.length !== copy.steps.length) throw new Error(`Step count differs for ${slug}`);
 if (source.tips.length !== copy.tips.length || source.faq.length !== copy.faq.length) throw new Error(`Incomplete tips or FAQ for ${slug}`);
 copy.steps.forEach((translated, index) => {
  if ((source.steps[index].sections?.length ?? 0) !== (translated.sections?.length ?? 0)) throw new Error(`Incomplete step details for ${slug}, step ${index + 1}`);
 });
 if (source.verificationNote && !copy.verificationNote) throw new Error(`Missing verification note for ${slug}`);
 return { slug, category: source.category, screenshotsReady: source.screenshotsReady, related: source.related, ...copy,
  steps: copy.steps.map((translated, index) => ({ ...translated, image: source.steps[index].image })),
 };
}
