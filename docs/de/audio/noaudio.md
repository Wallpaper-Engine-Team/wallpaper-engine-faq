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

Wenn die Tonwiedergabe an dieser Stelle immer noch nicht funktioniert, können einige Audio-Codecs unter Umständen defekt sein, dies ist jedoch hauptsächlich relevant wenn man Hintergründe vom Typ **Video** verwendet. Du kannst dies auch überprüfen, indem du mit Rechtsklick auf den Hintergrund in Wallpaper Engine klickst und **Im Dateimanager anzeigen** auswählst. Du solltest dann die dazugehörige Video-Datei sehen (normalerweise im **.mp4**-Format), öffne diese Datei im Windows Media Player und überprüfe, ob dort Ton abgespielt wird. **Achtung:** Es es sehr wichtig, dass du dies im Windows Media Player testest - andere Video-Player sind irrelevant für diesen Test, da die darunterliegenden Audio-Codecs ebenfalls von Wallpaper Engine verwendet werden. Falls im Windows Media Player auch kein Ton wiedergegeben wird, hat die Datei entweder keinen Ton oder die Audio-Codecs auf deinem System sind defekt oder fehlen.

In diesem Fall kannst du das *Codec Tweak Tool* verwenden, wie auf der folgenden Seite erklärt. Mit dem Tool kannst du alle Audio- und Video-Codecs auf deinem System zurücksetzen, starte danach Wallpaper Engine neu und versuche es erneut:

* [Videos sind schwarz oder spielen nicht richtig ab - Codec Tweak Tool](/noshow/notplaying.html#codec-tweak-tool)

