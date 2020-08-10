# Ses görselleştiricilerini müzik çalarlarla sınırlama

Sesin Windows'taki çalışma şeklinden dolayı Wallpaper Engine'in ses görselleştiricilerini müzik çalar seçiminizle sınırlaması mümkün değildir. Ancak bunu gerçekleştirebilmek adına *sahte* bir ses cihazı oluşturmak için üçüncü taraf yazılım kullanabilirsiniz. Bu rehber, nasıl bu tür bir sahte ses cihazı kuracağınızı ve bu kurulumun düzgün çalışması için Windows 10 ve Wallpaper Engine'in nasıl yapılandırılacağını açıklar.

Herhangi bir sahte ses cihazı için destek sunmadığımızı ve bunun işe yarayacağını garanti etmediğimizi unutmayın. Bu, Wallpaper Engine'in sunduklarının çok ötesine geçen oldukça gelişmiş bir kurulumdur. Bu rehberi yalnızca sistemlerini özelleştirmek için elinden geleni yapmak etmek isteyen kullanıcılara dostça bir yardım olarak sunuyoruz.

::: warning
Lütfen unutmayın Bu rehber yalnızca Windows 10'un güncellenmiş sürümlerinde çalışır. Daha eski Windows sürümlerinde bazı özellikler eksik olabilir ve bu durum da rehbere uyulmasını imkânsız kılar.
:::

### Sahte bir ses cihazı kurma

Aşağıdaki siteden ücretsiz olarak indirebileceğiniz **VB-CABLE Virtual Audio Device** uygulamasını kullanmanızı öneririz:

* [Virtual Audio Device İndir](https://www.vb-audio.com/Cable/)

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
