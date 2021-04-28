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

## Problems with RGB hardware after hibernation

In rare cases, hibernation may cause RGB hardware to stop working in combination with Wallpaper Engine. If some or all of your RGB hardware stops working correctly after your system wakes up from hibernation, try enabling the **Safe start after hibernation** option in the **General** tab of the Wallpaper Engine settings, this solves these types of issues for the majority of affected users.

Additionally, you can use the **Plugin load delay** option at the bottom of the **Plugins** tab of the Wallpaper Engine settings to delay the connection attempt that Wallpaper Engine makes to your RGB hardware. You can try a value of **30 seconds** and test if that fixes the problem for you.

### Corsair

Some hardware such as **Corsair system memory (RAM) have software controls disabled by default**, meaning that your memory modules will not light up according to Wallpaper Engine unless you allow this in the iCUE software settings. Make sure the "Enable full software control" option in your iCUE device settings in the memory section is selected:

![Enable full software control in iCUE](./icue.png)

Double-check this option for any other hardware parts which are not working properly.

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