# 依據應用程式選擇桌布

Wallpaper Engine 能讓您在系統上啟動特定 .exe 時自動啟動不同桌布。 例如，您如果希望使用較不會讓人分心的桌布，以便玩遊戲，或以便開啟音樂播放器的同時自動啟動音訊可視化工具，則此功能可能有幫助。

::: tip
如果某些遊戲或應用程式存在技術問題，則在啟用特定 .exe 時，可使用應用程式規則來停用 Wallpaper Engine。 如果您想解決其他應用程式的技術問題，請另外查看本指南：[修復特定應用程式或遊戲的問題](/functionality/applicationrules.html)
:::

## 設定應用程式規則

在 Wallpaper Engine 設定的**效能**分頁中，按一下**應用程式規則**區段的**編輯**按鈕。 按一下**建立新規則**為您所選擇的 .exe 設定一組新的桌布。 在**應用程式名稱**輸入欄位，輸入 .exe 名稱， 確保名稱完全正確，例如 *musicplayer.exe*。 設定**條件**為**正在執行時**。 在**桌布播放**選項中，可選擇以下任一選項：

* 載入桌布
* 載入播放清單
* 載入設定檔

What is important to note here is that **Load wallpaper** and **Load playlist** will both only load one wallpaper and span it across all screens. If you have multiple monitors and want to load independent wallpapers for each screen (or even different playlists on each screen), you need to use the **Load Profile** option. Read the following section for more infos on how to set this up.

### Setting up a multi-monitor profile

**Load Profile** in the application rules refers to mulit-monitor profiles which can be configured in the monitor overview (screen icon in the upper right corner of the interface). A profile is a snapshot of all your currently selected wallpapers and playlists across all your screens. Whenever a profile is loaded, all wallpapers and playlists will be placed according to the profile configuration.

Configure your wallpapers and playlists across all monitors the the way you want them to be, then click on the **Save profile** button in the monitor settings and save the current setup under a name of your choice. Keep in mind that any subsequent changes you make to your setup will not change the profile until you use the **Save profile** button again. You can set up multiple profiles and assign them to multiple apps at once. For example, you may create a **Music**, a **Gaming** and a **Movies** profile and then assign each profile to all .exe files that match these categories.

<video width="100%" controls autplay loop>
  <source src="/videos/apprules.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>