# ClipDock Google 收录诊断与修复计划

检查日期：2026-11-05（Asia/Shanghai）。代码基线：`23488b2`。范围：Chrome 中 `sc-domain:clipdock.video` 的 Search Console、线上 sitemap 全部 411 个页面、当前 Astro 项目及本地构建。

## 结论与置信度

**已确认：问题主要处于 Google 的抓取安排和索引选择阶段。当前没有发现覆盖全站的 robots、noindex、canonical、重定向或内链故障。** 这不是 411 个页面全部未收录；页面索引报告的 10 月 23 日快照显示已收录 244、未收录 164。

**优先改进方向：教程之间的独特价值、实测证据，以及重点页面的内容组织。** 部分同语言页面高度相似、复用另一平台的截图，这是代码和页面中可验证的内容风险。它是本次证据支持的优先优化假设，不能冒充 Google 对 121 个 URL 的具体算法解释。没有证据证明存在重复内容处罚，也不能仅凭九语言版本就认定质量问题。

技术可索引不保证实际收录；“已抓取但未收录”本身也不提供具体质量原因。参见 [Google 页面索引报告说明](https://support.google.com/webmasters/answer/7440203?hl=en)。

## Search Console 证据

| 报告 | 观察结果 | 时间口径 |
| --- | --- | --- |
| 页面索引 | 已收录 244；未收录 164 | 最后更新 2026-10-23 |
| 已抓取但未收录 | 121；验证失败，10/12 开始、10/13 失败 | 同上 |
| 已发现但未收录 | 40 | 同上 |
| 未找到（404） | 2 | 同上 |
| 网页会自动重定向 | 1 | 同上 |
| 被 noindex 排除 | 0 | 同上 |
| Sitemap | Success，发现 411；提交 9/10，最近读取 10/30 | sitemap-index.xml |
| 搜索表现 | 54 点击、159 展示；首页 53 点击、153 展示 | 10/6–11/2 |
| 抓取统计 | 1,220 次请求、16.2 MB、平均响应 73 ms | 最近 90 天，最后更新 11/3 |
| 主机状态 | clipdock.video 1,199 次、assets.clipdock.video 12 次、www.clipdock.video 9 次，全部 No problems | 同上 |
| 抓取分布 | 200：88%；404：7%；301：4%；304 和其他跳转各不足 1%；发现 28%、刷新 72% | 同上 |
| robots.txt 报告入口 | All files are valid | 检查当天 |
| 人工处置 / 安全问题 | 两项均 No issues detected | 检查当天 |

164 中 161 个（98.2%）属于“已抓取/已发现但未收录”。网页报告总量 408 与 sitemap 411 的更新时间和统计范围不同，不应直接相减得出当前漏收录数量。抓取统计包含资源及重复请求，也不能当成页面数。

### URL 检查抽样

以下均为当天实际打开 URL 检查的结果；抓取时间保留 UI 原值。已抓取的样本均显示 Googlebot smartphone、允许抓取、抓取成功、允许索引，声明的 canonical 和 Google-selected canonical 均对应检查 URL。

| URL（相对 clipdock.video） | 当前检查结果 | URL 检查中的上次抓取 | 实时测试 |
| --- | --- | --- | --- |
| `/` | 已收录 | 10/22 02:48:07 | 未执行 |
| `/zh-Hans/` | 已抓取但未收录 | 11/3 07:49:19 | 未执行 |
| `/articles/resize-video-iphone/` | 已抓取但未收录 | 10/22 08:46:32 | 11/5 11:15：URL is available to Google；Page can be indexed |
| `/ja/articles/batch-download-youtube-channel-iphone/` | 已抓取但未收录 | 9/11 05:08:25 | 未执行 |
| `/articles/batch-download-bilibili-collection-iphone/` | URL is unknown to Google；无抓取时间 | N/A | 11/5 11:17：URL is available to Google；Page can be indexed |
| `/articles/download-tiktok-video-iphone/` | 已抓取但未收录 | 9/9 20:48:03 | 未执行 |

注意报表差异：

- Bilibili collection 在 10/23 的“已发现但未收录”列表内，但当天单 URL 检查显示未知；保留两者，不能据此断言 sitemap 无效。
- 中文首页在分类列表里的抓取日期为 10/12，单 URL 检查为 11/3；日文频道教程列表为 10/23，单 URL 检查为 9/11。不同报告的日期不一致，不据此推断代码回滚或实际抓取顺序。
- TikTok 教程在 10/6–11/2 有 8 次展示，当前检查却是未收录。历史表现不等于当前索引状态。
- **已收录首页也显示 No referring sitemaps detected**。这一字段不能单独证明 sitemap 故障。
- 实时测试只确认当前可访问、可索引，不能保证进入索引，也不能完整验证 Google 的最终规范网址选择。参见 [URL Inspection 说明](https://support.google.com/webmasters/answer/9012289?hl=en)。

分类列表还抽查到英文 reverse、extract-audio、trim、subtitles，中文 segment-grid、video-to-live-photo，及德/西/法/韩等语言的教程；问题不局限于一个语言目录。未逐一检查全部 164 个 URL。

## 线上与代码检查

全量检查为普通匿名 HTTP GET，解析服务端返回的 HTML，不执行 JavaScript。每页证据保存在 [411 页检查记录](seo-audit/2026-11-05-live.json)。该文件记录技术可索引性，不表示 Google 实际收录。

| 检查项 | 结果 | 对应代码 |
| --- | --- | --- |
| HTTP | 411/411 返回 200，最终 URL 不变 | Astro static output、GitHub Pages |
| robots.txt | `User-agent: *`、`Allow: /`；正确引用 sitemap-index.xml | `public/robots.txt` |
| noindex | 411 页均无 noindex；未观察到 X-Robots-Tag 响应头 | `src/layouts/Layout.astro`、`TutorialLayout.astro` |
| canonical | 411 页均为唯一、自指、HTTPS 正式域名 | 同上 |
| hreflang | 全部目标在 sitemap 内且回链对应；每页有自身语言 | `src/i18n/locales.ts`、`src/content/localized-tutorials.ts` |
| HTML 内容 | 正文和链接直接在 HTML 中；411 页均有一个 H1 | `src/layouts/TutorialArticle.astro` 等 |
| 内链 | 411 页全部从首页可达；深度 0/1/2/3 分别为 1/38/257/115；无站内页面链接落在 sitemap 集合之外 | 首页、教程目录、相关推荐、语言菜单 |
| 页面构成 | 9 语言 ×（41 教程 + 首页 + 目录 + 两法律页）+ 6 Android 法律页 = 411 | `publishedLocales`、`tutorial-structure.ts` |
| Sitemap | 411 个唯一 URL；有 lastmod；排除 404 和未准备好的教程 | `astro.config.mjs`、`scripts/sitemap-lastmod.mjs` |

点击深度按普通 `<a href>` 计算，包含跨语言链接；不是 Google 的实际抓取路径。批量教程仍可通过本语言目录在两步内到达，因此不能把它们称为孤立页。

本地验证通过：

```sh
npm run build
python3 scripts/verify-site.py
python3 scripts/verify-locales.py
```

构建 412 页（含 404）；sitemap 411；29,055 个本地引用检查通过；九语言各 41 篇教程；两项验证均为 `errors: []`。这不是部署验证，本次未执行部署。

### 重定向和 404 的实际范围

页面索引报告的两个 404 是 `http://clipdock.video/`、`http://www.clipdock.video/`，上次抓取均为 9/8。重定向样本是 `https://www.clipdock.video/`，上次抓取 9/30。它们都不在当前 sitemap 内。

- `http://clipdock.video/`：当前 301 → `https://clipdock.video/` → 200。
- `https://www.clipdock.video/`：当前 308 → 正式首页 → 200；教程路径也保留路径正确跳转。
- 不带尾斜杠的 resize URL：301 → 带斜杠 URL → 200。
- `/articles/resize-video-iphone/index.html`：返回 200，canonical 指向带斜杠版本；无站内链接或 sitemap 指向该别名。低优先级可进一步统一服务器跳转。
- 带 UTM 参数的 resize URL：200，静态页面的 canonical 仍指向无参数版本。
- 随机不存在的路径：真实 404，不是所有路径都返回首页的 soft 404。
- `http://www.clipdock.video/`：两次收到 308，Location 为 `https://www.clipdock.video/`，但本机 HTTP 连接未正常结束，curl 超时。深层路径也有同样现象。响应经过本机代理且带 `Proxy-Connection`，尚不能归因于源站；HTTPS 跳转正常，GSC 主机状态正常。需要从独立网络复测这一 HTTP 链路。

抓取统计中的 85 次 404 请求与上面的“2 个未收录网页”口径不同。最新 10 个请求样本为 favicon.ico 1 次、app-ads.txt 9 次，不能把这 7% 直接当成正文大量失效。app-ads.txt 应按实际广告业务及真实发布商资料决定是否提供；不要为了清除 SEO 报错编造发布商 ID。

## 内容侧可确认的问题

1. **同语言的平台批量教程存在高度近似。** 英文 `batch-download-tiktok-profile-iphone` 与 `batch-download-douyin-profile-iphone` 使用相同五张截图，许多段落逐字相同。对两页 `<article>` 的可见文本（含共用 CTA、截图标题等）取连续 5 词集合，Jaccard 相似度约 0.909。这只是定位重复段落的本地指标，不是 Google 的重复内容阈值或判定。
2. **平台截图证据不足。** `src/i18n/en-US/tutorials/batch.ts` 中 Douyin 的 `exampleNote` 明确说明复用 TikTok 图片，账号、URL 和数量不代表抖音实测。单视频 TikTok/Douyin 也复用四张截图。两个剪贴板教程同样共享素材，但步骤目的有区别，不能只因素材相同就合并。
3. **教程主体多为产品操作说明。** 比例、反转、批量下载等页面已具备截图、步骤、FAQ，不能笼统称为“空页面”。但很多通用搜索意图需要先回答方法选择、具体输入输出、失败边界，再进入按钮操作。现有文件保留了实测记录和局限，却通过 `src/content/localized-tutorials.ts:41` 从页面 props 中去掉内部备注；应提炼有用户价值的验证结果，不能直接把全部内部备注公开。
4. **已有内容改进不能一概忽略。** 10/16 的提交已给 trim/mirror/merge 等教程增加方法说明或例子。后续要看改进后的重新抓取和表现；没有固定字数门槛，也不建议靠加长模板或关键词堆砌解决问题。

完整翻译的语言版本不是天然重复页，应保留独立 canonical 和互相对应的 hreflang。Google 对此有明确说明：[Localized versions](https://developers.google.com/search/docs/specialty/international/localized-versions)。

## 按影响排序的处理方案

### P1：先重做少量关键页面的内容证据与搜索意图

建议第一批处理下列八页；保留现有 URL，以便比较修改前后的抓取和索引情况。

| URL | 具体处理 | 验收 |
| --- | --- | --- |
| `/zh-Hans/` | 检查中文定位是否直接回答目标用户需求；清晰展示真实下载/处理结果、平台和付费限制，突出中文核心教程入口 | 更新后可抓取、自指 canonical；跟踪新的抓取日期及中文非品牌展示 |
| `/zh-Hans/articles/` | 以“单视频、批量、格式/剪辑”等用户任务帮助选择；重点说明教程区别及适用输入，保留现有 HTML 链接 | 核心教程有明确入口，避免仅增加重复卡片 |
| `/articles/resize-video-iphone/` | 开头直接解释比例与分辨率区别；增加真实横屏转竖屏、Fit/Fill 前后结果；明确裁切与背景的取舍 | 可复现实例、实际输出、边缘裁切对比，功能细节经过核验 |
| `/articles/reverse-video-iphone/` | 增加短片前后结果；实测三种音轨选项并说明适用场景；区分反转、旋转和镜像 | 对未实测的选项不写成已验证结果 |
| `/articles/batch-download-tiktok-profile-iphone/` | 提炼共通队列流程，增加 TikTok 特有的链接、分页、素材类型、失败条件与完成结果 | 页面独有内容足以回答 TikTok 问题，截图覆盖结果而非只有排队 |
| `/articles/batch-download-douyin-profile-iphone/` | 使用真实抖音流程、链接、限制和截图；核实实际成功/失败情况 | 不再以 TikTok 截图冒充抖音流程；无法提供独立价值时再考虑合并 |
| `/articles/batch-download-bilibili-collection-iphone/` | 说明合集与单视频/UP 主页的区别；用真实合集展示加载范围与保存结果 | 实时测试继续通过，随后观察是否出现首次正常抓取 |
| `/ja/articles/batch-download-youtube-channel-iphone/` | 评审日文表达与搜索意图；明确频道、播放列表、Shorts 的边界及可加载范围 | 本语言可读且可复现，不把示例数量当成整频道保证 |

共同验收：先回答用户问题，再给步骤；每页至少有针对本任务的可信证据、限制和错误处理，不设机械字数目标。实测日期、App/iOS 版本只有确实核验后才填写。处理代码主要在 `src/i18n/<locale>/tutorials/`、`src/content/tutorial-structure.ts` 和教程素材目录。参考 [Google 有用内容建议](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)。

### P2：增强重点内容之间的语义链接，并控制扩写范围

当前并无孤立页，重点是让链接更有用：在用户需要区分功能的正文中链接相应教程，例如 resize → transcode（比例与分辨率），reverse → trim/rotate，频道 → playlist/Shorts。保留现有首页下载入口和工具入口，不必再添加大量全站链接。

先验证上述小批次的效果，再把已验证的独特内容翻译到其余语言；暂停机械增加相似平台/关键词页面。必要的合并应逐页决策：仅对意图重合、确实存在等价替代页的 URL 建立永久跳转，并同步移除旧 sitemap、内链和 hreflang。不能把九种语言全部 canonical 到英文，也不能把所有未收录页一律 noindex。

### P3：修复独立的低影响技术细节

- 从不同网络确认 `http://www` 的响应结束与跳转链；如能复现，统一到一个正确的永久跳转链。该链路涉及托管/域名配置，Astro 的 meta 标签无法修复网络跳转。
- 提供稳定的 favicon，减少 favicon.ico 的重复 404；它不是 121 个正文未收录的主因。
- 若确有广告变现需求，补真实 app-ads.txt；否则保留合理 404，不用将其列为网页收录 KPI。
- 若后续支持草稿/撤回：目前 `hasTutorial()` 只看 slug 存在，目录和相关推荐也没有统一过滤 `screenshotsReady`，而 sitemap/noindex 已在过滤。应统一“可发布教程”的判定，防止未来给 noindex 草稿发送 hreflang/入口。**当前 41 篇均 ready，故它不是本次故障。**
- 可加强 `verify-site.py`，在 CI 中持续断言 sitemap 精确集合、自指 canonical、无 noindex、hreflang 回链和可达性。当前线上全量检查已经通过，这属于回归防护。

## 发布后的验证与评估

1. 改完第一批内容，运行现有构建与两项校验，并复查生产页面和素材；`lastmod` 应反映真实内容更新，不要每天强制刷新日期。
2. 对少量关键更新 URL 做实时测试，确认成功后各请求一次索引。未修改的 121 页无需反复提交；不要用批量“验证修复”代替内容修复。
3. sitemap 已被读取成功，保留现有提交。无需以删除重建 sitemap 作为第一措施。
4. 建立固定 URL 样本，记录修改日期、最近抓取日期、索引状态、Google canonical、非品牌展示和点击。每周检查；第 2 周看重抓，第 4 周评估方向。该时间表是工作节奏，不是 Google 收录承诺。
5. 对已收录但长期无曝光的内容，同时评估搜索需求和页面竞争力；将 54 点击中的 53 个首页点击与教程表现分开。成功标准是重点内容被使用、有相关非品牌展示，而不是把所有法律页也强行收录到 411/411。

## 诊断阶段交付边界

已完成后台报告核查、六个 URL 的索引检查、两个实时测试、411 页线上审计、项目代码检查和构建验证。本次只新增诊断报告和逐页审计记录，没有修改页面内容、索引配置、线上部署，也没有提交索引或点击验证修复。原因是未找到应立即更改的全站索引配置错误；内容修复需要真实的平台实测资料，不能用编造案例填补。

后续用户授权实施 P1–P3，代码与内容修复、直连重定向复测和验收结果见 [修复记录](seo-remediation-2026-11-05.md)。上述诊断数据保留为修改前的基线。
