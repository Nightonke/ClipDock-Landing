import type { UiLabels } from "@/types/content";
import { sharedStoreData, type LocalizedLandingContent } from "../shared/landing";
const enAppPreview = {
	...sharedStoreData.appPreview,
	ariaLabel: "App preview video for ClipDock on iPhone",
};

const enLabels: UiLabels = {
	features: "Features",
	faq: "FAQ",
	screenshots: "Screenshots",
	userReviews: "User Reviews",
	downloadOn: "Download on the",
	appStore: "App Store",
	ratings: "ratings",
	version: "Version",
	requires: "Requires",
	updated: "Updated",
	iphone: "iPhone",
	ipad: "iPad",
	privacy: "Privacy",
	terms: "Terms",
	allRightsReserved: "All rights reserved.",
	languageLabel: "Language",
	closeLightbox: "Close lightbox",
	previousImage: "Previous image",
	nextImage: "Next image",
	goToImage: "Go to image",
};

export const landing: LocalizedLandingContent = {
		locale: "en-US",
		htmlLang: "en",
		name: "ClipDock: Web Video Downloader",
		shortName: "ClipDock",
		description:
			"Extract videos from supported shared links, download them in the background, organize them, and process them with practical video tools.",
		seoTitle:
			"ClipDock: Web Video Downloader for iPhone & iPad",
		metaDescription:
			"Extract, download, save, organize, and process videos from supported URLs and shared links with ClipDock for iPhone and iPad.",
		keywords: [
			"ClipDock",
			"web video downloader",
			"video saver",
			"download video from URL",
			"background video download",
			"video extractor",
			"video processing",
			"save video to Photos",
			"web video download",
			"iPhone video downloader",
			"iPad video downloader",
		],
		...sharedStoreData,
		features: [],
		faqs: [],
		reviews: [],
		labels: enLabels,
		appPreview: enAppPreview,
		screenshots: { iphone: [], ipad: [] },
};
