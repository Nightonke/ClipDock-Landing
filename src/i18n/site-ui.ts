import type { Locale } from './locales';
const en = {
 nav: { features: 'Features', useCases: 'Video tools', faq: 'FAQ', getApp: 'Get ClipDock', menu: 'Menu' },
 tagline: 'Save from a link. Do more with your videos.', tutorials: 'Tutorials',
 header: 'Site header', home: 'Home', primaryNav: 'Primary navigation', mobileNav: 'Mobile navigation', footerNav: 'Footer navigation', skip: 'Skip to content',
 demos: 'ClipDock feature demos', chooseDemo: 'Choose a demo', progress: 'Video playback progress', demoEmpty: 'Demo coming soon', demoEmptyHint: 'Explore the features below', retry: 'Retry playback', failed: 'This video could not be played',
 demoTitles: ['Download a link', 'Copy to download', 'Save from a webpage', 'Download a playlist'],
 demoDescriptions: ['Copy a shared link to extract and download media.', 'Copy a supported link to download in the background.', 'Play a video in the browser, then long-press to download.', 'Load a playlist and download several videos together.'],
 slideTitles: ['Paste a YouTube video link', 'Wait for caption extraction', 'Choose caption languages', 'Choose a caption file format', 'Save to Files or share'],
 carousel: 'carousel', subtitleSteps: 'YouTube caption extraction steps', chooseStep: 'Choose a step', step: 'Step', pause: 'Pause', play: 'Play', pauseCarousel: 'Pause slideshow', playCarousel: 'Play slideshow',
 breadcrumb: 'Breadcrumb', contents: 'On this page', troubleshooting: 'Troubleshooting', questions: 'Frequently asked questions', steps: 'Steps', related: 'Explore next', read: 'Read tutorial', openImage: 'Open full-size image', screenshot: 'Screenshot', missingScreenshot: 'Screenshot coming soon',
 draft: 'Draft tutorial — screenshots and steps are awaiting review.', supportedPlatforms: 'Supported platforms', ctaTitle: 'Try it on your device', ctaText: 'ClipDock is free to download, with in-app purchases. Features and available options depend on the current app version.', ctaButton: 'Download on the App Store',
 toolCount: '{count} video tools with illustrated entry points, settings, and notes on what was tested.', draftCount: '{count} tutorials are awaiting screenshots and review.', indexTitle: 'ClipDock tutorials for iPhone and iPad', indexDescription: 'Learn how to save and work with media in ClipDock, with step-by-step instructions and screenshots.', indexHeading: 'A link is just\nthe beginning.', indexIntro: 'Download supported videos, collect links in the background, save batches, extract YouTube captions, and turn your media into the format you need.', categories: 'Tutorial categories', unverified: 'Export verification incomplete',
};
type SiteUI = { [K in keyof typeof en]: (typeof en)[K] };
const zh: SiteUI = {
 nav: { features: '功能亮点', useCases: '视频工具', faq: '常见问题', getApp: '下载 App', menu: '菜单' },
 tagline: '从链接保存视频，让处理更轻松。', tutorials: '使用教程',
 header: '网站页眉', home: '首页', primaryNav: '主导航', mobileNav: '移动端导航', footerNav: '页脚导航', skip: '跳到正文',
 demos: 'ClipDock影随存 功能演示', chooseDemo: '选择演示视频', progress: '视频播放进度', demoEmpty: '演示视频即将补充', demoEmptyHint: '先了解下方的功能介绍', retry: '重试播放', failed: '视频暂时无法播放',
 demoTitles: ['分享链接下载', '复制即后台下载', '长按网页下载', '播放列表批量下载'],
 demoDescriptions: ['复制分享链接，提取并下载视频或图片。', '不必切换 App，复制链接即可后台下载。', '在内置浏览器播放视频，长按即可下载。', '解析播放列表，一次下载多个视频。'],
 slideTitles: ['粘贴 YouTube 视频链接', '等待字幕提取完成', '选择需要的字幕语言', '选择字幕文件格式', '保存到文件或分享'],
 carousel: '轮播', subtitleSteps: 'YouTube 字幕提取操作步骤', chooseStep: '选择步骤', step: '步骤', pause: '暂停', play: '播放', pauseCarousel: '暂停自动轮播', playCarousel: '播放自动轮播',
 breadcrumb: '面包屑', contents: '本篇内容', troubleshooting: '遇到问题时', questions: '常见问题', steps: '操作步骤', related: '接下来，你可能需要', read: '阅读教程', openImage: '打开大图', screenshot: '截图', missingScreenshot: '真实操作截图待补充',
 draft: '教程初稿 · 截图与操作细节待核对，尚未标记为实测教程。', supportedPlatforms: '支持平台', ctaTitle: '在你的设备上试一试', ctaText: 'ClipDock影随存可免费下载，包含 App 内购买。具体功能入口与可用选项以 App 当前版本为准。', ctaButton: '在 App Store 下载',
 toolCount: '{count} 个视频处理功能均附入口标注与真实截图；各篇注明参数限制和实测情况。', draftCount: '另有 {count} 篇教程仍待补充截图与核对步骤。', indexTitle: '视频下载、字幕提取与处理教程｜iPhone / iPad｜ClipDock影随存', indexDescription: '在 iPhone 和 iPad 上下载视频、使用复制即下载、批量保存主页与播放列表，提取 YouTube 字幕，以及提取音频、制作实况照片和拼接视频。', indexHeading: '从第一条链接，\n到你的保存方式。', indexIntro: '在 iPhone 和 iPad 上下载视频、批量保存作品、提取 YouTube 字幕，再把素材处理成你需要的样子。', categories: '教程分类', unverified: '导出验证未完成',
};
export const siteUI = (locale: Locale | string): SiteUI => locale === 'en-US' || locale === 'en' ? en : zh;
