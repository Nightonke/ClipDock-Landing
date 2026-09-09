# ClipDock 正式部署

## 2026-09-09 批量下载视频片尾修复

- `batch-playlist.mp4` 无损截取前 19 秒（456 帧），删除约 2.04 秒的黑屏及 CapCut 片尾；保留帧与原视频逐帧校验一致，字幕原有 19 秒结束时间保持不变。
- 素材版本更新为 `c5dcf79585974e0e`，526 个素材中仅此视频发生变化。腾讯云上传 527/527 成功，两端清单及视频 SHA-256 校验一致。
- Vercel 生产部署 `dpl_84YvM27Feb7te6T1KAhg2PCgTKKt` 已包含新版本以及 `1ce0d649b3537c86`、`5061412bf9a8eadd` 两个旧版本。
- 正式构建通过：136 个页面、135 个 sitemap URL、7657 处本地引用；7 项语言检查、4 项视频恢复和 2 项素材分流测试通过。本次仅发布视频修复和素材版本配置。

## 架构与域名

- `clipdock.video`：GitHub Pages；英文首页 `/`、教程 `/articles/`；简体中文首页 `/zh-Hans/`、教程 `/zh-Hans/articles/`；繁体中文首页 `/zh-Hant/`、教程 `/zh-Hant/articles/`。
- `www.clipdock.video`：Vercel 提供 HTTPS 308 跳转到主域名，保留路径与查询参数。
- `assets.clipdock.video`：Vercel 项目 `clipdock-assets`。
- `assets-cn.clipdock.video`：腾讯云香港 COS + 中国境外 CDN。已配置 Vercel 生产环境的 `TENCENT_CDN_ORIGIN`，中国大陆素材请求转到此域名，其他地区由 Vercel 提供。
- Search Console 使用 `sc-domain:clipdock.video`，保留 DNS 中的 Google TXT 验证记录。

主站和素材是独立的发布目标。腾讯云只镜像官网公开素材，不能上传 `references/`、源码、环境变量或凭据。

## 素材版本与发布顺序

1. 在仓库根目录运行 `npm run media:prepare`。它生成响应式图片、素材清单和 `infrastructure/media-cdn/public/releases/<内容哈希>/`。
2. 将该版本完整上传至腾讯云，并保留相同的 `releases/<版本>/assets/...` 路径及 `manifest.json`。保留先前版本，以支持页面回退。
3. 在 `infrastructure/media-cdn/` 运行 `npm ci`、`npm test`、`npm run build`；确认 `.vercel/project.json` 链接到 `clipdock-assets` 后，用 Vercel CLI 发布。`media:prepare` 会重建本地暂存目录，因此部署 Vercel 前还须恢复并校验上一版本到 `public/releases/`，让旧页面与回退版本继续可用。不要上传整个仓库或 `references/`。
4. 确认 Vercel 与腾讯云的清单和文件一致，图片正常、视频返回正确 MIME 且支持 Range。更新 `deployment.json` 的 `mediaBaseUrl`；腾讯云就绪后填入 `tencentOrigin`。
5. 运行 `npm run build:production`。检查通过后提交并推送 `main`，由 GitHub Actions 发布页面。

普通文案更新不改变素材版本，推送后可直接自动部署。素材更新必须先完成镜像同步，否则流水线会明确失败。当前仓库不保存 COS 或 Vercel 密钥，也不创建长期云访问凭据。

正式构建会核对原始素材哈希，并下载、校验已发布的响应式图片后再构建。这样 Mac 与 Linux 使用完全相同的压缩图，避免图片编码器的平台差异引起版本变化。

## 分流与缓存

Vercel middleware 仅匹配 `/releases/`。地区为 `CN` 且已配置 `TENCENT_CDN_ORIGIN` 时，以 307 跳转到香港 CDN，保留路径和查询参数，继续支持视频 Range 请求。其他地区使用 Vercel 静态副本。

不可变素材版本可长期缓存；按地区生成的跳转响应使用 `private, no-store`，避免被共享缓存错误复用。主站保留本地素材副本；紧急时使用 `npm run build` 可构建不依赖素材子域名的版本。

## 上线检查

- `scripts/verify-site.py` 检查生成页面的本地链接、素材路径、canonical、教程索引、截图占位和 sitemap。
- 教程仅在 `screenshotsReady` 为真时开放索引。当前英语、简体中文、繁体中文各 41 篇教程截图齐备；保留各篇的实测限制说明。
- 发布语言为英语、简体中文和繁体中文，教程逐篇对应；旧功能/场景模板仍不生成。
- `scripts/verify-locales.py` 检查各语言文案完整性、41 篇三语覆盖、步骤/截图数量及双向 hreflang。
- `/privacy/`、`/terms/` 及各已发布语言的对应路径直接展示完整站内正文，具有对应语言的 canonical、hreflang，并收录到 sitemap。
- 上线后提交 `https://clipdock.video/sitemap-index.xml`，检查 Google 的抓取结果。提交不代表立即收录。

## 回退

页面可以重新部署上一个成功的 GitHub Actions 提交；不可变素材版本要保留。Vercel 可使用此前的成功部署回退。腾讯云出现异常时，取消 `TENCENT_CDN_ORIGIN` 并重新部署素材项目，所有地区暂时使用 Vercel。

## 维护事项

用户已确认 COS 及 CDN HTTPS 计费条款，HTTPS 与香港分流已开启。免费证书到期前需要重新申请并部署，不能仅申请而不下发。站内法律页发布后，App Store Connect 中登记的旧法律链接可更新到 clipdock.video，详见 [法律页面维护](legal-pages.md)。

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
- www 跳转中间件覆盖所有路径；已指定新解析地址验证有效 TLS、根路径及教程路径的 308，并保留查询参数。部分递归 DNS 仍可能缓存旧 GitHub 地址，需等待原 TTL 过期。
- 正式浏览器验证：首页 5 个演示视频均可加载，教程首屏及附近截图加载成功；最新主站自动部署检查成功。
- HTTPS 和请求链路已验收；尚未完成中国大陆三大运营商的多地速度测试。


## 2026-09-08 视频跨域续传修复

- Chrome 现场：视频先取得 Vercel 的缓存 206，后续 Range 收到跳转到 `assets-cn.clipdock.video` 的 307，目标请求立即被取消（0 字节、0 毫秒），播放器报 `PIPELINE_ERROR_READ`。未指定 CORS 的媒体缓冲区不能在已有数据后合并跨域续传。
- 全站视频使用 `crossorigin="anonymous"`，两端素材服务已提供 `Access-Control-Allow-Origin: *`。生产构建检查每个 video 标签，避免遗漏。
- 真实 Chrome 对照：`node tests/fixtures/video-range-server.mjs` 后访问 `http://localhost:4324/`。同一视频先返回前 2 MiB，再将后续 Range 跳到另一端口；旧配置复现相同错误，CORS 配置完整播放 34.5 秒、零错误。
- 自动恢复不再展示反复出现的提示；最终失败操作采用绝对定位浮层，避免增减卡片高度。

## 2026-09-09 英文版构建验收

- 首页及教程已采用共用模板，英文与中文各有 35 篇教程，合计 74 个可索引页面；包含跳转与 404 的构建输出为 79 页。
- 复用现有 132 处教程截图/演示说明，无素材文件变更，保持现有 CDN 版本。
- 正式构建检查两端 CDN 清单，并验证全站链接、教程完整性、语言标记和双向 hreflang；TypeScript 与 4 项视频恢复测试通过。
- 浏览器检查了英文目录、平台下载、复制即下载、批量下载、拼接及音视频工具；320/390 像素小屏与桌面显示正常。
- 英文首页为根路径，中文仍保留 `/zh-Hans/`，通过菜单选择语言。主站按现有 `main` 推送流程发布。

## 2026-09-09 繁体中文发布素材同步

- 修复主站发布被素材版本校验阻塞的问题：新增的 26 张教程原图及 52 张响应式图片现已包含在素材版本 `1ce0d649b3537c86`，共 526 个素材及 `manifest.json`。
- 腾讯云上传任务显示 527/527 成功；两端入口清单一致，78 个新增文件的 CDN SHA-256 全部匹配，5 个视频的 Range、MIME、CORS 及返回字节检查通过。
- Vercel 生产部署 `dpl_ErcG7fE7KvPNS6vz7uuUU9KVFJsk` 同时包含新版本和旧版本 `5061412bf9a8eadd`；腾讯云也保留旧版本。
- `deployment.json` 已切换到新版本。正式构建通过：136 个页面、135 个 sitemap URL、7657 处本地引用；三种语言各 41 篇教程，包含繁中首页、教程和法律页。
- 7 项语言完整性、4 项视频恢复和 2 项素材分流测试通过。推送本次配置后，由 GitHub Actions 发布主站。
