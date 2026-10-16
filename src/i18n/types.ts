export interface SiteUI {
nav: { features: string; useCases: string; faq: string; getApp: string; menu: string };
tagline: string;
tutorials: string;
header: string;
home: string;
primaryNav: string;
mobileNav: string;
footerNav: string;
skip: string;
demos: string;
chooseDemo: string;
progress: string;
demoEmptyHint: string;
retry: string;
failed: string;
demoTitles: string[];
demoDescriptions: string[];
slideTitles: string[];
carousel: string;
subtitleSteps: string;
chooseStep: string;
step: string;
pause: string;
play: string;
pauseCarousel: string;
playCarousel: string;
breadcrumb: string;
contents: string;
troubleshooting: string;
questions: string;
steps: string;
related: string;
read: string;
openImage: string;
screenshot: string;
missingScreenshot: string;
supportedPlatforms: string;
ctaTitle: string;
ctaText: string;
ctaButton: string;
toolCount: string;
indexTitle: string;
indexDescription: string;
indexHeading: string;
indexIntro: string;
categories: string;
}
export type Section = { title: string; text: string };
export interface TutorialCopy {
 title: string; description: string; intro: string;
 overview?: {
  title: string;
  sections: Array<Section & { link?: { label: string; href: string } }>;
 };
 /** Internal editorial evidence. Never include in public page props. */
 verificationNote?: string;
 /** Internal editorial evidence. Never include in public page props. */
 exampleNote?: string;
 steps: Array<Section & { sections?: Section[]; exampleUrl?: string }>;
 tips: Section[]; faq: Array<{ question: string; answer: string }>;
}
