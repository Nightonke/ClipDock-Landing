# 给 SplitScreenPlayer 项目对话的交接文案

以下内容可以直接复制给负责 `splitscreenplayer.com` 的对话。

---

请在 SplitScreenPlayer 网站增加对同一开发者另一款应用 ClipDock 影随存的自然推荐，帮助需要准备视频素材的用户找到对应工具。请直接修改该项目并完成构建和链接检查。

## 位置与范围

在首页主功能介绍之后、适合推荐相关工具的位置增加一张简洁卡片，沿用现有设计。保留分屏播放器原有主要下载入口。两款应用独立使用，不做自动跳转，不暗示存在一键同步、自动导入或账号互通。

如果已有与视频格式、画面比例或字幕相关的教程，可挑选真正相关的正文段落增加指向 ClipDock 对应教程的链接。无需给每篇文章添加相同推荐，也不要为了链接创建新文章。

## 简体中文卡片

标注：同一开发者的另一款应用

标题：先准备视频，再开始多画面比较

正文：ClipDock 影随存可在 iPhone 和 iPad 上从支持的链接保存视频、提取 YouTube 已有字幕，并裁剪、转码和调整本地视频的画面比例。整理好素材后，再导入分屏播放器进行播放与比较。

按钮：了解 ClipDock 影随存

目标：`https://clipdock.video/zh-Hans/`

## 英文卡片

Label: Another app from the same developer

Title: Prepare your videos for side-by-side viewing

Body: ClipDock helps you save videos from supported links, extract existing YouTube subtitles, and trim, convert, or resize local videos on iPhone and iPad. Prepare your files, then import them into Split Screen Player to play and compare.

Button: Explore ClipDock

URL: `https://clipdock.video/`

## 按上下文选用的教程链接

| 使用场景 | 简体中文锚文本 | 简体中文目标 URL | 英文锚文本 / 目标路径 |
| --- | --- | --- | --- |
| 素材格式或体积需要调整 | 用 ClipDock 转换格式或压缩视频 | `https://clipdock.video/zh-Hans/articles/transcode-video-iphone/` | Convert or compress videos with ClipDock / `https://clipdock.video/articles/transcode-video-iphone/` |
| 需要预先处理画面比例 | 调整视频比例和画布 | `https://clipdock.video/zh-Hans/articles/resize-video-iphone/` | Adjust video aspect ratio and canvas / `https://clipdock.video/articles/resize-video-iphone/` |
| 需要单独保存已有字幕 | 提取 YouTube 已有字幕 | `https://clipdock.video/zh-Hans/articles/extract-youtube-subtitles-iphone/` | Extract existing YouTube subtitles / `https://clipdock.video/articles/extract-youtube-subtitles-iphone/` |

字幕链接仅用于文章确实讨论字幕文件的情境，不暗示 Split Screen Player 当前支持某种尚未验证的字幕工作流。ClipDock 目前网站公开推广的是 iPhone/iPad 版本，不将其描述为 Android 应用。

## 实现要求

- 按钮使用真实 `<a href="https://clipdock.video/.../">`，可按站点风格表现为按钮；服务端输出完整链接，不依赖点击事件跳转。
- 同语言链接到 ClipDock 对应语言页面。支持的路径：英文 `/`，简体中文 `/zh-Hans/`、繁体中文 `/zh-Hant/`、日文 `/ja/`、韩文 `/ko/`、西班牙文 `/es/`、巴西葡萄牙文 `/pt-BR/`、德文 `/de/`、法文 `/fr/`。其他语言链接英文首页，不生成不存在的路径。
- 这是自然的自有产品推荐，使用普通链接，无需添加 `nofollow`。若另开标签页，使用 `target="_blank" rel="noopener"`。
- 推荐文字自然介绍用途，不堆砌“免费、最佳、无水印”等关键词，不承诺所有来源都可下载或格式转换一定解决播放问题。
- 检查桌面和移动端布局、键盘焦点、链接目标和目标页状态；保持该站现有 canonical 与 sitemap 规则。

这项改动提供相关产品入口和用户访问路径，不承诺它能使 ClipDock 的全部页面被 Google 收录。实现方式参考 [Google 的可抓取链接建议](https://developers.google.com/search/docs/crawling-indexing/links-crawlable)。
