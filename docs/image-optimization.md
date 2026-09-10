# 图片维护与部署

- 高清图片保留在 `public/assets/tutorials/`、`public/assets/screenshots/`；教程点击大图和截图灯箱继续使用原文件。
- `npm run dev`、`npm start`、`npm run build` 自动运行 `scripts/optimize-images.mjs`。也可单独执行 `npm run images:optimize`。
- 教程生成 480/800px，展示截图生成 480/800/1080px 的 WebP（quality 88）。浏览器根据 sizes、屏幕像素密度选择版本。
- `public/assets/optimized/` 和 `src/generated/*-variants.json` 是自动生成并被 Git 忽略的文件；部署必须运行 `npm run build`，发布 `dist/`。不要只复制源码 public 目录。
- 文件名包含源文件内容哈希，替换源图会自动生成新 URL；脚本复用缓存并清除失效的生成文件。首次构建会比后续构建慢。
- 正文截图、首页下方截图及评价头像使用懒加载；首屏图片维持正常加载。二维码保留原格式，以免影响扫描。
- 优化减少页面实际加载量。由于保留高清原图并添加响应式版本，部署静态目录总大小不一定下降。

## 本地归档（不部署、不入 Git）

2026-09-10：以下 7 组教程共 31 张截图已统一为自带橙色手机壳的 `*-orange.webp`：YouTube Shorts、YouTube 话题、YouTube 频道、Instagram 话题、TikTok 话题、B 站合集和 YouTube 字幕提取。使用 NVideo 的 `Tools/AppStoreScreenshotFramer/add_iphone_frame.py --frame orange` 生成透明 PNG，再转换为无损 WebP，尺寸为 `1319×2748`。文章素材设置 `framed: true`；首页字幕轮播直接使用同一批带框图片，不再叠加外壳。

这批原图保存在 `references/tutorial-originals/<分组>/`，加框 PNG 保存在 `references/tutorial-framed/<分组>/`。公开素材目录仅保留新版本，避免继续发布未使用的原图。发布这次变更时，须先发布新的媒体 release 并更新 `deployment.json`，再发布网站；旧媒体 release 不受本地归档影响。

以下确认未引用的旧图片已移到 `references/unused-tutorial-images/`，需要时可恢复：

- `extract-audio/process.png`
- `extract-audio/select-source.png`
- `extract-audio/share.png`
- `extract-audio/complete.png`
- `video-tools/watermark-history-orange.webp`

新增截图应先完成隐私处理，再放进 public；压缩脚本不负责打码。小红书分享页继续使用已经模糊头像和用户名的版本。
