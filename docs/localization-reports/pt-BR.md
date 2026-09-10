# 巴西葡萄牙语（pt-BR）本地化交付记录

## 来源与约定

- 地区：巴西；原生菜单名 `Português (Brasil)`；采用自然、直接的操作说明，统一使用 `você`，常用动词为 `baixar`、`salvar`、`compartilhar`，不混用欧葡的 `ficheiro`、`ecrã`、`descarregar`。
- 网站源提交：`6ca18ff7a1bee6d986b7bcf53cddee614a93a2bc`，当前 `main` 工作区，开始时无本地改动。
- App 源提交：`5fc01b2572c2b405701f560935f797867c932043`，开始时工作区干净。只读参考 `ResourceDownloader/pt-BR.lproj/Localizable.strings` 和 `InfoPlist.strings`，没有修改或编译 App。
- 结构以当前 `tutorial-structure.ts`、类型与注册表为准；教程正文逐项对照当前简中功能说明，再结合英文原图与英文说明。法律正文翻译当前站内英文版本，不新增地区专属条款；日期仍为 2026-09-09。
- 路径 `/pt-BR/`、`/pt-BR/articles/`、`/pt-BR/articles/<原 slug>/`；`htmlLang` / `hrefLang` 为 `pt-BR`，OG 为 `pt_BR`，方向为 `ltr`。品牌统一为 `ClipDock`。

## 完成范围

- 独立维护 `src/i18n/pt-BR/` 的全部 17 个文件，包含首页、导航、SEO、公共标签、错误/控件文案、教程索引、5 组教程、图注、视频字幕和法律正文。
- 41 篇教程：8 篇单平台、2 篇复制即下载、12 篇批量、1 篇字幕、18 篇工具。保留全部 slug、步骤与详情数量、FAQ/排错数量、关联文章、截图 ID、示例链接及示例/验证限制。
- 翻译 178 条截图记录，其中当前教程使用 158 个 ID；复用原始截图和视频。4 段演示共 19 条字幕（4 / 6 / 5 / 4），保留媒体 key 和共享时间轴。
- 每篇批量教程都明确免费版只能加载前 2 页、继续加载需付费 VIP。保留后台识别与画中画/通知条件、下载与照片保存的区别、字幕仅提取已有轨道、MD5 未校验、未完整试听、未验证付费效果等边界。
- `/pt-BR/privacy/` 和 `/pt-BR/terms/` 是完整站内法律正文，交叉链接保持巴葡，纳入 sitemap。指南旧基准的外部法律跳转说明不适用于当前代码。
- 共享 `/404.html` 继续使用英文正文及简中、繁中入口；巴葡 `errors.ts` 是文案数据，未新增专属 404。旧控件保持英文默认值。

## 注册与排版

- 注册到 `locales`、`publishedLocales`、`localeMeta`、landing/common/home/catalog/legal 与 `demoCaptions`。
- 复用已有动态路由、元数据与 sitemap 逻辑，无需增加硬编码的 OG 列表或复制路由文件。
- 将现有西语拉丁文字样式扩展到巴葡：首页标题、功能区标题、工具标题与教程标题按单词均衡换行；首页使用适配拉丁文字的字号和行高。未修改其他语言译文、媒体或共享教程结构。
- 扩展页面残留语言检查；新增巴葡测试，覆盖独立正文、地区元数据、真实剪贴板按钮、批量限制、字幕功能边界、水印滑块方向、法律页链接。

## App 术语表

按同一原始 key 获取巴葡值。英文列是当前 App 英文对照；素材存在旧命名时，下文说明差异。正文首次关键操作适量附英文原图名称。

| 概念 / App 原始 key | 巴葡实际值 | 英文对照 | 网站位置 |
| --- | --- | --- | --- |
| `资源提取` | Extração | Extract | 首页 / 下载教程 / 图注 |
| `网页视频` | Vídeo web | Web Video | 首页 / 下载教程 / 图注 |
| `资源管理` | Gerenciamento | Manager | 首页 / 下载教程 / 图注 |
| `资源处理` | Processamento | Process | 首页 / 下载教程 / 图注 |
| `视频` | Vídeo | Video | 首页 / 下载教程 / 图注 |
| `批量` | Lote | Batch | 首页 / 下载教程 / 图注 |
| `subtitle_tab_title` | Legendas | Subtitles | 字幕教程 / 首页轮播 |
| `识别剪贴板链接自动填充` | Preencher da área de transferência | Fill from Clipboard | 复制即下载 / 首页 / 演示字幕 |
| `识别剪贴板链接自动下载` | Links para download automático | Auto-download Links | 复制即下载 / 首页 / 演示字幕 |
| `进入后台继续识别剪贴板自动下载` | Detectar em segundo plano | Detect in Background | 复制即下载 / 首页 / 演示字幕 |
| `后台下载完成/失败时发送通知` | Notificar quando downloads em segundo plano forem concluídos ou falharem | Notify When Background Downloads Complete or Fail | 复制即下载 / 首页 / 演示字幕 |
| `加载列表` | Carregar lista | Load list | 首页 / 下载教程 / 图注 |
| `正在加载列表` | Carregando lista | Loading list | 首页 / 下载教程 / 图注 |
| `加载下一页` | Carregar próxima página | Load next page | 首页 / 下载教程 / 图注 |
| `全选已加载` | Selecionar carregados | Select loaded | 首页 / 下载教程 / 图注 |
| `更换链接` | Alterar link | Change link | 首页 / 下载教程 / 图注 |
| `统一画质：%@` | Qualidade do lote: %@ | Batch quality: %@ | 首页 / 下载教程 / 图注 |
| `跟随下载设置` | Usar configurações de download | Follow download settings | 首页 / 下载教程 / 图注 |
| `加入下载队列` | Adicionar à fila de downloads | Add to the queue | 首页 / 下载教程 / 图注 |
| `等待下载` | Na fila | Queued | 首页 / 下载教程 / 图注 |
| `下载中` | Baixando | Downloading | 首页 / 下载教程 / 图注 |
| `已完成` | Concluídas | Completed | 首页 / 下载教程 / 图注 |
| `失败` | Falha | Failed | 首页 / 下载教程 / 图注 |
| `选择下载品质` | Selecionar qualidade | Select Quality | 首页 / 下载教程 / 图注 |
| `下载设置` | Configurações de download | Download Settings | 首页 / 下载教程 / 图注 |
| `下载完成后自动保存到相册` | Salvar automaticamente downloads concluídos em fotos | Auto-Save Completed Downloads to Photos | 首页 / 下载教程 / 图注 |
| `保存到相册` | Salvar em Fotos | Save to Photos | 首页 / 下载教程 / 图注 |
| `分享文件` | Compartilhar arquivo | Share File | 首页 / 下载教程 / 图注 |
| `完成` | Concluído | Done | 首页 / 下载教程 / 图注 |
| `查看任务` | Ver tarefa | View Task | 首页 / 下载教程 / 图注 |
| `下载` | Baixar | Download | 首页 / 下载教程 / 图注 |
| `提取` | Extrair | Extract | 首页 / 下载教程 / 图注 |
| `粘贴` | Colar | Paste | 首页 / 下载教程 / 图注 |
| `视频裁剪` | Cortar vídeo | Trim Video | 首页 / 下载教程 / 图注 |
| `视频转码` | Transcodificar vídeo | Transcode Video | 首页 / 下载教程 / 图注 |
| `视频拼接` | Montar vídeos | Stitch Videos | 首页 / 下载教程 / 图注 |
| `交叉拼接` | Intercalação | Interleave | 首页 / 下载教程 / 图注 |
| `分段宫格` | Grade de segmento | Segment Grid | 首页 / 下载教程 / 图注 |
| `尺寸/画布` | Redimensionar / Canvas | Resize / Canvas | 首页 / 下载教程 / 图注 |
| `视频旋转` | Girar vídeo | Rotate Video | 首页 / 下载教程 / 图注 |
| `视频镜像` | Espelhar vídeo | Mirror Video | 首页 / 下载教程 / 图注 |
| `视频变速` | Alterar velocidade | Change Speed | 首页 / 下载教程 / 图注 |
| `提取音频` | Extrair áudio | Extract Audio | 首页 / 下载教程 / 图注 |
| `音频处理` | Edição de áudio | Audio Editing | 首页 / 下载教程 / 图注 |
| `音视频合并` | Mesclar áudio e vídeo | Merge Audio and Video | 首页 / 下载教程 / 图注 |
| `视频倒放` | Vídeo reverso | Reverse Video | 首页 / 下载教程 / 图注 |
| `添加水印` | Adicionar marca d'água | Add Watermark | 首页 / 下载教程 / 图注 |
| `视频转 GIF` | Vídeo para GIF | Video to GIF | 首页 / 下载教程 / 图注 |
| `视频转实况` | Vídeo para Live Photo | Video to Live Photo | 首页 / 下载教程 / 图注 |
| `视频截图` | Captura de vídeo | Video Capture | 首页 / 下载教程 / 图注 |
| `修改 MD5` | Alterar MD5 | Change MD5 | 首页 / 下载教程 / 图注 |
| `推荐组合` | Predefinições | Presets | 工具参数 / 图注 |
| `截取范围` | Intervalo de clipe | Clip Range | 工具参数 / 图注 |
| `处理参数` | Opções de processamento | Processing Options | 工具参数 / 图注 |
| `选择视频` | Selecionar vídeo | Select Video | 工具教程 / 图注 |
| `从系统相册选择` | Escolher entre fotos | Choose from Photos | 工具教程 / 图注 |
| `从文件选择` | Escolher entre os arquivos | Choose from Files | 工具教程 / 图注 |
| `自定义` | Personalizado | Custom | 工具教程 / 图注 |
| `帧率` | Taxa de quadros | Frame Rate | 工具教程 / 图注 |
| `宽度` | Largura | Width | 工具教程 / 图注 |
| `开始处理` | Iniciar processamento | Start Processing | 工具教程 / 图注 |
| `处理完成` | Processamento concluído | Processing Complete | 工具教程 / 图注 |
| `封面帧` | Moldura de capa | Cover Frame | 工具教程 / 图注 |
| `声音` | Som | Sound | 工具教程 / 图注 |
| `实况质量` | Qualidade da Live Photo | Live Photo Quality | 工具教程 / 图注 |
| `均衡` | Balanceado | Balanced | 工具教程 / 图注 |
| `移除声音` | Remover som | Remove Sound | 工具教程 / 图注 |
| `保留声音` | Manter o som | Keep Sound | 工具教程 / 图注 |
| `高清` | HD | HD | 工具教程 / 图注 |
| `原画` | Original | Original | 工具教程 / 图注 |
| `实况照片已保存到相册` | Live Photo salva no app Fotos | Live Photo saved to Photos | 工具教程 / 图注 |
| `确定` | OK | OK | 工具教程 / 图注 |
| `输出格式` | Formato de saída | Output Format | 工具教程 / 图注 |
| `输出质量` | Qualidade de saída | Output Quality | 工具教程 / 图注 |
| `分辨率` | Resolução | Resolution | 工具教程 / 图注 |
| `高质量` | Alta qualidade | High Quality | 工具教程 / 图注 |
| `标准` | Padrão | Standard | 工具教程 / 图注 |
| `小体积` | Tamanho menor | Smaller Size | 工具教程 / 图注 |
| `原始` | Original | Original | 工具教程 / 图注 |
| `静音` | Silenciar | Mute | 工具教程 / 图注 |
| `编码` | Codec | Codec | 工具教程 / 图注 |
| `码率` | Taxa de bits | Bitrate | 工具教程 / 图注 |
| `自动` | Automático | Auto | 工具教程 / 图注 |
| `目标大小` | Tamanho alvo | Target Size | 工具教程 / 图注 |
| `自定义码率` | Taxa de bits personalizada | Custom Bitrate | 工具教程 / 图注 |
| `继续处理` | Continue processando | Keep Processing | 工具教程 / 图注 |
| `平均分割` | Divisão uniforme | Even Split | 工具教程 / 图注 |
| `选取片段` | Selecionar segmento | Select Segment | 工具教程 / 图注 |
| `裁剪方式` | Modo de corte | Trim Mode | 工具教程 / 图注 |
| `裁剪范围` | Intervalo de corte | Trim Range | 工具教程 / 图注 |
| `快速编辑` | Edição rápida | Quick Edit | 工具教程 / 图注 |
| `添加视频` | Adicionar vídeo | Add Video | 工具教程 / 图注 |
| `选择拼接视频` | Selecionar vídeos para unir | Select Videos to Stitch | 工具教程 / 图注 |
| `从下载列表选择` | Escolher nos Downloads | Choose from Downloads | 工具教程 / 图注 |
| `正在处理视频` | Processando vídeo | Processing video | 工具教程 / 图注 |
| `完成时通知我` | Notificar-me quando concluído | Notify me when complete | 工具教程 / 图注 |
| `取消` | Cancelar | Cancel | 工具教程 / 图注 |
| `已保存到相册` | Salvo em fotos | Saved to Photos | 工具教程 / 图注 |
| `总段数` | Total de segmentos | Total Segments | 工具教程 / 图注 |
| `A 开始` | Começar com A | Start with A | 工具教程 / 图注 |
| `固定时长` | Duração fixa | Fixed Duration | 工具教程 / 图注 |
| `B 开始` | Começar com B | Start with B | 工具教程 / 图注 |
| `第一段音频` | Áudio do primeiro segmento | First Segment Audio | 工具教程 / 图注 |
| `横向数量` | Colunas | Columns | 工具教程 / 图注 |
| `纵向数量` | Linhas | Rows | 工具教程 / 图注 |
| `原视频尺寸` | Tamanho original do vídeo | Original Video Size | 工具教程 / 图注 |
| `导出尺寸` | Tamanho de exportação | Export Size | 工具教程 / 图注 |
| `每格保持原尺寸` | Manter o tamanho original de cada bloco | Keep Each Tile Original Size | 工具教程 / 图注 |
| `留边适配` | Ajuste | Fit | 工具教程 / 图注 |
| `裁剪填满` | Preenchimento Cortar | Fill Crop | 工具教程 / 图注 |
| `画布比例` | Proporção de tela | Canvas Ratio | 工具教程 / 图注 |
| `布局方式` | Layout | Layout | 工具教程 / 图注 |
| `原比例` | Original | Original | 工具教程 / 图注 |
| `旋转方向` | Rotação | Rotation | 工具教程 / 图注 |
| `左右翻转` | H Flip | H Flip | 工具教程 / 图注 |
| `镜像方式` | Modo de espelho | Mirror Mode | 工具教程 / 图注 |
| `上下翻转` | V Flip | V Flip | 工具教程 / 图注 |
| `中心翻转` | 180 | 180 | 工具教程 / 图注 |
| `保留音频` | Manter o áudio | Keep Audio | 工具教程 / 图注 |
| `倒放音频` | Áudio reverso | Reverse Audio | 工具教程 / 图注 |
| `速度倍率` | Velocidade | Speed | 工具教程 / 图注 |
| `保持音调` | Preservar pitch | Preserve Pitch | 工具教程 / 图注 |
| `处理方式` | Modo de processamento | Processing Mode | 工具教程 / 图注 |
| `音量` | Volume | Volume | 工具教程 / 图注 |
| `替换` | Substituir | Replace | 工具教程 / 图注 |
| `淡入淡出` | Fade In/Out | Fade In/Out | 工具教程 / 图注 |
| `水印类型` | Tipo de marca d'água | Watermark Type | 工具教程 / 图注 |
| `文字` | Texto | Text | 工具教程 / 图注 |
| `文字内容` | Conteúdo de texto | Text Content | 工具教程 / 图注 |
| `图片` | Imagem | Image | 工具教程 / 图注 |
| `水印位置` | Posição da marca d'água | Watermark Position | 工具教程 / 图注 |
| `透明度` | Opacidade | Opacity | 工具教程 / 图注 |
| `字体颜色` | Cor do texto | Text Color | 工具教程 / 图注 |
| `显示背景` | Mostrar fundo | Show Background | 工具教程 / 图注 |
| `文字描边` | Traço do texto | Text Stroke | 工具教程 / 图注 |
| `描边颜色` | Cor do traço | Stroke Color | 工具教程 / 图注 |
| `单张` | Único | Single | 工具教程 / 图注 |
| `截图模式` | Modo de captura | Capture Mode | 工具教程 / 图注 |
| `截图时间` | Tempo de captura | Capture Time | 工具教程 / 图注 |
| `导出截图` | Exportar imagem | Export Image | 工具教程 / 图注 |
| `智能` | Inteligente | Smart | 工具教程 / 图注 |
| `大图` | Folha de contato | Sheet | 工具教程 / 图注 |
| `截图预览` | Visualização da captura de tela | Screenshot Preview | 工具教程 / 图注 |
| `暂无可处理的已下载视频` | Nenhum vídeo baixado disponível para processamento | No downloaded videos available for processing | 工具教程 / 图注 |
| `从相册视频提取音轨` | Extrair áudio do vídeo Fotos | Extract audio from Photos video | 工具教程 / 图注 |
| `音频来源` | Fonte de áudio | Audio Source | 工具教程 / 图注 |
| `未选择` | Não selecionado | Not Selected | 工具教程 / 图注 |
| `清晰` | Limpo | Clear | 工具教程 / 图注 |
| `流畅` | Suave | Smooth | 工具教程 / 图注 |
| `长片段` | Longo | Long | 工具教程 / 图注 |
| `左右对称` | Side Sym | Side Sym | 工具教程 / 图注 |
| `上下对称` | Top Sym | Top Sym | 工具教程 / 图注 |
| `中心对称` | Center Sym | Center Sym | 工具教程 / 图注 |
| `模糊%@` | Desfoque %@ | Blur %@ | 工具教程 / 图注 |
| `双联%@` | Duplo %@ | Double %@ | 工具教程 / 图注 |
| `双联对称%@` | Duplo simétrico %@ | Symmetric Double %@ | 工具教程 / 图注 |
| `三联%@` | Triplo %@ | Triple %@ | 工具教程 / 图注 |
| `三联模糊%@` | Desfoque triplo %@ | Triple Blur %@ | 工具教程 / 图注 |
| `预计处理后时长：%@` | Duração estimada do processamento: %@ | Estimated processed duration: %@ | 工具教程 / 图注 |
| `subtitle_extracting` | Extraindo legendas… | Extracting captions… | 字幕教程 / 首页轮播 |
| `subtitle_select_all` | Selecionar tudo | Select all | 字幕教程 / 首页轮播 |
| `subtitle_format` | Formato da legenda | Caption format | 字幕教程 / 首页轮播 |
| `subtitle_format_value` | Formato: %@ | Format: %@ | 字幕教程 / 首页轮播 |
| `subtitle_export_count` | Exportar legendas (%ld) | Export captions (%ld) | 字幕教程 / 首页轮播 |
| `* 表示 VIP 功能` | * indica um recurso VIP | * indicates a VIP feature | 工具教程 / 图注 |

## 术语疑点与素材核对

- `识别剪贴板链接自动下载` 的实际值为 `Links para download automático`，字面较含糊；操作说明引用实际值，正文解释为复制链接后自动创建任务。
- `封面帧` → `Moldura de capa`、`裁剪填满` → `Preenchimento Cortar`、`尺寸/画布` → `Redimensionar / Canvas`、`从系统相册选择` → `Escolher entre fotos`、`从文件选择` → `Escolher entre os arquivos`、`从相册视频提取音轨` → `Extrair áudio do vídeo Fotos`、`继续处理` → `Continue processando` 均保留 App 当前值；正文用自然语言解释用途，没有修改 App。
- `预计处理后时长：%@` → `Duração estimada do processamento: %@` 易被理解为计算耗时，正文说明该值是处理后视频的预计时长。
- `左右翻转`、`上下翻转`、`中心翻转` 实际仍为 `H Flip`、`V Flip`、`180`；说明中解释左右/上下翻转与半圈旋转。对称模式 `Side Sym`、`Top Sym`、`Center Sym` 同样保留 App 命名对照。
- `统一画质` 不是独立 key，实际 key 为 `统一画质：%@`，值为 `Qualidade do lote: %@`。
- `已完成` 和 `完成` 分别使用 `Concluídas`（下载列表）和 `Concluído`（关闭结果页）。旧截图中下载标签出现 `Active` / `Done`，正文明确标注它们对应当前 `Baixando` / `Concluídas`。
- 已实际查看 `watermark-result-orange.webp`：原图水印为 `Made by ClipDock`。巴葡示例说明保留此真实文字，未沿用简中说明中的 `Made by 影随存`；参数图的 `ClipDock Demo` 保留原样。
- `背景音乐版`、`米娜舞蹈-大摆锤` 是原始素材标题，保留引用；不是未翻译的按钮或正文。
- 没有新增待确认的功能事实；不把本轮翻译或静态核对称为 App 功能实测或母语者审校。

## 验证结果

| 检查 | 结果 |
| --- | --- |
| `npm run check:i18n` | 通过，11 项测试 |
| `npx tsc --noEmit` | 通过 |
| `npm run build` | 通过，316 页；含巴葡 45 页 |
| `python3 scripts/verify-site.py` | 通过，315 条 sitemap URL、20,665 个本地引用，无错误 |
| `python3 scripts/verify-locales.py` | 通过，7 种语言各 41 篇教程，315 个带语言的页面，无错误 |
| `node --test tests/videoRecovery.test.mjs` | 通过，4 项测试 |
| `git diff --check` | 通过 |
| 导出实际文案 | `node scripts/export-copy-review.cjs pt-BR > /tmp/clipdock-pt-BR-review.json`；对照通读、术语核对与残留检查 |

构建仅有既有 Browserslist 数据陈旧提示，不影响本次构建。没有为本地化任务升级依赖。

### 浏览器覆盖

- 浏览器：`agent-browser` 驱动本地 Chromium；当前检出目录构建由 `npm run preview -- --host 127.0.0.1 --port 4337` 提供，访问 `http://127.0.0.1:4337/pt-BR/`。
- 视口：375、390、768、1024、1440 px（高度 900 px）。每种宽度覆盖巴葡首页、教程索引、2 个法律页与全部 41 篇教程，共 **225 次页面/宽度检查**。页面与标题均无横向溢出，标题/小标题/摘要中的普通单词未跨行拆开；检查了标题、步骤标题和相关卡片。详见 [layout-checks.json](pt-BR/layout-checks.json)。
- 375 / 1440 px 回归全部 7 种语言的首页和同一篇转码教程，共 28 次页面检查；6 种其他语言分别从巴葡文章切换出去再切回，共 12 次往返，均保留 slug。菜单含 7 种语言，位置在视口内。详见 [regression-checks.json](pt-BR/regression-checks.json) 与 [language-switching.json](pt-BR/language-switching.json)。
- 真实播放并逐条跳转 4 段视频的 19 个字幕时间点，核对实际显示字幕；媒体成功加载且可播放。详见 [caption-checks.json](pt-BR/caption-checks.json)。
- 点击全部 5 张字幕轮播，核对标题、图像 alt、当前状态及 `Pausar` / `Reproduzir` 控件；展开 2 个平台支持列表与全部 6 条首页 FAQ；验证手机菜单进入巴葡教程索引。详见 [carousel-checks.json](pt-BR/carousel-checks.json)。
- 临时把演示 video 的来源换成无效内联 MP4，实际触发巴葡失败提示；还原本地媒体后点击真实重试按钮，确认恢复播放且提示隐藏。不是实际 CDN 故障测试。详见 [recovery-check.json](pt-BR/recovery-check.json)。
- 检查巴葡 45 页实际输出的 JSON-LD、OG/Twitter 标题与描述；Article 的 `inLanguage` 为 `pt-BR`，文章、面包屑和首页 URL 保留巴葡路径。作者 Organization 继续使用共享品牌根 URL。见 [metadata-checks.json](pt-BR/metadata-checks.json)。
- 点击隐私/条款正文内的链接，确认两页互相跳转且保留巴葡；检查共享 404 页面与其首页入口。详见 [404-check.json](pt-BR/404-check.json)。
- 最后补齐镜像对称模式的实际标签与变速预计时长标签后，再次构建，并在全部 5 种宽度复查这两篇，共 10 次检查通过，见 [final-copy-checks.json](pt-BR/final-copy-checks.json)。
- 正常页面未发现运行时错误或框架错误遮罩。模拟媒体失败后重新加载正常首页，最终浏览器错误列表为空。
- 已保存并实际查看桌面/手机首页、教程索引、长标题、工具区、字幕区、信任说明区、语言菜单、重试提示、FAQ、下载区及复杂参数截图。完整页面另存为 `home-full-1440.png`；代表性文件如下。

| 场景 | 截图 |
| --- | --- |
| 桌面 / 手机首页 | [1440 px](pt-BR/home-1440.png)、[375 px](pt-BR/home-375.png) |
| 教程索引与长标题 | [索引](pt-BR/tutorial-index-375.png)、[Instagram 主页](pt-BR/long-title-375.png) |
| 工具与复杂参数 | [工具区](pt-BR/tools-1440.png)、[转码参数](pt-BR/transcode-options-375.png) |
| 字幕 / FAQ / 下载 | [字幕](pt-BR/subtitles-1440.png)、[FAQ](pt-BR/faq-1440.png)、[下载](pt-BR/download-1440.png) |
| 菜单与媒体错误 | [手机语言菜单](pt-BR/language-menu-375.png)、[桌面语言菜单](pt-BR/language-menu-1440.png)、[错误重试](pt-BR/video-retry-375.png) |

浏览器 UA：`Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/153.0.0.0 Safari/537.36`。

### 检查限制

- 自动布局扫描及本轮逐条对照不等于巴葡母语者审校；未进行外部母语审校。
- 未在 Safari / WebKit 或真实 iPhone、iPad 上验收网站；本轮浏览器验证为 Chromium 的不同视口。
- 不编译、不修改 App，也没有重新实测 App 下载、导出或付费参数。教程沿用已有样例证据与相应限制。
- 共享 404 未改成巴葡专属页面，外部 Apple 页面与原始素材中的界面保持原语言；App Store 文案、地区链接及真实商店价格未修改。
- 无未解决的本轮网站实现问题；尚未上线。


## 交付状态

- 已在构建列表启用；这不代表线上已经部署。
- 尚未提交、推送或部署。
- App 工程未修改、未编译。
