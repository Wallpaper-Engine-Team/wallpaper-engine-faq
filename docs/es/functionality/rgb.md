---
tags:
  - hardware
---

# Compatibilidad con hardware RGB (iCUE y Chroma)

Wallpaper Engine es compatible con [**Razer Chroma**](https://www.razer.com/chroma) y con[ **Corsair iCUE**](https://www.corsair.com/icue), además de con los sistemas que se integran en sus ecosistemas.

## Cómo activar / desactivar hardware RGB

En la sección «Complementos» de la configuración de Wallpaper Engine, verá el **componente iCUE y Chroma SDK**. Si marca la casilla de la izquierda, puede activar o desactivar el componente general RGB. También puede hacer clic en el símbolo del engranaje para configurar las partes individuales.

Además, puede desactivar la compatibilidad RGB en cada fondo. Verá si está activada la opción **«Activar efectos de LED»** en la parte superior de la lista de propiedades de cada fondo, y esto le permite decidir si desea que un fondo controle las luces RGB o no.

## Los colores RGB del hardware brillan demasiado

Potenciamos los colores RGB por defecto, ya que queda mejor en la mayoría de los fondos. Si no le gusta, puede desactivar la opción **«Impulsar colores de LED»** en la configuración del complemento RGB.

## Mi hardware RGB no funciona

Wallpaper Engine no es capaz de comunicarse directamente con su hardware RGB, pues toda la información de los colores se envía antes de los controladores RGB. Si una o más partes del hardware no funcionan, es probable que sea un problema del software del proveedor del hardware. Hay hardware muy antiguo que ya no recibe asistencia de los proveedores, y por eso no funciona. Tenga en cuenta que no podemos solucionar ese tipo de problemas.

Si no puede ver la sección *Complementos* de Wallpaper Engine, es probable que no tenga *Visual C++ Redistributable for Visual Studio 2015* o que esté dañado, y es necesario para que funcionen estas características. Puede descargar el paquete desde la página web de Microsoft e instalarlo. El problema se solucionará tras reiniciar el equipo:

* [Visual C++ Redistributable para Visual Studio 2015](https://www.microsoft.com/download/details.aspx?id=48145)

### Corsair

Hay hardware como las **memorias RAM Corsair que tienen los controles de software deshabilitados por defecto**, lo que significa que sus módulos de memoria no se encenderán de acuerdo con Wallpaper Engine si no le concede los permisos en la configuración de iCUE. Asegúrese de que ha seleccionado la opción «Control de software completo» en la sección de memoria de la configuración de su dispositivo iCUE.

![Enable full software control in iCUE](./icue.png)

Vuelva a comprobar la opción con las demás partes que no funcionen correctamente.

Recuerde que iCUE se usa en *modo exclusivo*, por lo que Wallpaper Engine tendrá prioridad frente al software compatible con iCUE, como por ejemplo, los juegos. Si quiere que los juegos animen el teclado, vaya a la pestaña **Rendimiento** de la configuración de Wallpaper Engine y cambie la opción **Otra aplicación en pantalla completa** a **Detener (liberar memoria)** para detener los fondos mientras juega. Asimismo, puede deshabilitar el complemento RGB o deshabilitar la opción RGB en fondos particulares.

Si necesita asistencia con el hardware iCUE de Corsair, contecta con Corsair directamente:

[help.corsair.com](https://help.corsair.com/)

Should you run into any issues with Corsair's support, you can still reach out to us and we will see if we can help you.

### Razer
We only support Razer Synapse 3 or newer. If you are using Razer Synapse 1 or Razer Synapse 2, make sure to fully uninstall them and upgrade to the latest version of Razer Synapse. In the past, some users had issues with remnants of old Razer Synapse having been left on their system. If you had Razer Synapse 2 or older installed and have issues with your RGB lighting or even experience crashes with the RGB plugin being enabled, you may need to find any leftovers of old Razer Synapse versions on your system and delete it.

If your Razer hardware is relatively old and does not support Razer Synapse 3 or newer, unfortunately its RGB lighting is not compatible with Wallpaper Engine.

For support with Razer hardware, please contact Razer directly:

[support.razer.com](https://support.razer.com/)

Should you run into any issues with Razer's support, you can still reach out to us and we will see if we can help you.