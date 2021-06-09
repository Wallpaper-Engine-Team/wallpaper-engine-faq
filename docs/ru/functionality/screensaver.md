# Заставки в Wallpaper Engine

Wallpaper Engine позволяет вам использовать обои в качестве заставок. Раньше заставки использовались для защиты дисплеев от выгорания изображения, однако большинство современных технологичных дисплеев больше не подвержены таким типам повреждений, и вы можете безопасно использовать любые обои в качестве эстетичной заставки. Если на вашем экране используется ЭЛТ, плазма, OLED или другая подверженная выгоранию технология, мы рекомендуем установить плейлист с обоями в качестве заставки или движущиеся обои.

## Начальная настройка заставки

Чтобы начать использовать Wallpaper Engine в качестве заставки, наведите мышью на вкладку **Установлено** в окне Wallpaper Engine и выберите **Настроить заставку**. После этого Wallpaper Engine проверит, установлена ли у вас заставка Wallpaper Engine для Windows. Если заставка еще не установлена, вам будет предложено ее установить. Убедитесь, что у вас есть права администратора пользователя Windows и что ни одно антивирусное приложение не блокирует установку заставки Wallpaper Engine.

После начальной настройки заставки заставки автоматически откроются настройки Windows. Вы также можете открыть настройки вручную, используя **Настройки и Предпросмотр** или напрямую через настройки заставок Windows.

## Настроить заставку

### Настройка в Windows

Чтобы заставка Wallpaper Engine работала, необходимо сначала выбрать Wallpaper Engine в качестве активной заставки в **настройках Windows**. Вы можете открыть настройки заставки Windows через панель управления Windows или нажав **Настройки и Предпросмотр** в режиме заставки в Wallpaper Engine. В качестве подсказки посмотрите видео ниже:

<video width="100%" controls autoplay loop>
  <source src="/videos/screensaver_setup.mp4" type="video/mp4">
  Ваш браузер не поддерживает воспроизведение видео.
</video>

В настройках Windows вы можете контролировать время, через которое появляется заставка, а также то, будет ли показываться экран блокировки Windows, когда вы вернетесь к работе за компьютером. These settings are entirely handled by Windows, Wallpaper Engine itself does not control the screen timeout or similar.

### Wallpaper Engine Configuration

Once you have set up the screensaver in Windows, you can start configuring the Wallpaper Engine screensaver. Hover over the **Installed** tab in Wallpaper Engine and select **Configure Screensaver**. Wallpaper Engine will now preview your screensavers instead of your wallpapers - once you exit screensaver mode, you will return back to your wallpaper configuration.

In its default state, Wallpaper Engine will use the most basic setup where your screensavers are exactly the same as your actively running wallpapers. You can change this by changing the **Screensaver is** option to **Configured separately** at the top. With that option enabled, you can choose a wallpaper for each screen which is to be used as a screensaver or even use a completely different display profile or playlists for your screensaver setup. You can always return to the wallpaper configuration by clicking on the red **Quit** button in the upper left corner.

## Решение проблем с заставками

The Wallpaper Engine screensaver is activated through Windows itself, if the screensaver is not working correctly, please double-check to see if any of the default Windows screensavers work correctly for you. Check the Windows screensaver settings and your Windows energy settings to make sure that your screensaver is configured with the correct timeout that you expect and that Wallpaper Engine is set as your active screensaver.

The screensaver will be installed in `C:\Windows\System32\wpxscreensaver64.scr`, make sure no antivirus app is deleting this file by mistake or preventing it from being installed. You can also manually uninstall the screensaver by deleting that specific file, but be sure to not delete any other important Windows files in the `System32` directory when doing so.