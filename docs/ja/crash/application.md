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

これは Windows カーネル自体のコアにおけるクラッシュです。通常、アンチウイルスアプリケーションか破損したグラフィックスカードドライバーによって起きます。 詳しくは上記のクイックフィックスセクションをご覧ください。 また、破損したシステムコンポーネントによって起きる可能性もあります。 Use the Microsoft System File Checker tool to repair possibly broken Windows files:

* [Microsoft System File Checker Tool](https://support.microsoft.com/en-us/help/929833/use-the-system-file-checker-tool-to-repair-missing-or-corrupted-system)

### d3d11.dll

This is a crash in DirectX, it is usually caused by antivirus applications or broken graphics card drivers. See the quick fix section above for more information. It can also be caused by broken system components. Use the Microsoft System File Checker tool to repair possibly broken Windows files:

* [Microsoft System File Checker Tool](https://support.microsoft.com/en-us/help/929833/use-the-system-file-checker-tool-to-repair-missing-or-corrupted-system)

### mfplat.dll

This is a crash in the Windows Media Foundation, it can be caused by broken graphics card drivers but it is more commonly caused by broken or missing video codecs on your system. Follow the fixes from our video fix guide to fix these types of crashes:

[Click here](/noshow/notplaying.html)

### AudioSes.dll

This crash usually happens due to an issue in Windows itself. Try to re-install the latest version of your sound card drivers as this may fix the problem. You can also fix these crashes by changing the *Other application playing audio* option in the *Performance* tab of the Wallpaper Engine settings to *Keep running*.

### atiumdag.dll / atiumd64.dll

* [AMD Radeon](https://www.amd.com/support)

::: tip Please note Make sure to select the "Perform clean re-installation" checkbox during setup or manually uninstall your current drivers first. If your current drivers are broken, it's important to fully clear them first. :::

### nvwgf2umx.dll

The Nvidia drivers on your system are crashing. Go to the Nvidia website, download the latest drivers from there and install them:

* [Nvidia GeForce](https://www.nvidia.com/Download/index.aspx)

::: tip Please note Make sure to select the "Perform clean re-installation" checkbox during setup or manually uninstall your current drivers first. If your current drivers are broken, it's important to fully clear them first. :::

### igdumd64.dll / igd10umd64.dll / igdumdx32.dll / igd10umd32.dll

The Intel graphics drivers on your system are crashing. Go to the Intel website, download the latest drivers from there and install them:

* [Intel Graphics](https://downloadcenter.intel.com/product/80939/Graphics-Drivers)


### MMDEvAPI.dll

This type of crash occurs to due broken audio software installed on your system. This is usually caused by "sound enhancement" software, especially the ones pre-installed on various notebooks. This type of software will often cause crashes because they interact with Windows in a buggy way, try and look for "Sonic Studio" or "Nahimic" and update them. If you cannot find an update for these programs, you can also uninstall them as they are not necessary for your computer audio to function properly.

### fraps32.dll

The crash has been caused by the FPS monitor and screen recording app Fraps. Fraps has not received updates since 2013 and is a heavily outdated application. Please use an alternative to Fraps as this is a Fraps bug which may never be fixed as the software is abandoned.

## Crash error 0xc000007b

This means that a Windows module has been corrupted by something on your system - usually DirectX itself is broken in this case. Try manually deleting these files:

* C:\Windows\SysWOW64\d3dx9_43.dll
* C:\Windows\System32\d3dx9_43.dll

Now install them again with the DirectX 9 installer: *C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\_CommonRedist\DirectX\Jun2010\dxsetup.exe* (The exact location depends on where your wallpaper_engine installation directory is).

If you still get this error it might be another, similar DirectX module that has been broken by something. This usually indicates a bigger underlying issues with your Windows installation which you need to fix before you can run Wallpaper Engine.

## Crashing after Hibernation / Sleep

If Wallpaper Engine crashes after Windows hibernation, then Windows is failing to correctly restore your graphics card drivers and Wallpaper Engine together. Hibernation in Windows is simply not a reliable process. You can enable the option **Safe start after hibernation** in Wallpaper Engine to mitigate this issue. This option will attempt to automatically restart Wallpaper Engine instead of expecting Windows to correctly work after hibernation.