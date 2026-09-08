> 历史交接记录：当前发布架构与范围以 `docs/deployment.md` 和 `README.md` 为准。以下内容保留作为模板初始化记录。

# ClipDock Landing 交接文档

更新日期：2026-09-03

## 1. 项目目标

基于同级项目 `Split-Screen-Player-Landing` 的视觉模板、Astro 架构、多语言路由和 SEO 基础，为 ClipDock 创建独立 landing 网站。

- 产品：ClipDock: Web Video Downloader
- App Store：https://apps.apple.com/us/app/clipdock-web-video-downloader/id6769265797
- App ID：`6769265797`
- Bundle ID：`com.nightonke.ResourceDownloader`
- 正式域名：`clipdock.video`
- 计划仓库：`Nightonke/ClipDock-Landing`
- 计划托管：GitHub Pages + GitHub Actions

## 2. 已完成的基础工作

- 已复制 Split Screen Player landing 的完整 Astro 模板，但没有复制原仓库 Git 历史。
- 已更新包名、仓库地址、正式域名、CNAME、sitemap 地址和基础 PWA manifest。
- 已更新 App ID、App Store 链接、当前版本、评分、系统要求及 App 图标等基础资料。
- 已生成指向 ClipDock App Store 的二维码：`public/assets/app-store-qr.png`。
- 已把 App Store 多语言元数据完整复制到本地的 `references/app-store-metadata/`。
- 已在本地保存公开的 App Store lookup 快照：`references/app-store-lookup.json`。
- 已将当前美区 App Store 的 6 张 iPhone 和 6 张 iPad 原始截图下载到本地 `references/app-store-screenshots/`。
- `references/` 已加入 `.gitignore`：这些约 20 MB 的参考资料会留在当前电脑中供下一段 Codex 对话使用，不会上传到公开 GitHub 仓库。
- 部署工作流暂时只允许手动触发，防止尚未重写的模板内容提前上线。
- 已执行 `npm install` 和 `npm run build`，当前模板可成功生成 31 个页面及 sitemap。
- `npm install` 报告 18 个继承自原模板依赖的安全问题（3 low、3 moderate、12 high）。下一阶段应先梳理并升级实际使用的依赖，再逐项复查；不要直接使用 `npm audit fix --force` 做破坏性升级。

## 3. 当前 App Store 基线

以下数据记录于 2026-09-03，正式开发时需要再次核对动态数据：

- 名称：ClipDock: Web Video Downloader
- 副标题：Save from URLs & Shared Links
- 版本：1.0.10（2026-08-24）
- 评分：4.7 / 5，14 个评分
- 分类：Utilities；次分类 Photo & Video
- 价格：免费下载，包含 App 内购买
- 最低系统：iOS / iPadOS 15.0
- 设备：iPhone、iPad；另兼容 Apple Silicon Mac 和 Apple Vision
- 隐私标签：Data Not Collected
- 开发者：Weiping Huang
- 版权：2026 Smith Night
- 当前支持语言：英语、阿拉伯语、法语、德语、日语、韩语、葡萄牙语、简体中文、西班牙语、繁体中文

核心能力来自 App Store 元数据：

1. 从支持的平台分享链接中提取视频资源。
2. 后台下载、保存、预览、搜索、排序和分享视频，或保存到系统相册。
3. 视频工具包含裁剪、转码、拼接、尺寸调整、旋转、镜像、变速、音频提取、音视频合并、倒放、水印、GIF、Live Photo、批量截图和 MD5 修改。

## 4. 重要：模板中仍待替换的内容

当前项目是“可编译的模板副本”，并不是完成版 ClipDock 网站。下一段 Codex 对话必须先完成以下内容，再开启自动部署：

- `src/i18n/marketing.ts` 仍然是 Split Screen Player 的首页故事、功能章节、使用场景、比较表和详情页文案，需要全部改写为 ClipDock。
- `src/i18n/content.ts` 中的 feature、FAQ、review、legal 和截图 alt 文案仍有大量 Split Screen Player 内容，需要全部替换。
- `public/assets/screenshots/` 仍是旧产品网站素材。应从 `references/app-store-screenshots/` 选图、裁切和优化后替换。
- `public/assets/videos/` 仍是旧产品演示视频。应替换为 ClipDock 录屏；没有合适视频时，应先移除视频区而不是继续使用旧视频。
- `public/og.png` 仍是旧品牌社交分享图，最终视觉确定后重新生成。
- `src/config/features.ts`、`faqs.ts`、`reviews.ts`、`screenshots.ts` 等兼容层需要与新内容保持一致。
- 隐私政策和用户协议当前仍继承旧站内容。需要以 ClipDock 的真实行为和 App Store 元数据为依据重写，不能只替换产品名。
- 旧素材清理完成后，搜索 `Split Screen`、`splitscreenplayer`、`36 videos`、`144 layouts`，结果应为零。

## 5. 建议的内容架构

继续沿用当前模板的页面节奏，但把产品故事改成 ClipDock 的真实流程：

1. Hero：复制或分享链接，ClipDock 自动识别并保存。
2. 提取：支持的平台链接解析、清晰度选择、失败重试和质量回退。
3. 下载：后台任务、断点续传、批量管理和保存到相册。
4. 整理：预览、搜索、排序、分享与文件管理。
5. 处理：裁剪、转码、拼接、变速、音频、GIF、Live Photo、水印等工具。
6. 信任：不收集数据、明确合法使用边界、设备与格式限制。
7. FAQ：支持哪些链接、保存位置、后台下载、失败处理、订阅与隐私。

避免承诺“支持所有网站”或暗示可绕过 DRM、付费内容、访问控制及平台限制。所有下载能力应表述为“supported links / 支持的链接”，并保留合法使用提示。

## 6. 多语言策略

模板目前提供：

- `/`：英文
- `/zh-Hans/`：简体中文
- `/zh-Hant/`：繁体中文

首版建议先完整做好这三种语言。App Store 其余语言元数据已经保存在 `references/app-store-metadata/`，后续如扩展网站语言，应同时补齐对应路由、canonical、hreflang、SEO、法律页和自动语言识别规则。

## 7. GitHub Pages 与域名配置

基础配置已于 2026-09-03 完成：

- 已创建公开仓库并推送 `main`：https://github.com/Nightonke/ClipDock-Landing
- GitHub Pages Source 已设为 GitHub Actions。
- GitHub Pages Custom domain 已设为 `clipdock.video`。
- 腾讯云 DNS 已添加并验证公开可查：
  - `@` → `185.199.108.153`（A）
  - `@` → `185.199.109.153`（A）
  - `www` → `Nightonke.github.io`（CNAME）
- GitHub 官方还列出 `185.199.110.153` 和 `185.199.111.153`。当前 DNSPod 免费版对相同主机、相同线路的 A 记录负载均衡上限为 2 条，因此这两条无法继续添加；不要为此擅自购买套餐。若以后升级 DNS 套餐，可再补齐。
- GitHub 当前仍显示 `DNS Check in Progress`；DNS 与 HTTPS 证书状态需要等待平台刷新。待证书可用后再确认 Enforce HTTPS 已开启。
- 当前 workflow 只支持手动触发且没有执行，因此旧模板内容没有被发布。

GitHub 官方说明：https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site

## 8. 开发和验证

```bash
npm install
npm run dev
npm run build
npm run preview
```

正式上线前至少检查：

- 三种语言首页、功能详情、使用场景、隐私政策、用户协议和 404 页面。
- 所有 App Store 按钮与二维码均指向 App ID `6769265797`。
- canonical、hreflang、Open Graph、Twitter Card、JSON-LD、robots 和 sitemap。
- iPhone 小屏上的导航、下载按钮和首屏内容。
- 图片尺寸、视频体积、首屏加载速度和无障碍 alt 文案。
- `npm run build`、内部链接、JSON-LD、唯一 title/description/H1。

## 9. 上线开关

内容完成并验证通过后，在 `.github/workflows/deploy.yml` 中恢复：

```yaml
on:
  push:
    branches: [main]
  workflow_dispatch:
```

然后提交并推送，等待 GitHub Actions 成功。不要在仍含旧产品文案和素材时手动触发部署。
