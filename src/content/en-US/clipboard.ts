import { translateTutorial as article, step as s, detail as d, question as q } from './translation';
export const clipboardTutorials = [
 article('copy-link-auto-download-iphone', {
  title: 'Download videos by copying links on iPhone, without switching apps',
  description: 'Set up ClipDock’s copy-to-download workflow, verify a first link, and follow background notifications without repeatedly pasting into the downloader.',
  intro: 'Copy-to-download is useful when selecting individual videos from different posts. Once the feature is ready, ClipDock detects the share links you copy and creates tasks. This differs from loading a whole profile in one batch.',
  steps: [
   s('Enable automatic downloads and background detection', 'Open Extract in ClipDock and select Video. Turn on Fill from Clipboard, Auto-download Links, and Detect in Background. The screenshot shows all three switches in green.'),
   s('Switch to a video app and keep the floating window open', 'Open TikTok or another video app and check for ClipDock’s picture-in-picture window. Copy a link to download means it is ready. You can slide the floating window to the edge of the screen, but keep picture-in-picture active and do not close it.'),
   s('Copy a video you want to save', 'Open the video’s share panel and tap Copy link. You do not need to return to ClipDock to paste. If the floating window gets in the way, slide it to the screen edge while keeping picture-in-picture active.'),
   s('Keep browsing and watch the download notifications', 'The recording shows continuous copying: ClipDock detects resources and creates download tasks in the background while you browse other videos. Watch the system notifications, then check Manager when you finish browsing. Use Save to Photos if you also want a copy in the system library.'),
  ],
  tips: [d('A copied link does not start a download', 'Check the feature’s state, whether the link is supported, your connection, and system prompts. If manual pasting also fails, the source link may be the problem. If manual extraction works but copying does nothing, check the automatic workflow’s operating conditions first.')],
  faq: [q('Will detection always continue after locking the screen or closing the app?', 'Background detection is not an unconditional always-on service. Behavior after locking, force-quitting, or system resource changes must be checked with the current app version and actual device behavior.'), q('Is this the same as profile batch downloading?', 'No. This receives the individual share links you copy. Batch downloading extracts multiple posts from one profile or list link.')],
 }),
 article('copy-tiktok-links-background', {
  title: 'How to download TikTok videos while you browse and copy links',
  description: 'Choose videos in TikTok and let ClipDock create background tasks from copied links. Learn how to confirm receipt and check completion or failures.',
  intro: 'When saving a few videos from different creators, copying individual links fits the selection process better than loading a whole profile. First get ClipDock’s automatic download feature ready, then return to TikTok.',
  steps: [
   s('Enable auto-download and background detection', 'In ClipDock, open Extract and select Video. Enable Fill from Clipboard, Auto-download Links, and Detect in Background, checking that all three switches are green.'),
   s('Return to TikTok and check the floating window', 'Browse TikTok with ClipDock’s picture-in-picture window open. When it says Copy a link to download, you can begin choosing videos.'),
   s('Open Share and copy the link', 'On a video you want, tap Share and choose Copy link, then keep browsing. There is no need to switch back to ClipDock. If the floating window blocks the picture, slide it to the screen edge without closing picture-in-picture.'),
   s('Watch the continuous-copying demo', 'The recording shows copying several TikTok video links and receiving notifications for background detection and task creation. Confirm that the first link has been received before collecting more. After browsing, check both completed and failed tasks in Manager instead of relying only on notifications.'),
  ],
  tips: [d('When should I use profile batch downloading?', 'Use a profile link when you want several posts from the same creator. Keep copying individual links when you want a few selected videos from different creators.')],
  faq: [q('Why is this separate from the regular TikTok download guide?', 'The regular workflow returns to ClipDock to submit a link manually. This guide focuses on initial setup, verifying automatic receipt, and collecting links continuously.'), q('What should I do with a system permission prompt?', 'Read and respond to the current system and app prompts. Do not assume the workflow will continue after a prompt is ignored. You do not need to provide account passwords to follow this guide.')],
 }),
];
