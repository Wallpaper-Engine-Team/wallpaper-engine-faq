# 備份 Steam 工作坊

因故刪除 Steam 中的桌布時，Steam 也會將桌布從電腦中刪除。 Wallpaper Engine 無法防止這點，這若會對您造成困擾，您可以備份桌布。

類似的是，Steam 會隨機決定許多報告，以重新下載所有工作坊檔案，若您的資料多達數 GB，這點可能很煩人。 若上述情況頻繁出現，建立備份並截斷與 Steam 的所有連結即可避免。

# 建立備份

以下指南預設您的 Steam 與 Wallpaper Engine 安裝於「C:\Program Files (x86)\Steam\」，若您將 Steam / Wallpaper Engine 安裝於別處，請務必檢查該處。

1. 找出 Steam 儲存桌布的資料夾，其預設路徑為 `C:\Program Files (x86)\Steam\steamapps\workshop\content\431960` ::: 堤是 **431960** 是 Wallpaper Engine 的 Steam ID，上述目錄是 Steam 儲存所有 Wallpaper Engine 的下載所用的。 :::
2. Copy the folder 431960 to Wallpaper Engine's installation path here: `C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\projects\431960`
3. **Rename** the folder `431960` into `backup` so that the complete path looks like this: `C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\projects\backup`
4. The `backup` directory now includes all your previously downloaded wallpapers, each in their own sub-directory (the numbers represent the Steam Workshop ID of the wallpaper)
5. Restart the wallpaper browser and you should see the backed up wallpapers now. You can now unsubscribe the duplicate Steam ones and only use your personal copy of them

::: warning Do **not** manually delete the Steam Workshop folder `C:\Program Files (x86)\Steam\steamapps\workshop\content\431960`. This will cause your Steam to be confused and re-download all wallpapers. Simply unsubscribe from your wallpapers and let Steam delete the duplicate files itself. :::