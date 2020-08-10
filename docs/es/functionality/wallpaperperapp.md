# Seleccionar fondos por cada aplicación

Wallpaper Engine te permite usar fondos de pantalla distintos de forma automática cuando se abre un .exe en concreto en el equipo. Puede ser útil, por ejemplo, si quieres tener fondos que distraigan menos cuando juegas a un juego o si quieres abrir un visualizador de audio al abrir el reproductor de música.

::: tip
Si tienes problemas técnicos con algunos juegos o aplicaciones, puedes hacer uso de las reglas de aplicación para desactivar Wallpaper Engine al abrir un .exe en concreto. Si quieres resolver un problema técnico con otra aplicación, puedes echar un vistazo a esta guía: [Solucionar problemas con ciertos programas o juegos](/functionality/applicationrules.html)
:::

## Establecer una regla de aplicación

En la pestaña **Rendimiento** de los ajustes de Wallpaper Engine, haz clic en el botón **Editar** en la sección de **Reglas de aplicación**. Haz clic en **Crear nueva regla** para configurar otros fondos de pantalla para el .exe que elijas. In the **Application name** input field, enter the name of your .exe, make sure the name matches exactly, for example *musicplayer.exe*. Set the **Condition** to **Is running**. In the **Wallpaper playback** option you can select one of the following options:

* Load wallpaper
* Load playlist
* Load profile

What is important to note here is that **Load wallpaper** and **Load playlist** will both only load one wallpaper and span it across all screens. If you have multiple monitors and want to load independent wallpapers for each screen (or even different playlists on each screen), you need to use the **Load Profile** option. Read the following section for more infos on how to set this up.

### Setting up a multi-monitor profile

**Load Profile** in the application rules refers to mulit-monitor profiles which can be configured in the monitor overview (screen icon in the upper right corner of the interface). A profile is a snapshot of all your currently selected wallpapers and playlists across all your screens. Whenever a profile is loaded, all wallpapers and playlists will be placed according to the profile configuration.

Configure your wallpapers and playlists across all monitors the the way you want them to be, then click on the **Save profile** button in the monitor settings and save the current setup under a name of your choice. Keep in mind that any subsequent changes you make to your setup will not change the profile until you use the **Save profile** button again. You can set up multiple profiles and assign them to multiple apps at once. For example, you may create a **Music**, a **Gaming** and a **Movies** profile and then assign each profile to all .exe files that match these categories.

<video width="100%" controls autplay loop>
  <source src="/videos/apprules.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>