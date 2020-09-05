---
tags:
  - mdmp
---

# Wallpaper Engine 崩溃

Wallpaper Engine 是一款成熟的软件，用户数量高达数百万，已经过充分的测试 — 应用程序中极少会存在导致崩溃的错误。 如果您看到的崩溃消息中提到任何 **.dll** 文件，请查看以下列表，看看能否找到对导致系统崩溃的特定 **.dll** 的更准确描述：

[[toc]]

::: tip
我们从用户那里收到的崩溃报告几乎全都是由损坏的显卡驱动程序、防病毒应用程序或导致计算机不稳定的其他缺陷软件引起的。
:::

## Wallpaper Engine 崩溃快速修复尝试

如果不确定导致 Wallpaper Engine 崩溃的原因，请全新安装显卡驱动程序。 这意味着，您需要先完全卸载当前的驱动程序，然后再重新安装最新版驱动程序。 有些驱动程序在“高级”部分提供“执行全新安装”的选项，请务必启用该选项，以自动清除损坏驱动程序的所有残留项。 您可以从以下所有大型供应商处获得最新版显卡驱动程序：

* [Nvidia GeForce](https://www.nvidia.com/Download/index.aspx)
* [AMD Radeon](https://www.amd.com/support)
* [Intel Graphics](https://downloadcenter.intel.com/product/80939/Graphics-Drivers)

如果安装了防病毒应用程序（Windows Defender 除外），请务必在防病毒设置中为 Wallpaper Engine 设置例外。 如果防病毒软件永久损坏或锁定了某些文件，则此后有时必须重新安装 Wallpaper Engine。

此外，请务必尝试通过 Steam 验证 Wallpaper Engine 文件，以确保其完好无损：

* [Steam 支持：验证应用程序文件的完整性](https://support.steampowered.com/kb_article.php?ref=2037-QEUH-3335)

## Wallpaper Engine 崩溃可能由其他应用程序导致

### KERNELBASE.dll / ntdll.dll

这是 Windows 内核本身核心中发生的崩溃，通常由防病毒应用程序或损坏的显卡驱动程序导致。 有关更多信息，请参阅上方快速修复部分。 系统组件损坏也可能导致这种崩溃。 使用 Microsoft 系统文件检查器工具，修复可能损坏的 Windows 文件：

* [Microsoft 系统文件检查器工具](https://support.microsoft.com/zh-cn/help/929833/use-the-system-file-checker-tool-to-repair-missing-or-corrupted-system)

### d3d11.dll

这是 DirectX 中发生的崩溃，通常由防病毒应用程序或损坏的显卡驱动程序导致。 有关更多信息，请参阅上方快速修复部分。 系统组件损坏也可能导致这种崩溃。 使用 Microsoft 系统文件检查器工具，修复可能损坏的 Windows 文件：

* [Microsoft 系统文件检查器工具](https://support.microsoft.com/zh-cn/help/929833/use-the-system-file-checker-tool-to-repair-missing-or-corrupted-system)

### mfplat.dll

这是 Windows Media Foundation 中发生的崩溃，可能由显卡驱动程序损坏导致，但更常见的原因是系统上的视频编解码器损坏或丢失。 请按照我们视频修复指南中的修复程序，来修复以下各类崩溃：

[单击此处](/noshow/notplaying.html)

### AudioSes.dll

这种崩溃通常由 Windows 本身存在的问题导致。 请尝试重新安装最新版本的声卡驱动程序，因为这或许可以解决问题。 您还可以通过以下方法修复此类崩溃：在 Wallpaper Engine 设置的*性能*选项卡中，将*其他应用程序播放音频时*选项，更改为*保持运行*。

### atiumdag.dll / atiumd64.dll

* [AMD Radeon](https://www.amd.com/support)

::: tip
请注意： 请确保在设置过程中选中“执行全新安装”复选框，或者先手动卸载当前的驱动程序。 如果当前的驱动程序已损坏，请务必先将其完全清除。
:::

### nvwgf2umx.dll

系统上的 Nvidia 驱动程序崩溃了。 请访问 Nvidia 网站，从那里下载最新版驱动程序并安装：

* [Nvidia GeForce](https://www.nvidia.com/Download/index.aspx)

::: tip
请注意： 请确保在设置过程中选中“执行全新安装”复选框，或者先手动卸载当前的驱动程序。 如果当前的驱动程序已损坏，请务必先将其完全清除。
:::

### igdumd64.dll / igd10umd64.dll / igdumdx32.dll / igd10umd32.dll

系统上的 Intel Graphics 驱动程序崩溃了。 请访问 Intel 网站，从那里下载最新版驱动程序并安装：

* [Intel Graphics](https://downloadcenter.intel.com/product/80939/Graphics-Drivers)

### igdumd64.dll / igd10umd64.dll / igdumdx32.dll / igd10umd32.dll

The Intel graphics drivers on your system are crashing. Go to the Intel website, download the latest drivers from there and install them:

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

If the crashes persist even after a clean reinstallation of Razer Synapse, please contact Razer support directly and inform them about the crahes. If they are unable to help, please reach out to us for technical support - we can look into these crashes and forward our findings to the Razer Synapse development team as well though Razer should be the main contact for this specific crash.

### MMDEvAPI.dll

This type of crash occurs to due broken audio software installed on your system. This is usually caused by "sound enhancement" software, especially the ones pre-installed on various notebooks. This type of software will often cause crashes because they interact with Windows in a buggy way, try and look for "Sonic Studio" or "Nahimic" and update them. If you cannot find an update for these programs, you can also uninstall them as they are not necessary for your computer audio to function properly.

### fraps32.dll

The crash has been caused by the FPS monitor and screen recording app Fraps. Fraps has not received updates since 2013 and is a heavily outdated application. Please use an alternative to Fraps as this is a Fraps bug which may never be fixed as the software is abandoned.

## 崩溃错误 0xc000007b

This means that a Windows module has been corrupted by something on your system - usually DirectX itself is broken in this case. Try manually deleting these files:

* C:\Windows\SysWOW64\d3dx9_43.dll
* C:\Windows\System32\d3dx9_43.dll

Now install them again with the DirectX 9 installer: *C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\_CommonRedist\DirectX\Jun2010\dxsetup.exe* (The exact location depends on where your wallpaper_engine installation directory is).

If you still get this error it might be another, similar DirectX module that has been broken by something. This usually indicates a bigger underlying issues with your Windows installation which you need to fix before you can run Wallpaper Engine.

## 休眠/睡眠后崩溃

If Wallpaper Engine crashes after Windows hibernation, then Windows is failing to correctly restore your graphics card drivers and Wallpaper Engine together. Hibernation in Windows is simply not a reliable process. You can enable the option **Safe start after hibernation** in Wallpaper Engine to mitigate this issue. This option will attempt to automatically restart Wallpaper Engine instead of expecting Windows to correctly work after hibernation.