import { siteDefaults } from "../i18n/en-US/site-defaults";
import { socialLinks } from "./socialLinks";

export const storeDataConfig = {
	fetchRealData: false, // Set to true to fetch real data from App Store
	appStoreAppId: 6769265797, // Numeric App ID (without "id" prefix)
};

export const siteConfig = {
	...siteDefaults,

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
