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

## Problems with RGB hardware after hibernation

In rare cases, hibernation may cause RGB hardware to stop working in combination with Wallpaper Engine. If some or all of your RGB hardware stops working correctly after your system wakes up from hibernation, try enabling the **Safe start after hibernation** option in the **General** tab of the Wallpaper Engine settings, this solves these types of issues for the majority of affected users.

Additionally, you can use the **Plugin load delay** option at the bottom of the **Plugins** tab of the Wallpaper Engine settings to delay the connection attempt that Wallpaper Engine makes to your RGB hardware. You can try a value of **30 seconds** and test if that fixes the problem for you.

### Corsair

Some hardware such as **Corsair system memory (RAM) have software controls disabled by default**, meaning that your memory modules will not light up according to Wallpaper Engine unless you allow this in the iCUE software settings. Make sure the "Enable full software control" option in your iCUE device settings in the memory section is selected:

![Enable full software control in iCUE](./icue.png)

Double-check this option for any other hardware parts which are not working properly.

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