---
tags:
  - ハードウェア
---

# RGBハードウェアサポート（iCUE & Chroma）

Wallpaper Engineは、[**Razer Chroma**](https://www.razer.com/chroma)と[**Corsair iCUE**](https://www.corsair.com/icue)をサポートしています。また、これにはこれらのエコシステムに統合されている可能性のあるシステムが含まれます。

## RGBハードウェアを有効あるいは無効にする方法

Wallpaper Engine設定の「プラグイン」セクションに、**iCUE & Chroma SDK plugin**があります。 この左側のチェックボックスをマークすることによって、この一般的なRGBプラグインのロードを有効あるいは無効にすることができます。 また、その隣の歯車のマークをクリックすることで、さらにその個別の部分を設定することができます。

また、RGBサポートは各壁紙上で切り替えることができます。 プラグインが有効になっている場合、各壁紙のプロパティリストの最上部に、**LED効果を有効にする**オプションがあります。これにより、壁紙ごとのRGBライトをコントロールすることができます。

## RGBハードウェアの色が明るすぎる

デフォルトでは、RGBカラーは少し強めになっています。 ほとんどの壁紙では、こうすることで見栄えが良くなるのですが、それが好みでない場合は、RGBプラグインの設定にある**LEDカラーをブースト**オプションを無効にすることでオフにできます。

## RGBハードウェアが動作しない

Wallpaper Engineは、RGBハードウェアと直接にやり取りすることはできません。すべてのカラー情報は、まずRGBドライバに送られます。 1つ、あるいは複数のハードウェアが動作していない場合、問題は、ハードウェアベンダーのソフトウェアの側にあると考えられます。 ハードウェアが非常に古い場合、ハードウェアベンダーによって完全にサポートされておらず、動作しません。 Wallpaper Engineの側で修正することはできません。

Wallpaper Engineの*プラグイン*セクションが見えない場合、*Visual C++ Redistributable for Visual Studio 2015*がインストールされていないか、破損している可能性が高いです。これは、この機能に必須のものです。 Microsoftのサイトからこのパッケージをダウンロードしてインストールすると、システムの再起動後に問題は解消されます。

* [Visual C++ Redistributable for Visual Studio 2015](https://www.microsoft.com/download/details.aspx?id=48145)

### Corsair

**Corsair system memory (RAM) などのハードウェアでは、ソフトウェアコントロールがデフォルトで無効**になっています。これは、iCUEソフトウェア設定で許可しない限り、メモリモジュールがWallpaper Engineに従ってライトアップしないということです。 メモリセクションのiCUEデバイス設定で「完全なソフトウェアコントロールを有効にする」が選択されていることを確認してください。

![Enable full software control in iCUE](./icue.png)

正しく動作しない、その他のハードウェアパーツについても、このオプションを確認してください。

iCUEは*排他モード*で使用されているという点に注意してください。これは、Wallpaper Engineが、ゲームなどの他のiCUE互換ソフトウェアよりも優先的に使用するということです。 ゲームにキーボードをアニメーションさせたい場合は、Wallpaper Engine設定の**パフォーマンス**タブで、**他のアプリケーションがフルスクリーンになった場合**オプションを**停止（メモリ解放）**にセットして、ゲーム中は壁紙を停止させてください。 または、RGBプラグインを無効にしたり、壁紙ごとにRGBオプションを無効にしたりすることもできます。

Corsair iCUEハードウェアのサポートが必要な場合は、Corsairに直接お問い合わせください。

[help.corsair.com](https://help.corsair.com/)

Corsairのサポートに関して問題が起きた場合、私たちにご連絡いただくこともできます。何か力になれるかどうか確認させていただきます。

### Razer
Wallpaper Engineは、Razer Synapse 3以降のみをサポートしています。 Razer Synapse 1またはRazer Synapse 2をお使いの場合は、これらを完全にアンインストールして、Razer Synapseの最新バージョンにアップグレードしてください。 以前、古いRazer Synapseの名残がシステムに残っていたために問題が起きたことがあります。 If you had Razer Synapse 2 or older installed and have issues with your RGB lighting or even experience crashes with the RGB plugin being enabled, you may need to find any leftovers of old Razer Synapse versions on your system and delete it.

If your Razer hardware is relatively old and does not support Razer Synapse 3 or newer, unfortunately its RGB lighting is not compatible with Wallpaper Engine.

For support with Razer hardware, please contact Razer directly:

[support.razer.com](https://support.razer.com/)

Should you run into any issues with Razer's support, you can still reach out to us and we will see if we can help you.