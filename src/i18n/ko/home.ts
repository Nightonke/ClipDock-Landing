export const capabilities = [
  "공유 링크로 다운로드",
  "웹 주소로 다운로드",
  "복사 후 자동 다운로드",
  "앱을 오갈 필요 없이",
  "웹 동영상 감지 및 다운로드",
  "프로필 일괄 다운로드",
  "채널 일괄 다운로드",
  "해시태그 일괄 다운로드",
  "재생목록 일괄 다운로드",
  "컬렉션 일괄 다운로드",
  "백그라운드 다운로드",
  "동영상 관리",
  "사진에 저장",
  "자르기",
  "트랜스코딩",
  "이어 붙이기",
  "크기/캔버스",
  "회전",
  "미러링",
  "속도 변경",
  "오디오 추출",
  "오디오 및 동영상 병합",
  "역재생",
  "워터마크 추가",
  "동영상을 GIF로 변환",
  "동영상을 Live Photo로 변환",
  "동영상 스크린샷",
  "MD5 수정",
  "YouTube 자막 추출"
];
export const featureSections = [
  {
    "number": "01",
    "video": "share-link",
    "kicker": "링크에서 동영상으로",
    "title": "공유 링크로\n동영상 다운로드",
    "description": "지원되는 플랫폼의 공유 링크나 웹 주소를 붙여넣으면 ClipDock이 다운로드할 수 있는 동영상, 이미지, 오디오를 추출합니다. 원본에서 고화질이나 워터마크 없는 버전을 제공하면 선택할 수 있습니다. 화질, 형식, 워터마크 유무는 실제 리소스에 따라 달라집니다.",
    "points": [
      "지원 플랫폼 보기",
      "원본에서 제공하는 화질 선택",
      "동영상·이미지·오디오 지원",
      "백그라운드에서도 다운로드 계속"
    ],
    "platformDetails": "YouTube, Sora(OpenAI), Instagram(스토리 포함), X(Twitter), TikTok, Threads, Facebook, Vimeo, afreecatv, Tumblr, Triller, Likee, Twitch, Pinterest, Snapchat, Reddit, VK, Dailymotion, SoundCloud, Lemon8, Suno, AcFun, Bilibili, Tmall, Xianyu, Dazhong Dianping, UC Video, Qutoutiao, Pipixia, Pipigaoxiao, Weibo, Miaopai, Oasis, Xiaokaxiu, Meitu, Meipai, NetEase Cloud Music, CCTV, Xinhua, Huxiu, Huya, Douyu, Tangdou, Ximalaya, Momo, Inke, Xunlei, WIDE, Zuiyou, Eyepetizer, Kuran, Jianying, Qiushibaike, Pear Video 등을 지원합니다. 실제 다운로드 가능 여부는 링크 추출 결과에 따라 달라집니다",
    "placeholder": "링크 인식 화면",
    "tone": "blue"
  },
  {
    "number": "02",
    "video": "copy-background",
    "kicker": "붙여넣기 없이, 복사만으로",
    "title": "링크만 복사하면\n백그라운드 다운로드",
    "description": "‘클립보드 링크 자동 다운로드’와 ‘백그라운드에서 인식 및 다운로드’를 켜고 화면 속 화면을 유지하세요. YouTube, TikTok, X 등에서 지원되는 공유 링크를 복사하면 ClipDock이 백그라운드에서 다운로드 작업을 만듭니다. 다운로드 알림을 켜고 시스템 권한을 허용하면 완료 또는 실패 알림을 받을 수 있습니다.",
    "points": [
      "설정 후 앱으로 돌아가 붙여넣을 필요 없이",
      "작은 창은 화면 가장자리로 밀어 숨기기"
    ],
    "placeholder": "다운로드 작업 화면",
    "tone": "lime"
  },
  {
    "number": "03",
    "video": "web-long-press",
    "kicker": "재생하면 다운로드할 리소스 감지",
    "title": "웹 동영상을 재생하고\n길게 눌러 다운로드",
    "description": "‘웹 동영상’에서 원하는 페이지를 열고 동영상을 재생하세요. 광고가 있다면 건너뛰거나 끝날 때까지 기다린 뒤 동영상을 길게 눌러 다운로드할 리소스를 선택하세요. 하단 감지 버튼으로 찾은 동영상을 확인할 수도 있습니다. 다운로드 가능 여부는 웹사이트와 접근 조건에 따라 달라집니다.",
    "points": [
      "페이지의 다운로드 가능한 동영상 감지",
      "감지 목록에서 필요한 리소스 선택",
      "재생 중인 동영상을 길게 눌러 찾기"
    ],
    "placeholder": "내장 브라우저 동영상 다운로드 화면",
    "tone": "coral"
  },
  {
    "number": "04",
    "video": "batch-playlist",
    "kicker": "일괄 다운로드",
    "title": "목록에서 골라\n한 번에 다운로드",
    "description": "지원되는 채널, 프로필, 재생목록, 해시태그 페이지 링크를 붙여넣으세요. 목록을 불러온 뒤 필요한 동영상이나 이미지를 골라 대기열에 추가합니다. 목록은 페이지별로 불러오며 무료 버전은 처음 2페이지까지 가능합니다. 실제 반환된 범위만 다운로드할 수 있고 모든 게시물이 포함되는 것은 아닙니다.",
    "points": [
      "일괄 다운로드 지원 범위 보기"
    ],
    "platformDetails": "YouTube(채널, Shorts, 해시태그, 재생목록), Instagram(크리에이터 프로필, 해시태그), TikTok(크리에이터 프로필, 해시태그), Douyin(프로필, 컬렉션), Bilibili(프로필, 컬렉션), X(Twitter), Weibo, Haokan Video 등의 프로필을 지원합니다. 링크 유형과 불러올 수 있는 범위는 플랫폼마다 다릅니다.",
    "placeholder": "채널·프로필·재생목록 일괄 다운로드 화면",
    "tone": "blue"
  },
  {
    "number": "05",
    "kicker": "YouTube 자막 추출",
    "title": "동영상 자막을\n파일로 따로 저장",
    "description": "YouTube 동영상 링크를 붙여넣어 이미 있는 자막을 추출하세요. 언어와 파일 형식을 고른 뒤 파일에 저장하거나 다른 앱으로 공유해 읽고 정리할 수 있습니다.",
    "points": [
      "기존 자동 생성 자막과 여러 언어 트랙 지원",
      "자막 다중 선택 및 SRT·VTT 등 7가지 형식",
      "파일 앱에 저장하거나 바로 공유"
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
    "title": "동영상 자르기",
    "description": "필요한 구간만 잘라 원하는 장면을 남기세요."
  },
  {
    "mark": "CONV",
    "slug": "transcode-video-iphone",
    "title": "동영상 트랜스코딩",
    "description": "사용할 곳에 맞게 동영상 형식을 바꾸세요."
  },
  {
    "mark": "JOIN",
    "slug": "join-videos-iphone",
    "title": "동영상 접합",
    "description": "여러 구간을 순서대로 이어 하나의 동영상으로 만드세요."
  },
  {
    "mark": "MIX",
    "slug": "interleave-videos-iphone",
    "title": "교차 접합",
    "description": "여러 동영상을 나누고 서로 다른 구간을 번갈아 붙이세요."
  },
  {
    "mark": "GRID",
    "slug": "segment-grid-video-iphone",
    "title": "분할된 그리드",
    "description": "동영상 하나의 서로 다른 시간 구간을 그리드에 배치하세요."
  },
  {
    "mark": "SIZE",
    "slug": "resize-video-iphone",
    "title": "크기/캔버스",
    "description": "캔버스 비율을 바꾸고 여백 맞춤, 채우기 자르기 등의 배치를 고르세요."
  },
  {
    "mark": "ROTATE",
    "slug": "rotate-video-iphone",
    "title": "동영상 회전",
    "description": "화면을 회전해 올바른 방향으로 바꾸세요."
  },
  {
    "mark": "MIRROR",
    "slug": "mirror-video-iphone",
    "title": "동영상 미러링",
    "description": "화면을 뒤집어 거울에 비친 듯한 효과를 만드세요."
  },
  {
    "mark": "SPEED",
    "slug": "change-video-speed-iphone",
    "title": "동영상 속도 변경",
    "description": "빠르게 또는 느리게 재생해 리듬을 바꾸세요."
  },
  {
    "mark": "AUDIO",
    "slug": "extract-audio-iphone",
    "title": "오디오 추출",
    "description": "동영상 속 소리를 별도 오디오 파일로 저장하세요."
  },
  {
    "mark": "SOUND",
    "slug": "edit-video-audio-iphone",
    "title": "오디오 처리",
    "description": "동영상을 음소거하거나 볼륨을 조정하세요."
  },
  {
    "mark": "MERGE",
    "slug": "merge-audio-video-iphone",
    "title": "오디오 및 동영상 병합",
    "description": "오디오와 동영상을 하나의 파일로 합치세요."
  },
  {
    "mark": "REVERSE",
    "slug": "reverse-video-iphone",
    "title": "동영상 역재생",
    "description": "동영상을 끝에서 처음으로 재생하세요."
  },
  {
    "mark": "MARK",
    "slug": "add-watermark-video-iphone",
    "title": "워터마크 추가",
    "description": "본인의 동영상에 텍스트나 이미지 표시를 넣으세요."
  },
  {
    "mark": "GIF",
    "slug": "video-to-gif-iphone",
    "title": "동영상을 GIF로 변환",
    "description": "동영상 구간을 공유하기 좋은 움직이는 이미지로 만드세요."
  },
  {
    "mark": "LIVE",
    "slug": "video-to-live-photo-iphone",
    "title": "동영상을 Live Photo로 변환",
    "description": "동영상을 Live Photo로 변환하세요."
  },
  {
    "mark": "FRAMES",
    "slug": "capture-video-frames-iphone",
    "title": "동영상 스크린샷",
    "description": "한 프레임을 추출하거나 일괄·스마트 캡처·미리보기 시트 모드를 사용하세요."
  },
  {
    "mark": "MD5",
    "slug": "change-video-md5-iphone",
    "title": "MD5 수정",
    "description": "동영상 파일의 MD5 값을 수정하세요."
  }
];
export const faqs = [
  {
    "question": "ClipDock은 어떤 링크를 지원하나요?",
    "answer": "ClipDock은 YouTube, Sora(OpenAI), Instagram(스토리 포함), X(Twitter), TikTok, Threads, Facebook, Vimeo, afreecatv, Tumblr, Triller, Likee, Twitch, Pinterest, Snapchat, Reddit, VK, Dailymotion, SoundCloud, Lemon8, Suno, AcFun, Bilibili, Tmall, Xianyu, Dazhong Dianping, UC Video, Qutoutiao, Pipixia, Pipigaoxiao, Weibo, Miaopai, Oasis, Xiaokaxiu, Meitu, Meipai, NetEase Cloud Music, CCTV, Xinhua, Huxiu, Huya, Douyu, Tangdou, Ximalaya, Momo, Inke, Xunlei, WIDE, Zuiyou, Eyepetizer, Kuran, Jianying, Qiushibaike, Pear Video 등을 지원합니다. 실제 다운로드 가능 여부는 링크 추출 결과에 따라 달라집니다."
  },
  {
    "question": "일부 링크가 인식되지 않는 이유는 무엇인가요?",
    "answer": "페이지 구조 변경, 로그인 상태, 지역 제한, 네트워크 환경, 만료된 리소스, DRM 및 접근 제어로 인식이 실패할 수 있습니다. 링크가 정상적으로 열리는지 확인한 뒤 다시 시도하세요."
  },
  {
    "question": "다운로드한 동영상은 어디에 저장되나요?",
    "answer": "다운로드 후 ‘리소스 관리’의 ‘완료됨’ 목록에서 미리보기, 검색, 정렬, 공유할 수 있습니다. ‘사진에 저장’을 직접 누르거나 ‘다운로드 설정’에서 ‘다운로드 완료 후 사진에 자동 저장’을 켜세요. 저장에는 사진 접근 권한과 지원되는 파일 형식이 필요합니다."
  },
  {
    "question": "백그라운드에서 다운로드할 수 있나요?",
    "answer": "ClipDock은 백그라운드 다운로드를 지원합니다. 다만 iOS는 시스템 리소스, 네트워크 상태, 전원 절약 정책에 따라 백그라운드 실행 시간을 조정할 수 있습니다."
  },
  {
    "question": "ClipDock은 제 데이터를 수집하나요?",
    "answer": "현재 App Store 개인정보 보호 표시는 ‘데이터 수집 안 함’입니다. 타사 웹사이트나 리소스에 접근하면 해당 업체가 자체 개인정보 처리방침에 따라 일반적인 네트워크 요청 정보를 처리할 수 있습니다."
  },
  {
    "question": "온라인 동영상을 모두 다운로드해도 되나요?",
    "answer": "아니요. 권리를 소유하거나 허가받았거나 법률상 사용할 수 있는 콘텐츠만 저장하세요. 콘텐츠 소유자, 웹사이트, 거주 지역의 관련 규칙을 준수해야 합니다."
  }
];
export const ui = {
  "ogAlt": "ClipDock — iPhone과 iPad용 웹 동영상 다운로더",
  "eyebrow": "다양한 플랫폼 지원 · iPhone + iPad",
  "heroLine1": "링크 하나로",
  "heroLine2": "동영상을 내 손에",
  "heroDescription": "ClipDock으로 지원되는 공유 링크와 웹페이지의 동영상, 이미지, 오디오를 저장하세요. 복사 후 자동 다운로드를 켜거나 목록에서 여러 게시물을 골라 반복 작업을 줄일 수 있습니다. 화질, 형식, 워터마크 유무는 원본 리소스에 따라 달라집니다.",
  "freeDownload": "무료 다운로드",
  "qrLabel": "iPhone으로 QR 코드를 스캔해 ClipDock 다운로드",
  "qrAlt": "ClipDock 다운로드 QR 코드",
  "scan": "iPhone으로 스캔",
  "getApp": "앱 다운로드",
  "productInfo": "제품 정보",
  "ratings": "개의 평가",
  "privacyProof": "앱 데이터 수집 안 함",
  "capabilities": "ClipDock 주요 기능",
  "subtitleLink": "자막 추출 방법 보기",
  "demoSuffix": " 사용 예시",
  "progress": "동영상 재생 진행률",
  "placeholder": "이미지 준비 중",
  "toolsKicker": "다운로드 다음 단계",
  "toolsTitle": "손안의 동영상 도구함",
  "toolsDescription": "저장은 시작일 뿐입니다. 자르기, 변환, 이어 붙이기, 공유에 필요한 기능도 ClipDock에서 사용하세요.",
  "readTutorial": "사용 방법 보기",
  "trustKicker": "기능과 한계를 알고 사용하세요",
  "trustTitle": "가능한 기능과\n알아둘 제한",
  "trustDescription": "ClipDock은 저장하고 처리할 권한이 있는 콘텐츠를 위한 도구입니다. 링크 사용 가능 여부는 원본 플랫폼과 리소스 자체의 조건에 따라 달라집니다.",
  "trustValue1": "수집 안 함",
  "trustLabel1": "앱 데이터",
  "trustText1": "현재 App Store 개인정보 보호 표시에 따르면 개발자는 이 앱을 통해 데이터를 수집하지 않습니다.",
  "trustLabel2": "iPhone과 iPad",
  "trustText2": "iOS 15 이상 iPhone과 iPadOS 15 이상 iPad를 지원합니다.",
  "trustValue3": "올바른 사용",
  "trustLabel3": "사용 권한이 있는 콘텐츠 저장",
  "trustText3": "DRM, 유료 콘텐츠, 접근 제어, 플랫폼 제한을 우회하지 않습니다.",
  "faqKicker": "자주 묻는 질문",
  "faqTitle": "다운로드 전에\n궁금한 점을 확인하세요",
  "closingKicker": "다음 링크도 저장해 볼까요?",
  "closingTitle": "동영상을 언제나 가까이",
  "closingDescription": "ClipDock은 iPhone과 iPad에서 무료로 다운로드할 수 있으며 앱 내 구입을 포함합니다.",
  "storeDownload": "App Store에서 다운로드",
  "closingQr": "스캔하여 ClipDock 다운로드"
};
