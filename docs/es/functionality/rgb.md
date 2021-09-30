---
tags:
  - componentes
---

# Compatibilidad con componentes RGB (iCUE y Chroma)

Wallpaper Engine es compatible con [**Razer Chroma**](https://www.razer.com/chroma) y con [**Corsair iCUE**](https://www.corsair.com/icue), además de con los sistemas que se integran en sus ecosistemas.

## Cómo activar / desactivar hardware RGB

En la sección «Complementos» de la configuración de Wallpaper Engine, verás el **componente iCUE y Chroma SDK**. Si marcas la casilla de la izquierda, puedes activar o desactivar el componente general RGB. También puedes hacer clic en el símbolo del engranaje para configurar las partes individuales.

Además, puedes desactivar la compatibilidad RGB en cada fondo. Verás si está activada la opción **«Activar efectos de LED»** en la parte superior de la lista de propiedades de cada fondo, y esto te permite decidir si deseas que un fondo controle las luces RGB o no.

## Los colores RGB del componente brillan demasiado

Potenciamos los colores RGB por defecto, ya que queda mejor en la mayoría de los fondos. Si no te gusta, puedes desactivar la opción **«Impulsar colores de LED»** en la configuración del componente RGB.

## Mi componente RGB no funciona

Wallpaper Engine no es capaz de comunicarse directamente con el componente RGB, pues toda la información de los colores se envía antes a los controladores RGB. Si una o más partes del componente no funcionan, es probable que sea un problema del software del proveedor del componente. Hay componentes muy antiguos que ya no reciben asistencia de los proveedores, y por eso no funcionan. Ten en cuenta que no podemos solucionar ese tipo de problemas.

Si no puedes ver la sección *Complementos* de Wallpaper Engine, es probable que no tengas *Visual C++ Redistributable for Visual Studio 2015* o que esté dañado, y es necesario para que funcionen estas características. Puedes descargar el paquete desde la página web de Microsoft e instalarlo. El problema se solucionará tras reiniciar el equipo:

* [Visual C++ Redistributable para Visual Studio 2015](https://www.microsoft.com/es-es/download/details.aspx?id=48145)

## Problemas con los componentes RGB después de la hibernación

No es lo habitual, pero la hibernación puede provocar que los componentes RGB dejen de funcionar con Wallpaper Engine. Si algunos de tus componentes RGB no funcionan correctamente después de que el sistema hiberne, activa la opción **Inicio seguro después de la hibernación** en la pestaña **General** de los ajustes de Wallpaper Engine. Así suelen resolverse los problemas de la mayoría de usuarios afectados.

Además, también puedes usar la opción **Ralentizar carga de plugin** que se encuentra en la parte inferior de la pestaña **Complementos** de los ajustes de Wallpaper Engine para ralentizar las conexiones del programa con los componentes RGB. Prueba con **30 segundos** para ver si así se soluciona el problema.

### Corsair

Starting with iCUE 4, you need to manually enable software control in the iCUE settings first, otherwise Wallpaper Engine cannot connect to iCUE. If you have any issues with RGB lighting in combination with Corsair iCUE, make sure to check the iCUE settings first.

* Open iCUE.
* Click the Settings icon in the upper right corner.
* Click **Software and Games** on the left menu of the settings window.
* Make sure that the *software integrations* options are enabled. Check the **Devices** tab to make sure all your hardware devices are also enabled for this type of RGB lighting.

If you still have issues with your Corsair lighting setup, try a full reinstallation of your Corsair iCUE software, then restart your computer and reinstall. Many issues can be resolved by reinstalling the Corsair software suite, followed by manually enabling the software integration options.

Note that iCUE is used in *exclusive mode*, this means that Wallpaper Engine will take priority over other iCUE-compatible software such as games. If you want your games to animate your keyboard, go to the **Performance** tab of the Wallpaper Engine settings and set the **Other applications fullscreen** option to **Stop (free memory)** to stop wallpapers while in-game. Alternatively, disable either the RGB plugin or disable the RGB option on individual wallpapers.

For support with Corsair iCUE hardware, please contact Corsair directly:

[help.corsair.com](https://help.corsair.com/)

Should you run into any issues with Corsair's support, you can still reach out to us and we will see if we can help you.

### Razer

Most problems related to Razer RGB hardware can be fixed by doing a clean reinstallation of the Razer software suite while Wallpaper Engine is turned off:

1. Cierra Wallpaper Engine. Es un paso muy importante, así que no te lo saltes.
2. Desinstala todo el software de Razer de tu ordenador utilizando Windows.
3. Vuelve a descargarte la última versión de Razer Synapse 3 e instálala. **Importante:** No te olvides de volver a instalar el módulo **Chroma Connect** en Razer Synapse.
4. Reinicia el ordenador. No abras Wallpaper Engine antes de reiniciar Windows.

See if this resolves your issues with your RGB hardware. For additional support with Razer hardware, please contact Razer directly:

[support.razer.com](https://support.razer.com/)

Should you run into any issues with Razer's support, you can still reach out to us and we will see if we can help you.

#### Razer Synapse 2 y anterior

We only support Razer Synapse 3 or newer. If you are using Razer Synapse 1 or Razer Synapse 2, make sure to fully uninstall them and upgrade to the latest version of Razer Synapse. In the past, some users had issues with remnants of old Razer Synapse having been left on their system. If you had Razer Synapse 2 or older installed and have issues with your RGB lighting or even experience crashes with the RGB plugin being enabled, you may need to find any leftovers of old Razer Synapse versions on your system and delete it.

If your Razer hardware is relatively old and does not support Razer Synapse 3 or newer, unfortunately its RGB lighting is not compatible with Wallpaper Engine.