export const featureSlugs = [
	"multi-video-player",
	"video-sync-comparison",
	"split-screen-export",
	"iptv-streaming",
] as const;
export const useCaseSlugs = [
	"sports-motion-analysis",
	"multi-angle-review",
	"learning-reference",
] as const;
export type FeatureSlug = (typeof featureSlugs)[number];
export type UseCaseSlug = (typeof useCaseSlugs)[number];
export interface MarketingDetailPage {
	kindLabel: string;
	title: string;
	seoTitle: string;
	metaDescription: string;
	intro: string;
	promise: string;
	imageIndex: number;
	imageAlt: string;
	highlights: Array<{ title: string; description: string }>;
	steps: Array<{ title: string; description: string }>;
	closingTitle: string;
	closingDescription: string;
}
export interface MarketingContent {
	nav: {
		features: string;
		useCases: string;
		faq: string;
		getApp: string;
		menu: string;
	};
	hero: {
		eyebrow: string;
		title: string;
		description: string;
		primaryCta: string;
		secondaryCta: string;
		ratingText: string;
		privacyText: string;
		filmLabel: string;
		filmTitle: string;
		soundHint: string;
	};
	capabilitiesLabel: string;
	capabilities: string[];
	chapters: Array<{
		id: string;
		number: string;
		kicker: string;
		title: string;
		description: string;
		points: string[];
		imageIndex: number;
		imageAlt: string;
		linkLabel: string;
		linkPath: string;
	}>;
	useCases: {
		eyebrow: string;
		title: string;
		description: string;
		items: Array<{
			slug: UseCaseSlug;
			number: string;
			title: string;
			description: string;
			imageIndex: number;
			linkLabel: string;
		}>;
	};
	comparison: {
		eyebrow: string;
		title: string;
		description: string;
		columns: string[];
		rows: Array<{ label: string; values: string[] }>;
		note: string;
	};
	trust: {
		eyebrow: string;
		title: string;
		description: string;
		items: Array<{ value: string; title: string; description: string }>;
	};
	steps: {
		eyebrow: string;
		title: string;
		items: Array<{ title: string; description: string }>;
	};
	closing: {
		eyebrow: string;
		title: string;
		description: string;
		cta: string;
	};
	footerTagline: string;
	detailLabels: {
		home: string;
		keyBenefits: string;
		howItWorks: string;
		exploreMore: string;
		backHome: string;
	};
	details: {
		features: Record<FeatureSlug, MarketingDetailPage>;
		useCases: Record<UseCaseSlug, MarketingDetailPage>;
	};
}