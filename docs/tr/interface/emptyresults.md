# Ön izleme görüntüleri / arama sonuçları gösterilmiyor

Wallpaper Engine'de kaldırılan duvar kağıtları için önizleme görüntülerini göremiyorsanız, bu genellikle bir güvenlik duvarı veya güvenlik yazılımının Wallpaper Engine'in Steam görüntü sunucularına erişmesini engellediği anlamına gelir.

## Steam Görüntü Sunucularına Olan Bağlantınızı Test Edin

Öncelikle, bilgisayarınızdan Steam görüntü sunucularıyla bağlantının mümkün olup olmadığını deneyin ve test edin. Bağlantınızı test etmek için web tarayıcınızda aşağıdaki bağlantıyı açın:

* [**STEAM GÖRÜNTÜ SUNUCULARINI TEST ETMEK İÇİN TIKLAYINIZ**](https://steamuserimages-a.akamaihd.net/ugc/1796366854776537259/C541D485E7156010D92284B082D13A2377FD1F8F/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false)

Yukarıdaki bağlantıya tıkladığınızda **Tamam** yazan ve **yeşil onay işareti** gösteren bir mesaj görmelisiniz.

### Tamam mesajını görebiliyorum

Yukarıdaki test bağlantısını tıkladığınızda **Tamam** mesajını görürseniz:

* Bu kesinlikle yalnızca Wallpaper Engine'in bilgisayarınızdaki bazı güvenlik yazılımları tarafından engellendiği anlamına gelir. Configure any antivirus, firewall or network accelerator app to ignore Wallpaper Engine, especially the **ui32.exe** process that belongs to Wallpaper Engine.

### Tamam mesajını GÖREMİYORUM

Yukarıdaki test bağlantısına tıkladığınızda **Tamam** mesajını **görmediyseniz** bu, tüm bilgisayarınızın veya hatta tüm ağınızın Steam görüntü sunucularından gelen görüntüleri yükleyemediği anlamına gelir. Bunun nedenleri şunlar olabilir:

* Bir virüs koruma, güvenlik duvarı veya ağ hızlandırma uygulaması, bilgisayarınızdaki tüm uygulamaların Steam görüntü sunucularıyla olan bağlantısını tamamen engelliyor.
* Ağ yönlendiriciniz bir şekilde yanlış yapılandırılmış. Yönlendiricinizin güvenlik duvarı ayarlarını ve burada rol oynayabilecek diğer gelişmiş yönlendirici ayarlarını daha yakından inceleyin.
    * Bilgisayarınızı akıllı telefonunuz aracılığıyla bir wifi bağlantı noktasına bağlayarak yönlendiricinizin hatalı olup olmadığını kolayca test edebilirsiniz. Mobil wifi bağlantı noktasına bağlıyken ön izleme görüntülerini görmeye başlarsanız, sorun kesinlikle ağ yönlendiricinizde veya internet hizmet sağlayıcınızın ağındadır.
    * Your internet service provider may also be blocking the Steam image servers or there is a temporary connection issue. Bu nadir olsa da gerçekleşme olasılığı vardır, daha sonra tekrar deneyin.