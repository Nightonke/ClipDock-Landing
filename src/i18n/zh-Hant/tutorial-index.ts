export const categories = [
  {
    "id": "platform",
    "name": "按平台下載",
    "description": "從分享連結開始，把需要的影片儲存到裝置。"
  },
  {
    "id": "clipboard",
    "name": "複製即下載",
    "description": "開啟背景辨識後，複製連結即可建立下載任務，減少切換 App。"
  },
  {
    "id": "batch",
    "name": "批次下載",
    "description": "按頻道、個人頁面或播放清單集中儲存影片。"
  },
  {
    "id": "subtitles",
    "name": "字幕提取",
    "description": "提取 YouTube 已有字幕，選擇語言與格式後儲存或分享。"
  },
  {
    "id": "tools",
    "name": "影片處理",
    "description": "18 個影片處理功能：從裁切、轉碼到聲音、畫布與組合效果。"
  }
];
export const platformNotes: Record<string, string> = {
  "platform": "YouTube、Sora（OpenAI）、Instagram（含限時動態）、X（Twitter）、TikTok、Threads、Facebook、Vimeo、afreecatv、Tumblr、Triller、Likee、Twitch、Pinterest、Snapchat、Reddit、VK、Dailymotion、SoundCloud、Lemon8、Suno 音樂、AcFun、嗶哩嗶哩（B 站）、天貓、閒魚、大眾點評、UC 視頻、趣頭條、皮皮蝦、皮皮搞笑、微博、秒拍、綠洲、小咖秀、美圖秀秀、美拍、網易雲音樂、央視網（CCTV）、新華網、虎嗅、虎牙、鬥魚、糖豆、喜馬拉雅、陌陌、映客、迅雷、WIDE 短視頻、最右、開眼、酷燃、剪映、糗事百科、梨視頻等平台。實際可下載的內容以連結解析結果為準。",
  "batch": "支援 YouTube（頻道、Shorts、話題頁、播放清單）、Instagram（作者個人頁面、話題頁）、TikTok（作者個人頁面、話題頁）、抖音（個人頁面、合集）、嗶哩嗶哩（個人頁面、合集），以及 X（Twitter）、微博、好看視頻等平台的個人頁面。不同平台支援的連結類型和可載入範圍有所不同。"
};
