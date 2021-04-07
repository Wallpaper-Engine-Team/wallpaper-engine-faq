---
tags:
  - download
  - redownload
  - gelöscht
  - löschen
---

# Steam lädt Hintergründe erneut runter

Steams Download-Cache ist fehlerhaft geworden und Steam lädt nun alle Dateien erneut runter (ohne erkennbaren Grund oder da Steam abgestürzt ist und nicht korrekt beendet wurde). Dies wird nicht von Wallpaper Engine verursacht, deswegen kann dieses Problem auch nicht von Wallpaper Engine behoben werden, alle Workshop-Anwendungen auf Steam können von diesem Steam-Problem betroffen werden. Wenn du häufig dieses Problem hast, gibt es mehrere Abhilfen:

## Steam automatisch reparieren
Wir haben eine automatische Anwendungen zum Reparieren von Steam erstellt, welche du nutzen kannst um dieses Problem (hoffentlich) zu lösen indem es Steam unterbindet, alle Dateien erneut herunterzuladen. Folge diesen Schritten:
* Schalte Steam vollständig aus
* Gehe in das `wallpaper_engine`-Installationsverzeichnis
  * Standardmäßig ist das Installationsverzeichnis hier: `C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine`
* Führe dieses Programm aus: `wallpaper_engine\bin\steamredownloadfixer32.exe`
  * Wenn die Anwendung eine Fehlermeldung anzeigt, kannst du uns eine E-Mail senden und wir schauen, ob wir die Anwendung verbessern können
* Starte Steam neu und überprüfe die Wallpaper Engine auf Fehler:
  * [Wallpaper Engine-Dateien auf Fehler überprüfen](https://support.steampowered.com/kb_article.php?ref=2037-QEUH-3335&l=german)

Dieser Vorgang muss leider jedes mal wiederholt werden, wenn der Steam Download-Cache Fehler aufweist. Bitte behalte im Hinterkopf, dass wir nicht die Entwickler von Steam sind und solche Steam-Probleme nicht selbst lösen können.

## Steam neuinstallieren

Der verlässlichste Weg um dieses Steam-Problem langfristig zu lösen scheint eine Neuinstallation von Steam zu sein, da einige Dateien von Steam gegebenenfalls einfach defekt sind auf deinem System. Versuche Steam komplett neu zu installieren:

1. Deinstalliere Wallpaper Engine über Steam.
2. Deinstalliere Steam selbst, stelle sicher, dass du der offiziellen Anleitung dazu folgst:
  * [Steam deinstallieren](https://support.steampowered.com/kb_article.php?ref=9609-OBMP-2526&l=german)
  * Schaue besonders die Sektion "Manuelles Entfernen von Steam" in der Anleitung vom Steam-Support an und mache eine Backup deines *steamapps*-Verzeichnisses wie dort beschrieben, um sicherzustellen, dass du nicht alle deine Spiele erneut herunterladen musst.

## Lokale Backups als Workaround nutzen

Wenn das Problem weiterhin und oft auftritt, kannst du auch lokale Backups deiner Hintergründe machen und die Hintergründe bei Steam deabonnieren. Steam lädt keine Hintergründe erneut herunter, welche du nicht abonniert hast, von daher kann man als Notlösung einfach auf lokale Backups setzen. Du kannst unsere Anleitung zum Erstellen von Backups hier finden:

* [Hintergrund-Backups nutzen](/steam/backup)

Nachdem du die Backups erstellt hast, kannst du einfach alle Hintergrund-Abos von Steam löschen. Stelle sicher, dass du keine Dateien manuell löschst. Steam muss die Dateien der Hintergründe selbst löschen, ansonsten lädt Steam die Dateien oft erneut wieder selbst runter nur um sie dann selbst zu löschen.