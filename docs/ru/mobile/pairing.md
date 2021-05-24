# Сопряжение мобильного устройства с Windows

Вы можете подключить свои мобильные устройства к компьютеру для беспроводной передачи коллекции обоев в мобильное приложение Wallpaper Engine. Приложение Android не может загружать обои напрямую из Steam Workshop, потому что только Steam может загружать файлы обоев.

Should you run into any problems with pairing your mobile devices, you can still import wallpapers by manually exporting the **.mpkg** that the Wallpaper Engine mobile app uses to render wallpapers.

### Подготовка Wallpaper Engine в Windows

В приложении **Windows** нажмите кнопку **Мобильные устройства** в правом верхнем углу пользовательского интерфейса. Отобразится мобильное устройство. В нижней части окна нажмите кнопку **Подключить новое устройство**. Wallpaper Engine покажет вам четырехзначный PIN-код для сопряжения одного мобильного устройства.

![Mobile PIN](/img/faq/mobile_pin.gif)

### Подключение мобильного устройства

В мобильном приложении Wallpaper Engine нажмите **Добавить** в правом нижнем углу, а затем нажмите **Связать с компьютером**. Приложение Wallpaper Engine выполнит поиск в вашей локальной сети запущенных приложений Wallpaper Engine для Windows. Ваш компьютер с Windows должен появиться через несколько секунд. Нажмите на него, чтобы подключиться. Если вы подключаетесь в первый раз, вам будет предложено ввести четырехзначный PIN-код (см. Раздел Windows выше). PIN-код — это дополнительная мера безопасности, гарантирующая, что неавторизованные пользователи не смогут подключиться к вашему компьютеру без вашего ведома.

После ввода PIN-кода строка состояния в мобильном приложении станет зеленой и покажет, к какому компьютеру оно подключено. В приложении для Windows кнопка **Мобильные устройства** также станет зеленой, обозначая, что мобильное соединение активно.

![Mobile PIN](/img/faq/mobile_pair.gif)

## Решение проблем при сопряжении мобильного устройства

Если вы не можете подключить мобильное устройство к компьютеру, скорее всего, произошла ошибка в настройках брандмауэра или локальной сети. Проверьте следующие возможные причины проблемы:

* Убедитесь, что ваш телефон и компьютер подключены к одной локальной сети.
* Убедитесь, что брандмауэр не блокирует связь Wallpaper Engine с вашей локальной сетью.
* Убедитесь, что сетевой маршрутизатор не блокирует связь ваших устройств друг с другом.
* Disable any sort of VPN or proxy software on your computer and your mobile device which can interfere with the communication between your devices.
* Убедитесь, что приложение Wallpaper Engine в Windows и на вашем мобильном устройстве обновлено и работает.

## Backup solution: Manually importing a Wallpaper File (.mpkg)

Should you be able unable to fix the connection between your computer and your mobile device, you can still manually transfer your wallpapers onto your mobile device. First, select the wallpapers you want to export in Wallpaper Engine, then right-click on them and select **Send to Mobile Device**, followed by clicking on **Export .mpkg**.

Once Wallpaper Engine has created the .mpkg files for your wallpapers, you can either transfer them to your mobile device by moving the files onto your mobile device via USB or by copying the files onto an SD card. Alternatively you can also use any file sharing service on your mobile device or send them to yourself via a messaging service or even via email (if the file size is not a problem).

Once the files are on your mobile device, open up Wallpaper Engine on your mobile device and use the **Import File** functionality to directly import the .mpkg files into the app by selecting them from the directory that you have placed them in.