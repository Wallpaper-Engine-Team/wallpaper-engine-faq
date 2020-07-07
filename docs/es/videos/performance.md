# El vídeo se cuelga / se entrecorta / no funciona bien

Podría ocurrir si tienes componentes que no son lo suficientemente potentes para mostrar el vídeo correctamente. No se puede comparar un fondo de vídeo con los reproductores de vídeo normales, pues el primero cuenta con los iconos y con posibles estiramientos para ajustarse a múltiples monitores. También utiliza el decodificador de vídeo de su GPU por defecto para reducir el uso de la CPU al mínimo.

## La grabación en segundo plano se cuelga
Podría suceder a causa de los controladores para grabar programas como ReLive, Shadow Play/Nvidia Share o Windows GameDVR. Deshabilítalos para ver si cambia la situación y luego excluye Wallpaper Engine en dichos programas. Asegúrate de que no hay más programas de grabación o superposición cargándose en Wallpaper Engine que puedan ralentizar el procesamiento.

Usa nuestra herramienta de escaneo para determinar si tienes instalado algún programa de grabación que tienda a colgarse, pero ten en cuenta que no siempre lo detecta todo, tal y como ocurre con Nvidia GeForce Experience:

* [Herramienta de escaneo de Wallpaper Engine.](/debug/scantool.html)

## Superresolución Dinámica (DSR) / Escalado de GPU
Las modificaciones de los controladores como el escalado de GPU o DSR pueden causar problemas, así que deshabilítalos. En caso de que funcione, asegúrate de deshabilitarlos para que no afecten a Wallpaper Engine.

## Bajo rendimiento en dwm.exe en sistemas con varias GPU / varios monitores
Si has habilitado la GPU integrada en la BIOS del ordenador de sobremesa a pesar de tener una tarjeta gráfica dedicada instalada, puede darse el caso de que experimentes un mal rendimiento y un alto uso de la CPU por parte de DMW.exe. Si es posible, no habilites la GPU integrada. **Es muy importante que conectes todos los monitores a la tarjeta gráfica dedicada.** El uso de ambas gráficas a la vez dañará la aceleración hardware del gestor de ventanas de escritorio. Sin la tecnología Nvidia Optimus o similares, Windows se verá obligado a copiar la imagen del fondo de una GPU a la otra, una operación bastante tediosa. De hecho, cualquier acción compartida entre las GPU lo sufrirá, ya que es como mover una ventana de juego entre ambos monitores.

Este problema no afecta a los componentes fabricados para tener varias GPU como los portátiles con Nvidia Optimus o las configuraciones de Nvidia SLI o AMD con puentes de hardware.