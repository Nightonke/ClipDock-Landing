export const categories = [
  { id: "platform", name: "Par plateforme", description: "Enregistrez les vidéos dont vous avez besoin à partir de leur lien de partage." },
  { id: "clipboard", name: "Copier pour télécharger", description: "Activez la détection en arrière-plan pour lancer des téléchargements en copiant des liens, sans changer d’application." },
  { id: "batch", name: "Téléchargement par lot", description: "Sélectionnez plusieurs vidéos dans une chaîne, un profil ou une playlist." },
  { id: "subtitles", name: "Sous-titres", description: "Extrayez les sous-titres existants de YouTube, choisissez une langue et un format, puis enregistrez-les ou partagez-les." },
  { id: "tools", name: "Outils vidéo", description: "18 outils pour couper, convertir et assembler vos vidéos, modifier le son ou adapter le cadre." }
];
export const platformNotes: Record<string, string> = {
  platform: "YouTube, Sora (OpenAI), Instagram (y compris les Stories), X (Twitter), TikTok, Threads, Facebook, Vimeo, afreecatv, Tumblr, Triller, Likee, Twitch, Pinterest, Snapchat, Reddit, VK, Dailymotion, SoundCloud, Lemon8, Suno, AcFun, Bilibili, Tmall, Xianyu, Dianping, UC Video, Qutoutiao, Pipixia, Pipigaoxiao, Weibo, Miaopai, Oasis, Xiaokaxiu, Meitu, Meipai, NetEase Cloud Music, CCTV, Xinhuanet, Huxiu, Huya, Douyu, Tangdou, Ximalaya, Momo, Inke, Xunlei, WIDE, Zuiyou, Eyepetizer, Kuran, Jianying, Qiushibaike, Pear Video et d’autres plateformes. Les contenus téléchargeables dépendent du résultat de l’extraction du lien.",
  batch: "YouTube (chaînes, Shorts, hashtags et playlists), Instagram (profils et hashtags), TikTok (profils et hashtags), Douyin (profils et collections), Bilibili (profils et collections), ainsi que les profils X (Twitter), Weibo et Haokan Video. Les types de liens et l’étendue des listes accessibles varient selon la plateforme."
};
