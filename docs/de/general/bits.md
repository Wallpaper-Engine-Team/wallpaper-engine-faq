# 32-Bit- & 64-Bit-Version

Die 64-Bit-Version kann mit größeren Dateien umgehen (mehr als 2GB) aber konsumiert dafür immer mehr Arbeitsspeicher, egal wie groß die Hintergründe tatsächlich sind. Beispielsweise nutzt die 64-Bit-Version ungefähr 50 MB mehr RAM im Vergleich zur 32-Bit-Version beim Abspielen eines Video-Hintergrundes, ansonsten gibt es keine Unterschiede oder Vorteile.

::: tip
Wir empfehlen das Nutzen der 32-Bit-Version, außer für den Fall dass du wirklich sehr große Hintergründe hast, die die 32-Bit-Version zum Absturz bringen würden. Für die meisten Nutzer ist dies gewöhnlich kein Problem.
:::

Du kannst außerdem die 64-Bit-Version verwenden, wenn du sehr spezielle Probleme mit dem Video-System deines Computers hast, welche nur 32-Bit-Anwendungen betreffen. Solltest du jemals Codec-Packs oder ähnliches installiert haben, so können diese in seltenen Fällen Schäden am 32-Bit-Videosystem verursacht haben, welches Wallpaper Engine nutzt. Wenn in diesen Fällen das 64-Bit-System nicht defekt ist, kannst du dieses nutzen indem du auf die 64-Bit-Version von Wallpaper Engine wechselst und somit das Reparieren der 32-Bit-Version unnötig machst.

::: warning
Bitte beachte
Bitte beachte, dass Hintergründe vom Typ "Web" immer mit einer 32-Bit-Anwendung ausgeführt werden (webwallpaper32.exe). Das gleiche trifft auf die Benutzeroberfläche zu (ui32.exe). 64-Bit ist nur relevant, wenn du Hintergründe vom Typ "Szene" oder "Video" nutzt.
:::

## Einstellen des Autostarts von Wallpaper Engine mit entweder 32- oder 64-Bit beim Start von Windows.

Schalte Wallpaper Engine zunächst einmal vollständig aus (Rechtsklick auf das Symbol von Wallpaper Engine in der Taskleiste von Windows -> "Beenden"). Dies ist wichtig, da Steam ansonsten Wallpaper Engine nicht neu startet und nur die bereits laufende Version in den Vordergrund rückt.

Sobald Wallpaper Engine ausgeschaltet ist, öffne Steam und starte entweder die 32-Bit oder 64-Bit-Version, je nachdem welche Version du automatisch starten lassen möchtest. Öffne die Wallpaper Engine-Einstellungen und aktiviere den Autostart oben im Reiter "Allgemein". Wenn dieser bereits aktiviert ist, deaktiviere ihn zunächst und schalte ihn dann erneut ein. Dies registriert die derzeit laufende Version als diejenige, welche beim Autostart von Windows gestartet werden soll. 