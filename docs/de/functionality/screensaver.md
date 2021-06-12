# Bildschirmschoner mit Wallpaper Engine

Wallpaper Engine erlaubt es dir, deine Hintergründe auch als Bildschirmschoner zu verwenden. Ursprünglich hat man Bildschirmschoner genutzt, um Bildschirme vor dem Einbrennen von Standbildern zu bewahren. Heutzutage ist dies bei den meisten Bildschirmtechnologien jedoch nicht mehr nötig, da diese keinen dauerhaften Schaden von Standbildern erhalten können, sodass du sicher jeden Hintergrund auch als Bildschirmschoner einsetzen kannst aus ästhetischen Gründen. Wenn du einen CRT-, Plasma- oder OLED-Bildschirm nutzt, welcher unter Umständen noch zum Einbrennen von Standbildern neigen kann, so empfehlen wir das Nutzen einer Wiedergabeliste an Hintergründen oder das Verwenden eines Hintergrunds mit regelmäßigen Bewegungsabläufen.

## Einrichten des Bildschirmschoners

Um mit dem Einrichten eines Bildschirmschoners mit Wallpaper Engine zu starten, bewege deine Maus über den Reiter **Installiert** in Wallpaper Engine-Fenster und wähle **Bildschirmschoner einstellen** aus. Wallpaper Engine überprüft nun, ob du den Bildschirmschoner von Wallpaper Engine bereits installiert hast. Wenn der Bildschirmschoner noch nicht installiert wurde, wirst du gefragt, diesen zu installieren. Stelle sicher, dass dein Windows-Nutzer über Administrator-Rechte verfügt und dass kein Antivirenprogramm Wallpaper Engine daran hindert, den Bildschirmschoner zu installieren.

Nach der Installation des Bildschirmschoners, sollten sich die Bildschirmschoner-Einstellungen von Windows automatisch öffnen, alternativ kannst du diese auch über die Schaltfläche **Einstellungen & Vorschau** öffnen oder diese direkt über die Windows-Einstellungen erreichen.

## Einstellen des Bildschirmschoners

### Windows-Einstellungen

Damit die Bildschirmschoner von Wallpaper Engine funktionieren, musst du zunächst Wallpaper Engine als deinen aktiven Bildschirmschoner in den **Windows-Einstellungen** auswählen. Du kannst die Bildschirmschoner-Einstellungen von Windows über die Windows-Systemsteuerung öffnen oder indem du auf die Schaltfläche **Einstellungen & Vorschau** klickst, welche angezeigt wird, wenn du im Bildschirmschoner-Modus von Wallpaper Engine bist. Schaue dir das folgende Video an, für alle wichtigen Einrichtungsschritte:

<video width="100%" controls autoplay loop>
  <source src="/videos/screensaver_setup.mp4" type="video/mp4">
  Dein Browser unterstützt das Video-Tag nicht.
</video>

In den Windows-Einstellungen kannst du die Zeit einstellen, die benötigt wird, bis der Bildschirmschoner angezeigt wird, du kannst außerdem auswählen, ob der Windows-Sperrbildschirm erscheint, wenn du an deinen Computer zurückkehrst. Diese Einstellungen werden vollständig von Windows geregelt, Wallpaper Engine steuert nicht die Zeit die vergehen muss oder ähnliche Einstellungen.

### Einstellen von Wallpaper Engine

Nachdem du den Bildschirmschoner in Windows konfiguriert hast, kannst du den Bildschirmschoner in Wallpaper Engine anpassen. Bewege den Mauszeiger über den Reiter **Installiert** in Wallpaper Engine und wähle **Bildschirmschoner einstellen** aus. Wallpaper Engine zeigt dir nun eine Vorschau deiner Bildschirmschoner an, anstatt deiner Hintergründe - sobald du den Bildschirmschoner-Modus wieder verlässt, wird es zu deinen Hintergründen zurückkehren.

Standardmäßig nutzt Wallpaper Engine für deinen Bildschirmschoner deine aktiven Hintergründe. Du kannst dies ändern, indem du oben in der Benutzeroberfläche die Option **Bildschirmschoner ist** auf **Getrennt konfiguriert** setzt. Wenn die Option aktiviert wurde, kannst du für jeden Bildschirm einen eigenen Bildschirmschoner setzen oder sogar ein eigenes Bildschirm-Profil oder eigene Wiedergabelisten für deinen Bildschirmschoner nutzen. Du kannst zu jeder Zeit zum Modus zum Einrichten der Hintergründe zurückkehren, indem du oben links auf die rote **Verlassen**-Schaltfläche klickst.

## Probleme mit Bildschirmschonern beheben

Der Wallpaper Engine-Bildschirmschoner wird durch Windows selbst aktiviert, wenn der Bildschirmschoner nicht korrekt funktioniert, überprüfe bitte ob einer der vorinstallierten Windows-Bildschirmschoner für dich funktionieren. Überprüfe die Windows-Bildschirmschoner-Einstellungen und die Windows-Energie-Einstellungen, um sicher zu stellen, dass dein Bildschirmschoner mit der von dir erwarteten Wartezeit konfiguriert ist und dass Wallpaper Engine als Bildschirmschoner in Windows eingestellt wurde.

Der Bildschirmschoner wird in `C:\Windows\System32\wpxscreensaver64.scr` installiert, stelle sicher, dass kein Antivirenprogramm diese Datei fälschlicherweise löscht oder Wallpaper Engine daran hindert, diese Datei zu installieren. Du kannst den Bildschirmschoner auch von Hand löschen, indem du speziell diese Datei löschst, achte aber darauf, dass du keine weiteren wichtigen Windows-Dateien im `System32`-Verzeichnis löschst, wenn du dies machst.