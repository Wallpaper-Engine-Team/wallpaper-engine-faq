# El vídeo se cuelga / se entrecorta / no funciona bien

Podría ocurrir si tiene componentes que no son lo suficientemente potentes para mostrar el vídeo correctamente. No se puede comparar un fondo de vídeo con los reproductores de vídeo normales, pues el primero cuenta con los iconos y con posibles estiramientos para ajustarse a múltiples monitores. También utiliza el decodificador de vídeo de su GPU por defecto para reducir el uso de la CPU al mínimo.

## La grabación en segundo plano se cuelga
Podría suceder a causa de los controladores para grabar programas como ReLive, Shadow Play/Nvidia Share o Windows GameDVR. Deshabilítelos para ver si cambia la situación y luego excluya Wallpaper Engine en dichos programas. Asegúrese de que no hay más programas de grabación o superposición cargándose en Wallpaper Engine que puedan ralentizar el procesamiento.

Use nuestra herramienta de escaneo para determinar si tiene instalado algún programa de grabación que tienda a colgarse, pero tenga en cuenta que no siempre lo detecta todo, tal y como ocurre con Nvidia GeForce Experience:

* [Herramienta de escaneo de Wallpaper Engine.](/debug/scantool.html)

## Superresolución Dinámica (DSR) / Escalado de GPU
Driver level hacks like GPU Scaling/DSR could cause issues as well, try disabling them and if that helps, disable them for Wallpaper Engine specifically.

## Bajo rendimiento en dwm.exe en sistemas con varias GPU / varios monitores
Si ha habilitado la GPU integrada en su ordenador de sobremesa en la BIOS a pesar de tener una tarjeta gráfica dedicada instalada, puede darse el caso de que experimente un mal rendimiento y un alto uso de la CPU por parte de DMW.exe. Si es posible, no habilite la GPU integrada. **Es muy importante que conecte todos los monitores a la tarjeta gráfica dedicada.** El uso de ambas soluciones gráficas a la vez dañará la aceleración hardware del gestor de ventanas de escritorio. Sin la tecnología Nvidia Optimus o similares, Windows se verá obligado a copiar la imagen del fondo de una GPU a la otra, una operación bastante tediosa. De hecho, cualquier acción compartida entre las GPU lo sufrirá, ya que es como mover una ventana de juego entre ambos monitores.

Este problema no afecta a los componentes fabricados para tener varias GPU como los portátiles con Nvidia Optimus o las configuraciones de Nvidia SLI o AMD con puentes de hardware.