# Wiederherstellen von gelöschten Standard-Hintergründen

Wenn du Hintergründe gelöscht hast, welche mit Wallpaper Engine vorinstalliert ausgeliefert werden, kannst du diese zurück erhalten, indem du eine Konfigurationsdatei in deinem *wallpaper_engine*-Installationsverzeichnis löschst:

1. Schalte Wallpaper Engine vollständig aus (Rechtsklick auf das Symbol Windows-Taskleiste -> "Beenden")

2. Gehe in das Installationsverzeichnis von Wallpaper Engine und lösche die dort vorhandene Datei namens "visibility.json". Die Datei kann standardmäßig hier gefunden werden:

* *C:\Programme (x86)\Steam\SteamApps\common\wallpaper_engine\projects\defaultprojects\visibility.json*

Wenn dein Steam oder Wallpaper Engine in einem anderen Verzeichnis installiert sind, dann ist der Pfad leicht anders, aber das Unterverzeichnis *wallpaper_engine\projects\defaultprojects\visibility.json* bleibt immer gleich.

3. Sobald die Datei gelöscht wurde, kannst du Wallpaper Engine erneut starten und alle Standard-Hintergründe sollten wieder da sein.

::: tip
Wenn du die Datei "visibility.json" nicht finden kannst, kannst du auch einfach Wallpaper Engine neu installieren. Dies stellt alle Standard-Hintergründe wieder her, erfordert aber, dass du alle anderen Hintergründe ebenfalls erneut herunterlädst, du kannst dies vermeiden indem du die oben beschriebenen Schritte befolgst.
:::