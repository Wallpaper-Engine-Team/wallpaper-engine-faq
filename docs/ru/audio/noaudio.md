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

## Check the Windows audio mixer
Wallpaper Engine lets all audio output be handled by Windows, so if Wallpaper Engine itself is not muted, the issue must be somewhere in your Windows setup. First, check the Windows audio mixer and ensure that Wallpaper Engine is not muted or set to a very low volume, as shown in the following screenshot:

![Raise volume and unmute Wallpaper Engine in the Windows audio mixer](./audiomixer.png)

## Check the selected audio device
Another possible reason for the lack of audio output could be that Windows has selected the wrong audio output device for Wallpaper Engine, try manually forcing your desired audio output device to be used:

1. Right-click on the audio icon next to the clock in the Windows tray and select **Open Sound settings**.
2. Scroll down to the bottom of the page that opens and click on **App volume and device preferences**.
3. A list of all applications playing audio will be shown. Find Wallpaper Engine and in the **Output** column, select the correct audio output device. If you are unsure, try all possible options. A restart of Wallpaper Engine may be necessary for this to take effect.

If you use multiple audio devices (especially when using USB or Bluetooth audio devices) and notice that audio cuts out when a device disconnects or reconnects, Windows sometimes does not reliably switch audio devices on-the-fly for running programs. This cannot be fixed from our end, in these rare cases you may need to restart Wallpaper Engine so that Windows starts to correctly handle the audio output again. You can also try and reinstall and update any audio drivers and see if that alleviates these types of issues.

## Reset all audio codecs

If audio output is still not playing at this point, some audio codecs may be broken, this is mainly relevant when using **Video** type wallpapers. You can double-check this by right-clicking on your wallpaper in Wallpaper Engine and selecting **Open in Explorer**. You should see the source video file (usually an **.mp4** file), open that file with Windows Media Player and check if it plays audio. **Please note:** It is very important that you test this with Windows Media Player only - other video players are irrelevant for this test as the underlying audio codecs are used by Wallpaper Engine as well. If no audio is playing in Windows Media Player, then either the video file does not have audio or the audio codecs on your system are indeed broken or missing.

In that case, you can use the *Codec Tweak Tool* as explained on the following page to reset all audio and video codecs on your system, afterwards restart Wallpaper Engine and try again:

* [Videos Black / Not Playing Properly - Codec Tweak Tool](noshow/notplaying.html#codec-tweak-tool)

