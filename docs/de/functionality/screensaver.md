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

Standardmäßig nutzt Wallpaper Engine für deinen Bildschirmschoner deine aktiven Hintergründe. Du kannst dies ändern, indem du oben in der Benutzeroberfläche die Option **Bildschirmschoner ist** auf **Getrennt konfiguriert** setzt. With that option enabled, you can choose a wallpaper for each screen which is to be used as a screensaver or even use a completely different display profile or playlists for your screensaver setup. You can always return to the wallpaper configuration by clicking on the red **Quit** button in the upper left corner.

## Screensaver Problem Solving

The Wallpaper Engine screensaver is activated through Windows itself, if the screensaver is not working correctly, please double-check to see if any of the default Windows screensavers work correctly for you. Check the Windows screensaver settings and your Windows energy settings to make sure that your screensaver is configured with the correct timeout that you expect and that Wallpaper Engine is set as your active screensaver.

The screensaver will be installed in `C:\Windows\System32\wpxscreensaver64.scr`, make sure no antivirus app is deleting this file by mistake or preventing it from being installed. You can also manually uninstall the screensaver by deleting that specific file, but be sure to not delete any other important Windows files in the `System32` directory when doing so.