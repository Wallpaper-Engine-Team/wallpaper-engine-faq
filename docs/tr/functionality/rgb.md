---
tags:
  - donanım
---

# RGB donanım desteği (iCUE & Chroma)

Wallpaper Engine [**Razer Chroma**](https://www.razer.com/chroma) ve [**Corsair iCUE**](https://www.corsair.com/icue) sistemlerini ve bu iki ekosistemden birine entegre olabilen sistemleri destekler.

## RGB donanımını nasıl etkinleştirip devre dışı bırakabilirim?

Wallpaper Engine ayarlarının "Eklentiler" bölüminde **iCUE & Chroma SDK eklentisini** bulabilirsiniz. Bu genel RGB eklentisini sol taraftaki onay kutusundan etkinleştirebilir ve devre dışı bırakabilirsiniz. Parçaları ayrı ayrı yapılandırmak için yanındaki çark sembolünü de tıklayabilirsiniz.

RGB desteği her duvar kâğıdında ayrı ayrı da kapatılabilir. Eklenti etkinleştirilmişse her duvar kâğıdının özellik listesinin üstünde **LED efektlerini etkinleştir** seçeneğini bulabilirsiniz. Bu seçenek üzerinden ayrı bir duvar kâğıdının RGB ışıklarınızı kontrol edip edemeyeceğini ayarlayabilirsiniz.

## RGB donanımı rengi çok parlak

RGB renklerini varsayılan olarak biraz parlatıyoruz. Birçok duvar kâğıdında parlak renkler güzel görünüyor. Fakat bu öznel bir yargı olduğu için beğenmediğiniz takdirde RGB eklentisinin ayarlarından **LED renkleri parlat** seçeneğini devre dışı bırakabilirsiniz.

## RGB donanımım çalışmıyor

Wallpaper Engine RGB donanımınızla doğrudan bağlantı kuramaz, tüm renk bilgileri önce RGB sürücülerine gönderilmektedir. Donanımın birden fazla parçası çalışmıyorsa sorun donanımızın sağlayıcısının yazılımında olmalıdır. Bu donanım sağlayıcıları bazı çok eski donanımları tam olarak desteklemiyor, böyle bir durumda donanımınız çalışmayacaktır. Bu ne yazık ki bizim çözebileceğimiz bir sorun değildir.

Wallpaper Engine ayarlarındaki *Eklenti* bölümü size görünür değilse bu özelliklerin çalışması için zorunlu olan *Visual Studio 2015 için Visual C++ 2015 Yeniden Dağıtılabilir* muhtemelen eksiktir veya bozuk bir kurulumu vardır. Bu paketi Microsoft web sitesinden indirip kurabilirsiniz. Bu işlem sistem yeniden başlatıldıktan sonra sorunu çözecektir:

* [Visual Studio 2015 için Visual C++ 2015 Yeniden Dağıtılabilir](https://www.microsoft.com/download/details.aspx?id=48145)

## Hazırda bekleme sonrasında RGB donanımıyla ilgili sorunlar

Nadir durumlarda hazırda bekleme RGB yazılımının Wallpaper Engine ile birlikte çalışmayı bırakmasına neden olabilir. Sistem hazırda beklemeden uyandıktan sonra RGB donanımlarınızın bazıları ya da tümü çalışmayı durdurursa Wallpaper Engine ayarlarında **Genel** sekmesinden **Hazırda bekleme sonrası güvenli başlangıç** seçeceğini etkinleştirmeyi deneyin, bu, etkilenen kullanıcıların büyük çoğunluğu için bu tür sorunları çözer.

Ayrıca, Wallpaper Engine'in RGB donanımınıza bağlanmasını geciktirmek için Wallpaper Engine ayarlarının **Eklentiler** sekmesinin altındaki **Eklenti Yükleme Gecikmesi** seçeceğini kullanabilirsiniz. **30 saniye** deneyip sorun çözülecek mi bakabilirsiniz.

### Corsair

Starting with iCUE 4, you need to manually enable software control in the iCUE settings first, otherwise Wallpaper Engine cannot connect to iCUE. If you have any issues with RGB lighting in combination with Corsair iCUE, make sure to check the iCUE settings first.

* Open iCUE.
* Click the Settings icon in the upper right corner.
* Click **Software and Games** on the left menu of the settings window.
* Make sure that the *software integrations* options are enabled. Check the **Devices** tab to make sure all your hardware devices are also enabled for this type of RGB lighting.

If you still have issues with your Corsair lighting setup, try a full reinstallation of your Corsair iCUE software, then restart your computer and reinstall. Many issues can be resolved by reinstalling the Corsair software suite, followed by manually enabling the software integration options.

Note that iCUE is used in *exclusive mode*, this means that Wallpaper Engine will take priority over other iCUE-compatible software such as games. If you want your games to animate your keyboard, go to the **Performance** tab of the Wallpaper Engine settings and set the **Other applications fullscreen** option to **Stop (free memory)** to stop wallpapers while in-game. Alternatively, disable either the RGB plugin or disable the RGB option on individual wallpapers.

For support with Corsair iCUE hardware, please contact Corsair directly:

[help.corsair.com](https://help.corsair.com/)

Should you run into any issues with Corsair's support, you can still reach out to us and we will see if we can help you.

### Razer

Most problems related to Razer RGB hardware can be fixed by doing a clean reinstallation of the Razer software suite while Wallpaper Engine is turned off:

1. Wallpaper Engine'i tamamen kapatın. Bu çok önemli, bu işlemi geçmeyin.
2. Windows'tan tüm Razer yazılımlarını kaldırın.
3. Razer Synapse 3'ün son sürümünü tekrar indirin ve kurun. **Önemli:** Razer Synapse **Chroma Connect** modülünü de tekrar kurduğunuzdan emin olun.
4. Bilgisayarınızı yeniden başlatın, Windows'u yeniden başlatmadan Wallpaper Engine'i çalıştırmayın.

See if this resolves your issues with your RGB hardware. For additional support with Razer hardware, please contact Razer directly:

[support.razer.com](https://support.razer.com/)

Should you run into any issues with Razer's support, you can still reach out to us and we will see if we can help you.

#### Razer Synapse 2 ve daha eski sürümleri

We only support Razer Synapse 3 or newer. If you are using Razer Synapse 1 or Razer Synapse 2, make sure to fully uninstall them and upgrade to the latest version of Razer Synapse. In the past, some users had issues with remnants of old Razer Synapse having been left on their system. If you had Razer Synapse 2 or older installed and have issues with your RGB lighting or even experience crashes with the RGB plugin being enabled, you may need to find any leftovers of old Razer Synapse versions on your system and delete it.

If your Razer hardware is relatively old and does not support Razer Synapse 3 or newer, unfortunately its RGB lighting is not compatible with Wallpaper Engine.