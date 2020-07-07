- - -
tags:
  - activemovie window
  - active movie
  - black
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

どうすればいいのかわからない場合は、[Display Driver Uninstaller ("DDU")](https://www.guru3d.com/files-details/display-driver-uninstaller-download.html)を使うこともできます。

3. ステップ1でダウンロードしたドライバをインストールします。
4. PCを再起動し、正常に動作するかどうか確認します。

::: tip クリーン再インストールは非常に重要です。これにより、新しいドライバのインストールの前に、使用していたグラフィックスカードドライバとドライバの設定が完全に削除されます。そうでないと正常に動作しません。 :::

## Codec Tweak Tool

グラフィックスカードドライバのクリーン再インストール後も正常に動作しない場合は、ビデオコーデックをリセットしてみてください。

* Codec Tweak Toolをダウンロードします：[ここをクリック](https://www.codecguide.com/download_other.htm)
* "Media Foundation"メニューのチェックボックスがすべてチェックされて**いない**ことを確認し、設定を適用します。

![Media Foundationオプションのチェックをすべて外す](./codectweak.gif)

* PCを再起動し、問題のあった壁紙をもう一度試します。

## 追加のビデオコーデック

上の手順を行ったあとも問題のビデオ壁紙が動作しないときは、LAVをダウンロードし、次のガイドに従ってDirectShowを使用してください。

* [LAVとDirectShowの使用](/videos/lav.html)。