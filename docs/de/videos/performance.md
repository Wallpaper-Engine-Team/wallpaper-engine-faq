# Videos frieren ein / Wiedergabe ruckelt / schlechte Leistung

Dies kann daran liegen, wenn deine Hardware nicht genug Leistung besitzt, um den speziellen Video-Hintergrund wiederzugeben. Ein Video-Hintergrund ist nicht mit Video-Playern vergleichbar, da es mit den Desktop-Icons dargestellt und gegebenenfalls über mehrere Hintergründe gespannt werden muss. Es nutzt außerdem den Video-Decoder deiner Grafikkarte um die Prozessor-Auslastung auf ein Minimum zu reduzieren.

## Hintergrund-Aufnahme-Programme
Das Problem kann auch von diversen Treiber-Funktionen ausgelöst werden, welche dazu dienen Anwendungen aufzunehmen. Darunter fallen Anwendungen wie AMD ReLive, Nvidia Shadow Play, Nvidia Share oder Windows GameDVR. Versuche diese Arten von Anwendungen zu deaktivieren und schaue ob es einen Unterschied macht, dann konfiguriere diese so, dass sie Wallpaper Engine ignorieren. Stelle außerdem sicher, dass kein Aufnahme-Programm oder In-Game-Overlay in Wallpaper Engine geladen wird und so die Wiedergabe von Hintergründen verlangsamt.

Du kannst versuchen unser Scan-Tool zu verwenden, um Programme zu finden, welche bekannt dafür sind solche Art von Problemen auszulösen. Bitte beachte dabei, dass unser Scan-Tool nicht absolut verlässlich ist um die Ursache dieses Problems zu finden - es kann unter Umständen gar kein Problem feststellen oder eine Anwendung als problematisch melden, auch wenn diese gar nichts mit deinem Problem zu tun hat:

* [Wallpaper Engine Scan-Tool](/debug/scantool_support.html)

## Dynamic Super Resolution (DSR) / GPU-Bildskalierung
Treiber-Hacks wie GPU-Bildskalierung / DSR können ebenfalls Probleme verursachen. Versuche diese zu deaktivieren, wenn dies hilft, deaktiviere sie speziell für Wallpaper Engine.

## Schlechte Leistung in dwm.exe auf Systemen mit mehreren GPUs / mehreren Bildschirmen
Wenn du die integrierte GPU deines Desktop-Computers im BIOS aktiviert hast und dazu eine Grafikkarte installiert hast, kannst unter Umständen Leistungsprobleme und eine hohe CPU-Auslastung mit DWM.exe feststellen. Wenn möglich, deaktiviere deine integrierte GPU. **Es ist sehr wichtig, dass du alle deine Bildschirme in deine Grafikkarte einsteckst.** Wenn du beide GPUs gleichzeitig verwendest, kann die Hardware-Beschleunigung vom Desktop-Window-Manger (dwm.exe) nicht mehr korrekt durchgeführt werden. Ohne Technologien wie Nvidia Optimus muss Windows den Hintergrund von einer GPU zur anderen kopieren - dabei handelt es sich um einen sehr langsamen Prozess. Diese Art von geteilter Interaktion zwischen deinen GPUs ist immer ein Problem, es ist das gleiche wie als würdest du das Fenster eines Spieles zwischen zwei verbundene Bildschirme schieben.

Dieses spezielle Problem tritt nicht auf Hardware auf, welche speziell auf Multi-GPU-Umgebungen optimiert wurden, wie Laptops mit Nvidia Optimus oder auf Systemen mit Nvidia SLI oder AMD CrossFire mit einer Hardware-Brücke zwischen den GPUs.
