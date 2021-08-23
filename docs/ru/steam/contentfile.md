# «Файл с контентом заблокирован» / ошибка записи на диск

Если во время установки или обновления Wallpaper Engine у Steam не получается скачать программу, скорее всего ваш антивирус без уведомления удаляет файлы, помещает их в карантин или блокирует целые каталоги на диске. В Steam появится сообщение об ошибке «Файл с контентом заблокирован» или «Отказано в доступе». Эту проблему необходимо решать через антивирус: вам понадобится отменить внесенные в систему изменения. В большинстве антивирусов есть окно карантина, откуда можно восстановить файлы или создать белый список. Удостоверьтесь, что антивирус игнорирует следующие каталоги:

* `C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine`
* `C:\Program Files (x86)\Steam\steamapps\workshop\downloads`
* `C:\Program Files (x86)\Steam\steamapps\downloading`

*Если вы установили Steam или Wallpaper Engine в другой каталог, перечисленные выше пути нужно будет изменить в соответствии с вашим путем установки Steam.*

If you have configured your antivirus app to ignore these directories but the issue persists, it is sometimes necessary to uninstall Wallpaper Engine through Steam, followed by manually deleting the remains of the `wallpaper_engine` directory to clear any antivirus locks which may continue to block Steam from downloading files. After deleting the entire `wallpaper_engine` folder, try reinstalling the app through Steam again.