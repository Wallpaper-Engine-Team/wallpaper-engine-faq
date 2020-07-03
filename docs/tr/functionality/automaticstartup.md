---
tags:
  - otomatik başlatma
  - başlat
---

# Açılışta otomatik başlatma

Wallpaper Engine ayarlarına ve daha sonra "Genel" sekmesine giderek Wallpaper Engine'in bilgisayarınız açıldığında başlatılmasını sağlayabilirsiniz. Üst kısımdan sisteminiz her açıldığında uygulamayı arka planda sessizce başlatacak olan otomatik başlatma seçeneğini etkinleştirebilirsiniz.

## "Yüksek öncelikli" ve "normal" başlatma seçeneği arasındaki fark nedir?

Yüksek öncelikli seçeneğini seçtiğinizde Wallpaper Engine bir Windows hizmeti kaydedecektir. Yani Wallpaper Engine, Windows'la birlikte otomatik olarak başlayacak şekilde yapılandırdığınız diğer programlardan önce başlayacaktır. Uygulamanın performansını başka hiçbir şekilde etkilemeyecektir.

Ancak bazı antivirüsler bunun kötü amaçlı davranış olduğu yönünde yanlış tanımlama yaparak aşırı tepki verecek ve Wallpaper Engine'in bu modda başlatılmasını engelleyecektir. Dolayısıyla yüksek öncelikli seçeneğini kullanmanın dezavantajı daha az güvenilir olmasıdır.

## Otomatik başlatmayı etkinleştirdim ama çalışmıyor, ne yapabilirim?

*Yüksek öncelikli* seçeneğini kullanıyorsanız bu seçeneği devre dışı bırakarak *normal* otomatik başlatmaya geçiş yapmayı deneyin. Yukarıda da açıklandığı üzere yüksek öncelikli mod daha hızlı başlar ancak çeşitli nedenlerle, özellikle de bazen antivirüs yazılımları tarafından engellendiği için daha az güvenilirdir.

If you are using normal-priority option and the app is not launching alongside Windows, try changing the option to high-priority and see if the problem goes away.

If neither the high-priority or normal-priority option work for you, check the antivirus software you have installed on your system. Some antivirus and firewall applications sometimes block Wallpaper Engine from automatically starting when your computer boots up. Your antivirus software likely has a "whitelist" feature which allows you to ignore certain folders or applications, make sure to whitelist the wallpaper_engine install directory and all executables in it.

Another rare cause can be that if you (or an application on your system) set the Wallpaper Engine .exe files to be run as admin only then it cannot automatically start either, you will need to remove the admin setting and toggle the automatic startup off and back on.

If the automatic startup does not work, the answer virtually always is somehow related to overzealous antivirus software. If you have antivirus or firewall applications installed, please double-check all their settings and security levels.

## Wallpaper Engine starts with Windows but (some) wallpapers are not shown

 Check if the Wallpaper Engine icon is visible in the Windows tray next to the clock after you start your computer. If the icon is there after your system starts but either some or none of your monitors have their respective wallpapers shown, there is a problem with your graphics card drivers. Essentially, your graphics card drivers keep assigning your monitors new identifiers which leads Wallpaper Engine to believe that you are trying to configure a new monitor. You can fix this by changing the *"Monitor identification"* option in the *General* tab of the Wallpaper Engine settings to *Layout* or *GDI*. We also recommend that you do a clean re-installation of your graphics card drivers in this case, as it's an indicator for an underlying problem with your Windows installation.

 ## Wallpaper Engine assigns wrong wallpapers at system start-up

 This is the same problem as in the previous section, if you have multiple monitors and the wallpapers are being assigned to the wrong monitor at start-up, try changing the *Monitor identification* option in the *General* tab of the Wallpaper Engine settings to *Layout* or *GDI*.