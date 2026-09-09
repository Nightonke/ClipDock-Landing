# 多语言文案维护与评审

新增语言时请先阅读 [新增语言指南](localization-playbook.md)：其中包含语言优先级、App 术语对照、完整注册清单、多个 Codex 对话的协作方式和可复制的任务提示词。

构建中已启用的语言为 `en-US`、`zh-Hans`、`zh-Hant` 和 `ja`。英文使用 `/`，简体中文使用 `/zh-Hans/`，繁体中文使用 `/zh-Hant/`，日语使用 `/ja/`，首页、41 篇教程及站内法律页面共用模板。日语本次尚未部署。不会按设备语言自动跳转。

## 唯一编辑入口

所有可翻译文案按语言归入 `src/i18n/<locale>/`。评审、改写或翻译时编辑对应语言目录，不在页面模板、语言选择器或公共结构中添加句子。中英文教程不再互相导入正文；各语言译文共同引用语言无关的教程结构。

| 文件 | 内容与评审重点 |
| --- | --- |
| `meta.ts` | 语言菜单名称、HTML 与 hreflang 标识 |
| `landing.ts` | 产品名称、首页 SEO 标题和描述、关键词、页脚标签；旧功能、评论、截图说明和法律正文已移除 |
| `home.ts` | 首页功能、18 个工具卡片、FAQ、下载区域文案 |
| `site-ui.ts` | 导航、教程公共按钮、目录标签、视频错误提示、轮播和无障碍标签 |
| `common.ts` | 共用短标签、社交分享图说明 |
| `tutorial-index.ts` | 教程分类名称、分类说明、平台支持说明 |
| `tutorials/platform.ts` | 单平台下载教程 |
| `tutorials/clipboard.ts` | 复制即下载教程 |
| `tutorials/batch.ts` | 批量下载教程 |
| `tutorials/subtitles.ts` | YouTube 字幕教程 |
| `tutorials/tools.ts` | 18 篇视频工具教程 |
| `screenshots.ts` | 每个截图 ID 对应的明确标题与备注；标题不再从步骤标题自动推导 |
| `demo-captions.ts` | 四段录屏的字幕文字，条目顺序对应公共时间轴 |
| `legal.ts` | 站内隐私政策、用户协议、生效日期与法律导航 |
| `errors.ts` | 404 文案；当前静态 404 使用英文正文和中文首页入口 |
| `controls.ts` | 保留的 React 控件标签，通过属性传入；旧控件默认使用英文 |

`zh-Hant/` 已补齐当前完整内容，采用台湾常用表达，操作名按 App 繁中实际值保留。术语差异、验证与部署状态见 [繁中交付记录](localization-reports/zh-Hant.md)。英文 `site-defaults.ts` 保存站点兼容默认值，并非其他语言的译文来源。`ja/` 提供完整日语内容，按钮名称按 App 日语实际值保留，疑点和验证范围见 [日语交付记录](localization-reports/ja.md)。当前隐私政策和服务条款由 `legal.ts` 注册站内正文，新增语言需同步翻译并纳入 sitemap；新增语言指南中的外链法律页描述仅适用于旧基准。

## 简体中文文案约定

- 网站品牌写作 `ClipDock 影随存`，教程正文简称“影随存”；统一使用“你”和 `App`。
- 操作路径以 App 简体中文本地化为准，例如“资源提取”“资源管理”“资源处理”；首次出现的关键按钮可附英文名称，供英文配图对照。
- 工具统一使用“交叉拼接”“分段宫格”“尺寸/画布”“音频处理”“音视频合并”“视频截图”；截图图注同步维护。
- 中文标题保留功能重点，设备信息放在分类标签或描述中。`HeadingText.astro` 保持中文词语和标点完整，配合均衡换行；显式换行仍在语言文件中维护。

## 公共结构

- `src/i18n/types.ts`、`home/types.ts`：文案字段类型。
- `src/i18n/catalog.ts`：已发布语言的 UI、教程、截图和字幕注册表；未知语言不会悄悄回退为中文。
- `src/i18n/{content,common,site-ui}.ts` 与 `home/index.ts`：语言选择和兼容入口，不存放译文。
- `src/content/tutorial-structure.ts`：文章 slug、分类标识、顺序、相关推荐、步骤截图 ID、条目数量、实测状态和素材坐标。修改这些内容属于结构/证据变更，需要同步检查所有语言。
- `src/content/localized-tutorials.ts`：将文案和公共结构组装为教程，并检查覆盖和缺失字段。
- `src/config/demo-timings.ts`：视频字幕时间轴；`demoCaptions.ts` 只负责选择字幕。
- `src/pages/[locale]/articles/`：非默认语言教程路由，新增语言不必复制中文页面。

## 文案评审流程

1. 以相同文件名、相同文章 slug 对照两种语言。反馈注明 `语言 / 文件 / slug / 字段`，例如 `en-US / tutorials/tools.ts / extract-audio-iphone / steps[0].text`。数组索引从 0 开始。
2. 区分翻译准确性、自然表达、产品事实、截图按钮名称与 SEO 表述。直接改语言文件；不要为了让译文通过检查而删除验证条件。
3. 截图标题和正文分开核对。修改步骤标题不会自动改写图片标题。核对 `screenshots.ts` 中对应 ID；共享图片可能用于多篇教程。
4. 教程正文优先说明用户操作；测试设备、样例状态和验证范围集中在每篇的 `exampleNote`（可展开的“示例说明”），不要反复解读进度数字。抖音复用配图等直接影响理解的差异仍须在导语显式提示。保留证据边界：抖音教程使用 TikTok 示意截图；VIP 参数未实测、MD5 未比较哈希、音轨未逐段试听、仅展示保存入口等限制不能在翻译中消失。截图中的来源平台文字仍属于原始素材。
5. 完成文案检查、构建、页面检查，再人工查看长标题、移动端换行、视频字幕和语言切换。

可导出一份便于审稿的 JSON，包含当前语言的主要上线文案，并排除历史营销页和法律正文：

```sh
node scripts/export-copy-review.cjs en-US > /tmp/clipdock-en-US-review.json
node scripts/export-copy-review.cjs zh-Hans > /tmp/clipdock-zh-Hans-review.json
```

导出文件是评审快照，修改仍须回填语言源文件；它不包含图片内嵌文字或外链法律页面。

## 新增语言

1. 新建 `src/i18n/<locale>/`，按照已发布语言的目录提供完整译文，保留字段名、文章 slug 和截图 ID。仅提供当前产品的文案。
2. 在 `locales.ts` 注册语言及元数据。准备好 `landing.ts` 和首页数据，并接入 `content.ts`、`common.ts`、`home/index.ts`、`catalog.ts`、`legal.ts` 和 `config/demoCaptions.ts` 的显式注册表。注册是代码修改，单纯复制目录不会自动上线。
3. 审稿完成后才加入 `publishedLocales`。类型检查会要求补齐已发布语言的注册项；构建会检查教程、图片标题和字幕覆盖。当前 `/404.html` 是全站共用静态错误页，不会自动生成每种语言的 404。
4. 检查页面验证脚本中按语言注册表执行的规则，加入新语言的残留语言检查；执行全量构建与对应语言切换验证。非默认语言教程路由会自动生成。

## 验证命令

```sh
npm run check:i18n
npx tsc --noEmit
npm run build
python3 scripts/verify-site.py
python3 scripts/verify-locales.py
node --test tests/videoRecovery.test.mjs
```

语言检查覆盖缺失文章、空白正文、遗漏 UI 字段、步骤/细节/FAQ/排错数量、图片标题与字幕时间边界，GitHub Actions 会执行。页面检查读取实际语言注册表，覆盖 lang/dir/OG、canonical、源语言残留、全部已发布语言的教程对应关系、跨语言链接、双向 hreflang、站内法律正文与 sitemap。自动检查不能代替语义评审。

正式发布使用 `npm run build:production`，并按 `docs/deployment.md` 执行。文案重组不涉及新增媒体资源，不需要新建 CDN 素材版本。
