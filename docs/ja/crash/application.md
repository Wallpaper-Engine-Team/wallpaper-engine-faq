---
tags:
  - mdmp
---

# Wallpaper Engine のクラッシュ

Wallpaper Engine は、数百万のユーザーに使用され、十分にテストが行われている成熟したソフトウェアです。クラッシュを引き起こすアプリケーションバグは比較的珍しいといえます。 クラッシュメッセージに **.dll** ファイルの名前が書かれている場合は、次のリストを見て、クラッシュを引き起こした **.dll** についてより正確な記述があるかどうかを確認してください。

[[toc]]

::: tip
ユーザーの皆さんから受け取るクラッシュレポートのほとんどすべては、破損したグラフィックスカードドライバー、アンチウイルスアプリケーション、あるいはその他の、コンピューターを不安定にする欠陥のあるソフトウェアが引き起こしたものです。
:::

## Wallpaper Engine のクラッシュのクイックフィックス

何が Wallpaper Engine のクラッシュの原因となったかわからない場合は、グラフィックスカードドライバーのクリーン再インストールを行ってください。 これには、まずドライバーをアンインストールし、次に、現在のドライバーが完全にアンインストールされた状態で、最新のドライバーを再インストールする必要があります。 ドライバーによっては、詳細セクションに「クリーン再インストールの実行」オプションがあります。自動的に破損したドライバーの残骸を掃除するには、このオプションを有効にしてください。 メジャーなメーカーの最新グラフィックスカードドライバーは、以下から入手できます。

* [Nvidia GeForce](https://www.nvidia.com/Download/index.aspx)
* [AMD Radeon](https://www.amd.com/support)
* [Intel Graphics](https://downloadcenter.intel.com/product/80939/Graphics-Drivers)

アンチウイルスアプリケーションがインストールされている場合（Windows Defender を除いて）、アンチウイルスの設定で Wallpaper Engine を例外に設定してください。 アンチウイルスがいくつかのファイルを恒久的に破損したりロックしたりしている場合は、そのあとで Wallpaper Engine の再インストールが必要になることがあります。 お使いのアンチウイルスアプリが *wallpaper_engine* ディレクトリ、特にすべての .exe ファイルを無視するようにしてください：

* *wallpaper_engine/wallpaper32.exe*
* *wallpaper_engine/wallpaper64.exe*
* *wallpaper_engine/launcher.exe*
* *wallpaper_engine/bin/webwallpaper32.exe*
* *wallpaper_engine/bin/ui32.exe*

また、Wallpaper Engine のファイルが破損していないことを確認するために、Steam を通して検証してください。

* [Steam サポート：アプリケーションファイルの整合性確認](https://support.steampowered.com/kb_article.php?ref=2037-QEUH-3335)

深刻なケースでは、Wallpaper Engine をアンインストールし、手動で *wallpaper_engine* ディレクトリを削除して、アンチウイルスアプリの制限を弱めてからアプリを再インストール必要がある場合があります。

## ハイバネーションまたはスリープ後のクラッシュ

Windows のハイバネーション後に Wallpaper Engine がクラッシュする場合、 Windows が、グラフィックスカードドライバーと Wallpaper Engine を正しく復元することに失敗しています。 Windows のハイバネーションは、信頼できるプロセスではありません。 Wallpaper Engine で **ハイバネーション後セーフスタート** オプションを有効にすることにより、この問題を緩和することができます。 このオプションは、Windows がハイバネーション後に正しく動作することを期待するのでなく、自動的に Wallpaper　Engine を再起動させるものです。

## Wallpaper Engine has crashed / エラーコード "0xC0000005"

このエラーメッセージが出る場合は、**アンチウイルスアプリケーション**または**正しくないドライバー**が原因であることがほとんどです。 アンチウイルスアプリケーションをお持ちの場合、そのアプリが特に何も通知しなくても、このクラッシュの原因がそれである可能性は高いです。 アンチウイルスアプリケーションが、*wallpaper_engine* インストールディレクトリと、Wallpaper Engine の重要な実行可能ファイルすべてを無視する設定にしてください。 詳しくは、上の *Wallpaper Engine のクラッシュのクイックフィックス* セクションをご覧ください。

アンチウイルスアプリがインストールされていない場合は、すべての重要なドライバーを再インストールし、Wallpaper Engine の 64 Bit バージョン（既に 64 Bit バージョンをお使いの場合は 32 Bit バージョン）に切り替えてみてください。

場合によっては、他のアプリケーションが異常な形で Wallpaper Engine に干渉している可能性もあります。 これは主に、Wallpaper Engine にコードを注入したり、なんらかの方法で Windows のインストールを大きく変えたりするアプリが関係しています。

!["0xC0000005" Wallpaper Engine のクラッシュメッセージ](/img/faq/0xC0000005.png)

## Wallpaper Engine が、他のアプリケーションによってクラッシュした可能性がある

### KERNELBASE.dll / ntdll.dll

これは Windows カーネル自体のコアにおけるクラッシュです。通常、アンチウイルスアプリケーションか破損したグラフィックスカードドライバーによって起きます。 詳しくは上記のクイックフィックスセクションをご覧ください。 また、破損したシステムコンポーネントによって起きる可能性もあります。 Microsoft システムファイルチェッカーツールを使って、破損している可能性のある Windows ファイルを修復してください。

* [Microsoft システムファイルチェッカーツール](https://support.microsoft.com/ja-jp/help/929833/use-the-system-file-checker-tool-to-repair-missing-or-corrupted-system)

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

::: tip
注意 セットアップ中に「クリーン再インストールの実行」チェックボックスを選択するか、まず現在のドライバーを手動でアンインストールしてください。 現在のドライバーが破損している場合は、まず完全に削除することが重要です。
:::

### nvwgf2umx.dll / nvwgf2um.dll

システム上の Nvidia ドライバーがクラッシュしています。 Nvidia サイトで最新のドライバーをダウンロードし、インストールしてください。

* [Nvidia GeForce](https://www.nvidia.com/Download/index.aspx)

::: tip
注意 セットアップ中に「クリーン再インストールの実行」チェックボックスを選択するか、まず現在のドライバーを手動でアンインストールしてください。 現在のドライバーが破損している場合は、まず完全に削除することが重要です。
:::

### igdumd64.dll / igd10umd64.dll / igdumdx32.dll / igd10umd32.dll

システム上の Intel ドライバーがクラッシュしています。 Intel サイトで最新のドライバーをダウンロードし、インストールしてください。

* [Intel Graphics](https://downloadcenter.intel.com/product/80939/Graphics-Drivers)

### RZChromaSDK.dll / RzChromaSDK64.dll

この種類のクラッシュは、**Razer Synapse** の一部であるRazer Chroma が原因で発生します。 通常、Razer Synapse が正しくインストールされていない時に起きます。 ほとんどの場合、この種類のクラッシュは Razer Synapse をクリーン再インストールすることによって解消します。

**Razer のすべてのソフトウェアのクリーン再インストール**

::: warning
Razer Synapse の再インストール中は、Wallpaper Engine を必ず終了させておいてください。
:::

1. Wallpaper Engine が起動している場合は、完全に終了させます（Windows のタスクトレイでアイコンを右クリックし、**終了**を選択）
2. Windows 経由で Razer ソフトウェアをコンピューターからアンインストールします
3. Razer のソフトウェアスイートの最新バージョンを公式サイトからダウンロードし、インストールします：

* [Razer Synapse 3 のダウンロード](https://www.razer.com/synapse-3)

4. その後、Wallpaper Engine を再起動せずにコンピューターを再起動します。

**再インストールしても問題が解決しない場合**

Razer Synapse を再インストールしても問題が解決しない場合は、Razer Synapse 自体に問題がある可能性があります。過去には、Razer Synapse がうまくアップデートされていないことによってこの問題が起きたことがありました。 将来の Razer Synapse アップデートによってこの問題が解決されるまでは、Wallpaper Engine 設定の**プラグイン**タブで LED プラグイン（*"iCUE & Chroma SDK"*）をオフにしておいてください。

Razer Synapse をクリーン再インストールしてもクラッシュが起きる場合は、Razer のサポートに直接ご連絡いただき、クラッシュのことを報告してください。 Razer が解決できない場合、当社の技術サポートにご連絡ください。このクラッシュの問題を調べ、わかったことを Razer Synapse の開発チームに伝えます。ただしいずれにしても、この特定のクラッシュに関する主要な連絡先は Razer になります。

### MMDEvAPI.dll

この種類のクラッシュは、システム上にインストールされたオーディオソフトウェアが破損していることによって起きます。 通常、特に各種のノートPCにプリインストールされている「サウンド強化」ソフトウェアが原因となります。 この種類のソフトウェアがクラッシュを起こしやすいのは、これらがバグの多い方法で Windows に働きかけるためです。 "Sonic Studio" または "Nahimic" を探して、アップデートしてみてください。 これらのプログラムのアップデートが見つからない場合は、アンインストールすることもできます。 これらはコンピューターのオーディオが正常に機能するために必要なものではありません。

### fraps32.dll

このクラッシュは、FPSモニターおよび画面記録アプリである Fraps によって起きます。 Fraps は2013年以来アップデートされておらず、非常に時代遅れのアプリケーションとなっています。 Fraps に代わるアプリケーションをお使いください。 Fraps はソフトウェアが放棄されているため、バグは決して修正されないからです。

## エラー 0xc000007b のクラッシュ

システム上の何かによって Windows モジュールが破損しています。通常はこの場合、DirectX そのものが壊れています。 次のファイルを手動で削除してください。

* C:\Windows\SysWOW64\d3dx9_43.dll
* C:\Windows\System32\d3dx9_43.dll

次に、これらを DirectX 9 インストーラーでもう一度インストールします： *C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\_CommonRedist\DirectX\Jun2010\dxsetup.exe* （正確な場所は、wallpaper_engine インストールディレクトリの場所によって異なります）。

それでもエラーが出る場合は、類似した他の DirectX モジュールが何かによって破損しています。 これは通常、Windows のインストールについてより大きな問題が存在することを示しています。Wallpaper Engine を起動する前に修正する必要があります。