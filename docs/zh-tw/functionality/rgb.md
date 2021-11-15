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

從 iCUE 4 開始，您需要先在 iCUE 設定中手動啟用軟體控制，否則 Wallpaper Engine 無法連線至 iCUE。 如果您使用 Corsair iCUE 時遇到 RGB 亮光問題，務必先檢查 iCUE 設定。

* 開啟 iCUE。
* 按一下右上角的「設定」圖示。
* 按一下設定視窗左側選單的**軟體和遊戲**。
* Make sure that the *software integrations* options are enabled. Check the **Devices** tab to make sure all your hardware devices are also enabled for this type of RGB lighting.

If you still have issues with your Corsair lighting setup, try a full reinstallation of your Corsair iCUE software, then restart your computer and reinstall. Many issues can be resolved by reinstalling the Corsair software suite, followed by manually enabling the software integration options.

請注意，iCUE 是以*獨佔模式*使用，代表 Wallpaper Engine 將優先於其他與 iCUE 相容的軟體，例如遊戲。 如果您希望遊戲為鍵盤賦予動畫效果，請前往 Wallpaper Engine 設定的**效能**分頁，將**其他應用程式全螢幕顯示時**選項設定為**停止 (釋放記憶體)**，玩遊戲時便能阻止桌布開啟。 或者，您可以停用 RGB 外掛程式或在個別的桌布停用 RGB 選項。

如果需要 Corsair iCUE 硬體方面的支援，請直接聯絡 Corsair：

[help.corsair.com](https://help.corsair.com/)

如果您聯絡 Corsair 支援部門後仍遇到任何問題，還是可以與我們聯絡，一起確認如何解決。

### Razer

大部分與 Razer RGB 硬體相關的問題皆可解決，只要關閉 Wallpaper Engine 並將 Razer 軟體套件全新安裝即可：

1. 完全關閉 Wallpaper Engine。 這步驟很重要，請勿跳過。
2. 透過 Windows 系統將所有 Razer 軟體解除安裝。
3. 重新下載並安裝最新版本的 Razer Synapse 3。 **重要事項：**請確認也重新安裝 Razer Synapse 本身的 **Chroma Connect** 模組。
4. 重新啟動電腦，務必先重新啟動 Windows，再啟動 Wallpaper Engine。

確認上述步驟是否能解決 RGB 硬體問題。 如果需要其他 Razer 硬體方面的支援，請直接聯絡 Razer：

[support.razer.com](https://support.razer.com/)

如果您聯絡 Razer 支援部門後遇到任何問題，還是可以與我們聯絡，一起確認如何解決。

#### Razer Synapse 2 及更舊版本

我們僅支援 Razer Synapse 3 或更新版本。 如果您使用 Razer Synapse 1 或 Razer Synapse 2，請確認完全解除安裝，並升級到最新版本的 Razer Synapse。 以往有些使用者的系統存在舊版 Razer Synapse 遺留的檔案，結果便遇到了問題。 如果您安裝了 Razer Synapse 2 或更舊的版本，而且遇到 RGB 亮光問題，或甚至在啟用 RGB 外掛程式後遇到當機，可能需要找到舊版 Razer Synapse 所有遺留的檔案，並將其刪除。

如果您的 Razer 硬體相對較舊，且不支援 Razer Synapse 3 或更新版本，那很可惜，代表 RGB 亮光與 Wallpaper Engine 並不相容。