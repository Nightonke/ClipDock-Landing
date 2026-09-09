import type { TutorialCopy } from "../../types";
export const copy: Record<string, TutorialCopy> = {
  "copy-link-auto-download-iphone": {
    "title": "Download videos by copying links on iPhone, without switching apps",
    "description": "Set up automatic downloads from copied links in ClipDock, keep Picture in Picture active, and browse without repeatedly switching apps.",
    "intro": "Copy-to-download is useful when selecting individual videos from different posts. Once the feature is ready, ClipDock detects the share links you copy and creates tasks. This differs from loading a whole profile in one batch.",
    "tips": [
      {
        "title": "A copied link does not start a download",
        "text": "Check the feature’s state, whether the link is supported, your connection, and system prompts. If manual pasting also fails, the source link may be the problem. If manual extraction works but copying does nothing, check the automatic workflow’s operating conditions first."
      }
    ],
    "faq": [
      {
        "question": "Will detection always continue after locking the screen or closing the app?",
        "answer": "Keep Picture in Picture active while using background detection. Locking the screen, force-quitting the app, or system resource changes can interrupt it. Return to ClipDock and check its status if links stop being detected."
      },
      {
        "question": "Is this the same as profile batch downloading?",
        "answer": "No. This receives the individual share links you copy. Batch downloading extracts multiple posts from one profile or list link."
      }
    ],
    "steps": [
      {
        "title": "Enable automatic downloads and background detection",
        "text": "Open Extract → Video in ClipDock. Enable Fill from Clipboard, Auto-download Links, and Detect in Background. Allow notifications if you want download updates."
      },
      {
        "title": "Switch to a video app and keep the floating window open",
        "text": "Switch to a video app and keep ClipDock’s Picture in Picture window active. When it says Copy a link to download, you can start copying links. Slide it to the screen edge if it gets in the way, without closing it."
      },
      {
        "title": "Copy the video’s link",
        "text": "Open the video’s share panel and tap Copy link. You do not need to return to ClipDock to paste. If the floating window gets in the way, slide it to the screen edge while keeping picture-in-picture active."
      },
      {
        "title": "Keep browsing and check your downloads",
        "text": "Copy a link and check that ClipDock receives it before copying more. Keep Picture in Picture active while browsing. When you finish, open Manager to check completed and failed tasks, and save files to Photos if needed."
      }
    ],
    "exampleNote": "The recording shows copied links being detected and download tasks being created in the background. Notifications do not confirm that every file finished downloading or was saved to Photos."
  },
  "copy-tiktok-links-background": {
    "title": "How to download TikTok videos while you browse and copy links",
    "description": "Choose videos in TikTok and let ClipDock create background tasks from copied links. Learn how to confirm receipt and check completion or failures.",
    "intro": "When saving a few videos from different creators, copying individual links fits the selection process better than loading a whole profile. First get ClipDock’s automatic download feature ready, then return to TikTok.",
    "tips": [
      {
        "title": "When should I use profile batch downloading?",
        "text": "Use a profile link when you want several posts from the same creator. Keep copying individual links when you want a few selected videos from different creators."
      }
    ],
    "faq": [
      {
        "question": "Why is this separate from the regular TikTok download guide?",
        "answer": "The regular guide pastes links manually in ClipDock. This workflow uses copied links to create download tasks while you browse TikTok."
      },
      {
        "question": "What should I do with a system permission prompt?",
        "answer": "Follow the prompt to allow the access needed for clipboard detection or notifications. If you dismiss it, return to ClipDock and check whether the feature is ready before copying more links."
      }
    ],
    "steps": [
      {
        "title": "Enable auto-download and background detection",
        "text": "Open Extract → Video in ClipDock. Enable Fill from Clipboard, Auto-download Links, and Detect in Background. Allow notifications if you want download updates."
      },
      {
        "title": "Return to TikTok and check the floating window",
        "text": "Browse TikTok with ClipDock’s picture-in-picture window open. When it says Copy a link to download, you can begin choosing videos."
      },
      {
        "title": "Open Share and copy the link",
        "text": "On a video you want, tap Share and choose Copy link, then keep browsing. There is no need to switch back to ClipDock. If the floating window blocks the picture, slide it to the screen edge without closing picture-in-picture."
      },
      {
        "title": "Keep browsing and check your downloads",
        "text": "Copy a link and check that ClipDock receives it before copying more. Keep Picture in Picture active while browsing. When you finish, open Manager to check completed and failed tasks, and save files to Photos if needed."
      }
    ],
    "exampleNote": "The recording shows copied links being detected and download tasks being created in the background. Notifications do not confirm that every file finished downloading or was saved to Photos."
  }
};
