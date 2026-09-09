import type { TutorialCopy } from "../../types";
export const copy: Record<string, TutorialCopy> = {
  "video-to-gif-iphone": {
    "title": "How to convert a video to GIF on iPhone and iPad",
    "description": "Turn a short video clip into a GIF. Choose the action to keep, then adjust frame rate and width to balance smoothness, detail, and file size.",
    "intro": "Turn a short video clip into a GIF. Choose the action to keep, then adjust frame rate and width to balance smoothness, detail, and file size.",
    "tips": [
      {
        "title": "The GIF is too large",
        "text": "Shorten the clip first, then reduce width or frame rate. Change one setting at a time to find an acceptable balance."
      }
    ],
    "faq": [
      {
        "question": "Why is there no sound?",
        "answer": "GIF does not carry audio. Use a video format if sound is required."
      },
      {
        "question": "Why do some options have a star?",
        "answer": "The page marks clips over 10 seconds, high frame rates, width 720, and presets as VIP features."
      }
    ],
    "steps": [
      {
        "title": "Open Video to GIF in Process",
        "text": "Open Process, then tap Video to GIF."
      },
      {
        "title": "Choose the video to process",
        "text": "In Select Video, tap Choose from Photos or Choose from Files and select your video. You can import a video even when the download list is empty."
      },
      {
        "title": "Choose the clip and preset",
        "text": "Preview the imported video, then inspect Presets and Clip Range. This example uses Custom and retains about six seconds.",
        "sections": [
          {
            "title": "Custom and starred presets",
            "text": "Custom lets you choose settings yourself. Clear*, Smooth*, and Long* provide presets for detail, smoothness, or longer clips. A star marks VIP access."
          },
          {
            "title": "Clip Range: keep the action you need",
            "text": "Drag the round handles to set start and end points. The selected times and duration appear above. Longer clips generally need more frames and space. Clips longer than 10 seconds require VIP."
          }
        ]
      },
      {
        "title": "Set frame rate and width",
        "text": "Scroll to Frame Rate, Width, and the size estimate, then tap Start Processing. This example uses 8fps and width 360; the estimate is about 1.2 MB and 48 frames.",
        "sections": [
          {
            "title": "Frame Rate: frames per second",
            "text": "Options are 6, 8, 12, 15*, and 24* fps. More frames can make motion smoother but increase size. Try 8fps for simple movement and compare higher rates for faster action. 15 and 24fps are marked VIP."
          },
          {
            "title": "Width: pixels across the GIF",
            "text": "Choices are 240, 360, 540, and 720*. More pixels may retain more detail and increase size; 720 requires VIP. Enlarging the output cannot recover detail missing from the source."
          },
          {
            "title": "An estimate is not the final size",
            "text": "Six seconds at 8fps is about 48 frames. Compression also depends on picture complexity, so check the exported file. GIF has no sound; use video if audio is needed."
          }
        ]
      },
      {
        "title": "Save the generated GIF",
        "text": "When Processing Complete appears, tap Save to Photos to save the GIF or Share File to share it. Done closes the dialog. Open the saved GIF in an app that supports animation."
      }
    ],
    "exampleNote": "Screenshots use the English app interface on an iPhone 17 Pro Max simulator running iOS 26.0. Example settings and access limits refer to that version. The example exported a roughly six-second GIF with Custom, 8 fps, and width 360. Paid preset settings were not verified."
  },
  "video-to-live-photo-iphone": {
    "title": "How to turn a video into a Live Photo on iPhone",
    "description": "Turn a short clip into a Live Photo with a still cover and optional sound. Choose the motion range and cover frame, then save it to Photos.",
    "intro": "Turn a short clip into a Live Photo with a still cover and optional sound. Choose the motion range and cover frame, then save it to Photos.",
    "tips": [
      {
        "title": "Check the cover and motion separately",
        "text": "A good cover does not guarantee the whole clip looks right. Check the start, end, sound, and still cover after saving. Share in a way that preserves Live Photo data."
      }
    ],
    "faq": [
      {
        "question": "Can I use it directly as a live wallpaper?",
        "answer": "Creating a Live Photo and lock-screen wallpaper compatibility are separate. Support also depends on the device and system. This guide does not treat conversion success as proof of wallpaper support."
      },
      {
        "question": "How is it different from GIF?",
        "answer": "Live Photos can keep sound; GIFs are animations without audio."
      }
    ],
    "steps": [
      {
        "title": "Open Video to Live Photo in Process",
        "text": "Open Process, then tap Video to Live Photo."
      },
      {
        "title": "Choose the video to process",
        "text": "In Select Video, tap Choose from Photos or Choose from Files and select your video. You can import a video even when the download list is empty."
      },
      {
        "title": "Choose the motion range and cover",
        "text": "After importing, choose the action with Clip Range and set Cover Frame. This example selects 00:00–00:03.",
        "sections": [
          {
            "title": "Clip Range: choose which moment to keep",
            "text": "The handles set the start and end, with duration shown above. Choose a short range around the action. The page states that clips over three seconds require VIP."
          },
          {
            "title": "Cover Frame: choose the still image",
            "text": "Move the cover slider and check the thumbnail and time. Choose a clear subject and natural expression, avoiding closed eyes or motion blur. The still cover and motion range are separate settings."
          }
        ]
      },
      {
        "title": "Choose sound and quality",
        "text": "Scroll to Sound and Live Photo Quality, then tap Start Processing. The example keeps sound and uses Balanced.",
        "sections": [
          {
            "title": "Remove Sound and Keep Sound",
            "text": "Remove Sound mutes the clip; Keep Sound retains its audio. Choose based on whether the moment needs its original atmosphere."
          },
          {
            "title": "Balanced, HD*, and Original*",
            "text": "Choose Balanced for a starting point. HD and Original are marked VIP. Higher quality cannot recover detail missing from the source."
          }
        ]
      },
      {
        "title": "Check the Live Photo in Photos",
        "text": "Wait for Live Photo saved to Photos, then tap OK. Open Photos and press and hold the Live Photo to check its motion, cover, and sound."
      }
    ],
    "exampleNote": "Screenshots use the English app interface on an iPhone 17 Pro Max simulator running iOS 26.0. Example settings and access limits refer to that version. The example used a three-second range and Balanced quality and reached the app’s save confirmation. Long-press playback in Photos was not verified."
  },
  "transcode-video-iphone": {
    "title": "How to convert and compress videos on iPhone and iPad",
    "description": "Use Transcode Video to change a video’s format or reduce its file size. Choose a format, resolution, and quality, then preview the exported result.",
    "intro": "Use Transcode Video to change a video’s format or reduce its file size. Choose a format, resolution, and quality, then preview the exported result.",
    "tips": [
      {
        "title": "Unhappy with the compression?",
        "text": "Keep the original and compare settings on a short clip. Avoid repeatedly compressing an already compressed result."
      }
    ],
    "faq": [
      {
        "question": "Why is the file not much smaller?",
        "answer": "The input may already be small, or output settings may preserve more quality. Duration, dimensions, codec, and bitrate all affect size."
      },
      {
        "question": "Will choosing 1080p make a low-resolution video clearer?",
        "answer": "Upscaling does not create source detail that was never present. Judge the actual viewing result."
      }
    ],
    "steps": [
      {
        "title": "Open Transcode Video in Process",
        "text": "Open Process, then tap Transcode Video."
      },
      {
        "title": "Choose the video to process",
        "text": "In Select Video, tap Choose from Photos or Choose from Files and select your video. You can import a video even when the download list is empty."
      },
      {
        "title": "Choose format, quality, and resolution",
        "text": "Inspect Output Format, Output Quality, and Resolution, then decide whether to retain sound.",
        "sections": [
          {
            "title": "Output Format: MP4, MOV, and M4V",
            "text": "These are file containers. Start with MP4 for everyday sharing, or use MOV or M4V if the receiving software requires it. The extension and the codec inside it are different concepts."
          },
          {
            "title": "Output Quality: detail versus size",
            "text": "High Quality favors detail, Standard balances the choices, and Smaller Size favors a smaller file. Content and other settings still affect the result, so do not rely on the preset name alone."
          },
          {
            "title": "Resolution and Sound",
            "text": "Options include Original, 720p, 480p, and 1080p*. Original keeps the source dimensions; this example is 640×338. Sound offers Keep Sound and Mute. Reducing resolution may reduce size; increasing it cannot recover missing detail."
          }
        ]
      },
      {
        "title": "Understand codec and bitrate",
        "text": "Scroll to Codec, Bitrate, and the output summary. Confirm it matches your choices before tapping Start Processing.",
        "sections": [
          {
            "title": "Codec: H.264 and HEVC*",
            "text": "H.264 is a starting option. HEVC requires VIP and can offer efficient compression, but check support in the app or device that will play the file. MP4 can contain different codecs."
          },
          {
            "title": "Bitrate: Auto, Target Size*, and Custom Bitrate*",
            "text": "Auto lets the tool choose. Target Size and Custom Bitrate require VIP. Under comparable conditions, a lower bitrate often makes a smaller file but can introduce more visible compression artifacts."
          },
          {
            "title": "VIP options in the illustrated version",
            "text": "The page lists HEVC, 1080p, original high resolution, target size, and custom bitrate as VIP. This example exports low-resolution source media using Original, Standard, Keep Sound, and Auto."
          }
        ]
      },
      {
        "title": "Check the result, then save or keep processing",
        "text": "Preview the exported video and compare its size and quality with the original. Check text edges, dark areas, and fast movement before saving.",
        "sections": [
          {
            "title": "Preview and save",
            "text": "Play the result and check picture, duration, and sound, then tap Save to Photos. The first save may require permission to add photos and videos. After the success message, check the file in Photos."
          },
          {
            "title": "What the other buttons do",
            "text": "Keep Processing takes the result into tool selection. Share File opens sharing options. Done closes the result page; it does not save to Photos."
          }
        ]
      }
    ],
    "exampleNote": "Screenshots use the English app interface on an iPhone 17 Pro Max simulator running iOS 26.0. Example settings and access limits refer to that version. The example exported a roughly six-second MP4/H.264 video using Original resolution, Standard quality, Keep Sound, and Auto bitrate."
  },
  "trim-video-iphone": {
    "title": "How to trim a video’s duration on iPhone and iPad",
    "description": "Keep just the part of a video you need. Set the start and end points in Trim Video, then save the clip or use it in another tool.",
    "intro": "Keep just the part of a video you need. Set the start and end points in Trim Video, then save the clip or use it in another tool.",
    "tips": [
      {
        "title": "This trims time, not the canvas",
        "text": "Trim Video chooses which moments to retain. Use Resize / Canvas to adjust aspect ratio or canvas layout."
      }
    ],
    "faq": [
      {
        "question": "How do I keep a segment from the middle?",
        "answer": "Move both handles, check the displayed start and end times, then preview and export."
      },
      {
        "question": "Why does Even Split open VIP?",
        "answer": "Even Split requires VIP. Use Select Segment to keep one time range."
      }
    ],
    "steps": [
      {
        "title": "Open Trim Video in Process",
        "text": "Open Process, then tap Trim Video."
      },
      {
        "title": "Choose the video to process",
        "text": "In Select Video, tap Choose from Photos or Choose from Files and select your video. You can import a video even when the download list is empty."
      },
      {
        "title": "Choose the trim mode and time range",
        "text": "Select Segment under Trim Mode, then move the two Trim Range handles.",
        "sections": [
          {
            "title": "Select Segment exports the chosen range",
            "text": "The left handle sets the start and the right sets the end. Times and selected duration appear above, with the export range repeated below. This example keeps 00:00–00:06."
          },
          {
            "title": "The preview duration is not the trim range",
            "text": "The preview card shows the original video duration. Trim Range identifies what will be retained. Check that you have not cut off the start of an action or the final words."
          },
          {
            "title": "Even Split* divides the whole video",
            "text": "Even Split divides the full video into equal pieces and exports them together. It requires VIP. Use Select Segment to keep a single range."
          }
        ]
      },
      {
        "title": "Check the result, then save or keep processing",
        "text": "Tap Start Processing, then play the exported clip to check its start and end. Save it or use Keep Processing to open it in another tool.",
        "sections": [
          {
            "title": "Preview and save",
            "text": "Play the result and check picture, duration, and sound, then tap Save to Photos. The first save may require permission to add photos and videos. After the success message, check the file in Photos."
          },
          {
            "title": "What the other buttons do",
            "text": "Keep Processing takes the result into tool selection. Share File opens sharing options. Done closes the result page; it does not save to Photos."
          }
        ]
      }
    ],
    "exampleNote": "Screenshots use the English app interface on an iPhone 17 Pro Max simulator running iOS 26.0. Example settings and access limits refer to that version. Select Segment exported the opening six seconds of a roughly 2:26 video. Even Split opened the VIP page; its export was not tested."
  },
  "join-videos-iphone": {
    "title": "How to join several videos on iPhone and iPad",
    "description": "Use Stitch Videos to combine travel clips, event footage, or recorded explanations in sequence. Choose the opening video, add the remaining clips, and arrange their order.",
    "intro": "Use Stitch Videos to combine travel clips, event footage, or recorded explanations in sequence. Choose the opening video, add the remaining clips, and arrange their order.",
    "tips": [
      {
        "title": "The sources have different orientations or dimensions",
        "text": "This stitching page has no separate canvas, crop, or padding settings. Use Resize / Canvas or an appropriate tool to prepare sources when aspect ratio matters, then stitch and inspect the output."
      },
      {
        "title": "Avoid leaving an already arranged setup",
        "text": "The magic-wand control opens Quick Edit for the main video. Returning to Stitch Videos through it can reset the appended list. Start processing directly after arranging clips, or recheck the appended list after switching tools."
      }
    ],
    "faq": [
      {
        "question": "Why does 2 clips added produce three clips?",
        "answer": "The count excludes the main opening video: one main clip plus two appended clips is three."
      },
      {
        "question": "Can I move an added clip before the main video?",
        "answer": "The arrows only reorder the appended list, and its first up arrow is disabled. Reselect the main video to change the opening."
      },
      {
        "question": "Can I set transitions, background music, or output quality here?",
        "answer": "This stitching page does not offer those options. It previews the main video, adds clips, and changes their appended order. Use the corresponding tools for other effects."
      },
      {
        "question": "Why is the video missing from Photos after Done?",
        "answer": "Done only closes the result. Use Save to Photos separately and confirm the success message and permissions."
      }
    ],
    "steps": [
      {
        "title": "Open Stitch Videos in Process",
        "text": "Open Process, then tap Stitch Videos."
      },
      {
        "title": "Choose and preview the main video",
        "text": "In Select Video, use Choose from Photos to select the first clip. This main video will be the opening of the result. Check the source when the settings page appears.",
        "sections": [
          {
            "title": "Preview, filename, and timeline",
            "text": "Play the main video with the center button. Its filename, current position, and duration help identify the correct version. The example shows 02:26, which is the main video’s duration, not the joined total."
          },
          {
            "title": "What does 640×338 mean?",
            "text": "It is the current source’s pixel dimensions, rather than an output-size selector. This stitching page shows no independent resolution, frame-rate, or quality settings."
          },
          {
            "title": "Why does it show 0 clips added?",
            "text": "The count includes only clips appended with Add Video, excluding the main video above. Zero means none have been appended yet. Add at least one more to join videos."
          }
        ]
      },
      {
        "title": "Add the following clips",
        "text": "Tap Add Video under Processing Options and choose a source in Select Videos to Stitch. This example continues with Choose from Photos.",
        "sections": [
          {
            "title": "Choose among three sources",
            "text": "Choose from Downloads uses the app’s downloaded videos. Choose from Photos uses the system library. Choose from Files opens the file picker. Photos videos do not need to be downloaded again to be joined."
          },
          {
            "title": "Select multiple Photos videos and confirm",
            "text": "Selected thumbnails show sequence numbers. Tap the blue checkmark at the upper right to import. Use Add Video again if needed. Check the list count afterward to avoid adding the main video twice."
          }
        ]
      },
      {
        "title": "Check counts and reorder the added clips",
        "text": "The added count excludes the opening video: 2 clips added means three clips in total. The appended list starts with Clip 2 and plays from top to bottom after the main video.",
        "sections": [
          {
            "title": "Up and down arrows reorder appended clips",
            "text": "Use the up and down arrows to reorder appended clips. The first cannot move farther up and the last cannot move farther down. Both arrows are disabled when there is only one appended clip."
          },
          {
            "title": "The main video stays at the beginning",
            "text": "The main video is not part of the appended sorting list. To change the opening clip, go back and choose a different main video, then add the following clips."
          },
          {
            "title": "Thumbnails, duration, and removal",
            "text": "Use each row’s thumbnail, filename, and duration to identify it. The red trash icon removes that appended clip. Check order and duplicates. This example runs main video 02:26 → Clip 2 05:11 → Clip 3 04:10."
          }
        ]
      },
      {
        "title": "Start stitching and follow progress",
        "text": "Tap Start Processing when the clips are ready. The dialog shows Processing video and a percentage. Wait for the result page.",
        "sections": [
          {
            "title": "Completion notifications and background processing",
            "text": "Longer jobs offer Notify me when complete. Enable it if needed and respond to system notification prompts. The dialog says you can switch to the background and the app will try to continue; it does not guarantee iOS will let it run indefinitely."
          },
          {
            "title": "Cancel stops processing",
            "text": "Cancel stops the current job, rather than merely hiding the progress window. Keep the job running if you still need the output."
          }
        ]
      },
      {
        "title": "Preview and save the joined video",
        "text": "Preview the joined video and check the order of the clips. Use the output’s duration to check the total, since the input list rounds each clip’s duration to whole seconds.",
        "sections": [
          {
            "title": "What to check before saving",
            "text": "Play the beginning, ending, and joins to check sequence, aspect ratio, and sound transitions. For this example, inspect around 02:26 and 07:37. Watch or listen through before deciding to keep the result."
          },
          {
            "title": "Save to Photos",
            "text": "Tap Save to Photos and allow access if prompted. Wait for Saved to Photos, then open Photos to view the finished video."
          },
          {
            "title": "Keep processing, share, or finish",
            "text": "Keep Processing opens further processing. Share File opens file sharing. Done closes the result. Save to Photos is the action that retains a system-library copy; Done is not a save button."
          }
        ]
      }
    ],
    "exampleNote": "Screenshots use the English app interface on an iPhone 17 Pro Max simulator running iOS 26.0. Example settings and access limits refer to that version. The example joined three clips, reordered the appended clips, played the 11:46 result, and received a Photos save confirmation. Returning through Quick Edit reset the appended list in this version."
  },
  "interleave-videos-iphone": {
    "title": "How to interleave video segments on iPhone and iPad",
    "description": "Use Interleave to alternate segments from different videos. Add your sources, choose how to divide them, and set the starting order and audio transitions.",
    "intro": "Use Interleave to alternate segments from different videos. Add your sources, choose how to divide them, and set the starting order and audio transitions.",
    "tips": [
      {
        "title": "The switching rhythm is uneven",
        "text": "Total Segments does not guarantee equally long cuts from every source. The example sources have different lengths, and the interface shows different per-segment durations."
      }
    ],
    "faq": [
      {
        "question": "How is it different from Stitch Videos?",
        "answer": "Stitch Videos joins complete clips in sequence. Interleave alternates segments from different sources."
      },
      {
        "question": "Why can the default Total Segments work despite its star?",
        "answer": "Up to five total segments are free. Check the selected value and the access notes together; a star on the control does not mean every value requires VIP."
      }
    ],
    "steps": [
      {
        "title": "Open Interleave in Process",
        "text": "Open Process, then tap Interleave."
      },
      {
        "title": "Choose the video to process",
        "text": "In Select Video, tap Choose from Photos or Choose from Files and select your video. You can import a video even when the download list is empty."
      },
      {
        "title": "Add videos A and B",
        "text": "The main source appears as A Current Video. Tap Add Video and choose B from downloads, Photos, or Files. In Photos, select the video and confirm with the top-right checkmark.",
        "sections": [
          {
            "title": "Added count versus total count",
            "text": "1 added, 2 videos total means one additional video plus the main source. A is the main video and its lock control cannot be used. Sorting and removal controls beside additional videos depend on their positions and counts."
          },
          {
            "title": "The example sources",
            "text": "A is about six seconds; B is about 2:26. Large differences in source length can produce very different segment durations. Trim sources to similar lengths first if you want more even switching."
          }
        ]
      },
      {
        "title": "Set the interleaving rules",
        "text": "The example uses Total Segments, 5 segments, Start with A, and the default 50 ms audio fade. Read the distribution explanation at the bottom.",
        "sections": [
          {
            "title": "Total Segments versus Fixed Duration*",
            "text": "With five total segments, A receives three segments of about two seconds each; B receives two of about 1:13 each. They alternate. Fixed Duration is a VIP option for time-based splitting."
          },
          {
            "title": "Start Order",
            "text": "Start with A begins with the main source; Start with B begins with B. Reread the distribution summary after changing it."
          },
          {
            "title": "Audio Fade",
            "text": "The default fade of about 50 ms softens each audio cut. The page describes free support for two videos, up to five segments, and the default fade. More sources, fixed duration, and custom fades require VIP."
          }
        ]
      },
      {
        "title": "Check the result, then save or keep processing",
        "text": "Tap Start Processing, then play through the transitions. Check which source comes first, the segment order, and the sound at each cut.",
        "sections": [
          {
            "title": "Preview and save",
            "text": "Play the result and check picture, duration, and sound, then tap Save to Photos. The first save may require permission to add photos and videos. After the success message, check the file in Photos."
          },
          {
            "title": "What the other buttons do",
            "text": "Keep Processing takes the result into tool selection. Share File opens sharing options. Done closes the result page; it does not save to Photos."
          }
        ]
      }
    ],
    "exampleNote": "Screenshots use the English app interface on an iPhone 17 Pro Max simulator running iOS 26.0. Example settings and access limits refer to that version. The A/B example used five total segments, Start with A, and the default 50 ms audio fade. The result displayed 02:31."
  },
  "segment-grid-video-iphone": {
    "title": "How to turn a video into a segment grid on iPhone and iPad",
    "description": "Split one video into time segments that play together in a grid. Choose the rows and columns, then set the sound and output dimensions.",
    "intro": "Split one video into time segments that play together in a grid. Choose the rows and columns, then set the sound and output dimensions.",
    "tips": [
      {
        "title": "The tiles are too small to see clearly",
        "text": "At a fixed output size, more tiles leave fewer pixels for each. Reduce the rows and columns or choose appropriate final dimensions."
      }
    ],
    "faq": [
      {
        "question": "Does this combine several separate video files?",
        "answer": "This tool uses different time segments of one video. It does not show the additional-source list used by Stitch Videos."
      },
      {
        "question": "Why is the default output silent?",
        "answer": "Mute is selected by default to avoid overlapping audio. Choose First Segment Audio if appropriate."
      }
    ],
    "steps": [
      {
        "title": "Open Segment Grid in Process",
        "text": "Open Process, then tap Segment Grid."
      },
      {
        "title": "Choose the video to process",
        "text": "In Select Video, tap Choose from Photos or Choose from Files and select your video. You can import a video even when the download list is empty."
      },
      {
        "title": "Set rows, columns, and sound",
        "text": "After importing one video, inspect Columns, Rows, and Sound. The example uses two columns, two rows, and default mute.",
        "sections": [
          {
            "title": "Rows × columns determines the tile count",
            "text": "2×2 creates four tiles and divides the source into four equal time segments. They play simultaneously, so the result is shorter. The displayed estimate may differ from the actual output."
          },
          {
            "title": "Mute and First Segment Audio",
            "text": "Mute avoids overlapping audio. First Segment Audio uses the first segment’s sound; check whether it suits the whole grid."
          },
          {
            "title": "Free settings and starred options",
            "text": "Start with the free 2×2 grid and Original Video Size. Three or more rows or columns, square output, and preserving each tile’s original size require VIP."
          }
        ]
      },
      {
        "title": "Choose the output dimensions",
        "text": "Open Export Size. This controls the whole output canvas, not the dimensions of one tile.",
        "sections": [
          {
            "title": "Original Video Size versus original size per tile",
            "text": "Original Video Size is 640×338 here, shared by all four tiles. Keep Each Tile Original Size shows 1280×676*. It preserves more pixels per tile and may substantially increase file size and processing time, subject to system limits."
          },
          {
            "title": "Landscape, portrait, and square",
            "text": "The list also offers 1280×720, 1920×1080, 1080×1920, and 1080×1080*. Choose for your intended display and check each tile for clarity and cropping."
          }
        ]
      },
      {
        "title": "Check the result, then save or keep processing",
        "text": "Tap Start Processing, then preview the grid. Check that each tile shows the intended segment and that the output size and sound suit your use.",
        "sections": [
          {
            "title": "Preview and save",
            "text": "Play the result and check picture, duration, and sound, then tap Save to Photos. The first save may require permission to add photos and videos. After the success message, check the file in Photos."
          },
          {
            "title": "What the other buttons do",
            "text": "Keep Processing takes the result into tool selection. Share File opens sharing options. Done closes the result page; it does not save to Photos."
          }
        ]
      }
    ],
    "exampleNote": "Screenshots use the English app interface on an iPhone 17 Pro Max simulator running iOS 26.0. Example settings and access limits refer to that version. The example exported a muted 2×2 grid at Original Video Size. For the roughly six-second input, the estimate was about two seconds and the whole-second result label read about one second; neither is a frame-accurate measurement."
  },
  "resize-video-iphone": {
    "title": "How to change video aspect ratio and canvas on iPhone and iPad",
    "description": "Change a video’s aspect ratio with Resize / Canvas. Choose a canvas shape, then use Fit to keep the whole picture or Fill to cover the canvas.",
    "intro": "Change a video’s aspect ratio with Resize / Canvas. Choose a canvas shape, then use Fit to keep the whole picture or Fill to cover the canvas.",
    "tips": [
      {
        "title": "Decide whether edge cropping is acceptable",
        "text": "Try Fit first when text or important subjects are near the edges. Try Fill for full coverage, and inspect important frames."
      }
    ],
    "faq": [
      {
        "question": "Does changing the ratio stretch the picture?",
        "answer": "Fit preserves proportions and adds background where needed. Preview other layouts before exporting to check for cropping or stretching."
      },
      {
        "question": "How do I change pixel resolution?",
        "answer": "This tool focuses on canvas ratio and layout. See the Resolution choices in Transcode Video for size and format conversion."
      }
    ],
    "steps": [
      {
        "title": "Open Resize / Canvas in Process",
        "text": "Open Process, then tap Resize / Canvas."
      },
      {
        "title": "Choose the video to process",
        "text": "In Select Video, tap Choose from Photos or Choose from Files and select your video. You can import a video even when the download list is empty."
      },
      {
        "title": "Choose the canvas ratio",
        "text": "Select Canvas Ratio, then check Layout and background color. The example uses 1:1, Fit, and black.",
        "sections": [
          {
            "title": "Original, 16:9, 9:16, 1:1, 4:3, and 3:4",
            "text": "Original keeps the source ratio. 16:9 is a common landscape ratio, 9:16 portrait, and 1:1 square. A ratio describes width relative to height, rather than a pixel resolution such as 1080p."
          },
          {
            "title": "Background Color*",
            "text": "#000000 is black. When Fit places a differently shaped picture inside the canvas, the remaining area shows this background. Changing the color requires VIP."
          }
        ]
      },
      {
        "title": "Choose Fit, Fill, or another layout",
        "text": "Open Layout, select a mode, then return to confirm the summary and tap Start Processing.",
        "sections": [
          {
            "title": "Fit keeps the whole picture",
            "text": "Fit scales the entire picture proportionally, potentially leaving background areas. Use it when subjects, subtitles, or edge details must remain visible."
          },
          {
            "title": "Fill covers the canvas",
            "text": "Fill scales proportionally to cover the canvas and may crop edges when the ratios differ. Check subtitles, heads, and side edges in the preview."
          },
          {
            "title": "Starred blur and multi-panel layouts",
            "text": "Blur 1:1*, Double 1:1*, Symmetric Double 1:1*, Triple 1:1*, and Triple Blur 1:1* are VIP blur-background or multi-panel layouts."
          }
        ]
      },
      {
        "title": "Check the result, then save or keep processing",
        "text": "Preview the output and check the canvas shape, edges, and background. With Fit, make sure the full picture remains visible before saving.",
        "sections": [
          {
            "title": "Preview and save",
            "text": "Play the result and check picture, duration, and sound, then tap Save to Photos. The first save may require permission to add photos and videos. After the success message, check the file in Photos."
          },
          {
            "title": "What the other buttons do",
            "text": "Keep Processing takes the result into tool selection. Share File opens sharing options. Done closes the result page; it does not save to Photos."
          }
        ]
      }
    ],
    "exampleNote": "Screenshots use the English app interface on an iPhone 17 Pro Max simulator running iOS 26.0. Example settings and access limits refer to that version. The example exported a 1:1 canvas using Fit and a black background. Paid blur and multi-panel modes were not export-tested."
  },
  "rotate-video-iphone": {
    "title": "How to rotate videos on iPhone and iPad",
    "description": "Fix a sideways or upside-down video with Rotate Video. Choose a rotation angle, check the preview, and save the corrected video.",
    "intro": "Fix a sideways or upside-down video with Rotate Video. Choose a rotation angle, check the preview, and save the corrected video.",
    "tips": [
      {
        "title": "Rotation and mirroring differ",
        "text": "Rotation changes orientation; mirroring swaps left and right or top and bottom. Use Mirror Video for reversed selfie text."
      }
    ],
    "faq": [
      {
        "question": "Which option fixes an upside-down video?",
        "answer": "Choose 180 and confirm the subject’s orientation in preview."
      },
      {
        "question": "Does rotation change duration?",
        "answer": "This operation changes direction. The roughly six-second input in this example remains about six seconds long."
      }
    ],
    "steps": [
      {
        "title": "Open Rotate Video in Process",
        "text": "Open Process, then tap Rotate Video."
      },
      {
        "title": "Choose the video to process",
        "text": "In Select Video, tap Choose from Photos or Choose from Files and select your video. You can import a video even when the download list is empty."
      },
      {
        "title": "Choose the rotation direction",
        "text": "Select an angle under Rotation and check the preview. The example uses Rotate Right 90.",
        "sections": [
          {
            "title": "Right 90°, 180°, and left 90°",
            "text": "Rotate Right 90 turns clockwise by a quarter turn. 180 turns upside down. Rotate Left 90 turns counterclockwise by a quarter turn. A 90-degree turn swaps landscape and portrait orientation."
          },
          {
            "title": "Black bars in the preview",
            "text": "A portrait picture inside a landscape preview card may show bars. This does not necessarily mean those same bars are encoded into the file. Check the actual exported dimensions and appearance."
          }
        ]
      },
      {
        "title": "Check the result, then save or keep processing",
        "text": "Tap Start Processing, then check the exported video’s orientation. Confirm that text and subjects appear the right way up before saving.",
        "sections": [
          {
            "title": "Preview and save",
            "text": "Play the result and check picture, duration, and sound, then tap Save to Photos. The first save may require permission to add photos and videos. After the success message, check the file in Photos."
          },
          {
            "title": "What the other buttons do",
            "text": "Keep Processing takes the result into tool selection. Share File opens sharing options. Done closes the result page; it does not save to Photos."
          }
        ]
      }
    ],
    "exampleNote": "Screenshots use the English app interface on an iPhone 17 Pro Max simulator running iOS 26.0. Example settings and access limits refer to that version. The example rotated a roughly six-second clip 90 degrees right; the change appeared in the preview and export."
  },
  "mirror-video-iphone": {
    "title": "How to mirror or flip videos on iPhone and iPad",
    "description": "Flip a video horizontally or vertically with Mirror Video. Preview the effect before exporting, especially when the picture contains text or logos.",
    "intro": "Flip a video horizontally or vertically with Mirror Video. Preview the effect before exporting, especially when the picture contains text or logos.",
    "tips": [
      {
        "title": "Text may reverse as well",
        "text": "Mirroring affects the entire picture. Check whether reversed text is acceptable for your clip."
      }
    ],
    "faq": [
      {
        "question": "Which mode swaps left and right?",
        "answer": "Try H Flip and confirm the positions of text or landmarks."
      },
      {
        "question": "Does mirroring play the action backward?",
        "answer": "No. Use Reverse Video to reverse time order."
      }
    ],
    "steps": [
      {
        "title": "Open Mirror Video in Process",
        "text": "Open Process, then tap Mirror Video."
      },
      {
        "title": "Choose the video to process",
        "text": "In Select Video, tap Choose from Photos or Choose from Files and select your video. You can import a video even when the download list is empty."
      },
      {
        "title": "Preview the mirror effect",
        "text": "After importing, Mirror Mode shows the selected mode. This example uses H Flip. Inspect left-right details in the preview before opening the mode list."
      },
      {
        "title": "Distinguish flips from symmetry modes",
        "text": "Open Mirror Mode to see the options, choose one, return, and tap Start Processing.",
        "sections": [
          {
            "title": "H Flip, V Flip, and 180",
            "text": "H Flip swaps left and right. V Flip swaps top and bottom. 180 turns the picture half a turn. Check text or a clear landmark to distinguish the effects."
          },
          {
            "title": "Side Sym*, Top Sym*, and Center Sym*",
            "text": "These VIP modes create symmetry effects rather than simply flipping the full picture. Check the preview when choosing a mode."
          }
        ]
      },
      {
        "title": "Check the result, then save or keep processing",
        "text": "Preview the mirrored video and check left-right or top-bottom details. Text, logos, and embedded subtitles flip with the rest of the picture.",
        "sections": [
          {
            "title": "Preview and save",
            "text": "Play the result and check picture, duration, and sound, then tap Save to Photos. The first save may require permission to add photos and videos. After the success message, check the file in Photos."
          },
          {
            "title": "What the other buttons do",
            "text": "Keep Processing takes the result into tool selection. Share File opens sharing options. Done closes the result page; it does not save to Photos."
          }
        ]
      }
    ],
    "exampleNote": "Screenshots use the English app interface on an iPhone 17 Pro Max simulator running iOS 26.0. Example settings and access limits refer to that version. The example exported H Flip. Paid symmetry entries were inspected, but their exports were not tested."
  },
  "reverse-video-iphone": {
    "title": "How to reverse a video on iPhone and iPad",
    "description": "Make a video play backward with Reverse Video. Choose whether to mute, keep, or reverse the audio, then preview the result.",
    "intro": "Make a video play backward with Reverse Video. Choose whether to mute, keep, or reverse the audio, then preview the result.",
    "tips": [
      {
        "title": "Trim first, then reverse",
        "text": "Keep the target action with Trim Video before reversing. This makes timing easier to assess and reduces the amount to process."
      }
    ],
    "faq": [
      {
        "question": "Is reversing the same as rotating 180 degrees?",
        "answer": "No. Reverse changes time order; Rotate Video changes picture orientation."
      },
      {
        "question": "Why does the reversed result have no sound?",
        "answer": "The example uses default Mute. Select a sound mode if needed and check the exported audio."
      }
    ],
    "steps": [
      {
        "title": "Open Reverse Video in Process",
        "text": "Open Process, then tap Reverse Video."
      },
      {
        "title": "Choose the video to process",
        "text": "In Select Video, tap Choose from Photos or Choose from Files and select your video. You can import a video even when the download list is empty."
      },
      {
        "title": "Choose how to handle sound",
        "text": "Sound offers Mute, Keep Audio, and Reverse Audio. This example chooses Mute, then Start Processing.",
        "sections": [
          {
            "title": "Mute removes the sound",
            "text": "Use it when only the backward motion is needed, or when reversed dialogue and ambient sound would be distracting."
          },
          {
            "title": "Keep Audio versus Reverse Audio",
            "text": "Keep Audio preserves the original audio order; Reverse Audio reverses the sound. Choose the effect you want and listen to the exported dialogue or music."
          }
        ]
      },
      {
        "title": "Check the result, then save or keep processing",
        "text": "Play the result to confirm the action runs backward. Check the beginning, ending, and selected sound mode before saving.",
        "sections": [
          {
            "title": "Preview and save",
            "text": "Play the result and check picture, duration, and sound, then tap Save to Photos. The first save may require permission to add photos and videos. After the success message, check the file in Photos."
          },
          {
            "title": "What the other buttons do",
            "text": "Keep Processing takes the result into tool selection. Share File opens sharing options. Done closes the result page; it does not save to Photos."
          }
        ]
      }
    ],
    "exampleNote": "Screenshots use the English app interface on an iPhone 17 Pro Max simulator running iOS 26.0. Example settings and access limits refer to that version. Only Mute mode was tested. The result began at the end of the original clip; Keep Audio and Reverse Audio were not verified."
  },
  "change-video-speed-iphone": {
    "title": "How to speed up or slow down videos on iPhone and iPad",
    "description": "Speed up or slow down a clip with Change Speed. Choose a multiplier and check how it affects duration and sound before saving.",
    "intro": "Speed up or slow down a clip with Change Speed. Choose a multiplier and check how it affects duration and sound before saving.",
    "tips": [
      {
        "title": "Slower does not always mean smoother",
        "text": "Slow motion can reveal low source frame rate or motion blur. Compare a short sample rather than judging only by the multiplier."
      }
    ],
    "faq": [
      {
        "question": "How long is a video at 2x?",
        "answer": "Usually about half its original duration. Use the final output duration as the reference."
      },
      {
        "question": "Why is there no audio at high speed?",
        "answer": "The illustrated page explicitly states that speeds above 4x remove audio automatically."
      }
    ],
    "steps": [
      {
        "title": "Open Change Speed in Process",
        "text": "Open Process, then tap Change Speed."
      },
      {
        "title": "Choose the video to process",
        "text": "In Select Video, tap Choose from Photos or Choose from Files and select your video. You can import a video even when the download list is empty."
      },
      {
        "title": "Set speed and pitch behavior",
        "text": "Drag Speed and read the multiplier at the right and Estimated processed duration below. Confirm, then tap Start Processing.",
        "sections": [
          {
            "title": "Multiplier and duration",
            "text": "1x is original speed, above 1 is faster, and below 1 is slower. Duration is approximately the source duration divided by the multiplier: six seconds / 1.5 is about four seconds. Check the actual result."
          },
          {
            "title": "Preserve Pitch*",
            "text": "This VIP option retains pitch while changing speed. Without it, pitch may change. Listen carefully to dialogue or singing after export."
          },
          {
            "title": "Speed limits and fast-playback audio",
            "text": "The page lists 0.5x–2x as free. The wider 0.1x–32x range and pitch preservation need VIP. Speeds above 4x automatically remove audio."
          }
        ]
      },
      {
        "title": "Check the result, then save or keep processing",
        "text": "Play the output and check its pace, duration, and sound. If the result feels too fast or slow, adjust the multiplier and export again.",
        "sections": [
          {
            "title": "Preview and save",
            "text": "Play the result and check picture, duration, and sound, then tap Save to Photos. The first save may require permission to add photos and videos. After the success message, check the file in Photos."
          },
          {
            "title": "What the other buttons do",
            "text": "Keep Processing takes the result into tool selection. Share File opens sharing options. Done closes the result page; it does not save to Photos."
          }
        ]
      }
    ],
    "exampleNote": "Screenshots use the English app interface on an iPhone 17 Pro Max simulator running iOS 26.0. Example settings and access limits refer to that version. The example used 1.50x with Preserve Pitch off, turning roughly six seconds into four seconds."
  },
  "edit-video-audio-iphone": {
    "title": "How to mute a video or change its volume on iPhone and iPad",
    "description": "Use Audio Editing to mute a video, adjust its volume, or replace its audio. Select a mode, check the settings, and listen to the result.",
    "intro": "Use Audio Editing to mute a video, adjust its volume, or replace its audio. Select a mode, check the settings, and listen to the result.",
    "tips": [
      {
        "title": "Audio is distorted or noisy",
        "text": "Check the original recording, then adjust moderately. Raising volume can amplify noise too. Keep the original for comparison."
      }
    ],
    "faq": [
      {
        "question": "Does this export an audio-only file?",
        "answer": "No. This tool edits sound within a video, and the example output remains a video. Use Extract Audio for an independent audio file."
      },
      {
        "question": "How can I confirm the chosen volume?",
        "answer": "Read the slider percentage and export history summary, then play the result."
      }
    ],
    "steps": [
      {
        "title": "Open Audio Editing in Process",
        "text": "Open Process, then tap Audio Editing."
      },
      {
        "title": "Choose the video to process",
        "text": "In Select Video, tap Choose from Photos or Choose from Files and select your video. You can import a video even when the download list is empty."
      },
      {
        "title": "Choose the audio processing mode",
        "text": "Select Mute, Volume, or Replace* under Processing Mode. Volume expands the level slider and fade switch.",
        "sections": [
          {
            "title": "Mute removes audio",
            "text": "Choose Mute when you only need the picture. Play the export to confirm sound was removed, rather than simply muting the player."
          },
          {
            "title": "Volume changes the audio level",
            "text": "Drag the volume slider and read the percentage beside it. 100% is the original level. Raising volume can also amplify noise, so listen to the export before saving."
          },
          {
            "title": "Replace* and Fade In/Out*",
            "text": "Replace changes the audio source; Fade In/Out fades sound at the ends. Both require VIP. For separate audio and video inputs, see Merge Audio and Video."
          }
        ]
      },
      {
        "title": "Check the result, then save or keep processing",
        "text": "Listen to the exported video and compare it with the original. To change loudness, make sure the slider percentage changes before exporting; 100% keeps the selected level at its original value.",
        "sections": [
          {
            "title": "Preview and save",
            "text": "Play the result and check picture, duration, and sound, then tap Save to Photos. The first save may require permission to add photos and videos. After the success message, check the file in Photos."
          },
          {
            "title": "What the other buttons do",
            "text": "Keep Processing takes the result into tool selection. Share File opens sharing options. Done closes the result page; it does not save to Photos."
          }
        ]
      }
    ],
    "exampleNote": "Screenshots use the English app interface on an iPhone 17 Pro Max simulator running iOS 26.0. Example settings and access limits refer to that version. The example exported at Volume 100%; it did not demonstrate a changed volume level. Replace and Fade In/Out were not executed."
  },
  "add-watermark-video-iphone": {
    "title": "How to add a text watermark to videos on iPhone and iPad",
    "description": "Add a text watermark with ClipDock on iPhone or iPad. Choose text, size, and position, then preview and save the video.",
    "intro": "Add a text watermark with Add Watermark. Enter your text and choose its size and position. The settings and result images use different wording and footage; see the example notes.",
    "tips": [
      {
        "title": "Preview before saving",
        "text": "Keep the watermark readable without hiding important content. Retain the original so that text, position, or style can be changed in another export."
      }
    ],
    "faq": [
      {
        "question": "Is an image watermark free?",
        "answer": "Image* is marked VIP in the shown version. This example demonstrates text."
      },
      {
        "question": "Why does the output have different wording from the settings?",
        "answer": "The settings use ClipDock Demo. The physical-device result uses Made by ClipDock and another video. Both illustrate the same text-watermark workflow."
      }
    ],
    "steps": [
      {
        "title": "Open Add Watermark in Process",
        "text": "Open Process, then tap Add Watermark."
      },
      {
        "title": "Choose the video to process",
        "text": "In Select Video, tap Choose from Photos or Choose from Files and select your video. You can import a video even when the download list is empty."
      },
      {
        "title": "Set the watermark text and size",
        "text": "Choose Text under Watermark Type, then enter and confirm the text in Text Content. This settings example uses ClipDock Demo. The preview shows its position and approximate appearance.",
        "sections": [
          {
            "title": "Text and Image*",
            "text": "Text adds a text watermark. Image is the VIP image-watermark option."
          },
          {
            "title": "Text Size",
            "text": "The slider’s size percentage is 100% in this example. Check the preview to avoid covering the subject, subtitles, or important details."
          }
        ]
      },
      {
        "title": "Adjust position and appearance",
        "text": "Scroll to Watermark Position, color, background, stroke, and Opacity. Starred settings require VIP; seeing a default value does not mean it can be changed for free.",
        "sections": [
          {
            "title": "Watermark Position",
            "text": "Available positions include all four corners and center. The example uses bottom right. Choose a place clear of the subject and subtitles, checking landscape and portrait sources separately."
          },
          {
            "title": "Color, background, and stroke",
            "text": "Text Color changes the lettering; Show Background controls its backing; Text Stroke and Stroke Color control the outline. These entries are marked VIP. Check contrast across bright and dark scenes."
          },
          {
            "title": "Opacity*",
            "text": "The example shows 75%. Lower opacity makes the watermark fainter and potentially harder to read. Changing this parameter requires VIP."
          }
        ]
      },
      {
        "title": "Preview and save the watermarked output",
        "text": "Tap Start Processing, then preview the watermark on the exported video. Check its text, position, and readability across different scenes.",
        "sections": [
          {
            "title": "Check the watermark",
            "text": "Play the result and check legibility, position, and overlap with subjects or subtitles."
          },
          {
            "title": "Save to Photos or share",
            "text": "Tap Save to Photos and check Photos after the success message. Share File opens sharing options."
          },
          {
            "title": "Continue or finish",
            "text": "Keep Processing carries the result into further editing. Done closes the result page and does not save to Photos."
          }
        ]
      }
    ],
    "exampleNote": "Entry and settings images use an iPhone 17 Pro Max simulator; the result is from a physical iPhone. Settings show ClipDock Demo, while the result uses Made by ClipDock on different footage. Only text watermarking was configured; paid style changes were not tested."
  },
  "capture-video-frames-iphone": {
    "title": "How to capture video frames on iPhone and iPad",
    "description": "Save a frame from a video as an image with Video Capture. Choose a clear moment, preview the frame, and save or share it.",
    "intro": "Save a frame from a video as an image with Video Capture. Choose a clear moment, preview the frame, and save or share it.",
    "tips": [
      {
        "title": "The frame looks blurry",
        "text": "Try a moment with less motion and inspect the original quality. Frame capture cannot repair existing blur."
      }
    ],
    "faq": [
      {
        "question": "Can it capture several frames at once?",
        "answer": "Batch* captures multiple frames and requires VIP. Use Single to choose and export one frame."
      },
      {
        "question": "How is this different from a phone screenshot?",
        "answer": "Video Capture exports a video frame, here a 640×338 JPEG. A phone screenshot can also include playback controls and system UI."
      }
    ],
    "steps": [
      {
        "title": "Open Video Capture in Process",
        "text": "Open Process, then tap Video Capture."
      },
      {
        "title": "Choose the video to process",
        "text": "In Select Video, tap Choose from Photos or Choose from Files and select your video. You can import a video even when the download list is empty."
      },
      {
        "title": "Choose capture mode and time",
        "text": "Select Capture Mode after importing, then use Capture Time to choose the moment. The example uses Single at 00:00 without a timestamp.",
        "sections": [
          {
            "title": "Single exports one frame",
            "text": "Drag the time slider, inspect the preview, and tap Export Image on a clear frame. The image contains the video picture, rather than app controls or the phone frame."
          },
          {
            "title": "Batch*, Smart*, and Sheet*",
            "text": "Batch, Smart, and Sheet are VIP entries for batch capture, smart frame selection, and preview sheets. Open the relevant mode to see its settings."
          },
          {
            "title": "Add Timestamp",
            "text": "This adds a time marker. Leave it off for a clean image, or turn it on to identify the source moment and check its position and readability after export."
          }
        ]
      },
      {
        "title": "Preview and save the image",
        "text": "Tap Export Image to open Screenshot Preview. Check the frame, dimensions, and file size, then use Save to Photos or Share File. Done closes the preview.",
        "sections": [
          {
            "title": "Dimensions come from the video",
            "text": "The source is 640×338 and the exported image shows the same dimensions. A larger phone screen cannot add detail to the source frame."
          }
        ]
      }
    ],
    "exampleNote": "Screenshots use the English app interface on an iPhone 17 Pro Max simulator running iOS 26.0. Example settings and access limits refer to that version. Single-frame capture exported a 640×338 JPEG. Batch, Smart, and Sheet settings and outputs were not verified."
  },
  "extract-audio-iphone": {
    "title": "How to extract audio from a video on iPhone and iPad",
    "description": "Save a video’s sound as a separate file with Extract Audio. Choose a video from Photos or Files, then save or share the extracted audio.",
    "intro": "Save a video’s sound as a separate file with Extract Audio. Choose a video from Photos or Files, then save or share the extracted audio.",
    "tips": [
      {
        "title": "No sound in the extracted result?",
        "text": "Play the original and ensure the player is not muted. If there is no audio track, extraction cannot restore one. It also does not automatically improve the source sound quality."
      },
      {
        "title": "An empty download list is not a blocker",
        "text": "No downloaded videos available for processing only refers to the app’s downloaded library. This guide imports directly from the system library with Choose from Photos."
      }
    ],
    "faq": [
      {
        "question": "Can I choose MP3 or another format?",
        "answer": "This workflow produces M4A and does not offer a format menu. MP3 conversion is not covered here."
      },
      {
        "question": "Why is the output missing from Photos?",
        "answer": "It is an audio file, rather than a video or photo. Open Share File and use Save to Files or other file-sharing actions."
      },
      {
        "question": "Can I extract audio directly from a shared video URL?",
        "answer": "This guide processes an existing Photos video. If you only have a URL, first follow the relevant platform download guide, then extract audio from the saved file."
      }
    ],
    "steps": [
      {
        "title": "Open Extract Audio",
        "text": "Open Process, then tap Extract Audio."
      },
      {
        "title": "Choose a video from Photos",
        "text": "In Select Video, tap Choose from Photos, then select the source in the system picker. An empty download list does not prevent importing from Photos. Use Choose from Files if the source is stored in Files."
      },
      {
        "title": "Wait for audio extraction",
        "text": "Selecting a video starts extraction without an extra start button. When Processing Complete appears with an .m4a file, tap Share File to save or share it. Done closes the dialog."
      },
      {
        "title": "Open sharing and saving options",
        "text": "In Share File, choose Save to Files to keep a separate copy, or choose another app to share it. Open the saved audio and check its sound and duration."
      }
    ],
    "exampleNote": "Screenshots use the English app interface on an iPhone 17 Pro Max simulator running iOS 26.0. Example settings and access limits refer to that version. Selecting the source generated M4A directly without a format menu. The screenshots reach the share sheet, not a completed Files save. System sharing labels may follow the device language."
  },
  "change-video-md5-iphone": {
    "title": "How to use the video MD5 tool on iPhone and iPad",
    "description": "Use Change MD5 to create a processed copy of a video. If you need to confirm a different MD5 hash, compare the original and output files with a hash checker.",
    "intro": "Use Change MD5 to create a processed copy of a video. If you need to confirm a different MD5 hash, compare the original and output files with a hash checker.",
    "tips": [
      {
        "title": "Verify the actual files",
        "text": "A changed filename does not prove the MD5 changed. Calculate and compare input and output hashes if your use depends on the digest, rather than relying on the completion screen."
      }
    ],
    "faq": [
      {
        "question": "Does it improve quality or reduce file size?",
        "answer": "This guide does not describe MD5 changes as enhancement or compression. Use Transcode Video for compression."
      },
      {
        "question": "Does a changed digest change my rights to use the video?",
        "answer": "No. File-digest changes do not alter content rights."
      }
    ],
    "steps": [
      {
        "title": "Open Change MD5 in Process",
        "text": "Open Process, then tap Change MD5."
      },
      {
        "title": "Choose a video and wait for processing",
        "text": "Choose a video from Photos or another available source. Processing starts directly without a separate settings page.",
        "sections": [
          {
            "title": "There is no target-digest input",
            "text": "There is no field for entering a target MD5. This tool does not let you choose an arbitrary digest value."
          }
        ]
      },
      {
        "title": "Check the result, then save or keep processing",
        "text": "Check the new file, then save or share it. If your workflow requires a different MD5, calculate and compare the original and output hashes; a new filename alone is not confirmation.",
        "sections": [
          {
            "title": "Preview and save",
            "text": "Play the result and check picture, duration, and sound, then tap Save to Photos. The first save may require permission to add photos and videos. After the success message, check the file in Photos."
          },
          {
            "title": "What the other buttons do",
            "text": "Keep Processing takes the result into tool selection. Share File opens sharing options. Done closes the result page; it does not save to Photos."
          }
        ]
      }
    ],
    "exampleNote": "Screenshots use the English app interface on an iPhone 17 Pro Max simulator running iOS 26.0. Example settings and access limits refer to that version. The example reached the output page with a new _md5.mp4 file. Input and output MD5 hashes were not compared."
  },
  "merge-audio-video-iphone": {
    "title": "How to merge audio and video on iPhone and iPad",
    "description": "Combine a video with audio from another file using Merge Audio and Video. Select the video first, choose an audio source, then check the sound and sync after exporting.",
    "intro": "Combine a video with audio from another file using Merge Audio and Video. Select the video first, choose an audio source, then check the sound and sync after exporting.",
    "tips": [
      {
        "title": "Sound is out of sync or the ending is wrong",
        "text": "Check source lengths and start positions. This page has no timing-offset or looping controls. Prepare the source media separately if needed, then merge again."
      }
    ],
    "faq": [
      {
        "question": "Must I extract audio first?",
        "answer": "No. Choose Extract audio from Photos video to use sound directly from another video."
      },
      {
        "question": "Can I adjust the ratio of two audio tracks?",
        "answer": "This page does not provide mixing-ratio or multi-track controls. Prepare the audio separately if you need to mix tracks."
      }
    ],
    "steps": [
      {
        "title": "Open Merge Audio and Video in Process",
        "text": "Open Process, then tap Merge Audio and Video."
      },
      {
        "title": "Choose the video to process",
        "text": "In Select Video, tap Choose from Photos or Choose from Files and select your video. You can import a video even when the download list is empty."
      },
      {
        "title": "Choose the video source first",
        "text": "Import the video whose picture you want to retain. The card shows its preview, dimensions, and duration. Audio Source initially reads Not Selected.",
        "sections": [
          {
            "title": "Picture and audio sources are separate",
            "text": "Choose which file supplies the picture before selecting sound. A visible video preview does not mean the audio source has been set."
          }
        ]
      },
      {
        "title": "Choose the audio source",
        "text": "Tap Audio Source. The dialog offers Choose from Files and Extract audio from Photos video.",
        "sections": [
          {
            "title": "Choose from Files",
            "text": "Select a prepared audio file through the system file picker."
          },
          {
            "title": "Extract audio from Photos video",
            "text": "This takes sound from a Photos video. The example selects another video here without first exporting an independent audio file."
          }
        ]
      },
      {
        "title": "Confirm the source and merge",
        "text": "Audio Source now shows the selected filename. Check it and tap Start Processing.",
        "sections": [
          {
            "title": "No additional mixing controls are shown",
            "text": "Audio Source selects the sound input. This page has no separate mixing levels, timing offset, looping, or audio-trim controls. Prepare your sources first if you need those adjustments, and listen to the export."
          }
        ]
      },
      {
        "title": "Check the result, then save or keep processing",
        "text": "Play the merged video before saving. Check the audio source, initial sync, volume, and ending, especially when the source files have different durations.",
        "sections": [
          {
            "title": "Preview and save",
            "text": "Play the result and check picture, duration, and sound, then tap Save to Photos. The first save may require permission to add photos and videos. After the success message, check the file in Photos."
          },
          {
            "title": "What the other buttons do",
            "text": "Keep Processing takes the result into tool selection. Share File opens sharing options. Done closes the result page; it does not save to Photos."
          }
        ]
      }
    ],
    "exampleNote": "Screenshots use the English app interface on an iPhone 17 Pro Max simulator running iOS 26.0. Example settings and access limits refer to that version. The example generated a roughly six-second video using audio from another Photos video. The merged track was not listened through segment by segment."
  }
};
