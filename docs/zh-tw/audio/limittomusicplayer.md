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
2. 以滑鼠右鍵按一下 Windows 通知區域時鐘旁的喇叭圖示，選擇**開啟音效設定**。
3. 向下滾動至開啟頁面的底部，按一下**應用程式音量和裝置喜好設定**。
4. 此頁面將列出所有可播放音訊的應用程式。 找到您的音樂播放器，接著在**輸出**選單中，將**預設**改為 **CABLE Input (VB-Audio Virtual Cable)**。 您的音樂播放器應該會立即變為靜音。
5. 返回 Windows 音效設定主頁，在右上角選擇**聲音控制台**。
6. 出現小視窗後，按一下**錄製**分頁，接著在 **CABLE Output** 音訊裝置上以滑鼠右鍵按一下，選擇**內容**。
7. 另一個視窗將出現，按一下**聆聽**分頁，選擇**聆聽此裝置**。 按一下**套用**與**確定**，音樂播放器中的音樂應該就會返回。
8. 現在 Windows 已正確設定，開啟 **Wallpaper Engine 設定**與**一般**分頁中，將**音訊輸入裝置**變更為 **CABLE Input (VB-Audio Virtual Cable)**。 Wallpaper Engine should now start reacting to the music from your music player but will ignore any other application on your computer.

*Video showcasing all the steps described above:*

<video width="100%" controls>
  <source src="/videos/audioinputdevice.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
