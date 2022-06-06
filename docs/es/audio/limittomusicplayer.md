# Limitar visualizadores de audio a los reproductores de música

Debido al funcionamiento del sonido en Windows, a Wallpaper Engine le resulta imposible limitar los visualizadores de audio al reproductor de música que elijas. Sin embargo, puedes usar una aplicación de terceros para crear un dispositivo de sonido *falso* para hacerlo. En esta guía te explicaremos una forma para crear el dispositivo falso y cómo configurar Windows 10 y Wallpaper Engine para que funcione.

Ten en cuenta que no ofrecemos asistencia para los dispositivos de audio falsos y no podemos garantizar que el método vaya a funcionar: es un proceso muy avanzado que va mucho más allá de lo que ofrece Wallpaper Engine. Hemos hecho esta guía únicamente para ayudar a aquellos usuarios que quieren ir un paso más allá a la hora de personalizar sus equipos.

::: warning
¡Aviso!
Esta guía solo funciona con las versiones actualizadas de Windows 10. Es posible que las versiones antiguas no cuenten con algunas de las funciones, por lo que sería imposible seguirla. 
:::

### Instalar un dispositivo de audio falso

Te recomendamos utillizar **VB-CABLE Virtual Audio Device**, que es gratis y puedes descargarlo en esta página web:

* [Descargar Virtual Audio Device](https://www.vb-audio.com/Cable/)

Descarga el archivo, descomprímelo e instala la versión 32-Bit o 64-Bit, dependiendo de la versión de Windows 10 que tengas, con **VBCABLE_Setup.exe** o **VBCABLE_Setup_x64.exe**. Asegúrate de iniciar el instalador como administrador: haz clic derecho y selecciona *Ejecutar como administrador*. Sigue las instrucciones y asegúrate de que el dispositivo de audio se ha instalado correctamente.

### Configurar Windows y Wallpaper Engine

Si necesitas ayuda con los pasos siguientes, puedes ver el vídeo que los muestra uno a uno de principio a fin en Windows 10 (con interfaz inglesa).

1. Reproduce música con el programa que quieres usar con Wallpaper Engine.
2. Haz clic derecho en el icono de sonido junto al reloj en el área de notificación de Windows y selecciona **Abrir Configuración de sonido**.
3. Baja hasta el final de la página que se abrirá y pulsa en **Preferencias de dispositivo y volumen de la aplicación**.
4. Se mostrará una lista de todas las aplicaciones que reproducen audio. Busca el reproductor de música en la columna **Salida** y cambia la opción de **Predeterminado** a **CABLE Input (VB-Audio Virtual Cable)**. El reproductor debería dejar de escucharse inmediatamente, pero es lo habitual.
5. Vuelve a la página principal de la configuración de sonido de Windows y selecciona **Panel de control de sonido** en la esquina superior derecha.
6. Aparecerá una ventana pequeña. Dirígete a la pestaña de **Grabar**, haz clic derecho en el dispositivo de audio **CABLE Output** y selecciona **Propiedades**.
7. Aparecerá otra ventana. Haz clic en la pestaña **Escuchar** y selecciona **Escuchar este dispositivo**. Pulsa **Aplicar** y luego **Aceptar**: debería volver la música del reproductor.
8. Windows debería de estar configurado correctamente, así que abre los **ajustes de Wallpaper Engine** y cambia la **Entrada de audio** en la pestaña **General** a **CABLE Input (VB-Audio Virtual Cable)**. Ahora Wallpaper Engine debería de empezar a reaccionar con la música del reproductor de música, pero ignorará el resto de aplicaciones del equipo.

*Vídeo que muestra los pasos descritos anteriormente:*

<video width="100%" controls>
  <source src="/videos/audioinputdevice.mp4" type="video/mp4">
  Tu navegador no admite la etiqueta de vídeo.
</video>
