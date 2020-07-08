# İndirilen Duvar Kâğıtlarını Düzenleme

Wallpaper Engine çoğunlukla indirilen duvar kâğıtlarının düzenlenmesini desteklemez. Fakat türlerine göre bazı duvar kâğıtları üçüncü taraf uygulamaların yardımıyla düzenlenebilir (sağ taraftaki ön izleme resminin altında türleri bulabilirsiniz).

Lütfen, çalışmalarını yeniden yayınlamak için duvar kâğıdının yaratıcısının/yaratıcılarının haklarına ihtiyaç duyabileceğinizi unutmayın. Şüpheye düşerseniz Steam Atölye'de yayınlamadan önce duvar kâğıdının yaratıcısıyla iletişime geçin.

[[toc]]

## Duvar kâğıdının kaynak dosyalarını nereden bulabilirim?

"Yüklenilenler" sekmesindeki duvar kâğıdına sağ tıkladıktan sonra "Dosya Gezgini'nde Aç" seçeneğini tıklayın.

## Farklı tür duvar kâğıtları nasıl düzenlenir

### Sahne duvar kâğıtları

Sahne duvar kâğıtları bir .pkg dosyası olarak sıkıştırılır ve tüm proje verileri olmadığı için dışarıdan düzenlemezler. .pkg dosyalarını açmaya çalışırsanız "Sıkıştırılmış duvar kâğıtları açılamaz." hatasını görürsünüz. Bir benzetme de şu olabilir: .jpeg görüntü dosyaları, Photoshop proje verileri ekli şekilde gelmez. Bu her zaman orijinal yazarın sisteminde kalır.

#### Resmî Olmayan Sahne Çıkartma Topluluğu

Ancak topluluk üyeleri, Sahne dosyalarını çıkartıp kendi duvar kâğıtlarınız için bir başlangıç noktası olarak kullanmanızı sağlayan resmî olmayan bir sahne duvar kâğıdı çıkartma aracı oluşturmuştur. Daha fazla bilgi için şu web sitesine bakın:

* [https://wetranslate.thiscould.work/scene.pkg/](https://wetranslate.thiscould.work/scene.pkg/)

Yine de geçerli bir project.json dosyanız olması gerekir. Editörde yeni bir boş duvar kâğıdı oluşturarak, Wallpaper Engine'i kapatarak ve sonra indirilen duvar kâğıdını çıkartıp içeriğini yeni proje dizinine kopyalayıp yapıştırarak bir project.json dosyası oluşturabilirsiniz.

Daha önce proje dosyalarını kaybettiğiniz kendi duvar kâğıtlarınızdan birini düzenlemek istiyorsanız güncellemeleri mevcut duvar kâğıtlarınıza aktarabilmek için project.json üzerinde yapmanız gereken değişiklikler hakkında daha fazla bilgi almak için *Kayıp bir projeyi güncelleme* bölümüne bakın.

::: warning Lütfen unutmayın Bu araç için resmî olarak destek vermiyoruz ve doğru şekilde çalışacağının garantisini vermiyoruz. Çıkartıcı ile ilgili herhangi bir sorununuz veya sorunuz varsa lütfen orijinal içerik oluşturucularla iletişime geçin. :::

### Web duvar kâğıtları

Web tabanlı duvar kâğıtları, HTML ve JavaScript tabanlıdır. Yukarıdaki bölümde açıklandığı şekilde kaynak dosyalara gidebilir ve bu dosyaları kendi web tabanlı duvar kâğıdınız için temel alabilirsiniz.

### Video duvar kâğıtları

Video tabanlı duvar kâğıtları video dosyalarıdır. Video dosyasını yukarıdaki bölümde açıklandığı şekilde bulabilir ve sonrasında videoyu değiştirmek için istediğiniz bir üçüncü taraf video düzenleme uygulamasını kullanabilirsiniz.

### Uygulama duvar kâğıtları

Uygulama duvar kâğıtları genelde düzenlenemez. Uygulama duvar kâğıtları genellikle derlenmiş programlardır, yani kaynak koduna erişiminiz yoktur. Uygulama tabanlı duvar kâğıtlarını gerçekten değiştirmek istiyorsanız duvar kâğıdının yazarıyla iletişim kurup yardım talep edin.

## Kayıp bir projeyi güncelleme

Projenizi sildiyseniz yine de üzerine yazabilirsiniz. Ancak yayınladığınız duvar kâğıdının türüne bağlı olarak artık düzenleme yapamayabilirsiniz. Her zamanki gibi yeni bir duvar kâğıdı oluşturun ve Düzenle -> "Dosya Gezgini'nde Aç" yaparak proje dizinini açın. Bir metin düzenleyicisiyle `project.json` dosyasını açın. Şöyle görünecektir:

```json
{
    "description" : "Cool description",
    "file" : "scene.json",
    "general" : 
    {
        "properties" : 
        {
            "schemecolor" : 
            {
                "order" : 0,
                "text" : "ui_browse_properties_scheme_color",
                "type" : "color",
                "value" : "0.7647058823529411 0.3764705882352941 0.07450980392156863"
            }
        }
    },
    "preview" : "preview.jpg",
    "tags" : [ "Relaxing" ],
    "title" : "Cool title of your wallpaper",
    "type" : "scene",
    "visibility" : "private"
}
```

Bu satırı, şundan sonra sağ üst köşeye ekleyin: `{`:

```json
    "workshopid" : "12345678",
```
Yani şu şekilde olmalıdır:

```json{2}
{
    "workshopid" : "12345678",
    "description" : "Cool description",
    "file" : "scene.json",
    [...]
```

**12345678 sayısını içeriğinizin kimliği ile değiştirin! Bu kimliği, mevcut yüklemenizin URL'sinde bulabilirsiniz:**

![https://steamcommunity.com/sharedfiles/filedetails/?id=12345678](./workshopid.png)
