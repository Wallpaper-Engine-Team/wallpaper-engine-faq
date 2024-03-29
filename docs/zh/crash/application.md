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

如果安装了防病毒应用程序（Windows Defender 除外），请务必在防病毒设置中为 Wallpaper Engine 设置例外。 如果防病毒软件永久损坏或锁定了某些文件，则此后有时必须重新安装 Wallpaper Engine。 请确保您的防病毒应用程序忽略了 *wallpaper_engine* 目录，特别是所有的 .exe 文件：

* *wallpaper_engine/wallpaper32.exe*
* *wallpaper_engine/wallpaper64.exe*
* *wallpaper_engine/launcher.exe*
* *wallpaper_engine/bin/webwallpaper32.exe*
* *wallpaper_engine/bin/ui32.exe*

此外，请务必尝试通过 Steam 验证 Wallpaper Engine 文件，以确保其完好无损：

* [Steam 支持：验证应用程序文件的完整性](https://support.steampowered.com/kb_article.php?ref=2037-QEUH-3335)

在严重的情况下，您可能需要卸载 Wallpaper Engine，并手动删除 *wallpaper_engine* 目录，然后在将防病毒应用程序配置为不那么严格之后，重新安装 Wallpaper Engine。

## 休眠/睡眠后崩溃

如果 Wallpaper Engine 在 Windows 休眠后崩溃，则 Windows 无法正确地同时还原显卡驱动程序和 Wallpaper Engine。 Windows 中的休眠并非可靠的进程。 您可以在 Wallpaper Engine 中启用**休眠后安全启动**选项，以缓解此问题。 此选项将尝试自动重新启动 Wallpaper Engine，而不是期望 Windows 在休眠后正常工作。

## Wallpaper Engine has crashed / 错误代码“0xC0000005”

此错误消息几乎总是由**防病毒应用程序**或**驱动程序故障**导致。 如果您使用防病毒应用程序，那么即使该防病毒应用程序未报告任何活动，它也很可能是导致这种崩溃的原因。 请务必对防病毒应用程序进行配置，使其忽略 *wallpaper_engine* 安装目录以及 Wallpaper Engine 所有重要的可执行文件。 有关更多详细信息，请参阅上方的 *Wallpaper Engine 崩溃快速修复尝试*部分。

如果未安装防病毒应用程序，请重新安装所有重要的驱动程序，然后尝试切换到 64 位版本的 Wallpaper Engine（如果已经使用过 64 位版本，则尝试切换到 32 位版本）。

在某些情况下，导致这种崩溃的原因还可能是其他应用程序以异常方式干扰了 Wallpaper Engine。 这主要与将代码注入 Wallpaper Engine 或以某种方式显着改变 Windows 安装的应用程序有关。

!["0xC0000005" Wallpaper Engine 崩溃消息](/img/faq/0xC0000005.png)

## Wallpaper Engine 崩溃可能由其他应用程序导致

### KERNELBASE.dll / ntdll.dll

这是 Windows 内核本身核心中发生的崩溃，通常由防病毒应用程序或损坏的显卡驱动程序导致。 有关更多信息，请参阅上方快速修复部分。 系统组件损坏也可能导致这种崩溃。 使用 Microsoft 系统文件检查器工具，修复可能损坏的 Windows 文件：

* [Microsoft 系统文件检查器工具](https://support.microsoft.com/zh-cn/help/929833/use-the-system-file-checker-tool-to-repair-missing-or-corrupted-system)

### d3d11.dll

这是 DirectX 中发生的崩溃，通常由防病毒应用程序或损坏的显卡驱动程序导致。 有关更多信息，请参阅上方快速修复部分。 系统组件损坏也可能导致这种崩溃。 使用 Microsoft 系统文件检查器工具，修复可能损坏的 Windows 文件：

* [Microsoft 系统文件检查器工具](https://support.microsoft.com/en-us/help/929833/use-the-system-file-checker-tool-to-repair-missing-or-corrupted-system)

### mfplat.dll

这是 Windows Media Foundation 中发生的崩溃，可能由显卡驱动程序损坏导致，但更常见的原因是系统上的视频编解码器损坏或丢失。 请按照我们视频修复指南中的修复程序，来修复以下各类崩溃：

[单击此处](/noshow/notplaying.html)

### AudioSes.dll

这种崩溃通常由 Windows 本身存在的问题导致。 请尝试重新安装最新版本的声卡驱动程序，因为这或许可以解决问题。 您还可以通过以下方法修复此类崩溃：在 Wallpaper Engine 设置的*性能*选项卡中，将*其他应用程序播放音频时*选项，更改为*保持运行*。

### atiumdag.dll / atiumd64.dll

* [AMD Radeon](https://www.amd.com/support)

::: tip
请注意：
请确保在设置过程中选中“执行全新安装”复选框，或者先手动卸载当前的驱动程序。 如果当前的驱动程序已损坏，请务必先将其完全清除。
:::

### nvwgf2umx.dll / nvwgf2um.dll

系统上的 Nvidia 驱动程序崩溃了。 请访问 Nvidia 网站，从那里下载最新版驱动程序并安装：

* [Nvidia GeForce](https://www.nvidia.com/Download/index.aspx)

::: tip
请注意：
请确保在设置过程中选中“执行全新安装”复选框，或者先手动卸载当前的驱动程序。 如果当前的驱动程序已损坏，请务必先将其完全清除。
:::

### igdumd64.dll / igd10umd64.dll / igdumdx32.dll / igd10umd32.dll

系统上的 Intel Graphics 驱动程序崩溃了。 请访问 Intel 网站，从那里下载最新版驱动程序并安装：

* [Intel Graphics](https://downloadcenter.intel.com/product/80939/Graphics-Drivers)

### RZChromaSDK.dll / RzChromaSDK64.dll

这些类型的崩溃由属于 **Razer Synapse** 的一部分的 Razer Chroma 导致。 通常由 Razer Synapse 安装故障引起。 在大多数情况下，执行 Razer Synapse 的全新安装即可修复这些类型的崩溃：

**所有 Razer 软件的全新安装**

::: warning
重新安装 Razer Synapse 时，请务必确保已关闭 Wallpaper Engine。
:::

1. 如果 Wallpaper Engine 正在运行，请将其完全关闭（右键单击 Windows 托盘中的图标，然后选择**退出**）
2. 通过 Windows 卸载计算机上的所有 Razer 软件
3. 从 Razer 网站上下载 Razer 软件套件的最新版本并进行安装：

* [下载 Razer Synapse 3](https://www.razer.com/synapse-3)

4. 然后重新启动计算机，此前不要重新启动 Wallpaper Engine。

**重新安装无法解决问题**

如果重新安装 Razer Synapse 无法解决问题，则 Razer Synapse 本身可能存在潜在问题，Razer Synapse 更新故障曾经导致过此类崩溃。 尝试在 Wallpaper Engine 设置的**插件**选项卡中关闭 LED 插件（*“iCUE & Chroma SDK”*），直到未来的 Razer Synapse 更新解决此问题为止。

如果即使执行了 Razer Synapse 的全新安装，崩溃依然存在，请直接联系 Razer 支持部门并告知有关崩溃的信息。 如果他们无法提供帮助，请与我们联系以获取技术支持，我们可以调查这些崩溃，并将调查结果转呈 Razer Synapse 开发团队，尽管 Razer 应该是此类特定崩溃的主要联系人。

### MMDEvAPI.dll

发生此类崩溃的原因是，系统上安装的音频软件已损坏。 这通常由“声音增强”软件导致，尤其是预先安装在各种笔记本电脑上的“声音增强”软件。 此类软件经常导致崩溃，因为它们以错误的方式与 Windows 交互，请尝试查找“Sonic Studio”或“Nahimic”，然后对其进行更新。 如果找不到这些程序的更新，您也可以将其卸载，因为它们对于计算机音频的正常运行并不必要。

### fraps32.dll

此类崩溃由 FPS 显示器和屏幕录制应用程序 Fraps 导致。 Fraps 应用程序自 2013 年起再未进行任何更新，已经严重过时。 请使用 Fraps 的替代应用程序，因为这是 Fraps 的一个错误，由于该软件已被放弃，此错误可能永远无法修复。

## 崩溃错误 0xc000007b

这意味着，有个 Windows 模块已被系统上的某些东西破坏 — 在这种情况下，DirectX 本身通常已经损坏。 请尝试手动删除以下文件：

* C:\Windows\SysWOW64\d3dx9_43.dll
* C:\Windows\System32\d3dx9_43.dll

现在，使用 DirectX 9 安装程序再次安装它们：*C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\_CommonRedist\DirectX\Jun2010\dxsetup.exe*（确切的位置取决于 wallpaper_engine 安装目录的位置）。

如果仍然出现此错误，那么可能是另一个相似的 DirectX 模块被某些东西损坏了。 这通常表示，Windows 安装存在较大的潜在问题，您得先解决这些问题，然后才能运行 Wallpaper Engine。