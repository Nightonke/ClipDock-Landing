import type { TutorialCopy } from "../../types";
export const copy: Record<string, TutorialCopy> = {
  "batch-download-bilibili-collection-iphone": {
    "title": "How to batch download Bilibili collection videos on iPhone and iPad in 2026",
    "description": "Copy a Bilibili collection share link into ClipDock, load videos, choose quality and add a batch to the queue. Includes a b23.tv link example.",
    "intro": "A Bilibili collection download starts with the collection’s share link. It can help back up your own series or authorized videos without copying each episode’s link separately.",
    "tips": [
      {
        "title": "The extracted count differs from the collection’s episode count",
        "text": "Check that you copied the collection link, then check loaded pages, account limits and resource availability. Select loaded only selects currently loaded resources, and the returned list may not include every episode. Avoid repeatedly submitting the whole collection without checking."
      }
    ],
    "faq": [
      {
        "question": "How does a Bilibili collection link differ from a creator profile link?",
        "answer": "A collection link identifies a group of videos, while a profile link identifies a creator page. Copy the link from the target collection’s share panel. A b23.tv short link alone does not establish the source type, so check the collection name and returned list after loading."
      },
      {
        "question": "Will completed batch downloads automatically appear in Photos?",
        "answer": "Enable Auto-Save Completed Downloads to Photos in Download Settings to save supported downloads automatically. Otherwise, use Save to Photos after downloading. Saving requires photo access and a supported format."
      }
    ],
    "steps": [
      {
        "title": "Copy the Bilibili collection link",
        "text": "Open the collection you want to download in Bilibili. Tap the Share button in the collection panel, then choose Copy link. The example collection is a dance series showing 62 episodes. Confirm that you are sharing the collection, rather than the individual video currently playing."
      },
      {
        "title": "Paste the collection link in Batch",
        "text": "Open Extract in ClipDock, switch to Batch, and tap Paste to enter the copied link. This example uses the b23.tv short link below. Use the actual address copied from your target collection’s share panel.",
        "exampleUrl": "https://b23.tv/drSfmMh"
      },
      {
        "title": "Load the collection list and wait for results",
        "text": "Tap Load list and wait for Loading list to finish. This only retrieves selectable resources; it does not start downloading. You still need to select items and tap Add to queue."
      },
      {
        "title": "Select videos and add them to the queue",
        "text": "Confirm that the source name matches your collection and select the videos you want. Use Select loaded as needed. Choose Batch quality, confirm the selected count, then tap Add to queue. The example shows 62 loaded and selected items, with Add to queue (62) on the button."
      },
      {
        "title": "Check queue status and download progress",
        "text": "Open Manager to follow your downloads. Active contains queued and running tasks, Done contains completed files, and Failed contains tasks that need attention. Open a task to check its status."
      }
    ],
    "exampleNote": "The screenshots show a running queue, not completion of every download or a successful Photos save. Manager totals include other tasks and are not the result count for this batch. The shown account limits and media counts are examples."
  },
  "batch-download-tiktok-hashtag-iphone": {
    "title": "How to batch download TikTok hashtag videos on iPhone and iPad in 2026",
    "description": "Use a TikTok hashtag URL in ClipDock, load videos, choose quality and add a batch to the queue. Includes a beauty hashtag link format example.",
    "intro": "A TikTok hashtag download starts with a topic page. It can help save your own or authorized videos under the same tag without copying each video link separately. This guide uses the beauty hashtag as an example.",
    "tips": [
      {
        "title": "The results differ from the hashtag page",
        "text": "Confirm that the link contains /tag/, then check the topic name, loaded pages and account limits. The returned list may not include every video under the hashtag. Select loaded only selects loaded resources. Avoid repeatedly submitting the whole list without checking."
      }
    ],
    "faq": [
      {
        "question": "How does a TikTok hashtag link differ from a profile link?",
        "answer": "A hashtag link identifies content under a topic and can include videos from different creators. A profile link identifies one creator. For hashtag batch downloads, use a full URL such as https://www.tiktok.com/tag/beauty, rather than just #beauty."
      },
      {
        "question": "Will completed batch downloads automatically appear in Photos?",
        "answer": "Enable Auto-Save Completed Downloads to Photos in Download Settings to save supported downloads automatically. Otherwise, use Save to Photos after downloading. Saving requires photo access and a supported format."
      }
    ],
    "steps": [
      {
        "title": "Paste the TikTok hashtag link in Batch",
        "text": "TikTok hashtag links use the format https://www.tiktok.com/tag/topic-name. The example below uses beauty. Open Extract in ClipDock, switch to Batch, and tap Paste to enter the full link. Do not add # before the topic name in the URL.",
        "exampleUrl": "https://www.tiktok.com/tag/beauty"
      },
      {
        "title": "Load the hashtag list and wait for results",
        "text": "Tap Load list and wait for Loading list to finish. This only retrieves selectable resources; it does not start downloading. You still need to select items and tap Add to queue."
      },
      {
        "title": "Select videos and add them to the queue",
        "text": "Confirm beauty as the source and select the videos you want. Use Select loaded as needed. Choose Batch quality, confirm the selected count, then tap Add to queue. The example shows 19 loaded and selected items, with Add to queue (19) on the button."
      },
      {
        "title": "Check queue status and download progress",
        "text": "Open Manager to follow your downloads. Active contains queued and running tasks, Done contains completed files, and Failed contains tasks that need attention. Open a task to check its status."
      }
    ],
    "exampleNote": "The screenshots show a running queue, not completion of every download or a successful Photos save. Manager totals include other tasks and are not the result count for this batch. The shown account limits and media counts are examples."
  },
  "batch-download-instagram-hashtag-iphone": {
    "title": "How to batch download Instagram hashtag photos on iPhone and iPad in 2026",
    "description": "Use an Instagram hashtag URL in ClipDock, load images, filter resources and add a batch to the queue. Includes a model hashtag link format example.",
    "intro": "An Instagram hashtag download starts with a topic page. It can help save your own or authorized photos under the same tag without copying each post link separately. This guide uses the model hashtag as an example.",
    "tips": [
      {
        "title": "The results differ from the hashtag page",
        "text": "Confirm that the link contains /explore/tags/, then check the topic name, loaded pages and account limits. The returned list may not include every post under the hashtag. Select loaded only selects loaded resources. Avoid repeatedly submitting the whole list without checking."
      }
    ],
    "faq": [
      {
        "question": "How does an Instagram hashtag link differ from a profile link?",
        "answer": "A hashtag link identifies content under a topic and can include posts from different creators. A profile link identifies one creator. For hashtag batch downloads, use a full URL such as https://www.instagram.com/explore/tags/model, rather than just #model."
      },
      {
        "question": "Will completed batch downloads automatically appear in Photos?",
        "answer": "Enable Auto-Save Completed Downloads to Photos in Download Settings to save supported downloads automatically. Otherwise, use Save to Photos after downloading. Saving requires photo access and a supported format."
      }
    ],
    "steps": [
      {
        "title": "Paste the Instagram hashtag link in Batch",
        "text": "Instagram hashtag links use the format https://www.instagram.com/explore/tags/topic-name. The example below uses model. Open Extract in ClipDock, switch to Batch, and tap Paste to enter the full link. Do not add # before the topic name in the URL.",
        "exampleUrl": "https://www.instagram.com/explore/tags/model"
      },
      {
        "title": "Load the hashtag list and wait for results",
        "text": "Tap Load list and wait for Loading list to finish. This only retrieves selectable resources; it does not start downloading. You still need to select items and tap Add to queue."
      },
      {
        "title": "Select photos and add them to the queue",
        "text": "Confirm model as the source and select the photos you want. Use the Image filter or Select loaded as needed. After filtering, check the selected items and count before tapping Add to queue. The example shows 21 loaded and selected items labeled Image, with Add to queue (21) on the button."
      },
      {
        "title": "Check queue status and download progress",
        "text": "Open Manager to follow your downloads. Active contains queued and running tasks, Done contains completed files, and Failed contains tasks that need attention. Open a task to check its status."
      }
    ],
    "exampleNote": "The screenshots show selection of items labeled Image and a running queue, not completion of every download or a successful Photos save. Manager totals include other tasks and are not the result count for this batch. The shown account limits and media counts are examples."
  },
  "batch-download-youtube-shorts-iphone": {
    "title": "How to batch download YouTube Shorts on iPhone and iPad in 2026",
    "description": "Use a YouTube channel’s Shorts page in ClipDock, load short videos, choose quality and add a batch to the queue. Includes a full URL example.",
    "intro": "A Shorts batch download starts with a channel’s Shorts page. It can help save your own or authorized short videos from one creator without copying each video link separately.",
    "tips": [
      {
        "title": "The results differ from the channel’s Shorts page",
        "text": "Confirm the channel handle and /shorts at the end of the URL, then check loaded pages and account limits. The returned list may not include every Short on the channel. Select loaded only selects loaded resources. Avoid repeatedly submitting the whole list without checking."
      }
    ],
    "faq": [
      {
        "question": "How does a channel Shorts link differ from a single Short’s link?",
        "answer": "An address such as https://youtube.com/@dailymoodvideo/shorts identifies a channel’s Shorts list. An address containing /shorts/video-ID identifies one short video. For batch downloading, use the list URL with the channel handle and /shorts at the end."
      },
      {
        "question": "Will completed batch downloads automatically appear in Photos?",
        "answer": "Enable Auto-Save Completed Downloads to Photos in Download Settings to save supported downloads automatically. Otherwise, use Save to Photos after downloading. Saving requires photo access and a supported format."
      }
    ],
    "steps": [
      {
        "title": "Paste the channel’s Shorts link in Batch",
        "text": "Use the full channel Shorts URL in the format https://youtube.com/@channel-handle/shorts. The example below uses @dailymoodvideo. Open Extract in ClipDock, switch to Batch, and tap Paste. Make sure the address keeps /shorts at the end.",
        "exampleUrl": "https://youtube.com/@dailymoodvideo/shorts"
      },
      {
        "title": "Load the Shorts list and wait for results",
        "text": "Tap Load list and wait for Loading list to finish. This only retrieves selectable resources; it does not start downloading. You still need to select items and tap Add to queue."
      },
      {
        "title": "Select videos and add them to the queue",
        "text": "Confirm @dailymoodvideo as the source and select the short videos you want. Use Select loaded as needed. Choose Batch quality, confirm the selected count, then tap Add to queue. The example shows 48 loaded and selected items, with Add to queue (48) on the button."
      },
      {
        "title": "Check queue status and download progress",
        "text": "Open Manager to follow your downloads. Active contains queued and running tasks, Done contains completed files, and Failed contains tasks that need attention. Open a task to check its status."
      }
    ],
    "exampleNote": "The screenshots show a running queue, not completion of every download or a successful Photos save. Manager totals include other tasks and are not the result count for this batch. The shown account limits and media counts are examples."
  },
  "batch-download-youtube-hashtag-iphone": {
    "title": "How to batch download YouTube hashtag videos on iPhone and iPad in 2026",
    "description": "Use a YouTube hashtag URL in ClipDock, load videos, select quality and add a batch to the queue. Includes a carmusic link format example.",
    "intro": "A hashtag download starts with a YouTube topic page. It can help save your own or authorized videos from the same topic without copying each video link separately.",
    "tips": [
      {
        "title": "The results differ from the hashtag page",
        "text": "Confirm that the link contains /hashtag/, then check the topic name, loaded pages and account limits. The returned list may not include every video under the hashtag. Select loaded only selects loaded resources. Avoid repeatedly submitting the whole list without checking."
      }
    ],
    "faq": [
      {
        "question": "How does a hashtag link differ from a channel or playlist link?",
        "answer": "A hashtag link identifies a topic page that can contain videos from different creators. A channel link identifies a creator page, and a playlist link identifies a particular collection. Use a full topic URL such as https://youtube.com/hashtag/carmusic, rather than just #carmusic."
      },
      {
        "question": "Will completed batch downloads automatically appear in Photos?",
        "answer": "Enable Auto-Save Completed Downloads to Photos in Download Settings to save supported downloads automatically. Otherwise, use Save to Photos after downloading. Saving requires photo access and a supported format."
      }
    ],
    "steps": [
      {
        "title": "Paste the hashtag link in Batch",
        "text": "YouTube hashtag links use the format https://youtube.com/hashtag/topic-name. The example below uses carmusic. Open Extract in ClipDock, switch to Batch, and tap Paste to enter the full link. Do not add # before the topic name in the URL.",
        "exampleUrl": "https://youtube.com/hashtag/carmusic"
      },
      {
        "title": "Load the hashtag list and wait for results",
        "text": "Tap Load list and wait for Loading list to finish. This only retrieves selectable resources; it does not start downloading. You still need to select items and tap Add to queue."
      },
      {
        "title": "Select videos and add them to the queue",
        "text": "Confirm carmusic as the source and select the videos you want. Use Select loaded as needed. Choose Batch quality, confirm the selected count, then tap Add to queue. The example shows 36 loaded and selected items, with Add to queue (36) on the button."
      },
      {
        "title": "Check queue status and download progress",
        "text": "Open Manager to follow your downloads. Active contains queued and running tasks, Done contains completed files, and Failed contains tasks that need attention. Open a task to check its status."
      }
    ],
    "exampleNote": "The screenshots show a running queue, not completion of every download or a successful Photos save. Manager totals include other tasks and are not the result count for this batch. The shown account limits and media counts are examples."
  },
  "batch-download-youtube-channel-iphone": {
    "title": "How to batch download YouTube channel videos on iPhone and iPad in 2026",
    "description": "Load a YouTube channel in ClipDock, select videos and quality, add tasks to the queue, and check missing items or download failures.",
    "intro": "A channel download starts with the creator’s channel page, rather than one video inside it. It can help back up your own uploads or authorized videos without copying each video link separately.",
    "tips": [
      {
        "title": "The extracted count differs from the channel count",
        "text": "Check loaded pages and account limits, then check for inaccessible videos. A channel’s displayed count is not necessarily the number currently downloadable. Select loaded only selects loaded resources. Avoid repeatedly submitting the whole channel without checking."
      }
    ],
    "faq": [
      {
        "question": "How does a channel download differ from a playlist download?",
        "answer": "Both are batch workflows, but the source page and range of included posts differ. A channel link identifies a creator page; a playlist link identifies a particular collection. Inspect the actual results for the URL you use."
      },
      {
        "question": "Will completed batch downloads automatically appear in Photos?",
        "answer": "Enable Auto-Save Completed Downloads to Photos in Download Settings to save supported downloads automatically. Otherwise, use Save to Photos after downloading. Saving requires photo access and a supported format."
      }
    ],
    "steps": [
      {
        "title": "Copy the YouTube channel link",
        "text": "Open the YouTube channel you want to download and use its Share action. In the share sheet, tap Copy link. The example channel is @fashion-house-mafia. Confirm that you copied the channel address, rather than a video or playlist URL."
      },
      {
        "title": "Paste the channel link in Batch",
        "text": "Open Extract in ClipDock, switch to Batch, and tap Paste to enter the channel link. The free version can load the first 2 pages; paid VIP is required to load more. Check the limit shown in your app."
      },
      {
        "title": "Load the channel list and wait for results",
        "text": "Tap Load list and wait for Loading list to finish. This only retrieves selectable resources; it does not start downloading. You still need to select items and tap Add to queue."
      },
      {
        "title": "Select videos and add them to the queue",
        "text": "Check the source and select the videos or images you want. Use the type filters and Select loaded as needed. Choose Batch quality, confirm the selected count, then tap Add to queue."
      },
      {
        "title": "Check queue status and download progress",
        "text": "Open Manager to follow your downloads. Active contains queued and running tasks, Done contains completed files, and Failed contains tasks that need attention. Open a task to check its status."
      }
    ],
    "exampleNote": "The screenshots show a running queue, not completion of every download or a successful Photos save. Manager totals include other tasks and are not the result count for this batch. The shown account limits and media counts are examples."
  },
  "download-youtube-playlist-iphone": {
    "title": "How to batch download YouTube playlists on iPhone and iPad in 2026",
    "description": "Load a YouTube playlist in ClipDock, select videos and quality, add tasks to the queue, and check missing items or download failures.",
    "intro": "A playlist download starts with the list itself, rather than one video inside it. It can help back up your own series or authorized course clips without copying each video link separately.",
    "tips": [
      {
        "title": "The extracted count differs from the playlist count",
        "text": "Check for inaccessible videos and confirm the playlist URL. A source’s displayed count is not necessarily the number currently downloadable. Avoid repeatedly submitting the whole list without checking."
      }
    ],
    "faq": [
      {
        "question": "Is a playlist download identical to a channel download?",
        "answer": "Both are batch workflows, but the source page and range of included posts differ. Inspect the actual results for the URL you use."
      },
      {
        "question": "Will completed batch downloads automatically appear in Photos?",
        "answer": "Enable Auto-Save Completed Downloads to Photos in Download Settings to save supported downloads automatically. Otherwise, use Save to Photos after downloading. Saving requires photo access and a supported format."
      }
    ],
    "steps": [
      {
        "title": "Paste the playlist link in Batch",
        "text": "Copy the YouTube playlist’s share link. Open Extract in ClipDock, switch to Batch, and tap Paste. Confirm that it is a playlist URL, rather than a single-video address."
      },
      {
        "title": "Load the list and wait for results",
        "text": "Tap Load list and wait for Loading list to finish. This only retrieves selectable resources; it does not start downloading. You still need to select items and tap Add to queue."
      },
      {
        "title": "Select videos and add them to the queue",
        "text": "Check the source and select the videos or images you want. Use the type filters and Select loaded as needed. Choose Batch quality, confirm the selected count, then tap Add to queue."
      },
      {
        "title": "Check queue status and download progress",
        "text": "Open Manager to follow your downloads. Active contains queued and running tasks, Done contains completed files, and Failed contains tasks that need attention. Open a task to check its status."
      }
    ],
    "exampleNote": "The screenshots show a running queue, not completion of every download or a successful Photos save. Manager totals include other tasks and are not the result count for this batch. The shown account limits and media counts are examples."
  },
  "batch-download-instagram-profile-iphone": {
    "title": "How to batch download Instagram profile videos and images on iPhone and iPad",
    "description": "Download several posts from one Instagram creator. Copy the profile link, load it in Batch, and choose the media you want to save.",
    "intro": "Download several posts from one Instagram creator. Copy the profile link, load it in Batch, and choose the media you want to save.",
    "tips": [
      {
        "title": "Check the loaded range first",
        "text": "Use the actual returned list. It does not establish that Stories, private or deleted posts, or all historical content are included. Confirm creator, media type, and selection count before submitting."
      }
    ],
    "faq": [
      {
        "question": "Can I download only videos?",
        "answer": "Use the Video filter, then check selected items and the Add to queue count before submitting."
      },
      {
        "question": "Does loading a profile start downloading?",
        "answer": "No. Select resources, check quality and count, then tap Add to queue."
      },
      {
        "question": "Why are there 12 posts but 16 items?",
        "answer": "Posts and media resources use different units. A multi-image post can supply several items. The selected count and queue button determine how many are submitted."
      },
      {
        "question": "Does Unlimited mean all users have no limits?",
        "answer": "No. Check the download allowance and limits shown for your own account."
      }
    ],
    "steps": [
      {
        "title": "Copy the Instagram profile URL",
        "text": "Open the creator’s profile in Instagram, tap the three-dot menu at the upper right, and choose Copy profile URL. You need the profile address. For one Reel, use the single-video guide."
      },
      {
        "title": "Paste the URL in Batch",
        "text": "Open Extract → Batch in ClipDock, tap Paste, and check that the link points to the Instagram profile you want."
      },
      {
        "title": "Load the list and wait for results",
        "text": "Tap Load list and wait for Loading list to finish. This only retrieves selectable resources; it does not start downloading. You still need to select items and tap Add to queue."
      },
      {
        "title": "Filter resources and add them to the queue",
        "text": "Check the source and select the videos or images you want. Use the type filters and Select loaded as needed. Choose Batch quality, confirm the selected count, then tap Add to queue.",
        "sections": [
          {
            "title": "Filter and select media",
            "text": "All shows every media type, Video filters videos, and Image filters images. Blue checkmarks show selected items. Adjust them as needed and check the total selection and Add to queue count before submitting, even when using the Video filter."
          },
          {
            "title": "Why do posts and items have different counts?",
            "text": "One post can contain several media files. For example, a multi-image post can make the item count higher than the post count. Check the selected count before downloading."
          },
          {
            "title": "Individual selection and Select loaded",
            "text": "Blue checkmarks on the right mark selected items. Adjust them, or use Select loaded to select currently loaded resources. Check the on-screen count. Change link lets you replace the profile URL."
          },
          {
            "title": "Batch quality",
            "text": "Follow download settings uses your saved quality preference. Tap Batch quality to see available options, then confirm your selection before adding the items to the queue."
          }
        ]
      },
      {
        "title": "Check the tasks in Manager",
        "text": "Open Manager to follow your downloads. Active contains queued and running tasks, Done contains completed files, and Failed contains tasks that need attention. Open a task to check its status.",
        "sections": [
          {
            "title": "Queued does not mean completed",
            "text": "Queued means waiting. Open completed files in Done to preview them, and check individual errors in Failed. If a file was not saved automatically, use Save to Photos to keep a copy in Photos."
          }
        ]
      }
    ],
    "exampleNote": "The screenshots show a running queue, not completion of every download or a successful Photos save. Manager totals include other tasks and are not the result count for this batch. The shown account limits and media counts are examples."
  },
  "batch-download-tiktok-profile-iphone": {
    "title": "How to batch download TikTok profile videos on iPhone and iPad",
    "description": "Download several posts from one TikTok creator. Copy the profile link, load it in Batch, and choose the media you want to save.",
    "intro": "Download several posts from one TikTok creator. Copy the profile link, load it in Batch, and choose the media you want to save.",
    "tips": [
      {
        "title": "Choose the posts you actually need",
        "text": "A profile batch suits several posts from one creator. A single-video link is easier to verify for one item. Before submitting the profile again, check what has already downloaded to avoid duplicates."
      }
    ],
    "faq": [
      {
        "question": "Does loading a profile start downloading?",
        "answer": "No. Select resources, check quality and count, then tap Add to queue."
      },
      {
        "question": "Will every post on the profile appear?",
        "answer": "Not necessarily. Use the resources actually returned; do not treat the list as a complete backup of all historical or restricted content."
      },
      {
        "question": "Why are some items simply called Resource?",
        "answer": "Some items have a generic title. Use the thumbnail, media type, and date to identify them, then preview the downloaded file."
      }
    ],
    "steps": [
      {
        "title": "Copy the creator’s profile link",
        "text": "Open the creator’s profile in TikTok, tap the share arrow at the upper right, and choose Copy link in Send to. Copy the profile address, rather than a single-video link."
      },
      {
        "title": "Paste the profile URL in Batch",
        "text": "Open Extract → Batch in ClipDock, tap Paste, and check that the link points to the TikTok profile you want."
      },
      {
        "title": "Load the list and wait for results",
        "text": "Tap Load list and wait for Loading list to finish. This only retrieves selectable resources; it does not start downloading. You still need to select items and tap Add to queue."
      },
      {
        "title": "Choose resources and quality, then add to queue",
        "text": "Check the source and select the videos or images you want. Use the type filters and Select loaded as needed. Choose Batch quality, confirm the selected count, then tap Add to queue.",
        "sections": [
          {
            "title": "Filter and select media",
            "text": "All shows every media type, Video filters videos, and Image filters images. Blue checkmarks show selected items. Adjust them as needed and check the total selection and Add to queue count before submitting, even when using the Video filter."
          },
          {
            "title": "Select loaded and the loaded range",
            "text": "Select loaded selects items already loaded. Posts and items are different counts because one post can contain several media items. The current list is not necessarily the creator’s entire history. Use Change link to switch to another creator."
          },
          {
            "title": "Batch quality",
            "text": "Follow download settings uses your saved quality preference. Tap Batch quality to see available options, then confirm your selection before adding the items to the queue."
          },
          {
            "title": "Check counts and account limits",
            "text": "Check the selected count and your account’s available downloads before submitting. Posts counts posts; items counts media files, so the totals may differ. Use Change link to switch sources."
          }
        ]
      },
      {
        "title": "Check download progress and failures",
        "text": "Open Manager to follow your downloads. Active contains queued and running tasks, Done contains completed files, and Failed contains tasks that need attention. Open a task to check its status.",
        "sections": [
          {
            "title": "Queued, downloading, and completed",
            "text": "Queued means waiting. Open completed files in Done to preview them, and check individual errors in Failed. If a file was not saved automatically, use Save to Photos to keep a copy in Photos."
          },
          {
            "title": "Check failed tasks individually",
            "text": "Open the failed task and read its error. Check the source link and your connection, then retry if appropriate. A total failure count alone does not identify the cause."
          }
        ]
      }
    ],
    "exampleNote": "The screenshots show a running queue, not completion of every download or a successful Photos save. Manager totals include other tasks and are not the result count for this batch. The shown account limits and media counts are examples."
  },
  "batch-download-douyin-profile-iphone": {
    "title": "How to batch download Douyin profile videos on iPhone and iPad",
    "description": "Download several posts from one Douyin creator. Copy the profile link, load it in Batch, and choose the media you want to save.",
    "intro": "Download several posts from one Douyin creator. Copy the profile link, load it in Batch, and choose the media you want to save. The images are borrowed from TikTok to illustrate the steps, not a recorded Douyin test. Use your own Douyin profile link.",
    "tips": [
      {
        "title": "Choose the posts you actually need",
        "text": "A profile batch suits several posts from one creator. A single-video link is easier to verify for one item. Before submitting the profile again, check what has already downloaded to avoid duplicates."
      }
    ],
    "faq": [
      {
        "question": "Does loading a profile start downloading?",
        "answer": "No. Select resources, check quality and count, then tap Add to queue."
      },
      {
        "question": "Will every post on the profile appear?",
        "answer": "Not necessarily. Use the resources actually returned; do not treat the list as a complete backup of all historical or restricted content."
      },
      {
        "question": "Why are some items simply called Resource?",
        "answer": "Some items have a generic title. Use the thumbnail, media type, and date to identify them, then preview the downloaded file."
      }
    ],
    "steps": [
      {
        "title": "Copy the creator’s profile link",
        "text": "Open the creator’s Douyin profile and copy its link from the profile sharing menu."
      },
      {
        "title": "Paste the profile URL in Batch",
        "text": "Open Extract → Batch in ClipDock, tap Paste, and check that the link points to the Douyin profile you want."
      },
      {
        "title": "Load the list and wait for results",
        "text": "Tap Load list and wait for Loading list to finish. This only retrieves selectable resources; it does not start downloading. You still need to select items and tap Add to queue."
      },
      {
        "title": "Choose resources and quality, then add to queue",
        "text": "Check the source and select the videos or images you want. Use the type filters and Select loaded as needed. Choose Batch quality, confirm the selected count, then tap Add to queue.",
        "sections": [
          {
            "title": "Filter and select media",
            "text": "All shows every media type, Video filters videos, and Image filters images. Blue checkmarks show selected items. Adjust them as needed and check the total selection and Add to queue count before submitting, even when using the Video filter."
          },
          {
            "title": "Select loaded and the loaded range",
            "text": "Select loaded selects items already loaded. Posts and items are different counts because one post can contain several media items. The current list is not necessarily the creator’s entire history. Use Change link to switch to another creator."
          },
          {
            "title": "Batch quality",
            "text": "Follow download settings uses your saved quality preference. Tap Batch quality to see available options, then confirm your selection before adding the items to the queue."
          },
          {
            "title": "Check counts and account limits",
            "text": "Check the selected count and your account’s available downloads before submitting. Posts counts posts; items counts media files, so the totals may differ. Use Change link to switch sources."
          }
        ]
      },
      {
        "title": "Check download progress and failures",
        "text": "Open Manager to follow your downloads. Active contains queued and running tasks, Done contains completed files, and Failed contains tasks that need attention. Open a task to check its status.",
        "sections": [
          {
            "title": "Queued, downloading, and completed",
            "text": "Queued means waiting. Open completed files in Done to preview them, and check individual errors in Failed. If a file was not saved automatically, use Save to Photos to keep a copy in Photos."
          },
          {
            "title": "Check failed tasks individually",
            "text": "Open the failed task and read its error. Check the source link and your connection, then retry if appropriate. A total failure count alone does not identify the cause."
          }
        ]
      }
    ],
    "exampleNote": "This guide reuses TikTok images; the account, URL, and counts do not represent a recorded Douyin test. The screenshots show a running queue, not completion of every download or a successful Photos save. Manager totals include other tasks and are not the result count for this batch. The shown account limits and media counts are examples."
  },
  "batch-download-weibo-profile-iphone": {
    "title": "How to batch download Weibo profile videos on iPhone and iPad",
    "description": "Download several posts from one Weibo creator. Copy the profile link, load it in Batch, and choose the media you want to save.",
    "intro": "Download several posts from one Weibo creator. Copy the profile link, load it in Batch, and choose the media you want to save.",
    "tips": [
      {
        "title": "Check each loaded batch",
        "text": "Select what you need and load another page only as needed. Check existing downloads before resubmitting. A returned list is not a complete historical backup."
      }
    ],
    "faq": [
      {
        "question": "Why does the list contain only 16 items?",
        "answer": "Only the loaded page is shown at first. Use Load next page to retrieve more items if available."
      },
      {
        "question": "Does loading another page download it?",
        "answer": "Loading and downloading are separate. Check the selected items and tap Add to queue to create tasks."
      },
      {
        "question": "Can I download just some videos?",
        "answer": "Adjust the checkmarks. Even after filtering to Video, confirm the total selected count and the queue button before submitting."
      }
    ],
    "steps": [
      {
        "title": "Copy the Weibo profile URL",
        "text": "Open the creator’s Weibo profile, open its sharing menu, and choose the link-copying action. Copy the profile address rather than an individual post."
      },
      {
        "title": "Paste the profile URL in Batch",
        "text": "Open Extract → Batch in ClipDock, tap Paste, and check that the link points to the Weibo profile you want."
      },
      {
        "title": "Load the list and wait for results",
        "text": "Tap Load list and wait for Loading list to finish. This only retrieves selectable resources; it does not start downloading. You still need to select items and tap Add to queue."
      },
      {
        "title": "Choose videos and load another page if needed",
        "text": "Check the source and select the videos or images you want. Use the type filters and Select loaded as needed. Choose Batch quality, confirm the selected count, then tap Add to queue.",
        "sections": [
          {
            "title": "Load next page",
            "text": "Tap Load next page to retrieve more items, then review the new results and selection count. The loaded list may not include all historical or restricted posts."
          },
          {
            "title": "Filter and select media",
            "text": "All shows every media type, Video filters videos, and Image filters images. Blue checkmarks show selected items. Adjust them as needed and check the total selection and Add to queue count before submitting, even when using the Video filter."
          },
          {
            "title": "Set quality and add to queue",
            "text": "Follow download settings uses your saved quality preference. Tap Batch quality to see available options, then confirm your selection before adding the items to the queue."
          },
          {
            "title": "Posts, items, and account limits",
            "text": "Check the selected count and your account’s available downloads before submitting. Posts counts posts; items counts media files, so the totals may differ. Use Change link to switch sources."
          }
        ]
      },
      {
        "title": "Inspect the download queue in Manager",
        "text": "Open Manager to follow your downloads. Active contains queued and running tasks, Done contains completed files, and Failed contains tasks that need attention. Open a task to check its status.",
        "sections": [
          {
            "title": "Queued, downloading, and completed",
            "text": "Queued means waiting. Open completed files in Done to preview them, and check individual errors in Failed. If a file was not saved automatically, use Save to Photos to keep a copy in Photos."
          },
          {
            "title": "Check failed tasks individually",
            "text": "Open the failed task and read its error. Check the source link and your connection, then retry if appropriate. A total failure count alone does not identify the cause."
          }
        ]
      }
    ],
    "exampleNote": "The screenshots show a running queue, not completion of every download or a successful Photos save. Manager totals include other tasks and are not the result count for this batch. The shown account limits and media counts are examples."
  },
  "batch-download-bilibili-profile-iphone": {
    "title": "How to batch download Bilibili creator videos on iPhone and iPad",
    "description": "Download several posts from one Bilibili creator. Copy the profile link, load it in Batch, and choose the media you want to save.",
    "intro": "Download several posts from one Bilibili creator. Copy the profile link, load it in Batch, and choose the media you want to save.",
    "tips": [
      {
        "title": "Use the actual returned list",
        "text": "A loaded profile is not guaranteed to include every historical upload or restricted item. Check what has already downloaded before submitting again."
      }
    ],
    "faq": [
      {
        "question": "Can I paste a b23.tv short URL directly?",
        "answer": "This example successfully loads a list from a b23.tv link copied from a creator profile. Confirm both the source page and the returned creator."
      },
      {
        "question": "Why are there only 20 resources?",
        "answer": "Only one page is loaded here. Use Load next page and inspect the additional resources actually returned."
      },
      {
        "question": "Does this also demonstrate collections, favorites, or multi-part videos?",
        "answer": "This guide covers profile uploads. Collections, favorites, and multi-part videos use different links and are not demonstrated here."
      },
      {
        "question": "Is the highest quality guaranteed?",
        "answer": "No. Available quality depends on the media returned for your link. Check Batch quality before adding downloads."
      }
    ],
    "steps": [
      {
        "title": "Copy the creator’s profile share link",
        "text": "Open the creator’s Bilibili profile, open its sharing menu, and tap Copy link. Confirm that you are sharing the profile rather than a single video."
      },
      {
        "title": "Paste the profile short link in Batch",
        "text": "Open Extract → Batch in ClipDock, tap Paste, and check that the link points to the Bilibili profile you want.",
        "sections": [
          {
            "title": "Check where the short link came from",
            "text": "There is no need to rewrite this copied URL. However, the b23.tv domain alone does not distinguish a profile from an individual video. Copy from the profile and check the creator’s name after loading."
          }
        ]
      },
      {
        "title": "Load the list and wait for results",
        "text": "Tap Load list and wait for Loading list to finish. This only retrieves selectable resources; it does not start downloading. You still need to select items and tap Add to queue."
      },
      {
        "title": "Choose videos and load more uploads if needed",
        "text": "Check the source and select the videos or images you want. Use the type filters and Select loaded as needed. Choose Batch quality, confirm the selected count, then tap Add to queue.",
        "sections": [
          {
            "title": "Load next page to see more uploads",
            "text": "Tap Load next page to retrieve more items, then review the new results and selection count. The loaded list may not include all historical or restricted posts."
          },
          {
            "title": "Filter and select media",
            "text": "All shows every media type, Video filters videos, and Image filters images. Blue checkmarks show selected items. Adjust them as needed and check the total selection and Add to queue count before submitting, even when using the Video filter."
          },
          {
            "title": "Check Batch quality before submitting",
            "text": "Follow download settings uses your saved quality preference. Tap Batch quality to see available options, then confirm your selection before adding the items to the queue."
          },
          {
            "title": "Confirm creator and counts",
            "text": "Check the selected count and your account’s available downloads before submitting. Posts counts posts; items counts media files, so the totals may differ. Use Change link to switch sources."
          }
        ]
      },
      {
        "title": "Check the queue and completed results",
        "text": "Open Manager to follow your downloads. Active contains queued and running tasks, Done contains completed files, and Failed contains tasks that need attention. Open a task to check its status.",
        "sections": [
          {
            "title": "Choose long videos carefully",
            "text": "Check duration and estimated size before selecting long videos. Start with the items you need, then add more as required."
          },
          {
            "title": "Preview completed files and handle failures",
            "text": "Queued means waiting. Open completed files in Done to preview them, and check individual errors in Failed. If a file was not saved automatically, use Save to Photos to keep a copy in Photos."
          }
        ]
      }
    ],
    "exampleNote": "The screenshots show a running queue, not completion of every download or a successful Photos save. Manager totals include other tasks and are not the result count for this batch. The shown account limits and media counts are examples."
  }
};
