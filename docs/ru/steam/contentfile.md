# «Файл с контентом заблокирован» / «Ошибка записи на диск»

Если во время установки или обновления Wallpaper Engine у Steam не получается скачать программу, скорее всего ваш антивирус без уведомления удаляет файлы, помещает их в карантин или блокирует целые каталоги на диске. You will get 'content file locked' or 'access denied' errors in Steam. This needs to be resolved in your antivirus by undoing the changes it did to your PC, most antivirus programs have a quarantine window from where you can restore files or create a whitelist. Make sure your antivirus application ignores the following directories:

* `C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine`
* `C:\Program Files (x86)\Steam\steamapps\workshop\downloads`
* `C:\Program Files (x86)\Steam\steamapps\downloading`

*If your Steam or Wallpaper Engine is installed in a different directory, you need to adjust the directories to your actual Steam installation path.*
