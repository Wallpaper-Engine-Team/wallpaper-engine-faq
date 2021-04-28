---
tags:
  - hardware
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

1. Wallpaper Engine を完全に終了します。 これは非常に重要な手順なので飛ばさないでください。
2. すべての Razer ソフトウェアを Windows を使ってアンインストールします。
3. Razer Synapse 3 の最新バージョンをダウンロードし直し、インストールします。 **重要：**Razer Synapseそのものの**Chroma Connect**モジュールも必ず再インストールしてください。
4. コンピューターを再起動します。Windows の再起動前に Wallpaper Engine を起動しないでください。

See if this resolves your issues with your RGB hardware. For additional support with Razer hardware, please contact Razer directly:

[support.razer.com](https://support.razer.com/)

Should you run into any issues with Razer's support, you can still reach out to us and we will see if we can help you.

#### Razer Synapse 2 以前

We only support Razer Synapse 3 or newer. If you are using Razer Synapse 1 or Razer Synapse 2, make sure to fully uninstall them and upgrade to the latest version of Razer Synapse. In the past, some users had issues with remnants of old Razer Synapse having been left on their system. If you had Razer Synapse 2 or older installed and have issues with your RGB lighting or even experience crashes with the RGB plugin being enabled, you may need to find any leftovers of old Razer Synapse versions on your system and delete it.

If your Razer hardware is relatively old and does not support Razer Synapse 3 or newer, unfortunately its RGB lighting is not compatible with Wallpaper Engine.