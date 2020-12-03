---
tags:
  - autostart
  - automatisch
---

# Automatischer Start mit Windows

Wallpaper Engine kann mit Windows gestartet werden, gehe dazu in die Einstellungen von Wallpaper Engine und navigiere zum Reiter "Allgemein". Oben in den Einstellungen, kann der Autostart aktiviert werden. Dies führt dazu, dass die Anwendung im Hintergrund startet, sobald der Computer gestartet wird.

## Was ist der Unterschied zwischen dem Autostart mit "hoher Priorität" und dem "normalen" Autostart?

Wenn der Autostart mit hoher Priorität ausgewählt wird, registriert Wallpaper Engine einen Windows-Dienst. Dies bedeutet, dass Wallpaper Engine vor anderen Programmen startet, welche ebenfalls mit einer Autostart-Funktion mit Windows starten. Es verändert die Leistung der Anwendung ansonsten in keinster Weise.

Der Nachteil des Autostarts mit hoher Priorität ist lediglich, dass er weniger verlässlich sein kann, hauptsächlich dadurch, dass einige Antivirenprogramme überreagieren und Wallpaper Engine blockieren können, wenn dieser Modus aktiviert ist, da sie das Verhalten fälschlicherweise als verdächtig einstufen.

## Ich habe den Autostart aktiviert aber er funktioniert nicht, was kann ich tun?

Wenn du den Autostart mit *hoher Priorität* verwendest, versuche auf den *normalen* Autostart zu wechseln, indem du die Option für hohe Priorität ausschaltest. Wie oben erklärt, ist der Autostart mit hoher Priorität schneller aber weniger verlässlich für verschiedenste Gründe, hauptsächlich aber da er öfters von Antivirenprogrammen blockiert wird.

Falls du den "normalen" Autostart verwendest und die Anwendung nicht mit Windows startet, versuche den Autostart mit hoher Priorität zu aktivieren und schaue, ob dies das Problem löst.

Wenn weder der normale noch der Autostart mit hoher Priorität für dich funktionieren, schaue dir deine Antivirus-Software an. Einige Antivirus- und Firewall-Programme blockieren manchmal das Starten Wallpaper Engine im Autostart. Dein Antivirenprogramm hat wahrscheinlich ein "Whitelist"-Feature, welches dir erlaubt ausgewählte Ordner und Anwendungen zu ignorieren. Stelle sicher, dass das wallpaper_engine-Installationsverzeichnis und alle dort enthaltenen .exe-Dateien in diese Ausnahmeregeln aufgenommen werden.

Ein weiteres seltenes Problem kann sein, dass du (oder eine Anwendung auf deinem System), die Wallpaper Engine .exe so verändert hat, dass diese nur noch mit Administrator-Rechten ausgeführt werden kann, wodurch es ebenfalls nicht automatisch starten kann. Du musst diese Admin-Einstellungen in diesem Fall entfernen und den Autostart einmal aus und wieder anschalten.

Falls der Autostart nicht funktioniert, ist die Lösung fast immer in irgendeiner Form abhängig von zu strikt konfigurierten Antivirenprogrammen. Falls du ein Antivirenprogramm oder ein Firewall-Programm installiert hast, überprüfe bitte alle Einstellungen und Sicherheitslevel ausführlich.

## Wallpaper Engine startet mit Windows, aber (einige) Hintergründe werden nicht angezeigt

 Überprüfe ob das Wallpaper Engine-Logo in der Windows-Taskleiste neben der Uhr angezeigt wird, nachdem du deinen Computer startest. If the icon is there after your system starts but either some or none of your monitors have their respective wallpapers shown, there is a problem with your graphics card drivers. Essentially, your graphics card drivers keep assigning your monitors new identifiers which leads Wallpaper Engine to believe that you are trying to configure a new monitor. You can fix this by changing the *"Monitor identification"* option in the *General* tab of the Wallpaper Engine settings to *Layout* or *GDI*. We also recommend that you do a clean re-installation of your graphics card drivers in this case, as it's an indicator for an underlying problem with your Windows installation.

 ## Wallpaper Engine assigns wrong wallpapers at system start-up

 This is the same problem as in the previous section, if you have multiple monitors and the wallpapers are being assigned to the wrong monitor at start-up, try changing the *Monitor identification* option in the *General* tab of the Wallpaper Engine settings to *Layout* or *GDI*.