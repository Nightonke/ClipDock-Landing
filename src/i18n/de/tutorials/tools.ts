import type { TutorialCopy } from "../../types";
export const copy: Record<string, TutorialCopy> = {
  "video-to-gif-iphone": {
    "title": "Ein Video in ein GIF umwandeln",
    "description": "Erstelle auf iPhone oder iPad ein GIF aus einem Videoausschnitt. Wähle den Abschnitt und passe Bildrate und Breite an, um flüssige Bewegung, Details und Dateigröße abzuwägen.",
    "intro": "Erstelle ein GIF aus einer Bewegung im Video. Wähle zuerst den Ausschnitt und passe dann Bildrate und Breite an, um flüssige Bewegung, Details und Dateigröße abzuwägen.",
    "tips": [
      {
        "title": "Das GIF ist zu groß",
        "text": "Kürze zuerst den Ausschnitt und senke danach Breite oder Bildrate. Ändere jeweils nur einen Wert, damit du Qualität und Größe sinnvoll vergleichen kannst."
      }
    ],
    "faq": [
      {
        "question": "Warum hat das GIF keinen Ton?",
        "answer": "GIF unterstützt kein Audio. Wenn der Ton erhalten bleiben soll, exportiere ein Video."
      },
      {
        "question": "Warum sind manche Optionen mit einem Stern markiert?",
        "answer": "Laut Parameterseite erfordern mehr als 10 Sekunden, höhere Bildraten, 720 Pixel Breite und die Voreinstellungen VIP. Dieses Beispiel verwendet kostenlose Einstellungen."
      }
    ],
    "steps": [
      {
        "title": "„Video in GIF“ öffnen",
        "text": "Tippe unten auf „Verarbeitung“ (Process) und öffne „Video in GIF“ (Video to GIF)."
      },
      {
        "title": "Quellvideo auswählen",
        "text": "Tippe unter „Video auswählen“ (Select Video) auf „Aus Fotos auswählen“ (Choose from Photos) oder „Aus Dateien auswählen“ (Choose from Files), um ein Video zu importieren. Das funktioniert auch bei leerer Download-Liste."
      },
      {
        "title": "Ausschnitt und Voreinstellung wählen",
        "text": "Sieh dir das importierte Video an und prüfe „Voreinstellungen“ (Presets) und „Clipbereich“ (Clip Range). Das Beispiel verwendet „Benutzerdefiniert“ (Custom) und einen Ausschnitt von etwa 6 Sekunden.",
        "sections": [
          {
            "title": "Eigene Einstellungen und Optionen mit Stern",
            "text": "Mit „Benutzerdefiniert“ wählst du die Werte selbst. „Klar*“ (Clear*), „Glatt*“ (Smooth*) und „Lang*“ (Long*) bieten Voreinstellungen für mehr Details, flüssigere Bewegung oder längere Ausschnitte. Der Stern kennzeichnet VIP-Funktionen."
          },
          {
            "title": "Den gewünschten Bewegungsablauf eingrenzen",
            "text": "Ziehe die runden Griffe an den Enden des Bereichs, um Start und Ende festzulegen. Darüber stehen die Zeitpunkte und die gewählte Dauer. Längere Ausschnitte benötigen meist mehr Bilder und Speicherplatz. Mehr als 10 Sekunden erfordern VIP."
          }
        ]
      },
      {
        "title": "Bildrate und Breite einstellen",
        "text": "Prüfe weiter unten „Bildrate“ (Frame Rate), „Breite“ (Width) und die geschätzte Größe. Tippe anschließend auf „Start Verarbeitung“ (Start Processing). Im Beispiel sind es 8 fps und 360 Pixel Breite; die Schätzung beträgt ca. 1,2 MB und 48 Bilder.",
        "sections": [
          {
            "title": "Bildrate: Bilder pro Sekunde",
            "text": "Zur Auswahl stehen 6, 8, 12, 15* und 24* fps. Höhere Bildraten lassen Bewegungen meist flüssiger wirken, erhöhen aber Bildanzahl und Dateigröße. Probiere bei einfachen Bewegungen 8 fps und vergleiche bei schnellen Bewegungen höhere Werte. 15 und 24 fps sind als VIP markiert."
          },
          {
            "title": "Breite: die Pixelbreite des GIFs",
            "text": "Verfügbar sind 240, 360, 540 und 720* Pixel. Mehr Breite kann mehr Details erhalten und die Datei vergrößern. 720 erfordert VIP. Hochskalieren stellt keine Details wieder her, die im Quellvideo fehlen."
          },
          {
            "title": "Die Schätzung ist nicht die fertige Dateigröße",
            "text": "6 Sekunden × 8 fps ergeben etwa 48 Bilder. Die komprimierte Größe hängt auch von der Bildkomplexität ab. Maßgeblich ist die exportierte Datei. GIF enthält keinen Ton; wenn du Ton benötigst, speichere ein Video."
          }
        ]
      },
      {
        "title": "Das fertige GIF speichern",
        "text": "Nach „Verarbeitung abgeschlossen“ (Processing Complete) kannst du das GIF mit „In Fotos speichern“ (Save to Photos) sichern oder über „Datei teilen“ (Share File) weitergeben. „Fertig“ (Done) schließt den Hinweis. Prüfe die Wiedergabe anschließend in einer App, die animierte GIFs unterstützt.",
        "sections": []
      }
    ],
    "exampleNote": "Die Screenshots stammen aus der englischen Oberfläche eines iPhone-17-Pro-Max-Simulators mit iOS 26.0; die Anleitung nennt die deutschen Bedienelemente. Parameter und Grenzen beziehen sich auf diese Version. Das Beispiel exportiert mit „Benutzerdefiniert“, 8 fps und 360 Pixel Breite ein GIF von etwa 6 Sekunden. Die konkreten Werte der kostenpflichtigen Voreinstellungen wurden nicht geprüft."
  },
  "video-to-live-photo-iphone": {
    "title": "Ein Video in ein Live Photo umwandeln",
    "description": "Erstelle auf iPhone oder iPad ein Live Photo aus einem Video. Wähle Ausschnitt, Titelbild und Ton und speichere es in Fotos.",
    "intro": "Wandle einen kurzen Videoausschnitt in ein Live Photo um. Du kannst ein Standbild als Titelbild wählen und den Ton behalten. Lege Bewegungsausschnitt und Titelbild fest und speichere das Ergebnis in Fotos.",
    "tips": [
      {
        "title": "Titelbild und Bewegung getrennt prüfen",
        "text": "Ein gutes Titelbild bedeutet nicht, dass der gesamte Bewegungsablauf passt. Prüfe nach dem Speichern Start, Ende, Ton und Titelbild. Verwende zum Teilen eine Methode, die Live Photos erhält."
      }
    ],
    "faq": [
      {
        "question": "Kann ich das Ergebnis als bewegtes Hintergrundbild verwenden?",
        "answer": "Das Umwandeln und Speichern eines Live Photos ist unabhängig von seiner Eignung als Sperrbildschirm-Hintergrund. Diese hängt auch von Gerät und System ab. Ein erfolgreicher Export garantiert keine Verwendung als Hintergrundbild."
      },
      {
        "question": "Was unterscheidet es von einem GIF?",
        "answer": "Format und Freigabemöglichkeiten unterscheiden sich. Ein Live Photo kann Ton enthalten; ein GIF ist ein animiertes Bild ohne Ton."
      }
    ],
    "steps": [
      {
        "title": "„Video in Live Photo“ öffnen",
        "text": "Tippe unten auf „Verarbeitung“ (Process) und öffne „Video in Live Photo“ (Video to Live Photo)."
      },
      {
        "title": "Quellvideo auswählen",
        "text": "Tippe unter „Video auswählen“ (Select Video) auf „Aus Fotos auswählen“ (Choose from Photos) oder „Aus Dateien auswählen“ (Choose from Files), um ein Video zu importieren. Das funktioniert auch bei leerer Download-Liste."
      },
      {
        "title": "Ausschnitt und Titelbild festlegen",
        "text": "Wähle nach dem Import unter „Clipbereich“ (Clip Range) die gewünschte Bewegung. Stelle dann unter „Abdeckrahmen“ (Cover Frame) das Titelbild ein. Das Beispiel verwendet 00:00–00:03.",
        "sections": [
          {
            "title": "Den Bewegungsabschnitt wählen",
            "text": "Die runden Griffe bestimmen Start und Ende; darüber steht die ausgewählte Dauer. Wähle zunächst einen kurzen Ausschnitt um die Hauptbewegung. Laut aktueller Seite erfordern mehr als 3 Sekunden VIP."
          },
          {
            "title": "Titelbild: das Standbild des Live Photos",
            "text": "Ziehe den Schieberegler unter „Abdeckrahmen“ und orientiere dich am Vorschaubild links und der Zeitangabe. Wähle ein Bild mit erkennbarem Motiv und natürlichem Ausdruck, möglichst ohne geschlossene Augen oder starke Bewegungsunschärfe. Titelbild und Bewegungsausschnitt sind getrennte Einstellungen."
          }
        ]
      },
      {
        "title": "Ton und Qualität wählen",
        "text": "Prüfe weiter unten „Sound“ und „Live Photo-Qualität“ (Live Photo Quality) und tippe auf „Start Verarbeitung“ (Start Processing). Im Beispiel bleibt der Ton erhalten und die Qualität steht auf „Ausgewogen“ (Balanced).",
        "sections": [
          {
            "title": "Ton entfernen oder behalten",
            "text": "„Sound entfernen“ (Remove Sound) entfernt den Ton, „Ton behalten“ (Keep Sound) erhält ihn. Wähle ohne Ton für eine rein visuelle Bewegung oder behalte ihn für die Atmosphäre der Aufnahme."
          },
          {
            "title": "Ausgewogen, HD* und Original*",
            "text": "Beginne bei Bedarf mit „Ausgewogen“. „HD“ und „Original“ sind als VIP markiert. Höhere Ausgabequalität kann keine Details ergänzen, die im Ausgangsvideo fehlen."
          }
        ]
      },
      {
        "title": "Das Live Photo in Fotos prüfen",
        "text": "Warte auf „Live Photo in Fotos gesichert“ (Live Photo saved to Photos) und tippe auf „OK“. Halte das Live Photo in der Fotos-App gedrückt, um Bewegung, Titelbild und Ton zu prüfen.",
        "sections": []
      }
    ],
    "exampleNote": "Die Screenshots stammen aus der englischen Oberfläche eines iPhone-17-Pro-Max-Simulators mit iOS 26.0; die Anleitung nennt deutsche Bedienelemente. Parameter und Grenzen beziehen sich auf diese Version. Das Beispiel verwendet 3 Sekunden und „Ausgewogen“. Die App meldete erfolgreiches Speichern; die Wiedergabe durch langes Drücken in Fotos wurde nicht geprüft."
  },
  "transcode-video-iphone": {
    "title": "Videoformat ändern und Dateien verkleinern",
    "description": "Nutze auf iPhone oder iPad „Video transkodieren“, um das Format zu ändern oder die Datei zu verkleinern. Wähle Format, Auflösung und Qualität und prüfe den Export.",
    "intro": "Mit „Video transkodieren“ kannst du das Format ändern oder die Dateigröße senken. Wähle Format, Auflösung und Qualität und sieh dir das Ergebnis nach dem Export an.",
    "tips": [
      {
        "title": "Die Komprimierung überzeugt nicht",
        "text": "Bewahre das Original auf und vergleiche Qualität und Auflösung zuerst an einem kurzen Ausschnitt. Vermeide es, bereits komprimierte Ergebnisse wiederholt zu komprimieren."
      }
    ],
    "faq": [
      {
        "question": "Warum ist die Datei kaum kleiner geworden?",
        "answer": "Die Quelldatei war möglicherweise schon klein oder die Ausgabe erhält viel Bildqualität. Die fertige Größe hängt unter anderem von Dauer, Bildgröße, Codec und Bitrate ab."
      },
      {
        "question": "Wird das Bild mit 1080p schärfer?",
        "answer": "Das Hochskalieren einer niedrigen Auflösung erzeugt keine fehlenden Details. Beurteile das Ergebnis bei der tatsächlichen Wiedergabe."
      }
    ],
    "steps": [
      {
        "title": "„Video transkodieren“ öffnen",
        "text": "Tippe unten auf „Verarbeitung“ (Process) und öffne „Video transkodieren“ (Transcode Video)."
      },
      {
        "title": "Quellvideo auswählen",
        "text": "Tippe unter „Video auswählen“ (Select Video) auf „Aus Fotos auswählen“ (Choose from Photos) oder „Aus Dateien auswählen“ (Choose from Files), um ein Video zu importieren. Das funktioniert auch bei leerer Download-Liste."
      },
      {
        "title": "Format, Qualität und Auflösung festlegen",
        "text": "Prüfe nach dem Import „Ausgabeformat“ (Output Format), „Ausgabequalität“ (Output Quality) und „Auflösung“ (Resolution). Entscheide anschließend, ob der Ton erhalten bleiben soll.",
        "sections": [
          {
            "title": "Ausgabeformat: MP4, MOV und M4V",
            "text": "Hier wählst du den Dateicontainer. Für gewöhnliches Teilen kannst du mit MP4 beginnen. Verlangt die Zielsoftware MOV oder M4V, wähle das entsprechende Format. Dateiendung und der intern verwendete Codec sind verschiedene Dinge."
          },
          {
            "title": "Ausgabequalität: Details und Größe abwägen",
            "text": "„Hohe Qualität“ (High Quality) bewahrt eher die Bildqualität, „Standard“ ist ein Mittelweg und „Kleinere Größe“ (Smaller Size) zielt auf kleinere Dateien. Die tatsächliche Größe hängt auch vom Bildinhalt und anderen Parametern ab; der Name der Voreinstellung allein sagt sie nicht voraus."
          },
          {
            "title": "Auflösung und Ton",
            "text": "Zur Auswahl stehen „Original“, 720p, 480p und 1080p*. „Original“ behält die Quellgröße bei, hier 640×338. Unter „Sound“ kannst du „Ton behalten“ (Keep Sound) oder „Stummschalten“ (Mute) wählen. Weniger Auflösung kann die Datei verkleinern; mehr Auflösung stellt keine fehlenden Details wieder her."
          }
        ]
      },
      {
        "title": "Codec und Bitrate verstehen",
        "text": "Prüfe weiter unten „Codec“, „Bitrate“ und die Zusammenfassung am Seitenende. Sie muss deiner Auswahl entsprechen. Tippe dann auf „Start Verarbeitung“ (Start Processing).",
        "sections": [
          {
            "title": "Codec: H.264 und HEVC*",
            "text": "H.264 ist ein möglicher Ausgangspunkt. HEVC erfordert VIP und kann effizienter komprimieren; prüfe die Unterstützung auf dem Zielgerät oder in der Ziel-App. Ein MP4-Container kann verschiedene Codecs enthalten."
          },
          {
            "title": "Bitrate: Auto, Zielgröße* oder eigener Wert*",
            "text": "Bei „Auto“ wählt das Werkzeug die Bitrate. „Zielgröße“ (Target Size) öffnet die Einstellung einer gewünschten Dateigröße, „Benutzerdefinierte Bitrate“ (Custom Bitrate) die direkte Bitrateneingabe. Die letzten beiden Optionen erfordern VIP. Unter gleichen Bedingungen senkt eine kleinere Bitrate meist die Größe, kann aber sichtbare Kompressionsartefakte verursachen."
          },
          {
            "title": "VIP-Grenzen dieser Version",
            "text": "Laut Seite erfordern HEVC, 1080p, Original-HD, Zielgröße und eine eigene Bitrate VIP. Das Beispiel exportiert eine Quelle mit niedriger Auflösung unter „Original“, „Standard“, „Ton behalten“ und „Auto“."
          }
        ]
      },
      {
        "title": "Ergebnis prüfen, speichern oder weiterbearbeiten",
        "text": "Sieh dir das exportierte Video an und vergleiche Größe und Qualität mit dem Original. Achte besonders auf Textkanten, dunkle Bereiche und schnelle Bewegungen, bevor du es speicherst.",
        "sections": [
          {
            "title": "Ansehen und speichern",
            "text": "Spiele das Ergebnis ab und prüfe Bild, Dauer und Ton. Tippe dann auf „In Fotos speichern“ (Save to Photos). Beim ersten Mal musst du der App möglicherweise erlauben, Fotos und Videos hinzuzufügen. Prüfe nach der Erfolgsmeldung die Datei in Fotos."
          },
          {
            "title": "Die übrigen Tasten",
            "text": "„Verarbeitung fortsetzen“ (Keep Processing) öffnet die Werkzeugauswahl mit dem Ergebnis, „Datei teilen“ (Share File) öffnet die Freigabe und „Fertig“ (Done) schließt die Ergebnisseite. „Fertig“ speichert nicht in Fotos."
          }
        ]
      }
    ],
    "exampleNote": "Die Screenshots stammen aus der englischen Oberfläche eines iPhone-17-Pro-Max-Simulators mit iOS 26.0; die Anleitung nennt deutsche Bedienelemente. Parameter und Grenzen beziehen sich auf diese Version. Mit „Original“, „Standard“, „Ton behalten“ und Bitrate „Auto“ wurde ein MP4/H.264-Video von etwa 6 Sekunden exportiert."
  },
  "trim-video-iphone": {
    "title": "Ein Video zeitlich zuschneiden",
    "description": "Behalte auf iPhone oder iPad nur den gewünschten Teil eines Videos. Lege in „Video zuschneiden“ Start und Ende fest und speichere den Ausschnitt oder bearbeite ihn weiter.",
    "intro": "Behalte nur den gewünschten Teil deines Videos. Lege in „Video zuschneiden“ Start und Ende fest und speichere den Ausschnitt oder übergib ihn an ein anderes Werkzeug.",
    "tips": [
      {
        "title": "Hier wird die Dauer zugeschnitten",
        "text": "„Video zuschneiden“ bestimmt den zeitlichen Ausschnitt. Für Seitenverhältnis oder Leinwand verwende „Größe/Leinwand ändern“."
      }
    ],
    "faq": [
      {
        "question": "Wie behalte ich nur einen Abschnitt aus der Mitte?",
        "answer": "Verschiebe Start und Ende und prüfe die im Bereich angezeigten Zeiten. Sieh dir den Ausschnitt an und exportiere ihn anschließend."
      },
      {
        "question": "Warum öffnet die gleichmäßige Aufteilung eine VIP-Seite?",
        "answer": "„Gerade Aufteilung“ erfordert VIP. Für einen einzelnen Ausschnitt genügt „Segment auswählen“."
      }
    ],
    "steps": [
      {
        "title": "„Video zuschneiden“ öffnen",
        "text": "Tippe unten auf „Verarbeitung“ (Process) und öffne „Video zuschneiden“ (Trim Video)."
      },
      {
        "title": "Quellvideo auswählen",
        "text": "Tippe unter „Video auswählen“ (Select Video) auf „Aus Fotos auswählen“ (Choose from Photos) oder „Aus Dateien auswählen“ (Choose from Files), um ein Video zu importieren. Das funktioniert auch bei leerer Download-Liste."
      },
      {
        "title": "Modus und Zeitraum einstellen",
        "text": "Wähle nach dem Videoimport unter „Zuschneidemodus“ (Trim Mode) die Option „Segment auswählen“ (Select Segment). Verschiebe dann die beiden Griffe im „Trimmbereich“ (Trim Range).",
        "sections": [
          {
            "title": "Den ausgewählten Abschnitt exportieren",
            "text": "Der linke Griff steuert den Anfang, der rechte das Ende. Darüber stehen Start, Ende und Dauer. Darunter wird der Exportbereich nochmals beschrieben. Im Beispiel ist es 00:00–00:06."
          },
          {
            "title": "Vorschau und Exportbereich unterscheiden",
            "text": "Die Gesamtdauer unter der Vorschau gehört zum Originalvideo. Nur der „Trimmbereich“ bestimmt, was erhalten bleibt. Prüfe nach dem Verschieben anhand des Bildes, ob der Bewegungsbeginn oder der letzte Satz abgeschnitten wird."
          },
          {
            "title": "Gerade Aufteilung*: gleich lange Abschnitte",
            "text": "„Gerade Aufteilung“ (Even Split) teilt das vollständige Video in gleich lange Abschnitte und exportiert sie gemeinsam. Dafür ist VIP nötig. Verwende für einen einzelnen Ausschnitt „Segment auswählen“."
          }
        ]
      },
      {
        "title": "Ergebnis prüfen, speichern oder weiterbearbeiten",
        "text": "Tippe auf „Start Verarbeitung“ (Start Processing), spiele den exportierten Ausschnitt ab und prüfe Anfang und Ende. Speichere ihn oder nutze „Verarbeitung fortsetzen“ (Keep Processing), um ihn mit einem weiteren Werkzeug zu bearbeiten.",
        "sections": [
          {
            "title": "Ansehen und speichern",
            "text": "Spiele das Ergebnis ab und prüfe Bild, Dauer und Ton. Tippe dann auf „In Fotos speichern“ (Save to Photos). Beim ersten Mal musst du der App möglicherweise erlauben, Fotos und Videos hinzuzufügen. Prüfe nach der Erfolgsmeldung die Datei in Fotos."
          },
          {
            "title": "Die übrigen Tasten",
            "text": "„Verarbeitung fortsetzen“ öffnet die Werkzeugauswahl mit dem Ergebnis. „Datei teilen“ (Share File) öffnet die Freigabe, „Fertig“ (Done) schließt die Ergebnisseite. „Fertig“ speichert nicht in Fotos."
          }
        ]
      }
    ],
    "exampleNote": "Die Screenshots stammen aus der englischen Oberfläche eines iPhone-17-Pro-Max-Simulators mit iOS 26.0; die Anleitung nennt deutsche Bedienelemente. Parameter und Grenzen beziehen sich auf diese Version. Über „Segment auswählen“ wurden die ersten 6 Sekunden einer Quelle von etwa 2 Minuten 26 Sekunden ausgeschnitten. „Gerade Aufteilung“ öffnete die VIP-Seite; ein geteilter Export wurde nicht ausgeführt."
  },
  "join-videos-iphone": {
    "title": "Mehrere Videos der Reihe nach zusammenfügen",
    "description": "Verbinde auf iPhone oder iPad mit „Videos zusammenfügen“ Reiseclips, Aufnahmen oder einzelne Erklärungen. Wähle zuerst das Anfangsvideo, füge weitere Clips hinzu und ordne sie an.",
    "intro": "Verbinde mit „Videos zusammenfügen“ Reiseclips, Aufnahmen oder einzelne Erklärungen. Wähle zuerst das Anfangsvideo, füge weitere Clips hinzu und passe ihre Reihenfolge an.",
    "tips": [
      {
        "title": "Was tun bei unterschiedlichen Formaten oder Ausrichtungen?",
        "text": "Auf der Zusammenfügen-Seite gibt es keine eigene Einstellung für Leinwand, Bildzuschnitt oder Ränder. Bereite die Quellen bei Bedarf zuerst mit „Größe/Leinwand ändern“ oder einem passenden Werkzeug vor. Füge sie anschließend zusammen und prüfe die Ausgabe."
      },
      {
        "title": "Auf der aktuellen Einstellungsseite bleiben",
        "text": "Der Zauberstab oben rechts öffnet „Schnellbearbeitung“ mit dem Hauptvideo. Wenn du darüber zu „Videos zusammenfügen“ zurückkehrst, kann die Liste angehängter Clips zurückgesetzt werden. Starte nach dem Sortieren direkt die Verarbeitung. Prüfe nach einem Werkzeugwechsel die Liste erneut."
      }
    ],
    "faq": [
      {
        "question": "Warum ergeben „2 Clips hinzugefügt“ insgesamt drei Clips?",
        "answer": "Die Zahl zählt nur angehängte Videos. Das Hauptvideo am Anfang plus zwei weitere Clips ergibt drei Clips."
      },
      {
        "question": "Kann ich einen angehängten Clip vor das Hauptvideo schieben?",
        "answer": "Die Pfeile ändern nur die Reihenfolge innerhalb der angehängten Liste. Beim ersten angehängten Clip ist der Aufwärtspfeil ausgegraut. Für einen anderen Anfang musst du das Hauptvideo neu wählen."
      },
      {
        "question": "Kann ich hier Übergänge, Hintergrundmusik oder Qualität einstellen?",
        "answer": "Diese Optionen gibt es auf der Zusammenfügen-Seite nicht. Hier siehst du das Hauptvideo, fügst Clips hinzu und ordnest sie an. Verwende für weitere Effekte die passenden Werkzeuge."
      },
      {
        "question": "Warum fehlt das Video nach „Fertig“ in Fotos?",
        "answer": "„Fertig“ schließt nur die Ergebnisseite. Tippe separat auf „In Fotos speichern“ und prüfe die Berechtigung und die Erfolgsmeldung."
      }
    ],
    "steps": [
      {
        "title": "Das Werkzeug zum Zusammenfügen öffnen",
        "text": "Tippe unten auf „Verarbeitung“ (Process) und öffne „Videos zusammenfügen“ (Stitch Videos)."
      },
      {
        "title": "Hauptvideo wählen und Vorschau prüfen",
        "text": "Öffne „Video auswählen“ (Select Video) und wähle über „Aus Fotos auswählen“ (Choose from Photos) den ersten Clip. Dieses Hauptvideo steht am Anfang des Ergebnisses. Prüfe die Quelle nach dem Öffnen der Einstellungen.",
        "sections": [
          {
            "title": "Vorschau, Dateiname und Zeitleiste",
            "text": "Tippe in der Bildmitte auf Abspielen. Darunter stehen Dateiname, Wiedergabeposition und Dauer des Hauptvideos. So prüfst du die richtige Fassung. Die Beispielquelle dauert 02:26; das ist noch nicht die Gesamtdauer des fertigen Videos."
          },
          {
            "title": "Was bedeutet 640×338?",
            "text": "Das ist die Bildgröße des aktuellen Hauptvideos in Pixeln. Es handelt sich um Quellinformationen, keine Einstellung der Ausgabegröße. Die Zusammenfügen-Seite bietet keine eigene Wahl von Auflösung, Bildrate oder Qualität."
          },
          {
            "title": "Warum zählt das Hauptvideo nicht als hinzugefügt?",
            "text": "Die Zahl erfasst nur Clips, die über „Video hinzufügen“ (Add Video) angehängt wurden. Das Hauptvideo darüber zählt nicht mit. 0 bedeutet, dass noch nichts angehängt wurde. Füge mindestens einen weiteren Clip hinzu, um mehrere Videos zu verbinden."
          }
        ]
      },
      {
        "title": "Weitere Clips hinzufügen",
        "text": "Tippe unter „Verarbeitungsoptionen“ (Processing Options) auf „Video hinzufügen“. Wähle im Dialog „Videos zum Zusammenfügen auswählen“ (Select Videos to Stitch) die Quelle. Das Beispiel nutzt erneut „Aus Fotos auswählen“.",
        "sections": [
          {
            "title": "Die drei Importquellen",
            "text": "„Aus Downloads auswählen“ (Choose from Downloads) öffnet Videos in ClipDock, „Aus Fotos auswählen“ deine Fotomediathek und „Aus Dateien auswählen“ (Choose from Files) den Dateiauswahldialog. Wähle passend zum Speicherort. Videos aus Fotos müssen für diesen Vorgang nicht erneut heruntergeladen werden."
          },
          {
            "title": "Mehrere Videos in Fotos auswählen",
            "text": "Tippe auf die Clips zum Anhängen; auf den Vorschaubildern erscheinen Auswahlzahlen. Bestätige mit dem blauen Haken oben rechts. Über „Video hinzufügen“ kannst du weitere Clips ergänzen. Prüfe danach die Anzahl, damit das Hauptvideo nicht versehentlich doppelt vorkommt."
          }
        ]
      },
      {
        "title": "Anzahl und Reihenfolge prüfen",
        "text": "Die Anzahl angehängter Clips enthält nicht das Hauptvideo: „2 Clips hinzugefügt“ (2 clips added) bedeutet insgesamt drei Clips. Die angehängte Liste beginnt mit „Clip 2“ und folgt von oben nach unten auf das Hauptvideo.",
        "sections": [
          {
            "title": "Angehängte Clips mit den Pfeilen sortieren",
            "text": "Verschiebe die angehängten Clips mit den Auf- und Abwärtspfeilen. Der erste kann nicht weiter nach oben, der letzte nicht weiter nach unten. Bei nur einem angehängten Clip sind beide Pfeile deaktiviert."
          },
          {
            "title": "Hauptvideo und angehängte Liste unterscheiden",
            "text": "Das Hauptvideo oben bleibt der Anfang und gehört nicht zur sortierbaren Liste. Für einen anderen Start kehre zurück, wähle ein neues Hauptvideo und füge die folgenden Clips erneut hinzu."
          },
          {
            "title": "Vorschaubilder, Dauer und Entfernen",
            "text": "Vorschaubild, Dateiname und Dauer helfen bei der Zuordnung. Der rote Papierkorb entfernt den jeweiligen angehängten Clip. Prüfe vor dem Start Reihenfolge, doppelte Quellen und Gesamtinhalt. Im Beispiel: Hauptvideo 02:26 → Clip 2 mit 05:11 → Clip 3 mit 04:10."
          }
        ]
      },
      {
        "title": "Zusammenfügen starten und Fortschritt prüfen",
        "text": "Prüfe die Clips und tippe auf „Start Verarbeitung“ (Start Processing). Der Dialog zeigt „Video wird verarbeitet“ (Processing video) und den Fortschritt in Prozent. Warte auf die Ergebnisseite, bevor du das Video prüfst.",
        "sections": [
          {
            "title": "Mitteilungen und Verarbeitung im Hintergrund",
            "text": "Bei längeren Vorgängen erscheint „Nach Abschluss benachrichtigen“ (Notify me when complete). Aktiviere die Option bei Bedarf und erteile die Mitteilungsberechtigung. Laut Dialog kannst du in den Hintergrund wechseln und die App versucht weiterzuarbeiten. Das garantiert keine unbegrenzte Hintergrundlaufzeit durch das System."
          },
          {
            "title": "Die Verarbeitung abbrechen",
            "text": "„Abbrechen“ (Cancel) unten beendet die aktuelle Aufgabe; es blendet nicht nur das Fenster aus. Lass den Vorgang weiterlaufen, wenn du das Ergebnis benötigst."
          }
        ]
      },
      {
        "title": "Das fertige Video ansehen und in Fotos speichern",
        "text": "Spiele das zusammengesetzte Video ab und prüfe die Reihenfolge. Die Eingabeliste zeigt ganze Sekunden. Für die Gesamtdauer ist deshalb die Ausgabedatei maßgeblich.",
        "sections": [
          {
            "title": "Vor dem Speichern kontrollieren",
            "text": "Prüfe bei der Wiedergabe besonders Anfang, Ende und die Übergänge zwischen Clips: Stimmen Reihenfolge, Seitenverhältnis und Ton? Im Beispiel sind die Stellen um 02:26 und 07:37 interessant. Sieh und höre dir das Ergebnis vollständig an, bevor du es behältst."
          },
          {
            "title": "In Fotos speichern",
            "text": "Tippe auf „In Fotos speichern“ (Save to Photos) und erlaube den Fotozugriff. Warte auf „In Fotos gespeichert“ (Saved to Photos) und prüfe das fertige Video anschließend in der Fotos-App."
          },
          {
            "title": "Weiterbearbeiten, teilen und schließen",
            "text": "„Verarbeitung fortsetzen“ (Keep Processing) führt zu weiteren Werkzeugen, „Datei teilen“ (Share File) zur Freigabe und „Fertig“ (Done) schließt die Ergebnisseite. Tippe zuerst auf „In Fotos speichern“, wenn das Ergebnis dort bleiben soll. „Fertig“ ist keine Speichertaste."
          }
        ]
      }
    ],
    "exampleNote": "Die Screenshots stammen aus der englischen Oberfläche eines iPhone-17-Pro-Max-Simulators mit iOS 26.0; die Anleitung nennt deutsche Bedienelemente. Parameter und Grenzen beziehen sich auf diese Version. Drei Videos wurden zusammengefügt und die angehängten Clips umsortiert. Das als 11:46 angezeigte Ergebnis wurde abgespielt und die App meldete erfolgreiches Speichern. In dieser Version wurde die angehängte Liste nach der Rückkehr über „Schnellbearbeitung“ zurückgesetzt."
  },
  "interleave-videos-iphone": {
    "title": "Videoabschnitte abwechselnd zusammenfügen",
    "description": "Wechsle auf iPhone oder iPad mit „Interleave“ zwischen Abschnitten verschiedener Videos. Füge Quellen hinzu und wähle Aufteilung, Startreihenfolge und Tonübergänge.",
    "intro": "Mit „Interleave“ fügst du Abschnitte verschiedener Videos abwechselnd zusammen. Füge Quellen hinzu und wähle Aufteilung, Startreihenfolge und Tonübergänge.",
    "tips": [
      {
        "title": "Die Wechsel wirken ungleichmäßig",
        "text": "Der Modus für die Gesamtzahl der Segmente garantiert keine gleich langen Abschnitte aus jeder Quelle. A und B sind im Beispiel unterschiedlich lang; die Oberfläche zeigt entsprechend verschiedene Segmentdauern."
      }
    ],
    "faq": [
      {
        "question": "Was ist der Unterschied zu „Videos zusammenfügen“?",
        "answer": "„Videos zusammenfügen“ hängt vollständige Clips der Reihe nach an. „Interleave“ wechselt nach den gewählten Segmentregeln zwischen verschiedenen Quellen."
      },
      {
        "question": "Warum ist die Segmentzahl trotz Stern kostenlos nutzbar?",
        "answer": "Bis zu insgesamt 5 Segmente sind kostenlos. Beachte den gewählten Wert und die Rechtehinweise. Ein Stern am Steuerelement bedeutet nicht, dass jeder mögliche Wert VIP erfordert."
      }
    ],
    "steps": [
      {
        "title": "„Interleave“ öffnen",
        "text": "Tippe unten auf „Verarbeitung“ (Process) und öffne „Interleave“."
      },
      {
        "title": "Quellvideo auswählen",
        "text": "Tippe unter „Video auswählen“ (Select Video) auf „Aus Fotos auswählen“ (Choose from Photos) oder „Aus Dateien auswählen“ (Choose from Files), um ein Video zu importieren. Das funktioniert auch bei leerer Download-Liste."
      },
      {
        "title": "Videos A und B hinzufügen",
        "text": "Das Hauptvideo erscheint als „A Aktuelles Video“ (A Current Video). Tippe auf „Video hinzufügen“ (Add Video) und importiere B aus Downloads, Fotos oder Dateien. In Fotos bestätigst du deine Auswahl mit dem Haken oben rechts.",
        "sections": [
          {
            "title": "Hinzugefügte und gesamte Anzahl",
            "text": "„1 hinzugefügt, 2 Videos insgesamt“ (1 added, 2 videos total) bedeutet ein angehängtes Video und zwei Quellen insgesamt. A ist das Hauptvideo; das Schloss in der Liste ist nicht bedienbar. Angehängte Clips haben Sortier- oder Entfernen-Tasten, deren Verfügbarkeit von Position und Anzahl abhängt."
          },
          {
            "title": "Die Beispielquellen",
            "text": "A dauert etwa 6 Sekunden, B etwa 2 Minuten 26 Sekunden. Bei stark unterschiedlichen Längen können auch die zugeteilten Abschnitte stark abweichen. Für gleichmäßigere Wechsel lassen sich ähnlich lang zugeschnittene Quellen leichter prüfen."
          }
        ]
      },
      {
        "title": "Regeln für die abwechselnden Abschnitte festlegen",
        "text": "Das Beispiel verwendet „Segmente gesamt“ (Total Segments), „5 Segmente“ (5 segments), „Beginnen Sie mit A“ (Start with A) und die standardmäßige Audioüberblendung von 50 ms. Unten steht die konkrete Aufteilung.",
        "sections": [
          {
            "title": "Gesamtzahl oder feste Dauer*",
            "text": "„Segmente gesamt“ verteilt nach der Gesamtanzahl. Im Beispiel ergeben 5 Segmente drei A-Abschnitte von je etwa 2 Sekunden und zwei B-Abschnitte von je etwa 1 Minute 13 Sekunden, abwechselnd ausgegeben. „Feste Dauer“ (Fixed Duration) teilt nach einer festen Segmentlänge und erfordert VIP."
          },
          {
            "title": "Die Startquelle wählen",
            "text": "„Beginnen Sie mit A“ startet mit dem Hauptvideo, „Beginnen Sie mit B“ (Start with B) mit B. Lies nach einem Wechsel die Aufteilung unten erneut und prüfe, ob das gewünschte Material am Anfang steht."
          },
          {
            "title": "Tonübergänge durch Ein- und Ausblenden glätten",
            "text": "Die Standardüberblendung von etwa 50 ms mildert jeden Audioschnitt. Laut Seite sind zwei Videos, höchstens 5 Segmente und die Standardüberblendung kostenlos. Weitere Quellen, feste Dauer und eigene Überblendungswerte erfordern VIP."
          }
        ]
      },
      {
        "title": "Ergebnis prüfen, speichern oder weiterbearbeiten",
        "text": "Tippe auf „Start Verarbeitung“ (Start Processing) und prüfe die Übergänge bei der Wiedergabe. Kontrolliere Startquelle, Clipreihenfolge und Tonübergänge.",
        "sections": [
          {
            "title": "Ansehen und speichern",
            "text": "Spiele das Ergebnis ab und prüfe Bild, Dauer und Ton. Tippe dann auf „In Fotos speichern“ (Save to Photos). Beim ersten Mal musst du der App möglicherweise erlauben, Fotos und Videos hinzuzufügen. Prüfe nach der Erfolgsmeldung die Datei in Fotos."
          },
          {
            "title": "Die übrigen Tasten",
            "text": "„Verarbeitung fortsetzen“ (Keep Processing) öffnet die Werkzeugauswahl mit dem Ergebnis, „Datei teilen“ (Share File) öffnet die Freigabe und „Fertig“ (Done) schließt die Ergebnisseite. „Fertig“ speichert nicht in Fotos."
          }
        ]
      }
    ],
    "exampleNote": "Die Screenshots stammen aus der englischen Oberfläche eines iPhone-17-Pro-Max-Simulators mit iOS 26.0; die Anleitung nennt deutsche Bedienelemente. Parameter und Grenzen beziehen sich auf diese Version. Das A/B-Beispiel verwendet insgesamt 5 Segmente, „Beginnen Sie mit A“ und 50 ms Standardüberblendung. Das Ergebnis wird als 02:31 angezeigt."
  },
  "segment-grid-video-iphone": {
    "title": "Ein Video als Segmentraster ausgeben",
    "description": "Teile auf iPhone oder iPad ein Video zeitlich auf und spiele die Abschnitte gleichzeitig in einem Raster ab. Wähle Zeilen und Spalten, Ton und Ausgabegröße.",
    "intro": "Teile ein Video in Zeitabschnitte, die gleichzeitig in einem Raster laufen. Wähle zuerst Zeilen und Spalten und lege dann Ton und Ausgabegröße fest.",
    "tips": [
      {
        "title": "Die einzelnen Kacheln sind schwer zu erkennen",
        "text": "Bei fester Ausgabegröße stehen pro Kachel weniger Pixel zur Verfügung, je mehr Kacheln es gibt. Reduziere Zeilen oder Spalten oder wähle eine passende Endgröße und vergleiche das Ergebnis."
      }
    ],
    "faq": [
      {
        "question": "Werden mehrere getrennte Videos in einem Raster kombiniert?",
        "answer": "Dieses Werkzeug verwendet verschiedene Zeitabschnitte eines einzelnen Videos. Es gibt keine Liste zum Anhängen weiterer Quellen wie bei „Videos zusammenfügen“."
      },
      {
        "question": "Warum ist standardmäßig kein Ton zu hören?",
        "answer": "Standardmäßig ist „Stummschalten“ ausgewählt, damit sich die Tonspuren nicht überlagern. Bei Bedarf kannst du „Erstes Segment-Audio“ wählen."
      }
    ],
    "steps": [
      {
        "title": "„Segmentraster“ öffnen",
        "text": "Tippe unten auf „Verarbeitung“ (Process) und öffne „Segmentraster“ (Segment Grid)."
      },
      {
        "title": "Quellvideo auswählen",
        "text": "Tippe unter „Video auswählen“ (Select Video) auf „Aus Fotos auswählen“ (Choose from Photos) oder „Aus Dateien auswählen“ (Choose from Files), um ein Video zu importieren. Das funktioniert auch bei leerer Download-Liste."
      },
      {
        "title": "Zeilen, Spalten und Ton festlegen",
        "text": "Importiere ein Video und prüfe „Spalten“ (Columns), „Zeilen“ (Rows) und „Sound“. Im Beispiel sind 2 Spalten, 2 Zeilen und die standardmäßige Stummschaltung gewählt.",
        "sections": [
          {
            "title": "Zeilen × Spalten ergibt die Kachelzahl",
            "text": "2×2 ergibt vier Kacheln und teilt die Quelle in vier gleich lange Abschnitte. Da diese gleichzeitig laufen, ist das Ergebnis kürzer als das Original. Die angezeigte Dauer ist eine Schätzung; maßgeblich ist die Ausgabedatei."
          },
          {
            "title": "Stumm oder Ton des ersten Abschnitts",
            "text": "„Stummschalten“ (Mute) vermeidet standardmäßig überlappenden Ton. „Erstes Segment-Audio“ (First Segment Audio) verwendet den Ton des ersten Abschnitts. Prüfe, ob diese Tonspur für die gesamte Rasteransicht passt."
          },
          {
            "title": "Kostenlose Werte bei Optionen mit Stern",
            "text": "Beginne mit dem kostenlosen 2×2-Raster und „Originalvideogröße“ (Original Video Size). Ab 3 Zeilen oder 3 Spalten sowie für quadratische Ausgabe oder Originalgröße je Kachel ist VIP nötig."
          }
        ]
      },
      {
        "title": "Ausgabegröße wählen",
        "text": "Tippe auf „Exportgröße“ (Export Size), um die Größenliste zu öffnen. Diese Einstellung bestimmt die Pixelgröße des gesamten Ergebnisses, nicht einer einzelnen Kachel.",
        "sections": [
          {
            "title": "Originalgröße des Videos oder jeder Kachel",
            "text": "„Originalvideogröße“ beträgt im Beispiel 640×338; alle vier Kacheln teilen diese Leinwand. „Jede Kachel in Originalgröße behalten“ (Keep Each Tile Original Size) zeigt 1280×676* und erhält möglichst die ursprüngliche Pixelzahl je Kachel. Das kann Dateigröße und Verarbeitungszeit deutlich erhöhen und an Systemgrenzen stoßen."
          },
          {
            "title": "Querformat, Hochformat oder Quadrat",
            "text": "Die Liste bietet auch 1280×720, 1920×1080, 1080×1920 und 1080×1080*. Wähle passend zur Verwendung und prüfe nach dem Export, ob jede Kachel deutlich und vollständig sichtbar ist."
          }
        ]
      },
      {
        "title": "Ergebnis prüfen, speichern oder weiterbearbeiten",
        "text": "Tippe auf „Start Verarbeitung“ (Start Processing) und sieh dir das Raster an. Prüfe die Abschnitte in den einzelnen Kacheln sowie Ausgabegröße und Ton.",
        "sections": [
          {
            "title": "Ansehen und speichern",
            "text": "Spiele das Ergebnis ab und prüfe Bild, Dauer und Ton. Tippe dann auf „In Fotos speichern“ (Save to Photos). Beim ersten Mal musst du der App möglicherweise erlauben, Fotos und Videos hinzuzufügen. Prüfe nach der Erfolgsmeldung die Datei in Fotos."
          },
          {
            "title": "Die übrigen Tasten",
            "text": "„Verarbeitung fortsetzen“ (Keep Processing) öffnet die Werkzeugauswahl mit dem Ergebnis, „Datei teilen“ (Share File) öffnet die Freigabe und „Fertig“ (Done) schließt die Ergebnisseite. „Fertig“ speichert nicht in Fotos."
          }
        ]
      }
    ],
    "exampleNote": "Die Screenshots stammen aus der englischen Oberfläche eines iPhone-17-Pro-Max-Simulators mit iOS 26.0; die Anleitung nennt deutsche Bedienelemente. Parameter und Grenzen beziehen sich auf diese Version. Exportiert wurde mit stummem Ton, 2×2 und „Originalvideogröße“. Bei etwa 6 Sekunden Ausgangsmaterial wurde die Dauer auf rund 2 Sekunden geschätzt, während die ganze Sekunden anzeigende Ergebnisbeschriftung etwa 1 Sekunde zeigte. Beide Angaben sind keine bildgenaue Messung."
  },
  "resize-video-iphone": {
    "title": "Seitenverhältnis und Videolayout ändern",
    "description": "Passe auf iPhone oder iPad mit „Größe/Leinwand ändern“ das Seitenverhältnis an. Wähle die Leinwand und nutze „Anpassen“ für das vollständige Bild oder „Füllausschnitt“ für eine gefüllte Leinwand.",
    "intro": "Ändere mit „Größe/Leinwand ändern“ das Seitenverhältnis. Wähle die Leinwand und nutze „Anpassen“ für das vollständige Bild oder „Füllausschnitt“, um die Leinwand zu füllen.",
    "tips": [
      {
        "title": "Zuerst entscheiden, ob Ränder abgeschnitten werden dürfen",
        "text": "Probiere bei Untertiteln oder wichtigen Inhalten am Bildrand zuerst „Anpassen“. Für eine gefüllte Leinwand nutze „Füllausschnitt“ und prüfe wichtige Stellen Bild für Bild."
      }
    ],
    "faq": [
      {
        "question": "Wird das Bild beim Ändern des Seitenverhältnisses gestreckt?",
        "answer": "„Anpassen“ erhält das Bildverhältnis und ergänzt bei Bedarf Hintergrund. Prüfe bei anderen Layouts vor dem Export, ob das Bild zugeschnitten oder gestreckt wird."
      },
      {
        "question": "Wie ändere ich die Ausgabeauflösung?",
        "answer": "Hier geht es vor allem um Leinwandverhältnis und Layout. Für Bildgröße und Dateiformat kannst du die Auflösungsoptionen unter „Video transkodieren“ verwenden."
      }
    ],
    "steps": [
      {
        "title": "„Größe/Leinwand ändern“ öffnen",
        "text": "Tippe unten auf „Verarbeitung“ (Process) und öffne „Größe/Leinwand ändern“ (Resize / Canvas)."
      },
      {
        "title": "Quellvideo auswählen",
        "text": "Tippe unter „Video auswählen“ (Select Video) auf „Aus Fotos auswählen“ (Choose from Photos) oder „Aus Dateien auswählen“ (Choose from Files), um ein Video zu importieren. Das funktioniert auch bei leerer Download-Liste."
      },
      {
        "title": "Seitenverhältnis wählen",
        "text": "Wähle unter „Canvas-Verhältnis“ (Canvas Ratio) das gewünschte Verhältnis und prüfe „Layout“ und Hintergrundfarbe. Das Beispiel verwendet 1:1, „Anpassen“ (Fit) und schwarzen Hintergrund.",
        "sections": [
          {
            "title": "Original, 16:9, 9:16, 1:1, 4:3 und 3:4",
            "text": "„Original“ behält das Quellverhältnis bei. 16:9 eignet sich häufig fürs Querformat, 9:16 fürs Hochformat, 1:1 ist quadratisch. Ein Verhältnis beschreibt Breite zu Höhe und legt keine Pixelauflösung wie 1080p fest."
          },
          {
            "title": "Hintergrundfarbe*",
            "text": "#000000 steht für Schwarz. Bei unterschiedlichen Bild- und Leinwandverhältnissen bleiben mit „Anpassen“ Hintergrundflächen sichtbar. Das Ändern der Hintergrundfarbe erfordert VIP."
          }
        ]
      },
      {
        "title": "Anpassen, füllend zuschneiden oder anderes Layout wählen",
        "text": "Tippe auf „Layout“, wähle einen Eintrag und kehre zu den Einstellungen zurück. Prüfe die Zusammenfassung und tippe auf „Start Verarbeitung“ (Start Processing).",
        "sections": [
          {
            "title": "Anpassen: das vollständige Bild zeigen",
            "text": "Das ganze Bild wird unter Wahrung seines Seitenverhältnisses in die Leinwand gesetzt. Dabei können Hintergrundflächen bleiben. Das eignet sich, wenn Personen, Untertitel oder Randinhalte erhalten bleiben müssen. Das Beispiel wurde mit „Anpassen“ exportiert."
          },
          {
            "title": "Füllausschnitt: die Leinwand füllen",
            "text": "Das Bild füllt die Leinwand proportional. Bei anderem Seitenverhältnis können Ränder abgeschnitten werden. Prüfe vorher die Vorschau, besonders Untertitel, Köpfe und seitliche Bildränder."
          },
          {
            "title": "Unschärfe und mehrteilige Layouts mit Stern",
            "text": "„Unschärfe 1:1*“ (Blur 1:1*), „Doppelt 1:1*“ (Double 1:1*), „Symmetrische doppelte 1:1*“ (Symmetric Double 1:1*), „dreifache 1:1*“ (Triple 1:1*) und „dreifache Unschärfe 1:1*“ (Triple Blur 1:1*) bieten unscharfen Hintergrund oder mehrere Bildfelder und erfordern VIP."
          }
        ]
      },
      {
        "title": "Ergebnis prüfen, speichern oder weiterbearbeiten",
        "text": "Prüfe in der Ausgabe Seitenverhältnis, Ränder und Hintergrund. Vergewissere dich bei „Anpassen“, dass das vollständige Bild erhalten bleibt, bevor du speicherst.",
        "sections": [
          {
            "title": "Ansehen und speichern",
            "text": "Spiele das Ergebnis ab und prüfe Bild, Dauer und Ton. Tippe dann auf „In Fotos speichern“ (Save to Photos). Beim ersten Mal musst du der App möglicherweise erlauben, Fotos und Videos hinzuzufügen. Prüfe nach der Erfolgsmeldung die Datei in Fotos."
          },
          {
            "title": "Die übrigen Tasten",
            "text": "„Verarbeitung fortsetzen“ (Keep Processing) öffnet die Werkzeugauswahl mit dem Ergebnis, „Datei teilen“ (Share File) öffnet die Freigabe und „Fertig“ (Done) schließt die Ergebnisseite. „Fertig“ speichert nicht in Fotos."
          }
        ]
      }
    ],
    "exampleNote": "Die Screenshots stammen aus der englischen Oberfläche eines iPhone-17-Pro-Max-Simulators mit iOS 26.0; die Anleitung nennt deutsche Bedienelemente. Parameter und Grenzen beziehen sich auf diese Version. Exportiert wurde mit 1:1-Leinwand, „Anpassen“ und schwarzem Hintergrund. Ausgaben mit kostenpflichtiger Unschärfe oder mehreren Bildfeldern wurden nicht geprüft."
  },
  "rotate-video-iphone": {
    "title": "Die Ausrichtung eines Videos drehen",
    "description": "Steht ein Video auf iPhone oder iPad seitlich oder auf dem Kopf, korrigiere es mit „Video drehen“. Wähle den Winkel, prüfe die Vorschau und speichere das Ergebnis.",
    "intro": "Korrigiere seitliche oder kopfstehende Videos mit „Video drehen“. Wähle den Winkel, prüfe die Vorschau und speichere das Ergebnis.",
    "tips": [
      {
        "title": "Drehen und Spiegeln unterscheiden",
        "text": "Drehen ändert die Ausrichtung. Spiegeln vertauscht links und rechts oder oben und unten. Verwende bei spiegelverkehrtem Selfie-Text „Video spiegeln“."
      }
    ],
    "faq": [
      {
        "question": "Welche Option korrigiert ein kopfstehendes Video?",
        "answer": "Wähle 180 und prüfe in der Vorschau, ob das Motiv richtig herum steht."
      },
      {
        "question": "Ändert Drehen die Videodauer?",
        "answer": "Dieser Vorgang ändert die Ausrichtung. Prüfe nach dem Drehen die Dauer der Ausgabe."
      }
    ],
    "steps": [
      {
        "title": "„Video drehen“ öffnen",
        "text": "Tippe unten auf „Verarbeitung“ (Process) und öffne „Video drehen“ (Rotate Video)."
      },
      {
        "title": "Quellvideo auswählen",
        "text": "Tippe unter „Video auswählen“ (Select Video) auf „Aus Fotos auswählen“ (Choose from Photos) oder „Aus Dateien auswählen“ (Choose from Files), um ein Video zu importieren. Das funktioniert auch bei leerer Download-Liste."
      },
      {
        "title": "Drehrichtung wählen",
        "text": "Wähle unter „Rotation“ den Winkel und prüfe die Ausrichtung in der Vorschau. Das Beispiel nutzt „Um 90° nach rechts drehen“ (Rotate Right 90).",
        "sections": [
          {
            "title": "90° nach rechts, 180° oder 90° nach links",
            "text": "„Um 90° nach rechts drehen“ ist eine Vierteldrehung im Uhrzeigersinn, 180 eine halbe Drehung und „Nach links drehen 90“ (Rotate Left 90) eine Vierteldrehung gegen den Uhrzeigersinn. Bei 90° wechseln Quer- und Hochformat."
          },
          {
            "title": "Schwarze Ränder in der Vorschau",
            "text": "Ein Hochformatvideo kann in der breiten Vorschau schwarze Ränder zeigen. Diese müssen nicht genauso in der Ausgabedatei enthalten sein. Prüfe die tatsächlichen Abmessungen und die Darstellung der gespeicherten Datei."
          }
        ]
      },
      {
        "title": "Ergebnis prüfen, speichern oder weiterbearbeiten",
        "text": "Tippe auf „Start Verarbeitung“ (Start Processing) und prüfe die Ausrichtung im exportierten Video. Speichere erst, wenn Text und Motiv richtig herum stehen.",
        "sections": [
          {
            "title": "Ansehen und speichern",
            "text": "Spiele das Ergebnis ab und prüfe Bild, Dauer und Ton. Tippe dann auf „In Fotos speichern“ (Save to Photos). Beim ersten Mal musst du der App möglicherweise erlauben, Fotos und Videos hinzuzufügen. Prüfe nach der Erfolgsmeldung die Datei in Fotos."
          },
          {
            "title": "Die übrigen Tasten",
            "text": "„Verarbeitung fortsetzen“ (Keep Processing) öffnet die Werkzeugauswahl mit dem Ergebnis, „Datei teilen“ (Share File) öffnet die Freigabe und „Fertig“ (Done) schließt die Ergebnisseite. „Fertig“ speichert nicht in Fotos."
          }
        ]
      }
    ],
    "exampleNote": "Die Screenshots stammen aus der englischen Oberfläche eines iPhone-17-Pro-Max-Simulators mit iOS 26.0; die Anleitung nennt deutsche Bedienelemente. Parameter und Grenzen beziehen sich auf diese Version. Ein etwa 6 Sekunden langer Clip wurde um 90° nach rechts gedreht. Vorschau und Export zeigen die geänderte Ausrichtung."
  },
  "mirror-video-iphone": {
    "title": "Ein Video spiegeln",
    "description": "Spiegle auf iPhone oder iPad mit „Video spiegeln“ das Bild horizontal oder vertikal. Prüfe vor dem Export besonders Text und Logos.",
    "intro": "Mit „Video spiegeln“ vertauschst du links und rechts oder oben und unten. Prüfe vor dem Export den Effekt, besonders bei Text und Logos.",
    "tips": [
      {
        "title": "Untertitel können ebenfalls gespiegelt werden",
        "text": "Spiegeln wirkt auf das gesamte Bild. Prüfe bei Clips mit Text vorab, ob die geänderte Textrichtung für dich passt."
      }
    ],
    "faq": [
      {
        "question": "Welche Option korrigiert vertauschte Seiten?",
        "answer": "Probiere „H Flip“ und kontrolliere Text oder die Positionen links und rechts im Bild."
      },
      {
        "question": "Laufen Bewegungen durch Spiegeln rückwärts?",
        "answer": "Nein. Für eine umgekehrte zeitliche Reihenfolge nutze „Video umkehren“."
      }
    ],
    "steps": [
      {
        "title": "„Video spiegeln“ öffnen",
        "text": "Tippe unten auf „Verarbeitung“ (Process) und öffne „Video spiegeln“ (Mirror Video)."
      },
      {
        "title": "Quellvideo auswählen",
        "text": "Tippe unter „Video auswählen“ (Select Video) auf „Aus Fotos auswählen“ (Choose from Photos) oder „Aus Dateien auswählen“ (Choose from Files), um ein Video zu importieren. Das funktioniert auch bei leerer Download-Liste."
      },
      {
        "title": "Spiegelung in der Vorschau ansehen",
        "text": "Nach dem Import zeigt „Spiegelmodus“ (Mirror Mode) die aktuelle Einstellung, hier „H Flip“. Prüfe zuerst Details links und rechts in der Vorschau und öffne dann die Modusliste.",
        "sections": []
      },
      {
        "title": "Spiegelung und Symmetrie unterscheiden",
        "text": "Tippe auf „Spiegelmodus“, um alle Optionen zu sehen. Wähle eine aus, kehre zurück und tippe auf „Start Verarbeitung“ (Start Processing).",
        "sections": [
          {
            "title": "Horizontal, vertikal oder um 180° drehen",
            "text": "„H Flip“ vertauscht links und rechts, „V Flip“ oben und unten. „180“ dreht das Bild um eine halbe Umdrehung. Prüfe die ähnlichen Optionen am besten anhand von Text oder einem markanten Bilddetail."
          },
          {
            "title": "Horizontale, vertikale und zentrale Symmetrie*",
            "text": "Diese VIP-Modi erzeugen Symmetrieeffekte und unterscheiden sich vom Spiegeln des gesamten Bildes. Prüfe bei der Auswahl die Vorschau."
          }
        ]
      },
      {
        "title": "Ergebnis prüfen, speichern oder weiterbearbeiten",
        "text": "Prüfe im gespiegelten Ergebnis die Positionen links und rechts oder oben und unten. Text, Logos und eingebrannte Untertitel werden mitgespiegelt.",
        "sections": [
          {
            "title": "Ansehen und speichern",
            "text": "Spiele das Ergebnis ab und prüfe Bild, Dauer und Ton. Tippe dann auf „In Fotos speichern“ (Save to Photos). Beim ersten Mal musst du der App möglicherweise erlauben, Fotos und Videos hinzuzufügen. Prüfe nach der Erfolgsmeldung die Datei in Fotos."
          },
          {
            "title": "Die übrigen Tasten",
            "text": "„Verarbeitung fortsetzen“ (Keep Processing) öffnet die Werkzeugauswahl mit dem Ergebnis, „Datei teilen“ (Share File) öffnet die Freigabe und „Fertig“ (Done) schließt die Ergebnisseite. „Fertig“ speichert nicht in Fotos."
          }
        ]
      }
    ],
    "exampleNote": "Die Screenshots stammen aus der englischen Oberfläche eines iPhone-17-Pro-Max-Simulators mit iOS 26.0; die Anleitung nennt deutsche Bedienelemente. Parameter und Grenzen beziehen sich auf diese Version. „H Flip“ wurde exportiert. Bei den kostenpflichtigen Symmetrieeffekten wurden nur die Optionen geprüft, nicht die Ausgabe."
  },
  "reverse-video-iphone": {
    "title": "Ein Video rückwärts abspielen",
    "description": "Lass auf iPhone oder iPad mit „Video umkehren“ ein Video vom Ende zum Anfang laufen. Wähle stummen, ursprünglichen oder rückwärts abgespielten Ton und prüfe das Ergebnis.",
    "intro": "Mit „Video umkehren“ läuft dein Video vom Ende zum Anfang. Wähle stummen, ursprünglichen oder rückwärts abgespielten Ton und sieh dir das Ergebnis an.",
    "tips": [
      {
        "title": "Zuerst kürzen, dann umkehren",
        "text": "Behalte mit „Video zuschneiden“ zunächst die gewünschte Bewegung. Danach lässt sich der Rhythmus leichter beurteilen und es muss weniger Material verarbeitet werden."
      }
    ],
    "faq": [
      {
        "question": "Ist Umkehren dasselbe wie eine Drehung um 180 Grad?",
        "answer": "Nein. Umkehren ändert die zeitliche Reihenfolge. „Video drehen“ ändert die Bildausrichtung."
      },
      {
        "question": "Warum hat das rückwärts laufende Video keinen Ton?",
        "answer": "Das Beispiel verwendet die Standardoption „Stummschalten“. Wähle für Ton den passenden Modus und prüfe die Ausgabe."
      }
    ],
    "steps": [
      {
        "title": "„Video umkehren“ öffnen",
        "text": "Tippe unten auf „Verarbeitung“ (Process) und öffne „Video umkehren“ (Reverse Video)."
      },
      {
        "title": "Quellvideo auswählen",
        "text": "Tippe unter „Video auswählen“ (Select Video) auf „Aus Fotos auswählen“ (Choose from Photos) oder „Aus Dateien auswählen“ (Choose from Files), um ein Video zu importieren. Das funktioniert auch bei leerer Download-Liste."
      },
      {
        "title": "Ton für die Rückwärtswiedergabe wählen",
        "text": "Unter „Sound“ stehen „Stummschalten“ (Mute), „Audio behalten“ (Keep Audio) und „Umgekehrtes Audio“ (Reverse Audio) zur Auswahl. Das Beispiel nutzt „Stummschalten“. Tippe anschließend auf „Start Verarbeitung“ (Start Processing).",
        "sections": [
          {
            "title": "Stumm: ohne Ton ausgeben",
            "text": "Das eignet sich für rein visuelle Rückwärtsbewegungen und vermeidet ungewohnt klingende rückwärts abgespielte Sprache oder Umgebungsgeräusche."
          },
          {
            "title": "Originalton behalten oder ebenfalls umkehren",
            "text": "„Audio behalten“ erhält die ursprüngliche Tonreihenfolge. „Umgekehrtes Audio“ spielt den Ton rückwärts ab. Wähle nach Bedarf und höre Sprache oder Musik im Export an."
          }
        ]
      },
      {
        "title": "Ergebnis prüfen, speichern oder weiterbearbeiten",
        "text": "Spiele das Ergebnis ab und prüfe, ob die Bewegung vom Ende zum Anfang läuft. Kontrolliere Anfang, Ende und den Tonmodus, bevor du speicherst.",
        "sections": [
          {
            "title": "Ansehen und speichern",
            "text": "Spiele das Ergebnis ab und prüfe Bild, Dauer und Ton. Tippe dann auf „In Fotos speichern“ (Save to Photos). Beim ersten Mal musst du der App möglicherweise erlauben, Fotos und Videos hinzuzufügen. Prüfe nach der Erfolgsmeldung die Datei in Fotos."
          },
          {
            "title": "Die übrigen Tasten",
            "text": "„Verarbeitung fortsetzen“ (Keep Processing) öffnet die Werkzeugauswahl mit dem Ergebnis, „Datei teilen“ (Share File) öffnet die Freigabe und „Fertig“ (Done) schließt die Ergebnisseite. „Fertig“ speichert nicht in Fotos."
          }
        ]
      }
    ],
    "exampleNote": "Die Screenshots stammen aus der englischen Oberfläche eines iPhone-17-Pro-Max-Simulators mit iOS 26.0; die Anleitung nennt deutsche Bedienelemente. Parameter und Grenzen beziehen sich auf diese Version. Nur „Stummschalten“ wurde praktisch geprüft; das Ergebnis beginnt am Ende des Originals. „Audio behalten“ und „Umgekehrtes Audio“ wurden nicht geprüft."
  },
  "change-video-speed-iphone": {
    "title": "Ein Video schneller oder langsamer abspielen",
    "description": "Ändere auf iPhone oder iPad mit „Änderung Geschwindigkeit“ das Videotempo. Wähle den Faktor und prüfe Dauer und Ton vor dem Speichern.",
    "intro": "Mit „Änderung Geschwindigkeit“ lässt du Videos schneller oder langsamer laufen. Wähle den Faktor und prüfe Dauer und Ton, bevor du speicherst.",
    "tips": [
      {
        "title": "Langsamer bedeutet nicht automatisch flüssiger",
        "text": "Zeitlupe kann eine niedrige Quellbildrate oder Bewegungsunschärfe deutlicher machen. Vergleiche zuerst kurze Ausschnitte; der Geschwindigkeitsfaktor allein sagt nichts über die Wirkung aus."
      }
    ],
    "faq": [
      {
        "question": "Wie verändert 2x die Dauer?",
        "answer": "Sie beträgt meist etwa die Hälfte des Originals. Maßgeblich ist die tatsächliche Ausgabedauer."
      },
      {
        "question": "Warum fehlt bei sehr hohem Tempo der Ton?",
        "answer": "Laut aktueller Parameterseite wird Audio oberhalb von 4x automatisch entfernt."
      }
    ],
    "steps": [
      {
        "title": "„Änderung Geschwindigkeit“ öffnen",
        "text": "Tippe unten auf „Verarbeitung“ (Process) und öffne „Änderung Geschwindigkeit“ (Change Speed), um das Tempo zu ändern."
      },
      {
        "title": "Quellvideo auswählen",
        "text": "Tippe unter „Video auswählen“ (Select Video) auf „Aus Fotos auswählen“ (Choose from Photos) oder „Aus Dateien auswählen“ (Choose from Files), um ein Video zu importieren. Das funktioniert auch bei leerer Download-Liste."
      },
      {
        "title": "Tempo und Tonhöhe einstellen",
        "text": "Ziehe den Regler „Geschwindigkeit“ (Speed). Prüfe den Faktor rechts und die geschätzte Ausgabedauer darunter (Estimated processed duration). Tippe dann auf „Start Verarbeitung“ (Start Processing).",
        "sections": [
          {
            "title": "Geschwindigkeitsfaktor und Dauer",
            "text": "1x entspricht dem Originaltempo. Über 1 wird beschleunigt, unter 1 verlangsamt. Die Dauer ergibt sich ungefähr aus Originaldauer geteilt durch Faktor: 6 Sekunden ÷ 1,5 ≈ 4 Sekunden. Prüfe das tatsächliche Ergebnis."
          },
          {
            "title": "Die Tonhöhe beim Ändern des Tempos erhalten",
            "text": "Diese VIP-Option erhält die ursprüngliche Tonhöhe trotz geändertem Tempo. Ohne sie kann sich die Tonhöhe mit dem Tempo ändern. Höre bei Sprache oder Gesang besonders genau hin."
          },
          {
            "title": "Bereich und Ton bei hohem Tempo",
            "text": "Laut Seite sind 0,5x–2x kostenlos. Der erweiterte Bereich von 0,1x–32x und das Beibehalten der Tonhöhe erfordern VIP. Oberhalb von 4x wird Audio automatisch entfernt."
          }
        ]
      },
      {
        "title": "Ergebnis prüfen, speichern oder weiterbearbeiten",
        "text": "Prüfe Rhythmus, Dauer und Ton bei der Wiedergabe. Ist das Video zu schnell oder zu langsam, passe den Faktor an und exportiere erneut.",
        "sections": [
          {
            "title": "Ansehen und speichern",
            "text": "Spiele das Ergebnis ab und prüfe Bild, Dauer und Ton. Tippe dann auf „In Fotos speichern“ (Save to Photos). Beim ersten Mal musst du der App möglicherweise erlauben, Fotos und Videos hinzuzufügen. Prüfe nach der Erfolgsmeldung die Datei in Fotos."
          },
          {
            "title": "Die übrigen Tasten",
            "text": "„Verarbeitung fortsetzen“ (Keep Processing) öffnet die Werkzeugauswahl mit dem Ergebnis, „Datei teilen“ (Share File) öffnet die Freigabe und „Fertig“ (Done) schließt die Ergebnisseite. „Fertig“ speichert nicht in Fotos."
          }
        ]
      }
    ],
    "exampleNote": "Die Screenshots stammen aus der englischen Oberfläche eines iPhone-17-Pro-Max-Simulators mit iOS 26.0; die Anleitung nennt deutsche Bedienelemente. Parameter und Grenzen beziehen sich auf diese Version. Das Beispiel verwendet 1,50x ohne „Pitch beibehalten“ und verkürzt einen Clip von etwa 6 auf etwa 4 Sekunden."
  },
  "edit-video-audio-iphone": {
    "title": "Videoton stummschalten oder Lautstärke anpassen",
    "description": "Nutze auf iPhone oder iPad „Audiobearbeitung“, um Videoton stummzuschalten, seine Lautstärke zu ändern oder ihn zu ersetzen. Wähle Modus und Parameter und höre den Export an.",
    "intro": "Mit „Audiobearbeitung“ kannst du Videoton stummschalten, seine Lautstärke ändern oder ihn ersetzen. Wähle den Modus, passe die Werte an und höre das Ergebnis an.",
    "tips": [
      {
        "title": "Der Ton ist verzerrt oder zu laut",
        "text": "Prüfe zunächst die Qualität des Originaltons und ändere die Lautstärke maßvoll. Verstärkung kann auch Rauschen verstärken. Bewahre das Original zum Vergleichen auf."
      }
    ],
    "faq": [
      {
        "question": "Entsteht eine Audiodatei?",
        "answer": "Dieses Werkzeug bearbeitet den Ton eines Videos; die Ausgabe bleibt ein Video. Nutze für eine separate Audiodatei „Audio extrahieren“."
      },
      {
        "question": "Wie prüfe ich den Lautstärkewert?",
        "answer": "Achte auf den Prozentwert neben dem Regler und in der Zusammenfassung des Exportverlaufs. Höre das Ergebnis anschließend an."
      }
    ],
    "steps": [
      {
        "title": "„Audiobearbeitung“ öffnen",
        "text": "Tippe unten auf „Verarbeitung“ (Process) und öffne „Audiobearbeitung“ (Audio Editing)."
      },
      {
        "title": "Quellvideo auswählen",
        "text": "Tippe unter „Video auswählen“ (Select Video) auf „Aus Fotos auswählen“ (Choose from Photos) oder „Aus Dateien auswählen“ (Choose from Files), um ein Video zu importieren. Das funktioniert auch bei leerer Download-Liste."
      },
      {
        "title": "Bearbeitungsmodus wählen",
        "text": "Wähle unter „Verarbeitungsmodus“ (Processing Mode) „Stummschalten“ (Mute), „Lautstärke“ (Volume) oder „Ersetzen*“ (Replace*). Bei „Lautstärke“ werden ein Regler und die Option zum Ein- und Ausblenden eingeblendet.",
        "sections": [
          {
            "title": "Stummschalten: den Ton entfernen",
            "text": "Wähle „Stummschalten“, wenn du nur das Bild benötigst. Spiele die Ausgabe ab und prüfe, ob der Ton tatsächlich entfernt wurde und nicht nur der Player vorübergehend stumm ist."
          },
          {
            "title": "Lautstärke: den Pegel anpassen",
            "text": "Ziehe den Lautstärkeregler und beobachte den Prozentwert. 100 % entspricht dem ursprünglichen Pegel. Verstärkung kann auch Rauschen erhöhen. Höre die Ausgabe vor dem Speichern an."
          },
          {
            "title": "Ersetzen* und Ein-/Ausblendung*",
            "text": "„Ersetzen“ tauscht die Audioquelle aus. „Ein-/Ausblendung“ (Fade In/Out) lässt den Ton ein- und ausblenden. Beide benötigen VIP. Wenn du Video und Audio separat wählen möchtest, nutze „Audio und Video zusammenführen“ (Merge Audio and Video)."
          }
        ]
      },
      {
        "title": "Ergebnis prüfen, speichern oder weiterbearbeiten",
        "text": "Höre das exportierte Video an und vergleiche es mit dem Original. Soll sich die Lautstärke ändern, prüfe vor dem Export, ob sich der Prozentwert tatsächlich geändert hat. 100 % behält den ursprünglichen Pegel bei.",
        "sections": [
          {
            "title": "Ansehen und speichern",
            "text": "Spiele das Ergebnis ab und prüfe Bild, Dauer und Ton. Tippe dann auf „In Fotos speichern“ (Save to Photos). Beim ersten Mal musst du der App möglicherweise erlauben, Fotos und Videos hinzuzufügen. Prüfe nach der Erfolgsmeldung die Datei in Fotos."
          },
          {
            "title": "Die übrigen Tasten",
            "text": "„Verarbeitung fortsetzen“ (Keep Processing) öffnet die Werkzeugauswahl mit dem Ergebnis, „Datei teilen“ (Share File) öffnet die Freigabe und „Fertig“ (Done) schließt die Ergebnisseite. „Fertig“ speichert nicht in Fotos."
          }
        ]
      }
    ],
    "exampleNote": "Die Screenshots stammen aus der englischen Oberfläche eines iPhone-17-Pro-Max-Simulators mit iOS 26.0; die Anleitung nennt deutsche Bedienelemente. Parameter und Grenzen beziehen sich auf diese Version. Das Beispiel exportiert „Lautstärke“ mit 100 % und zeigt keine Wirkung eines geänderten Pegels. „Ersetzen“ und „Ein-/Ausblendung“ wurden nicht ausgeführt."
  },
  "add-watermark-video-iphone": {
    "title": "Ein Wasserzeichen aus Text hinzufügen",
    "description": "Füge mit ClipDock auf iPhone oder iPad ein Textwasserzeichen hinzu. Lege Text, Größe und Position fest und prüfe das Video vor dem Speichern.",
    "intro": "Nutze „Wasserzeichen hinzufügen“ für ein Textwasserzeichen. Gib den Text ein und wähle Größe und Position. Die Parameter- und Ergebnisbilder verwenden verschiedene Texte und Quellen; Näheres steht in den Beispielhinweisen.",
    "tips": [
      {
        "title": "Erst ansehen, dann speichern",
        "text": "Das Wasserzeichen sollte lesbar sein und wichtige Inhalte freilassen. Bewahre das Original auf, um später Text, Position oder Stil ändern und neu exportieren zu können."
      }
    ],
    "faq": [
      {
        "question": "Sind Bildwasserzeichen kostenlos?",
        "answer": "„Bild*“ ist auf der aktuellen Seite als VIP markiert. Dieses Beispiel zeigt ein Textwasserzeichen."
      },
      {
        "question": "Warum unterscheidet sich der Text im Ergebnisbild?",
        "answer": "Die Parameterbilder verwenden ClipDock Demo. Das Ergebnis vom echten Gerät verwendet Made by ClipDock und einen anderen Videoclip. Beide zeigen denselben Ablauf für Textwasserzeichen."
      }
    ],
    "steps": [
      {
        "title": "„Wasserzeichen hinzufügen“ öffnen",
        "text": "Tippe unten auf „Verarbeitung“ (Process) und öffne „Wasserzeichen hinzufügen“ (Add Watermark)."
      },
      {
        "title": "Quellvideo auswählen",
        "text": "Tippe unter „Video auswählen“ (Select Video) auf „Aus Fotos auswählen“ (Choose from Photos) oder „Aus Dateien auswählen“ (Choose from Files), um ein Video zu importieren. Das funktioniert auch bei leerer Download-Liste."
      },
      {
        "title": "Text und Größe festlegen",
        "text": "Wähle unter „Wasserzeichentyp“ (Watermark Type) „Text“ und gib unter „Textinhalt“ (Text Content) deinen Text ein. Das Beispiel verwendet ClipDock Demo. In der Vorschau oben siehst du Position und ungefähre Wirkung.",
        "sections": [
          {
            "title": "Text oder Bild*",
            "text": "„Text“ erstellt ein Textwasserzeichen. „Bild“ (Image) öffnet die VIP-Funktion für ein Bildwasserzeichen. Das Beispiel konfiguriert nur Text und verwendet kein Bildwasserzeichen."
          },
          {
            "title": "Schriftgröße",
            "text": "Rechts neben dem Regler steht die relative Größe, im Beispiel 100 %. Achte zugleich auf die Vorschau, damit Motiv, Untertitel und wichtige Bildinhalte frei bleiben."
          }
        ]
      },
      {
        "title": "Position und Aussehen anpassen",
        "text": "Prüfe weiter unten „Wasserzeichenposition“ (Watermark Position), Farben, Hintergrund, Kontur und „Deckkraft“ (Opacity). Optionen mit Stern erfordern VIP. Ein sichtbarer Standardwert bedeutet nicht, dass du ihn kostenlos ändern kannst.",
        "sections": [
          {
            "title": "Position des Wasserzeichens",
            "text": "Zur Auswahl stehen oben links, oben rechts, unten links, unten rechts und die Mitte. Das Beispiel nutzt unten rechts. Wähle eine Position, die Motiv und Untertitel freilässt, und prüfe Hoch- und Querformat getrennt."
          },
          {
            "title": "Farben, Hintergrund und Kontur",
            "text": "„Textfarbe“ (Text Color) bestimmt die Schriftfarbe, „Hintergrund anzeigen“ (Show Background) den Texthintergrund. „Textstrich“ (Text Stroke) und „Strichfarbe“ (Stroke Color) steuern die Kontur. Diese Optionen sind als VIP markiert. Prüfe einen ausreichenden Kontrast, besonders bei wechselnd hellen und dunklen Bildern."
          },
          {
            "title": "Die Sichtbarkeit des Wasserzeichens anpassen",
            "text": "Das Beispiel zeigt 75 %. Ein niedrigerer Wert bei „Deckkraft“ macht das Wasserzeichen blasser und möglicherweise schwerer lesbar. Dieser Parameter erfordert VIP."
          }
        ]
      },
      {
        "title": "Wasserzeichen im fertigen Video prüfen",
        "text": "Tippe auf „Start Verarbeitung“ (Start Processing) und sieh dir das Wasserzeichen im exportierten Video an. Prüfe Text, Position und Lesbarkeit vor verschiedenen Hintergründen.",
        "sections": [
          {
            "title": "Wirkung kontrollieren",
            "text": "Spiele das Video ab und prüfe Lesbarkeit und Position sowie mögliche Überdeckungen von Motiv oder Untertiteln. Das Ergebnisbild verwendet einen anderen Clip und Wasserzeichentext; der Ablauf entspricht dem vorherigen Parameterbeispiel."
          },
          {
            "title": "In Fotos speichern oder teilen",
            "text": "Tippe auf „In Fotos speichern“ (Save to Photos) und prüfe nach der Erfolgsmeldung die Datei in Fotos. „Datei teilen“ (Share File) öffnet die Freigabe."
          },
          {
            "title": "Weiterbearbeiten oder schließen",
            "text": "„Verarbeitung fortsetzen“ (Keep Processing) übergibt das Ergebnis an weitere Werkzeuge. „Fertig“ (Done) schließt die Ergebnisseite und speichert nicht in Fotos."
          }
        ]
      }
    ],
    "exampleNote": "Die Einstiegs- und Parameterbilder stammen aus einem iPhone-17-Pro-Max-Simulator, die Ergebnisbilder von einem echten iPhone. Die Parameter verwenden ClipDock Demo; das Ergebnis nutzt einen anderen Clip und Made by ClipDock. Im Beispiel wurde nur ein Textwasserzeichen konfiguriert. Änderungen kostenpflichtiger Stile wurden nicht geprüft."
  },
  "capture-video-frames-iphone": {
    "title": "Einzelbilder aus einem Video speichern",
    "description": "Speichere auf iPhone oder iPad mit „Videoaufnahme“ ein Videobild als Foto. Wähle einen klaren Moment, prüfe die Vorschau und speichere oder teile das Bild.",
    "intro": "Mit „Videoaufnahme“ speicherst du ein Einzelbild aus einem Video. Wähle einen klaren Moment, prüfe das Bild in der Vorschau und speichere oder teile es.",
    "tips": [
      {
        "title": "Das Bild ist unscharf",
        "text": "Wähle einen Moment mit weniger Bewegung und prüfe die Schärfe des Quellvideos. Ein Einzelbildexport kann ein bereits unscharfes Bild nicht reparieren."
      }
    ],
    "faq": [
      {
        "question": "Kann ich mehrere Bilder auf einmal exportieren?",
        "answer": "„Batch*“ exportiert mehrere Videobilder und erfordert VIP. Für ein einzelnes Bild verwende „Einzelne“."
      },
      {
        "question": "Was unterscheidet das von einem Bildschirmfoto?",
        "answer": "„Videoaufnahme“ exportiert ein Bild direkt aus dem Video; die Größe hängt von der Quelle ab. Ein Bildschirmfoto kann dagegen Player-Tasten und Systemoberfläche enthalten."
      }
    ],
    "steps": [
      {
        "title": "„Videoaufnahme“ öffnen",
        "text": "Tippe unten auf „Verarbeitung“ (Process) und öffne „Videoaufnahme“ (Video Capture), um Einzelbilder zu exportieren."
      },
      {
        "title": "Quellvideo auswählen",
        "text": "Tippe unter „Video auswählen“ (Select Video) auf „Aus Fotos auswählen“ (Choose from Photos) oder „Aus Dateien auswählen“ (Choose from Files), um ein Video zu importieren. Das funktioniert auch bei leerer Download-Liste."
      },
      {
        "title": "Modus und Zeitpunkt wählen",
        "text": "Wähle nach dem Import „Aufnahmemodus“ (Capture Mode) und über „Aufnahmezeit“ (Capture Time) den gewünschten Moment. Das Beispiel nutzt „Einzelne“ (Single), 00:00 und keinen Zeitstempel.",
        "sections": [
          {
            "title": "Einzelbild: den aktuellen Moment exportieren",
            "text": "Ziehe den Zeitregler und beobachte die Vorschau. Wähle ein klares Bild und tippe auf „Bild exportieren“ (Export Image). Exportiert wird das Videobild; App-Tasten und der abgebildete Telefonrahmen gehören nicht dazu."
          },
          {
            "title": "Batch*, Intelligent* und Kontaktabzug*",
            "text": "„Batch“, „Intelligent“ (Smart) und „Kontaktabzug“ (Sheet) öffnen Serienexport, intelligente Bildauswahl und eine große Bildübersicht. Diese Modi erfordern VIP. Öffne den jeweiligen Modus, um seine Einstellungen zu sehen."
          },
          {
            "title": "Zeitstempel hinzufügen",
            "text": "Die Option fügt eine Zeitmarkierung hinzu. Für eine reine Bilddarstellung kannst du sie deaktiviert lassen. Aktiviere sie, wenn der Quellzeitpunkt sichtbar sein soll, und prüfe Position und Lesbarkeit im Export."
          }
        ]
      },
      {
        "title": "Bild prüfen und speichern",
        "text": "Tippe auf „Bild exportieren“, um „Screenshot-Vorschau“ (Screenshot Preview) zu öffnen. Prüfe Bild, Abmessungen und Dateigröße. Nutze „In Fotos speichern“ (Save to Photos) oder „Datei teilen“ (Share File). „Fertig“ (Done) schließt die Vorschau.",
        "sections": [
          {
            "title": "Die Bildgröße kommt aus dem Video",
            "text": "Die Quelle im Beispiel hat 640×338 Pixel; die Ausgabe zeigt dieselbe Größe. Ein größerer Telefonbildschirm ergänzt keine Details im Quellvideo."
          }
        ]
      }
    ],
    "exampleNote": "Die Screenshots stammen aus der englischen Oberfläche eines iPhone-17-Pro-Max-Simulators mit iOS 26.0; die Anleitung nennt deutsche Bedienelemente. Parameter und Grenzen beziehen sich auf diese Version. Der Modus „Einzelne“ exportierte ein JPEG mit 640×338 Pixeln. Einstellungen und Ausgaben von „Batch“, „Intelligent“ und „Kontaktabzug“ wurden nicht geprüft."
  },
  "extract-audio-iphone": {
    "title": "Die Tonspur eines Videos extrahieren",
    "description": "Speichere auf iPhone oder iPad mit „Audio extrahieren“ den Ton eines Videos separat. Wähle ein Video aus Fotos oder Dateien und speichere oder teile die Audiodatei.",
    "intro": "Mit „Audio extrahieren“ speicherst du Videoton separat. Wähle ein Video aus Fotos oder Dateien und speichere oder teile die extrahierte Audiodatei.",
    "tips": [
      {
        "title": "Was tun, wenn die Audiodatei stumm ist?",
        "text": "Spiele zuerst das Originalvideo ab und prüfe, ob der Player stummgeschaltet ist. Ohne Tonspur in der Quelle kann das Werkzeug keinen Ton wiederherstellen. Die Extraktion verbessert auch nicht automatisch die Klangqualität."
      },
      {
        "title": "Auch ohne Downloads fortfahren",
        "text": "„Keine heruntergeladenen Videos zur Verarbeitung verfügbar“ bedeutet nur, dass in ClipDock keine passenden Downloads liegen. Das Beispiel nutzt „Aus Fotos auswählen“, um direkt aus der Fotomediathek zu importieren."
      }
    ],
    "faq": [
      {
        "question": "Kann ich MP3 oder andere Formate wählen?",
        "answer": "Dieser Ablauf erzeugt direkt M4A und bietet kein Formatmenü. Eine MP3-Umwandlung wird hier nicht beschrieben."
      },
      {
        "question": "Warum finde ich das Ergebnis nicht in Fotos?",
        "answer": "Die Ausgabe ist eine Audiodatei, kein Video oder Foto. Öffne „Datei teilen“ und nutze etwa „In Dateien sichern“, um sie abzulegen."
      },
      {
        "question": "Kann ich den Ton direkt aus einem Freigabelink extrahieren?",
        "answer": "Diese Anleitung bearbeitet ein bereits vorhandenes Video aus Fotos. Hast du nur einen Freigabelink, lade zunächst das Video anhand der Plattformanleitung und extrahiere anschließend den Ton."
      }
    ],
    "steps": [
      {
        "title": "„Audio extrahieren“ öffnen",
        "text": "Tippe unten auf „Verarbeitung“ (Process) und öffne „Audio extrahieren“ (Extract Audio)."
      },
      {
        "title": "Video aus Fotos auswählen",
        "text": "Tippe auf der Seite „Video auswählen“ (Select Video) auf „Aus Fotos auswählen“ (Choose from Photos) und wähle im Systemdialog das Video. Eine leere Download-Liste verhindert den Fotoimport nicht. Liegt das Video in der Dateien-App, verwende „Aus Dateien auswählen“ (Choose from Files)."
      },
      {
        "title": "Auf die Audioextraktion warten",
        "text": "Die Extraktion beginnt direkt nach der Videoauswahl, ohne zusätzliche Starttaste. Sobald „Verarbeitung abgeschlossen“ (Processing Complete) und die .m4a-Datei erscheinen, tippe zum Speichern oder Teilen auf „Datei teilen“ (Share File). „Fertig“ (Done) schließt den Hinweis."
      },
      {
        "title": "Freigabe und Speicheroptionen öffnen",
        "text": "Wähle im Dialog von „Datei teilen“ die Option „In Dateien sichern“ für eine Kopie oder eine andere App zum Teilen. Öffne die gespeicherte Audiodatei und prüfe Ton und Dauer."
      }
    ],
    "exampleNote": "Die Screenshots stammen aus der englischen Oberfläche eines iPhone-17-Pro-Max-Simulators mit iOS 26.0; die Anleitung nennt deutsche Bedienelemente. Parameter und Grenzen beziehen sich auf diese Version. Nach der Auswahl wurde direkt M4A erzeugt, ohne Formatmenü. Die Bilder reichen bis zum Teilen-Dialog; abgeschlossenes Speichern in Dateien wird nicht gezeigt. Systemtasten können der Gerätesprache folgen."
  },
  "change-video-md5-iphone": {
    "title": "Das Werkzeug zum Ändern des Video-MD5 verwenden",
    "description": "Erstelle auf iPhone oder iPad mit „Ändern MD5“ eine bearbeitete Kopie deines Videos. Vergleiche bei Bedarf Original und Ausgabe mit einem Hash-Werkzeug, um die Änderung zu bestätigen.",
    "intro": "Mit „Ändern MD5“ erzeugst du eine bearbeitete Videokopie. Wenn du sicher sein musst, dass sich der MD5-Wert geändert hat, vergleiche Original und Ausgabe mit einem Hash-Werkzeug.",
    "tips": [
      {
        "title": "Den tatsächlichen Datei-Hash prüfen",
        "text": "Ein anderer Dateiname beweist keinen geänderten MD5-Wert. Wenn der Hash für deinen Zweck wichtig ist, berechne und vergleiche ihn für Eingabe und Ausgabe. Die Abschlussmeldung allein genügt nicht."
      }
    ],
    "faq": [
      {
        "question": "Verbessert das die Bildqualität oder verkleinert es die Datei?",
        "answer": "Diese Anleitung behandelt MD5-Änderungen weder als Qualitätsverbesserung noch als Komprimierung. Verwende zum Verkleinern „Video transkodieren“."
      },
      {
        "question": "Ändert ein anderer Hash meine Nutzungsrechte am Video?",
        "answer": "Nein. Eine Änderung des Datei-Hashs verändert die Nutzungsrechte am Inhalt nicht."
      }
    ],
    "steps": [
      {
        "title": "„Ändern MD5“ öffnen",
        "text": "Tippe unten auf „Verarbeitung“ (Process) und öffne „Ändern MD5“ (Change MD5)."
      },
      {
        "title": "Video wählen und Verarbeitung abwarten",
        "text": "Wähle ein Video aus Fotos oder einer anderen verfügbaren Quelle. Die Verarbeitung startet direkt; eine separate Parameterseite gibt es nicht.",
        "sections": [
          {
            "title": "Kein frei wählbarer Ziel-Hash",
            "text": "Das Werkzeug bietet kein Eingabefeld für einen gewünschten MD5-Wert. Du kannst keinen beliebigen Ziel-Hash vorgeben."
          }
        ]
      },
      {
        "title": "Ergebnis prüfen, speichern oder weiterbearbeiten",
        "text": "Prüfe die neue Datei und speichere oder teile sie. Wenn du einen anderen MD5-Wert bestätigen musst, berechne und vergleiche die Hashes von Original und Ausgabe. Ein neuer Dateiname ersetzt diese Prüfung nicht.",
        "sections": [
          {
            "title": "Ansehen und speichern",
            "text": "Spiele das Ergebnis ab und prüfe Bild, Dauer und Ton. Tippe dann auf „In Fotos speichern“ (Save to Photos). Beim ersten Mal musst du der App möglicherweise erlauben, Fotos und Videos hinzuzufügen. Prüfe nach der Erfolgsmeldung die Datei in Fotos."
          },
          {
            "title": "Die übrigen Tasten",
            "text": "„Verarbeitung fortsetzen“ (Keep Processing) öffnet die Werkzeugauswahl mit dem Ergebnis, „Datei teilen“ (Share File) öffnet die Freigabe und „Fertig“ (Done) schließt die Ergebnisseite. „Fertig“ speichert nicht in Fotos."
          }
        ]
      }
    ],
    "exampleNote": "Die Screenshots stammen aus der englischen Oberfläche eines iPhone-17-Pro-Max-Simulators mit iOS 26.0; die Anleitung nennt deutsche Bedienelemente. Parameter und Grenzen beziehen sich auf diese Version. Im Beispiel wurde _md5.mp4 erzeugt und die Ergebnisseite geöffnet. Die MD5-Werte von Eingabe und Ausgabe wurden nicht verglichen."
  },
  "merge-audio-video-iphone": {
    "title": "Audio und Video zusammenführen",
    "description": "Verbinde auf iPhone oder iPad mit „Audio und Video zusammenführen“ ein Video mit dem Ton einer anderen Datei. Wähle Video und Audioquelle und prüfe nach dem Export Klang und Synchronität.",
    "intro": "Mit „Audio und Video zusammenführen“ verbindest du ein Video mit dem Ton einer anderen Datei. Wähle zuerst das Video, dann die Audioquelle und prüfe nach dem Export Klang und Synchronität.",
    "tips": [
      {
        "title": "Bild und Ton sind versetzt oder das Ende passt nicht",
        "text": "Prüfe Länge und Startposition der Quellen. Diese Einstellungsseite bietet weder Zeitversatz noch Wiederholung. Bereite die Medien bei Bedarf zuerst vor und führe sie dann erneut zusammen."
      }
    ],
    "faq": [
      {
        "question": "Muss ich die Audiodatei vorher extrahieren?",
        "answer": "Nein. Über „Audio extrahieren aus Fotovideo“ kannst du direkt den Ton eines anderen Videos aus Fotos verwenden."
      },
      {
        "question": "Kann ich das Verhältnis zweier Tonspuren einstellen?",
        "answer": "Diese Seite bietet keine Mischverhältnisse oder Mehrspursteuerung. Bereite den Ton für einen Mix vorher separat vor."
      }
    ],
    "steps": [
      {
        "title": "„Audio und Video zusammenführen“ öffnen",
        "text": "Tippe unten auf „Verarbeitung“ (Process) und öffne „Audio und Video zusammenführen“ (Merge Audio and Video)."
      },
      {
        "title": "Quellvideo auswählen",
        "text": "Tippe unter „Video auswählen“ (Select Video) auf „Aus Fotos auswählen“ (Choose from Photos) oder „Aus Dateien auswählen“ (Choose from Files), um ein Video zu importieren. Das funktioniert auch bei leerer Download-Liste."
      },
      {
        "title": "Zuerst die Bildquelle wählen",
        "text": "Importiere zuerst das Video, dessen Bild du behalten möchtest. Oben siehst du Vorschau, Abmessungen und Dauer. „Audioquelle“ (Audio Source) zeigt anfangs „Nicht ausgewählt“ (Not Selected), weil noch keine Tonquelle gewählt wurde.",
        "sections": [
          {
            "title": "Bild- und Tonquelle getrennt prüfen",
            "text": "Lege zuerst fest, welches Video das Bild liefert, und wähle dann den Ton. Eine sichtbare Videovorschau bedeutet nicht, dass die Audioquelle bereits festgelegt ist."
          }
        ]
      },
      {
        "title": "Audioquelle wählen",
        "text": "Tippe auf „Audioquelle“. Der Dialog bietet „Aus Dateien auswählen“ und „Audio extrahieren aus Fotovideo“ (Extract audio from Photos video).",
        "sections": [
          {
            "title": "Aus Dateien auswählen",
            "text": "Damit wählst du eine Audiodatei im Systemdialog. Bereite die gewünschte Datei vor und öffne ihren Speicherort."
          },
          {
            "title": "Ton aus einem Video in Fotos verwenden",
            "text": "Diese Option übernimmt den Ton aus einem Video der Fotomediathek. Im Beispiel wird sie gewählt und ein anderes Video ausgewählt. Eine separate Audiodatei muss vorher nicht manuell exportiert werden."
          }
        ]
      },
      {
        "title": "Quelle prüfen und zusammenführen",
        "text": "Nach der Rückkehr zeigt „Audioquelle“ den Dateinamen der gewählten Quelle. Prüfe ihn und tippe auf „Start Verarbeitung“ (Start Processing).",
        "sections": [
          {
            "title": "Keine zusätzlichen Mischeinstellungen auf dieser Seite",
            "text": "„Audioquelle“ legt den Toneingang fest. Es gibt hier keine separaten Regler für Mischverhältnis, Zeitversatz, Wiederholung oder Audiozuschnitt. Bereite die Medien bei Bedarf zuerst vor, führe sie zusammen und höre das Ergebnis an."
          }
        ]
      },
      {
        "title": "Ergebnis prüfen, speichern oder weiterbearbeiten",
        "text": "Spiele das Ergebnis vor dem Speichern ab. Prüfe Audioquelle, Synchronität am Anfang, Lautstärke und Ende, besonders bei unterschiedlich langen Quellen.",
        "sections": [
          {
            "title": "Ansehen und speichern",
            "text": "Spiele das Ergebnis ab und prüfe Bild, Dauer und Ton. Tippe dann auf „In Fotos speichern“ (Save to Photos). Beim ersten Mal musst du der App möglicherweise erlauben, Fotos und Videos hinzuzufügen. Prüfe nach der Erfolgsmeldung die Datei in Fotos."
          },
          {
            "title": "Die übrigen Tasten",
            "text": "„Verarbeitung fortsetzen“ (Keep Processing) öffnet die Werkzeugauswahl mit dem Ergebnis, „Datei teilen“ (Share File) öffnet die Freigabe und „Fertig“ (Done) schließt die Ergebnisseite. „Fertig“ speichert nicht in Fotos."
          }
        ]
      }
    ],
    "exampleNote": "Die Screenshots stammen aus der englischen Oberfläche eines iPhone-17-Pro-Max-Simulators mit iOS 26.0; die Anleitung nennt deutsche Bedienelemente. Parameter und Grenzen beziehen sich auf diese Version. Der Ton wurde aus einem anderen Video in Fotos übernommen und ein etwa 6 Sekunden langes Video erzeugt. Die zusammengeführte Tonspur wurde noch nicht Abschnitt für Abschnitt angehört."
  }
};
