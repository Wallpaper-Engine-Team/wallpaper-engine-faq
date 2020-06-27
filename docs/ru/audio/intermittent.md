# Звук / Аудио периодически включается и выключается

Windows не различает между собой записывающие устройства и устройства воспроизведения звука, поэтому она уведомляет Wallpaper Engine, что другая программа воспроизводит звук, в то время как на самом деле идёт запись звука вашего компьютера.

Перейдите на вкладку "Производительность" в настройках Wallpaper Engine. Если в пункте значение *"Другое приложение воспроизводит аудио"* установлено на* "Заглушить"* и вы замечаете, что звук от Wallpaper Engine продолжает воспроизводится и затем выключается, вы, вероятно, имеете звукозаписывающую программу записи экрана и звука в фоновом режиме.

Для решения этой проблемы выполните одно из этих трех решений:

* Закройте программу записи на рабочем столе или перенастройте её, чтобы по ошибке не записывать звуки Wallpaper Engine.
    * Для многих пользователей эта проблема вызвана **Nvidia Share / Nvidia GameStream / Nvidia ShadowPlay**, которые могут быть выключены в настройках **Nvidia Geforce Experience**. Для пользователей видеокарт от AMD, **AMD ReLive** в равной степени может вызвать эти проблемы, а также часть AMD драйверов для видеокарт. Сначала попробуйте проверить это, если вы не знаете, что может записывать ваш рабочем столе.
    * Если вы не знаете, какое приложение является причиной этого, проверьте ваш аудиомикшер Windows и посмотрите, какие приложения в настоящее время имеют доступ к аудио, это может помочь. Ещё как вариант, закройте как можно больше программ, насколько это возможно через Диспетчер задач Windows.
* If the background audio recording is on purpose or if you cannot find a way to turn it off, you can set up an *application rule* in the "Performance" tab of the Wallpaper Engine settings. Set the "Condition" to "Is playing audio" and the "Wallpaper playback" to "Keep Running":

![Application Rules can be found in the "Performance" tab of the Wallpaper Engine settings](./applicationrule.png)

Replace some.exe with .exe files you can find in the task manager until you have narrowed it down to the responsible .exe.

* Lastly, you can also change the option 'other application playing audio' to 'keep running'. However, this means Wallpaper Engine will not automatically mute audio output from wallpapers when you listen to music or watch videos that are not full-screen.
