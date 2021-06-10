# Salvapantallas con Wallpaper Engine

Wallpaper Engine te permise usar tus fondos de salvapantallas. Antes, los salvapantallas se usaban para evitar que se quemaran las pantallas por el uso, pero la mayoría de monitores modernos no sufren ese tipo de daños, por lo que puedes usar cualquier fondo que quieras como salvapantallas para que quede bonito. Si usas una pantalla TRC, de plasma, OLED o con alguna tecnología que sí que sea susceptible a los quemados, te recomendamos usar de salvapantallas una lista de reproducción de fondos o un fondo con movimiento normal.

## Instalación del salvapantallas

Para empezar a usar Wallpaper Engine de salvapantallas, deja el cursor sobre la pestaña **Instalados** en la ventana de Wallpaper Engine y selecciona **Configurar salvapantallas**. Wallpaper Engine comprobará si tienes instalado el salvapantallas de Wallpaper Engine para Windows. Si no lo has instalado todavía, el programa te pedirá que lo hagas. Asegúrate de que el usuario de Windows tiene derechos de administrador y de que no haya ningún antivirus que le impida a Wallpaper Engine instalar el salvapantallas.

After the initial installation, the Windows screensaver settings should open automatically, alternatively you can open the settings manually using the **Settings & Preview** button or by directly accessing the screensaver settings via Windows.

## Configurar el salvapantallas

### Configuración en Windows

Para que funcione el salvapantallas de Wallpaper Engine, tendrás que seleccionar Wallpaper Engine como el salvapantallas activo en la **Configuración de Windows**. You can open the Windows screensaver settings through the Windows control panel or by clicking on **Settings & Preview** while in screensaver mode in Wallpaper Engine. See the video below for the necessary steps:

<video width="100%" controls autoplay loop>
  <source src="/videos/screensaver_setup.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

Puedes controlar el tiempo que tarda en aparecer el salvapantallas desde la configuración de Windows y si quieres que te aparezca la pantalla de bloque de Windows o no cuando vuelvas al ordenador. These settings are entirely handled by Windows, Wallpaper Engine itself does not control the screen timeout or similar.

### Wallpaper Engine Configuration

Once you have set up the screensaver in Windows, you can start configuring the Wallpaper Engine screensaver. Hover over the **Installed** tab in Wallpaper Engine and select **Configure Screensaver**. Wallpaper Engine will now preview your screensavers instead of your wallpapers - once you exit screensaver mode, you will return back to your wallpaper configuration.

In its default state, Wallpaper Engine will use the most basic setup where your screensavers are exactly the same as your actively running wallpapers. You can change this by changing the **Screensaver is** option to **Configured separately** at the top. With that option enabled, you can choose a wallpaper for each screen which is to be used as a screensaver or even use a completely different display profile or playlists for your screensaver setup. You can always return to the wallpaper configuration by clicking on the red **Quit** button in the upper left corner.

## Screensaver Problem Solving

The Wallpaper Engine screensaver is activated through Windows itself, if the screensaver is not working correctly, please double-check to see if any of the default Windows screensavers work correctly for you. Check the Windows screensaver settings and your Windows energy settings to make sure that your screensaver is configured with the correct timeout that you expect and that Wallpaper Engine is set as your active screensaver.

The screensaver will be installed in `C:\Windows\System32\wpxscreensaver64.scr`, make sure no antivirus app is deleting this file by mistake or preventing it from being installed. You can also manually uninstall the screensaver by deleting that specific file, but be sure to not delete any other important Windows files in the `System32` directory when doing so.