# 法语本地化交付记录

- 日期：2026-09-10。
- locale / 路径：`fr`、`/fr/`、`/fr/articles/`、`/fr/articles/<原 slug>/`，原生名称 `Français`。
- HTML / hreflang / OG / 方向：`fr` / `fr` / `fr_FR` / `ltr`；使用通用法语，不额外建立 `fr-FR` 路径。
- 文风：统一使用 `vous` 与祈使式操作说明，品牌为 ClipDock，系统应用为 Photos、Fichiers。正文使用自然法语；实际按钮保持 App 显示值并在首次出现时给出英文截图对照。
- 标点：法式引号 `« … »`、冒号和百分号使用 U+00A0，不换行窄空格 U+202F 用于问号、叹号、分号。示例 URL、文件名、媒体内文字不改写；数字显示使用法语小数逗号，数值含义不变。
- 网站源版本：`8355be97d9cbf9868eb697f29991a12610eb74f8`（main，feat(i18n): add German localization）。开始时已有未跟踪 `docs/localization-reports/de/`，此次未修改该目录。
- App 只读对照版本：`5fc01b2572c2b405701f560935f797867c932043`，开始时工作区干净。对照 `ResourceDownloader/fr.lproj/Localizable.strings` 和 `InfoPlist.strings`，并读取同 key 英文值。

## 覆盖与接入

- 完成首页全部功能区、18 个工具、6 个 FAQ、导航、无障碍标签、SEO、公共标签、控件和错误页数据。
- 完成 41 篇教程：8 篇单平台、2 篇剪贴板、12 篇批量、1 篇字幕、18 篇工具。所有 slug、步骤顺序、详情/FAQ/排错条数、示例 URL、截图 ID 和证据说明与共享结构对应。
- 翻译全部 178 个截图条目（教程实际使用 158 个不同截图 ID），四段视频共 19 条字幕；媒体和时间轴保持不变。法语教程内部复用法语共用操作说明，没有其他语言的正文回退。
- 完成站内隐私政策及使用条款，保留原 2026-09-09 生效日期、链接与含义；法律页间链接指向 `/fr/`。维护说明记录的现状优先于 playbook 中旧版外链跳转说明。
- 已接入 locales / publishedLocales、landing、common、home、catalog、legal 和 demoCaptions。现有动态路由、基于元数据的 OG/dir、canonical、hreflang、JSON-LD 和 sitemap 自动覆盖法语。
- 法语加入现有拉丁文字排版规则：标题按词换行、均衡分行、禁用标题强制大写；首页标题和工具卡片采用相应字号与行高。
- 225 次初轮浏览器检查发现 `Redimensionner/Canevas` 步骤标题在 375/390 宽度溢出；标题改为自然短句 `Ouvrir l’outil de cadrage`，正文保留完整 App 名称。未使用裁切标题或缩小到不可读字号来处理。
- 共享 `/404.html` 仍是英文正文，未新增法语专属 404。App 界面截图及录屏仍为英文原素材。本任务不修改 App、不编译 App、不修改 App Store 资料。

## 术语对照

以下为 App 原始 key 的实际值；英文列对应同 key 的英文界面名称。网站首次操作指引据此引用，营销标题可用自然短句。

### 页面与剪贴板

| 概念 / App key | App 法语实际值 | 英文界面名称 | 网站使用位置 |
| --- | --- | --- | --- |
| `资源提取` | Extraction | Extract | 页面与剪贴板对应教程、图注或首页说明 |
| `网页视频` | Vidéo web | Web Video | 页面与剪贴板对应教程、图注或首页说明 |
| `资源管理` | Gestion | Manager | 页面与剪贴板对应教程、图注或首页说明 |
| `资源处理` | Traitement | Process | 页面与剪贴板对应教程、图注或首页说明 |
| `视频` | Vidéo | Video | 页面与剪贴板对应教程、图注或首页说明 |
| `subtitle_tab_profile` | Lot | Batch | 页面与剪贴板对应教程、图注或首页说明 |
| `subtitle_tab_title` | Sous-titres | Subtitles | 页面与剪贴板对应教程、图注或首页说明 |
| `批量` | Par lots | Batch | 页面与剪贴板对应教程、图注或首页说明 |
| `识别剪贴板链接自动填充` | Remplir à partir du Presse-papiers | Fill from Clipboard | 页面与剪贴板对应教程、图注或首页说明 |
| `识别剪贴板链接自动下载` | Liens de téléchargement automatique | Auto-download Links | 页面与剪贴板对应教程、图注或首页说明 |
| `进入后台继续识别剪贴板自动下载` | Détecter en arrière-plan | Detect in Background | 页面与剪贴板对应教程、图注或首页说明 |
| `链接提取` | Extraire du lien | Extract from Link | 页面与剪贴板对应教程、图注或首页说明 |
| `粘贴` | Coller | Paste | 页面与剪贴板对应教程、图注或首页说明 |
| `提取` | Extraire | Extract | 页面与剪贴板对应教程、图注或首页说明 |
| `查看任务` | Afficher la tâche | View Task | 页面与剪贴板对应教程、图注或首页说明 |

### 下载与保存

| 概念 / App key | App 法语实际值 | 英文界面名称 | 网站使用位置 |
| --- | --- | --- | --- |
| `加载列表` | Charger la liste | Load list | 下载与保存对应教程、图注或首页说明 |
| `加载下一页` | Charger la page suivante | Load next page | 下载与保存对应教程、图注或首页说明 |
| `全选已加载` | Sélectionner les éléments chargés | Select loaded | 下载与保存对应教程、图注或首页说明 |
| `更换链接` | Changer le lien | Change link | 下载与保存对应教程、图注或首页说明 |
| `统一画质：%@` | Qualité du lot : %@ | Batch quality: %@ | 下载与保存对应教程、图注或首页说明 |
| `跟随下载设置` | Suivre les réglages de téléchargement | Follow download settings | 下载与保存对应教程、图注或首页说明 |
| `加入下载队列` | Ajouter à la file de téléchargement | Add to the queue | 下载与保存对应教程、图注或首页说明 |
| `等待下载` | En attente | Queued | 下载与保存对应教程、图注或首页说明 |
| `下载中` | Téléchargement | Downloading | 下载与保存对应教程、图注或首页说明 |
| `已完成` | Terminé | Completed | 下载与保存对应教程、图注或首页说明 |
| `失败` | Échec | Failed | 下载与保存对应教程、图注或首页说明 |
| `选择下载品质` | Sélectionner la qualité | Select Quality | 下载与保存对应教程、图注或首页说明 |
| `下载设置` | Paramètres de téléchargement | Download Settings | 下载与保存对应教程、图注或首页说明 |
| `下载完成后自动保存到相册` | Enregistrement automatique des téléchargements terminés dans Photos | Auto-Save Completed Downloads to Photos | 下载与保存对应教程、图注或首页说明 |
| `保存到相册` | Enregistrer dans Photos | Save to Photos | 下载与保存对应教程、图注或首页说明 |
| `分享文件` | Partager le fichier | Share File | 下载与保存对应教程、图注或首页说明 |
| `完成` | Terminé | Done | 下载与保存对应教程、图注或首页说明 |
| `从系统相册选择` | Choisir parmi les photos | Choose from Photos | 下载与保存对应教程、图注或首页说明 |
| `从文件选择` | Choisissez parmi les fichiers | Choose from Files | 下载与保存对应教程、图注或首页说明 |
| `从下载列表选择` | Choisir parmi les téléchargements | Choose from Downloads | 下载与保存对应教程、图注或首页说明 |
| `开始处理` | Démarrer le traitement | Start Processing | 下载与保存对应教程、图注或首页说明 |
| `继续处理` | Poursuivre le traitement | Keep Processing | 下载与保存对应教程、图注或首页说明 |

### 18 个工具

| 概念 / App key | App 法语实际值 | 英文界面名称 | 网站使用位置 |
| --- | --- | --- | --- |
| `视频裁剪` | Découper la vidéo | Trim Video | 18 个工具对应教程、图注或首页说明 |
| `视频转码` | Transcoder la vidéo | Transcode Video | 18 个工具对应教程、图注或首页说明 |
| `视频拼接` | Assembler des vidéos | Stitch Videos | 18 个工具对应教程、图注或首页说明 |
| `交叉拼接` | Entrelacement | Interleave | 18 个工具对应教程、图注或首页说明 |
| `分段宫格` | Grille de segments | Segment Grid | 18 个工具对应教程、图注或首页说明 |
| `尺寸/画布` | Redimensionner/Canevas | Resize / Canvas | 18 个工具对应教程、图注或首页说明 |
| `视频旋转` | Faire pivoter la vidéo | Rotate Video | 18 个工具对应教程、图注或首页说明 |
| `视频镜像` | Vidéo miroir | Mirror Video | 18 个工具对应教程、图注或首页说明 |
| `视频变速` | Modifier la vitesse | Change Speed | 18 个工具对应教程、图注或首页说明 |
| `提取音频` | Extraire l'audio | Extract Audio | 18 个工具对应教程、图注或首页说明 |
| `音频处理` | Édition audio | Audio Editing | 18 个工具对应教程、图注或首页说明 |
| `音视频合并` | Fusionner l'audio et la vidéo | Merge Audio and Video | 18 个工具对应教程、图注或首页说明 |
| `视频倒放` | Vidéo inversée | Reverse Video | 18 个工具对应教程、图注或首页说明 |
| `添加水印` | Ajouter un filigrane | Add Watermark | 18 个工具对应教程、图注或首页说明 |
| `视频转 GIF` | Vidéo en GIF | Video to GIF | 18 个工具对应教程、图注或首页说明 |
| `视频转实况` | Vidéo en Live Photo | Video to Live Photo | 18 个工具对应教程、图注或首页说明 |
| `视频截图` | Capture vidéo | Video Capture | 18 个工具对应教程、图注或首页说明 |
| `修改 MD5` | Modifier MD5 | Change MD5 | 18 个工具对应教程、图注或首页说明 |

### 工具参数与枚举

| 概念 / App key | App 法语实际值 | 英文界面名称 | 网站使用位置 |
| --- | --- | --- | --- |
| `推荐组合` | Préréglages | Presets | 工具参数与枚举对应教程、图注或首页说明 |
| `自定义` | Personnalisée | Custom | 工具参数与枚举对应教程、图注或首页说明 |
| `清晰` | Effacer | Clear | 工具参数与枚举对应教程、图注或首页说明 |
| `流畅` | Lisse | Smooth | 工具参数与枚举对应教程、图注或首页说明 |
| `长片段` | Long | Long | 工具参数与枚举对应教程、图注或首页说明 |
| `截取范围` | Plage du clip | Clip Range | 工具参数与枚举对应教程、图注或首页说明 |
| `处理参数` | Options de traitement | Processing Options | 工具参数与枚举对应教程、图注或首页说明 |
| `帧率` | Frame rate | Frame Rate | 工具参数与枚举对应教程、图注或首页说明 |
| `宽度` | Largeur | Width | 工具参数与枚举对应教程、图注或首页说明 |
| `封面帧` | Cadre de couverture | Cover Frame | 工具参数与枚举对应教程、图注或首页说明 |
| `声音` | Son | Sound | 工具参数与枚举对应教程、图注或首页说明 |
| `实况质量` | Qualité de la Live Photo | Live Photo Quality | 工具参数与枚举对应教程、图注或首页说明 |
| `均衡` | Équilibré | Balanced | 工具参数与枚举对应教程、图注或首页说明 |
| `高清` | HD | HD | 工具参数与枚举对应教程、图注或首页说明 |
| `原画` | Original | Original | 工具参数与枚举对应教程、图注或首页说明 |
| `输出格式` | Format de sortie | Output Format | 工具参数与枚举对应教程、图注或首页说明 |
| `输出质量` | Qualité de sortie | Output Quality | 工具参数与枚举对应教程、图注或首页说明 |
| `分辨率` | Résolution | Resolution | 工具参数与枚举对应教程、图注或首页说明 |
| `高质量` | Haute qualité | High Quality | 工具参数与枚举对应教程、图注或首页说明 |
| `标准` | Standard | Standard | 工具参数与枚举对应教程、图注或首页说明 |
| `小体积` | Taille plus petite | Smaller Size | 工具参数与枚举对应教程、图注或首页说明 |
| `编码` | Codec | Codec | 工具参数与枚举对应教程、图注或首页说明 |
| `码率` | Débit binaire | Bitrate | 工具参数与枚举对应教程、图注或首页说明 |
| `自动` | Auto | Auto | 工具参数与枚举对应教程、图注或首页说明 |
| `目标大小` | Taille cible | Target Size | 工具参数与枚举对应教程、图注或首页说明 |
| `自定义码率` | Débit personnalisé | Custom Bitrate | 工具参数与枚举对应教程、图注或首页说明 |
| `裁剪方式` | Mode Découpage | Trim Mode | 工具参数与枚举对应教程、图注或首页说明 |
| `选取片段` | Sélectionner un segment | Select Segment | 工具参数与枚举对应教程、图注或首页说明 |
| `平均分割` | Partage égal | Even Split | 工具参数与枚举对应教程、图注或首页说明 |
| `裁剪范围` | Plage de découpage | Trim Range | 工具参数与枚举对应教程、图注或首页说明 |
| `添加视频` | Ajouter une vidéo | Add Video | 工具参数与枚举对应教程、图注或首页说明 |
| `选择拼接视频` | Sélectionner des vidéos à assembler | Select Videos to Stitch | 工具参数与枚举对应教程、图注或首页说明 |
| `总段数` | Total des segments | Total Segments | 工具参数与枚举对应教程、图注或首页说明 |
| `固定时长` | Durée fixe | Fixed Duration | 工具参数与枚举对应教程、图注或首页说明 |
| `A 开始` | Commencer par A | Start with A | 工具参数与枚举对应教程、图注或首页说明 |
| `B 开始` | Commencer par B | Start with B | 工具参数与枚举对应教程、图注或首页说明 |
| `音频淡入淡出` | Fondu audio | Audio Fade | 工具参数与枚举对应教程、图注或首页说明 |
| `横向数量` | Colonnes | Columns | 工具参数与枚举对应教程、图注或首页说明 |
| `纵向数量` | Lignes | Rows | 工具参数与枚举对应教程、图注或首页说明 |
| `第一段音频` | Premier segment audio | First Segment Audio | 工具参数与枚举对应教程、图注或首页说明 |
| `导出尺寸` | Taille d'exportation | Export Size | 工具参数与枚举对应教程、图注或首页说明 |
| `原视频尺寸` | Taille originale de la vidéo | Original Video Size | 工具参数与枚举对应教程、图注或首页说明 |
| `每格保持原尺寸` | Conserver la taille originale de chaque vignette | Keep Each Tile Original Size | 工具参数与枚举对应教程、图注或首页说明 |
| `画布比例` | Taux de canevas | Canvas Ratio | 工具参数与枚举对应教程、图注或首页说明 |
| `布局方式` | Mise en page | Layout | 工具参数与枚举对应教程、图注或首页说明 |
| `留边适配` | Ajuster | Fit | 工具参数与枚举对应教程、图注或首页说明 |
| `裁剪填满` | Recadrer le remplissage | Fill Crop | 工具参数与枚举对应教程、图注或首页说明 |
| `背景色` | Couleur d'arrière-plan | Background Color | 工具参数与枚举对应教程、图注或首页说明 |
| `旋转方向` | Rotation | Rotation | 工具参数与枚举对应教程、图注或首页说明 |
| `右转90` | Tourner à droite de 90 | Rotate Right 90 | 工具参数与枚举对应教程、图注或首页说明 |
| `左转90` | Tourner à gauche 90 | Rotate Left 90 | 工具参数与枚举对应教程、图注或首页说明 |
| `镜像方式` | Mode miroir | Mirror Mode | 工具参数与枚举对应教程、图注或首页说明 |
| `左右翻转` | H Flip | H Flip | 工具参数与枚举对应教程、图注或首页说明 |
| `上下翻转` | V Flip | V Flip | 工具参数与枚举对应教程、图注或首页说明 |
| `中心翻转` | 180 | 180 | 工具参数与枚举对应教程、图注或首页说明 |
| `左右对称` | Side Sym | Side Sym | 工具参数与枚举对应教程、图注或首页说明 |
| `上下对称` | Top Sym | Top Sym | 工具参数与枚举对应教程、图注或首页说明 |
| `中心对称` | Center Sym | Center Sym | 工具参数与枚举对应教程、图注或首页说明 |
| `速度倍率` | Vitesse | Speed | 工具参数与枚举对应教程、图注或首页说明 |
| `保持音调` | Préserver le pas | Preserve Pitch | 工具参数与枚举对应教程、图注或首页说明 |
| `静音` | Muet | Mute | 工具参数与枚举对应教程、图注或首页说明 |
| `保留音频` | Conserver l'audio | Keep Audio | 工具参数与枚举对应教程、图注或首页说明 |
| `倒放音频` | Audio inversé | Reverse Audio | 工具参数与枚举对应教程、图注或首页说明 |
| `处理方式` | Mode de traitement | Processing Mode | 工具参数与枚举对应教程、图注或首页说明 |
| `音量` | Volume | Volume | 工具参数与枚举对应教程、图注或首页说明 |
| `替换` | Remplacer | Replace | 工具参数与枚举对应教程、图注或首页说明 |
| `淡入淡出` | Fade entrant/sortant | Fade In/Out | 工具参数与枚举对应教程、图注或首页说明 |
| `水印类型` | Type de filigrane | Watermark Type | 工具参数与枚举对应教程、图注或首页说明 |
| `文字` | Texte | Text | 工具参数与枚举对应教程、图注或首页说明 |
| `图片` | Image | Image | 工具参数与枚举对应教程、图注或首页说明 |
| `文字内容` | Contenu du texte | Text Content | 工具参数与枚举对应教程、图注或首页说明 |
| `字体大小` | Taille du texte | Text Size | 工具参数与枚举对应教程、图注或首页说明 |
| `水印位置` | Position du filigrane | Watermark Position | 工具参数与枚举对应教程、图注或首页说明 |
| `字体颜色` | Couleur du texte | Text Color | 工具参数与枚举对应教程、图注或首页说明 |
| `显示背景` | Afficher l'arrière-plan | Show Background | 工具参数与枚举对应教程、图注或首页说明 |
| `文字描边` | Trait du texte | Text Stroke | 工具参数与枚举对应教程、图注或首页说明 |
| `描边颜色` | Couleur du trait | Stroke Color | 工具参数与枚举对应教程、图注或首页说明 |
| `透明度` | Opacité | Opacity | 工具参数与枚举对应教程、图注或首页说明 |
| `截图模式` | Mode de capture | Capture Mode | 工具参数与枚举对应教程、图注或首页说明 |
| `单张` | Single | Single | 工具参数与枚举对应教程、图注或首页说明 |
| `智能` | Intelligent | Smart | 工具参数与枚举对应教程、图注或首页说明 |
| `大图` | Planche-contact | Sheet | 工具参数与枚举对应教程、图注或首页说明 |
| `截图时间` | Durée de capture | Capture Time | 工具参数与枚举对应教程、图注或首页说明 |
| `添加时间戳` | Ajouter un horodatage | Add Timestamp | 工具参数与枚举对应教程、图注或首页说明 |
| `导出截图` | Exporter l'image | Export Image | 工具参数与枚举对应教程、图注或首页说明 |
| `音频来源` | Source audio | Audio Source | 工具参数与枚举对应教程、图注或首页说明 |
| `从相册视频提取音轨` | Extraire l'audio de la vidéo Photos | Extract audio from Photos video | 工具参数与枚举对应教程、图注或首页说明 |

### 字幕

| 概念 / App key | App 法语实际值 | 英文界面名称 | 网站使用位置 |
| --- | --- | --- | --- |
| `subtitle_select_all` | Tout sélectionner | Select all | 字幕对应教程、图注或首页说明 |
| `subtitle_format` | Format des sous-titres | Caption format | 字幕对应教程、图注或首页说明 |
| `subtitle_export_count` | Exporter les sous-titres (%ld) | Export captions (%ld) | 字幕对应教程、图注或首页说明 |
| `post_text_export_destination` | Exporter vers | Export to | 字幕对应教程、图注或首页说明 |
| `post_text_save_files` | Enregistrer dans Fichiers | Save to Files | 字幕对应教程、图注或首页说明 |
| `分享` | Partager | Share | 字幕对应教程、图注或首页说明 |

## App 标签差异与证据核对

- `识别剪贴板链接自动下载` 的 `Liens de téléchargement automatique` 不像开关动作说明；网站保留此实际名称，并解释它会检测复制链接并建立任务。
- `subtitle_tab_profile` 为 `Lot`，而 `批量` 为 `Par lots`（截图工具批量模式）；网站按入口区分两者，不把下载分页写成截图模式。
- `资源管理` 实际为 `Gestion`，部分 App 提示写 Gestionnaire de ressources / Ressources；教程始终按底部入口 `Gestion` 指路。
- `清晰` 为 `Effacer`（通常意为清除），但此处是 GIF 清晰预设。网站明确解释其含义，未将该操作改成清除。
- `保持音调` 为 `Préserver le pas`，网站保留名称，并解释是保持声音音高。
- `画布比例` 为 `Taux de canevas`、`封面帧` 为 `Cadre de couverture`、`截图时间` 为 `Durée de capture`；网站分别说明宽高比、封面静帧、截图时间点。
- `预计处理后时长：%@` 的值为 `Durée de traitement estimée : %@`，容易误认为处理耗时；教程说明它指输出视频预计时长。
- `帧率` 为 `Frame rate`、`单张` 为 `Single`，镜像枚举也是 H Flip / V Flip / Side Sym 等英文。教程保留这些实际标签，并给出法语解释。
- 水印 `透明度` 实际为 `Opacité`；降低值使水印更淡，未反转滑块效果。已实际查看原始 `watermark-result-orange.webp`，图中是 `Made by ClipDock`；法语据实保留，纠正对照源 exampleNote 中品牌误写的影响，未改其他语言文件。
- 上述 App 文案差异均只记录，不修改 App。没有通过此任务执行或重新验证付费工具、设备相册保存、音频试听、MD5 比较或锁屏壁纸兼容性。

## 验证

验证针对当前工作区构建，预览地址为 `http://127.0.0.1:4331/fr/`。网站工作目录为 `/Users/viktorhuang/Desktop/iOS/ClipDock-Landing`。任务期间 HEAD 另新增了 `568365e`（德国生产部署记录），只涉及既有德国交付文档；本任务没有改写或提交这些内容。

| 检查 | 结果 |
| --- | --- |
| `npm run check:i18n` | 13 项通过，包含法语覆盖、App 名称、证据说明、参数边界、示例链接与语言注册检查 |
| `npx tsc --noEmit` | 通过 |
| `npm run build` | 通过，生成 406 个页面；最后一次构建包含窄屏标题修复 |
| `python3 scripts/verify-site.py` | 406 个页面、405 个 sitemap URL、28,993 个本地引用，0 错误 |
| `python3 scripts/verify-locales.py` | 9 种语言、405 个本地化页面，每种语言 41 篇教程，0 错误 |
| `node --test tests/videoRecovery.test.mjs` | 4 项通过 |
| `git diff --check` | 通过 |
| `node scripts/export-copy-review.cjs fr` | 已导出最终有效文案并核对；法语单独维护，无整句源语言回退 |

### 浏览器布局

使用 agent-browser 的 Chromium 在本地预览站点验证。自动扫描通过同源 iframe 逐页渲染，等待字体和布局完成，检查文档横向溢出、所有可见标题的文字边界及已加载图片错误：

- 法语首页、教程索引、41 篇教程、隐私政策和条款，共 45 个页面；宽度 375、390、768、1024、1440，共 225 次检查，最终 0 个溢出或图片错误。见 [完整布局记录](fr/browser-layout.json)。
- 原有 8 种语言各抽查首页和裁框教程，宽度 375、1440，共 32 次检查，0 错误。见 [旧语言回归记录](fr/browser-regression.json)。
- 实际浏览器视口另检查首页、菜单、工具卡片、裁框教程正文和步骤、字幕轮播、隐私页面，并查看下列截图。自动扫描不等于对全部长页面逐屏人工视觉审阅，未进行真机 Safari 测试。

| 场景 | 截图 |
| --- | --- |
| 首页 | [375 px](fr/home-375.png)、[1440 px](fr/home-1440.png) |
| 语言菜单 | [375 px](fr/menu-375.png)、[1440 px](fr/menu-1440.png) |
| 移动导航 | [375 px](fr/navigation-375.png) |
| 工具区域 | [375 px](fr/tools-375.png)、[1440 px](fr/tools-1440.png) |
| 长名称教程 | [375 px 正文](fr/resize-title-375.png)、[375 px 步骤](fr/resize-step-375.png) |
| 字幕轮播 | [375 px](fr/carousel-375.png) |
| 隐私政策 | [375 px](fr/privacy-375.png) |

### 浏览器交互

- 在裁框教程中通过语言菜单执行法语 → 英语 → 法语，文章 slug 保持 `resize-video-iphone`；移动菜单可跳转到法语首页工具锚点。
- 核对四段演示的 19 条法语字幕：在实际组件中设置各字幕区间内的播放时间、触发 `timeupdate` 并比对显示文字。四个演示选择按钮会更新选中状态、媒体地址和首条字幕。连续逐帧 seek 检查曾发生浏览器会话超时，因此最终记录使用上述时间事件检查，未将其表述为逐段完整播放验收。
- 字幕轮播可暂停为 `Lire`、继续为 `Pause`；选择第五步后，图注及 `aria-current` 更新，读屏标签为法语。FAQ 和平台列表可展开、收起。见 [交互结果](fr/browser-interactions.json)。
- 用临时不可解码视频触发实际媒体错误，显示 `La vidéo est momentanément indisponible` / `Réessayer la lecture`；恢复原视频地址并点击重试后，视频进入播放状态、readyState 为 4，错误面板隐藏。测试仅改变浏览器当前 DOM，没有改动源媒体。见 [失败提示](fr/browser-media.json)、[恢复播放](fr/browser-retry.json)。
- 共享 `/404.html` 正常显示英文正文，页脚的 `FRANÇAIS` 可返回 `/fr/`。法语专属 404 未新增。
- 最终页面检查未发现未捕获 JavaScript 错误。测试使用的独立 agent-browser 会话已关闭，本地预览服务保留。

## 交付状态

- 法语已加入当前分支的构建列表和语言菜单。
- 用户已授权提交并部署。正式构建已通过，部署提交与线上验收结果记录于下方。
- 未进行法语母语者审校；自动检查与本次语义检查不作此类声明。

## 正式部署

- 2026-09-10：用户授权提交并部署法语版本。
- `npm run build:production` 通过：406 个页面、405 个 sitemap URL、28,993 个本地引用，9 种语言各 41 篇教程；页面和语言校验均为 0 错误。
- 沿用素材版本 `c5dcf79585974e0e`；Vercel 与腾讯云两端各 526 个素材清单校验一致，没有发布新素材或修改 CDN 配置。
- 推送后通过现有 GitHub Pages 工作流部署，待记录工作流结果和正式域名验证。
