# 日语本地化交付记录

## 来源与约定

- 语言：日语 `ja`，菜单为 `日本語`；HTML/hreflang 为 `ja`，Open Graph 为 `ja_JP`，方向为 `ltr`。
- 路径：`/ja/`、`/ja/articles/`、`/ja/articles/<原 slug>/`、`/ja/privacy/`、`/ja/terms/`。
- 官网基准：`072031a4cdb2feb96f58498afad1796804d1da37`，`main`；开始时工作区干净。
- App 基准：`5fc01b2572c2b405701f560935f797867c932043`；开始时工作区干净。只读对照 `ResourceDownloader/ja.lproj/Localizable.strings` 和 `InfoPlist.strings`，并用相同 key 对照英文。
- 采用日本常用说明文、です／ます体，省略不必要的第二人称。品牌保留 `ClipDock`；系统应用使用「写真」「ファイル」。平台名和原始示例文字、文件名按素材保留。
- 功能说明按当前简中修订核对，保留来源／访问限制、按页加载及免费前2页、后台识别开关与画中画条件、下载与照片保存的区别、已有字幕限制、VIP数值和未实测范围。

## 覆盖与接入

- 完整首页、5个功能区、18个工具、FAQ、导航和无障碍标签。
- 41篇教程：8篇单平台、2篇剪贴板、12篇批量、1篇字幕、18篇工具。保留所有slug、步骤、详情、FAQ、排错条数、示例URL和证据说明。
- 全部178组截图标题及备注独立存放于 `ja/screenshots.ts`；其中158个截图ID被教程实际引用。四段录屏共19条字幕复用原始时间轴和媒体。
- 新增 `ja` 的首页、catalog、共用文案、法律正文及字幕注册；复用已有元数据驱动的OG、动态路由、hreflang和sitemap。
- 排版：日文字体优先使用Hiragino／Yu Gothic／Meiryo，严格禁则、正常断词；调整日语首页与教程标题行高和字号，保留语义换行。没有使用截断、隐藏溢出或全局break-all处理长标题。
- 扩展测试，检查日语元数据、法律文案注册、整句简中残留；页面检查新增日语操作指引残留检测，避免把日语汉字当作中文残留。

## 与指南基准的差异

指南中的外链法律页描述已落后于当前代码：当前隐私政策和条款为站内完整正文，且页面检查要求所有语言提供法律正文并纳入sitemap。因此本次提供完整日语译文，保留现有生效日期、条款含义、支持邮箱和Apple链接，未改动业务条款。

共享 `/404.html` 仍使用英文正文和简中首页入口；日语 `errors.ts` 已准备，但未新增独立日语404路由。共享错误页仍可通过语言导航返回日语首页。App工程、App Store资料和原始媒体未修改。

## App术语疑点与处理

以下为App现有日语的具体疑点，未擅自修改App。网站步骤引用真实名称，正文和文章标题用自然日语解释：

- `提取` → `抜粋`：按钮按原值引用，抽取功能正文用「抽出」。
- `分段宫格` → `セグメント化された宮殿のグリッド`：不自然的直译；入口和工具卡保留，文章标题说明「動画の異なる時間帯を分割画面に並べる」。
- `截取范围` → `迎撃範囲`：词义不适合时间裁剪；首次引用后解释为切り出す時間帯。
- `单张` → `リーフレット`：单帧入口按实际名称引用，正文说明单一フレーム。
- `A 开始` → `始まり`、`右转90` → `右折90`、`左转90` → `左折90`：分别解释A开始、顺时针／逆时针旋转。
- `均衡` → `平衡`、`原画` → `オリジナルの絵`、`码率` → `コードレート`、`自定义码率` → `カスタムコードレート`：保留实际选项，正文采用画质和ビットレート的自然解释。
- `三联%@` → `サンリアン %@`：动态布局名称保留原值，并解释为多个画面。
- `透明度` → `透明性`：保留App名称，明确“滑块数值调低，水印变淡”，未反转效果。
- 水印原简中 `exampleNote` 写作 `Made by 影随存`，与原图及FAQ不一致；实际查看 `watermark-result-orange.webp` 后，日语统一引用图中 `Made by ClipDock`。

## 验证

| 检查 | 结果 |
| --- | --- |
| `npm run check:i18n` | 8项通过，含缺文章、证据说明、图注及字幕边界检测 |
| `npx tsc --noEmit` | 通过 |
| `npm run build` | 181页构建成功 |
| `python3 scripts/verify-site.py` | 181页、180个sitemap URL、10198个本地引用，无错误（页头菜单调整后复查） |
| `python3 scripts/verify-locales.py` | 4种语言各41篇教程、180个本地化页面，无错误 |
| `node --test tests/videoRecovery.test.mjs` | 4项通过 |
| `git diff --check` | 通过 |
| 有效文案导出 | `/tmp/clipdock-ja-review.json`；检查整句残留、空值、按钮对照及示例限制 |

浏览器验收使用本地构建预览 `http://127.0.0.1:4327/ja/` 和 agent-browser（Chromium）：

- 在375px宽度遍历全部41篇教程；在375、390、768、1024、1440px检查首页、教程索引、长工具教程、Instagram批量教程及两篇法律正文。另回归英文、简中、繁中首页及同一工具教程。
- 修复Instagram标签和YouTube Shorts示例长URL的横向溢出，以及首页、索引、隐私页的标题末行孤字；随后复查受影响页面。首页大标题补充语义换行，桌面和手机截图中长App名称、工具卡、教程步骤、FAQ及页脚均可正常阅读。
- 四个演示逐条跳转19个字幕时间点，实际显示均与日语字幕一致；字幕轮播选择第4步、暂停、继续及对应无障碍标签通过。
- 手机展开平台列表、FAQ，无横向溢出；桌面日语→英语→日语、手机日语→繁中→日语均保留教程slug。
- 通过临时无效媒体源触发实际播放错误，显示「動画を再生できません」「再生を再試行」；恢复原媒体并点击重试后正常播放，提示自动消失。此测试没有修改生产媒体或代码。
- 共享404正文仍为英文，通过手机语言菜单可返回 `/ja/`。
- 本机临时验收数据和截图位于 `/tmp/clipdock-ja-browser/`，包括 `geometry.json`、`recheck.json`、`interactions.json`、首页、后台下载、长工具卡、教程步骤及错误重试截图；不作为网站媒体入库。

后续按移动端体验反馈调整了所有语言共用的页头：手机保留应用名，语言切换使用独立地球按钮，导航菜单仅含功能／工具／FAQ／教程／下载5项；手机顶部的重复下载按钮收进导航菜单。两个菜单互斥展开，支持点外部或Escape收起，点击导航链接后也会收起。下载入口在较宽屏幕仍直接显示。对应本机截图保存在 `/tmp/clipdock-header-check/`。

页头图标与按钮共用44px高度和12px圆角，统一按钮字号、边框和左右留白。浏览器检查确认四种语言在320px下没有重叠，并检查375、768、1024、1440px下的尺寸与垂直对齐；截图及测量记录位于 `/tmp/clipdock-header-sizing/`。

## 交付状态与限制

- 已在本地构建启用日语；本次随官网改动提交，尚未推送或部署。
- 未修改或编译App工程；本次构建仅限官网。
- 日语为逐篇翻译与自查，未经过日语母语者审校，也未做新的App实机功能验证。原始英文截图、字幕视频和它们的验证范围保留。

## 核心术语表

同一个App原始key对照日语与英文，下面的动态标签在界面上会替换占位符。

| 概念 | App原始key | App日语实际值 | 英文截图名称 | 网站使用位置 |
| --- | --- | --- | --- | --- |
| 资源提取 | `资源提取` | リソース抽出 | Extract | `tutorials/clipboard.ts`, `tutorials/platform.ts`, `tutorials/batch.ts`, `tutorials/subtitles.ts` |
| 网页视频 | `网页视频` | Web動画 | Web Video | `site-ui.ts`, `common.ts`, `landing.ts`, `home.ts` |
| 资源管理 | `资源管理` | リソース管理 | Manager | `screenshots.ts`, `home.ts`, `demo-captions.ts`, `tutorials/clipboard.ts`, `tutorials/platform.ts`, `tutorials/batch.ts` |
| 资源处理 | `资源处理` | リソースの処理 | Process | `screenshots.ts`, `tutorials/tools.ts` |
| 视频 | `视频` | 動画 | Video | `errors.ts`, `site-ui.ts`, `common.ts`, `tutorial-index.ts`, `screenshots.ts`, `landing.ts`, `home.ts`, `demo-captions.ts`, `legal.ts`, `tutorials/clipboard.ts`, `tutorials/platform.ts`, `tutorials/batch.ts`, `tutorials/tools.ts`, `tutorials/subtitles.ts` |
| 批量提取 | `批量提取` | 一括 | Batch | `site-ui.ts`, `tutorial-index.ts`, `screenshots.ts`, `home.ts`, `demo-captions.ts`, `tutorials/clipboard.ts`, `tutorials/platform.ts`, `tutorials/batch.ts`, `tutorials/tools.ts` |
| subtitle_tab_title | `subtitle_tab_title` | 字幕 | Subtitles | `errors.ts`, `site-ui.ts`, `tutorial-index.ts`, `screenshots.ts`, `home.ts`, `legal.ts`, `tutorials/tools.ts`, `tutorials/subtitles.ts` |
| 识别剪贴板链接自动填充 | `识别剪贴板链接自动填充` | クリップボードリンクの自動入力 | Fill from Clipboard | `tutorials/clipboard.ts` |
| 识别剪贴板链接自动下载 | `识别剪贴板链接自动下载` | クリップボードのリンクを自動的にダウンロードする | Auto-download Links | `home.ts`, `demo-captions.ts`, `tutorials/clipboard.ts` |
| 进入后台继续识别剪贴板自动下载 | `进入后台继续识别剪贴板自动下载` | バックグラウンドで認識してダウンロードする | Detect in Background | `home.ts`, `demo-captions.ts`, `tutorials/clipboard.ts` |
| 加载列表 | `加载列表` | リストを読み込む | Load list | `screenshots.ts`, `demo-captions.ts`, `tutorials/batch.ts` |
| 加载下一页 | `加载下一页` | 次のページを読み込む | Load next page | `tutorials/batch.ts` |
| 全选已加载 | `全选已加载` | 読み込み済みを全選択 | Select loaded | `tutorials/batch.ts` |
| 更换链接 | `更换链接` | リンクを変更 | Change link | `tutorials/batch.ts` |
| 统一画质：%@ | `统一画质：%@` | 共通の画質：%@ | Batch quality: %@ | `教程中的参数／动态标签对照` |
| 跟随下载设置 | `跟随下载设置` | ダウンロード設定に従う | Follow download settings | `tutorials/batch.ts` |
| 加入下载队列 | `加入下载队列` | ダウンロードキューに追加 | Add to the queue | `home.ts`, `demo-captions.ts`, `tutorials/batch.ts` |
| 加入下载队列（%ld） | `加入下载队列（%ld）` | キューに追加（%ld） | Add to queue (%ld) | `教程中的参数／动态标签对照` |
| 等待下载 | `等待下载` | ダウンロード待ち | Queued | `tutorials/batch.ts` |
| 下载中 | `下载中` | ダウンロード中 | Downloading | `tutorials/batch.ts` |
| 已完成 | `已完成` | 完了 | Completed | `site-ui.ts`, `screenshots.ts`, `home.ts`, `demo-captions.ts`, `legal.ts`, `tutorials/clipboard.ts`, `tutorials/platform.ts`, `tutorials/batch.ts`, `tutorials/tools.ts`, `tutorials/subtitles.ts` |
| 失败 | `失败` | 失敗しました | Failed | `tutorials/batch.ts` |
| 选择下载品质 | `选择下载品质` | ダウンロード品質を選択 | Select Quality | `screenshots.ts`, `tutorials/platform.ts` |
| 下载设置 | `下载设置` | ダウンロード設定 | Download Settings | `home.ts`, `tutorials/clipboard.ts`, `tutorials/platform.ts`, `tutorials/batch.ts` |
| 下载完成后自动保存到相册 | `下载完成后自动保存到相册` | ダウンロード完了後に自動で写真に保存 | Auto-Save Completed Downloads to Photos | `home.ts`, `tutorials/platform.ts`, `tutorials/batch.ts` |
| 保存到相册 | `保存到相册` | 写真に保存 | Save to Photos | `screenshots.ts`, `landing.ts`, `home.ts`, `tutorials/clipboard.ts`, `tutorials/platform.ts`, `tutorials/batch.ts`, `tutorials/tools.ts`, `tutorials/subtitles.ts` |
| 分享文件 | `分享文件` | ファイルを共有する | Share File | `screenshots.ts`, `tutorials/tools.ts` |
| 完成 | `完成` | 完了 | Done | `site-ui.ts`, `screenshots.ts`, `home.ts`, `demo-captions.ts`, `legal.ts`, `tutorials/clipboard.ts`, `tutorials/platform.ts`, `tutorials/batch.ts`, `tutorials/tools.ts`, `tutorials/subtitles.ts` |
| 提取 | `提取` | 抜粋 | Extract | `screenshots.ts`, `demo-captions.ts`, `tutorials/platform.ts`, `tutorials/subtitles.ts` |
| 粘贴 | `粘贴` | ペースト | Paste | `tutorials/platform.ts`, `tutorials/batch.ts`, `tutorials/subtitles.ts` |
| 链接提取 | `链接提取` | リンクから抜粋 | Extract from Link | `教程中的参数／动态标签对照` |
| 查看任务 | `查看任务` | タスクの表示 | View Task | `screenshots.ts`, `tutorials/platform.ts` |
| 下载 | `下载` | ダウンロード | Download | `site-ui.ts`, `tutorial-index.ts`, `screenshots.ts`, `landing.ts`, `home.ts`, `demo-captions.ts`, `legal.ts`, `tutorials/clipboard.ts`, `tutorials/platform.ts`, `tutorials/batch.ts`, `tutorials/tools.ts` |
| 视频裁剪 | `视频裁剪` | 動画のトリミング | Trim Video | `screenshots.ts`, `home.ts`, `tutorials/tools.ts` |
| 视频转码 | `视频转码` | 動画のトランスコーディング | Transcode Video | `screenshots.ts`, `home.ts`, `tutorials/tools.ts` |
| 视频拼接 | `视频拼接` | 動画の結合 | Stitch Videos | `screenshots.ts`, `home.ts`, `tutorials/platform.ts`, `tutorials/tools.ts` |
| 交叉拼接 | `交叉拼接` | クロススプライシング | Interleave | `screenshots.ts`, `home.ts`, `tutorials/tools.ts` |
| 分段宫格 | `分段宫格` | セグメント化された宮殿のグリッド | Segment Grid | `screenshots.ts`, `home.ts`, `tutorials/tools.ts` |
| 尺寸/画布 | `尺寸/画布` | サイズ/キャンバス | Resize / Canvas | `screenshots.ts`, `home.ts`, `tutorials/tools.ts` |
| 视频旋转 | `视频旋转` | 動画の回転 | Rotate Video | `screenshots.ts`, `home.ts`, `tutorials/tools.ts` |
| 视频镜像 | `视频镜像` | 動画ミラーリング | Mirror Video | `screenshots.ts`, `home.ts`, `tutorials/tools.ts` |
| 视频变速 | `视频变速` | 動画速度の変更 | Change Speed | `screenshots.ts`, `home.ts`, `tutorials/tools.ts` |
| 提取音频 | `提取音频` | 音声を抽出する | Extract Audio | `screenshots.ts`, `home.ts`, `tutorials/tools.ts` |
| 音频处理 | `音频处理` | オーディオ処理 | Audio Editing | `screenshots.ts`, `home.ts`, `tutorials/tools.ts` |
| 音视频合并 | `音视频合并` | オーディオと動画のマージ | Merge Audio and Video | `screenshots.ts`, `home.ts`, `tutorials/tools.ts` |
| 视频倒放 | `视频倒放` | 動画を逆再生 | Reverse Video | `screenshots.ts`, `home.ts`, `tutorials/tools.ts` |
| 添加水印 | `添加水印` | 透かしを追加する | Add Watermark | `screenshots.ts`, `home.ts`, `tutorials/tools.ts` |
| 视频转 GIF | `视频转 GIF` | 動画を GIF に変換 | Video to GIF | `screenshots.ts`, `home.ts`, `tutorials/tools.ts` |
| 视频转实况 | `视频转实况` | 動画を Live Photo に変換 | Video to Live Photo | `screenshots.ts`, `home.ts`, `tutorials/tools.ts` |
| 视频截图 | `视频截图` | 動画のスクリーンショット | Video Capture | `screenshots.ts`, `home.ts`, `tutorials/tools.ts` |
| 修改 MD5 | `修改 MD5` | MD5を修正する | Change MD5 | `screenshots.ts`, `home.ts`, `tutorials/tools.ts` |
| 推荐组合 | `推荐组合` | おすすめの組み合わせ | Presets | `tutorials/tools.ts` |
| 截取范围 | `截取范围` | 迎撃範囲 | Clip Range | `tutorials/tools.ts` |
| 处理参数 | `处理参数` | 処理パラメータ | Processing Options | `tutorials/tools.ts` |
| 后台下载完成/失败时发送通知 | `后台下载完成/失败时发送通知` | バックグラウンドダウンロードが完了または失敗したときに通知を送信する | Notify When Background Downloads Complete or Fail | `tutorials/clipboard.ts` |
| 复制分享链接可以自动下载 | `复制分享链接可以自动下载` | 共有リンクをコピーして自動的にダウンロードします | Copy a shared link to download automatically | `tutorials/clipboard.ts` |
| 复制链接 | `复制链接` | リンクをコピー | Copy Link | `site-ui.ts`, `screenshots.ts`, `home.ts`, `demo-captions.ts`, `tutorials/clipboard.ts`, `tutorials/platform.ts`, `tutorials/batch.ts`, `tutorials/subtitles.ts` |
| 分享 | `分享` | シェアする | Share | `教程中的参数／动态标签对照` |
| 将此画质设为默认，以后不再询问 | `将此画质设为默认，以后不再询问` | この画質をデフォルトにして、今後は確認しない | Set this quality as default and don't ask again | `tutorials/platform.ts` |
| 批量 | `批量` | バッチ | Batch | `tutorials/tools.ts` |
| 正在加载列表 | `正在加载列表` | リストを読み込み中 | Loading list | `tutorials/batch.ts` |
| 图片 | `图片` | 写真 | Image | `screenshots.ts`, `landing.ts`, `home.ts`, `demo-captions.ts`, `legal.ts`, `tutorials/clipboard.ts`, `tutorials/platform.ts`, `tutorials/batch.ts`, `tutorials/tools.ts`, `tutorials/subtitles.ts` |
| 全部 | `全部` | すべて | All | `home.ts`, `legal.ts`, `tutorials/clipboard.ts`, `tutorials/platform.ts`, `tutorials/batch.ts`, `tutorials/tools.ts`, `tutorials/subtitles.ts` |
| 选择视频 | `选择视频` | 動画を選択 | Select Video | `site-ui.ts`, `screenshots.ts`, `tutorials/tools.ts` |
| 从系统相册选择 | `从系统相册选择` | システム写真から選ぶ | Choose from Photos | `screenshots.ts`, `tutorials/tools.ts` |
| 从文件选择 | `从文件选择` | ファイルから選択 | Choose from Files | `tutorials/tools.ts` |
| 自定义 | `自定义` | カスタマイズ | Custom | `tutorials/tools.ts` |
| 清晰 | `清晰` | クリア | Clear | `tutorials/tools.ts` |
| 流畅 | `流畅` | スムーズ | Smooth | `site-ui.ts`, `tutorials/tools.ts` |
| 长片段 | `长片段` | ロングクリップ | Long | `tutorials/tools.ts` |
| 帧率 | `帧率` | フレームレート | Frame Rate | `screenshots.ts`, `tutorials/tools.ts` |
| 宽度 | `宽度` | 幅 | Width | `screenshots.ts`, `tutorials/tools.ts` |
| 开始处理 | `开始处理` | 処理開始 | Start Processing | `tutorials/tools.ts` |
| 处理完成 | `处理完成` | 処理が完了しました | Processing Complete | `tutorials/tools.ts` |
| 封面帧 | `封面帧` | カバーフレーム | Cover Frame | `tutorials/tools.ts` |
| 声音 | `声音` | 音 | Sound | `site-ui.ts`, `tutorial-index.ts`, `screenshots.ts`, `home.ts`, `legal.ts`, `tutorials/platform.ts`, `tutorials/tools.ts`, `tutorials/subtitles.ts` |
| 实况质量 | `实况质量` | ライブ品質 | Live Photo Quality | `tutorials/tools.ts` |
| 均衡 | `均衡` | 平衡 | Balanced | `tutorials/tools.ts` |
| 移除声音 | `移除声音` | 音を消す | Remove Sound | `tutorials/tools.ts` |
| 保留声音 | `保留声音` | サウンドを保存する | Keep Sound | `tutorials/tools.ts` |
| 高清 | `高清` | HD | HD | `tutorials/tools.ts` |
| 原画 | `原画` | オリジナルの絵 | Original | `tutorials/tools.ts` |
| 实况照片已保存到相册 | `实况照片已保存到相册` | ライブ写真が写真に保存されました | Live Photo saved to Photos | `tutorials/tools.ts` |
| 确定 | `确定` | OK | OK | `tutorials/tools.ts` |
| 输出格式 | `输出格式` | 出力フォーマット | Output Format | `tutorials/tools.ts` |
| 输出质量 | `输出质量` | 出力品質 | Output Quality | `tutorials/tools.ts` |
| 分辨率 | `分辨率` | 解像度 | Resolution | `screenshots.ts`, `tutorials/platform.ts`, `tutorials/tools.ts` |
| 高质量 | `高质量` | 高品質 | High Quality | `tutorials/tools.ts` |
| 标准 | `标准` | 標準 | Standard | `legal.ts`, `tutorials/tools.ts` |
| 小体积 | `小体积` | 小さいサイズ | Smaller Size | `tutorials/platform.ts`, `tutorials/tools.ts` |
| 原始 | `原始` | オリジナル | Original | `tutorials/tools.ts` |
| 静音 | `静音` | ミュート | Mute | `home.ts`, `tutorials/tools.ts` |
| 编码 | `编码` | エンコーディング | Codec | `tutorials/tools.ts` |
| 码率 | `码率` | コードレート | Bitrate | `tutorials/tools.ts` |
| 自动 | `自动` | 自動 | Auto | `site-ui.ts`, `screenshots.ts`, `home.ts`, `demo-captions.ts`, `legal.ts`, `tutorials/clipboard.ts`, `tutorials/platform.ts`, `tutorials/batch.ts`, `tutorials/tools.ts`, `tutorials/subtitles.ts` |
| 目标大小 | `目标大小` | ターゲットサイズ | Target Size | `tutorials/tools.ts` |
| 自定义码率 | `自定义码率` | カスタムコードレート | Custom Bitrate | `tutorials/tools.ts` |
| 继续处理 | `继续处理` | 処理を続行 | Keep Processing | `tutorials/tools.ts` |
| 平均分割 | `平均分割` | 均等に分割する | Even Split | `tutorials/tools.ts` |
| 选取片段 | `选取片段` | クリップを選択 | Select Segment | `tutorials/tools.ts` |
| 裁剪方式 | `裁剪方式` | 切断方法 | Trim Mode | `tutorials/tools.ts` |
| 裁剪范围 | `裁剪范围` | トリミング範囲 | Trim Range | `tutorials/tools.ts` |
| 快速编辑 | `快速编辑` | クイック編集 | Quick Edit | `tutorials/tools.ts` |
| 添加视频 | `添加视频` | 動画を追加 | Add Video | `screenshots.ts`, `tutorials/tools.ts` |
| 选择拼接视频 | `选择拼接视频` | 結合動画を選択 | Select Videos to Stitch | `tutorials/tools.ts` |
| 从下载列表选择 | `从下载列表选择` | ダウンロードリストから選択 | Choose from Downloads | `tutorials/tools.ts` |
| 正在处理视频 | `正在处理视频` | 動画の処理 | Processing video | `tutorials/tools.ts` |
| 完成时通知我 | `完成时通知我` | 完了したら通知してください | Notify me when complete | `tutorials/tools.ts` |
| 取消 | `取消` | キャンセル | Cancel | `screenshots.ts`, `tutorials/tools.ts` |
| 已保存到相册 | `已保存到相册` | 写真に保存されました | Saved to Photos | `tutorials/tools.ts` |
| 总段数 | `总段数` | セグメントの総数 | Total Segments | `tutorials/tools.ts` |
| A 开始 | `A 开始` | 始まり | Start with A | `tutorials/batch.ts`, `tutorials/tools.ts` |
| 固定时长 | `固定时长` | 固定期間 | Fixed Duration | `tutorials/tools.ts` |
| B 开始 | `B 开始` | Bスタート | Start with B | `tutorials/tools.ts` |
| 第一段音频 | `第一段音频` | 最初の音声 | First Segment Audio | `tutorials/tools.ts` |
| 横向数量 | `横向数量` | 水平量 | Columns | `tutorials/tools.ts` |
| 纵向数量 | `纵向数量` | 垂直数量 | Rows | `tutorials/tools.ts` |
| 原视频尺寸 | `原视频尺寸` | 元の動画のサイズ | Original Video Size | `tutorials/tools.ts` |
| 导出尺寸 | `导出尺寸` | エクスポート寸法 | Export Size | `tutorials/tools.ts` |
| 每格保持原尺寸 | `每格保持原尺寸` | 各グリッドは元のサイズを維持します | Keep Each Tile Original Size | `tutorials/tools.ts` |
| 留边适配 | `留边适配` | 適応のためのマージンを残す | Fit | `tutorials/tools.ts` |
| 裁剪填满 | `裁剪填满` | トリミングして埋める | Fill Crop | `tutorials/tools.ts` |
| 画布比例 | `画布比例` | キャンバス比率 | Canvas Ratio | `tutorials/tools.ts` |
| 布局方式 | `布局方式` | レイアウト | Layout | `tutorials/tools.ts` |
| 原比例 | `原比例` | 元の比率 | Original | `tutorials/tools.ts` |
| 旋转方向 | `旋转方向` | 回転方向 | Rotation | `screenshots.ts`, `tutorials/tools.ts` |
| 左右翻转 | `左右翻转` | 左右を反転 | H Flip | `tutorials/tools.ts` |
| 镜像方式 | `镜像方式` | ミラーリング方式 | Mirror Mode | `tutorials/tools.ts` |
| 上下翻转 | `上下翻转` | 上下にフリップする | V Flip | `tutorials/tools.ts` |
| 中心翻转 | `中心翻转` | センターフリップ | 180 | `tutorials/tools.ts` |
| 保留音频 | `保留音频` | オーディオを維持する | Keep Audio | `tutorials/tools.ts` |
| 倒放音频 | `倒放音频` | オーディオを逆方向に再生する | Reverse Audio | `tutorials/tools.ts` |
| 速度倍率 | `速度倍率` | スピードマルチプライヤー | Speed | `tutorials/tools.ts` |
| 保持音调 | `保持音调` | ピッチを維持する | Preserve Pitch | `tutorials/tools.ts` |
| 处理方式 | `处理方式` | 加工方法 | Processing Mode | `tutorials/tools.ts` |
| 音量 | `音量` | ボリューム | Volume | `tutorials/tools.ts` |
| 替换 | `替换` | 交換する | Replace | `tutorials/tools.ts` |
| 淡入淡出 | `淡入淡出` | フェードインとフェードアウト | Fade In/Out | `tutorials/tools.ts` |
| 水印类型 | `水印类型` | ウォーターマークの種類 | Watermark Type | `tutorials/tools.ts` |
| 文字 | `文字` | テキスト | Text | `tutorials/tools.ts` |
| 文字内容 | `文字内容` | テキストの内容 | Text Content | `tutorials/tools.ts` |
| 水印位置 | `水印位置` | ウォーターマークの位置 | Watermark Position | `tutorials/tools.ts` |
| 透明度 | `透明度` | 透明性 | Opacity | `tutorials/tools.ts` |
| 字体颜色 | `字体颜色` | 文字の色 | Text Color | `tutorials/tools.ts` |
| 显示背景 | `显示背景` | 背景を表示 | Show Background | `tutorials/tools.ts` |
| 文字描边 | `文字描边` | テキストストローク | Text Stroke | `tutorials/tools.ts` |
| 描边颜色 | `描边颜色` | ストロークの色 | Stroke Color | `tutorials/tools.ts` |
| 单张 | `单张` | リーフレット | Single | `tutorials/tools.ts` |
| 截图模式 | `截图模式` | スクリーンショットモード | Capture Mode | `tutorials/tools.ts` |
| 截图时间 | `截图时间` | スクリーンショット時間 | Capture Time | `tutorials/tools.ts` |
| 导出截图 | `导出截图` | スクリーンショットのエクスポート | Export Image | `tutorials/tools.ts` |
| 智能 | `智能` | スマート | Smart | `home.ts`, `tutorials/tools.ts` |
| 大图 | `大图` | 全体像 | Sheet | `tutorials/tools.ts` |
| 截图预览 | `截图预览` | スクリーンショットのプレビュー | Screenshot Preview | `tutorials/tools.ts` |
| 暂无可处理的已下载视频 | `暂无可处理的已下载视频` | 処理するダウンロードされた動画はまだありません | No downloaded videos available for processing | `教程中的参数／动态标签对照` |
| 从相册视频提取音轨 | `从相册视频提取音轨` | 写真動画からオーディオトラックを抽出する | Extract audio from Photos video | `tutorials/tools.ts` |
| 音频来源 | `音频来源` | 音源 | Audio Source | `screenshots.ts`, `tutorials/tools.ts` |
| 未选择 | `未选择` | 未選択 | Not Selected | `tutorials/tools.ts` |
| 全选 | `全选` | すべて選択 | Select All | `tutorials/subtitles.ts` |
| subtitle_extracting | `subtitle_extracting` | 字幕を抽出中… | Extracting captions… | `tutorials/subtitles.ts` |
| subtitle_select_all | `subtitle_select_all` | すべて選択 | Select all | `tutorials/subtitles.ts` |
| subtitle_export_count | `subtitle_export_count` | 字幕を書き出す（%ld） | Export captions (%ld) | `教程中的参数／动态标签对照` |
| subtitle_format | `subtitle_format` | 字幕形式 | Caption format | `tutorials/subtitles.ts` |
| subtitle_format_value | `subtitle_format_value` | 形式：%@ | Format: %@ | `教程中的参数／动态标签对照` |
| post_text_export_destination | `post_text_export_destination` | 書き出し先 | Export to | `legal.ts`, `tutorials/subtitles.ts` |
| post_text_save_files | `post_text_save_files` | 「ファイル」に保存 | Save to Files | `site-ui.ts`, `screenshots.ts`, `home.ts`, `legal.ts`, `tutorials/tools.ts`, `tutorials/subtitles.ts` |
| 右转90 | `右转90` | 右折90 | Rotate Right 90 | `tutorials/tools.ts` |
| 左转90 | `左转90` | 左折90 | Rotate Left 90 | `tutorials/tools.ts` |
| 模糊%@ | `模糊%@` | ブラー%@ | Blur %@ | `教程中的参数／动态标签对照` |
| 双联%@ | `双联%@` | ダブル%@ | Double %@ | `教程中的参数／动态标签对照` |
| 双联对称%@ | `双联对称%@` | 二重対称 %@ | Symmetric Double %@ | `教程中的参数／动态标签对照` |
| 三联%@ | `三联%@` | サンリアン %@ | Triple %@ | `教程中的参数／动态标签对照` |
| 三联模糊%@ | `三联模糊%@` | トリプルブラー %@ | Triple Blur %@ | `教程中的参数／动态标签对照` |
| 左右对称 | `左右对称` | 対称 | Side Sym | `screenshots.ts`, `tutorials/tools.ts` |
| 上下对称 | `上下对称` | 上下対称 | Top Sym | `tutorials/tools.ts` |
| 中心对称 | `中心对称` | 中心対称 | Center Sym | `tutorials/tools.ts` |
