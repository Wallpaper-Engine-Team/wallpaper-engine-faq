# 解決行動裝置配對問題

::: tip
經過這麼多步驟，仍然無法連線？ 向下捲動至頁面底部，檢視如何以手動備份透過 USB 或其他方式匯入桌布。
:::

如果行動裝置無法與電腦配對，很可能是因為防火牆或區域網路設定出錯。 請確認以下可能的問題來源：

* **確認手機與電腦連線至同一個區域網路。**
  * 您的電腦不需要連接 Wi-Fi，就算電腦是以網路線連接，也仍處於同一個網路。
* **確認防火牆並未阻擋 Wallpaper Engine 與區域網路通訊。**
  * Wallpaper Engine sends a multi-casts on the network ports 7884 (UDP) and 7889 (TCP), make sure no firewall is blocking this.
* **在電腦和行動裝置上停用任何可能干擾裝置通訊的 VPN 或代理軟體。**
* **確認網路路由器並未阻擋裝置之間的通訊。**
    * 確保路由器並未阻擋裝置之間的網路流量。
    * 在路由器設定中開啟 **UPnP** (**「Universal Plug and Play，通用隨插即用」**)。
* **再次確認 Windows 和行動版的 Wallpaper Engine 皆為最新版本且正常運作。**

### Windows Firewall

Especially if your mobile device can find your computer but fails to connect to it, it's almost definitely caused by a firewall on your computer. When you first launch Wallpaper Engine, it will prompt you to grant it permission to your network. If you closed this window or did not specifically allow **ui32.exe** to communicate with your network, the Windows firewall will block Wallpaper Engine. Make sure to allow **ui32.exe** to communicate as shown in this screenshot:

![Windows Firewall Permissions](/img/faq/windows_defender.png)

Wallpaper Engine will automatically suggest firewall fixes if it detects any problems. This process is somewhat reliable but in some cases you may still need to manually clear any blocks you may have created in the past by accident.

If you have not granted Wallpaper Engine these permissions, the Windows firewall will automatically block Wallpaper Engine. Open the Windows firewall settings, then click on **Allow an app through firewall**. Search for an entry called **ui32** and either delete it or make sure both check marks in the *Private* and *Public* column are enabled, then confirm your changes and restart Wallpaper Engine.

Make sure to look for **ui32** or **Wallpaper Engine UI** - you may find entries called just **Wallpaper Engine** but these are irrelevant here.

**Please note:** This section is specifically only about the built-in Windows firewall, if you use any other antivirus app or firewall, you need to make sure Wallpaper Engine is not being blocked by them.

## 備用解決方案：手動匯入桌布檔案 (.mpkg)

如果您無法修復電腦和行動裝置之間的連線問題，仍可手動將桌布轉移至行動裝置上。 首先，在 Wallpaper Engine 上選擇要匯出的桌布，以右鍵按一下桌布，選取**傳送至行動裝置**，再按一下**匯出 .mpkg**。

<video width="100%" controls autoplay loop>
  <source src="/videos/mobile_export.mp4" type="video/mp4">
  您的瀏覽器不支援視訊標籤。
</video>

一旦 Wallpaper Engine 建立 .mpkg 檔案，即可利用 USB 或複製檔案至 SD 卡，將檔案轉移至行動裝置上。 或者，您也可使用行動裝置上的任何檔案分享功能，或透過即時通訊、甚至是電子郵件 (若檔案大小符合限制) 將檔案傳送給自己。

檔案轉移到行動裝置上後，開啟行動裝置上的 Wallpaper Engine，利用**匯入檔案**功能從儲存檔案的目錄選擇檔案，直接將 .mpkg 檔案匯入行動裝置。

::: danger
It is import that you place the .mpkg files in the **Downloads** folder on the mobile device. Android is very restrictive when it comes to letting apps access files. If you cannot find or open the .mpkg files on your device, try placing them in another directory, usually the **Downloads** folder is the most reliable choice for this.
:::