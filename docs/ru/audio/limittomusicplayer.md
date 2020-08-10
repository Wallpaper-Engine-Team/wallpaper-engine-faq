# Ограничить визуализацию звука только проигрывателями музыки

В связи со спецификой работы Windows, с помощью настроек самой программы Wallpaper Engine невозможно ограничить визуализацию звука выбранным проигрывателем музыки. Тем не менее, вы можете добиться такого результата, используя внешнее ПО, чтобы создать *суррогатное* звуковое устройство. Эта инструкция расскаэет об одном из способов создания суррогатного звукового устройства и о том, как настроить Windows 10 и Wallpaper Engine для правильного взаимодействия с ним.

Пожалуйста, обратите внимание, что мы не предлагаем техническую поддержку суррогатным звуковым устройствам и не можем гарантировать, что описанный метод сработает: это очень продвинутые настройки программы, которые выходят за пределы того, что Wallpaper Engine предлагает пользователю. Мы не более чем предлагаем инструкцию в качестве дружеской помощи пользователям, которые готовы на дополнительные шаги для настройки собственной системы.

::: warning
Обратите внимание Эта инструкция может быть применима только к обновленным версиям Windows 10. В более старых версиях Windows могут отсутствовать некоторые функции, которые приведут к тому, что инструкция станет невыполнимой.
:::

### Установите суррогатное звуковое устройство

Мы рекомендуем использовать бесплатный вариант **VB-CABLE Virtual Audio Device**, который можно скачать с данного сайта:

* [Virtual Audio Device Download](https://www.vb-audio.com/Cable/)

Скачайте и извлеките архивированный файл, затем установите либо 32-разрядную, либо 64-разрядную версию звукового устройства, в зависимости от версии вашей системы Windows 10, используя, соответственно, либо **VBCABLE_Setup.exe**, либо **VBCABLE_Setup_x64.exe**. Вам понадобится запустить загрузочный файл от имени администратора. Для этого кликните на него правой кнопкой мыши и нажмите на *«Запустить от имени администратора»*. Выполните инструкции по инсталляции и удостоверьтесь, что звуковое устройство было установлено успешно.

### Настройка Windows и Wallpaper Engine

Если у вас возникнут трудности с перечисленными внизу шагами, полностью посмотрите видео внизу страницы, где показаны все необходимые действия на Windows 10 (английский интерфейс).

1. Запустите музыку на ПО, которое вы в дальнейшем хотите использовать вместе с Wallpaper Engine.
2. Нажмите правой кнопкой мыши по значку звука рядом с часами в панели задач и выберите **«Открыть параметры звука»**.
3. Докрутите открывшееся окно до самого низа и кликните на **«Параметры устройств и громкости приложений»**.
4. Вам покажет список всех программ, проигрывающих звук. Найдите ваш музыкальный проигрыватель и в колонке **«Вывод»** смените опцию с **«По умолчанию»** на **«CABLE Input (VB-Audio Virtual Cable)»**. Музыкальный проигрыватель немедленно замолчит, в этом нет ошибки.
5. Go back to the main page of the Windows sound settings and in the upper right corner, select **Sound Control Panel**.
6. A small window will appear, navigate to the **Recording** tab, then right-click on the **CABLE Output** audio device and select **Properties**.
7. Another window will appear, click on the **Listen** tab and select **Listen to this device**. Click on **Apply** and **OK** and the music from your music player should return.
8. Windows is now properly configured, open up the **Wallpaper Engine settings** and in the **General** tab, change the **Audio recording device** to **CABLE Input (VB-Audio Virtual Cable)**. Wallpaper Engine should now start reacting to the music from your music player but will ignore any other application on your computer.

*Video showcasing all the steps described above:*

<video width="100%" controls>
  <source src="/videos/audioinputdevice.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
