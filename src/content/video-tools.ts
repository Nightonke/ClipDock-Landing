import type { Tutorial } from "./tutorials";

type Section = { title: string; text: string };
type Chapter = { title: string; text: string; image?: string; sections?: Section[] };
type Guide = {
	key: string; slug: string; name: string; title: string; index: number; intro: string;
	chapters: Chapter[]; tips: Section[]; faq: { question: string; answer: string }[];
	related: string[]; verificationNote?: string;
};
type Shot = { title: string; brief: string; src: string; width: number; height: number; framed: boolean; highlight?: { x: number; y: number; width: number; height: number } };
const detail = (title: string, text: string): Section => ({ title, text });
const chapter = (title: string, image: string, text: string, sections: Section[] = []): Chapter => ({ title, image: `tool-${image}`, text, sections });
const result = (key: string, text: string): Chapter => chapter("检查结果，再保存或继续处理", `${key}-result`, text, [
	detail("预览与保存", "在结果页点击播放，检查画面、时长及声音是否符合预期，再点击 Save to Photos（保存到相册）。首次保存可能需要允许 App 添加照片和视频；收到保存成功提示后，再到照片 App 核对。"),
	detail("其他按钮的用途", "Keep Processing（继续处理）将结果带入工具选择；Share File（分享文件）打开分享入口；Done（完成）关闭结果页。Done 不等于保存到相册。"),
]);
const guides: Guide[] = [
	{
		key: "gif", slug: "video-to-gif-iphone", name: "Video to GIF", index: 0,
		title: "如何在 iPhone 和 iPad 上把视频转换为 GIF？",
		intro: "把一个动作做成动图时，先确定片段，再平衡流畅度、清晰度和文件大小。本文用约 6 秒视频演示 GIF 转换，说明预设、帧率、宽度以及体积估算。",
		chapters: [
			chapter("选择片段和预设", "gif-settings", "导入视频后，先预览内容，再查看 Presets（预设）和 Clip Range（片段范围）。本例使用 Custom，保留约 6 秒片段。", [
				detail("Custom 与带星号的预设", "Custom 用于自行选择参数。Clear*、Smooth*、Long* 分别是偏向清晰、流畅和较长内容的预设入口，带星号表示需要 VIP。本次使用 Custom 完成导出，未验证付费预设的具体参数组合。"),
				detail("Clip Range：只保留需要的动作", "拖动范围两端的圆形手柄，调整开始与结束位置；上方会显示起止时间和选中秒数。片段越长，通常需要的帧数和文件体积越大。超过 10 秒的片段需要 VIP。"),
			]),
			chapter("设置帧率和宽度", "gif-options", "向下查看 Frame Rate（帧率）、Width（宽度）和预计大小，确认后点击 Start Processing。本例为 8fps、360 宽度，页面估算约 1.2 MB、48 帧。", [
				detail("Frame Rate：每秒保留多少帧", "页面提供 6、8、12、15*、24* fps。较高帧率通常让动作更连贯，但也增加帧数和体积。简单动作可先试 8fps；快速动作可比较更高帧率。15 和 24fps 带 VIP 标记。"),
				detail("Width：动图的像素宽度", "提供 240、360、540、720*。宽度越大，画面细节通常越多，文件也可能更大；720 需要 VIP。放大输出不能补回源视频中不存在的细节。"),
				detail("估算不是最终文件大小", "6 秒 × 8fps 约为 48 帧。实际压缩体积还受画面复杂度影响，因此以导出文件为准。GIF 不包含声音，需要声音时应保存为视频。"),
			]),
			chapter("保存生成的 GIF", "gif-result", "本次出现 Processing Complete，输出文件以 .gif 结尾。点击 Save to Photos 保存动图，或通过 Share File 分享文件；Done 关闭提示。保存后应在支持 GIF 播放的应用中检查动作。"),
		],
		tips: [detail("动图太大", "先缩短片段，再降低宽度或帧率。只调整其中一项进行比较，便于找到能接受的清晰度与大小。")],
		faq: [{ question: "为什么动图没有声音？", answer: "GIF 格式不承载音频。需要同时保留声音时，请使用视频输出。" }, { question: "为什么某些选项有星号？", answer: "页面注明超过 10 秒、高帧率、720 宽度和预设需要 VIP；本例采用免费参数完成转换。" }],
		related: ["trim-video-iphone", "video-to-live-photo-iphone", "capture-video-frames-iphone"],
	},
	{
		key: "live", slug: "video-to-live-photo-iphone", name: "Video to Live Photo", index: 1,
		title: "如何在 iPhone 上把视频转换为实况照片（Live Photo）？",
		intro: "Live Photo 可以保留一小段动作和声音。选择动作范围后，还可以指定静止封面。本例使用 3 秒范围与 Balanced 画质，已收到保存到相册的成功提示。",
		chapters: [
			chapter("确定实况范围与封面", "live-settings", "导入视频后，在 Clip Range 中选择要保留的动作，再设置 Cover Frame（封面帧）。本例选中 00:00–00:03。", [
				detail("Clip Range：保留哪一段动作", "两端的圆形手柄控制起止时间，上方同时显示所选时长。先围绕主体动作选一小段；当前页面注明超过 3 秒需要 VIP。"),
				detail("Cover Frame：静止时显示哪一帧", "拖动封面滑块，对照左侧缩略图和时间选择封面。封面适合选在主体清楚、表情自然的位置，避免闭眼或明显运动模糊的一帧。封面选择与动作范围是两个不同设置。"),
			]),
			chapter("选择声音与画质", "live-options", "向下查看 Sound 和 Live Photo Quality，确认后点击 Start Processing。本例保留声音并使用 Balanced。", [
				detail("Remove Sound 与 Keep Sound", "Remove Sound 移除声音；Keep Sound 保留片段声音。只需要视觉动作时可选静音，需要保留现场氛围时可保留声音。"),
				detail("Balanced、HD*、Original*", "Balanced 是本次实测的画质选项；HD 和 Original 带 VIP 标记。画质选项不会提高原素材本身的细节，仍需检查输入画面。"),
			]),
			chapter("到相册检查实况效果", "live-result", "本次处理后直接出现 Live Photo saved to Photos，表示 App 报告已保存实况照片。点击 OK，再到照片 App 查看结果的实况标记与播放效果。本次已验证 App 的保存成功提示，未用截图代替实际长按播放验证。"),
		],
		tips: [detail("封面和动作分别检查", "静止封面满意不代表整段动作都合适。保存后再检查动作起止、声音和封面；分享时使用能够保留 Live Photo 的方式。")],
		faq: [{ question: "能直接作为动态壁纸吗？", answer: "转换和保存 Live Photo 与锁屏壁纸兼容性是两回事，是否可用还取决于设备和系统。本文不把转换成功等同于壁纸可用。" }, { question: "与 GIF 有什么不同？", answer: "两者格式和分享方式不同；Live Photo 可保留声音，GIF 适用于动图场景且不包含声音。" }],
		related: ["video-to-gif-iphone", "trim-video-iphone", "capture-video-frames-iphone"],
	},
	{
		key: "transcode", slug: "transcode-video-iphone", name: "Transcode Video", index: 2,
		title: "如何在 iPhone 和 iPad 上转换视频格式与压缩视频？",
		intro: "需要调整视频格式或减小文件时，可以使用 Transcode Video。格式、编码、尺寸和码率各自影响不同方面，本文按页面分组解释，并用默认 MP4／H.264 参数完成一次导出。",
		chapters: [
			chapter("先选格式、画质和分辨率", "transcode-settings", "导入视频后，先查看 Output Format、Output Quality 和 Resolution，再决定是否保留声音。", [
				detail("Output Format：MP4、MOV、M4V", "这是输出文件的封装格式。日常分享可先使用 MP4；如果接收软件明确要求 MOV 或 M4V，再选择相应格式。文件扩展名与内部编码不是同一个概念。"),
				detail("Output Quality：画质与体积取舍", "High Quality 偏向保留画质，Standard 是折中选择，Smaller Size 偏向较小体积。具体大小还受画面和其他参数影响，不能仅凭预设名称判断最终体积。"),
				detail("Resolution 与 Sound", "分辨率提供 Original、720p、480p、1080p*；Original 保留原始尺寸，本例源视频为 640×338。Sound 可选 Keep Sound 或 Mute。降低分辨率可能减小文件，升高分辨率不能恢复缺失细节。"),
			]),
			chapter("理解编码器与码率", "transcode-options", "向下查看 Codec、Bitrate 以及页面底部的输出摘要。摘要应与你的选择一致，再点击 Start Processing。", [
				detail("Codec：H.264 与 HEVC*", "H.264 是本次使用的编码。HEVC 带 VIP 标记，通常可用于更高压缩效率的场景，但应确认接收设备或软件支持。格式选为 MP4 并不意味着只能使用一种编码。"),
				detail("Bitrate：Auto、Target Size*、Custom Bitrate*", "Auto 由工具选择码率；Target Size 是按目标大小配置的入口；Custom Bitrate 是自定义码率入口，后两项需要 VIP。相同条件下，较低码率通常更小，也可能更容易出现压缩痕迹。"),
				detail("当前版本的 VIP 范围", "页面注明 HEVC、1080p、原始高清、目标大小和自定义码率需要 VIP。本例使用低分辨率素材、Original、Standard、Keep Sound 和 Auto，已生成结果。"),
			]),
			result("transcode", "本次生成了以 _transcode.mp4 结尾的文件，结果页显示约 6 秒。导出后比较文件大小与画面质量，尤其留意文字边缘、暗部和快速运动。"),
		],
		tips: [detail("压缩后不满意", "保留原片，先用短片段比较不同画质或分辨率。避免反复压缩已经压缩过的结果。")],
		faq: [{ question: "为什么没有明显变小？", answer: "输入可能已经较小，或输出参数保留了较多画质。最终体积取决于时长、尺寸、编码和码率等。" }, { question: "改成 1080p 会更清楚吗？", answer: "放大低分辨率素材不会产生原本不存在的细节。应以实际观看效果为准。" }],
		related: ["resize-video-iphone", "trim-video-iphone", "edit-video-audio-iphone"],
	},
	{
		key: "trim", slug: "trim-video-iphone", name: "Trim Video", index: 3,
		title: "如何在 iPhone 和 iPad 上裁剪视频时长？",
		intro: "只保留视频里需要的一段，可以用 Trim Video 设置开始和结束时间。本例从约 2 分 26 秒的素材中截出开头约 6 秒，适合继续制作 GIF、实况照片或短演示。",
		chapters: [
			chapter("设置裁剪模式和时间范围", "trim-settings", "选择视频后，使用 Trim Mode 下的 Select Segment，再调整 Trim Range 的两个手柄。", [
				detail("Select Segment：导出选中的一段", "左端控制开始位置，右端控制结束位置。上方显示起止时间和选中时长，下方文字会再次说明将要导出的区间。本例为 00:00–00:06。"),
				detail("预览与范围不要混淆", "预览卡片下方的总时长属于原视频；Trim Range 才是要保留的范围。拖动范围后，对照画面确认没有切掉动作开始或最后一句话。"),
				detail("Even Split*：按段均分", "Even Split 的提示说明会把完整视频平均分成多段并一次导出。本次点击后出现 VIP 页面，未执行均分导出；普通截取使用 Select Segment 即可。"),
			]),
			result("trim", "点击 Start Processing 后，本次生成 _trim.mp4，结果页显示约 6 秒。先播放检查开头和结尾，再保存；如需继续做其他效果，可用 Keep Processing 复用短片段。"),
		],
		tips: [detail("这里裁剪的是时间", "Trim Video 控制保留哪段时间；如果需要调整画面比例或画布，使用 Resize / Canvas。")],
		faq: [{ question: "怎样只保留中间一段？", answer: "同时移动起点和终点，以范围标签显示的时间为准，再预览和导出。" }, { question: "为何均分入口弹出 VIP 页面？", answer: "Even Split 带星号，本次实测需要 VIP；Select Segment 流程已成功导出。" }],
		related: ["video-to-gif-iphone", "join-videos-iphone", "resize-video-iphone"],
	},
	{
		key: "interleave", slug: "interleave-videos-iphone", name: "Interleave", index: 5,
		title: "如何在 iPhone 和 iPad 上交错拼接视频片段？",
		intro: "Interleave 会先分段，再按视频顺序交替输出，适合在不同素材之间切换。本文用 A、B 两个视频演示，解释总段数、起始顺序以及声音切口的淡入淡出。",
		chapters: [
			chapter("添加 A、B 视频", "interleave-settings", "选中的主视频显示为 A Current Video。点击 Add Video，从下载列表、相册或文件添加 B；相册支持选中后用右上角勾号确认。", [
				detail("追加数和总数", "1 added, 2 videos total 表示追加一段，共有两个来源视频。A 为主视频，列表中的锁形入口不可操作；追加视频旁有排序或移除控件，是否可用取决于位置和数量。"),
				detail("本例素材", "A 约 6 秒，B 约 2 分 26 秒。长度差距较大时，各来源分配到的单段时长也可能差很多；需要均匀切换节奏时，先把素材裁成相近长度更容易检查。"),
			]),
			chapter("配置分段与交错规则", "interleave-options", "本例使用 Total Segments、5 segments、Start with A 和默认 50 ms 音频淡入淡出。页面底部会给出具体分配说明。", [
				detail("Total Segments 与 Fixed Duration*", "Total Segments 按总段数分配。本例总共 5 段，A 分成 3 段、每段约 2 秒；B 分成 2 段、每段约 1 分 13 秒，交替输出。Fixed Duration 是按固定时长分段的 VIP 入口。"),
				detail("Start Order：从谁开始", "Start with A 从主视频开始，Start with B 从 B 开始。改变起始来源后，应重新阅读下方的分配说明，确认开场素材符合预期。"),
				detail("Audio Fade：处理声音切口", "默认约 50 ms 的淡入淡出用于缓和每个音频切口。页面注明免费支持两个视频、最多 5 段和默认淡入淡出；更多来源、固定时长和自定义淡入淡出需要 VIP。"),
			]),
			result("interleave", "点击 Start Processing 后，本次生成 _interleave.mp4，结果页显示 02:31。应逐个检查交替位置，确认 A、B 的切换、顺序与声音过渡，而不是只看首帧。"),
		],
		tips: [detail("节奏忽快忽慢", "总段数模式不保证每个来源切出的片段等长。本例 A、B 本身长度不同，界面已显示不同的单段时长。")],
		faq: [{ question: "与 Stitch Videos 有什么区别？", answer: "Stitch Videos 按完整片段顺序接起来；Interleave 按分段规则在不同来源之间交替。" }, { question: "Total Segments 有星号，为什么默认能用？", answer: "页面说明免费支持最多 5 段，本次默认 5 段已成功输出。是否需要 VIP 要结合参数值和页面说明判断。" }],
		related: ["join-videos-iphone", "trim-video-iphone", "segment-grid-video-iphone"],
	},
	{
		key: "grid", slug: "segment-grid-video-iphone", name: "Segment Grid", index: 6,
		title: "如何在 iPhone 和 iPad 上把视频分段并排成网格？",
		intro: "Segment Grid 把同一个视频按时间分成多段，再让这些片段在一个网格中同时显示。本例把约 6 秒视频分成四段，生成 2×2 的视频网格。",
		chapters: [
			chapter("设置行列与声音", "grid-settings", "导入一个视频后，查看 Columns（列）、Rows（行）和 Sound。本例采用 2 列、2 行与默认静音。", [
				detail("行数 × 列数决定格子数量", "2×2 对应四个格子，也会把源视频等分成四段。多个片段同时播放，因此结果时长会短于原视频。页面显示的是估算时长，最终以输出为准。"),
				detail("Mute 与 First Segment Audio", "Mute 默认静音，避免多个格子的声音重叠；First Segment Audio 使用第一段的声音。需要声音时先确认第一段音轨适合贯穿网格效果。"),
				detail("带星号参数的免费范围", "页面注明 3 行或 3 列及以上、方形输出和保留每格原始尺寸需要 VIP。本次默认 2×2、原视频尺寸已成功导出。"),
			]),
			chapter("选择最终输出尺寸", "grid-options", "点击 Export Size 查看尺寸列表。这里设置的是整个成片的像素尺寸，不是单个格子的尺寸。", [
				detail("Original Video Size 与每格原尺寸", "本例 Original Video Size 为 640×338，四格共用这个画布。Keep Each Tile Original Size 显示 1280×676*，让每格尽量保留原始像素，可能明显增加文件大小和处理时间，并可能受系统限制。"),
				detail("横屏、竖屏与方形", "列表还提供 1280×720、1920×1080、1080×1920 和 1080×1080*。按展示场景选择，导出后检查各格画面是否清晰、完整。"),
			]),
			result("grid", "点击 Start Processing 后，本次结果显示四个时间片段组成的 2×2 网格。输入约 6 秒，页面预估约 2 秒，结果时长按整秒显示约 1 秒；应播放检查实际内容，不将整数显示当作精确帧级时长。"),
		],
		tips: [detail("每格看不清", "在固定输出尺寸下，格子越多，每格可用像素越少。可以减少行列或选择合适的最终尺寸，再比较结果。")],
		faq: [{ question: "是把多个独立视频拼成网格吗？", answer: "本文这个工具处理的是一个视频的不同时间片段。页面没有像 Stitch Videos 那样的追加素材列表。" }, { question: "为什么默认没有声音？", answer: "默认选择 Mute，避免重叠音频。需要时可以选择 First Segment Audio。" }],
		related: ["interleave-videos-iphone", "resize-video-iphone", "capture-video-frames-iphone"],
	},
	{
		key: "resize", slug: "resize-video-iphone", name: "Resize / Canvas", index: 7,
		title: "如何在 iPhone 和 iPad 上调整视频比例与画布？",
		intro: "将横屏素材放进方形或竖屏画布时，需要同时决定画布比例和画面的放置方式。本例使用 1:1 与 Fit，保留完整画面并生成方形画布视频。",
		chapters: [
			chapter("选择画布比例", "resize-settings", "在 Canvas Ratio 选择目标比例，再查看 Layout 和背景色。本例采用 1:1、Fit 和黑色背景。", [
				detail("Original、16:9、9:16、1:1、4:3、3:4", "Original 沿用原比例；16:9 常用于横屏，9:16 用于竖屏，1:1 为正方形。比例只描述宽高关系，不等同于指定 1080p 等像素分辨率。"),
				detail("Background Color*", "显示的 #000000 是黑色。画面与画布比例不一致且选择 Fit 时，会出现剩余背景区域；更换背景色需要 VIP。"),
			]),
			chapter("选择 Fit、Fill 或其他布局", "resize-layout", "点击 Layout 打开布局列表，选好后返回设置页，确认摘要再点击 Start Processing。", [
				detail("Fit：完整显示画面", "按比例把完整画面放进画布，可能留下背景区域。适合不能裁掉人物、字幕或边缘内容的素材。本例已按 Fit 导出。"),
				detail("Fill：填满画布", "按比例铺满画布，比例不同时可能裁掉部分边缘。使用前先看预览，尤其检查字幕、人物头顶和左右边缘。"),
				detail("带星号的模糊与多格布局", "列表包含 Blur 1:1*、Double 1:1*、Symmetric Double 1:1*、Triple 1:1*、Triple Blur 1:1*。这些是模糊背景或多格布局入口，需要 VIP；本次未验证其具体输出。"),
			]),
			result("resize", "本次生成 _resize.mp4。结果中横屏内容完整保留，周围出现黑色背景；请结合播放和成片尺寸检查比例是否适合目标场景。"),
		],
		tips: [detail("先决定是否允许裁掉边缘", "字幕和重要内容贴边时优先试 Fit；希望铺满画布时试 Fill，并逐帧检查重要画面。")],
		faq: [{ question: "改比例会把画面拉伸吗？", answer: "本文使用 Fit 保持画面比例并留背景。不同布局要通过预览判断，不要把改画布直接理解成强制拉伸。" }, { question: "怎样调整输出分辨率？", answer: "这里重点是画布比例和布局；需要转换尺寸与格式时，可查看 Transcode Video 的分辨率选项。" }],
		related: ["transcode-video-iphone", "rotate-video-iphone", "segment-grid-video-iphone"],
	},
	{
		key: "rotate", slug: "rotate-video-iphone", name: "Rotate Video", index: 8,
		title: "如何在 iPhone 和 iPad 上旋转视频方向？",
		intro: "视频横着或倒着显示时，可以用 Rotate Video 改变画面方向。本例采用向右旋转 90 度，设置页预览和导出结果均显示了方向变化。",
		chapters: [
			chapter("选择旋转方向", "rotate-settings", "在 Rotation 中选择角度，并通过上方预览核对方向。本例选择 Rotate Right 90。", [
				detail("向右 90°、180°、向左 90°", "Rotate Right 90 为顺时针四分之一圈；180 将画面倒转；Rotate Left 90 为逆时针四分之一圈。左右 90° 会交换画面的横竖方向。"),
				detail("预览窗口中的黑边", "竖向画面放在横向预览卡片里可能显示黑边，这不一定代表导出文件本身包含同样的黑边。应查看保存后的实际尺寸和显示效果。"),
			]),
			result("rotate", "点击 Start Processing 后，本次输出画面已向右旋转 90 度，结果时长仍约 6 秒。检查文字和主体方向正确后保存。"),
		],
		tips: [detail("旋转与镜像不同", "旋转改变画面朝向；镜像交换左右或上下。自拍文字左右反了时，应查看 Mirror Video。")],
		faq: [{ question: "想纠正倒着的视频选哪个？", answer: "选择 180，再用预览确认主体恢复正确方向。" }, { question: "旋转会改变时长吗？", answer: "这个操作调整方向，本次约 6 秒输入仍输出约 6 秒。" }],
		related: ["mirror-video-iphone", "resize-video-iphone", "reverse-video-iphone"],
	},
	{
		key: "mirror", slug: "mirror-video-iphone", name: "Mirror Video", index: 9,
		title: "如何在 iPhone 和 iPad 上镜像翻转视频？",
		intro: "Mirror Video 可左右或上下翻转画面。本例使用 H Flip，设置页和导出结果中的海景左右位置发生交换。",
		chapters: [
			chapter("预览镜像效果", "mirror-settings", "导入视频后，Mirror Mode 显示当前模式。本例为 H Flip，可先观察预览中的左右细节，再进入模式列表。"),
			chapter("区分翻转与对称模式", "mirror-options", "点击 Mirror Mode 查看全部选项，选择后返回，再点击 Start Processing。", [
				detail("H Flip、V Flip 和 180", "H Flip 水平翻转，左右交换；V Flip 垂直翻转，上下交换；180 对应画面转半圈。选项名称相近，最好用画面里的文字或明显标志检查。"),
				detail("Side Sym*、Top Sym*、Center Sym*", "这些是带 VIP 标记的对称效果入口。它们与把整个画面简单翻面不同，本次仅核对入口，未验证付费模式输出。"),
			]),
			result("mirror", "本次 H Flip 已生成结果，海景与云层左右位置与原图相反。保存前注意字幕、标志和文字也会跟着镜像。"),
		],
		tips: [detail("字幕可能一起反向", "镜像作用于画面整体。带文字的片段应先确认是否接受文字方向改变。")],
		faq: [{ question: "左右反了应该选哪项？", answer: "先试 H Flip，并核对画面内文字或左右位置。" }, { question: "镜像会让动作倒放吗？", answer: "不会。动作时间顺序的反转使用 Reverse Video。" }],
		related: ["rotate-video-iphone", "reverse-video-iphone", "resize-video-iphone"],
	},
	{
		key: "reverse", slug: "reverse-video-iphone", name: "Reverse Video", index: 10,
		title: "如何在 iPhone 和 iPad 上倒放视频？",
		intro: "Reverse Video 让动作从结尾往开头播放。除了反转画面，还需要决定声音怎样处理。本例使用默认静音，结果首帧对应原片末尾。",
		chapters: [
			chapter("选择倒放时的声音", "reverse-settings", "Sound 提供 Mute、Keep Audio、Reverse Audio。本例采用 Mute，再点击 Start Processing。", [
				detail("Mute：不保留声音", "适合只需要倒放动作的片段，也能避免反转后的对白或环境声显得突兀。"),
				detail("Keep Audio 与 Reverse Audio", "Keep Audio 保留原有音频播放顺序；Reverse Audio 则用于反转声音。两者听感不同，尤其对白和音乐需要导出后试听。本次只实测了静音模式。"),
			]),
			result("reverse", "本次结果首帧从原视频末尾的人物画面开始，缩略图顺序也反向排列，显示时长仍约 6 秒。请实际播放，检查动作是否从结尾向开头进行。"),
		],
		tips: [detail("先裁短再倒放", "用 Trim Video 保留目标动作后再倒放，更容易判断节奏，也能减少处理内容。")],
		faq: [{ question: "倒放等于把视频转 180 度吗？", answer: "不是。倒放改变时间顺序，Rotate Video 改变画面方向。" }, { question: "为什么倒放结果没有声音？", answer: "本例选择默认 Mute。需要声音时请选择对应模式并检查导出结果。" }],
		related: ["trim-video-iphone", "change-video-speed-iphone", "rotate-video-iphone"],
	},
	{
		key: "speed", slug: "change-video-speed-iphone", name: "Change Speed", index: 11,
		title: "如何在 iPhone 和 iPad 上加速或放慢视频？",
		intro: "Change Speed 用速度倍数改变视频节奏。本文使用 1.50x，把约 6 秒片段输出为约 4 秒，并解释音调保留和速度范围。",
		chapters: [
			chapter("设置速度和音调", "speed-settings", "拖动 Speed 滑块，查看右侧倍数与下方 Estimated processed duration。确认后点击 Start Processing。", [
				detail("速度倍数与时长", "1x 为原速，大于 1 加速，小于 1 放慢。输出时长大致等于原时长除以倍数，例如 6 秒 ÷ 1.5 ≈ 4 秒；以实际结果为准。"),
				detail("Preserve Pitch*：保留音调", "这是变速时保留原音调的 VIP 选项。不开启时声音可能随变速改变音调；含对白、演唱的素材应特别注意试听。"),
				detail("速度范围和高倍速声音", "页面注明免费支持 0.5x–2x，更宽的 0.1x–32x 范围和保留音调需要 VIP；高于 4x 会自动移除音频。"),
			]),
			result("speed", "本次使用 1.50x、未开启保留音调，结果显示约 4 秒，与页面估算一致。保存前检查节奏与声音是否适合用途。"),
		],
		tips: [detail("放慢不一定更流畅", "慢速会放大原素材帧率不足或运动模糊的问题。先用短片段比较，不能只凭倍数判断效果。")],
		faq: [{ question: "2x 会让时长变多少？", answer: "通常约为原来的一半，最终以输出时长为准。" }, { question: "为什么高倍速没有声音？", answer: "当前页面明确注明高于 4x 会自动移除音频。" }],
		related: ["trim-video-iphone", "reverse-video-iphone", "edit-video-audio-iphone"],
	},
	{
		key: "audio-edit", slug: "edit-video-audio-iphone", name: "Audio Editing", index: 12,
		title: "如何在 iPhone 和 iPad 上静音视频或调整音量？",
		intro: "Audio Editing 用于处理视频中的声音，页面提供静音、音量和替换入口。本文展开 Volume 模式讲解，本次按显示的 100% 音量完成了导出。",
		chapters: [
			chapter("选择声音处理模式", "audio-edit-settings", "在 Processing Mode 中选择 Mute、Volume 或 Replace*。选择 Volume 后，页面会展开音量滑块与淡入淡出开关。", [
				detail("Mute：去除声音", "只需要画面时选 Mute。导出后应播放确认声音已按预期移除，而不是仅把播放器暂时静音。"),
				detail("Volume：调整声音大小", "右侧百分比表示当前音量比例，100% 是本次使用的值。拖动后以百分比标签为准，再试听结果；提高音量不等于修复噪声或改善录音质量。"),
				detail("Replace* 与 Fade In/Out*", "Replace 是替换音频入口，Fade In/Out 用于声音淡入淡出，两者带 VIP 标记。本次未执行这两项付费功能。需要单独选音频与视频合成，也可查看音视频合并教程。"),
			]),
			result("audio-edit", "本次按 Volume 100% 生成 _audio_edit.mp4，导出历史也显示 Volume 100%。若需要降低或提高音量，先确认滑块旁的百分比确实改变，再导出并试听比较。"),
		],
		tips: [detail("声音失真或太吵", "先检查原音频质量，再适量调整。放大音量也可能一起放大噪声，建议保留原视频用于比较。")],
		faq: [{ question: "这会输出音频文件吗？", answer: "本工具处理视频中的声音，本次输出仍为视频。需要独立音频文件请使用 Extract Audio。" }, { question: "音量百分比怎样确认？", answer: "以滑块旁的实际百分比和导出历史摘要为准，再播放试听。" }],
		related: ["extract-audio-iphone", "merge-audio-video-iphone", "change-video-speed-iphone"],
	},
	{
		key: "watermark", slug: "add-watermark-video-iphone", name: "Add Watermark", index: 13,
		title: "如何在 iPhone 和 iPad 上给视频添加文字水印？",
		intro: "Add Watermark 可以为视频添加文字水印，并调整大小、位置及样式。本文用 ClipDock Demo 演示参数设置，再用真机导出结果说明预览与保存。",
		chapters: [
			chapter("设置水印文字与大小", "watermark-settings", "Watermark Type 选择 Text，再点击 Text Content 输入文字并确认。本例输入 ClipDock Demo。上方预览可看到水印位置和大致效果。", [
				detail("Text 与 Image*", "Text 为文字水印；Image 是使用图片水印的 VIP 入口。本例仅配置了文字，未使用图片水印。"),
				detail("Text Size", "滑块右侧显示大小比例，本例为 100%。选择时同时看预览，避免遮住主体、字幕或重要画面。"),
			]),
			chapter("调整位置与视觉样式", "watermark-options", "向下查看 Watermark Position、颜色、背景、描边和 Opacity。带星号的选项需要 VIP，显示默认值不等于可以免费修改。", [
				detail("Watermark Position", "位置入口包含左上、右上、左下、右下和中央，本例在右下。优先选择不遮挡主体与字幕的位置，横竖屏素材分别检查。"),
				detail("颜色、背景和描边", "Text Color 控制文字颜色；Show Background 控制文字背景；Text Stroke 与 Stroke Color 控制描边及颜色。这些入口带 VIP 标记。预览中文字与背景应有足够对比，明暗变化大的视频尤其需要检查。"),
				detail("Opacity*：透明度", "本例显示 75%。透明度越低水印通常越淡，但也更容易看不清；这个参数需要 VIP。本次保留默认值。"),
			]),
			chapter("预览水印成片并保存", "watermark-result", "确认参数后点击 Start Processing，完成后会出现结果页。图中是真机导出的 15 秒视频，文件名以 _watermark.mp4 结尾，右下角可见 Made by ClipDock 水印。", [
				detail("检查水印效果", "点击播放，检查水印是否清晰、位置是否合适，以及是否遮挡主体或字幕。结果图使用了另一段素材和水印文字，操作流程与前面的参数示例相同。"),
				detail("保存到相册或分享", "点击 Save to Photos（保存到相册），收到成功提示后再到照片 App 检查；Share File（分享文件）用于打开分享入口。"),
				detail("继续处理与完成", "Keep Processing（继续处理）可以将结果带入后续处理；Done（完成）关闭结果页，不等于保存到相册。"),
			]),
		],
		tips: [detail("先预览，再保存", "水印应清楚可辨，也不要遮挡重要内容。保留原视频，方便以后修改文字、位置或样式并重新导出。")],
		faq: [{ question: "图片水印能免费使用吗？", answer: "当前页面中的 Image* 带 VIP 标记，本例演示文字水印。" }, { question: "为什么结果图与参数图的文字不同？", answer: "参数图使用 ClipDock Demo，真机结果图使用 Made by ClipDock 和另一段视频素材，两者演示的是同一套文字水印流程。" }],
		related: ["capture-video-frames-iphone", "resize-video-iphone", "transcode-video-iphone"],
	},
	{
		key: "capture", slug: "capture-video-frames-iphone", name: "Video Capture", index: 14,
		title: "如何在 iPhone 和 iPad 上截取视频画面与查看批量截图选项？",
		intro: "Video Capture 从视频中导出图片。本文实测 Single 单帧截图，并说明 Batch、Smart、Sheet 这些带 VIP 标记的入口，避免把系统截屏与视频帧导出混淆。",
		chapters: [
			chapter("选择截图模式和时间", "capture-settings", "导入视频后，选择 Capture Mode，再通过 Capture Time 确定要导出的时刻。本例采用 Single、00:00，未添加时间戳。", [
				detail("Single：导出当前一帧", "拖动时间滑块并观察预览，选择主体清楚的一帧，再点击 Export Image。它导出的是视频画面，成品不包含 App 按钮或手机壳。"),
				detail("Batch*、Smart*、Sheet*", "分别是批量截图、智能截图和预览图表入口，当前需要 VIP。本次未进入付费设置或执行这些模式，因此不假定批量间隔、智能算法或图表排版的具体参数。"),
				detail("Add Timestamp", "用于添加时间戳标记。截图用于内容展示时可保持关闭；需要标注来源时刻时可开启，并在导出图中确认位置与可读性。"),
			]),
			chapter("预览图片并保存", "capture-result", "本次 Export Image 后出现 Screenshot Preview，显示 66 KB、JPEG、640×338。核对画面后点击 Save to Photos 保存图片，或用 Share File 分享；Done 关闭预览。", [
				detail("尺寸来自视频画面", "本例源视频为 640×338，输出图片也显示这个尺寸。截图不会因为手机屏幕更大就增加源视频细节。"),
			]),
		],
		tips: [detail("画面模糊", "换一个运动较少的时刻，先检查源视频清晰度。单帧截图不能修复原本模糊的画面。")],
		faq: [{ question: "能一次批量截图吗？", answer: "界面提供 Batch*，需要 VIP。本篇已实测 Single，未验证批量设置和输出。" }, { question: "与手机截屏有什么区别？", answer: "Video Capture 导出视频帧，本次得到 640×338 JPEG；手机截屏还可能包含播放控件和系统界面。" }],
		related: ["video-to-gif-iphone", "segment-grid-video-iphone", "trim-video-iphone"],
	},
	{
		key: "md5", slug: "change-video-md5-iphone", name: "Change MD5", index: 16,
		title: "如何在 iPhone 和 iPad 上使用视频 MD5 修改工具？",
		intro: "Change MD5 会为所选视频生成新的处理文件。本文演示实际入口和结果页；文件摘要属于字节层面的标识，不应把改变摘要理解成改善画质或改变视频内容。",
		chapters: [
			{ title: "选择视频并等待处理", image: "audio-source", text: "点击 Change MD5 后，从 Choose from Photos 选择素材，或按文件所在位置使用其他入口。本次使用已导出的短视频进行快速编辑，进入功能后直接处理，没有单独的参数设置页。", sections: [detail("没有可填写的目标摘要", "本次流程没有出现 MD5 输入框或格式参数。不要把它理解成可以指定任意摘要值的工具。") ] },
			result("md5", "本次生成了以 _md5.mp4 结尾的新文件，结果页显示约 6 秒。已经验证到输出结果页，未进行输入与输出的 MD5 数值比对；需要摘要证据时，应另行计算两个文件的实际值。"),
		],
		tips: [detail("以实际文件校验为准", "文件名变化不能证明 MD5 已改变。如果用途依赖摘要值，请对输入和输出分别计算并比较，而不是只看界面完成提示。")],
		faq: [{ question: "能改善画质或减少文件大小吗？", answer: "本文不把修改 MD5 当作画质增强或压缩工具。需要压缩请使用 Transcode Video。" }, { question: "修改摘要会改变视频的使用权限吗？", answer: "不会，文件摘要变化不改变内容本身的使用权限。" }],
		related: ["transcode-video-iphone", "extract-audio-iphone", "trim-video-iphone"],
	},
	{
		key: "merge", slug: "merge-audio-video-iphone", name: "Merge Audio and Video", index: 17,
		title: "如何在 iPhone 和 iPad 上合并音频与视频？",
		intro: "当画面和声音来自不同文件时，可以使用 Merge Audio and Video。本文选一个短视频，再从另一段相册视频取得音频，完成一次合并导出。",
		chapters: [
			chapter("先选择画面素材", "merge-settings", "先导入要保留画面的视频。上方卡片显示该视频的预览、尺寸和时长；Audio Source 初始显示 Not Selected，表示还没选声音来源。", [detail("画面来源与声音来源分开确认", "先确定哪个视频提供画面，再选择声音。不要把上方已出现视频预览误认为音频来源已经设置完成。")]),
			chapter("选择声音来源", "merge-source", "点击 Audio Source，弹窗提供 Choose from Files 与 Extract audio from Photos video。", [
				detail("Choose from Files", "用于选择文件中的音频素材。准备好要使用的音频后，按系统文件选择器的路径选取。"),
				detail("Extract audio from Photos video", "用于从相册视频取得声音。本例选择此入口，再选中另一段视频；不需要先手动导出一个独立音频文件。"),
			]),
			chapter("核对已选来源再合并", "merge-selected", "返回后，Audio Source 显示所选来源的文件名，表示已完成选择。确认无误后点击 Start Processing。", [
				detail("本页没有额外混音参数", "本次页面只提供 Audio Source，没有独立的音量比例、对齐偏移、循环或音频裁剪参数。对声音长度、同步和原音处理有要求时，必须通过输出试听确认，不能假定会按某种方式自动混音。"),
			]),
			result("merge", "本次合并后出现视频结果页，时长约 6 秒。已验证生成结果，但尚未逐段试听合并音轨；保存前应检查声音来源、开头同步、音量和结尾，尤其注意两份素材时长不一致的情况。"),
		],
		tips: [detail("声画不同步或结尾不合适", "先检查输入素材长度及起始位置。这个设置页没有时间偏移和循环控件，必要时先处理素材，再重新合并。")],
		faq: [{ question: "必须先提取音频吗？", answer: "不必，本次从 Extract audio from Photos video 直接选择另一段相册视频作为声音来源。" }, { question: "是否能同时调节两条音轨的比例？", answer: "本次页面没有显示混音比例或多音轨调节控件，不将其描述为多轨混音器。" }],
		related: ["extract-audio-iphone", "edit-video-audio-iphone", "trim-video-iphone"],
	},
];

export const videoToolScreenshots: Record<string, Shot> = {};
export const videoToolTutorials: Tutorial[] = guides.map(guide => {
	const entry = `tool-${guide.key}-process`;
	videoToolScreenshots[entry] = {
		title: `在 Process 页面打开箭头所指的 ${guide.name}`,
		brief: "真实工具总览，使用 AppStoreScreenshotFramer 橙色外壳与入口标注。",
		src: "/assets/tutorials/extract-audio/process-orange.webp", width: 1319, height: 2748, framed: true,
		highlight: { x: [100, 488, 876][guide.index % 3], y: [426, 722, 1018, 1315, 1611, 1908][Math.floor(guide.index / 3)], width: 346, height: 252 },
	};
	for (const item of guide.chapters) {
		if (!item.image?.startsWith("tool-") || videoToolScreenshots[item.image]) continue;
		videoToolScreenshots[item.image] = {
			title: item.title, brief: item.image === "tool-watermark-result" ? "用户提供的 iPhone 真机导出结果截图，橙色外壳。" : "iPhone 17 Pro Max 模拟器（iOS 26.0）真实操作截图，橙色外壳。",
			src: `/assets/tutorials/video-tools/${item.image.slice(5)}-orange.webp`, width: 1319, height: 2748, framed: true,
		};
	}
	return {
		slug: guide.slug, category: "tools", title: guide.title, screenshotsReady: true,
		description: `${guide.intro}附真实操作截图和参数说明。`,
		intro: `${guide.intro}${guide.key === "watermark" ? "入口与参数图来自 iPhone 17 Pro Max 模拟器，导出结果图来自 iPhone 真机。" : "截图来自 iPhone 17 Pro Max 模拟器（iOS 26.0）。"}英文按钮附中文说明。`,
		verificationNote: guide.verificationNote,
		steps: [
			{ title: `在 Process 页面打开 ${guide.name}`, image: entry, text: `点击底部 Process（处理），在工具总览找到第 ${Math.floor(guide.index / 3) + 1} 排${["左侧", "中间", "右侧"][guide.index % 3]}的 ${guide.name}，点击箭头标出的入口。` },
			...(guide.key === "md5" ? [] : [{ title: "选择要处理的视频", image: "audio-source", text: "在 Select Video 页面点击 Choose from Photos（从相册选择），选中素材；存放在文件中的素材可从 Choose from Files 进入。下载列表为空不影响从相册导入。本文部分步骤复用了先前裁出的约 6 秒短片段；你可以先用 Trim Video 准备短素材。" }]),
			...guide.chapters,
		],
		tips: guide.tips, faq: guide.faq, related: guide.related,
	};
});

export const videoToolOrder = [
	"video-to-gif-iphone", "video-to-live-photo-iphone", "transcode-video-iphone", "trim-video-iphone", "join-videos-iphone", "interleave-videos-iphone",
	"segment-grid-video-iphone", "resize-video-iphone", "rotate-video-iphone", "mirror-video-iphone", "reverse-video-iphone", "change-video-speed-iphone",
	"edit-video-audio-iphone", "add-watermark-video-iphone", "capture-video-frames-iphone", "extract-audio-iphone", "change-video-md5-iphone", "merge-audio-video-iphone",
];
