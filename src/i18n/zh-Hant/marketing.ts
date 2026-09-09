import { featureSlugs, useCaseSlugs } from "../shared/marketing";
import * as OpenCC from "opencc-js";
import { zhHans } from "../zh-Hans/marketing";
import type { MarketingContent, MarketingDetailPage, FeatureSlug, UseCaseSlug } from "../shared/marketing";
const toTraditional = OpenCC.Converter({ from: "cn", to: "twp" });
const normalizeTaiwanTerms = (text: string) =>
	[
		["工作臺", "工作台"],
		["佈局", "排版"],
		["自定義", "自訂"],
		["本地", "本機"],
		["逐幀", "逐格"],
		["幀率", "影格率"],
		["幀", "影格"],
		["清晰度", "解析度"],
		["位元速率", "位元率"],
		["水印", "浮水印"],
		["直播流", "直播串流"],
		["橫屏", "橫向"],
		["豎屏", "直向"],
		["全域性", "全域"],
		["瞭解", "了解"],
		["對比", "比較"],
		["個影片", "支影片"],
	].reduce((result, [from, to]) => result.replaceAll(from, to), text);
const convertToTraditional = (value: unknown): unknown => {
	if (typeof value === "string") {
		return normalizeTaiwanTerms(toTraditional(value));
	}
	if (Array.isArray(value)) return value.map(convertToTraditional);
	if (value && typeof value === "object") {
		return Object.fromEntries(
			Object.entries(value).map(([key, item]) => [
				key,
				convertToTraditional(item),
			]),
		);
	}
	return value;
};
const zhTraditionalBase = convertToTraditional(zhHans) as MarketingContent;

export const zhHant: MarketingContent = {
	...zhTraditionalBase,
	nav: { features: "功能", useCases: "使用情境", faq: "常見問題", getApp: "下載 App", menu: "選單" },
	hero: {
		eyebrow: "多影片工作台 · iPhone + iPad",
		title: "一屏看多片\n體驗爽翻天",
		description: "在一個畫面上播放、對齊、比較並匯出最多 36 支影片。看清一般播放器會漏掉的那個瞬間。",
		primaryCta: "免費下載",
		secondaryCta: "觀看產品示範",
		ratingText: "4.4 ★ · 24 個評分",
		privacyText: "不收集資料",
		filmLabel: "分屏播放器實機示範",
		filmTitle: "多個畫面，一條時間軸。",
		soundHint: "點一下播放器即可開啟聲音",
	},
	capabilitiesLabel: "工作台能力",
	capabilities: ["同步點", "同步鎖定", "逐格回看", "自訂排版", "IPTV + Xtream", "外接螢幕", "分屏匯出"],
	chapters: zhTraditionalBase.chapters.map((chapter) => ({
		...chapter,
		kicker: chapter.kicker.replace("播放", "播放").replace("同步", "同步").replace("回看", "回看").replace("导出", "匯出").replace("来源", "來源"),
		title: chapter.title.replace(/视频/g, "影片").replace(/画面/g, "畫面").replace(/对齐/g, "對齊").replace(/动作/g, "動作").replace(/导出/g, "匯出").replace(/屏幕/g, "螢幕"),
		description: chapter.description.replace(/视频/g, "影片").replace(/布局/g, "排版").replace(/画面/g, "畫面").replace(/对齐/g, "對齊").replace(/导出/g, "匯出").replace(/直播流/g, "直播串流"),
		points: chapter.points.map((point) => point.replace(/视频/g, "影片").replace(/布局/g, "排版").replace(/导出/g, "匯出").replace(/图片/g, "圖片").replace(/网页/g, "網頁")),
		imageAlt: chapter.imageAlt.replace(/视频/g, "影片").replace(/导出/g, "匯出"),
		linkLabel: chapter.linkLabel.replace(/视频/g, "影片").replace(/导出/g, "匯出").replace(/同步工具/g, "同步工具").replace(/直播流/g, "直播串流"),
		...(chapter.id === "play"
			? {
					kicker: "多支影片 · 一個螢幕",
					title: "在一個螢幕上觀看最多 36 支影片。",
					description:
						"使用多達 144 種排版同時觀看最多 36 支影片，支援 iPhone／iPad 與橫向、直向模式，也可以建立自己的排版。",
					points: [
						"2～36 支影片同時播放",
						"144 種排版 + 自訂排版",
						"橫向與直向",
						"支援 iPad",
					],
				}
			: {}),
		...(chapter.id === "control"
			? {
					kicker: "全域控制 · 方便快速",
					title: "一手掌控所有影片。",
					description:
						"透過全域進度控制、同步鎖定等功能，一鍵控制所有影片的進度、播放狀態、播放速度，或切換影片。適合回看不同剪輯版本、拍攝片段、機位角度或參考素材。",
					points: ["全域進度控制", "同步鎖定"],
					imageAlt: "同時控制多支影片的播放進度和狀態",
					linkLabel: "了解全域控制",
				}
			: {}),
		...(chapter.id === "align"
			? {
					kicker: "精準同步 · 配對動作",
					title: "對齊動作，而不只是對齊時間。",
					description:
						"透過同步點與持續同步校正，讓不同影片始終錨定在同一個動作上。適合比較運動、舞蹈、健身、教學等影片。",
					points: ["同步點", "持續同步校正"],
					imageAlt: "將多支影片精準同步到同一個動作",
					linkLabel: "了解精準同步",
				}
			: {}),
		...(chapter.id === "export"
			? {
					kicker: "匯出 · 分享完整畫面",
					title: "把多個畫面，變成一支完整影片。",
					description:
						"把螢幕上的多影片播放合成為一支影片，並控制畫面位置、解析度、影格率、位元率、邊框、背景、浮水印、BGM 和音訊來源。適合製作比較影片、教學影片、反應影片或短影音素材。",
					points: [
						"多種畫面比例",
						"每支影片單獨裁切和變速",
						"音訊混合 + BGM",
					],
					imageAlt: "分屏影片匯出設定",
					linkLabel: "查看分屏匯出",
				}
			: {}),
		...(chapter.id === "streams"
			? {
					kicker: "影片 · 圖片 · 網頁 · 直播 · PDF · 音樂",
					title: "不只影片，更是多工工作台。",
					description:
						"在同一個排版中組合本機影片、HLS、M3U8、RTSP、IPTV、Xtream 頻道、圖片、網頁、PDF 和音樂。",
					points: [
						"IPTV + Xtream Codes",
						"HLS / M3U8 / RTSP",
						"圖片、網頁、PDF、音樂",
					],
					imageAlt: "在同一個工作台中查看影片、圖片、網頁和 PDF",
					linkLabel: "了解媒體與直播支援",
				}
			: {}),
	})),
	useCases: {
		eyebrow: "為比較而生", title: "當一個畫面不足以說明問題。", description: "只要時間、角度或上下文會改變結果，分屏播放器就能派上用場。",
		items: [
			{ slug: "sports-motion-analysis", number: "A / 01", title: "運動與動作分析", description: "從多個訓練階段和角度比較動作、節奏、姿勢與技術細節。", imageIndex: 4, linkLabel: "查看運動分析工作流程" },
			{ slug: "multi-angle-review", number: "A / 02", title: "多機位與多個版本", description: "在同一條時間軸上回看不同剪輯、表演、機位和參考素材。", imageIndex: 1, linkLabel: "查看多角度工作流程" },
			{ slug: "learning-reference", number: "A / 03", title: "學習與參考", description: "讓課程、參考影片、PDF、圖片和網頁一直同時可見。", imageIndex: 7, linkLabel: "查看學習工作流程" },
		],
	},
	comparison: {
		eyebrow: "工作流程差距", title: "第二個播放器只是多一個視窗，這裡是一整套系統。",
		description: "開啟檔案之後，看看還需要多少手動操作。",
		columns: ["你需要的能力", "多個播放器", "影片編輯器", "分屏播放器"],
		rows: [
			{ label: "2～36 個畫面同屏", values: ["手動", "部分支援", "內建"] },
			{ label: "即時同步播放", values: ["缺少", "部分支援", "內建"] },
			{ label: "逐格比較", values: ["手動", "內建", "內建"] },
			{ label: "自訂多畫面排版", values: ["手動", "內建", "內建"] },
			{ label: "直接匯出分屏影片", values: ["缺少", "內建", "內建"] },
			{ label: "直播串流、PDF 與網頁", values: ["部分支援", "缺少", "內建"] },
		],
		note: "「部分支援」和「手動」描述常見工作流程，具體播放器或編輯器可能有所不同。",
	},
	trust: {
		eyebrow: "長期可用的工具", title: "專業控制，也說明真實邊界。",
		description: "實際播放能力仍會受到裝置、檔案格式和解析度影響。App 的目標是讓複雜的多畫面工作台更容易管理。",
		items: [
			{ value: "不收集", title: "App 資料", description: "目前 App Store 隱私標籤顯示，開發者不會透過此 App 收集資料。" },
			{ value: "iOS 15+", title: "廣泛裝置支援", description: "支援 iPhone 與 iPad，也相容 Apple 晶片 Mac 和 Apple Vision。" },
			{ value: "1.0.26", title: "持續更新", description: "近期加入更穩定的同步校正、拖放換位和懸浮影片控制。" },
		],
	},
	steps: {
		eyebrow: "60 秒完成設定", title: "開啟、排列，然後播放。",
		items: [
			{ title: "選擇內容來源", description: "選擇影片、資料夾、連結、直播串流、圖片、PDF 或網頁。" },
			{ title: "選擇排版", description: "從 144 種排版開始，或者建立自己的分屏排列。" },
			{ title: "同步並回看", description: "鎖定進度、設定同步點，查看你真正關心的那個瞬間。" },
		],
	},
	closing: {
		eyebrow: "你的多畫面工作台從這裡開始", title: "看見完整的瞬間。",
		description: "免費下載，開啟兩支影片，完成第一次同步比較。", cta: "下載分屏播放器",
	},
	footerTagline: "一個畫面，容納每個角度、來源和瞬間。",
	detailLabels: { home: "首頁", keyBenefits: "你會得到什麼", howItWorks: "工作流程如何運作", exploreMore: "繼續探索", backHome: "返回完整產品介紹" },
	details: {
		features: Object.fromEntries(
			featureSlugs.map((slug) => {
				const page = zhTraditionalBase.details.features[slug];
				return [slug, {
					...page,
					kindLabel: page.kindLabel.replace("功能", "功能").replace("多视频", "多影片").replace("导出", "匯出").replace("直播流", "直播串流"),
					title: page.title.replace(/视频/g, "影片").replace(/画面/g, "畫面").replace(/对比/g, "比較").replace(/导出/g, "匯出"),
					seoTitle: page.seoTitle.replace(/视频/g, "影片").replace(/导出/g, "匯出"),
					metaDescription: page.metaDescription.replace(/视频/g, "影片").replace(/布局/g, "排版").replace(/导出/g, "匯出").replace(/网页/g, "網頁"),
					intro: page.intro.replace(/视频/g, "影片").replace(/画面/g, "畫面").replace(/布局/g, "排版").replace(/导出/g, "匯出"),
					promise: page.promise.replace(/视频/g, "影片").replace(/画面/g, "畫面").replace(/布局/g, "排版").replace(/导出/g, "匯出"),
					imageAlt: page.imageAlt.replace(/视频/g, "影片").replace(/导出/g, "匯出"),
					highlights: page.highlights.map((item) => ({
						title: item.title.replace(/视频/g, "影片").replace(/导出/g, "匯出"),
						description: item.description.replace(/视频/g, "影片").replace(/布局/g, "排版").replace(/画面/g, "畫面").replace(/导出/g, "匯出").replace(/网页/g, "網頁"),
					})),
					steps: page.steps.map((item) => ({
						title: item.title.replace(/视频/g, "影片").replace(/导出/g, "匯出"),
						description: item.description.replace(/视频/g, "影片").replace(/布局/g, "排版").replace(/画面/g, "畫面").replace(/导出/g, "匯出").replace(/网页/g, "網頁"),
					})),
					closingTitle: page.closingTitle.replace(/视频/g, "影片").replace(/画面/g, "畫面").replace(/对比/g, "比較").replace(/导出/g, "匯出"),
					closingDescription: page.closingDescription.replace(/视频/g, "影片").replace(/画面/g, "畫面").replace(/导出/g, "匯出"),
				}];
			}),
		) as Record<FeatureSlug, MarketingDetailPage>,
		useCases: Object.fromEntries(
			useCaseSlugs.map((slug) => {
				const page = zhTraditionalBase.details.useCases[slug];
				return [slug, {
					...page,
					kindLabel: page.kindLabel.replace("使用场景", "使用情境").replace("运动", "運動").replace("多机位", "多機位").replace("学习", "學習"),
					title: page.title.replace(/视频/g, "影片").replace(/画面/g, "畫面").replace(/对比/g, "比較").replace(/动作/g, "動作"),
					seoTitle: page.seoTitle.replace(/视频/g, "影片").replace(/运动/g, "運動").replace(/对比/g, "比較"),
					metaDescription: page.metaDescription.replace(/视频/g, "影片").replace(/布局/g, "排版").replace(/对比/g, "比較").replace(/网页/g, "網頁"),
					intro: page.intro.replace(/视频/g, "影片").replace(/画面/g, "畫面").replace(/对比/g, "比較").replace(/动作/g, "動作"),
					promise: page.promise.replace(/视频/g, "影片").replace(/画面/g, "畫面").replace(/对比/g, "比較").replace(/动作/g, "動作"),
					imageAlt: page.imageAlt.replace(/视频/g, "影片").replace(/对比/g, "比較"),
					highlights: page.highlights.map((item) => ({
						title: item.title.replace(/视频/g, "影片").replace(/对比/g, "比較").replace(/动作/g, "動作"),
						description: item.description.replace(/视频/g, "影片").replace(/布局/g, "排版").replace(/画面/g, "畫面").replace(/对比/g, "比較").replace(/动作/g, "動作"),
					})),
					steps: page.steps.map((item) => ({
						title: item.title.replace(/视频/g, "影片").replace(/对比/g, "比較").replace(/动作/g, "動作"),
						description: item.description.replace(/视频/g, "影片").replace(/布局/g, "排版").replace(/画面/g, "畫面").replace(/对比/g, "比較").replace(/动作/g, "動作"),
					})),
					closingTitle: page.closingTitle.replace(/视频/g, "影片").replace(/画面/g, "畫面").replace(/对比/g, "比較").replace(/动作/g, "動作"),
					closingDescription: page.closingDescription.replace(/视频/g, "影片").replace(/画面/g, "畫面").replace(/对比/g, "比較").replace(/动作/g, "動作"),
				}];
			}),
		) as Record<UseCaseSlug, MarketingDetailPage>,
	},
};

