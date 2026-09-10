# 德语（de）本地化交付记录

## 来源与约定

- 语言：通用德语，菜单名 `Deutsch`，正文使用 `du` 和直接的操作说明；品牌为 `ClipDock`，不新增德国价格或商店地区假设。
- 网站源提交：`aba1d30235b0b0fd3b0ade32d856d41d9aa7a276`。在当前 `main` 工作区完成，开始时工作区干净。
- App 源提交：`5fc01b2572c2b405701f560935f797867c932043`，开始时工作区干净。只读核对 `ResourceDownloader/de.lproj/Localizable.strings`、`InfoPlist.strings`，并检查 `DIYResourceExtractVC.m`、`DIYSubtitleExtractVC.m` 的实际 key。没有修改、启动或编译 App。
- 教程结构以当前公共结构、类型和注册表为准，功能描述和限制以当前简中为主要依据，结合英文原图与 App 德语值逐项翻译。法律正文翻译当前站内简中版本，保留日期 `2026-09-09`、条款范围和外链，不新增地区法律条款。
- 路径：`/de/`、`/de/articles/`、`/de/articles/<原 slug>/`、`/de/privacy/`、`/de/terms/`。HTML / hreflang 为 `de`，OG 为 `de_DE`，方向为 `ltr`。
- 数字正文采用德语小数逗号；原始示例 URL、文件名、时间码、像素尺寸和字幕格式名称保留。原图中的 `背景音乐版`、`米娜舞蹈-大摆锤` 作为示例标题原样引用并解释。

## 完成范围

- `src/i18n/de/` 的 17 个独立文件：完整首页、导航、SEO、公共标签、控件和错误文案、分类、全部教程、图注、演示字幕和法律正文。运行时不导入其他语言正文作为回退。
- 41 篇教程：8 篇单平台、2 篇复制即下载、12 篇批量、1 篇字幕和 18 篇工具。保留 slug、分类、步骤顺序、详情/FAQ/排错数量、关联教程、示例 URL、截图 ID 与示例/验证范围。
- 178 条截图记录，教程实际使用 158 个 ID；4 段录屏共 19 条字幕（4 / 6 / 5 / 4），保留共享媒体和时间轴。
- 每篇批量教程说明免费版只能加载前 2 页，更多页面需付费 VIP。保留链接可用性、来源画质与水印、后台识别和画中画/通知权限、下载与照片保存的区别、字幕只提取已有轨道、未验证付费效果、MD5 未比较及音轨未逐段试听等限制。
- 站内隐私政策和用户协议完整翻译、互相链接并进入 sitemap。指南旧基准的外部法律跳转不适用于当前代码。
- 共享 `/404.html` 仍使用英文正文及简中、繁中首页入口；其语言菜单包含德语。`de/errors.ts` 是完整文案数据，但没有新增专属德语 404。旧 React 控件的英文默认值保持原实现。

## 注册与排版

- 接入 `locales` / `publishedLocales` / `localeMeta`、landing、common、home、catalog、legal 和 `demoCaptions` 注册表。
- 复用已有动态路由、Open Graph、canonical、hreflang、JSON-LD 和 sitemap 逻辑，不新增另一套语言列表或复制页面。
- 将已有拉丁文字的首页和教程标题样式扩展到德语，采用正常单词换行、均衡标题和适当字号、行高。
- 浏览器扫描发现法律标题 `Datenschutzerklärung` / `Nutzungsbedingungen` 及两个复合词小标题溢出。为德语法律页增加 `clamp(2rem, 5vw, 4rem)` 的 H1 字号，并按层级调整 H2/H3 字号、缩短小标题；水印教程标题改成 `Ein Wasserzeichen aus Text hinzufügen`。未使用截断、隐藏溢出或全局逐字断词处理标题。
- 页面检查纳入德语残留语言检测。新增德语测试覆盖元数据、独立正文、App 实际按钮、批量页数和会员限制、字幕功能边界、水印滑块方向、MD5/音轨验证范围及法律内链。

## App 术语疑点与处理

- 批量页面实际使用 `subtitle_tab_profile = Stapel`，而旧 key `批量 = Batch`、`批量提取 = Stapel` 同时存在。核对 `DIYResourceExtractVC.m:162` 后，下载教程和演示字幕引用 `Stapel`。截图工具的 `批量 = Batch` 则继续保留 `Batch*`。
- `资源提取 = Extraktion` 是页面名，`提取 = Extrahieren` 是动作，不能因为英文都叫 Extract 而混用。当前 App 的 `已完成 = Abgeschlossen` 和 `下载中 = Herunterladen` 在旧英文截图中分别显示 Done 和 Active；正文明确标注对应关系。`完成 = Fertig` 只关闭结果页。
- `视频变速 = Änderung Geschwindigkeit`、`修改 MD5 = Ändern MD5`、`视频截图 = Videoaufnahme`、`封面帧 = Abdeckrahmen`、`平均分割 = Gerade Aufteilung`、`开始处理 = Start Verarbeitung` 等实际值不够自然或容易歧义。教程保留这些入口原文，标题和解释采用自然德语，分别说明速度、文件摘要、单帧导出、封面和按时间均分的含义。
- `A 开始 = Beginnen Sie mit A`、默认画质开关和下载通知开关使用 Sie；网站叙述仍统一为 du，仅逐字引用 App 标签时保留 Sie。
- `左转90 = Nach links drehen 90`、`双联对称%@ = Symmetrische doppelte %@`、`三联%@ = dreifache %@`、`三联模糊%@ = dreifache Unschärfe %@` 保留实际显示值，并通过自然说明解释方向/布局。
- `透明度 = Deckkraft` 对应不透明度，明确数值调低会变淡，未反转效果。
- 简中水印 `exampleNote` 写着 `Made by 影随存`，同篇 FAQ 写着 `Made by ClipDock`。实际查看 `public/assets/tutorials/video-tools/watermark-result-orange.webp` 后确认原图是 `Made by ClipDock`，德语按原图统一；参数图仍为 `ClipDock Demo`，保留素材与文字不同的说明。未顺手修改其他语言。

## App 术语表

以下按同一 App 原始 key 读取；英文列为当前 App 值，旧素材中的差异已在上文注明。星号是界面附加的 VIP 标记，保留原有含义。

| 概念 / App 原始 key | 德语实际值 | 英文对照 | 网站位置 |
| --- | --- | --- | --- |
| `资源提取` | Extraktion | Extract | 首页 / 下载教程 / 图注 / 字幕 |
| `网页视频` | Webvideo | Web Video | 首页 / 下载教程 / 图注 / 字幕 |
| `资源管理` | Verwaltung | Manager | 首页 / 下载教程 / 图注 / 字幕 |
| `资源处理` | Verarbeitung | Process | 工具教程 / 图注 |
| `视频` | Video | Video | 首页 / 下载教程 / 图注 / 字幕 |
| `subtitle_tab_profile` | Stapel | Batch | 字幕教程 / 轮播 / 下载分页 |
| `批量` | Batch | Batch | 工具教程 / 图注 |
| `subtitle_tab_title` | Untertitel | Subtitles | 字幕教程 / 轮播 / 下载分页 |
| `识别剪贴板链接自动填充` | Aus Zwischenablage füllen | Fill from Clipboard | 首页 / 下载教程 / 图注 / 字幕 |
| `识别剪贴板链接自动下载` | Links automatisch herunterladen | Auto-download Links | 首页 / 下载教程 / 图注 / 字幕 |
| `进入后台继续识别剪贴板自动下载` | Im Hintergrund erkennen | Detect in Background | 首页 / 下载教程 / 图注 / 字幕 |
| `后台下载完成/失败时发送通知` | Benachrichtigen Sie, wenn Hintergrund-Downloads abgeschlossen sind oder fehlschlagen | Notify When Background Downloads Complete or Fail | 首页 / 下载教程 / 图注 / 字幕 |
| `加载列表` | Liste laden | Load list | 首页 / 下载教程 / 图注 / 字幕 |
| `正在加载列表` | Liste wird geladen | Loading list | 首页 / 下载教程 / 图注 / 字幕 |
| `加载下一页` | Nächste Seite laden | Load next page | 首页 / 下载教程 / 图注 / 字幕 |
| `全选已加载` | Geladene auswählen | Select loaded | 首页 / 下载教程 / 图注 / 字幕 |
| `更换链接` | Link ändern | Change link | 首页 / 下载教程 / 图注 / 字幕 |
| `统一画质：%@` | Gemeinsame Qualität: %@ | Batch quality: %@ | 首页 / 下载教程 / 图注 / 字幕 |
| `跟随下载设置` | Download-Einstellungen verwenden | Follow download settings | 首页 / 下载教程 / 图注 / 字幕 |
| `加入下载队列` | Zur Download-Warteschlange | Add to the queue | 首页 / 下载教程 / 图注 / 字幕 |
| `等待下载` | Wartet auf Download | Queued | 首页 / 下载教程 / 图注 / 字幕 |
| `下载中` | Herunterladen | Downloading | 首页 / 下载教程 / 图注 / 字幕 |
| `已完成` | Abgeschlossen | Completed | 首页 / 下载教程 / 图注 / 字幕 |
| `失败` | Fehlgeschlagen | Failed | 首页 / 下载教程 / 图注 / 字幕 |
| `选择下载品质` | Qualität auswählen | Select Quality | 首页 / 下载教程 / 图注 / 字幕 |
| `下载设置` | Download-Einstellungen | Download Settings | 首页 / 下载教程 / 图注 / 字幕 |
| `下载完成后自动保存到相册` | Abgeschlossene Downloads automatisch in Fotos speichern | Auto-Save Completed Downloads to Photos | 首页 / 下载教程 / 图注 / 字幕 |
| `保存到相册` | In Fotos speichern | Save to Photos | 工具教程 / 图注 |
| `分享文件` | Datei teilen | Share File | 工具教程 / 图注 |
| `完成` | Fertig | Done | 工具教程 / 图注 |
| `查看任务` | Aufgabe anzeigen | View Task | 首页 / 下载教程 / 图注 / 字幕 |
| `下载` | Herunterladen | Download | 首页 / 下载教程 / 图注 / 字幕 |
| `链接提取` | Aus Link extrahieren | Extract from Link | 首页 / 下载教程 / 图注 / 字幕 |
| `提取` | Extrahieren | Extract | 首页 / 下载教程 / 图注 / 字幕 |
| `粘贴` | Einfügen | Paste | 首页 / 下载教程 / 图注 / 字幕 |
| `视频裁剪` | Video zuschneiden | Trim Video | 工具教程 / 图注 |
| `视频转码` | Video transkodieren | Transcode Video | 工具教程 / 图注 |
| `视频拼接` | Videos zusammenfügen | Stitch Videos | 工具教程 / 图注 |
| `交叉拼接` | Interleave | Interleave | 工具教程 / 图注 |
| `分段宫格` | Segmentraster | Segment Grid | 工具教程 / 图注 |
| `尺寸/画布` | Größe/Leinwand ändern | Resize / Canvas | 工具教程 / 图注 |
| `视频旋转` | Video drehen | Rotate Video | 工具教程 / 图注 |
| `视频镜像` | Video spiegeln | Mirror Video | 工具教程 / 图注 |
| `视频变速` | Änderung Geschwindigkeit | Change Speed | 工具教程 / 图注 |
| `提取音频` | Audio extrahieren | Extract Audio | 工具教程 / 图注 |
| `音频处理` | Audiobearbeitung | Audio Editing | 工具教程 / 图注 |
| `音视频合并` | Audio und Video zusammenführen | Merge Audio and Video | 工具教程 / 图注 |
| `视频倒放` | Video umkehren | Reverse Video | 工具教程 / 图注 |
| `添加水印` | Wasserzeichen hinzufügen | Add Watermark | 工具教程 / 图注 |
| `视频转 GIF` | Video in GIF | Video to GIF | 工具教程 / 图注 |
| `视频转实况` | Video in Live Photo | Video to Live Photo | 工具教程 / 图注 |
| `视频截图` | Videoaufnahme | Video Capture | 工具教程 / 图注 |
| `修改 MD5` | Ändern MD5 | Change MD5 | 工具教程 / 图注 |
| `推荐组合` | Voreinstellungen | Presets | 工具教程 / 图注 |
| `截取范围` | Clipbereich | Clip Range | 工具教程 / 图注 |
| `处理参数` | Verarbeitungsoptionen | Processing Options | 工具教程 / 图注 |
| `开始处理` | Start Verarbeitung | Start Processing | 工具教程 / 图注 |
| `subtitle_select_all` | Alle auswählen | Select all | 字幕教程 / 轮播 / 下载分页 |
| `subtitle_format` | Untertitelformat | Caption format | 字幕教程 / 轮播 / 下载分页 |
| `subtitle_format_value` | Format: %@ | Format: %@ | 字幕教程 / 轮播 / 下载分页 |
| `subtitle_export_count` | Untertitel exportieren (%ld) | Export captions (%ld) | 字幕教程 / 轮播 / 下载分页 |
| `post_text_export_destination` | Exportieren nach | Export to | 字幕教程 / 轮播 / 下载分页 |
| `post_text_save_files` | In Dateien sichern | Save to Files | 字幕教程 / 轮播 / 下载分页 |
| `A 开始` | Beginnen Sie mit A | Start with A | 工具教程 / 图注 |
| `B 开始` | Beginnen Sie mit B | Start with B | 工具教程 / 图注 |
| `上下翻转` | V Flip | V Flip | 工具教程 / 图注 |
| `中心翻转` | 180 | 180 | 工具教程 / 图注 |
| `从下载列表选择` | Aus Downloads auswählen | Choose from Downloads | 工具教程 / 图注 |
| `从文件选择` | Aus Dateien auswählen | Choose from Files | 工具教程 / 图注 |
| `从相册视频提取音轨` | Audio extrahieren aus Fotovideo | Extract audio from Photos video | 工具教程 / 图注 |
| `从系统相册选择` | Aus Fotos auswählen | Choose from Photos | 工具教程 / 图注 |
| `保持音调` | Pitch beibehalten | Preserve Pitch | 工具教程 / 图注 |
| `保留声音` | Ton behalten | Keep Sound | 工具教程 / 图注 |
| `保留音频` | Audio behalten | Keep Audio | 工具教程 / 图注 |
| `倒放音频` | Umgekehrtes Audio | Reverse Audio | 工具教程 / 图注 |
| `分辨率` | Auflösung | Resolution | 工具教程 / 图注 |
| `单张` | Einzelne | Single | 工具教程 / 图注 |
| `原始` | Original | Original | 工具教程 / 图注 |
| `原比例` | Original | Original | 工具教程 / 图注 |
| `原画` | Original | Original | 工具教程 / 图注 |
| `原视频尺寸` | Originalvideogröße | Original Video Size | 工具教程 / 图注 |
| `取消` | Abbrechen | Cancel | 工具教程 / 图注 |
| `固定时长` | Feste Dauer | Fixed Duration | 工具教程 / 图注 |
| `图片` | Bild | Image | 工具教程 / 图注 |
| `均衡` | Ausgewogen | Balanced | 工具教程 / 图注 |
| `声音` | Sound | Sound | 工具教程 / 图注 |
| `处理完成` | Verarbeitung abgeschlossen | Processing Complete | 工具教程 / 图注 |
| `处理方式` | Verarbeitungsmodus | Processing Mode | 工具教程 / 图注 |
| `大图` | Kontaktabzug | Sheet | 工具教程 / 图注 |
| `字体颜色` | Textfarbe | Text Color | 工具教程 / 图注 |
| `完成时通知我` | Nach Abschluss benachrichtigen | Notify me when complete | 工具教程 / 图注 |
| `实况照片已保存到相册` | Live Photo in Fotos gesichert | Live Photo saved to Photos | 工具教程 / 图注 |
| `实况质量` | Live Photo-Qualität | Live Photo Quality | 工具教程 / 图注 |
| `宽度` | Breite | Width | 工具教程 / 图注 |
| `导出尺寸` | Exportgröße | Export Size | 工具教程 / 图注 |
| `导出截图` | Bild exportieren | Export Image | 工具教程 / 图注 |
| `封面帧` | Abdeckrahmen | Cover Frame | 工具教程 / 图注 |
| `小体积` | Kleinere Größe | Smaller Size | 工具教程 / 图注 |
| `左右翻转` | H Flip | H Flip | 工具教程 / 图注 |
| `已保存到相册` | In Fotos gespeichert | Saved to Photos | 工具教程 / 图注 |
| `布局方式` | Layout | Layout | 工具教程 / 图注 |
| `帧率` | Bildrate | Frame Rate | 工具教程 / 图注 |
| `平均分割` | Gerade Aufteilung | Even Split | 工具教程 / 图注 |
| `快速编辑` | Schnellbearbeitung | Quick Edit | 工具教程 / 图注 |
| `总段数` | Segmente gesamt | Total Segments | 工具教程 / 图注 |
| `截图时间` | Aufnahmezeit | Capture Time | 工具教程 / 图注 |
| `截图模式` | Aufnahmemodus | Capture Mode | 工具教程 / 图注 |
| `截图预览` | Screenshot-Vorschau | Screenshot Preview | 工具教程 / 图注 |
| `描边颜色` | Strichfarbe | Stroke Color | 工具教程 / 图注 |
| `文字` | Text | Text | 工具教程 / 图注 |
| `文字内容` | Textinhalt | Text Content | 工具教程 / 图注 |
| `文字描边` | Textstrich | Text Stroke | 工具教程 / 图注 |
| `旋转方向` | Rotation | Rotation | 工具教程 / 图注 |
| `显示背景` | Hintergrund anzeigen | Show Background | 工具教程 / 图注 |
| `智能` | Intelligent | Smart | 工具教程 / 图注 |
| `暂无可处理的已下载视频` | Keine heruntergeladenen Videos zur Verarbeitung verfügbar | No downloaded videos available for processing | 工具教程 / 图注 |
| `替换` | Ersetzen | Replace | 工具教程 / 图注 |
| `未选择` | Nicht ausgewählt | Not Selected | 工具教程 / 图注 |
| `标准` | Standard | Standard | 工具教程 / 图注 |
| `横向数量` | Spalten | Columns | 工具教程 / 图注 |
| `正在处理视频` | Video wird verarbeitet | Processing video | 工具教程 / 图注 |
| `每格保持原尺寸` | Jede Kachel in Originalgröße behalten | Keep Each Tile Original Size | 工具教程 / 图注 |
| `水印位置` | Wasserzeichenposition | Watermark Position | 工具教程 / 图注 |
| `水印类型` | Wasserzeichentyp | Watermark Type | 工具教程 / 图注 |
| `流畅` | Glatt | Smooth | 工具教程 / 图注 |
| `淡入淡出` | Ein-/Ausblendung | Fade In/Out | 工具教程 / 图注 |
| `添加视频` | Video hinzufügen | Add Video | 工具教程 / 图注 |
| `清晰` | Klar | Clear | 工具教程 / 图注 |
| `画布比例` | Canvas-Verhältnis | Canvas Ratio | 工具教程 / 图注 |
| `留边适配` | Anpassen | Fit | 工具教程 / 图注 |
| `目标大小` | Zielgröße | Target Size | 工具教程 / 图注 |
| `码率` | Bitrate | Bitrate | 工具教程 / 图注 |
| `确定` | OK | OK | 工具教程 / 图注 |
| `移除声音` | Sound entfernen | Remove Sound | 工具教程 / 图注 |
| `第一段音频` | Erstes Segment-Audio | First Segment Audio | 工具教程 / 图注 |
| `纵向数量` | Zeilen | Rows | 工具教程 / 图注 |
| `继续处理` | Verarbeitung fortsetzen | Keep Processing | 工具教程 / 图注 |
| `编码` | Codec | Codec | 工具教程 / 图注 |
| `自动` | Auto | Auto | 工具教程 / 图注 |
| `自定义` | Benutzerdefiniert | Custom | 工具教程 / 图注 |
| `自定义码率` | Benutzerdefinierte Bitrate | Custom Bitrate | 工具教程 / 图注 |
| `裁剪填满` | Füllausschnitt | Fill Crop | 工具教程 / 图注 |
| `裁剪方式` | Zuschneidemodus | Trim Mode | 工具教程 / 图注 |
| `裁剪范围` | Trimmbereich | Trim Range | 工具教程 / 图注 |
| `输出格式` | Ausgabeformat | Output Format | 工具教程 / 图注 |
| `输出质量` | Ausgabequalität | Output Quality | 工具教程 / 图注 |
| `选取片段` | Segment auswählen | Select Segment | 工具教程 / 图注 |
| `选择拼接视频` | Videos zum Zusammenfügen auswählen | Select Videos to Stitch | 工具教程 / 图注 |
| `选择视频` | Video auswählen | Select Video | 工具教程 / 图注 |
| `透明度` | Deckkraft | Opacity | 工具教程 / 图注 |
| `速度倍率` | Geschwindigkeit | Speed | 工具教程 / 图注 |
| `镜像方式` | Spiegelmodus | Mirror Mode | 工具教程 / 图注 |
| `长片段` | Lang | Long | 工具教程 / 图注 |
| `静音` | Stummschalten | Mute | 工具教程 / 图注 |
| `音量` | Lautstärke | Volume | 工具教程 / 图注 |
| `音频来源` | Audioquelle | Audio Source | 工具教程 / 图注 |
| `高清` | HD | HD | 工具教程 / 图注 |
| `高质量` | Hohe Qualität | High Quality | 工具教程 / 图注 |
| `左转90` | Nach links drehen 90 | Rotate Left 90 | 首页 / 下载教程 / 图注 / 字幕 |
| `右转90` | Um 90° nach rechts drehen | Rotate Right 90 | 首页 / 下载教程 / 图注 / 字幕 |
| `双联%@` | Doppelt %@ | Double %@ | 首页 / 下载教程 / 图注 / 字幕 |
| `双联对称%@` | Symmetrische doppelte %@ | Symmetric Double %@ | 首页 / 下载教程 / 图注 / 字幕 |
| `三联%@` | dreifache %@ | Triple %@ | 首页 / 下载教程 / 图注 / 字幕 |
| `三联模糊%@` | dreifache Unschärfe %@ | Triple Blur %@ | 首页 / 下载教程 / 图注 / 字幕 |
| `模糊%@` | Unschärfe %@ | Blur %@ | 首页 / 下载教程 / 图注 / 字幕 |
| `%@ 当前视频` | %@ Aktuelles Video | %@ Current Video | 首页 / 下载教程 / 图注 / 字幕 |
| `已添加 %lu 个，共 %lu 个视频` | %lu hinzugefügt, %lu Videos insgesamt | %lu added, %lu videos total | 首页 / 下载教程 / 图注 / 字幕 |
| `已添加 %lu 段` | %lu Clips hinzugefügt | %lu clips added | 首页 / 下载教程 / 图注 / 字幕 |
| `第 %ld 段` | Clip %ld | Clip %ld | 首页 / 下载教程 / 图注 / 字幕 |
| `* 表示 VIP 功能` | * weist auf eine VIP-Funktion hin | * indicates a VIP feature | 首页 / 下载教程 / 图注 / 字幕 |

## 验证结果

检查日期：2026-09-10。所有下列命令退出状态均为 0。

| 检查 | 结果 |
| --- | --- |
| `npm run check:i18n` | 12 项通过，覆盖全部 8 种已发布语言及新增德语边界检查 |
| `npx tsc --noEmit` | 通过 |
| `npm run build` | 通过，生成 361 页，其中包含共享 404；45 个德语页面完整生成 |
| `npm run build:production` | 通过，生成 361 页、360 个 sitemap URL；两端 CDN 各 526 个素材清单一致，保持版本 `c5dcf79585974e0e` |
| `python3 scripts/verify-site.py` | 361 页、360 个 sitemap URL、24,694 个本地引用，0 错误 |
| `python3 scripts/verify-locales.py` | 360 个本地化页面，8 种语言各 41 篇教程，0 错误 |
| `node --test tests/videoRecovery.test.mjs` | 4 项通过 |
| `git diff --check` | 通过 |
| `node scripts/export-copy-review.cjs de` | 已导出并检查生效文案；保留原图标题、品牌、格式和文件名，未发现其他整句源语言残留 |

额外检查实际生成的 JSON-LD：首页 `MobileApplication` URL 为 `/de/`，FAQ 为德语；教程 `Article` 的 `headline`、`inLanguage: de` 和面包屑为德语。发布列表、对应文章路由、自引用 canonical、完整双向 hreflang、x-default、HTML lang/dir、OG locale、本地媒体引用、法律正文和 sitemap 由全站脚本检查。共享产品评分、价格及系统要求仍由原共享数据提供。

## 浏览器与视觉检查

- 工具：agent-browser 0.37.1，Headless Chromium 153.0.0.0。预览由本工作区 `npm run preview` 提供，地址为 `http://127.0.0.1:4340/de/`；4337–4339 已占用，实际验证使用 4340。
- 对首页、教程列表、41 篇教程、隐私和条款共 45 页，在 375、390、768、1024、1440px 五种宽度执行浏览器 DOM 扫描，共 225 个组合。检查页面宽度、全部 H1/H2/H3、正文、图注、按钮及摘要的横向溢出，修复后全部通过。对应记录：`/tmp/clipdock-de-work/browser-audit-final.json`。
- 旧语言回归：其余 7 种语言的首页和水印教程，以及共享 404，在 375 和 1440px 共 30 个组合通过扫描。记录：`/tmp/clipdock-de-work/browser-regression.json`。
- 实际打开并检查桌面/手机语言菜单和手机导航。德语水印教程 → English → Deutsch 保留同一 slug；404 的桌面菜单可进入德语首页。
- 四段实际视频共 19 个字幕时间区间逐一定位，德语字幕与注册内容相同；每段验证开始播放和暂停，共 27 项通过。记录：`/tmp/clipdock-de-work/media-check.json`。
- 用临时不存在的媒体 URL 触发真实加载失败，观察德语错误文字 `Das Video lässt sich gerade nicht abspielen` 与 `Erneut abspielen`。恢复原地址并点击重试后面板隐藏、媒体 readyState 为 4。测试只改变浏览器会话，之后重载页面，不修改媒体文件。
- 字幕轮播的五个步骤标签为德语；点击最后一步可显示导出菜单说明，暂停后标签为 `Automatischen Wechsel starten` / `Abspielen`，继续后为 `Automatischen Wechsel anhalten` / `Pause`。
- 实际查看代表性桌面/手机截图，包括首页、18 个工具卡片、平台展开列表、教程目录、水印长标题、字幕与法律页。全部教程的标题、步骤、相关卡片和图注经过 DOM 扫描；并非逐页逐图进行人工视觉审校。

截图保存于 `/tmp/clipdock-de-work/screenshots/`，属于本机验收材料，未加入仓库，系统清理临时目录后需重新生成：

| 文件 | 内容 |
| --- | --- |
| `home-hero-1440.png` / `home-hero-390.png` | 桌面和手机首页 |
| `home-1440.png` | 滚动触发各功能区后保存的完整首页 |
| `tools-1440.png` / `tools-bottom-1440.png` | 全部 18 个工具卡片 |
| `menu-390.png` / `menu-404-1440.png` | 手机语言菜单及共享 404 桌面菜单 |
| `platforms-390.png` | 展开的支持平台列表 |
| `articles-375.png` | 教程列表首页和分类 |
| `watermark-375.png` | 修正后的长标题教程 |
| `privacy-375.png` | 修正后的法律页标题层级 |
| `subtitles-375.png` | 字幕轮播和德语播放入口 |
| `video-error-375.png` | 德语媒体错误与重试入口 |

## 交付状态与范围限制

- 已在构建列表和站内导航启用德语。
- 已完成本地与正式构建验收，已更新 `docs/localization.md` 的语言现状。发布结果记录于本文和 `docs/deployment.md`。
- 没有修改、编译或启动 ResourceDownloader；App Store 元数据及地区链接未修改。
- 共享 404 正文没有变为德语；德语 `errors.ts` 不代表已接入独立 404 路由。
- 本次未进行德语母语者人工审校、真机 Safari/iOS 验收或重新实测 App 下载/工具。原图和录屏保持原语言，教程内原有示例限制完整保留。
- 目前未发现未解决的注册、构建、结构缺失或所检查宽度下的排版错误。App 现有德语术语疑点详列于上文，按实际入口引用，未修改 App。
