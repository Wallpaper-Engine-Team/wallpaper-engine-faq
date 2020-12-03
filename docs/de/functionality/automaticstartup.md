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

 Überprüfe ob das Wallpaper Engine-Logo in der Windows-Taskleiste neben der Uhr angezeigt wird, nachdem du deinen Computer startest. Falls das Logo dort zu sehen ist, aber entweder einige oder alle deiner Bildschirme das jeweilige Hintergrundbild nicht anzeigen, liegt ein Problem mit deinen Grafikkartentreibern vor. Eine vereinfachte Erklärung des Problems ist, dass dein Grafikkartentreiber in diesem Fall deinen Bildschirmen neue Identifikationsnummer zuweist, was Wallpaper Engine denken lässt, dass du einen neuen Monitor angeschlossen hast. Dies kann normalerweise behoben werden, indem die Einstellung *"Bildschirmerkennung"* im Reiter *Allgemein* der Wallpaper Engine-Einstellungen auf *Layout* oder *GDI* geändert wird. Wir empfehlen außerdem, dass du in diesem Fall eine saubere Neuinstallation deiner Grafikkartentreiber durchführst, da dieses Problem ein Indikator für ein tieferes Problem mit deiner Windows-Installation ist.

 ## Wallpaper Engine zeigt die falschen Hintergründe beim Windows-Start an

 Dieses Problem ist praktisch gleichzusetzen mit der vorherigen Sektion, falls du mehrere Bildschirme hast und Hintergründe beim Start den falschen Bildschirmen zugewiesen werden, versuche die Einstellung *Bildschirmerkennung* im Reiter *Allgemein* in den Wallpaper Engine-Einstellungen auf *Layout* oder *GDI* zu ändern.