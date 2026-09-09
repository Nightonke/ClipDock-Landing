import type { TutorialCopy } from "../../types";
export const copy: Record<string, TutorialCopy> = {
  "copy-link-auto-download-iphone": {
    "title": "iPhone 如何只复制链接就下载视频？无需反复切换 App",
    "description": "在 ClipDock影随存开启复制链接自动下载，保持画中画运行，浏览时无需反复切换 App。",
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
        "answer": "使用后台识别时请保持画中画开启。锁屏、强制退出或系统资源调度可能中断识别；如果复制链接后没有响应，返回 ClipDock 检查状态。"
      },
      {
        "question": "复制即下载等于批量解析主页吗？",
        "answer": "不等于。前者接收你逐条复制的分享链接，后者从一个主页或列表链接提取多条作品。"
      }
    ],
    "steps": [
      {
        "title": "开启复制即下载与后台检测",
        "text": "打开 ClipDock 的 Extract（提取）→ Video（视频），开启 Fill from Clipboard、Auto-download Links 和 Detect in Background。需要下载提醒时，请允许通知。"
      },
      {
        "title": "切到视频平台，保持悬浮窗开启",
        "text": "切换到视频 App，保持 ClipDock 的画中画悬浮窗开启。看到 Copy a link to download 提示后即可复制链接。若挡住画面，可滑到屏幕边缘收起，但不要关闭。"
      },
      {
        "title": "复制想保存的视频链接",
        "text": "刷到喜欢的视频后打开分享面板，点击 Copy link（复制链接），不需要再回到 ClipDock影随存粘贴。悬浮窗提示可以滑到屏幕边缘收起，但要保持画中画开启。"
      },
      {
        "title": "继续浏览并检查下载结果",
        "text": "先复制一条链接，确认 ClipDock 已接收后再继续。浏览期间保持画中画开启；结束后到 Manager 查看完成和失败任务，按需保存到相册。"
      }
    ],
    "exampleNote": "录屏展示后台识别复制的链接并创建下载任务。收到通知不代表每个文件都已下载完成或保存到相册。"
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
        "answer": "普通教程是在 ClipDock 手动粘贴链接；此流程让你浏览 TikTok 时，通过复制链接创建下载任务。"
      },
      {
        "question": "复制时有系统权限提示怎么办？",
        "answer": "按提示允许剪贴板识别或通知所需权限。如果关闭了提示，返回 ClipDock 确认功能已就绪，再继续复制链接。"
      }
    ],
    "steps": [
      {
        "title": "开启自动下载与后台检测",
        "text": "打开 ClipDock 的 Extract（提取）→ Video（视频），开启 Fill from Clipboard、Auto-download Links 和 Detect in Background。需要下载提醒时，请允许通知。"
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
        "title": "继续浏览并检查下载结果",
        "text": "先复制一条链接，确认 ClipDock 已接收后再继续。浏览期间保持画中画开启；结束后到 Manager 查看完成和失败任务，按需保存到相册。"
      }
    ],
    "exampleNote": "录屏展示后台识别复制的链接并创建下载任务。收到通知不代表每个文件都已下载完成或保存到相册。"
  }
};
