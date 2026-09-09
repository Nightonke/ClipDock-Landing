import type { HomeFeatures, HomeTools } from '../home/types';

export const capabilities = ['Shared link downloads', 'URL downloads', 'Copy to download', 'Stay in your app', 'Find videos on a webpage', 'Profile downloads', 'Channel downloads', 'Hashtag downloads', 'Playlist downloads', 'Collection downloads', 'Background downloads', 'Video library', 'Save to Photos', 'Trim', 'Convert', 'Join', 'Resize', 'Rotate', 'Mirror', 'Change speed', 'Extract audio', 'Merge audio and video', 'Reverse', 'Add watermarks', 'Create GIFs', 'Create Live Photos', 'Capture frames', 'Change MD5', 'YouTube captions'];

export const featureSections: HomeFeatures = [
 { number: '01', video: 'share-link', kicker: 'From link to library', title: 'Paste a link.\nSave the video.', description: 'Paste a shared link or webpage URL into ClipDock to extract available videos, images, or audio. Choose the quality and format offered by the source, then download.', points: ['Works with a wide range of platforms', 'Save available high-quality media', 'Video, image, and audio downloads', 'Keep downloads running in the background'], platformDetails: 'Supported sources include YouTube, Instagram, TikTok, X, Facebook, Vimeo, Reddit, Pinterest, and many more. Availability varies by link, region, and source platform.', tone: 'blue' },
 { number: '02', video: 'copy-background', kicker: 'Just copy the link', title: 'Keep browsing.\nKeep saving.', description: 'Turn on Auto-download Links and Detect in Background, and keep Picture in Picture active while you browse. Copy a supported link and ClipDock can start downloading in the background. Allow notifications to be notified when it finishes.', points: ['Fewer steps between discovery and download', 'Stay focused on what you are watching'], tone: 'lime' },
 { number: '03', video: 'web-long-press', kicker: 'Save from the browser', title: 'Play it.\nPress and hold to save.', description: 'Open a webpage in Web Video, the built-in browser, and play the video after any ads. Press and hold the video, or tap the video detector, then select the media you want to download.', points: ['Find supported videos on webpages', 'Detect multiple media items on a page', 'Long-press to select the video you want'], tone: 'coral' },
 { number: '04', video: 'batch-playlist', kicker: 'Download in batches', title: 'A whole playlist.\nOne queue.', description: 'Load videos from supported channels, profiles, and playlists on platforms such as YouTube, Instagram, X, and TikTok. Select the items you want and save them together.', points: ['Explore supported batch sources'], platformDetails: 'Batch sources include YouTube channels, Shorts, hashtags, and playlists; Instagram profiles and hashtags; X and TikTok profiles; and supported collections on other platforms. Available items depend on the source.', tone: 'blue' },
 { number: '05', kicker: 'YouTube captions', title: 'Keep the words, too.', description: 'Paste a YouTube video link to extract existing captions. Choose the languages and file format you need, then save the files or share them with another app.', points: ['Includes available auto-generated captions and language tracks', 'Select multiple tracks and choose from seven formats', 'Save to Files or share with another app'], carousel: true, tutorial: 'extract-youtube-subtitles-iphone', tone: 'lime' },
];

export const tools: HomeTools = [
 { mark: 'CUT', slug: 'trim-video-iphone', title: 'Trim video', description: 'Keep the part you want and cut away the rest.' },
 { mark: 'CONV', slug: 'transcode-video-iphone', title: 'Convert video', description: 'Use Transcode Video to change the file format or compress your video.' },
 { mark: 'JOIN', slug: 'join-videos-iphone', title: 'Join videos', description: 'Use Stitch Videos to join clips in sequence, starting with your main video.' },
 { mark: 'MIX', slug: 'interleave-videos-iphone', title: 'Interleave clips', description: 'Use Interleave to alternate segments from different videos.' },
 { mark: 'GRID', slug: 'segment-grid-video-iphone', title: 'Build a video grid', description: 'Use Segment Grid to split one video into time segments that play together in a grid.' },
 { mark: 'SIZE', slug: 'resize-video-iphone', title: 'Resize / Canvas', description: 'Change the aspect ratio and choose how your video fits the canvas.' },
 { mark: 'ROTATE', slug: 'rotate-video-iphone', title: 'Rotate video', description: 'Turn the picture to the orientation you need.' },
 { mark: 'MIRROR', slug: 'mirror-video-iphone', title: 'Mirror video', description: 'Flip the picture for a mirrored result.' },
 { mark: 'SPEED', slug: 'change-video-speed-iphone', title: 'Change speed', description: 'Speed up or slow down your video.' },
 { mark: 'AUDIO', slug: 'extract-audio-iphone', title: 'Extract audio', description: 'Save the sound from a video as an audio file.' },
 { mark: 'SOUND', slug: 'edit-video-audio-iphone', title: 'Edit video audio', description: 'Use Audio Editing to mute a video or adjust its volume.' },
 { mark: 'MERGE', slug: 'merge-audio-video-iphone', title: 'Merge audio and video', description: 'Combine an audio track and a video in one file.' },
 { mark: 'REVERSE', slug: 'reverse-video-iphone', title: 'Reverse video', description: 'Play a video from its end back to its beginning.' },
 { mark: 'MARK', slug: 'add-watermark-video-iphone', title: 'Add a watermark', description: 'Add text or an image to your own videos.' },
 { mark: 'GIF', slug: 'video-to-gif-iphone', title: 'Create a GIF', description: 'Use Video to GIF to turn a clip into a shareable animation.' },
 { mark: 'LIVE', slug: 'video-to-live-photo-iphone', title: 'Create a Live Photo', description: 'Use Video to Live Photo to turn a clip into a Live Photo.' },
 { mark: 'FRAMES', slug: 'capture-video-frames-iphone', title: 'Capture frames', description: 'Use Video Capture to save a frame as an image. Batch capture requires VIP.' },
 { mark: 'MD5', slug: 'change-video-md5-iphone', title: 'Change MD5', description: 'Change the video file’s MD5 hash.' },
];

export const faqs = [
 { question: 'Which links does ClipDock support?', answer: 'ClipDock works with supported links from YouTube, Instagram, TikTok, X, Facebook, and many other platforms, as well as supported videos in its built-in browser. Availability depends on the source and the individual link.' },
 { question: 'Why does a link sometimes fail?', answer: 'Page changes, sign-in requirements, regional restrictions, network conditions, expired resources, DRM, or access controls can prevent extraction. Check that the link opens normally, then try again.' },
 { question: 'Where do my downloads go?', answer: 'Downloaded videos appear in your ClipDock library, where you can preview, search, sort, and share them. You can also save videos to Photos.' },
 { question: 'Can downloads continue in the background?', answer: 'ClipDock supports background download tasks. iOS may adjust background activity based on system resources, network conditions, and power settings.' },
 { question: 'Does ClipDock collect my data?', answer: 'The App Store privacy label states that the developer does not collect data through this app. Third-party websites and resources may process network requests under their own privacy policies.' },
 { question: 'Can I download any online video?', answer: 'Only save content you own, have permission to use, or are otherwise allowed to save. Respect the content owner’s rights and the source platform’s rules. ClipDock does not bypass DRM or access controls.' },
];

export const ui = {
  "ogAlt": "ClipDock — Web video downloader for iPhone and iPad",
  "eyebrow": "Web video downloader · iPhone + iPad",
  "heroLine1": "Found a video?",
  "heroLine2": "Make it yours.",
  "heroDescription": "Save videos, images, and audio from supported links with ClipDock. Copy a link, download in the background, or save a playlist in one go. Then trim, convert, and organize everything on your iPhone or iPad.",
  "freeDownload": "Download free",
  "qrLabel": "Scan with your iPhone to download ClipDock",
  "qrAlt": "QR code to download ClipDock",
  "scan": "Scan with your iPhone",
  "getApp": "Get the app",
  "productInfo": "App information",
  "ratings": "ratings",
  "privacyProof": "No app data collected",
  "capabilities": "ClipDock features",
  "subtitleLink": "Read the captions tutorial",
  "demoSuffix": " demo",
  "progress": "Video playback progress",
  "placeholder": "Image coming soon",
  "toolsKicker": "After the download",
  "toolsTitle": "Your pocket video toolbox.",
  "toolsDescription": "Saving is just the start. Trim, convert, join, and share your videos with tools built into ClipDock.",
  "readTutorial": "Read tutorial",
  "trustKicker": "Know what to expect",
  "trustTitle": "Useful tools. Clear limits.",
  "trustDescription": "ClipDock is for content you have the right to save and edit. Download availability depends on the platform and the source media.",
  "trustValue1": "No collection",
  "trustLabel1": "App data",
  "trustText1": "The App Store privacy label states that the developer does not collect data through this app.",
  "trustLabel2": "iPhone and iPad",
  "trustText2": "Requires iOS 15 or iPadOS 15, or later.",
  "trustValue3": "Your rights",
  "trustLabel3": "Save responsibly",
  "trustText3": "Does not bypass DRM, paywalls, access controls, or platform restrictions.",
  "faqKicker": "Questions, answered",
  "faqTitle": "Before you download.",
  "closingKicker": "Ready for your next link?",
  "closingTitle": "Keep your videos close.",
  "closingDescription": "ClipDock is free to download on iPhone and iPad, with in-app purchases.",
  "storeDownload": "Download on the App Store",
  "closingQr": "Scan to download ClipDock"
};
