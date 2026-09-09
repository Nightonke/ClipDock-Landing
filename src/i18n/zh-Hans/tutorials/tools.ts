import type { TutorialCopy } from "../../types";
export const copy: Record<string, TutorialCopy> = {
  "video-to-gif-iphone": {
    "title": "如何在 iPhone 和 iPad 上把视频转换为 GIF？",
    "description": "把视频中的一段动作做成 GIF。先选好片段，再调整帧率和宽度，平衡流畅度、清晰度与文件大小。",
    "intro": "把视频中的一段动作做成 GIF。先选好片段，再调整帧率和宽度，平衡流畅度、清晰度与文件大小。",
    "tips": [
      {
        "title": "动图太大",
        "text": "先缩短片段，再降低宽度或帧率。只调整其中一项进行比较，便于找到能接受的清晰度与大小。"
      }
    ],
    "faq": [
      {
        "question": "为什么动图没有声音？",
        "answer": "GIF 格式不承载音频。需要同时保留声音时，请使用视频输出。"
      },
      {
        "question": "为什么某些选项有星号？",
        "answer": "页面注明超过 10 秒、高帧率、720 宽度和预设需要 VIP；本例采用免费参数完成转换。"
      }
    ],
    "steps": [
      {
        "title": "在 Process 页面打开 Video to GIF",
        "text": "点击底部 Process（处理），再打开 Video to GIF。"
      },
      {
        "title": "选择要处理的视频",
        "text": "在 Select Video（选择视频）中，点击 Choose from Photos（从相册选择）或 Choose from Files（从文件选择）导入视频。下载列表为空也可以导入。"
      },
      {
        "title": "选择片段和预设",
        "text": "导入视频后，先预览内容，再查看 Presets（预设）和 Clip Range（片段范围）。本例使用 Custom，保留约 6 秒片段。",
        "sections": [
          {
            "title": "Custom 与带星号的预设",
            "text": "Custom 用于自行选择参数。Clear*、Smooth*、Long* 分别提供偏向清晰、流畅和较长片段的预设，星号表示需要 VIP。"
          },
          {
            "title": "Clip Range：只保留需要的动作",
            "text": "拖动范围两端的圆形手柄，调整开始与结束位置；上方会显示起止时间和选中秒数。片段越长，通常需要的帧数和文件体积越大。超过 10 秒的片段需要 VIP。"
          }
        ]
      },
      {
        "title": "设置帧率和宽度",
        "text": "向下查看 Frame Rate（帧率）、Width（宽度）和预计大小，确认后点击 Start Processing。本例为 8fps、360 宽度，页面估算约 1.2 MB、48 帧。",
        "sections": [
          {
            "title": "Frame Rate：每秒保留多少帧",
            "text": "页面提供 6、8、12、15*、24* fps。较高帧率通常让动作更连贯，但也增加帧数和体积。简单动作可先试 8fps；快速动作可比较更高帧率。15 和 24fps 带 VIP 标记。"
          },
          {
            "title": "Width：动图的像素宽度",
            "text": "提供 240、360、540、720*。宽度越大，画面细节通常越多，文件也可能更大；720 需要 VIP。放大输出不能补回源视频中不存在的细节。"
          },
          {
            "title": "估算不是最终文件大小",
            "text": "6 秒 × 8fps 约为 48 帧。实际压缩体积还受画面复杂度影响，因此以导出文件为准。GIF 不包含声音，需要声音时应保存为视频。"
          }
        ]
      },
      {
        "title": "保存生成的 GIF",
        "text": "出现 Processing Complete（处理完成）后，点击 Save to Photos 保存 GIF，或用 Share File 分享。Done 关闭提示。保存后在支持动图的应用中查看播放效果。",
        "sections": []
      }
    ],
    "exampleNote": "截图采用 iPhone 17 Pro Max 模拟器（iOS 26.0）的英文界面，正文附中文按钮说明。示例参数和使用限制以该版本为背景。 示例使用 Custom、8 fps、360 宽度导出约 6 秒 GIF，未验证付费预设的具体参数组合。"
  },
  "video-to-live-photo-iphone": {
    "title": "如何在 iPhone 上把视频转换为实况照片（Live Photo）？",
    "description": "把一小段视频转成 Live Photo，可选择静止封面并保留声音。选好动作范围和封面帧，再保存到相册。",
    "intro": "把一小段视频转成 Live Photo，可选择静止封面并保留声音。选好动作范围和封面帧，再保存到相册。",
    "tips": [
      {
        "title": "封面和动作分别检查",
        "text": "静止封面满意不代表整段动作都合适。保存后再检查动作起止、声音和封面；分享时使用能够保留 Live Photo 的方式。"
      }
    ],
    "faq": [
      {
        "question": "能直接作为动态壁纸吗？",
        "answer": "转换和保存 Live Photo 与锁屏壁纸兼容性是两回事，是否可用还取决于设备和系统。本文不把转换成功等同于壁纸可用。"
      },
      {
        "question": "与 GIF 有什么不同？",
        "answer": "两者格式和分享方式不同；Live Photo 可保留声音，GIF 适用于动图场景且不包含声音。"
      }
    ],
    "steps": [
      {
        "title": "在 Process 页面打开 Video to Live Photo",
        "text": "点击底部 Process（处理），再打开 Video to Live Photo。"
      },
      {
        "title": "选择要处理的视频",
        "text": "在 Select Video（选择视频）中，点击 Choose from Photos（从相册选择）或 Choose from Files（从文件选择）导入视频。下载列表为空也可以导入。"
      },
      {
        "title": "确定实况范围与封面",
        "text": "导入视频后，在 Clip Range 中选择要保留的动作，再设置 Cover Frame（封面帧）。本例选中 00:00–00:03。",
        "sections": [
          {
            "title": "Clip Range：保留哪一段动作",
            "text": "两端的圆形手柄控制起止时间，上方同时显示所选时长。先围绕主体动作选一小段；当前页面注明超过 3 秒需要 VIP。"
          },
          {
            "title": "Cover Frame：静止时显示哪一帧",
            "text": "拖动封面滑块，对照左侧缩略图和时间选择封面。封面适合选在主体清楚、表情自然的位置，避免闭眼或明显运动模糊的一帧。封面选择与动作范围是两个不同设置。"
          }
        ]
      },
      {
        "title": "选择声音与画质",
        "text": "向下查看 Sound 和 Live Photo Quality，确认后点击 Start Processing。本例保留声音并使用 Balanced。",
        "sections": [
          {
            "title": "Remove Sound 与 Keep Sound",
            "text": "Remove Sound 移除声音；Keep Sound 保留片段声音。只需要视觉动作时可选静音，需要保留现场氛围时可保留声音。"
          },
          {
            "title": "Balanced、HD*、Original*",
            "text": "可先选择 Balanced。HD 和 Original 带 VIP 标记；提高输出画质无法补回源视频中缺失的细节。"
          }
        ]
      },
      {
        "title": "到相册检查实况效果",
        "text": "等待 Live Photo saved to Photos（实况照片已保存到相册）提示，再点击 OK。到照片 App 长按实况照片，检查动作、封面和声音。",
        "sections": []
      }
    ],
    "exampleNote": "截图采用 iPhone 17 Pro Max 模拟器（iOS 26.0）的英文界面，正文附中文按钮说明。示例参数和使用限制以该版本为背景。 示例使用 3 秒范围和 Balanced 画质，已收到 App 的保存成功提示，未验证照片 App 中的长按播放。"
  },
  "transcode-video-iphone": {
    "title": "如何在 iPhone 和 iPad 上转换视频格式与压缩视频？",
    "description": "使用 Transcode Video 调整视频格式或减小文件体积。选择格式、分辨率和画质，导出后预览效果。",
    "intro": "使用 Transcode Video 调整视频格式或减小文件体积。选择格式、分辨率和画质，导出后预览效果。",
    "tips": [
      {
        "title": "压缩后不满意",
        "text": "保留原片，先用短片段比较不同画质或分辨率。避免反复压缩已经压缩过的结果。"
      }
    ],
    "faq": [
      {
        "question": "为什么没有明显变小？",
        "answer": "输入可能已经较小，或输出参数保留了较多画质。最终体积取决于时长、尺寸、编码和码率等。"
      },
      {
        "question": "改成 1080p 会更清楚吗？",
        "answer": "放大低分辨率素材不会产生原本不存在的细节。应以实际观看效果为准。"
      }
    ],
    "steps": [
      {
        "title": "在 Process 页面打开 Transcode Video",
        "text": "点击底部 Process（处理），再打开 Transcode Video。"
      },
      {
        "title": "选择要处理的视频",
        "text": "在 Select Video（选择视频）中，点击 Choose from Photos（从相册选择）或 Choose from Files（从文件选择）导入视频。下载列表为空也可以导入。"
      },
      {
        "title": "先选格式、画质和分辨率",
        "text": "导入视频后，先查看 Output Format、Output Quality 和 Resolution，再决定是否保留声音。",
        "sections": [
          {
            "title": "Output Format：MP4、MOV、M4V",
            "text": "这是输出文件的封装格式。日常分享可先使用 MP4；如果接收软件明确要求 MOV 或 M4V，再选择相应格式。文件扩展名与内部编码不是同一个概念。"
          },
          {
            "title": "Output Quality：画质与体积取舍",
            "text": "High Quality 偏向保留画质，Standard 是折中选择，Smaller Size 偏向较小体积。具体大小还受画面和其他参数影响，不能仅凭预设名称判断最终体积。"
          },
          {
            "title": "Resolution 与 Sound",
            "text": "分辨率提供 Original、720p、480p、1080p*；Original 保留原始尺寸，本例源视频为 640×338。Sound 可选 Keep Sound 或 Mute。降低分辨率可能减小文件，升高分辨率不能恢复缺失细节。"
          }
        ]
      },
      {
        "title": "理解编码器与码率",
        "text": "向下查看 Codec、Bitrate 以及页面底部的输出摘要。摘要应与你的选择一致，再点击 Start Processing。",
        "sections": [
          {
            "title": "Codec：H.264 与 HEVC*",
            "text": "可先选择 H.264。HEVC 需要 VIP，可用于提高压缩效率，但请确认播放设备或应用支持。MP4 容器可以采用不同编码。"
          },
          {
            "title": "Bitrate：Auto、Target Size*、Custom Bitrate*",
            "text": "Auto 由工具选择码率；Target Size 是按目标大小配置的入口；Custom Bitrate 是自定义码率入口，后两项需要 VIP。相同条件下，较低码率通常更小，也可能更容易出现压缩痕迹。"
          },
          {
            "title": "当前版本的 VIP 范围",
            "text": "页面注明 HEVC、1080p、原始高清、目标大小和自定义码率需要 VIP。本例使用低分辨率素材、Original、Standard、Keep Sound 和 Auto，已生成结果。"
          }
        ]
      },
      {
        "title": "检查结果，再保存或继续处理",
        "text": "预览导出视频，与原片比较体积和画质，尤其检查文字边缘、暗部和快速运动，再决定是否保存。",
        "sections": [
          {
            "title": "预览与保存",
            "text": "在结果页点击播放，检查画面、时长及声音是否符合预期，再点击 Save to Photos（保存到相册）。首次保存可能需要允许 App 添加照片和视频；收到保存成功提示后，再到照片 App 核对。"
          },
          {
            "title": "其他按钮的用途",
            "text": "Keep Processing（继续处理）将结果带入工具选择；Share File（分享文件）打开分享入口；Done（完成）关闭结果页。Done 不等于保存到相册。"
          }
        ]
      }
    ],
    "exampleNote": "截图采用 iPhone 17 Pro Max 模拟器（iOS 26.0）的英文界面，正文附中文按钮说明。示例参数和使用限制以该版本为背景。 示例使用 Original 分辨率、Standard 画质、Keep Sound 和 Auto 码率，导出约 6 秒的 MP4／H.264 视频。"
  },
  "trim-video-iphone": {
    "title": "如何在 iPhone 和 iPad 上裁剪视频时长？",
    "description": "只保留视频中需要的部分。在 Trim Video 中设置开始与结束时间，再保存片段或交给其他工具继续处理。",
    "intro": "只保留视频中需要的部分。在 Trim Video 中设置开始与结束时间，再保存片段或交给其他工具继续处理。",
    "tips": [
      {
        "title": "这里裁剪的是时间",
        "text": "Trim Video 控制保留哪段时间；如果需要调整画面比例或画布，使用 Resize / Canvas。"
      }
    ],
    "faq": [
      {
        "question": "怎样只保留中间一段？",
        "answer": "同时移动起点和终点，以范围标签显示的时间为准，再预览和导出。"
      },
      {
        "question": "为何均分入口弹出 VIP 页面？",
        "answer": "Even Split 需要 VIP。只截取一个时间范围时，使用 Select Segment 即可。"
      }
    ],
    "steps": [
      {
        "title": "在 Process 页面打开 Trim Video",
        "text": "点击底部 Process（处理），再打开 Trim Video。"
      },
      {
        "title": "选择要处理的视频",
        "text": "在 Select Video（选择视频）中，点击 Choose from Photos（从相册选择）或 Choose from Files（从文件选择）导入视频。下载列表为空也可以导入。"
      },
      {
        "title": "设置裁剪模式和时间范围",
        "text": "选择视频后，使用 Trim Mode 下的 Select Segment，再调整 Trim Range 的两个手柄。",
        "sections": [
          {
            "title": "Select Segment：导出选中的一段",
            "text": "左端控制开始位置，右端控制结束位置。上方显示起止时间和选中时长，下方文字会再次说明将要导出的区间。本例为 00:00–00:06。"
          },
          {
            "title": "预览与范围不要混淆",
            "text": "预览卡片下方的总时长属于原视频；Trim Range 才是要保留的范围。拖动范围后，对照画面确认没有切掉动作开始或最后一句话。"
          },
          {
            "title": "Even Split*：按段均分",
            "text": "Even Split 将完整视频均分成多段并一起导出，需要 VIP。只保留一个片段时，使用 Select Segment。"
          }
        ]
      },
      {
        "title": "检查结果，再保存或继续处理",
        "text": "点击 Start Processing，播放导出的片段并检查开头和结尾。确认后保存，或用 Keep Processing 交给其他工具继续处理。",
        "sections": [
          {
            "title": "预览与保存",
            "text": "在结果页点击播放，检查画面、时长及声音是否符合预期，再点击 Save to Photos（保存到相册）。首次保存可能需要允许 App 添加照片和视频；收到保存成功提示后，再到照片 App 核对。"
          },
          {
            "title": "其他按钮的用途",
            "text": "Keep Processing（继续处理）将结果带入工具选择；Share File（分享文件）打开分享入口；Done（完成）关闭结果页。Done 不等于保存到相册。"
          }
        ]
      }
    ],
    "exampleNote": "截图采用 iPhone 17 Pro Max 模拟器（iOS 26.0）的英文界面，正文附中文按钮说明。示例参数和使用限制以该版本为背景。 示例通过 Select Segment 截出约 2 分 26 秒素材的前 6 秒。Even Split 打开了 VIP 页面，未执行均分导出。"
  },
  "join-videos-iphone": {
    "title": "如何在 iPhone 和 iPad 上拼接多个视频？",
    "description": "使用 Stitch Videos（拼接视频）把旅行片段、活动记录或分段讲解接起来。先选择开头的主视频，再添加其他片段并调整顺序。",
    "intro": "使用 Stitch Videos（拼接视频）把旅行片段、活动记录或分段讲解接起来。先选择开头的主视频，再添加其他片段并调整顺序。",
    "tips": [
      {
        "title": "横竖屏或尺寸不一致怎么办？",
        "text": "拼接页没有单独的画布、裁切或留边设置。对画面比例有要求时，先用 Resize / Canvas（调整尺寸／画布）或相应工具准备素材，再进行拼接，并检查输出效果。"
      },
      {
        "title": "暂时不要离开当前设置页",
        "text": "右上角魔棒会将当前主视频带入 Quick Edit（快速编辑）工具选择。通过该入口返回 Stitch Videos 可能重置追加列表。如果已排好顺序，直接开始处理；切换工具后应重新核对追加列表。"
      }
    ],
    "faq": [
      {
        "question": "为什么 2 clips added 却拼出了三段？",
        "answer": "计数只包含追加视频，不包含开头的主视频。主视频一段加追加两段，共三段。"
      },
      {
        "question": "可以把追加片段移到主视频前面吗？",
        "answer": "界面中的上下箭头只调整追加列表内部顺序，第一段追加视频的向上箭头为灰色。需要更换开头时，应重新选择主视频。"
      },
      {
        "question": "这里能设置转场、背景音乐或输出画质吗？",
        "answer": "拼接设置页没有这些选项。页面主要用于预览主视频、添加片段及调整追加顺序；需要其他效果时，使用对应处理工具。"
      },
      {
        "question": "点击 Done 后为什么相册里没有成片？",
        "answer": "Done 只关闭结果页。需要另行点击 Save to Photos，并确认保存成功及相册权限。"
      }
    ],
    "steps": [
      {
        "title": "在 Process 页面打开拼接工具",
        "text": "点击底部 Process（处理），再打开 Stitch Videos。"
      },
      {
        "title": "选择主视频，读懂预览信息",
        "text": "进入 Select Video（选择视频）后，通过 Choose from Photos（从相册选择）选中第一段视频。这段是主视频，会作为拼接结果的开头。进入设置页后，先核对素材。",
        "sections": [
          {
            "title": "预览、文件名与时间轴",
            "text": "点击画面中央的播放按钮预览主视频。下方显示文件名、播放位置和主视频时长，便于确认选对了版本。本例主视频时长为 02:26；这里显示的还不是拼接后总时长。"
          },
          {
            "title": "640×338 是什么？",
            "text": "这是当前主视频的画面尺寸，单位为像素。它是素材信息，不是输出尺寸选择器。拼接设置页没有独立的分辨率、帧率或画质选项。"
          },
          {
            "title": "为什么已经选了视频，却显示 0 clips added？",
            "text": "这个数字只统计通过 Add Video 追加的片段，不包含上方主视频。0 表示还没有追加片段；要拼接多个视频，下一步至少再添加一段。"
          }
        ]
      },
      {
        "title": "添加后续视频片段",
        "text": "点击 Processing Options（处理选项）下的 Add Video（添加视频），在 Select Videos to Stitch 弹窗里选择素材来源。本例继续选择 Choose from Photos。",
        "sections": [
          {
            "title": "三个来源如何选择",
            "text": "Choose from Downloads 对应 App 中已下载的视频；Choose from Photos 对应系统相册；Choose from Files 用于从文件选择器导入。按素材所在位置选择即可，不需要为了拼接先重新下载相册视频。"
          },
          {
            "title": "在相册中多选并确认",
            "text": "点选要追加的视频后，缩略图上会出现选中编号，再点击右上角的蓝色勾号完成导入。需要更多片段时，可以再次点击 Add Video。返回后检查列表数量，避免把主视频重复添加一次。"
          }
        ]
      },
      {
        "title": "核对数量，调整播放顺序",
        "text": "追加数量不包含开头的主视频：2 clips added 表示最终共三段。追加列表从 Clip 2 开始，按从上到下的顺序接在主视频之后。",
        "sections": [
          {
            "title": "上下箭头：调整追加片段顺序",
            "text": "用上下箭头调整追加片段的顺序。第一段不能继续上移，最后一段不能继续下移；只有一段追加视频时，两个箭头均不可用。"
          },
          {
            "title": "主视频与追加列表的区别",
            "text": "上方主视频固定作为开头，不在追加片段的排序列表里。如果想换一个视频开场，返回重新选择主视频，再添加后续片段。"
          },
          {
            "title": "缩略图、时长与移除按钮",
            "text": "每行的缩略图、文件名和时长帮助你区分片段；红色垃圾桶是该追加片段的移除入口。开始前核对顺序、重复素材和总内容。本例顺序为主视频 02:26 → Clip 2 05:11 → Clip 3 04:10。"
          }
        ]
      },
      {
        "title": "开始拼接，查看处理进度",
        "text": "确认片段后点击 Start Processing（开始处理）。进度弹窗会显示 Processing video 和完成百分比，等待结果页出现后再检查成片。",
        "sections": [
          {
            "title": "完成通知与后台提示",
            "text": "较长的处理过程中会出现 Notify me when complete（完成时通知我）开关。需要提醒时可以开启，并按系统提示处理通知权限。弹窗提示可以切到后台，App 会尽可能继续处理；这不代表系统一定允许任务一直在后台运行。"
          },
          {
            "title": "Cancel 是取消处理",
            "text": "弹窗底部 Cancel 用于取消当前任务，不是把进度窗口收起。仍然需要这次输出时，保持任务运行并等待完成。"
          }
        ]
      },
      {
        "title": "预览成片并保存到相册",
        "text": "预览拼接结果，确认片段顺序。输入列表中的时长按整秒显示，核对总时长时请以输出文件为准。",
        "sections": [
          {
            "title": "保存前检查哪些地方",
            "text": "点击播放按钮预览，重点查看开头、结尾与两段连接附近，确认顺序、画面比例和声音衔接。对本例可重点检查约 02:26 和 07:37 附近；完整观看或试听后再决定是否保留成片。"
          },
          {
            "title": "Save to Photos：保存到相册",
            "text": "点击 Save to Photos，按提示允许相册访问。等待 Saved to Photos（已保存到相册），再到照片 App 查看成片。"
          },
          {
            "title": "继续处理、分享与完成",
            "text": "Keep Processing 是继续处理入口；Share File 打开文件分享；Done 关闭结果页。需要把成片留在相册时，应先点击 Save to Photos，不能把 Done 当作保存按钮。"
          }
        ]
      }
    ],
    "exampleNote": "截图采用 iPhone 17 Pro Max 模拟器（iOS 26.0）的英文界面，正文附中文按钮说明。示例参数和使用限制以该版本为背景。 示例拼接了三段视频、调整了追加顺序，播放了显示为 11:46 的结果，并收到保存成功提示。该版本中通过 Quick Edit 返回拼接工具后，追加列表被重置。"
  },
  "interleave-videos-iphone": {
    "title": "如何在 iPhone 和 iPad 上交错拼接视频片段？",
    "description": "使用 Interleave 在不同视频的片段之间交替切换。添加素材后，选择分段方式、起始顺序和声音过渡。",
    "intro": "使用 Interleave 在不同视频的片段之间交替切换。添加素材后，选择分段方式、起始顺序和声音过渡。",
    "tips": [
      {
        "title": "节奏忽快忽慢",
        "text": "总段数模式不保证每个来源切出的片段等长。本例 A、B 本身长度不同，界面已显示不同的单段时长。"
      }
    ],
    "faq": [
      {
        "question": "与 Stitch Videos 有什么区别？",
        "answer": "Stitch Videos 按完整片段顺序接起来；Interleave 按分段规则在不同来源之间交替。"
      },
      {
        "question": "Total Segments 有星号，为什么默认能用？",
        "answer": "总计最多 5 段可免费使用。结合所选数值和权限说明判断，控件上的星号不代表每个数值都需要 VIP。"
      }
    ],
    "steps": [
      {
        "title": "在 Process 页面打开 Interleave",
        "text": "点击底部 Process（处理），再打开 Interleave。"
      },
      {
        "title": "选择要处理的视频",
        "text": "在 Select Video（选择视频）中，点击 Choose from Photos（从相册选择）或 Choose from Files（从文件选择）导入视频。下载列表为空也可以导入。"
      },
      {
        "title": "添加 A、B 视频",
        "text": "选中的主视频显示为 A Current Video。点击 Add Video，从下载列表、相册或文件添加 B；相册支持选中后用右上角勾号确认。",
        "sections": [
          {
            "title": "追加数和总数",
            "text": "1 added, 2 videos total 表示追加一段，共有两个来源视频。A 为主视频，列表中的锁形入口不可操作；追加视频旁有排序或移除控件，是否可用取决于位置和数量。"
          },
          {
            "title": "本例素材",
            "text": "A 约 6 秒，B 约 2 分 26 秒。长度差距较大时，各来源分配到的单段时长也可能差很多；需要均匀切换节奏时，先把素材裁成相近长度更容易检查。"
          }
        ]
      },
      {
        "title": "配置分段与交错规则",
        "text": "本例使用 Total Segments、5 segments、Start with A 和默认 50 ms 音频淡入淡出。页面底部会给出具体分配说明。",
        "sections": [
          {
            "title": "Total Segments 与 Fixed Duration*",
            "text": "Total Segments 按总段数分配。本例总共 5 段，A 分成 3 段、每段约 2 秒；B 分成 2 段、每段约 1 分 13 秒，交替输出。Fixed Duration 是按固定时长分段的 VIP 入口。"
          },
          {
            "title": "Start Order：从谁开始",
            "text": "Start with A 从主视频开始，Start with B 从 B 开始。改变起始来源后，应重新阅读下方的分配说明，确认开场素材符合预期。"
          },
          {
            "title": "Audio Fade：处理声音切口",
            "text": "默认约 50 ms 的淡入淡出用于缓和每个音频切口。页面注明免费支持两个视频、最多 5 段和默认淡入淡出；更多来源、固定时长和自定义淡入淡出需要 VIP。"
          }
        ]
      },
      {
        "title": "检查结果，再保存或继续处理",
        "text": "点击 Start Processing，逐个播放检查切换位置，确认起始素材、片段顺序和声音过渡。",
        "sections": [
          {
            "title": "预览与保存",
            "text": "在结果页点击播放，检查画面、时长及声音是否符合预期，再点击 Save to Photos（保存到相册）。首次保存可能需要允许 App 添加照片和视频；收到保存成功提示后，再到照片 App 核对。"
          },
          {
            "title": "其他按钮的用途",
            "text": "Keep Processing（继续处理）将结果带入工具选择；Share File（分享文件）打开分享入口；Done（完成）关闭结果页。Done 不等于保存到相册。"
          }
        ]
      }
    ],
    "exampleNote": "截图采用 iPhone 17 Pro Max 模拟器（iOS 26.0）的英文界面，正文附中文按钮说明。示例参数和使用限制以该版本为背景。 A／B 示例采用总计 5 段、Start with A 和默认 50 ms 音频淡入淡出，结果显示为 02:31。"
  },
  "segment-grid-video-iphone": {
    "title": "如何在 iPhone 和 iPad 上把视频分段并排成网格？",
    "description": "把同一个视频按时间分段，让各片段在宫格中同时播放。先选行列数，再设置声音和输出尺寸。",
    "intro": "把同一个视频按时间分段，让各片段在宫格中同时播放。先选行列数，再设置声音和输出尺寸。",
    "tips": [
      {
        "title": "每格看不清",
        "text": "在固定输出尺寸下，格子越多，每格可用像素越少。可以减少行列或选择合适的最终尺寸，再比较结果。"
      }
    ],
    "faq": [
      {
        "question": "是把多个独立视频拼成网格吗？",
        "answer": "本文这个工具处理的是一个视频的不同时间片段。页面没有像 Stitch Videos 那样的追加素材列表。"
      },
      {
        "question": "为什么默认没有声音？",
        "answer": "默认选择 Mute，避免重叠音频。需要时可以选择 First Segment Audio。"
      }
    ],
    "steps": [
      {
        "title": "在 Process 页面打开 Segment Grid",
        "text": "点击底部 Process（处理），再打开 Segment Grid。"
      },
      {
        "title": "选择要处理的视频",
        "text": "在 Select Video（选择视频）中，点击 Choose from Photos（从相册选择）或 Choose from Files（从文件选择）导入视频。下载列表为空也可以导入。"
      },
      {
        "title": "设置行列与声音",
        "text": "导入一个视频后，查看 Columns（列）、Rows（行）和 Sound。本例采用 2 列、2 行与默认静音。",
        "sections": [
          {
            "title": "行数 × 列数决定格子数量",
            "text": "2×2 对应四个格子，也会把源视频等分成四段。多个片段同时播放，因此结果时长会短于原视频。页面显示的是估算时长，最终以输出为准。"
          },
          {
            "title": "Mute 与 First Segment Audio",
            "text": "Mute 默认静音，避免多个格子的声音重叠；First Segment Audio 使用第一段的声音。需要声音时先确认第一段音轨适合贯穿网格效果。"
          },
          {
            "title": "带星号参数的免费范围",
            "text": "可先使用免费的 2×2 宫格和 Original Video Size。3 行或 3 列及以上、方形输出及保留每格原始尺寸需要 VIP。"
          }
        ]
      },
      {
        "title": "选择最终输出尺寸",
        "text": "点击 Export Size 查看尺寸列表。这里设置的是整个成片的像素尺寸，不是单个格子的尺寸。",
        "sections": [
          {
            "title": "Original Video Size 与每格原尺寸",
            "text": "本例 Original Video Size 为 640×338，四格共用这个画布。Keep Each Tile Original Size 显示 1280×676*，让每格尽量保留原始像素，可能明显增加文件大小和处理时间，并可能受系统限制。"
          },
          {
            "title": "横屏、竖屏与方形",
            "text": "列表还提供 1280×720、1920×1080、1080×1920 和 1080×1080*。按展示场景选择，导出后检查各格画面是否清晰、完整。"
          }
        ]
      },
      {
        "title": "检查结果，再保存或继续处理",
        "text": "点击 Start Processing，再预览宫格。检查每格的片段是否正确，以及输出尺寸和声音是否符合需要。",
        "sections": [
          {
            "title": "预览与保存",
            "text": "在结果页点击播放，检查画面、时长及声音是否符合预期，再点击 Save to Photos（保存到相册）。首次保存可能需要允许 App 添加照片和视频；收到保存成功提示后，再到照片 App 核对。"
          },
          {
            "title": "其他按钮的用途",
            "text": "Keep Processing（继续处理）将结果带入工具选择；Share File（分享文件）打开分享入口；Done（完成）关闭结果页。Done 不等于保存到相册。"
          }
        ]
      }
    ],
    "exampleNote": "截图采用 iPhone 17 Pro Max 模拟器（iOS 26.0）的英文界面，正文附中文按钮说明。示例参数和使用限制以该版本为背景。 示例以静音、2×2 和 Original Video Size 导出。约 6 秒素材的预计时长为约 2 秒，结果整秒标签显示约 1 秒；这两种显示均不是帧级精确测量。"
  },
  "resize-video-iphone": {
    "title": "如何在 iPhone 和 iPad 上调整视频比例与画布？",
    "description": "使用 Resize / Canvas 调整视频画布比例。选好画布后，用 Fit 保留完整画面，或用 Fill 铺满画布。",
    "intro": "使用 Resize / Canvas 调整视频画布比例。选好画布后，用 Fit 保留完整画面，或用 Fill 铺满画布。",
    "tips": [
      {
        "title": "先决定是否允许裁掉边缘",
        "text": "字幕和重要内容贴边时优先试 Fit；希望铺满画布时试 Fill，并逐帧检查重要画面。"
      }
    ],
    "faq": [
      {
        "question": "改比例会把画面拉伸吗？",
        "answer": "Fit 保持画面比例，并在需要时添加背景。选择其他布局后，导出前请检查是否裁切或拉伸。"
      },
      {
        "question": "怎样调整输出分辨率？",
        "answer": "这里重点是画布比例和布局；需要转换尺寸与格式时，可查看 Transcode Video 的分辨率选项。"
      }
    ],
    "steps": [
      {
        "title": "在 Process 页面打开 Resize / Canvas",
        "text": "点击底部 Process（处理），再打开 Resize / Canvas。"
      },
      {
        "title": "选择要处理的视频",
        "text": "在 Select Video（选择视频）中，点击 Choose from Photos（从相册选择）或 Choose from Files（从文件选择）导入视频。下载列表为空也可以导入。"
      },
      {
        "title": "选择画布比例",
        "text": "在 Canvas Ratio 选择目标比例，再查看 Layout 和背景色。本例采用 1:1、Fit 和黑色背景。",
        "sections": [
          {
            "title": "Original、16:9、9:16、1:1、4:3、3:4",
            "text": "Original 沿用原比例；16:9 常用于横屏，9:16 用于竖屏，1:1 为正方形。比例只描述宽高关系，不等同于指定 1080p 等像素分辨率。"
          },
          {
            "title": "Background Color*",
            "text": "显示的 #000000 是黑色。画面与画布比例不一致且选择 Fit 时，会出现剩余背景区域；更换背景色需要 VIP。"
          }
        ]
      },
      {
        "title": "选择 Fit、Fill 或其他布局",
        "text": "点击 Layout 打开布局列表，选好后返回设置页，确认摘要再点击 Start Processing。",
        "sections": [
          {
            "title": "Fit：完整显示画面",
            "text": "按比例把完整画面放进画布，可能留下背景区域。适合不能裁掉人物、字幕或边缘内容的素材。本例已按 Fit 导出。"
          },
          {
            "title": "Fill：填满画布",
            "text": "按比例铺满画布，比例不同时可能裁掉部分边缘。使用前先看预览，尤其检查字幕、人物头顶和左右边缘。"
          },
          {
            "title": "带星号的模糊与多格布局",
            "text": "Blur 1:1*、Double 1:1*、Symmetric Double 1:1*、Triple 1:1* 和 Triple Blur 1:1* 是需要 VIP 的模糊背景或多格布局。"
          }
        ]
      },
      {
        "title": "检查结果，再保存或继续处理",
        "text": "预览结果，检查画布比例、边缘和背景。使用 Fit 时，确认完整画面都保留下来再保存。",
        "sections": [
          {
            "title": "预览与保存",
            "text": "在结果页点击播放，检查画面、时长及声音是否符合预期，再点击 Save to Photos（保存到相册）。首次保存可能需要允许 App 添加照片和视频；收到保存成功提示后，再到照片 App 核对。"
          },
          {
            "title": "其他按钮的用途",
            "text": "Keep Processing（继续处理）将结果带入工具选择；Share File（分享文件）打开分享入口；Done（完成）关闭结果页。Done 不等于保存到相册。"
          }
        ]
      }
    ],
    "exampleNote": "截图采用 iPhone 17 Pro Max 模拟器（iOS 26.0）的英文界面，正文附中文按钮说明。示例参数和使用限制以该版本为背景。 示例使用 1:1 画布、Fit 和黑色背景完成导出，未验证付费模糊背景或多格布局的输出。"
  },
  "rotate-video-iphone": {
    "title": "如何在 iPhone 和 iPad 上旋转视频方向？",
    "description": "视频横着或倒着显示时，使用 Rotate Video 调整方向。选择旋转角度，检查预览，再保存结果。",
    "intro": "视频横着或倒着显示时，使用 Rotate Video 调整方向。选择旋转角度，检查预览，再保存结果。",
    "tips": [
      {
        "title": "旋转与镜像不同",
        "text": "旋转改变画面朝向；镜像交换左右或上下。自拍文字左右反了时，应查看 Mirror Video。"
      }
    ],
    "faq": [
      {
        "question": "想纠正倒着的视频选哪个？",
        "answer": "选择 180，再用预览确认主体恢复正确方向。"
      },
      {
        "question": "旋转会改变时长吗？",
        "answer": "这个操作调整方向，旋转后请检查输出时长。"
      }
    ],
    "steps": [
      {
        "title": "在 Process 页面打开 Rotate Video",
        "text": "点击底部 Process（处理），再打开 Rotate Video。"
      },
      {
        "title": "选择要处理的视频",
        "text": "在 Select Video（选择视频）中，点击 Choose from Photos（从相册选择）或 Choose from Files（从文件选择）导入视频。下载列表为空也可以导入。"
      },
      {
        "title": "选择旋转方向",
        "text": "在 Rotation 中选择角度，并通过上方预览核对方向。本例选择 Rotate Right 90。",
        "sections": [
          {
            "title": "向右 90°、180°、向左 90°",
            "text": "Rotate Right 90 为顺时针四分之一圈；180 将画面倒转；Rotate Left 90 为逆时针四分之一圈。左右 90° 会交换画面的横竖方向。"
          },
          {
            "title": "预览窗口中的黑边",
            "text": "竖向画面放在横向预览卡片里可能显示黑边，这不一定代表导出文件本身包含同样的黑边。应查看保存后的实际尺寸和显示效果。"
          }
        ]
      },
      {
        "title": "检查结果，再保存或继续处理",
        "text": "点击 Start Processing，检查导出视频的方向。确认文字和主体朝向正确后再保存。",
        "sections": [
          {
            "title": "预览与保存",
            "text": "在结果页点击播放，检查画面、时长及声音是否符合预期，再点击 Save to Photos（保存到相册）。首次保存可能需要允许 App 添加照片和视频；收到保存成功提示后，再到照片 App 核对。"
          },
          {
            "title": "其他按钮的用途",
            "text": "Keep Processing（继续处理）将结果带入工具选择；Share File（分享文件）打开分享入口；Done（完成）关闭结果页。Done 不等于保存到相册。"
          }
        ]
      }
    ],
    "exampleNote": "截图采用 iPhone 17 Pro Max 模拟器（iOS 26.0）的英文界面，正文附中文按钮说明。示例参数和使用限制以该版本为背景。 示例将约 6 秒片段向右旋转 90 度，预览与导出均显示方向变化。"
  },
  "mirror-video-iphone": {
    "title": "如何在 iPhone 和 iPad 上镜像翻转视频？",
    "description": "使用 Mirror Video 左右或上下翻转画面。导出前检查效果，尤其留意视频里的文字和标志。",
    "intro": "使用 Mirror Video 左右或上下翻转画面。导出前检查效果，尤其留意视频里的文字和标志。",
    "tips": [
      {
        "title": "字幕可能一起反向",
        "text": "镜像作用于画面整体。带文字的片段应先确认是否接受文字方向改变。"
      }
    ],
    "faq": [
      {
        "question": "左右反了应该选哪项？",
        "answer": "先试 H Flip，并核对画面内文字或左右位置。"
      },
      {
        "question": "镜像会让动作倒放吗？",
        "answer": "不会。动作时间顺序的反转使用 Reverse Video。"
      }
    ],
    "steps": [
      {
        "title": "在 Process 页面打开 Mirror Video",
        "text": "点击底部 Process（处理），再打开 Mirror Video。"
      },
      {
        "title": "选择要处理的视频",
        "text": "在 Select Video（选择视频）中，点击 Choose from Photos（从相册选择）或 Choose from Files（从文件选择）导入视频。下载列表为空也可以导入。"
      },
      {
        "title": "预览镜像效果",
        "text": "导入视频后，Mirror Mode 显示当前模式。本例为 H Flip，可先观察预览中的左右细节，再进入模式列表。",
        "sections": []
      },
      {
        "title": "区分翻转与对称模式",
        "text": "点击 Mirror Mode 查看全部选项，选择后返回，再点击 Start Processing。",
        "sections": [
          {
            "title": "H Flip、V Flip 和 180",
            "text": "H Flip 水平翻转，左右交换；V Flip 垂直翻转，上下交换；180 对应画面转半圈。选项名称相近，最好用画面里的文字或明显标志检查。"
          },
          {
            "title": "Side Sym*、Top Sym*、Center Sym*",
            "text": "这些 VIP 模式用于制作对称效果，与翻转整幅画面不同。选择时请查看预览。"
          }
        ]
      },
      {
        "title": "检查结果，再保存或继续处理",
        "text": "预览镜像结果，检查左右或上下位置。文字、标志和内嵌字幕也会随画面一起翻转。",
        "sections": [
          {
            "title": "预览与保存",
            "text": "在结果页点击播放，检查画面、时长及声音是否符合预期，再点击 Save to Photos（保存到相册）。首次保存可能需要允许 App 添加照片和视频；收到保存成功提示后，再到照片 App 核对。"
          },
          {
            "title": "其他按钮的用途",
            "text": "Keep Processing（继续处理）将结果带入工具选择；Share File（分享文件）打开分享入口；Done（完成）关闭结果页。Done 不等于保存到相册。"
          }
        ]
      }
    ],
    "exampleNote": "截图采用 iPhone 17 Pro Max 模拟器（iOS 26.0）的英文界面，正文附中文按钮说明。示例参数和使用限制以该版本为背景。 示例完成了 H Flip 导出；付费对称效果仅核对入口，未验证输出。"
  },
  "reverse-video-iphone": {
    "title": "如何在 iPhone 和 iPad 上倒放视频？",
    "description": "使用 Reverse Video 让视频从结尾向开头播放。选择静音、保留原音或倒放音频，再预览结果。",
    "intro": "使用 Reverse Video 让视频从结尾向开头播放。选择静音、保留原音或倒放音频，再预览结果。",
    "tips": [
      {
        "title": "先裁短再倒放",
        "text": "用 Trim Video 保留目标动作后再倒放，更容易判断节奏，也能减少处理内容。"
      }
    ],
    "faq": [
      {
        "question": "倒放等于把视频转 180 度吗？",
        "answer": "不是。倒放改变时间顺序，Rotate Video 改变画面方向。"
      },
      {
        "question": "为什么倒放结果没有声音？",
        "answer": "本例选择默认 Mute。需要声音时请选择对应模式并检查导出结果。"
      }
    ],
    "steps": [
      {
        "title": "在 Process 页面打开 Reverse Video",
        "text": "点击底部 Process（处理），再打开 Reverse Video。"
      },
      {
        "title": "选择要处理的视频",
        "text": "在 Select Video（选择视频）中，点击 Choose from Photos（从相册选择）或 Choose from Files（从文件选择）导入视频。下载列表为空也可以导入。"
      },
      {
        "title": "选择倒放时的声音",
        "text": "Sound 提供 Mute、Keep Audio、Reverse Audio。本例采用 Mute，再点击 Start Processing。",
        "sections": [
          {
            "title": "Mute：不保留声音",
            "text": "适合只需要倒放动作的片段，也能避免反转后的对白或环境声显得突兀。"
          },
          {
            "title": "Keep Audio 与 Reverse Audio",
            "text": "Keep Audio 保留原有音频顺序；Reverse Audio 倒放声音。按需要选择，并试听导出的对白或音乐。"
          }
        ]
      },
      {
        "title": "检查结果，再保存或继续处理",
        "text": "播放结果，确认动作由后向前进行。检查开头、结尾和所选声音模式，再保存视频。",
        "sections": [
          {
            "title": "预览与保存",
            "text": "在结果页点击播放，检查画面、时长及声音是否符合预期，再点击 Save to Photos（保存到相册）。首次保存可能需要允许 App 添加照片和视频；收到保存成功提示后，再到照片 App 核对。"
          },
          {
            "title": "其他按钮的用途",
            "text": "Keep Processing（继续处理）将结果带入工具选择；Share File（分享文件）打开分享入口；Done（完成）关闭结果页。Done 不等于保存到相册。"
          }
        ]
      }
    ],
    "exampleNote": "截图采用 iPhone 17 Pro Max 模拟器（iOS 26.0）的英文界面，正文附中文按钮说明。示例参数和使用限制以该版本为背景。 示例仅实测 Mute 模式，结果从原片末尾开始；未验证 Keep Audio 和 Reverse Audio。"
  },
  "change-video-speed-iphone": {
    "title": "如何在 iPhone 和 iPad 上加速或放慢视频？",
    "description": "使用 Change Speed 加快或放慢视频。选择速度倍数，检查时长和声音变化后再保存。",
    "intro": "使用 Change Speed 加快或放慢视频。选择速度倍数，检查时长和声音变化后再保存。",
    "tips": [
      {
        "title": "放慢不一定更流畅",
        "text": "慢速会放大原素材帧率不足或运动模糊的问题。先用短片段比较，不能只凭倍数判断效果。"
      }
    ],
    "faq": [
      {
        "question": "2x 会让时长变多少？",
        "answer": "通常约为原来的一半，最终以输出时长为准。"
      },
      {
        "question": "为什么高倍速没有声音？",
        "answer": "当前页面明确注明高于 4x 会自动移除音频。"
      }
    ],
    "steps": [
      {
        "title": "在 Process 页面打开 Change Speed",
        "text": "点击底部 Process（处理），再打开 Change Speed。"
      },
      {
        "title": "选择要处理的视频",
        "text": "在 Select Video（选择视频）中，点击 Choose from Photos（从相册选择）或 Choose from Files（从文件选择）导入视频。下载列表为空也可以导入。"
      },
      {
        "title": "设置速度和音调",
        "text": "拖动 Speed 滑块，查看右侧倍数与下方 Estimated processed duration。确认后点击 Start Processing。",
        "sections": [
          {
            "title": "速度倍数与时长",
            "text": "1x 为原速，大于 1 加速，小于 1 放慢。输出时长大致等于原时长除以倍数，例如 6 秒 ÷ 1.5 ≈ 4 秒；以实际结果为准。"
          },
          {
            "title": "Preserve Pitch*：保留音调",
            "text": "这是变速时保留原音调的 VIP 选项。不开启时声音可能随变速改变音调；含对白、演唱的素材应特别注意试听。"
          },
          {
            "title": "速度范围和高倍速声音",
            "text": "页面注明免费支持 0.5x–2x，更宽的 0.1x–32x 范围和保留音调需要 VIP；高于 4x 会自动移除音频。"
          }
        ]
      },
      {
        "title": "检查结果，再保存或继续处理",
        "text": "播放结果，检查节奏、时长和声音。如果过快或过慢，调整速度倍数后重新导出。",
        "sections": [
          {
            "title": "预览与保存",
            "text": "在结果页点击播放，检查画面、时长及声音是否符合预期，再点击 Save to Photos（保存到相册）。首次保存可能需要允许 App 添加照片和视频；收到保存成功提示后，再到照片 App 核对。"
          },
          {
            "title": "其他按钮的用途",
            "text": "Keep Processing（继续处理）将结果带入工具选择；Share File（分享文件）打开分享入口；Done（完成）关闭结果页。Done 不等于保存到相册。"
          }
        ]
      }
    ],
    "exampleNote": "截图采用 iPhone 17 Pro Max 模拟器（iOS 26.0）的英文界面，正文附中文按钮说明。示例参数和使用限制以该版本为背景。 示例使用 1.50x，未开启 Preserve Pitch，将约 6 秒片段输出为约 4 秒。"
  },
  "edit-video-audio-iphone": {
    "title": "如何在 iPhone 和 iPad 上静音视频或调整音量？",
    "description": "使用 Audio Editing 将视频静音、调整音量或替换音频。选择处理方式并设置参数，导出后试听结果。",
    "intro": "使用 Audio Editing 将视频静音、调整音量或替换音频。选择处理方式并设置参数，导出后试听结果。",
    "tips": [
      {
        "title": "声音失真或太吵",
        "text": "先检查原音频质量，再适量调整。放大音量也可能一起放大噪声，建议保留原视频用于比较。"
      }
    ],
    "faq": [
      {
        "question": "这会输出音频文件吗？",
        "answer": "本工具处理视频中的声音，输出仍为视频。需要独立音频文件请使用 Extract Audio。"
      },
      {
        "question": "音量百分比怎样确认？",
        "answer": "以滑块旁的实际百分比和导出历史摘要为准，再播放试听。"
      }
    ],
    "steps": [
      {
        "title": "在 Process 页面打开 Audio Editing",
        "text": "点击底部 Process（处理），再打开 Audio Editing。"
      },
      {
        "title": "选择要处理的视频",
        "text": "在 Select Video（选择视频）中，点击 Choose from Photos（从相册选择）或 Choose from Files（从文件选择）导入视频。下载列表为空也可以导入。"
      },
      {
        "title": "选择声音处理模式",
        "text": "在 Processing Mode 中选择 Mute、Volume 或 Replace*。选择 Volume 后，页面会展开音量滑块与淡入淡出开关。",
        "sections": [
          {
            "title": "Mute：去除声音",
            "text": "只需要画面时选 Mute。导出后应播放确认声音已按预期移除，而不是仅把播放器暂时静音。"
          },
          {
            "title": "Volume：调整声音大小",
            "text": "拖动音量滑块，查看旁边的百分比，100% 表示原有音量比例。提高音量也可能放大噪声，保存前请试听导出结果。"
          },
          {
            "title": "Replace* 与 Fade In/Out*",
            "text": "Replace 替换音频来源；Fade In/Out 为声音添加淡入淡出，两者均需要 VIP。如需分别选择视频与音频合成，可使用 Merge Audio and Video。"
          }
        ]
      },
      {
        "title": "检查结果，再保存或继续处理",
        "text": "试听导出视频并与原片比较。需要改变音量时，先确认滑块旁的百分比已改变再导出；100% 表示维持原有音量比例。",
        "sections": [
          {
            "title": "预览与保存",
            "text": "在结果页点击播放，检查画面、时长及声音是否符合预期，再点击 Save to Photos（保存到相册）。首次保存可能需要允许 App 添加照片和视频；收到保存成功提示后，再到照片 App 核对。"
          },
          {
            "title": "其他按钮的用途",
            "text": "Keep Processing（继续处理）将结果带入工具选择；Share File（分享文件）打开分享入口；Done（完成）关闭结果页。Done 不等于保存到相册。"
          }
        ]
      }
    ],
    "exampleNote": "截图采用 iPhone 17 Pro Max 模拟器（iOS 26.0）的英文界面，正文附中文按钮说明。示例参数和使用限制以该版本为背景。 示例以 Volume 100% 导出，未演示改变音量后的效果；未执行 Replace 和 Fade In/Out。"
  },
  "add-watermark-video-iphone": {
    "title": "如何在 iPhone 和 iPad 上给视频添加文字水印？",
    "description": "在 iPhone 或 iPad 上用 ClipDock影随存添加文字水印，设置文字、大小和位置，再预览并保存视频。",
    "intro": "使用 Add Watermark 添加文字水印，输入文字并设置大小和位置。参数图与结果图使用了不同文字和素材，详见示例说明。",
    "tips": [
      {
        "title": "先预览，再保存",
        "text": "水印应清楚可辨，也不要遮挡重要内容。保留原视频，方便以后修改文字、位置或样式并重新导出。"
      }
    ],
    "faq": [
      {
        "question": "图片水印能免费使用吗？",
        "answer": "当前页面中的 Image* 带 VIP 标记，本例演示文字水印。"
      },
      {
        "question": "为什么结果图与参数图的文字不同？",
        "answer": "参数图使用 ClipDock Demo，真机结果图使用 Made by ClipDock 和另一段视频素材，两者演示的是同一套文字水印流程。"
      }
    ],
    "steps": [
      {
        "title": "在 Process 页面打开 Add Watermark",
        "text": "点击底部 Process（处理），再打开 Add Watermark。"
      },
      {
        "title": "选择要处理的视频",
        "text": "在 Select Video（选择视频）中，点击 Choose from Photos（从相册选择）或 Choose from Files（从文件选择）导入视频。下载列表为空也可以导入。"
      },
      {
        "title": "设置水印文字与大小",
        "text": "Watermark Type 选择 Text，再点击 Text Content 输入文字并确认。本例输入 ClipDock Demo。上方预览可看到水印位置和大致效果。",
        "sections": [
          {
            "title": "Text 与 Image*",
            "text": "Text 为文字水印；Image 是使用图片水印的 VIP 入口。本例仅配置了文字，未使用图片水印。"
          },
          {
            "title": "Text Size",
            "text": "滑块右侧显示大小比例，本例为 100%。选择时同时看预览，避免遮住主体、字幕或重要画面。"
          }
        ]
      },
      {
        "title": "调整位置与视觉样式",
        "text": "向下查看 Watermark Position、颜色、背景、描边和 Opacity。带星号的选项需要 VIP，显示默认值不等于可以免费修改。",
        "sections": [
          {
            "title": "Watermark Position",
            "text": "位置入口包含左上、右上、左下、右下和中央，本例在右下。优先选择不遮挡主体与字幕的位置，横竖屏素材分别检查。"
          },
          {
            "title": "颜色、背景和描边",
            "text": "Text Color 控制文字颜色；Show Background 控制文字背景；Text Stroke 与 Stroke Color 控制描边及颜色。这些入口带 VIP 标记。预览中文字与背景应有足够对比，明暗变化大的视频尤其需要检查。"
          },
          {
            "title": "Opacity*：透明度",
            "text": "本例显示 75%。透明度越低水印通常越淡，但也更容易看不清；这个参数需要 VIP。"
          }
        ]
      },
      {
        "title": "预览水印成片并保存",
        "text": "点击 Start Processing，在导出视频中预览水印。检查文字、位置，以及不同画面下是否清晰可读。",
        "sections": [
          {
            "title": "检查水印效果",
            "text": "点击播放，检查水印是否清晰、位置是否合适，以及是否遮挡主体或字幕。结果图使用了另一段素材和水印文字，操作流程与前面的参数示例相同。"
          },
          {
            "title": "保存到相册或分享",
            "text": "点击 Save to Photos（保存到相册），收到成功提示后再到照片 App 检查；Share File（分享文件）用于打开分享入口。"
          },
          {
            "title": "继续处理与完成",
            "text": "Keep Processing（继续处理）可以将结果带入后续处理；Done（完成）关闭结果页，不等于保存到相册。"
          }
        ]
      }
    ],
    "exampleNote": "入口和参数图来自 iPhone 17 Pro Max 模拟器，结果图来自 iPhone 真机。参数使用 ClipDock Demo，结果使用另一段素材和 Made by ClipDock。示例只配置文字水印，未验证付费样式修改。"
  },
  "capture-video-frames-iphone": {
    "title": "如何在 iPhone 和 iPad 上截取视频画面与查看批量截图选项？",
    "description": "使用 Video Capture 把视频中的一帧保存为图片。选一个清晰的时刻，预览画面后保存或分享。",
    "intro": "使用 Video Capture 把视频中的一帧保存为图片。选一个清晰的时刻，预览画面后保存或分享。",
    "tips": [
      {
        "title": "画面模糊",
        "text": "换一个运动较少的时刻，先检查源视频清晰度。单帧截图不能修复原本模糊的画面。"
      }
    ],
    "faq": [
      {
        "question": "能一次批量截图吗？",
        "answer": "Batch* 用于批量截帧，需要 VIP。只保存一帧时，使用 Single。"
      },
      {
        "question": "与手机截屏有什么区别？",
        "answer": "Video Capture 导出视频帧，导出的尺寸取决于源视频；手机截屏还可能包含播放控件和系统界面。"
      }
    ],
    "steps": [
      {
        "title": "在 Process 页面打开 Video Capture",
        "text": "点击底部 Process（处理），再打开 Video Capture。"
      },
      {
        "title": "选择要处理的视频",
        "text": "在 Select Video（选择视频）中，点击 Choose from Photos（从相册选择）或 Choose from Files（从文件选择）导入视频。下载列表为空也可以导入。"
      },
      {
        "title": "选择截图模式和时间",
        "text": "导入视频后，选择 Capture Mode，再通过 Capture Time 确定要导出的时刻。本例采用 Single、00:00，未添加时间戳。",
        "sections": [
          {
            "title": "Single：导出当前一帧",
            "text": "拖动时间滑块并观察预览，选择主体清楚的一帧，再点击 Export Image。它导出的是视频画面，成品不包含 App 按钮或手机壳。"
          },
          {
            "title": "Batch*、Smart*、Sheet*",
            "text": "Batch、Smart 和 Sheet 分别是批量截帧、智能挑帧和预览图表入口，需要 VIP。进入相应模式查看设置。"
          },
          {
            "title": "Add Timestamp",
            "text": "用于添加时间戳标记。截图用于内容展示时可保持关闭；需要标注来源时刻时可开启，并在导出图中确认位置与可读性。"
          }
        ]
      },
      {
        "title": "预览图片并保存",
        "text": "点击 Export Image 打开 Screenshot Preview（截图预览）。核对画面、尺寸和文件大小，再用 Save to Photos 保存或 Share File 分享。Done 关闭预览。",
        "sections": [
          {
            "title": "尺寸来自视频画面",
            "text": "本例源视频为 640×338，输出图片也显示这个尺寸。截图不会因为手机屏幕更大就增加源视频细节。"
          }
        ]
      }
    ],
    "exampleNote": "截图采用 iPhone 17 Pro Max 模拟器（iOS 26.0）的英文界面，正文附中文按钮说明。示例参数和使用限制以该版本为背景。 Single 单帧模式导出了 640×338 JPEG，未验证 Batch、Smart 和 Sheet 的设置及输出。"
  },
  "extract-audio-iphone": {
    "title": "如何在 iPhone 和 iPad 上提取视频音频？",
    "description": "使用 Extract Audio（提取音频）单独保存视频里的声音。从相册或“文件”选择视频，再保存或分享提取出的音频。",
    "intro": "使用 Extract Audio（提取音频）单独保存视频里的声音。从相册或“文件”选择视频，再保存或分享提取出的音频。",
    "tips": [
      {
        "title": "提取后没有声音怎么办？",
        "text": "先播放原视频，并确认播放器没有静音。原文件没有音轨时，提取工具无法恢复不存在的声音；提取也不会自动改善原始音质。"
      },
      {
        "title": "下载列表为空，仍然可以继续",
        "text": "No downloaded videos available for processing 只表示 App 中没有可供处理的已下载视频。本文使用上方的 Choose from Photos，从系统相册直接选择素材。"
      }
    ],
    "faq": [
      {
        "question": "可以选择 MP3 等其他格式吗？",
        "answer": "此流程直接生成 M4A，不提供格式菜单，本文不包含 MP3 转换步骤。"
      },
      {
        "question": "为什么照片 App 里找不到输出？",
        "answer": "提取结果是音频文件，不是视频或照片。请从 Share File 打开分享面板，使用保存到“文件”等入口管理音频。"
      },
      {
        "question": "能直接从视频分享链接提取声音吗？",
        "answer": "本文演示的是处理相册里的已有视频。如果只有分享链接，可以先按对应平台教程保存视频，再进行音频提取。"
      }
    ],
    "steps": [
      {
        "title": "打开提取音频工具",
        "text": "点击底部 Process（处理），再打开 Extract Audio。"
      },
      {
        "title": "从相册选择视频",
        "text": "在 Select Video（选择视频）页面点击 Choose from Photos（从相册选择），再在系统照片选择器中点选要处理的视频。即使页面显示没有已下载视频，也不影响从相册导入。如果素材保存在“文件”App，可使用页面上的 Choose from Files（从文件选择）入口。"
      },
      {
        "title": "等待音频提取完成",
        "text": "选中视频后直接开始提取，无需再点击开始按钮。出现 Processing Complete 和 .m4a 文件后，点击 Share File 保存或分享；Done 关闭提示。"
      },
      {
        "title": "打开分享与保存入口",
        "text": "在 Share File 分享面板中，选择保存到“文件”保留副本，或选择其他 App 分享。保存后打开音频，检查声音和时长。"
      }
    ],
    "exampleNote": "截图采用 iPhone 17 Pro Max 模拟器（iOS 26.0）的英文界面，正文附中文按钮说明。示例参数和使用限制以该版本为背景。 示例选中素材后直接生成 M4A，没有格式菜单。截图展示到分享面板，未展示保存到“文件”完成。系统分享按钮可能跟随设备语言。"
  },
  "change-video-md5-iphone": {
    "title": "如何在 iPhone 和 iPad 上使用视频 MD5 修改工具？",
    "description": "使用 Change MD5 为视频生成处理副本。如果需要确认 MD5 已变化，请使用哈希校验工具比较原文件与输出文件。",
    "intro": "使用 Change MD5 为视频生成处理副本。如果需要确认 MD5 已变化，请使用哈希校验工具比较原文件与输出文件。",
    "tips": [
      {
        "title": "以实际文件校验为准",
        "text": "文件名变化不能证明 MD5 已改变。如果用途依赖摘要值，请对输入和输出分别计算并比较，而不是只看界面完成提示。"
      }
    ],
    "faq": [
      {
        "question": "能改善画质或减少文件大小吗？",
        "answer": "本文不把修改 MD5 当作画质增强或压缩工具。需要压缩请使用 Transcode Video。"
      },
      {
        "question": "修改摘要会改变视频的使用权限吗？",
        "answer": "不会，文件摘要变化不改变内容本身的使用权限。"
      }
    ],
    "steps": [
      {
        "title": "在 Process 页面打开 Change MD5",
        "text": "点击底部 Process（处理），再打开 Change MD5。"
      },
      {
        "title": "选择视频并等待处理",
        "text": "从相册或其他可用来源选择视频，随后直接开始处理，没有单独的参数设置页。",
        "sections": [
          {
            "title": "没有可填写的目标摘要",
            "text": "此工具不提供目标 MD5 输入框，不能指定任意摘要值。"
          }
        ]
      },
      {
        "title": "检查结果，再保存或继续处理",
        "text": "检查新文件，再保存或分享。如果需要确认 MD5 不同，请计算并比较原文件与输出文件的哈希值；文件名变化不能代替校验。",
        "sections": [
          {
            "title": "预览与保存",
            "text": "在结果页点击播放，检查画面、时长及声音是否符合预期，再点击 Save to Photos（保存到相册）。首次保存可能需要允许 App 添加照片和视频；收到保存成功提示后，再到照片 App 核对。"
          },
          {
            "title": "其他按钮的用途",
            "text": "Keep Processing（继续处理）将结果带入工具选择；Share File（分享文件）打开分享入口；Done（完成）关闭结果页。Done 不等于保存到相册。"
          }
        ]
      }
    ],
    "exampleNote": "截图采用 iPhone 17 Pro Max 模拟器（iOS 26.0）的英文界面，正文附中文按钮说明。示例参数和使用限制以该版本为背景。 示例已生成 _md5.mp4 并进入结果页，未比较输入与输出文件的 MD5 数值。"
  },
  "merge-audio-video-iphone": {
    "title": "如何在 iPhone 和 iPad 上合并音频与视频？",
    "description": "使用 Merge Audio and Video 将视频与另一份文件中的声音合并。先选视频，再选音频来源，导出后检查声音和同步效果。",
    "intro": "使用 Merge Audio and Video 将视频与另一份文件中的声音合并。先选视频，再选音频来源，导出后检查声音和同步效果。",
    "tips": [
      {
        "title": "声画不同步或结尾不合适",
        "text": "先检查输入素材长度及起始位置。这个设置页没有时间偏移和循环控件，必要时先处理素材，再重新合并。"
      }
    ],
    "faq": [
      {
        "question": "必须先提取音频吗？",
        "answer": "不必。选择 Extract audio from Photos video，即可直接从另一段相册视频取得声音。"
      },
      {
        "question": "是否能同时调节两条音轨的比例？",
        "answer": "此页面没有混音比例或多音轨控件。需要混音时，请先单独准备音频。"
      }
    ],
    "steps": [
      {
        "title": "在 Process 页面打开 Merge Audio and Video",
        "text": "点击底部 Process（处理），再打开 Merge Audio and Video。"
      },
      {
        "title": "选择要处理的视频",
        "text": "在 Select Video（选择视频）中，点击 Choose from Photos（从相册选择）或 Choose from Files（从文件选择）导入视频。下载列表为空也可以导入。"
      },
      {
        "title": "先选择画面素材",
        "text": "先导入要保留画面的视频。上方卡片显示该视频的预览、尺寸和时长；Audio Source 初始显示 Not Selected，表示还没选声音来源。",
        "sections": [
          {
            "title": "画面来源与声音来源分开确认",
            "text": "先确定哪个视频提供画面，再选择声音。不要把上方已出现视频预览误认为音频来源已经设置完成。"
          }
        ]
      },
      {
        "title": "选择声音来源",
        "text": "点击 Audio Source，弹窗提供 Choose from Files 与 Extract audio from Photos video。",
        "sections": [
          {
            "title": "Choose from Files",
            "text": "用于选择文件中的音频素材。准备好要使用的音频后，按系统文件选择器的路径选取。"
          },
          {
            "title": "Extract audio from Photos video",
            "text": "用于从相册视频取得声音。本例选择此入口，再选中另一段视频；不需要先手动导出一个独立音频文件。"
          }
        ]
      },
      {
        "title": "核对已选来源再合并",
        "text": "返回后，Audio Source 显示所选来源的文件名，表示已完成选择。确认无误后点击 Start Processing。",
        "sections": [
          {
            "title": "本页没有额外混音参数",
            "text": "Audio Source 用于选择声音输入。此页面没有独立的混音比例、时间偏移、循环或音频裁剪控件。需要这些调整时，先处理素材，再合并并试听。"
          }
        ]
      },
      {
        "title": "检查结果，再保存或继续处理",
        "text": "保存前播放合并结果，检查音频来源、开头同步、音量和结尾，尤其留意两份素材时长不同的情况。",
        "sections": [
          {
            "title": "预览与保存",
            "text": "在结果页点击播放，检查画面、时长及声音是否符合预期，再点击 Save to Photos（保存到相册）。首次保存可能需要允许 App 添加照片和视频；收到保存成功提示后，再到照片 App 核对。"
          },
          {
            "title": "其他按钮的用途",
            "text": "Keep Processing（继续处理）将结果带入工具选择；Share File（分享文件）打开分享入口；Done（完成）关闭结果页。Done 不等于保存到相册。"
          }
        ]
      }
    ],
    "exampleNote": "截图采用 iPhone 17 Pro Max 模拟器（iOS 26.0）的英文界面，正文附中文按钮说明。示例参数和使用限制以该版本为背景。 示例从另一段相册视频取得音频并生成约 6 秒视频，尚未逐段试听合并音轨。"
  }
};
