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

如果您安裝了防毒應用程式 (Windows Defender 除外)，請務必在 Wallpaper Engine 的防毒設定中設定為例外。 如果防毒應用程式永久損壞或鎖定某些檔案，有時候必須重新安裝 Wallpaper Engine。

此外，務必透過 Steam 驗證 Wallpaper Engine，確保其完好無損。

* [Steam 支援：驗證應用程式檔案完整性](https://support.steampowered.com/kb_article.php?ref=2037-QEUH-3335)

## Wallpaper Engine 可能因為其他應用程式而當機

### KERNELBASE.dll/ntdll.dll

此代表 Windows 核心本身當機，通常是因為防毒應用程式或顯示卡驅動程式損壞而造成。 欲知詳情，請見上方快速修復方式一節。 原因也可能是系統元件損壞。 請使用 Microsoft 系統檔案檢查程式修復可能損壞的 Windows 檔案：

* [Microsoft 系統檔案檢查程式](https://support.microsoft.com/zh-tw/help/929833/use-the-system-file-checker-tool-to-repair-missing-or-corrupted-system)

### d3d11.dll

此代表 DirectX 當機，通常是因為防毒應用程式或顯示卡驅動程式損壞而造成。 欲知詳情，請見上方快速修復方式一節。 原因也可能是系統元件損壞。 請使用 Microsoft 系統檔案檢查程式修復可能損壞的 Windows 檔案：

* [Microsoft 系統檔案檢查程式](https://support.microsoft.com/zh-tw/help/929833/use-the-system-file-checker-tool-to-repair-missing-or-corrupted-system)

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

### RZChromaSDK.dll / RzChromaSDK64.dll

These types of crashes are caused by Razer Chroma which is part of **Razer Synapse**. Usually, this is caused by a faulty installation of Razer Synapse. In most cases, a clean reinstallation of Razer Synapse fixes these types of crashes:

**Clean reinstallation of all Razer software**

::: warning
Make sure Wallpaper Engine is turned off while reinstalling Razer Synapse.
:::

1. Turn off Wallpaper Engine completely if it is running (right-click on the icon in the Windows tray and then select **Quit**)
2. Uninstall all Razer software from your computer through Windows
3. Download the latest version of Razer's software suite from their website and install it:

* [Download Razer Synapse 3](https://www.razer.com/synapse-3)

4. Afterwards restart your computer without restarting Wallpaper Engine beforehand.

**Reinstallation does not fix the problem**

If the issue is not resolved by a reinstallation of Razer Synapse, there may be an underlying issue with Razer Synapse itself, in the past this has been caused by faulty Razer Synapse updates. Try turning off the LED Plugin (*"iCUE & Chroma SDK"*) in the **Plugins** tab of the Wallpaper Engine settings until this problem is fixed in a future Razer Synapse update.

If the crashes persist even after a clean reinstallation of Razer Synapse, please contact Razer support directly and inform them about the crashes. If they are unable to help, please reach out to us for technical support - we can look into these crashes and forward our findings to the Razer Synapse development team as well though Razer should be the main contact for this specific crash.

### MMDEvAPI.dll

This type of crash occurs to due broken audio software installed on your system. This is usually caused by "sound enhancement" software, especially the ones pre-installed on various notebooks. This type of software will often cause crashes because they interact with Windows in a buggy way, try and look for "Sonic Studio" or "Nahimic" and update them. If you cannot find an update for these programs, you can also uninstall them as they are not necessary for your computer audio to function properly.

### fraps32.dll

The crash has been caused by the FPS monitor and screen recording app Fraps. Fraps has not received updates since 2013 and is a heavily outdated application. Please use an alternative to Fraps as this is a Fraps bug which may never be fixed as the software is abandoned.

## 當機錯誤 0xc000007b

This means that a Windows module has been corrupted by something on your system - usually DirectX itself is broken in this case. Try manually deleting these files:

* C:\Windows\SysWOW64\d3dx9_43.dll
* C:\Windows\System32\d3dx9_43.dll

Now install them again with the DirectX 9 installer: *C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\_CommonRedist\DirectX\Jun2010\dxsetup.exe* (The exact location depends on where your wallpaper_engine installation directory is).

If you still get this error it might be another, similar DirectX module that has been broken by something. This usually indicates a bigger underlying issues with your Windows installation which you need to fix before you can run Wallpaper Engine.

## 電腦休眠/睡眠後當機

If Wallpaper Engine crashes after Windows hibernation, then Windows is failing to correctly restore your graphics card drivers and Wallpaper Engine together. Hibernation in Windows is simply not a reliable process. You can enable the option **Safe start after hibernation** in Wallpaper Engine to mitigate this issue. This option will attempt to automatically restart Wallpaper Engine instead of expecting Windows to correctly work after hibernation.
