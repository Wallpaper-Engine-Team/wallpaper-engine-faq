# Los sobremesa con GPU integrada y dedicada no funcionan bien (dwm.exe)

Si has habilitado la GPU integrada en la BIOS del ordenador de sobremesa a pesar de que tiene una GPU dedicada, puede darse el caso de que experimentes un mal rendimiento y un alto uso de la CPU por parte de *dwm.exe*. Si es posible, no habilites la GPU integrada y conecta los monitores a la GPU dedicada. El uso de ambas gráficas a la vez dañará la aceleración de hardware del gestor de ventanas de escritorio, por lo que es importante que conectes todos los monitores con la tarjeta gráfica principal. Esto no es un error ni un problema de Wallpaper Engine, sino que es un problema que afecta a todos los programas multimonitor cuando los monitores no están conectados a la tarjeta gráfica principal.

Sin la tecnología Nvidia Optimus o similares, Windows se verá obligado a copiar la imagen del fondo de una GPU a la otra, una operación un tanto tediosa. De hecho, cualquier acción compartida entre las GPU lo sufrirá, ya que es como mover una ventana de juego entre ambos monitores.

Nvidia Optimus o SLI/Crossfire no tienen ese problema, ya que están fabricados para sistemas con varias GPU y tienen una solución física para que funcione sin problemas.

## Bajo rendimiento al usar GPU secundaria en un sobremesa sin Nvidia SLI / Nvidia Optimus / AMD CrossFire

Muchos usuarios asumen que cambiar Wallpaper Engine a una GPU secundaria mejorará el rendimiento del equipo. Sin embargo, es un malentendido bastante común y lo cierto es que el rendimiento del sistema se reducirá.

Wallpaper Engine crea fondos de pantalla que son parte del escritorio; es decir: son parte del proceso del explorador de archivos. Por lo tanto, Wallpaper Engine ha de usar la misma GPU que el explorador de archivos. Si no es el caso, Windows ha de forzar a ambas GPU a cooperar para renderizar la imagen para los monitores. Esto es trabajo del procesador, lo que significa que el rendimiento general del equipo se reducirá bastante y a veces necesita más rendimiento que los propios fondos. Algunas tecnologías preparadas para tener varias GPU (Nvidia SLI, Nvidia Optimus, AMD CrossFire) lidian con este problema a nivel de componentes, pero esto no se aplica en casos en los que se usa una GPU Nvidia y una tarjeta gráfica integrada Intel, por ejemplo.

Puedes cambiar la GPU en los controladores de la tarjeta gráfica o en la configuración del sistema, pero no recomendamos hacer nada de esto, ya que el rendimiento del sistema no mejorará.