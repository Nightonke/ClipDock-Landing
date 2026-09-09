# ClipDock Landing

ClipDock 官网，正式域名 https://clipdock.video。Astro 静态站点。

当前提供英文首页 `/`、英文教程目录 `/articles/` 和完整的 35 篇英文教程；简体中文首页 `/zh-Hans/` 与 35 篇中文教程继续保留。中英文共用首页和教程模板，通过语言菜单切换，不根据设备语言自动跳转。繁体与继承的旧功能/场景模板不生成。

## 本地开发

```sh
npm ci
npm run dev
```

本地素材直接从 `public/assets/` 读取。`npm run build` 自动生成响应式图片并输出 `dist/`。

## 正式发布

```sh
npm run build:production
```

正式构建先计算素材版本，再核对 `deployment.json` 指向的线上素材清单，最后构建并检查页面、图片引用、robots 与 sitemap。素材未同步或存在旧产品文案时构建会失败，避免发布不完整页面。

`main` 分支推送或手动运行 GitHub Actions 会部署到 GitHub Pages。主站静态图片/视频使用 `assets.clipdock.video` 的版本化资源。具体部署步骤和腾讯云接入状态见 [部署说明](docs/deployment.md)。

## 内容维护

- 共用首页：`src/layouts/ClipDockLanding.astro`
- 所有语言文案：`src/i18n/en-US/`、`src/i18n/zh-Hans/`（首页、教程、SEO、界面标签、截图标题和字幕）
- 共用教程结构与素材：`src/content/tutorial-structure.ts`
- 文案完整性检查：`npm run check:i18n`；评审与新增语言流程见 [多语言维护](docs/localization.md)
- 多语言教程索引与可用性：`src/content/localized-tutorials.ts`
- 扩展流程与验证：[多语言维护](docs/localization.md)
- 已发布语言：`src/i18n/locales.ts` 中的 `publishedLocales`
- 图片优化：[docs/image-optimization.md](docs/image-optimization.md)
- App Store 登记的法律链接：`https://daysinyear.github.io/ClipDock/privacy.html` 和 `https://daysinyear.github.io/ClipDock/user.html`

法律入口沿用 App Store 已登记的外链；这些外部页面目前仍含剪贴板工具描述，应由产品维护者另行更新，避免沿用网站模板中的 Split Screen 条款。
