# 法律页面维护

用户协议和隐私政策由本站静态生成，沿用首页导航、页脚和语言切换。默认语言为英文，简体与繁体使用独立路径。

| 语言 | 隐私政策 | 用户协议 |
| --- | --- | --- |
| 英文 | `/privacy/` | `/terms/` |
| 简体中文 | `/zh-Hans/privacy/` | `/zh-Hans/terms/` |
| 繁体中文 | `/zh-Hant/privacy/` | `/zh-Hant/terms/` |

正文与页面标签保存在 `src/i18n/<locale>/legal.ts`，通过 `src/i18n/legal.ts` 注册，版式位于 `src/layouts/LegalPage.astro`。新增已发布语言时，也需提供并注册对应的法律文案。正文中的互相引用需指向同一语言的站内路径。

## 本次正文更新依据

2026-09-09 按产品维护者要求，将旧剪贴板管理工具描述更新为网页视频提取、下载、资源管理与音视频处理。去除旧固定价格，购买条件以 App 和 Apple 购买确认页面为准。生效日期固定在各语言文案中，不随构建时间自动变化。

- [ClipDock App Store 页面](https://apps.apple.com/us/app/clipdock-web-video-downloader/id6769265797)：当前功能、开发者、支持邮箱、付费方案及“不收集数据”的隐私标签。
- 本仓库首页与剪贴板教程：自动识别链接、后台下载、通知、相册导出及相关权限的现有功能说明。
- [Apple 取消订阅说明](https://support.apple.com/en-us/118428)与 [Apple 退款说明](https://support.apple.com/en-us/118223)：订阅管理、试用取消与退款入口。

App 隐私标签与第三方网络请求、官网托管服务和用户主动发送的支持邮件分别说明。该文案依据公开产品信息与本站实现整理，没有审计 App 源码；若实际数据处理、SDK、托管或支持服务发生变化，需同步维护本文案和 App Store 隐私声明。

## 发布与检查

执行 `npm run build` 后运行 `python3 scripts/verify-site.py` 和 `python3 scripts/verify-locales.py`，检查完整正文、无跳转、语言元数据、双向 hreflang、内部链接及 sitemap。页面语言菜单需保持在同一种法律文档上。

仓库修改不会更改 App Store Connect 中已登记的链接。站内页面正式发布后，可将 App Store 隐私政策 URL 更新为 `https://clipdock.video/privacy/`，简介中的用户协议 URL 更新为 `https://clipdock.video/terms/`；中文简介可使用对应中文路径。App 内若保存了旧链接，也需在 App 项目中另行更新。
