# Desktops with Integrated and Dedicated GPU Perform Poorly (dwm.exe) 

If you enabled the integrated GPU on your desktop PC in the BIOS although a dedicated GPU is installed, you may experience bad performance and high CPU usage of *dwm.exe*. If possible, do not enable your integrated GPU and plug your monitors into your dedicated GPU. Using both independent graphics solutions at the same time will break hardware acceleration of the desktop window manager, it's important that all monitors are plugged into your main graphics card. This is not a bug or issue in Wallpaper Engine, it is problem that affects all mulit-monitor software with hardware setups where not all monitors are plugged into the main graphics card.

Without Nvidia Optimus technology or similar, Windows will be forced to copy the wallpaper image from one GPU to the other - a very slow operation. In fact any shared action between your GPUs will suffer from this, it is the same as moving a game window right between both monitors.

This is unrelated to hardware built for multi-GPU setups like Nvidia Optimus laptops or SLI/Crossfire. They have a physical solution to make this work correctly. 