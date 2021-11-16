# 行動裝置與 Windows 配對

您可將行動裝置與電腦配對．將桌布收藏無線傳輸至行動裝置上的 Wallpaper Engine 隨附應用程式。

由於技術和法律限制，Android 應用程式無法直接連線至工作坊，因此 Android 應用程式無法直接從工作坊下載桌布。

::: tip
如果您無法配對，請參閱本頁面底部**備用解決方案**一節，了解如何建立行動桌布套件 (**.mpkg**) 以及如何在行動裝置上匯入。
:::

[[toc]]

## 1. 安裝免費的 Android 隨附應用程式

請先確認安裝的是最新版的 Android 隨附應用程式。

建議您透過官方應用程式商店下載，不過您也可以從我們的首頁直接下載最新的應用程式。 如需下載的連結或進一步了解詳情，請檢視我們的 Android 版本下載頁面：

* [下載 Android 版 Wallpaper Engine](https://www.wallpaperengine.io/android/)

為了保障安全，建議不要從網站上任何未列出的來源安裝應用程式。

## 2. 在 Windows 上準備 Wallpaper Engine

在 **Windows** 應用程式中，在使用者介面的右上角按一下**行動裝置**按鈕。 行動裝置的概覽將隨即開啟。 在裝置概覽的底部，按一下**連接新的行動裝置**按鈕。 Wallpaper Engine 將顯示 4 位數的 PIN 碼，下一步驟時可用來與一個行動裝置配對。

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

預設情況下，如果您同時在行動裝置和電腦上啟動 Wallpaper Engine，Wallpaper Engine 之後將自動連線至您的電腦。

## 4. 將桌布傳輸至行動裝置

連線建立後，右上角的**行動裝置**按鈕轉變為綠色。

您只需按一下右側的**傳送至行動裝置**按鈕，或是以滑鼠右鍵按一下任何相容的桌布，並選取**傳送至行動裝置**，然後從清單中選取您的裝置。

#### 場景桌布

**場景**類型的動態及互動式桌布將為首批針對手機使用最佳化的桌布，確保與行動裝置的硬體相容。 此最佳化程序可能需要一些時間。 You will also be asked which quality option you would like to use, especially for high-resolution wallpapers, we recommend trying the **Balanced** option if you notice performance issues on your mobile device.

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
    * 確保路由器並未阻擋裝置之間的網路流量。
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