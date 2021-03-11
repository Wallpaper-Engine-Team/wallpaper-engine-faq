# Videos frieren ein / Wiedergabe ruckelt / schlechte Leistung

Dies kann daran liegen, wenn deine Hardware nicht genug Leistung besitzt, um den speziellen Video-Hintergrund wiederzugeben. Ein Video-Hintergrund ist nicht mit Video-Playern vergleichbar, da es mit den Desktop-Icons dargestellt und gegebenenfalls über mehrere Hintergründe gespannt werden muss. Es nutzt außerdem den Video-Decoder deiner Grafikkarte um die Prozessor-Auslastung auf ein Minimum zu reduzieren.

## Hintergrund-Aufnahme-Programme
Das Problem kann auch von diversen Treiber-Funktionen ausgelöst werden, welche dazu dienen Anwendungen aufzunehmen. Darunter fallen Anwendungen wie AMD ReLive, Nvidia Shadow Play, Nvidia Share oder Windows GameDVR. Versuche diese Arten von Anwendungen zu deaktivieren und schaue ob es einen Unterschied macht, dann konfiguriere diese so, dass sie Wallpaper Engine ignorieren. Stelle außerdem sicher, dass kein Aufnahme-Programm oder In-Game-Overlay in Wallpaper Engine geladen wird und so die Wiedergabe von Hintergründen verlangsamt.

You can try to use our scan tool to determine if any programs with know recording hooks are installed but it does not catch everything, especially common recording hooks like the ones coming with Nvidia GeForce Experience:

* [Wallpaper Engine Scan Tool](/debug/scantool.html)

## Dynamic Super Resolution (DSR) / GPU Scaling
Driver level hacks like GPU Scaling/DSR could cause issues as well, try disabling them and if that helps, disable them for Wallpaper Engine specifically.

## Bad performance in dwm.exe in systems with multiple GPUs / multiple screens
If you have enabled the integrated GPU on your desktop PC in the BIOS although a dedicated graphics card is installed, you can experience bad performance and high CPU usage of DWM.exe. If possible, do not enable your integrated GPU. **It's very important to plug all your monitors into your dedicated graphics card.** Using both GPUs at the same time will break hardware acceleration of the desktop window manager. Without Nvidia Optimus technology or similar, Windows will be forced to copy the wallpaper image from one GPU to the other - a slow operation. In fact any shared action between your GPUs will suffer from this, it is the same as moving a game window right between both monitors.

This specific issue does not affect hardware built for multi-GPU setups like laptops with Nvidia Optimus or proper Nvidia SLI / AMD Crossfire setups with a hardware bridge.