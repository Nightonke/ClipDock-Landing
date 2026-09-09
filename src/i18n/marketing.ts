import type { Locale } from "./locales";
import type { MarketingContent } from "./shared/marketing";
export * from "./shared/marketing";
import { en } from "./en-US/marketing";
import { zhHans } from "./zh-Hans/marketing";
import { zhHant } from "./zh-Hant/marketing";
export const marketingContent: Record<Locale, MarketingContent> = {
	"en-US": en,
	"zh-Hans": zhHans,
	"zh-Hant": zhHant,
};
export const localizedScreenshot = (
	locale: Locale,
	device: "iphone" | "ipad",
	index: number,
) => {
	const base =
		locale === "en-US"
			? "/assets/screenshots"
			: `/assets/screenshots/${locale}`;
	return `${base}/${device}/${index}.png`;
};
