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
  * [Wallpaper Engine-Dateien auf Fehler überprüfen](https://support.steampowered.com/kb_article.php?ref=2037-QEUH-3335)

Dieser Vorgang muss leider jedes mal wiederholt werden, wenn der Steam Download-Cache Fehler aufweist. Please keep in mind that we have not built Steam and cannot fix Steam ourselves.

## Reinstall Steam

The most reliable long-term fix for most users affected by this Steam bug regularly appears to be to reinstall Steam as some Steam files may simply be broken on your system. Try to reinstall Steam completely:

1. Uninstall Wallpaper Engine through Steam.
2. Uninstall Steam itself, make sure to follow the official guide:
  * [Uninstall Steam](https://support.steampowered.com/kb_article.php?ref=9609-OBMP-2526)
  * Specifically check the Manually Removing Steam section in the Steam Support article above and make a backup of your *steamapps* directory as described there to ensure you will not have to redownload all your games.

## Use local backups as a workaround

If the issue continues happening to you, you can also make local backups of all wallpapers and then unsubscribe from all wallpapers. Steam will not redownload wallpapers that you are not subscribed to, so the work-around is to simply only rely on local backups. You can find our guide on how to create backups here:

* [Using wallpaper backups](/steam/backup)

Afterwards, simply unsubscribe from all wallpapers. Make sure to not delete any files manually, Steam must delete the wallpaper files itself or it will attempt to redownload the wallpapers again just to delete the files on its own.