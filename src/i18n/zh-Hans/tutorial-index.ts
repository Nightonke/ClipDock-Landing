export const categories = [
  {
    "id": "platform",
    "name": "按平台下载",
    "description": "从分享链接开始，把需要的视频保存到设备。"
  },
  {
    "id": "clipboard",
    "name": "复制即下载",
    "description": "开启后台识别后，复制链接即可创建下载任务，减少切换 App。"
  },
  {
    "id": "batch",
    "name": "批量下载",
    "description": "按频道、主页或播放列表集中保存视频。"
  },
  {
    "id": "subtitles",
    "name": "字幕提取",
    "description": "提取 YouTube 已有字幕，选择语言与格式后保存或分享。"
  },
  {
    "id": "tools",
    "name": "视频处理",
    "description": "18 个视频处理功能：从裁剪、转码到声音、画布与组合效果。"
  }
];
export const platformNotes: Record<string, string> = {
  "platform": "YouTube、Sora（OpenAI）、Instagram（含快拍）、X（Twitter）、TikTok、Threads、Facebook、Vimeo、afreecatv、Tumblr、Triller、Likee、Twitch、Pinterest、Snapchat、Reddit、VK、Dailymotion、SoundCloud、Lemon8、Suno 音乐、AcFun、哔哩哔哩（B 站）、天猫、闲鱼、大众点评、UC 视频、趣头条、皮皮虾、皮皮搞笑、微博、秒拍、绿洲、小咖秀、美图秀秀、美拍、网易云音乐、央视网（CCTV）、新华网、虎嗅、虎牙、斗鱼、糖豆、喜马拉雅、陌陌、映客、迅雷、WIDE 短视频、最右、开眼、酷燃、剪映、糗事百科、梨视频等平台。具体可下载的内容以链接解析结果为准。",
  "batch": "支持 YouTube（频道、Shorts、话题页、播放列表）、Instagram（作者主页、话题页）、TikTok（作者主页、话题页）、抖音（主页、合集）、哔哩哔哩（主页、合集），以及 X（Twitter）、微博、好看视频等平台的主页。不同平台支持的链接类型和可加载范围有所不同。"
};
