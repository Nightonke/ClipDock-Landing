import { tutorials as sourceTutorials, type Tutorial } from '../tutorials';
import { platformTutorials } from './platforms';
import { clipboardTutorials } from './clipboard';
import { batchTutorials } from './batch';
import { toolTutorials } from './tools';
import { audioAndJoinTutorials } from './audio-and-join';

const subtitleTutorial: Tutorial = {
 slug: 'extract-youtube-subtitles-iphone', category: 'subtitles', screenshotsReady: true,
 title: 'How to extract YouTube captions on iPhone and iPad',
 description: 'Extract existing YouTube captions with ClipDock, choose languages and formats such as SRT or VTT, then save or share the files. Includes five screenshots.',
 intro: 'Save the captions already available on a YouTube video for reading, reference, or further editing. Paste the video link into ClipDock, select the caption tracks and a file format, then export. The five screenshots below show the English app interface.',
 steps: [
  { title: 'Paste a YouTube video link', text: 'Copy the video’s share link in YouTube. Open ClipDock, go to Extract in the bottom navigation, then select the Subtitles tab at the top. Tap Paste or enter the link yourself. Use a link to an individual video.', image: 'subtitles-paste-link' },
  { title: 'Extract the available captions', text: 'Check the link and tap Extract. Wait while the button shows “Extracting captions…”. This feature retrieves captions that already exist on YouTube; it does not transcribe videos that have no captions.', image: 'subtitles-extracting' },
  { title: 'Choose your caption languages', text: 'When extraction finishes, you will see the video thumbnail, title, duration, and available caption tracks. Tap the circle beside a track to select it, choose several tracks, or tap Select all. The example shows English (auto-generated) and English (United Kingdom). Languages and track counts depend on the video.', image: 'subtitles-select-tracks' },
  { title: 'Choose a file format', text: 'Tap Format: SRT to open the Caption format menu. The screenshot lists SRT, VTT, TTML, JSON3, SRV1, SRV2, and SRV3. Choose a format supported by the app you plan to use, and check the formats listed beneath each selected track.', image: 'subtitles-select-format', sections: [{ title: 'Not sure which format to choose?', text: 'Start with SRT. For a web video player, use VTT if the player requires it. If your receiving app specifies a format, follow its requirements.' }] },
  { title: 'Save the files or share them', text: 'Once you have chosen the languages and format, tap Export captions at the bottom. The number in parentheses is the number of selected tracks; this example has two. The Export to menu offers Save to Files and Share.', image: 'subtitles-export', sections: [
   { title: 'Save to Files', text: 'Choose Save to Files, select a location in the system dialog, and confirm. Open the Files app to check the exported captions. The screenshot shows the export menu, rather than a completed save.' },
   { title: 'Share with another app', text: 'Choose Share, then select an app or sharing method from the system share sheet. The exported items are caption files. Only save and use content you own or have permission to use.' },
  ] },
 ],
 tips: [
  { title: 'No captions found?', text: 'Make sure the video link opens normally, and check whether captions are available on YouTube. This feature cannot create captions when none exist. If the video has captions, check the link and your connection, then try again.' },
  { title: 'Errors in the caption text?', text: 'YouTube’s auto-generated captions may contain recognition errors. After exporting, check names, technical terms, and timing against the original video before using them.' },
 ],
 faq: [
  { question: 'Can I extract auto-generated captions?', answer: 'Yes, when the video provides them. The English (auto-generated) track in the screenshot is one example. Availability depends on the extraction results.' },
  { question: 'Can I export several languages together?', answer: 'Yes. Select multiple caption tracks, or tap Select all, then use Export captions. You can choose from the tracks already available on that video.' },
  { question: 'Does this translate or transcribe a video?', answer: 'This tutorial covers extracting existing YouTube captions. The interface shown here does not include translation or audio transcription.' },
  { question: 'Are captions saved to Photos?', answer: 'Captions are files. Use Save to Files to keep them in the Files app, or use Share to send them to another app.' },
 ],
 related: ['download-youtube-video-iphone', 'download-youtube-playlist-iphone', 'extract-audio-iphone'],
};

const translated = [subtitleTutorial, ...platformTutorials, ...clipboardTutorials, ...batchTutorials, ...toolTutorials, ...audioAndJoinTutorials];
if (translated.length !== sourceTutorials.length) throw new Error("English tutorial coverage differs from Chinese");
export const englishTutorials = sourceTutorials.map(source => {
 const matches = translated.filter(article => article.slug === source.slug);
 if (matches.length !== 1) throw new Error(`Expected one English translation for ${source.slug}`);
 return matches[0];
});

export const englishScreenshotTitles: Record<string, string> = {
 'subtitles-paste-link': 'Paste the YouTube video link in the Subtitles tab',
 'subtitles-extracting': 'Tap Extract and wait for the captions',
 'subtitles-select-tracks': 'Select the caption language tracks to export',
 'subtitles-select-format': 'Tap Format and choose a caption file format',
 'subtitles-export': 'Tap Export captions, then choose Save to Files or Share',
};

// Reused screenshots keep the first translated caption; profile illustrations stay labeled for their actual platform.
for (const tutorial of englishTutorials) {
 for (const step of tutorial.steps) {
  if (step.image && !englishScreenshotTitles[step.image]) englishScreenshotTitles[step.image] = step.title;
 }
}
englishScreenshotTitles['audio-source'] = 'Choose a source video from Photos or Files';
