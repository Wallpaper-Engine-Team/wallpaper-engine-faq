---
tags:
  - mdmp
---

# Wallpaper Engine のクラッシュ

Wallpaper Engine は、数百万のユーザーに使用され、十分にテストが行われている成熟したソフトウェアです。クラッシュを引き起こすアプリケーションバグは比較的珍しいといえます。 クラッシュメッセージに **.dll** ファイルの名前が書かれている場合は、次のリストを見て、クラッシュを引き起こした **.dll** についてより正確な記述があるかどうかを確認してください。

[[toc]]

::: tip ユーザーの皆さんから受け取るクラッシュレポートのほとんどすべては、破損したグラフィックスカードドライバー、アンチウイルスアプリケーション、あるいはその他の、コンピューターを不安定にする欠陥のあるソフトウェアが引き起こしたものです。 :::

## Wallpaper Engine のクラッシュのクイックフィックス

何が Wallpaper Engine のクラッシュの原因となったかわからない場合は、グラフィックスカードドライバーのクリーン再インストールを行ってください。 これには、まずドライバーをアンインストールし、次に、現在のドライバーが完全にアンインストールされた状態で、最新のドライバーを再インストールする必要があります。 ドライバーによっては、詳細セクションに「クリーン再インストールの実行」オプションがあります。自動的に破損したドライバーの残骸を掃除するには、このオプションを有効にしてください。 メジャーなメーカーの最新グラフィックスカードドライバーは、以下から入手できます。

* [Nvidia GeForce](https://www.nvidia.com/Download/index.aspx)
* [AMD Radeon](https://www.amd.com/support)
* [Intel Graphics](https://downloadcenter.intel.com/product/80939/Graphics-Drivers)

アンチウイルスアプリケーションがインストールされている場合（Windows Defender を除いて）、アンチウイルスの設定で Wallpaper Engine を例外に設定してください。 アンチウイルスがいくつかのファイルを恒久的に破損したりロックしたりしている場合は、そのあとで Wallpaper Engine の再インストールが必要になることがあります。

また、Wallpaper Engine のファイルが破損していないことを確認するために、Steam を通して検証してください。

* [Steam サポート：アプリケーションファイルの整合性確認](https://support.steampowered.com/kb_article.php?ref=2037-QEUH-3335)

## Wallpaper Engine が、他のアプリケーションによってクラッシュした可能性がある

### KERNELBASE.dll / ntdll.dll

これは Windows カーネル自体のコアにおけるクラッシュです。通常、アンチウイルスアプリケーションか破損したグラフィックスカードドライバーによって起きます。 詳しくは上記のクイックフィックスセクションをご覧ください。 また、破損したシステムコンポーネントによって起きる可能性もあります。 Microsoft システムファイルチェッカーツールを使って、破損している可能性のある Windows ファイルを修復してください。

* [Microsoft システムファイルチェッカーツール](https://support.microsoft.com/en-us/help/929833/use-the-system-file-checker-tool-to-repair-missing-or-corrupted-system)

### d3d11.dll

これは DirectX におけるクラッシュです。通常、アンチウイルスアプリケーションか破損したグラフィックスカードドライバーによって起きます。 詳しくは上記のクイックフィックスセクションをご覧ください。 また、破損したシステムコンポーネントによって起きる可能性もあります。 Microsoft システムファイルチェッカーツールを使って、破損している可能性のある Windows ファイルを修復してください。

* [Microsoft システムファイルチェッカーツール](https://support.microsoft.com/en-us/help/929833/use-the-system-file-checker-tool-to-repair-missing-or-corrupted-system)

### mfplat.dll

これは Windows Media Foundation におけるクラッシュです。破損したグラフィックスカードドライバーによって起きることもありますが、より多いのは、システム上のビデオコーデックが破損していたりなくなったりしている場合です。 この種類のクラッシュの修正には、ビデオ修正ガイドの修正手順に従ってください。

[ここをクリック](/noshow/notplaying.html)

### AudioSes.dll

このクラッシュは通常、Windows そのものの問題によって起きます。 サウンドカードドライバーの最新版を再インストールすると問題が解消する可能性があります。 また、Wallpaper Engine の設定の *パフォーマンス* タブにある *オーディオを再生する他のアプリケーション* オプションを *再生を続ける* に変更することで修正できることもあります。

### atiumdag.dll / atiumd64.dll

* [AMD Radeon](https://www.amd.com/support)

::: tip 注意 セットアップ中に「クリーン再インストールの実行」チェックボックスを選択するか、まず現在のドライバーを手動でアンインストールしてください。 現在のドライバーが破損している場合は、まず完全に削除することが重要です。 :::

### nvwgf2umx.dll

システム上の Nvidia ドライバーがクラッシュしています。 Nvidia サイトで最新のドライバーをダウンロードし、インストールしてください。

* [Nvidia GeForce](https://www.nvidia.com/Download/index.aspx)

::: tip 注意 セットアップ中に「クリーン再インストールの実行」チェックボックスを選択するか、まず現在のドライバーを手動でアンインストールしてください。 現在のドライバーが破損している場合は、まず完全に削除することが重要です。 :::

### igdumd64.dll / igd10umd64.dll / igdumdx32.dll / igd10umd32.dll

システム上の Intel ドライバーがクラッシュしています。 Intel サイトで最新のドライバーをダウンロードし、インストールしてください。

* [Intel Graphics](https://downloadcenter.intel.com/product/80939/Graphics-Drivers)


### MMDEvAPI.dll

この種類のクラッシュは、システム上にインストールされたオーディオソフトウェアが破損していることによって起きます。 通常、特に各種のノートPCにプリインストールされている「サウンド強化」ソフトウェアが原因となります。 この種類のソフトウェアがクラッシュを起こしやすいのは、これらがバグの多い方法で Windows に働きかけるためです。"Sonic Studio" または "Nahimic" を探して、アップデートしてみてください。 これらのプログラムのアップデートが見つからない場合は、アンインストールすることもできます。これらはコンピューターのオーディオが正常に機能するために必要なものではありません。

### fraps32.dll

このクラッシュは、FPSモニターおよび画面記録アプリである Fraps によって起きます。 Fraps は2013年以来アップデートされておらず、非常に時代遅れのアプリケーションとなっています。 Fraps に代わるアプリケーションをお使いください。Fraps はソフトウェアが放棄されているため、バグは決して修正されないからです。

## エラー 0xc000007b のクラッシュ

This means that a Windows module has been corrupted by something on your system - usually DirectX itself is broken in this case. Try manually deleting these files:

* C:\Windows\SysWOW64\d3dx9_43.dll
* C:\Windows\System32\d3dx9_43.dll

Now install them again with the DirectX 9 installer: *C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\_CommonRedist\DirectX\Jun2010\dxsetup.exe* (The exact location depends on where your wallpaper_engine installation directory is).

If you still get this error it might be another, similar DirectX module that has been broken by something. This usually indicates a bigger underlying issues with your Windows installation which you need to fix before you can run Wallpaper Engine.

## Crashing after Hibernation / Sleep

If Wallpaper Engine crashes after Windows hibernation, then Windows is failing to correctly restore your graphics card drivers and Wallpaper Engine together. Hibernation in Windows is simply not a reliable process. You can enable the option **Safe start after hibernation** in Wallpaper Engine to mitigate this issue. This option will attempt to automatically restart Wallpaper Engine instead of expecting Windows to correctly work after hibernation.