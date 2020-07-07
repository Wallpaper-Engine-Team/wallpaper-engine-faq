# Wallpaper Engine tepsi simgesini saklama

Wallpaper Engine'e Windows saatinin yanındaki tepsi simgesini gizlemesini söyleyen bir kayıt defteri anahtarını manuel olarak oluşturarak Wallpaper Engine tepsi simgesini gizlemek mümkündür.

::: warning Tepsi simgesi, bunu gizlemenin getireceği dezavantajları kabul edecek kadar sizi rahatsız etmiyorsa bunu yapmanızı önermeyiz. :::

Tepsi simgesi gizlendikten sonra Wallpaper Engine'i kapatmanın tek yolu, bunu Windows Görev Yöneticisi aracılığıyla sonlandırmak olacaktır. Kullanıcı arayüzünü yalnızca Steam veya .exe dosyaları aracılığıyla açabileceksiniz ve bu da oldukça zor ve kafa karıştırıcıdır.

Tepsi simgesini yine de gizlemek istiyorsanız şu şekilde yapabilirsiniz:

Kayıt defteri anahtarını oluşturmak için Windows başlat menüsünü açıp "Kayıt Defteri Düzenleyicisi"ne gidecek olan "regedit.exe"yi yazın.

1. Şu kayıt defteri dizinine gidin: *HKEY_CURRENT_USER\Software\WallpaperEngine*
2. *WallpaperEngine* kayıt defteri klasörüne sağ tıklayın, *Yeni*'yi ve ardından *DWORD (32 Bit) Değeri*'ni seçin.
3. Kayıt defterini şu şekilde adlandırın: *hideTrayIcon*
4. Adın doğru olduğundan emin olun, arada boşluk olmamalı ve tam olarak bu şekilde yazılmalıdır.
5. Kayıt defteri anahtarına çift tıklayın ve şu değeri verin: *1*
6. Wallpaper Engine'i yeniden başlatın, uygulama artık bir tepsi simgesi göstermeyecektir.

*hideTrayIcon* değerini *0* olarak ayarlayarak veya tamamını sildikten sonra Wallpaper Engine'i yeniden başlatarak bu işlemi tersine çevirebilirsiniz. 