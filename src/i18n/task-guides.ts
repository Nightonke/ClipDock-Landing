import type { Locale } from './locales';

interface TaskGuideCopy {
 heading: string;
 intro: string;
 tasks: Array<{ title: string; text: string; links: Array<{ slug: string; label: string }> }>;
}

export const taskGuideCopy: Partial<Record<Locale, TaskGuideCopy>> = {
 'zh-Hans': {
  heading: '从你手里的素材开始',
  intro: '单条视频、作者主页和已有文件，需要不同的入口。先选任务，再按教程操作。',
  tasks: [
   { title: '只有一条分享链接', text: '在“提取 → 视频”中解析单条作品。下载完成后，还需确认是否已保存到相册。', links: [
    { slug: 'download-douyin-video-iphone', label: '保存一条抖音视频' },
    { slug: 'download-youtube-video-iphone', label: '保存一条 YouTube 视频' },
   ] },
   { title: '想保存一组作品', text: '在“提取 → 批量”中使用合集或主页链接。免费版最多加载前 2 页，已加载列表不一定包含全部作品。', links: [
    { slug: 'batch-download-bilibili-collection-iphone', label: '批量保存 B 站合集' },
    { slug: 'batch-download-douyin-profile-iphone', label: '从抖音作者主页选择作品' },
   ] },
   { title: '只需要视频中的文字', text: '字幕提取保存来源已有的字幕轨道；先确认可用语言，再选择 SRT、VTT 等文件格式。', links: [
    { slug: 'extract-youtube-subtitles-iphone', label: '提取 YouTube 字幕' },
   ] },
   { title: '视频已经在相册或文件里', text: '直接进入“处理”选择素材，无需先下载。尺寸/画布调整比例与布局，转码调整格式和分辨率。带星号的部分选项需要 VIP。', links: [
    { slug: 'resize-video-iphone', label: '调整画面比例和留边' },
    { slug: 'transcode-video-iphone', label: '转换格式或压缩视频' },
   ] },
  ],
 },
};
