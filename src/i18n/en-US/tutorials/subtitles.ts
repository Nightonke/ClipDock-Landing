import type { TutorialCopy } from "../../types";
export const copy: Record<string, TutorialCopy> = {
  "extract-youtube-subtitles-iphone": {
    "title": "How to extract YouTube captions on iPhone and iPad",
    "description": "Extract existing YouTube captions on iPhone or iPad with ClipDock. Choose languages and an export format, then save to Files or share.",
    "intro": "Save captions already available on a YouTube video for reading or editing. Paste the link, choose caption tracks and a format, then save or share the files.",
    "tips": [
      {
        "title": "No captions found?",
        "text": "Make sure the video link opens normally, and check whether captions are available on YouTube. This feature cannot create captions when none exist. If the video has captions, check the link and your connection, then try again."
      },
      {
        "title": "Errors in the caption text?",
        "text": "YouTube’s auto-generated captions may contain recognition errors. After exporting, check names, technical terms, and timing against the original video before using them."
      }
    ],
    "faq": [
      {
        "question": "Can I extract auto-generated captions?",
        "answer": "Yes, when they are available. Look for tracks labeled auto-generated in the extraction results."
      },
      {
        "question": "Can I export several languages together?",
        "answer": "Yes. Select multiple caption tracks, or tap Select all, then use Export captions. You can choose from the tracks already available on that video."
      },
      {
        "question": "Does this translate or transcribe a video?",
        "answer": "This tutorial covers extracting existing YouTube captions. The interface shown here does not include translation or audio transcription."
      },
      {
        "question": "Are captions saved to Photos?",
        "answer": "Captions are files. Use Save to Files to keep them in the Files app, or use Share to send them to another app."
      }
    ],
    "steps": [
      {
        "title": "Paste a YouTube video link",
        "text": "Copy the video’s share link in YouTube. Open ClipDock, go to Extract in the bottom navigation, then select the Subtitles tab at the top. Tap Paste or enter the link yourself. Use a link to an individual video."
      },
      {
        "title": "Extract the available captions",
        "text": "Check the link and tap Extract. Wait while the button shows “Extracting captions…”. This feature retrieves captions that already exist on YouTube; it does not transcribe videos that have no captions."
      },
      {
        "title": "Choose your caption languages",
        "text": "Select the circle beside each caption track you want, or tap Select all. Check the language and whether a track is auto-generated. Available languages and tracks depend on the video."
      },
      {
        "title": "Choose a file format",
        "text": "Tap Format: SRT to open Caption format. Choose from SRT, VTT, TTML, JSON3, SRV1, SRV2, and SRV3 according to your receiving app, and check availability beneath each selected track.",
        "sections": [
          {
            "title": "Not sure which format to choose?",
            "text": "Start with SRT. For a web video player, use VTT if the player requires it. If your receiving app specifies a format, follow its requirements."
          }
        ]
      },
      {
        "title": "Save the files or share them",
        "text": "Tap Export captions after choosing the tracks and format. The number in parentheses is your selected track count. Choose Save to Files or Share in the Export to menu.",
        "sections": [
          {
            "title": "Save to Files",
            "text": "Choose Save to Files, select a location, and confirm. Open Files to check the saved captions."
          },
          {
            "title": "Share with another app",
            "text": "Choose Share, then select an app or sharing method from the system share sheet. The exported items are caption files. Only save and use content you own or have permission to use."
          }
        ]
      }
    ],
    "exampleNote": "The screenshots use English app controls and show two available English tracks. They reach the export menu, not a completed file save. This workflow extracts existing captions; it does not translate or transcribe audio."
  }
};
