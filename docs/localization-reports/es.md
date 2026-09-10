# 西班牙语本地化交付记录

## 来源与约定

- 目标：跨地区西班牙语 `es`，原生名称 `Español`；HTML / hreflang 均为 `es`，Open Graph 为 `es_ES`，方向 `ltr`。OG 的地区格式仅用于该字段，不将网站限定为西班牙地区，也不使用 `es-419`。
- 路径：`/es/`、`/es/articles/`、`/es/articles/<原 slug>/`、`/es/privacy/`、`/es/terms/`。保持手动切换，不按浏览器语言强制跳转。
- 官网源版本：`b24dd90702a7b240a3f2f17ff1ad8a68b3ddd7f2`，`main`；开始时工作区干净。
- App 源版本：`5fc01b2572c2b405701f560935f797867c932043`；开始时工作区干净。只读对照 `ResourceDownloader/es.lproj/Localizable.strings`、`InfoPlist.strings` 及简中、英文同 key。未修改或编译 App。
- 保留品牌 `ClipDock`；用 tú 称呼和直接操作式说明。正文统一 `vídeo`，系统应用写 `Fotos` / `Archivos`；App 标签中的 `video/vídeo`、大小写、语气和既有英文值按实际显示保留。数字可用西语小数逗号，时间码、像素、URL、文件名和格式标识不改含义。
- 结构按当前注册表，功能事实以简中修订为主，英文和实际媒体作为补充。逐条翻译并检查功能边界，复用真实截图与录屏；不生成西语截图。首次重要操作附英文截图名称。

## 完成范围

- 首页全部文案、5 个功能区、18 个工具、FAQ、平台说明、下载入口、公共 UI、元数据与无障碍文字。
- 41 篇教程：8 篇单平台、2 篇剪贴板、12 篇批量、1 篇字幕、18 篇工具。保留 slug、分类、相关文章、所有步骤和细节顺序、FAQ / 排错条数、示例 URL、示例说明及验证边界。
- 178 组截图标题和备注，其中教程使用 158 个 ID；4 段录屏共 19 条字幕，保留原路径和共用时间轴。
- 两页站内法律正文完整翻译，保留既有生效日期 `2026-09-09`、条款范围和外部参考链接，无新增地区条款。当前站内法律页已取代指南旧基准中的外链跳转页；西语法律页正确进入 sitemap，正文内部互链使用 `/es/`。
- 独立西语目录，不在运行时回退其他语言正文。语言菜单、首页、教程、法律和视频字幕注册均已接入，`publishedLocales` 已启用完整构建。
- 保留来源可用性、权限、高清和水印依赖来源、画中画及通知条件、下载与相册状态区分、字幕仅提取已有轨道、免费与 VIP 范围。每篇批量教程明确写出免费版最多加载前 2 页。
- 共享 `/404.html` 仍是英文正文和简、繁中首页入口；其语言菜单包含西语。`es/errors.ts` 已译，但当前托管路由不生成独立西语 404。

## 排版和公共接入

- 复用当前元数据驱动的 OG、hreflang、动态路由和 sitemap；仅新增西语注册，保留五种已有语言。
- 西语首页主标题缩短为动作短句；主标题、功能标题、工具卡片按词均衡换行，调整适合拉丁文字的字号和行高，不截断或强制拆词。
- 教程复用英文按空格换行和均衡标题规则；西语正文的长 URL 允许必要的应急折行，标题和按钮保持完整词语。
- 媒体无障碍名称在功能名与演示标签间保留分隔符。
- 扩展 `verify-locales.py` 检查西语源语言残留；新增西语测试覆盖实际 App 入口、全部批量教程的 2 页限制、独立正文及法律页。既有全语言结构、字幕数量和时间边界校验继续生效。

## App 文案与素材疑点

- `识别剪贴板链接自动下载` 实际为 `Enlaces de descarga automática`，不能直观表达“自动下载剪贴板链接”；操作中保留这个名字，并解释实际行为。
- `从文件选择` 为 `Elija entre archivos`、`选取片段` 为 `Selecciona Segmento`、`选择下载品质` 为 `Seleccione Calidad`，存在语气与大小写混用；不擅自替换入口。
- `封面帧` 为 `Marco de portada`，容易理解成“边框”，正文明确它是静止封面帧。`预计处理后时长：%@` 为 `Duración estimada del procesamiento: %@`，容易理解成处理耗时，正文说明这里表示结果视频时长。
- `左右翻转` / `上下翻转` / `中心翻转` 的值仍是 `H Flip` / `V Flip` / `180`。`左右对称` / `上下对称` / `中心对称` 为 `Simulación lateral` / `Simulación superior` / `Simulación central`，正文按名称解释对称效果。
- `尺寸/画布` 为 `Cambiar el tamaño/lienzo`、`裁剪填满` 为 `Relleno de recorte`，沿用入口并解释操作效果；`视频裁剪`、`视频拼接`、`视频旋转`、`视频截图` 中的 `video/videos` 无重音，按 App 保留。
- 水印参数 `透明度` 的西语实际值是 `Opacidad`，明确数值调低后变淡，保留默认 75% 与 VIP 限制。
- 检查实际 `watermark-result-orange.webp`：水印为 `Made by ClipDock`，故西语示例说明引用该原文（简中示例说明中的 `Made by 影随存` 与原图不符）。其他语言未改写。
- 原始 Bilibili 素材标题 `背景音乐版`、`米娜舞蹈-大摆锤` 保留引用；残留扫描仅豁免这两个完整标题。

## 验证

验收日期：2026-09-10。

| 检查 | 结果 |
| --- | --- |
| `npm run check:i18n` | 10 项通过，覆盖全部 6 种已发布语言。 |
| `npx tsc --noEmit` | 通过，无诊断。 |
| `npm run build` | 通过，生成 271 页，包括共享 404。 |
| `npm run build:production` | 发布前通过：沿用 `c5dcf79585974e0e`，Vercel 与腾讯云两端各 526 个素材校验一致，生成 271 页；全站与六种语言检查无错误。 |
| `python3 scripts/verify-site.py` | 通过，271 页、270 条 sitemap URL、16,906 个本地引用，无错误。 |
| `python3 scripts/verify-locales.py` | 通过，270 个本地化页面，每种语言 41 篇教程；lang / dir / OG、canonical、双向 hreflang、自身与 x-default、正文语言、法律页及 sitemap 均通过。 |
| `node --test tests/videoRecovery.test.mjs` | 4 项通过。 |
| `git diff --check` | 通过。 |
| `node scripts/export-copy-review.cjs es` | 导出有效文案并通读；临时快照 `/tmp/clipdock-es/review.json`。 |
| 数值与结构对照 | 所有教程字段、数组和顺序与简中一致。数值差异均已复核：补充各批量教程的 2 页限制、数字译为序数词、合并重复出现的数值或技术名；未改变数值含义、URL、格式、时间码和占位符。 |
| JSON-LD / Twitter | 41 篇 Article 均为 `inLanguage: es`、西语标题描述和自身 URL；首页 MobileApplication / FAQPage 使用西语内容。45 页 Twitter 标题描述存在。教程列表及法律页沿用现有模板，不新增 JSON-LD。 |

## 浏览器覆盖与截图

- 工具：agent-browser 0.37.1，Headless Chrome 153，桌面浏览器模拟视口。使用当前工作区 `dist`；初始静态布局服务为 `http://127.0.0.1:4337`，媒体和最终交互使用支持 Range 请求的 Astro preview `http://127.0.0.1:4338`。
- `375 / 390 / 768 / 1024 / 1440` 像素：逐页扫描西语首页、教程列表、全部 41 篇教程及两页法律正文，共 225 次检查。检查全部主标题、步骤标题、相关卡片、图注、按钮及文档横向尺寸，未发现溢出。最终修改后的首页、镜像和变速教程又在 5 个宽度复查。
- 原有英、简中、繁中、日、韩首页和转码文章，在 375 和 1440 像素共 20 次回归检查，无溢出。
- 手机和桌面语言菜单均从西语文章切到其他 5 种语言再返回，保留 `transcode-video-iphone` slug；移动导航、6 个 FAQ、2 个平台展开列表可用。
- 四段 feature 录屏的全部 19 个字幕时间点逐条匹配有效西语文案；首页四个演示按钮切换视频与字幕正常。字幕图文轮播第 5 步、暂停和恢复标签正常。
- 在浏览器中临时使用不存在的本地视频地址，确认出现西语失败提示和重试按钮；恢复真实素材并点击重试后正常播放，错误面板隐藏。未修改媒体文件。
- 共享 404 的英文正文、简繁中首页入口和包含西语的语言导航均已检查。
- 实际查看了[手机首页](es/home-375.png)、[桌面首页](es/home-1440.png)、[移动语言菜单](es/language-menu-375.png)、[教程列表](es/tutorial-index-375.png)、[手机转码标题](es/transcode-title-375.png)、[转码参数](es/transcode-options-375.png)、[长标题](es/long-title-375.png)、[工具区](es/tools-1440.png)、[字幕区](es/subtitles-1440.png)、[错误提示](es/video-retry-375.png)、[信任区](es/trust-1440.png)和[下载区](es/download-1440.png)。[完整桌面页面](es/home-full-1440.png)使用网站已有的减少动态效果样式截图。
- 可复核的视口、路由、字幕、菜单往返、错误重试和结构化数据结果保存在 [verification.json](es/verification.json)。
- 自动扫描不能证明每句翻译自然；未经过西语母语者或法律专业人员审校，也未在真实 iPhone / iPad 的 Safari 上验证。原始媒体的英文及其他语言保持不变，App Store 资料和外部 Apple 页面不属于本次本地化范围。


## 交付状态

- 已在构建中启用。
- 实现和本地验收已完成；用户已于 2026-09-10 授权提交并部署，按现有 `main` 推送流程由 GitHub Actions 发布。实际提交与上线验收结果另记于下方。
- 未进行母语者审校；浏览器检查覆盖范围见上文。App 内媒体处理效果沿用已有示例证据，没有重新运行 App 测试。

## 术语表

以原始 key 对齐，不通过英文同名按钮猜测。英文列为当前 App 同 key 值；旧配图中的 `Active` / `Done` / `Add to queue` 等名称在教程内按实际配图对照，不能将状态“已完成”和动作“完成”混为一项。

| 概念 / App 原始 key | App 西语实际值 | 英文同 key 值 | 网站使用位置 |
| --- | --- | --- | --- |
| `复制链接` | Copiar enlace | Copy Link | `demo-captions.ts`、`tutorials/batch.ts`、`tutorials/clipboard.ts`、`tutorials/platform.ts` |
| `提取` | Extraer | Extract | `demo-captions.ts`、`tutorials/platform.ts`、`tutorials/subtitles.ts` |
| `资源管理` | Gestión | Manager | `demo-captions.ts`、`home.ts`、`screenshots.ts`、`tutorials/batch.ts`、`tutorials/clipboard.ts`、`tutorials/platform.ts` |
| `识别剪贴板链接自动下载` | Enlaces de descarga automática | Auto-download Links | `demo-captions.ts`、`home.ts`、`tutorials/clipboard.ts` |
| `进入后台继续识别剪贴板自动下载` | Detectar en segundo plano | Detect in Background | `demo-captions.ts`、`home.ts`、`tutorials/clipboard.ts` |
| `subtitle_tab_profile` | Lote | Batch | `demo-captions.ts`、`screenshots.ts`、`tutorials/batch.ts`、`tutorials/platform.ts`、`tutorials/tools.ts` |
| `加载列表` | Cargar lista | Load list | `demo-captions.ts`、`tutorials/batch.ts` |
| `网页视频` | Vídeo web | Web Video | `home.ts` |
| `已完成` | Completadas | Completed | `home.ts`、`tutorials/batch.ts`、`tutorials/platform.ts` |
| `保存到相册` | Guardar en Fotos | Save to Photos | `home.ts`、`tutorials/batch.ts`、`tutorials/platform.ts`、`tutorials/tools.ts` |
| `下载设置` | Configuración de descarga | Download Settings | `home.ts`、`tutorials/batch.ts`、`tutorials/clipboard.ts`、`tutorials/platform.ts` |
| `下载完成后自动保存到相册` | Guardar automáticamente las descargas completadas en Fotos | Auto-Save Completed Downloads to Photos | `home.ts`、`tutorials/batch.ts`、`tutorials/platform.ts` |
| `视频转 GIF` | Vídeo a GIF | Video to GIF | `screenshots.ts`、`tutorials/tools.ts` |
| `视频转实况` | Vídeo a Live Photo | Video to Live Photo | `screenshots.ts`、`tutorials/tools.ts` |
| `视频转码` | Transcodificar vídeo | Transcode Video | `screenshots.ts`、`tutorials/tools.ts` |
| `视频裁剪` | Recortar video | Trim Video | `screenshots.ts`、`tutorials/tools.ts` |
| `交叉拼接` | Intercalado | Interleave | `screenshots.ts`、`tutorials/tools.ts` |
| `分段宫格` | Cuadrícula de segmentos | Segment Grid | `screenshots.ts`、`tutorials/tools.ts` |
| `尺寸/画布` | Cambiar el tamaño/lienzo | Resize / Canvas | `screenshots.ts`、`tutorials/tools.ts` |
| `视频旋转` | Girar video | Rotate Video | `screenshots.ts`、`tutorials/tools.ts` |
| `视频镜像` | Vídeo espejo | Mirror Video | `screenshots.ts`、`tutorials/tools.ts` |
| `视频倒放` | Vídeo inverso | Reverse Video | `screenshots.ts`、`tutorials/tools.ts` |
| `视频变速` | Cambiar velocidad | Change Speed | `screenshots.ts`、`tutorials/tools.ts` |
| `音频处理` | Edición de audio | Audio Editing | `screenshots.ts`、`tutorials/tools.ts` |
| `添加水印` | Agregar marca de agua | Add Watermark | `screenshots.ts`、`tutorials/tools.ts` |
| `视频截图` | Captura de video | Video Capture | `screenshots.ts`、`tutorials/tools.ts` |
| `修改 MD5` | Cambiar MD5 | Change MD5 | `screenshots.ts`、`tutorials/tools.ts` |
| `音视频合并` | Fusionar audio y vídeo | Merge Audio and Video | `screenshots.ts`、`tutorials/tools.ts` |
| `全选已加载` | Seleccionar cargados | Select loaded | `tutorials/batch.ts` |
| `资源提取` | Extracción | Extract | `tutorials/batch.ts`、`tutorials/clipboard.ts`、`tutorials/platform.ts`、`tutorials/subtitles.ts` |
| `粘贴` | Pegar | Paste | `tutorials/batch.ts`、`tutorials/platform.ts`、`tutorials/subtitles.ts` |
| `正在加载列表` | Cargando lista | Loading list | `tutorials/batch.ts` |
| `加入下载队列` | Añadir a la cola de descargas | Add to the queue | `tutorials/batch.ts` |
| `下载中` | Descargando | Downloading | `tutorials/batch.ts` |
| `失败` | Error | Failed | `tutorials/batch.ts` |
| `图片` | Imagen | Image | `tutorials/batch.ts`、`tutorials/tools.ts` |
| `subtitle_tab_single` | Vídeo | Video | `tutorials/batch.ts`、`tutorials/clipboard.ts`、`tutorials/platform.ts` |
| `全部` | Todos | All | `tutorials/batch.ts` |
| `更换链接` | Cambiar enlace | Change link | `tutorials/batch.ts` |
| `跟随下载设置` | Usar ajustes de descarga | Follow download settings | `tutorials/batch.ts` |
| `等待下载` | En espera | Queued | `tutorials/batch.ts` |
| `加载下一页` | Cargar siguiente página | Load next page | `tutorials/batch.ts` |
| `识别剪贴板链接自动填充` | Rellenar desde el Portapapeles | Fill from Clipboard | `tutorials/clipboard.ts` |
| `后台下载完成/失败时发送通知` | Notificar cuando las descargas en segundo plano se completen o fallen | Notify When Background Downloads Complete or Fail | `tutorials/clipboard.ts` |
| `复制分享链接可以自动下载` | Copiar un enlace compartido para descargar automáticamente | Copy a shared link to download automatically | `tutorials/clipboard.ts` |
| `分享` | Compartir | Share | `tutorials/platform.ts`、`tutorials/subtitles.ts` |
| `链接提取` | Extraer del enlace | Extract from Link | `tutorials/platform.ts` |
| `查看任务` | Ver tarea | View Task | `tutorials/platform.ts` |
| `选择下载品质` | Seleccione Calidad | Select Quality | `tutorials/platform.ts` |
| `下载` | Descargar | Download | `tutorials/platform.ts` |
| `将此画质设为默认，以后不再询问` | Establece esta calidad como predeterminada y no vuelvas a preguntar | Set this quality as default and don't ask again | `tutorials/platform.ts` |
| `subtitle_select_all` | Seleccionar todo | Select all | `tutorials/subtitles.ts` |
| `subtitle_tab_title` | Subtítulos | Subtitles | `tutorials/subtitles.ts` |
| `subtitle_extracting` | Extrayendo subtítulos… | Extracting captions… | `tutorials/subtitles.ts` |
| `subtitle_format` | Formato de subtítulos | Caption format | `tutorials/subtitles.ts` |
| `post_text_export_destination` | Exportar a | Export to | `tutorials/subtitles.ts` |
| `资源处理` | Procesamiento | Process | `tutorials/tools.ts` |
| `选择视频` | Seleccionar vídeo | Select Video | `tutorials/tools.ts` |
| `从系统相册选择` | Elegir entre Fotos | Choose from Photos | `tutorials/tools.ts` |
| `从文件选择` | Elija entre archivos | Choose from Files | `tutorials/tools.ts` |
| `推荐组合` | Preajustes | Presets | `tutorials/tools.ts` |
| `截取范围` | Rango de clip | Clip Range | `tutorials/tools.ts` |
| `自定义` | Personalizado | Custom | `tutorials/tools.ts` |
| `帧率` | Velocidad de fotogramas | Frame Rate | `tutorials/tools.ts` |
| `宽度` | Ancho | Width | `tutorials/tools.ts` |
| `开始处理` | Iniciar procesamiento | Start Processing | `tutorials/tools.ts` |
| `处理完成` | Procesamiento completo | Processing Complete | `tutorials/tools.ts` |
| `分享文件` | Compartir archivo | Share File | `tutorials/tools.ts` |
| `完成` | Listo | Done | `tutorials/tools.ts` |
| `封面帧` | Marco de portada | Cover Frame | `tutorials/tools.ts` |
| `声音` | Sonido | Sound | `tutorials/tools.ts` |
| `实况质量` | Calidad de la Live Photo | Live Photo Quality | `tutorials/tools.ts` |
| `均衡` | Equilibrado | Balanced | `tutorials/tools.ts` |
| `移除声音` | Eliminar sonido | Remove Sound | `tutorials/tools.ts` |
| `保留声音` | Mantener sonido | Keep Sound | `tutorials/tools.ts` |
| `高清` | HD | HD | `tutorials/tools.ts` |
| `原画` | Original | Original | `tutorials/tools.ts` |
| `实况照片已保存到相册` | Live Photo guardada en Fotos | Live Photo saved to Photos | `tutorials/tools.ts` |
| `确定` | OK | OK | `tutorials/tools.ts` |
| `输出格式` | Formato de salida | Output Format | `tutorials/tools.ts` |
| `输出质量` | Calidad de salida | Output Quality | `tutorials/tools.ts` |
| `分辨率` | Resolución | Resolution | `tutorials/tools.ts` |
| `高质量` | Alta calidad | High Quality | `tutorials/tools.ts` |
| `标准` | Estándar | Standard | `tutorials/tools.ts` |
| `小体积` | Tamaño más pequeño | Smaller Size | `tutorials/tools.ts` |
| `原始` | Original | Original | `tutorials/tools.ts` |
| `静音` | Silencio | Mute | `tutorials/tools.ts` |
| `编码` | Códec | Codec | `tutorials/tools.ts` |
| `码率` | Bitrate | Bitrate | `tutorials/tools.ts` |
| `自动` | Automático | Auto | `tutorials/tools.ts` |
| `目标大小` | Tamaño objetivo | Target Size | `tutorials/tools.ts` |
| `自定义码率` | Velocidad de bits personalizada | Custom Bitrate | `tutorials/tools.ts` |
| `继续处理` | Seguir procesando | Keep Processing | `tutorials/tools.ts` |
| `平均分割` | División uniforme | Even Split | `tutorials/tools.ts` |
| `选取片段` | Selecciona Segmento | Select Segment | `tutorials/tools.ts` |
| `裁剪方式` | Modo de recorte | Trim Mode | `tutorials/tools.ts` |
| `裁剪范围` | Rango de recorte | Trim Range | `tutorials/tools.ts` |
| `视频拼接` | Unir videos | Stitch Videos | `tutorials/tools.ts` |
| `快速编辑` | Edición rápida | Quick Edit | `tutorials/tools.ts` |
| `添加视频` | Añadir vídeo | Add Video | `tutorials/tools.ts` |
| `处理参数` | Opciones de procesamiento | Processing Options | `tutorials/tools.ts` |
| `选择拼接视频` | Seleccionar vídeos para unir | Select Videos to Stitch | `tutorials/tools.ts` |
| `从下载列表选择` | Elegir entre Descargas | Choose from Downloads | `tutorials/tools.ts` |
| `live_activity_processing_video` | Procesando vídeo | Processing video | `tutorials/tools.ts` |
| `完成时通知我` | Notificarme cuando se complete | Notify me when complete | `tutorials/tools.ts` |
| `取消` | Cancelar | Cancel | `tutorials/tools.ts` |
| `已保存到相册` | Guardado en Fotos | Saved to Photos | `tutorials/tools.ts` |
| `总段数` | Segmentos totales | Total Segments | `tutorials/tools.ts` |
| `A 开始` | Comience con A | Start with A | `tutorials/tools.ts` |
| `固定时长` | Duración fija | Fixed Duration | `tutorials/tools.ts` |
| `B 开始` | Comience con B | Start with B | `tutorials/tools.ts` |
| `第一段音频` | Audio del primer segmento | First Segment Audio | `tutorials/tools.ts` |
| `横向数量` | Columnas | Columns | `tutorials/tools.ts` |
| `纵向数量` | Filas | Rows | `tutorials/tools.ts` |
| `原视频尺寸` | Tamaño del vídeo original | Original Video Size | `tutorials/tools.ts` |
| `导出尺寸` | Tamaño de exportación | Export Size | `tutorials/tools.ts` |
| `每格保持原尺寸` | Mantén cada mosaico en su tamaño original | Keep Each Tile Original Size | `tutorials/tools.ts` |
| `留边适配` | Ajustar | Fit | `tutorials/tools.ts` |
| `裁剪填满` | Relleno de recorte | Fill Crop | `tutorials/tools.ts` |
| `画布比例` | Relación de lienzo | Canvas Ratio | `tutorials/tools.ts` |
| `布局方式` | Diseño | Layout | `tutorials/tools.ts` |
| `原比例` | Original | Original | `tutorials/tools.ts` |
| `旋转方向` | Rotación | Rotation | `tutorials/tools.ts` |
| `右转90` | Girar hacia la derecha 90 | Rotate Right 90 | `tutorials/tools.ts` |
| `左转90` | Girar hacia la izquierda 90 | Rotate Left 90 | `tutorials/tools.ts` |
| `左右翻转` | H Flip | H Flip | `tutorials/tools.ts` |
| `镜像方式` | Modo espejo | Mirror Mode | `tutorials/tools.ts` |
| `上下翻转` | V Flip | V Flip | `tutorials/tools.ts` |
| `中心翻转` | 180 | 180 | `tutorials/tools.ts` |
| `保留音频` | Mantener audio | Keep Audio | `tutorials/tools.ts` |
| `倒放音频` | Audio inverso | Reverse Audio | `tutorials/tools.ts` |
| `速度倍率` | Velocidad | Speed | `tutorials/tools.ts` |
| `保持音调` | Conservar el tono | Preserve Pitch | `tutorials/tools.ts` |
| `提取音频` | Extraer audio | Extract Audio | `tutorials/tools.ts` |
| `处理方式` | Modo de procesamiento | Processing Mode | `tutorials/tools.ts` |
| `音量` | Volumen | Volume | `tutorials/tools.ts` |
| `替换` | Reemplazar | Replace | `tutorials/tools.ts` |
| `淡入淡出` | Fundido de entrada/salida | Fade In/Out | `tutorials/tools.ts` |
| `水印类型` | Tipo de marca de agua | Watermark Type | `tutorials/tools.ts` |
| `文字` | Texto | Text | `tutorials/tools.ts` |
| `文字内容` | Contenido de texto | Text Content | `tutorials/tools.ts` |
| `水印位置` | Posición de marca de agua | Watermark Position | `tutorials/tools.ts` |
| `透明度` | Opacidad | Opacity | `tutorials/tools.ts` |
| `字体颜色` | Color del texto | Text Color | `tutorials/tools.ts` |
| `显示背景` | Mostrar fondo | Show Background | `tutorials/tools.ts` |
| `文字描边` | Trazo del texto | Text Stroke | `tutorials/tools.ts` |
| `描边颜色` | Color del trazo | Stroke Color | `tutorials/tools.ts` |
| `单张` | Único | Single | `tutorials/tools.ts` |
| `截图模式` | Modo de captura | Capture Mode | `tutorials/tools.ts` |
| `截图时间` | Tiempo de captura | Capture Time | `tutorials/tools.ts` |
| `导出截图` | Exportar imagen | Export Image | `tutorials/tools.ts` |
| `智能` | Inteligente | Smart | `tutorials/tools.ts` |
| `大图` | Hoja de contactos | Sheet | `tutorials/tools.ts` |
| `截图预览` | Vista previa de captura de pantalla | Screenshot Preview | `tutorials/tools.ts` |
| `暂无可处理的已下载视频` | No hay vídeos descargados disponibles para procesar | No downloaded videos available for processing | `tutorials/tools.ts` |
| `从相册视频提取音轨` | Extraer audio del vídeo de Fotos | Extract audio from Photos video | `tutorials/tools.ts` |
| `音频来源` | Fuente de audio | Audio Source | `tutorials/tools.ts` |
| `未选择` | No seleccionado | Not Selected | `tutorials/tools.ts` |
| `视频` | Vídeo | Video | `参数与动态标签对照` |
| `批量` | Lote | Batch | `参数与动态标签对照` |
| `统一画质：%@` | Calidad del lote: %@ | Batch quality: %@ | `参数与动态标签对照` |
| `加入下载队列（%ld）` | Añadir a la cola (%ld) | Add to queue (%ld) | `参数与动态标签对照` |
| `subtitle_export_count` | Exportar subtítulos (%ld) | Export captions (%ld) | `参数与动态标签对照` |
| `subtitle_format_value` | Formato: %@ | Format: %@ | `参数与动态标签对照` |
| `post_text_save_files` | Guardar en Archivos | Save to Files | `参数与动态标签对照` |
| `字体大小` | Tamaño del texto | Text Size | `参数与动态标签对照` |
| `添加时间戳` | Agregar marca de tiempo | Add Timestamp | `参数与动态标签对照` |
| `%@ 当前视频` | %@ Vídeo actual | %@ Current Video | `参数与动态标签对照` |
| `音频淡入淡出` | Fundido de audio | Audio Fade | `参数与动态标签对照` |
| `清晰` | Claro | Clear | `参数与动态标签对照` |
| `流畅` | Suave | Smooth | `参数与动态标签对照` |
| `长片段` | Largo | Long | `参数与动态标签对照` |
| `预计处理后时长：%@` | Duración estimada del procesamiento: %@ | Estimated processed duration: %@ | `参数与动态标签对照` |
| `左右对称` | Simulación lateral | Side Sym | `参数与动态标签对照` |
| `上下对称` | Simulación superior | Top Sym | `参数与动态标签对照` |
| `中心对称` | Simulación central | Center Sym | `参数与动态标签对照` |
| `模糊%@` | Desenfoque %@ | Blur %@ | `参数与动态标签对照` |
| `双联%@` | Doble %@ | Double %@ | `参数与动态标签对照` |
| `双联对称%@` | Doble simétrico %@ | Symmetric Double %@ | `参数与动态标签对照` |
| `三联%@` | Triple %@ | Triple %@ | `参数与动态标签对照` |
| `三联模糊%@` | Triple desenfoque %@ | Triple Blur %@ | `参数与动态标签对照` |
| `已添加 %lu 段` | %lu clips añadidos | %lu clips added | `参数与动态标签对照` |
