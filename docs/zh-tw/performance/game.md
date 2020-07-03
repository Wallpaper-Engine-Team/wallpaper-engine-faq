# 執行特定遊戲或應用程式時出現效能問題 / 低 FPS

Wallpaper Engine 預設為在您玩遊戲時暫停。 您可以在 Wallpaper Engine 設定的**效能**分頁中調整此項設定。

若執行遊戲或應用程式時出現效能問題，您可以進一步調整此項設定。 通常而言，出現效能問題表示系統的 RAM 或視訊 RAM（顯示卡上的記憶體）不足。 You can configure Wallpaper Engine to free up any memory when in-game by changing the **Other application fullscreen** option to **Stop (free memory)** in the **Performance** tab of the Wallpaper Engine settings.

## 應用程式規則

若僅在執行特定遊戲或軟體時出現問題，您也能只針對發生問題的軟體進行設定，方法是建立**應用程式規則**：

1. 在 Wallpaper Engine 設定中開啟**效能**分頁
2. 按一下**應用程式規則**旁的**編輯**按鈕
3. 在出現的快顯示窗中，按一下**建立新規則**
4. 建立含有以下設定的新規則：
    * **應用程式名稱：**「game.exe」*（將檔案名稱替換為遊戲的 .exe 檔案）*
    * **條件：**「正在執行時」
    * **桌布播放：**「停止（釋放記憶體）」
5. 按一下**建立**確認

現在起，Wallpaper Engine 在您設定的 *.exe* 啟動時將完全移除記憶體中的所有桌布。

## 與畫面錄製工具或重疊產生衝突

若您使用了任何遊戲串流、遊戲錄製功能或有重疊的軟體，請避免它們在背景中意外錄製 Wallpaper Engine。 若您使用了顯示卡驅動程式的任何遊戲串流功能（例如 Nvidia ShadowPlay、Nvidia Share 或 AMD ReLive），也請避免相同狀況。
