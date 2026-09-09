import type { FAQ, Feature, Review, Screenshots, StoreData, UiLabels } from "@/types/content";
import type { Locale } from "../locales";
import { sharedStoreData, buildScreenshots, type LocalizedLandingContent } from "../shared/landing";
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

const enFeatures: Feature[] = [
	{
		title: "🎬 36 Videos, 144 Layouts",
		description:
			"Play 2 to 36 videos in portrait or landscape with 144 built-in layouts, plus custom layouts for your own split-screen setups.",
		icon: "FiGrid",
	},
	{
		title: "🎞️ Split-Screen Export",
		description:
			"Turn the current split screen into one shareable video with aspect ratio, resolution, frame rate, bitrate, background, border, watermark, BGM, and audio controls.",
		icon: "FiUpload",
	},
	{
		title: "🔗 Precise Sync Control",
		description:
			"Use global play, pause, progress, mute, volume normalization, Sync Point, and Sync Lock to compare clips at the same motion moment.",
		icon: "FiLock",
	},
	{
		title: "⏱️ Frame-Level Review",
		description:
			"Step forward or backward frame by frame, show millisecond time, preview frames, and jump back to important checkpoints.",
		icon: "FiSkipForward",
	},
	{
		title: "📡 Streams, IPTV & Xtream",
		description:
			"Play HLS, M3U8, RTSP, IPTV, and Xtream Codes channels, search live channel lists, save bookmarks, retry streams, and use external display output.",
		icon: "FiRadio",
	},
	{
		title: "⬇️ Web Video Download",
		description:
			"Manage link-based download tasks with search, sorting, previews, duplicate reminders, resume support, and offline playback.",
		icon: "FiDownload",
	},
	{
		title: "📀 Broad Format Support",
		description:
			"Supports native formats such as MP4, MOV, M4V, and 3GP, plus MKV, FLV, F4V, RMVB, AVI, WebM, and WMV.",
		icon: "FiFilm",
	},
	{
		title: "🔖 Playlists & Bookmarks",
		description:
			"Open videos as playlists with sorting, shuffle, repeat, delete, reorder controls, and restore saved files and layouts instantly.",
		icon: "FiBookmark",
	},
	{
		title: "🖼️ Images, PDFs & Web Pages",
		description:
			"Browse image folders, PDF files, web pages, live streams, and local videos together in the same split-screen workspace.",
		icon: "FiFileText",
	},
];

const enFaqs: FAQ[] = [
	{
		question: "How many videos can I play at once?",
		answer:
			"Split Screen Player supports 2 to 36 videos at the same time with 144 built-in layouts and custom layouts. Actual playback performance depends on your device, video resolution, file format, and stream quality.",
	},
	{
		question: "Can I export the split-screen view as one video?",
		answer:
			"Yes. You can export the current split-screen view as a shareable video and adjust aspect ratio, resolution, frame rate, bitrate, background, borders, watermarks, trim ranges, speed, BGM, and audio sources.",
	},
	{
		question: "Does it support IPTV or live streams?",
		answer:
			"Yes. Split Screen Player supports IPTV and Xtream Codes live channels, alongside HLS, M3U8, and RTSP stream links.",
	},
	{
		question: "Is Split Screen Player free?",
		answer:
			"The app is free to download and includes basic features. Premium offers a 3-day free trial, then weekly, monthly, annual, or one-time unlock options through the App Store.",
	},
	{
		question: "Can I use it offline?",
		answer:
			"Local videos, images, and PDFs work offline once they are on your device. Web browsing, live streams, IPTV, and web downloads require a network connection.",
	},
];

const enLegal = {
	privacyTitle: "Privacy Policy",
	privacyDescription:
		"Learn how Split Screen Player handles local media, browsing activity, IPTV credentials, diagnostics, and privacy-related choices.",
	privacy: `# Privacy Policy

**Last updated:** June 25, 2026

Split Screen Player is designed for local media playback, split-screen layouts, web browsing, live streams, IPTV, and optional web video downloads. This policy explains what information may be handled when you use the app and this website.

## Information The App Handles

Split Screen Player may access information you choose to open or enter in the app, including:

- Videos, images, folders, and PDF files selected from your device
- Layouts, bookmarks, checkpoints, playlists, export settings, and playback preferences saved in the app
- Web pages, stream links, downloadable media URLs, and live channel lists opened through the app
- IPTV or Xtream Codes server information, username, and password when you enter them for live channel playback
- Basic diagnostics or crash information provided through Apple system settings

## How Information Is Used

Information is used to provide app features such as playback, synchronized controls, bookmarks, file viewing, web browsing, live stream playback, downloads, and split-screen export.

Local media files remain on your device unless you choose to share, export, upload, or open them with another app.

## Web Browsing, Streams, IPTV, And Downloads

When you use browser, stream, IPTV, or download features, the websites and services you connect to may receive standard request information such as IP address, user agent, cookies, account credentials you provide to that service, requested URLs, and playback requests. Those third-party services operate under their own privacy policies.

## Data Sharing

We do not sell personal information. We may disclose information only when required by law, needed to operate the app, or requested by you through an explicit action such as sharing or exporting content.

## Security

The app uses the security protections provided by iOS and iPadOS for local files and app storage. You are responsible for the legality, privacy, and security of the media, websites, stream services, and credentials you choose to use.

## Changes

This policy may be updated when app features, legal requirements, or platform policies change. The date at the top of this page will be updated when changes are made.

## Contact

For privacy questions, use the support channel listed on the Split Screen Player App Store product page.`,
	termsTitle: "Terms of Service",
	termsDescription:
		"Read the terms for using Split Screen Player, including local media, web browsing, streams, IPTV, downloads, purchases, and third-party content.",
	terms: `# Terms of Service

**Effective date:** June 25, 2026

By using Split Screen Player or this website, you agree to these terms.

## Use Of The App

Split Screen Player lets you play, compare, synchronize, export, and view videos, images, web pages, live streams, IPTV channels, and PDF files in multi-window layouts. You agree to use the app only for lawful purposes and in compliance with the rights of content owners, website operators, streaming providers, and applicable laws.

## Your Content And Services

You are responsible for the files, URLs, downloads, stream links, IPTV credentials, bookmarks, playlists, exports, and other content you choose to open or manage with the app. You must have the necessary rights or permissions for any media you play, download, copy, export, share, or store.

## Web Browsing, Streams, And Downloads

The app may help you browse websites, play live streams, connect to IPTV or Xtream Codes services, or download web media. Third-party websites and services have their own terms, privacy policies, technical restrictions, subscription rules, and copyright requirements. You are responsible for following them.

## Purchases

If the app offers paid features, purchases, renewals, cancellations, and refunds are handled by Apple through your Apple ID and the App Store. Apple's purchase terms apply.

## Availability

The app and website are provided as available. Features may change, and playback, export, stream, and download performance can vary based on device model, operating system, file format, network quality, and third-party service behavior.

## Intellectual Property

Split Screen Player, the website, branding, interface, and related materials are protected by intellectual property laws. You may not copy, modify, redistribute, reverse engineer, or misuse them except as allowed by law.

## Limitation Of Liability

To the maximum extent permitted by law, we are not responsible for indirect, incidental, special, or consequential damages, including data loss, service interruption, website restrictions, stream failure, download failure, or issues caused by third-party content and services.

## Changes To These Terms

These terms may be updated when app features, legal requirements, or platform policies change. The effective date at the top of this page will be updated when changes are made.

## Contact

For questions about these terms, use the support channel listed on the Split Screen Player App Store product page.`,
};
const reviews: Review[] = [
	{
		author: "Promo022",
		rating: 5,
		text: "Does what it advertises",
	},
	{
		author: "jamannalalsnna",
		rating: 5,
		text: "It was great using this app. I definitely enjoyed it.",
	},
	{
		author: "KeepGoingWhatever",
		rating: 5,
		text: "I’ve been searching for an app that lets me watch multiple movies on one screen. Watching just one doesn’t cut it anymore.",
	},
	{
		author: "仁哥12345",
		rating: 5,
		text: "神奇播放器",
	},
];
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
		features: enFeatures,
		faqs: enFaqs,
		reviews,
		labels: enLabels,
		appPreview: enAppPreview,
		screenshots: buildScreenshots(
			"en-US",
			[
				"Play multiple videos on one screen",
				"Choose from 144 split-screen layouts",
				"Create custom video layouts",
				"Sync playback and compare clips",
				"Export split-screen views as one video",
				"Review frames, checkpoints, and precise timing",
				"Browse web pages, PDFs, images, and local videos",
				"Download web videos for offline playback",
				"Play streams, IPTV, and Xtream Codes channels",
				"Customize playback tools and workflows",
			],
			[
				"iPad multi-video playback workspace",
				"iPad 144 layout picker",
				"iPad custom split-screen layout editor",
				"iPad synchronized playback comparison",
				"iPad split-screen video export",
				"iPad frame review and checkpoints",
				"iPad web, PDF, image, and video split view",
				"iPad web video download manager",
				"iPad streams, IPTV, and Xtream Codes channels",
				"iPad customizable playback tools",
			],
		),
		legal: enLegal,
	};
