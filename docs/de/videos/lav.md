---
tags:
  - webm
  - video
  - schwarz
  - codec
  - filter
  - 4K
  - HEVC
  - mkv
  - mp4
---

# LAV und DirectShow nutzen
Wenn du Probleme mit defekten Video-Codecs hast oder weitere Video-Formate auf deinem System verwenden möchtest, kannst du versuchen LAV zu installieren und DirectShow in den Wallpaper Engine-Einstellungen zu aktivieren. Dies sollte bessere Unterstützung für **4K und HEVC-Videos auf Windows 7** und das Öffnen von **.mkv**-Dateien ermöglichen.

Aus rechtlichen Gründen dürfen wir LAV nicht mit Wallpaper Engine ausliefern, was bedeutet, dass du es selbst herunterladen und installieren musst. Nachdem du LAV installiert hast, musst du Wallpaper Engine konfigurieren, sodass es DirectShow nutzt:

## 1. LAV installieren
* Lade die x86- **UND** x64-Version der LAV-Filter herunter:
  * Mirror #1: [Github](https://github.com/Nevcairiel/LAVFilters/releases)
  * Mirror #2: [Fosshub](https://www.fosshub.com/LAV-Filters.html)
* Installiere LAV, stelle sicher, dass dein Windows-Benutzerkonto über Adminrechte verfügt.
* Start Wallpaper Engine neu.

## 2. Aktiviere DirectShow
* Öffne die Wallpaper Engine-Einstellungen und navigiere zum Reiter "Allgemein"
* Ändere die Einstellung **Video-Framework** auf **DirectShow-LAV bevorzugen**
* Starte die Anwendung neu und versuche deinen Video-Hintergrund erneut zu nutzen

## WebM-Hardware-Beschleunigung aktivieren
Falls du Stottern am Ende von Video-Hintergründen wahrnehmen kannst, kannst du .webm-Dateien nutzen, welche im Normalfall dieses Problem nicht haben. In diesem Fall aktivierst du am besten auch Hardware-Beschleunigung für .webm-Videos, was deine Prozessorauslastung signifikant verringert und gleichzeitig das Stottern am Ende von Videos beseitigt. Hierbei handelt es sich um eine Fortführung der oben beschriebenen Schritte, stelle zunächst sicher, dass du LAV installiert hast und DirectShow aktiviert wurde, so wie im vorherigen Abschnitt beschrieben.
* Öffne die Wallpaper Engine-Einstellungen und navigiere zum Reiter "Allgemein"
* Ändere die Einstellung **WebM-Framework** auf **Nativ bevorzugen**
* Starte die Anwendung neu und versuche deinen Video-Hintergrund erneut zu nutzen

Überprüfe ob du das LAV-Symbol in der Windows-Taskleiste siehst und ob die Prozessorauslastung nahe 0% ist, in diesem Fall funktioniert die Hardware-Beschleunigung für .webm-Dateien nun richtig. Falls dies nicht funktioniert, stelle sicher, dass alle Optionen korrekt konfiguriert wurden und dass LAV korrekt installiert wurde.