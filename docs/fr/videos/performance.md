# La vidéo se fige / saute / est de mauvaise qualité

C'est peut-être dû au fait que votre matériel n'est pas assez puissant pour afficher correctement la vidéo en question. Un fond d'écran vidéo n'est pas comparable à un lecteur vidéo standard, il doit également prendre en compte les icônes et s'étendre potentiellement sur plusieurs écrans. Il utilise également le décodeur vidéo de votre GPU par défaut pour réduire au minimum l'utilisation du processeur.

## Hooks d'enregistrement en arrière-plan
Ce problème peut venir des fonctionnalités des pilotes pour l'enregistrement telles que ReLive, Shadow Play/Nvidia Share ou Windows GameDVR. Essayez de les désactiver et voyez si cela fait une différence, puis excluez-les de Wallpaper Engine. Assurez-vous également qu'aucun autre programme d'enregistrement ne se charge dans Wallpaper Engine, cela peut ralentir les vidéos.

Vous pouvez essayer d'utiliser notre outil d'analyse pour déterminer si des programmes avec des hooks d'enregistrement sont installés, mais il ne pourra pas tout trouver, notamment les hooks d'enregistrement comme ceux fournis avec Nvidia GeForce Experience :

* [Outil d'analyse de Wallpaper Engine](/debug/scantool.html)

## Dynamic Super Resolution (DSR) / GPU Scaling
Driver level hacks like GPU Scaling/DSR could cause issues as well, try disabling them and if that helps, disable them for Wallpaper Engine specifically.

## Bad performance in dwm.exe in systems with multiple GPUs / multiple screens
If you have enabled the integrated GPU on your desktop PC in the BIOS although a dedicated graphics card is installed, you can experience bad performance and high CPU usage of DWM.exe. If possible, do not enable your integrated GPU. **It's very important to plug all your monitors into your dedicated graphics card.** Using both GPUs at the same time will break hardware acceleration of the desktop window manager. Without Nvidia Optimus technology or similar, Windows will be forced to copy the wallpaper image from one GPU to the other - a slow operation. In fact any shared action between your GPUs will suffer from this, it is the same as moving a game window right between both monitors.

This specific issue does not affect hardware built for multi-GPU setups like laptops with Nvidia Optimus or proper Nvidia SLI / AMD Crossfire setups with a hardware bridge.