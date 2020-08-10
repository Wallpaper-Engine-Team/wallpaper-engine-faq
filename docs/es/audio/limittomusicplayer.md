# Limitar visualizadores de audio a los reproductores de música

Debido al funcionamiento del sonido en Windows, a Wallpaper Engine le resulta imposible limitar los visualizadores de audio con el reproductor de música que elijas. Sin embargo, puedes usar una aplicación de terceros para crear un dispositivo de sonido *falso* para hacerlo. En esta guía te explicaremos una forma para crear el dispositivo falso y cómo configurar Windows 10 y Wallpaper Engine para que funcione.

Te en mente que no ofrecemos asistencia para los dispositivos de audio falsos y no podemos garantizar que vaya a funcionar: es un proceso muy avanzada que va mucho más allá de lo que ofrece Wallpaper Engine. Hemos hecho esta guía únicamente para ayudar a aquellos usuarios que quieren ir un paso más allá a la hora de personalizar sus equipos.

::: warning
¡Aviso! Esta guía solo funciona con las versiones actualizadas de Windows 10. Es posible que las versiones antiguas no cuenten con algunas de las funciones, por lo que sería imposible seguirla.
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
