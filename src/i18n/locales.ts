import { meta as ja } from "./ja/meta";
import { meta as en } from "./en-US/meta";
import { meta as zh } from "./zh-Hans/meta";
import { meta as traditional } from "./zh-Hant/meta";
export const defaultLocale = "en-US" as const;

export const locales = ["en-US", "zh-Hans", "zh-Hant", "ja"] as const;

export type Locale = (typeof locales)[number];

// Only reviewed ClipDock translations are published.
export const publishedLocales = ["en-US", "zh-Hans", "zh-Hant", "ja"] as const satisfies readonly Locale[];
export type PublishedLocale = (typeof publishedLocales)[number];

export const localeMeta: Record<Locale, { label: string; hrefLang: string; htmlLang: string; ogLocale: string; dir: "ltr" | "rtl" }> = { "en-US": en, "zh-Hans": zh, "zh-Hant": traditional, ja };

export const localizedPath = (locale: Locale, page = "") => {
	const cleanPage = page.replace(/^\/|\/$/g, "");
	const suffix = cleanPage ? `${cleanPage}/` : "";
	return locale === defaultLocale ? `/${suffix}` : `/${locale}/${suffix}`;
};

export const getLanguageLinks = (activeLocale: Locale, page = "") =>
	publishedLocales.map((locale) => ({
		locale,
		label: localeMeta[locale].label,
		href: localizedPath(locale, page),
		hrefLang: localeMeta[locale].hrefLang,
		isActive: locale === activeLocale,
	}));
