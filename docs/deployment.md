# ClipDock 正式部署

## 架构与域名

- `clipdock.video`：GitHub Pages；首页 `/zh-Hans/`，教程 `/zh-Hans/articles/`。
- `www.clipdock.video`：Vercel 提供 HTTPS 308 跳转到主域名，保留路径与查询参数。
- `assets.clipdock.video`：Vercel 项目 `clipdock-assets`。
- `assets-cn.clipdock.video`：腾讯云香港 COS + 中国境外 CDN。已配置 Vercel 生产环境的 `TENCENT_CDN_ORIGIN`，中国大陆素材请求转到此域名，其他地区由 Vercel 提供。
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

## 维护事项

用户已确认 COS 及 CDN HTTPS 计费条款，HTTPS 与香港分流已开启。免费证书到期前需要重新申请并部署，不能仅申请而不下发。App Store 当前法律外链含旧剪贴板工具描述，需要产品侧更新。

## 2026-09-08 发布记录

- 正式部署提交 `ad4bde5`，GitHub Actions 构建及发布成功。主域名 HTTPS 有效，已开启 HTTP 到 HTTPS 跳转。
- Vercel `clipdock-assets` 已发布 448 个素材；`assets.clipdock.video` DNS 与 HTTPS 生效，视频 Range 请求返回 206。
- Search Console 域名所有权已验证；`sitemap-index.xml` 显示 Success；首页实时测试显示可供 Google 访问、可以编入索引，已请求收录。尚不表示已经收录。
- `www.clipdock.video` 的 DNS 健康检查通过，但 GitHub 当前证书仅覆盖裸域名。已按官方排障流程重新绑定域名触发证书处理，仍须复查 www 的 HTTPS。对外入口先使用 `https://clipdock.video/`。
- 腾讯云香港镜像与分流尚未启用；中国大陆素材访问体验仍待完成该配置后实测。

## 2026-09-08 香港镜像准备记录

- COS：`clipdock-landing-1257446936`，地域 `ap-hongkong`，单 AZ、公有读私有写。
- 已上传 `releases/5061412bf9a8eadd/`，含 448 个素材及 manifest.json。448 个素材远端大小全部匹配；全部 5 个 MP4 与三类图片样本的 SHA-256 匹配。
- CDN：`assets-cn.clipdock.video`，域名 ID `cdn-5hlmqava`，境外加速、音视频点播、HTTPS 回源到该 COS。CNAME 已设置为 `assets-cn.clipdock.video.cdn.dnsv1.com`。
- CDN 已配置并开启 `Access-Control-Allow-Origin: *`。推荐配置页面已准备保留大小写、分片回源、视频拖拽和 100 QPS 单 IP 限频；须与 HTTPS 确认后一起提交并复核。
- 免费证书 `ae4Ym4bz` 已签发给 `assets-cn.clipdock.video`，到期时间 `2026-12-07 20:59:59`（控制台显示）。DNS 验证记录已添加。证书已在推荐配置页面选中，尚待 HTTPS 服务确认与下发。
- 月度预算 `COS 与 CDN 月度预算（含 ClipDock）` 已保存：COS + CDN 产品合计 50 元，40/50 元阈值提醒；包含既有 Split Screen 用量，仅告警、不自动停服。
- 尚未启用主站素材香港分流。确认 CDN HTTPS 独立计费条款后，继续完成 HTTPS、Range、CORS、缓存和分流验证。

## 2026-09-08 HTTPS 与香港分流上线

- CDN HTTPS 服务及证书已下发，CNAME 显示已生效；HTTPS 清单与本地一致。视频 Range 返回 206，返回的 1024 字节与原视频一致，响应包含 `Access-Control-Allow-Origin: *`，缓存已命中。
- Vercel 生产环境 `TENCENT_CDN_ORIGIN=https://assets-cn.clipdock.video` 已生效。实际请求验证得到 307 香港跳转及 `private, no-store`；跳转后的文件能正常读取。
- `deployment.json` 已启用腾讯云清单校验。正式构建支持跟随区域跳转，43 个页面、37 个 sitemap URL、1748 处本地引用检查通过。
- `www` 的 DNS 改为 Vercel 推荐的 `A 76.76.21.21`，使用现有素材项目中的主机名匹配规则转到正式主域名。裸域名的 GitHub Pages 解析保持原配置。
- HTTPS 和请求链路已验收；尚未完成中国大陆三大运营商的多地速度测试。
