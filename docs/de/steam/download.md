---
tags:
  - wartungsarbeiten
  - server
  - downloads
  - herunterladen
  - workshop
  - verbindung
---

# Steam-Probleme beim Downloaden von Hintergründen

Bitte beachte, dass **alle Downloads von Steam durchgeführt werden**. Wallpaper Engine zeigt lediglich den Download-Status von Steam an, alle Download-Probleme hängen mit Steam zusammen und sind nicht direkt mit Wallpaper Engine verbunden. Diese Seite enthält eine Sammlung der häufigsten Download-Probleme, in vielen Fällen werden Probleme dieser Art von zu strikt konfigurierten Antivirenprogrammen oder blockierten Netzwerk-Ports ausgelöst.

Falls du Probleme mit Steam-Downloads hast, stelle sicher, dass kein Antivirenprogramm dein Steam blockiert und dass alle benötigten Ports in deiner Firewall offen sind - inklusive der Firewall deines Netzwerk-Routers.

::: tip
Du kannst einfach überprüfen, ob dein Netzwerk-Router Steam blockiert, indem du deinen PC mit einem mobilen Hotspot deines Smartphone verbindest und versuchst darüber Hintergründe herunterzuladen.
:::

## Download von Hintergründen steckt bei 0% oder 100% (oder jeglicher anderen Prozentzahl)
Steam hat den Download und die Überprüfung der Dateien noch nicht abgeschlossen. Falls die Downloads für eine Weile stecken bleiben, versuche die folgenden Dinge wenn das Problem trotz einiger Wartezeit nicht weggeht:

* Lösche den Download-Cache von Steam in den Steam-Einstellungen:
  * [Steams Download-Cache löschen](https://support.steampowered.com/kb_article.php?ref=3134-TIAL-4638&l=german)
* Versuche danach, die Dateien von Wallpaper Engine über Steam auf Fehler zu überprüfen:
  * [Wallpaper Engine-Dateien auf Fehler überprüfen](https://support.steampowered.com/kb_article.php?ref=2037-QEUH-3335&l=german)
* Wenn alle Downloads weiterhin feststecken: **Schalte Steam aus** und danach **lösche den Inhalt** des folgenden Verzeichnisses:
  * `C:\Program Files (x86)\Steam\steamapps\workshop\downloads`
    * Wenn du ein Antivirenprogramm benutzt, stelle sicher, dass es explizit diesen Ordner ignoriert
    * **Bitte beachte:** `C:\Program Files (x86)\Steam` ist das standardmäßige Installationsverzeichnis von Steam, wenn du es woanders installiert hast musst du dort schauen.
* Starte Steam neu. Starte keine Spiele über Steam. Überprüfe die Download-Übersicht in Steam für den Fortschritt des Downloads und stelle sicher, dass dort keine Downloads pausiert sind.

::: details
Klicke hier, um weitere Lösungsvorschlage zu sehen, falls die Schritte oben deine Download-Probleme nicht lösen
* Stelle sicher, dass kein Antiviren- oder Firewall-Programm Steam blockiert. Stelle sicher, dass das gesamte Steam-Verzeichnis in den Ausnahmeregeln deines Antivirenprogramms eingestellt ist.
* Deabonniere alle Hintergründe, welche nicht heruntergeladen werden können und abonniere sie erneut nach einem Neustart von Steam.
* Wähle eine andere Server-Region in den Steam-Einstellungen. Die Option kann im Reiter "Downloads" in den Steam-Einstellungen gefunden werden.
* Stelle sicher, dass du die Steam-Downloads nicht in den **Steam-Einstellungen** basierend auf Uhrzeit, Bandbreite oder Im-Spiel-Status limitiert hast.
* Open the 'Downloads' tab in Steam (Library -> Downloads). Look for paused downloads. If you can see any, click on 'Resume'.
* Right-click Wallpaper Engine in Steam, then Properties, then select **Allow Background Downloads**.
* Make sure you do not have pending game updates in Steam, it could pause or disable wallpaper downloads.
* Try again after waiting at least for a day in case there are Steam server issues.
* **As a last resort**, try to re-install Wallpaper Engine to clear any broken Steam files (this will re-download all wallpapers!).
:::

::: tip
Steam servers go offline every week for maintenance at a fixed time:

* United States West Coast: **Tuesday at 4 pm (UTC - 7)**
* Same time in Central Europe: **Wednesday at 1 am (UTC + 1)**
* Same time in China: **Wednesday at 8 am (UTC + 8)**

If you are reading this while it is roughly this time of the week, it may be that the servers are temporarily offline. Wait one or two hours and try again.
:::

## Steam: "Missing Downloaded Files" error

Steam is unable to download some files, this can be due to anti-virus applications blocking Steam or just absolutely random. It can usually be fixed this way:

* Turn off Steam.
* Delete the contents of this directory: `C:\Program Files (x86)\Steam\steamapps\workshop\downloads`
* Delete the contents of this directory: `C:\Program Files (x86)\Steam\steamapps\downloading\431960`
  * **Note:** `C:\Program Files (x86)\Steam` is the default Steam path, if you have installed it somewhere else, check there.
* Start Steam and verify the Wallpaper Engine files:
  * [Verify Wallpaper Engine files](https://support.steampowered.com/kb_article.php?ref=2037-QEUH-3335&l=german)

If you have an antivirus-app installed: Configure an exception for this directory to prevent it from blocking Steam's Workshop downloads: `C:\Program Files (x86)\Steam\steamapps\workshop\downloads`

#### Related article: [Steam re-downloading all wallpapers](/steam/redownload)