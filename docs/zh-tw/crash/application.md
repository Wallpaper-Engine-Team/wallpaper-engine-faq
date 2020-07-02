---
tags:
  - mdmp
---

# Wallpaper Engine 損毀

Wallpaper Engine 是一款經過充分測試的成熟軟體，使用者達數百萬，此應用程式中存在極少導致損毀的錯誤。 如果您看到損毀訊息中提及任何 **.dll** 檔案，請檢視以下列表，確認是否能為導致系統損毀的特定 **.dll** 檔案找到更精確的描述：

[[toc]]

::: 提示 使用者提供的損毀報告幾乎都是因為顯示卡驅動程式損壞、防毒應用程式或其他缺陷軟體，使得電腦運作不穩定。 :::

## Wallpaper Engine 損毀快速修復方式

如果不確定導致 Wallpaper Engine 損毀的原因，請將顯示卡驅動程式全新重新安裝。 亦即，您需要先解除安裝驅動程式，等現有的驅動程式完全解除安裝後，再重新安裝最新的驅動程式。 有一些驅動程式在進階區段中提供了「執行全新重新安裝」的選項，請啟用此選項，自動清除不完整驅動程式遺留的任何檔案。 您可以從以下大廠取得最新的顯示卡驅動程式：

* [Nvidia GeForce](https://www.nvidia.com/Download/index.aspx)
* [AMD Radeon](https://www.amd.com/support)
* [Intel Graphics](https://downloadcenter.intel.com/product/80939/Graphics-Drivers)

如果您安裝了防毒應用程式 (Windows Defender 除外)，請務必在 Wallpaper Engine 的防毒設定中設定為例外。 如果防毒軟體永久損壞或鎖定某些檔案，則有時候必須重新安裝 Wallpaper Engine。

此外，務必透過 Steam 驗證 Wallpaper Engine，確保其完好未損壞。

* [Steam 支援：驗證應用程式檔案完整性](https://support.steampowered.com/kb_article.php?ref=2037-QEUH-3335)

## Wallpaper Engine 可能因為其他應用程式導致損毀

### KERNELBASE.dll/ntdll.dll

此代表 Windows 核心本身損毀，通常是因為防毒應用程式或顯示卡驅動程式損壞而造成。 欲知詳情，請見上方快速修復方式一節。 原因也可能是系統元件損壞。 請使用 Microsoft 系統檔案檢查程式修復可能損壞的 Windows 檔案：

* [Microsoft 系統檔案檢查程式](https://support.microsoft.com/en-us/help/929833/use-the-system-file-checker-tool-to-repair-missing-or-corrupted-system)

### d3d11.dll

此代表 DirectX 損毀，通常是因為防毒應用程式或顯示卡驅動程式損壞而造成。 欲知詳情，請見上方快速修復方式一節。 原因也可能是系統元件損壞。 請使用 Microsoft 系統檔案檢查程式修復可能損壞的 Windows 檔案：

* [Microsoft 系統檔案檢查程式](https://support.microsoft.com/en-us/help/929833/use-the-system-file-checker-tool-to-repair-missing-or-corrupted-system)

### mfplat.dll

此代表 Windows Media Foundation 損毀，可能是因為顯示卡驅動程式損壞，但更常見的原因是系統視訊轉碼器損壞或遺失。 請按照我們提供的視訊修復指南，依損毀類型修復：

[點選這裡](/noshow/notplaying.html)

### AudioSes.dll

發生此類損毀通常是因為 Windows 本身的問題。 重新安裝最新的音效卡驅動程式，或許即可解決此問題。 您也可至 Wallpaper Engine 設定中的*效能*分頁，將*其他應用程式播放音訊時*選項變更為*保持執行*。

### atiumdag.dll/atiumd64.dll

* [AMD Radeon](https://www.amd.com/support)

::: 提示 請注意 請確保在設定過程中選取「執行全新重新安裝」，或先手動解除安裝目前的驅動程式。 如果您目前的驅動程式已損，務必先將其完全清除。 :::

### nvwgf2umx.dll

系統上的 Nvidia 驅動程式損壞時， 請造訪 Nvidia 網站，下載並安裝最新的驅動程式：

* [Nvidia GeForce](https://www.nvidia.com/Download/index.aspx)

::: 提示 請注意 請確保在設定過程中選取「執行全新重新安裝」，或先手動解除安裝目前的驅動程式。 如果您目前的驅動程式已損，務必先將其完全清除。 :::

### igdumd64.dll/igd10umd64.dll/igdumdx32.dll/igd10umd32.dll

系統上的 Intel Graphics 損壞時， 請造訪 Intel 網站，下載並安裝最新的驅動程式：

* [Intel Graphics](https://downloadcenter.intel.com/product/80939/Graphics-Drivers)


### MMDEvAPI.dll

此種類型的損毀是因為系統安裝的音訊軟體已經損壞。 通常是因為「音效增強」軟體造成，尤其是各家筆記型電腦上預先安裝的軟體。 此類軟體以錯誤方式與 Windows 互動，因此常造成損毀，請找出「Sonic Studio」或 「Nahimic」並予以更新。 如果找不到這些程式的更新，您也可以將其解除安裝，因為電腦音訊不需要這類程式也能正常運作。

### fraps32.dll

此種損毀是因為 FPS 顯示器與螢幕錄製應用程式 Fraps 而造成。 Fraps 應用程式自 2013 年起就未再更新，已經嚴重過時。 由於 Fraps 已遭放棄，此錯誤可能永遠無法修復，請使用其他應用程式代替。

## 損毀錯誤 0xc000007b

此類損毀代表 Windows 模組已遭到系統某種程式破壞；在此情況下，通常 DirectX 本身已損壞。 請手動刪除下列檔案：

* C:\Windows\SysWOW64\d3dx9_43.dll
* C:\Windows\System32\d3dx9_43.dll

Now install them again with the DirectX 9 installer: *C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\_CommonRedist\DirectX\Jun2010\dxsetup.exe* (The exact location depends on where your wallpaper_engine installation directory is).

If you still get this error it might be another, similar DirectX module that has been broken by something. This usually indicates a bigger underlying issues with your Windows installation which you need to fix before you can run Wallpaper Engine.

## Crashing after Hibernation / Sleep

If Wallpaper Engine crashes after Windows hibernation, then Windows is failing to correctly restore your graphics card drivers and Wallpaper Engine together. Hibernation in Windows is simply not a reliable process. You can enable the option **Safe start after hibernation** in Wallpaper Engine to mitigate this issue. This option will attempt to automatically restart Wallpaper Engine instead of expecting Windows to correctly work after hibernation.