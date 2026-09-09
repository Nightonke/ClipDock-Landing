# 繁體中文網站適配記錄

日期：2026-09-09。網站 locale：`zh-Hant`；語言選單：繁體中文；地區表達：台灣常用說明文；稱呼：你。品牌使用 `ClipDock 影隨存`，正文簡稱「影隨存」，與 App `InfoPlist.strings` 的顯示名稱一致。HTML/hreflang：`zh-Hant`；OG：`zh_TW`；方向：`ltr`。

## 來源與範圍

- 網站基準：`da042dcd4b541cc035d9e5794c9d72470bcac8f5`，目前檢出 `main`；開始時工作區乾淨。
- App 基準：`5fc01b2572c2b405701f560935f797867c932043`，開始時工作區乾淨。只讀對照 `ResourceDownloader/zh-Hant.lproj/Localizable.strings`、`InfoPlist.strings`，以及剪貼簿、字幕、影片處理頁的相關 key。未修改或編譯 App。
- 結構以 `tutorial-structure.ts` 與型別為準；功能限制以本輪已修訂的簡中文案為基準，英文及既有素材作輔助。OpenCC 僅用於起草，之後逐組通讀有效文案並調整用語、按鈕、參數、平台名稱及標題。
- 已補齊首頁、導覽、共用標籤、錯誤文案、18 個工具卡片、41 篇教學（平台 8、剪貼簿 2、批次 12、字幕 1、工具 18）、158 個實際使用的截圖 ID 圖注，以及四段影片共 19 條字幕。
- 教學 slug、步驟/FAQ/排錯/細節數量、圖片 ID、範例 URL、數值與字幕時間軸保留。每篇批次教學的導言額外明示免費版前 2 頁限制；沒有增加或刪除步驟。
- 保留來源/登入/格式限制、背景辨識需要子母畫面與設定、通知權限、下載完成與儲存到相簿的差別、已有字幕限制，以及 VIP、MD5 未比較雜湊、音軌未完整試聽、抖音沿用 TikTok 配圖等驗證邊界。
- 檢視浮水印真機結果原圖後，繁中範例文字使用 `Made by ClipDock`；原始素材與檔名未修改。滑桿數值調低會讓浮水印變淡的說明保留。

## 公共接入與排版

- `publishedLocales` 啟用繁中，新增完整 home/catalog/字幕映射；landing/common 原本已有繁中映射，確認後沿用。各語言正文獨立，沒有執行期簡中回退。
- 將 OG locale 與文字方向集中到各語言 `meta.ts`／`localeMeta`，首頁與教學版型共同讀取；修正非英文教學全部使用 `zh_CN` 的舊邏輯。
- sitemap 按實際發布語言排除法律跳轉與草稿；`verify-locales.py` 透過匯出實際註冊表檢查全部語言、路由、對應步驟、canonical、hreflang、OG、方向和 sitemap。
- 繁中使用自己的 `Intl.Segmenter` 和產品詞語清單，保留「影隨存」「實況照片」「子母畫面」等詞。`HeadingText` 保留顯式換行，測試文字、空格及標點不變；共用中文行高、標題換行和頁尾規則擴展至繁中。
- 正文採「影片、儲存、相簿、連結、辨識、背景、子母畫面、檔案、匯入、匯出、參數」。操作名稱以 App 真實值為準；首次關鍵操作保留英文素材名稱對照。

## App 用詞差異與查核

以下是 App 現有值，網站保留操作名稱，沒有順手更動 App：

- `识别剪贴板链接自动填充`／`识别剪贴板链接自动下载` 使用「鏈接」；`进入后台继续识别剪贴板自动下载` 使用「後台識別並下載」。正文仍使用「連結／背景辨識」。
- `视频拼接`、`视频旋转`、`视频镜像`、`视频变速` 使用「視訊」，其他工具使用「影片」。工具標題及操作入口逐項保留實際值。
- `分享文件` 為「分享文件」；`正在加载列表` 為「正在載入列表」；`暂无可处理的已下载视频` 為「暫無可處理的已下載視頻」。操作引用保留，正文用「檔案／清單／影片」。
- `帧率` 為「幀率」，正文解釋為影格率；`倒放音频` 為「倒放音頻」；`水印类型`／`水印位置` 使用「水印」，正文用「浮水印」。
- 同樣的簡中「批量」不能按英文 Batch 反查：`DIYResourceExtractVC.m` 使用 `subtitle_tab_profile`，繁中是「批次」；`DIYVideoProcessOptionsVC+Controls.m` 的截圖模式使用原始 key `批量`，繁中是「大量」。截圖教學引用「大量*」（Batch*），正文說明其批次擷取影格功能。
- 處理進度的「正在处理视频」應引用 `DIYVideoProcessService.m` 使用的原始 key，繁中為「正在處理視頻」；不是 Live Activity 的 `live_activity_processing_video`（「正在處理影片」）。字幕匯出目的地則確實使用 `post_text_export_destination`（已對照 `DIYSubtitleExtractVC.m`）。

## 驗收

| 檢查 | 結果 |
| --- | --- |
| `npm run check:i18n` | 7 項通過，覆蓋缺漏文案、圖注、字幕、註冊表、工具、占位符及中文分詞 |
| `npx tsc --noEmit` | 通過 |
| `npm run build` | 通過，136 頁 |
| `python3 scripts/verify-site.py` | 通過；136 頁、129 個 sitemap URL、7,441 個本地引用 |
| `python3 scripts/verify-locales.py` | 通過；129 個語言內容頁，三種語言各 41 篇教學 |
| `node --test tests/videoRecovery.test.mjs` | 4 項通過 |
| `git diff --check` | 通過 |
| 有效文案匯出／數值核對 | 已匯出 `/tmp/clipdock-zh-Hant-review.json` 通讀；與簡中逐欄比較教學數值及範例 URL 無差異（導言新增的前 2 頁限制除外） |
| 瀏覽器排版掃描 | agent-browser 啟動的 Chromium，當前工作區 `astro preview`，`http://127.0.0.1:4322`；375、390、768、1024、1440 各檢查首頁、教學索引及全部 41 篇，共 215 組，未發現頁面／標題／圖注溢出 |
| 互動 | 375／1440 的語言選單可往返英／簡／繁並保留浮水印教學 slug；英／簡首頁回歸無溢出；平台展開、FAQ、五個功能區、工具、下載及頁尾已檢查 |
| 媒體 | 四段影片均正常播放且顯示繁中字幕；五步字幕輪播的末頁、暫停與恢復標籤正確；在測試瀏覽器注入無效影片來源後顯示「影片暫時無法播放／重試播放」 |

代表截圖及機器記錄保存在同目錄的 `zh-Hant/` 子目錄：

- [手機首頁](zh-Hant/zh-Hant-375.png)、[桌面首頁](zh-Hant/zh-Hant-1440.png)、[教學目錄](zh-Hant/articles-375.png)。
- [Instagram 長標題](zh-Hant/batch-download-instagram-profile-iphone-375.png)、[轉碼教學](zh-Hant/transcode-video-iphone-375.png)。
- [背景下載功能](zh-Hant/feature-2-375.png)、[字幕功能](zh-Hant/feature-5-1440.png)、[工具區](zh-Hant/tools-1440.png)、[頁尾](zh-Hant/footer-375.png)。
- [手機語言選單](zh-Hant/language-menu-375.png)、[桌面語言選單](zh-Hant/language-menu-1440.png)、[輪播](zh-Hant/carousel-1440.png)、[媒體錯誤提示](zh-Hant/media-recovery-1440.png)。
- [215 組排版檢查](zh-Hant/layout-checks.json)、[互動記錄](zh-Hant/interaction-checks.json)。

43 個繁中內容頁的 OG/Twitter 標題和描述已核對；首頁與 41 篇文章的 JSON-LD 可解析且語言正確，Article URL 指向繁中。教學索引沿用原版未輸出 JSON-LD 的行為。法律跳轉的 refresh 目標與英文路由一致。

全量排版掃描屬於自動檢查；人工視覺查閱涵蓋代表性的手機／桌面首頁、長標題教學、目錄、功能區、工具、頁尾及媒體控件，不代表逐頁真機人工驗收，也不是母語者審校。

## 例外及交付狀態

- `/404.html` 仍為共用英文錯誤頁；補上繁中首頁直接入口並驗證選單。未新增專屬繁中 404 或更動託管規則。
- 隱私政策、使用者協定僅翻譯網站入口；各語言路由保持既有外部跳轉目標並排除 sitemap。未翻譯外部法律正文，也未更動 App Store 資料或商店地區。
- 圖片與影片仍是既有英文 App 素材；未製作虛假的繁中截圖。未執行 App 的實機功能測試或 Xcode 編譯。
- 已加入本地構建及語言選單；本記錄隨繁中適配一併提交，未推送、未部署。仍可另安排台灣母語者校對及 iPhone／iPad Safari 真機檢查。

## 核心操作與參數術語表

「英文名稱」來自同 key 的 App 英文值，作為素材對照；素材若來自舊版本，正文沿用圖中可見英文。位置是繁中網站內實際出現該值的檔案。

| 概念／簡中值 | App 原始 key | App 繁中實際值 | 英文名稱 | 網站位置 |
| --- | --- | --- | --- | --- |
| A 开始 | `A 开始` | A 開始 | Start with A | `tutorials/tools.ts` |
| B 开始 | `B 开始` | B 開始 | Start with B | `tutorials/tools.ts` |
| 导出到 | `post_text_export_destination` | 匯出至 | Export to | `tutorials/subtitles.ts` |
| 正在提取字幕… | `subtitle_extracting` | 正在擷取字幕… | Extracting captions… | `tutorials/subtitles.ts` |
| 字幕格式 | `subtitle_format` | 字幕格式 | Caption format | `tutorials/subtitles.ts` |
| 全选 | `subtitle_select_all` | 全選 | Select all | `tutorials/batch.ts`, `tutorials/subtitles.ts` |
| 批量 | `subtitle_tab_profile` | 批次 | Batch | `site-ui.ts`, `tutorial-index.ts`, `screenshots.ts`, `home.ts`, `demo-captions.ts`, `tutorials/clipboard.ts`, `tutorials/platform.ts`, `tutorials/batch.ts`, `tutorials/tools.ts` |
| 视频 | `subtitle_tab_single` | 影片 | Video | `errors.ts`, `site-ui.ts`, `common.ts`, `tutorial-index.ts`, `screenshots.ts`, `landing.ts`, `home.ts`, `demo-captions.ts`, `tutorials/clipboard.ts`, `tutorials/platform.ts`, `tutorials/batch.ts`, `tutorials/tools.ts`, `tutorials/subtitles.ts` |
| 字幕 | `subtitle_tab_title` | 字幕 | Subtitles | `errors.ts`, `site-ui.ts`, `tutorial-index.ts`, `screenshots.ts`, `home.ts`, `tutorials/tools.ts`, `tutorials/subtitles.ts` |
| 上下翻转 | `上下翻转` | 上下翻轉 | V Flip | `tutorials/tools.ts` |
| 下载 | `下载` | 下載 | Download | `errors.ts`, `site-ui.ts`, `common.ts`, `tutorial-index.ts`, `screenshots.ts`, `landing.ts`, `home.ts`, `demo-captions.ts`, `tutorials/clipboard.ts`, `tutorials/platform.ts`, `tutorials/batch.ts`, `tutorials/tools.ts` |
| 下载中 | `下载中` | 下載中 | Downloading | `tutorials/batch.ts` |
| 下载完成后自动保存到相册 | `下载完成后自动保存到相册` | 下載完成後自動儲存到相簿 | Auto-Save Completed Downloads to Photos | `home.ts`, `tutorials/platform.ts`, `tutorials/batch.ts` |
| 下载设置 | `下载设置` | 下載設定 | Download Settings | `home.ts`, `tutorials/clipboard.ts`, `tutorials/platform.ts`, `tutorials/batch.ts` |
| 中心翻转 | `中心翻转` | 中心翻轉 | 180 | `tutorials/tools.ts` |
| 交叉拼接 | `交叉拼接` | 交叉拼接 | Interleave | `screenshots.ts`, `home.ts`, `tutorials/tools.ts` |
| 从下载列表选择 | `从下载列表选择` | 從下載清單選擇 | Choose from Downloads | `tutorials/tools.ts` |
| 从文件选择 | `从文件选择` | 從檔案選擇 | Choose from Files | `tutorials/tools.ts` |
| 从相册视频提取音轨 | `从相册视频提取音轨` | 從相簿影片擷取音軌 | Extract audio from Photos video | `tutorials/tools.ts` |
| 从系统相册选择 | `从系统相册选择` | 從系統相簿選擇 | Choose from Photos | `screenshots.ts`, `tutorials/tools.ts` |
| 保存到相册 | `保存到相册` | 儲存到相簿 | Save to Photos | `screenshots.ts`, `landing.ts`, `home.ts`, `demo-captions.ts`, `tutorials/clipboard.ts`, `tutorials/platform.ts`, `tutorials/batch.ts`, `tutorials/tools.ts`, `tutorials/subtitles.ts` |
| 保持音调 | `保持音调` | 保持音調 | Preserve Pitch | `tutorials/tools.ts` |
| 保留声音 | `保留声音` | 保留聲音 | Keep Sound | `tutorials/tools.ts` |
| 保留音频 | `保留音频` | 保留音訊 | Keep Audio | `tutorials/tools.ts` |
| 修改 MD5 | `修改 MD5` | 修改 MD5 | Change MD5 | `screenshots.ts`, `home.ts`, `tutorials/tools.ts` |
| 倒放音频 | `倒放音频` | 倒放音頻 | Reverse Audio | `tutorials/tools.ts` |
| 全选 | `全选` | 全選 | Select All | `tutorials/batch.ts`, `tutorials/subtitles.ts` |
| 全选已加载 | `全选已加载` | 全選已載入 | Select loaded | `tutorials/batch.ts` |
| 全部 | `全部` | 全部 | All | `home.ts`, `tutorials/platform.ts`, `tutorials/batch.ts`, `tutorials/tools.ts` |
| 分享 | `分享` | 分享 | Share | `site-ui.ts`, `tutorial-index.ts`, `screenshots.ts`, `landing.ts`, `home.ts`, `demo-captions.ts`, `tutorials/clipboard.ts`, `tutorials/platform.ts`, `tutorials/batch.ts`, `tutorials/tools.ts`, `tutorials/subtitles.ts` |
| 分享文件 | `分享文件` | 分享文件 | Share File | `screenshots.ts`, `tutorials/tools.ts` |
| 分段宫格 | `分段宫格` | 分段宮格 | Segment Grid | `screenshots.ts`, `home.ts`, `tutorials/tools.ts` |
| 分辨率 | `分辨率` | 解析度 | Resolution | `screenshots.ts`, `tutorials/platform.ts`, `tutorials/tools.ts` |
| 加入下载队列 | `加入下载队列` | 加入下載佇列 | Add to the queue | `screenshots.ts`, `home.ts`, `demo-captions.ts`, `tutorials/batch.ts` |
| 加载下一页 | `加载下一页` | 載入下一頁 | Load next page | `screenshots.ts`, `tutorials/batch.ts` |
| 加载列表 | `加载列表` | 載入清單 | Load list | `screenshots.ts`, `home.ts`, `demo-captions.ts`, `tutorials/batch.ts` |
| 单张 | `单张` | 單張 | Single | `home.ts`, `tutorials/tools.ts` |
| 原始 | `原始` | 原始 | Original | `tutorials/platform.ts`, `tutorials/tools.ts` |
| 原比例 | `原比例` | 原比例 | Original | `tutorials/tools.ts` |
| 原画 | `原画` | 原畫 | Original | `tutorials/tools.ts` |
| 原视频尺寸 | `原视频尺寸` | 原影片尺寸 | Original Video Size | `tutorials/tools.ts` |
| 取消 | `取消` | 取消 | Cancel | `screenshots.ts`, `tutorials/tools.ts` |
| 右转 90 | `右转90` | 右轉 90 | Rotate Right 90 | `tutorials/tools.ts` |
| 后台下载完成/失败时发送通知 | `后台下载完成/失败时发送通知` | 後台下載完成/失敗時發送通知 | Notify When Background Downloads Complete or Fail | `tutorials/clipboard.ts` |
| 固定时长 | `固定时长` | 固定時長 | Fixed Duration | `tutorials/tools.ts` |
| 图片 | `图片` | 圖片 | Image | `site-ui.ts`, `screenshots.ts`, `home.ts`, `tutorials/platform.ts`, `tutorials/batch.ts`, `tutorials/tools.ts` |
| 均衡 | `均衡` | 均衡 | Balanced | `tutorials/tools.ts` |
| 声音 | `声音` | 聲音 | Sound | `tutorial-index.ts`, `screenshots.ts`, `home.ts`, `tutorials/platform.ts`, `tutorials/tools.ts` |
| 处理参数 | `处理参数` | 處理參數 | Processing Options | `tutorials/tools.ts` |
| 处理完成 | `处理完成` | 處理完成 | Processing Complete | `screenshots.ts`, `tutorials/tools.ts` |
| 处理方式 | `处理方式` | 處理方式 | Processing Mode | `tutorials/tools.ts` |
| 复制分享链接可以自动下载 | `复制分享链接可以自动下载` | 複製分享連結可以自動下載 | Copy a shared link to download automatically | `tutorials/clipboard.ts` |
| 复制链接 | `复制链接` | 複製連結 | Copy Link | `site-ui.ts`, `tutorial-index.ts`, `screenshots.ts`, `home.ts`, `demo-captions.ts`, `tutorials/clipboard.ts`, `tutorials/platform.ts`, `tutorials/batch.ts` |
| 大图 | `大图` | 大圖 | Sheet | `site-ui.ts`, `home.ts`, `tutorials/tools.ts` |
| 失败 | `失败` | 失敗 | Failed | `screenshots.ts`, `home.ts`, `tutorials/clipboard.ts`, `tutorials/platform.ts`, `tutorials/batch.ts` |
| 字体颜色 | `字体颜色` | 字體顏色 | Text Color | `tutorials/tools.ts` |
| 完成 | `完成` | 完成 | Done | `site-ui.ts`, `screenshots.ts`, `home.ts`, `demo-captions.ts`, `tutorials/clipboard.ts`, `tutorials/platform.ts`, `tutorials/batch.ts`, `tutorials/tools.ts`, `tutorials/subtitles.ts` |
| 完成时通知我 | `完成时通知我` | 完成時通知我 | Notify me when complete | `tutorials/tools.ts` |
| 实况照片已保存到相册 | `实况照片已保存到相册` | 實況照片已儲存到相簿 | Live Photo saved to Photos | `tutorials/tools.ts` |
| 实况质量 | `实况质量` | 實況品質 | Live Photo Quality | `tutorials/tools.ts` |
| 宽度 | `宽度` | 寬度 | Width | `screenshots.ts`, `tutorials/tools.ts` |
| 导出尺寸 | `导出尺寸` | 匯出尺寸 | Export Size | `tutorials/tools.ts` |
| 导出截图 | `导出截图` | 匯出截圖 | Export Image | `tutorials/tools.ts` |
| 封面帧 | `封面帧` | 封面影格 | Cover Frame | `tutorials/tools.ts` |
| 将此画质设为默认，以后不再询问 | `将此画质设为默认，以后不再询问` | 將此畫質設為預設，以後不再詢問 | Set this quality as default and don't ask again | `tutorials/platform.ts` |
| 小体积 | `小体积` | 小體積 | Smaller Size | `tutorials/tools.ts` |
| 尺寸/画布 | `尺寸/画布` | 尺寸/畫布 | Resize / Canvas | `screenshots.ts`, `home.ts`, `tutorials/tools.ts` |
| 左右翻转 | `左右翻转` | 左右翻轉 | H Flip | `tutorials/tools.ts` |
| 左转 90 | `左转90` | 左轉 90 | Rotate Left 90 | `tutorials/tools.ts` |
| 已保存到相册 | `已保存到相册` | 已儲存至相簿 | Saved to Photos | `tutorials/tools.ts` |
| 已完成 | `已完成` | 已完成 | Completed | `screenshots.ts`, `home.ts`, `tutorials/platform.ts`, `tutorials/batch.ts`, `tutorials/tools.ts` |
| 布局方式 | `布局方式` | 佈局方式 | Layout | `tutorials/tools.ts` |
| 帧率 | `帧率` | 幀率 | Frame Rate | `tutorials/tools.ts` |
| 平均分割 | `平均分割` | 平均分割 | Even Split | `tutorials/tools.ts` |
| 开始处理 | `开始处理` | 開始處理 | Start Processing | `tutorials/tools.ts` |
| 快速编辑 | `快速编辑` | 快速編輯 | Quick Edit | `tutorials/tools.ts` |
| 总段数 | `总段数` | 總段數 | Total Segments | `tutorials/tools.ts` |
| 截取范围 | `截取范围` | 截取範圍 | Clip Range | `tutorials/tools.ts` |
| 截图时间 | `截图时间` | 截圖時間 | Capture Time | `tutorials/tools.ts` |
| 截图模式 | `截图模式` | 截圖模式 | Capture Mode | `screenshots.ts`, `tutorials/tools.ts` |
| 截图预览 | `截图预览` | 截圖預覽 | Screenshot Preview | `landing.ts`, `tutorials/tools.ts` |
| 批量 | `批量` | 大量 | Batch | `tutorials/tools.ts` |
| 推荐组合 | `推荐组合` | 推薦組合 | Presets | `screenshots.ts`, `tutorials/tools.ts` |
| 描边颜色 | `描边颜色` | 描邊顏色 | Stroke Color | `tutorials/tools.ts` |
| 提取 | `提取` | 提取 | Extract | `errors.ts`, `site-ui.ts`, `tutorial-index.ts`, `screenshots.ts`, `landing.ts`, `home.ts`, `demo-captions.ts`, `tutorials/clipboard.ts`, `tutorials/platform.ts`, `tutorials/batch.ts`, `tutorials/tools.ts`, `tutorials/subtitles.ts` |
| 提取音频 | `提取音频` | 提取音訊 | Extract Audio | `site-ui.ts`, `screenshots.ts`, `home.ts`, `tutorials/tools.ts` |
| 文字 | `文字` | 文字 | Text | `screenshots.ts`, `home.ts`, `tutorials/platform.ts`, `tutorials/tools.ts` |
| 文字内容 | `文字内容` | 文字內容 | Text Content | `tutorials/tools.ts` |
| 文字描边 | `文字描边` | 文字描邊 | Text Stroke | `tutorials/tools.ts` |
| 旋转方向 | `旋转方向` | 旋轉方向 | Rotation | `screenshots.ts`, `tutorials/tools.ts` |
| 显示背景 | `显示背景` | 顯示背景 | Show Background | `tutorials/tools.ts` |
| 智能 | `智能` | 智慧 | Smart | `home.ts`, `tutorials/tools.ts` |
| 暂无可处理的已下载视频 | `暂无可处理的已下载视频` | 暫無可處理的已下載視頻 | No downloaded videos available for processing | `tutorials/tools.ts` |
| 更换链接 | `更换链接` | 更換連結 | Change link | `tutorials/batch.ts` |
| 替换 | `替换` | 替換 | Replace | `tutorials/tools.ts` |
| 未选择 | `未选择` | 未選擇 | Not Selected | `tutorials/tools.ts` |
| 查看任务 | `查看任务` | 查看任務 | View Task | `screenshots.ts`, `tutorials/platform.ts` |
| 标准 | `标准` | 標準 | Standard | `home.ts`, `tutorials/tools.ts` |
| 横向数量 | `横向数量` | 橫向數量 | Columns | `tutorials/tools.ts` |
| 正在加载列表 | `正在加载列表` | 正在載入列表 | Loading list | `tutorials/batch.ts` |
| 正在处理视频 | `正在处理视频` | 正在處理視頻 | Processing video | `tutorials/tools.ts` |
| 每格保持原尺寸 | `每格保持原尺寸` | 每格保持原尺寸 | Keep Each Tile Original Size | `tutorials/tools.ts` |
| 水印位置 | `水印位置` | 水印位置 | Watermark Position | `tutorials/tools.ts` |
| 水印类型 | `水印类型` | 水印類型 | Watermark Type | `tutorials/tools.ts` |
| 流畅 | `流畅` | 流暢 | Smooth | `tutorials/tools.ts` |
| 淡入淡出 | `淡入淡出` | 淡入淡出 | Fade In/Out | `tutorials/tools.ts` |
| 添加水印 | `添加水印` | 添加浮水印 | Add Watermark | `screenshots.ts`, `home.ts`, `tutorials/tools.ts` |
| 添加视频 | `添加视频` | 新增影片 | Add Video | `screenshots.ts`, `tutorials/tools.ts` |
| 清晰 | `清晰` | 清晰 | Clear | `screenshots.ts`, `tutorials/platform.ts`, `tutorials/tools.ts` |
| 画布比例 | `画布比例` | 畫布比例 | Canvas Ratio | `screenshots.ts`, `home.ts`, `tutorials/tools.ts` |
| 留边适配 | `留边适配` | 留邊適配 | Fit | `screenshots.ts`, `tutorials/tools.ts` |
| 目标大小 | `目标大小` | 目標大小 | Target Size | `tutorials/tools.ts` |
| 码率 | `码率` | 碼率 | Bitrate | `tutorials/tools.ts` |
| 确定 | `确定` | 確定 | OK | `screenshots.ts`, `tutorials/tools.ts` |
| 移除声音 | `移除声音` | 移除聲音 | Remove Sound | `tutorials/tools.ts` |
| 第一段音频 | `第一段音频` | 第一段音訊 | First Segment Audio | `tutorials/tools.ts` |
| 等待下载 | `等待下载` | 等待下載 | Queued | `screenshots.ts`, `tutorials/batch.ts` |
| 粘贴 | `粘贴` | 貼上 | Paste | `site-ui.ts`, `screenshots.ts`, `home.ts`, `demo-captions.ts`, `tutorials/clipboard.ts`, `tutorials/platform.ts`, `tutorials/batch.ts`, `tutorials/subtitles.ts` |
| 纵向数量 | `纵向数量` | 縱向數量 | Rows | `tutorials/tools.ts` |
| 继续处理 | `继续处理` | 繼續處理 | Keep Processing | `screenshots.ts`, `tutorials/tools.ts` |
| 编码 | `编码` | 編碼 | Codec | `screenshots.ts`, `tutorials/tools.ts` |
| 网页视频 | `网页视频` | 網頁影片 | Web Video | `common.ts`, `landing.ts`, `home.ts` |
| 自动 | `自动` | 自動 | Auto | `site-ui.ts`, `screenshots.ts`, `home.ts`, `demo-captions.ts`, `tutorials/clipboard.ts`, `tutorials/platform.ts`, `tutorials/batch.ts`, `tutorials/tools.ts`, `tutorials/subtitles.ts` |
| 自定义 | `自定义` | 自訂 | Custom | `tutorials/tools.ts` |
| 自定义码率 | `自定义码率` | 自訂碼率 | Custom Bitrate | `tutorials/tools.ts` |
| 裁剪填满 | `裁剪填满` | 裁剪填滿 | Fill Crop | `tutorials/tools.ts` |
| 裁剪方式 | `裁剪方式` | 裁切方式 | Trim Mode | `tutorials/tools.ts` |
| 裁剪范围 | `裁剪范围` | 裁剪範圍 | Trim Range | `tutorials/tools.ts` |
| 视频 | `视频` | 影片 | Video | `errors.ts`, `site-ui.ts`, `common.ts`, `tutorial-index.ts`, `screenshots.ts`, `landing.ts`, `home.ts`, `demo-captions.ts`, `tutorials/clipboard.ts`, `tutorials/platform.ts`, `tutorials/batch.ts`, `tutorials/tools.ts`, `tutorials/subtitles.ts` |
| 视频倒放 | `视频倒放` | 影片倒放 | Reverse Video | `screenshots.ts`, `home.ts`, `tutorials/tools.ts` |
| 视频变速 | `视频变速` | 視訊變速 | Change Speed | `screenshots.ts`, `home.ts`, `tutorials/tools.ts` |
| 视频截图 | `视频截图` | 影片截圖 | Video Capture | `screenshots.ts`, `home.ts`, `tutorials/tools.ts` |
| 视频拼接 | `视频拼接` | 視訊拼接 | Stitch Videos | `screenshots.ts`, `home.ts`, `tutorials/tools.ts` |
| 视频旋转 | `视频旋转` | 視訊旋轉 | Rotate Video | `screenshots.ts`, `home.ts`, `tutorials/tools.ts` |
| 视频裁剪 | `视频裁剪` | 影片裁切 | Trim Video | `screenshots.ts`, `home.ts`, `tutorials/tools.ts` |
| 视频转 GIF | `视频转 GIF` | 影片轉 GIF | Video to GIF | `screenshots.ts`, `home.ts`, `tutorials/tools.ts` |
| 视频转实况 | `视频转实况` | 影片轉實況 | Video to Live Photo | `screenshots.ts`, `home.ts`, `tutorials/tools.ts` |
| 视频转码 | `视频转码` | 影片轉碼 | Transcode Video | `screenshots.ts`, `home.ts`, `tutorials/tools.ts` |
| 视频镜像 | `视频镜像` | 視訊鏡像 | Mirror Video | `screenshots.ts`, `home.ts`, `tutorials/tools.ts` |
| 自动下载剪贴板链接 | `识别剪贴板链接自动下载` | 自動下載剪貼簿鏈接 | Auto-download Links | `home.ts`, `demo-captions.ts`, `tutorials/clipboard.ts` |
| 自动填入剪贴板链接 | `识别剪贴板链接自动填充` | 自動填入剪貼簿鏈接 | Fill from Clipboard | `tutorials/clipboard.ts` |
| 资源处理 | `资源处理` | 資源處理 | Process | `screenshots.ts`, `tutorials/tools.ts` |
| 资源提取 | `资源提取` | 資源提取 | Extract | `tutorials/clipboard.ts`, `tutorials/platform.ts`, `tutorials/batch.ts`, `tutorials/subtitles.ts` |
| 资源管理 | `资源管理` | 資源管理 | Manager | `screenshots.ts`, `home.ts`, `demo-captions.ts`, `tutorials/clipboard.ts`, `tutorials/platform.ts`, `tutorials/batch.ts` |
| 跟随下载设置 | `跟随下载设置` | 依照下載設定 | Follow download settings | `tutorials/batch.ts` |
| 输出格式 | `输出格式` | 輸出格式 | Output Format | `tutorials/platform.ts`, `tutorials/tools.ts` |
| 输出质量 | `输出质量` | 輸出品質 | Output Quality | `tutorials/tools.ts` |
| 后台识别并下载 | `进入后台继续识别剪贴板自动下载` | 後台識別並下載 | Detect in Background | `home.ts`, `demo-captions.ts`, `tutorials/clipboard.ts` |
| 选取片段 | `选取片段` | 選取片段 | Select Segment | `tutorials/tools.ts` |
| 选择下载品质 | `选择下载品质` | 選擇下載品質 | Select Quality | `screenshots.ts`, `tutorials/platform.ts` |
| 选择拼接视频 | `选择拼接视频` | 選擇拼接視頻 | Select Videos to Stitch | `tutorials/tools.ts` |
| 选择视频 | `选择视频` | 選擇影片 | Select Video | `screenshots.ts`, `tutorials/batch.ts`, `tutorials/tools.ts` |
| 透明度 | `透明度` | 透明度 | Opacity | `tutorials/tools.ts` |
| 速度倍率 | `速度倍率` | 速度倍率 | Speed | `tutorials/tools.ts` |
| 从链接提取 | `链接提取` | 從連結中提取 | Extract from Link | `tutorials/platform.ts` |
| 镜像方式 | `镜像方式` | 鏡像方式 | Mirror Mode | `tutorials/tools.ts` |
| 长片段 | `长片段` | 長片段 | Long | `tutorials/tools.ts` |
| 静音 | `静音` | 靜音 | Mute | `home.ts`, `tutorials/tools.ts` |
| 音视频合并 | `音视频合并` | 影音合併 | Merge Audio and Video | `screenshots.ts`, `home.ts`, `tutorials/platform.ts`, `tutorials/tools.ts` |
| 音量 | `音量` | 音量 | Volume | `home.ts`, `tutorials/tools.ts` |
| 音频处理 | `音频处理` | 音訊處理 | Audio Editing | `screenshots.ts`, `home.ts`, `tutorials/tools.ts` |
| 音频来源 | `音频来源` | 音訊來源 | Audio Source | `tutorials/tools.ts` |
| 高清 | `高清` | 高畫質 | HD | `home.ts`, `tutorials/platform.ts`, `tutorials/batch.ts`, `tutorials/tools.ts` |
| 高质量 | `高质量` | 高品質 | High Quality | `tutorials/tools.ts` |
