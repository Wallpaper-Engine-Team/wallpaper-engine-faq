# 備份 Steam 工作坊

因故刪除 Steam 中的桌布時，Steam 也會將桌布從電腦中刪除。 Wallpaper Engine 無法防止這點，如果會對您造成困擾，您可以備份桌布。 Wallpaper Engine 無法防止這點，如果會對您造成困擾，您可以備份桌布。

無獨有偶，Steam 會隨機決定許多報告，以重新下載所有工作坊檔案，若您的資料多達數 Gb，這點可能很煩人。 若上述情況頻繁出現，只要建立備份並截斷與 Steam 的所有連結，即可避免。 若上述情況頻繁出現，只要建立備份並截斷與 Steam 的所有連結，即可避免。

# 建立備份

以下指南是假設您的 Steam 與 Wallpaper Engine 安裝於「C:\Program Files (x86)\Steam\」，如果您將 Steam/Wallpaper Engine 安裝於別處，請務必檢查該處。

1. 將資料夾 431960 複製到以下的 Wallpaper Engine 安裝路徑：`C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\projects\431960` :::
2. 將資料夾 431960 複製到以下的 Wallpaper Engine 安裝路徑：`C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\projects\431960`
3. 將資料夾 `431960` **重新命名**為 `backup`，完整路徑如下：`C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\projects\backup`
4. 現在 `backup` 目錄將包含先前下載的所有桌布，每一個都置於各自的子目錄中 (數字代表桌布的 Steam 工作坊 ID)
5. 重新啟動桌布瀏覽器後，應該就能看見備份好的桌布。 現在您可以取消訂閱重複的 Steam 桌布，僅使用您的個人備份。

::: warning **切勿**手動刪除 Steam 工作坊資料夾：`C:\Program Files (x86)\Steam\steamapps\workshop\content\431960`。 手動刪除會使 Steam 混淆並重新下載所有桌布。 只要取消訂閱桌布，讓 Steam 自行刪除重複檔案即可。 ::: 因故刪除 Steam 中的桌布時，Steam 也會將桌布從電腦中刪除。 Wallpaper Engine 無法防止這點，如果會對您造成困擾，您可以備份桌布。 因故刪除 Steam 中的桌布時，Steam 也會將桌布從電腦中刪除。 Wallpaper Engine 無法防止這點，如果會對您造成困擾，您可以備份桌布。 :::