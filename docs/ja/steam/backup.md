# Steamワークショップのバックアップ

なんらかの理由によって壁紙がSteamから削除された場合、SteamはそれをあなたのPCからも削除します。 Wallpaper Engineにはそれを防ぐことはできませんが、心配ならば、壁紙のバックアップを取ることができます。

それと似た問題で、Steamがランダムにすべてのワークショップファイルを再ダウンロードするという報告が多数あります。何GBものデータを持っている場合には、かなりうっとうしいことになります。 Creating a backup and severing all ties to Steam can avoid that if it happens too often.

# Creating a Backup

The following guide expects that your Steam and Wallpaper Engine are installed in `C:\Program Files (x86)\Steam\`, if you have installed your Steam / Wallpaper Engine somewhere else, be sure to check in those locations.

1. Locate the folder in which Steam stores your wallpapers, by default it is in `C:\Program Files (x86)\Steam\steamapps\workshop\content\431960` ::: tip **431960** is the Steam ID of Wallpaper Engine, Steam uses this directory for all Wallpaper Engine downloads. :::
2. Copy the folder 431960 to Wallpaper Engine's installation path here: `C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\projects\431960`
3. **Rename** the folder `431960` into `backup` so that the complete path looks like this: `C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\projects\backup`
4. The `backup` directory now includes all your previously downloaded wallpapers, each in their own sub-directory (the numbers represent the Steam Workshop ID of the wallpaper)
5. Restart the wallpaper browser and you should see the backed up wallpapers now. You can now unsubscribe the duplicate Steam ones and only use your personal copy of them

::: warning Do **not** manually delete the Steam Workshop folder `C:\Program Files (x86)\Steam\steamapps\workshop\content\431960`. This will cause your Steam to be confused and re-download all wallpapers. Simply unsubscribe from your wallpapers and let Steam delete the duplicate files itself. :::