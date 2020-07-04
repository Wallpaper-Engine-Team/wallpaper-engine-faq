- - -
タグ:
  - activemovieウィンドウ
  - active movie
  - 黒
- - -


# ビデオが黒い / 正しく再生されない

*ビデオ*タイプの壁紙で、画面が黒いなどの問題が起きるときの問題は、*常に*グラフィックスカードドライバやビデオコーデックが破損していることが原因です。 次の手順に正確な順序で従ってください。 このガイドを最初から最後まで実行すると、問題は解決されます。

::: warning 注意 このトピックは、Wallpaper Engineの**壁紙**が黒くなっていたり正しく再生されなかったりする場合の説明です。 **Wallpaper Engineのインターフェースが黒い**場合は、こちらをご覧ください。 [Wallpaper Engineのユーザーインターフェースが黒い](/interface/broken.html#wallpaper-engine-interface-is-black)。 :::

## グラフィックスカードドライバのクリーン再インストール

大半の場合、ビデオ壁紙に関連する問題のほとんどはグラフィックスカードドライバのクリーン再インストールによって解消されます。 これには、画面が黒くなったり、別のウィンドウ（**"ActiveMovieウィンドウ"**のタイトルで）に壁紙が表示されたりするケースが含まれます。

1. グラフィックスカード（例えばNvidiaとIntelなど、2つあるときは全部に対して）の最新グラフィックスカードドライバをダウンロードします。

* [Nvidia GeForce](https://www.nvidia.com/Download/index.aspx)
* [AMD Radeon](https://www.amd.com/support)
* [Intel Graphics](https://downloadcenter.intel.com/product/80939/Graphics-Drivers)

2. 使用中のグラフィックスカードドライバを完全にアンインストールし、尋ねられたらすべての既存の設定を削除します。 Nvidiaには「クリーン再インストールの実行」というチェックボックスがあり、これを使うこともできます。

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