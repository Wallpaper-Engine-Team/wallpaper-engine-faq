---
tags:
  - bildschirmschoner
  - standby
  - ruhemodus
  - energiesparmodus
---

# Standby / Ruhemodus / Bildschirmschoner funktionieren nicht

Windows aktiviert den Ruhemodus nicht, wenn ein Audio-Stream aktiv ist. Du kannst dieses Problem umgehen, indem du die Audio-Ausgabe im Reiter "Allgemein" in den Einstellungen von Wallpaper Engine deaktivierst, um Windows daran zu hindern, den Ruhemodus zu blockieren. Falls du weiterhin Audio-Ausgabe nutzen möchtest, folge den Schritten in dieser Anleitung, um zu erfahren wie dies konfiguriert werden kann.

## Anpassen der Windows-Energie-Einstellungen

Windows aktiviert den Ruhemodus nicht, wenn ein Audio-Stream aktiv ist. Du kannst dieses Problem umgehen, indem du die Audio-Ausgabe im Reiter "Allgemein" in den Einstellungen von Wallpaper Engine deaktivierst oder indem du Windows so einstellst, dass es auch mit aktiver Audio-Wiedergabe den Ruhemodus aktiviert:

1. Go to the "Power and sleep settings" of Windows by typing it into the Windows search.
2. Click on "Additional power settings"
3. Click on "Change plan settings" next to the plan that is selected
4. Click on "Change advanced power settings"
5. Scroll down and expand "Multimedia settings"
6. Set "When sharing media" to "Allow the computer to enter away mode" (screensavers) **or** "Allow the computer to sleep" (hibernation)

![Enable "Allow the computer to sleep"](./power.gif)

## Hibernation issues with "Web" type wallpapers

"Web" wallpapers use a web browser similar to Google Chrome ("CEF") which will prevent hibernation mode. Until this is fixed in the browser, you can get around this with some command-line prompts.

1. Search Windows for "cmd.exe" and right-click on it and select "Run as administrator" (very important, otherwise this will not work!).
2. Use the command `powercfg /requests` to view all processes that are blocking your system from hibernation (also check if other programs may be at fault here).
3. Use the following three commands to permit your system to sleep with Wallpaper Engine running:

```
powercfg /requestsoverride PROCESS webwallpaper32.exe AWAYMODE DISPLAY SYSTEM
powercfg /requestsoverride PROCESS wallpaper32.exe AWAYMODE DISPLAY SYSTEM
powercfg /requestsoverride PROCESS wallpaper64.exe AWAYMODE DISPLAY SYSTEM
```

Additionally, you can also set the **Display asleep** option in the **Performance** tab of the Wallpaper Engine settings to *Stop (free memory)* and turn off your display. That way Wallpaper Engine stops all playback when you turn your display off when leaving your computer unattended.