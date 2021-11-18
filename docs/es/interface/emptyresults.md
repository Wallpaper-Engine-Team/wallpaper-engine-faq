# No aparecen las vistas previas / resultados de búsqueda

Si no puedes ver la vista previa de los fondos sin instalar en Wallpaper Engine, es posible que un cortafuegos o un programa de seguridad impidan que Wallpaper Engine acceda a los servidores de imágenes de Steam.

## Comprueba tu conexión con los servidores de imágenes de Steam

Primero, comprueba si puedes conectarte a los servidores de imágenes de Steam desde tu ordenador. Abre este enlace en tu navegador web para comprobar la conexión:

* [**HAZ CLIC AQUÍ PARA COMPROBAR LOS SERVIDORES DE IMÁGENES DE STEAM**](https://steamuserimages-a.akamaihd.net/ugc/1796366854776537259/C541D485E7156010D92284B082D13A2377FD1F8F/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false)

Al hacer clic en el enlace, deberías ver un **OK** que muestra una **marca de verificación verde**.

### Veo el OK

Si ves el **OK** al hacer clic en el enlace anterior:

* Significa, sin duda alguna, que algún programa de seguridad de tu ordenador bloquea Wallpaper Engine. Configura cualquier antivirus, firewall o programa de aceleración de red para que ignore Wallpaper Engine, en especial el proceso **ui32.exe** que pertenece a Wallpaper Engine.

### No veo el OK

If you did **not** see the **OK** message when clicking the test link above, this means your entire computer or even your entire network is not able to load images from the Steam image servers. Reasons for this can be:

* An antivirus, firewall or network accelerator app is entirely blocking the connection to the Steam image servers for all applications on your computer.
* Your network router is somehow misconfigured. Take a closer look at the firewall settings of your router and other advanced router settings that may play a role here.
    * You can easily test if your router is at fault by connecting your computer to a wifi hotspot through your smartphone. If you start seeing preview images while connected to a mobile wifi hotspot, the problem is definitely in your network router or in the network of your internet service provider.
    * Your internet service provider may also be blocking the Steam image servers or there is a temporary connection issue. This is very rare but it can happen, try again later.