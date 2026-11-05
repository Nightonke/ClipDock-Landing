# ClipDock 收录修复记录 — 2026-11-05

本记录对应 [收录诊断](seo-indexing-audit-2026-11-05.md) 的 P1–P3，记录代码与文案修复及部署前验收，保留现有 URL。用户已授权部署；实际发布状态以对应提交的 GitHub Actions 结果为准，Google 抓取与收录状态需在发布后另行跟踪。

## P1：首批 8 个页面

| 页面 | 已完成的改动 |
| --- | --- |
| `/zh-Hans/` | 首屏直接说明下载、字幕和本地视频处理；新增按输入类型选择教程的四组任务入口，写清来源与免费版限制。 |
| `/zh-Hans/articles/` | 增加同一任务导航，区分单链接、作者主页/合集、字幕与已有素材。 |
| `/articles/resize-video-iphone/` | 解释比例与分辨率、Fit 与 Fill 的区别，引用已有 6 秒横屏素材 → 1:1 / Fit / 黑底的真实结果；链接转码与旋转教程。 |
| `/articles/reverse-video-iphone/` | 说明反转、旋转和镜像的区别；引用已有海面与人物画面顺序变化及静音示例；链接裁剪和旋转教程。 |
| `/articles/batch-download-tiktok-profile-iphone/` | 区分单作品与主页输入，解释示例中的 33 条作品 / 42 个媒体、加载范围和队列完成状态。 |
| `/articles/batch-download-douyin-profile-iphone/` | 重写步骤、限制、问题处理与 FAQ；区分抖音作者主页、单作品和 TikTok 输入；显式说明共用截图来源。 |
| `/articles/batch-download-bilibili-collection-iphone/` | 区分合集、单视频和 UP 主主页；说明 62 条示例的加载/选择状态，避免将其写成整合集下载完成证明。 |
| `/ja/articles/batch-download-youtube-channel-iphone/` | 区分频道、播放列表与 Shorts，解释来源显示 257 与实际加载 30 的区别，说明队列与历史完成数量。 |

另外，9 种语言的抖音单视频和主页教程均新增读者可见的截图说明：图片用 TikTok 示例展示共用操作，其中账号与数量不代表抖音结果。说明出现在引言和图注，内部制作备注仍不公开。

### 尚未补齐的实测证据

现有仓库提供的资料足以支持上述示例，但没有独立抖音截图、Resize 的横屏转竖屏 Fit/Fill 对比成品，或 Reverse 另外两种音轨的验证结果。本轮没有新增这些 App 实测，也没有将它们写成已验证案例。原 P1 中这一部分仍待补齐，不能将本轮描述为所有内容证据已完成。

后续使用有权处理的素材，在 App 中记录实际版本、输入、设置、导出结果和失败情况，再替换共用示意图并更新对应语言。已有证据见 `video-tool-tutorial-verification.md` 和 `youtube-channel-batch-tutorial-verification.md`。

## P2：任务相关的内链

- 新增链接使用静态 HTML `<a href>`；中文首页及目录可直接进入核心任务。
- 正文方法说明在区分功能时链接对应教程，如 Resize → Transcode、Reverse → Trim/Rotate、日文频道 → Playlist/Shorts。
- 未增加批量关键词页面，也未合并不同搜索意图的页面。当前 411 个可索引页面都能从首页通过普通链接到达，最大深度仍为 3。

## P3：技术修复与回归保护

- 新增 `isPublishedTutorial()`，统一目录、首页入口、下载导航、相关推荐、hreflang、sitemap 与 noindex 的发布判断。未准备好的教程保留直接访问的 noindex 页面，但不再获得公开入口或语言互链。当前 41 篇教程均已发布，因此此项修复不改变当前索引范围。
- 加强构建检查：sitemap 精确 URL 集合及重复项、自指 canonical、robots 允许抓取、noindex 排除、hreflang 双向关系、普通链接可达性、公开入口不指向草稿。新增错误配置测试并接入 CI。
- `lastmod` 内容快照包含读者可见的截图说明与任务导航，保留真实内容变更日期的机制。
- 从现有 App 图标生成 `/favicon.ico`，包含 32、48、256 像素图像，随构建更新。
- 用户确认没有广告：`/app-ads.txt` 保持不存在，合理返回 404。
- 使用 `curl --noproxy '*'` 完成 `http://www.clipdock.video/articles/resize-video-iphone/?source=check` 的 GET 复测：308 → 308 → 200，最终为 `https://clipdock.video/articles/resize-video-iphone/?source=check`，路径和参数保留，未复现响应超时。代理及直连 HEAD 也通过。本次未修改域名/托管配置；这不等于从另一独立网络完成验证。

## 验证结果

- `npm run check:i18n`：17 项通过。
- `node --test tests/sitemapLastmod.test.mjs`：12 项通过。
- `python3 -m unittest discover -s tests -p 'test_seo_verification.py'`：7 项通过。
- 视频恢复与素材下载恢复：10 项通过。
- `npm run build`、`npm run build:production`：通过。
- 正式构建校验：412 个 HTML（含 404）、411 个可索引页面、411 个 sitemap URL、411 个有效 lastmod、29,081 个本地引用检查，站点与多语言检查均零错误。
- Chrome：中文任务卡片在桌面为双列、393 × 852 窄屏为单列；首页任务链接可打开抖音教程，截图说明可见；英文尺寸教程中的转码链接可打开正确目标页。临时移动设备模式与预览服务已关闭。

## 上线后的收录跟踪

部署后复查这 8 个 URL 的 HTML 与素材，再对少量重点页做 GSC 实时测试及一次索引请求。保留现有成功的 sitemap 提交。按周记录新的抓取日期、索引状态、Google canonical 和非品牌展示；不能用本地校验通过代替 Google 已收录的结论。

SplitScreenPlayer 侧的交接内容见 [跨站链接文案](splitscreenplayer-crosslink-brief.md)。
