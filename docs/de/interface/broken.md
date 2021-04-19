---
tags:
  - benutzeroberfläche
  - grün
  - weiss
  - verpixelt
  - unlesbar
---

# Fenster von Wallpaper Engine wird nicht korrekt angezeigt

Wenn die Benutzeroberfläche von Wallpaper Engine nicht richtig funktioniert, so liegt dies fast immer an defekten Grafikkartentreibern oder Antivirenprogrammen. Für weitere Informationen, siehe die relevanten Sektionen weiter unten.

::: warning
Bitte beachte Dieser Artikel handelt über den Fall, in dem die **Benutzeroberfläche** von Wallpaper Engine schwarz, weiß oder anderweitig defekt ist. Wenn deine **Hintergründe schwarz sind**, schaue dir bitte diesen Artikel an: [Videos sind schwarz oder spielen nicht richtig ab](/noshow/notplaying.html).
:::

## Benutzeroberfläche von Wallpaper Engine ist schwarz oder weiß

Für die meisten bedeutet dies, dass die Benutzeroberfläche von Wallpaper Engine fälschlicherweise von einem Antivirenprogramm blockiert wird. Stelle sicher, dass du eine Ausnahme in deinem Antivirenprogramm eingerichtet hast, sodass es Wallpaper Engine ignoriert, besonders alle .exe-Dateien im Installationsverzeichnis "wallpaper_engine" und ganz besonders **wallpaper_engine/bin/ui32.exe**.

Daraufhin ist es in einigen Fällen nötig, die Dateien von Wallpaper Engine auf Fehler zu überprüfen oder gar Wallpaper Engine völlig neu zu installieren falls dein Antivirenprogramm einige Dateien permanent blockiert hat:

* [Steam Support: Spieldateien auf Fehler überprüfen](https://support.steampowered.com/kb_article.php?ref=2037-QEUH-3335&l=german)

Wenn die Überprüfung der Dateien über Steam das Problem nicht behebt nachdem dein Antivirenprogramm korrekt konfiguriert wurde, probiere Wallpaper Engine über Steam neu zu installieren. Wenn dein Antivirenprogramm überreagiert hat, hat es unter Umständen einige Dateien und Verzeichnisse von Wallpaper Engine permanent blockiert. In diesen seltenen Fällen deinstalliere dein Antivirenprogramm zunächst, dann installiere Wallpaper Engine in ein neues Verzeichnis, du kannst für diesen Zweck ein neues Spiele-Verzeichnis in Steam anlegen.

Wenn das Problem dann immer noch besteht, schalte zunächst Wallpaper Engine vollständig aus. Dann starte Wallpaper Engine über die dritte Startoption in Steam neu ("Benutzeroberfläche im abgesicherten Modus starten").

![Startoption: Benutzeroberfläche im abgesicherten Modus starten](/img/faq/steam_launch_option.jpg)

## Benutzeroberfläche von Wallpaper Engine hat grüne Artefakte oder weiße Linien

Deine Grafikkartentreiber sind defekt oder falsch konfiguriert. Lade die neuesten Treiber für deine Grafikkarte herunter (auch wenn du bereits die neuesten Treiber installiert hast) und führe eine saubere Neuinstallation der Treiber durch. Es ist wichtig, dass du zunächst deine derzeitigen Treiber vollständig deinstallierst und dann die neuesten Treiber installierst, um sicher zu stellen, dass jegliche defekte Dateien oder fehlerhafte Einstellungen vollständig gelöscht werden.

Wenn das Problem dann immer noch besteht, schalte zunächst Wallpaper Engine vollständig aus. Dann starte Wallpaper Engine über die dritte Startoption in Steam neu ("Benutzeroberfläche im abgesicherten Modus starten").

**Wenn die Benutzeroberfläche von Wallpaper Engine voll mit weißen Linien ist:** Du hast **Nvidia Image Sharpening (Bildschärfung)** für alle Anwendungen aktiviert. Schalte das Feature in deinen Nvidia-Treibern aus oder führe eine saubere Neuinstallation deiner Nvidia-Treiber durch, indem du sie zunächst deinstallierst.

![Problem mit Nvidia Image Sharpening](./imagesharpening.png) *Wenn Nvidia Image Sharpening für Wallpaper Engine fälschlicherweise aktiviert wurde, erscheinen im gesamten Fenster weiße Linien.*

### Seltener Fehler mit dem Steam-Overlay kann die Benutzeroberfläche kaputt machen

Eine weitere Möglichkeit für ein leeres Anwendungsfenster ist ein seltener Fehler in Steam, der das Steam-Overlay betrifft. Du kannst das folgende versuchen:

Schalte Wallpaper Engine vollständig aus (Rechtsklick auf das Symbol in der Windows-Taskleiste und dann "Beenden"). Öffne danach Steam, rechtsklicke auf Wallpaper Engine und wähle "Eigenschaften" aus, dann deaktiviere die Option "Steam-Overlay während des Spiels aktivieren". Nachdem du die Option deaktiviert hast, versuche Wallpaper Engine über Steam neu zu starten. 