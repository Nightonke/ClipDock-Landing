# 视频处理教程实测记录

实测日期：2026-09-08。设备：iPhone 17 Pro Max 模拟器，iOS 26.0。App 英文界面。

教程范围按 Process 页六行、每行三个入口排列，共 18 项。每篇首图均为真实工具总览，使用橙色边框和箭头标出对应入口。

截图通过 Simulator 的 Save Screen 保存原始屏幕，再使用用户提供的工具套壳：

`/Users/viktorhuang/Desktop/iOS/NVideo/Tools/AppStoreScreenshotFramer/add_iphone_frame.py --frame orange`

外壳输出尺寸为 1319×2748。网页格式压缩不改变像素尺寸。

## 本次验证边界

结果页出现或文件生成，不等于已逐帧、逐段试听，也不等于所有付费参数都经过验证。教程正文分别标明这些边界。未购买或解锁 VIP。

| 功能 | 实际执行的配置／流程 | 已观察到的结果与限制 |
| --- | --- | --- |
| Video to GIF | Custom，约 6 秒，8fps，360 宽度 | 生成 GIF；未验证付费预设 |
| Video to Live Photo | 3 秒，Balanced，Keep Sound | App 提示 Live Photo saved to Photos；未验证照片 App 长按播放 |
| Transcode Video | MP4、H.264、Original、Standard、Keep Sound、Auto | 生成约 6 秒视频 |
| Trim Video | Select Segment，00:00–00:06 | 生成约 6 秒视频；Even Split 触发 VIP 页 |
| Stitch Videos | 一个主视频，追加两个片段，交换追加顺序 | 结果 11:46；播放时间推进；Saved to Photos 成功提示 |
| Interleave | A 约 6 秒、B 约 2:26；5 段、A 起始、50ms | 结果 02:31；摘要将 A 分配 3 段，B 分配 2 段 |
| Segment Grid | 2×2、原视频尺寸、静音 | 四格结果；时长整秒显示 00:01，设置页预估约 2 秒 |
| Resize / Canvas | 1:1、Fit、默认黑色背景 | 生成带背景区域的结果 |
| Rotate Video | Rotate Right 90 | 结果画面向右旋转 |
| Mirror Video | H Flip | 结果画面左右翻转 |
| Reverse Video | Mute | 结果首帧和缩略图顺序反转 |
| Change Speed | 1.50x，未开启 Preserve Pitch | 约 6 秒输入输出约 4 秒 |
| Audio Editing | Volume 100% | 生成视频，历史摘要显示 Volume 100%；未验证其他音量效果 |
| Add Watermark | Text，ClipDock Demo，默认样式 | 模拟器导出异常仍存在；用户随后提供真机结果截图 IMG_8161.PNG，显示 15 秒 _watermark.mp4 与右下角 Made by ClipDock 水印。教程已替换为真机结果步骤；未获得保存成功提示或实际播放验证 |
| Video Capture | Single、00:00、时间戳关闭 | JPEG 640×338、66 KB 预览；Batch/Smart/Sheet 带 VIP 标记，未执行 |
| Extract Audio | 从相册视频直接提取 | 生成 M4A；分享面板可见，保存到文件后续流程未验证成功 |
| Change MD5 | 对短视频直接处理 | 生成 _md5.mp4；未计算输入输出的摘要值 |
| Merge Audio and Video | 短视频画面 + 另一相册视频的音频来源 | 生成约 6 秒结果；未逐段试听音轨 |

## 网站验证

- 18 个工具条目，顺序与 Process 页一致。
- 每篇首图均有对应入口标注。
- 所有截图引用存在、带橙色外壳；工具文章没有截图占位。
- 相关教程链接全部指向已存在的 slug。
- 本地文章与图片请求通过，Astro 静态构建通过。
- 入口标注和长参数章节进行浏览器抽查；未部署。

## 水印真机截图补充

用户授权使用 `/Users/viktorhuang/Downloads/IMG_8161.PNG`，允许素材与水印文字不同。使用指定工具套橙色外壳，再转为无损 WebP。正文区分参数示例与真机结果；保存步骤为操作说明，不声称已验证保存成功。
