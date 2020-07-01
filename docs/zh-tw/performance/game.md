# 執行特定遊戲或應用程式時出現效能問題 / 低 FPS

Wallpaper Engine 預設為在您玩遊戲時暫停。 您可以在 Wallpaper Engine 設定的**效能**分頁中調整此項設定。

若執行遊戲或應用程式時出現效能問題，您可以進一步調整此項設定。 通常而言，出現效能問題表示系統的 RAM 或視訊 RAM（顯示卡上的記憶體）不足。 您可以設定 Wallpaper Engine，在玩遊戲時釋放記憶體，方法是在 Wallpaper Engine 設定的**效能**分頁中將**其他應用程式全螢幕顯示時**的選項變更為**停止（釋放記憶體）**。

## 應用程式規則

若僅在執行特定遊戲或軟體時出現問題，您也能只針對發生問題的軟體進行設定，方法是建立**應用程式規則**：

1. 在 Wallpaper Engine 設定中開啟**效能**分頁
2. 按一下**應用程式規則**旁的**編輯**按鈕
3. 在出現的快顯示窗中，按一下**建立新規則**
4. 建立含有以下設定的新規則：
    * **應用程式名稱：**「game.exe」*（將檔案名稱替換為遊戲的 .exe 檔案）*
    * **Condition:** "Is running"
    * **Wallpaper playback:** "Stop (free memory)"
5. Confirm by clicking on **Create**

Wallpaper Engine will now completely remove all wallpapers from memory when the *.exe* you configured is launched.

## Conflicts with screen-recording tools or overlays

If you are using any game streaming, game recording or software with overlays, make sure they are not accidentally recording Wallpaper Engine in the background. This can also be the case if you use any game streaming functionalities from your graphics card drivers (Nvidia ShadowPlay, Nvidia Share or AMD ReLive for example).
