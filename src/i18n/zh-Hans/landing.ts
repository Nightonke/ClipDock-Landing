import type { UiLabels } from "@/types/content";
import { sharedStoreData, type LocalizedLandingContent } from "../shared/landing";
const zhHansAppPreview = {
	...sharedStoreData.appPreview,
	ariaLabel: "ClipDock影随存 iPhone App 预览视频",
};

const zhHansLabels: UiLabels = {
	features: "功能亮点",
	faq: "常见问题",
	screenshots: "截图",
	userReviews: "用户评价",
	downloadOn: "下载于",
	appStore: "App Store",
	ratings: "个评分",
	version: "版本",
	requires: "系统要求",
	updated: "更新时间",
	iphone: "iPhone",
	ipad: "iPad",
	privacy: "隐私政策",
	terms: "用户协议",
	allRightsReserved: "保留所有权利。",
	languageLabel: "语言",
	closeLightbox: "关闭截图预览",
	previousImage: "上一张截图",
	nextImage: "下一张截图",
	goToImage: "跳转到截图",
};

export const landing: LocalizedLandingContent = {
		locale: "zh-Hans",
		htmlLang: "zh-Hans",
		name: "ClipDock影随存",
		shortName: "ClipDock影随存",
		description:
			"从支持的分享链接中提取、后台下载、保存和整理视频，并使用实用工具处理视频文件。",
		seoTitle: "ClipDock影随存｜iPhone 与 iPad 网页视频下载器",
		metaDescription:
			"使用 ClipDock影随存从支持的网址和分享链接提取、下载、保存、整理并处理视频，支持 iPhone 与 iPad。",
		keywords: [
			"ClipDock",
			"影随存",
			"网页视频下载",
			"视频链接下载",
			"后台下载",
			"视频保存",
			"视频处理",
			"保存到相册",
		],
		...sharedStoreData,
		features: [],
		faqs: [],
		reviews: [],
		labels: zhHansLabels,
		appPreview: zhHansAppPreview,
		screenshots: { iphone: [], ipad: [] },
};
