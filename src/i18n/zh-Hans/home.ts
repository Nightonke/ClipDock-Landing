export const capabilities = [
	"通过分享链接下载", "通过网址下载", "复制即下载", "无需来回切换 App",
	"检测并下载网页视频", "个人主页批量下载", "频道页批量下载", "话题页批量下载",
	"播放列表批量下载", "合集批量下载", "后台下载", "视频管理", "保存到相册",
	"裁剪", "转码", "拼接", "尺寸/画布", "旋转", "镜像", "变速", "提取音频",
	"音视频合并", "倒放", "添加水印", "视频转 GIF", "视频转实况（Live Photo）",
	"视频截图", "修改 MD5", "YouTube 字幕提取",
];

const supportedPlatforms = "YouTube、Sora（OpenAI）、Instagram（含快拍）、X（Twitter）、TikTok、Threads、Facebook、Vimeo、afreecatv、Tumblr、Triller、Likee、Twitch、Pinterest、Snapchat、Reddit、VK、Dailymotion、SoundCloud、Lemon8、Suno 音乐、AcFun、哔哩哔哩（B 站）、天猫、闲鱼、大众点评、UC 视频、趣头条、皮皮虾、皮皮搞笑、微博、秒拍、绿洲、小咖秀、美图秀秀、美拍、网易云音乐、央视网（CCTV）、新华网、虎嗅、虎牙、斗鱼、糖豆、喜马拉雅、陌陌、映客、迅雷、WIDE 短视频、最右、开眼、酷燃、剪映、糗事百科、梨视频等平台。具体可下载的内容以链接解析结果为准";

export const featureSections = [
	{
		number: "01",
		video: "share-link",
		kicker: "从链接到视频",
		title: "从分享链接\n下载视频",
		description:
			"粘贴支持的平台分享链接或网页地址，影随存会提取可下载的视频、图片或音频。来源提供高清或无水印版本时，可按需选择；画质、格式和水印情况以实际资源为准。",
		points: ["查看支持的平台", "按来源选择可用画质", "支持视频、图片和音频", "切换到后台也可继续下载"],
		platformDetails: supportedPlatforms,
		placeholder: "链接识别界面截图",
		tone: "blue",
	},
	{
		number: "02",
		video: "copy-background",
		kicker: "无需粘贴，只需复制",
		title: "复制链接\n后台下载",
		description:
			"开启“自动下载剪贴板链接”和“后台识别并下载”，并保持画中画运行。在 YouTube、TikTok、X 等平台复制支持的分享链接，影随存就会在后台创建下载任务。开启下载通知并允许通知权限后，可收到完成或失败提醒。",
		points: ["开启后，无需切回 App 粘贴", "画中画可滑到屏幕边缘收起"],
		placeholder: "下载任务界面截图",
		tone: "lime",
	},
	{
		number: "03",
		video: "web-long-press",
		kicker: "播放后检测可下载资源",
		title: "播放网页视频\n长按选择下载",
		description:
			"进入“网页视频”，打开目标页面并播放视频。如有广告，请跳过或等待广告结束，再长按视频选择可下载资源；也可以通过底部检测按钮查看已检测到的视频。资源是否可下载取决于网站和访问条件。",
		points: ["检测页面中的可下载视频", "从检测列表选择需要的资源", "长按定位正在播放的视频"],
		placeholder: "内置浏览器视频下载界面截图",
		tone: "coral",
	},
	{
		number: "04",
		video: "batch-playlist",
		kicker: "批量下载",
		title: "选好列表\n批量下载",
		description: "粘贴支持的频道、主页、播放列表或话题页链接，加载列表后选择需要的视频或图片，再加入下载队列。列表按页加载，免费版最多可加载前 2 页；可下载范围以实际返回结果为准，不一定包含全部作品。",
		points: ["查看批量下载支持范围"],
		platformDetails: "支持 YouTube（频道、Shorts、话题页、播放列表）、Instagram（作者主页、话题页）、TikTok（作者主页、话题页）、抖音（主页、合集）、哔哩哔哩（主页、合集），以及 X（Twitter）、微博、好看视频等平台的主页。不同平台支持的链接类型和可加载范围有所不同。",
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
	{ mark: "MIX", slug: "interleave-videos-iphone", title: "交叉拼接", description: "将多个视频分段，交替拼接不同素材。" },
	{ mark: "GRID", slug: "segment-grid-video-iphone", title: "分段宫格", description: "将一个视频的不同时间片段排成网格。" },
	{ mark: "SIZE", slug: "resize-video-iphone", title: "尺寸/画布", description: "调整画布比例，选择留边、裁剪填满或其他布局。" },
	{ mark: "ROTATE", slug: "rotate-video-iphone", title: "视频旋转", description: "旋转视频画面，调整到合适的方向。" },
	{ mark: "MIRROR", slug: "mirror-video-iphone", title: "视频镜像", description: "翻转画面，制作镜像效果。" },
	{ mark: "SPEED", slug: "change-video-speed-iphone", title: "视频变速", description: "加快或放慢播放速度，调整视频节奏。" },
	{ mark: "AUDIO", slug: "extract-audio-iphone", title: "提取音频", description: "将视频中的声音单独保存为音频。" },
	{ mark: "SOUND", slug: "edit-video-audio-iphone", title: "音频处理", description: "为视频静音或调整音量，处理视频中的声音。" },
	{ mark: "MERGE", slug: "merge-audio-video-iphone", title: "音视频合并", description: "把音频与视频合并为一个文件。" },
	{ mark: "REVERSE", slug: "reverse-video-iphone", title: "视频倒放", description: "让视频从结尾开始反向播放。" },
	{ mark: "MARK", slug: "add-watermark-video-iphone", title: "添加水印", description: "为自己的视频添加文字或图像标记。" },
	{ mark: "GIF", slug: "video-to-gif-iphone", title: "视频转 GIF", description: "把视频片段转换为便于分享的动图。" },
	{ mark: "LIVE", slug: "video-to-live-photo-iphone", title: "视频转实况", description: "将视频转换为实况照片（Live Photo）。" },
	{ mark: "FRAMES", slug: "capture-video-frames-iphone", title: "视频截图", description: "提取单张视频画面，也可使用批量、智能截图和预览大图模式。" },
	{ mark: "MD5", slug: "change-video-md5-iphone", title: "修改 MD5", description: "修改视频文件的 MD5 值。" },
];

export const faqs = [
	{
		question: "影随存支持哪些链接？",
		answer:
			`影随存支持 ${supportedPlatforms}。`,
	},
	{
		question: "为什么有些链接无法识别？",
		answer:
			"页面结构变化、登录状态、地区限制、网络环境、资源失效或 DRM 与访问控制都可能导致识别失败。你可以确认链接能够正常打开后再重新尝试。",
	},
	{
		question: "下载完成的视频保存在哪里？",
		answer:
			"下载完成后，可在“资源管理”的“已完成”列表中预览、搜索、排序或分享视频。点击“保存到相册”可手动保存；也可在“下载设置”中开启“下载完成后自动保存到相册”。保存需要相册权限和支持的文件格式。",
	},
	{
		question: "可以在后台下载吗？",
		answer:
			"影随存支持后台下载任务。不过 iOS 可能根据系统资源、网络状态和省电策略调整后台运行时间。",
	},
	{
		question: "影随存会收集我的数据吗？",
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
  "ogAlt": "ClipDock 影随存——适用于 iPhone 与 iPad 的网页视频下载器",
  "eyebrow": "支持多种平台 · iPhone + iPad",
  "heroLine1": "链接交给影随存",
  "heroLine2": "视频图片轻松存",
  "heroDescription": "用 ClipDock 影随存保存支持的分享链接和网页中的视频、图片或音频。开启复制即下载，或从列表中批量选择作品，减少重复操作。可用画质、格式和水印情况取决于来源资源。",
  "freeDownload": "免费下载",
  "qrLabel": "使用 iPhone 扫码下载 ClipDock 影随存",
  "qrAlt": "ClipDock 影随存下载二维码",
  "scan": "使用 iPhone 扫描",
  "getApp": "下载 App",
  "productInfo": "产品信息",
  "ratings": "个评分",
  "privacyProof": "不收集 App 数据",
  "capabilities": "ClipDock 影随存核心能力",
  "subtitleLink": "查看字幕提取教程",
  "demoSuffix": "操作演示",
  "progress": "视频播放进度",
  "placeholder": "图片暂留空位",
  "toolsKicker": "下载之后",
  "toolsTitle": "随身视频工具箱",
  "toolsDescription": "保存只是第一步。裁剪、转换、拼接和分享所需的常用能力，也放在影随存里。",
  "readTutorial": "阅读教程",
  "trustKicker": "边界写清楚，用起来更放心",
  "trustTitle": "下载有能力，也有边界。",
  "trustDescription": "影随存面向你有权保存和处理的内容。链接是否可用，也会受到来源平台和资源本身的限制。",
  "trustValue1": "不收集",
  "trustLabel1": "App 数据",
  "trustText1": "当前 App Store 隐私标签显示，开发者不会通过此 App 收集数据。",
  "trustLabel2": "iPhone 与 iPad",
  "trustText2": "支持 iOS 15 及以上版本的 iPhone，以及 iPadOS 15 及以上版本的 iPad。",
  "trustValue3": "合法使用",
  "trustLabel3": "保存有权使用的内容",
  "trustText3": "不绕过 DRM、付费内容、访问控制或平台限制。",
  "faqKicker": "常见问题",
  "faqTitle": "下载之前，先把问题说清楚。",
  "closingKicker": "准备好保存下一条链接了吗？",
  "closingTitle": "让视频真正留在手边。",
  "closingDescription": "影随存可在 iPhone 和 iPad 上免费下载，包含 App 内购买。",
  "storeDownload": "在 App Store 下载",
  "closingQr": "扫码下载 ClipDock 影随存"
};
