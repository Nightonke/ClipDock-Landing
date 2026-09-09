import type { TutorialCopy } from "../../types";
export const copy: Record<string, TutorialCopy> = {
  "download-youtube-playlist-iphone": {
    "title": "2026 年如何在 iPhone/iPad 上批量下载 YouTube 播放列表？",
    "description": "取得 YouTube 播放列表链接，在 ClipDock影随存中解析多条视频、确认结果并创建批量任务，处理缺失条目和下载失败。",
    "intro": "播放列表批量下载的输入是一份列表，而不是其中某个视频。适合备份自己的系列作品或已获授权的课程片段，减少逐条复制视频链接的操作。",
    "tips": [
      {
        "title": "解析数量与列表显示数量不一致",
        "text": "先检查是否有不可访问的作品，再确认是否复制了正确的列表链接。列表显示数量不等于本次实际可下载数量，不要盲目重复提交整份列表。"
      }
    ],
    "faq": [
      {
        "question": "播放列表教程能直接当频道下载教程使用吗？",
        "answer": "不能完全等同。两者都属于批量任务，但输入页面和覆盖作品范围不同，应检查实际解析结果。"
      },
      {
        "question": "批量完成后会自动进入相册吗？",
        "answer": "可在 Download Settings 开启 Auto-Save Completed Downloads to Photos，自动保存支持的下载文件；否则在下载后手动选择 Save to Photos。保存需要相册访问权限和支持的格式。"
      }
    ],
    "steps": [
      {
        "title": "在 Batch 分页填入播放列表链接",
        "text": "复制 YouTube 播放列表的分享链接，打开 ClipDock影随存的 Extract 页面，切换到 Batch（批量）分页，点击 Paste（粘贴）填入。确认使用的是播放列表链接，而不是单个视频的地址。"
      },
      {
        "title": "加载播放列表",
        "text": "点击 Load list（加载列表），等待 Loading list 提示结束。加载列表只是获取可选择的作品，不会立即开始下载；下一步还需要选择条目并加入队列。"
      },
      {
        "title": "选择视频并加入下载队列",
        "text": "核对来源并勾选需要的视频或图片，可按类型筛选或使用 Select loaded（全选已加载）。设置 Batch quality（批量画质），确认已选数量，再点击 Add to queue（加入队列）。"
      },
      {
        "title": "查看排队状态与下载进度",
        "text": "打开 Manager 查看下载。Active 包含排队和正在处理的任务，Done 是已完成文件，Failed 是需要处理的失败任务。打开具体条目核对状态。"
      }
    ],
    "exampleNote": "截图展示队列运行状态，未展示全部下载完成或相册保存成功。Manager 的总数包含其他任务，不能作为这一批的结果统计；账号限制和媒体数量均为示例。"
  },
  "batch-download-instagram-profile-iphone": {
    "title": "如何在 iPhone 和 iPad 上批量下载 Instagram 主页视频与图片？",
    "description": "批量保存同一位Instagram作者的作品：复制主页链接，在 Batch 中加载列表，再选择需要的媒体下载。",
    "intro": "批量保存同一位Instagram作者的作品：复制主页链接，在 Batch 中加载列表，再选择需要的媒体下载。",
    "tips": [
      {
        "title": "先核对已加载范围",
        "text": "主页列表以实际返回结果为准，不代表 Story、私密内容、已删除内容或全部历史作品都会包含在内。批量提交前先确认作者、媒体类型和选择数量。"
      }
    ],
    "faq": [
      {
        "question": "只下载视频，可以不下载图片吗？",
        "answer": "使用 Video 筛选，再核对已选条目和 Add to queue 的数量后提交。"
      },
      {
        "question": "点击 Load list 就会下载吗？",
        "answer": "不会。加载后还需要选择条目，并点击 Add to queue 才会加入下载队列。"
      },
      {
        "question": "为什么显示 12 posts，却有 16 items？",
        "answer": "帖子与媒体资源不是同一计数单位，多图帖子可以包含多项图片资源。实际下载数量看选中项和加入队列按钮。"
      },
      {
        "question": "截图中的 Unlimited 代表所有用户都不限量吗？",
        "answer": "不是。请以自己账号显示的下载额度和限制为准。"
      }
    ],
    "steps": [
      {
        "title": "复制 Instagram 主页链接",
        "text": "在 Instagram 打开目标作者的个人主页，点击右上角省略号，在菜单中选择 Copy profile URL（复制主页链接）。这里需要作者主页地址；只下载某一条 Reels 时，可使用单条视频教程。"
      },
      {
        "title": "在 Batch 分页粘贴链接",
        "text": "打开 ClipDock 的 Extract（提取）→ Batch（批量），点击 Paste（粘贴），确认是目标Instagram主页链接。"
      },
      {
        "title": "加载主页作品列表",
        "text": "点击 Load list（加载列表），等待 Loading list（正在加载列表）提示结束。加载列表只是获取可供选择的作品，还不会开始下载；下一步确认选择并加入队列后才会创建下载任务。"
      },
      {
        "title": "筛选资源并加入下载队列",
        "text": "核对来源并勾选需要的视频或图片，可按类型筛选或使用 Select loaded（全选已加载）。设置 Batch quality（批量画质），确认已选数量，再点击 Add to queue（加入队列）。",
        "sections": [
          {
            "title": "All、Video、Image：按媒体类型筛选",
            "text": "All 显示全部类型，Video 筛选视频，Image 筛选图片。只需要视频时切换 Video，并在提交前核对条目勾选状态和总选择数，避免将不需要的图片一起加入队列。"
          },
          {
            "title": "帖子数与资源数为什么不同？",
            "text": "一条帖子可以包含多个媒体文件。例如，多图帖子会让资源数大于帖子数。下载前请核对已选数量。"
          },
          {
            "title": "逐项选择与 Select loaded",
            "text": "条目右侧的蓝色勾选表示已选中，可按需调整。Select loaded 用于选择已加载的条目；以页面显示的选择数量为准。Change link 可用于更换主页链接。"
          },
          {
            "title": "Batch quality：批量画质",
            "text": "Follow download settings 使用下载设置中的画质偏好。点击 Batch quality 查看可用选项，确认选择后再加入队列。"
          }
        ]
      },
      {
        "title": "在 Manager 检查任务状态",
        "text": "打开 Manager 查看下载。Active 包含排队和正在处理的任务，Done 是已完成文件，Failed 是需要处理的失败任务。打开具体条目核对状态。",
        "sections": [
          {
            "title": "排队不等于下载完成",
            "text": "Queued 表示排队等待。到 Done 预览已完成文件，到 Failed 查看具体错误。如果文件未自动保存，使用 Save to Photos 保留相册副本。"
          }
        ]
      }
    ],
    "exampleNote": "截图展示队列运行状态，未展示全部下载完成或相册保存成功。Manager 的总数包含其他任务，不能作为这一批的结果统计；账号限制和媒体数量均为示例。"
  },
  "batch-download-tiktok-profile-iphone": {
    "title": "如何在 iPhone 和 iPad 上批量下载 TikTok 主页视频？",
    "description": "批量保存同一位TikTok作者的作品：复制主页链接，在 Batch 中加载列表，再选择需要的媒体下载。",
    "intro": "批量保存同一位TikTok作者的作品：复制主页链接，在 Batch 中加载列表，再选择需要的媒体下载。",
    "tips": [
      {
        "title": "先选择需要的作品",
        "text": "同一作者的多条作品适合主页批量下载；只需要某条视频时，使用单条视频链接更容易确认目标。再次提交主页前核对已下载内容，避免重复。"
      }
    ],
    "faq": [
      {
        "question": "加载主页列表就会开始下载吗？",
        "answer": "不会。需要选中资源，核对画质和数量，再点击 Add to queue。"
      },
      {
        "question": "主页上的所有作品都会出现在列表里吗？",
        "answer": "不保证。以实际加载的资源为准，不把列表视为全部历史内容或受限内容的完整备份。"
      },
      {
        "question": "为什么有些条目只显示 Resource？",
        "answer": "有些条目使用通用标题。可结合缩略图、媒体类型和日期辨认，下载后再预览文件。"
      }
    ],
    "steps": [
      {
        "title": "复制作者主页链接",
        "text": "在 TikTok 打开目标作者主页，点击右上角分享箭头，在 Send to（发送至）面板中点击 Copy link（复制链接）。这里复制的是作者主页，不是单条视频链接。"
      },
      {
        "title": "在 Batch 分页粘贴主页地址",
        "text": "打开 ClipDock 的 Extract（提取）→ Batch（批量），点击 Paste（粘贴），确认是目标TikTok主页链接。"
      },
      {
        "title": "加载列表并等待结果",
        "text": "点击 Load list（加载列表），等待 Loading list（正在加载列表）结束。这个阶段只加载可选择的资源，还没有开始下载；需要在下一步确认条目并点击 Add to queue。"
      },
      {
        "title": "选择资源、画质并加入队列",
        "text": "核对来源并勾选需要的视频或图片，可按类型筛选或使用 Select loaded（全选已加载）。设置 Batch quality（批量画质），确认已选数量，再点击 Add to queue（加入队列）。",
        "sections": [
          {
            "title": "All、Video、Image：筛选媒体类型",
            "text": "All 查看全部资源，Video 查看视频，Image 查看图片。需要只下载视频时先切换 Video，再核对勾选状态和提交数量。条目右侧蓝色勾选表示已选中，可按需调整。"
          },
          {
            "title": "Select loaded 与已加载范围",
            "text": "Select loaded 用于选择已加载的条目。posts 是帖子数，items 是资源数，一个帖子可能包含多项媒体，因此两者不一定相同。当前列表不等于作者的全部历史作品；要更换作者可点击 Change link。"
          },
          {
            "title": "Batch quality：批量画质",
            "text": "Follow download settings 使用下载设置中的画质偏好。点击 Batch quality 查看可用选项，确认选择后再加入队列。"
          },
          {
            "title": "数量与账号限制以界面为准",
            "text": "提交前检查已选数量和账号可用下载额度。posts 是帖子数，items 是媒体文件数，两者可能不同。更换来源时，点击 Change link。"
          }
        ]
      },
      {
        "title": "查看下载进度和失败任务",
        "text": "打开 Manager 查看下载。Active 包含排队和正在处理的任务，Done 是已完成文件，Failed 是需要处理的失败任务。打开具体条目核对状态。",
        "sections": [
          {
            "title": "排队、下载中与已完成",
            "text": "Queued 表示排队等待。到 Done 预览已完成文件，到 Failed 查看具体错误。如果文件未自动保存，使用 Save to Photos 保留相册副本。"
          },
          {
            "title": "有失败条目时怎么检查",
            "text": "打开失败任务并查看错误，检查来源链接和网络，再按情况重试。仅凭失败总数无法判断原因。"
          }
        ]
      }
    ],
    "exampleNote": "截图展示队列运行状态，未展示全部下载完成或相册保存成功。Manager 的总数包含其他任务，不能作为这一批的结果统计；账号限制和媒体数量均为示例。"
  },
  "batch-download-douyin-profile-iphone": {
    "title": "如何在 iPhone 和 iPad 上批量下载抖音主页视频？",
    "description": "批量保存同一位抖音作者的作品：复制主页链接，在 Batch 中加载列表，再选择需要的媒体下载。",
    "intro": "批量保存同一位抖音作者的作品：复制主页链接，在 Batch 中加载列表，再选择需要的媒体下载。本篇借用 TikTok 配图说明步骤，并非抖音实测记录；请使用自己的抖音主页链接。",
    "tips": [
      {
        "title": "先选择需要的作品",
        "text": "同一作者的多条作品适合主页批量下载；只需要某条视频时，使用单条视频链接更容易确认目标。再次提交主页前核对已下载内容，避免重复。"
      }
    ],
    "faq": [
      {
        "question": "加载主页列表就会开始下载吗？",
        "answer": "不会。需要选中资源，核对画质和数量，再点击 Add to queue。"
      },
      {
        "question": "主页上的所有作品都会出现在列表里吗？",
        "answer": "不保证。以实际加载的资源为准，不把列表视为全部历史内容或受限内容的完整备份。"
      },
      {
        "question": "为什么有些条目只显示 Resource？",
        "answer": "有些条目使用通用标题。可结合缩略图、媒体类型和日期辨认，下载后再预览文件。"
      }
    ],
    "steps": [
      {
        "title": "复制作者主页链接",
        "text": "在抖音打开作者主页，通过主页分享菜单复制链接。"
      },
      {
        "title": "在 Batch 分页粘贴主页地址",
        "text": "打开 ClipDock 的 Extract（提取）→ Batch（批量），点击 Paste（粘贴），确认是目标抖音主页链接。"
      },
      {
        "title": "加载列表并等待结果",
        "text": "点击 Load list（加载列表），等待 Loading list（正在加载列表）结束。这个阶段只加载可选择的资源，还没有开始下载；需要在下一步确认条目并点击 Add to queue。"
      },
      {
        "title": "选择资源、画质并加入队列",
        "text": "核对来源并勾选需要的视频或图片，可按类型筛选或使用 Select loaded（全选已加载）。设置 Batch quality（批量画质），确认已选数量，再点击 Add to queue（加入队列）。",
        "sections": [
          {
            "title": "All、Video、Image：筛选媒体类型",
            "text": "All 查看全部资源，Video 查看视频，Image 查看图片。需要只下载视频时先切换 Video，再核对勾选状态和提交数量。条目右侧蓝色勾选表示已选中，可按需调整。"
          },
          {
            "title": "Select loaded 与已加载范围",
            "text": "Select loaded 用于选择已加载的条目。posts 是帖子数，items 是资源数，一个帖子可能包含多项媒体，因此两者不一定相同。当前列表不等于作者的全部历史作品；要更换作者可点击 Change link。"
          },
          {
            "title": "Batch quality：批量画质",
            "text": "Follow download settings 使用下载设置中的画质偏好。点击 Batch quality 查看可用选项，确认选择后再加入队列。"
          },
          {
            "title": "数量与账号限制以界面为准",
            "text": "提交前检查已选数量和账号可用下载额度。posts 是帖子数，items 是媒体文件数，两者可能不同。更换来源时，点击 Change link。"
          }
        ]
      },
      {
        "title": "查看下载进度和失败任务",
        "text": "打开 Manager 查看下载。Active 包含排队和正在处理的任务，Done 是已完成文件，Failed 是需要处理的失败任务。打开具体条目核对状态。",
        "sections": [
          {
            "title": "排队、下载中与已完成",
            "text": "Queued 表示排队等待。到 Done 预览已完成文件，到 Failed 查看具体错误。如果文件未自动保存，使用 Save to Photos 保留相册副本。"
          },
          {
            "title": "有失败条目时怎么检查",
            "text": "打开失败任务并查看错误，检查来源链接和网络，再按情况重试。仅凭失败总数无法判断原因。"
          }
        ]
      }
    ],
    "exampleNote": "本篇复用 TikTok 配图，图中的账号、链接和数量并非抖音实测记录。截图展示队列运行状态，未展示全部下载完成或相册保存成功。Manager 的总数包含其他任务，不能作为这一批的结果统计；账号限制和媒体数量均为示例。"
  },
  "batch-download-weibo-profile-iphone": {
    "title": "如何在 iPhone 和 iPad 上批量下载微博主页视频？",
    "description": "批量保存同一位微博作者的作品：复制主页链接，在 Batch 中加载列表，再选择需要的媒体下载。",
    "intro": "批量保存同一位微博作者的作品：复制主页链接，在 Batch 中加载列表，再选择需要的媒体下载。",
    "tips": [
      {
        "title": "分批核对下载范围",
        "text": "先选择需要的作品，再按需加载下一页。重新提交主页前核对已下载内容，避免重复下载。列表以实际返回资源为准，不等于全部历史内容的完整备份。"
      }
    ],
    "faq": [
      {
        "question": "为什么列表只有 16 项？",
        "answer": "列表最初只显示已加载页的内容。若有更多作品，可使用 Load next page 继续加载。"
      },
      {
        "question": "点击加载下一页就会下载吗？",
        "answer": "加载列表与下载是两个阶段。确认已选条目后，需要点击 Add to queue 才会加入下载队列。"
      },
      {
        "question": "可以只下载部分视频吗？",
        "answer": "可以按需调整条目勾选状态。使用 Video 筛选后，也应核对总选择数和 Add to queue 的数量再提交。"
      }
    ],
    "steps": [
      {
        "title": "复制微博作者主页链接",
        "text": "在微博打开作者主页，展开分享菜单并选择复制链接。请复制主页地址，而不是单条微博。"
      },
      {
        "title": "在 Batch 中粘贴主页地址",
        "text": "打开 ClipDock 的 Extract（提取）→ Batch（批量），点击 Paste（粘贴），确认是目标微博主页链接。"
      },
      {
        "title": "加载列表并等待返回",
        "text": "点击 Load list（加载列表），页面出现 Loading list（正在加载列表）时等待返回。加载列表不会直接开始下载，之后还需要选择资源并点击 Add to queue（加入队列）。"
      },
      {
        "title": "选择视频，按需加载下一页",
        "text": "核对来源并勾选需要的视频或图片，可按类型筛选或使用 Select loaded（全选已加载）。设置 Batch quality（批量画质），确认已选数量，再点击 Add to queue（加入队列）。",
        "sections": [
          {
            "title": "Load next page：继续查看更多作品",
            "text": "点击 Load next page 加载更多条目，再检查新内容和已选数量。已加载列表不一定包含全部历史或受限作品。"
          },
          {
            "title": "筛选与勾选需要的资源",
            "text": "All 显示全部类型，Video 筛选视频，Image 筛选图片。条目右侧蓝色勾选表示已选中；Select loaded 用于选择已加载条目。只需要部分视频时调整勾选，再核对底部按钮中的数量。"
          },
          {
            "title": "批量画质与加入队列",
            "text": "Follow download settings 使用下载设置中的画质偏好。点击 Batch quality 查看可用选项，确认选择后再加入队列。"
          },
          {
            "title": "帖子数、资源数与使用限制",
            "text": "提交前检查已选数量和账号可用下载额度。posts 是帖子数，items 是媒体文件数，两者可能不同。更换来源时，点击 Change link。"
          }
        ]
      },
      {
        "title": "在 Manager 查看下载队列",
        "text": "打开 Manager 查看下载。Active 包含排队和正在处理的任务，Done 是已完成文件，Failed 是需要处理的失败任务。打开具体条目核对状态。",
        "sections": [
          {
            "title": "完成后预览并保存",
            "text": "Queued 表示排队等待。到 Done 预览已完成文件，到 Failed 查看具体错误。如果文件未自动保存，使用 Save to Photos 保留相册副本。"
          },
          {
            "title": "检查失败条目",
            "text": "打开失败任务并查看错误，检查来源链接和网络，再按情况重试。仅凭失败总数无法判断原因。"
          }
        ]
      }
    ],
    "exampleNote": "截图展示队列运行状态，未展示全部下载完成或相册保存成功。Manager 的总数包含其他任务，不能作为这一批的结果统计；账号限制和媒体数量均为示例。"
  },
  "batch-download-bilibili-profile-iphone": {
    "title": "如何在 iPhone 和 iPad 上批量下载 Bilibili（B 站）UP 主视频？",
    "description": "批量保存同一位B 站作者的作品：复制主页链接，在 Batch 中加载列表，再选择需要的媒体下载。",
    "intro": "批量保存同一位B 站作者的作品：复制主页链接，在 Batch 中加载列表，再选择需要的媒体下载。",
    "tips": [
      {
        "title": "按实际列表选择作品",
        "text": "主页批量加载范围以返回结果为准，不把它视为全部历史投稿或受限内容的完整备份。重复提交前先核对已下载内容。"
      }
    ],
    "faq": [
      {
        "question": "可以直接粘贴 b23.tv 短链接吗？",
        "answer": "本例使用从 UP 主主页复制的 b23.tv 短链接，并加载了作品列表。应核对链接来自主页，以及返回的作者是否正确。"
      },
      {
        "question": "为什么只有 20 项资源？",
        "answer": "本例当前只加载了一页，列表底部提供 Load next page，可以继续加载并查看实际返回的资源。"
      },
      {
        "question": "这篇也演示了合集、收藏夹或多 P 视频吗？",
        "answer": "本篇介绍主页投稿。合集、收藏夹和多 P 视频使用不同链接，未在这里演示。"
      },
      {
        "question": "一定能下载最高画质吗？",
        "answer": "不保证。可用画质取决于链接返回的媒体，请在加入队列前检查 Batch quality。"
      }
    ],
    "steps": [
      {
        "title": "复制 UP 主主页分享链接",
        "text": "在 B 站打开 UP 主主页，通过分享菜单复制链接。确认分享的是主页，而不是单条视频。"
      },
      {
        "title": "在 Batch 中粘贴主页短链接",
        "text": "打开 ClipDock 的 Extract（提取）→ Batch（批量），点击 Paste（粘贴），确认是目标B 站主页链接。",
        "sections": [
          {
            "title": "短链接也要核对来源",
            "text": "本例直接使用复制得到的短链接，无需手动改写地址。但仅凭 b23.tv 域名无法区分主页与单条视频，应该从 UP 主主页复制，并在加载后核对作者名称。"
          }
        ]
      },
      {
        "title": "加载投稿列表",
        "text": "点击 Load list（加载列表），等待 Loading list（正在加载列表）提示结束。加载只获取可选择的资源，不会立即开始下载；还需要在列表中确认条目并加入队列。"
      },
      {
        "title": "选择视频并按需加载下一页",
        "text": "核对来源并勾选需要的视频或图片，可按类型筛选或使用 Select loaded（全选已加载）。设置 Batch quality（批量画质），确认已选数量，再点击 Add to queue（加入队列）。",
        "sections": [
          {
            "title": "Load next page：查看更多投稿",
            "text": "点击 Load next page 加载更多条目，再检查新内容和已选数量。已加载列表不一定包含全部历史或受限作品。"
          },
          {
            "title": "筛选和勾选下载范围",
            "text": "All 查看全部类型，Video 筛选视频，Image 筛选图片。右侧蓝色勾选表示已选中，可以按需调整；Select loaded 用于选择已加载条目。提交前检查总选择数，避免下载不需要的资源。"
          },
          {
            "title": "Batch quality：批量画质",
            "text": "Follow download settings 使用下载设置中的画质偏好。点击 Batch quality 查看可用选项，确认选择后再加入队列。"
          },
          {
            "title": "核对账号与数量",
            "text": "提交前检查已选数量和账号可用下载额度。posts 是帖子数，items 是媒体文件数，两者可能不同。更换来源时，点击 Change link。"
          }
        ]
      },
      {
        "title": "查看下载队列与完成结果",
        "text": "打开 Manager 查看下载。Active 包含排队和正在处理的任务，Done 是已完成文件，Failed 是需要处理的失败任务。打开具体条目核对状态。",
        "sections": [
          {
            "title": "长视频先确认下载范围",
            "text": "选择长视频前先检查时长和预计大小，优先下载需要的作品，再按需添加。"
          },
          {
            "title": "完成后预览与保存",
            "text": "Queued 表示排队等待。到 Done 预览已完成文件，到 Failed 查看具体错误。如果文件未自动保存，使用 Save to Photos 保留相册副本。"
          }
        ]
      }
    ],
    "exampleNote": "截图展示队列运行状态，未展示全部下载完成或相册保存成功。Manager 的总数包含其他任务，不能作为这一批的结果统计；账号限制和媒体数量均为示例。"
  }
};
