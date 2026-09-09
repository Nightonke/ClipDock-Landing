import type { TutorialCopy } from "../../types";
export const copy: Record<string, TutorialCopy> = {
  "copy-link-auto-download-iphone": {
    "title": "iPhone 如何只复制链接就下载视频？无需反复切换 App",
    "description": "了解 ClipDock影随存复制即下载的准备流程、单条验证和完成通知，减少在来源 App 与下载器之间来回粘贴。",
    "intro": "复制即下载适合从不同作品中逐条挑选视频：你在来源 App 复制分享链接，ClipDock影随存在功能已就绪时识别并创建任务。它和一次解析整个主页的批量下载是两种不同流程。",
    "tips": [
      {
        "title": "复制了链接，却没有自动下载",
        "text": "依次检查功能状态、链接是否支持、网络连接以及系统提示。手动粘贴也失败时，问题更可能在来源链接；手动可用而自动没有响应时，应优先检查复制即下载的运行条件。"
      }
    ],
    "faq": [
      {
        "question": "关闭 App 或锁屏后一定能继续识别吗？",
        "answer": "不能把后台功能理解为无条件常驻。锁屏、强制退出和系统资源调度下的具体表现，需要按照当前 App 版本和实际测试确认。"
      },
      {
        "question": "复制即下载等于批量解析主页吗？",
        "answer": "不等于。前者接收你逐条复制的分享链接，后者从一个主页或列表链接提取多条作品。"
      }
    ],
    "steps": [
      {
        "title": "开启复制即下载与后台检测",
        "text": "打开 ClipDock影随存的 Extract 页面，在 Video 分页开启 Fill from Clipboard（从剪贴板填入）、Auto-download Links（自动下载链接）和 Detect in Background（后台检测），如图中的三个绿色开关。"
      },
      {
        "title": "切到视频平台，保持悬浮窗开启",
        "text": "切换到 TikTok 等视频平台，确认屏幕上出现 ClipDock影随存的画中画悬浮窗。图中 Copy a link to download 提示表示可以开始复制链接；可以将悬浮窗滑动到屏幕边缘收起，但请保持画中画开启，不要关闭悬浮窗。"
      },
      {
        "title": "复制想保存的视频链接",
        "text": "刷到喜欢的视频后打开分享面板，点击 Copy link（复制链接），不需要再回到 ClipDock影随存粘贴。悬浮窗提示可以滑到屏幕边缘收起，但要保持画中画开启。"
      },
      {
        "title": "边刷边复制，查看后台下载提示",
        "text": "观看录屏中的连续操作：复制分享链接后，ClipDock影随存在后台识别资源并创建下载任务，你可以继续浏览其他视频。留意系统通知中的任务状态；浏览结束后，到 Manager（管理）检查结果，需要相册副本时再执行保存到相册。"
      }
    ]
  },
  "copy-tiktok-links-background": {
    "title": "如何边刷 TikTok 边复制链接下载视频？",
    "description": "在 TikTok 中逐条挑选视频，通过 ClipDock影随存复制即下载创建任务，了解如何验证接收、查看完成通知和避免漏掉链接。",
    "intro": "收藏来自不同作者的几条视频时，逐条复制分享链接比解析完整主页更符合选择过程。先让 ClipDock影随存的复制即下载功能就绪，再回到 TikTok 浏览和挑选。",
    "tips": [
      {
        "title": "什么时候改用主页批量下载？",
        "text": "如果目标是同一作者的一组作品，复制主页链接更合适。如果只想选取来自多个作者的少量作品，继续使用逐条复制流程。"
      }
    ],
    "faq": [
      {
        "question": "为什么这篇和普通 TikTok 下载教程分开？",
        "answer": "普通教程是复制后回 App 手动提交；这里重点是首次准备、自动接收验证和连续收集的过程。"
      },
      {
        "question": "复制时有系统权限提示怎么办？",
        "answer": "按当前系统和 App 的提示理解并处理权限。不要默认忽略提示后功能仍然正常，也不需要提供账号密码给教程。"
      }
    ],
    "steps": [
      {
        "title": "开启自动下载与后台检测",
        "text": "在 ClipDock影随存的 Extract 页面打开 Video 分页，开启 Fill from Clipboard（从剪贴板填入）、Auto-download Links（自动下载链接）和 Detect in Background（后台检测），确认三个开关均为绿色。"
      },
      {
        "title": "回到 TikTok，确认悬浮窗已出现",
        "text": "切回 TikTok 浏览视频，保持 ClipDock影随存的画中画悬浮窗开启。看到 Copy a link to download（复制链接即可下载）提示后，就可以开始挑选想保存的作品。"
      },
      {
        "title": "打开分享面板并复制链接",
        "text": "在目标视频上点击分享按钮，选择 Copy link（复制链接），然后继续浏览。不需要来回切换 App；若悬浮窗挡住画面，可以按提示滑到屏幕边缘收起，保持画中画开启。"
      },
      {
        "title": "观看连续复制与后台下载演示",
        "text": "录屏展示了边刷 TikTok 边复制多个作品链接的过程，以及后台识别、创建下载任务的通知。确认第一条链接已接收后再继续收集；浏览结束后到 Manager 检查完成与失败任务，避免只凭通知判断结果。"
      }
    ]
  }
};
