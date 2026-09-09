export const categories = [
 { id: "platform", name: "플랫폼별 다운로드", description: "공유 링크로 필요한 동영상을 기기에 저장하세요." },
 { id: "clipboard", name: "복사 후 자동 다운로드", description: "백그라운드 인식을 켜면 링크 복사로 다운로드 작업을 만들어 앱 전환을 줄일 수 있습니다." },
 { id: "batch", name: "일괄 다운로드", description: "채널, 프로필, 재생목록에서 동영상을 모아 저장하세요." },
 { id: "subtitles", name: "자막 추출", description: "YouTube에 있는 자막을 추출하고 언어와 형식을 고른 뒤 저장하거나 공유하세요." },
 { id: "tools", name: "동영상 처리", description: "자르기와 트랜스코딩부터 소리, 캔버스, 조합 효과까지 18가지 도구를 사용하세요." },
];
export const platformNotes: Record<string, string> = {
 platform: "YouTube, Sora(OpenAI), Instagram(스토리 포함), X(Twitter), TikTok, Threads, Facebook, Vimeo, afreecatv, Tumblr, Triller, Likee, Twitch, Pinterest, Snapchat, Reddit, VK, Dailymotion, SoundCloud, Lemon8, Suno, AcFun, Bilibili, Tmall, Xianyu, Dazhong Dianping, UC Video, Qutoutiao, Pipixia, Pipigaoxiao, Weibo, Miaopai, Oasis, Xiaokaxiu, Meitu, Meipai, NetEase Cloud Music, CCTV, Xinhua, Huxiu, Huya, Douyu, Tangdou, Ximalaya, Momo, Inke, Xunlei, WIDE, Zuiyou, Eyepetizer, Kuran, Jianying, Qiushibaike, Pear Video 등을 지원합니다. 실제 다운로드 가능 여부는 링크 추출 결과에 따라 달라집니다.",
 batch: "YouTube(채널, Shorts, 해시태그, 재생목록), Instagram(크리에이터 프로필, 해시태그), TikTok(크리에이터 프로필, 해시태그), Douyin(프로필, 컬렉션), Bilibili(프로필, 컬렉션), X(Twitter), Weibo, Haokan Video 등의 프로필을 지원합니다. 링크 유형과 불러올 수 있는 범위는 플랫폼마다 다릅니다.",
};
