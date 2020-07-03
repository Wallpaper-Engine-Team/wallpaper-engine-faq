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

If neither the high-priority or normal-priority option work for you, check the antivirus software you have installed on your system. Some antivirus and firewall applications sometimes block Wallpaper Engine from automatically starting when your computer boots up. Your antivirus software likely has a "whitelist" feature which allows you to ignore certain folders or applications, make sure to whitelist the wallpaper_engine install directory and all executables in it.

Another rare cause can be that if you (or an application on your system) set the Wallpaper Engine .exe files to be run as admin only then it cannot automatically start either, you will need to remove the admin setting and toggle the automatic startup off and back on.

If the automatic startup does not work, the answer virtually always is somehow related to overzealous antivirus software. If you have antivirus or firewall applications installed, please double-check all their settings and security levels.

## Wallpaper Engine starts with Windows but (some) wallpapers are not shown

 Check if the Wallpaper Engine icon is visible in the Windows tray next to the clock after you start your computer. If the icon is there after your system starts but either some or none of your monitors have their respective wallpapers shown, there is a problem with your graphics card drivers. Essentially, your graphics card drivers keep assigning your monitors new identifiers which leads Wallpaper Engine to believe that you are trying to configure a new monitor. You can fix this by changing the *"Monitor identification"* option in the *General* tab of the Wallpaper Engine settings to *Layout* or *GDI*. We also recommend that you do a clean re-installation of your graphics card drivers in this case, as it's an indicator for an underlying problem with your Windows installation.

 ## Wallpaper Engine assigns wrong wallpapers at system start-up

 This is the same problem as in the previous section, if you have multiple monitors and the wallpapers are being assigned to the wrong monitor at start-up, try changing the *Monitor identification* option in the *General* tab of the Wallpaper Engine settings to *Layout* or *GDI*.