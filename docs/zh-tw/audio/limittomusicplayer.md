# 將音頻可視化工具限制至音樂播放器

由於音頻在 Windows 中自有一套運作模式，Wallpaper Engine 本身不可能將音頻可視化工具限制至您所挑選的音樂播放器。 不過，您可使用第三方軟體建立*虛擬*音訊裝置來達成此目的。 本篇指南將說明設立此類虛擬音訊裝置的方式，以及如何設定 Windows 10 及 Wallpaper Engine 以利這類裝置正常運作。

請記住，我們並不支援任何虛擬音訊裝置，也無法保證此種方法能運作——這種設定相當進階，已超出 Wallpaper Engine 的負責範圍。 我們提供本指南僅出於好意，希望能協助使用者更進一步自訂系統。

::: warning
請注意 本指南僅適用於 Windows 10 的更新版本。 Windows 較舊的版本可能缺少某些功能，因此無法適用本指南。
:::

### 安裝虛擬音訊裝置

我們建議使用免費的 **VB-CABLE 虛擬音訊裝置**，您可從以下網站下載：

* [下載虛擬音訊裝置](https://www.vb-audio.com/Cable/)

下載與解壓縮檔案，依據您的 Windows 10 版本安裝 32 位元或 64 位元的音訊裝置，使用 **VBCABLE_Setup.exe** 或 **VBCABLE_Setup_x64.exe**。 以滑鼠右鍵按一下，選擇*以管理員身分執行*，務必以管理員權限啟動設定檔案。 請遵循設定說明操作，確保音訊裝置安裝成功。

### 設定 Windows 與 Wallpaper Engine

下方影片呈現了 Windows 10 (英語介面) 設定的完整步驟，設定過程中如需要任何協助，可參看該影片。

1. 使用您之後要用於 Wallpaper Engine 的軟體開始播放音樂
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
