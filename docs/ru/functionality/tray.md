# Скрытие значка Wallpaper Engine в области уведомлений

Вы можете скрыть значок Wallpaper Engine в области уведомлений рядом с часами, вручную создав раздел реестра, который будет выполнять эту функцию.

::: warning Мы не рекомендуем не скрывать значок в области уведомлений за исключением ситуации, а которой он настолько вас раздражает, что вы готовы смириться с негативными последствиями этого решения. :::

После того, как значок будет скрыт, Wallpaper Engine можно будет закрыть единственным образом: через опцию «Завершить процесс» в диспетчере задач Windows. Пользовательский интерфейс необходимо будет запустить через Steam или .exe файл, что может быть довольно неудобно и неинтуитивно.

Если вы все еще хотите скрыть значок в области уведомлений, выполните следующие шаги:

Чтобы создать раздел реестра, откройте меню «Пуск» Windows и введите в поиск слово «regedit.exe». Это запустит редактор реестра.

1. Go to the following registry directory: *HKEY_CURRENT_USER\Software\WallpaperEngine*
2. Right-click on the *WallpaperEngine* registry folder, select *New* and then *DWORD (32 Bit) Value*.
3. Give the registry the following name: *hideTrayIcon*
4. Make sure that the name is correct, it must have no spaces and must be written exactly like that.
5. Double-click on the registry key and give it the value: *1*
6. Restart Wallpaper Engine, the application will now not show a tray icon.

You can reverse this process by setting *hideTrayIcon* to *0* or deleting it altogether, followed by restarting Wallpaper Engine. 