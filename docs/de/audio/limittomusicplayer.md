# Audio-Visualisierer auf Musik-Programme beschränken

Durch grundlegende Beschränkungen in der Art, Audio-Wiedergabe in Windows funktioniert, ist es nicht möglich, dass Wallpaper Engine selbst Audio-Visualisierungen auf ein bestimmtes Programm beschränkt. Nichtsdestotrotz ist es möglich dies umzusetzen. Es können Anwendungen von Drittanbietern verwendet werden, um ein *virtuelles* Audio-Gerät zu erstellen. Diese Anleitung erklärt einen Weg, wie ein solches imitiertes Audio-Gerät eingerichtet werden kann und wie Windows 10 und Wallpaper Engine konfiguriert werden können, um diese Funktionalität lauffähig zu machen.

An dieser Stelle ein kurzer Hinweis dazu, dass wir keine Unterstützung für virtuelle Audio-Geräte anbieten und nicht garantieren können, dass diese Anleitung funktionieren wird. Es handelt sich hierbei um eine sehr erweiterte Vorgehensweise, die den normalen Nutzungsrahmen von Wallpaper Engine sprengt. Wir bieten diese Anleitung nur als freundlich-gemeinte Hilfe für Nutzer an, welche besonders weit mit der Konfiguration ihres Systems gehen wollen.

::: warning
Achtung Diese Anleitung funktioniert nur auf aktuellen Versionen von Windows 10. Älteren Windows-Versionen können einige Features fehlen, was es unmöglich macht dieser Anleitung zu folgen.
:::

### Installation eines virtuellen Audio-Geräts

Wir empfehlen die Nutzung des kostenlosen **VB-CABLE Virtual Audio Device**, welches auf der folgenden Website heruntergeladen werden kann:

* [Virtuelles Audio-Gerät herunterladen](https://www.vb-audio.com/Cable/)

Zunächst muss die Archiv-Datei heruntergeladen und extrahiert werden. Daraufhin muss die Installation für entweder das 32-Bit- oder 64-Bit-Audio-Gerät gestartet werden, je nachdem welche Version von Windows 10 installiert ist. Dies geschieht über entweder **VBCABLE_Setup.exe** oder **VBCABLE_Setup_x64.exe**. Be sure to launch the setup file with administrator rights by right-clicking and then selecting *Run as administrator*. Follow the instructions of the setup and make sure the audio device has been installed successfully.

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
