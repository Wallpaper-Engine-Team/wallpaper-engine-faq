---
tags:
  - kilit ekranı
  - giriş ekranı
---

# Windows kilit ekranında Wallpaper Engine

The Windows login screen is not meant to be modified as a design decision by Microsoft. Making changes to it essentially requires hacking Windows in an unsafe and unstable manner. This means that if a Windows update modifies the lock screen or if the app crashes, you would be unable to login to your computer entirely. The feature could potentially stop working at any time, causing unpredictable side effects.

If Microsoft officially makes this possible or if we discover a safe way to add live wallpapers to the Windows lock screen, we will implement this feature. Currently, there are no known safe ways to accomplish this, which is why live wallpapers cannot be set on the lock screen by Wallpaper Engine.

## Setting a static wallpaper

Ancak yine de Wallpaper Engine'i, geçerli canlı duvar kağıdınızın anlık görüntüsüyle statik kilit ekranı görüntüsünü geçersiz kılacak şekilde yapılandırabilirsiniz. Bunu yapmak için, Wallpaper Engine ayarlarının **Genel** sekmesindeki **Kilit ekranı görüntüsünü geçersiz kıl** seçeneğini etkinleştirin.

## Ekran Koruyucu İşlevi

Kilit ekranına güvenmeye bir alternatif olarak, Windows ekran koruyucu ayarlarında etkinleştirilmiş **Devam ederken, oturum açma ekranını görüntüle** seçeneğiyle birlikte Wallpaper Engine'i ekran koruyucu olarak ayarlamanızı öneririz. Wallpaper Engine'i ekran koruyucunuz olarak nasıl ayarlayacağınızı görmek için ekran koruyucu rehberimize göz atın:

* [Wallpaper Engine ile Ekran koruyucu](/functionality/screensaver.html)