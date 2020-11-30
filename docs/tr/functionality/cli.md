---
sidebarDepth: 2
---

# Komut Satırı Kontrolleri

Wallpaper Engine'i komut satırı argümanlarıyla kontrol edebilirsiniz. Bu, bir kısayol, bir makro bağlama veya herhangi bir kendi kendine yazılan komut dosyası veya seçtiğiniz kod aracılığıyla uygulamanın çoğu işlevine erişmenizi sağlar. Örneğin, tüm duvar kâğıtlarını duraklatabilir veya durdurabilirsiniz, duvar kâğıtlarını değiştirebilir ve hatta çalışan duvar kâğıtlarının ayarlarını değiştirebilirsiniz.

Make sure Wallpaper Engine is already running and then send a command to it by running the main process of the program, *wallpaper32.exe* (or *wallpaper64.exe* if you are using the 64 Bit version of the app), with any of the command arguments listed in this guide. `wallpaper_engine` kurulum dizininde çalıştırılabilirleri bulabilirsiniz.

Tüm komutlara `kontrol` parametresi için bir değer tanındı. Örneğin, duraklat komutu şöyle gerçekleştirilebilir:

``` powershell
wallpaper32.exe -control pause
```

İçlerinde boşluklar olan dizeler için çift tırnak **"** karakterini kullandığınızdan emin olun:

``` powershell
wallpaper32.exe -control openWallpaper -file "C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\projects\myprojects\myWallpaper\project.json"
```

## Komuta Genel Bakış

### Duraklat

Tüm duvar kâğıtlarını duraklatır.

``` powershell
-control pause
```

### Durdur

Tüm duvar kâğıtlarını durdurur.

``` powershell
-control stop
```

### Oynat

Duraklat veya durdur komutlarındaki tüm duvar kâğıtlarını devam ettirir.

``` powershell
-control play
```

### Sesi Kıs

Tüm duvar kâğıtlarını susturur.

``` powershell
-control pause
```

### Sesi Aç

Tüm duvar kâğıtlarının sesini açar.

``` powershell
-control unmute
```

### Duvar kâğıtlarını aç

Belirtilmemişse, belirli bir monitör veya ilk monitör için yeni bir duvar kağıdı yükler. Duvar kağıdının hangi monitöre yükleneceğini seçmek için ` location ` veya ` monitor ` parametresini kullanabilir veya ` playInWindow ` parametresi ile bir pencerede bir duvar kağıdı açabilirsiniz.

``` powershell
-control openWallpaper -file <string> [-location <string>] [-monitor <number>]
        [-playInWindow <string>] [-width <number>] [-height <number>]
        [-x <number>] [-y <number>] [-preset <string>]
```

* **file:** Açmak istediğiniz duvar kağıdının project.json dizininin yolu veya duvar kağıdı dosyasının (.mp4 vb.) yolu.
* **location *(isteğe bağlı)*:** Monitörün dahili tanımlayıcısı. Bunları config.json dosyasında bulabilirsiniz ve bu dosya bilgisayarınız tarafından oluşturulurlar.
* **monitor *(isteğe bağlı)*:** Duvar kağıdının yükleneceği monitör dizini 0 ile başlar.
* **preset *(isteğe bağlı)*:** Yüklenecek yerel ön ayarın adı ve yerel ön ayar sizin tarafınızdan önceden oluşturulmuş ve kaydedilmiş olmalıdır.
* **playInWindow *(isteğe bağlı)*:** Bir pencerede birden fazla duvar kağıdını açmak / kontrol etmek istiyorsanız, pencerenin adı.
  * **width *(isteğe bağlı)*:** Pencere genişliği.
  * **height *(isteğe bağlı)*:** Pencere yüksekliği.
  * **x *(isteğe bağlı)*:** Pencerenin yatay konumu.
  * **y *(isteğe bağlı)*:** Pencerenin dikey konumu.

### Sıradaki Duvar Kâğıdı

Belirli bir monitör veya belirtilmemişse tüm monitörler sonraki duvar kağıdına atlar.

``` powershell
-control nextWallpaper [-location <string>] [-monitor <number>]
```

### Duvar Kâğıdını Kaldır

Duvar kağıdını belirli bir monitörden veya pencereden kaldırır veya tüm duvar kağıtlarını kaldırır.

``` powershell
-control closeWallpaper [-location <string>] [-monitor <number>]
```

* **location *(isteğe bağlı)*:** Monitörün dahili tanımlayıcısı veya belirttiğiniz pencere adı.
* **monitor *(isteğe bağlı)*:** Duvar kağıdının kapatılacağı monitör dizini 0 ile başlar.

### Oynatma Listesini Aç

Belirtilmemişse, belirli bir monitör veya ilk monitör için yeni bir duvar kağıdı yükler. Duvar kağıdının hangi monitöre yükleneceğini seçmek için konum veya izleme parametresini kullanabilirsiniz.

``` powershell
-control openPlaylist -playlist <string> [-location <string>] [-monitor <number>]
```

* **oynatma listesi:** Wallpaper Engine'de oluşturup kaydettiğiniz oynatma listesinin adı.
* **location *(isteğe bağlı)*:** Monitörün dahili tanımlayıcısı. Bunları config.json dosyasında bulabilirsiniz ve bu dosya bilgisayarınız tarafından oluşturulurlar.
* **monitor *(isteğe bağlı)*:** Oynatma listesinin yükleneceği monitör dizini 0 ile başlar.

### Duvar Kâğıdı Ayarlarını Uygula

Duvar kağıdı özelliklerini anında belirli bir duvar kağıdına veya tüm duvar kağıtlarına uygular. Bu, program çalışırken duvar kağıdına ait tüm ayarları, duvar kağıdı tarayıcısını açmadan ve bunları manuel olarak değiştirmeden dinamik olarak değiştirmenize olanak tanır. Tarayıcıda herhangi bir duvar kağıdını seçerken sağ taraftaki **JSON'ı Paylaş**'ı tıklayarak tarayıcıda mevcut özelliklerin bir listesini kolayca bulabilirsiniz.

``` powershell
-control applyProperties -properties <JSON> [-location <string>] [-monitor <number>]
```

* **özellikler:****JSON** dizesi olarak tanımlanacak özellikler. Dize, sınırlayıcı olarak `RAW~(`ve`)~END` ile özel olarak öncelenmelidir. Aşağıdaki örneklere bakın!
* **location *(isteğe bağlı)*:** Monitörün dahili tanımlayıcısı veya belirttiğiniz pencere adı.
* **monitor *(isteğe bağlı)*:**Özellikleri güncellemek için monitörün dizini 0 ile başlar.

`rate` adlı bir duvar kâğıdı ayarının 10 olarak değiştirilmesine örnek:

``` cpp 
-control applyProperties -properties RAW~({"rate":10})~END
```

Example of changing a wallpaper scheme color setting to red (`"1 0 0"` represents *RGB* values):

``` cpp
-control applyProperties -properties RAW~({"schemecolor":"1 0 0"})~END
```

### Hide Desktop Icons

Hides the desktop icons.

``` powershell
-control hideIcons
```

### Show Desktop Icons

Shows the desktop icons.

``` powershell
-control showIcons
```

