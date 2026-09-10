import * as es from "../es/home";
import * as ko from "../ko/home";
import * as ja from "../ja/home";
import { validateCopy } from "../shared/validate";
import * as zhHant from '../zh-Hant/home';
import * as zhHans from '../zh-Hans/home';
import * as enUS from '../en-US/home';
import type { HomeFeatures, HomeTools } from './types';
import type { PublishedLocale } from '../locales';

type HomeContent = {
 capabilities: string[]; featureSections: HomeFeatures; tools: HomeTools;
 faqs: Array<{ question: string; answer: string }>;
 ui: Record<keyof typeof zhHans.ui, string>;
};
export const homeContent: Record<PublishedLocale, HomeContent> = {
 es, ko, ja, 'zh-Hant': zhHant, 'zh-Hans': zhHans, 'en-US': enUS,
};

for (const [locale, content] of Object.entries(homeContent)) {
 validateCopy(enUS.ui, content.ui, `${locale}/home/ui`);
 validateCopy([{ question: 'required', answer: 'required' }], content.faqs, `${locale}/home/faqs`);
 validateCopy([{ title: 'required', description: 'required' }], content.tools, `${locale}/home/tools`);
 validateCopy([{ title: 'required', description: 'required', kicker: 'required', points: ['required'] }], content.featureSections, `${locale}/home/features`);
 validateCopy(['required'], content.capabilities, `${locale}/home/capabilities`);
}
