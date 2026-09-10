export const capabilities = [
  "Downloads über geteilte Links",
  "Downloads per URL",
  "Kopieren und herunterladen",
  "Weniger App-Wechsel",
  "Webvideos erkennen und herunterladen",
  "Mehrere Beiträge eines Profils laden",
  "Mehrere Kanalvideos laden",
  "Mehrere Beiträge zu einem Hashtag laden",
  "Mehrere Playlist-Videos laden",
  "Mehrere Videos einer Sammlung laden",
  "Downloads im Hintergrund",
  "Videos verwalten",
  "In Fotos speichern",
  "Zuschneiden",
  "Transkodieren",
  "Zusammenfügen",
  "Größe/Leinwand ändern",
  "Drehen",
  "Spiegeln",
  "Tempo ändern",
  "Audio extrahieren",
  "Audio und Video zusammenführen",
  "Rückwärts abspielen",
  "Wasserzeichen hinzufügen",
  "Video in GIF",
  "Video in Live Photo umwandeln",
  "Videoaufnahme",
  "Ändern MD5",
  "YouTube-Untertitel extrahieren"
];
export const featureSections = [
  {
    "number": "01",
    "video": "share-link",
    "kicker": "Vom Link zum Video",
    "title": "Videos per Link herunterladen",
    "description": "Füge einen unterstützten Freigabelink oder eine Webadresse ein. ClipDock extrahiert verfügbare Videos, Bilder oder Audiodateien. Bietet die Quelle HD oder eine Version ohne Wasserzeichen an, kannst du diese wählen. Qualität, Format und Wasserzeichen hängen von der Quelle ab.",
    "points": [
      "Unterstützte Plattformen ansehen",
      "Verfügbare Qualität der Quelle wählen",
      "Videos, Bilder und Audio laden",
      "Auch im Hintergrund weiterladen"
    ],
    "platformDetails": "YouTube, Sora (OpenAI), Instagram (einschließlich Stories), X (Twitter), TikTok, Threads, Facebook, Vimeo, afreecatv, Tumblr, Triller, Likee, Twitch, Pinterest, Snapchat, Reddit, VK, Dailymotion, SoundCloud, Lemon8, Suno, AcFun, Bilibili, Tmall, Xianyu, Dianping, UC Video, Qutoutiao, Pipixia, Pipigaoxiao, Weibo, Miaopai, Oasis, Xiaokaxiu, Meitu, Meipai, NetEase Cloud Music, CCTV, Xinhua, Huxiu, Huya, Douyu, Tangdou, Ximalaya, Momo, Inke, Xunlei, WIDE, Zuiyou, Eyepetizer, KuRan, Jianying, Qiushibaike, Pear Video und weitere Plattformen. Welche Inhalte heruntergeladen werden können, zeigt das Ergebnis der Link-Extraktion",
    "placeholder": "Screenshot der Link-Extraktion",
    "tone": "blue"
  },
  {
    "number": "02",
    "video": "copy-background",
    "kicker": "Einfach den Link kopieren",
    "title": "Kopieren. Im Hintergrund laden.",
    "description": "Aktiviere „Links automatisch herunterladen“ und „Im Hintergrund erkennen“ und lasse Bild im Bild laufen. Kopierst du einen unterstützten Link etwa auf YouTube, TikTok oder X, erstellt ClipDock im Hintergrund einen Download. Aktiviere Download-Mitteilungen und erlaube sie in den Systemeinstellungen, um über Abschluss oder Fehler informiert zu werden.",
    "points": [
      "Nach dem Aktivieren entfällt das Einfügen in der App",
      "Bild im Bild lässt sich an den Bildschirmrand schieben"
    ],
    "placeholder": "Screenshot der Download-Aufgaben",
    "tone": "lime"
  },
  {
    "number": "03",
    "video": "web-long-press",
    "kicker": "Abspielen und verfügbare Videos erkennen",
    "title": "Webvideo abspielen und gedrückt halten",
    "description": "Öffne „Webvideo“, rufe die gewünschte Seite auf und spiele das Video ab. Überspringe Werbung oder warte, bis sie endet. Halte dann das Video gedrückt, um eine verfügbare Quelle auszuwählen. Über die Erkennungstaste unten kannst du auch die Liste erkannter Videos öffnen. Ob ein Download möglich ist, hängt von der Website und den Zugriffsbedingungen ab.",
    "points": [
      "Verfügbare Videos auf der Seite erkennen",
      "Die gewünschte Quelle aus der Liste wählen",
      "Laufendes Video durch langes Drücken zuordnen"
    ],
    "placeholder": "Screenshot eines Video-Downloads im integrierten Browser",
    "tone": "coral"
  },
  {
    "number": "04",
    "video": "batch-playlist",
    "kicker": "Mehrere Dateien herunterladen",
    "title": "Liste laden. Auswahl speichern.",
    "description": "Füge einen unterstützten Link zu einem Kanal, Profil, einer Playlist oder Hashtag-Seite ein. Lade die Liste, wähle Videos oder Bilder aus und füge sie zur Download-Warteschlange hinzu. Die Liste wird seitenweise geladen; in der kostenlosen Version sind die ersten 2 Seiten verfügbar. Die Ergebnisse enthalten möglicherweise nicht alle Beiträge.",
    "points": [
      "Unterstützte Listen ansehen"
    ],
    "platformDetails": "Unterstützt werden YouTube (Kanäle, Shorts, Hashtag-Seiten, Playlists), Instagram (Profile, Hashtag-Seiten), TikTok (Profile, Hashtag-Seiten), Douyin (Profile, Sammlungen), Bilibili (Profile, Sammlungen) sowie Profile auf X (Twitter), Weibo, Haokan Video und weiteren Plattformen. Linktypen und Umfang der ladbaren Ergebnisse unterscheiden sich je nach Plattform.",
    "placeholder": "Screenshot zum Laden mehrerer Videos aus Kanälen, Profilen und Playlists",
    "tone": "blue"
  },
  {
    "number": "05",
    "kicker": "YouTube-Untertitel extrahieren",
    "title": "Untertitel separat speichern",
    "description": "Füge einen YouTube-Videolink ein, um vorhandene Untertitel zu extrahieren. Wähle Sprache und Dateiformat und speichere sie in „Dateien“ oder teile sie mit einer anderen App, um sie zu lesen und weiterzuverwenden.",
    "points": [
      "Vorhandene automatisch erzeugte Untertitel und mehrere Sprachspuren",
      "Mehrfachauswahl und sieben Formate, darunter SRT und VTT",
      "In „Dateien“ speichern oder direkt teilen"
    ],
    "carousel": true,
    "tutorial": "extract-youtube-subtitles-iphone",
    "tone": "lime"
  }
];
export const tools = [
  {
    "mark": "CUT",
    "slug": "trim-video-iphone",
    "title": "Video zuschneiden",
    "description": "Schneide den gewünschten Ausschnitt aus deinem Video aus."
  },
  {
    "mark": "CONV",
    "slug": "transcode-video-iphone",
    "title": "Video transkodieren",
    "description": "Wandle Videos in ein Format um, das zu deinem Vorhaben passt."
  },
  {
    "mark": "JOIN",
    "slug": "join-videos-iphone",
    "title": "Videos zusammenfügen",
    "description": "Verbinde mehrere Clips der Reihe nach zu einem Video."
  },
  {
    "mark": "MIX",
    "slug": "interleave-videos-iphone",
    "title": "Interleave",
    "description": "Teile Videos in Abschnitte und füge sie abwechselnd zusammen."
  },
  {
    "mark": "GRID",
    "slug": "segment-grid-video-iphone",
    "title": "Segmentraster",
    "description": "Ordne verschiedene Zeitabschnitte eines Videos in einem Raster an."
  },
  {
    "mark": "SIZE",
    "slug": "resize-video-iphone",
    "title": "Größe/Leinwand ändern",
    "description": "Ändere das Seitenverhältnis der Leinwand: mit Rändern, füllendem Zuschnitt oder einem anderen Layout."
  },
  {
    "mark": "ROTATE",
    "slug": "rotate-video-iphone",
    "title": "Video drehen",
    "description": "Drehe das Videobild in die gewünschte Ausrichtung."
  },
  {
    "mark": "MIRROR",
    "slug": "mirror-video-iphone",
    "title": "Video spiegeln",
    "description": "Spiegle das Bild für einen anderen Blick auf dein Video."
  },
  {
    "mark": "SPEED",
    "slug": "change-video-speed-iphone",
    "title": "Änderung Geschwindigkeit",
    "description": "Spiele dein Video schneller oder langsamer ab."
  },
  {
    "mark": "AUDIO",
    "slug": "extract-audio-iphone",
    "title": "Audio extrahieren",
    "description": "Speichere die Tonspur eines Videos als eigene Audiodatei."
  },
  {
    "mark": "SOUND",
    "slug": "edit-video-audio-iphone",
    "title": "Audiobearbeitung",
    "description": "Schalte den Videoton stumm oder passe die Lautstärke an."
  },
  {
    "mark": "MERGE",
    "slug": "merge-audio-video-iphone",
    "title": "Audio und Video zusammenführen",
    "description": "Führe Audio und Video in einer Datei zusammen."
  },
  {
    "mark": "REVERSE",
    "slug": "reverse-video-iphone",
    "title": "Video umkehren",
    "description": "Lass dein Video vom Ende zum Anfang laufen."
  },
  {
    "mark": "MARK",
    "slug": "add-watermark-video-iphone",
    "title": "Wasserzeichen hinzufügen",
    "description": "Kennzeichne deine eigenen Videos mit Text oder einem Bild."
  },
  {
    "mark": "GIF",
    "slug": "video-to-gif-iphone",
    "title": "Video in GIF",
    "description": "Wandle einen Videoausschnitt in ein teilbares GIF um."
  },
  {
    "mark": "LIVE",
    "slug": "video-to-live-photo-iphone",
    "title": "Video in Live Photo",
    "description": "Erstelle aus einem Video ein Live Photo."
  },
  {
    "mark": "FRAMES",
    "slug": "capture-video-frames-iphone",
    "title": "Videoaufnahme",
    "description": "Extrahiere Einzelbilder oder nutze Serienaufnahmen, intelligente Auswahl und die große Bildübersicht."
  },
  {
    "mark": "MD5",
    "slug": "change-video-md5-iphone",
    "title": "Ändern MD5",
    "description": "Ändere den MD5-Wert einer Videodatei."
  }
];
export const faqs = [
  {
    "question": "Welche Links unterstützt ClipDock?",
    "answer": "ClipDock unterstützt YouTube, Sora (OpenAI), Instagram (einschließlich Stories), X (Twitter), TikTok, Threads, Facebook, Vimeo, afreecatv, Tumblr, Triller, Likee, Twitch, Pinterest, Snapchat, Reddit, VK, Dailymotion, SoundCloud, Lemon8, Suno, AcFun, Bilibili, Tmall, Xianyu, Dianping, UC Video, Qutoutiao, Pipixia, Pipigaoxiao, Weibo, Miaopai, Oasis, Xiaokaxiu, Meitu, Meipai, NetEase Cloud Music, CCTV, Xinhua, Huxiu, Huya, Douyu, Tangdou, Ximalaya, Momo, Inke, Xunlei, WIDE, Zuiyou, Eyepetizer, KuRan, Jianying, Qiushibaike, Pear Video und weitere Plattformen. Welche Inhalte heruntergeladen werden können, zeigt das Ergebnis der Link-Extraktion."
  },
  {
    "question": "Warum werden manche Links nicht erkannt?",
    "answer": "Änderungen an Websites, Anmeldepflichten, regionale Einschränkungen, die Netzwerkverbindung, nicht mehr verfügbare Inhalte sowie DRM oder Zugriffskontrollen können die Extraktion verhindern. Prüfe zunächst, ob sich der Link regulär öffnen lässt, und versuche es dann erneut."
  },
  {
    "question": "Wo finde ich heruntergeladene Videos?",
    "answer": "Unter „Verwaltung“ → „Abgeschlossen“ kannst du Videos ansehen, durchsuchen, sortieren oder teilen. Tippe auf „In Fotos speichern“, um sie manuell zu sichern. Alternativ aktiviere unter „Download-Einstellungen“ die Option „Abgeschlossene Downloads automatisch in Fotos speichern“. Dafür sind eine Fotoberechtigung und ein unterstütztes Dateiformat erforderlich."
  },
  {
    "question": "Kann ClipDock im Hintergrund herunterladen?",
    "answer": "ClipDock unterstützt Downloads im Hintergrund. iOS kann die verfügbare Laufzeit jedoch je nach Systemressourcen, Netzwerkverbindung und Energiesparvorgaben anpassen."
  },
  {
    "question": "Erfasst ClipDock meine Daten?",
    "answer": "Die aktuelle Datenschutzangabe im App Store lautet „Keine Daten erfasst“. Wenn du Websites oder Inhalte Dritter aufrufst, können diese Anbieter übliche Informationen zu Netzwerkanfragen gemäß ihren eigenen Datenschutzrichtlinien verarbeiten."
  },
  {
    "question": "Kann ich jedes Onlinevideo herunterladen?",
    "answer": "Nein. Speichere nur Inhalte, die dir gehören, für die du eine Erlaubnis hast oder deren Nutzung gesetzlich zulässig ist. Beachte die Regeln der Rechteinhaber, der Website und deines Landes."
  }
];
export const ui = {
  "ogAlt": "ClipDock – Webvideos herunterladen auf iPhone und iPad",
  "eyebrow": "Viele Plattformen · iPhone + iPad",
  "heroLine1": "Link kopieren.",
  "heroLine2": "Video behalten.",
  "heroDescription": "Speichere mit ClipDock Videos, Bilder oder Audio aus unterstützten Links und Webseiten. Starte Downloads durch Kopieren oder wähle mehrere Beiträge aus einer Liste aus. Verfügbare Qualität, Formate und Wasserzeichen hängen von der Quelle ab.",
  "freeDownload": "Kostenlos laden",
  "qrLabel": "Mit dem iPhone scannen, um ClipDock zu laden",
  "qrAlt": "QR-Code zum Download von ClipDock",
  "scan": "Mit dem iPhone scannen",
  "getApp": "App laden",
  "productInfo": "Produktinformationen",
  "ratings": "Bewertungen",
  "privacyProof": "Keine App-Daten erfasst",
  "capabilities": "Die wichtigsten Funktionen von ClipDock",
  "subtitleLink": "Anleitung für Untertitel lesen",
  "demoSuffix": "Demo",
  "progress": "Videofortschritt",
  "placeholder": "Platzhalter für ein Bild",
  "toolsKicker": "Nach dem Download",
  "toolsTitle": "Deine Video-Werkzeuge für unterwegs",
  "toolsDescription": "Mit dem Speichern geht es los. Zuschneiden, umwandeln, zusammenfügen und teilen kannst du ebenfalls direkt in ClipDock.",
  "readTutorial": "Anleitung lesen",
  "trustKicker": "Funktionen und Grenzen verständlich erklärt",
  "trustTitle": "Was geht. Und wo die Grenzen liegen.",
  "trustDescription": "ClipDock ist für Inhalte gedacht, die du speichern und bearbeiten darfst. Ob ein Link nutzbar ist, hängt auch von der Plattform und dem jeweiligen Inhalt ab.",
  "trustValue1": "Keine Erfassung",
  "trustLabel1": "von App-Daten",
  "trustText1": "Laut aktueller Datenschutzangabe im App Store erfasst der Entwickler über diese App keine Daten.",
  "trustLabel2": "iPhone und iPad",
  "trustText2": "Für iPhones mit iOS 15 oder neuer und iPads mit iPadOS 15 oder neuer.",
  "trustValue3": "Rechte achten",
  "trustLabel3": "Nur erlaubte Inhalte speichern",
  "trustText3": "Keine Umgehung von DRM, Bezahlschranken, Zugriffskontrollen oder Plattformbeschränkungen.",
  "faqKicker": "Häufige Fragen",
  "faqTitle": "Gut informiert zum nächsten Download.",
  "closingKicker": "Bereit für den nächsten Link?",
  "closingTitle": "Deine Videos immer griffbereit.",
  "closingDescription": "ClipDock ist für iPhone und iPad kostenlos erhältlich und bietet In-App-Käufe.",
  "storeDownload": "Im App Store laden",
  "closingQr": "Scannen und ClipDock laden"
};
