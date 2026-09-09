import type { FAQ, Feature, Review, Screenshots, StoreData, UiLabels } from "@/types/content";
import type { Locale } from "../locales";
import { sharedStoreData, buildScreenshots, type LocalizedLandingContent } from "../shared/landing";
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

const zhHansFeatures: Feature[] = [
	{
		title: "🎬 36 个视频，144 种布局",
		description:
			"支持横屏和竖屏同时播放 2～36 个视频，内置 144 种布局，也可以创建自己的自定义分屏布局。",
		icon: "FiGrid",
	},
	{
		title: "🎞️ 分屏导出",
		description:
			"可将当前分屏合成为一个可分享的视频，支持画面比例、清晰度、帧率、码率、背景、边框、水印、BGM 和音频控制。",
		icon: "FiUpload",
	},
	{
		title: "🔗 精准同步控制",
		description:
			"通过全局播放、暂停、进度、静音、音量均衡、同步点和同步锁定，把多个视频对齐到同一动作时刻。",
		icon: "FiLock",
	},
	{
		title: "⏱️ 逐帧回看",
		description:
			"支持逐帧前进 / 后退、毫秒级时间显示、视频帧预览和存档点，适合训练、教学和动作分析。",
		icon: "FiSkipForward",
	},
	{
		title: "📡 直播流、IPTV 与 Xtream",
		description:
			"支持 HLS、M3U8、RTSP、IPTV 和 Xtream Codes 频道，可搜索直播频道、收藏、自动重试，并支持外接屏显示。",
		icon: "FiRadio",
	},
	{
		title: "⬇️ 网页视频下载",
		description:
			"支持基于链接的下载任务管理，包含搜索、排序、详情预览、重复提醒、中断恢复和离线播放。",
		icon: "FiDownload",
	},
	{
		title: "📀 多格式支持",
		description:
			"兼容 MP4、MOV、M4V、3GP 等系统格式，并扩展支持 MKV、FLV、F4V、RMVB、AVI、WebM、WMV。",
		icon: "FiFilm",
	},
	{
		title: "🔖 播放列表与书签",
		description:
			"多个视频可作为播放列表打开，支持排序、随机、循环、删除、调整顺序，并能一键恢复保存的文件和布局。",
		icon: "FiBookmark",
	},
	{
		title: "🖼️ 图片、PDF 与网页",
		description:
			"图片文件夹、PDF、网页、直播流和本地视频都可以放进同一个分屏工作区里查看。",
		icon: "FiFileText",
	},
];

const zhHansFaqs: FAQ[] = [
	{
		question: "最多可以同时播放多少个视频？",
		answer:
			"分屏播放器支持同时播放 2～36 个视频，内置 144 种布局，也支持自定义布局。实际播放表现会受设备性能、视频清晰度、文件格式和流媒体质量影响。",
	},
	{
		question: "可以把分屏画面导出成一个视频吗？",
		answer:
			"可以。你可以将当前分屏合成为一个可分享的视频，并调整比例、清晰度、帧率、码率、背景、边框、水印、裁剪范围、倍速、BGM 和音频来源。",
	},
	{
		question: "支持 IPTV 或直播流吗？",
		answer:
			"支持。分屏播放器支持 IPTV 和 Xtream Codes 直播频道，也支持 HLS、M3U8、RTSP 等流媒体链接。",
	},
	{
		question: "分屏播放器是免费的吗？",
		answer:
			"App 可免费下载并使用基础功能。高级版通过 App Store 提供 3 天免费试用，之后可选择按周、月、年订阅，或一次性解锁。",
	},
	{
		question: "离线可以使用吗？",
		answer:
			"本地视频、图片和 PDF 下载到设备后可以离线使用。网页浏览、直播流、IPTV 和网页下载需要网络连接。",
	},
];

const zhHansLegal = {
	privacyTitle: "隐私政策",
	privacyDescription:
		"了解分屏播放器如何处理本地媒体、浏览活动、IPTV 凭据、诊断信息和隐私相关选择。",
	privacy: `# 隐私政策

**最后更新：** 2026 年 6 月 25 日

分屏播放器用于本地媒体播放、分屏布局、网页浏览、直播流、IPTV 和可选的网页视频下载。本政策说明你使用 App 和本网站时可能会涉及哪些信息。

## App 可能处理的信息

分屏播放器可能访问你主动选择打开或输入的信息，包括：

- 从设备中选择的视频、图片、文件夹和 PDF 文件
- App 中保存的布局、书签、存档点、播放列表、导出设置和播放偏好
- 通过 App 打开的网页、流媒体链接、可下载媒体链接和直播频道列表
- 当你为了播放直播频道而输入 IPTV 或 Xtream Codes 时的服务器信息、用户名和密码
- Apple 系统设置提供的基础诊断或崩溃信息

## 信息用途

这些信息用于提供播放、同步控制、书签、文件查看、网页浏览、直播流播放、下载和分屏导出等功能。

本地媒体文件会留在你的设备上，除非你主动分享、导出、上传或用其他 App 打开。

## 网页浏览、直播流、IPTV 与下载

当你使用浏览器、流媒体、IPTV 或下载功能时，你连接的网站和服务可能会收到标准请求信息，例如 IP 地址、用户代理、Cookie、你提供给该服务的账号凭据、请求链接和播放请求。这些第三方服务适用它们自己的隐私政策。

## 信息共享

我们不会出售个人信息。只有在法律要求、App 运行需要，或你通过分享、导出等明确操作提出请求时，才可能披露相关信息。

## 安全

App 使用 iOS 和 iPadOS 为本地文件和 App 存储提供的安全保护。你需要自行负责所使用媒体、网站、流媒体服务和凭据的合法性、隐私与安全。

## 政策变更

当 App 功能、法律要求或平台政策变化时，本政策可能会更新。页面顶部日期会随更新而调整。

## 联系方式

如有隐私相关问题，请使用分屏播放器 App Store 产品页中列出的支持渠道。`,
	termsTitle: "用户协议",
	termsDescription:
		"阅读分屏播放器的使用条款，包括本地媒体、网页浏览、直播流、IPTV、下载、购买和第三方内容。",
	terms: `# 用户协议

**生效日期：** 2026 年 6 月 25 日

使用分屏播放器或本网站，即表示你同意本条款。

## App 使用

分屏播放器可以在多窗口布局中播放、对比、同步、导出和查看视频、图片、网页、直播流、IPTV 频道和 PDF 文件。你同意仅将 App 用于合法用途，并遵守内容所有者、网站运营者、流媒体服务提供方和适用法律的要求。

## 你的内容和服务

你需要对自己选择打开或管理的文件、链接、下载内容、流媒体链接、IPTV 凭据、书签、播放列表、导出内容和其他内容负责。对于你播放、下载、复制、导出、分享或保存的任何媒体，你必须拥有必要的权利或授权。

## 网页浏览、直播流与下载

App 可以帮助你浏览网站、播放直播流、连接 IPTV 或 Xtream Codes 服务，或下载网页媒体。第三方网站和服务有各自的条款、隐私政策、技术限制、订阅规则和版权要求，你需要自行遵守。

## 购买

如果 App 提供付费功能，购买、续订、取消和退款由 Apple 通过你的 Apple ID 和 App Store 处理，并适用 Apple 的购买条款。

## 可用性

App 和网站按现状提供。功能可能会变化，播放、导出、流媒体和下载表现会受设备型号、系统版本、文件格式、网络质量和第三方服务行为影响。

## 知识产权

分屏播放器、网站、品牌、界面和相关材料受知识产权法律保护。除法律允许外，你不得复制、修改、重新分发、反向工程或滥用这些内容。

## 责任限制

在法律允许的最大范围内，我们不对间接、附带、特殊或后果性损害负责，包括数据丢失、服务中断、网站限制、流媒体失败、下载失败，或第三方内容和服务导致的问题。

## 条款变更

当 App 功能、法律要求或平台政策变化时，本条款可能会更新。页面顶部的生效日期会随更新而调整。

## 联系方式

如有条款相关问题，请使用分屏播放器 App Store 产品页中列出的支持渠道。`,
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
		features: zhHansFeatures,
		faqs: zhHansFaqs,
		reviews,
		labels: zhHansLabels,
		appPreview: zhHansAppPreview,
		screenshots: buildScreenshots(
			"zh-Hans",
			[
				"同屏播放多个视频",
				"选择 144 种分屏布局",
				"创建自定义视频布局",
				"同步播放并对比片段",
				"将分屏画面导出成一个视频",
				"逐帧回看、存档点和精确时间",
				"分屏浏览网页、PDF、图片和本地视频",
				"下载网页视频并离线播放",
				"播放直播流、IPTV 和 Xtream Codes 频道",
				"自定义播放工具和工作流",
			],
			[
				"iPad 多视频播放工作区",
				"iPad 144 种布局选择",
				"iPad 自定义分屏布局编辑",
				"iPad 同步播放对比",
				"iPad 分屏视频导出",
				"iPad 逐帧回看和存档点",
				"iPad 网页、PDF、图片和视频分屏",
				"iPad 网页视频下载管理",
				"iPad 直播流、IPTV 和 Xtream Codes 频道",
				"iPad 自定义播放工具",
			],
		),
		legal: zhHansLegal,
	};
