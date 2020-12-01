---
tags:
  - mdmp
---

# Wallpaper Engine 當機

Wallpaper Engine 是發展成熟且經充分測試的軟體，使用者達數百萬，此應用程式中存在極少導致當機的錯誤。 如果您看到當機訊息中提及任何 **.dll** 檔案，請檢視以下列表，確認是否能為導致系統當機的特定 **.dll** 檔案找到更精確的描述：

[[toc]]

::: tip
使用者提供的當機報告幾乎都是因為顯示卡驅動程式損壞、防毒應用程式或其他缺陷軟體，使得電腦運作不穩定。
:::

## Wallpaper Engine 當機快速修復方式

如果不確定導致 Wallpaper Engine 當機的原因，請將顯示卡驅動程式全新安裝。 亦即，您需要先解除安裝驅動程式，等現有的驅動程式完全解除安裝後，再重新安裝最新的驅動程式。 有一些驅動程式在進階區段中提供了「執行全新安裝」的選項，請啟用此選項，自動清除不完整驅動程式遺留的任何檔案。 您可以從以下大廠取得最新的顯示卡驅動程式：

* [Nvidia GeForce](https://www.nvidia.com/Download/index.aspx)
* [AMD Radeon](https://www.amd.com/support)
* [Intel Graphics](https://downloadcenter.intel.com/product/80939/Graphics-Drivers)

如果您安裝了防毒應用程式 (Windows Defender 除外)，請務必在 Wallpaper Engine 的防毒設定中設定為例外。 如果防毒應用程式永久損壞或鎖定某些檔案，有時候必須重新安裝 Wallpaper Engine。 請確保您的防毒應用程式已忽略 *wallpaper_engine* 目錄，以及所有 .exe 檔案：

* *wallpaper_engine/wallpaper32.exe*
* *wallpaper_engine/wallpaper64.exe*
* *wallpaper_engine/launcher.exe*
* *wallpaper_engine/bin/webwallpaper32.exe*
* *wallpaper_engine/bin/ui32.exe*

此外，務必透過 Steam 驗證 Wallpaper Engine，確保其完好無損。

* [Steam 支援：驗證應用程式檔案完整性](https://support.steampowered.com/kb_article.php?ref=2037-QEUH-3335)

如果情況嚴重，請將防毒應用程式設定改為比較不嚴格的模式，接著可能需要解除安裝 Wallpaper Engine，並手動刪除 *wallpaper_engine* 目錄，再重新安裝。

## 電腦休眠/睡眠後當機

如果 Wallpaper Engine 在 Windows 休眠後當機，則 Windows 便無法同時正確還原顯示卡驅動程式與 Wallpaper Engine。 Windows 的休眠模式並不可靠。 您可啟用 Wallpaper Engine 中的**休眠後安全啟動**以緩解此問題。 Wallpaper Engine 將自動重新啟動，不會寄望 Windows 休眠後能正常運作。

## Wallpaper Engine 當機/錯誤代碼「0xC0000005」

此錯誤訊息幾乎都是因為**防毒應用程式**或**驅動程式故障**。 如果您正在使用防毒應用程式，儘管防毒應用程式並未回報任何活動，也極有可能是當機的原因。 請確認已設定為忽略 *wallpaper_engine* 安裝目錄以及所有重要的 Wallpaper Engine 可執行檔。 詳情請見上方 *Wallpaper Engine 當機快速修復方式*一節。

如果目前並未安裝防毒應用程式，請重新安裝所有重要的驅動程式，並切換為 Wallpaper Engine 的 64 位元版本 (如果目前使用的是 64 位元版本，則切換至 32 位元版本)。

在某些情況下，也可能是因為其他應用程式以異常方式干擾了 Wallpaper Engine。 主要是因為將代碼注入 Wallpaper Engine 或以某種方式劇烈改變 Windows 安裝。

!["0xC0000005" Wallpaper Engine 當機訊息](/img/faq/0xC0000005.png)

## Wallpaper Engine 可能因為其他應用程式而當機

### KERNELBASE.dll/ntdll.dll

此代表 Windows 核心本身當機，通常是因為防毒應用程式或顯示卡驅動程式損壞而造成。 欲知詳情，請見上方快速修復方式一節。 原因也可能是系統元件損壞。 請使用 Microsoft 系統檔案檢查程式修復可能損壞的 Windows 檔案：

* [Microsoft 系統檔案檢查程式](https://support.microsoft.com/zh-tw/help/929833/use-the-system-file-checker-tool-to-repair-missing-or-corrupted-system)

### d3d11.dll

此代表 DirectX 當機，通常是因為防毒應用程式或顯示卡驅動程式損壞而造成。 欲知詳情，請見上方快速修復方式一節。 原因也可能是系統元件損壞。 請使用 Microsoft 系統檔案檢查程式修復可能損壞的 Windows 檔案：

* [Microsoft 系統檔案檢查程式](https://support.microsoft.com/en-us/help/929833/use-the-system-file-checker-tool-to-repair-missing-or-corrupted-system)

### mfplat.dll

此代表 Windows Media Foundation 當機，可能是因為顯示卡驅動程式損壞，但更常見的原因是系統視訊轉碼器損壞或遺失。 請按照我們提供的視訊修復指南，依當機類型修復：

[點選這裡](/noshow/notplaying.html)

### AudioSes.dll

發生此類當機通常是因為 Windows 本身的問題。 重新安裝最新的音效卡驅動程式，或許即可解決此問題。 您也可至 Wallpaper Engine 設定中的*效能*分頁，將*其他應用程式播放音訊時*選項變更為*保持執行*。

### atiumdag.dll/atiumd64.dll

* [AMD Radeon](https://www.amd.com/support)

::: tip
請注意 請確保在設定過程中選取「執行全新安裝」，或先手動解除安裝目前的驅動程式。 如果您目前的驅動程式已損壞，務必先將其完全清除。
:::

### nvwgf2umx.dll

系統上的 Nvidia 驅動程式損壞時， 請造訪 Nvidia 網站，下載並安裝最新的驅動程式：

* [Nvidia GeForce](https://www.nvidia.com/Download/index.aspx)

::: tip
請注意 請確保在設定過程中選取「執行全新安裝」，或先手動解除安裝目前的驅動程式。 如果您目前的驅動程式已損壞，務必先將其完全清除。
:::

### igdumd64.dll/igd10umd64.dll/igdumdx32.dll/igd10umd32.dll

系統上的 Intel Graphics 損壞時， 請造訪 Intel 網站，下載並安裝最新的驅動程式：

* [Intel Graphics](https://downloadcenter.intel.com/product/80939/Graphics-Drivers)

### RZChromaSDK.dll/RzChromaSDK64.dll

此類當機的原因是 Razer Chroma，為 **Razer Synapse** 的一部分。 通常這是因為 Razer Synapse 安裝時故障。 大部分情況下，全新安裝 Razer Synapse 即可解決這類當機問題：

**全新安裝所有 Razer 軟體**

::: warning
確保重新安裝 Razer Synapse 時，Wallpaper Engine 已關閉。
:::

1. 如果 Wallpaper Engine 正在運作，請完全關閉 (以滑鼠右鍵按一下 Windows 通知區域的圖示，接著點選**結束**)
2. 透過 Windows 將所有 Razer 軟體解除安裝
3. 從 Razer 網站下載最新版本的軟體套件並安裝：

* [下載 Razer Synapse 3](https://www.razer.com/synapse-3)

4. 先重新啟動電腦，再重新啟動 Wallpaper Engine。

**重新安裝無法解決問題**

如果重新安裝 Razer Synapse 也無法解決此問題，可能是因為 Razer Synapse 本身潛在問題，以前曾因為 Razer Synapse 更新故障才導致此問題。 在 Wallpaper Engine 設定中的**外掛程式**關閉 LED 外掛程式 (*"iCUE & Chroma SDK"*)，等到未來 Razer Synapse 更新解決此問題後再啟用。

如果全新安裝 Razer Synapse 後仍然當機，請直接聯絡 Razer 支援部門，告知當機問題。 如果他們無法協助，請聯絡我們以取得技術支援；雖然遇到此問題時，Razer 才是主要的聯絡對象，但我們可協助確認當機問題，並將檢測結果轉呈給 Razer Synapse 開發團隊。

### MMDEvAPI.dll

此種類型的當機是因為系統安裝的音訊軟體已經損壞。 通常是因為「音效增強」軟體造成，尤其是各家筆記型電腦上預先安裝的軟體。 此類軟體以錯誤方式與 Windows 互動，因此常造成當機，請找出「Sonic Studio」或 「Nahimic」並執行更新。 如果您找不到這些程式的更新，也可以將其解除安裝，因為電腦音訊不需要這類程式也能正常運作。

### fraps32.dll

此種當機是因為 FPS 顯示器與螢幕錄製應用程式 Fraps 而造成。 Fraps 應用程式自 2013 年起就未再更新，已經嚴重過時。 由於 Fraps 已遭放棄，此錯誤可能永遠無法修復，請改用其他應用程式。

## 當機錯誤 0xc000007b

此類當機代表 Windows 模組已遭到系統某種程式破壞；在此情況下，通常 DirectX 本身已損壞。 請手動刪除下列檔案：

* C:\Windows\SysWOW64\d3dx9_43.dll
* C:\Windows\System32\d3dx9_43.dll

接著，請使用 DirectX 9 安裝程式再次安裝： *C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\_CommonRedist\DirectX\Jun2010\dxsetup.exe* (確切位置取決於 wallpaper_engine 安裝目錄的位置)。

如果仍然出現此錯誤，可能是另一個相似的 DirectX 模組因故損壞， 通常代表 Windows 安裝隱藏更大的潛在問題，您得先解決這些問題，Wallpaper Engine 才能正常運作。