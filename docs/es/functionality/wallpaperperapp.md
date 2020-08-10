# Seleccionar fondos por cada aplicación

Wallpaper Engine te permite usar fondos de pantalla distintos de forma automática cuando se abre un .exe en concreto en el equipo. Puede ser útil, por ejemplo, si quieres tener fondos que distraigan menos cuando juegas a un juego o si quieres abrir un visualizador de audio al abrir el reproductor de música.

::: tip
Si tienes problemas técnicos con algunos juegos o aplicaciones, puedes hacer uso de las reglas de aplicación para desactivar Wallpaper Engine al abrir un .exe en concreto. Si quieres resolver un problema técnico con otra aplicación, puedes echar un vistazo a esta guía: [Solucionar problemas con ciertos programas o juegos](/functionality/applicationrules.html)
:::

## Establecer una regla de aplicación

En la pestaña **Rendimiento** de los ajustes de Wallpaper Engine, haz clic en el botón **Editar** en la sección de **Reglas de aplicación**. Haz clic en **Crear nueva regla** para configurar otros fondos de pantalla para el .exe que elijas. Escribe el nombre del .exe en **Nombre de la aplicación** y asegúrate de que coincide exactamente con el nombre original. Por ejemplo: *musicplayer.exe*. Cambia la **Condición** a **Se está ejecutando**. Puedes elegir una de estas opciones en **Reproducción de fondos**:

* Cargar fondo
* Cargar lista de reproducción
* Cargar perfil

Lo que importante a tener en cuenta es que **Cargar fondo** y **Cargar lista de reproducción** solamente cargarán un fondo y lo mostrarán en todas las pantallas. Si tienes varios monitores y quieres tener fondos independientes para cada pantalla (o incluso listas de reproducción distintas en cada pantalla), tendrás que usar la opción **Cargar perfil**. Lee la sección siguiente para saber cómo realizar dicha configuración.

### Configurar un perfil con varios monitores

**Load Profile** in the application rules refers to mulit-monitor profiles which can be configured in the monitor overview (screen icon in the upper right corner of the interface). A profile is a snapshot of all your currently selected wallpapers and playlists across all your screens. Whenever a profile is loaded, all wallpapers and playlists will be placed according to the profile configuration.

Configure your wallpapers and playlists across all monitors the the way you want them to be, then click on the **Save profile** button in the monitor settings and save the current setup under a name of your choice. Keep in mind that any subsequent changes you make to your setup will not change the profile until you use the **Save profile** button again. You can set up multiple profiles and assign them to multiple apps at once. For example, you may create a **Music**, a **Gaming** and a **Movies** profile and then assign each profile to all .exe files that match these categories.

<video width="100%" controls autplay loop>
  <source src="/videos/apprules.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>