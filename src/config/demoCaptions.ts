import { captions as koCaptions } from "../i18n/ko/demo-captions";
import { captions as jaCaptions } from "../i18n/ja/demo-captions";
import { captions as enCaptions } from '../i18n/en-US/demo-captions';
import { captions as hantCaptions } from '../i18n/zh-Hant/demo-captions';
import { captions as zhCaptions } from '../i18n/zh-Hans/demo-captions';
import { demoTimings } from './demo-timings';
import type { PublishedLocale } from '../i18n/locales';

const captions: Record<PublishedLocale, Record<string, string[]>> = { 'en-US': enCaptions, 'zh-Hans': zhCaptions, 'zh-Hant': hantCaptions, ja: jaCaptions, ko: koCaptions };
export interface DemoCaption { start: number; end: number; text: string }
for (const [locale, copy] of Object.entries(captions)) {
 for (const [src, cues] of Object.entries(demoTimings)) {
  if (copy[src]?.length !== cues.length || copy[src].some(text => !text.trim())) throw new Error(`Incomplete demo captions: ${locale}/${src}`);
 }
}
export const demoCaptions: Record<string, DemoCaption[]> = Object.fromEntries(Object.entries(demoTimings).map(([src, cues]) => [src, cues.map((cue, i) => ({ ...cue, text: zhCaptions[src][i] }))]));
export function captionAt(src: string, time: number, fallback: string, locale = 'zh-Hans'): string {
 const pathname = new URL(src, 'https://clipdock.video').pathname;
 const assetIndex = pathname.indexOf('/assets/');
 const key = assetIndex >= 0 ? pathname.slice(assetIndex) : pathname;
 const index = demoTimings[key]?.findIndex(cue => time >= cue.start && time < cue.end) ?? -1;
 if (index < 0) return fallback;
 const language = locale === 'en' ? 'en-US' : locale;
 return captions[language as PublishedLocale]?.[key]?.[index] ?? fallback;
}
