import { socialLinks } from "./socialLinks";

export const storeDataConfig = {
	fetchRealData: false, // Set to true to fetch real data from App Store
	appStoreAppId: 6769265797, // Numeric App ID (without "id" prefix)
};

export const siteConfig = {
	/** App name displayed in the header, footer, and page title */
	name: "ClipDock: Web Video Downloader",

	/** Brief app description shown in the hero section and meta tags */
	description:
		"Extract video resources from supported shared links, download them in the background, organize them, and process them with a complete video toolkit.",

	/** SEO keywords for better search engine visibility */
	keywords: [
		"ClipDock",
		"web video downloader",
		"video saver",
		"background download",
		"video extractor",
		"video processing",
		"save video to Photos",
		"video to GIF",
		"video to Live Photo",
		"web video download",
		"网页视频下载",
		"视频保存",
		"后台下载",
		"视频处理",
	],

	/** Path to the app logo/icon */
	logo: "/assets/clipdock-app-icon.png",

	/** App store download links */
	storeLinks: {
		apple: "https://apps.apple.com/app/id6769265797",
	},

	/** App rating and reviews */
	rating: {
		score: 4.7,
		count: "14",
	},

	/** Age rating (e.g., 4+, 12+, 17+) */
	ageRating: "4+",

	/** App version */
	version: "1.0.10",

	/** Minimum iOS version required */
	minimumOS: "15.0",

	/** Last update date */
	releaseDate: "August 24, 2026",

	/** Social media links (edit in socialLinks.ts) */
	socialLinks,
} as const;
