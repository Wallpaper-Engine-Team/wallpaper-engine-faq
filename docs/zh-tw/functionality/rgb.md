---
tags:
  - 硬體
---

# RGB 硬體支援 (iCUE 及 Chroma)

Wallpaper Engine 支援 [**Razer Chroma**](https://www.razer.com/chroma) 及 [**Corsair iCUE**](https://www.corsair.com/icue)，包括可以整合至任一生態系統的系統。

## 如何啟用/停用 RGB 硬體

在 Wallpaper Engine 設定中的「外掛程式」區段，您可以找到 **iCUE 及 Chroma SDK 外掛程式**。  您可勾選左側的核取方塊，來啟用或停用此通用 RGB 外掛程式的載入作業， 也可以按一下旁邊的齒輪符號，進一步設定各部分。

此外，您可切換每張桌布的 RGB 支援功能。 請至每張桌布內容列表的上方找到**啟用 LED 效果**的選項，即可啟用此外掛程式，控制個別桌布的 RGB 亮光效果。

## RGB 硬體顏色似乎過亮

在預設情況下，RGB 顏色會稍微增強。 因此，大部分桌布主觀看來會有更佳的視覺效果，但如果您不喜歡，也可以在 RGB 外掛程式設定中停用**增強 LED 顏色**。

## RGB 硬體無法運作

Wallpaper Engine 無法直接與 RGB 硬體溝通，所有顏色資訊都是先傳送到 RGB 驅動程式。 如果一個或多個硬體無法正常運作，問題肯定出在硬體供應商的軟體。 有些非常舊的硬體無法再受到硬體供應商的全面支援，因而無法正常運作。 我們對此無能為力，煩請見諒。

如果您根本看不見 Wallpaper Engine 設定的*外掛程式*區段，則很可能未安裝 *Visual C++ Redistributable for Visual Studio 2015* 或安裝已損壞，您必須安裝該程式，才能正常運作。 您可以從 Microsoft 網站下載並安裝此程式套件，系統重新啟動後即可解決此問題：

* [Visual C++ Redistributable for Visual Studio 2015](https://www.microsoft.com/download/details.aspx?id=48145)

## 休眠後 RGB 硬體出現問題

在極少見的情況下，休眠可能會造成 RGB 硬體與 Wallpaper Engine 共同停止運作。 如果系統從休眠中醒來後，部分或全部的 RGB 硬體停止運作，請在 Wallpaper Engine 的**一般**分頁中啟用**休眠後安全啟動**選項，大部分受影響的使用者都能因此解決問題。

此外，您可使用 Wallpaper Engine 設定中**外掛程式**分頁底部的**外掛程式載入延遲**選項，使 Wallpaper Engine 嘗試連線至 RGB 硬體的作業延遲。 您可設定為 **30 秒**的值，測試看看可否解決問題。

### Corsair

Starting with iCUE 4, you need to manually enable software control in the iCUE settings first, otherwise Wallpaper Engine cannot connect to iCUE. If you have any issues with RGB lighting in combination with Corsair iCUE, make sure to check the iCUE settings first.

* Open iCUE.
* Click the Settings icon in the upper right corner.
* Click **Software and Games** on the left menu of the settings window.
* Make sure that the *software integrations* options are enabled. Check the **Devices** tab to make sure all your hardware devices are also enabled for this type of RGB lighting.

If you still have issues with your Corsair lighting setup, try a full reinstallation of your Corsair iCUE software, then restart your computer and reinstall. Many issues can be resolved by reinstalling the Corsair software suite, followed by manually enabling the software integration options.

Note that iCUE is used in *exclusive mode*, this means that Wallpaper Engine will take priority over other iCUE-compatible software such as games. If you want your games to animate your keyboard, go to the **Performance** tab of the Wallpaper Engine settings and set the **Other applications fullscreen** option to **Stop (free memory)** to stop wallpapers while in-game. Alternatively, disable either the RGB plugin or disable the RGB option on individual wallpapers.

For support with Corsair iCUE hardware, please contact Corsair directly:

[help.corsair.com](https://help.corsair.com/)

Should you run into any issues with Corsair's support, you can still reach out to us and we will see if we can help you.

### Razer

Most problems related to Razer RGB hardware can be fixed by doing a clean reinstallation of the Razer software suite while Wallpaper Engine is turned off:

1. 完全關閉 Wallpaper Engine。 這步驟很重要，請勿跳過。
2. 透過 Windows 系統將所有 Razer 軟體解除安裝。
3. 重新下載並安裝最新版本的 Razer Synapse 3。 **重要事項：**請確認也重新安裝 Razer Synapse 本身的 **Chroma Connect** 模組。
4. 重新啟動電腦，務必先重新啟動 Windows，再啟動 Wallpaper Engine。

See if this resolves your issues with your RGB hardware. For additional support with Razer hardware, please contact Razer directly:

[support.razer.com](https://support.razer.com/)

Should you run into any issues with Razer's support, you can still reach out to us and we will see if we can help you.

#### Razer Synapse 2 及更舊版本

We only support Razer Synapse 3 or newer. If you are using Razer Synapse 1 or Razer Synapse 2, make sure to fully uninstall them and upgrade to the latest version of Razer Synapse. In the past, some users had issues with remnants of old Razer Synapse having been left on their system. If you had Razer Synapse 2 or older installed and have issues with your RGB lighting or even experience crashes with the RGB plugin being enabled, you may need to find any leftovers of old Razer Synapse versions on your system and delete it.

If your Razer hardware is relatively old and does not support Razer Synapse 3 or newer, unfortunately its RGB lighting is not compatible with Wallpaper Engine.