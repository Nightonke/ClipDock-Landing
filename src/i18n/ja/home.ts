export const capabilities = [
  "共有リンクからダウンロード",
  "URLからダウンロード",
  "コピーでダウンロード",
  "アプリの切り替えを減らす",
  "Web動画の検出とダウンロード",
  "プロフィールから一括ダウンロード",
  "チャンネルから一括ダウンロード",
  "ハッシュタグから一括ダウンロード",
  "再生リストから一括ダウンロード",
  "コレクションから一括ダウンロード",
  "バックグラウンドダウンロード",
  "動画管理",
  "写真に保存",
  "トリミング",
  "形式変換",
  "結合",
  "サイズ/キャンバス",
  "回転",
  "ミラーリング",
  "速度変更",
  "音声抽出",
  "音声と動画の結合",
  "逆再生",
  "透かし追加",
  "GIF変換",
  "Live Photo変換",
  "動画のスクリーンショット",
  "MD5変更",
  "YouTube字幕抽出"
];
export const featureSections = [
  {
    "number": "01",
    "video": "share-link",
    "kicker": "リンクから動画へ",
    "title": "共有リンクから\n動画を保存",
    "description": "対応する共有リンクやWebページのURLを貼り付けると、ダウンロード可能な動画、画像、音声を抽出します。配信元が高画質版や透かしなしのデータを提供している場合は選択できます。画質、形式、透かしの有無は元のリソースによって異なります。",
    "points": [
      "対応プラットフォームを見る",
      "配信元が提供する画質から選択",
      "動画・画像・音声に対応",
      "バックグラウンドでもダウンロードを継続"
    ],
    "platformDetails": "YouTube、Sora（OpenAI）、Instagram（ストーリーズを含む）、X（Twitter）、TikTok、Threads、Facebook、Vimeo、afreecatv、Tumblr、Triller、Likee、Twitch、Pinterest、Snapchat、Reddit、VK、Dailymotion、SoundCloud、Lemon8、Suno、AcFun、Bilibili、天猫、闲鱼、大众点评、UC 视频、趣头条、皮皮虾、皮皮搞笑、Weibo、秒拍、绿洲、小咖秀、美图秀秀、美拍、网易云音乐、CCTV、新华网、虎嗅、虎牙、斗鱼、糖豆、喜马拉雅、陌陌、映客、迅雷、WIDE 短视频、最右、开眼、酷燃、剪映、糗事百科、梨视频などに対応しています。ダウンロードできる内容は、リンクの解析結果によって異なります。",
    "placeholder": "リンク抽出画面のスクリーンショット",
    "tone": "blue"
  },
  {
    "number": "02",
    "video": "copy-background",
    "kicker": "貼り付けずに、コピーするだけ",
    "title": "リンクをコピーして\n自動ダウンロード",
    "description": "「クリップボードのリンクを自動的にダウンロードする」と「バックグラウンドで認識してダウンロードする」をオンにし、ピクチャ・イン・ピクチャを動作させておきます。YouTube、TikTok、Xなどで対応する共有リンクをコピーすると、バックグラウンドでダウンロードタスクが作成されます。ダウンロード通知を有効にして通知を許可すると、完了や失敗の通知を受け取れます。",
    "points": [
      "設定後は、貼り付けのためにアプリへ戻る必要なし",
      "小窓は画面の端にスワイプして収納可能"
    ],
    "placeholder": "ダウンロードタスク画面のスクリーンショット",
    "tone": "lime"
  },
  {
    "number": "03",
    "video": "web-long-press",
    "kicker": "再生して、保存できる動画を検出",
    "title": "Web動画を再生して\n長押しで選択",
    "description": "「Web動画」で対象ページを開き、動画を再生します。広告がある場合はスキップするか終了を待ち、動画を長押しして保存するリソースを選びます。画面下部の検出ボタンから一覧を開くこともできます。ダウンロードできるかどうかは、サイトやアクセス条件によって異なります。",
    "points": [
      "ページ内のダウンロード可能な動画を検出",
      "検出リストから必要なリソースを選択",
      "長押しで再生中の動画を指定"
    ],
    "placeholder": "内蔵ブラウザの動画ダウンロード画面",
    "tone": "coral"
  },
  {
    "number": "04",
    "video": "batch-playlist",
    "kicker": "一括ダウンロード",
    "title": "リストから選んで\nまとめて保存",
    "description": "対応するチャンネル、プロフィール、再生リスト、ハッシュタグのリンクを貼り付けます。リストを読み込み、必要な動画や画像を選んでダウンロードキューに追加します。リストはページごとに読み込まれ、無料版は最初の2ページまでです。取得できる範囲は返された結果によって決まり、すべての投稿が含まれるとは限りません。",
    "points": [
      "一括ダウンロードの対応範囲を見る"
    ],
    "platformDetails": "YouTube（チャンネル、Shorts、ハッシュタグ、再生リスト）、Instagram と TikTok（プロフィール、ハッシュタグ）、Douyin と Bilibili（プロフィール、コレクション）、X（Twitter）、Weibo、好看视频などのプロフィールに対応しています。対応するリンクの種類と読み込める範囲は、プラットフォームによって異なります。",
    "placeholder": "チャンネル・プロフィール・再生リストの一括ダウンロード画面",
    "tone": "blue"
  },
  {
    "number": "05",
    "kicker": "YouTube字幕抽出",
    "title": "字幕を選んで\nファイルに保存",
    "description": "YouTubeの動画リンクを貼り付けて、既存の字幕を抽出します。必要な言語と形式を選び、「ファイル」に保存するか、ほかのアプリで共有できます。読み返したり、整理したりするときに便利です。",
    "points": [
      "既存の自動生成字幕や複数言語のトラックに対応",
      "複数選択が可能。SRT・VTTなど7形式に対応",
      "「ファイル」に保存、または直接共有"
    ],
    "carousel": true,
    "tutorial": "extract-youtube-subtitles-iphone",
    "tone": "lime"
  }
];
export const tools = [
  {
    "mark": "CUT",
    "slug": "trim-video-iphone",
    "title": "動画のトリミング",
    "description": "必要な場面を切り出し、残したい部分だけを保存。"
  },
  {
    "mark": "CONV",
    "slug": "transcode-video-iphone",
    "title": "動画のトランスコーディング",
    "description": "使い道に合わせて動画の形式を変換。"
  },
  {
    "mark": "JOIN",
    "slug": "join-videos-iphone",
    "title": "動画の結合",
    "description": "複数のクリップを順番につないで1本の動画に。"
  },
  {
    "mark": "MIX",
    "slug": "interleave-videos-iphone",
    "title": "クロススプライシング",
    "description": "複数の動画を区切り、異なる素材を交互につなぐ。"
  },
  {
    "mark": "GRID",
    "slug": "segment-grid-video-iphone",
    "title": "セグメント化された宮殿のグリッド",
    "description": "1本の動画の異なる時間帯を、分割画面に並べる。"
  },
  {
    "mark": "SIZE",
    "slug": "resize-video-iphone",
    "title": "サイズ/キャンバス",
    "description": "縦横比を調整し、余白付きや画面を埋める表示を選択。"
  },
  {
    "mark": "ROTATE",
    "slug": "rotate-video-iphone",
    "title": "動画の回転",
    "description": "画面を回転して、見やすい向きに調整。"
  },
  {
    "mark": "MIRROR",
    "slug": "mirror-video-iphone",
    "title": "動画ミラーリング",
    "description": "画面を反転して、鏡に映したような映像に。"
  },
  {
    "mark": "SPEED",
    "slug": "change-video-speed-iphone",
    "title": "動画速度の変更",
    "description": "再生を速くしたり遅くしたりして、テンポを調整。"
  },
  {
    "mark": "AUDIO",
    "slug": "extract-audio-iphone",
    "title": "音声を抽出する",
    "description": "動画の音声を取り出して、音声ファイルとして保存。"
  },
  {
    "mark": "SOUND",
    "slug": "edit-video-audio-iphone",
    "title": "オーディオ処理",
    "description": "ミュートや音量調整で、動画の音を整える。"
  },
  {
    "mark": "MERGE",
    "slug": "merge-audio-video-iphone",
    "title": "オーディオと動画のマージ",
    "description": "音声と動画を1つのファイルにまとめる。"
  },
  {
    "mark": "REVERSE",
    "slug": "reverse-video-iphone",
    "title": "動画を逆再生",
    "description": "動画を末尾から逆向きに再生。"
  },
  {
    "mark": "MARK",
    "slug": "add-watermark-video-iphone",
    "title": "透かしを追加する",
    "description": "自分の動画に文字や画像の目印を追加。"
  },
  {
    "mark": "GIF",
    "slug": "video-to-gif-iphone",
    "title": "動画を GIF に変換",
    "description": "動画の一部を、共有しやすいGIFアニメーションに。"
  },
  {
    "mark": "LIVE",
    "slug": "video-to-live-photo-iphone",
    "title": "動画を Live Photo に変換",
    "description": "動画をLive Photoに変換。"
  },
  {
    "mark": "FRAMES",
    "slug": "capture-video-frames-iphone",
    "title": "動画のスクリーンショット",
    "description": "1枚の画像を切り出すほか、一括・スマート撮影・プレビュー画像にも対応。"
  },
  {
    "mark": "MD5",
    "slug": "change-video-md5-iphone",
    "title": "MD5を修正する",
    "description": "動画ファイルのMD5値を変更。"
  }
];
export const faqs = [
  {
    "question": "どのリンクに対応していますか？",
    "answer": "ClipDockはYouTube、Sora（OpenAI）、Instagram（ストーリーズを含む）、X（Twitter）、TikTok、Threads、Facebook、Vimeo、afreecatv、Tumblr、Triller、Likee、Twitch、Pinterest、Snapchat、Reddit、VK、Dailymotion、SoundCloud、Lemon8、Suno、AcFun、Bilibili、天猫、闲鱼、大众点评、UC 视频、趣头条、皮皮虾、皮皮搞笑、Weibo、秒拍、绿洲、小咖秀、美图秀秀、美拍、网易云音乐、CCTV、新华网、虎嗅、虎牙、斗鱼、糖豆、喜马拉雅、陌陌、映客、迅雷、WIDE 短视频、最右、开眼、酷燃、剪映、糗事百科、梨视频などに対応しています。ダウンロードできる内容は、リンクの解析結果によって異なります。"
  },
  {
    "question": "リンクを認識できないのはなぜですか？",
    "answer": "ページ構造の変更、ログイン状態、地域制限、ネットワーク、リソースの失効、DRMやアクセス制御などが原因になります。まずリンクを開けることを確認してから、もう一度お試しください。"
  },
  {
    "question": "ダウンロードした動画はどこにありますか？",
    "answer": "「リソース管理」の「完了」一覧でプレビュー、検索、並べ替え、共有ができます。「写真に保存」で手動保存するか、「ダウンロード設定」の「ダウンロード完了後に自動で写真に保存」をオンにしてください。写真へのアクセス許可と、対応するファイル形式が必要です。"
  },
  {
    "question": "バックグラウンドでダウンロードできますか？",
    "answer": "対応しています。ただし、iOSがシステムリソース、ネットワーク状態、省電力制御に応じて、バックグラウンドで動作できる時間を調整する場合があります。"
  },
  {
    "question": "ClipDockはデータを収集しますか？",
    "answer": "現在のApp Storeのプライバシー表示は「データの収集なし」です。外部のWebサイトやリソースにアクセスした場合、相手先は独自のプライバシーポリシーに従って通常の通信情報を処理することがあります。"
  },
  {
    "question": "オンラインの動画を何でも保存できますか？",
    "answer": "いいえ。権利を持つコンテンツ、許可を得たコンテンツ、または法律上利用が認められたコンテンツのみを保存してください。権利者、サイト、お住まいの地域の規則を守ってご利用ください。"
  }
];
export const ui = {
  "ogAlt": "ClipDock — iPhone・iPad向けWeb動画ダウンローダー",
  "eyebrow": "多彩なプラットフォームに対応 · iPhone + iPad",
  "heroLine1": "リンクひとつで",
  "heroLine2": "動画を手元に。",
  "heroDescription": "対応する共有リンクやWebページから、動画・画像・音声を保存。コピーによる自動ダウンロードやリストからの一括選択で、繰り返しの操作を減らせます。画質、形式、透かしの有無は配信元のリソースによって異なります。",
  "freeDownload": "無料ダウンロード",
  "qrLabel": "iPhoneでコードを読み取ってClipDockをダウンロード",
  "qrAlt": "ClipDockダウンロード用QRコード",
  "scan": "iPhoneで読み取る",
  "getApp": "アプリを入手",
  "productInfo": "製品情報",
  "ratings": "件の評価",
  "privacyProof": "アプリのデータ収集なし",
  "capabilities": "ClipDockの主な機能",
  "subtitleLink": "字幕抽出の使い方を見る",
  "demoSuffix": "操作デモ",
  "progress": "動画の再生位置",
  "placeholder": "画像準備中",
  "toolsKicker": "保存した、その先も",
  "toolsTitle": "動画ツールを、\n手元に。",
  "toolsDescription": "トリミング、変換、結合、共有まで。保存した素材に必要な操作を、ClipDockで続けられます。",
  "readTutorial": "使い方を見る",
  "trustKicker": "使える範囲を、わかりやすく",
  "trustTitle": "できることと、\n利用条件。",
  "trustDescription": "ClipDockは、保存や加工の権利を持つコンテンツのためのアプリです。リンクの利用可否は、配信元やリソース自体の条件にも左右されます。",
  "trustValue1": "収集なし",
  "trustLabel1": "アプリのデータ",
  "trustText1": "現在のApp Storeのプライバシー表示では、開発者がこのアプリからデータを収集することはありません。",
  "trustLabel2": "iPhone・iPad",
  "trustText2": "iOS 15以降のiPhone、およびiPadOS 15以降のiPadに対応しています。",
  "trustValue3": "適切な利用",
  "trustLabel3": "権利のあるコンテンツを保存",
  "trustText3": "DRM、有料コンテンツ、アクセス制御、プラットフォームの制限を回避しません。",
  "faqKicker": "よくある質問",
  "faqTitle": "使い始める前に。",
  "closingKicker": "次のリンクを、保存しませんか？",
  "closingTitle": "動画を、\nいつも手元に。",
  "closingDescription": "ClipDockはiPhoneとiPadで無料ダウンロードできます。アプリ内課金があります。",
  "storeDownload": "App Storeからダウンロード",
  "closingQr": "コードを読み取ってClipDockをダウンロード"
};
