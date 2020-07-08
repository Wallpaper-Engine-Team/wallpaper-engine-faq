---
tags:
  - mdmp
---

# Wallpaper Engine se cuelga

Wallpaper Engine es un software que usan millones de personas y que ha recibido pruebas exhaustivas, por lo que es muy poco frecuente que haya errores que causen que se cuelgue la aplicación. Si el mensaje que te aparece cuando se cuelga el programa menciona archivos **.dll**, verifica la lista siguiente para ver una descripción detallada de **.dll** específicos que pueden causar el problema:

[[toc]]

::: tip Casi todos los informes de errores que recibimos suelen ser por culpa de controladores defectuosos de las tarjetas gráficas, antivirus o algún software que haga que el ordenador esté inestable. :::

## Solución rápida para evitar que Wallpaper Engine se cuelgue

Si desconoces qué es lo que hace que Wallpaper Engine se cuelgue, vuelve a instalar los controladores de la tarjeta gráfica. Es decir, tendrás que desinstalar los controladores y volver a instalar los más recientes cuando se hayan desinstalado por completo los antiguos. Algunos controladores ofrecen la opción de reinstalar desde cero en la sección avanzada, así que asegúrate de activarla para deshacerte de los restos de los controladores defectuosos. Puedes obtener controladores de las tarjetas gráficas más recientes de todos los proveedores principales aquí:

* [Nvidia GeForce](https://www.nvidia.es/Download/index.aspx?lang=es)
* [AMD Radeon](https://www.amd.com/es/support)
* [Intel Graphics](https://downloadcenter.intel.com/product/80939/Graphics-Drivers)

Si tienes un antivirus instalado (no se aplica a Windows Defender), asegúrate de establecer una excepción para Wallpaper Engine en los ajustes de este. A veces es necesario volver a instalar Wallpaper Engine en caso de que el antivirus haya bloqueado ciertos archivos de forma permanente.

Intenta comprobar los archivos de Wallpaper Engine a través de Steam para asegurarte de que no estén corruptos:

* [Steam Support: Verificar la integridad de los archivos del juego](https://support.steampowered.com/kb_article.php?ref=2037-QEUH-3335&l=spanish)

## Wallpaper Engine se ha colgado por culpa de otro programa

### KERNELBASE.dll / ntdll.dll

Se trata de un error que se produce en el propio kernel de Windows por culpa de los antivirus o de los controladores dañados de las tarjetas gráficas. Lee la guía de solución rápida para obtener más información. También puede ocurrir si los componentes del sistema están dañados. Usa la herramienta de Comprobación de archivos del sistema de Microsoft para reparar los archivos dañados de Windows:

* [Comprobación de archivos del sistema de Microsoft](https://support.microsoft.com/es-es/help/929833/use-the-system-file-checker-tool-to-repair-missing-or-corrupted-system)

### d3d11.dll

Se trata de un error que se produce en DirectX por culpa de los antivirus o de los controladores dañados de las tarjetas gráficas. Lee la guía de solución rápida para obtener más información. También puede ocurrir si los componentes del sistema están dañados. Usa la herramienta de Comprobación de archivos del sistema de Microsoft para reparar los archivos dañados de Windows:

* [Comprobación de archivos del sistema de Microsoft](https://support.microsoft.com/es-es/help/929833/use-the-system-file-checker-tool-to-repair-missing-or-corrupted-system)

### mfplat.dll

Se trata de un error en Windows Media Foundation que puede deberse a los controladores dañados de la tarjeta gráfica, pero es más común que suceda por culpa de codecs de vídeo dañados o no encontrados. Sigue las instrucciones de nuestra guía para solucionar este tipo de errores:

[Haz clic aquí.](/noshow/notplaying.html)

### AudioSes.dll

Este caso suele darse por un problema de Windows. Vuelve a instalar la versión más reciente de los controladores de la tarjeta de sonido y puede que se solucione el problema. También puedes solucionar estos programas si cambias la opción *Otra aplicación reproduciendo audio* en la pestaña *Rendimiento* de los ajustes de Wallpaper Engine a *Seguir ejecutándose*.

### atiumdag.dll / atiumd64.dll

* [AMD Radeon](https://www.amd.com/es/support)

::: tip Asegúrate de que has seleccionado la casilla «Realizar instalación limpia» durante la instalación o desinstala todos los controladores primero. Es primordial que te deshagas de los controladores que tienes si están dañados. :::

### nvwgf2umx.dll

Los controladores de Nvidia de tu sistema se cuelgan. Dirígete a la página web de Nvidia, descarga los controladores más recientes e instálalos:

* [Nvidia GeForce](https://www.nvidia.es/Download/index.aspx?lang=es)

::: tip Asegúrate de que has seleccionado la casilla «Realizar instalación limpia» durante la instalación o desinstala todos los controladores primero. Es primordial que te deshagas de los controladores que tienes si están dañados. :::

### igdumd64.dll / igd10umd64.dll / igdumdx32.dll / igd10umd32.dll

Los controladores gráficos de Intel de tu sistema se cuelgan. Dirígete a la página web de Intel, descarga los controladores más recientes e instálalos:

* [Intel Graphics](https://downloadcenter.intel.com/product/80939/Graphics-Drivers)


### MMDEvAPI.dll

Se trata de un error que se produce debido a un programa de sonido dañado que está instalado en el sistema. Suele ocurrir con los programas de «mejora de sonido», sobre todo con aquellos que ya vienen instalados en los portátiles. Este tipo de programas puede ocasionar problemas porque interactúan con Windows causando algún error. Busca «Sonic Studio» o «Nahimic» y actualízalos. Si no encuentras la actualización de dichos programas, puedes desinstalarlos, ya que no son necesarios para que el sonido del ordenador funcione correctamente.

### fraps32.dll

Se trata de un error que se produce por los fotogramas por segundo del monitor y el programa de grabación Fraps, Se trata de un error que se produce por los fotogramas por segundo del monitor y el programa de grabación Fraps, un programa que no ha recibido ninguna actualización desde 2013 y que está completamente obsoleto. Se trata de un error que se produce por los fotogramas por segundo del monitor y el programa de grabación Fraps, un programa que no ha recibido ninguna actualización desde 2013 y que está completamente obsoleto. Utiliza una alternativa, ya que es probable que el error no llegue a solucionarse porque es un programa que ha quedado abandonado.

## Error 0xc000007b

Este error indica que algo de tu sistema ha corrompido un módulo de Windows; por lo general, en este caso, DirectX está dañado. Intenta eliminar estos archivos de forma manual:

* C:\Windows\SysWOW64\d3dx9_43.dll
* C:\Windows\System32\d3dx9_43.dll

Vuelve a instalarlos con el instalador de DirectX 9:*C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\_CommonRedist\DirectX\Jun2010\dxsetup.exe*. (La ubicación exacta depende del lugar en el que esté el directorio de instalación wallpaper_engine).

Si te sigue apareciendo el mismo error es que algo ha dañado a un módulo similar de DirectX. Por lo general, es señal de que tienes un problema mayor con la instalación de Windows que tendrás que solucionar antes de poder usar Wallpaper Engine.

## Se cuelga después de hibernar / suspender

Si Wallpaper Engine se cuelga después de que Windows hiberne quiere decir que Windows no consigue restaurar correctamente los controladores de la tarjeta gráfica y Wallpaper Engine. El proceso de hibernación de Windows no es muy seguro, El proceso de hibernación de Windows no es muy seguro, pero puedes activar la opción **Inicio seguro después de la hibernación** en Wallpaper Engine para paliar el problema. Esta opción intentará reiniciar Wallpaper Engine automáticamente en lugar de esperar que Windows funcione a la perfección tras la hibernación.