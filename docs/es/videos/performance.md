# El vídeo se cuelga / se entrecorta / no funciona bien

Podría ocurrir si tiene componentes que no son lo suficientemente potentes para mostrar el vídeo correctamente. No se puede comparar un fondo de vídeo con los reproductores de vídeo normales, pues cuenta con los iconos y con posibles estiramientos para ajustarse a múltiples monitores. También utiliza el decodificador de vídeo de su GPU por defecto para reducir el uso de la CPU al mínimo.

## La grabación en segundo plano se cuelga
Podría suceder a causa de los controladores para grabar programas como ReLive, Shadow Play/Nvidia Share o Windows GameDVR. Deshabilítelos para ver si cambia la situación y luego excluya Wallpaper Engine en dichos programas. Asegúrese de que no hay más programas de grabación o superposición cargándose en Wallpaper Engine que pueda ralentizar el procesamiento.

Use nuestra herramienta de escaneo para determinar si tiene instalado algún programa de grabación que tienda a colgarse, pero no siempre lo detecta todo, tal y como ocurre con Nvidia GeForce Experience:

* [Herramienta de escaneo de Wallpaper Engine.](/debug/scantool.html)

## Superresolución Dinámica (DSR) / Escalado de GPU
Driver level hacks like GPU Scaling/DSR could cause issues as well, try disabling them and if that helps, disable them for Wallpaper Engine specifically.

## Bajo rendimiento en dwm.exe en sistemas con varias GPU / varios monitores
Si ha habilitado la GPU integrada en su ordenador de sobremesa en la BIOS a pesar de tener una tarjeta gráfica dedicada instalada, puede darse el caso de que experimente un mal rendimiento y un alto uso de la CPU por parte de DMW.exe. Si es posible, no habilite la GPU integrada. **It's very important to plug all your monitors into your dedicated graphics card.** Using both GPUs at the same time will break hardware acceleration of the desktop window manager. Without Nvidia Optimus technology or similar, Windows will be forced to copy the wallpaper image from one GPU to the other - a slow operation. In fact any shared action between your GPUs will suffer from this, it is the same as moving a game window right between both monitors.

This specific issue does not affect hardware built for multi-GPU setups like laptops with Nvidia Optimus or proper Nvidia SLI / AMD Crossfire setups with a hardware bridge.