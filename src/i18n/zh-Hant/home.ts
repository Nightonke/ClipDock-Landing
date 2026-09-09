export const capabilities = [
	"透過分享連結下載", "透過網址下載", "複製即下載", "不必來回切換 App",
	"偵測並下載網頁影片", "個人頁面批次下載", "頻道頁批次下載", "話題頁批次下載",
	"播放清單批次下載", "合集批次下載", "背景下載", "影片管理", "儲存到相簿",
	"裁切", "轉碼", "拼接", "尺寸/畫布", "旋轉", "鏡像", "變速", "提取音訊",
	"影音合併", "倒放", "添加浮水印", "影片轉 GIF", "影片轉實況（Live Photo）",
	"影片截圖", "修改 MD5", "YouTube 字幕提取",
];

const supportedPlatforms = "YouTube、Sora（OpenAI）、Instagram（含限時動態）、X（Twitter）、TikTok、Threads、Facebook、Vimeo、afreecatv、Tumblr、Triller、Likee、Twitch、Pinterest、Snapchat、Reddit、VK、Dailymotion、SoundCloud、Lemon8、Suno 音樂、AcFun、嗶哩嗶哩（B 站）、天貓、閒魚、大眾點評、UC 視頻、趣頭條、皮皮蝦、皮皮搞笑、微博、秒拍、綠洲、小咖秀、美圖秀秀、美拍、網易雲音樂、央視網（CCTV）、新華網、虎嗅、虎牙、鬥魚、糖豆、喜馬拉雅、陌陌、映客、迅雷、WIDE 短視頻、最右、開眼、酷燃、剪映、糗事百科、梨視頻等平台。實際可下載的內容以連結解析結果為準";

export const featureSections = [
	{
		number: "01",
		video: "share-link",
		kicker: "從連結到影片",
		title: "從分享連結\n下載影片",
		description:
			"貼上支援的平台分享連結或網址，影隨存會提取可下載的影片、圖片或音訊。來源提供高畫質或無浮水印版本時，可依需要選擇；畫質、格式和浮水印情況以實際資源為準。",
		points: ["檢視支援的平台", "按來源選擇可用畫質", "支援影片、圖片和音訊", "切換到背景也可繼續下載"],
		platformDetails: supportedPlatforms,
		placeholder: "連結辨識畫面截圖",
		tone: "blue",
	},
	{
		number: "02",
		video: "copy-background",
		kicker: "不必貼上，只需複製",
		title: "複製連結\n背景下載",
		description:
			"開啟「自動下載剪貼簿鏈接」和「後台識別並下載」，並保持子母畫面執行。在 YouTube、TikTok、X 等平台複製支援的分享連結，影隨存就會在背景建立下載任務。開啟下載通知並允許通知權限後，可收到完成或失敗提醒。",
		points: ["開啟後，不必切回 App 貼上", "子母畫面可滑到螢幕邊緣收起"],
		placeholder: "下載任務畫面截圖",
		tone: "lime",
	},
	{
		number: "03",
		video: "web-long-press",
		kicker: "播放後偵測可下載資源",
		title: "播放網頁影片\n長按選擇下載",
		description:
			"進入「網頁影片」，開啟目標頁面並播放影片。如有廣告，請跳過或等待廣告結束，再長按影片選擇可下載資源；也可以透過底部偵測按鈕檢視已偵測到的影片。資源是否可下載取決於網站和存取條件。",
		points: ["偵測頁面中的可下載影片", "從偵測清單選擇需要的資源", "長按定位正在播放的影片"],
		placeholder: "內建瀏覽器影片下載畫面截圖",
		tone: "coral",
	},
	{
		number: "04",
		video: "batch-playlist",
		kicker: "批次下載",
		title: "選好清單\n批次下載",
		description: "貼上支援的頻道、個人頁面、播放清單或話題頁連結，載入清單後選擇需要的影片或圖片，再加入下載佇列。清單按頁載入，免費版最多可載入前 2 頁；可下載範圍以實際回傳結果為準，不一定包含全部作品。",
		points: ["檢視批次下載支援範圍"],
		platformDetails: "支援 YouTube（頻道、Shorts、話題頁、播放清單）、Instagram（作者個人頁面、話題頁）、TikTok（作者個人頁面、話題頁）、抖音（個人頁面、合集）、嗶哩嗶哩（個人頁面、合集），以及 X（Twitter）、微博、好看視頻等平台的個人頁面。不同平台支援的連結類型和可載入範圍有所不同。",
		placeholder: "頻道、個人頁面與播放清單批次下載畫面截圖",
		tone: "blue",
	},

	{
		number: "05",
		kicker: "YouTube 字幕提取",
		title: "影片字幕\n單獨儲存",
		description: "貼上 YouTube 影片連結，提取已有字幕。選好需要的語言與檔案格式，儲存到檔案或分享給其他 App，方便閱讀、整理和後續使用。",
		points: ["支援已有的自動產生字幕與多語言軌道", "可多選字幕，支援 SRT、VTT 等七種格式", "儲存到「檔案」，或直接分享"],
		carousel: true,
		tutorial: "extract-youtube-subtitles-iphone",
		tone: "lime",
	},
];

export const tools = [
	{ mark: "CUT", slug: "trim-video-iphone", title: "影片裁切", description: "擷取需要的影片片段，留下精彩部分。" },
	{ mark: "CONV", slug: "transcode-video-iphone", title: "影片轉碼", description: "為不同用途轉換影片格式。" },
	{ mark: "JOIN", slug: "join-videos-iphone", title: "視訊拼接", description: "把多個片段按順序合成為一部影片。" },
	{ mark: "MIX", slug: "interleave-videos-iphone", title: "交叉拼接", description: "將多個影片分段，交替拼接不同素材。" },
	{ mark: "GRID", slug: "segment-grid-video-iphone", title: "分段宮格", description: "將一部影片的不同時間片段排成網格。" },
	{ mark: "SIZE", slug: "resize-video-iphone", title: "尺寸/畫布", description: "調整畫布比例，選擇留邊、裁切填滿或其他佈局。" },
	{ mark: "ROTATE", slug: "rotate-video-iphone", title: "視訊旋轉", description: "旋轉影片畫面，調整到合適的方向。" },
	{ mark: "MIRROR", slug: "mirror-video-iphone", title: "視訊鏡像", description: "翻轉畫面，製作鏡像效果。" },
	{ mark: "SPEED", slug: "change-video-speed-iphone", title: "視訊變速", description: "加快或放慢播放速度，調整影片節奏。" },
	{ mark: "AUDIO", slug: "extract-audio-iphone", title: "提取音訊", description: "將影片中的聲音單獨儲存為音訊。" },
	{ mark: "SOUND", slug: "edit-video-audio-iphone", title: "音訊處理", description: "為影片靜音或調整音量，處理影片中的聲音。" },
	{ mark: "MERGE", slug: "merge-audio-video-iphone", title: "影音合併", description: "把音訊與影片合併為一個檔案。" },
	{ mark: "REVERSE", slug: "reverse-video-iphone", title: "影片倒放", description: "讓影片從結尾開始反向播放。" },
	{ mark: "MARK", slug: "add-watermark-video-iphone", title: "添加浮水印", description: "為自己的影片新增文字或影像標記。" },
	{ mark: "GIF", slug: "video-to-gif-iphone", title: "影片轉 GIF", description: "把影片片段轉換為便於分享的動圖。" },
	{ mark: "LIVE", slug: "video-to-live-photo-iphone", title: "影片轉實況", description: "將影片轉換為實況照片（Live Photo）。" },
	{ mark: "FRAMES", slug: "capture-video-frames-iphone", title: "影片截圖", description: "提取單張影片畫面，也可使用批次、智慧截圖和預覽大圖模式。" },
	{ mark: "MD5", slug: "change-video-md5-iphone", title: "修改 MD5", description: "修改影片檔案的 MD5 值。" },
];

export const faqs = [
	{
		question: "影隨存支援哪些連結？",
		answer:
			`影隨存支援 ${supportedPlatforms}。`,
	},
	{
		question: "為什麼有些連結無法辨識？",
		answer:
			"頁面結構變化、登入狀態、地區限制、網路環境、資源失效或 DRM 與存取控制都可能導致辨識失敗。你可以確認連結能夠正常開啟後再重新嘗試。",
	},
	{
		question: "下載完成的影片儲存在哪裡？",
		answer:
			"下載完成後，可在「資源管理」的「已完成」清單中預覽、搜尋、排序或分享影片。點一下「儲存到相簿」可手動儲存；也可在「下載設定」中開啟「下載完成後自動儲存到相簿」。儲存需要相簿權限和支援的檔案格式。",
	},
	{
		question: "可以在背景下載嗎？",
		answer:
			"影隨存支援背景下載任務。不過 iOS 可能根據系統資源、網路狀態和省電策略調整背景執行時間。",
	},
	{
		question: "影隨存會收集我的資料嗎？",
		answer:
			"目前 App Store 隱私標籤顯示為「不收集資料」。當你瀏覽第三方網站或資源時，對方仍可能按照自己的隱私權政策處理標準網路請求資訊。",
	},
	{
		question: "我可以下載任何線上影片嗎？",
		answer:
			"不可以。請只儲存你擁有權利、獲得授權或法律允許使用的內容，並遵守內容所有者、網站和所在地區的相關規則。",
	},
];


export const ui = {
  "ogAlt": "ClipDock 影隨存——適用於 iPhone 與 iPad 的網頁影片下載器",
  "eyebrow": "支援多種平台 · iPhone + iPad",
  "heroLine1": "連結交給影隨存",
  "heroLine2": "影片圖片輕鬆存",
  "heroDescription": "用 ClipDock 影隨存儲存支援的分享連結和網頁中的影片、圖片或音訊。開啟複製即下載，或從清單中批次選擇作品，減少重複操作。可用畫質、格式和浮水印情況取決於來源資源。",
  "freeDownload": "免費下載",
  "qrLabel": "使用 iPhone 掃描 QR Code 下載 ClipDock 影隨存",
  "qrAlt": "ClipDock 影隨存下載 QR Code",
  "scan": "使用 iPhone 掃描",
  "getApp": "下載 App",
  "productInfo": "產品資訊",
  "ratings": "個評分",
  "privacyProof": "不收集 App 資料",
  "capabilities": "ClipDock 影隨存核心能力",
  "subtitleLink": "檢視字幕提取教學",
  "demoSuffix": "操作示範",
  "progress": "影片播放進度",
  "placeholder": "圖片暫留空位",
  "toolsKicker": "下載之後",
  "toolsTitle": "隨身影片工具箱",
  "toolsDescription": "下載之後，還能繼續創作。用影隨存裁切、轉換、拼接影片，再分享你的作品。",
  "readTutorial": "閱讀教學",
  "trustKicker": "下載前，先了解使用範圍",
  "trustTitle": "安心使用，先了解下載限制。",
  "trustDescription": "請使用影隨存儲存和處理你有權使用的內容。連結是否可用，也會受到來源平台和資源本身的限制。",
  "trustValue1": "不收集",
  "trustLabel1": "App 資料",
  "trustText1": "目前 App Store 隱私標籤顯示，開發者不會透過此 App 收集資料。",
  "trustLabel2": "iPhone 與 iPad",
  "trustText2": "支援 iOS 15 及以上版本的 iPhone，以及 iPadOS 15 及以上版本的 iPad。",
  "trustValue3": "合法使用",
  "trustLabel3": "儲存有權使用的內容",
  "trustText3": "不繞過 DRM、付費內容、存取控制或平台限制。",
  "faqKicker": "常見問題",
  "faqTitle": "下載前，你可能想知道",
  "closingKicker": "準備好儲存下一個連結了嗎？",
  "closingTitle": "讓影片真正留在手邊。",
  "closingDescription": "影隨存可在 iPhone 和 iPad 上免費下載，包含 App 內購買。",
  "storeDownload": "在 App Store 下載",
  "closingQr": "掃描 QR Code 下載 ClipDock 影隨存"
};
