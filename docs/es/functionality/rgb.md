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

A partir de iCUE 4, hace falta habilitar manualmente el control de software en la configuración de iCUE. Si no lo haces, Wallpaper Engine no podrá conectarse con iCUE. Si tienes problemas con la iluminación RGB en combinación con Corsair iCUE, comprueba la configuración de iCUE.

* Abre iCUE.
* Haz clic en el icono de Configuración en la esquina superior derecha.
* Haz clic en **Software y juegos** en el menú de la izquierda de la ventana de Configuración.
* Asegúrate de que está habilitada la opción de *integración de software*. Haz clic en la pestaña **Dispositivos** y comprueba que estén habilitados todos tus periféricos para este tipo de iluminación RGB.

Si todavía tienes problemas con la configuración de la iluminación de Corsair, vuelve a instalar Corsair iCUE, reinicia el ordenador e instala el programa de nuevo. Muchos de los problemas se pueden resolver si vuelves a instalar el paquete de software de Corsair y habilitas las opciones de integración del software de forma manual.

Recuerda que iCUE se usa en *modo exclusivo*, por lo que Wallpaper Engine tendrá prioridad frente al software compatible con iCUE, como por ejemplo, los juegos. Si quieres que los juegos animen el teclado, ve a la pestaña **Rendimiento** de la configuración de Wallpaper Engine y cambia la opción **Otra aplicación en pantalla completa** a **Detener (liberar memoria)** para detener los fondos mientras juegas. Asimismo, puedes deshabilitar el complemento RGB o deshabilitar la opción RGB en fondos particulares.

Si necesitas asistencia con los componentes iCUE de Corsair, contacta directamente con Corsair:

[help.corsair.com/hc/es/categories/360001506152-Servicio-al-cliente](https://help.corsair.com/)

Si tienes algún problema con el servicio al cliente de Corsair, ponte en contacto con nosotros y veremos si podemos ayudar.

### Razer

La mayoría de los problemas de los periféricos de RGB de Razer se solucionan al volver a instalar el programa de Razer desde cero mientras tengas Wallpaper Engine cerrado:

1. Cierra Wallpaper Engine. Es un paso muy importante, así que no te lo saltes.
2. Desinstala todo el software de Razer de tu ordenador utilizando Windows.
3. Vuelve a descargarte la última versión de Razer Synapse 3 e instálala. **Importante:** No te olvides de volver a instalar el módulo **Chroma Connect** en Razer Synapse.
4. Reinicia el ordenador. No abras Wallpaper Engine antes de reiniciar Windows.

Comprueba si se han solucionado los problemas con los periféricos RGB. Si necesitas más ayuda con los periféricos de Razer, ponte en contacto con Razer directamente:

[https://support.razer.com/es-es](https://support.razer.com/)

Si tienes algún problema con el servicio al cliente de Razer, ponte en contacto con nosotros y veremos si podemos ayudar.

#### Razer Synapse 2 y anterior

Solo tenemos compatibilidad con Razer Synapse 3 o superior. Si usas Razer Synapse 1 o Razer Synapse 2, asegúrate de desinstalarlos y actualizarlos a la última versión de Razer Synapse. Algunos usuarios han tenido problemas con los restos obsoletos de Razer Synapse que se les habían quedado en el equipo. Si has tenido instalado Razer Synapse 2 o anterior y tienes problemas con las luces RGB o incluso se te cuelga el programa al tener el complemento RBG habilitado, es posible que tengas que encontrar y eliminar restos de versiones obsoletas de Razer Synapse.

Si los componentes de Razer son bastante antiguos y no son compatibles con Razer Synapse 3 o superior, sentimos comunicarte que las funciones RGB no son compatibles con Wallpaper Engine.