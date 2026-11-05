import { localizedPath, publishedLocales, type Locale } from '../i18n/locales';
import * as storeLinks from './store-links.json';

export const appPlatforms = {
 ios: {
  storeUrl: storeLinks.apple,
  operatingSystem: 'iOS 15.0 or later, iPadOS 15.0 or later',
 },
 android: {
  storeUrl: storeLinks.google,
  operatingSystem: 'Android 8.0 or later',
 },
} as const;

export const androidLocales = publishedLocales;
export type AndroidLocale = typeof androidLocales[number];
export const androidLegalLocale = (locale: Locale) => locale === 'zh-Hans' ? 'zh-Hans' : 'en-US';
export const androidPath = (locale: Locale, page: '' | 'privacy' | 'terms' | 'delete-account' = '') =>
 localizedPath(page ? androidLegalLocale(locale) : locale, `android${page ? '/' + page : ''}`);
export const downloadQrUrl = storeLinks.download;
