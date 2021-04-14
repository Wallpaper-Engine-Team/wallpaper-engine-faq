# Backup des Steam Workshops

Wenn Hintergründe von Steam aus irgendeinem Grund gelöscht werden, so löscht Steam diese ebenfalls von deinem PC. Wallpaper Engine kann dies nicht verhindern, aber wenn dies für dich ein Problem ist, kannst du Backups deiner Hintergründe anlegen.

Es gibt darüber hinaus auch ein Steam-Problem, bei welchem es alle Workshop-Dateien erneut herunterlädt, was sehr nervig sein kann, falls es sich um mehrere Gigabyte an Daten handelt. Das Erstellen von Backups und das Trennen der Hintergründe von Steam kann eine Lösung sein, wenn dies sehr oft auftritt.

# Erstellen eines Backups

Die folgende Anleitung erwartet, dass Steam und Wallpaper Engine im folgenden Verzeichnis installiert wurden: `C:\Programme (x86)\Steam\`. Sollten Steam und / oder Wallpaper Engine woanders installiert sein, stelle sicher, dass du die korrekten Verzeichnisse verwendest.

::: tip
**431960** ist die Steam-ID von Wallpaper Engine, Steam nutzt dieses Verzeichnis für alle Downloads für Wallpaper Engine.
:::

1. Locate the folder in which Steam stores your wallpapers, by default it is in `C:\Program Files (x86)\Steam\steamapps\workshop\content\431960`
2. Copy the folder 431960 to Wallpaper Engine's installation path here: `C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\projects\431960`
3. **Rename** the folder `431960` into `backup` so that the complete path looks like this: `C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\projects\backup`
4. The `backup` directory now includes all your previously downloaded wallpapers, each in their own sub-directory (the numbers represent the Steam Workshop ID of the wallpaper)
5. Restart the wallpaper browser and you should see the backed up wallpapers now. You can now unsubscribe the duplicate Steam ones and only use your personal copy of them

::: warning
Do **not** manually delete the Steam Workshop folder `C:\Program Files (x86)\Steam\steamapps\workshop\content\431960`. This will cause your Steam to be confused and re-download all wallpapers. Simply unsubscribe from your wallpapers and let Steam delete the duplicate files itself.
:::