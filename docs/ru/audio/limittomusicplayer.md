# Ограничить визуализацию звука только проигрывателями музыки

В связи со спецификой работы Windows, с помощью настроек самой программы Wallpaper Engine невозможно ограничить визуализацию звука выбранным проигрывателем музыки. Тем не менее, вы можете добиться такого результата, используя внешнее ПО, чтобы создать *суррогатное* звуковое устройство. Эта инструкция расскаэет об одном из способов создания суррогатного звукового устройства и о том, как настроить Windows 10 и Wallpaper Engine для правильного взаимодействия с ним.

Пожалуйста, обратите внимание, что мы не предлагаем техническую поддержку суррогатным звуковым устройствам и не можем гарантировать, что описанный метод сработает: это очень продвинутые настройки программы, которые выходят за пределы того, что Wallpaper Engine предлагает пользователю. Мы не более чем предлагаем инструкцию в качестве дружеской помощи пользователям, которые готовы на дополнительные шаги для настройки собственной системы.

::: warning
Обратите внимание Эта инструкция может быть применима только к обновленным версиям Windows 10. В более старых версиях Windows могут отсутствовать некоторые функции, которые приведут к тому, что инструкция станет невыполнимой.
:::

### Установите суррогатное звуковое устройство

Мы рекомендуем использовать бесплатный вариант **VB-CABLE Virtual Audio Device**, который можно скачать с данного сайта:

* [Virtual Audio Device Download](https://www.vb-audio.com/Cable/)

Скачайте и извлеките архивированный файл, затем установите либо 32-разрядную, либо 64-разрядную версию звукового устройства, в зависимости от версии вашей системы Windows 10, используя, соответственно, либо **VBCABLE_Setup.exe**, либо **VBCABLE_Setup_x64.exe**. Be sure to launch the setup file with administrator rights by right-clicking and then selecting *Run as administrator*. Follow the instructions of the setup and make sure the audio device has been installed successfully.

### Setting up Windows and Wallpaper Engine

Check the video below which shows all the steps on an Windows 10 (English interface) from start to finish if you need some help with any of the steps below.

1. Start playing music using the software that you later want to be used for Wallpaper Engine
2. Right-click on the audio icon next to the clock in the Windows tray and select **Open Sound settings**.
3. Scroll down to the bottom of the page that opens and click on **App volume and device preferences**.
4. A list of all applications playing audio will be shown. Find your music player and in the **Output** column, change the option from **Default** to **CABLE Input (VB-Audio Virtual Cable)**. Your audio player should immediately turn quiet, this is to be expected.
5. Go back to the main page of the Windows sound settings and in the upper right corner, select **Sound Control Panel**.
6. A small window will appear, navigate to the **Recording** tab, then right-click on the **CABLE Output** audio device and select **Properties**.
7. Another window will appear, click on the **Listen** tab and select **Listen to this device**. Click on **Apply** and **OK** and the music from your music player should return.
8. Windows is now properly configured, open up the **Wallpaper Engine settings** and in the **General** tab, change the **Audio recording device** to **CABLE Input (VB-Audio Virtual Cable)**. Wallpaper Engine should now start reacting to the music from your music player but will ignore any other application on your computer.

*Video showcasing all the steps described above:*

<video width="100%" controls>
  <source src="/videos/audioinputdevice.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
