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

* [Steam Support: Spieldateien auf Fehler überprüfen](https://support.steampowered.com/kb_article.php?ref=2037-QEUH-3335)

Wenn die Überprüfung der Dateien über Steam das Problem nicht behebt nachdem dein Antivirenprogramm korrekt konfiguriert wurde, probiere Wallpaper Engine über Steam neu zu installieren. Wenn dein Antivirenprogramm überreagiert hat, hat es unter Umständen einige Dateien und Verzeichnisse von Wallpaper Engine permanent blockiert. In diesen seltenen Fällen deinstalliere dein Antivirenprogramm zunächst, dann installiere Wallpaper Engine in ein neues Verzeichnis, du kannst für diesen Zweck ein neues Spiele-Verzeichnis in Steam anlegen.

Wenn das Problem dann immer noch besteht, schalte zunächst Wallpaper Engine vollständig aus. Dann starte Wallpaper Engine über die dritte Startoption in Steam neu ("Benutzeroberfläche im abgesicherten Modus starten").

![Launch option: User Interface in Safe Mode](/img/faq/steam_launch_option.jpg)

## Benutzeroberfläche von Wallpaper Engine hat grüne Artefakte oder weiße Linien

Deine Grafikkartentreiber sind defekt oder falsch konfiguriert. Lade die neuesten Treiber für deine Grafikkarte herunter (auch wenn du bereits die neuesten Treiber installiert hast) und führe eine saubere Neuinstallation der Treiber durch. Es ist wichtig, dass du zunächst deine derzeitigen Treiber vollständig deinstallierst und dann die neuesten Treiber installierst, um sicher zu stellen, dass jegliche defekte Dateien oder fehlerhafte Einstellungen vollständig gelöscht werden.

Wenn das Problem dann immer noch besteht, schalte zunächst Wallpaper Engine vollständig aus. Dann starte Wallpaper Engine über die dritte Startoption in Steam neu ("Benutzeroberfläche im abgesicherten Modus starten").

**Wenn die Benutzeroberfläche von Wallpaper Engine voll mit weißen Linien ist:** Du hast **Nvidia Image Sharpening (Bildschärfung)** für alle Anwendungen aktiviert. Turn it off in your Nvidia drivers or do a clean reinstallation of your Nvidia drivers by uninstalling your current ones first.

![Nvidia Image Sharpening Issue](./imagesharpening.png) *White lines will be visible all over the application window if Nvidia image sharpening is turned on for Wallpaper Engine by mistake.*

### Rare Steam Overlay Bug Breaking Wallpaper Engine User Interface

The other possible reason for a black application window is a rare Steam bug with the Steam overlay. You can try the following:

Turn off Wallpaper Engine completely (right-click on the tray icon and then select "Quit"). Afterwards, open up Steam, right-click on Wallpaper Engine, select "Properties" and then disable the "Enable Steam Overlay while in-game" option. After disabling the option, try to restart Wallpaper Engine via Steam. 