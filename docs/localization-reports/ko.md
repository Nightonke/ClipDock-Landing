# 韩语本地化交付记录

## 来源与约定

- 目标：韩语 `ko`，韩国常用说明文；菜单名称 `한국어`，HTML / hreflang 为 `ko`，Open Graph 为 `ko_KR`，方向 `ltr`。
- 路径：`/ko/`、`/ko/articles/`、`/ko/articles/<原 slug>/`、`/ko/privacy/`、`/ko/terms/`。
- 官网源版本：`8ca9228ad5355a86c6524344262ae1e2fc334667`，`main`；开始时工作区干净。
- App 源版本：`5fc01b2572c2b405701f560935f797867c932043`；开始时工作区干净。只读对照 `ResourceDownloader/ko.lproj/Localizable.strings`、`InfoPlist.strings`、英文同 key，以及 `DIYResourceExtractVC.m`、`DIYVideoProcessOptionsVC+Resize.m` 的实际入口和动态标签。
- 品牌保留 `ClipDock`，使用礼貌的 `하세요` 操作说明，省略不必要的第二人称；系统应用用 `사진 앱`、`파일 앱`。教程标题突出动作，不重复添加设备名。
- 结构以当前教程注册表为准，功能边界以当前简中修订为主；媒体沿用真实原图和视频，不生成韩语伪截图。原图按钮首次出现时提供英文对照。

## 完成范围

- 首页全部文案、5 个功能区、18 个工具、FAQ、平台说明、下载入口、共用 UI、无障碍标签和元数据。
- 41 篇教程：8 篇单平台、2 篇剪贴板、12 篇批量、1 篇字幕、18 篇工具。保留 slug、分类、关联文章、步骤和细节顺序、FAQ 与排错条数、示例 URL。
- 全部 178 组截图标题和备注，其中 158 个截图 ID 被教程引用；4 段录屏共 19 条字幕，媒体路径、顺序和时间轴不变。
- 两页站内法律正文及入口完整翻译，保留既有生效日期和条款范围。这是现有政策的翻译，没有新增韩国地区条款或改动商店资料。
- 韩语目录提供独立数据，不在运行时借用其他语言正文。首页、catalog、共用文案、法律文案和视频字幕均完成显式注册。
- 已加入 `publishedLocales`，生成完整韩语站点；复用现有动态路由、OG、hreflang 和 sitemap，不新增设备语言强制跳转。
- 保留来源可用性、登录与访问条件、画质及水印依赖来源、画中画运行条件、下载和相册保存区分、字幕仅提取已有轨道、免费 / VIP 边界和未实测范围。各批量教程均说明免费版最多加载前 2 页。

## 排版与公共改动

- 韩语优先使用 Apple SD Gothic Neo、Malgun Gothic、Noto Sans KR 和系统字体；采用 `word-break: keep-all` 保持正确空格和词内完整性，正文仅在长 URL 等必要情况下允许应急折行。
- 韩语首页、工具卡片及教程标题调整字号、行高、字距和均衡换行；主视觉、功能区使用韩语语义分行。
- 保留 iPhone / iPad 等品牌的大小写，避免英文标签的全大写样式影响韩语页面。
- 未增加截断、隐藏文本或 `break-all` 来掩盖长标题。`HeadingText.astro` 已支持非中文显式换行，无须再修改。
- 扩展语言测试和页面检查，检查韩语元数据、源语言残留、App 剪贴板名称、法律路径和批量页数限制。

## App 术语疑点与处理

以下是 App 当前显示值的问题，官网不修改 App。教程引用实际按钮，并在附近解释功能；自然叙述和标题使用易懂的韩语。

| App key | 当前显示值 / 问题 | 官网处理 |
| --- | --- | --- |
| `subtitle_tab_profile` / `批量` | 分页为 `일괄`，截图工具的批量模式为 `배치` | 分开使用，未按中文表面词形混用。已核对资源提取页面使用 `subtitle_tab_profile`。 |
| `从下载列表选择` | `Select from download list` 仍为英文 | 引用此实际名称并说明它是已下载视频列表，同时附英文原图的 `Choose from Downloads`。 |
| `截取范围` | `차단 범위`（并非自然的片段范围表达） | 首次说明它是要导出的时间区间，后文用 `구간`。 |
| `单张` | `전단지`（通常指传单） | 引用实际值，并明确说明是单帧图片模式。 |
| `A 开始` | `시작`，缺少 A | 说明该选项从主视频 A 开始；B 使用 `B 시작`。 |
| `均衡` / `原画` | `평형` / `원본 그림` | 保留选项名及 Balanced / Original 对照，解释画质含义。 |
| `留边适配` | `적응을 위해 여백을 남겨두세요`，冗长且不自然 | 首次引用实际名称，正文用“保留画面并留边”的说明。 |
| `导出尺寸` | `차원 내보내기` | 解释这是整个输出画布的像素尺寸。 |
| `码率` / `自定义码率` | `코드율` / `맞춤형 코드 속도` | 引用按钮值，正文用 `비트레이트`。 |
| `三联%@` | `싼리안 %@`，使用音译 | 保留 `싼리안 1:1*` 并附 Triple 1:1*，归入三画面布局解释。 |
| `确定` / `失败` / `替换` / `保留声音` | `알았어` / `실패했다` / `교체하다` / `소리를 보존하다`，语体或按钮用词不统一 | 仅在引用实际控件时使用，正文保持礼貌自然。 |
| `透明度` | `투명성`，原图英文为 Opacity | 明确数值调低使水印变淡，不因名称而反转滑块效果。 |

水印教程的简中 `exampleNote` 将原图文字写成 `Made by 影随存`，与其 FAQ 和实际图片不一致。已直接查看 `public/assets/tutorials/video-tools/watermark-result-orange.webp`，确认显示 `Made by ClipDock`；韩语两处统一使用真实文字。其他语言未顺手改写。

原图中的 `背景音乐版` 和合集名 `米娜舞蹈-大摆锤` 按原样引用，前者附韩语含义；它们是源语言残留检查中仅有的中文素材名称例外。

## 验证结果

| 检查 | 结果 |
| --- | --- |
| `npm run check:i18n` | 9 项通过；覆盖所有已启用语言的完整教程结构、图注、字幕、注册和韩语专属规则。 |
| `npx tsc --noEmit` | 通过。 |
| `npm run build` | 通过，生成 226 页（5 种语言各 45 页及共享 404）。 |
| `python3 scripts/verify-site.py` | 通过；225 个 sitemap URL、13,417 个本地引用，无错误。 |
| `python3 scripts/verify-locales.py` | 通过；225 个语言页面、每种语言 41 篇教程，语言标识、canonical、双向 hreflang、正文链接、法律页和 sitemap 无错误。 |
| `node --test tests/videoRecovery.test.mjs` | 4 项通过。 |
| `git diff --check` | 通过。 |
| `node scripts/export-copy-review.cjs ko` | 已导出 `/tmp/clipdock-ko-review.json`，检查译文、数字、URL、占位符与源语言残留。数字差异仅有“第 2 / 3 段”译为韩语序数词，数值含义不变。 |
| Twitter / JSON-LD 输出 | 45 页的 Twitter 标题与描述为韩语；首页及 41 篇教程的 JSON-LD 有效，`inLanguage` 和站内路径正确。教程列表和法律页沿用原模板，无 JSON-LD。 |

构建有既有 Browserslist 数据过期提示，不影响构建结果；未为本次翻译升级依赖。

## 浏览器覆盖与证据

使用 agent-browser 0.37.1 / HeadlessChrome 153.0.0.0，访问当前工作区的构建预览 `http://127.0.0.1:4325`。

- 自动渲染扫描：375、390、768、1024、1440 五种宽度，每个宽度检查韩语全部 45 页，共 225 次页面检查。扫描 H1/H2/H3、图注、段落、目录、按钮和可见控件；无页面横向溢出或文本容器溢出。逐页记录所有标题及行数，不以这项检查代替母语语义审校。
- 交互：桌面和移动语言菜单；韩语转码文章 → 英文同一 slug → 韩语同一 slug；共享 404 的语言菜单 → 韩语首页；四段视频各字幕时间段、字幕轮播五步与暂停/播放、两处平台列表、六条首页 FAQ、错误提示与重试入口。
- 媒体错误 UI 采用模拟不支持媒体的错误事件验证，韩语错误和重试文案正确，重试后恢复；网络故障、超时和重试上限逻辑另由既有 4 项测试覆盖。
- 回归：英语、简中、繁中、日语的首页及转码教程，加共享 404，在 375 / 1440 检查，共 18 次页面检查，无溢出。
- 视觉人工查看：[手机首页](ko/home-375.png)、[桌面首页](ko/home-1440.png)、[移动语言菜单](ko/language-menu-375.png)、[手机转码参数](ko/transcode-options-375.png)、[工具区](ko/tools-1440.png)及[字幕区](ko/subtitles-1440.png)；截图保存在本记录同名目录。
- 结构化结果：[布局扫描](ko/layout-checks.json)、[元数据](ko/metadata-checks.json)、[交互检查](ko/interaction-checks.json)、[旧语言回归](ko/regression-checks.json)。

## 例外与交付状态

- `/404.html` 仍是全站共享英文错误正文，保留原有中文入口，语言菜单可进入韩语首页。`ko/errors.ts` 已提供译文，但没有新增专属韩语 404 或托管规则。
- 原始视频和截图中的英文 / 其他语言仍保留，已翻译图注和字幕；外部 Apple 帮助、隐私页面及商店详情不属于本站韩语正文。
- 已启用构建；本记录覆盖本地构建和检查，线上部署结果不在本次验证范围内。
- App 工程未修改、未编译；网站构建及检查已执行。
- 未经韩语母语者或法律专业人员审校，也未在真实 iPhone / iPad 的 Safari 上验收。没有把浏览器模拟宽度视为真机测试。
- 除上述共享页面、原始媒体与人工审校范围外，本次范围内无已知未解决的内容缺项或布局问题。

## 术语表

同一 App 原始 key 的韩语值与英文值对照如下。英文栏以 App 同 key 为基础；正文在原图按钮不同的地方保留图片中的名称。动态参数保留 `%@` / `%ld`，星号按实际功能限制显示。网站位置按译文引用列出，未直接引用的项目用于语义和动态标签核对。

| 概念 / App 原始 key | App 韩语实际值 | 英文 App / 配图对照 | 官网使用位置 |
| --- | --- | --- | --- |
| `资源提取` | 리소스 추출 | Extract | `tutorials/batch.ts`、`tutorials/clipboard.ts`、`tutorials/platform.ts`、`tutorials/subtitles.ts` |
| `网页视频` | 웹 동영상 | Web Video | `common.ts`、`home.ts`、`landing.ts`、`site-ui.ts` |
| `资源管理` | 리소스 관리 | Manager | `demo-captions.ts`、`home.ts`、`screenshots.ts`、`tutorials/batch.ts`、`tutorials/clipboard.ts`、`tutorials/platform.ts` |
| `资源处理` | 리소스 처리 | Process | `screenshots.ts`、`tutorials/tools.ts` |
| `视频` | 동영상 | Video | `common.ts`、`demo-captions.ts`、`errors.ts`、`home.ts`、`landing.ts`、`legal.ts`、`screenshots.ts`、`site-ui.ts`、`tutorial-index.ts`、`tutorials/batch.ts`、`tutorials/clipboard.ts`、`tutorials/platform.ts`、`tutorials/subtitles.ts`、`tutorials/tools.ts` |
| `批量提取` | 일괄 | Batch | `demo-captions.ts`、`home.ts`、`screenshots.ts`、`site-ui.ts`、`tutorial-index.ts`、`tutorials/batch.ts`、`tutorials/clipboard.ts`、`tutorials/platform.ts`、`tutorials/tools.ts` |
| `subtitle_tab_title` | 자막 | Subtitles | `errors.ts`、`home.ts`、`legal.ts`、`screenshots.ts`、`site-ui.ts`、`tutorial-index.ts`、`tutorials/subtitles.ts`、`tutorials/tools.ts` |
| `识别剪贴板链接自动填充` | 자동완성 클립보드 링크 | Fill from Clipboard | `tutorials/clipboard.ts` |
| `识别剪贴板链接自动下载` | 클립보드 링크 자동 다운로드 | Auto-download Links | `home.ts`、`tutorials/clipboard.ts` |
| `进入后台继续识别剪贴板自动下载` | 백그라운드에서 인식 및 다운로드 | Detect in Background | `home.ts`、`tutorials/clipboard.ts` |
| `加载列表` | 목록 불러오기 | Load list | `demo-captions.ts`、`screenshots.ts`、`tutorials/batch.ts` |
| `加载下一页` | 다음 페이지 로드 | Load next page | `tutorials/batch.ts` |
| `全选已加载` | 로드한 항목 모두 선택 | Select loaded | `tutorials/batch.ts` |
| `更换链接` | 링크 변경 | Change link | `tutorials/batch.ts` |
| `统一画质：%@` | 공통 화질: %@ | Batch quality: %@ | 参数、动态标签或界面入口对照 |
| `跟随下载设置` | 다운로드 설정 따르기 | Follow download settings | `tutorials/batch.ts` |
| `加入下载队列` | 다운로드 대기열에 추가 | Add to the queue | `tutorials/batch.ts` |
| `加入下载队列（%ld）` | 대기열에 추가 (%ld) | Add to queue (%ld) | 参数、动态标签或界面入口对照 |
| `等待下载` | 다운로드 대기 중 | Queued | `tutorials/batch.ts` |
| `下载中` | 다운로드 중 | Downloading | `tutorials/batch.ts` |
| `已完成` | 완료됨 | Completed | `home.ts`、`tutorials/batch.ts`、`tutorials/platform.ts` |
| `失败` | 실패했다 | Failed | `tutorials/batch.ts` |
| `选择下载品质` | 다운로드 품질 선택 | Select Quality | `screenshots.ts`、`tutorials/platform.ts` |
| `下载设置` | 다운로드 설정 | Download Settings | `home.ts`、`tutorials/batch.ts`、`tutorials/clipboard.ts`、`tutorials/platform.ts` |
| `下载完成后自动保存到相册` | 다운로드 완료 후 사진에 자동 저장 | Auto-Save Completed Downloads to Photos | `home.ts`、`tutorials/batch.ts`、`tutorials/platform.ts` |
| `保存到相册` | 사진에 저장 | Save to Photos | `demo-captions.ts`、`home.ts`、`landing.ts`、`legal.ts`、`screenshots.ts`、`tutorials/batch.ts`、`tutorials/clipboard.ts`、`tutorials/platform.ts`、`tutorials/tools.ts` |
| `分享文件` | 파일 공유 | Share File | `screenshots.ts`、`tutorials/tools.ts` |
| `完成` | 완료 | Done | `demo-captions.ts`、`home.ts`、`legal.ts`、`screenshots.ts`、`site-ui.ts`、`tutorials/batch.ts`、`tutorials/clipboard.ts`、`tutorials/platform.ts`、`tutorials/subtitles.ts`、`tutorials/tools.ts` |
| `提取` | 추출 | Extract | `demo-captions.ts`、`errors.ts`、`home.ts`、`landing.ts`、`legal.ts`、`screenshots.ts`、`site-ui.ts`、`tutorial-index.ts`、`tutorials/batch.ts`、`tutorials/clipboard.ts`、`tutorials/platform.ts`、`tutorials/subtitles.ts`、`tutorials/tools.ts` |
| `粘贴` | 붙여넣기 | Paste | `home.ts`、`legal.ts`、`screenshots.ts`、`site-ui.ts`、`tutorials/batch.ts`、`tutorials/platform.ts`、`tutorials/subtitles.ts` |
| `链接提取` | 링크에서 추출 | Extract from Link | 参数、动态标签或界面入口对照 |
| `查看任务` | 작업 보기 | View Task | `screenshots.ts`、`tutorials/platform.ts` |
| `下载` | 다운로드 | Download | `demo-captions.ts`、`errors.ts`、`home.ts`、`landing.ts`、`legal.ts`、`screenshots.ts`、`site-ui.ts`、`tutorial-index.ts`、`tutorials/batch.ts`、`tutorials/clipboard.ts`、`tutorials/platform.ts`、`tutorials/tools.ts` |
| `视频裁剪` | 동영상 자르기 | Trim Video | `home.ts`、`screenshots.ts`、`tutorials/tools.ts` |
| `视频转码` | 동영상 트랜스코딩 | Transcode Video | `home.ts`、`tutorials/tools.ts` |
| `视频拼接` | 동영상 접합 | Stitch Videos | `home.ts`、`screenshots.ts`、`site-ui.ts`、`tutorials/tools.ts` |
| `交叉拼接` | 교차 접합 | Interleave | `home.ts`、`screenshots.ts`、`tutorials/tools.ts` |
| `分段宫格` | 분할된 그리드 | Segment Grid | `home.ts`、`screenshots.ts`、`tutorials/tools.ts` |
| `尺寸/画布` | 크기/캔버스 | Resize / Canvas | `home.ts`、`screenshots.ts`、`tutorials/tools.ts` |
| `视频旋转` | 동영상 회전 | Rotate Video | `home.ts`、`screenshots.ts`、`tutorials/tools.ts` |
| `视频镜像` | 동영상 미러링 | Mirror Video | `home.ts`、`screenshots.ts`、`tutorials/tools.ts` |
| `视频变速` | 동영상 속도 변경 | Change Speed | `home.ts`、`screenshots.ts`、`tutorials/tools.ts` |
| `提取音频` | 오디오 추출 | Extract Audio | `home.ts`、`legal.ts`、`screenshots.ts`、`site-ui.ts`、`tutorials/platform.ts`、`tutorials/tools.ts` |
| `音频处理` | 오디오 처리 | Audio Editing | `home.ts`、`screenshots.ts`、`tutorials/tools.ts` |
| `音视频合并` | 오디오 및 동영상 병합 | Merge Audio and Video | `home.ts`、`screenshots.ts`、`tutorials/platform.ts`、`tutorials/tools.ts` |
| `视频倒放` | 동영상 역재생 | Reverse Video | `home.ts`、`screenshots.ts`、`tutorials/tools.ts` |
| `添加水印` | 워터마크 추가 | Add Watermark | `home.ts`、`screenshots.ts`、`tutorials/tools.ts` |
| `视频转 GIF` | 동영상을 GIF로 변환 | Video to GIF | `home.ts`、`tutorials/tools.ts` |
| `视频转实况` | 동영상을 Live Photo로 변환 | Video to Live Photo | `home.ts`、`tutorials/tools.ts` |
| `视频截图` | 동영상 스크린샷 | Video Capture | `home.ts`、`screenshots.ts`、`tutorials/tools.ts` |
| `修改 MD5` | MD5 수정 | Change MD5 | `home.ts`、`screenshots.ts`、`tutorials/tools.ts` |
| `推荐组合` | 추천 조합 | Presets | `screenshots.ts`、`tutorials/tools.ts` |
| `截取范围` | 차단 범위 | Clip Range | `tutorials/tools.ts` |
| `处理参数` | 처리 매개변수 | Processing Options | `tutorials/tools.ts` |
| `后台下载完成/失败时发送通知` | 백그라운드 다운로드가 완료/실패하면 알림 보내기 | Notify When Background Downloads Complete or Fail | 参数、动态标签或界面入口对照 |
| `复制分享链接可以自动下载` | 자동으로 다운로드하려면 공유 링크를 복사하세요. | Copy a shared link to download automatically | 参数、动态标签或界面入口对照 |
| `复制链接` | 링크 복사 | Copy Link | `screenshots.ts`、`site-ui.ts`、`tutorial-index.ts`、`tutorials/batch.ts`、`tutorials/clipboard.ts`、`tutorials/platform.ts` |
| `分享` | 공유 | Share | `demo-captions.ts`、`home.ts`、`landing.ts`、`legal.ts`、`screenshots.ts`、`site-ui.ts`、`tutorial-index.ts`、`tutorials/batch.ts`、`tutorials/clipboard.ts`、`tutorials/platform.ts`、`tutorials/subtitles.ts`、`tutorials/tools.ts` |
| `将此画质设为默认，以后不再询问` | 이 화질을 기본값으로 설정하고 다시 묻지 않기 | Set this quality as default and don't ask again | `tutorials/platform.ts` |
| `批量` | 배치 | Batch | `home.ts`、`screenshots.ts`、`tutorials/tools.ts` |
| `正在加载列表` | 목록 로드 중 | Loading list | `tutorials/batch.ts` |
| `图片` | 그림 | Image | `tutorials/tools.ts` |
| `全部` | 전체 | All | `legal.ts`、`screenshots.ts`、`tutorials/batch.ts`、`tutorials/clipboard.ts`、`tutorials/platform.ts`、`tutorials/tools.ts` |
| `选择视频` | 동영상 선택 | Select Video | `site-ui.ts`、`tutorials/tools.ts` |
| `从系统相册选择` | 시스템 사진에서 선택 | Choose from Photos | `screenshots.ts`、`tutorials/tools.ts` |
| `从文件选择` | 파일에서 선택 | Choose from Files | `tutorials/tools.ts` |
| `自定义` | 사용자 정의 | Custom | `tutorials/tools.ts` |
| `清晰` | 명확한 | Clear | `tutorials/tools.ts` |
| `流畅` | 부드러운 | Smooth | `tutorials/tools.ts` |
| `长片段` | 긴 클립 | Long | `tutorials/tools.ts` |
| `帧率` | 프레임 속도 | Frame Rate | `screenshots.ts`、`tutorials/tools.ts` |
| `宽度` | 폭 | Width | `tutorials/tools.ts` |
| `开始处理` | 처리 시작 | Start Processing | `tutorials/tools.ts` |
| `处理完成` | 처리 완료 | Processing Complete | `screenshots.ts`、`tutorials/tools.ts` |
| `封面帧` | 커버 프레임 | Cover Frame | `tutorials/tools.ts` |
| `声音` | 소리 | Sound | `home.ts`、`screenshots.ts`、`tutorial-index.ts`、`tutorials/platform.ts`、`tutorials/subtitles.ts`、`tutorials/tools.ts` |
| `实况质量` | 라이브 품질 | Live Photo Quality | `tutorials/tools.ts` |
| `均衡` | 평형 | Balanced | `tutorials/tools.ts` |
| `移除声音` | 소리 제거 | Remove Sound | `tutorials/tools.ts` |
| `保留声音` | 소리를 보존하다 | Keep Sound | `tutorials/tools.ts` |
| `高清` | HD | HD | `tutorials/tools.ts` |
| `原画` | 원본 그림 | Original | `tutorials/tools.ts` |
| `实况照片已保存到相册` | 사진에 저장된 라이브 사진 | Live Photo saved to Photos | `tutorials/tools.ts` |
| `确定` | 알았어 | OK | `tutorials/tools.ts` |
| `输出格式` | 출력 형식 | Output Format | `tutorials/platform.ts`、`tutorials/tools.ts` |
| `输出质量` | 출력 품질 | Output Quality | `tutorials/tools.ts` |
| `分辨率` | 해상도 | Resolution | `screenshots.ts`、`tutorials/platform.ts`、`tutorials/tools.ts` |
| `高质量` | 고품질 | High Quality | `tutorials/tools.ts` |
| `标准` | 표준 | Standard | `legal.ts`、`tutorials/tools.ts` |
| `小体积` | 작은 사이즈 | Smaller Size | `tutorials/tools.ts` |
| `原始` | 원본 | Original | `home.ts`、`legal.ts`、`tutorials/batch.ts`、`tutorials/clipboard.ts`、`tutorials/platform.ts`、`tutorials/subtitles.ts`、`tutorials/tools.ts` |
| `静音` | 음소거 | Mute | `home.ts`、`tutorials/tools.ts` |
| `编码` | 인코딩 | Codec | `tutorials/tools.ts` |
| `码率` | 코드율 | Bitrate | `tutorials/tools.ts` |
| `自动` | 자동 | Auto | `demo-captions.ts`、`home.ts`、`legal.ts`、`screenshots.ts`、`site-ui.ts`、`tutorial-index.ts`、`tutorials/batch.ts`、`tutorials/clipboard.ts`、`tutorials/platform.ts`、`tutorials/subtitles.ts`、`tutorials/tools.ts` |
| `目标大小` | 목표 크기 | Target Size | `tutorials/tools.ts` |
| `自定义码率` | 맞춤형 코드 속도 | Custom Bitrate | `tutorials/tools.ts` |
| `继续处理` | 계속 처리 | Keep Processing | `screenshots.ts`、`tutorials/tools.ts` |
| `平均分割` | 균등하게 나누기 | Even Split | `tutorials/tools.ts` |
| `选取片段` | 클립 선택 | Select Segment | `tutorials/tools.ts` |
| `裁剪方式` | 절단방법 | Trim Mode | `tutorials/tools.ts` |
| `裁剪范围` | 자르기 범위 | Trim Range | `tutorials/tools.ts` |
| `快速编辑` | 빠른 편집 | Quick Edit | `tutorials/tools.ts` |
| `添加视频` | 동영상 추가 | Add Video | `screenshots.ts`、`tutorials/tools.ts` |
| `选择拼接视频` | 접합 동영상 선택 | Select Videos to Stitch | `tutorials/tools.ts` |
| `从下载列表选择` | Select from download list | Choose from Downloads | `tutorials/tools.ts` |
| `正在处理视频` | 동영상 처리 중 | Processing video | `tutorials/tools.ts` |
| `完成时通知我` | 완료되면 알림 | Notify me when complete | `tutorials/tools.ts` |
| `取消` | 취소 | Cancel | `legal.ts`、`screenshots.ts`、`tutorials/tools.ts` |
| `已保存到相册` | 사진에 저장됨 | Saved to Photos | `tutorials/tools.ts` |
| `总段数` | 총 세그먼트 수 | Total Segments | `tutorials/tools.ts` |
| `A 开始` | 시작 | Start with A | `demo-captions.ts`、`home.ts`、`screenshots.ts`、`site-ui.ts`、`tutorials/batch.ts`、`tutorials/clipboard.ts`、`tutorials/platform.ts`、`tutorials/subtitles.ts`、`tutorials/tools.ts` |
| `固定时长` | 고정 기간 | Fixed Duration | `tutorials/tools.ts` |
| `B 开始` | B 시작 | Start with B | `tutorials/tools.ts` |
| `第一段音频` | 첫 번째 오디오 | First Segment Audio | `tutorials/tools.ts` |
| `横向数量` | 수평 수량 | Columns | `tutorials/tools.ts` |
| `纵向数量` | 수직 수량 | Rows | `tutorials/tools.ts` |
| `原视频尺寸` | 원본 동영상 크기 | Original Video Size | `tutorials/tools.ts` |
| `导出尺寸` | 차원 내보내기 | Export Size | `tutorials/tools.ts` |
| `每格保持原尺寸` | 각 그리드는 원래 크기를 유지합니다. | Keep Each Tile Original Size | `tutorials/tools.ts` |
| `留边适配` | 적응을 위해 여백을 남겨두세요 | Fit | `tutorials/tools.ts` |
| `裁剪填满` | 채우기 위해 자르기 | Fill Crop | `tutorials/tools.ts` |
| `画布比例` | 캔버스 비율 | Canvas Ratio | `home.ts`、`screenshots.ts`、`tutorials/tools.ts` |
| `布局方式` | 레이아웃 | Layout | `tutorials/tools.ts` |
| `原比例` | 원래 비율 | Original | `tutorials/tools.ts` |
| `旋转方向` | 회전 방향 | Rotation | `screenshots.ts`、`tutorials/tools.ts` |
| `左右翻转` | 좌우로 뒤집기 | H Flip | `tutorials/tools.ts` |
| `镜像方式` | 미러링 방식 | Mirror Mode | `tutorials/tools.ts` |
| `上下翻转` | 위아래로 뒤집기 | V Flip | `tutorials/tools.ts` |
| `中心翻转` | 센터 플립 | 180 | `tutorials/tools.ts` |
| `保留音频` | 오디오 유지 | Keep Audio | `tutorials/tools.ts` |
| `倒放音频` | 오디오를 거꾸로 재생 | Reverse Audio | `tutorials/tools.ts` |
| `速度倍率` | 속도 승수 | Speed | `tutorials/tools.ts` |
| `保持音调` | 피치를 유지하다 | Preserve Pitch | `tutorials/tools.ts` |
| `处理方式` | 가공방법 | Processing Mode | `tutorials/tools.ts` |
| `音量` | 볼륨 | Volume | `home.ts`、`tutorials/tools.ts` |
| `替换` | 교체하다 | Replace | `tutorials/tools.ts` |
| `淡入淡出` | 페이드 인 및 페이드 아웃 | Fade In/Out | `tutorials/tools.ts` |
| `水印类型` | 워터마크 유형 | Watermark Type | `tutorials/tools.ts` |
| `文字` | 텍스트 | Text | `home.ts`、`screenshots.ts`、`tutorials/platform.ts`、`tutorials/tools.ts` |
| `文字内容` | 텍스트 내용 | Text Content | `tutorials/tools.ts` |
| `水印位置` | 워터마크 위치 | Watermark Position | `tutorials/tools.ts` |
| `透明度` | 투명성 | Opacity | `tutorials/tools.ts` |
| `字体颜色` | 글꼴 색상 | Text Color | `tutorials/tools.ts` |
| `显示背景` | 배경 표시 | Show Background | `tutorials/tools.ts` |
| `文字描边` | 텍스트 스트로크 | Text Stroke | `tutorials/tools.ts` |
| `描边颜色` | 획 색상 | Stroke Color | `tutorials/tools.ts` |
| `单张` | 전단지 | Single | `tutorials/tools.ts` |
| `截图模式` | 스크린샷 모드 | Capture Mode | `tutorials/tools.ts` |
| `截图时间` | 스크린샷 시간 | Capture Time | `tutorials/tools.ts` |
| `导出截图` | 스크린샷 내보내기 | Export Image | `tutorials/tools.ts` |
| `智能` | 스마트 | Smart | `home.ts`、`tutorials/tools.ts` |
| `大图` | 큰 그림 | Sheet | `tutorials/tools.ts` |
| `截图预览` | 스크린샷 미리보기 | Screenshot Preview | `tutorials/tools.ts` |
| `暂无可处理的已下载视频` | 아직 처리할 다운로드된 동영상이 없습니다. | No downloaded videos available for processing | 参数、动态标签或界面入口对照 |
| `从相册视频提取音轨` | 사진 동영상에서 오디오 트랙 추출 | Extract audio from Photos video | `tutorials/tools.ts` |
| `音频来源` | 오디오 소스 | Audio Source | `screenshots.ts`、`tutorials/tools.ts` |
| `未选择` | 선택되지 않음 | Not Selected | `tutorials/tools.ts` |
| `全选` | 모두 선택 | Select All | `tutorials/batch.ts`、`tutorials/subtitles.ts` |
| `subtitle_extracting` | 자막 추출 중… | Extracting captions… | `tutorials/subtitles.ts` |
| `subtitle_select_all` | 모두 선택 | Select all | `tutorials/batch.ts`、`tutorials/subtitles.ts` |
| `subtitle_export_count` | 자막 내보내기(%ld) | Export captions (%ld) | 参数、动态标签或界面入口对照 |
| `subtitle_format` | 자막 형식 | Caption format | `tutorials/subtitles.ts` |
| `subtitle_format_value` | 형식: %@ | Format: %@ | 参数、动态标签或界面入口对照 |
| `post_text_export_destination` | 내보낼 위치 | Export to | 参数、动态标签或界面入口对照 |
| `post_text_save_files` | 파일에 저장 | Save to Files | `home.ts`、`screenshots.ts`、`site-ui.ts`、`tutorials/subtitles.ts`、`tutorials/tools.ts` |
| `右转90` | 90도로 우회전 | Rotate Right 90 | `tutorials/tools.ts` |
| `左转90` | 90도로 좌회전 | Rotate Left 90 | `tutorials/tools.ts` |
| `模糊%@` | 블러 %@ | Blur %@ | 参数、动态标签或界面入口对照 |
| `双联%@` | 더블 %@ | Double %@ | 参数、动态标签或界面入口对照 |
| `双联对称%@` | 이중 대칭 %@ | Symmetric Double %@ | 参数、动态标签或界面入口对照 |
| `三联%@` | 싼리안 %@ | Triple %@ | 参数、动态标签或界面入口对照 |
| `三联模糊%@` | 트리플 블러 %@ | Triple Blur %@ | 参数、动态标签或界面入口对照 |
| `左右对称` | 대칭 | Side Sym | `screenshots.ts`、`tutorials/tools.ts` |
| `上下对称` | 상하 대칭 | Top Sym | `tutorials/tools.ts` |
| `中心对称` | 중심대칭 | Center Sym | `tutorials/tools.ts` |
| `subtitle_tab_single` | 동영상 | Video | `common.ts`、`demo-captions.ts`、`errors.ts`、`home.ts`、`landing.ts`、`legal.ts`、`screenshots.ts`、`site-ui.ts`、`tutorial-index.ts`、`tutorials/batch.ts`、`tutorials/clipboard.ts`、`tutorials/platform.ts`、`tutorials/subtitles.ts`、`tutorials/tools.ts` |
| `subtitle_tab_profile` | 일괄 | Batch | `demo-captions.ts`、`home.ts`、`screenshots.ts`、`site-ui.ts`、`tutorial-index.ts`、`tutorials/batch.ts`、`tutorials/clipboard.ts`、`tutorials/platform.ts`、`tutorials/tools.ts` |
| `字体大小` | 글꼴 크기 | Text Size | `tutorials/tools.ts` |
| `添加时间戳` | 타임스탬프 추가 | Add Timestamp | `tutorials/tools.ts` |
| `%@ 当前视频` | %@ 현재 동영상 | %@ Current Video | 参数、动态标签或界面入口对照 |
| `音频淡入淡出` | 오디오 페이드 인 및 아웃 | Audio Fade | 参数、动态标签或界面入口对照 |
