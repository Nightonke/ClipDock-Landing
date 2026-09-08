export const capabilities = [
	"通过分享链接下载", "通过网址下载", "复制即下载", "无需来回切换App",
	"识别下载网页里的视频", "个人主页批量下载", "频道页批量下载", "Hashtag批量下载",
	"播放列表批量下载", "合集批量下载", "后台下载", "视频管理", "保存到相册",
	"裁剪", "转码", "拼接", "调整尺寸", "旋转", "镜像", "变速", "提取音频",
	"合并音视频", "倒放", "添加水印", "视频转GIF", "视频转实况（Live Photo）",
	"批量视频截图", "修改MD5", "YouTube 字幕提取",
];

const supportedPlatforms = "YouTube、Sora(OpenAI)、Instagram(包含快拍)、Twitter、TK、Threads、Facebook、Vimeo、afreecatv、Tumblr、Triller、Likee、Twitch、Pinterest、Snapchat、Reddit、VK、Dailymotion、SoundCloud、Lemon8、Suno音乐、AcFun、B、天猫、闲鱼、大众点评、UC视频、趣头条、皮皮虾、皮皮搞笑、微博、秒拍、绿洲、小咖秀、美图秀秀、美拍、云音乐、央视网(CCTV)、新华网、虎嗅、虎牙、斗鱼、糖豆、喜马拉雅、陌陌、映客、迅雷、WIDE短视频、最右、开眼、酷燃、剪映、糗事百科、梨视频、**等上千个平台";

export const featureSections = [
	{
		number: "01",
		video: "share-link",
		kicker: "从链接到视频",
		title: "从分享链接\n下载视频",
		description:
			"只需粘贴各大平台的分享链接，或者是某些网站的网址，ClipDock影随存 可以下载高清无水印的视频/图片/音频。",
		points: ["支持上千平台", "高清无水印", "支持各种视频/图片/音频格式", "可以在切到后台时继续保持下载"],
		platformDetails: supportedPlatforms,
		placeholder: "链接识别界面截图",
		tone: "blue",
	},
	{
		number: "02",
		video: "copy-background",
		kicker: "无需粘贴，只需复制",
		title: "不需要来回切换应用，复制链接即可在后台下载",
		description:
			"尽情地在YouTube、TikTok、X等平台刷视频吧，刷到喜欢的就复制分享链接，ClipDock影随存会自动在后台帮您下载，下载完会通知您。",
		points: ["减少您的操作", "不打断您的娱乐和工作"],
		placeholder: "下载任务界面截图",
		tone: "lime",
	},
	{
		number: "03",
		video: "web-long-press",
		kicker: "能播，就能保存",
		title: "长按网页里正在播放的视频，即可下载",
		description:
			"通过内置浏览器，打开网页，使视频播放起来，注意跳过烦人的广告，然后长按就可以下载了。也可以通过右下角的检测按钮找到视频。",
		points: ["几乎能下载所有网页视频", "批量检测网页里的所有视频", "长按视频精准定位下载"],
		placeholder: "内置浏览器视频下载界面截图",
		tone: "coral",
	},
	{
		number: "04",
		video: "batch-playlist",
		kicker: "批量下载",
		title: "整个频道，\n一次下载。",
		description: "支持 YouTube、Instagram、X、TikTok 等平台的频道、个人主页和播放列表。解析列表中的视频，批量保存到本地。",
		points: ["支持上千平台"],
		platformDetails: "支持YouTube(频道页、Shorts、Hashtag、播放列表)、Instagram(作者主页、Hashtag列表)、Twitter(X)、TK(作者主页、Hashtag列表)、D(主页、合集)、B(主页、合集)、微博、好看等主页批量提取",
		placeholder: "频道、主页与播放列表批量下载界面截图",
		tone: "blue",
	},

	{
		number: "05",
		kicker: "YouTube 字幕提取",
		title: "视频字幕\n单独保存",
		description: "粘贴 YouTube 视频链接，提取已有字幕。选好需要的语言与文件格式，保存到文件或分享给其他 App，方便阅读、整理和后续使用。",
		points: ["支持已有的自动生成字幕与多语言轨道", "可多选字幕，支持 SRT、VTT 等七种格式", "保存到“文件”，或直接分享"],
		carousel: true,
		tutorial: "extract-youtube-subtitles-iphone",
		tone: "lime",
	},
];

export const tools = [
	{ mark: "CUT", slug: "trim-video-iphone", title: "视频裁剪", description: "截取需要的视频片段，留下精彩部分。" },
	{ mark: "CONV", slug: "transcode-video-iphone", title: "视频转码", description: "为不同使用场景转换视频格式。" },
	{ mark: "JOIN", slug: "join-videos-iphone", title: "视频拼接", description: "把多个片段按顺序合成为一个视频。" },
	{ mark: "MIX", slug: "interleave-videos-iphone", title: "交错拼接", description: "将多个视频分段，交替拼接不同素材。" },
	{ mark: "GRID", slug: "segment-grid-video-iphone", title: "分段网格", description: "将一个视频的不同时间片段排成网格。" },
	{ mark: "SIZE", slug: "resize-video-iphone", title: "调整尺寸", description: "调整输出视频的画面尺寸。" },
	{ mark: "ROTATE", slug: "rotate-video-iphone", title: "视频旋转", description: "旋转视频画面，调整到合适的方向。" },
	{ mark: "MIRROR", slug: "mirror-video-iphone", title: "视频镜像", description: "翻转画面，制作镜像效果。" },
	{ mark: "SPEED", slug: "change-video-speed-iphone", title: "视频变速", description: "加快或放慢播放速度，调整视频节奏。" },
	{ mark: "AUDIO", slug: "extract-audio-iphone", title: "提取音频", description: "将视频中的声音单独保存为音频。" },
	{ mark: "SOUND", slug: "edit-video-audio-iphone", title: "音频编辑", description: "为视频静音或调整音量，处理画面中的声音。" },
	{ mark: "MERGE", slug: "merge-audio-video-iphone", title: "合并音视频", description: "把音频与视频合并为一个文件。" },
	{ mark: "REVERSE", slug: "reverse-video-iphone", title: "视频倒放", description: "让视频从结尾开始反向播放。" },
	{ mark: "MARK", slug: "add-watermark-video-iphone", title: "添加水印", description: "为自己的视频添加文字或图像标记。" },
	{ mark: "GIF", slug: "video-to-gif-iphone", title: "视频转 GIF", description: "把视频片段转换为便于分享的动图。" },
	{ mark: "LIVE", slug: "video-to-live-photo-iphone", title: "视频转实况", description: "将视频转换为实况照片（Live Photo）。" },
	{ mark: "FRAMES", slug: "capture-video-frames-iphone", title: "批量视频截图", description: "批量提取视频画面，保存为截图。" },
	{ mark: "MD5", slug: "change-video-md5-iphone", title: "修改 MD5", description: "修改视频文件的 MD5 值。" },
];

export const faqs = [
	{
		question: "ClipDock影随存 支持哪些链接？",
		answer:
			`ClipDock影随存 支持 ${supportedPlatforms}。`,
	},
	{
		question: "为什么有些链接无法识别？",
		answer:
			"页面结构变化、登录状态、地区限制、网络环境、资源失效或 DRM 与访问控制都可能导致识别失败。你可以确认链接能够正常打开后再重新尝试。",
	},
	{
		question: "下载完成的视频保存在哪里？",
		answer:
			"视频会先保存在 ClipDock影随存 的资料库中，你可以预览、搜索、排序和分享，也可以主动保存到系统相册。",
	},
	{
		question: "可以在后台下载吗？",
		answer:
			"ClipDock影随存 支持后台下载任务。不过 iOS 可能根据系统资源、网络状态和省电策略调整后台运行时间。",
	},
	{
		question: "ClipDock影随存 会收集我的数据吗？",
		answer:
			"当前 App Store 隐私标签显示为“不收集数据”。当你访问第三方网站或资源时，对方仍可能按照自己的隐私政策处理标准网络请求信息。",
	},
	{
		question: "我可以下载任何在线视频吗？",
		answer:
			"不可以。请只保存你拥有权利、获得授权或法律允许使用的内容，并遵守内容所有者、网站和所在地区的相关规则。",
	},
];


export const ui = {
  "ogAlt": "ClipDock影随存——适用于 iPhone 与 iPad 的网页视频下载器",
  "eyebrow": "支持上千平台 · iPhone + iPad",
  "heroLine1": "链接交给影随存",
  "heroLine2": "视频图片随便存",
  "heroDescription": "复制分享链接或者网址，ClipDock影随存可以帮您下载高清无水印视频。支持上千平台的分享链接、支持几乎所有网页视频，更有“复制即下载”、“视频列表批量下载”能力，提高您的保存效率",
  "freeDownload": "免费下载",
  "qrLabel": "使用 iPhone 扫码下载 ClipDock影随存",
  "qrAlt": "ClipDock影随存下载二维码",
  "scan": "使用 iPhone 扫描",
  "getApp": "获取 APP",
  "productInfo": "产品信息",
  "ratings": "个评分",
  "privacyProof": "不收集 App 数据",
  "capabilities": "ClipDock影随存 核心能力",
  "subtitleLink": "查看字幕提取教程",
  "demoSuffix": "操作演示",
  "progress": "视频播放进度",
  "placeholder": "图片暂留空位",
  "toolsKicker": "下载之后",
  "toolsTitle": "一个随身的视频工具箱。",
  "toolsDescription": "保存只是第一步。裁剪、转换、拼接和分享所需的常用能力，也放在 ClipDock影随存 里。",
  "readTutorial": "阅读教程",
  "trustKicker": "边界写清楚，用起来更放心",
  "trustTitle": "下载有能力，也有边界。",
  "trustDescription": "ClipDock影随存 面向你有权保存和处理的内容。链接是否可用，也会受到来源平台和资源本身的限制。",
  "trustValue1": "不收集",
  "trustLabel1": "App 数据",
  "trustText1": "当前 App Store 隐私标签显示，开发者不会通过此 App 收集数据。",
  "trustLabel2": "iPhone 与 iPad",
  "trustText2": "覆盖仍在使用的广泛设备范围，随时接收分享链接。",
  "trustValue3": "有权内容",
  "trustLabel3": "合法使用",
  "trustText3": "不绕过 DRM、付费内容、访问控制或平台限制。",
  "faqKicker": "常见问题",
  "faqTitle": "下载之前，先把问题说清楚。",
  "closingKicker": "准备好保存下一条链接了吗？",
  "closingTitle": "让视频真正留在手边。",
  "closingDescription": "ClipDock影随存 可在 iPhone 和 iPad 上免费下载，包含 App 内购买。",
  "storeDownload": "在 App Store 下载",
  "closingQr": "扫码下载 ClipDock影随存"
};
