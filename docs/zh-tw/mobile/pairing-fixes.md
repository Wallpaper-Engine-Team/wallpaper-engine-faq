# 解決行動裝置配對問題

::: tip
經過這麼多步驟，仍然無法連線？ 向下捲動至頁面底部即可檢視備用解決方案：透過 USB 或其他方式匯入桌布。
:::

如果行動裝置無法與電腦配對，很可能是因為防火牆或區域網路設定出錯。 請確認以下可能的問題來源：

* **確認手機與電腦連線至同一個區域網路。**
  * 您的電腦不需要連接 Wi-Fi，就算電腦是以網路線連接，也仍處於同一個網路。
* **確認防火牆並未封鎖 Wallpaper Engine 與區域網路通訊。**
  * Wallpaper Engine 使用網路連接埠 7884 (UDP) 及 7889 (TCP)，請確保防火牆不會封鎖。
* **在電腦和行動裝置上停用任何可能干擾裝置通訊的 VPN 或代理軟體。**
* **確認網路路由器並未阻擋裝置之間的通訊。**
    * 確保路由器並未阻擋裝置之間的網路流量。
    * 在路由器設定中開啟 **UPnP** (**「Universal Plug and Play，通用隨插即用」**)。
* **再次確認 Windows 和行動版的 Wallpaper Engine 皆為最新版本且正常運作。**
* **若您的電腦在 Android 應用程式一直無法顯示：**可能是防火牆封鎖了用於偵測您裝置的廣播，您可嘗試直接輸入電腦的 IP 位址。 瀏覽行動裝置的連線概覽，按一下右上角三個點，接著選取**手動輸入 IP **。 You can now try to manually input the IP address of your computer. Make sure Wallpaper Engine is running on your computer and that you have opened the **Connect New Device** overview, otherwise a connection is not possible.

### Windows 防火牆

尤其如果您的行動裝置可以找到電腦，卻無法連線，幾乎可確定原因是電腦的防火牆。 如果您第一次啟動 Wallpaper Engine，該程式將提示您允許加入網路。 如果您關閉此視窗，或並未特別允許 **ui32.exe** 與您的網路開啟通訊，Windows 防火牆將阻擋 Wallpaper Engine。 請確保 **ui32.exe** 能如這張螢幕截圖一樣通訊。

![允許通過 Windows 防火牆](/img/faq/windows_defender.png)

Wallpaper Engine 如偵測到任何問題，將自動建議修復防火牆。 此過程堪稱值得信賴，但部分情況下，您可能仍需要手動清除過去可能不經意產生的阻礙。

如果您尚未允許 Wallpaper Engine，Windows 防火牆會自動阻擋 Wallpaper Engine。 請開啟 Windows 防火牆設定，接著按一下**允許應用程式通過防火牆**。 搜尋名為 **ui32** 的項目，可將其刪除，或是確認*私人*和*公開*兩個欄位皆已啟用，接著確認變更，重新啟動 Wallpaper Engine。

請搜尋 **ui32** 或 **Wallpaper Engine UI**：您可能會找到僅名為 **Wallpaper Engine** 的項目，但與此問題無關。

**請注意：**此節僅提及內建 Windows 防火牆，如果您使用任何其他的防毒應用程式或防火牆，得自行確認 Wallpaper Engine 並未因此遭到阻擋。

## 備用解決方案：手動匯入桌布檔案 (.mpkg)

如果您無法修復電腦和行動裝置之間的連線問題，仍可手動將桌布轉移至行動裝置上。 首先，在 Wallpaper Engine 上選擇要匯出的桌布，以右鍵按一下桌布，選取**傳送至行動裝置**，再按一下**匯出 .mpkg**。

<video width="100%" controls autoplay loop>
  <source src="/videos/mobile_export.mp4" type="video/mp4">
  您的瀏覽器不支援視訊標籤。
</video>

一旦 Wallpaper Engine 建立 .mpkg 檔案，即可利用 USB 或複製檔案至 SD 卡，將檔案轉移至行動裝置上。 或者，您也可使用行動裝置上的任何檔案分享功能，或透過即時通訊、甚至是電子郵件 (若檔案大小符合限制) 將檔案傳送給自己。

檔案轉移到行動裝置上後，開啟行動裝置上的 Wallpaper Engine，利用**匯入檔案**功能從儲存檔案的目錄選擇檔案，直接將 .mpkg 檔案匯入行動裝置。

::: danger
您必須將 .mpkg 檔案存放在行動裝置的**下載**資料夾。 Android 在這方面很嚴謹，應用程式很難存取檔案。 如果您在裝置上找不到或無法開啟 .mpkg 檔案，請存放於其他目錄，通常**下載**資料夾是最不會出錯的位置。
:::