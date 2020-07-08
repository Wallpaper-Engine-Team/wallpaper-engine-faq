---
tags:
  - donanım
---

# RGB donanım desteği (iCUE & Chroma)

Wallpaper Engine [**Razer Chroma**](https://www.razer.com/chroma) ve [**Corsair iCUE**](https://www.corsair.com/icue) sistemlerini ve bu iki ekosistemden birine entegre olabilen sistemleri destekler.

## RGB donanımını nasıl etkinleştirip devre dışı bırakabilirim?

Wallpaper Engine ayarlarının "Eklentiler" bölüminde **iCUE & Chroma SDK eklentisini** bulabilirsiniz. Bu genel RGB eklentisini sol taraftaki onay kutusundan etkinleştirebilir ve devre dışı bırakabilirsiniz. Parçaları ayrı ayrı yapılandırmak için yanındaki çark sembolünü de tıklayabilirsiniz. Bu genel RGB eklentisini sol taraftaki onay kutusundan etkinleştirebilir ve devre dışı bırakabilirsiniz. Parçaları ayrı ayrı yapılandırmak için yanındaki çark sembolünü de tıklayabilirsiniz.

RGB desteği her duvar kâğıdında ayrı ayrı da kapatılabilir. RGB renklerini varsayılan olarak biraz parlatıyoruz. Birçok duvar kâğıdında parlak renkler güzel görünüyor. Fakat bu öznel bir yargı olduğu için beğenmediğiniz takdirde RGB eklentisinin ayarlarından **LED renkleri parlat** seçeneğini devre dışı bırakabilirsiniz.

## RGB donanımı rengi çok parlak

RGB renklerini varsayılan olarak biraz parlatıyoruz. RGB renklerini varsayılan olarak biraz parlatıyoruz. Birçok duvar kâğıdında parlak renkler güzel görünüyor. Fakat bu öznel bir yargı olduğu için beğenmediğiniz takdirde RGB eklentisinin ayarlarından **LED renkleri parlat** seçeneğini devre dışı bırakabilirsiniz.

## RGB donanımım çalışmıyor

Wallpaper Engine RGB donanımınızla doğrudan bağlantı kuramaz, tüm renk bilgileri önce RGB sürücülerine gönderilmektedir. Donanımın birden fazla parçası çalışmıyorsa sorun donanımızın sağlayıcısının yazılımında olmalıdır. Bu donanım sağlayıcıları bazı çok eski donanımları tam olarak desteklemiyor, böyle bir durumda donanımınız çalışmayacaktır. Bu ne yazık ki bizim çözebileceğimiz bir sorun değildir. Donanımın birden fazla parçası çalışmıyorsa sorun donanımızın sağlayıcısının yazılımında olmalıdır. Bu donanım sağlayıcıları bazı çok eski donanımları tam olarak desteklemiyor, böyle bir durumda donanımınız çalışmayacaktır. Bu ne yazık ki bizim çözebileceğimiz bir sorun değildir.

Wallpaper Engine ayarlarındaki *Eklenti* bölümü size görünür değilse bu özelliklerin çalışması için zorunlu olan *Visual Studio 2015 için Visual C++ 2015 Yeniden Dağıtılabilir* muhtemelen eksiktir veya bozuk bir kurulumu vardır. Bu paketi Microsoft web sitesinden indirip kurabilirsiniz. Bu işlem sistem yeniden başlatıldıktan sonra sorunu çözecektir: Bu paketi Microsoft web sitesinden indirip kurabilirsiniz. Bu işlem sistem yeniden başlatıldıktan sonra sorunu çözecektir:

* [Visual Studio 2015 için Visual C++ 2015 Yeniden Dağıtılabilir](https://www.microsoft.com/download/details.aspx?id=48145)

### Corsair

**Corsair sistem belleği (RAM) gibi donanımlar varsayılan olarak devre dışı bırakılmış yazılım kontrollerine sahiptir**. Yani bellek modülleriniz, buna iCUE yazılım ayarlarında izin vermediğiniz sürece Wallpaper Engine'e göre yanmayacaktır. Bellek bölümünde bulunan iCUE cihaz ayarlarınızdaki "Tam yazılım kontrolünü etkinleştir" seçeneğinin seçili olduğundan emin olun: Bellek bölümünde bulunan iCUE cihaz ayarlarınızdaki "Tam yazılım kontrolünü etkinleştir" seçeneğinin seçili olduğundan emin olun:

![iCUE'de tam yazılım kontrolünü etkinleştirin](./icue.png)

Düzgün çalışmayan diğer donanım parçaları için bu seçeneği iki kez kontrol edin.

iCUE'nin *özel kullanım modu*'nda kullanıldığını unutmayın. Bu demektir ki Wallpaper Engine, oyunlar gibi diğer iCUE uyumlu yazılımların önceliğini alacaktır. Oyunlarınızın klavyenize animasyon eklemesini istiyorsanız Wallpaper Engine ayarlarındaki **Performans** sekmesine gidin ve oyundayken duvar kâğıtlarını durdurmak için **Diğer uygulamalar tam ekranken** seçeneğini **Dur (boş bellek)** olarak ayarlayın. Alternatif olarak RGB eklentisini devre dışı bırakın veya ayrı duvar kâğıtlarındaki RGB seçeneğini devre dışı bırakın. Oyunlarınızın klavyenize animasyon eklemesini istiyorsanız Wallpaper Engine ayarlarındaki **Performans** sekmesine gidin ve oyundayken duvar kâğıtlarını durdurmak için **Diğer uygulamalar tam ekranken** seçeneğini **Dur (boş bellek)** olarak ayarlayın. Alternatif olarak RGB eklentisini devre dışı bırakın veya ayrı duvar kâğıtlarındaki RGB seçeneğini devre dışı bırakın.

Corsair iCUE donanımı desteği için lütfen doğrudan Corsair ile iletişime geçin:

[help.corsair.com](https://help.corsair.com/)

Corsair desteği konusunda herhangi bir sorun yaşarsanız yine bize ulaşabilirsiniz ve size yardımcı olup olamayacağımıza bakabiliriz.

### Razer
Yalnızca Razer Synapse 3 veya daha yeni sürümünü destekliyoruz. Razer Synapse 1 veya Razer Synapse 2 kullanıyorsanız bunları tamamen kaldırdığınızdan emin olun ve en güncel Razer Synapse sürümüne yükseltin. Bazı kullanıcılar geçmişte eski Razer Synapse kalıntıları sistemlerinde kaldığı için sorunlar yaşamıştır. Razer Synapse 2 veya daha eski bir sürümü yüklediyseniz ve RGB aydınlatmanızla ilgili sorunlar veya RGB eklentisi etkinleştirildiğinde çökmeler yaşıyorsanız sisteminizdeki eski Razer Synapse sürümlerinin kalıntılarını bulmanız ve silmeniz gerekebilir. Yalnızca Razer Synapse 3 veya daha yeni sürümünü destekliyoruz. Razer Synapse 1 veya Razer Synapse 2 kullanıyorsanız bunları tamamen kaldırdığınızdan emin olun ve en güncel Razer Synapse sürümüne yükseltin. Bazı kullanıcılar geçmişte eski Razer Synapse kalıntıları sistemlerinde kaldığı için sorunlar yaşamıştır. Razer Synapse 2 veya daha eski bir sürümü yüklediyseniz ve RGB aydınlatmanızla ilgili sorunlar veya RGB eklentisi etkinleştirildiğinde çökmeler yaşıyorsanız sisteminizdeki eski Razer Synapse sürümlerinin kalıntılarını bulmanız ve silmeniz gerekebilir. Bazı kullanıcılar geçmişte eski Razer Synapse kalıntıları sistemlerinde kaldığı için sorunlar yaşamıştır. Yalnızca Razer Synapse 3 veya daha yeni sürümünü destekliyoruz. Razer Synapse 1 veya Razer Synapse 2 kullanıyorsanız bunları tamamen kaldırdığınızdan emin olun ve en güncel Razer Synapse sürümüne yükseltin. Bazı kullanıcılar geçmişte eski Razer Synapse kalıntıları sistemlerinde kaldığı için sorunlar yaşamıştır. Razer Synapse 2 veya daha eski bir sürümü yüklediyseniz ve RGB aydınlatmanızla ilgili sorunlar veya RGB eklentisi etkinleştirildiğinde çökmeler yaşıyorsanız sisteminizdeki eski Razer Synapse sürümlerinin kalıntılarını bulmanız ve silmeniz gerekebilir.

Razer donanımınız eskiyse ve Razer Synapse 3 veya daha yeni sürümünü desteklemiyorsa maalesef ki RGB aydınlatması Wallpaper Engine ile uyumlu değildir.

Razer donanımı desteği için lütfen doğrudan Razer ile iletişime geçin:

[support.razer.com](https://support.razer.com/)

Razer desteği konusunda herhangi bir sorun yaşarsanız yine bize ulaşabilirsiniz ve size yardımcı olup olamayacağımıza bakabiliriz.