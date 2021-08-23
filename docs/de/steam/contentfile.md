# "Inhaltsdatei gesperrt" / Festplattenschreibfehler

Wenn Steam nicht in der Lage ist Wallpaper Engine herunterzuladen oder zu aktualisieren, dann liegt das in den allermeisten Fällen daran, dass ein Antivirenprogramm Dateien löscht, Dateien in Quarantäne platziert oder gesamte Verzeichnisse als schreibgeschützt markiert ohne dich darüber zu informieren. In diesen Fällen erscheint "Inhaltsdatei gesperrt" oder "Zugriff verweigert" als Fehlermeldung in Steam. Dies muss in deinem Antivirenprogramm gelöst werden, indem es die Änderungen an deinem PC zurücksetzt. Die meisten Antivirenprogramme haben eine Quarantäne-Übersicht, in welcher man Dateien wieder freigeben oder eine Ausnahmeliste für Ordner anlegen kann. Stelle sicher, dass dein Antivirenprogramm die folgenden Verzeichnisse ignoriert:

* `C:\Programme (x86)\Steam\steamapps\common\wallpaper_engine`
* `C:\Programme (x86)\Steam\steamapps\workshop\downloads`
* `C:\Programme (x86)\Steam\steamapps\downloading`

*Wenn dein Steam oder Wallpaper Engine in einem anderen Verzeichnis installiert ist, musst du diese Verzeichnisse an den tatsächlichen Installationspfad anpassen.*

If you have configured your antivirus app to ignore these directories but the issue persists, it is sometimes necessary to uninstall Wallpaper Engine through Steam, followed by manually deleting the remains of the `wallpaper_engine` directory to clear any antivirus locks which may continue to block Steam from downloading files. After deleting the entire `wallpaper_engine` folder, try reinstalling the app through Steam again.