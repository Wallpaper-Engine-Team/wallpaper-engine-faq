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
3. Navigiere zum Installationspfad von Wallpaper Engine und lösche den verbliebenen `wallpaper_engine`-Ordner vollständig. by default, it is located here:

* `C:\Programme (x86)\Steam\steamapps\common\wallpaper_engine`

If you have installed Wallpaper Engine in a different directory, please look for the `wallpaper_engine` directory there. Make sure the folder is entirely deleted to clear any invisible antivirus file locks or corrupted files.

You can now reinstall Wallpaper Engine. If you want to start from a clean slate, please read the next section on how to fully reset all your wallpaper subscriptions - this is not necessary in most cases.

## Resetting all Steam Workshop Subscriptions

If you are experiencing issues related to wallpaper downloads by Steam, you can try to do a full reset of your Steam Workshop subscriptions. In rare cases, this can help with broken Workshop subscriptions that are not visible in the app. If you notice that Steam keeps redownloading all your wallpapers or that Steam keeps downloading wallpapers that have been deleted from the Steam Workshop in the past, you can attempt a full reset.

Folge diesen Schritten:

1. Schalte Steam vollständig aus. **Optional:** Uninstall Wallpaper Engine first.
2. Open the Wallpaper Engine Steam Workshop website and log in to your Steam account:

* [Steam Workshop for Wallpaper Engine](https://steamcommunity.com/app/431960/workshop/)

3. On the right-hand side, hover over **Your files** and then **Subscribed Items**.
4. You will be presented a page with your subscriptions. Click the **Unsubscribe From All** button on the right-hand side to clear all your Workshop subscription (including any hidden broken subscriptions).
5. **Restart Steam**, your subscriptions are now reset.
