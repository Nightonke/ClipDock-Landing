import type { FAQ, Feature, Review, StoreData, UiLabels } from "@/types/content";
import type { Locale } from "../locales";

export interface LocalizedLandingContent extends StoreData {
	locale: Locale;
	htmlLang: string;
	seoTitle: string;
	metaDescription: string;
	keywords: string[];
	features: Feature[];
	faqs: FAQ[];
	reviews: Review[];
	labels: UiLabels;
}
export const appleStoreUrl =
	"https://apps.apple.com/us/app/clipdock-web-video-downloader/id6769265797?uo=4";
export const sharedStoreData = {
	logo: "/assets/clipdock-app-icon.png",
	storeLinks: {
		apple: appleStoreUrl,
	},
	rating: {
		score: 4.7,
		count: "14",
	},
	ageRating: "4+",
	version: "1.0.10",
	minimumOS: "15.0",
	releaseDate: "August 24, 2026",
	appPreview: {
		videoSrc: "/assets/videos/app-preview-iphone-optimized.m4v",
		posterSrc: "/assets/videos/app-preview-iphone-poster.jpg",
	},
} as const;
