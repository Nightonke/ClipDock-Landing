# 给 SplitScreenPlayer 项目对话的交接文案

以下内容可以直接复制给负责 `splitscreenplayer.com` 的对话。

更新于 2026-11-05：ClipDock 已增加 Android 产品入口；使用下方双平台文案替代早先仅介绍 iPhone/iPad 的版本。

---

请在 SplitScreenPlayer 网站增加对同一开发者另一款应用 ClipDock 影随存的自然推荐，帮助需要准备视频素材的用户找到对应工具。请直接修改该项目并完成构建和链接检查。

## 位置与范围

在首页主功能介绍之后、适合推荐相关工具的位置增加一张简洁卡片，沿用现有设计。保留分屏播放器原有主要下载入口。两款应用独立使用，不做自动跳转，不暗示存在一键同步、自动导入或账号互通。

如果已有与视频格式、画面比例或字幕相关的教程，可挑选真正相关的正文段落增加指向 ClipDock 对应教程的链接。无需给每篇文章添加相同推荐，也不要为了链接创建新文章。

## 简体中文卡片

标注：同一开发者的另一款应用

标题：先准备视频，再开始多画面比较

正文：ClipDock 影随存支持 iPhone、iPad 和 Android，可从支持的链接保存视频，并裁剪、转码和调整本地视频的画面比例。整理好素材后，再导入分屏播放器进行播放与比较。具体功能与可用来源因平台而异。

按钮：了解 ClipDock 影随存

目标：`https://clipdock.video/zh-Hans/`

## 英文卡片

Label: Another app from the same developer

Title: Prepare your videos for side-by-side viewing

Body: ClipDock helps you save videos from supported links and trim, convert, or resize local videos on iPhone, iPad, and Android. Prepare your files, then import them into Split Screen Player to play and compare. Features and available sources vary by platform.

Button: Explore ClipDock

URL: `https://clipdock.video/`

## 按上下文选用的教程链接

| 使用场景 | 简体中文锚文本 | 简体中文目标 URL | 英文锚文本 / 目标路径 |
| --- | --- | --- | --- |
| 素材格式或体积需要调整 | 用 ClipDock 转换格式或压缩视频 | `https://clipdock.video/zh-Hans/articles/transcode-video-iphone/` | Convert or compress videos with ClipDock / `https://clipdock.video/articles/transcode-video-iphone/` |
| 需要预先处理画面比例 | 调整视频比例和画布 | `https://clipdock.video/zh-Hans/articles/resize-video-iphone/` | Adjust video aspect ratio and canvas / `https://clipdock.video/articles/resize-video-iphone/` |
| 需要单独保存已有字幕 | 提取 YouTube 已有字幕 | `https://clipdock.video/zh-Hans/articles/extract-youtube-subtitles-iphone/` | Extract existing YouTube subtitles / `https://clipdock.video/articles/extract-youtube-subtitles-iphone/` |

以上三个教程链接均展示 **iPhone/iPad** 流程，推荐时明确平台。字幕链接仅用于文章确实讨论字幕文件的情境，不暗示 Split Screen Player 当前支持某种尚未验证的字幕工作流，也不将 YouTube 字幕提取写成 ClipDock 两端共有功能。

Android 场景推荐链接：简体中文 `https://clipdock.video/zh-Hans/android/`，英文 `https://clipdock.video/android/`。可用锚文本为“了解 ClipDock 安卓版”或“Explore ClipDock for Android”。Android 页面解释链接下载、悬浮粘贴、资源管理、视频工具、Google 登录及免费额度。

如果需要“下载 ClipDock”按钮，链接到 `https://clipdock.video/zh-Hans/download/`（简体中文）或 `https://clipdock.video/download/`（英文），让用户选择 App Store 或 Google Play；产品介绍卡片的“了解”按钮仍链接品牌首页。

## 实现要求

- 按钮使用真实 `<a href="https://clipdock.video/.../">`，可按站点风格表现为按钮；服务端输出完整链接，不依赖点击事件跳转。
- 同语言链接到 ClipDock 对应语言页面。支持的路径：英文 `/`，简体中文 `/zh-Hans/`、繁体中文 `/zh-Hant/`、日文 `/ja/`、韩文 `/ko/`、西班牙文 `/es/`、巴西葡萄牙文 `/pt-BR/`、德文 `/de/`、法文 `/fr/`。其他语言链接英文首页，不生成不存在的路径。
- 下载选择页和 Android 产品介绍页在上述九种语言路径下均提供 `/download/` 与 `/android/`，请链接对应语言。例如日文产品介绍为 `https://clipdock.video/ja/android/`，法文为 `https://clipdock.video/fr/android/`。Android 隐私政策、条款和账号删除说明仍仅有英文与简体中文，其他语言的政策入口明确标注英文。
- 不将 iOS 的“不收集数据”、App Store 评分或购买权益用于 Android。Android 有独立的免费下载额度、登录要求和数据处理说明；不要承诺两端购买互通。
- 这是自然的自有产品推荐，使用普通链接，无需添加 `nofollow`。若另开标签页，使用 `target="_blank" rel="noopener"`。
- 推荐文字自然介绍用途，不堆砌“免费、最佳、无水印”等关键词，不承诺所有来源都可下载或格式转换一定解决播放问题。
- 检查桌面和移动端布局、键盘焦点、链接目标和目标页状态；保持该站现有 canonical 与 sitemap 规则。

这项改动提供相关产品入口和用户访问路径，不承诺它能使 ClipDock 的全部页面被 Google 收录。实现方式参考 [Google 的可抓取链接建议](https://developers.google.com/search/docs/crawling-indexing/links-crawlable)。
