# Резервная копия Мастерской Steam

Если по какой-то причине обои будут удалены из Steam, они автоматически будут удалены и с вашего компьютера. Удаление совершает Steam, поэтому Wallpaper Engine не может предотвратить это. Если у вас есть опасения, вы можете создать резервную копию ваших обоев.

Кроме этого, многие пользователи сообщают, что Steam может произвольно начать заново загружать все файлы из Мастерской, что может раздражать, если у вас гигабайты данных. Если это происходит слишком часто, вы можете решить проблему создав резервную копию и полностью отвязав свою коллекцию от Steam.

# Создание резервной копии

Данная инструкция предполагает, что на вашем компьютере Steam и Wallpaper Engine установлены в `C:\Program Files (x86)\Steam\`. Если вы установили Steam и/или Wallpaper Engine в другом месте, вам понадобится искать файлы там.

1. Locate the folder in which Steam stores your wallpapers, by default it is in `C:\Program Files (x86)\Steam\steamapps\workshop\content\431960` ::: tip **431960** is the Steam ID of Wallpaper Engine, Steam uses this directory for all Wallpaper Engine downloads. :::
2. Copy the folder 431960 to Wallpaper Engine's installation path here: `C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\projects\431960`
3. **Rename** the folder `431960` into `backup` so that the complete path looks like this: `C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\projects\backup`
4. The `backup` directory now includes all your previously downloaded wallpapers, each in their own sub-directory (the numbers represent the Steam Workshop ID of the wallpaper)
5. Restart the wallpaper browser and you should see the backed up wallpapers now. You can now unsubscribe the duplicate Steam ones and only use your personal copy of them

::: warning Do **not** manually delete the Steam Workshop folder `C:\Program Files (x86)\Steam\steamapps\workshop\content\431960`. This will cause your Steam to be confused and re-download all wallpapers. Simply unsubscribe from your wallpapers and let Steam delete the duplicate files itself. :::