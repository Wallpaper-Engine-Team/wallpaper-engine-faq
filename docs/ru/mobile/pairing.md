# Сопряжение мобильного устройства с Windows

Вы можете подключить свои мобильные устройства к компьютеру для беспроводной передачи коллекции обоев в мобильное приложение Wallpaper Engine. Приложение Android не может загружать обои напрямую из Steam Workshop, потому что только Steam может загружать файлы обоев.

Should you run into any problems with pairing your mobile devices, you can still import wallpapers by manually exporting the **.mpkg** that the Wallpaper Engine mobile app uses to render wallpapers.

### Подготовка Wallpaper Engine в Windows

In the **Windows** app, click on the **Mobile** button in the upper right corner of the user interface. The mobile device overview will open up. At the bottom device overview, click on the **Connect new Device** button. Wallpaper Engine will show you a 4-digit PIN that you can use to pair one mobile device.

![Mobile PIN](/img/faq/mobile_pin.gif)

### Подключение мобильного устройства

In the Wallpaper Engine mobile companion app, click on **Add** in the lower right corner, followed by clicking on **Pair with Computer**. The Wallpaper Engine app will search your local network for running instances of Wallpaper Engine for Windows. Your Windows computer should appear after a few seconds, allowing you to connect to it by clicking on it. If you are connecting for the first time, you will be asked to enter the 4-digit PIN (see Windows section above). The PIN is an additional security measure to ensure unauthorized users cannot connect to your computer without your knowledge.

Once you have entered your PIN, the status bar in the mobile app turns green and shows which computer its connected to. On the Windows app, the **Mobile** button is also colored green now to indicate that a mobile connection is active.

![Mobile PIN](/img/faq/mobile_pair.gif)

## Решение проблем при сопряжении мобильного устройства

If you cannot pair your mobile device to your computer, a firewall or local network setting is very likely at fault. Check the following possible problem sources:

* Убедитесь, что ваш телефон и компьютер подключены к одной локальной сети.
* Убедитесь, что брандмауэр не блокирует связь Wallpaper Engine с вашей локальной сетью.
* Убедитесь, что сетевой маршрутизатор не блокирует связь ваших устройств друг с другом.
* Disable any sort of VPN or proxy software on your computer and your mobile device which can interfere with the communication between your devices.
* Double-check that Wallpaper Engine on Windows and your mobile device are both up-to-date and running.

## Backup solution: Manually importing a Wallpaper File (.mpkg)

Should you be able unable to fix the connection between your computer and your mobile device, you can still manually transfer your wallpapers onto your mobile device. First, select the wallpapers you want to export in Wallpaper Engine, then right-click on them and select **Send to Mobile Device**, followed by clicking on **Export .mpkg**.

Once Wallpaper Engine has created the .mpkg files for your wallpapers, you can either transfer them to your mobile device by moving the files onto your mobile device via USB or by copying the files onto an SD card. Alternatively you can also use any file sharing service on your mobile device or send them to yourself via a messaging service or even via email (if the file size is not a problem).

Once the files are on your mobile device, open up Wallpaper Engine on your mobile device and use the **Import File** functionality to directly import the .mpkg files into the app by selecting them from the directory that you have placed them in.