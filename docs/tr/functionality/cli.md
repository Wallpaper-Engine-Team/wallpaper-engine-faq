---
sidebarDepth: 2
---

# Komut Satırı Kontrolleri

Wallpaper Engine'i komut satırı argümanlarıyla kontrol edebilirsiniz. Bu, bir kısayol, bir makro bağlama veya herhangi bir kendi kendine yazılan komut dosyası veya seçtiğiniz kod aracılığıyla uygulamanın çoğu işlevine erişmenizi sağlar. Örneğin, tüm duvar kâğıtlarını duraklatabilir veya durdurabilirsiniz, duvar kâğıtlarını değiştirebilir ve hatta çalışan duvar kâğıtlarının ayarlarını değiştirebilirsiniz.

Wallpaper Engine'in zaten çalıştığından emin olun ve ardından programın ana işlemini, *wallpaper32.exe*'yi (veya uygulamanın 64 Bit sürümünü kullanıyorsanız *wallpaper64.exe*) bu kılavuzda listelenen komut argümanlarından herhangi birini çalıştırarak ona bir komut gönderin. `wallpaper_engine` kurulum dizininde çalıştırılabilirleri bulabilirsiniz.

Tüm komutlara `kontrol` parametresi için bir değer tanındı. Örneğin, duraklat komutu şöyle gerçekleştirilebilir:

``` powershell
wallpaper32.exe -control pause
```

İçlerinde boşluklar olan dizeler için çift tırnak **"** karakterini kullandığınızdan emin olun:

``` powershell
wallpaper32.exe -control openWallpaper -file "C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\projects\myprojects\myWallpaper\project.json"
```

### Kısa yol örneği: Bir duvar kâğıdını bir pencerede açmak

Aşağıdaki örnek, Windows kısayolu aracılığıyla bir pencerede istediğiniz sayıda duvar kâğıdı açmanızı sağlar. İstediğiniz sayıda duvar kâğıdını ayrı bir pencerede açmak için bu işlemi tekrarlayabilirsiniz. Bu, özellikle Wallpaper Engine'i herhangi bir boş ekran veya animasyon türü için kullanmak isteyen yayıncılar için faydalıdır.

Önce `wallpaper_engine` dizinine gidin ve `wallpaper32.exe` veya `wallpaper64.exe` üzerine sağ tıklayın. Sonrasında `Gönder` ve `Masaüstü (kısayol oluştur)` üzerine gelerek masaüstünüzdeki Wallpaper Engine işlemi için yeni bir kısayol oluşturun. Sonra yeni kısayolunuzu bulun ve kullanım durumunuza uyacak şekilde yeniden adlandırın. Sonrasında üzerine sağ tıklayarak **Özellikler**'i seçin.

![Wallpaper Engine kısayol özellikleri](/img/faq/target.gif)

**Kısayol** sekmesini, **Hedef** isimli bir satırla göreceksiniz. Bu satır Wallpaper Engine'i gösterecektir. Şimdi aşağıdaki örnekte gösterildiği şekilde (kopyalayıp yapıştırabilir ve ihtiyaçlarınıza uyacak şekilde ayarlayabilirsiniz) duvar kâğıdınıza tam yol ile `openWallpaper` komutunu ve `playInWindow` parametresini eklemek için düzenlemeniz gerekir:

```bash
"C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\wallpaper64.exe" -control openWallpaper -file "C:\Program Files (x86)\Steam\steamapps\workshop\content\431960\123456789\scene.pkg" -playInWindow "Wallpaper #1" -width 1920 -height 1080
```

Bu komutu yapılandırırken aşağıdakileri kontrol edin:

* wallpaper32.exe / wallpaper64.exe için olan yolun doğru olduğundan emin olun. Yukarıdaki örnek, varsayılan Steam dizinini kullanır.
* Kendi duvar kâğıdınıza giden doğru yolu kullandığınızdan emin olun. Yukarıdaki örnek, **123456789** örnek Atölye Kimliğini kullanır; duvar kâğıdınızın çalışması için bunu değiştirmeniz gerekir. Bilgisayarınızda desteklenen herhangi bir dosyanın da üzerine gelebilirsiniz.
  * Herhangi bir duvar kâğıdının tam yolunu, Wallpaper Engine'de üzerine sağ tıklayarak ve **Dosya Gezgini'nde Aç**'ı seçerek bulabilirsiniz. Sahne duvar kâğıtları için genellikle *project.json* dosyasının üzerine gelmeniz gerekebilir. Video duvar kâğıtları içinse bu genelde *.mp4* dosyası ve web duvar kâğıtları için de *index.html* adlı dosyadır.
* Pencerenize benzersiz bir ad verin. Yukarıdaki örnek **Wallpaper #1** adını kullanır. **Birden fazla pencere açmak istiyorsanız her birine benzersiz bir ad verin.**
* Ayrıca çözünürlüğü ayarlamanız da gerekebilir. Yukarıdaki örnek 1920x1080 (Full HD) çözünürlük kullanır. `width` ve `height` parametrelerini buna göre değiştirin.

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

### Sessize al

Tüm duvar kâğıtlarını susturur.

``` powershell
-control pause
```

### Sesi aç

Tüm duvar kâğıtlarının sesini açar.

``` powershell
-control unmute
```

### Duvar Kağıdı Aç

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

### Sonraki Duvar Kâğıdı

Belirli bir monitör veya belirtilmemişse tüm monitörler sonraki duvar kağıdına atlar.

``` powershell
-control nextWallpaper [-location <string>] [-monitor <number>]
```

### Duvar Kağıdını Kaldır

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

### Profil Aç

Mevcut bir profili Wallpaper Engine'in görüntü menüsünde oluşturulmuş ve kaydedilmiş tüm görüntülere ismen uygular.

``` powershell
-control openProfile -profile <string>
```

* **profil:** Wallpaper Engine içerisinde oluşturduğunuz profilin ismi.

### Duvar Kâğıdı Ayarlarını Uygula

Duvar kağıdı özelliklerini anında belirli bir duvar kağıdına veya tüm duvar kağıtlarına uygular. Bu, program çalışırken duvar kağıdına ait tüm ayarları, duvar kağıdı tarayıcısını açmadan ve bunları manuel olarak değiştirmeden dinamik olarak değiştirmenize olanak tanır. Tarayıcıda herhangi bir duvar kağıdını seçerken sağ taraftaki **JSON'ı Paylaş**'ı tıklayarak tarayıcıda mevcut özelliklerin bir listesini kolayca bulabilirsiniz.

``` powershell
-control applyProperties -properties <JSON> [-location <string>] [-monitor <number>]
```

* **özellikler:** **JSON** dizesi olarak tanımlanacak özellikler. Dize, sınırlayıcı olarak `RAW~(`ve`)~END` ile özel olarak öncelenmelidir. Aşağıdaki örneklere bakın!
* **location *(isteğe bağlı)*:** Monitörün dahili tanımlayıcısı veya belirttiğiniz pencere adı.
* **monitor *(isteğe bağlı)*:** Özellikleri güncellemek için monitörün dizini 0 ile başlar.

`rate` adlı bir duvar kâğıdı ayarının 10 olarak değiştirilmesine örnek:

``` cpp 
-control applyProperties -properties RAW~({"rate":10})~END
```

Bir duvar kağıdı düzeni renk ayarını kırmızı olarak değiştirme örneği (` "1 0 0" `, *RGB* değerlerini temsil eder):

``` cpp
-control applyProperties -properties RAW~({"schemecolor":"1 0 0"})~END
```

### Masaüstü simgelerini gizle

Masaüstü simgelerini gizler.

``` powershell
-control hideIcons
```

### Masaüstü Simgelerini Göster

Masaüstü simgelerini gösterir.

``` powershell
-control showIcons
```

### Get Current Wallpaper

This will output the primary wallpaper path as a string to the current standard output, you can also specify a monitor to get the wallpaper path for. This function is useful if you want to integrate Wallpaper Engine in other tools that need to react to the current wallpaper in some way.

``` powershell
-control getWallpaper [-location <string>] [-monitor <number>]
```

* **location *(optional)*:** Internal identifier of the monitor or the window name you specified.
* **monitor *(optional)*:** Index of the monitor to update the properties on, begins with 0.
* **RETURNS:** File path to active wallpaper.
