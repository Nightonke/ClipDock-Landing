# 多语言维护

当前已启用 `en-US` 与 `zh-Hans`。英语使用无前缀 URL，中文保留 `/zh-Hans/`。主页不按设备语言自动跳转，用户通过导航选择语言。繁体仍未启用。

## 本次英文范围

- 首页 `/`：与中文共用 `ClipDockLanding.astro`，包含功能、工具介绍、FAQ、字幕轮播和四段演示字幕。
- 教程目录 `/articles/`。
- 字幕教程 `/articles/extract-youtube-subtitles-iphone/`：复用现有五张英文界面截图。
- 35 篇英文教程与中文逐篇对应：8 篇单平台下载、2 篇复制即下载、6 篇批量下载、1 篇字幕提取、18 篇视频工具。首页工具卡片、相关推荐和语言切换均已接通。
- 首页社交分享图使用现有 ClipDock 图标，避免引用历史 `/og.png` 旧品牌图片。
- 法律链接继续沿用现有外链；不将旧模板法律文案发布为英文法律页。

## 文件职责

- `src/i18n/locales.ts`：已发布语言、路径和语言元数据。
- `src/i18n/home/{zh-Hans,en-US}.ts`：首页文案；`types.ts` 约束共用结构。
- `src/i18n/site-ui.ts`：导航、教程公共标签、演示与轮播控件、播放失败提示。
- `src/config/demoCaptions.ts`：同一录屏的中英文字幕，共用时间轴。
- `src/content/en-US/`：按平台、复制即下载、批量下载和视频工具分文件维护。`tutorials.ts` 汇总英文文章与图片标题，`translation.ts` 复用中文文章的 slug、截图 ID、顺序和实测状态，并检查步骤、细节、FAQ 和排错条目完整性。
- `src/content/localized-tutorials.ts`：语言对应文章、分类和可用性。语言菜单、hreflang 和相关推荐均按实际文章筛选。
- `src/layouts/Tutorial{Article,Index,Layout}.astro`：共用教程正文、目录和外壳。

旧 `LandingPage.astro` 与 `i18n/marketing.ts` 保留为未发布的历史模板。新的首页及教程不依赖其营销文案。`i18n/content.ts` 仍提供应用基本信息和 SEO，里面的旧截图、评论及功能数组不用于新的共用首页。

## 添加下一篇英文教程

1. 在对应英文分类文件中加入同 slug 的完整译文，包括步骤、FAQ、排错说明和已有验证限制；不要因为翻译而把未实测内容标记为已验证。
2. 在 `englishScreenshotTitles` 中补齐所有使用的截图 ID；构建遇到缺失标题会失败。核对截图中的按钮名称，必要时引入对应语言的新素材。
3. 如果属于新分类，在 `englishCategories` 中补充分类名称和说明。
4. 英文发布要求与中文教程完整对应，缺少译文会使构建失败。构建后，对应路由、首页工具链接、相关推荐及语言切换自动生效。

推荐术语：Extract（提取）、Batch（批量）、Manager（管理）、Save to Photos（保存到相册）、Save to Files（保存到文件）、captions（字幕）、caption track（字幕轨道）。App 按钮名称以实际截图为准。

## 验证

```sh
npm run build
python3 scripts/verify-site.py
python3 scripts/verify-locales.py
npx tsc --noEmit
npm run preview
```

多语言检查验证页面主语言、英文正文及描述中文残留、中英文文章覆盖与步骤/截图数量、错误的跨语言内容链接、对应页面 hreflang 及其双向关系。正式构建也会执行此检查。

浏览器检查中英文首页、教程列表、对应文章切换、手机菜单、视频字幕随进度更新，以及轮播播放/暂停。全站共用素材保持原样，无新增素材时不需要新建 CDN 素材版本。

## 素材与验证边界

复用现有真实素材，没有新增或改动 CDN 文件。Bilibili、Weibo、小红书等来源页面保留原平台文字，英文正文解释对应操作；抖音单条与主页教程明确标注 TikTok 配图仅作示意。保留各工具的 VIP 范围和实测限制，包括 MD5 未比较哈希、合并音轨未逐段试听、付费参数未实测及部分截图只展示保存入口。
