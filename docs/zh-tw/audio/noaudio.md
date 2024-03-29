# 無音訊播放/音訊輸出問題
本指南將協助您了解任何與桌布音訊播放有關的問題。 首先，您應多試用其他幾款桌布，確認目前正在使用的桌布確實包含音訊。 許多桌布完全不含音訊。 如果您確定桌布包含音訊，請繼續閱讀。

::: warning
請注意 如果聲音幾秒鐘內斷斷續續，請改閱讀以下指南：

* [聲音/音訊斷斷續續](/audio/intermittent)
:::

## 確定 Wallpaper Engine 並未自行靜音
本應用程式中有三處可以將音訊輸出調為靜音：

1. 在 Wallpaper Engine 設定的**一般**分頁，有個選項為**音訊輸出**。 確定此選項已啟用。
2. 按一下 Wallpaper Engine 主視窗右上角的**顯示器**按鈕， 之後將可瀏覽所有螢幕畫面。 每個螢幕畫面的左下角皆有靜音按鈕， 可在此確定您的螢幕並未靜音。
3. 選取一張桌布時，您會發現右手邊有個**音量**選項，確認並未設定為零或低音量。 如果選項寫的是**已在顯示器設定中停用音訊**，代表顯示器已經靜音，請再回到步驟 2，將螢幕取消靜音。

## 確認 Windows 音訊混音器
Wallpaper Engine 讓所有音訊輸出交由 Windows 處理，所以如果 Wallpaper Engine 本身並未靜音，問題必定出自 Windows 的設定。 首先，檢查 Windows 的音訊混音器，確認 Wallpaper Engine 並未靜音或設定為極低音量，如以下螢幕截圖所示：

![在 Windows 音訊混音器中調高 Wallpaper Engine 音量與取消靜音](./audiomixer.png)

## 檢查選取的音訊工具
音訊無法輸出的另一個原因可能是 Windows 為 Wallpaper Engine 選取錯誤的音訊輸出裝置，請嘗試手動選取希望使用的音訊輸出裝置：

1. 以滑鼠右鍵按一下 Windows 通知區域時鐘旁的喇叭圖示，選擇**開啟音效設定**。
2. 向下滾動至開啟頁面的底部，按一下**應用程式音量和裝置喜好設定**。
3. 此頁面將列出所有可播放音訊的應用程式。 在**輸出**欄位找到 Wallpaper Engine，選取正確的音訊輸出裝置。 如果您不確定，請嘗試所有可能的選項。 Wallpaper Engine 可能必須重新啟動才能生效。

如果您使用多種音訊裝置 (尤其使用 USB 或藍牙音訊裝置)，發現裝置中斷連線或重新連線時，音訊會也會中斷，原因是 Windows 切換執行程式的音訊裝置時有時候無法確實而即時。 我們這一方無法解決這個問題，但面對這種極少見的情況，可能需要重新啟動 Wallpaper Engine，Windows 才可開始再次正確處理音訊輸出。 您也可以重新安裝、更新任何音訊驅動程式，看看這類問題是否減輕。

## 重新設定所有音訊轉碼器

如果到此階段音訊輸出還是無法正確運作，可能代表音訊轉碼器故障，使用**視訊**類型的桌布更有密切關係。 再次確認的方法是，在 Wallpaper Engine 以滑鼠右鍵按一下桌布，選取**在檔案總管中開啟**。 您應該會看到原始的視訊檔案 (通常是 **.mp4** 檔案)，使用 Windows Media Player 開啟該檔案，確認是否可以播放音訊。 **請注意：**務必使用 Windows Media Player 測試，這種測試與其他播放程式無關，因為 Wallpaper Engine 使用的音訊轉碼器與此程式相同。 如果 Windows Media Player 並未播放音訊，代表視訊檔案並未含有音訊，或是系統上的音訊轉碼器確實故障或遺失。

在這種情況下，您可如下方頁面的說明使用 *Codec Tweak Tool*，重設系統上所有音訊及視訊轉碼器，之後再重新啟動 Wallpaper Engine 試試看：

* [視訊螢幕呈現黑色/無法正常播放：Codec Tweak Tool (轉碼器調整工具)](/noshow/notplaying.html#codec-tweak-tool)

