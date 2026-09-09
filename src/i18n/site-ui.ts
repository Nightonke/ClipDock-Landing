import { getCatalog } from './catalog';
export type { SiteUI } from './types';
export const siteUI = (locale: string) => getCatalog(locale).ui;
