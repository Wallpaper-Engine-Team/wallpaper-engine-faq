# Steam Atölyesi Yedekleme

Duvar kâğıtları herhangi bir nedenle Steam'den silindiğinde Steam bunları bilgisayarınızdan da siler. Wallpaper Engine bunu engelleyemez ancak bu sizin için bir sorunsa duvar kâğıtlarınızı yedekleyebilirsiniz.

Aynı şekilde Steam'in tüm Atölye dosyalarını rastgele indirmeye başlayacağına dair birçok rapor vardır ve bu da büyük Gigabaytlarda veriye sahip olmanız durumunda sorun yaratabilir. Bu çok sık meydana geliyorsa yedek oluşturmak ve Steam ile tüm bağları koparmak işe yarayabilir.

# Yedek Oluşturma

Aşağıdaki rehber, Steam ve Wallpaper Engine programlarının `C:\Program Files (x86)\Steam\` konumunda kurulu olduğunu varsaymaktadır. Steam / Wallpaper Engine'i farklı bir yere kurduysanız bu konumları kontrol edin.

1. Steam'in duvar kâğıtlarınızı depoladığı klasörü bulun. Varsayılan olarak bu `C:\Program Files (x86)\Steam\steamapps\workshop\content\431960` konumundadır ::: ipucu **431960** Wallpaper Engine'in Steam Kimliğidir. Steam, tüm Wallpaper Engine yüklemeleri için bu dizini kullanır. :::
2. 431960 klasörünü Wallpaper Engine'in yükleme yoluna kopyalayın: `C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\projects\431960`
3. `431960` klasörünü `yedek` olarak **yeniden adlandırın<0>. Böylece tam yol şu şekilde görünür: `C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\projects\backup`</li>
4 `Yedek` dizini artık her biri kendi alt dizininde olmak üzere önceden indirdiğiniz tüm duvar kâğıtlarını içerir (sayılar, duvar kâğıdının Steam Atölyesi Kimliğini temsil eder)
5 Duvar kâğıdı tarayıcısını yeniden başlattıktan sonra yedeklenen duvar kâğıtlarını görebilirsiniz. You can now unsubscribe the duplicate Steam ones and only use your personal copy of them</ol>

::: warning Do **not** manually delete the Steam Workshop folder `C:\Program Files (x86)\Steam\steamapps\workshop\content\431960`. This will cause your Steam to be confused and re-download all wallpapers. Simply unsubscribe from your wallpapers and let Steam delete the duplicate files itself. :::