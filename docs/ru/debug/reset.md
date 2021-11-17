# Полный сброс Wallpaper Engine

Если при использовании Wallpaper Engine вы сталкиваетесь с техническими проблемами, вам стоит полностью переустановить Wallpaper Engine. Следуйте этой инструкции, чтобы полностью сбросить Wallpaper Engine вместе с поврежденными подписками на обои.

::: danger
Прочтите эту часть, если вы пользуетесь антивирусом (кроме Microsoft Defender)

Многие из проблем, с которыми мы сталкиваемся, вызваны антивирусными приложениями, которые по ошибке блокируют Wallpaper Engine или Steam. Антивирусные приложения часто вызывают:

* аварийное завершение работы Wallpaper Engine
* повреждение или исчезновение пользовательского интерфейса Wallpaper Engine
* проблемы с запуском Wallpaper Engine без сообщения об ошибке
* проблемы с установкой или обновлением Wallpaper Engine
* многие другие проблемы, вызванные поврежденными или недоступными файлами

**Если вы пользуетесь антивирусным приложением, настройте его так, чтобы оно игнорировало каталог установки `wallpaper_engine`, прежде чем перейти к следующим этапам, описанным на этой странице. Проверьте, позволяют ли настройки вашего антивируса исключать целые папки.**

Most antivirus apps can block Wallpaper Engine files without informing you about it and certain Wallpaper Engine files will be permanently blocked.
:::

## Fully Uninstalling Wallpaper Engine

To fully uninstall Wallpaper Engine to clear any corrupted files:

1. If you have enabled the automatic startup functionality: Open the Wallpaper Engine settings, turn off the automatic startup at the top of the **General** tab in the Wallpaper Engine settings.
2. Open Steam and right-click on Wallpaper Engine, then select click on **Manage**, followed by **Uninstall**.
3. Navigate to the Wallpaper Engine installation directory and delete the remaining `wallpaper_engine` directory entirely. by default, it is located here:

* `C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine`

If you have installed Wallpaper Engine in a different directory, please look for the `wallpaper_engine` directory there. Make sure the folder is entirely deleted to clear any invisible antivirus file locks or corrupted files.

You can now reinstall Wallpaper Engine. If you want to start from a clean slate, please read the next section on how to fully reset all your wallpaper subscriptions - this is not necessary in most cases.

## Resetting all Steam Workshop Subscriptions

If you are experiencing issues related to wallpaper downloads by Steam, you can try to do a full reset of your Steam Workshop subscriptions. In rare cases, this can help with broken Workshop subscriptions that are not visible in the app. If you notice that Steam keeps redownloading all your wallpapers or that Steam keeps downloading wallpapers that have been deleted from the Steam Workshop in the past, you can attempt a full reset.

Выполните эти шаги:

1. Выключите Steam. **Optional:** Uninstall Wallpaper Engine first.
2. Open the Wallpaper Engine Steam Workshop website and log in to your Steam account:

* [Steam Workshop for Wallpaper Engine](https://steamcommunity.com/app/431960/workshop/)

3. On the right-hand side, hover over **Your files** and then **Subscribed Items**.
4. You will be presented a page with your subscriptions. Click the **Unsubscribe From All** button on the right-hand side to clear all your Workshop subscription (including any hidden broken subscriptions).
5. **Restart Steam**, your subscriptions are now reset.
