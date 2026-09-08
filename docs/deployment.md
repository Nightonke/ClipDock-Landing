# ClipDock 正式部署

## 架构与域名

- `clipdock.video`：GitHub Pages；首页 `/zh-Hans/`，教程 `/zh-Hans/articles/`。
- `www.clipdock.video`：GitHub Pages 自定义域名别名。
- `assets.clipdock.video`：Vercel 项目 `clipdock-assets`。
- 计划中的 `assets-cn.clipdock.video`：腾讯云香港 COS + 中国境外 CDN。仅在该路径验证完成后设置 `TENCENT_CDN_ORIGIN`；未设置时所有素材请求由 Vercel 提供。
- Search Console 使用 `sc-domain:clipdock.video`，保留 DNS 中的 Google TXT 验证记录。

主站和素材是独立的发布目标。腾讯云只镜像官网公开素材，不能上传 `references/`、源码、环境变量或凭据。

## 素材版本与发布顺序

1. 在仓库根目录运行 `npm run media:prepare`。它生成响应式图片、素材清单和 `infrastructure/media-cdn/public/releases/<内容哈希>/`。
2. 将该版本完整上传至腾讯云，并保留相同的 `releases/<版本>/assets/...` 路径及 `manifest.json`。保留先前版本，以支持页面回退。
3. 在 `infrastructure/media-cdn/` 运行 `npm ci`、`npm test`、`npm run build`；确认 `.vercel/project.json` 链接到 `clipdock-assets` 后，用 Vercel CLI 发布。不要上传整个仓库或 `references/`。
4. 确认 Vercel 与腾讯云的清单和文件一致，图片正常、视频返回正确 MIME 且支持 Range。更新 `deployment.json` 的 `mediaBaseUrl`；腾讯云就绪后填入 `tencentOrigin`。
5. 运行 `npm run build:production`。检查通过后提交并推送 `main`，由 GitHub Actions 发布页面。

普通文案更新不改变素材版本，推送后可直接自动部署。素材更新必须先完成镜像同步，否则流水线会明确失败。当前仓库不保存 COS 或 Vercel 密钥，也不创建长期云访问凭据。

正式构建会核对原始素材哈希，并下载、校验已发布的响应式图片后再构建。这样 Mac 与 Linux 使用完全相同的压缩图，避免图片编码器的平台差异引起版本变化。

## 分流与缓存

Vercel middleware 仅匹配 `/releases/`。地区为 `CN` 且已配置 `TENCENT_CDN_ORIGIN` 时，以 307 跳转到香港 CDN，保留路径和查询参数，继续支持视频 Range 请求。其他地区使用 Vercel 静态副本。

不可变素材版本可长期缓存；按地区生成的跳转响应使用 `private, no-store`，避免被共享缓存错误复用。主站保留本地素材副本；紧急时使用 `npm run build` 可构建不依赖素材子域名的版本。

## 上线检查

- `scripts/verify-site.py` 检查生成页面的本地链接、素材路径、canonical、教程索引、截图占位和 sitemap。
- 教程仅在 `screenshotsReady` 为真时开放索引。当前 35 篇教程截图齐备；保留各篇的实测限制说明。
- 首版只发布中文已完成内容；英文/繁体及旧功能/场景页需重写后再开放。
- `/privacy/`、`/terms/` 及中文对应路径跳转到 App Store 登记的正式外链，不收录重复跳转页。
- 上线后提交 `https://clipdock.video/sitemap-index.xml`，检查 Google 的抓取结果。提交不代表立即收录。

## 回退

页面可以重新部署上一个成功的 GitHub Actions 提交；不可变素材版本要保留。Vercel 可使用此前的成功部署回退。腾讯云出现异常时，取消 `TENCENT_CDN_ORIGIN` 并重新部署素材项目，所有地区暂时使用 Vercel。

## 待确认事项

腾讯云公有读存储桶的计费条款及按量使用预算待用户确认；确认前不创建该桶、不启用香港分流。App Store 当前法律外链含旧剪贴板工具描述，需要产品侧更新。

## 2026-09-08 发布记录

- 正式部署提交 `ad4bde5`，GitHub Actions 构建及发布成功。主域名 HTTPS 有效，已开启 HTTP 到 HTTPS 跳转。
- Vercel `clipdock-assets` 已发布 448 个素材；`assets.clipdock.video` DNS 与 HTTPS 生效，视频 Range 请求返回 206。
- Search Console 域名所有权已验证；`sitemap-index.xml` 显示 Success；首页实时测试显示可供 Google 访问、可以编入索引，已请求收录。尚不表示已经收录。
- `www.clipdock.video` 的 DNS 健康检查通过，但 GitHub 当前证书仅覆盖裸域名。已按官方排障流程重新绑定域名触发证书处理，仍须复查 www 的 HTTPS。对外入口先使用 `https://clipdock.video/`。
- 腾讯云香港镜像与分流尚未启用；中国大陆素材访问体验仍待完成该配置后实测。
