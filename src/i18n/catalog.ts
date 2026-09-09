import { ui as koUI } from './ko/site-ui';
import { categories as koCategories, platformNotes as koNotes } from './ko/tutorial-index';
import { tutorialCopy as koTutorials } from './ko/tutorials';
import { screenshotCopy as koScreenshots } from './ko/screenshots';
import { captions as koCaptions } from './ko/demo-captions';
import { ui as jaUI } from './ja/site-ui';
import { categories as jaCategories, platformNotes as jaNotes } from './ja/tutorial-index';
import { tutorialCopy as jaTutorials } from './ja/tutorials';
import { screenshotCopy as jaScreenshots } from './ja/screenshots';
import { captions as jaCaptions } from './ja/demo-captions';
import { ui as hantUI } from './zh-Hant/site-ui';
import { categories as hantCategories, platformNotes as hantNotes } from './zh-Hant/tutorial-index';
import { tutorialCopy as hantTutorials } from './zh-Hant/tutorials';
import { screenshotCopy as hantScreenshots } from './zh-Hant/screenshots';
import { captions as hantCaptions } from './zh-Hant/demo-captions';
import { validateCopy } from "./shared/validate";
import type { PublishedLocale } from './locales';
import type { SiteUI, TutorialCopy } from './types';
import { ui as enUI } from './en-US/site-ui';
import { ui as zhUI } from './zh-Hans/site-ui';
import { categories as enCategories, platformNotes as enNotes } from './en-US/tutorial-index';
import { categories as zhCategories, platformNotes as zhNotes } from './zh-Hans/tutorial-index';
import { tutorialCopy as enTutorials } from './en-US/tutorials';
import { tutorialCopy as zhTutorials } from './zh-Hans/tutorials';
import { screenshotCopy as enScreenshots } from './en-US/screenshots';
import { screenshotCopy as zhScreenshots } from './zh-Hans/screenshots';
import { captions as enCaptions } from './en-US/demo-captions';
import { captions as zhCaptions } from './zh-Hans/demo-captions';

export interface LanguageCatalog {
 ui: SiteUI;
 categories: Array<{ id: string; name: string; description: string }>;
 platformNotes: Record<string, string>;
 tutorialCopy: Record<string, TutorialCopy>;
 screenshotCopy: Record<string, { title: string; brief: string }>;
 captions: Record<string, string[]>;
}
export const catalogs: Record<PublishedLocale, LanguageCatalog> = {
 ko: { ui: koUI, categories: koCategories, platformNotes: koNotes, tutorialCopy: koTutorials, screenshotCopy: koScreenshots, captions: koCaptions },
 ja: { ui: jaUI, categories: jaCategories, platformNotes: jaNotes, tutorialCopy: jaTutorials, screenshotCopy: jaScreenshots, captions: jaCaptions },
 'en-US': { ui: enUI, categories: enCategories, platformNotes: enNotes, tutorialCopy: enTutorials, screenshotCopy: enScreenshots, captions: enCaptions },
 'zh-Hant': { ui: hantUI, categories: hantCategories, platformNotes: hantNotes, tutorialCopy: hantTutorials, screenshotCopy: hantScreenshots, captions: hantCaptions },
 'zh-Hans': { ui: zhUI, categories: zhCategories, platformNotes: zhNotes, tutorialCopy: zhTutorials, screenshotCopy: zhScreenshots, captions: zhCaptions },
};
export function getCatalog(locale: string): LanguageCatalog {
 const key = locale === 'en' ? 'en-US' : locale;
 if (!Object.hasOwn(catalogs, key)) throw new Error(`No published language catalog: ${locale}`);
 return catalogs[key as PublishedLocale];
}

for (const [locale, catalog] of Object.entries(catalogs)) {
 validateCopy(enUI, catalog.ui, `${locale}/site-ui`);
 validateCopy(enCategories, catalog.categories, `${locale}/tutorial-index`);
 validateCopy(enNotes, catalog.platformNotes, `${locale}/platform-notes`);
 validateCopy(enCaptions, catalog.captions, `${locale}/demo-captions`);
}
