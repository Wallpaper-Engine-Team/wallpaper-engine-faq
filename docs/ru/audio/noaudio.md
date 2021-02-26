# Не воспроизводится звук / проблемы с выводом звука
Данное руководство поддержки поможет вам выявить проблемы, связанные с воспроизведением аудио в обоях. Прежде всего убедитесь, что вы используете обои, которые содержат аудио. Для этого проверьте несколько других обоев. Многие обои не содержат звуков. Если вы убедились, что ваши обои содержат аудио, читайте данное руководство.

::: warning
Обратите внимание Если звук постоянно включается и выключается каждые несколько секунд, пожалуйста, прочитайте следующее руководство:

* [Звук периодически включается и выключается](/audio/intermittent)
:::

## Убедитесь, что в Wallpaper Engine не выключен звук
В приложении есть три места, где можно отключить вывод аудио:

1. В настройках Wallpaper Engine на вкладке **Общее** есть опция, которая называется **Вывод звука**. Проверьте, что она включена.
2. Нажмите кнопку **Мониторы** на главном окне Wallpaper Engine в правом верхнем углу. Перед вами отобразятся все ваши экраны. На каждом экране есть кнопка выключения звука в левом нижнем углу. Проверьте, что на ваших экранах не выключен звук.
3. При выборе обоев с правой стороны находится опция **Громкость**, проверьте, что она не выключена и ннаходится на низком уровне. Если в опции написано "**Звук отключен в настройках монитора**", значит, ваш монитор выключен. Вернитесь к пункту 2 и включите звук на экране.

## Проверьте звуковой мишкер Windows
Windows обрабатывает весь вывод звука в Wallpaper Engine, если звук в Wallpaper Engine не выключен, значит, проблема заключается в системе Windows. Сначала проверьте звуковой микшер Windows и убедитесь, что звук в Wallpaper Engine не выключен и не слишком тихий, как показано на скриншоте:

![Raise volume and unmute Wallpaper Engine in the Windows audio mixer](./audiomixer.png)

## Проверьте выбранное аудиоустройство
Еще одна причина для отсутствия звука может заключаться в том, что в Windows выбрано неверное устройство вывода звука для Wallpaper Engine. Попробуйте выбрать вручную нужное устройство для вывода звука:

1. Нажмите правой кнопкой мыши по значку звука рядом с часами в панели задач и выберите "**Открыть параметры звука**".
2. Докрутите открывшееся окно до самого низа и кликните на **«Параметры устройств и громкости приложений»**.
3. Отобразится список всех программ, проигрывающих звук. Найдите Wallpaper Engine и выберите правильное аудиоустройство в колонке **«Вывод»**. Если вы не уверены, попробуйте все варианты. Чтобы изменения вступили в силу, может понадобиться перезапустить Wallpaper Engine.

If you use multiple audio devices (especially when using USB or Bluetooth audio devices) and notice that audio cuts out when a device disconnects or reconnects, Windows sometimes does not reliably switch audio devices on-the-fly for running programs. This cannot be fixed from our end, in these rare cases you may need to restart Wallpaper Engine so that Windows starts to correctly handle the audio output again. You can also try and reinstall and update any audio drivers and see if that alleviates these types of issues.

## Reset all audio codecs

If audio output is still not playing at this point, some audio codecs may be broken, this is mainly relevant when using **Video** type wallpapers. You can double-check this by right-clicking on your wallpaper in Wallpaper Engine and selecting **Open in Explorer**. You should see the source video file (usually an **.mp4** file), open that file with Windows Media Player and check if it plays audio. **Please note:** It is very important that you test this with Windows Media Player only - other video players are irrelevant for this test as the underlying audio codecs are used by Wallpaper Engine as well. If no audio is playing in Windows Media Player, then either the video file does not have audio or the audio codecs on your system are indeed broken or missing.

In that case, you can use the *Codec Tweak Tool* as explained on the following page to reset all audio and video codecs on your system, afterwards restart Wallpaper Engine and try again:

* [Videos Black / Not Playing Properly - Codec Tweak Tool](noshow/notplaying.html#codec-tweak-tool)

