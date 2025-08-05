# 32-Bit & 64-Bit Version

We recommend using the 64-bit version of Wallpaper Engine since the 64-bit version can handle larger files (more than 2GB). Other than that, the two versions are the same and also deliver the same level of visual fidelity and performance.

In rare cases, switching to the 32-bit version may help you resolve issues with broken 64-bit Windows components, drivers, video codec packs and other app incompatibilities. This may help you fix specific Wallpaper Engine problems without resolving the underlying issue on your system.

**Please Note:** *"Web"*-type wallpapers will always be executed with a 32-bit executable *(webwallpaper32.exe)*. The same applies to the user interface of Wallpaper Engine *(ui32.exe)*. The 64-bit option only applies when selecting wallpapers of the type *"Scene"* or *"Video"*.

## How to set-up Wallpaper Engine to automatically start with either the 32 or 64 Bit version when Windows launches?

First, completely turn off Wallpaper Engine via the tray icon (right-click on the Wallpaper Engine icon in the Windows tray, then select "Quit"). Do not skip this step, as Steam will otherwise not restart Wallpaper Engine and only bring the already running version to the foreground.

Once Wallpaper Engine is turned off, go to Steam and start either the 32-bit or 64-bit version, depending on which version you want to automatically start. Next, go to the Wallpaper Engine settings and at the top of the "General" tab, enable the automatic startup functionality. If it is already enabled, turn it off completely and then turn it back on. This will register the current version as the one which will be automatically started alongside Windows.