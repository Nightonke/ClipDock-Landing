import { getTutorials } from './localized-tutorials';
import type { Locale } from '../i18n/locales';
import { isPublishedTutorial } from './publication';

export const downloadGuideSlugs = [
 'download-youtube-video-iphone',
 'download-tiktok-video-iphone',
 'download-instagram-reels-iphone',
 'download-x-twitter-video-iphone',
 'download-facebook-video-iphone',
 'download-douyin-video-iphone',
 'download-xiaohongshu-video-iphone',
 'download-bilibili-video-iphone',
] as const;

export function getDownloadGuides(locale: Locale) {
 const tutorials = getTutorials(locale);
 return downloadGuideSlugs.map(slug => {
  const article = tutorials.find(article => article.slug === slug);
  if (!article) throw new Error(`Missing download guide: ${locale}/${slug}`);
  return article;
 }).filter(isPublishedTutorial);
}
