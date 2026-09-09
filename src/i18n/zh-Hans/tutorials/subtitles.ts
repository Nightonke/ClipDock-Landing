import type { TutorialCopy } from "../../types";
export const copy: Record<string, TutorialCopy> = {
  "extract-youtube-subtitles-iphone": {
    "title": "如何提取 YouTube 已有字幕？",
    "description": "在 iPhone 和 iPad 上用影随存提取 YouTube 已有字幕，选择语言和格式，再保存到“文件”或分享。",
    "intro": "把 YouTube 视频已有的字幕保存下来，方便阅读或编辑。粘贴链接，选择字幕轨道和格式，再保存或分享文件。",
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
        "answer": "可以，前提是视频提供这类字幕。可在提取结果中查找标有 auto-generated（自动生成）的轨道。"
      },
      {
        "question": "可以一次导出多种语言吗？",
        "answer": "可以勾选多条字幕轨道，或点击“全选”，再通过“导出字幕”导出。可选语言以该视频已有字幕为准。"
      },
      {
        "question": "能自动翻译或给无字幕视频生成字幕吗？",
        "answer": "不能。此功能仅提取 YouTube 视频已有的字幕，不提供自动翻译，也不会为无字幕视频生成字幕。"
      },
      {
        "question": "字幕会保存到相册吗？",
        "answer": "字幕以文件形式保存，不会进入相册。请选择保存到“文件”，或通过“分享”发送到其他 App。"
      }
    ],
    "steps": [
      {
        "title": "粘贴 YouTube 视频链接",
        "text": "先在 YouTube 中复制目标视频的分享链接。打开影随存，进入底部“资源提取”（Extract）页面，切换到顶部“字幕”（Subtitles）分页，再点击“粘贴”（Paste）或手动填入链接。这里使用具体视频链接。"
      },
      {
        "title": "开始提取，等待字幕列表",
        "text": "确认链接后点击“提取”（Extract）。按钮显示“正在提取字幕…”（Extracting captions…）时，等待提取完成。此功能只提取 YouTube 上已经存在的字幕，不会为没有字幕的视频自动转写音频。"
      },
      {
        "title": "选择需要的字幕语言",
        "text": "点击需要的字幕轨道左侧圆圈，或用“全选”（Select all）。核对语言及是否为自动生成字幕；可用语言和轨道取决于视频。"
      },
      {
        "title": "选择字幕文件格式",
        "text": "点击“格式：SRT”（Format: SRT）打开“字幕格式”（Caption format）。根据接收软件选择 SRT、VTT、TTML、JSON3、SRV1、SRV2 或 SRV3，并检查各条所选轨道下方的可用格式。",
        "sections": [
          {
            "title": "不知道选哪个格式？",
            "text": "可以先选择 SRT；需要在网页播放器中使用时，可按播放器要求选择 VTT。若接收字幕的软件有明确要求，就选择其支持的格式。"
          }
        ]
      },
      {
        "title": "导出到文件或分享",
        "text": "选好轨道和格式后，点击“导出字幕”（Export captions）。括号内是已选轨道数。在“导出到”（Export to）菜单选择保存到“文件”（Save to Files）或“分享”（Share）。",
        "sections": [
          {
            "title": "保存到文件",
            "text": "选择保存到“文件”，指定保存位置并确认，再打开“文件”App 检查字幕。"
          },
          {
            "title": "分享给其他 App",
            "text": "选择“分享”，按系统分享面板的提示选择接收 App 或分享方式。导出的是字幕文件；只保存和使用你拥有权利或获得授权的内容。"
          }
        ]
      }
    ],
    "exampleNote": "配图采用英文 App 界面，展示两条可用英语字幕轨道，操作展示到导出菜单，未展示文件保存完成。此流程提取已有字幕，不进行翻译或音频转写。"
  }
};
