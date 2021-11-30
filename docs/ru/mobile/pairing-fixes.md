# Решение проблем при сопряжении мобильного устройства

::: tip
Connection still does not work after all of this? Scroll to the bottom of this page to see the manual backup solution to import wallpapers via USB or another method.
:::

Если вы не можете подключить мобильное устройство к компьютеру, скорее всего, произошла ошибка в настройках брандмауэра или локальной сети. Проверьте следующие возможные причины проблемы:

* **Убедитесь, что ваш телефон и компьютер подключены к одной локальной сети.**
  * Your computer does not need wifi, it is still the same network even if it is connected through a network cable.
* **Убедитесь, что брандмауэр не блокирует связь Wallpaper Engine с вашей локальной сетью.**
  * Wallpaper Engine sends a multi-casts on the network ports 7884 (UDP) and 7889 (TCP), make sure no firewall is blocking this.
* **Отключите на своем компьютере и мобильном устройстве любую программу VPN или прокси, которая может мешать обмену данными между вашими устройствами.**
* **Убедитесь, что сетевой маршрутизатор не блокирует связь ваших устройств друг с другом.**
    * Убедитесь, что ваш маршрутизатор не блокирует сетевой трафик между устройствами.
    * Включите **UPnP** (**Universal Plug and Play**) в настройках маршрутизатора.
* **Убедитесь, что приложение Wallpaper Engine в Windows и на вашем мобильном устройстве обновлено и работает.**

### Windows Firewall

Especially if your mobile device can find your computer but fails to connect to it, it's almost definitely caused by a firewall on your computer. When you first launch Wallpaper Engine, it will prompt you to grant it permission to your network. If you closed this window or did not specifically allow **ui32.exe** to communicate with your network, the Windows firewall will block Wallpaper Engine. Make sure to allow **ui32.exe** to communicate as shown in this screenshot:

![Windows Firewall Permissions](/img/faq/windows_defender.png)

Wallpaper Engine will automatically suggest firewall fixes if it detects any problems. This process is somewhat reliable but in some cases you may still need to manually clear any blocks you may have created in the past by accident.

If you have not granted Wallpaper Engine these permissions, the Windows firewall will automatically block Wallpaper Engine. Open the Windows firewall settings, then click on **Allow an app through firewall**. Search for an entry called **ui32** and either delete it or make sure both check marks in the *Private* and *Public* column are enabled, then confirm your changes and restart Wallpaper Engine.

Make sure to look for **ui32** or **Wallpaper Engine UI** - you may find entries called just **Wallpaper Engine** but these are irrelevant here.

**Please note:** This section is specifically only about the built-in Windows firewall, if you use any other antivirus app or firewall, you need to make sure Wallpaper Engine is not being blocked by them.

## Решение для резервного копирования: вручную импортировать файл обоев (.mpkg)

Если вам не удается установить соединение между вашим компьютером и мобильным устройством, вы можете вручную перенести обои на мобильное устройство. Сначала выберите обои, которые вы хотите экспортировать в Wallpaper Engine, затем щелкните по ним правой кнопкой мыши и выберите **Отправить на мобильное устройство** и нажмите **Экспорт .mpkg**.

<video width="100%" controls autoplay loop>
  <source src="/videos/mobile_export.mp4" type="video/mp4">
  Ваш браузер не поддерживает воспроизведение видео.
</video>

После того, как Wallpaper Engine создаст файлы .mpkg для ваших обоев, вы можете либо перенести их на мобильное устройство через USB, либо скопировав файлы на SD-карту. Вы также можете использовать любое средство обмена файлами на своем мобильном устройстве, отправить их себе сообщением или даже по электронной почте (если размер файла позволяет).

Как только файлы окажутся на вашем мобильном устройстве, откройте на нем Wallpaper Engine и используйте функцию **Импортировать файл**, чтобы напрямую импортировать файлы .mpkg в приложение, выбрав их из каталога, который вы их поместили.

::: danger
It is import that you place the .mpkg files in the **Downloads** folder on the mobile device. Android is very restrictive when it comes to letting apps access files. If you cannot find or open the .mpkg files on your device, try placing them in another directory, usually the **Downloads** folder is the most reliable choice for this.
:::