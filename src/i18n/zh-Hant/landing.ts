import type { FAQ, Feature, Review, Screenshots, StoreData, UiLabels } from "@/types/content";
import type { Locale } from "../locales";
import { sharedStoreData, buildScreenshots, type LocalizedLandingContent } from "../shared/landing";
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

const zhHantFeatures: Feature[] = [
	{
		title: "🎬 36 支影片，144 種排版",
		description:
			"支援橫向和直向同時播放 2～36 支影片，內建 144 種排版，也可以建立自己的自訂分屏排版。",
		icon: "FiGrid",
	},
	{
		title: "🎞️ 分屏匯出",
		description:
			"可將目前分屏合成為一個可分享的影片，支援畫面比例、解析度、影格率、位元率、背景、邊框、浮水印、BGM 和音訊控制。",
		icon: "FiUpload",
	},
	{
		title: "🔗 精準同步控制",
		description:
			"透過全域播放、暫停、進度、靜音、音量均衡、同步點和同步鎖定，把多支影片對齊到同一動作時刻。",
		icon: "FiLock",
	},
	{
		title: "⏱️ 逐格回看",
		description:
			"支援逐格前進 / 後退、毫秒級時間顯示、影片影格預覽和存檔點，適合訓練、教學和動作分析。",
		icon: "FiSkipForward",
	},
	{
		title: "📡 直播流、IPTV 與 Xtream",
		description:
			"支援 HLS、M3U8、RTSP、IPTV 和 Xtream Codes 頻道，可搜尋直播頻道、收藏、自動重試，並支援外接螢幕顯示。",
		icon: "FiRadio",
	},
	{
		title: "⬇️ 網頁影片下載",
		description:
			"支援基於連結的下載任務管理，包含搜尋、排序、詳細預覽、重複提醒、中斷恢復和離線播放。",
		icon: "FiDownload",
	},
	{
		title: "📀 多格式支援",
		description:
			"相容 MP4、MOV、M4V、3GP 等系統格式，並擴展支援 MKV、FLV、F4V、RMVB、AVI、WebM、WMV。",
		icon: "FiFilm",
	},
	{
		title: "🔖 播放清單與書籤",
		description:
			"多支影片可作為播放清單開啟，支援排序、隨機、循環、刪除、調整順序，並能一鍵還原儲存的檔案和排版。",
		icon: "FiBookmark",
	},
	{
		title: "🖼️ 圖片、PDF 與網頁",
		description:
			"圖片資料夾、PDF、網頁、直播流和本機影片都可以放進同一個分屏工作區裡查看。",
		icon: "FiFileText",
	},
];

const zhHantFaqs: FAQ[] = [
	{
		question: "最多可以同時播放多少支影片？",
		answer:
			"分屏播放器支援同時播放 2～36 支影片，內建 144 種排版，也支援自訂排版。實際播放表現會受裝置效能、影片解析度、檔案格式和串流品質影響。",
	},
	{
		question: "可以把分屏畫面匯出成一個影片嗎？",
		answer:
			"可以。你可以將目前分屏合成為一個可分享的影片，並調整比例、解析度、影格率、位元率、背景、邊框、浮水印、裁切範圍、倍速、BGM 和音訊來源。",
	},
	{
		question: "支援 IPTV 或直播流嗎？",
		answer:
			"支援。分屏播放器支援 IPTV 和 Xtream Codes 直播頻道，也支援 HLS、M3U8、RTSP 等串流連結。",
	},
	{
		question: "分屏播放器是免費的嗎？",
		answer:
			"App 可免費下載並使用基本功能。進階版透過 App Store 提供 3 天免費試用，之後可選擇按週、月、年訂閱，或一次性解鎖。",
	},
	{
		question: "離線可以使用嗎？",
		answer:
			"本機影片、圖片和 PDF 下載到裝置後可以離線使用。網頁瀏覽、直播流、IPTV 和網頁下載需要網路連線。",
	},
];

const zhHantLegal = {
	privacyTitle: "隱私權政策",
	privacyDescription:
		"了解分屏播放器如何處理本機媒體、瀏覽活動、IPTV 憑證、診斷資訊和隱私相關選擇。",
	privacy: `# 隱私權政策

**最後更新：** 2026 年 6 月 25 日

分屏播放器用於本機媒體播放、分屏排版、網頁瀏覽、直播流、IPTV 和可選的網頁影片下載。本政策說明你使用 App 和本網站時可能會涉及哪些資訊。

## App 可能處理的資訊

分屏播放器可能存取你主動選擇開啟或輸入的資訊，包括：

- 從裝置中選擇的影片、圖片、資料夾和 PDF 檔案
- App 中儲存的排版、書籤、存檔點、播放清單、匯出設定和播放偏好
- 透過 App 開啟的網頁、串流連結、可下載媒體連結和直播頻道列表
- 當你為了播放直播頻道而輸入 IPTV 或 Xtream Codes 時的伺服器資訊、使用者名稱和密碼
- Apple 系統設定提供的基礎診斷或當機資訊

## 資訊用途

這些資訊用於提供播放、同步控制、書籤、檔案查看、網頁瀏覽、直播流播放、下載和分屏匯出等功能。

本機媒體檔案會留在你的裝置上，除非你主動分享、匯出、上傳或用其他 App 開啟。

## 網頁瀏覽、直播流、IPTV 與下載

當你使用瀏覽器、串流、IPTV 或下載功能時，你連線的網站和服務可能會收到標準請求資訊，例如 IP 位址、使用者代理、Cookie、你提供給該服務的帳號憑證、請求連結和播放請求。這些第三方服務適用它們自己的隱私權政策。

## 資訊共享

我們不會出售個人資訊。只有在法律要求、App 運作需要，或你透過分享、匯出等明確操作提出請求時，才可能揭露相關資訊。

## 安全

App 使用 iOS 和 iPadOS 為本機檔案和 App 儲存提供的安全保護。你需要自行負責所使用媒體、網站、串流服務和憑證的合法性、隱私與安全。

## 政策變更

當 App 功能、法律要求或平台政策變化時，本政策可能會更新。頁面頂部日期會隨更新而調整。

## 聯絡方式

如有隱私相關問題，請使用分屏播放器 App Store 產品頁中列出的支援管道。`,
	termsTitle: "使用者協議",
	termsDescription:
		"閱讀分屏播放器的使用條款，包括本機媒體、網頁瀏覽、直播流、IPTV、下載、購買和第三方內容。",
	terms: `# 使用者協議

**生效日期：** 2026 年 6 月 25 日

使用分屏播放器或本網站，即表示你同意本條款。

## App 使用

分屏播放器可以在多視窗排版中播放、比較、同步、匯出和查看影片、圖片、網頁、直播流、IPTV 頻道和 PDF 檔案。你同意僅將 App 用於合法用途，並遵守內容所有者、網站營運者、串流服務提供方和適用法律的要求。

## 你的內容和服務

你需要對自己選擇開啟或管理的檔案、連結、下載內容、串流連結、IPTV 憑證、書籤、播放清單、匯出內容和其他內容負責。對於你播放、下載、複製、匯出、分享或儲存的任何媒體，你必須擁有必要的權利或授權。

## 網頁瀏覽、直播流與下載

App 可以幫助你瀏覽網站、播放直播流、連接 IPTV 或 Xtream Codes 服務，或下載網頁媒體。第三方網站和服務有各自的條款、隱私權政策、技術限制、訂閱規則和著作權要求，你需要自行遵守。

## 購買

如果 App 提供付費功能，購買、續訂、取消和退款由 Apple 透過你的 Apple ID 和 App Store 處理，並適用 Apple 的購買條款。

## 可用性

App 和網站按現狀提供。功能可能會變化，播放、匯出、串流和下載表現會受裝置型號、系統版本、檔案格式、網路品質和第三方服務行為影響。

## 智慧財產權

分屏播放器、網站、品牌、介面和相關材料受智慧財產權法律保護。除法律允許外，你不得複製、修改、重新分發、反向工程或濫用這些內容。

## 責任限制

在法律允許的最大範圍內，我們不對間接、附帶、特殊或後果性損害負責，包括資料遺失、服務中斷、網站限制、串流失敗、下載失敗，或第三方內容和服務導致的問題。

## 條款變更

當 App 功能、法律要求或平台政策變化時，本條款可能會更新。頁面頂部的生效日期會隨更新而調整。

## 聯絡方式

如有條款相關問題，請使用分屏播放器 App Store 產品頁中列出的支援管道。`,
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
		features: zhHantFeatures,
		faqs: zhHantFaqs,
		reviews,
		labels: zhHantLabels,
		appPreview: zhHantAppPreview,
		screenshots: buildScreenshots(
			"zh-Hant",
			[
				"同畫面播放多支影片",
				"選擇 144 種分屏排版",
				"建立自訂影片排版",
				"同步播放並比較片段",
				"將分屏畫面匯出成一個影片",
				"逐格回看、存檔點和精確時間",
				"分屏瀏覽網頁、PDF、圖片和本機影片",
				"下載網頁影片並離線播放",
				"播放直播流、IPTV 和 Xtream Codes 頻道",
				"自訂播放工具和工作流程",
			],
			[
				"iPad 多影片播放工作區",
				"iPad 144 種排版選擇",
				"iPad 自訂分屏排版編輯",
				"iPad 同步播放比較",
				"iPad 分屏影片匯出",
				"iPad 逐格回看和存檔點",
				"iPad 網頁、PDF、圖片和影片分屏",
				"iPad 網頁影片下載管理",
				"iPad 直播流、IPTV 和 Xtream Codes 頻道",
				"iPad 自訂播放工具",
			],
		),
		legal: zhHantLegal,
	};
