---
tags:
  - colors
  - bright
  - dark
  - zoom
  - zoomed-in
  - pixelated
  - border
  - gamma
  - quality
  - wrong
  - ugly
---

# ビデオ壁紙が正しく表示されない

Wallpaper Engineは、ほとんどのビデオプレイヤーと異なり、ビデオの最適なパフォーマンスのためにハードウェアアクセラレーションを使います。 すなわち、グラフィックスカードドライバがビデオの見え方に影響を与えるということです。

**ビデオ壁紙の色がおかしい、明るすぎたり暗すぎたりする、拡大表示されて見える、ピクセル化して見える、壁紙の周囲に境界線が見える**、というような場合は、Nvidia、AMD、Intelグラフィックスカードのコントロールパネルで、ビデオオプションをリセットすると解消することがあります。 GPUを複数お持ちの場合（メインがNvidia、サブがIntelなど）は、すべてをリセットしてください。

また、すべての設定のリセットを選択して（「クリーン再インストール」）グラフィックスカードドライバを再インストールすることもできます。これは例えばNvidiaのドライバで可能です。 これには、まずドライバーをアンインストールし、次に、現在のドライバーが完全にアンインストールされた状態で、最新のドライバーを再インストールする必要があります。 ドライバによっては、詳細セクションに「クリーン再インストールの実行」オプションがあります。自動的に破損したドライバの残骸を掃除するには、このオプションを有効にしてください。 メジャーなメーカーの最新グラフィックスカードドライバは、以下から入手できます。

* [Nvidia GeForce](https://www.nvidia.com/Download/index.aspx)
* [AMD Radeon](https://www.amd.com/support)
* [Intel Graphics](https://downloadcenter.intel.com/product/80939/Graphics-Drivers)

どうすればいいのかわからない場合は、お使いのグラフィックスカードの最新ドライバをダウンロードし、DDUを使ってグラフィックスカードをアンインストールして、すべての設定を削除します。

* [Display Driver Uninstallerのダウンロード](https://www.guru3d.com/files-details/display-driver-uninstaller-download.html)

その後、ダウンロードしておいたドライバをインストールします。 正しく行えば、これで問題は解消するはずです。

::: tip
グラフィックスカードドライバを再インストールしても色がおかしい場合は、GPUが複数あるか、「クリーン」再インストールが行われていない可能性があります。 まず使用中のグラフィックスカードドライバをすべて確実にアンインストールし、すべてのドライバ設定を削除してください。
:::