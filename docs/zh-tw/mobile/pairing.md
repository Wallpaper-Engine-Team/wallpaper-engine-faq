# 行動裝置與 Windows 配對

您可將行動裝置與電腦配對．將桌布收藏無線傳輸至行動裝置上的 Wallpaper Engine 隨附應用程式。

It's not possible for the Android app to directly download wallpapers from the Workshop due to technical and legal limitations that prevent the Android app from directly connecting to the Workshop.

::: tip
If pairing does not work for you, see the **Backup Solution** section at the bottom of this page to learn how to create mobile wallpaper packages (**.mpkg**) and how to import them on your mobile device.
:::

[[toc]]

## 1. Install the free Wallpaper Engine Android Companion App

Before continuing, make sure to install the latest version of the Wallpaper Engine Android companion app.

建議您透過官方應用程式商店下載，不過您也可以從我們的首頁直接下載最新的應用程式。 如需下載的連結或進一步了解詳情，請檢視我們的 Android 版本下載頁面：

* [下載 Android 版 Wallpaper Engine](https://www.wallpaperengine.io/android/)

For security reasons, we advise against installing the app from any sources not listed on our website.

## 2. 在 Windows 上準備 Wallpaper Engine

在 **Windows** 應用程式中，在使用者介面的右上角按一下**行動裝置**按鈕。 行動裝置的概覽將隨即開啟。 在裝置概覽的底部，按一下**連接新的行動裝置**按鈕。 Wallpaper Engine will show you a 4-digit PIN that you can use to pair one mobile device in the next step.

<video width="100%" controls autoplay loop>
  <source src="/videos/mobile_pin.mp4" type="video/mp4">
  您的瀏覽器不支援視訊標籤。
</video>

## 3. 連接行動裝置

在 Wallpaper Engine 行動版隨附應用程式，按一下右下角的**新增**，之後再按一下**與電腦配對**。 Wallpaper Engine 應用程式將在您的區域網路搜尋 Windows 的 Wallpaper Engine 執行個體。 應該數秒後就會出現 Windows 電腦的選項，您可按一下開始連線。 如果您是第一次連線，將必須輸入 4 位數的 PIN 碼 (請見上方 Windows 一節)。

<video height="590px" style="display:block;margin:0 auto;" controls autoplay loop>
  <source src="/videos/mobile_connect.mp4" type="video/mp4">
  您的瀏覽器不支援影片標籤。
</video>

您一旦輸入 PIN 碼，行動應用程式的狀態列會變成綠色，顯示已連線的電腦。 在 Windows 應用程式中，**行動裝置**按鈕也會變成綠色，代表行動裝置已連線。

By default, Wallpaper Engine will now always automatically connect to your computer if you start Wallpaper Engine on your mobile device and your computer at the same time.

## 4. Transferring Wallpapers to Your Mobile Device

Once the connection has been established, the **Mobile** button in the upper right corner turns green.

You can now simply click on the **Send to Mobile Device** button on the right-hand side or right-click on any compatible wallpaper and select **Send to Mobile Device**, followed by selecting your device from the list.

#### Scene Wallpapers

Dynamic and interactive wallpapers that are of the **Scene** type will first be optimized for use on mobile phones and to ensure compatibility with mobile hardware. This process may take a short while. You will also be asked which quality option you would like to use, especially for high-resolution wallpapers, we recommend trying the **Balanced** option if you notice performance issues on your mobile device.

<video width="100%" controls autoplay loop>
  <source src="/videos/mobile_transfer.mp4" type="video/mp4">
  您的瀏覽器不支援視訊標籤。
</video>

::: tip
You can also transfer multiple wallpapers at the same time by clicking on multiple wallpapers while holding the CTRL key on your keyboard.
:::

## 解決行動裝置配對問題

如果行動裝置無法與電腦配對，很可能是因為防火牆或區域網路設定出錯。 請確認以下可能的問題來源：

* 確認手機與電腦連線至同一個區域網路。
* 確認防火牆並未阻擋 Wallpaper Engine 與區域網路通訊。
* 確認網路路由器並未阻擋裝置之間的通訊。
    * Make sure your router is not blocking network traffic between devices.
    * Turn on **UPnP** (**"Universal Plug and Play"**) in your router settings.
* 在電腦和行動裝置上停用任何可能干擾裝置通訊的 VPN 或代理軟體。
* 再次確認 Windows 和行動版的 Wallpaper Engine 皆為最新版本且正常運作。

### 備用解決方案：手動匯入桌布檔案 (.mpkg)

如果您無法修復電腦和行動裝置之間的連線問題，仍可手動將桌布轉移至行動裝置上。 首先，在 Wallpaper Engine 上選擇要匯出的桌布，以右鍵按一下桌布，選取**傳送至行動裝置**，再按一下**匯出 .mpkg**。

<video width="100%" controls autoplay loop>
  <source src="/videos/mobile_export.mp4" type="video/mp4">
  您的瀏覽器不支援視訊標籤。
</video>

一旦 Wallpaper Engine 建立 .mpkg 檔案，即可利用 USB 或複製檔案至 SD 卡，將檔案轉移至行動裝置上。 或者，您也可使用行動裝置上的任何檔案分享功能，或透過即時通訊、甚至是電子郵件 (若檔案大小符合限制) 將檔案傳送給自己。

檔案轉移到行動裝置上後，開啟行動裝置上的 Wallpaper Engine，利用**匯入檔案**功能從儲存檔案的目錄選擇檔案，直接將 .mpkg 檔案匯入行動裝置。