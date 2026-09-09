export const categories = [
  {
    "id": "platform",
    "name": "サイト別に保存",
    "description": "共有リンクから、必要な動画をデバイスに保存。"
  },
  {
    "id": "clipboard",
    "name": "コピーでダウンロード",
    "description": "バックグラウンド認識を有効にすると、リンクのコピーでタスクを作成でき、アプリの切り替えを減らせます。"
  },
  {
    "id": "batch",
    "name": "一括ダウンロード",
    "description": "チャンネル、プロフィール、再生リストから動画をまとめて保存。"
  },
  {
    "id": "subtitles",
    "name": "字幕抽出",
    "description": "YouTubeの既存の字幕を抽出し、言語と形式を選んで保存・共有。"
  },
  {
    "id": "tools",
    "name": "動画の加工",
    "description": "トリミングや形式変換から、音声、キャンバス、組み合わせの効果まで、18種類のツール。"
  }
];
export const platformNotes: Record<string, string> = {
  "platform": "YouTube、Sora（OpenAI）、Instagram（ストーリーズを含む）、X（Twitter）、TikTok、Threads、Facebook、Vimeo、afreecatv、Tumblr、Triller、Likee、Twitch、Pinterest、Snapchat、Reddit、VK、Dailymotion、SoundCloud、Lemon8、Suno、AcFun、Bilibili、天猫、闲鱼、大众点评、UC 视频、趣头条、皮皮虾、皮皮搞笑、Weibo、秒拍、绿洲、小咖秀、美图秀秀、美拍、网易云音乐、CCTV、新华网、虎嗅、虎牙、斗鱼、糖豆、喜马拉雅、陌陌、映客、迅雷、WIDE 短视频、最右、开眼、酷燃、剪映、糗事百科、梨视频などに対応しています。ダウンロードできる内容は、リンクの解析結果によって異なります。",
  "batch": "YouTube（チャンネル、Shorts、ハッシュタグ、再生リスト）、Instagram と TikTok（プロフィール、ハッシュタグ）、Douyin と Bilibili（プロフィール、コレクション）、X（Twitter）、Weibo、好看视频などのプロフィールに対応しています。対応するリンクの種類と読み込める範囲は、プラットフォームによって異なります。"
};
