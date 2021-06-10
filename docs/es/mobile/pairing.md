# Emparejar un dispositivo móvil con Windows

Puedes emparejar dispositivos móviles con el ordenador de forma inalámbrica para transferir tu colección de fondos a la aplicación de Wallpaper Engine. La aplicación de Android no puede descargarse fondos directamente desde Steam Workshop porque eso tiene que hacerlo Steam directamente.

Si tienes algún problema al emparejar los dispositivos móviles, puedes importar los fondos de forma manual si exportas el archivo **.mpkg** que utiliza la aplicación móvil de Wallpaper Engine para renderizar los fondos.

### Preparar Wallpaper Engine en Windows

Haz clic en el botón de **Dispositivo** que se encuentra en la esquina superior derecha de la interfaz de usuario en el programa de **Windows**  para que aparezca la información general del dispositivo. Haz clic en el botón de **Conectar otro dispositivo** que aparece en la parte inferior. Wallpaper Engine te mostrará un PIN de 4 dígitos que te servirá para emparejar un dispositivo.

![PIN móvil](/img/faq/mobile_pin.gif)

### Conectar un dispositivo móvil

Pulsa el botón de **Añadir** que aparece en la esquina inferior derecha de la aplicación de Wallpaper Engine y después pulsa **Emparejar con el ordenador**. La aplicación buscará una instancia en ejecución de Wallpaper Engine para Windows en tu red local. Tu ordenador debería de aparecer pasados unos segundos y, si lo pulsas, podrás conectarte a él. Si es la primera vez que te conectas, tendrás que introducir un PIN de 4 dígitos (consulta el apartado anterior de Windows). El PIN es una medida de seguridad adicional para que los usuarios no autorizados no puedan conectarse a tu ordenador sin que tú lo sepas.

Cuando hayas introducido el PIN, la barra de estado de la aplicación móvil se pondrá verde y mostrará a qué ordenador se ha conectado. Además, el botón **Dispositivo** del programa de Windows también aparecerá en verde para indicar que hay una conexión móvil activa.

![PIN móvil](/img/faq/mobile_pair.gif)

## Solucionar problemas con el emparejamiento del dispositivo

Si no puedes emparejar un dispositivo móvil con el ordenador, es posible que sea culpa del firewall o de algún ajuste de la red local. En esta lista verás varios posibles orígenes del problema:

* Comprueba que el dispositivo y el ordenador estén conectados a la misma red local.
* Comprueba que ningún firewall impida a Wallpaper Engine comunicarse con la red local.
* Comprueba que el enrutador de red no impida a los dispositivos comunicarse entre ellos.
* Desactiva cualquier VPN o programa de proxy que tengas en el ordenador o en el dispositivo móvil que pueda interferir con la comunicación entre los dispositivos.
* Comprueba que tanto el Wallpaper Engine de Windows como el del dispositivo móvil estén actualizados y en funcionamiento.

## Solución de emergencia: Importar un archivo de forma manual (.mpkg)

Si no puede solucionar el problema de la conexión entre el ordenador y el dispositivo móvil, puedes transferir los fondos de forma manual al dispositivo móvil. First, select the wallpapers you want to export in Wallpaper Engine, then right-click on them and select **Send to Mobile Device**, followed by clicking on **Export .mpkg**.

Once Wallpaper Engine has created the .mpkg files for your wallpapers, you can either transfer them to your mobile device by moving the files onto your mobile device via USB or by copying the files onto an SD card. Alternatively you can also use any file sharing service on your mobile device or send them to yourself via a messaging service or even via email (if the file size is not a problem).

Once the files are on your mobile device, open up Wallpaper Engine on your mobile device and use the **Import File** functionality to directly import the .mpkg files into the app by selecting them from the directory that you have placed them in.