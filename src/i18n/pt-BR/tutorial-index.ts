export const categories = [
	{ id: "platform", name: "Downloads por plataforma", description: "Salve os vídeos que você precisa no dispositivo a partir de links compartilhados." },
	{ id: "clipboard", name: "Copie e baixe", description: "Ative a detecção em segundo plano para criar downloads ao copiar links e alternar menos entre apps." },
	{ id: "batch", name: "Downloads em lote", description: "Salve vídeos de canais, perfis ou playlists em lote." },
	{ id: "subtitles", name: "Extração de legendas", description: "Extraia legendas existentes do YouTube, escolha os idiomas e o formato e salve ou compartilhe." },
	{ id: "tools", name: "Edição de vídeo", description: "18 ferramentas para cortar, transcodificar, ajustar o som ou a tela e combinar vídeos." },
];
export const platformNotes: Record<string, string> = {
	platform: "YouTube, Sora (OpenAI), Instagram (incluindo Stories), X (Twitter), TikTok, Threads, Facebook, Vimeo, afreecatv, Tumblr, Triller, Likee, Twitch, Pinterest, Snapchat, Reddit, VK, Dailymotion, SoundCloud, Lemon8, Suno, AcFun, Bilibili, Tmall, Xianyu, Dianping, UC Video, Qutoutiao, Pipixia, Pipigaoxiao, Weibo, Miaopai, Oasis, Xiaokaxiu, Meitu, Meipai, NetEase Cloud Music, CCTV, Xinhuanet, Huxiu, Huya, Douyu, Tangdou, Ximalaya, Momo, Inke, Xunlei, WIDE, Zuiyou, Eyepetizer, Kuran, Jianying, Qiushibaike e Pear Video, entre outras plataformas. O conteúdo disponível para download depende do resultado da extração do link.",
	batch: "Compatível com YouTube (canais, Shorts, hashtags e playlists), Instagram e TikTok (perfis e hashtags), Douyin e Bilibili (perfis e coleções), além de perfis do X (Twitter), Weibo e Haokan Video, entre outros. Os tipos de link e o alcance das listas variam por plataforma.",
};
