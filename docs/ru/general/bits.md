# 32- и 64-разрядная версии

64-разрядная версия позволяет работать с более «тяжелыми» файлами (больше 2 ГБ), но она всегда потребляет больше памяти, вне зависимости от размера обоев. Например, при работе со стандартными видео обоями, 64-разрядная версия будет потреблять примерно на 50 МБ больше ОЗУ в сравнении с 32-разрядной. В остальном в работе версий нет никаких различий.

::: tip
Мы рекомендуем использовать 32-разрядную версию, если только вы не используете очень большие обои, которые в этой версии программы приводят к сбоям. Большинство пользователей никогда не сталкиваются с этой проблемой.
:::

Также на 64-разрядную версию имеет смысл переключиться, если видеосистема вашего ПК работает с ошибками, которые затрагивают только 32-разрядные версии программ. Если вы когда-либо устанавливали пакеты кодеков и другие подобные инструменты, они могли безвозвратно повредить 32-разрядную версию видеосистемы Windows, которая необходима для работы Wallpaper Engine. Если проблемы не затронули 64-разрядную версию системы, вы можете использовать 64-разрядную версию Wallpaper Engine — так вам не придется тратить время на исправление ошибок.

::: warning
Обратите внимание
Обои типа «веб» всегда будут запускаться через 32-разрядный исполняемый файл (webwallpaper32.exe). То же касается и пользовательского интерфейса (ui32.exe). 64-разрядная версия используется только при выборе или обоев типа «сцена» и «видео».
:::

## Как настроить 32- или 64-разрядную версии Wallpaper Engine так, чтобы они запускались вместе с Windows?

Первым делом полностью выключите Wallpaper Engine с помощью значка на панели задач (нажмите правой кнопкой мыши на значок Wallpaper Engine в панели задач -> «Выход»). Важно закрыть программу именно так, поскольку иначе Steam не запустит Wallpaper Engine заново, а просто выведет на экран уже открытую версию программы.

После того, как Wallpaper Engine будет выключена, зайдите в Steam и запустите 32-разрядную или 64-разрядную версии программы: в зависимости от того, для какой версии вы хотите установить автозапуск. Откройте настройки Wallpaper Engine и включите автозапуск — это первая опция на вкладке «Общее». Если автозапуск уже включен, выключите его и затем включите заново. Это сохранит открытую версию Wallpaper Engine в качестве программы, которая будет автоматически загружаться вместе с Windows. 