import { legal as ja } from "./ja/legal";
import type { Locale } from "./locales";
import { legal as en } from "./en-US/legal";
import { legal as zh } from "./zh-Hans/legal";
import { legal as traditional } from "./zh-Hant/legal";

export type LegalPage = "privacy" | "terms";

export interface LegalDocument {
	title: string;
	description: string;
	content: string;
}

export interface LegalCopy {
	navigationLabel: string;
	effectiveDateLabel: string;
	effectiveDate: string;
	effectiveDateText: string;
	privacy: LegalDocument;
	terms: LegalDocument;
}

export const legalContent: Record<Locale, LegalCopy> = {
	"en-US": en,
	"zh-Hans": zh,
	"zh-Hant": traditional,
	ja,
};
