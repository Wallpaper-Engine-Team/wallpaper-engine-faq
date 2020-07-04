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

2. Uninstall your current graphics card drivers completely and delete all existing settings if asked. Nvidia drivers have a checkbox which says "Perform clean re-installation" which also works.

You can also use [Display Driver Uninstaller ("DDU")](https://www.guru3d.com/files-details/display-driver-uninstaller-download.html) if you are unsure on how to do that.

3. Install the drivers you have just downloaded in step 1.
4. Restart your PC again, see if it works now.

::: tip It's very important that you do a clean re-installation - this means your current graphics card drivers and driver settings have to be completely deleted before you install the new drivers, otherwise it will not work. :::

## Codec Tweak Tool

If it does not work after doing a clean re-installation of your graphics card drivers, try resetting your video codecs:

* Download the Codec Tweak Tool: [Click here](https://www.codecguide.com/download_other.htm)
* Make sure that all checkboxes in the "Media Foundation" menu are **not** checked, then apply the settings:

![Uncheck all options in the Media Foundation options](./codectweak.gif)

* Restart the PC and try the affected wallpapers again.

## Additional video codecs

If affected video wallpapers still do not work after the previous steps, download LAV and use DirectShow as described in this guide:

* [Using LAV and DirectShow](/videos/lav.html).