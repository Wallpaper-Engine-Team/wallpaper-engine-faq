---
tags:
  - inactividad
  - servidor
  - descargas
  - progreso
  - workshop
  - conexión
---

# Problemas con la descarga de fondos de Steam

Tenga en cuenta que **Steam se ocupa de todas las descargas**. Wallapaper Engine solo muestra el estado de descarga de Steam, y todos los problemas con las descargas están relacionados con Steam y no con Wallpaper Engine. Esta guía contiene una colección de los problemas más comunes con las descargas, y en muchos de los casos, la causa principal de los problemas con los antivirus o los puertos bloqueados.

Si tiene problemas con las descargas de Steam, compruebe que el antivirus no haya bloqueado Steam y que todos los puertos necesarios están abiertos en el firewall, incluidos los firewall de los routers.

::: consejo Puede comprobar si el router tiene bloqueadas las descargas de Steam si se conecta desde un punto Wi-Fi con su teléfono e intenta descargar un fondo de pantalla. :::

## La descarga se queda a 0 % o 100 % (o cualquier otro porcentaje)
Steam no ha terminado de descargar y verificar los archivos. Si lleva esperando un buen rato y las descargas de Steam no avanzan, siga los pasos siguientes:

* Borre el caché de las descargas en las opciones de Steam:
  * [Borrar caché de descargas.](https://support.steampowered.com/kb_article.php?ref=3134-TIAL-4638)
* Después verifique los archivos de Wallpaper Engine en Steam:
  * [Verificar los archivos de Wallpaper Engine.](https://support.steampowered.com/kb_article.php?ref=2037-QEUH-3335)
* Si no avanza ninguna descarga: **cierre Steam** y a continuación **borre los contenidos** de este directorio:
  * `C:\Program Files (x86)\Steam\steamapps\workshop\downloads`
    * Si tiene instalado un antivirus, asegúrese de que excluye este directorio.
    * **Aviso:** `C:\Program Files (x86)\Steam` es la ruta de Steam por defecto. Si lo ha instalado en otro directorio, tendrá que comprobar ese.
* Reinicie Steam. No abra ningún juego. Compruebe la pestaña de descargas de Steam para ver el progreso y reinicie las descargas pausadas.

::: detalles Haga click aquí para ver más soluciones posibles si los pasos anteriores no solucionan el problema con las descargas.
* Compruebe que el antivirus o el firewall no tienen Steam bloqueado. Excluya el directorio entero de Steam en la configuración del antivirus.
* Desuscríbase de los fondos que no puedan descargarse y vuelva a suscribirse después de reiniciar Steam.
* Elija otro servidor de contenido en la configuración de Steam. Encontrará la opción en la pestaña «Descargas» de la configuración de Steam.
* Compruebe que no ha limitado las descargas de Steam en la **configuración de Steam** según la hora, el ancho de banda o mientras juega.
* Abra la pestaña «Descargas» en Steam (Biblioteca -> Descargas). Busque las descargas pausadas. Si ve alguna, haga clic en «Reanudar».
* Right-click Wallpaper Engine in Steam, then Properties, then select **Allow Background Downloads**.
* Compruebe que no tenga actualizaciones pendientes de juegos en Steam, pues podrían pausar o desactivar las descargas de fondos.
* Espere al menos un día, por si los servidores de Steam tuvieran algún problema.
* **Como última opción,** vuelva a instalar Wallpaper Engine para deshacerse de cualquier archivo dañado de Steam (¡se volverán a descargar todos los fondos!). :::

::: consejo Los servidores de Steam se desconectan cada semana a una hora concreta por temas de mantenimiento:

* Costa Este de Estados Unidos: **jueves a las 16:00 (UTC -7)**.
* Misma hora en Europa: **miércoles a la 01:00 (UTC+1)**.
* Misma hora en China: **miércoles a las 08:00 (UTC+8)**.

Si está leyendo el artículo a esa hora, es posible que los servidores no estén conectados. Espere un par de horas y vuelva a intentarlo. :::

## Steam: "Missing Downloaded Files" error

Steam is unable to download some files, this can be due to anti-virus applications blocking Steam or just absolutely random. It can usually be fixed this way:

* Turn off Steam.
* Delete the contents of this directory: `C:\Program Files (x86)\Steam\steamapps\workshop\downloads`
* Delete the contents of this directory: `C:\Program Files (x86)\Steam\steamapps\downloading\431960`
  * **Note:** `C:\Program Files (x86)\Steam` is the default Steam path, if you have installed it somewhere else, check there.
* Start Steam and verify the Wallpaper Engine files:
  * [Verify Wallpaper Engine files](https://support.steampowered.com/kb_article.php?ref=2037-QEUH-3335)

If you have an antivirus-app installed: Configure an exception for this directory to prevent it from blocking Steam's Workshop downloads: `C:\Program Files (x86)\Steam\steamapps\workshop\downloads`

#### Related article: [Steam re-downloading all wallpapers](/steam/redownload)