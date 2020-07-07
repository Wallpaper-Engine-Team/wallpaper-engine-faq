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

Ten en cuenta que **Steam se ocupa de todas las descargas**. Wallpaper Engine solo muestra el estado de descarga de Steam, y todos los problemas con las descargas están relacionados con Steam y no con Wallpaper Engine. Esta guía contiene una colección de los problemas más comunes con las descargas, y en muchos de los casos, la causa principal de los problemas son los antivirus o los puertos bloqueados.

Si tienes problemas con las descargas de Steam, comprueba que el antivirus no haya bloqueado Steam y que todos los puertos necesarios están abiertos en el firewall, incluidos los firewall de los routers.

::: tip Puedes comprobar si el router tiene bloqueadas las descargas de Steam si te conectas desde un punto Wi-Fi con su teléfono e intentas descargar un fondo de pantalla. :::

## La descarga se queda a 0 % o 100 % (o cualquier otro porcentaje)
Steam no ha terminado de descargar y verificar los archivos. Si llevas esperando un buen rato y las descargas de Steam no avanzan, sigue los pasos siguientes:

* Borra el caché de las descargas en las opciones de Steam:
  * [Borrar caché de descargas.](https://support.steampowered.com/kb_article.php?ref=3134-TIAL-4638)
* Después verifica los archivos de Wallpaper Engine en Steam:
  * [Verificar los archivos de Wallpaper Engine.](https://support.steampowered.com/kb_article.php?ref=2037-QEUH-3335)
* Si no avanza ninguna descarga: **cierra Steam** y a continuación **borra los contenidos** de este directorio:
  * `C:\Program Files (x86)\Steam\steamapps\workshop\downloads`
    * Si tienes instalado un antivirus, asegúrate de que excluyes este directorio.
    * **Aviso:** `C:\Program Files (x86)\Steam` es la ruta de Steam por defecto. Si lo has instalado en otro directorio, tendrás que comprobar ese.
* Reinicia Steam. No abras ningún juego. Comprueba la pestaña de descargas de Steam para ver el progreso y reinicia las descargas pausadas.

::: details Haz click aquí para ver más soluciones posibles si los pasos anteriores no solucionan el problema con las descargas.
* Comprueba que el antivirus o el firewall no tienen Steam bloqueado. Excluye el directorio entero de Steam en la configuración del antivirus.
* Desuscríbete de los fondos que no puedan descargarse y vuelve a suscribirse después de reiniciar Steam.
* Elige otro servidor de contenido en la configuración de Steam. Encontrarás la opción en la pestaña «Descargas» de la configuración de Steam.
* Comprueba que no has limitado las descargas de Steam en la **configuración de Steam** según la hora, el ancho de banda o mientras juegas.
* Abre la pestaña «Descargas» en Steam (Biblioteca -> Descargas). Busca las descargas pausadas. Si ves alguna, haz clic en «Reanudar».
* Haz clic derecho en Wallpaper Engine en Steam, después haz clic en Propiedades y luego selecciona **Permitir siempre descargas en segundo plano** en la pestaña Actualizaciones.
* Comprueba que no tengas actualizaciones pendientes de juegos en Steam, pues podrían pausar o desactivar las descargas de fondos.
* Espera al menos un día por si los servidores de Steam tuvieran algún problema.
* **Como última opción,** vuelve a instalar Wallpaper Engine para deshacerte de cualquier archivo dañado de Steam (¡se volverán a descargar todos los fondos!). :::

::: tip Los servidores de Steam se desconectan cada semana a una hora concreta por temas de mantenimiento:

* Costa Este de Estados Unidos: **jueves a las 16:00 (UTC -7)**.
* Misma hora en Europa: **miércoles a la 01:00 (UTC+1)**.
* Misma hora en China: **miércoles a las 08:00 (UTC+8)**.

Si estás leyendo el artículo a esa hora, es posible que los servidores no estén conectados. Espera un par de horas y vuelve a intentarlo. :::

## Steam: error «Faltan archivos descargados»

Si Steam no puede descargar algunos archivos, puede que sea culpa del antivirus o por algún motivo completamente al azar. Por lo general, se puede solucionar así:

* Cierra Steam.
* Borra los contenidos de este directorio: `C:\Program Files (x86)\Steam\steamapps\workshop\downloads`.
* Borra los contenidos de este directorio: `C:\Program Files (x86)\Steam\steamapps\downloading\431960`.
  * **Aviso:** `C:\Program Files (x86)\Steam` es la ruta de Steam por defecto. Si lo has instalado en otro directorio, tendrás que comprobar ese.
* Abre Steam y comprueba los archivos de Wallpaper Engine:
  * [Verificar los archivos de Wallpaper Engine.](https://support.steampowered.com/kb_article.php?ref=2037-QEUH-3335)

Si tienes instalado un antivirus: configura una excepción para este directorio para evitar que bloquee las descargas de Steam Workshop: `C:\Program Files (x86)\Steam\steamapps\workshop\downloads`.

#### Artículo relacionado: [Steam vuelve a descargar todos los fondos](/steam/redownload).