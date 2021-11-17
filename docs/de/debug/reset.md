# Wallpaper Engine vollständig zurücksetzen

Falls du technische Probleme mit Wallpaper Engine hast, kannst du probieren, deine Installation von Wallpaper Engine vollständig zurückzusetzen. Folge dieser Anleitung, um Wallpaper Engine wieder auf den ursprünglichen Zustand zurückzusetzen, inklusive fehlerhafter Wallpaper-Abos.

::: danger
Lies zuerst diese Sektion, wenn du ein Antivirenprogramm nutzt (außer Microsoft Defender)

Ein Großteil der Probleme mit denen wir zu tun haben, wird durch Antivirenprogramme ausgelöst, welche Wallpaper Engine oder Steam fälschlicherweise blockieren. Antivirenprogramme verursachen häufig:

* Wallpaper Engine Abstürze
* Kaputte oder leere Benutzeroberfläche von Wallpaper Engine
* Wallpaper Engine startet gar nicht ohne jegliche Fehlermeldung
* Wallpaper Engine lässt sich nicht installieren oder updaten
* Weitere Fehler, welche durch defekte und gesperrte Dateien verursacht werden

**Falls du ein Antivirenprogramm verwendest, stelle sicher, dass es dein `wallpaper_engine` Installationsverzeichnis ignoriert, bevor du mit den Schritten auf dieser Seite fortfährst. Überprüfe, ob dein Antivirenprogramm es ermöglicht, gesamte Verzeichnisse zu ignorieren.**

Die meisten Antivirenprogramme können Dateien von Wallpaper Engine blockieren, ohne dich darüber zu informieren, einige Dateien von Wallpaper Engine können dabei permanent gesperrt werden.
:::

## Wallpaper Engine vollständig deinstallieren

Um Wallpaper Engine vollständig zu deinstallieren und jegliche defekte Dateien zu löschen:

1. Falls du die Autostart-Funktionalität aktiviert hast: Öffne die Wallpaper Engine-Einstellungen und schalte den Autostart im oberen Bereich des Reiters **Allgemein** aus.
2. Öffne Steam und rechtsklicke auf Wallpaper Engine, dann wähle **Verwalten**, gefolgt von **Deinstallieren** aus.
3. Navigiere zum Installationspfad von Wallpaper Engine und lösche den verbliebenen `wallpaper_engine`-Ordner vollständig. Standardmäßig befindet sich dieser hier:

* `C:\Programme (x86)\Steam\steamapps\common\wallpaper_engine`

Wenn du Wallpaper Engine in einem anderen Verzeichnis installiert hast, suche nach dem `wallpaper_engine`-Verzeichnis dort. Stelle sicher, dass der Ordner vollständig gelöscht wurde um jegliche Dateien zu löschen, welche von einem Antivirenprogramm unsichtbar gesperrt oder beschädigt wurden.

Du kannst nun Wallpaper Engine neu installieren. Wenn du vollständig mit einer komplett sauberen Installation starten möchtest, lies bitte die folgende Sektion um zu erfahren, wie du alle deine Hintergrund-Abos zurücksetzen kannst - dies ist jedoch in den meisten Fällen nicht nötig.

## Alle Steam Workshop-Abos zurücksetzen

Falls du ein Problem mit dem Download von Hintergründen durch Steam hast, kannst du versuchen alle deine Abos aus dem Steam Workshop zurückzusetzen. In seltenen Fällen, kann dies auch mit kaputten Workshop-Abos helfen, welche nicht in der App sichtbar sind. Falls du feststellst, dass Steam immer wieder deine Hintergründe erneut herunterlädt oder dass Steam wiederholt Hintergründe herunterlädt, welche vom Steam Workshop entfernt wurden, kannst du eine volle Zurücksetzung probieren.

Folge diesen Schritten:

1. Schalte Steam vollständig aus. **Optional:** Deinstalliere Wallpaper Engine zunächst.
2. Öffne die Steam Workshop-Website von Wallpaper Engine und logge dich in dein Steam-Konto ein:

* [Steam Workshop für Wallpaper Engine](https://steamcommunity.com/app/431960/workshop/)

3. Bewege deinen Mauszeiger rechts über **Ihre Dateien** und dann **Abonnierte Objekte**.
4. Du siehst nun eine Seite mit all deinen Workshop-Abos. Klicke rechts auf die Schaltfläche **Alle deabonnieren**, um alle deine Workshop-Abos zu löschen (inklusive jeglicher unsichtbaren und defekten Abos).
5. **Starte Steam neu**, deine Abos sollten nun zurückgesetzt sein.
