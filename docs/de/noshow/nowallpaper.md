---
tags:
  - antivirus
  - antivirenprogramm
---

# Hintergründe werden nicht angezeigt

Wenn einige oder gar alle deine Hintergründe nicht angezeigt werden, so wird dies in den meisten Fällen von Antivirenprogrammen verursachten, die Wallpaper Engine fälschlicherweise blockieren. Wenn du ein Antivirenprogramm verwendest, stelle sicher, dass du es so konfiguriert hast, dass es das *wallpaper_engine*-Installationsverzeichnis und alle .exe-Dateien von Wallpaper Engine ignoriert:

* *wallpaper_engine/wallpaper32.exe*
* *wallpaper_engine/wallpaper64.exe*
* *wallpaper_engine/launcher.exe*
* *wallpaper_engine/bin/webwallpaper32.exe*
* *wallpaper_engine/bin/ui32.exe*

::: tip
Wenn du ein Antivirenprogramm installiert hast (außer Windows Defender), ist es sehr wahrscheinlich, dass es die Ursache für diese Art von Problemen ist. Schaue dir dein Antivirenprogramm genauer an, wenn die ersten Schritte beim Konfigurieren des Antivirenprogramms nicht zum Erfolg führen.
:::

## Modus für hohen Kontrast in Windows

Wenn du den **Modus für hohen Kontrast** in deinen Windows 10-Einstellungen aktiviert hast und den Design-Stil **Hoher Kontrast - Weiß** ausgewählt hast, deaktiviert Windows die Hintergründe von Wallpaper Engine. Versuche den Design-Stil des für den Modus mit hohem Kontrast in den dazugehörigen Einstellungen von Windows zu verändern oder deaktiviere den Modus mit hohem Kontrast vollständig, in beiden Fällen sollte das Problem gelöst werden.

## Konflikte mit anderen Anwendungen zur Veränderung des Windows-Desktops

Wallpaper Engine funktioniert gut zusammen mit den meisten anderen Anwendungen zur Veränderungen des Windows Desktops. Trotzdem können einige Anwendungen, wie zum Beispiel StarDock DeskScapes auch die Hintergründe von Windows bearbeiten, in diesen Fällen kann man nicht beide Anwendungen gleichzeitig laufen lassen. Wenn du eine andere Anwendung nutzt, welche ähnlich zu Wallpaper Engine ist, musst du eine Wahl treffen und dich für eine dieser Anwendungen entscheiden.

### Fences

Allgemein funktioniert Wallpaper Engine gut in Verbindung mit *Fences*. **Wenn du jedoch Fences installiert hast, es aber deaktiviert ist**, wird es den Hintergrund von Wallpaper Engine verstecken. In diesem Fall musst du Fences entweder aktivieren oder vollständig deinstallieren.

## Grauer Hintergrund oder fehlende Texturen auf Windows 7

Stelle sicher, dass das Windows 7-Update **KB2533623** installiert ist. Installiere es entweder manuell über den folgenden Link oder stelle sicher, dass Windows Update korrekt konfiguriert ist und von selbst installieren kann. Du kannst das Update manuell von der Microsoft-Website herunterladen, starte dein System nach der Installation neu und das Problem sollte gelöst sein:

* [KB2533623](https://support.microsoft.com/de-de/help/2533623/microsoft-security-advisory-insecure-library-loading-could-allow-remot)