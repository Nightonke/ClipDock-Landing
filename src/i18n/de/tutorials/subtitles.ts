import type { TutorialCopy } from "../../types";
export const copy: Record<string, TutorialCopy> = {
  "extract-youtube-subtitles-iphone": {
    "title": "Vorhandene YouTube-Untertitel extrahieren",
    "description": "Extrahiere vorhandene YouTube-Untertitel mit ClipDock auf iPhone oder iPad. Wähle Sprache und Format und speichere sie in „Dateien“ oder teile sie.",
    "intro": "Speichere vorhandene Untertitel eines YouTube-Videos zum Lesen oder Bearbeiten. Füge den Link ein, wähle Untertitelspuren und Format und speichere oder teile die Dateien.",
    "tips": [
      {
        "title": "Was tun, wenn keine Untertitel gefunden werden?",
        "text": "Prüfe, ob sich das verlinkte Video regulär öffnen lässt und auf YouTube Untertitel anbietet. Ohne vorhandene Untertitel kann die Funktion keine erzeugen. Gibt es Untertitel, prüfe Link und Netzwerk und versuche es erneut."
      },
      {
        "title": "Was tun bei Fehlern im Untertiteltext?",
        "text": "Automatisch erzeugte Untertitel stammen von YouTube und können Erkennungsfehler enthalten. Vergleiche nach dem Export Namen, Fachbegriffe und Zeitangaben mit dem Video, bevor du sie weiterverwendest."
      }
    ],
    "faq": [
      {
        "question": "Kann ich automatisch erzeugte Untertitel extrahieren?",
        "answer": "Ja, wenn das Video solche Untertitel anbietet. Suche im Ergebnis nach Spuren mit dem Hinweis „auto-generated“ für automatisch erzeugte Untertitel."
      },
      {
        "question": "Kann ich mehrere Sprachen gleichzeitig exportieren?",
        "answer": "Wähle mehrere Untertitelspuren oder tippe auf „Alle auswählen“ und anschließend auf „Untertitel exportieren“. Verfügbar sind die Sprachen, für die das Video bereits Untertitel enthält."
      },
      {
        "question": "Kann ClipDock übersetzen oder Untertitel aus Audio erstellen?",
        "answer": "Nein. Die Funktion extrahiert nur bereits vorhandene YouTube-Untertitel. Sie übersetzt nicht automatisch und erzeugt keine Untertitel für Videos ohne Untertitel."
      },
      {
        "question": "Werden Untertitel in Fotos gespeichert?",
        "answer": "Untertitel werden als Dateien gespeichert und erscheinen nicht in Fotos. Speichere sie in „Dateien“ oder sende sie über „Teilen“ an eine andere App."
      }
    ],
    "steps": [
      {
        "title": "YouTube-Videolink einfügen",
        "text": "Kopiere zuerst den Freigabelink des gewünschten YouTube-Videos. Öffne in ClipDock unten „Extraktion“ (Extract) und oben den Tab „Untertitel“ (Subtitles). Tippe auf „Einfügen“ (Paste) oder gib den Link manuell ein. Verwende den Link zu einem einzelnen Video."
      },
      {
        "title": "Extraktion starten und auf die Liste warten",
        "text": "Prüfe den Link und tippe auf „Extrahieren“ (Extract). Warte, solange „Untertitel werden extrahiert…“ (Extracting captions…) angezeigt wird. Die Funktion lädt nur Untertitel, die bereits auf YouTube existieren. Sie transkribiert kein Audio für Videos ohne Untertitel."
      },
      {
        "title": "Gewünschte Untertitelsprachen auswählen",
        "text": "Tippe auf den Kreis links neben den gewünschten Spuren oder auf „Alle auswählen“ (Select all). Prüfe Sprache und Kennzeichnung automatisch erzeugter Untertitel. Verfügbare Sprachen und Spuren hängen vom Video ab."
      },
      {
        "title": "Dateiformat für Untertitel wählen",
        "text": "Tippe auf „Format: SRT“, um „Untertitelformat“ (Caption format) zu öffnen. Wähle passend zur Zielsoftware SRT, VTT, TTML, JSON3, SRV1, SRV2 oder SRV3. Prüfe unter jeder gewählten Spur, welche Formate verfügbar sind.",
        "sections": [
          {
            "title": "Welches Format passt?",
            "text": "SRT ist ein guter Ausgangspunkt. Für Webplayer kann VTT passend sein, je nach Anforderung des Players. Gibt die Zielsoftware ein Format vor, verwende dieses."
          }
        ]
      },
      {
        "title": "Exportieren und speichern oder teilen",
        "text": "Wähle Spuren und Format und tippe auf „Untertitel exportieren“ (Export captions). Die Zahl in Klammern gibt die gewählten Spuren an. Wähle unter „Exportieren nach“ (Export to) die Option „In Dateien sichern“ (Save to Files) oder „Teilen“ (Share).",
        "sections": [
          {
            "title": "In „Dateien“ speichern",
            "text": "Wähle „In Dateien sichern“, lege einen Speicherort fest und bestätige. Öffne anschließend die Dateien-App und prüfe die Untertiteldatei."
          },
          {
            "title": "Mit einer anderen App teilen",
            "text": "Wähle „Teilen“ und folge dem Systemdialog, um eine Ziel-App oder Freigabeart auszuwählen. Exportiert werden Untertiteldateien. Speichere und nutze nur Inhalte, die dir gehören oder für die du eine Erlaubnis hast."
          }
        ]
      }
    ],
    "exampleNote": "Die Screenshots zeigen die englische App-Oberfläche mit zwei verfügbaren englischen Untertitelspuren. Gezeigt wird der Ablauf bis zum Exportmenü, kein abgeschlossener Speichervorgang. Die Funktion extrahiert vorhandene Untertitel und übersetzt oder transkribiert nicht."
  }
};
