# 使用 Wallpaper Engine 設定螢幕保護程式

Wallpaper Engine 能讓您將桌布設為螢幕保護程式。 以往螢幕保護程式是用來防止圖像永久烙印，不過大多數現代的顯示技術不再容易發生此種類型的顯示器損壞問題，您可放心將任何類型的桌布當作螢幕保護程式，以達美觀目的。 如果您使用 CRT 映像管、電漿、OLED 或容易產生螢幕烙印的技術，建議您將桌布播放清單或具規律動態的桌布設定為螢幕保護程式。

## 初始螢幕保護程式設定

若要開始將 Wallpaper Engine 設定為螢幕保護程式，請懸停在 Wallpaper Engine 視窗的**已安裝**分頁，並選取**設定螢幕保護程式**。 Wallpaper Engine 現在將確認您是否已安裝 Windows 版的 Wallpaper Engine 螢幕保護程式。 如果螢幕保護程式尚未安裝，系統將要求您安裝。 請確保您的 Windows 使用者身分具管理員權限，且防毒應用程式並未阻擋 Wallpaper Engine 安裝螢幕保護程式。

初始安裝後，Windows 螢幕保護程式設定應會自動開啟，您也可手動使用**設定 & 預覽**按鈕來開啟設定，或者直接透過 Windows 頁面開啟螢幕保護程式設定。

## 設定螢幕保護程式

### Windows 設定

為了使 Wallpaper Engine 螢幕保護程式正常運作，您必須先到 **Windows 設定**中將 Wallpaper Engine 選為使用中的螢幕保護程式。 您可透過 Windows 控制面板或在 Wallpaper Engine 螢幕保護程式模式中按一下**設定 & 預覽**，以開啟 Windows 螢幕保護程式設定。 請見以下視訊了解設定步驟：

<video width="100%" controls autoplay loop>
  <source src="/videos/screensaver_setup.mp4" type="video/mp4">
  您的瀏覽器不支援視訊標籤。
</video>

在 Windows 設定中，您可控制螢幕保護程式出現前的等待時間，以及返回電腦時是否顯示 Windows 鎖定畫面。 這些設定完全由 Windows 管理，Wallpaper Engine 本身不會控制螢幕逾時或類似問題。

### Wallpaper Engine 設定

在 Windows 設定好螢幕保護程式後，開始設定 Wallpaper Engine 螢幕保護程式。 將滑鼠懸停在 Wallpaper Engine **已安裝**分頁，選取**設定螢幕保護程式**。 Wallpaper Engine 現在將預覽螢幕保護程式，而非預覽桌布；您離開螢幕保護程式模式後，才會返回桌布設定。

在預設狀態下，Wallpaper Engine 將使用最基本的設定，亦即您的螢幕保護程式將等同於使用中的桌布。 您可在上方將**螢幕保護程式為**的選項變更為**另外設定**。 啟用該選項後，即可為每個螢幕選擇一張用作螢幕保護程式的桌布，甚至使用完全不同的顯示器設定檔或播放清單來設定成螢幕保護程式。 您可在左上角按一下紅色**結束**按鈕，隨時返回桌布設定。

## 螢幕保護程式問題解決

Wallpaper Engine 螢幕保護程式是透過 Windows 本身啟動，若螢幕保護程式並未正常運作，請再三確認預設的 Windows 螢幕保護程式是否也能正常運作。 Check the Windows screensaver settings and your Windows energy settings to make sure that your screensaver is configured with the correct timeout that you expect and that Wallpaper Engine is set as your active screensaver.

The screensaver will be installed in `C:\Windows\System32\wpxscreensaver64.scr`, make sure no antivirus app is deleting this file by mistake or preventing it from being installed. You can also manually uninstall the screensaver by deleting that specific file, but be sure to not delete any other important Windows files in the `System32` directory when doing so.