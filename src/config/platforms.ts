import { localizedPath, type Locale } from '../i18n/locales';
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

export const androidLocales = ['en-US', 'zh-Hans'] as const;
export type AndroidLocale = typeof androidLocales[number];
export const androidLocale = (locale: Locale): AndroidLocale => locale === 'zh-Hans' ? 'zh-Hans' : 'en-US';
export const androidPath = (locale: Locale, page = '') => localizedPath(androidLocale(locale), `android${page ? '/' + page : ''}`);
export const downloadQrUrl = storeLinks.download;
