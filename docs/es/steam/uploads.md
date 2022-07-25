# Las subidas se quedan al 45 %

Steam empieza a subir archivos a los servidores cuando la subida llega al 45 %. Si intentas publicar contenido de Wallpaper Engine en Steam Workshop y la descarga no pasa del 45 % significa que Steam no puede subir los archivos a los servidores de Steam. Asegúrate de que no hay ningún antivirus ni firewall que impida a Steam subir archivos. Consulta la guía oficial de Steam acerca de los puertos de red:

* [Puertos requeridos por Steam.](https://support.steampowered.com/kb_article.php?ref=8571-GLVN-8711)

Este problema siempre está relacionado con algún problema de red, así que tendrás que descubrir qué es lo que impide que Steam se comunique con los servidores de Steam.

Also make sure that your router or a firewall is not blocking the IP address range of the Steam servers, make sure that direct IP connections are possible. Exclude the following IP address range from any block list: `208.64.200.0` - `208.64.203.255`.

::: tip
This network issue can also be caused by a firewall in your network router. Make sure that no network router is blocking Steam's upload. Try If  uploads work through a mobile wi-fi hotspot - in that case your router is likely at fault and not any software on your computer.
:::