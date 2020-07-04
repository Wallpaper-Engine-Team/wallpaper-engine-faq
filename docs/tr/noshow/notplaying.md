- - -
etiketler:
  - activemovie penceresi
  - active movie
  - siyah
- - -


# Videolar Siyah / Düzgün Oynatılmıyor

*Video* türü duvar kâğıtlarındaki siyah ekranlar ve diğer sorunlar *her zaman* hatalı grafik kartı sürücüleri veya hatalı video codeclerinden kaynaklanır. Sırasıyla aşağıdaki adımları deneyin. Bu rehberi baştan aşağı takip ederseniz sorun çözülecektir:

::: uyarı Lütfen unutmayın Bu başlık, Wallpaper Engine **duvar kâğıtlarının** siyah olması veya düzgün oynatılmamasıyla ilgilidir. **Wallpaper Engine arayüzünüz siyahsa** şuraya göz atın: [Wallpaper Engine Kullanıcı Arayüzü Siyah](/interface/broken.html#wallpaper-engine-interface-is-black). :::

## Grafik kartı sürücüsünün temiz şekilde yeniden kurulumu

Kullanıcıların çoğunda, grafik kartı sürücülerinin temiz bir şekilde yeniden kurulması, video duvar kâğıtları ile ilgili sorunların çoğunu düzeltecektir. Buna siyah ekranlar ve duvar kâğıtları ayrı bir pencerede gösterilen kullanıcılar da dâhildir (**"ActiveMovie Penceresi"** başlıklı).

1. Grafik kartınız için en güncel grafik kartı sürücülerini indirin (veya Nvidia ve Intel gibi iki tane varsa hepsini):

* [Nvidia GeForce](https://www.nvidia.com/Download/index.aspx)
* [AMD Radeon](https://www.amd.com/support)
* [Intel Graphics](https://downloadcenter.intel.com/product/80939/Graphics-Drivers)

2. Mevcut grafik kartı sürücülerinizi tamamen kaldırın ve talep edilirse tüm mevcut ayarları silin. Nvidia sürücülerinde "Temiz bir şekilde yeniden yükle" yazan ve işe yarayan bir onay kutusu da vardır.

Ayrıca bunu nasıl yapacağınızı bilmiyorsanız [Display Driver Uninstaller ("DDU")](https://www.guru3d.com/files-details/display-driver-uninstaller-download.html) aracını da kullanabilirsiniz.

3. 1. adımda indirdiğiniz sürücüleri kurun.
4. PC'nizi yeniden başlatıp işe yarayıp yaramadığına bakın.

::: ipucu Temiz bir yeniden kurulum yapmanız çok önemlidir. Bu demektir ki mevcut grafik kartı sürücüleriniz ve sürücü ayarlarınızın, yeni sürücüleri yüklemeden önce tamamen silinmesi gerekir. Aksi takdirde bu işlem işe yaramayacaktır. :::

## Codec Tweak Tool

Grafik kartı sürücülerinizi temiz bir şekilde yeniden yüklemek de işe yaramazsa video codec bileşenlerinizi sıfırlamayı deneyin:

* Codec Tweak Tool'u indirin: [Buraya tıklayın](https://www.codecguide.com/download_other.htm)
* "Medya Altyapısı" menüsündeki tüm onay kutularının **işaretlenmediğinden** emin olun ve sonra ayarları uygulayın:

![Uncheck all options in the Media Foundation options](./codectweak.gif)

* PC'yi yeniden başlatın ve etkilenen duvar kâğıtlarını yeniden deneyin.

## Ek video codec bileşenleri

If affected video wallpapers still do not work after the previous steps, download LAV and use DirectShow as described in this guide:

* [Using LAV and DirectShow](/videos/lav.html).