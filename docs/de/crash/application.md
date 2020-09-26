---
tags:
  - mdmp
---

# Wallpaper Engine Abstürze / Crashes

Wallpaper Engine ist eine langjährig-entwickelte Anwendung mit Millionen Anwendern und ist ausführlich getestet - es ist relativ selten, dass Fehler im Programm noch zu Abstürzen führen. Falls die Absturz-Fehlermeldung **.dll**-Dateien erwähnt, schaue dir bitte die folgende Liste an und schaue, ob für die bei dir relevante **.dll**-Datei eine genauere Beschreibung vorliegt:

[[toc]]

::: tip
Fast alle Abstürze die wir von unseren Anwendern erhalten können auf entweder defekte Grafikkartentreiber, Antivirus-Programme oder andere defekte Software zurückgeführt werden, welche den jeweiligen Computer instabil machen.
:::

## Wallpaper Engine - Schneller Lösungsversuch von Abstürzen

Falls du dir nicht sicher bist, was die Abstürze von Wallpaper Engine verursachen könnte, führe bitte eine saubere Neuinstallation deiner Grafikkartentreiber durch. Dies bedeutet, dass du zunächst deine Grafikkartentreiber deinstallieren und dann die neuesten Treiber erneut installieren musst, nachdem die alten Treiber vollständig entfernt wurden. Eine Treiber bieten eine Option zur "sauberen Neuinstallation" in den erweiterten Installationseinstellungen an. Stelle sicher, dass du diese Option aktivierst um jegliche Überbleibsel von defekten Treibern zu entfernen. Du kannst die neuesten Grafikkartentreiber von allen Herstellern hier herunterladen:

* [Nvidia GeForce](https://www.nvidia.de/Download/index.aspx)
* [AMD Radeon](https://www.amd.com/support)
* [Intel Graphics](https://downloadcenter.intel.com/product/80939/Graphics-Drivers)

Falls du ein Antivirenprogramm installiert hast (außer Windows Defender), stelle sicher, dass eine Ausnahmeregel für Wallpaper Engine in deinen Antivirus-Einstellungen konfiguriert ist. In einigen Fällen kann es nötig sein Wallpaper Engine vollständig neu zu installieren, wenn ein Antivirenprogramm einige Dateien unwiderrufliche kaputt gemacht oder in Quarantäne platziert hat.

Versuche außerdem die Wallpaper Engine-Dateien über Steam auf Fehler zu überpüfen, um sicherzustellen, dass diese nicht defekt sind:

* [Steam Support: Spieldateien auf Fehler überprüfen](https://support.steampowered.com/kb_article.php?ref=2037-QEUH-3335)

## "Wallpaper Engine was likely crashed by another application"

### KERNELBASE.dll / ntdll.dll

Dies ist ein Absturz im Kern von Windows selbst, dies wird im Normalfall durch Antiviren-Programme oder defekte Grafikkartentreiber verursacht. Siehe die Sektion zum schnellen Lösungsversuch oben für weitere Informationen. Dies kann auch durch defekte System-Komponenten ausgelöst werden. Verwende das Microsoft Systemdatei-Überprüfungsprogramm um gegebenenfalls defekte Windows-Dateien zu reparieren:

* [Microsoft Systemdatei-Überprüfungsprogramms](https://support.microsoft.com/de-de/help/929833/use-the-system-file-checker-tool-to-repair-missing-or-corrupted-system)

### d3d11.dll

Dies ist ein Absturz in DirectX und wird normalerweise durch Antiviren-Programme oder defekte Grafikkartentreiber ausgelöst. Siehe die Sektion zum schnellen Lösungsversuch oben für weitere Informationen. Dies kann auch durch defekte System-Komponenten ausgelöst werden. Verwende das Microsoft Systemdatei-Überprüfungsprogramm um gegebenenfalls defekte Windows-Dateien zu reparieren:

* [Microsoft Systemdatei-Überprüfungsprogramms](https://support.microsoft.com/de-de/help/929833/use-the-system-file-checker-tool-to-repair-missing-or-corrupted-system)

### mfplat.dll

Dieser Absturz wird von der Windows Media Foundation ausgelöst. Dies kann durch defekte Grafikkartentreiber ausgelöst werden, aber ist normalerweise auf defekte oder fehlende Video-Codecs auf deinem System zurückzuführen. Folge der Fehlerbehebung unserer Video-Reparaturanleitung um Abstürze dieser Art zu beheben:

[Hier klicken](/noshow/notplaying.html)

### AudioSes.dll

Dieser Fehler tritt im Normalfall durch ein Fehler in Windows selbst auf. Versuche die neueste Version deiner Soundkarten-Treiber (erneut) zu installieren, dies kann das Problem unter Umständen bereits beseitigen. Du kannst Abstürze dieser Art auf beheben, in dem du die Option *Andere Anwendung spielt Ton* im Reiter *Leistung* in den Wallpaper Engine-Einstellungen auf *Weiter ausführen* stellst.

### atiumdag.dll / atiumd64.dll

* [AMD Radeon](https://www.amd.com/support)

::: tip
Bitte beachten Während der Installation sollte die Auswahl "Eine saubere Neuinstallation durchführen" ausgewählt werden. Alternativ kannst du auch deine derzeitigen Treiber erst deinstallieren bevor du die neuen Treiber installierst. Falls deine derzeitigen Treiber defekt sind, ist es wichtig dass diese zuerst vollständig entfernt werden.
:::

### nvwgf2umx.dll

Die Nvidia-Treiber auf deinem System stürzen ab. Gehe zur Nvidia-Website, lade die neuesten Treiber dort herunter und installiere sie:

* [Nvidia GeForce](https://www.nvidia.de/Download/index.aspx)

::: tip
Bitte beachten Während der Installation sollte die Auswahl "Eine saubere Neuinstallation durchführen" ausgewählt werden. Alternativ kannst du auch deine derzeitigen Treiber erst deinstallieren bevor du die neuen Treiber installierst. Falls deine derzeitigen Treiber defekt sind, ist es wichtig dass diese zuerst vollständig entfernt werden.
:::

### igdumd64.dll / igd10umd64.dll / igdumdx32.dll / igd10umd32.dll

Die Intel-Grafikkartentreiber auf deinem System stürzen ab. Besuche die Intel-Website, lade die neuesten Treiber herunter und installiere diese:

* [Intel Graphics](https://downloadcenter.intel.com/product/80939/Graphics-Drivers)

### RZChromaSDK.dll / RzChromaSDK64.dll

These types of crashes are caused by Razer Chroma which is part of **Razer Synapse**. Usually, this is caused by a faulty installation of Razer Synapse. In most cases, a clean reinstallation of Razer Synapse fixes these types of crashes:

**Clean reinstallation of all Razer software**

::: warning
Make sure Wallpaper Engine is turned off while reinstalling Razer Synapse.
:::

1. Schalte Wallpaper Engine vollständig ab falls es läuft (Rechtsklick auf das Wallpaper Engine-Symbol neben der Windows-Uhr und dann **Beenden** auswählen)
2. Deinstalliere jegliche Razer-Software von deinem Computer über die Windows-Systemsteuerung
3. Lade die neueste Version der Razer-Software von der offiziellen Website herunter und installiere diese:

* [Download Razer Synapse 3](https://www.razer.com/synapse-3)

4. Starte danach deinen Computer neu, ohne Wallpaper Engine vorher erneut zu starten.

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
