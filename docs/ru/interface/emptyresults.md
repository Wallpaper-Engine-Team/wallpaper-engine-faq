# Не отображаются изображения для предпросмотра / результаты поиска

Если обои, не установленные на ваше устройство, недоступны для предпросмотра в Wallpaper Engine, скорее всего, ваш брандмауэр или защитная программа блокирует Wallpaper Engine доступ к серверам с изображениями Steam.

## Проверьте подключение к серверам с изображениями Steam

Сначала проверьте, доступно ли для вашего компьютера подключение к серверам с изображениями Steam. Чтобы проверить подключение, откройте эту ссылку в своем браузере:

* [**НАЖМИТЕ ЗДЕСЬ, ЧТОБЫ ПРОВЕРИТЬ СЕРВЕРЫ С ИЗОБРАЖЕНИЯМИ STEAM**](https://steamuserimages-a.akamaihd.net/ugc/1796366854776537259/C541D485E7156010D92284B082D13A2377FD1F8F/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false)

При нажатии на ссылку выше вы должны увидеть сообщение **«ОК»** с **зеленой галочкой**.

### Я вижу сообщение «ОК»

Если вы видите сообщение **«ОК»** при нажатии на тестовую ссылку выше:

* This definitely means that only Wallpaper Engine is being blocked by some security software on your computer. Configure any antivirus, firewall or network accelerator app to ignore Wallpaper Engine, especially the **ui32.exe** process that belongs to Wallpaper Engine.

### I can NOT see the OK message

If you did **not** see the **OK** message when clicking the test link above, this means your entire computer or even your entire network is not able to load images from the Steam image servers. Reasons for this can be:

* An antivirus, firewall or network accelerator app is entirely blocking the connection to the Steam image servers for all applications on your computer.
* Your network router is somehow misconfigured. Take a closer look at the firewall settings of your router and other advanced router settings that may play a role here.
    * You can easily test if your router is at fault by connecting your computer to a wifi hotspot through your smartphone. If you start seeing preview images while connected to a mobile wifi hotspot, the problem is definitely in your network router or in the network of your internet service provider.
    * Your internet service provider may also be blocking the Steam image servers or there is a temporary connection issue. This is very rare but it can happen, try again later.