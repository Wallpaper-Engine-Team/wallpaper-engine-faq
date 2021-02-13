# Резервная копия Мастерской Steam

Если по какой-то причине обои будут удалены из Steam, они автоматически будут удалены и с вашего компьютера. Удаление совершает Steam, поэтому Wallpaper Engine не может предотвратить это. Если у вас есть опасения, вы можете создать резервную копию ваших обоев.

Кроме этого, многие пользователи сообщают, что Steam может произвольно начать заново загружать все файлы из Мастерской, что может быть проблемой, когда у вас загружены гигабайты данных. Если это происходит слишком часто, вы можете решить проблему, создав резервную копию и полностью отвязав свою коллекцию от Steam.

# Создание резервной копии

Данная инструкция предполагает, что на вашем компьютере Steam и Wallpaper Engine установлены в «C:\Program Files (x86)\Steam\». Если вы установили Steam и/или Wallpaper Engine в другом месте, файлы нужно будет искать там.

::: tip
**431960** is the Steam ID of Wallpaper Engine, Steam uses this directory for all Wallpaper Engine downloads.
:::

1. Locate the folder in which Steam stores your wallpapers, by default it is in `C:\Program Files (x86)\Steam\steamapps\workshop\content\431960`
2. Copy the folder 431960 to Wallpaper Engine's installation path here: `C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\projects\431960`
3. **Переименуйте** папку `431960` в `backup` (резервная копия), чтобы путь полностью выглядел вот так: `C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\projects\backup`.
4. Теперь в каталоге `backup` хранятся все загруженные до этого момента обои в индивидуальных подкаталогах (номера соответствуют идентификационным номерам, которые конкретным обоям присвоила Мастерская Steam).
5. Перегрузите обозреватель обоев. Вы должны увидеть резервные копии обоев. Теперь вы можете отписаться от обоев-дубликатов Steam и использовать свои личные копии.

::: warning
Do **not** manually delete the Steam Workshop folder `C:\Program Files (x86)\Steam\steamapps\workshop\content\431960`. This will cause your Steam to be confused and re-download all wallpapers. Simply unsubscribe from your wallpapers and let Steam delete the duplicate files itself.
:::