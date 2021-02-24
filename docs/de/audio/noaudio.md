# Kein Ton wird abgespielt / Probleme mit der Audio-Ausgabe
Dieser Hilfe-Artikel hilft dabei Probleme mit der Wiedergabe von Sounds mit Hintergründen zu lösen. Zunächst solltest du sicherstellen, dass der von dir genutzte Hintergrund tatsächlich Audio enthält, indem du einige andere Hintergründe ausprobierst. Viele Hintergründe enthalten gar keinen Ton. Wenn du dir sicher bist, dass dein Hintergrund Audio enthält, fahre mit diesem Hilfe-Artikel fort.

::: warning
Achtung Wenn dein Ton wiederholt an und aus geht innerhalb weniger Sekunden, schaue dir stattdessen bitte den folgenden Artikel an:

* [Lautstärke / Audio-Wiedergabe geht wiederholt an und aus](/audio/intermittent)
:::

## Stelle sicher, dass Wallpaper Engine sich nicht selbst stumm schaltet
Es gibt drei Stellen in der Anwendung, welche es dir erlauben die Tonwiedergabe stumm zu schalten:

1. Im Reiter **Allgemein** in den Einstellungen von Wallpaper Engine gibt es eine Option namens **Ton-Wiedergabe**. Stelle sicher, dass diese Einstellung aktiviert ist.
2. Klick auf die Schaltfläche **Bildschirme** oben rechts im Hauptfenster von Wallpaper Engine. Dies zeigt dir eine Übersicht aller deiner Bildschirme an. Jeder Bildschirm hat einen Schalter zum stumm schalten unten links in der Ecke. Stelle sicher, dass deine Bildschirme hier nicht stumm geschaltet sind.
3. Wenn du einen Hintergrund auswählst, findest du rechts eine Option **Lautstärke**, stelle sicher, dass diese nicht auf 0 oder einen niedrigen Wert gesetzt wurde. Wenn dort die Meldung **Lautstärke in den Bildschirm-Einstellungen deaktiviert** erscheint, dann ist dein Bildschirm stumm geschaltet. Schaue dir Schritt 2 erneut an und aktiviere die Tonausgabe für deinen Bildschirm erneut.

## Überprüfe den Windows Audio-Mixer
Wallpaper Engine überlasst die Tonausgabe vollständig Windows, wenn Wallpaper Engine nicht selbst stumm geschaltet wurde, muss das Problem in Windows selbst liegen. Überprüfe zunächst den Windows Audio-Mixer und stelle sicher, dass Wallpaper Engine nicht stumm geschaltet oder auf eine niedrige Lautstärke gesetzt wurde, wie im folgenden Screenshot zu sehen:

![Erhöhe die Lautstärke und stelle sicher, dass Wallpaper Engine im Windows Lautstärke-Mixer nicht stumm geschaltet ist](./audiomixer.png)

## Überprüfe das ausgewählte Audio-Gerät
Ein weiterer möglicher Grund für fehlende Tonwiedergabe kann sein, dass das falsche Tonausgabe-Geräte für Wallpaper Engine in Windows ausgewählt wurde. Versuche das gewünschte Audio-Ausgabegerät selbst einzustellen:

1. Rechtsklicke auf das Audio-Symbol neben der Windows Uhr in der Startleiste und klicke dann auf **Sound-Einstellungen öffnen**.
2. Gehe zum Ende der Seite die sich öffnet und klicke auf **App-Lautstärke- und Geräteeinstellungen**.
3. Eine Liste mit allen Anwendungen, welche Ton abspielen sollte nun angezeigt werden. Finde Wallpaper Engine und wähle das korrekte Audio-Ausgabegerät in der Spalte **Ausgabe** aus. Wenn du dir unsicher bist, versuche alle möglichen Optionen einmal. Ein Neustart von Wallpaper Engine kann unter Umständen nötig sein, bevor die Änderungen angewandt werden.

Falls du mehrere Audio-Geräte verwendest (besonders im Falle von USB- oder Bluetooth-Audiogeräten) und du feststellst, dass die Tonwiedergabe aufhört, sobald ein Gerät die Verbindung trennt oder wieder aufbaut, so liegt dies daran, dass Windows in einigen Fällen Audiogeräte nicht verlässlich wechselt für laufende Programme. Dies kann nicht von uns behoben werden, in diesen Fällen musst du Wallpaper Engine neu starten, sodass Windows die Audio-Wiedergabe wieder korrekt handhabt. Du kannst auch versuchen alle relevanten Audio-Treiber zu aktualisieren oder neuzuinstallieren, um zu sehen ob diese Art von Problem dadurch gelöst wird.

## Alle Audio-Codecs zurücksetzen

Wenn die Tonwiedergabe an dieser Stelle immer noch nicht funktioniert, können einige Audio-Codecs unter Umständen defekt sein, dies ist jedoch hauptsächlich relevant wenn man Hintergründe vom Typ **Video** verwendet. You can double-check this by right-clicking on your wallpaper in Wallpaper Engine and selecting **Open in Explorer**. You should see the source video file (usually an **.mp4** file), open that file with Windows Media Player and check if it plays audio. **Please note:** It is very important that you test this with Windows Media Player only - other video players are irrelevant for this test as the underlying audio codecs are used by Wallpaper Engine as well. If no audio is playing in Windows Media Player, then either the video file does not have audio or the audio codecs on your system are indeed broken or missing.

In that case, you can use the *Codec Tweak Tool* as explained on the following page to reset all audio and video codecs on your system, afterwards restart Wallpaper Engine and try again:

* [Videos sind schwarz oder spielen nicht richtig ab - Codec Tweak Tool](noshow/notplaying.html#codec-tweak-tool)

