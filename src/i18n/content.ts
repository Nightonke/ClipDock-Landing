import type { Locale } from "./locales";
import type { LocalizedLandingContent } from "./shared/landing";
import { landing as content0 } from './en-US/landing';
import { landing as content1 } from './zh-Hans/landing';
import { landing as content2 } from './zh-Hant/landing';
export const landingContent: Record<Locale, LocalizedLandingContent> = { "en-US": content0, "zh-Hans": content1, "zh-Hant": content2 };
