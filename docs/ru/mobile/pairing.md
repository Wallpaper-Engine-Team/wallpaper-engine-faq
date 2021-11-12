# Сопряжение мобильного устройства с Windows

Вы можете подключить свои мобильные устройства к компьютеру для беспроводной передачи коллекции обоев в мобильное приложение Wallpaper Engine.

It's not possible for the Android app to directly download wallpapers from the Workshop due to technical and legal limitations that prevent the Android app from directly connecting to the Workshop.

::: tip
If pairing does not work for you, see the **Backup Solution** section at the bottom of this page to learn how to create mobile wallpaper packages (**.mpkg**) and how to import them on your mobile device.
:::

[[toc]]

## 1. Install the free Wallpaper Engine Android Companion App

Before continuing, make sure to install the latest version of the Wallpaper Engine Android companion app.

Рекомендуем установить приложение через официальный магазин приложений, но вы также можете напрямую загрузить последнюю версию с нашей домашней страницы. Ссылки для скачивания и дополнительную информацию можно найти на странице загрузки Android:

* [Скачать Wallpaper Engine для Android](https://www.wallpaperengine.io/android/)

For security reasons, we advise against installing the app from any sources not listed on our website.

## 2. Подготовка Wallpaper Engine в Windows

В приложении **Windows** нажмите кнопку **Мобильные устройства** в правом верхнем углу пользовательского интерфейса. Отобразится мобильное устройство. В нижней части окна нажмите кнопку **Подключить новое устройство**. Wallpaper Engine will show you a 4-digit PIN that you can use to pair one mobile device in the next step.

<video width="100%" controls autoplay loop>
  <source src="/videos/mobile_pin.mp4" type="video/mp4">
  Ваш браузер не поддерживает воспроизведение видео.
</video>

## 3. Подключение мобильного устройства

В мобильном приложении Wallpaper Engine нажмите **Добавить** в правом нижнем углу, а затем нажмите **Связать с компьютером**. Приложение Wallpaper Engine выполнит поиск в вашей локальной сети запущенных приложений Wallpaper Engine для Windows. Ваш компьютер с Windows должен появиться через несколько секунд. Нажмите на него, чтобы подключиться. Если вы подключаетесь в первый раз, вам будет предложено ввести четырехзначный PIN-код (см. Раздел Windows выше).

<video height="590px" style="display:block;margin:0 auto;" controls autoplay loop>
  <source src="/videos/mobile_connect.mp4" type="video/mp4">
  Ваш браузер не поддерживает воспроизведение видео.
</video>

После ввода PIN-кода строка состояния в мобильном приложении станет зеленой и покажет, к какому компьютеру оно подключено. В приложении для Windows кнопка **Мобильные устройства** также станет зеленой, обозначая, что мобильное соединение активно.

By default, Wallpaper Engine will now always automatically connect to your computer if you start Wallpaper Engine on your mobile device and your computer at the same time.

## 4. Transferring Wallpapers to Your Mobile Device

Once the connection has been established, the **Mobile** button in the upper right corner turns green.

You can now simply click on the **Send to Mobile Device** button on the right-hand side or right-click on any compatible wallpaper and select **Send to Mobile Device**, followed by selecting your device from the list.

#### Scene Wallpapers

Dynamic and interactive wallpapers that are of the **Scene** type will first be optimized for use on mobile phones and to ensure compatibility with mobile hardware. This process may take a short while. You will also be asked which quality option you would like to use, especially for high-resolution wallpapers, we recommend trying the **Balanced** option if you notice performance issues on your mobile device.

<video width="100%" controls autoplay loop>
  <source src="/videos/mobile_transfer.mp4" type="video/mp4">
  Ваш браузер не поддерживает воспроизведение видео.
</video>

::: tip
You can also transfer multiple wallpapers at the same time by clicking on multiple wallpapers while holding the CTRL key on your keyboard.
:::

## Решение проблем при сопряжении мобильного устройства

Если вы не можете подключить мобильное устройство к компьютеру, скорее всего, произошла ошибка в настройках брандмауэра или локальной сети. Проверьте следующие возможные причины проблемы:

* Убедитесь, что ваш телефон и компьютер подключены к одной локальной сети.
* Убедитесь, что брандмауэр не блокирует связь Wallpaper Engine с вашей локальной сетью.
* Убедитесь, что сетевой маршрутизатор не блокирует связь ваших устройств друг с другом.
    * Make sure your router is not blocking network traffic between devices.
    * Turn on **UPnP** (**"Universal Plug and Play"**) in your router settings.
* Отключите на своем компьютере и мобильном устройстве любую программу VPN или прокси, которая может мешать обмену данными между вашими устройствами.
* Убедитесь, что приложение Wallpaper Engine в Windows и на вашем мобильном устройстве обновлено и работает.

### Решение для резервного копирования: вручную импортировать файл обоев (.mpkg)

Если вам не удается установить соединение между вашим компьютером и мобильным устройством, вы можете вручную перенести обои на мобильное устройство. Сначала выберите обои, которые вы хотите экспортировать в Wallpaper Engine, затем щелкните по ним правой кнопкой мыши и выберите **Отправить на мобильное устройство** и нажмите **Экспорт .mpkg**.

<video width="100%" controls autoplay loop>
  <source src="/videos/mobile_export.mp4" type="video/mp4">
  Ваш браузер не поддерживает воспроизведение видео.
</video>

После того, как Wallpaper Engine создаст файлы .mpkg для ваших обоев, вы можете либо перенести их на мобильное устройство через USB, либо скопировав файлы на SD-карту. Вы также можете использовать любое средство обмена файлами на своем мобильном устройстве, отправить их себе сообщением или даже по электронной почте (если размер файла позволяет).

Как только файлы окажутся на вашем мобильном устройстве, откройте на нем Wallpaper Engine и используйте функцию **Импортировать файл**, чтобы напрямую импортировать файлы .mpkg в приложение, выбрав их из каталога, который вы их поместили.