# Не воспроизводится звук / проблемы с выводом звука
Данное руководство поддержки поможет вам выявить проблемы, связанные с воспроизведением аудио в обоях. Прежде всего убедитесь, что вы используете обои, которые содержат аудио. Для этого проверьте несколько других обоев. Многие обои не содержат звуков. Если вы уверены, что ваши обои содержат аудио, читайте данное руководство.

::: warning
Обратите внимание Если звук постоянно включается и выключается каждые несколько секунд, пожалуйста, прочитайте следующее руководство:

* [Звук периодически включается и выключается](/audio/intermittent)
:::

## Убедитесь, что в Wallpaper Engine не выключен звук
В приложении есть три места, где можно отключить вывод аудио:

1. В настройках Wallpaper Engine на вкладке **«Общее»** есть опция, которая называется **«Вывод звука»**. Проверьте, что она включена.
2. Нажмите кнопку **«Мониторы»** на главном окне Wallpaper Engine в правом верхнем углу. Перед вами отобразятся все ваши экраны. На каждом экране есть кнопка выключения звука в левом нижнем углу. Проверьте, что на ваших экранах не выключен звук.
3. При выборе обоев с правой стороны находится опция **«Громкость»**, проверьте, что она не выключена и не находится на низком уровне. Если в опции написано **«Звук отключен в настройках монитора»**, значит, звук этого экрана выключен. Вернитесь к пункту 2 и включите звук.

## Проверьте звуковой микшер Windows
Windows обрабатывает весь вывод звука в Wallpaper Engine, если звук в Wallpaper Engine не выключен, значит, проблема может быть в настройках Windows. Сначала проверьте звуковой микшер Windows и убедитесь, что звук в Wallpaper Engine не выключен и не слишком тихий, как показано на скриншоте:

![Увеличьте громкость и включите звук Wallpaper Engine в звуковом микшере Windows](./audiomixer.png)

## Проверьте выбранное аудиоустройство
Еще одна причина для отсутствия звука может заключаться в том, что в Windows выбрано неверное устройство вывода звука для Wallpaper Engine. Попробуйте выбрать вручную нужное устройство для вывода звука:

1. Нажмите правой кнопкой мыши по значку звука рядом с часами в панели задач и выберите **«Открыть параметры звука»**.
2. Докрутите открывшееся окно до самого низа и кликните на **«Параметры устройств и громкости приложений»**.
3. Отобразится список всех программ, проигрывающих звук. Найдите Wallpaper Engine и выберите правильное аудиоустройство в колонке **«Вывод»**. Если вы не уверены, попробуйте все варианты. Чтобы изменения вступили в силу, может понадобиться перезапустить Wallpaper Engine.

Если вы используете несколько аудиоустройств (в особенности устройства с USB или Bluetooth) и замечали, что звук прерывается во время подключения/отключения этого устройства, то Windows может неверно переключать аудиоустройства во время работы программ. Мы не можем исправить данную проблему со своей стороны, в таких случаях можно попробовать перезапустить Wallpaper Engine, чтобы вывод аудио корректно заработал в Windows. Вы также можете переустановить и обновить аудио-драйверы, возможно, это решит проблему.

## Восстановите все аудиокодеки

Если на данном этапе звук не воспроизводится, возможно, проблема заключается в неисправных аудиокодеках. Такое происходит, если вы используете обои типа **«видео»**. Вы можете проверить это, нажав правой кнопкой на обои в Wallpaper Engine и выбрав **«Открыть в Проводнике»**. Вы увидите исходный видеофайл (обычно в формате **.mp4**), откройте его в проигрывателе Windows Media и проверьте, воспроизводит ли он аудио. **Обратите внимание:** проверку нужно выполнять только в проигрывателе Windows Media — другие видеопроигрыватели не помогут выявить проблему, поскольку такие же аудиокодеки используются в Wallpaper Engine. Если в проигрывателе Windows Media звук не воспроизводится, значит, видеофайл не содержит аудио или же кодеки в вашей системе неисправны или отсутствуют.

В таком случае вы можете использовать инструмент *Codec Tweak Tool* следуя инструкции, указанной на следующей странице, чтобы восстановить все аудио- и видеокодеки в вашей системе, и затем перезапустите Wallpaper Engine и попробуйте снова:

* [Черный экран / видео не воспроизводится — Инструмент Codec Tweak Tool](/noshow/notplaying.html#codec-tweak-tool)

