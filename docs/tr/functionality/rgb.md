---
tags:
  - donanım
---

# RGB donanım desteği (iCUE & Chroma)

Wallpaper Engine [**Razer Chroma**](https://www.razer.com/chroma) ve [**Corsair iCUE**](https://www.corsair.com/icue) sistemlerini ve bu iki ekosistemden birine entegre olabilen sistemleri destekler.

## RGB donanımını nasıl etkinleştirip devre dışı bırakabilirim?

Wallpaper Engine ayarlarının "Eklentiler" bölüminde **iCUE & Chroma SDK eklentisini** bulabilirsiniz. Bu genel RGB eklentisini sol taraftaki onay kutusundan etkinleştirebilir ve devre dışı bırakabilirsiniz. Parçaları ayrı ayrı yapılandırmak için yanındaki çark sembolünü de tıklayabilirsiniz.

RGB desteği her duvar kâğıdında ayrı ayrı da kapatılabilir. Eklenti etkinleştirilmişse her duvar kağıdının özellik listesinin üstünde **LED efektlerini etkinleştir** seçeneğini bulabilirsiniz. Bu seçenek üzerinden ayrı bir duvar kâğıdının RGB ışıklarınızı kontrol edip edemeyeceğini ayarlayabilirsiniz.

## RGB donanımı rengi çok parlak

RGB renklerini varsayılan olarak biraz parlatıyoruz. Birçok duvar kâğıdında parlak renkler güzel görünüyor. Fakat bu öznel bir yargı olduğu için beğenmediğiniz takdirde RGB eklentisinin ayarlarından **LED renkleri parlat** seçeneğini devre dışı bırakabilirsiniz.

## RGB donanımım çalışmıyor

Wallpaper Engine RGB donanımınızla doğrudan bağlantı kuramaz, tüm renk bilgileri önce RGB sürücülerine gönderilmektedir. Donanımın birden fazla parçası çalışmıyorsa sorun donanımızın sağlayıcısının yazılımında olmalıdır. Bu donanım sağlayıcıları bazı çok eski donanımları tam olarak desteklemiyor, böyle bir durumda donanımınız çalışmayacaktır. Bu ne yazık ki bizim çözebileceğimiz bir sorun değildir.

Wallpaper Engine ayarlarındaki *Eklenti* bölümü size görünür değilse bu özelliklerin çalışması için zorunlu olan *Visual Studio 2015 için Visual C++ 2015 Yeniden Dağıtılabilir* muhtemelen eksiktir veya bozuk bir kurulumu vardır. Bu paketi Microsoft web sitesinden indirip kurabilirsiniz. Bu işlem sistem yeniden başlatıldıktan sonra sorunu çözecektir:

* [Visual Studio 2015 için Visual C++ 2015 Yeniden Dağıtılabilir](https://www.microsoft.com/download/details.aspx?id=48145)

### Corsair

**Corsair sistem belleği (RAM) gibi donanımlar varsayılan olarak devre dışı bırakılmış yazılım kontrollerine sahiptir**. Yani bellek modülleriniz, buna iCUE yazılım ayarlarında izin vermediğiniz sürece Wallpaper Engine'e göre yanmayacaktır. Bellek bölümünde bulunan iCUE cihaz ayarlarınızdaki "Tam yazılım kontrolünü etkinleştir" seçeneğinin seçili olduğundan emin olun:

![Enable full software control in iCUE](./icue.png)

Düzgün çalışmayan diğer donanım parçaları için bu seçeneği iki kez kontrol edin.

iCUE'nin *özel kullanım modu*'nda kullanıldığını unutmayın. Bu demektir ki Wallpaper Engine, oyunlar gibi diğer iCUE uyumlu yazılımların önceliğini alacaktır. Oyunlarınızın klavyenize animasyon eklemesini istiyorsanız Wallpaper Engine ayarlarındaki **Performans** sekmesine gidin ve oyundayken duvar kâğıtlarını durdurmak için **Diğer uygulamalar tam ekranken** seçeneğini **Dur (boş bellek)** olarak ayarlayın. Alternatively, disable either the RGB plugin or disable the RGB option on individual wallpapers.

For support with Corsair iCUE hardware, please contact Corsair directly:

[help.corsair.com](https://help.corsair.com/)

Should you run into any issues with Corsair's support, you can still reach out to us and we will see if we can help you.

### Razer
We only support Razer Synapse 3 or newer. If you are using Razer Synapse 1 or Razer Synapse 2, make sure to fully uninstall them and upgrade to the latest version of Razer Synapse. In the past, some users had issues with remnants of old Razer Synapse having been left on their system. If you had Razer Synapse 2 or older installed and have issues with your RGB lighting or even experience crashes with the RGB plugin being enabled, you may need to find any leftovers of old Razer Synapse versions on your system and delete it.

If your Razer hardware is relatively old and does not support Razer Synapse 3 or newer, unfortunately its RGB lighting is not compatible with Wallpaper Engine.

For support with Razer hardware, please contact Razer directly:

[support.razer.com](https://support.razer.com/)

Should you run into any issues with Razer's support, you can still reach out to us and we will see if we can help you.