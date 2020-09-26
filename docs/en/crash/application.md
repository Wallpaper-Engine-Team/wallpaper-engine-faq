---
tags:
  - mdmp
---
# Wallpaper Engine crashing

Wallpaper Engine is a matured software used by millions and well tested - it is relatively rare that there are actually bugs in the application causing crashes. If the crash message you are seeing mentions any **.dll** files, please have a look at the following list and see if you can find a more accurate description for specific **.dll** causing the crash on your system:

[[toc]]

::: tip
Almost all crash reports we receive from users turn out to be caused by broken graphics card drivers, antivirus applications or other defective software that makes the computer unstable.
:::

## Wallpaper Engine Crash Quick Fix Attempt

If you are unsure what is crashing Wallpaper Engine, please do a clean re-installation of your graphics card drivers. That means you need to first uninstall your drivers and then re-install the latest drivers after your current drivers have been fully uninstalled. Some drivers offer a "Perform clean re-installation" option in the advanced section, be sure to enable that option to automatically clean any remnants of broken drivers. You can get the latest graphics card drivers from all big vendors here:

* [Nvidia GeForce](https://www.nvidia.com/Download/index.aspx)
* [AMD Radeon](https://www.amd.com/support)
* [Intel Graphics](https://downloadcenter.intel.com/product/80939/Graphics-Drivers)

If you have an antivirus application installed (except Windows Defender), make sure to set up an exception for Wallpaper Engine in your antivirus settings. Sometimes a re-installation of Wallpaper Engine is necessary after this if your antivirus has permanently broken or locked some files.

Always also try to verify the Wallpaper Engine files through steam to ensure they are not broken:

* [Steam Support: Verify Integrity of Application Files](https://support.steampowered.com/kb_article.php?ref=2037-QEUH-3335)

## Wallpaper Engine was likely crashed by another application

### KERNELBASE.dll / ntdll.dll

This is a crash in the core of the Windows kernel itself, it is usually caused by antivirus applications or broken graphics card drivers. See the quick fix section above for more information. It can also be caused by broken system components. Use the Microsoft System File Checker tool to repair possibly broken Windows files:

* [Microsoft System File Checker Tool](https://support.microsoft.com/en-us/help/929833/use-the-system-file-checker-tool-to-repair-missing-or-corrupted-system)

### d3d11.dll

This is a crash in DirectX, it is usually caused by antivirus applications or broken graphics card drivers. See the quick fix section above for more information. It can also be caused by broken system components. Use the Microsoft System File Checker tool to repair possibly broken Windows files:

* [Microsoft System File Checker Tool](https://support.microsoft.com/en-us/help/929833/use-the-system-file-checker-tool-to-repair-missing-or-corrupted-system)

### mfplat.dll

This is a crash in the Windows Media Foundation, it can be caused by broken graphics card drivers but it is more commonly caused by broken or missing video codecs on your system. Follow the fixes from our video fix guide to fix these types of crashes:

[Click here](/noshow/notplaying.html)

### AudioSes.dll

This crash usually happens due to an issue in Windows itself. Try to re-install the latest version of your sound card drivers as this may fix the problem. You can also fix these crashes by changing the *Other application playing audio* option in the *Performance* tab of the Wallpaper Engine settings to *Keep running*.

### atiumdag.dll / atiumd64.dll

* [AMD Radeon](https://www.amd.com/support)

::: tip Please note
Make sure to select the "Perform clean re-installation" checkbox during setup or manually uninstall your current drivers first. If your current drivers are broken, it's important to fully clear them first.
:::

### nvwgf2umx.dll

The Nvidia drivers on your system are crashing. Go to the Nvidia website, download the latest drivers from there and install them:

* [Nvidia GeForce](https://www.nvidia.com/Download/index.aspx)

::: tip Please note
Make sure to select the "Perform clean re-installation" checkbox during setup or manually uninstall your current drivers first. If your current drivers are broken, it's important to fully clear them first.
:::

###  igdumd64.dll / igd10umd64.dll / igdumdx32.dll / igd10umd32.dll

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

If the crashes persist even after a clean reinstallation of Razer Synapse, please contact Razer support directly and inform them about the crashes. If they are unable to help, please reach out to us for technical support - we can look into these crashes and forward our findings to the Razer Synapse development team as well though Razer should be the main contact for this specific crash.

### MMDEvAPI.dll

This type of crash occurs to due broken audio software installed on your system. This is usually caused by "sound enhancement" software, especially the ones pre-installed on various notebooks. This type of software will often cause crashes because they interact with Windows in a buggy way, try and look for "Sonic Studio" or "Nahimic" and update them. If you cannot find an update for these programs, you can also uninstall them as they are not necessary for your computer audio to function properly.

### fraps32.dll

The crash has been caused by the FPS monitor and screen recording app Fraps. Fraps has not received updates since 2013 and is a heavily outdated application. Please use an alternative to Fraps as this is a Fraps bug which may never be fixed as the software is abandoned.

## Crash error 0xc000007b

This means that a Windows module has been corrupted by something on your system - usually DirectX itself is broken in this case. Try manually deleting these files:

* C:\Windows\SysWOW64\d3dx9_43.dll
* C:\Windows\System32\d3dx9_43.dll

Now install them again with the DirectX 9 installer: *C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\_CommonRedist\DirectX\Jun2010\dxsetup.exe* (The exact location depends on where your wallpaper_engine installation directory is).

If you still get this error it might be another, similar DirectX module that has been broken by something. This usually indicates a bigger underlying issues with your Windows installation which you need to fix before you can run Wallpaper Engine.

## Crashing after Hibernation / Sleep

If Wallpaper Engine crashes after Windows hibernation, then Windows is failing to correctly restore your graphics card drivers and Wallpaper Engine together. Hibernation in Windows is simply not a reliable process. You can enable the option **Safe start after hibernation** in Wallpaper Engine to mitigate this issue. This option will attempt to automatically restart Wallpaper Engine instead of expecting Windows to correctly work after hibernation.
