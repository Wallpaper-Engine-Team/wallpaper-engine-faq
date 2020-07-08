---
tags:
  - componentes
---

# Compatibilidad con componentes RGB (iCUE y Chroma)

Wallpaper Engine es compatible con [**Razer Chroma**](https://www.razer.com/chroma) y con[ **Corsair iCUE**](https://www.corsair.com/icue), además de con los sistemas que se integran en sus ecosistemas.

## Cómo activar / desactivar hardware RGB

En la sección «Complementos» de la configuración de Wallpaper Engine, verás el **componente iCUE y Chroma SDK**. Si marcas la casilla de la izquierda, puedes activar o desactivar el componente general RGB. También puedes hacer clic en el símbolo del engranaje para configurar las partes individuales.

Además, puedes desactivar la compatibilidad RGB en cada fondo. Verás si está activada la opción **«Activar efectos de LED»** en la parte superior de la lista de propiedades de cada fondo, y esto te permite decidir si deseas que un fondo controle las luces RGB o no.

## Los colores RGB del componente brillan demasiado

Potenciamos los colores RGB por defecto, ya que queda mejor en la mayoría de los fondos. Si no te gusta, puedes desactivar la opción **«Impulsar colores de LED»** en la configuración del componente RGB.

## Mi hardware RGB no funciona

Wallpaper Engine no es capaz de comunicarse directamente con el componente RGB, pues toda la información de los colores se envía antes a los controladores RGB. Si una o más partes del componente no funcionan, es probable que sea un problema del software del proveedor del componente. Hay componentes muy antiguos que ya no reciben asistencia de los proveedores, y por eso no funcionan. Ten en cuenta que no podemos solucionar ese tipo de problemas.

Si no puedes ver la sección *Complementos* de Wallpaper Engine, es probable que no tengas *Visual C++ Redistributable for Visual Studio 2015* o que esté dañado, y es necesario para que funcionen estas características. Puedes descargar el paquete desde la página web de Microsoft e instalarlo. El problema se solucionará tras reiniciar el equipo:

* [Visual C++ Redistributable para Visual Studio 2015](https://www.microsoft.com/es-es/download/details.aspx?id=48145)

### Corsair

Hay componentes como las **memorias RAM Corsair que tienen los controles de software deshabilitados por defecto**, lo que significa que sus módulos de memoria no se encenderán de acuerdo con Wallpaper Engine si no le concedes los permisos en la configuración de iCUE. Asegúrate de que has seleccionado la opción «Control de software completo» en la sección de memoria de la configuración de su dispositivo iCUE.

![Habilitar control de software completo en iCUE](./icue.png)

Vuelve a comprobar la opción con las demás partes que no funcionen correctamente.

Recuerda que iCUE se usa en *modo exclusivo*, por lo que Wallpaper Engine tendrá prioridad frente al software compatible con iCUE, como por ejemplo, los juegos. Si quieres que los juegos animen el teclado, ve a la pestaña **Rendimiento** de la configuración de Wallpaper Engine y cambia la opción **Otra aplicación en pantalla completa** a **Detener (liberar memoria)** para detener los fondos mientras juegas. Asimismo, puedes deshabilitar el complemento RGB o deshabilitar la opción RGB en fondos particulares.

Si necesitas asistencia con los componentes iCUE de Corsair, contacta directamente con Corsair:

[help.corsair.com/hc/es/categories/360001506152-Servicio-al-cliente](https://help.corsair.com/hc/es/categories/360001506152-Servicio-al-cliente/)

Si tienes algún problema con el servicio al cliente de Corsair, ponte en contacto con nosotros y veremos si podemos ayudar.

### Razer
Solo tenemos compatibilidad con Razer Synapse 3 o superior. Si usas Razer Synapse 1 o Razer Synapse 2, asegúrate de desinstalarlos y actualizarlos a la última versión de Razer Synapse. Algunos usuarios han tenido problemas con los restos obsoletos de Razer Synapse que se les habían quedado en el equipo. Si has tenido instalado Razer Synapse 2 o anterior y tienes problemas con las luces RGB o incluso se te cuelga el programa al tener el complemento RBG habilitado, es posible que tengas que encontrar y eliminar restos de versiones obsoletas de Razer Synapse.

Si los componentes de Razer son bastante antiguos y no son compatibles con Razer Synapse 3 o superior, sentimos comunicarte que las funciones RGB no son compatibles con Wallpaper Engine.

Si necesitas asistencia con los componentes de Razer, contacta directamente con Razer:

[https://support.razer.com/es-es](https://https://support.razer.com/es-es/)

Si tienes algún problema con el servicio al cliente de Razer, ponte en contacto con nosotros y veremos si podemos ayudar.