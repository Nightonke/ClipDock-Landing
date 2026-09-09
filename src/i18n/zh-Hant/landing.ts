import type { UiLabels } from "@/types/content";
import { sharedStoreData, type LocalizedLandingContent } from "../shared/landing";
const zhHantAppPreview = {
	...sharedStoreData.appPreview,
	ariaLabel: "ClipDock 影隨存 iPhone App 預覽影片",
};

const zhHantLabels: UiLabels = {
	features: "功能亮點",
	faq: "常見問題",
	screenshots: "截圖",
	userReviews: "使用者評價",
	downloadOn: "下載於",
	appStore: "App Store",
	ratings: "個評分",
	version: "版本",
	requires: "系統需求",
	updated: "更新時間",
	iphone: "iPhone",
	ipad: "iPad",
	privacy: "隱私權政策",
	terms: "使用者協議",
	allRightsReserved: "保留所有權利。",
	languageLabel: "語言",
	closeLightbox: "關閉截圖預覽",
	previousImage: "上一張截圖",
	nextImage: "下一張截圖",
	goToImage: "跳轉到截圖",
};

export const landing: LocalizedLandingContent = {
		locale: "zh-Hant",
		htmlLang: "zh-Hant",
		name: "ClipDock 影隨存 - 影片連結下載器",
		shortName: "ClipDock 影隨存",
		description:
			"從支援的分享連結中擷取、背景下載、儲存和整理影片，並使用實用工具處理影片檔案。",
		seoTitle: "ClipDock 影隨存｜iPhone 與 iPad 網頁影片下載器",
		metaDescription:
			"使用 ClipDock 影隨存從支援的網址和分享連結擷取、下載、儲存、整理並處理影片，支援 iPhone 與 iPad。",
		keywords: [
			"ClipDock",
			"影隨存",
			"網頁影片下載",
			"影片連結下載",
			"背景下載",
			"影片儲存",
			"影片處理",
			"儲存到相簿",
		],
		...sharedStoreData,
		features: [],
		faqs: [],
		reviews: [],
		labels: zhHantLabels,
		appPreview: zhHantAppPreview,
		screenshots: { iphone: [], ipad: [] },
};
