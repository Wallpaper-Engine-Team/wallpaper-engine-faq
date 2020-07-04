---
tags:
  - 硬體
---

# RGB 硬體支援 (iCUE 及 Chroma)

Wallpaper Engine 支援 [**Razer Chroma**](https://www.razer.com/chroma) 及 [**Corsair iCUE**](https://www.corsair.com/icue)，包括可以整合至任一生態系統的系統。

## 如何啟用/停用 RGB 硬體

在 Wallpaper Engine 設定中的「外掛程式」區段，您可以找到 **iCUE 及 Chroma SDK 外掛程式**。  您可勾選左側的核取方塊，來啟用或停用此通用 RGB 外掛程式的載入作業。 您也可以按一下旁邊的齒輪符號，進一步設定各部分。

此外，您可切換每張桌布的 RGB 支援功能。 如果您想啟用此外掛程式，可至每張桌布內容列表的上方找到**啟用 LED 效果**的選項，即可控制個別桌布的 RGB 亮光效果。

## RGB 硬體顏色似乎過亮

在預設情況下，RGB 顏色稍微增強。 因此，大部分桌布主觀看來會有更佳的視覺效果，但如果您不喜歡，也可以在 RGB 外掛程式設定中停用**增強 LED 顏色**。

## RGB 硬體無法正常運作

Wallpaper Engine 無法直接與 RGB 硬體溝通，所有顏色資訊都是先傳送到 RGB 驅動程式。 如果一個或多個硬體無法正常運作，問題肯定出在硬體供應商的軟體。 有些非常舊的硬體無法再受到硬體供應商的全面支援，因而無法正常運作。 我們對此無能為力，煩請見諒。

如果您根本看不見 Wallpaper Engine 設定的*外掛程式*區段，則很可能未安裝 *Visual C++ Redistributable for Visual Studio 2015* 或安裝已損壞，但您必須安裝該程式，才能正常運作。 您可以從 Microsoft 網站下載並安裝此程式套件，系統重新啟動後即可解決此問題：

* [Visual C++ Redistributable for Visual Studio 2015](https://www.microsoft.com/download/details.aspx?id=48145)

### Corsair

某些硬體會說 **Corsair 系統記憶體 (RAM) 預設停用軟體控制**，代表您必須先在 iCUE 軟體設定中允許您的記憶體模組依據 Wallpaper Engine 發亮。 請確保在 iCUE 裝置設定的記憶體區段已選取「啟用完整軟體控制」選項：

![Enable full software control in iCUE](./icue.png)

Double-check this option for any other hardware parts which are not working properly.

Note that iCUE is used in *exclusive mode*, this means that Wallpaper Engine will take priority over other iCUE-compatible software such as games. If you want your games to animate your keyboard, go to the **Performance** tab of the Wallpaper Engine settings and set the **Other applications fullscreen** option to **Stop (free memory)** to stop wallpapers while in-game. Alternatively, disable either the RGB plugin or disable the RGB option on individual wallpapers.

For support with Corsair iCUE hardware, please contact Corsair directly:

[help.corsair.com](https://help.corsair.com/)

Should you run into any issues with Corsair's support, you can still reach out to us and we will see if we can help you.

### Razer
We only support Razer Synapse 3 or newer. If you are using Razer Synapse 1 or Razer Synapse 2, make sure to fully uninstall them and upgrade to the latest version of Razer Synapse. In the past, some users had issues with remnants of old Razer Synapse having been left on their system. If you had Razer Synapse 2 or older installed and have issues with your RGB lighting or even experience crashes with the RGB plugin being enabled, you may need to find any leftovers of old Razer Synapse versions on your system and delete it.

If your Razer hardware is relatively old and does not support Razer Synapse 3 or newer, unfortunately its RGB lighting is not compatible with Wallpaper Engine.

For support with Razer hardware, please contact Razer directly:

[support.razer.com](https://support.razer.com/)

Should you run into any issues with Razer's support, you can still reach out to us and we will see if we can help you.