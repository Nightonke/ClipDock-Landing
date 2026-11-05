import type { AndroidLocale } from '../config/platforms';
import { androidProduct as zhHant } from './zh-Hant/android-product';
import { androidProduct as ja } from './ja/android-product';
import { androidProduct as ko } from './ko/android-product';
import { androidProduct as es } from './es/android-product';
import { androidProduct as ptBR } from './pt-BR/android-product';
import { androidProduct as de } from './de/android-product';
import { androidProduct as fr } from './fr/android-product';

export type AndroidProductCopy = {
 title: string; description: string; heading: string; intro: string; requirements: string;
 featuresTitle: string; features: { title: string; text: string }[];
 accountsTitle: string; accounts: string; purchases: string; privacyTitle: string; privacy: string;
 faqTitle: string; faq: { question: string; answer: string }[]; rights: string; other: string;
};

export const androidProductCopy = {
 'zh-Hant': zhHant, ja, ko, es, 'pt-BR': ptBR, de, fr,
 'en-US': {
  title: 'ClipDock for Android | Web Video Downloader & Video Tools',
  description: 'Save supported web videos on Android, download with a floating paste button, organize files, and trim or convert local media. Learn about free downloads and Premium.',
  heading: 'Save the video. Keep creating.',
  intro: 'ClipDock for Android brings supported link downloads, a web video browser, a media library, and local video and audio tools together. Choose the media you need, check the available quality, and save or share the result.',
  requirements: 'Android 8.0 or later · Free to download · In-app purchases',
  featuresTitle: 'From a link to a usable file',
  features: [
   { title: 'Download from supported links', text: 'Paste a shared link from supported sources such as X, Instagram, Facebook, TikTok, Douyin, Xiaohongshu, or Bilibili. Direct HTTP/HTTPS media files and supported on-demand HLS are also accepted. Select from the quality and formats returned by the source; availability varies by link.' },
   { title: 'Copy, then tap the floating button', text: 'While ClipDock is open, you can enable automatic link filling or downloading. To use a copied link from another app, enable the optional floating paste control and its display-over-other-apps permission, copy the link, then tap the floating button. Started downloads can continue in the background with a visible notification.' },
   { title: 'Find a video on a webpage', text: 'Open the page in the built-in Web Video browser and play the video. Press and hold a supported video or open the detected-video list to choose a resource. DRM-protected content and live streams are not supported. You can bookmark useful pages and revisit recent addresses.' },
   { title: 'Organize and process your files', text: 'Preview, rename, search, filter, and share videos, images, and audio. Import local media to trim, convert, join, resize, rotate, or adjust sound. Other tools include watermarks, GIFs, Motion Photos, and frame capture. Preview exported results before saving or sharing; available options depend on the app and purchase status.' },
  ],
  accountsTitle: 'Free downloads, accounts, and Premium',
  accounts: 'The app includes a limited introductory download allowance and basic tools. Free downloads require Google sign-in; the remaining allowance is shown in the app. Deleting a file or recreating an account does not reset the allowance. Verified Google Play Premium access can be used without a separate ClipDock sign-in.',
  purchases: 'Premium offers weekly, monthly, annual, or one-time unlock options. Check the price and included features on the Google Play purchase screen. Manage recurring subscriptions in Google Play. Purchases and account behavior are specific to this edition; check the terms before choosing a plan.',
  privacyTitle: 'Know what stays local and what is processed',
  privacy: 'Downloaded and imported media and local editing results stay on your device unless you share or export them. Account services, link resolution, purchase verification, and download diagnostics process information as described in the Android privacy policy. The iOS privacy label does not describe this edition.',
  faqTitle: 'Before you start',
  faq: [
   { question: 'Where do completed downloads go?', answer: 'They appear in ClipDock’s resource library. You can preview them, save supported files to your gallery, or share them with another app. A finished download and a successful gallery export are separate steps.' },
   { question: 'Why can a link or background task fail?', answer: 'Source changes, unavailable resources, sign-in requirements, network conditions, or Android battery restrictions can interrupt a task. Check the source link, inspect the failure message, and retry when the underlying condition changes. Supported sources do not guarantee every video or quality level.' },
   { question: 'Are the iPhone tutorials the same on Android?', answer: 'The current screenshot tutorials on this website show iPhone and iPad. Android controls, permissions, free allowances, and some features differ. Use this Android overview and the Google Play screenshots for the Android edition.' },
   { question: 'How can I delete my account or cancel a subscription?', answer: 'Use the Android account and data deletion instructions below. Account deletion and subscription cancellation are separate: manage a recurring subscription in Google Play. The deletion page also provides a request method without reinstalling the app.' },
  ],
  rights: 'Save and process only content you own or are authorized to use. Source restrictions and access controls still apply.',
  other: 'Choose another platform',
 },
 'zh-Hans': {
  title: 'ClipDock 安卓版｜视频下载与本地处理工具',
  description: '在 Android 上保存支持的网页视频，使用悬浮粘贴按钮下载、管理文件，并裁剪或转码本地素材。了解免费额度、Google 登录和 Premium。',
  heading: '保存视频，继续创作。',
  intro: 'ClipDock 安卓版把支持的链接下载、网页视频浏览器、资源管理和本地音视频工具放在一起。选择所需素材、确认可用画质，再保存或分享结果。',
  requirements: 'Android 8.0 及以上 · 免费下载 · 包含 App 内购买',
  featuresTitle: '从一个链接，到可用的素材',
  features: [
   { title: '从支持的链接下载', text: '粘贴 X、Instagram、Facebook、TikTok、抖音、小红书或哔哩哔哩等支持来源的分享链接，也可使用 HTTP/HTTPS 媒体直链及支持的 HLS 点播资源。按来源返回结果选择画质和格式；实际可用范围取决于具体链接。' },
   { title: '复制链接，再点悬浮按钮', text: '在 ClipDock 内可开启自动填入或下载链接。想在其他 App 中使用复制的链接时，可主动开启悬浮粘贴控件并授权“显示在其他应用上层”，复制链接后点击悬浮按钮。已开始的下载可在后台继续，并显示通知。' },
   { title: '从网页中选择视频', text: '在内置“网页视频”浏览器中打开页面并播放视频，长按支持的视频，或打开检测到的视频列表选择资源。不支持 DRM 保护内容和直播流。常用页面可保存为书签，也可从最近地址重新打开。' },
   { title: '管理文件，处理本地素材', text: '预览、重命名、搜索、筛选和分享视频、图片或音频。导入本地素材后，可裁剪、转码、拼接、调整画布、旋转或处理声音，也提供水印、GIF、动态照片（Motion Photos）和截图等工具。保存或分享前先预览成品；可用选项以版本和购买状态为准。' },
  ],
  accountsTitle: '免费额度、账号与 Premium',
  accounts: 'App 提供有限的首次免费下载额度和基础工具。免费下载需要 Google 登录，剩余额度以 App 内显示为准。删除文件或重新创建账号不会重置额度。已验证的 Google Play Premium 权益无需另行登录 ClipDock。',
  purchases: 'Premium 提供周、月、年订阅或一次性解锁选项，具体价格和包含功能以 Google Play 购买页面为准。续费订阅在 Google Play 中管理。购买和账号规则适用于对应版本，选择前请查看条款。',
  privacyTitle: '了解本地文件与数据处理',
  privacy: '下载、导入的媒体和本地处理结果保存在设备上，主动分享或导出时由相应目标处理。账号服务、链接解析、购买验证和下载诊断会按 Android 隐私政策处理相关信息；iOS 的隐私标签不代表此版本。',
  faqTitle: '开始使用前',
  faq: [
   { question: '下载完成后，文件在哪里？', answer: '文件会出现在 ClipDock 的资源管理中，可预览、将支持的文件保存到相册，或分享给其他 App。下载完成和成功导出到相册是两个步骤。' },
   { question: '为什么链接解析或后台任务会失败？', answer: '来源变化、资源失效、登录要求、网络状况或 Android 电池限制都可能影响任务。先检查链接是否可访问及失败提示，解决对应原因后再重试。支持某个平台不意味着每个视频或画质都能下载。' },
   { question: '网站上的 iPhone 教程适用于 Android 吗？', answer: '本站现有截图教程展示 iPhone 和 iPad 版本。Android 的按钮、权限、免费额度和部分功能有所不同；Android 版可先参考此页说明及 Google Play 商店截图。' },
   { question: '如何删除账号或取消订阅？', answer: '可查看下方的 Android 账号与数据删除说明。删除账号和取消订阅是不同操作，续费订阅需在 Google Play 中管理。删除说明也提供无需重新安装 App 的申请方式。' },
  ],
  rights: '请仅保存和处理自己拥有或获准使用的内容，并遵守来源限制和访问控制。',
  other: '选择其他平台',
 },
} satisfies Record<AndroidLocale, AndroidProductCopy>;
