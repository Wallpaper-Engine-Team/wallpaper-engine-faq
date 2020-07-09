---
tags:
  - hardware
---

# Поддержка аппаратного обеспечения с RGB-подсветкой (iCUE & Chroma)

Wallpaper Engine поддерживает [**Razer Chroma**](https://www.razer.com/chroma) и [**Corsair iCUE**](https://www.corsair.com/icue), включая устройства, которые могут быть интегрированы в одну из этих экосистем.

## Как включить / выключить аппаратное обеспечение с RGB-подсветкой

Найдите **плагин iCUE & Chroma SDK** разделе «Плагины» в настройках Wallpaper Engine. В поле слева можно ставить и снимать галочку, соответственно включая и отключая общий плагин подсветки RGB. Кроме этого, рядом с полем для галочки находится значок в виде шестеренки, на который можно кликнуть для более детальной настройки плагина.

Кроме этого поддержку RGB-подсветки можно включать и выключать для отдельных обоев. При включенном плагине в верхней части списка свойств конкретных обоев становится доступной опция **«Включить LED-эффекты»**, с помощью которой можно разрешить или запретить этим обоям управлять RGB-подсветкой.

## RGB-подсветка слишком яркая

Wallpaper Engine по умолчанию немного усиливает цвета RGB-подсветки. Благодаря этому на большинстве обоев подсветка выглядит субъективно лучше, но если вам не нравится этот эффект, вы можете отключить его, выключив опцию **«Улучшить цвета LED»** в настройках плагина RGB-подсветки.

## RGB-подсветка не работает

Wallpaper Engine не имеет возможности напрямую взаимодействовать с аппаратным обеспечением с RGB-подсветкой: вся информация по цветам поступает на драйвера, обеспечивающие RGB-подсветку. Если один или несколько устройств с RGB-подсветкой не работают, причину проблемы необходимо искать в работе программного обеспечения устройств. Некоторые очень старые устройства не поддерживаются полностью производителями аппаратного обеспечения и не будут работать. Пожалуйста, учитывайте, что в данной ситуации мы никак не можем повлиять на работу устройств.

Если вы даже не видите раздел *«Плагины»* в настройках Wallpaper Engine, скорее всего у вас отсутствует или неисправен *Распространяемый пакет Visual C++ для Visual Studio 2015*, который обязателен для работы данного функционала. Вы можете скачать этот пакет с сайта Microsoft и установить, это решит проблему после перезагрузки компьютера:

* [Распространяемый пакет Visual C++ для Visual Studio 2015](https://www.microsoft.com/download/details.aspx?id=48145)

### Corsair

На некоторых компонентах аппаратного обеспечения, в том числе на **модулях памяти Corsair (ОЗУ) по умолчанию отключена функция управления с помощью программных средств**. Это значит, что подсветка модулей памяти не будет включаться в соответствии с командами Wallpaper Engine, пока вы не включите эту функцию в программных настройках iCUE. Удостоверьтесь, что в разделе памяти в настройках вашего устройства iCUE выбрана опция «Разрешить приложению полный контроль»:

![Enable full software control in iCUE](./icue.png)

Внимательно проверьте, включена ли эта функция для других устройств, которые неправильно работают.

Обратите внимание, что iCUE работает в *режиме эксклюзивного использования*. Это значит, что Wallpaper Engine будет иметь приоритет перед другими программами, совместимыми с iCUE, например, играми. If you want your games to animate your keyboard, go to the **Performance** tab of the Wallpaper Engine settings and set the **Other applications fullscreen** option to **Stop (free memory)** to stop wallpapers while in-game. Alternatively, disable either the RGB plugin or disable the RGB option on individual wallpapers.

For support with Corsair iCUE hardware, please contact Corsair directly:

[help.corsair.com](https://help.corsair.com/)

Should you run into any issues with Corsair's support, you can still reach out to us and we will see if we can help you.

### Razer
We only support Razer Synapse 3 or newer. If you are using Razer Synapse 1 or Razer Synapse 2, make sure to fully uninstall them and upgrade to the latest version of Razer Synapse. In the past, some users had issues with remnants of old Razer Synapse having been left on their system. If you had Razer Synapse 2 or older installed and have issues with your RGB lighting or even experience crashes with the RGB plugin being enabled, you may need to find any leftovers of old Razer Synapse versions on your system and delete it.

If your Razer hardware is relatively old and does not support Razer Synapse 3 or newer, unfortunately its RGB lighting is not compatible with Wallpaper Engine.

For support with Razer hardware, please contact Razer directly:

[support.razer.com](https://support.razer.com/)

Should you run into any issues with Razer's support, you can still reach out to us and we will see if we can help you.