- - -
  tags:
  - screensavers
  - hibernation
  - sleep
  - power saving
- - -

# Гибернация / неработающая экранная заставка

Windows никогда не входит в режим гибернации пока какие-либо процессы воспроизводят аудио. You can get around this by either disabling audio output in the "General" tab of the Wallpaper Engine settings to prevent Windows from blocking hibernation in the first place. If you want to continue to have audio output, follow the steps in this guide on how to achieve that.

## Измените параметры электропитания Windows

Windows does not hibernate with any active audio streams open. You can get around this by either disabling audio output in the "General" tab of the Wallpaper Engine settings or re-configuring your Windows to allow it to sleep with audio playback enabled:

1. Зайдите в раздел «Параметры питания и спящего режима» в настройках Windows. Для этого введите название раздела в поиске Windows.
2. Нажмите на «Дополнительные параметры питания».
3. Нажмите на «Настройку схемы электропитания» рядом с выбранной на компьютере схемой.
4. Нажмите на «Изменить дополнительные параметры питания».
5. Прокрутите список вниз и разверните раздел «Параметры мультимедиа».
6. Для параметра «При общем доступе к мультимедиа» в выпадающем списке выберите вариант «Разрешить компьютеру переходить в режим отсутствия» (для экранных заставок) **или** «Разрешить компьютеру переходить в спящий режим» (для гибернации).

![Enable "Allow the computer to sleep"](./power.gif)

## Проблемы с гибернацией при использовании обоев типа «веб»

"Web" wallpapers use a web browser similar to Google Chrome ("CEF") which will prevent hibernation mode. Until this is fixed in the browser, you can get around this with some command-line prompts.

1. Введите «cmd.exe» в поиске Windows, нажмите правой кнопкой мыши по программе и выберите вариант «Запустить от имени администратора» (последний пункт очень важен: при иных настройках дальнейшие шаги не помогут!).
2. Используйте команду `powercfg /requests`, чтобы отобразить список процессов, которые не дают системе войти в режим гибернации (заодно удостоверьтесь, что проблема не связана со сторонними программами).
3. Используйте следующие три команды, чтобы разрешить системе вход в режим гибернации при работе Wallpaper Engine:

```
powercfg /requestsoverride PROCESS webwallpaper32.exe AWAYMODE DISPLAY SYSTEM
powercfg /requestsoverride PROCESS wallpaper32.exe AWAYMODE DISPLAY SYSTEM
powercfg /requestsoverride PROCESS wallpaper64.exe AWAYMODE DISPLAY SYSTEM
```

Additionally, you can also set the **Display asleep** option in the **Performance** tab of the Wallpaper Engine settings to *Stop (free memory)* and turn off your display. That way Wallpaper Engine stops all playback when you turn your display off when leaving your computer unattended.