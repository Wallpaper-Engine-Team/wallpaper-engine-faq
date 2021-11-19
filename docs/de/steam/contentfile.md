# "Inhaltsdatei gesperrt" / Festplattenschreibfehler

Wenn Steam nicht in der Lage ist Wallpaper Engine herunterzuladen oder zu aktualisieren, dann liegt das in den allermeisten Fällen daran, dass ein Antivirenprogramm Dateien löscht, Dateien in Quarantäne platziert oder gesamte Verzeichnisse als schreibgeschützt markiert ohne dich darüber zu informieren. In diesen Fällen erscheint "Inhaltsdatei gesperrt" oder "Zugriff verweigert" als Fehlermeldung in Steam. Dies muss in deinem Antivirenprogramm gelöst werden, indem es die Änderungen an deinem PC zurücksetzt. Die meisten Antivirenprogramme haben eine Quarantäne-Übersicht, in welcher man Dateien wieder freigeben oder eine Ausnahmeliste für Ordner anlegen kann. Stelle sicher, dass dein Antivirenprogramm die folgenden Verzeichnisse ignoriert:

* `C:\Programme (x86)\Steam\steamapps\common\wallpaper_engine`
* `C:\Programme (x86)\Steam\steamapps\workshop\downloads`
* `C:\Programme (x86)\Steam\steamapps\downloading`

*Wenn dein Steam oder Wallpaper Engine in einem anderen Verzeichnis installiert ist, musst du diese Verzeichnisse an den tatsächlichen Installationspfad anpassen.*

Falls du dein Antivirenprogramm so konfiguriert hast, dass es diese Ordner ignoriert, aber das Problem weiterhin auftritt, ist es manchmal nötig, Wallpaper Engine über Steam zu deinstallieren, gefolgt von einer Löschung des restlichen `wallpaper_engine`-Ordners, sodass blockierte Dateien gelöscht werden, die Steam gegebenenfalls weiterhin daran hindern, alle benötigten Dateien herunterzuladen. Nachdem du den gesamten `wallpaper_engine`-Ordner gelöscht hast, versuche die App erneut über Steam zu installieren.