import type { TutorialCopy } from "../../types";
export const copy: Record<string, TutorialCopy> = {
  "video-to-gif-iphone": {
    "title": "How to convert a video to GIF on iPhone and iPad",
    "description": "Convert a video to GIF in ClipDock. Choose the clip, frame rate, and width, check VIP limits, and save the animation on iPhone or iPad.",
    "intro": "Choose the action first, then balance smoothness, detail, and file size. This example converts a roughly six-second video and explains presets, frame rate, width, and size estimates. Screenshots come from an iPhone 17 Pro Max simulator running iOS 26.0. The app interface is in English.",
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
        "answer": "The page marks clips over 10 seconds, high frame rates, width 720, and presets as VIP features. This example uses free settings."
      }
    ],
    "steps": [
      {
        "title": "Open Video to GIF in Process",
        "text": "Tap Process in the bottom navigation. Find Video to GIF in row 1, in the left column, and tap the entry marked by the arrow."
      },
      {
        "title": "Choose the video to process",
        "text": "In Select Video, tap Choose from Photos and pick your source. Use Choose from Files for media stored in Files. An empty download list does not prevent importing from Photos. Some examples reuse a previously trimmed clip of about six seconds; you can prepare a short sample with Trim Video."
      },
      {
        "title": "Choose the clip and preset",
        "text": "Preview the imported video, then inspect Presets and Clip Range. This example uses Custom and retains about six seconds.",
        "sections": [
          {
            "title": "Custom and starred presets",
            "text": "Custom lets you choose settings yourself. Clear*, Smooth*, and Long* are presets aimed at detail, smoothness, and longer clips. A star marks VIP access. This test exports with Custom; the exact paid preset settings were not verified."
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
        "text": "Processing Complete appears with a file ending in .gif. Use Save to Photos to save the animation or Share File to share it. Done dismisses the dialog. Check the motion in an app that plays GIFs."
      }
    ]
  },
  "video-to-live-photo-iphone": {
    "title": "How to turn a video into a Live Photo on iPhone",
    "description": "Turn a video into a Live Photo with ClipDock. Set the motion range, cover frame, sound, and quality, then check the save result on iPhone.",
    "intro": "A Live Photo can retain a short moment with sound and a chosen still cover. This example uses a three-second range and Balanced quality, and reaches the app’s successful-save confirmation. Screenshots come from an iPhone 17 Pro Max simulator running iOS 26.0. The app interface is in English.",
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
        "answer": "The formats and sharing behavior differ. Live Photos can keep sound; GIFs are animations without audio."
      }
    ],
    "steps": [
      {
        "title": "Open Video to Live Photo in Process",
        "text": "Tap Process in the bottom navigation. Find Video to Live Photo in row 1, in the middle column, and tap the entry marked by the arrow."
      },
      {
        "title": "Choose the video to process",
        "text": "In Select Video, tap Choose from Photos and pick your source. Use Choose from Files for media stored in Files. An empty download list does not prevent importing from Photos. Some examples reuse a previously trimmed clip of about six seconds; you can prepare a short sample with Trim Video."
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
            "text": "Balanced is the tested choice. HD and Original are marked VIP. A quality setting cannot add details that were absent from the source."
          }
        ]
      },
      {
        "title": "Check the Live Photo in Photos",
        "text": "The app displays Live Photo saved to Photos, reporting a successful save. Tap OK, then open Photos and inspect the Live Photo badge and playback. The recorded test verified the app’s save confirmation; the screenshot does not replace a hands-on long-press playback check."
      }
    ]
  },
  "transcode-video-iphone": {
    "title": "How to convert and compress videos on iPhone and iPad",
    "description": "Convert or compress video with ClipDock on iPhone and iPad. Learn how format, codec, resolution, and bitrate affect your exported file.",
    "intro": "Transcode Video changes file format and compression settings. This guide explains format, codec, resolution, and bitrate using a completed MP4/H.264 export. Screenshots come from an iPhone 17 Pro Max simulator running iOS 26.0. The app interface is in English.",
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
        "text": "Tap Process in the bottom navigation. Find Transcode Video in row 1, in the right column, and tap the entry marked by the arrow."
      },
      {
        "title": "Choose the video to process",
        "text": "In Select Video, tap Choose from Photos and pick your source. Use Choose from Files for media stored in Files. An empty download list does not prevent importing from Photos. Some examples reuse a previously trimmed clip of about six seconds; you can prepare a short sample with Trim Video."
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
            "text": "This example uses H.264. HEVC is marked VIP and can offer efficient compression, but check receiving-device and software support. MP4 is not restricted to one codec."
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
        "text": "The output ends in _transcode.mp4 and is about six seconds long. Compare size and picture quality, especially text edges, dark areas, and fast movement.",
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
    ]
  },
  "trim-video-iphone": {
    "title": "How to trim a video’s duration on iPhone and iPad",
    "description": "Keep a selected time range with ClipDock’s Trim Video tool on iPhone and iPad. Set start and end points, preview the result, and save.",
    "intro": "Use Trim Video to keep a selected time range. This example trims the first six seconds from a roughly 2:26 source for use in GIFs, Live Photos, or short demos. Screenshots come from an iPhone 17 Pro Max simulator running iOS 26.0. The app interface is in English.",
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
        "answer": "It is starred and required VIP in the test. The Select Segment workflow successfully exported."
      }
    ],
    "steps": [
      {
        "title": "Open Trim Video in Process",
        "text": "Tap Process in the bottom navigation. Find Trim Video in row 2, in the left column, and tap the entry marked by the arrow."
      },
      {
        "title": "Choose the video to process",
        "text": "In Select Video, tap Choose from Photos and pick your source. Use Choose from Files for media stored in Files. An empty download list does not prevent importing from Photos. Some examples reuse a previously trimmed clip of about six seconds; you can prepare a short sample with Trim Video."
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
            "text": "The option describes splitting the full video into equal pieces and exporting them together. Opening it in the recorded test showed the VIP page; an even-split export was not tested. Use Select Segment for a normal trim."
          }
        ]
      },
      {
        "title": "Check the result, then save or keep processing",
        "text": "After Start Processing, the example produces _trim.mp4 with a displayed duration of about six seconds. Check both ends before saving. Keep Processing lets you reuse the short clip with another tool.",
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
    ]
  },
  "join-videos-iphone": {
    "title": "How to join several videos on iPhone and iPad",
    "description": "Use ClipDock to stitch Photos videos, distinguish the main clip from added clips, reorder them, and save the result. Includes six screenshots.",
    "intro": "Stitch Videos joins travel clips, event footage, or recorded explanations in sequence. This example combines three Photos videos and explains each setting. Screenshots come from an iPhone 17 Pro Max simulator running iOS 26.0 with English app controls; iPad users can follow the same entry.",
    "tips": [
      {
        "title": "The sources have different orientations or dimensions",
        "text": "This stitching page has no separate canvas, crop, or padding settings. Use Resize / Canvas or an appropriate tool to prepare sources when aspect ratio matters, then stitch and inspect the output."
      },
      {
        "title": "Avoid leaving an already arranged setup",
        "text": "The magic-wand control opens Quick Edit for the main video. In the test, returning to Stitch Videos through it reset the added count to zero. Start processing directly after arranging clips, or recheck the appended list after switching tools."
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
        "answer": "Those options are not shown on the tested stitching page. It previews the main video, adds clips, and changes their appended order. Use the corresponding tools for other effects."
      },
      {
        "question": "Why is the video missing from Photos after Done?",
        "answer": "Done only closes the result. Use Save to Photos separately and confirm the success message and permissions."
      }
    ],
    "steps": [
      {
        "title": "Open Stitch Videos in Process",
        "text": "Tap Process in ClipDock and find Stitch Videos in the middle of the second row. The orange arrow and outline mark the tool."
      },
      {
        "title": "Choose the main video and read its preview",
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
        "text": "2 clips added means two appended clips plus the main one, for three in total. The added list begins with Clip 2, which follows the main video. Additional clips play from top to bottom.",
        "sections": [
          {
            "title": "Up and down arrows reorder appended clips",
            "text": "Use the arrows to move a clip. The recorded test moves the 05:11 clip before the 04:10 clip. The top item cannot move farther up and the bottom cannot move farther down, so those arrows are disabled. Both directions are unavailable when there is only one appended clip."
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
        "text": "The result page displays the output, timeline, and thumbnails. This example produces _concat.mp4 with a displayed duration of 11:46, and playback was verified. Input durations are displayed in whole seconds; check the actual output for the total.",
        "sections": [
          {
            "title": "What to check before saving",
            "text": "Play the beginning, ending, and joins to check sequence, aspect ratio, and sound transitions. For this example, inspect around 02:26 and 07:37. Watch or listen through before deciding to keep the result."
          },
          {
            "title": "Save to Photos",
            "text": "Tap Save to Photos and grant permission to add media if asked. The recorded test received Saved to Photos. Check the finished video in Photos afterward."
          },
          {
            "title": "Keep processing, share, or finish",
            "text": "Keep Processing opens further processing. Share File opens file sharing. Done closes the result. Save to Photos is the action that retains a system-library copy; Done is not a save button."
          }
        ]
      }
    ]
  },
  "interleave-videos-iphone": {
    "title": "How to interleave video segments on iPhone and iPad",
    "description": "Alternate segments from two videos with ClipDock on iPhone and iPad. Set segment counts, starting order, and audio fades, then inspect the export.",
    "intro": "Interleave divides source videos and alternates between them. This A/B example explains segment counts, starting order, and short audio fades at cuts. Screenshots come from an iPhone 17 Pro Max simulator running iOS 26.0. The app interface is in English.",
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
        "answer": "The page says up to five segments are free, and the default five exported successfully. Read the selected value and the page’s access notes together."
      }
    ],
    "steps": [
      {
        "title": "Open Interleave in Process",
        "text": "Tap Process in the bottom navigation. Find Interleave in row 2, in the right column, and tap the entry marked by the arrow."
      },
      {
        "title": "Choose the video to process",
        "text": "In Select Video, tap Choose from Photos and pick your source. Use Choose from Files for media stored in Files. An empty download list does not prevent importing from Photos. Some examples reuse a previously trimmed clip of about six seconds; you can prepare a short sample with Trim Video."
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
        "text": "Start Processing produces _interleave.mp4 with a displayed duration of 02:31. Inspect every switch for source order and audio transitions; checking only the first frame is not enough.",
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
    ]
  },
  "segment-grid-video-iphone": {
    "title": "How to turn a video into a segment grid on iPhone and iPad",
    "description": "Split one video into a 2×2 grid with ClipDock. Set rows, columns, sound, and output dimensions on iPhone or iPad, with illustrated examples.",
    "intro": "Segment Grid splits one video into time segments and plays them together in a grid. This example divides about six seconds into four parts for a 2×2 layout. Screenshots come from an iPhone 17 Pro Max simulator running iOS 26.0. The app interface is in English.",
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
        "text": "Tap Process in the bottom navigation. Find Segment Grid in row 3, in the left column, and tap the entry marked by the arrow."
      },
      {
        "title": "Choose the video to process",
        "text": "In Select Video, tap Choose from Photos and pick your source. Use Choose from Files for media stored in Files. An empty download list does not prevent importing from Photos. Some examples reuse a previously trimmed clip of about six seconds; you can prepare a short sample with Trim Video."
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
            "text": "The page marks three or more rows or columns, square output, and retaining each tile’s original size as VIP. The default 2×2 with original-video-size output exported successfully."
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
        "text": "The output shows four time segments in a 2×2 grid. The input is about six seconds; the page estimates about two seconds, while the result’s whole-second display reads about one second. Play the output and do not treat rounded time labels as frame-accurate measurements.",
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
    ]
  },
  "resize-video-iphone": {
    "title": "How to change video aspect ratio and canvas on iPhone and iPad",
    "description": "Change video aspect ratio with ClipDock on iPhone and iPad. Compare Fit and Fill, choose a canvas, and check the resized result.",
    "intro": "Choose both a canvas ratio and how the picture fits inside it. This example uses 1:1 with Fit to preserve a landscape picture inside a square canvas. Screenshots come from an iPhone 17 Pro Max simulator running iOS 26.0. The app interface is in English.",
    "tips": [
      {
        "title": "Decide whether edge cropping is acceptable",
        "text": "Try Fit first when text or important subjects are near the edges. Try Fill for full coverage, and inspect important frames."
      }
    ],
    "faq": [
      {
        "question": "Does changing the ratio stretch the picture?",
        "answer": "The tested Fit layout preserves proportions and adds background. Inspect other modes in preview rather than assuming a canvas change always stretches the image."
      },
      {
        "question": "How do I change pixel resolution?",
        "answer": "This tool focuses on canvas ratio and layout. See the Resolution choices in Transcode Video for size and format conversion."
      }
    ],
    "steps": [
      {
        "title": "Open Resize / Canvas in Process",
        "text": "Tap Process in the bottom navigation. Find Resize / Canvas in row 3, in the middle column, and tap the entry marked by the arrow."
      },
      {
        "title": "Choose the video to process",
        "text": "In Select Video, tap Choose from Photos and pick your source. Use Choose from Files for media stored in Files. An empty download list does not prevent importing from Photos. Some examples reuse a previously trimmed clip of about six seconds; you can prepare a short sample with Trim Video."
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
            "text": "Fit scales the entire picture proportionally, potentially leaving background areas. Use it when subjects, subtitles, or edge details must remain visible. This is the tested mode."
          },
          {
            "title": "Fill covers the canvas",
            "text": "Fill scales proportionally to cover the canvas and may crop edges when the ratios differ. Check subtitles, heads, and side edges in the preview."
          },
          {
            "title": "Starred blur and multi-panel layouts",
            "text": "The menu includes Blur 1:1*, Double 1:1*, Symmetric Double 1:1*, Triple 1:1*, and Triple Blur 1:1*. These VIP blur-background or multi-panel modes were not export-tested here."
          }
        ]
      },
      {
        "title": "Check the result, then save or keep processing",
        "text": "The _resize.mp4 result preserves the whole landscape image with surrounding black background. Check playback and final dimensions for your intended use.",
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
    ]
  },
  "rotate-video-iphone": {
    "title": "How to rotate videos on iPhone and iPad",
    "description": "Rotate a video right, left, or upside down with ClipDock on iPhone and iPad. Check the preview and save the corrected orientation.",
    "intro": "Rotate Video corrects sideways or upside-down pictures. This example rotates 90 degrees right, with the change visible in both settings and the export. Screenshots come from an iPhone 17 Pro Max simulator running iOS 26.0. The app interface is in English.",
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
        "text": "Tap Process in the bottom navigation. Find Rotate Video in row 3, in the right column, and tap the entry marked by the arrow."
      },
      {
        "title": "Choose the video to process",
        "text": "In Select Video, tap Choose from Photos and pick your source. Use Choose from Files for media stored in Files. An empty download list does not prevent importing from Photos. Some examples reuse a previously trimmed clip of about six seconds; you can prepare a short sample with Trim Video."
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
        "text": "After Start Processing, the output picture is rotated 90 degrees right and remains about six seconds long. Check text and subject orientation before saving.",
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
    ]
  },
  "mirror-video-iphone": {
    "title": "How to mirror or flip videos on iPhone and iPad",
    "description": "Flip videos horizontally or vertically with ClipDock. Learn H Flip, V Flip, and VIP symmetry options on iPhone and iPad.",
    "intro": "Mirror Video flips a picture horizontally or vertically. This H Flip example swaps the left and right sides of a seascape in the preview and result. Screenshots come from an iPhone 17 Pro Max simulator running iOS 26.0. The app interface is in English.",
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
        "text": "Tap Process in the bottom navigation. Find Mirror Video in row 4, in the left column, and tap the entry marked by the arrow."
      },
      {
        "title": "Choose the video to process",
        "text": "In Select Video, tap Choose from Photos and pick your source. Use Choose from Files for media stored in Files. An empty download list does not prevent importing from Photos. Some examples reuse a previously trimmed clip of about six seconds; you can prepare a short sample with Trim Video."
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
            "text": "These starred VIP symmetry effects differ from simply flipping the entire picture. Their entries were inspected, but paid-mode exports were not tested."
          }
        ]
      },
      {
        "title": "Check the result, then save or keep processing",
        "text": "The H Flip result swaps the seascape and clouds left to right. Remember that embedded subtitles, logos, and text are mirrored too.",
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
    ]
  },
  "reverse-video-iphone": {
    "title": "How to reverse a video on iPhone and iPad",
    "description": "Play a video backward with ClipDock on iPhone and iPad. Choose how to handle audio, inspect the reversed action, and save the result.",
    "intro": "Reverse Video plays action from end to beginning. This example uses default mute, and the result starts at the end of the original clip. Screenshots come from an iPhone 17 Pro Max simulator running iOS 26.0. The app interface is in English.",
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
        "text": "Tap Process in the bottom navigation. Find Reverse Video in row 4, in the middle column, and tap the entry marked by the arrow."
      },
      {
        "title": "Choose the video to process",
        "text": "In Select Video, tap Choose from Photos and pick your source. Use Choose from Files for media stored in Files. An empty download list does not prevent importing from Photos. Some examples reuse a previously trimmed clip of about six seconds; you can prepare a short sample with Trim Video."
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
            "text": "Keep Audio preserves the original audio order; Reverse Audio reverses sound. Listen to exported dialogue or music to check the effect. Only mute mode was tested here."
          }
        ]
      },
      {
        "title": "Check the result, then save or keep processing",
        "text": "The first frame shows the person from the end of the original video, and thumbnail order is reversed. The displayed duration remains about six seconds. Play it to confirm that motion proceeds backward.",
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
    ]
  },
  "change-video-speed-iphone": {
    "title": "How to speed up or slow down videos on iPhone and iPad",
    "description": "Speed up or slow down videos with ClipDock on iPhone and iPad. Understand duration, pitch preservation, speed limits, and high-speed audio.",
    "intro": "Change Speed adjusts playback with a multiplier. This example uses 1.50x to turn about six seconds into four, with notes on pitch and speed limits. Screenshots come from an iPhone 17 Pro Max simulator running iOS 26.0. The app interface is in English.",
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
        "text": "Tap Process in the bottom navigation. Find Change Speed in row 4, in the right column, and tap the entry marked by the arrow."
      },
      {
        "title": "Choose the video to process",
        "text": "In Select Video, tap Choose from Photos and pick your source. Use Choose from Files for media stored in Files. An empty download list does not prevent importing from Photos. Some examples reuse a previously trimmed clip of about six seconds; you can prepare a short sample with Trim Video."
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
        "text": "At 1.50x with pitch preservation off, the output shows about four seconds, matching the estimate. Check rhythm and sound before saving.",
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
    ]
  },
  "edit-video-audio-iphone": {
    "title": "How to mute a video or change its volume on iPhone and iPad",
    "description": "Mute video or adjust its volume with ClipDock on iPhone and iPad. Check the selected level and learn which audio controls require VIP.",
    "intro": "Audio Editing provides mute, volume, and replacement controls. This guide explains Volume mode and a completed export using the displayed 100% level. Screenshots come from an iPhone 17 Pro Max simulator running iOS 26.0. The app interface is in English.",
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
        "text": "Tap Process in the bottom navigation. Find Audio Editing in row 5, in the left column, and tap the entry marked by the arrow."
      },
      {
        "title": "Choose the video to process",
        "text": "In Select Video, tap Choose from Photos and pick your source. Use Choose from Files for media stored in Files. An empty download list does not prevent importing from Photos. Some examples reuse a previously trimmed clip of about six seconds; you can prepare a short sample with Trim Video."
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
            "text": "The percentage at the right is the selected level; this example uses 100%. Read the label after dragging and listen to the result. Raising volume does not repair noise or improve recording quality."
          },
          {
            "title": "Replace* and Fade In/Out*",
            "text": "Replace changes the audio source, while Fade In/Out fades audio at the ends. Both are marked VIP and were not executed in this test. For separate audio and video inputs, see Merge Audio and Video."
          }
        ]
      },
      {
        "title": "Check the result, then save or keep processing",
        "text": "The _audio_edit.mp4 file was generated at Volume 100%, also shown in export history. To change loudness, confirm that the slider percentage actually changes, then export and compare by listening.",
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
    ]
  },
  "add-watermark-video-iphone": {
    "title": "How to add a text watermark to videos on iPhone and iPad",
    "description": "Add a text watermark to video with ClipDock. Set its size and position, understand VIP style controls, and preview the exported result.",
    "intro": "Add Watermark controls text, size, position, and style. Settings use ClipDock Demo, while a physical-device result demonstrates previewing and saving. The entry and settings screenshots come from an iPhone 17 Pro Max simulator; the exported result comes from a physical iPhone. The app interface is in English.",
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
        "text": "Tap Process in the bottom navigation. Find Add Watermark in row 5, in the middle column, and tap the entry marked by the arrow."
      },
      {
        "title": "Choose the video to process",
        "text": "In Select Video, tap Choose from Photos and pick your source. Use Choose from Files for media stored in Files. An empty download list does not prevent importing from Photos. Some examples reuse a previously trimmed clip of about six seconds; you can prepare a short sample with Trim Video."
      },
      {
        "title": "Set the watermark text and size",
        "text": "Choose Text under Watermark Type, then enter and confirm the text in Text Content. This settings example uses ClipDock Demo. The preview shows its position and approximate appearance.",
        "sections": [
          {
            "title": "Text and Image*",
            "text": "Text adds a text watermark. Image is the VIP image-watermark option. Only text was configured here."
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
            "text": "The example shows 75%. Lower opacity makes the watermark fainter and potentially harder to read. This parameter requires VIP; the test keeps its default."
          }
        ]
      },
      {
        "title": "Preview and save the watermarked output",
        "text": "Tap Start Processing after checking settings. The physical-iPhone result is a 15-second file ending in _watermark.mp4, with Made by ClipDock visible at bottom right.",
        "sections": [
          {
            "title": "Check the watermark",
            "text": "Play the result and check legibility, position, and overlap with subjects or subtitles. The result screenshot uses different source footage and wording from the settings example, but demonstrates the same text-watermark workflow."
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
    ]
  },
  "capture-video-frames-iphone": {
    "title": "How to capture video frames on iPhone and iPad",
    "description": "Export a video frame as an image with ClipDock on iPhone and iPad. Choose the time, save to Photos, and learn about VIP batch capture.",
    "intro": "Video Capture exports images from a video. This guide tests Single-frame capture and explains the VIP Batch, Smart, and Sheet entries. Screenshots come from an iPhone 17 Pro Max simulator running iOS 26.0. The app interface is in English.",
    "tips": [
      {
        "title": "The frame looks blurry",
        "text": "Try a moment with less motion and inspect the original quality. Frame capture cannot repair existing blur."
      }
    ],
    "faq": [
      {
        "question": "Can it capture several frames at once?",
        "answer": "The interface has Batch*, which requires VIP. Single was tested here; batch settings and results were not verified."
      },
      {
        "question": "How is this different from a phone screenshot?",
        "answer": "Video Capture exports a video frame, here a 640×338 JPEG. A phone screenshot can also include playback controls and system UI."
      }
    ],
    "steps": [
      {
        "title": "Open Video Capture in Process",
        "text": "Tap Process in the bottom navigation. Find Video Capture in row 5, in the right column, and tap the entry marked by the arrow."
      },
      {
        "title": "Choose the video to process",
        "text": "In Select Video, tap Choose from Photos and pick your source. Use Choose from Files for media stored in Files. An empty download list does not prevent importing from Photos. Some examples reuse a previously trimmed clip of about six seconds; you can prepare a short sample with Trim Video."
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
            "text": "These VIP entries offer batch capture, smart capture, and a preview sheet. Their paid settings and outputs were not tested, so this guide does not assume specific intervals, algorithms, or sheet layouts."
          },
          {
            "title": "Add Timestamp",
            "text": "This adds a time marker. Leave it off for a clean image, or turn it on to identify the source moment and check its position and readability after export."
          }
        ]
      },
      {
        "title": "Preview and save the image",
        "text": "Export Image opens Screenshot Preview. The example shows 66 KB, JPEG, and 640×338. Check the image, then choose Save to Photos or Share File. Done closes the preview.",
        "sections": [
          {
            "title": "Dimensions come from the video",
            "text": "The source is 640×338 and the exported image shows the same dimensions. A larger phone screen cannot add detail to the source frame."
          }
        ]
      }
    ]
  },
  "extract-audio-iphone": {
    "title": "How to extract audio from a video on iPhone and iPad",
    "description": "Extract an M4A audio file from a Photos video with ClipDock, inspect the result, and open sharing or saving options. Includes four screenshots.",
    "intro": "Open Extract Audio in ClipDock and choose a video from Photos to create an independent audio file. Four screenshots show the workflow on an iPhone 17 Pro Max simulator running iOS 26.0. The app interface is English; system sharing labels may follow the device language. iPad users can follow the same tool entry.",
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
        "answer": "In this test, selecting the source directly generated M4A without a format menu. This guide does not include MP3 conversion steps."
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
        "text": "Tap Process in ClipDock and find Extract Audio at the bottom left of the tool grid. Prepare a video that contains sound, such as your own explanation, interview, or authorized footage."
      },
      {
        "title": "Choose a video from Photos",
        "text": "In Select Video, tap Choose from Photos, then select the source in the system picker. An empty download list does not prevent importing from Photos. Use Choose from Files if the source is stored in Files."
      },
      {
        "title": "Wait for audio extraction",
        "text": "Selecting the video starts extraction directly; no extra start button is needed. The test shows no format-settings page. Processing Complete appears with a filename ending in .m4a. Tap Share File to continue exporting, or Done to dismiss the dialog."
      },
      {
        "title": "Open sharing and saving options",
        "text": "Share File opens a sheet with the audio file and size, about 2.4 MB in this example. Use Save to Files below to retain a separate copy, or inspect More for available receiving apps. After saving, listen to the file to check its sound and duration."
      }
    ]
  },
  "change-video-md5-iphone": {
    "title": "How to use the video MD5 tool on iPhone and iPad",
    "description": "Use ClipDock’s Change MD5 tool on iPhone and iPad. See the processing workflow and understand why actual file hashes need separate verification.",
    "intro": "Change MD5 creates a processed file from a video. This guide shows its entry and result; a byte-level file digest is not a measure of improved picture quality or changed video content. Screenshots come from an iPhone 17 Pro Max simulator running iOS 26.0. The app interface is in English.",
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
        "text": "Tap Process in the bottom navigation. Find Change MD5 in row 6, in the middle column, and tap the entry marked by the arrow."
      },
      {
        "title": "Choose a video and wait for processing",
        "text": "After opening Change MD5, use Choose from Photos or another appropriate source. The test uses a previously exported short clip through Quick Edit. Processing starts directly without a separate settings page.",
        "sections": [
          {
            "title": "There is no target-digest input",
            "text": "This workflow shows no MD5 input field or format parameters. Do not treat it as a tool for choosing any arbitrary digest value."
          }
        ]
      },
      {
        "title": "Check the result, then save or keep processing",
        "text": "A new _md5.mp4 file appears, showing about six seconds. The test reached the output page but did not compare input and output MD5 values. If you need digest evidence, calculate the actual hashes of both files separately.",
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
    ]
  },
  "merge-audio-video-iphone": {
    "title": "How to merge audio and video on iPhone and iPad",
    "description": "Combine video with audio from Files or another Photos video using ClipDock on iPhone and iPad. Choose sources and check the merged result.",
    "intro": "Use Merge Audio and Video when picture and sound come from different files. This example selects a short video and takes audio from another Photos video to create a merged export. Screenshots come from an iPhone 17 Pro Max simulator running iOS 26.0. The app interface is in English.",
    "tips": [
      {
        "title": "Sound is out of sync or the ending is wrong",
        "text": "Check source lengths and start positions. This page has no timing-offset or looping controls. Prepare the source media separately if needed, then merge again."
      }
    ],
    "faq": [
      {
        "question": "Must I extract audio first?",
        "answer": "No. The example uses Extract audio from Photos video to take sound directly from another video."
      },
      {
        "question": "Can I adjust the ratio of two audio tracks?",
        "answer": "No mixing-ratio or multi-track controls are shown in this workflow. This guide does not describe it as a multi-track mixer."
      }
    ],
    "steps": [
      {
        "title": "Open Merge Audio and Video in Process",
        "text": "Tap Process in the bottom navigation. Find Merge Audio and Video in row 6, in the right column, and tap the entry marked by the arrow."
      },
      {
        "title": "Choose the video to process",
        "text": "In Select Video, tap Choose from Photos and pick your source. Use Choose from Files for media stored in Files. An empty download list does not prevent importing from Photos. Some examples reuse a previously trimmed clip of about six seconds; you can prepare a short sample with Trim Video."
      },
      {
        "title": "Choose the picture source first",
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
            "text": "This page shows Audio Source without independent mixing levels, timing offset, looping, or audio-trim parameters. Check the output by listening if length, sync, or original-audio handling matters. Do not assume a particular automatic mixing behavior."
          }
        ]
      },
      {
        "title": "Check the result, then save or keep processing",
        "text": "The merged result page shows a video of about six seconds. File generation was verified, but the merged track was not listened through segment by segment. Before saving, check the sound source, initial sync, volume, and ending, especially if the source durations differ.",
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
    ]
  }
};
