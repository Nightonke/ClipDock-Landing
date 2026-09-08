import { videoToolScreenshots, videoToolTutorials, videoToolOrder } from "./video-tools";

export const categories = [
	{ id: "platform", name: "按平台下载", description: "从分享链接开始，把需要的视频保存到设备。" },
	{ id: "clipboard", name: "复制即下载", description: "减少切换 App，让复制链接接上下载任务。" },
	{ id: "batch", name: "批量下载", description: "按频道、主页或播放列表集中保存视频。" },
	{ id: "tools", name: "视频处理", description: "18 个视频处理功能：从裁剪、转码到声音、画布与组合效果。" },
] as const;

// Set src only after the corresponding real screenshot has been supplied.
export const screenshotBriefs: Record<string, { title: string; brief: string; src?: string; width?: number; height?: number; framed?: boolean; video?: string; poster?: string; highlight?: { x: number; y: number; width: number; height: number } }> = {
	...videoToolScreenshots,
	"playlist-input-orange": { title: "在 Batch 分页填入 YouTube 播放列表链接", brief: "IMG_3435.PNG，橙色手机壳。", src: "/assets/tutorials/youtube-playlist/input-orange.webp", width: 1319, height: 2748, framed: true },
	"playlist-loading-orange": { title: "点击 Load list，等待列表加载", brief: "IMG_3436.PNG，橙色手机壳。", src: "/assets/tutorials/youtube-playlist/loading-orange.webp", width: 1319, height: 2748, framed: true },
	"playlist-select-orange": { title: "选择条目与批量画质，点击 Add to queue", brief: "IMG_3437.PNG，橙色手机壳。", src: "/assets/tutorials/youtube-playlist/select-orange.webp", width: 1319, height: 2748, framed: true },
	"playlist-queue-orange": { title: "在 Manager 查看排队与下载进度", brief: "IMG_3438.PNG，橙色手机壳。", src: "/assets/tutorials/youtube-playlist/queue-orange.webp", width: 1319, height: 2748, framed: true },
	"clipboard-enable-orange": { title: "开启剪贴板填入、自动下载与后台检测", brief: "IMG_3429.PNG，橙色手机壳。", src: "/assets/tutorials/clipboard/enable-orange.webp", width: 1319, height: 2748, framed: true },
	"clipboard-pip-orange": { title: "切回 TikTok，保持画中画悬浮窗开启", brief: "IMG_3430.PNG，橙色手机壳。", src: "/assets/tutorials/clipboard/pip-orange.webp", width: 1319, height: 2748, framed: true },
	"clipboard-copy-orange": { title: "在分享面板点击 Copy link（复制链接）", brief: "IMG_3431.PNG，橙色手机壳。", src: "/assets/tutorials/clipboard/copy-link-orange.webp", width: 1319, height: 2748, framed: true },
	"clipboard-demo": { title: "演示：连续复制链接，后台识别并创建下载任务", brief: "复制即后台下载录屏。", video: "/assets/demos/copy-background.mp4", poster: "/assets/demos/copy-background.jpg" },
	"x-copy-orange": { title: "在 X 分享面板底部点击 Copy Link（复制链接）", brief: "IMG_8145.PNG，橙色手机壳。", src: "/assets/tutorials/x/copy-link-orange.webp", width: 1319, height: 2748, framed: true },
	"x-extract-orange": { title: "确认帖子链接，点击 Extract（提取）", brief: "IMG_3424.PNG，橙色手机壳。", src: "/assets/tutorials/x/extract-link-orange.webp", width: 1319, height: 2748, framed: true },
	"x-quality-orange": { title: "选择清晰度，点击 Download（下载）", brief: "IMG_3425.PNG，橙色手机壳。", src: "/assets/tutorials/x/select-quality-orange.webp", width: 1319, height: 2748, framed: true },
	"x-progress-orange": { title: "查看下载进度，点击 View Task（查看任务）", brief: "IMG_3427.PNG，橙色手机壳。", src: "/assets/tutorials/x/download-progress-orange.webp", width: 1319, height: 2748, framed: true },
	"x-photos-orange": { title: "预览视频，点击 Save to Photos（保存到相册）", brief: "IMG_3428.PNG，橙色手机壳。", src: "/assets/tutorials/x/save-photos-orange.webp", width: 1319, height: 2748, framed: true },
	"instagram-copy-orange": { title: "在 Instagram 分享面板点击 Copy link（复制链接）", brief: "IMG_8141.PNG，橙色手机壳。", src: "/assets/tutorials/instagram/copy-link-orange.webp", width: 1319, height: 2748, framed: true },
	"instagram-extract-orange": { title: "确认 Reels 链接，点击 Extract（提取）", brief: "IMG_3417.PNG，橙色手机壳。", src: "/assets/tutorials/instagram/extract-link-orange.webp", width: 1319, height: 2748, framed: true },
	"instagram-progress-orange": { title: "查看下载进度，点击 View Task（查看任务）", brief: "IMG_3419.PNG，橙色手机壳。", src: "/assets/tutorials/instagram/download-progress-orange.webp", width: 1319, height: 2748, framed: true },
	"instagram-photos-orange": { title: "预览视频，点击 Save to Photos（保存到相册）", brief: "IMG_3420.PNG，橙色手机壳。", src: "/assets/tutorials/instagram/save-photos-orange.webp", width: 1319, height: 2748, framed: true },
	"youtube-copy-orange": { title: "在 YouTube 分享面板点击 Copy link（复制链接）", brief: "IMG_8140.PNG，橙色手机壳。", src: "/assets/tutorials/youtube/copy-link-orange.webp", width: 1319, height: 2748, framed: true },
	"youtube-extract-orange": { title: "填入 YouTube 链接，点击 Extract（提取）", brief: "IMG_3411.PNG，橙色手机壳。", src: "/assets/tutorials/youtube/extract-link-orange.webp", width: 1319, height: 2748, framed: true },
	"youtube-quality-orange": { title: "在 Select Quality 中选择清晰度，点击 Download", brief: "IMG_3412.PNG，橙色手机壳。", src: "/assets/tutorials/youtube/select-quality-orange.webp", width: 1319, height: 2748, framed: true },
	"youtube-progress-orange": { title: "查看下载进度、速度及预计剩余时间", brief: "IMG_3413.PNG，橙色手机壳。", src: "/assets/tutorials/youtube/download-progress-orange.webp", width: 1319, height: 2748, framed: true },
	"youtube-photos-orange": { title: "预览已下载的视频，点击 Save to Photos（保存到相册）", brief: "IMG_3414.PNG，橙色手机壳。", src: "/assets/tutorials/youtube/save-photos-orange.webp", width: 1319, height: 2748, framed: true },
	"tiktok-copy-orange": { title: "在 TikTok 分享面板中点击 Copy link（复制链接）", brief: "IMG_3407.PNG，橙色手机壳。", src: "/assets/tutorials/tiktok/copy-link-orange.webp", width: 1319, height: 2748, framed: true },
	"tiktok-extract-orange": { title: "确认分享链接后，点击 Extract（提取）", brief: "IMG_3408.PNG，橙色手机壳。", src: "/assets/tutorials/tiktok/extract-link-orange.webp", width: 1319, height: 2748, framed: true },
	"tiktok-progress-orange": { title: "查看下载进度，点击 View Task（查看任务）", brief: "IMG_3409.PNG，橙色手机壳。", src: "/assets/tutorials/tiktok/download-progress-orange.webp", width: 1319, height: 2748, framed: true },
	"tiktok-photos-orange": { title: "预览视频，点击 Save to Photos（保存到相册）", brief: "IMG_3410.PNG，橙色手机壳。", src: "/assets/tutorials/tiktok/save-photos-orange.webp", width: 1319, height: 2748, framed: true },
	"tiktok-link": { title: "复制 TikTok 分享链接", brief: "展示一条可公开访问、已获授权的视频及分享面板中的复制链接入口。" },
	"youtube-link": { title: "复制 YouTube 视频链接", brief: "展示普通视频的分享面板和复制链接入口，保留足够的平台上下文。" },
	"instagram-link": { title: "复制 Instagram Reels 链接", brief: "展示公开 Reels 的分享或更多菜单，以及实际的复制链接入口。" },
	"x-link": { title: "复制 X 帖子链接", brief: "展示含视频的公开帖子及复制帖子链接的实际入口。" },
	"link-input": { title: "在 ClipDock影随存中提交链接", brief: "展示 App 的链接输入页面和真实操作入口；示例链接不含登录令牌。" },
	"tiktok-result": { title: "TikTok 视频识别结果", brief: "展示该示例链接实际返回的资源、可用清晰度及下载入口，不伪造无水印或清晰度标签。" },
	"youtube-result": { title: "YouTube 视频识别结果", brief: "展示实际可选的资源、格式或清晰度，以及下载入口。" },
	"instagram-result": { title: "Reels 识别结果", brief: "展示与前一张 Reels 示例对应的视频资源和下载入口。" },
	"x-result": { title: "X 视频识别结果", brief: "展示与示例帖子对应的视频资源及下载入口。" },
	"library": { title: "已完成的视频与资料库", brief: "展示下载完成状态、预览或管理入口；隐藏无关个人文件。" },
	"save-photos": { title: "保存到系统相册", brief: "展示 App 中实际的保存到相册入口，可另附必要的照片权限提示。" },
	"clipboard-setting": { title: "复制即下载的开启方式", brief: "展示开启此功能的完整路径或设置页，保留开关说明、系统要求和前置条件。若无独立开关，请提供真实启动方式。" },
	"clipboard-task": { title: "复制后自动出现的下载任务", brief: "在复制示例链接后展示新增任务；最好补充录屏，证明中间没有回 App 粘贴。" },
	"download-notification": { title: "下载完成通知", brief: "展示 App 的真实完成通知，隐藏其他通知及个人信息。" },
	"youtube-playlist": { title: "YouTube 播放列表链接入口", brief: "使用自己的公开短播放列表，展示列表标题、内容及分享列表链接入口。" },
	"youtube-batch": { title: "播放列表批量解析结果", brief: "展示列表内多条视频、选择方式和启动批量下载的真实入口。" },
	"instagram-profile": { title: "Instagram 个人主页链接入口", brief: "展示获授权公开账号的主页及复制或分享主页链接入口，不使用单条 Reels 的链接。" },
	"instagram-batch": { title: "Instagram 主页批量解析结果", brief: "展示主页解析出的作品列表、视频识别和批量下载入口。" },
	"tiktok-profile": { title: "TikTok 个人主页链接入口", brief: "展示自己的公开测试主页及复制主页链接入口，保留与单条视频分享的区别。" },
	"tiktok-batch": { title: "TikTok 主页批量解析结果", brief: "展示主页解析出的多个视频，以及选择和批量下载操作。" },
	"audio-process": { title: "在 Process 页面点击 Extract Audio（提取音频）", brief: "iPhone 17 Pro Max 模拟器真实截图，iOS 26.0。", src: "/assets/tutorials/extract-audio/process-orange.webp", width: 1319, height: 2748, framed: true, highlight: { x: 100, y: 1908, width: 346, height: 252 } },
	"audio-source": { title: "点击 Choose from Photos，从相册选择视频", brief: "选择视频来源；下载列表为空时也可以从相册导入。", src: "/assets/tutorials/extract-audio/select-source-orange.webp", width: 1319, height: 2748, framed: true },
	"audio-result": { title: "出现 Processing Complete，音频已生成为 M4A 文件", brief: "从相册视频实际提取的音频结果。", src: "/assets/tutorials/extract-audio/complete-orange.webp", width: 1319, height: 2748, framed: true },
	"audio-share": { title: "点击 Share File 后，可在分享面板找到保存到“文件”", brief: "真实分享面板，显示 M4A 文件、大小和保存入口。", src: "/assets/tutorials/extract-audio/share-orange.webp", width: 1319, height: 2748, framed: true },
	"join-process": { title: "点击底部 Process，再打开箭头所指的 Stitch Videos", brief: "真实工具总览，橙色外壳；箭头标注拼接入口。", src: "/assets/tutorials/extract-audio/process-orange.webp", width: 1319, height: 2748, framed: true, highlight: { x: 488, y: 722, width: 346, height: 252 } },
	"join-settings": { title: "Stitch Videos 参数页：先预览作为开头的主视频", brief: "真实模拟器截图，使用 AppStoreScreenshotFramer 橙色外壳。", src: "/assets/tutorials/join-videos/settings-orange.webp", width: 1319, height: 2748, framed: true },
	"join-source": { title: "Add Video 支持从下载列表、相册或文件添加片段", brief: "追加视频时的来源选择。", src: "/assets/tutorials/join-videos/add-source-orange.webp", width: 1319, height: 2748, framed: true },
	"join-order": { title: "2 clips added：主视频之后追加两段，用箭头调整顺序", brief: "已实测交换追加片段的顺序。", src: "/assets/tutorials/join-videos/order-orange.webp", width: 1319, height: 2748, framed: true },
	"join-progress": { title: "查看拼接进度，以及完成通知和取消选项", brief: "三段视频实际拼接过程。", src: "/assets/tutorials/join-videos/progress-orange.webp", width: 1319, height: 2748, framed: true },
	"join-result": { title: "预览拼接结果，再点击 Save to Photos 保存到相册", brief: "结果时长 11:46，已验证播放和保存成功提示。", src: "/assets/tutorials/join-videos/result-orange.webp", width: 1319, height: 2748, framed: true },
};

type Step = { title: string; text: string; image?: string; sections?: { title: string; text: string }[] };
export interface Tutorial {
	slug: string;
	category: (typeof categories)[number]["id"];
	title: string;
	description: string;
	intro: string;
	screenshotsReady?: boolean;
	verificationNote?: string;
	steps: Step[];
	tips: { title: string; text: string }[];
	faq: { question: string; answer: string }[];
	related: string[];
}

export const tutorials: Tutorial[] = [
	{
		slug: "download-tiktok-video-iphone", category: "platform",
		screenshotsReady: true,
		title: "2026 年如何在 iPhone 上下载 TikTok 视频并保存到相册？",
		description: "从 TikTok 分享链接开始，使用 ClipDock影随存提取视频、查看下载进度并保存到 iPhone 相册，附四张真实操作截图。",
		intro: "想把一条有权保存的 TikTok 视频留在手机里，可以先复制它的分享链接，再交给 ClipDock影随存识别。本文介绍单条视频的完整流程；iPad 用户也可以按相同思路操作。",
		steps: [
			{ title: "复制视频的分享链接", text: "在 TikTok 中打开目标视频，展开分享面板，点击 Copy link（复制链接）。复制的是这条视频的分享链接，而不是作者主页。本文截图使用英文界面，按钮旁的中文说明便于对照。", image: "tiktok-copy-orange" },
			{ title: "提交到 ClipDock影随存", text: "打开 ClipDock影随存的 Extract 页面，在 Video 分页中确认 Extract from Link 区域的链接。截图中 Fill from Clipboard 已开启，链接已从剪贴板填入；若输入框为空，可点击 Paste（粘贴）。确认后点击 Extract（提取）。", image: "tiktok-extract-orange" },
			{ title: "查看视频下载进度", text: "开始提取后，页面显示 Downloading（下载中）以及进度和文件大小。点击 View Task（查看任务）可以进入对应任务，也可以通过底部 Manager（管理）查看下载状态。等待任务进入 Done（已完成）后再打开视频。", image: "tiktok-progress-orange" },
			{ title: "预览并保存到相册", text: "在 Manager 的 Done 列表打开已完成的视频，点击播放按钮预览。确认内容正确后点击 Save to Photos（保存到相册）。若系统请求照片权限，按提示允许保存，再到照片 App 中检查结果。", image: "tiktok-photos-orange" },
		],
		tips: [{ title: "链接能打开，却没有识别结果", text: "确认该视频仍然公开可访问，再重新复制分享链接。登录限制、地区限制或来源页面变化都可能影响解析；连续重试并不一定能解决来源限制。" }],
		faq: [{ question: "为什么下载完成，却没出现在相册？", answer: "App 资料库和系统相册是两个位置。先确认任务完成，再从 App 执行保存到相册，并检查照片权限。" }, { question: "可以连着保存多个 TikTok 视频吗？", answer: "不同视频链接可以使用复制即下载流程；同一作者的作品则可以查看主页批量下载教程。两者的输入方式不同。" }],
		related: ["copy-tiktok-links-background", "batch-download-tiktok-profile-iphone", "video-to-live-photo-iphone"],
	},
	{
		slug: "download-youtube-video-iphone", category: "platform",
		screenshotsReady: true,
		title: "2026 年如何在 iPhone 和 iPad 上下载 YouTube 视频？",
		description: "使用 ClipDock影随存在 iPhone 和 iPad 上提取 YouTube 视频、选择清晰度、查看下载进度并保存到相册，附五张真实操作截图。",
		intro: "这篇教程针对一条 YouTube 视频的保存。先从具体视频取得分享链接，再查看 ClipDock影随存返回的资源；若你要保存整个播放列表，请使用对应的批量教程。",
		steps: [
			{ title: "复制 YouTube 视频链接", text: "在 YouTube 中打开目标视频，点击分享按钮，在分享面板中选择 Copy link（复制链接）。这里复制的是当前视频的链接；如果要保存播放列表，请使用对应的批量下载教程。本文截图为英文界面，可对照按钮旁的中文说明操作。", image: "youtube-copy-orange" },
			{ title: "提交链接并提取视频", text: "打开 ClipDock影随存的 Extract 页面，在 Video 分页找到 Extract from Link 区域。点击 Paste（粘贴）填入链接；如果链接已经从剪贴板填入，确认后直接点击 Extract（提取）。", image: "youtube-extract-orange" },
			{ title: "选择清晰度并开始下载", text: "提取后，在 Select Quality（选择清晰度）面板中选择所需画质。截图中的示例提供 1080p、720p、480p 等选项，并显示 MP4 格式与预计大小。确认选项后点击 Download（下载）。若希望以后使用同一画质，可开启底部的默认清晰度开关；可用画质以每次实际解析结果为准。", image: "youtube-quality-orange" },
			{ title: "查看下载进度", text: "下载开始后，页面会显示 Downloading（下载中）、百分比、下载速度、预计剩余时间和已下载大小。点击 View Task（查看任务）或底部 Manager（管理）查看任务，等待下载完成。", image: "youtube-progress-orange" },
			{ title: "预览并保存到相册", text: "在 Manager 中打开已完成的视频，点击播放按钮检查画面和声音。如果结果页包含多项资源，可用左右箭头切换并确认目标视频。点击 Save to Photos（保存到相册），按需允许照片权限，再到照片 App 中查看保存结果。", image: "youtube-photos-orange" },
		],
		tips: [{ title: "下载的文件没有声音", text: "先检查选中的资源类型，再尝试其他实际可用的视频资源。只有在你另有对应音轨时，音视频合并工具才有可用的音频输入。" }],
		faq: [{ question: "能直接下载整个频道吗？", answer: "频道属于批量解析任务，不是单视频下载。要使用频道或列表入口，并以实际返回的可用作品为准。" }, { question: "能保证所有视频都有高清资源吗？", answer: "不能。可用资源受源文件、平台响应和访问条件影响，以识别结果为准。" }],
		related: ["download-youtube-playlist-iphone", "extract-audio-iphone", "copy-link-auto-download-iphone"],
	},
	{
		slug: "download-instagram-reels-iphone", category: "platform",
		screenshotsReady: true,
		title: "2026 年如何在 iPhone 上下载 Instagram Reels？",
		description: "使用 ClipDock影随存在 iPhone 或 iPad 上下载 Instagram Reels，从复制分享链接、提取视频到保存相册，附四张真实操作截图。",
		intro: "保存一条 Instagram Reels，关键是取得作品本身的分享链接。这篇从单条 Reels 的复制链接入口讲起，再完成识别、下载与相册保存。",
		steps: [
			{ title: "复制 Reels 的作品链接", text: "在 Instagram 打开目标 Reels，点击分享按钮，在分享面板底部选择 Copy link（复制链接）。这里复制的是当前作品的链接，而不是作者主页。本文截图为英文界面，可对照按钮旁的中文说明操作。", image: "instagram-copy-orange" },
			{ title: "提交链接并提取视频", text: "打开 ClipDock影随存的 Extract 页面，在 Video 分页找到 Extract from Link 区域。截图中链接已从剪贴板自动填入；如果输入框为空，点击 Paste（粘贴）。确认是目标 Reels 的链接后，点击 Extract（提取）。", image: "instagram-extract-orange" },
			{ title: "查看下载进度", text: "下载开始后，页面显示 Downloading（下载中）、完成百分比和已下载大小。点击 View Task（查看任务）或底部 Manager（管理）查看任务，等待视频下载完成。", image: "instagram-progress-orange" },
			{ title: "预览并保存到相册", text: "在 Manager 中打开已完成的视频，点击播放按钮检查画面和声音。如果预览页有多项资源，可用左右箭头切换，确认要保存的视频。点击 Save to Photos（保存到相册），按需允许照片权限，再到照片 App 中查看结果。", image: "instagram-photos-orange" },
		],
		tips: [{ title: "私密账号或已失效作品", text: "一个链接并不等于访问授权。若来源要求特定登录权限、作品已删除或链接已失效，公开链接流程可能无法取得资源。" }],
		faq: [{ question: "这个流程也适用于 Instagram Story 吗？", answer: "本文仅针对 Reels。Story 的链接、有效时间和访问条件不同，不应把单条 Reels 的结果当作 Story 支持证明。" }, { question: "如何保存同一作者的多条视频？", answer: "使用作者主页链接走批量解析流程，详见 Instagram 主页批量下载教程。" }],
		related: ["batch-download-instagram-profile-iphone", "copy-link-auto-download-iphone", "video-to-live-photo-iphone"],
	},
	{
		slug: "download-x-twitter-video-iphone", category: "platform",
		screenshotsReady: true,
		title: "2026 年如何在 iPhone 上下载 X（Twitter）视频？",
		description: "使用 ClipDock影随存在 iPhone 或 iPad 上下载 X（Twitter）视频，从复制帖子链接、选择清晰度到保存相册，附五张真实操作截图。",
		intro: "在 X 上看到需要保存的视频时，应复制包含该视频的帖子链接。昵称、个人主页和文字截图都不能代替目标帖子的地址。",
		steps: [
			{ title: "复制含视频的帖子链接", text: "在 X 中打开目标帖子，点击分享按钮，在面板底部选择 Copy Link（复制链接）。截图中央显示的是 X Chat 设置提示，复制链接入口位于左下角，不是中央的 Set up 按钮。本文截图为英文界面，可对照中文说明操作。", image: "x-copy-orange" },
			{ title: "提交链接并提取视频", text: "打开 ClipDock影随存的 Extract 页面，在 Video 分页找到 Extract from Link 区域。点击 Paste（粘贴）填入帖子链接；如果链接已经填入，确认后直接点击 Extract（提取）。", image: "x-extract-orange" },
			{ title: "选择清晰度并开始下载", text: "提取后，在 Select Quality（选择清晰度）面板中核对视频缩略图并选择画质。截图中的示例提供 720p、480p 和 360p 的 MP4 选项，并显示预计大小。点击 Download（下载）开始保存；可用画质以实际解析结果为准。底部开关可将所选清晰度设为默认。", image: "x-quality-orange" },
			{ title: "查看下载进度", text: "下载开始后，页面显示 Downloading（下载中）、完成百分比、下载速度、预计剩余时间和已下载大小。点击 View Task（查看任务）或底部 Manager（管理）查看任务，等待下载完成。", image: "x-progress-orange" },
			{ title: "预览并保存到相册", text: "在 Manager 中打开已完成的视频，点击播放按钮检查画面和声音。如果预览页有多项资源，可用左右箭头切换，确认目标视频。点击 Save to Photos（保存到相册），按需允许照片权限，再到照片 App 中查看保存结果。", image: "x-photos-orange" },
		],
		tips: [{ title: "帖子有媒体，但不是想要的视频", text: "先检查链接指向的是原帖、引用帖还是个人主页。不要仅凭帖子文字判断，应该以最终识别的实际媒体为准。" }],
		faq: [{ question: "账号需要登录才能查看怎么办？", answer: "这类内容可能受访问条件限制。复制链接本身不能绕过登录、私密账号或其他访问控制。" }, { question: "能下载后直接提取声音吗？", answer: "可以对已保存且含音轨的视频使用音频提取工具，具体输出格式以工具实际提供的选项为准。" }],
		related: ["copy-link-auto-download-iphone", "extract-audio-iphone", "download-tiktok-video-iphone"],
	},
	{
		slug: "copy-link-auto-download-iphone", category: "clipboard",
		screenshotsReady: true,
		title: "iPhone 如何只复制链接就下载视频？无需反复切换 App",
		description: "了解 ClipDock影随存复制即下载的准备流程、单条验证和完成通知，减少在来源 App 与下载器之间来回粘贴。",
		intro: "复制即下载适合从不同作品中逐条挑选视频：你在来源 App 复制分享链接，ClipDock影随存在功能已就绪时识别并创建任务。它和一次解析整个主页的批量下载是两种不同流程。",
		steps: [
			{ title: "开启复制即下载与后台检测", text: "打开 ClipDock影随存的 Extract 页面，在 Video 分页开启 Fill from Clipboard（从剪贴板填入）、Auto-download Links（自动下载链接）和 Detect in Background（后台检测），如图中的三个绿色开关。", image: "clipboard-enable-orange" },
			{ title: "切到视频平台，保持悬浮窗开启", text: "切换到 TikTok 等视频平台，确认屏幕上出现 ClipDock影随存的画中画悬浮窗。图中 Copy a link to download 提示表示可以开始复制链接；可以将悬浮窗滑动到屏幕边缘收起，但请保持画中画开启，不要关闭悬浮窗。", image: "clipboard-pip-orange" },
			{ title: "复制想保存的视频链接", text: "刷到喜欢的视频后打开分享面板，点击 Copy link（复制链接），不需要再回到 ClipDock影随存粘贴。悬浮窗提示可以滑到屏幕边缘收起，但要保持画中画开启。", image: "clipboard-copy-orange" },
			{ title: "边刷边复制，查看后台下载提示", text: "观看录屏中的连续操作：复制分享链接后，ClipDock影随存在后台识别资源并创建下载任务，你可以继续浏览其他视频。留意系统通知中的任务状态；浏览结束后，到 Manager（管理）检查结果，需要相册副本时再执行保存到相册。", image: "clipboard-demo" },
		],
		tips: [{ title: "复制了链接，却没有自动下载", text: "依次检查功能状态、链接是否支持、网络连接以及系统提示。手动粘贴也失败时，问题更可能在来源链接；手动可用而自动没有响应时，应优先检查复制即下载的运行条件。" }],
		faq: [{ question: "关闭 App 或锁屏后一定能继续识别吗？", answer: "不能把后台功能理解为无条件常驻。锁屏、强制退出和系统资源调度下的具体表现，需要按照当前 App 版本和实际测试确认。" }, { question: "复制即下载等于批量解析主页吗？", answer: "不等于。前者接收你逐条复制的分享链接，后者从一个主页或列表链接提取多条作品。" }],
		related: ["copy-tiktok-links-background", "download-youtube-playlist-iphone", "download-x-twitter-video-iphone"],
	},
	{
		slug: "copy-tiktok-links-background", category: "clipboard",
		screenshotsReady: true,
		title: "如何边刷 TikTok 边复制链接下载视频？",
		description: "在 TikTok 中逐条挑选视频，通过 ClipDock影随存复制即下载创建任务，了解如何验证接收、查看完成通知和避免漏掉链接。",
		intro: "收藏来自不同作者的几条视频时，逐条复制分享链接比解析完整主页更符合选择过程。先让 ClipDock影随存的复制即下载功能就绪，再回到 TikTok 浏览和挑选。",
		steps: [
			{ title: "开启自动下载与后台检测", text: "在 ClipDock影随存的 Extract 页面打开 Video 分页，开启 Fill from Clipboard（从剪贴板填入）、Auto-download Links（自动下载链接）和 Detect in Background（后台检测），确认三个开关均为绿色。", image: "clipboard-enable-orange" },
			{ title: "回到 TikTok，确认悬浮窗已出现", text: "切回 TikTok 浏览视频，保持 ClipDock影随存的画中画悬浮窗开启。看到 Copy a link to download（复制链接即可下载）提示后，就可以开始挑选想保存的作品。", image: "clipboard-pip-orange" },
			{ title: "打开分享面板并复制链接", text: "在目标视频上点击分享按钮，选择 Copy link（复制链接），然后继续浏览。不需要来回切换 App；若悬浮窗挡住画面，可以按提示滑到屏幕边缘收起，保持画中画开启。", image: "clipboard-copy-orange" },
			{ title: "观看连续复制与后台下载演示", text: "录屏展示了边刷 TikTok 边复制多个作品链接的过程，以及后台识别、创建下载任务的通知。确认第一条链接已接收后再继续收集；浏览结束后到 Manager 检查完成与失败任务，避免只凭通知判断结果。", image: "clipboard-demo" },
		],
		tips: [{ title: "什么时候改用主页批量下载？", text: "如果目标是同一作者的一组作品，复制主页链接更合适。如果只想选取来自多个作者的少量作品，继续使用逐条复制流程。" }],
		faq: [{ question: "为什么这篇和普通 TikTok 下载教程分开？", answer: "普通教程是复制后回 App 手动提交；这里重点是首次准备、自动接收验证和连续收集的过程。" }, { question: "复制时有系统权限提示怎么办？", answer: "按当前系统和 App 的提示理解并处理权限。不要默认忽略提示后功能仍然正常，也不需要提供账号密码给教程。" }],
		related: ["copy-link-auto-download-iphone", "batch-download-tiktok-profile-iphone", "download-tiktok-video-iphone"],
	},
	{
		slug: "download-youtube-playlist-iphone", category: "batch",
		screenshotsReady: true,
		title: "2026 年如何在 iPhone/iPad 上批量下载 YouTube 播放列表？",
		description: "取得 YouTube 播放列表链接，在 ClipDock影随存中解析多条视频、确认结果并创建批量任务，处理缺失条目和下载失败。",
		intro: "播放列表批量下载的输入是一份列表，而不是其中某个视频。适合备份自己的系列作品或已获授权的课程片段，减少逐条复制视频链接的操作。",
		steps: [
			{ title: "在 Batch 分页填入播放列表链接", text: "复制 YouTube 播放列表的分享链接，打开 ClipDock影随存的 Extract 页面，切换到 Batch（批量）分页，点击 Paste（粘贴）填入。确认使用的是播放列表链接，而不是单个视频的地址。", image: "playlist-input-orange" },
			{ title: "加载播放列表", text: "点击 Load list（加载列表），等待 Loading list 提示结束。加载列表只是获取可选择的作品，不会立即开始下载；下一步还需要选择条目并加入队列。", image: "playlist-loading-orange" },
			{ title: "选择视频并加入下载队列", text: "核对列表中的视频，使用 All、Video、Image 筛选类型，点击条目右侧的勾选按钮调整选择，或用 Select loaded 选择已加载条目。通过 Batch quality 设置批量画质；截图中跟随下载设置。确认后点击 Add to queue（加入队列）。示例选中了 24 项，实际数量以加载结果为准。", image: "playlist-select-orange" },
			{ title: "查看排队状态与下载进度", text: "打开底部 Manager（管理），在 Active 中查看本次任务。Queued 表示排队等待，开始下载后会显示进度、速度和预计剩余时间。通过 Done 查看已完成任务，通过 Failed 检查失败任务；图中 Active 24 表示仍在处理的 24 项，并非全部下载完成。", image: "playlist-queue-orange" },
		],
		tips: [{ title: "解析数量与列表显示数量不一致", text: "先检查是否有不可访问的作品，再确认是否复制了正确的列表链接。列表显示数量不等于本次实际可下载数量，不要盲目重复提交整份列表。" }],
		faq: [{ question: "播放列表教程能直接当频道下载教程使用吗？", answer: "不能完全等同。两者都属于批量任务，但输入页面和覆盖作品范围不同，应检查实际解析结果。" }, { question: "批量完成后会自动进入相册吗？", answer: "应先查看 App 的实际保存位置。下载到资料库与导出到系统相册是两件事。" }],
		related: ["download-youtube-video-iphone", "join-videos-iphone", "batch-download-tiktok-profile-iphone"],
	},
	{
		slug: "batch-download-instagram-profile-iphone", category: "batch",
		title: "如何在 iPhone 上批量下载 Instagram 个人主页视频？",
		description: "通过 Instagram 作者主页链接批量解析作品，核对视频与其他媒体，再使用 ClipDock影随存集中下载和管理。",
		intro: "保存同一个 Instagram 作者的多条作品时，可以从主页链接开始批量解析。主页可能同时包含图片、视频和多媒体帖子，所以下载前要确认资源类型与范围。",
		steps: [
			{ title: "取得作者主页链接", text: "打开 Instagram 的目标个人主页，从实际分享入口取得主页链接。不要把单条 Reels 地址当作主页输入；提交前核对账号是否正确。", image: "instagram-profile" },
			{ title: "批量解析并核对媒体", text: "将主页链接交给 ClipDock影随存的批量解析流程。查看返回的作品，区分视频、图片与其他资源，确认本次识别到的是所需内容。", image: "instagram-batch" },
			{ title: "选择视频并保存", text: "根据实际提供的选择方式确定下载范围，再启动任务。若主页内媒体类型混合，应先检查每个目标条目，避免保存大量不需要的图片。", image: "instagram-batch" },
			{ title: "集中检查下载结果", text: "在资料库预览已完成的视频，再按需求保存到相册或分享。某些作品没有返回时，先判断是否属于不同内容类型或访问受限条目。", image: "library" },
		],
		tips: [{ title: "不要把主页解析理解为所有内容永久备份", text: "主页解析范围以实际结果为准，不能据此推断 Story、私密内容、已删除内容或任何历史作品都会包含在内。" }],
		faq: [{ question: "只要一条 Reels，是否也要解析主页？", answer: "不需要。直接复制作品链接走单视频流程，会更容易确认目标资源。" }, { question: "同一主页可以反复提交吗？", answer: "重提之前先核对已保存作品，避免重复下载消耗空间。是否有重复提醒或增量能力，以当前版本实际功能为准。" }],
		related: ["download-instagram-reels-iphone", "batch-download-tiktok-profile-iphone", "join-videos-iphone"],
	},
	{
		slug: "batch-download-tiktok-profile-iphone", category: "batch",
		title: "如何在 iPhone/iPad 上批量下载 TikTok 主页视频？",
		description: "使用 TikTok 作者主页链接批量提取视频，确认实际可下载作品并保存到设备，区分主页批量下载与逐条复制下载。",
		intro: "目标集中在同一个 TikTok 作者时，可以用主页链接一次解析多条视频。若视频来自不同作者且只想挑选个别作品，复制即下载通常更符合你的选择方式。",
		steps: [
			{ title: "复制作者主页链接", text: "进入目标作者主页，从主页分享入口复制链接。检查它指向作者而不是当前视频；Hashtag 页面和主页也是不同类型的输入。", image: "tiktok-profile" },
			{ title: "提交主页并等待解析", text: "在 ClipDock影随存批量解析流程中提交主页地址，查看返回的作品列表。核对作者、视频内容和实际可下载的条目。", image: "tiktok-batch" },
			{ title: "确定作品范围并下载", text: "按界面支持的方式选择要保存的作品，检查任务范围后启动下载。第一次建议从少量条目开始，以便确认资源、画质及完成后的保存方式。", image: "tiktok-batch" },
			{ title: "检查缺失或失败的作品", text: "任务完成后核对资料库。下载失败与解析时根本没有返回是两种情况：前者检查网络和任务，后者检查原作品的可访问性及来源限制。", image: "library" },
		],
		tips: [{ title: "主页批量与复制即下载如何选择", text: "一个主页里有许多目标作品时使用批量解析；跨多个账号逐条挑选视频时使用复制即下载。不必为了保存两条作品下载整个账号。" }],
		faq: [{ question: "主页上显示的所有视频都一定能下载吗？", answer: "不保证。可访问性、平台返回结果和资源状态会影响本次实际可下载范围。" }, { question: "批量任务能在后台进行吗？", answer: "App 支持后台下载，但实际持续情况会受到系统调度和网络条件影响。应查看任务状态确认进度。" }],
		related: ["copy-tiktok-links-background", "download-tiktok-video-iphone", "download-youtube-playlist-iphone"],
	},
	{
		slug: "extract-audio-iphone", category: "tools",
		screenshotsReady: true,
		title: "如何在 iPhone 和 iPad 上提取视频音频？",
		description: "使用 ClipDock影随存从 iPhone 相册视频中提取 M4A 音频，查看处理结果并打开文件分享入口，附四张真实操作截图。",
		intro: "想单独保存视频里的声音？打开 ClipDock影随存的 Extract Audio（提取音频），从相册选中视频，即可生成独立的音频文件。下面用四张真实操作截图说明完整步骤。截图来自 iPhone 17 Pro Max 模拟器（iOS 26.0），App 使用英文界面，按钮附有中文对照；iPad 用户可对照相同功能入口操作。",
		steps: [
			{ title: "打开提取音频工具", text: "打开 ClipDock影随存，点击底部 Process（处理）分页，在工具列表中找到 Extract Audio（提取音频）。截图中的入口位于最下排左侧。操作前，准备好一段有声音的视频，例如自己的讲解、访谈或已获授权的素材。", image: "audio-process" },
			{ title: "从相册选择视频", text: "在 Select Video（选择视频）页面点击 Choose from Photos（从相册选择），再在系统照片选择器中点选要处理的视频。即使页面显示没有已下载视频，也不影响从相册导入。如果素材保存在“文件”App，可使用页面上的 Choose from Files（从文件选择）入口。", image: "audio-source" },
			{ title: "等待音频提取完成", text: "选中视频后，App 会直接开始提取，无需再点击开始按钮。本次操作没有出现格式设置页，完成后弹出 Processing Complete（处理完成），生成的文件名以 .m4a 结尾。点击 Share File（分享文件）继续导出；Done（完成）用于关闭提示。", image: "audio-result" },
			{ title: "打开分享与保存入口", text: "点击 Share File 后，分享面板会显示音频文件及其大小，截图中本次输出约为 2.4 MB。需要单独保存时，使用下方的保存到“文件”入口；需要交给其他 App 时，可查看“更多”中的可用选项。保存后建议打开音频试听，确认声音和时长符合预期。", image: "audio-share" },
		],
		tips: [{ title: "提取后没有声音怎么办？", text: "先播放原视频，并确认播放器没有静音。原文件没有音轨时，提取工具无法恢复不存在的声音；提取也不会自动改善原始音质。" }, { title: "下载列表为空，仍然可以继续", text: "No downloaded videos available for processing 只表示 App 中没有可供处理的已下载视频。本文使用上方的 Choose from Photos，从系统相册直接选择素材。" }],
		faq: [{ question: "可以选择 MP3 等其他格式吗？", answer: "本次实测中，选中视频后直接生成 M4A，没有出现格式选择界面。本文按这一实际流程演示，不包含 MP3 转换步骤。" }, { question: "为什么照片 App 里找不到输出？", answer: "提取结果是音频文件，不是视频或照片。请从 Share File 打开分享面板，使用保存到“文件”等入口管理音频。" }, { question: "能直接从视频分享链接提取声音吗？", answer: "本文演示的是处理相册里的已有视频。如果只有分享链接，可以先按对应平台教程保存视频，再进行音频提取。" }],
		related: ["download-youtube-video-iphone", "join-videos-iphone", "video-to-live-photo-iphone"],
	},
	{
		slug: "join-videos-iphone", category: "tools",
		screenshotsReady: true,
		title: "如何在 iPhone 和 iPad 上拼接多个视频？",
		description: "使用 ClipDock影随存拼接相册视频，了解主视频、追加片段数量、上下箭头排序、处理进度和结果保存，附六张真实操作截图。",
		intro: "把旅行片段、活动记录或分段拍摄的讲解按顺序接起来，可以使用 ClipDock影随存的 Stitch Videos（拼接视频）。本文用三个相册视频演示从导入、排序到保存的完整流程，并逐项解释设置页。截图来自 iPhone 17 Pro Max 模拟器（iOS 26.0），英文按钮附中文对照；iPad 用户可对照相同功能入口操作。",
		steps: [
			{ title: "在 Process 页面打开拼接工具", text: "打开 ClipDock影随存，点击底部 Process（处理）分页。在工具总览中，找到第二排中间的 Stitch Videos（拼接视频），点击进入。截图中的橙色箭头和边框标出了这个入口。", image: "join-process" },
			{ title: "选择主视频，读懂预览信息", text: "进入 Select Video（选择视频）后，通过 Choose from Photos（从相册选择）选中第一段视频。这段是主视频，会作为拼接结果的开头。进入截图中的设置页后，先核对素材。", image: "join-settings", sections: [
				{ title: "预览、文件名与时间轴", text: "点击画面中央的播放按钮预览主视频。下方显示文件名、播放位置和主视频时长，便于确认选对了版本。本例主视频时长为 02:26；这里显示的还不是拼接后总时长。" },
				{ title: "640×338 是什么？", text: "这是当前主视频的画面尺寸，单位为像素。它是素材信息，不是输出尺寸选择器。本次拼接设置页没有独立的分辨率、帧率或画质选项。" },
				{ title: "为什么已经选了视频，却显示 0 clips added？", text: "这个数字只统计通过 Add Video 追加的片段，不包含上方主视频。0 表示还没有追加片段；要拼接多个视频，下一步至少再添加一段。" },
			] },
			{ title: "添加后续视频片段", text: "点击 Processing Options（处理选项）下的 Add Video（添加视频），在 Select Videos to Stitch 弹窗里选择素材来源。本例继续选择 Choose from Photos。", image: "join-source", sections: [
				{ title: "三个来源如何选择", text: "Choose from Downloads 对应 App 中已下载的视频；Choose from Photos 对应系统相册；Choose from Files 用于从文件选择器导入。按素材所在位置选择即可，不需要为了拼接先重新下载相册视频。" },
				{ title: "在相册中多选并确认", text: "点选要追加的视频后，缩略图上会出现选中编号，再点击右上角的蓝色勾号完成导入。需要更多片段时，可以再次点击 Add Video。返回后检查列表数量，避免把主视频重复添加一次。" },
			] },
			{ title: "核对数量，调整播放顺序", text: "截图中显示 2 clips added，表示在主视频后追加了两段，最终共三段。列表从 Clip 2 开始编号，按从上到下的顺序接在主视频之后。", image: "join-order", sections: [
				{ title: "上下箭头：调整追加片段顺序", text: "点击向上或向下箭头移动对应片段。本次已实测把 05:11 的片段移到 04:10 的片段前面。最上面的追加片段不能继续上移，最下面的不能继续下移，因此边界处的箭头会变灰；只有一段追加视频时，两个方向都不可用。" },
				{ title: "主视频与追加列表的区别", text: "上方主视频固定作为开头，不在追加片段的排序列表里。如果想换一个视频开场，返回重新选择主视频，再添加后续片段。" },
				{ title: "缩略图、时长与移除按钮", text: "每行的缩略图、文件名和时长帮助你区分片段；红色垃圾桶是该追加片段的移除入口。开始前核对顺序、重复素材和总内容。本例顺序为主视频 02:26 → Clip 2 05:11 → Clip 3 04:10。" },
			] },
			{ title: "开始拼接，查看处理进度", text: "确认片段后点击 Start Processing（开始处理）。进度弹窗会显示 Processing video 和完成百分比，等待结果页出现后再检查成片。", image: "join-progress", sections: [
				{ title: "完成通知与后台提示", text: "较长的处理过程中会出现 Notify me when complete（完成时通知我）开关。需要提醒时可以开启，并按系统提示处理通知权限。弹窗提示可以切到后台，App 会尽可能继续处理；这不代表系统一定允许任务一直在后台运行。" },
				{ title: "Cancel 是取消处理", text: "弹窗底部 Cancel 用于取消当前任务，不是把进度窗口收起。仍然需要这次输出时，保持任务运行并等待完成。" },
			] },
			{ title: "预览成片并保存到相册", text: "完成后结果页会显示生成的视频、时间轴和缩略图。本次输出文件以 _concat.mp4 结尾，结果页显示 11:46，已验证能够播放。输入列表的时长按秒显示，核对总时长时应以实际输出为准。", image: "join-result", sections: [
				{ title: "保存前检查哪些地方", text: "点击播放按钮预览，重点查看开头、结尾与两段连接附近，确认顺序、画面比例和声音衔接。对本例可重点检查约 02:26 和 07:37 附近；完整观看或试听后再决定是否保留成片。" },
				{ title: "Save to Photos：保存到相册", text: "点击 Save to Photos（保存到相册）。首次使用可能需要允许 App 添加照片和视频；保存完成后会出现 Saved to Photos 提示。本次实测已收到这一成功提示，可以再到照片 App 查看成片。" },
				{ title: "继续处理、分享与完成", text: "Keep Processing 是继续处理入口；Share File 打开文件分享；Done 关闭结果页。需要把成片留在相册时，应先点击 Save to Photos，不能把 Done 当作保存按钮。" },
			] },
		],
		tips: [{ title: "横竖屏或尺寸不一致怎么办？", text: "本次拼接页没有单独的画布、裁切或留边设置。对画面比例有要求时，先用 Resize / Canvas（调整尺寸／画布）或相应工具准备素材，再进行拼接，并检查输出效果。" }, { title: "暂时不要离开当前设置页", text: "右上角魔棒会将当前主视频带入 Quick Edit（快速编辑）工具选择。本次实测从那里重新进入 Stitch Videos 后，追加数量重置为 0。如果已排好顺序，直接开始处理；切换工具后应重新核对追加列表。" }],
		faq: [{ question: "为什么 2 clips added 却拼出了三段？", answer: "计数只包含追加视频，不包含开头的主视频。主视频一段加追加两段，共三段。" }, { question: "可以把追加片段移到主视频前面吗？", answer: "本次界面的上下箭头只调整追加列表内部顺序，第一段追加视频的向上箭头为灰色。需要更换开头时，应重新选择主视频。" }, { question: "这里能设置转场、背景音乐或输出画质吗？", answer: "本次拼接设置页没有这些选项。页面主要用于预览主视频、添加片段及调整追加顺序；需要其他效果时，使用对应处理工具。" }, { question: "点击 Done 后为什么相册里没有成片？", answer: "Done 只关闭结果页。需要另行点击 Save to Photos，并确认保存成功及相册权限。" }],
		related: ["extract-audio-iphone", "video-to-live-photo-iphone", "download-youtube-playlist-iphone"],
	},
	...videoToolTutorials,
];

// Keep tool cards in the same order as the app’s Process grid.
const orderedTools = tutorials.filter(article => article.category === "tools").sort((a, b) => videoToolOrder.indexOf(a.slug) - videoToolOrder.indexOf(b.slug));
let toolIndex = 0;
for (let index = 0; index < tutorials.length; index++) {
	if (tutorials[index].category === "tools") tutorials[index] = orderedTools[toolIndex++];
}

export const articleHref = (slug: string) => `/zh-Hans/articles/${slug}/`;
