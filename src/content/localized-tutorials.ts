import { tutorials, categories } from './tutorials';
import { englishTutorials } from './en-US/tutorials';
import { getLanguageLinks, type Locale } from '../i18n/locales';

export const getTutorials = (locale: Locale) => locale === 'en-US' ? englishTutorials : locale === 'zh-Hans' ? tutorials : [];
export const hasTutorial = (locale: Locale, slug: string) => getTutorials(locale).some(article => article.slug === slug);
export const tutorialLanguageLinks = (locale: Locale, slug?: string) => getLanguageLinks(locale, slug ? `articles/${slug}` : 'articles').filter(link => slug ? hasTutorial(link.locale, slug) : getTutorials(link.locale).length > 0);

const englishCategories = [
 { id: 'platform', name: 'Video downloads', description: 'Copy a supported video link, download the media, and save it to Photos.' },
 { id: 'clipboard', name: 'Copy to download', description: 'Set up background detection and keep collecting links while you browse.' },
 { id: 'batch', name: 'Batch downloads', description: 'Load profiles and playlists, choose resources, and manage the download queue.' },
 { id: 'subtitles', name: 'YouTube captions', description: 'Extract existing captions, choose a language and format, then save or share the files.' },
 { id: 'tools', name: 'Video tools', description: 'Trim, convert, join, and edit videos with settings and tested examples.' },
];
export const getCategories = (locale: Locale) => locale === 'en-US' ? englishCategories : categories;

const chinesePlatformNotes: Record<string, string> = {
  "platform": "YouTube、Sora(OpenAI)、Instagram(包含快拍)、Twitter、TK、Threads、Facebook、Vimeo、afreecatv、Tumblr、Triller、Likee、Twitch、Pinterest、Snapchat、Reddit、VK、Dailymotion、SoundCloud、Lemon8、Suno音乐、AcFun、B、天猫、闲鱼、大众点评、UC视频、趣头条、皮皮虾、皮皮搞笑、微博、秒拍、绿洲、小咖秀、美图秀秀、美拍、云音乐、央视网(CCTV)、新华网、虎嗅、虎牙、斗鱼、糖豆、喜马拉雅、陌陌、映客、迅雷、WIDE短视频 、最右、开眼、酷燃、剪映、糗事百科、梨视频、**等上千个平台",
  "batch": "支持YouTube(频道页、Shorts、Hashtag、播放列表)、Instagram(作者主页、Hashtag列表)、Twitter(X)、TK(作者主页、Hashtag列表)、D(主页、合集)、B(主页、合集)、微博、好看等主页批量提取"
};
const englishPlatformNotes: Record<string, string> = {
 platform: 'Supported sources include YouTube, Instagram, TikTok, X, Facebook, Vimeo, Reddit, Pinterest, Bilibili, Xiaohongshu, Weibo, and other platforms. Availability depends on the individual resource, region, and access conditions. The screenshots in each guide demonstrate only the workflow described there.',
 batch: 'Batch sources include supported YouTube channels, Shorts, hashtags, and playlists; Instagram profiles and hashtags; X and TikTok profiles; and supported profiles or collections on Douyin, Bilibili, Weibo, and other platforms. Check the resources actually returned for your link.',
};
export const getPlatformNote = (locale: Locale, category: string) => (locale === "en-US" ? englishPlatformNotes : chinesePlatformNotes)[category];
