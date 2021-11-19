# Emparejar un dispositivo móvil con Windows

Puedes emparejar dispositivos móviles con el ordenador de forma inalámbrica para transferir tu colección de fondos a la aplicación de Wallpaper Engine.

La aplicación de Android no puede descargar los fondos de Workshop directamente debido a las limitaciones técnicas y legales que impiden que la aplicación se conecte directamente a Workshop.

::: tip
Si el emparejamiento no funciona, consulta la sección **Solución de emergencia** al final de esta página para aprender a crear paquetes de fondos para móviles (**.mpkg**) y a importarlos en un dispositivo móvil.
:::

[[toc]]

## 1. Instala la aplicación gratis de Android de Wallpaper Engine

Antes de continuar, instala la versión más reciente de la aplicación de Wallpaper Engine para Android.

Recomendamos instalar la aplicación desde la tienda oficial, pero también puedes descargártela directamente desde nuestra página web. Si quieres los enlaces de descarga o saber más, echa un vistazo a la página de descargas en Android:

* [Descargar Wallpaper Engine para Android](https://www.wallpaperengine.io/android/)

Por razones de seguridad, te aconsejamos no instalar la aplicación desde fuentes que no aparezcan en el listado de nuestra página web.

## 2. Preparar Wallpaper Engine en Windows

Haz clic en el botón de **Dispositivo** que se encuentra en la esquina superior derecha de la interfaz de usuario en el programa de **Windows**  para que aparezca la información general del dispositivo. Haz clic en el botón de **Conectar otro dispositivo** que aparece en la parte inferior. Wallpaper Engine te mostrará un PIN de 4 dígitos que te servirá para emparejar un dispositivo en el próximo paso.

<video width="100%" controls autoplay loop>
  <source src="/videos/mobile_pin.mp4" type="video/mp4">
  Tu navegador no admite la etiqueta de vídeo.
</video>

## 3. Conectar un dispositivo móvil

Pulsa el botón de **Añadir** que aparece en la esquina inferior derecha de la aplicación de Wallpaper Engine y después pulsa **Emparejar con el ordenador**. La aplicación buscará una instancia en ejecución de Wallpaper Engine para Windows en tu red local. Tu ordenador debería de aparecer pasados unos segundos y, si lo pulsas, podrás conectarte a él. Si es la primera vez que te conectas, tendrás que introducir un PIN de 4 dígitos (consulta el apartado anterior de Windows).

<video height="590px" style="display:block;margin:0 auto;" controls autoplay loop>
  <source src="/videos/mobile_connect.mp4" type="video/mp4">
  Tu navegador no admite la etiqueta de vídeo.
</video>

Cuando hayas introducido el PIN, la barra de estado de la aplicación móvil se pondrá verde y mostrará a qué ordenador se ha conectado. Además, el botón **Dispositivo** del programa de Windows también aparecerá en verde para indicar que hay una conexión móvil activa.

Por defecto, Wallpaper Engine se conectará siempre automáticamente a tu ordenador si inicias Wallpaper Engine en el dispositivo móvil y en el ordenador al mismo tiempo.

## 4. Transferir fondos al dispositivo móvil

Cuando se establezca la conexión, el botón de **Dispositivo** que se encuentra en la esquina superior derecha se pondrá de color verde.

Ahora solo tienes que hacer clic en el botón **Enviar a dispositivo móvil** que se encuentra en el lado derecho o hacer clic con el botón derecho en cualquier fondo compatible y seleccionar **Enviar a dispositivo móvil**, para después seleccionar tu dispositivo en la lista.

#### Fondos de escena

Dynamic and interactive wallpapers that are of the **Scene** type will first be optimized for use on mobile phones and to ensure compatibility with mobile hardware. This process may take a short while. You will also be asked which quality option you would like to use, especially for high-resolution wallpapers, we recommend trying the **Balanced** option if you notice performance issues on your mobile device.

<video width="100%" controls autoplay loop>
  <source src="/videos/mobile_transfer.mp4" type="video/mp4">
  Tu navegador no admite la etiqueta de vídeo.
</video>

::: tip
You can also transfer multiple wallpapers at the same time by clicking on multiple wallpapers while holding the CTRL key on your keyboard.
:::

## Solucionar problemas con el emparejamiento del dispositivo

Si no puedes emparejar un dispositivo móvil con el ordenador, es posible que sea culpa del firewall o de algún ajuste de la red local. En esta lista verás varios posibles orígenes del problema:

* Comprueba que el dispositivo y el ordenador estén conectados a la misma red local.
* Comprueba que ningún firewall impida a Wallpaper Engine comunicarse con la red local.
* Comprueba que el enrutador de red no impida a los dispositivos comunicarse entre ellos.
    * Make sure your router is not blocking network traffic between devices.
    * Turn on **UPnP** (**"Universal Plug and Play"**) in your router settings.
* Desactiva cualquier VPN o programa de proxy que tengas en el ordenador o en el dispositivo móvil que pueda interferir con la comunicación entre los dispositivos.
* Comprueba que tanto el Wallpaper Engine de Windows como el del dispositivo móvil estén actualizados y en funcionamiento.

### Solución de emergencia: Importar un archivo de forma manual (.mpkg)

Si no puede solucionar el problema de la conexión entre el ordenador y el dispositivo móvil, puedes transferir los fondos de forma manual al dispositivo móvil. Primero, elige los fondos que quieras exportar en Wallpaper Engine, haz clic derecho y elige **Enviar a dispositivo móvil** y después haz clic en **Exportar .mpkg**.

<video width="100%" controls autoplay loop>
  <source src="/videos/mobile_export.mp4" type="video/mp4">
  Tu navegador no admite la etiqueta de vídeo.
</video>

Cuando Wallpaper Engine cree los archivos .mpkg de los fondos, podrás transferirlos al dispositivo móvil si le envías los archivos por conexión USB o si los copias en una tarjeta SD. También puedes usar cualquier servicio para compartir archivos en tu dispositivo móvil o enviártelos por algún servicio de mensajería o incluso por correo electrónico (si el tamaño del archivo no es muy grande).

Cuando tengas los archivos en el dispositivo móvil, abre la aplicación de Wallpaper Engine y elige la opción **Importar archivo** para importar los archivos .mpkg en la aplicación desde el directorio en el que los tienes guardados.