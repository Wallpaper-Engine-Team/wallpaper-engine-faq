---
tags:
  - downtime
  - server
  - downloads
  - progress
  - workshop
  - connection
---

# Проблемы с загрузками обоев из Steam

Пожалуйста, учитывайте, что **за все загрузки отвечает Steam**. Wallpaper Engine просто показывает статус загрузки Steam. Все проблемы с загрузкой вызваны ошибками в работе Steam и не связаны с Wallpaper Engine напрямую. Это руководство содержит список самых распространенных проблем с загрузкой. Во многих случаях первопричиной проблем являются чрезмерно усердствующие антивирусы или заблокированные сетевые порты.

Если у вас есть проблемы с загрузками из Steam, удостоверьтесь, что ваш антивирус не блокирует Steam, а в брандмауэре (включая все брандмауэры сетевых маршрутизаторов) открыты необходимые порты.

::: Подсказка Вы можете легко проверить, блокирует ли сетевой маршрутизатор загрузки из Steam. Для этого подключите компьютер к интернету через мобильную сеть на смартфоне и попробуйте скачать обои. :::

## Загрузка обоев застряла на 0% или 100% (или любой другой цифре)
Steam еще не закончил загружать или проверять файлы. Если процент загрузки стоит на месте в течение длительного времени, попробуйте следующее:

* Очистите кэша загрузки Steam в меню настроек:
  * [Очистка кэша загрузки Steam](https://support.steampowered.com/kb_article.php?ref=3134-TIAL-4638)
* Затем проверьте целостность всех файлов Wallpaper Engine в Steam:
  * [Проверка целостности файлов Wallpaper Engine](https://support.steampowered.com/kb_article.php?ref=2037-QEUH-3335)
* Если на месте стоят все загрузки: **выключите Steam**, а затем **удалите содержимое** этого каталога:
  * `C:\Program Files (x86)\Steam\steamapps\workshop\downloads`
    * Если у вас установлен антивирус, удостоверьтесь, что конкретно этот каталог занесен в список исключений
    * **Обратите внимание:** `C:\Program Files (x86)\Steam` является путем Steam по умолчанию, поэтому если вы установили программу в другое место, каталог будет там.
* Перезагрузите Steam. Не запускайте никаких игр. Проверьте, есть ли прогресс во вкладке загрузок Steam и возобновите приостановленные загрузки, если такие есть.

::: details В том случае, если описанные выше шаги не решили проблему с загрузками, кликните сюда, чтобы увидеть больше возможных решений
* Удостоверьтесь, что Steam не был заблокирован антивирусом или брандмауэром. Зайдите в настройки антивируса и добавьте весь каталог Steam в список исключений.
* Отпишитесь от обоев, которые не загружаются, и подпишитесь на них заново после перезагрузки Steam.
* Выберите другой регион для загрузки в настройках Steam. Это можно сделать через вкладку «Загрузки» в настройках Steam.
* Зайдите в **настройки Steam** и удостоверьтесь, что вы не создали никаких ограничений на загрузку по времени, скорости или вашему статусу.
* Откройте вкладку «Загрузки» в Steam («Библиотека» -> «Загрузки»). Поищите, возможно у вас есть приостановленные загрузки. Если такие есть, нажмите на кнопку «Возобновить».
* Кликните правой кнопкой мыши на Wallpaper Engine в Steam, выберите «Свойства» и разрешите **загрузки в фоновом режиме**.
* Make sure you do not have pending game updates in Steam, it could pause or disable wallpaper downloads.
* Try again after waiting at least for a day in case there are Steam server issues.
* **As a last resort**, try to re-install Wallpaper Engine to clear any broken Steam files (this will re-download all wallpapers!). :::

::: tip Steam servers go offline every week for maintenance at a fixed time:

* United States West Coast: **Tuesday at 4 pm (UTC - 7)**
* Same time in Central Europe: **Wednesday at 1 am (UTC + 1)**
* Same time in China: **Wednesday at 8 am (UTC + 8)**

If you are reading this while it is roughly this time of the week, it may be that the servers are temporarily offline. Wait one or two hours and try again. :::

## Steam: "Missing Downloaded Files" error

Steam is unable to download some files, this can be due to anti-virus applications blocking Steam or just absolutely random. It can usually be fixed this way:

* Turn off Steam.
* Delete the contents of this directory: `C:\Program Files (x86)\Steam\steamapps\workshop\downloads`
* Delete the contents of this directory: `C:\Program Files (x86)\Steam\steamapps\downloading\431960`
  * **Note:** `C:\Program Files (x86)\Steam` is the default Steam path, if you have installed it somewhere else, check there.
* Start Steam and verify the Wallpaper Engine files:
  * [Verify Wallpaper Engine files](https://support.steampowered.com/kb_article.php?ref=2037-QEUH-3335)

If you have an antivirus-app installed: Configure an exception for this directory to prevent it from blocking Steam's Workshop downloads: `C:\Program Files (x86)\Steam\steamapps\workshop\downloads`

#### Related article: [Steam re-downloading all wallpapers](/steam/redownload)