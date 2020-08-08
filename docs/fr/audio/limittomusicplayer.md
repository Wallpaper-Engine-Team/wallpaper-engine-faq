# Limiter les visualiseurs audio aux lecteurs de musique

À cause du fonctionnement audio de Windows, Wallpaper Engine ne peut pas lui-même limiter les visualiseurs audio du lecteur de musique de votre choix. Cependant, vous pouvez utiliser un logiciel tiers pour créer un *faux* appareil audio pour y parvenir. Ce guide vous décrira une façon de créer ce genre de faux appareil audio et comment configurer Windows 10 et Wallpaper Engine pour que cette installation fonctionne correctement.

N'oubliez pas que nous ne prenons en charge aucun faux appareil audio et que nous ne pouvons pas vous garantir que cela fonctionnera. Ceci est une installation très avancée qui va bien au-delà de ce qu'offre Wallpaper Engine. Nous ne proposons ce guide que pour aider les utilisateurs qui veulent pousser la personnalisation de leur système encore plus loin.

::: Attention Ce guide ne fonctionne que sur les versions mises à jour de Windows 10. Des versions Windows plus anciennes ne comportent pas toutes les fonctionnalités nécessaires pour suivre ce guide.
:::

### Install a fake audio device

We recommend using the free **VB-CABLE Virtual Audio Device** which you can download at the following website:

* [Virtual Audio Device Download](https://www.vb-audio.com/Cable/)

Download and extract the archive file, then install either the 32-Bit or 64-Bit audio device depending on your Windows 10 version using either **VBCABLE_Setup.exe** or **VBCABLE_Setup_x64.exe**. Be sure to launch the setup file with administrator rights by right-clicking and then selecting *Run as administrator*. Follow the instructions of the setup and make sure the audio device has been installed successfully.

### Setting up Windows and Wallpaper Engine

Check the video below which shows all the steps on an Windows 10 (English interface) from start to finish if you need some help with any of the steps below.

1. Start playing music using the software that you later want to be used for Wallpaper Engine
2. Right-click on the audio icon next to the clock in the Windows tray and select **Open Sound settings**.
3. Scroll down to the bottom of the page that opens and click on **App volume and device preferences**.
4. A list of all applications playing audio will be shown. Find your music player and in the **Output** column, change the option from **Default** to **CABLE Input (VB-Audio Virtual Cable)**. Your audio player should immediately turn quiet, this is to be expected.
5. Go back to the main page of the Windows sound settings and in the upper right corner, select **Sound Control Panel**.
6. A small window will appear, navigate to the **Recording** tab, then right-click on the **CABLE Output** audio device and select **Properties**.
7. Another window will appear, click on the **Listen** tab and select **Listen to this device**. Click on **Apply** and **OK** and the music from your music player should return.
8. Windows is now properly configured, open up the **Wallpaper Engine settings** and in the **General** tab, change the **Audio recording device** to **CABLE Input (VB-Audio Virtual Cable)**. Wallpaper Engine should now start reacting to the music from your music player but will ignore any other application on your computer.

*Video showcasing all the steps described above:*

<video width="100%" controls>
  <source src="/videos/audioinputdevice.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
