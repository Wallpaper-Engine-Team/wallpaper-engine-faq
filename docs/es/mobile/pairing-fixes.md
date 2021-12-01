# Solucionar problemas con el emparejamiento del dispositivo

::: tip
¿La conexión no funciona después de hacer todo esto? Ve al final de esta página para ver la solución manual de emergencia para importar fondos por USB u otro método.
:::

Si no puedes emparejar un dispositivo móvil con el ordenador, es posible que sea culpa del firewall o de algún ajuste de la red local. En esta lista verás varios posibles orígenes del problema:

* **Comprueba que el dispositivo y el ordenador estén conectados a la misma red local.**
  * El ordenador no tiene que estar conectado a la wifi, ya que estará en la misma red aunque esté conectado por medio de un cable de red.
* **Comprueba que ningún firewall impida a Wallpaper Engine comunicarse con la red local.**
  * Wallpaper Engine envía una multidifusión en los puertos de red 7884 (UDP) y 7889 (TCP), así que comprueba que no lo bloquea ningún firewall.
* **Desactiva cualquier VPN o programa de proxy que tengas en el ordenador o en el dispositivo móvil que pueda interferir con la comunicación entre los dispositivos.**
* **Comprueba que el enrutador de red no impida a los dispositivos comunicarse entre ellos.**
    * Comprueba que el router no bloquee el tráfico de red entre dispositivos.
    * Activa la opción **UPnP** (**Universal Plug and Play**) en la configuración del router.
* **Comprueba que tanto el Wallpaper Engine de Windows como el del dispositivo móvil estén actualizados y en funcionamiento.**

### Firewall de Windows

Si tu dispositivo móvil encuentra tu ordenador pero no es capaz de conectarse a él, lo más seguro es que sea culpa del firewall o cortafuegos del ordenador. La primera vez que inicies Wallpaper Engine, te pedirá que le des permiso para acceder a tu red. En caso de que hayas cerrado la ventana o no hayas permitido específicamente que **ui32.exe ** pueda comunicarse con tu red, el firewall de Windows bloqueará Wallpaper Engine. Concédele permiso a **ui32.exe** para comunicarse con la red tal y como se muestra en esta captura de pantalla:

![Windows Firewall Permissions](/img/faq/windows_defender.png)

Wallpaper Engine sugerirá automáticamente correcciones del firewall si detecta algún problema. Este proceso suele ser fiable, pero en algunos casos es posible que tengas que borrar manualmente cualquier bloqueo que hayas creado por accidente en el pasado.

Si no le has concedido estos permisos a Wallpaper Engine, el firewall de Windows bloqueará el programa automáticamente. Abre la configuración del firewall de Windows y haz clic en **Permitir que una aplicación o característica a través de Firewall de Windows Defender**. Busca una entrada llamada **ui32** y elimínala o comprueba que ambos símbolos de visto en la columna *Privada* y *Pública* están habilitadas. A continuación, confirma los cambios y reinicia Wallpaper Engine.

Busca **ui32** o **Wallpaper Engine UI**. Es posible que encuentres entradas con el nombre **Wallpaper Engine**, pero son completamente irrelevantes en este caso.

**Aviso:** Esta sección solo se refiere al firewall integrado de Windows, si utilizas cualquier otro antivirus o firewall, tendrás que comprobar que ninguno de ellos está bloqueando Wallpaper Engine.

## Solución de emergencia: Importar un archivo de forma manual (.mpkg)

Si no puede solucionar el problema de la conexión entre el ordenador y el dispositivo móvil, puedes transferir los fondos de forma manual al dispositivo móvil. Primero, elige los fondos que quieras exportar en Wallpaper Engine, haz clic derecho y elige **Enviar a dispositivo móvil** y después haz clic en **Exportar .mpkg**.

<video width="100%" controls autoplay loop>
  <source src="/videos/mobile_export.mp4" type="video/mp4">
  Tu navegador no admite la etiqueta de vídeo.
</video>

Cuando Wallpaper Engine cree los archivos .mpkg de los fondos, podrás transferirlos al dispositivo móvil si le envías los archivos por conexión USB o si los copias en una tarjeta SD. También puedes usar cualquier servicio para compartir archivos en tu dispositivo móvil o enviártelos por algún servicio de mensajería o incluso por correo electrónico (si el tamaño del archivo no es muy grande).

Cuando tengas los archivos en el dispositivo móvil, abre la aplicación de Wallpaper Engine y elige la opción **Importar archivo** para importar los archivos .mpkg en la aplicación desde el directorio en el que los tienes guardados.

::: danger
It is import that you place the .mpkg files in the **Downloads** folder on the mobile device. Android is very restrictive when it comes to letting apps access files. If you cannot find or open the .mpkg files on your device, try placing them in another directory, usually the **Downloads** folder is the most reliable choice for this.
:::