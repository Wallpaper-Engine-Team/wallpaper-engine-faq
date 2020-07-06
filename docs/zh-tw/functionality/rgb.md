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

### Corsair

某些硬體會說 **Corsair 系統記憶體 (RAM) 預設停用軟體控制**，代表您必須先在 iCUE 軟體設定中允許您的記憶體模組依據 Wallpaper Engine 發出亮光。 請確保在 iCUE 裝置設定的記憶體區段已選取「啟用完全軟體控制」選項：

![在 iCUE 中啟用完全軟體控制](./icue.png)

請再三檢視此選項，確認是否有其他硬體元件無法正常運作。

請注意，iCUE 是以*獨佔模式*使用，代表 Wallpaper Engine 將優先於其他與 iCUE 相容的軟體，例如遊戲。 如果您希望遊戲為鍵盤賦予動畫效果，請前往 Wallpaper Engine 設定的**效能**分頁，將**其他應用程式全螢幕顯示時**選項設定為**停止 (釋放記憶體)**，玩遊戲時便能阻止桌布開啟。 或者，您可以停用 RGB 外掛程式或在個別的桌布停用 RGB 選項。

如果需要 Corsair iCUE 硬體方面的支援，請直接聯絡 Corsair：

[help.corsair.com](https://help.corsair.com/)

如果您聯絡 Corsair 支援部門後仍遇到任何問題，還是可以與我們聯絡，一起確認如何解決。

### Razer
我們僅支援 Razer Synapse 3 或更新版本。 如果您使用 Razer Synapse 1 或 Razer Synapse 2，請確認完全解除安裝，並升級到最新版本的 Razer Synapse。 以往有些使用者的系統存在舊版 Razer Synapse 遺留的檔案，結果便遇到了問題。 如果您安裝了 Razer Synapse 2 或更舊的版本，而且遇到 RGB 亮光問題，或甚至在啟用 RGB 外掛程式後遇到當機，可能需要找到舊版 Razer Synapse 所有遺留的檔案，並將其刪除。

如果您的 Razer 硬體相對較舊，且不支援 Razer Synapse 3 或更新版本，那很可惜，代表 RGB 亮光與 Wallpaper Engine 並不相容。

如果需要 Razer 硬體方面的支援，請直接聯絡 Razer：

[support.razer.com](https://support.razer.com/)

如果您聯絡 Razer 支援部門後遇到任何問題，還是可以與我們聯絡，一起確認如何解決。