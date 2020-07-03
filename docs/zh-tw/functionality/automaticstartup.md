---
tags:
  - 自動啟動
  - 啟動
---

# Automatic start-up at boot

如果要將 Wallpaper Engine 設定為開機時自動啟動，可前往 Wallpaper Engine 的設定並開啟「一般」分頁。 您可在上方啟用自動啟動選項，此應用程式就會在系統每次開機時默默自行啟動。

## 「高優先」與「標準」啟動選項之間有何差別？

如果為高優先選項，Wallpaper Engine 將使用 Windows 服務， 因此 Windows 啟動時，比起您之前設定為與 Windows 共同開啟的程式，Wallpaper Engine 會更早啟動。 不過，此應用程式的效能不會以任何其他方式受到影響。

使用高優先選項的缺點是較不可靠，主因是某些防毒軟體會過度反應，誤認成惡意行為，阻止 Wallpaper Engine 以此種模式啟動。

## 我已啟用自動啟動功能，但無法正常運作，該怎麼辦？

如果您使用*高優先*選項，請停用此選項，切換至*標準*自動啟動功能。 如上所述，高優先模式自動啟動速度較快，但由於諸多因素而較不可靠，其中主因是有時候會受到防毒軟體封鎖。

如果您使用標準選項，但該應用程式並未隨著 Windows 開機而啟動，請改選高優先，看看問題是否仍存在。

如果高優先與標準選項都未解決問題，請確認系統安裝的防毒軟體。 部分防毒與防火牆應用程式有時會阻止 Wallpaper Engine 隨著電腦開機而自動啟動。 您的防毒軟體可能設有「白名單」功能，允許您忽略特定資料夾或應用程式，請確保將 wallpaper_engine 安裝目錄與其中的可執行檔列入白名單。

另一項罕見原因可能是，如果您 (或系統上的應用程式) 將 Wallpaper Engine 的 .exe 檔案設定為以管理員身分執行，這樣也無法自動啟動，您需要先刪除管理員設定，關閉自動啟動後再開啟。

如果無法自動啟動，實際上應該都與過於盡責的防毒軟體有關。 如果安裝了防毒或防火牆應用程式，請再三檢查所有設定與安全等級。

## Wallpaper Engine 與 Windows 一起啟動，但 (部分) 桌布不顯示

 電腦開機後，檢查桌面右下角的通知區域，確認 Wallpaper Engine 圖示是否出現在時鐘旁邊。 如果開機後圖示出現，但部分或所有顯示器並未顯示其桌布，則代表顯示卡驅動程式有問題。 Essentially, your graphics card drivers keep assigning your monitors new identifiers which leads Wallpaper Engine to believe that you are trying to configure a new monitor. You can fix this by changing the *"Monitor identification"* option in the *General* tab of the Wallpaper Engine settings to *Layout* or *GDI*. We also recommend that you do a clean re-installation of your graphics card drivers in this case, as it's an indicator for an underlying problem with your Windows installation.

 ## Wallpaper Engine assigns wrong wallpapers at system start-up

 This is the same problem as in the previous section, if you have multiple monitors and the wallpapers are being assigned to the wrong monitor at start-up, try changing the *Monitor identification* option in the *General* tab of the Wallpaper Engine settings to *Layout* or *GDI*.