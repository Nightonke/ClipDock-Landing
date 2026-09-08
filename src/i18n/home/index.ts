import * as zhHans from './zh-Hans';
import * as enUS from './en-US';
import type { HomeFeatures, HomeTools } from './types';
import type { PublishedLocale } from '../locales';

type HomeContent = {
 capabilities: string[]; featureSections: HomeFeatures; tools: HomeTools;
 faqs: Array<{ question: string; answer: string }>;
 ui: Record<keyof typeof zhHans.ui, string>;
};
export const homeContent: Record<PublishedLocale, HomeContent> = {
 'zh-Hans': zhHans, 'en-US': enUS,
};
