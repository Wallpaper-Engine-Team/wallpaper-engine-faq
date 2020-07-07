# Гибернация / Неработающая экранная заставка

Windows никогда не входит в режим гибернации при наличие активных аудиопотоков. Самый простой решения этой проблемы — отключение вывода аудио во вкладке «Общее» в настройках Wallpaper Engine. В результате программа перестанет мешать Windows войти в режим гибернации. Если вы хотите сохранить вывод аудио, вы можете настроить систему по инструкции ниже.

## Измените параметры электропитания Windows

Windows никогда не входит в режим гибернации при наличие активных аудиопотоков. Самый простой решения этой проблемы — отключение вывода аудио во вкладке «Общее» в настройках Wallpaper Engine. Кроме этого можно перенастроить Windows, разрешив вход в спящий режим при воспроизведении звука:

1. Зайдите в раздел «Питание и спящий режим» в настройках Windows. Для этого вбейте название раздела в поиск Windows.
2. Кликните на опцию «Дополнительные параметры питания»
3. Кликните на опцию «Настройка схемы электропитания» рядом с выбранной на компьютере схемой
4. Кликните на опцию «Изменить дополнительные параметры питания»
5. Прокрутите окошко вниз и откройте раздел «Параметры мультимедиа»
6. Кликните на опцию «При общем доступе к мультимедиа» и выберите в выпадающем списке вариант «Разрешить компьютеру переходить в спящий режим» (гибернацию)

![Enable "Allow the computer to sleep"](./power.gif)

## Проблемы с гибернацией при использовании обоев вида «Web»

Для работы Web обоев используется браузер, очень похожий на Google Chrome ("CEF"), который не дает системе войти в режим гибернации. Пока эта ошибка не будет исправлена в самом браузере, вы можете обойти ее, введя несколько команд в командную строку.

1. Search Windows for "cmd.exe" and right-click on it and select "Run as administrator" (very important, otherwise this will not work!).
2. Use the command `powercfg /requests` to view all processes that are blocking your system from hibernation (also check if other programs may be at fault here).
3. Use the following three commands to permit your system to sleep with Wallpaper Engine running:

```
powercfg /requestsoverride PROCESS webwallpaper32.exe AWAYMODE DISPLAY SYSTEM
powercfg /requestsoverride PROCESS wallpaper32.exe AWAYMODE DISPLAY SYSTEM
powercfg /requestsoverride PROCESS wallpaper64.exe AWAYMODE DISPLAY SYSTEM
```

Additionally, you can also set the **Display asleep** option in the **Performance** tab of the Wallpaper Engine settings to *Stop (free memory)* and turn off your display. That way Wallpaper Engine stops all playback when you turn your display off when leaving your computer unattended.