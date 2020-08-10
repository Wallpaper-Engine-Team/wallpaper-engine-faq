# Привязка обоев к определенным программам

С помощью Wallpaper Engine можно автоматически переключаться между разными обоями, в зависимости от того, какой .exe файл запущен в системе. Эта функция может быть полезна, если вы, например, хотите использовать менее отвлекающие обои во время игры или автоматически выводить на экран визуализатор звука при запуске проигрывателя.

::: tip
Если у вас возникают технические проблемы с определенными играми или программами, вы также можете задать в настройках Wallpaper Engine правило, которое будет отключать Wallpaper Engine при запуске определенного .exe файла. Если вы хотите решить техническую проблему взаимодействия с другой программой, прочитайте эту инструкцию: [Решение проблем с конкретными программами и играми](/functionality/applicationrules.html)
:::

## Создание правила приложения

На вкладке **Производительность** в настройках Wallpaper Engine нажмите кнопку **Редактировать** в разделе **Правила приложения**. Нажмите кнопку **Создать новое правило**, чтобы задать новые обои для выбранного вами .exe файла. В строке ввода **Название приложения:** введите название вашего .exe файла. Убедитесь, что названия полностью идентичны: например, *musicplayer.exe*. В пункте **«Условие»** выберите **«Запущено»**. Для опции **«Воспроизведение обоев»** вы можете выбрать один из трех вариантов:

* Загрузить обои
* Загрузить плейлист
* Загрузить профиль

What is important to note here is that **Load wallpaper** and **Load playlist** will both only load one wallpaper and span it across all screens. If you have multiple monitors and want to load independent wallpapers for each screen (or even different playlists on each screen), you need to use the **Load Profile** option. Read the following section for more infos on how to set this up.

### Setting up a multi-monitor profile

**Load Profile** in the application rules refers to mulit-monitor profiles which can be configured in the monitor overview (screen icon in the upper right corner of the interface). A profile is a snapshot of all your currently selected wallpapers and playlists across all your screens. Whenever a profile is loaded, all wallpapers and playlists will be placed according to the profile configuration.

Configure your wallpapers and playlists across all monitors the the way you want them to be, then click on the **Save profile** button in the monitor settings and save the current setup under a name of your choice. Keep in mind that any subsequent changes you make to your setup will not change the profile until you use the **Save profile** button again. You can set up multiple profiles and assign them to multiple apps at once. For example, you may create a **Music**, a **Gaming** and a **Movies** profile and then assign each profile to all .exe files that match these categories.

<video width="100%" controls autplay loop>
  <source src="/videos/apprules.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>