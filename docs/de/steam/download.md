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
* Öffne den Reiter "Downloads" in Steam (Bibliothek -> Downloads). Schaue ob Downloads pausiert sind. Wenn dies der Fall ist, klicke auf die Fortführen-Schaltfläche.
* Rechtsklicke auf Wallpaper Engine in Steam, dann Eigenschaften, dann stelle sicher, dass die Option **Hintergrund-Downloads erlauben** aktiviert ist.
* Stelle sicher, dass du keine aktiven oder pausierten Spiele-Updates in Steam hast, dies könnte die Downloads von Hintergründen pausieren oder deaktivieren.
* Versuche den Download der Hintergründe später noch einmal, für den Fall das es Probleme mit den Steam-Servern gibt.
* **Als letzte Möglichkeit** kannst du versuchen Wallpaper Engine neu zu installieren um mögliche defekte Steam-Dateien so zu löschen (dies wird jedoch alle Hintergründe erneut herunterladen!).
:::

::: tip
Die Steam Server werden wöchentlich gewartet und sind zu diesen Zeiten nicht erreichbar:

* USA - Westküste: **Dienstag um 16 Uhr (UTC - 7)**
* Die gleiche Uhrzeit in Zentraleuropa: **Mittwoch um 1:00 Uhr morgens (UTC + 1)**
* Die gleiche Uhrzeit in China: **Mittwoch um 8:00 Uhr morgens (UTC + 8)**

Wenn du diese Anleitung zu ungefähr dieser Uhrzeit der Woche liest, können die Server derzeit kurzzeitig nicht erreichbar sein. Warte in bis zwei Stunden und versuche es dann erneut.
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