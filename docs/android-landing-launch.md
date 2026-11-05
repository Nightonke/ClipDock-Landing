# Android landing 第一轮上线

## 范围

- 九种语言首页更新标题、描述、平台定位与系统要求，提供 App Store / Google Play 下载入口。
- 新增九种语言的 `/download/` 选择页。二维码指向稳定的 `https://clipdock.video/download/`，页面无需 JavaScript 即可选择任一商店；不自动重定向访客。
- 新增 `/android/` 与 `/zh-Hans/android/`，独立介绍链接下载、网页检测、悬浮粘贴、资源管理、本地处理、免费额度与购买、隐私和账号删除。
- 现有 iPhone 教程保持 URL 与 iOS 主下载按钮，首页已有演示与详细教程入口明确标注 iPhone/iPad。Android 公开介绍未确认的批量、YouTube 字幕等功能不作为双平台承诺。
- 页脚提供两个商店、Android 产品页，以及分平台的隐私、条款和账号删除入口。目标内容只有英文时明确标注语言并设置对应 hreflang。
- 分开描述 iOS 与 Android 的 MobileApplication 数据；Android 不继承 iOS 的评分或版本号。首页评分标明 App Store 来源。
- SplitScreenPlayer 交接文案更新为双平台版本，并区分介绍页、下载页与 iPhone 教程链接。

## 事实来源

- Google Play 英文公开详情（2026-11-05 核查）：`https://play.google.com/store/apps/details?id=com.nightonke.android.clipdock&hl=en&gl=US`。
- Android 项目 `app/build.gradle` 的 `minSdk = 26`，对应 Android 8.0；页面未将本地 `versionName` 当作已核实的商店版本。
- 已发布 Android 隐私政策和条款：`src/i18n/android-legal.ts`。数据处理与免费额度说明按 Android 单独展示。

## 发布与验证

`scripts/verify-platforms.py` 验证双平台主下载入口、正确商店地址、独立应用身份、Android 评分隔离、政策入口以及 iPhone 教程主按钮。它纳入正式构建。新增页面也受现有 canonical、hreflang、sitemap、内链和语言校验约束。

`sitemap-lastmod.mjs` 为 Android 产品页和下载选择页分别记录实际内容变更，并计入公共导航、下载按钮与二维码的相关变化。二维码由 `scripts/generate-download-qr.mjs` 和 `src/config/store-links.json` 生成。

本轮没有增加素材 CDN 版本：新二维码是与网页一起部署的 `/download-qr.svg`。Android 操作演示与新的 Android 截图教程属于后续批次。

## 本地验收结果（2026-11-05）

- 47 项测试通过：17 项语言完整性、13 项 sitemap lastmod、4 项视频恢复、6 项素材下载恢复、7 项 SEO 校验回归。
- `npx tsc --noEmit` 通过；类型检查前安装了 `infrastructure/media-cdn` 已声明的依赖，没有修改该子项目。
- `npm run build:production` 通过：423 个 HTML、422 个可索引 URL、32,599 个本地引用检查，最大点击深度为 3；canonical、hreflang、sitemap 和九种语言检查无错误。
- 浏览器检查通过：桌面首页、393px 手机首页、中英文 Android 产品页、中文和法语下载选择页；Google Play 按钮实际打开正确包名的商店页，隐私页和账号删除说明可访问。
- 修复中文首页窄屏标题截断。二维码经实际图像解码，结果为 `https://clipdock.video/download/`。
