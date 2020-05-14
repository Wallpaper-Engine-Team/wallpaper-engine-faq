# Wallpaper Engine window not displayed correctly

::: warning Please note
This section is about the Wallpaper Engine **interface** being black or broken. If your **wallpapers are black** you need to go here: [Black Screen / Videos not Playing](/noshow/notplaying.html).
:::

## Wallpaper Engine User Interface is Black or White

### Antivirus Application Blocking the Wallpaper Engine Interface

For most people, this means that the Wallpaper Engine user interface is being blocked by an antivirus application by mistake. Make sure to set up an exception in your antivirus application so that it ignores Wallpaper Engine, specifically all executables in the wallpaper_engine installation directory and especially **wallpaper_engine/bin/ui32.exe**.

In some cases, it is necessary to verify the Wallpaper Engine files afterwards or even to re-install Wallpaper Engine if your antivirus application has placed a permanent lock on some important Wallpaper Engine files:

* [Steam Support: Verify Integrity of Application Files](https://support.steampowered.com/kb_article.php?ref=2037-QEUH-3335)

If the verification through Steam does not fix this issue after you have configured your antivirus application, try to re-install Wallpaper Engine through Steam. If your antivirus has gone berserk, it might even have permanently blocked the filepaths used by Wallpaper Engine. In that case make sure to uninstall the antivirus first and then install Wallpaper Engine into a different directory, you can choose to create a new Steam games library in Steam for this.

### Rare Steam Overlay Bug Breaking Wallpaper Engine User Interface

The other possible reason for a black application window is a rare Steam bug with the Steam overlay. You can try the following:

Turn off Wallpaper Engine completely (right-click on the tray icon and then select "Quit"). Afterwards, open up Steam, right-click on Wallpaper Engine, select "Properties" and then disable the "Enable Steam Overlay while in-game" option. After disabling the option, try to restart Wallpaper Engine via Steam. 

## Wallpaper Engine interface with green artifacts or white lines

Your graphics card drivers are broken or misconfigured. Download the latest drivers for your graphics cards (even if you already have the latest drivers) and perform a clean re-installation of the drivers. Is is important that you first uninstall your current drivers and then install the latest drivers to ensure any broken files or settings are removed.

If the problem persists, turn off Wallpaper Engine. Then re-launch Wallpaper Engine using the third launch option in Steam labeled "disable UI hardware acceleration".