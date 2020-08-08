# 將音頻可視化工具限制至音樂播放器

由於音頻在 Windows 中自有一套運作模式，Wallpaper Engine 本身不可能將音頻可視化工具限制至您所挑選的音樂播放器。 不過，您可使用第三方軟體建立*虛擬*音訊裝置來達成此目的。 本篇指南將說明設立此類虛擬音訊裝置的方式，以及如何設定 Windows 10 及 Wallpaper Engine 以利這類裝置正常運作。

請記住，我們並不支援任何虛擬音訊裝置，也無法保證此種方法能運作——這種設定相當進階，已超出 Wallpaper Engine 的負責範圍。 我們提供本指南僅出於好意，希望能協助使用者更進一步自訂系統。

::: warning
請注意 本指南僅適用於 Windows 10 的更新版本。 Older Windows versions may be missing some features which makes it impossible to follow this guide.
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
