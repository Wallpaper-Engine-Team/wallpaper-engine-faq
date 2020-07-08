---
tags:
  - application
  - rules
  - exception
  - whitelist
  - blacklist
  - lags
  - laggy
  - game
  - performance
  - fps
  - crash
  - sound
  - audio
  - intermittent
---

# Решение проблем с конкретными программами или играми

Если у вас возникают проблемы с конкретной игрой или программой, вы можете решить их, задав особые правила поведения Wallpaper Engine для определенных ситуаций, например, в случае запуска «проблемной» программы или воспроизведения ей звука.

## Создание правила приложения

Если зайти в панель *«Производительность»* в настройках Wallpaper Engine и кликнуть на кнопку *«Редактировать»*, расположенную рядом с опцией *«Правила приложения»*, откроется общее окно с вашими правилами. Нажав на кнопку *««Редактировать»»*, вы сможете задать особые правила поведения Wallpaper Engine при работе с определенной программой.

![Application Rules Overview](./applicationrule.gif)

Вам будет представлен список всех .exe файлов, которые запущены на компьютере. Выберите .exe файл из списка или забейте в поиск точное название .exe файла, с которым возникла проблема. Две другие опции позволяют настроить поведение Wallpaper Engine и задать условия исполнения правила. Вы найдете подробную информацию и конкретные примеры ниже.

::: tip You can also change these settings for all applications in the **Performance** tab of the Wallpaper Engine settings. If you are having performance issues in multiple games, for example, it may make sense to just change the **Other application fullscreen** option to **Stop (free memory)** so that Wallpaper Engine will turn itself off when you launch any game or fullscreen application. :::

### Решение проблем с производительностью программ или игр

Выберите из списка .exe файл программы, для которой вы хотите создать особое правило, или вбейте его название в поле **«Название приложения»**. Затем выберите в выпадающем списке опции **«Условие»** вариант **«Запущено»**, а в выпадающем списке опции **«Воспроизведение обоев»** вариант **«Остановить (освободить память)»**. При таких настройках Wallpaper Engine будет полностью удалять все обои из памяти во время работы выбранной программы или игры, тем самым решит проблему совместимости.

### Fixing intermittent sound with background recording tools

Select the .exe of the program you want to have a special rule for from the list or type it into the **Application name** field. Afterwards, set **Condition** to **Is playing audio** and **Wallpaper playback** to **Keep running**. This means Wallpaper Engine will not mute itself when the application in question is playing or recording audio. Windows does not differentiate between playing or recording audio, this is why Wallpaper Engine will constantly mute and unmute itself if you are recording it. Many game streaming applications can do this by accident and without your knowledge.

### Other behavior

Check out all possible conditions and wallpaper playback options for more types of application rules. You can also configure Wallpaper Engine to mute or pause when you launch a certain application.

::: tip You can also change these settings for all applications in the **Performance** tab of the Wallpaper Engine settings. If you are having performance issues in multiple games, for example, it may make sense to just change the **Other application fullscreen** option to **Stop (free memory)** so that Wallpaper Engine will turn itself off when you launch any game or fullscreen application. :::
