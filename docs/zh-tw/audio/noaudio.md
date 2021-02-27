# 無音訊播放/音訊輸出問題
本指南將協助您了解任何與桌布音訊播放有關的問題。 首先，您應多試用其他幾款桌布，確認目前正在使用的桌布確實包含音訊。 許多桌布完全不含音訊。 如果您確定桌布包含音訊，請繼續閱讀。

::: warning
請注意 如果聲音幾秒鐘內斷斷續續，請改閱讀以下指南：

* [聲音/音訊斷斷續續](/audio/intermittent)
:::

## 確定 Wallpaper Engine 不會自動靜音
本應用程式中有三個地方可以將音訊輸出靜音：

1. 在 Wallpaper Engine 設定的**一般**分頁，有個選項為**音訊輸出**。 確定此選項已啟用。
2. 按一下 Wallpaper Engine 主視窗右上角的**顯示器**按鈕， 之後將可瀏覽所有螢幕畫面。 每個螢幕畫面的左下角皆有靜音按鈕， 可在此確定您的螢幕並未靜音。
3. 選取一張桌布時，您會發現右手邊有**音量**選項，確認並未設定為零或低音量。 如果選項寫的是**已在顯示器設定中停用音訊**，您的顯示器已經靜音，請回到步驟 2，將螢幕取消靜音。

## 確認 Windows 音訊混音器
Wallpaper Engine 讓所有音訊輸出交由 Windows 處理，所以如果 Wallpaper Engine 本身並未靜音，問題必定出自 Windows 的設定。 首先，檢查 Windows 的音訊混音器，確認 Wallpaper Engine 並未靜音或設定為極低音量，如以下螢幕截圖所示：

![Raise volume and unmute Wallpaper Engine in the Windows audio mixer](./audiomixer.png)

## 檢查選取的音訊工具
音訊無法輸出的另一個原因可能是 Windows 為 Wallpaper Engine 選取錯誤的音訊輸出裝置，請嘗試手動選取希望使用的音訊輸出裝置：

1. 以滑鼠右鍵按一下 Windows 通知區域時鐘旁的喇叭圖示，選擇**開啟音效設定**。
2. 向下滾動至開啟頁面的底部，按一下**應用程式音量和裝置喜好設定**。
3. 此頁面將列出所有可播放音訊的應用程式。 在**輸出**欄位找到 Wallpaper Engine，選取正確的音訊輸出裝置。 如果您不確定，可嘗試所有可能的選項。 Wallpaper Engine 可能必須重新啟動才能生效。

如果您使用多種音訊裝置 (尤其使用 USB 或藍牙音訊裝置)，發現裝置中斷連線或重新連線時，音訊會也會中斷，原因是 Windows 切換執行程式的音訊裝置時有時候無法確實而即時。 This cannot be fixed from our end, in these rare cases you may need to restart Wallpaper Engine so that Windows starts to correctly handle the audio output again. You can also try and reinstall and update any audio drivers and see if that alleviates these types of issues.

## Reset all audio codecs

If audio output is still not playing at this point, some audio codecs may be broken, this is mainly relevant when using **Video** type wallpapers. You can double-check this by right-clicking on your wallpaper in Wallpaper Engine and selecting **Open in Explorer**. You should see the source video file (usually an **.mp4** file), open that file with Windows Media Player and check if it plays audio. **Please note:** It is very important that you test this with Windows Media Player only - other video players are irrelevant for this test as the underlying audio codecs are used by Wallpaper Engine as well. If no audio is playing in Windows Media Player, then either the video file does not have audio or the audio codecs on your system are indeed broken or missing.

In that case, you can use the *Codec Tweak Tool* as explained on the following page to reset all audio and video codecs on your system, afterwards restart Wallpaper Engine and try again:

* [Videos Black / Not Playing Properly - Codec Tweak Tool](noshow/notplaying.html#codec-tweak-tool)

