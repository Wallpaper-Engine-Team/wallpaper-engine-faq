---
tags:
  - hardware
---

# Поддержка аппаратного обеспечения с RGB-подсветкой (iCUE и Chroma)

Wallpaper Engine поддерживает [**Razer Chroma**](https://www.razer.com/chroma) и [**Corsair iCUE**](https://www.corsair.com/icue), включая устройства, которые могут быть интегрированы в одну из этих экосистем.

## Как включить / выключить аппаратное обеспечение с RGB-подсветкой

В разделе «Плагины» в настройках Wallpaper Engine найдите **плагин iCUE & Chroma SDK**. Установите или снимите галочку в поле слева, чтобы включить и отключить общий плагин RGB-подсветки. Кроме того, рядом с полем для галочки находится значок шестеренки. Нажмите его для более детальной настройки плагина.

Поддержку RGB-подсветки можно включать и выключать для отдельных обоев. При включенном плагине в верхней части списка свойств конкретных обоев становится доступной опция **Включить LED-эффекты**, с помощью которой можно разрешить или запретить этим обоям управлять RGB-подсветкой.

## RGB-подсветка слишком яркая

Wallpaper Engine по умолчанию немного усиливает цвета RGB-подсветки. Благодаря этому на большинстве обоев подсветка выглядит субъективно лучше, но если вам не нравится этот эффект, вы можете отключить его, выключив опцию **Улучшить цвета LED** в настройках плагина RGB-подсветки.

## RGB-подсветка не работает

Wallpaper Engine не имеет возможности напрямую взаимодействовать с аппаратным обеспечением с RGB-подсветкой: вся информация по цветам поступает на драйверы RGB-подсветки. Если одно или несколько устройств с RGB-подсветкой не работают, причину проблемы необходимо искать в работе программного обеспечения устройств. Некоторые очень старые устройства больше не поддерживаются производителями и не будут работать. Пожалуйста, учитывайте, что в данной ситуации мы никак не можем повлиять на работу устройств.

Если вы совсем не видите раздел *Плагины* в настройках Wallpaper Engine, скорее всего у вас отсутствует или неисправен *Распространяемый компонент Visual C++ для Visual Studio 2015*, который обязателен для работы данного функционала. Вы можете скачать этот компонент с сайта Microsoft и установить, это решит проблему после перезагрузки компьютера:

* [Распространяемый компонент Visual C++ для Visual Studio 2015](https://www.microsoft.com/download/details.aspx?id=48145)

## Проблемы с RGB-подсветкой после гибернации

Иногда после гибернации RGB-подсветка может перестать работать в сочетании с Wallpaper Engine. Если RGB-подсветка или ее часть перестает правильно работать после выхода системы из спящего режима, попробуйте включить параметр **Безопасный старт после гибернации** в разделе **Общие** в настройках Wallpaper Engine. В большинстве случаев это решает проблему такого типа.

Кроме того, вы можете использовать параметр **Задержка загрузки плагинов** в нижней части вкладки **Плагины** в настройках Wallpaper Engine, чтобы отложить попытку подключения Wallpaper Engine к RGB-подсветке. Вы можете попробовать значение **30 секунд** и проверить, решится ли ваша проблема.

### Corsair

Starting with iCUE 4, you need to manually enable software control in the iCUE settings first, otherwise Wallpaper Engine cannot connect to iCUE. If you have any issues with RGB lighting in combination with Corsair iCUE, make sure to check the iCUE settings first.

* Open iCUE.
* Click the Settings icon in the upper right corner.
* Click **Software and Games** on the left menu of the settings window.
* Make sure that the *software integrations* options are enabled. Check the **Devices** tab to make sure all your hardware devices are also enabled for this type of RGB lighting.

If you still have issues with your Corsair lighting setup, try a full reinstallation of your Corsair iCUE software, then restart your computer and reinstall. Many issues can be resolved by reinstalling the Corsair software suite, followed by manually enabling the software integration options.

Note that iCUE is used in *exclusive mode*, this means that Wallpaper Engine will take priority over other iCUE-compatible software such as games. If you want your games to animate your keyboard, go to the **Performance** tab of the Wallpaper Engine settings and set the **Other applications fullscreen** option to **Stop (free memory)** to stop wallpapers while in-game. Alternatively, disable either the RGB plugin or disable the RGB option on individual wallpapers.

For support with Corsair iCUE hardware, please contact Corsair directly:

[help.corsair.com](https://help.corsair.com/)

Should you run into any issues with Corsair's support, you can still reach out to us and we will see if we can help you.

### Razer

Most problems related to Razer RGB hardware can be fixed by doing a clean reinstallation of the Razer software suite while Wallpaper Engine is turned off:

1. Полностью выключите Wallpaper Engine. Этот шаг очень важен, не пропускайте его.
2. Удалите все программное обеспечение Razer со своего компьютера через Windows.
3. Повторно скачайте последнюю версию Razer Synapse 3 и установите ее. **Важно:** обязательно переустановите модуль **Chroma Connect** в самом Razer Synapse.
4. Перезагрузите компьютер, не запускайте Wallpaper Engine до перезагрузки Windows.

See if this resolves your issues with your RGB hardware. For additional support with Razer hardware, please contact Razer directly:

[support.razer.com](https://support.razer.com/)

Should you run into any issues with Razer's support, you can still reach out to us and we will see if we can help you.

#### Razer Synapse 2 и более ранние версии

We only support Razer Synapse 3 or newer. If you are using Razer Synapse 1 or Razer Synapse 2, make sure to fully uninstall them and upgrade to the latest version of Razer Synapse. In the past, some users had issues with remnants of old Razer Synapse having been left on their system. If you had Razer Synapse 2 or older installed and have issues with your RGB lighting or even experience crashes with the RGB plugin being enabled, you may need to find any leftovers of old Razer Synapse versions on your system and delete it.

If your Razer hardware is relatively old and does not support Razer Synapse 3 or newer, unfortunately its RGB lighting is not compatible with Wallpaper Engine.