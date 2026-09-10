import type { TutorialCopy } from "../../types";
export const copy: Record<string, TutorialCopy> = {
  "batch-download-bilibili-collection-iphone": {
    "title": "Mehrere Videos einer Bilibili-Sammlung herunterladen",
    "description": "Kopiere auf iPhone oder iPad den Freigabelink einer Bilibili-Sammlung. Lade in ClipDock die Videoliste, wähle die Qualität und starte mehrere Downloads. Mit b23.tv-Beispiellink.",
    "intro": "Für den Download mehrerer Videos einer Bilibili-Sammlung benötigst du deren Freigabelink. So kannst du eigene Serien oder erlaubte Videos sichern, ohne jeden Folgenlink einzeln zu kopieren.",
    "tips": [
      {
        "title": "Die Liste enthält weniger Videos als die Sammlung",
        "text": "Prüfe, ob du den Sammlungslink kopiert hast, wie viele Seiten geladen sind, welche Kontolimits gelten und welche Inhalte zugänglich sind. „Geladene auswählen“ wählt nur bereits geladene Medien. Die Liste enthält möglicherweise nicht alle Folgen. Sende nicht ungeprüft die ganze Sammlung erneut ab."
      }
    ],
    "faq": [
      {
        "question": "Wie unterscheiden sich Sammlungs- und Profillinks bei Bilibili?",
        "answer": "Ein Sammlungslink verweist auf eine Gruppe von Videos, ein Profillink auf die Seite eines Creators. Kopiere den Link aus dem Teilen-Menü der gewünschten Sammlung. Ein b23.tv-Kurzlink verrät den Quelltyp nicht; prüfe nach dem Laden den Sammlungsnamen und die Liste."
      },
      {
        "question": "Werden fertige Downloads automatisch in Fotos gespeichert?",
        "answer": "Aktiviere unter „Download-Einstellungen“ die Option „Abgeschlossene Downloads automatisch in Fotos speichern“, um unterstützte Dateien automatisch zu sichern. Alternativ tippe nach dem Download auf „In Fotos speichern“. Dafür sind die Fotoberechtigung und ein unterstütztes Format nötig."
      }
    ],
    "steps": [
      {
        "title": "Bilibili-Sammlungslink kopieren",
        "text": "Öffne die gewünschte Sammlung in Bilibili, tippe im Sammlungsbereich auf Teilen und kopiere den Link. Die Beispielsammlung „米娜舞蹈-大摆锤“ mit Mina-Tanzvideos zeigt 62 Folgen. Achte darauf, die Sammlung zu teilen und nicht das gerade laufende Einzelvideo."
      },
      {
        "title": "Sammlungslink einfügen",
        "text": "Öffne in ClipDock „Extraktion“ (Extract), wechsle zum Tab „Stapel“ (Batch) und tippe auf „Einfügen“ (Paste). Im Beispiel wird der folgende b23.tv-Kurzlink verwendet. Nutze den tatsächlichen Link aus dem Teilen-Menü deiner gewünschten Sammlung.",
        "exampleUrl": "https://b23.tv/drSfmMh"
      },
      {
        "title": "Videoliste der Sammlung laden",
        "text": "Tippe auf „Liste laden“ (Load list) und warte, bis „Liste wird geladen“ (Loading list) verschwindet. Dabei werden nur auswählbare Beiträge abgerufen. Der Download startet erst, wenn du Einträge auswählst und zur Warteschlange hinzufügst. Die kostenlose Version lädt die ersten 2 Seiten; für weitere Seiten ist kostenpflichtiges VIP erforderlich."
      },
      {
        "title": "Videos auswählen und zur Warteschlange hinzufügen",
        "text": "Prüfe, ob der Quellname zur gewünschten Sammlung passt, und wähle Videos aus, bei Bedarf über „Geladene auswählen“ (Select loaded). Lege „Gemeinsame Qualität“ (Batch quality) fest, prüfe die Anzahl und tippe auf „Zur Download-Warteschlange“ (Add to queue). Im Beispiel sind 62 Einträge geladen und ausgewählt; die Taste zeigt „Zur Download-Warteschlange (62)“."
      },
      {
        "title": "Warteschlange und Fortschritt prüfen",
        "text": "Öffne „Verwaltung“ (Manager). Unter „Herunterladen“ (Active im Screenshot) findest du wartende und laufende Aufgaben, unter „Abgeschlossen“ (Done) fertige Downloads und unter „Fehlgeschlagen“ (Failed) Aufgaben mit Fehlern. Öffne einen Eintrag, um seinen Status zu prüfen."
      }
    ],
    "exampleNote": "Die Screenshots zeigen die laufende Warteschlange, keinen vollständigen Abschluss aller Downloads oder erfolgreichen Speichervorgang in Fotos. Die Gesamtzahlen in „Verwaltung“ enthalten weitere Aufgaben und sind keine Bilanz dieser Auswahl. Kontolimits und Medienzahlen gehören zum Beispiel."
  },
  "batch-download-tiktok-hashtag-iphone": {
    "title": "Mehrere TikTok-Videos zu einem Hashtag herunterladen",
    "description": "Verwende auf iPhone oder iPad einen TikTok-Hashtag-Link, lade die Videoliste in ClipDock, wähle die Qualität und starte mehrere Downloads. Mit dem Hashtag beauty als Linkbeispiel.",
    "intro": "Für mehrere TikTok-Videos zu einem Thema benötigst du den Link zur Hashtag-Seite. Speichere damit eigene oder erlaubte Videos zum selben Hashtag. Das Beispiel verwendet beauty und erspart das Kopieren einzelner Videolinks.",
    "tips": [
      {
        "title": "Die Ergebnisse unterscheiden sich von der Hashtag-Seite",
        "text": "Prüfe, ob der Link /tag/ enthält, und kontrolliere Hashtag, geladene Seiten und Kontolimits. Die Liste enthält möglicherweise nicht alle Videos des Hashtags. „Geladene auswählen“ erfasst nur geladene Medien. Sende nicht ungeprüft die gesamte Liste erneut ab."
      }
    ],
    "faq": [
      {
        "question": "Wie unterscheiden sich TikTok-Hashtag- und Profillinks?",
        "answer": "Ein Hashtag-Link führt zu Inhalten mit demselben Schlagwort, auch von verschiedenen Profilen. Ein Profillink gehört zu einem einzelnen Creator. Verwende für Hashtags eine vollständige Adresse wie https://www.tiktok.com/tag/beauty und nicht nur #beauty."
      },
      {
        "question": "Werden fertige Downloads automatisch in Fotos gespeichert?",
        "answer": "Aktiviere unter „Download-Einstellungen“ die Option „Abgeschlossene Downloads automatisch in Fotos speichern“, um unterstützte Dateien automatisch zu sichern. Alternativ tippe nach dem Download auf „In Fotos speichern“. Dafür sind die Fotoberechtigung und ein unterstütztes Format nötig."
      }
    ],
    "steps": [
      {
        "title": "TikTok-Hashtag-Link einfügen",
        "text": "TikTok-Hashtag-Links verwenden das Muster https://www.tiktok.com/tag/hashtag, hier mit beauty. Öffne „Extraktion“ (Extract) → „Stapel“ (Batch) in ClipDock und tippe auf „Einfügen“ (Paste), um den vollständigen Link einzusetzen. Der Hashtag im Pfad benötigt kein #.",
        "exampleUrl": "https://www.tiktok.com/tag/beauty"
      },
      {
        "title": "Videos zum Hashtag laden",
        "text": "Tippe auf „Liste laden“ (Load list) und warte, bis „Liste wird geladen“ (Loading list) verschwindet. Dabei werden nur auswählbare Beiträge abgerufen. Der Download startet erst, wenn du Einträge auswählst und zur Warteschlange hinzufügst. Die kostenlose Version lädt die ersten 2 Seiten; für weitere Seiten ist kostenpflichtiges VIP erforderlich."
      },
      {
        "title": "Videos auswählen und zur Warteschlange hinzufügen",
        "text": "Prüfe, ob die Quelle beauty lautet, und wähle Videos aus, bei Bedarf über „Geladene auswählen“ (Select loaded). Lege „Gemeinsame Qualität“ (Batch quality) fest, kontrolliere die Anzahl und tippe auf „Zur Download-Warteschlange“ (Add to queue). Im Beispiel sind 19 Einträge geladen und ausgewählt; die Taste zeigt „Zur Download-Warteschlange (19)“."
      },
      {
        "title": "Warteschlange und Fortschritt prüfen",
        "text": "Öffne „Verwaltung“ (Manager). Unter „Herunterladen“ (Active im Screenshot) findest du wartende und laufende Aufgaben, unter „Abgeschlossen“ (Done) fertige Downloads und unter „Fehlgeschlagen“ (Failed) Aufgaben mit Fehlern. Öffne einen Eintrag, um seinen Status zu prüfen."
      }
    ],
    "exampleNote": "Die Screenshots zeigen die laufende Warteschlange, keinen vollständigen Abschluss aller Downloads oder erfolgreichen Speichervorgang in Fotos. Die Gesamtzahlen in „Verwaltung“ enthalten weitere Aufgaben und sind keine Bilanz dieser Auswahl. Kontolimits und Medienzahlen gehören zum Beispiel."
  },
  "batch-download-instagram-hashtag-iphone": {
    "title": "Mehrere Instagram-Bilder zu einem Hashtag herunterladen",
    "description": "Verwende auf iPhone oder iPad einen Instagram-Hashtag-Link, lade und filtere die Bilderliste in ClipDock und starte mehrere Downloads. Mit dem Hashtag model als Linkbeispiel.",
    "intro": "Für mehrere Instagram-Bilder zu einem Thema benötigst du den Link zur Hashtag-Seite. Speichere damit eigene oder erlaubte Bilder zum selben Hashtag. Das Beispiel verwendet model und erspart das Kopieren einzelner Beitragslinks.",
    "tips": [
      {
        "title": "Die Ergebnisse unterscheiden sich von der Hashtag-Seite",
        "text": "Prüfe, ob der Link /explore/tags/ enthält, und kontrolliere Hashtag, geladene Seiten und Kontolimits. Die Ergebnisse enthalten möglicherweise nicht alle Beiträge. „Geladene auswählen“ erfasst nur geladene Medien. Sende nicht ungeprüft die gesamte Liste erneut ab."
      }
    ],
    "faq": [
      {
        "question": "Wie unterscheiden sich Instagram-Hashtag- und Profillinks?",
        "answer": "Ein Hashtag-Link führt zu Beiträgen mit demselben Schlagwort, auch von verschiedenen Profilen. Ein Profillink gehört zu einem einzelnen Creator. Verwende eine vollständige Adresse wie https://www.instagram.com/explore/tags/model und nicht nur #model."
      },
      {
        "question": "Werden fertige Downloads automatisch in Fotos gespeichert?",
        "answer": "Aktiviere unter „Download-Einstellungen“ die Option „Abgeschlossene Downloads automatisch in Fotos speichern“, um unterstützte Dateien automatisch zu sichern. Alternativ tippe nach dem Download auf „In Fotos speichern“. Dafür sind die Fotoberechtigung und ein unterstütztes Format nötig."
      }
    ],
    "steps": [
      {
        "title": "Instagram-Hashtag-Link einfügen",
        "text": "Instagram-Hashtag-Links verwenden das Muster https://www.instagram.com/explore/tags/hashtag, hier mit model. Öffne „Extraktion“ (Extract) → „Stapel“ (Batch) in ClipDock und tippe auf „Einfügen“ (Paste), um den vollständigen Link einzusetzen. Der Hashtag im Pfad benötigt kein #.",
        "exampleUrl": "https://www.instagram.com/explore/tags/model"
      },
      {
        "title": "Medien zum Hashtag laden",
        "text": "Tippe auf „Liste laden“ (Load list) und warte, bis „Liste wird geladen“ (Loading list) verschwindet. Dabei werden nur auswählbare Beiträge abgerufen. Der Download startet erst, wenn du Einträge auswählst und zur Warteschlange hinzufügst. Die kostenlose Version lädt die ersten 2 Seiten; für weitere Seiten ist kostenpflichtiges VIP erforderlich."
      },
      {
        "title": "Bilder auswählen und zur Warteschlange hinzufügen",
        "text": "Prüfe, ob die Quelle model lautet, und wähle Bilder aus. Nutze bei Bedarf den Filter „Bild“ (Image) oder „Geladene auswählen“ (Select loaded). Kontrolliere auch nach dem Filtern Auswahl und Anzahl und tippe auf „Zur Download-Warteschlange“ (Add to queue). Im Beispiel sind 21 als Bilder markierte Einträge geladen und ausgewählt; die Taste zeigt „Zur Download-Warteschlange (21)“."
      },
      {
        "title": "Warteschlange und Fortschritt prüfen",
        "text": "Öffne „Verwaltung“ (Manager). Unter „Herunterladen“ (Active im Screenshot) findest du wartende und laufende Aufgaben, unter „Abgeschlossen“ (Done) fertige Downloads und unter „Fehlgeschlagen“ (Failed) Aufgaben mit Fehlern. Öffne einen Eintrag, um seinen Status zu prüfen."
      }
    ],
    "exampleNote": "Die Screenshots zeigen die Auswahl von Bildeinträgen und die laufende Warteschlange, keinen vollständigen Abschluss oder erfolgreichen Speichervorgang in Fotos. Die Gesamtzahlen in „Verwaltung“ enthalten weitere Aufgaben und sind keine Bilanz dieser Auswahl. Kontolimits und Medienzahlen gehören zum Beispiel."
  },
  "batch-download-youtube-shorts-iphone": {
    "title": "Mehrere YouTube Shorts herunterladen",
    "description": "Verwende auf iPhone oder iPad den Shorts-Seitenlink eines YouTube-Kanals. Lade die Kurzvideoliste in ClipDock, wähle die Qualität und starte mehrere Downloads. Mit vollständigem Linkbeispiel.",
    "intro": "Für mehrere Shorts benötigst du die Shorts-Seite eines Kanals. So kannst du eigene oder erlaubte Kurzvideos desselben Creators sichern, ohne jeden Link einzeln zu kopieren.",
    "tips": [
      {
        "title": "Die Ergebnisse unterscheiden sich von der Shorts-Seite",
        "text": "Prüfe die Kanalkennung und das abschließende /shorts sowie geladene Seiten und Kontolimits. Die Liste enthält möglicherweise nicht alle Shorts. „Geladene auswählen“ erfasst nur geladene Medien. Sende nicht ungeprüft die gesamte Liste erneut ab."
      }
    ],
    "faq": [
      {
        "question": "Wie unterscheiden sich Shorts-Listenlinks und einzelne Shorts-Links?",
        "answer": "Eine Adresse wie https://youtube.com/@dailymoodvideo/shorts führt zur Shorts-Liste eines Kanals. Ein Pfad wie /shorts/video-id führt zu einem einzelnen Kurzvideo. Für mehrere Downloads benötigst du den Link mit Kanalkennung und abschließendem /shorts."
      },
      {
        "question": "Werden fertige Downloads automatisch in Fotos gespeichert?",
        "answer": "Aktiviere unter „Download-Einstellungen“ die Option „Abgeschlossene Downloads automatisch in Fotos speichern“, um unterstützte Dateien automatisch zu sichern. Alternativ tippe nach dem Download auf „In Fotos speichern“. Dafür sind die Fotoberechtigung und ein unterstütztes Format nötig."
      }
    ],
    "steps": [
      {
        "title": "Shorts-Listenlink einfügen",
        "text": "Verwende die vollständige Kanaladresse nach dem Muster https://youtube.com/@kanal/shorts, hier mit @dailymoodvideo. Öffne „Extraktion“ (Extract) → „Stapel“ (Batch) in ClipDock und tippe auf „Einfügen“ (Paste). Das abschließende /shorts muss erhalten bleiben.",
        "exampleUrl": "https://youtube.com/@dailymoodvideo/shorts"
      },
      {
        "title": "Shorts-Liste laden",
        "text": "Tippe auf „Liste laden“ (Load list) und warte, bis „Liste wird geladen“ (Loading list) verschwindet. Dabei werden nur auswählbare Beiträge abgerufen. Der Download startet erst, wenn du Einträge auswählst und zur Warteschlange hinzufügst. Die kostenlose Version lädt die ersten 2 Seiten; für weitere Seiten ist kostenpflichtiges VIP erforderlich."
      },
      {
        "title": "Videos auswählen und zur Warteschlange hinzufügen",
        "text": "Prüfe die Quelle @dailymoodvideo und wähle Kurzvideos aus, bei Bedarf über „Geladene auswählen“ (Select loaded). Lege „Gemeinsame Qualität“ (Batch quality) fest, kontrolliere die Anzahl und tippe auf „Zur Download-Warteschlange“ (Add to queue). Im Beispiel sind 48 Einträge geladen und ausgewählt; die Taste zeigt „Zur Download-Warteschlange (48)“."
      },
      {
        "title": "Warteschlange und Fortschritt prüfen",
        "text": "Öffne „Verwaltung“ (Manager). Unter „Herunterladen“ (Active im Screenshot) findest du wartende und laufende Aufgaben, unter „Abgeschlossen“ (Done) fertige Downloads und unter „Fehlgeschlagen“ (Failed) Aufgaben mit Fehlern. Öffne einen Eintrag, um seinen Status zu prüfen."
      }
    ],
    "exampleNote": "Die Screenshots zeigen die laufende Warteschlange, keinen vollständigen Abschluss aller Downloads oder erfolgreichen Speichervorgang in Fotos. Die Gesamtzahlen in „Verwaltung“ enthalten weitere Aufgaben und sind keine Bilanz dieser Auswahl. Kontolimits und Medienzahlen gehören zum Beispiel."
  },
  "batch-download-youtube-hashtag-iphone": {
    "title": "Mehrere YouTube-Videos zu einem Hashtag herunterladen",
    "description": "Verwende auf iPhone oder iPad einen YouTube-Hashtag-Link, lade die Videoliste in ClipDock, wähle die Qualität und starte mehrere Downloads. Mit carmusic als Linkbeispiel.",
    "intro": "Für mehrere YouTube-Videos zu einem Thema benötigst du den Hashtag-Seitenlink. Damit kannst du eigene oder erlaubte Videos desselben Hashtags sichern, ohne die Links einzeln zu kopieren.",
    "tips": [
      {
        "title": "Die Ergebnisse unterscheiden sich von der Hashtag-Seite",
        "text": "Prüfe, ob der Link /hashtag/ enthält, und kontrolliere Hashtag, geladene Seiten und Kontolimits. Die Liste enthält möglicherweise nicht alle Videos des Hashtags. „Geladene auswählen“ erfasst nur geladene Medien. Sende nicht ungeprüft die gesamte Liste erneut ab."
      }
    ],
    "faq": [
      {
        "question": "Wie unterscheiden sich Hashtag-, Kanal- und Playlist-Links?",
        "answer": "Ein Hashtag-Link führt zu einer Themenseite mit Videos verschiedener Profile, ein Kanallink zur Seite eines Creators und ein Playlist-Link zu einer bestimmten Zusammenstellung. Verwende eine vollständige Adresse wie https://youtube.com/hashtag/carmusic und nicht nur #carmusic."
      },
      {
        "question": "Werden fertige Downloads automatisch in Fotos gespeichert?",
        "answer": "Aktiviere unter „Download-Einstellungen“ die Option „Abgeschlossene Downloads automatisch in Fotos speichern“, um unterstützte Dateien automatisch zu sichern. Alternativ tippe nach dem Download auf „In Fotos speichern“. Dafür sind die Fotoberechtigung und ein unterstütztes Format nötig."
      }
    ],
    "steps": [
      {
        "title": "Hashtag-Link einfügen",
        "text": "YouTube-Hashtag-Links verwenden das Muster https://youtube.com/hashtag/hashtag, hier mit carmusic. Öffne „Extraktion“ (Extract) → „Stapel“ (Batch) in ClipDock und tippe auf „Einfügen“ (Paste). Füge den vollständigen Link ein; der Hashtag im Pfad benötigt kein #.",
        "exampleUrl": "https://youtube.com/hashtag/carmusic"
      },
      {
        "title": "Videos zum Hashtag laden",
        "text": "Tippe auf „Liste laden“ (Load list) und warte, bis „Liste wird geladen“ (Loading list) verschwindet. Dabei werden nur auswählbare Beiträge abgerufen. Der Download startet erst, wenn du Einträge auswählst und zur Warteschlange hinzufügst. Die kostenlose Version lädt die ersten 2 Seiten; für weitere Seiten ist kostenpflichtiges VIP erforderlich."
      },
      {
        "title": "Videos auswählen und zur Warteschlange hinzufügen",
        "text": "Prüfe, ob die Quelle carmusic lautet, und wähle Videos aus, bei Bedarf über „Geladene auswählen“ (Select loaded). Lege „Gemeinsame Qualität“ (Batch quality) fest, kontrolliere die Anzahl und tippe auf „Zur Download-Warteschlange“ (Add to queue). Im Beispiel sind 36 Einträge geladen und ausgewählt; die Taste zeigt „Zur Download-Warteschlange (36)“."
      },
      {
        "title": "Warteschlange und Fortschritt prüfen",
        "text": "Öffne „Verwaltung“ (Manager). Unter „Herunterladen“ (Active im Screenshot) findest du wartende und laufende Aufgaben, unter „Abgeschlossen“ (Done) fertige Downloads und unter „Fehlgeschlagen“ (Failed) Aufgaben mit Fehlern. Öffne einen Eintrag, um seinen Status zu prüfen."
      }
    ],
    "exampleNote": "Die Screenshots zeigen die laufende Warteschlange, keinen vollständigen Abschluss aller Downloads oder erfolgreichen Speichervorgang in Fotos. Die Gesamtzahlen in „Verwaltung“ enthalten weitere Aufgaben und sind keine Bilanz dieser Auswahl. Kontolimits und Medienzahlen gehören zum Beispiel."
  },
  "batch-download-youtube-channel-iphone": {
    "title": "Mehrere Videos eines YouTube-Kanals herunterladen",
    "description": "Kopiere auf iPhone oder iPad einen YouTube-Kanallink, lade und prüfe mehrere Videos in ClipDock und starte die Downloads. Mit Hinweisen zu fehlenden Einträgen und Fehlern.",
    "intro": "Für Kanal-Downloads benötigst du die Startseite des Creators, nicht den Link eines einzelnen Videos. Sichere eigene Kanalbeiträge oder erlaubte Videos, ohne jeden Link einzeln zu kopieren.",
    "tips": [
      {
        "title": "Die Anzahl weicht vom Kanal ab",
        "text": "Prüfe geladene Seiten, Kontolimits und nicht zugängliche Beiträge. Die im Kanal genannte Anzahl ist nicht die Zahl aktuell ladbarer Videos. „Geladene auswählen“ erfasst nur geladene Medien. Sende nicht ungeprüft den gesamten Kanal erneut ab."
      }
    ],
    "faq": [
      {
        "question": "Wie unterscheiden sich Kanal- und Playlist-Downloads?",
        "answer": "Beide laden mehrere Videos, verwenden aber unterschiedliche Seiten und umfassen andere Beiträge. Ein Kanallink verweist auf ein Creator-Profil, ein Playlist-Link auf eine bestimmte Zusammenstellung. Prüfe jeweils die tatsächlichen Ergebnisse."
      },
      {
        "question": "Werden fertige Downloads automatisch in Fotos gespeichert?",
        "answer": "Aktiviere unter „Download-Einstellungen“ die Option „Abgeschlossene Downloads automatisch in Fotos speichern“, um unterstützte Dateien automatisch zu sichern. Alternativ tippe nach dem Download auf „In Fotos speichern“. Dafür sind die Fotoberechtigung und ein unterstütztes Format nötig."
      }
    ],
    "steps": [
      {
        "title": "YouTube-Kanallink kopieren",
        "text": "Öffne den gewünschten YouTube-Kanal, nutze die Teilen-Funktion und tippe auf „Link kopieren“ (Copy link). Der Beispielkanal ist @fashion-house-mafia. Prüfe, ob du einen Kanallink kopiert hast, nicht den Link eines Videos oder einer Playlist."
      },
      {
        "title": "Kanallink einfügen",
        "text": "Öffne in ClipDock „Extraktion“ (Extract) → „Stapel“ (Batch) und tippe auf „Einfügen“ (Paste). Die kostenlose Version lädt die ersten 2 Seiten. Für weitere Seiten ist kostenpflichtiges VIP nötig; maßgeblich sind die Angaben in der App."
      },
      {
        "title": "Videoliste des Kanals laden",
        "text": "Tippe auf „Liste laden“ (Load list) und warte, bis „Liste wird geladen“ (Loading list) verschwindet. Dabei werden nur auswählbare Beiträge abgerufen. Der Download startet erst, wenn du Einträge auswählst und zur Warteschlange hinzufügst. Die kostenlose Version lädt die ersten 2 Seiten; für weitere Seiten ist kostenpflichtiges VIP erforderlich."
      },
      {
        "title": "Videos auswählen und zur Warteschlange hinzufügen",
        "text": "Prüfe die Quelle und wähle Videos oder Bilder aus. Nutze bei Bedarf Medienfilter oder „Geladene auswählen“ (Select loaded). Lege „Gemeinsame Qualität“ (Batch quality) fest, kontrolliere die Anzahl und tippe auf „Zur Download-Warteschlange“ (Add to queue)."
      },
      {
        "title": "Warteschlange und Fortschritt prüfen",
        "text": "Öffne „Verwaltung“ (Manager). Unter „Herunterladen“ (Active im Screenshot) findest du wartende und laufende Aufgaben, unter „Abgeschlossen“ (Done) fertige Downloads und unter „Fehlgeschlagen“ (Failed) Aufgaben mit Fehlern. Öffne einen Eintrag, um seinen Status zu prüfen."
      }
    ],
    "exampleNote": "Die Screenshots zeigen die laufende Warteschlange, keinen vollständigen Abschluss aller Downloads oder erfolgreichen Speichervorgang in Fotos. Die Gesamtzahlen in „Verwaltung“ enthalten weitere Aufgaben und sind keine Bilanz dieser Auswahl. Kontolimits und Medienzahlen gehören zum Beispiel."
  },
  "download-youtube-playlist-iphone": {
    "title": "Mehrere Videos einer YouTube-Playlist herunterladen",
    "description": "Kopiere auf iPhone oder iPad einen YouTube-Playlist-Link, lade und prüfe mehrere Videos in ClipDock und starte die Downloads. Mit Hinweisen zu fehlenden Einträgen und Fehlern.",
    "intro": "Für Playlist-Downloads benötigst du die Liste und nicht den Link eines einzelnen Videos. So kannst du eigene Serien oder erlaubte Kursvideos sichern, ohne jeden Link einzeln zu kopieren.",
    "tips": [
      {
        "title": "Die Anzahl weicht von der Playlist ab",
        "text": "Prüfe, ob einzelne Beiträge nicht zugänglich sind und der kopierte Link zur richtigen Playlist gehört. Die angezeigte Gesamtzahl ist nicht die Zahl aktuell ladbarer Videos. Sende nicht ungeprüft die ganze Liste erneut ab."
      }
    ],
    "faq": [
      {
        "question": "Kann ich diese Playlist-Anleitung unverändert für Kanäle nutzen?",
        "answer": "Nicht vollständig. Beide Abläufe laden mehrere Videos, verwenden aber andere Seiten und umfassen unterschiedliche Beiträge. Prüfe die tatsächlich zurückgegebenen Ergebnisse."
      },
      {
        "question": "Werden fertige Downloads automatisch in Fotos gespeichert?",
        "answer": "Aktiviere unter „Download-Einstellungen“ die Option „Abgeschlossene Downloads automatisch in Fotos speichern“, um unterstützte Dateien automatisch zu sichern. Alternativ tippe nach dem Download auf „In Fotos speichern“. Dafür sind die Fotoberechtigung und ein unterstütztes Format nötig."
      }
    ],
    "steps": [
      {
        "title": "Playlist-Link einfügen",
        "text": "Kopiere den Freigabelink der YouTube-Playlist. Öffne in ClipDock „Extraktion“ (Extract) → „Stapel“ (Batch) und tippe auf „Einfügen“ (Paste). Achte auf einen Playlist-Link, nicht die Adresse eines einzelnen Videos."
      },
      {
        "title": "Playlist laden",
        "text": "Tippe auf „Liste laden“ (Load list) und warte, bis „Liste wird geladen“ (Loading list) verschwindet. Dabei werden nur auswählbare Beiträge abgerufen. Der Download startet erst, wenn du Einträge auswählst und zur Warteschlange hinzufügst. Die kostenlose Version lädt die ersten 2 Seiten; für weitere Seiten ist kostenpflichtiges VIP erforderlich."
      },
      {
        "title": "Videos auswählen und zur Warteschlange hinzufügen",
        "text": "Prüfe die Quelle und wähle Videos oder Bilder aus. Nutze bei Bedarf Medienfilter oder „Geladene auswählen“ (Select loaded). Lege „Gemeinsame Qualität“ (Batch quality) fest, kontrolliere die Anzahl und tippe auf „Zur Download-Warteschlange“ (Add to queue)."
      },
      {
        "title": "Warteschlange und Fortschritt prüfen",
        "text": "Öffne „Verwaltung“ (Manager). Unter „Herunterladen“ (Active im Screenshot) findest du wartende und laufende Aufgaben, unter „Abgeschlossen“ (Done) fertige Downloads und unter „Fehlgeschlagen“ (Failed) Aufgaben mit Fehlern. Öffne einen Eintrag, um seinen Status zu prüfen."
      }
    ],
    "exampleNote": "Die Screenshots zeigen die laufende Warteschlange, keinen vollständigen Abschluss aller Downloads oder erfolgreichen Speichervorgang in Fotos. Die Gesamtzahlen in „Verwaltung“ enthalten weitere Aufgaben und sind keine Bilanz dieser Auswahl. Kontolimits und Medienzahlen gehören zum Beispiel."
  },
  "batch-download-instagram-profile-iphone": {
    "title": "Mehrere Beiträge eines Instagram-Profils herunterladen",
    "description": "Speichere auf iPhone oder iPad mehrere Beiträge desselben Instagram-Profils: Profillink kopieren, unter „Stapel“ die Liste laden und gewünschte Medien auswählen.",
    "intro": "Speichere mehrere Beiträge desselben Instagram-Profils: Kopiere den Profillink, lade unter „Stapel“ die Liste und wähle die gewünschten Medien zum Download aus.",
    "tips": [
      {
        "title": "Zuerst den geladenen Umfang prüfen",
        "text": "Die Profilliste zeigt die tatsächlich zurückgegebenen Ergebnisse. Sie umfasst nicht zwangsläufig Stories, private oder gelöschte Inhalte oder die gesamte Historie. Prüfe vor dem Start Profil, Medientyp und ausgewählte Anzahl."
      }
    ],
    "faq": [
      {
        "question": "Kann ich nur Videos herunterladen und Bilder auslassen?",
        "answer": "Nutze den Filter „Video“ und prüfe anschließend die ausgewählten Einträge und die Zahl bei „Zur Download-Warteschlange“, bevor du startest."
      },
      {
        "question": "Startet „Liste laden“ bereits den Download?",
        "answer": "Nein. Du musst nach dem Laden Einträge auswählen und auf „Zur Download-Warteschlange“ tippen."
      },
      {
        "question": "Warum stehen dort 12 posts und 16 items?",
        "answer": "Beiträge und Medien werden unterschiedlich gezählt. Ein Beitrag mit mehreren Bildern kann mehrere Dateien enthalten. Für die Download-Anzahl zählen die Auswahl und die Zahl auf der Warteschlangen-Taste."
      },
      {
        "question": "Gilt die unbegrenzte Anzeige im Screenshot für alle?",
        "answer": "Nein. Maßgeblich sind das Download-Kontingent und die Einschränkungen deines eigenen Kontos."
      }
    ],
    "steps": [
      {
        "title": "Instagram-Profillink kopieren",
        "text": "Öffne das gewünschte Instagram-Profil und tippe oben rechts auf die drei Punkte. Wähle „Profil-URL kopieren“ (Copy profile URL). Hier benötigst du die Profiladresse. Für ein einzelnes Reel gibt es die Anleitung für Einzelvideos."
      },
      {
        "title": "Link einfügen",
        "text": "Öffne in ClipDock „Extraktion“ (Extract) → „Stapel“ (Batch), tippe auf „Einfügen“ (Paste) und prüfe, ob es der gewünschte Instagram-Profillink ist."
      },
      {
        "title": "Beiträge des Profils laden",
        "text": "Tippe auf „Liste laden“ (Load list) und warte, bis „Liste wird geladen“ (Loading list) endet. Dabei werden nur auswählbare Beiträge abgerufen. Downloads entstehen erst nach der Auswahl und dem Hinzufügen zur Warteschlange. Kostenlos sind die ersten 2 Seiten; weitere Seiten erfordern kostenpflichtiges VIP."
      },
      {
        "title": "Medien filtern und zur Warteschlange hinzufügen",
        "text": "Prüfe die Quelle und wähle Videos oder Bilder aus. Nutze bei Bedarf Medienfilter oder „Geladene auswählen“ (Select loaded). Lege „Gemeinsame Qualität“ (Batch quality) fest, kontrolliere die Anzahl und tippe auf „Zur Download-Warteschlange“ (Add to queue).",
        "sections": [
          {
            "title": "Alle, Video, Bild: nach Medientyp filtern",
            "text": "„Alle“ (All) zeigt alle Typen, „Video“ nur Videos und „Bild“ (Image) nur Bilder. Wähle für reine Video-Downloads „Video“ und kontrolliere vor dem Start die Markierungen und die Gesamtauswahl, damit keine unerwünschten Bilder mitgeladen werden."
          },
          {
            "title": "Warum unterscheiden sich Beitrags- und Medienzahl?",
            "text": "Ein Beitrag kann mehrere Mediendateien enthalten. Bei Beiträgen mit mehreren Bildern ist die Medienzahl deshalb höher als die Beitragszahl. Prüfe vor dem Download die gewählte Anzahl."
          },
          {
            "title": "Einzeln oder alle geladenen Einträge auswählen",
            "text": "Ein blauer Haken rechts markiert ausgewählte Einträge. Passe die Auswahl an oder nutze „Geladene auswählen“ für bereits geladene Einträge. Prüfe die angezeigte Auswahlzahl. Mit „Link ändern“ (Change link) kannst du einen anderen Profillink verwenden."
          },
          {
            "title": "Eine gemeinsame Download-Qualität wählen",
            "text": "„Download-Einstellungen verwenden“ (Follow download settings) übernimmt deine dort gespeicherte Qualitätswahl. Tippe auf „Gemeinsame Qualität“, prüfe die verfügbaren Optionen und bestätige, bevor du die Auswahl zur Warteschlange hinzufügst."
          }
        ]
      },
      {
        "title": "Aufgaben in „Verwaltung“ prüfen",
        "text": "Öffne „Verwaltung“ (Manager). Unter „Herunterladen“ (Active im Screenshot) findest du wartende und laufende Aufgaben, unter „Abgeschlossen“ (Done) fertige Downloads und unter „Fehlgeschlagen“ (Failed) Aufgaben mit Fehlern. Öffne einen Eintrag, um seinen Status zu prüfen.",
        "sections": [
          {
            "title": "Eine wartende Aufgabe ist noch kein fertiger Download",
            "text": "„Wartet auf Download“ (Queued) bedeutet, dass die Aufgabe noch in der Warteschlange steht. Unter „Abgeschlossen“ kannst du fertige Dateien ansehen, unter „Fehlgeschlagen“ die Fehler prüfen. Wurde eine Datei nicht automatisch gespeichert, tippe auf „In Fotos speichern“ (Save to Photos), um eine Kopie in Fotos zu sichern."
          }
        ]
      }
    ],
    "exampleNote": "Die Screenshots zeigen die laufende Warteschlange, keinen vollständigen Abschluss aller Downloads oder erfolgreichen Speichervorgang in Fotos. Die Gesamtzahlen in „Verwaltung“ enthalten weitere Aufgaben und sind keine Bilanz dieser Auswahl. Kontolimits und Medienzahlen gehören zum Beispiel."
  },
  "batch-download-tiktok-profile-iphone": {
    "title": "Mehrere Videos eines TikTok-Profils herunterladen",
    "description": "Speichere auf iPhone oder iPad mehrere Beiträge desselben TikTok-Profils: Profillink kopieren, unter „Stapel“ die Liste laden und gewünschte Medien auswählen.",
    "intro": "Speichere mehrere Beiträge desselben TikTok-Profils: Kopiere den Profillink, lade unter „Stapel“ die Liste und wähle die gewünschten Medien zum Download aus.",
    "tips": [
      {
        "title": "Gewünschte Beiträge gezielt auswählen",
        "text": "Für mehrere Beiträge desselben Creators eignet sich ein Profillink. Wenn du nur ein Video benötigst, lässt sich das Ziel über den einzelnen Videolink leichter prüfen. Kontrolliere vor einem erneuten Profil-Download bereits gespeicherte Inhalte, um Duplikate zu vermeiden."
      }
    ],
    "faq": [
      {
        "question": "Startet das Laden eines Profils schon die Downloads?",
        "answer": "Nein. Wähle zuerst Medien aus, prüfe Qualität und Anzahl und tippe dann auf „Zur Download-Warteschlange“."
      },
      {
        "question": "Erscheinen alle Beiträge des Profils in der Liste?",
        "answer": "Das ist nicht garantiert. Maßgeblich sind die tatsächlich geladenen Medien. Die Liste ist keine vollständige Sicherung aller historischen oder zugriffsbeschränkten Inhalte."
      },
      {
        "question": "Warum haben manche Einträge nur einen allgemeinen Titel?",
        "answer": "Manche Einträge verwenden einen allgemeinen Medientitel. Nutze Vorschaubild, Medientyp und Datum zur Zuordnung und prüfe nach dem Download die Datei."
      }
    ],
    "steps": [
      {
        "title": "Profillink kopieren",
        "text": "Öffne das gewünschte TikTok-Profil und tippe oben rechts auf den Teilen-Pfeil. Wähle im Menü „Senden an“ (Send to) die Option „Link kopieren“ (Copy link). Hier kopierst du das Profil, nicht ein Einzelvideo."
      },
      {
        "title": "Profiladresse einfügen",
        "text": "Öffne in ClipDock „Extraktion“ (Extract) → „Stapel“ (Batch), tippe auf „Einfügen“ (Paste) und prüfe, ob es der gewünschte TikTok-Profillink ist."
      },
      {
        "title": "Liste laden und Ergebnis abwarten",
        "text": "Tippe auf „Liste laden“ (Load list) und warte, bis „Liste wird geladen“ (Loading list) endet. Dabei werden nur auswählbare Medien geladen. Der Download startet erst nach der Auswahl und einem Tippen auf „Zur Download-Warteschlange“ (Add to queue). Kostenlos sind die ersten 2 Seiten; weitere Seiten erfordern kostenpflichtiges VIP."
      },
      {
        "title": "Medien und Qualität wählen und Downloads einreihen",
        "text": "Prüfe die Quelle und wähle Videos oder Bilder aus. Nutze bei Bedarf Medienfilter oder „Geladene auswählen“ (Select loaded). Lege „Gemeinsame Qualität“ (Batch quality) fest, prüfe die Anzahl und tippe auf „Zur Download-Warteschlange“.",
        "sections": [
          {
            "title": "Medien nach Typ filtern",
            "text": "„Alle“ (All) zeigt sämtliche Medien, „Video“ nur Videos und „Bild“ (Image) nur Bilder. Wähle für reine Video-Downloads zuerst „Video“ und kontrolliere die Markierungen und Auswahlzahl. Blaue Haken rechts kennzeichnen gewählte Einträge und lassen sich anpassen."
          },
          {
            "title": "Alle geladenen Einträge und ihren Umfang prüfen",
            "text": "„Geladene auswählen“ markiert die geladenen Einträge. posts zählt Beiträge, items zählt Medien; ein Beitrag kann mehrere Dateien enthalten. Beide Zahlen können daher abweichen. Die aktuelle Liste ist nicht die gesamte Profilhistorie. Mit „Link ändern“ (Change link) kannst du das Profil wechseln."
          },
          {
            "title": "Eine gemeinsame Download-Qualität wählen",
            "text": "„Download-Einstellungen verwenden“ (Follow download settings) übernimmt deine dort gespeicherte Qualitätswahl. Tippe auf „Gemeinsame Qualität“, prüfe die verfügbaren Optionen und bestätige, bevor du die Auswahl zur Warteschlange hinzufügst."
          },
          {
            "title": "Anzahl und Kontolimits in der App prüfen",
            "text": "Kontrolliere vor dem Start die Auswahlzahl und dein verfügbares Download-Kontingent. posts zählt Beiträge, items zählt Mediendateien; die Zahlen können abweichen. Tippe zum Wechseln der Quelle auf „Link ändern“."
          }
        ]
      },
      {
        "title": "Fortschritt und fehlgeschlagene Aufgaben ansehen",
        "text": "Öffne „Verwaltung“ (Manager). Unter „Herunterladen“ (Active im Screenshot) findest du wartende und laufende Aufgaben, unter „Abgeschlossen“ (Done) fertige Downloads und unter „Fehlgeschlagen“ (Failed) Aufgaben mit Fehlern. Öffne einen Eintrag, um seinen Status zu prüfen.",
        "sections": [
          {
            "title": "Wartend, laufend oder abgeschlossen",
            "text": "„Wartet auf Download“ (Queued) bedeutet, dass die Aufgabe noch in der Warteschlange steht. Unter „Abgeschlossen“ kannst du fertige Dateien ansehen, unter „Fehlgeschlagen“ die Fehler prüfen. Wurde eine Datei nicht automatisch gespeichert, tippe auf „In Fotos speichern“ (Save to Photos), um eine Kopie in Fotos zu sichern."
          },
          {
            "title": "Fehlgeschlagene Aufgaben prüfen",
            "text": "Öffne die fehlgeschlagene Aufgabe und lies die Fehlermeldung. Prüfe Quelllink und Netzwerk und versuche es gegebenenfalls erneut. Die Gesamtzahl fehlgeschlagener Aufgaben allein erklärt die Ursache nicht."
          }
        ]
      }
    ],
    "exampleNote": "Die Screenshots zeigen die laufende Warteschlange, keinen vollständigen Abschluss aller Downloads oder erfolgreichen Speichervorgang in Fotos. Die Gesamtzahlen in „Verwaltung“ enthalten weitere Aufgaben und sind keine Bilanz dieser Auswahl. Kontolimits und Medienzahlen gehören zum Beispiel."
  },
  "batch-download-douyin-profile-iphone": {
    "title": "Mehrere Videos eines Douyin-Profils herunterladen",
    "description": "Speichere auf iPhone oder iPad mehrere Beiträge desselben Douyin-Profils: Profillink kopieren, unter „Stapel“ die Liste laden und gewünschte Medien auswählen.",
    "intro": "Speichere mehrere Beiträge desselben Douyin-Profils: Kopiere den Profillink, lade unter „Stapel“ die Liste und wähle die gewünschten Medien aus. Diese Anleitung nutzt TikTok-Screenshots zur Veranschaulichung und dokumentiert keinen Douyin-Test. Verwende deinen eigenen Douyin-Profillink.",
    "tips": [
      {
        "title": "Gewünschte Beiträge gezielt auswählen",
        "text": "Für mehrere Beiträge desselben Creators eignet sich ein Profillink. Wenn du nur ein Video benötigst, lässt sich das Ziel über den einzelnen Videolink leichter prüfen. Kontrolliere vor einem erneuten Profil-Download bereits gespeicherte Inhalte, um Duplikate zu vermeiden."
      }
    ],
    "faq": [
      {
        "question": "Startet das Laden eines Profils schon die Downloads?",
        "answer": "Nein. Wähle zuerst Medien aus, prüfe Qualität und Anzahl und tippe dann auf „Zur Download-Warteschlange“."
      },
      {
        "question": "Erscheinen alle Beiträge des Profils in der Liste?",
        "answer": "Das ist nicht garantiert. Maßgeblich sind die tatsächlich geladenen Medien. Die Liste ist keine vollständige Sicherung aller historischen oder zugriffsbeschränkten Inhalte."
      },
      {
        "question": "Warum haben manche Einträge nur einen allgemeinen Titel?",
        "answer": "Manche Einträge verwenden einen allgemeinen Medientitel. Nutze Vorschaubild, Medientyp und Datum zur Zuordnung und prüfe nach dem Download die Datei."
      }
    ],
    "steps": [
      {
        "title": "Profillink kopieren",
        "text": "Öffne das Profil in Douyin und kopiere den Link über das Teilen-Menü des Profils."
      },
      {
        "title": "Profiladresse einfügen",
        "text": "Öffne in ClipDock „Extraktion“ (Extract) → „Stapel“ (Batch), tippe auf „Einfügen“ (Paste) und prüfe, ob es der gewünschte Douyin-Profillink ist."
      },
      {
        "title": "Liste laden und Ergebnis abwarten",
        "text": "Tippe auf „Liste laden“ (Load list) und warte, bis „Liste wird geladen“ (Loading list) endet. Dabei werden nur auswählbare Medien geladen. Der Download startet erst nach der Auswahl und einem Tippen auf „Zur Download-Warteschlange“ (Add to queue). Kostenlos sind die ersten 2 Seiten; weitere Seiten erfordern kostenpflichtiges VIP."
      },
      {
        "title": "Medien und Qualität wählen und Downloads einreihen",
        "text": "Prüfe die Quelle und wähle Videos oder Bilder aus. Nutze bei Bedarf Medienfilter oder „Geladene auswählen“ (Select loaded). Lege „Gemeinsame Qualität“ (Batch quality) fest, prüfe die Anzahl und tippe auf „Zur Download-Warteschlange“.",
        "sections": [
          {
            "title": "Medien nach Typ filtern",
            "text": "„Alle“ (All) zeigt sämtliche Medien, „Video“ nur Videos und „Bild“ (Image) nur Bilder. Wähle für reine Video-Downloads zuerst „Video“ und kontrolliere die Markierungen und Auswahlzahl. Blaue Haken rechts kennzeichnen gewählte Einträge und lassen sich anpassen."
          },
          {
            "title": "Alle geladenen Einträge und ihren Umfang prüfen",
            "text": "„Geladene auswählen“ markiert die geladenen Einträge. posts zählt Beiträge, items zählt Medien; ein Beitrag kann mehrere Dateien enthalten. Beide Zahlen können daher abweichen. Die aktuelle Liste ist nicht die gesamte Profilhistorie. Mit „Link ändern“ (Change link) kannst du das Profil wechseln."
          },
          {
            "title": "Eine gemeinsame Download-Qualität wählen",
            "text": "„Download-Einstellungen verwenden“ (Follow download settings) übernimmt deine dort gespeicherte Qualitätswahl. Tippe auf „Gemeinsame Qualität“, prüfe die verfügbaren Optionen und bestätige, bevor du die Auswahl zur Warteschlange hinzufügst."
          },
          {
            "title": "Anzahl und Kontolimits in der App prüfen",
            "text": "Kontrolliere vor dem Start die Auswahlzahl und dein verfügbares Download-Kontingent. posts zählt Beiträge, items zählt Mediendateien; die Zahlen können abweichen. Tippe zum Wechseln der Quelle auf „Link ändern“."
          }
        ]
      },
      {
        "title": "Fortschritt und fehlgeschlagene Aufgaben ansehen",
        "text": "Öffne „Verwaltung“ (Manager). Unter „Herunterladen“ (Active im Screenshot) findest du wartende und laufende Aufgaben, unter „Abgeschlossen“ (Done) fertige Downloads und unter „Fehlgeschlagen“ (Failed) Aufgaben mit Fehlern. Öffne einen Eintrag, um seinen Status zu prüfen.",
        "sections": [
          {
            "title": "Wartend, laufend oder abgeschlossen",
            "text": "„Wartet auf Download“ (Queued) bedeutet, dass die Aufgabe noch in der Warteschlange steht. Unter „Abgeschlossen“ kannst du fertige Dateien ansehen, unter „Fehlgeschlagen“ die Fehler prüfen. Wurde eine Datei nicht automatisch gespeichert, tippe auf „In Fotos speichern“ (Save to Photos), um eine Kopie in Fotos zu sichern."
          },
          {
            "title": "Fehlgeschlagene Aufgaben prüfen",
            "text": "Öffne die fehlgeschlagene Aufgabe und lies die Fehlermeldung. Prüfe Quelllink und Netzwerk und versuche es gegebenenfalls erneut. Die Gesamtzahl fehlgeschlagener Aufgaben allein erklärt die Ursache nicht."
          }
        ]
      }
    ],
    "exampleNote": "Die TikTok-Screenshots dienen zur Veranschaulichung; Konten, Links und Zahlen belegen keinen Douyin-Test. Gezeigt wird die laufende Warteschlange, kein vollständiger Abschluss oder erfolgreicher Speichervorgang in Fotos. Die Gesamtzahlen in „Verwaltung“ enthalten andere Aufgaben und sind keine Bilanz dieser Auswahl. Kontolimits und Medienzahlen gehören zum Beispiel."
  },
  "batch-download-weibo-profile-iphone": {
    "title": "Mehrere Videos eines Weibo-Profils herunterladen",
    "description": "Speichere auf iPhone oder iPad mehrere Beiträge desselben Weibo-Profils: Profillink kopieren, unter „Stapel“ die Liste laden und gewünschte Medien auswählen.",
    "intro": "Speichere mehrere Beiträge desselben Weibo-Profils: Kopiere den Profillink, lade unter „Stapel“ die Liste und wähle die gewünschten Medien zum Download aus.",
    "tips": [
      {
        "title": "Den Umfang schrittweise prüfen",
        "text": "Wähle zuerst die gewünschten Beiträge und lade bei Bedarf die nächste Seite. Prüfe vor einem erneuten Profil-Download bereits gespeicherte Inhalte, um Duplikate zu vermeiden. Die zurückgegebene Liste ist keine vollständige Sicherung der gesamten Historie."
      }
    ],
    "faq": [
      {
        "question": "Warum enthält die Liste nur 16 Einträge?",
        "answer": "Anfangs zeigt die Liste nur bereits geladene Seiten. Gibt es weitere Beiträge, kannst du mit „Nächste Seite laden“ fortfahren. Die kostenlose Version lädt höchstens die ersten 2 Seiten."
      },
      {
        "question": "Startet „Nächste Seite laden“ einen Download?",
        "answer": "Das Laden der Liste und der Download sind getrennte Schritte. Prüfe deine Auswahl und tippe auf „Zur Download-Warteschlange“, um die Aufgaben hinzuzufügen."
      },
      {
        "question": "Kann ich nur einen Teil der Videos herunterladen?",
        "answer": "Passe die Haken an den Einträgen nach Bedarf an. Prüfe auch nach dem Filtern auf „Video“ die Gesamtauswahl und die Zahl bei „Zur Download-Warteschlange“, bevor du startest."
      }
    ],
    "steps": [
      {
        "title": "Weibo-Profillink kopieren",
        "text": "Öffne das Profil in Weibo, öffne das Teilen-Menü und kopiere den Link. Verwende die Profiladresse, nicht den Link eines einzelnen Beitrags."
      },
      {
        "title": "Profiladresse einfügen",
        "text": "Öffne in ClipDock „Extraktion“ (Extract) → „Stapel“ (Batch), tippe auf „Einfügen“ (Paste) und prüfe, ob es der gewünschte Weibo-Profillink ist."
      },
      {
        "title": "Liste laden und Antwort abwarten",
        "text": "Tippe auf „Liste laden“ (Load list) und warte, solange „Liste wird geladen“ (Loading list) angezeigt wird. Dabei startet noch kein Download. Wähle anschließend Medien und tippe auf „Zur Download-Warteschlange“ (Add to queue). Kostenlos sind die ersten 2 Seiten; weitere Seiten erfordern kostenpflichtiges VIP."
      },
      {
        "title": "Videos wählen und bei Bedarf weiterblättern",
        "text": "Prüfe die Quelle und wähle Videos oder Bilder aus. Nutze bei Bedarf Medienfilter oder „Geladene auswählen“ (Select loaded). Lege „Gemeinsame Qualität“ (Batch quality) fest, prüfe die Anzahl und tippe auf „Zur Download-Warteschlange“.",
        "sections": [
          {
            "title": "Weitere Beiträge auf der nächsten Seite laden",
            "text": "Tippe auf „Nächste Seite laden“ (Load next page), um weitere Einträge abzurufen. Prüfe danach die neuen Inhalte und die Auswahlzahl. Die geladene Liste umfasst nicht zwangsläufig alle früheren oder zugriffsbeschränkten Beiträge."
          },
          {
            "title": "Gewünschte Medien filtern und auswählen",
            "text": "„Alle“ (All) zeigt alle Typen, „Video“ nur Videos und „Bild“ (Image) nur Bilder. Blaue Haken rechts markieren die Auswahl. „Geladene auswählen“ markiert bereits geladene Einträge. Passe die Auswahl für einzelne Videos an und prüfe die Anzahl auf der Taste unten."
          },
          {
            "title": "Gemeinsame Qualität wählen und Downloads einreihen",
            "text": "„Download-Einstellungen verwenden“ (Follow download settings) übernimmt deine dort gespeicherte Qualitätswahl. Tippe auf „Gemeinsame Qualität“, prüfe die verfügbaren Optionen und bestätige, bevor du die Auswahl zur Warteschlange hinzufügst."
          },
          {
            "title": "Beiträge, Medien und Nutzungslimits",
            "text": "Prüfe vor dem Start die Auswahlzahl und dein verfügbares Download-Kontingent. posts zählt Beiträge, items zählt Mediendateien; die Zahlen können abweichen. Mit „Link ändern“ (Change link) wechselst du die Quelle."
          }
        ]
      },
      {
        "title": "Warteschlange in „Verwaltung“ ansehen",
        "text": "Öffne „Verwaltung“ (Manager). Unter „Herunterladen“ (Active im Screenshot) findest du wartende und laufende Aufgaben, unter „Abgeschlossen“ (Done) fertige Downloads und unter „Fehlgeschlagen“ (Failed) Aufgaben mit Fehlern. Öffne einen Eintrag, um seinen Status zu prüfen.",
        "sections": [
          {
            "title": "Nach Abschluss ansehen und speichern",
            "text": "„Wartet auf Download“ (Queued) bedeutet, dass die Aufgabe noch in der Warteschlange steht. Unter „Abgeschlossen“ kannst du fertige Dateien ansehen, unter „Fehlgeschlagen“ die Fehler prüfen. Wurde eine Datei nicht automatisch gespeichert, tippe auf „In Fotos speichern“ (Save to Photos), um eine Kopie in Fotos zu sichern."
          },
          {
            "title": "Fehlgeschlagene Einträge prüfen",
            "text": "Öffne die fehlgeschlagene Aufgabe und lies die Fehlermeldung. Prüfe Quelllink und Netzwerk und versuche es gegebenenfalls erneut. Die Gesamtzahl fehlgeschlagener Aufgaben allein erklärt die Ursache nicht."
          }
        ]
      }
    ],
    "exampleNote": "Die Screenshots zeigen die laufende Warteschlange, keinen vollständigen Abschluss aller Downloads oder erfolgreichen Speichervorgang in Fotos. Die Gesamtzahlen in „Verwaltung“ enthalten weitere Aufgaben und sind keine Bilanz dieser Auswahl. Kontolimits und Medienzahlen gehören zum Beispiel."
  },
  "batch-download-bilibili-profile-iphone": {
    "title": "Mehrere Videos eines Bilibili-Profils herunterladen",
    "description": "Speichere auf iPhone oder iPad mehrere Beiträge desselben Bilibili-Profils: Profillink kopieren, unter „Stapel“ die Liste laden und gewünschte Medien auswählen.",
    "intro": "Speichere mehrere Beiträge desselben Bilibili-Profils: Kopiere den Profillink, lade unter „Stapel“ die Liste und wähle die gewünschten Medien zum Download aus.",
    "tips": [
      {
        "title": "Beiträge aus der tatsächlichen Liste wählen",
        "text": "Für den Umfang zählen die tatsächlich zurückgegebenen Profilbeiträge. Die Liste ist keine vollständige Sicherung aller früheren oder zugriffsbeschränkten Inhalte. Prüfe vor einem erneuten Start, was du bereits heruntergeladen hast."
      }
    ],
    "faq": [
      {
        "question": "Kann ich einen b23.tv-Kurzlink direkt einfügen?",
        "answer": "Im Beispiel wurde ein b23.tv-Kurzlink vom Profil kopiert und die Beitragsliste damit geladen. Prüfe, ob der Link tatsächlich vom Profil stammt und das Ergebnis den richtigen Creator zeigt."
      },
      {
        "question": "Warum gibt es nur 20 Medien?",
        "answer": "Im Beispiel ist zunächst eine Seite geladen. Unten kannst du mit „Nächste Seite laden“ weitere Ergebnisse abrufen. Kostenlos sind höchstens die ersten 2 Seiten verfügbar."
      },
      {
        "question": "Zeigt die Anleitung auch Sammlungen, Favoriten oder mehrteilige Videos?",
        "answer": "Diese Anleitung behandelt Beiträge eines Profils. Sammlungen, Favoriten und mehrteilige Videos verwenden andere Links und werden hier nicht gezeigt."
      },
      {
        "question": "Ist die höchste Qualität immer verfügbar?",
        "answer": "Nein. Die verfügbare Qualität hängt von den Medien ab, die zum Link zurückgegeben werden. Prüfe „Gemeinsame Qualität“, bevor du Downloads einreihst."
      }
    ],
    "steps": [
      {
        "title": "Freigabelink des Bilibili-Profils kopieren",
        "text": "Öffne das Profil in Bilibili und kopiere den Link über das Teilen-Menü. Prüfe, ob du das Profil teilst und nicht ein einzelnes Video."
      },
      {
        "title": "Profil-Kurzlink einfügen",
        "text": "Öffne in ClipDock „Extraktion“ (Extract) → „Stapel“ (Batch), tippe auf „Einfügen“ (Paste) und prüfe, ob es der gewünschte Bilibili-Profillink ist.",
        "sections": [
          {
            "title": "Auch bei Kurzlinks die Quelle prüfen",
            "text": "Der kopierte Kurzlink wird im Beispiel unverändert verwendet. Die Domain b23.tv allein zeigt nicht, ob ein Profil oder Einzelvideo verlinkt ist. Kopiere den Link vom Profil und prüfe nach dem Laden den Namen des Creators."
          }
        ]
      },
      {
        "title": "Liste der Beiträge laden",
        "text": "Tippe auf „Liste laden“ (Load list) und warte, bis „Liste wird geladen“ (Loading list) endet. Dabei werden nur auswählbare Medien abgerufen. Wähle anschließend die Einträge und füge sie zur Warteschlange hinzu. Kostenlos sind die ersten 2 Seiten; weitere Seiten erfordern kostenpflichtiges VIP."
      },
      {
        "title": "Videos wählen und bei Bedarf die nächste Seite laden",
        "text": "Prüfe die Quelle und wähle Videos oder Bilder aus. Nutze bei Bedarf Medienfilter oder „Geladene auswählen“ (Select loaded). Lege „Gemeinsame Qualität“ (Batch quality) fest, kontrolliere die Anzahl und tippe auf „Zur Download-Warteschlange“ (Add to queue).",
        "sections": [
          {
            "title": "Weitere Profilbeiträge laden",
            "text": "Tippe auf „Nächste Seite laden“ (Load next page), um weitere Einträge abzurufen. Prüfe danach die neuen Inhalte und die Auswahlzahl. Die geladene Liste umfasst nicht zwangsläufig alle früheren oder zugriffsbeschränkten Beiträge."
          },
          {
            "title": "Download-Auswahl filtern und anpassen",
            "text": "„Alle“ (All) zeigt alle Typen, „Video“ nur Videos und „Bild“ (Image) nur Bilder. Blaue Haken rechts kennzeichnen gewählte Einträge und lassen sich anpassen. „Geladene auswählen“ markiert geladene Einträge. Prüfe vor dem Start die Gesamtauswahl, um unerwünschte Downloads zu vermeiden."
          },
          {
            "title": "Eine gemeinsame Download-Qualität wählen",
            "text": "„Download-Einstellungen verwenden“ (Follow download settings) übernimmt deine dort gespeicherte Qualitätswahl. Tippe auf „Gemeinsame Qualität“, prüfe die verfügbaren Optionen und bestätige, bevor du die Auswahl zur Warteschlange hinzufügst."
          },
          {
            "title": "Konto und Anzahl prüfen",
            "text": "Prüfe vor dem Start die Auswahlzahl und dein verfügbares Download-Kontingent. posts zählt Beiträge, items zählt Mediendateien; die Zahlen können abweichen. Mit „Link ändern“ (Change link) wechselst du die Quelle."
          }
        ]
      },
      {
        "title": "Warteschlange und fertige Downloads ansehen",
        "text": "Öffne „Verwaltung“ (Manager). Unter „Herunterladen“ (Active im Screenshot) findest du wartende und laufende Aufgaben, unter „Abgeschlossen“ (Done) fertige Downloads und unter „Fehlgeschlagen“ (Failed) Aufgaben mit Fehlern. Öffne einen Eintrag, um seinen Status zu prüfen.",
        "sections": [
          {
            "title": "Bei langen Videos den Umfang vorab prüfen",
            "text": "Prüfe vor der Auswahl langer Videos die Dauer und geschätzte Größe. Lade zuerst, was du benötigst, und füge weitere Videos bei Bedarf hinzu."
          },
          {
            "title": "Fertige Videos ansehen und speichern",
            "text": "„Wartet auf Download“ (Queued) bedeutet, dass die Aufgabe noch in der Warteschlange steht. Unter „Abgeschlossen“ kannst du fertige Dateien ansehen, unter „Fehlgeschlagen“ die Fehler prüfen. Wurde eine Datei nicht automatisch gespeichert, tippe auf „In Fotos speichern“ (Save to Photos), um eine Kopie in Fotos zu sichern."
          }
        ]
      }
    ],
    "exampleNote": "Die Screenshots zeigen die laufende Warteschlange, keinen vollständigen Abschluss aller Downloads oder erfolgreichen Speichervorgang in Fotos. Die Gesamtzahlen in „Verwaltung“ enthalten weitere Aufgaben und sind keine Bilanz dieser Auswahl. Kontolimits und Medienzahlen gehören zum Beispiel."
  }
};
