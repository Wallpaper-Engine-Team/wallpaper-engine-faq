---
tags:
  - user interface
  - green
  - white
  - pixelated
  - unreadable
---

# Некорректное отображение окна Wallpaper Engine

В случаях, когда обозреватель Wallpaper Engine не работает, обычно причиной ошибки являются неисправные драйвера видеокарты или антивирус. Вы найдете подробную информацию по этой проблеме ниже.

::: предупреждение Обратите внимание В данной статье рассматривается проблема Wallpaper Engine, при которой неисправен или отображается черным **интерфейс**. В случае, если вы столкнулись с **черными обоями**, вам нужна статья [«Черный экран / Видео не проигрывается»](/noshow/notplaying.html). :::

## Обозреватель Wallpaper Engine черный или белый

В большинстве случаев, данная проблема говорит о том, что пользовательский интерфейс Wallpaper Engine был по ошибке заблокирован программой-антивирусом. Пожалуйста, удостоверьтесь, что программа Wallpaper Engine занесена в список игнорируемых исключений вашего антивируса. В первую очередь это касается ее загрузочных файлов и в особенности файла **wallpaper_engine/bin/ui32.exe**.

В некоторых случаях после этого бывает необходимо провести проверку целостности файлов Wallpaper Engine или даже переустановить программу, если антивирус заблокировал некоторые важные файлы без возможности восстановления:

* [Steam Support: проверка целостности файлов игры](https://support.steampowered.com/kb_article.php?ref=2037-QEUH-3335)

Если проверка файлов с помощью Steam не решила ошибку после того, как вы настроили список исключений антивируса, попробуйте переустановить Wallpaper Engine через Steam. Если ваш антивирус совсем озверевший, он мог даже заблокировать без возможности восстановления пути к файлам, которые использует Wallpaper Engine. В этом случае необходимо сначала удалить антивирус, а затем установить Wallpaper Engine в другой каталог. По желанию для этого можно создать новую библиотеку игр в Steam.

## Интерфейс Wallpaper Engine содержит зеленые артефакты или белые линии

У вас неисправны или неправильно настроены драйвера видеокарты. Загрузите последнюю версию драйверов для вашей видеокарты (даже если у вас уже установлена последняя версия) и проведите чистую переустановку. Очень важно сначала удалить драйвера, а потом установить последнюю версию, чтобы гарантированно очистить систему от неисправных файлов и старых настроек.

Если проблема не была решена, отключите Wallpaper Engine. Затем перезапустите Wallpaper Engine, использовав для этого третью опцию запуска программы в Steam («Disable UI hardware acceleration»).

### Rare Steam Overlay Bug Breaking Wallpaper Engine User Interface

The other possible reason for a black application window is a rare Steam bug with the Steam overlay. You can try the following:

Turn off Wallpaper Engine completely (right-click on the tray icon and then select "Quit"). Afterwards, open up Steam, right-click on Wallpaper Engine, select "Properties" and then disable the "Enable Steam Overlay while in-game" option. After disabling the option, try to restart Wallpaper Engine via Steam. 