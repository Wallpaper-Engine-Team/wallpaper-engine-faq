# Низкая производительность / кадровая частота некоторых игр и программ

По умолчанию, Wallpaper Engine временно останавливает работу при запуске игры. Вы можете изменить поведение Wallpaper Engine при запуске игр и посторонних программ во вкладке **«Производительность»** в настройках.

Если у вас возникают проблемы с низкой производительностью определенных игр или программ, вы можете скорректировать правила поведения Wallpaper Engine. Обычно низкая производительность говорит о том, что системе не хватает ОЗУ или видеопамяти (оперативной памяти видеокарты). При определенных настройках Wallpaper Engine будет освобождать память, когда вы запускаете игры. Для этого зайдите во вкладку **«Производительность»** в настройках выберите вариант **«Остановить (освободить память)»** в опции **«Другое приложение в полный экран»**.

## Правила приложения

Если у вас возникают проблемы только с конкретной игрой или программой, вы можете изменить настройки только для этой одной программы, создав **правило приложения**:

1. Откройте вкладку **«Производительность»** в настройках Wallpaper Engine
2. Нажмите на кнопку **«Редактировать»** рядом с опцией **«Правила приложения»**
3. In the pop-up that appears, click on **Create new rule**
4. Create a new rule with the following settings:
    * **Application name:** "game.exe" *(replace this with the actual .exe file of your game)*
    * **Condition:** "Is running"
    * **Wallpaper playback:** "Stop (free memory)"
5. Confirm by clicking on **Create**

Wallpaper Engine will now completely remove all wallpapers from memory when the *.exe* you configured is launched.

## Conflicts with screen-recording tools or overlays

If you are using any game streaming, game recording or software with overlays, make sure they are not accidentally recording Wallpaper Engine in the background. This can also be the case if you use any game streaming functionalities from your graphics card drivers (Nvidia ShadowPlay, Nvidia Share or AMD ReLive for example).
