import type { TutorialCopy } from "../../types";
export const copy: Record<string, TutorialCopy> = {
  "extract-youtube-subtitles-iphone": {
    "title": "如何在 iPhone 和 iPad 上提取 YouTube 字幕？",
    "description": "使用 ClipDock影随存提取 YouTube 已有字幕，选择语言和 SRT、VTT 等格式，保存到文件或分享，附五张真实操作截图。",
    "intro": "把 YouTube 视频中已有的字幕单独保存下来，方便阅读、整理和后续使用。在 ClipDock影随存中粘贴视频链接，提取字幕后选择语言与格式，再导出即可。以下五张截图使用英文界面，可对照按钮旁的中文说明操作。",
    "tips": [
      {
        "title": "没有提取到字幕怎么办？",
        "text": "先确认链接对应的视频能正常打开，并在 YouTube 中检查是否有字幕。没有现成字幕时，这个功能无法生成字幕；若视频已有字幕，可检查链接和网络后重试。"
      },
      {
        "title": "字幕内容有错误怎么办？",
        "text": "自动生成字幕来自 YouTube，可能出现识别错误。导出后对照原视频检查人名、术语和时间轴，再用于后续整理。"
      }
    ],
    "faq": [
      {
        "question": "能提取自动生成的字幕吗？",
        "answer": "可以提取视频提供的自动生成字幕。截图中的 English (auto-generated) 就是其中一条；是否可用以实际提取结果为准。"
      },
      {
        "question": "可以一次导出多种语言吗？",
        "answer": "可以勾选多条字幕轨道，或点击 Select all 全选，再通过 Export captions 导出。可选语言以该视频已有字幕为准。"
      },
      {
        "question": "能自动翻译或给无字幕视频生成字幕吗？",
        "answer": "本教程介绍的是提取 YouTube 已有字幕，界面没有展示翻译或音频转写功能。"
      },
      {
        "question": "字幕会保存到相册吗？",
        "answer": "字幕是文件。请使用 Save to Files 保存到“文件”App，或通过 Share 分享到其他 App。"
      }
    ],
    "steps": [
      {
        "title": "粘贴 YouTube 视频链接",
        "text": "先在 YouTube 中复制目标视频的分享链接。打开 ClipDock影随存，进入底部 Extract（提取）页面，切换到顶部 Subtitles（字幕）分页，再点击 Paste（粘贴）或手动填入链接。这里使用具体视频链接。"
      },
      {
        "title": "开始提取，等待字幕列表",
        "text": "确认链接后点击 Extract（提取）。按钮显示 Extracting captions…（正在提取字幕）时，等待提取完成。此功能只提取 YouTube 上已经存在的字幕，不会为没有字幕的视频自动转写音频。"
      },
      {
        "title": "选择需要的字幕语言",
        "text": "完成后，页面显示视频缩略图、标题、时长和可用字幕轨道。点击每条字幕左侧的圆圈选择，可以单选、多选，或点击 Select all（全选）。截图中有 English (auto-generated)（英语自动生成字幕）和 English (United Kingdom)（英国英语）两条轨道；实际语言和数量取决于视频。"
      },
      {
        "title": "选择字幕文件格式",
        "text": "点击 Format: SRT（格式：SRT）打开 Caption format（字幕格式）菜单。截图列出了 SRT、VTT、TTML、JSON3、SRV1、SRV2 和 SRV3。根据后续使用的软件选择格式，并核对所选轨道下方列出的可用格式。",
        "sections": [
          {
            "title": "不知道选哪个格式？",
            "text": "可以先选择 SRT；需要在网页播放器中使用时，可按播放器要求选择 VTT。若接收字幕的软件有明确要求，就选择其支持的格式。"
          }
        ]
      },
      {
        "title": "导出到文件或分享",
        "text": "确认语言和格式后，点击底部 Export captions（导出字幕）。括号中的数字表示选中的字幕轨道数，截图中选中了两条。弹出的 Export to（导出到）菜单提供 Save to Files（保存到文件）和 Share（分享）两个入口。",
        "sections": [
          {
            "title": "保存到文件",
            "text": "选择 Save to Files 后，按系统提示选择保存位置并确认，再打开“文件”App 检查导出的字幕文件。截图展示的是导出菜单，尚未展示保存完成状态。"
          },
          {
            "title": "分享给其他 App",
            "text": "选择 Share，按系统分享面板的提示选择接收 App 或分享方式。导出的是字幕文件；只保存和使用你拥有权利或获得授权的内容。"
          }
        ]
      }
    ]
  }
};
