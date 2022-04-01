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

Falls du ein Antivirenprogramm installiert hast (außer Windows Defender), stelle sicher, dass eine Ausnahmeregel für Wallpaper Engine in deinen Antivirus-Einstellungen konfiguriert ist. In einigen Fällen kann es nötig sein Wallpaper Engine vollständig neu zu installieren, wenn ein Antivirenprogramm einige Dateien unwiderrufliche kaputt gemacht oder in Quarantäne platziert hat. Stelle sicher, dass deine Antivirenprogramm das *wallpaper_engine*-Verzeichnis ignoriert, besonders alle ".exe"-Dateien:

* *wallpaper_engine/wallpaper32.exe*
* *wallpaper_engine/wallpaper64.exe*
* *wallpaper_engine/launcher.exe*
* *wallpaper_engine/bin/webwallpaper32.exe*
* *wallpaper_engine/bin/ui32.exe*

Versuche außerdem die Wallpaper Engine-Dateien über Steam auf Fehler zu überprüfen, um sicherzustellen, dass diese nicht defekt sind:

* [Steam Support: Spieldateien auf Fehler überprüfen](https://support.steampowered.com/kb_article.php?ref=2037-QEUH-3335)

In einigen Fällen ist es unter Umständen nötig, Wallpaper Engine zu deinstallieren und dann das *wallpaper_engine*-Verzeichnis zu löschen, daraufhin kann die Anwendung neu installiert werden, wenn dein Antivirenprogramm weniger strikt eingestellt wurde.

## Abstürze nach Standby / Ruhemodus

Wenn Wallpaper Engine nach einem Windows-Standby abstürzt, bedeutet dies, dass Windows nicht in der Lage ist, deinen Grafikkartentreiber und Wallpaper Engine gleichzeitig wiederherzustellen. Der Ruhemodus von Windows ist kein sehr stabiler Prozess. Du kannst die Option **Sicherer Start nach Ruhemodus** in den Wallpaper Engine-Einstellungen aktivieren, um das Problem in den meisten Fällen zu lösen. Diese Option versucht einen vollständigen Neustart von Wallpaper Engine durchzuführen, anstatt sich auf Windows nach dem Aufwachen aus dem Ruhemodus zu verlassen.

## "Wallpaper Engine has crashed" / Error code "0xC0000005"

Diese Fehlermeldung wird fast immer durch **Antivirenprogramme** oder **defekte Treiber** ausgelöst. Wenn du ein Antivirenprogramm verwendest, ist es sehr wahrscheinlich der Grund für diese Art von Abstürzen - selbst wenn dein Antivirenprogramm keine Aktivitäten meldet. Bitte stelle sicher, es so zu konfigurieren, dass es das *wallpaper_engine*-Installationsverzeichnis und alle Wallpaper Engine ".exe"-Dateien ignoriert. Siehe die Sektion *Wallpaper Engine - Schneller Lösungsversuch von Abstürzen* oben für weitere Informationen im Detail.

Falls du kein Antivirenprogramm installiert hast, installiere bitte alle wichtigen Treiber neu und versuche auf die 64 Bit-Version von Wallpaper Engine zu wechseln (oder 32 Bit-Version wenn du bereits die 64 Bit-Version nutzt).

In einigen Fällen, können diese Art von Abstürzen auch durch den Einfluss von anderen Anwendungen auf Wallpaper Engine ausgelöst werden. Dies tritt normalerweise bei Anwendungen auf, welche Code in Wallpaper Engine injizieren oder eine Windows-Installation signifikant modifizieren.

![Wallpaper Engine Absturzmeldung mit "0xC0000005"-Fehlercode](/img/faq/0xC0000005.png)

## "Wallpaper Engine was likely crashed by another application"

### KERNELBASE.dll / ntdll.dll

Dies ist ein Absturz im Kern von Windows selbst, dies wird im Normalfall durch Antiviren-Programme oder defekte Grafikkartentreiber verursacht. Siehe die Sektion zum schnellen Lösungsversuch oben für weitere Informationen. Dies kann auch durch defekte System-Komponenten ausgelöst werden. Verwende das Microsoft Systemdatei-Überprüfungsprogramm um gegebenenfalls defekte Windows-Dateien zu reparieren:

* [Microsoft Systemdatei-Überprüfungsprogramms](https://support.microsoft.com/de-de/help/929833/use-the-system-file-checker-tool-to-repair-missing-or-corrupted-system)

### d3d11.dll

Dies ist ein Absturz in DirectX und wird normalerweise durch Antiviren-Programme oder defekte Grafikkartentreiber ausgelöst. Siehe die Sektion zum schnellen Lösungsversuch oben für weitere Informationen. Dies kann auch durch defekte System-Komponenten ausgelöst werden. Verwende das Microsoft Systemdatei-Überprüfungsprogramm um gegebenenfalls defekte Windows-Dateien zu reparieren:

* [Microsoft Systemdatei-Überprüfungsprogramms](https://support.microsoft.com/en-us/help/929833/use-the-system-file-checker-tool-to-repair-missing-or-corrupted-system)

### mfplat.dll

Dieser Absturz wird von der Windows Media Foundation ausgelöst. Dies kann durch defekte Grafikkartentreiber ausgelöst werden, aber ist normalerweise auf defekte oder fehlende Video-Codecs auf deinem System zurückzuführen. Folge der Fehlerbehebung unserer Video-Reparaturanleitung um Abstürze dieser Art zu beheben:

[Hier klicken](/noshow/notplaying.html)

### AudioSes.dll

Dieser Fehler tritt im Normalfall durch ein Fehler in Windows selbst auf. Versuche die neueste Version deiner Soundkarten-Treiber (erneut) zu installieren, dies kann das Problem unter Umständen bereits beseitigen. Du kannst Abstürze dieser Art auf beheben, in dem du die Option *Andere Anwendung spielt Ton* im Reiter *Leistung* in den Wallpaper Engine-Einstellungen auf *Weiter ausführen* stellst.

### atiumdag.dll / atiumd64.dll

* [AMD Radeon](https://www.amd.com/support)

::: tip
Bitte beachten
Während der Installation sollte die Auswahl "Eine saubere Neuinstallation durchführen" ausgewählt werden. Alternativ kannst du auch deine derzeitigen Treiber erst deinstallieren bevor du die neuen Treiber installierst. Falls deine derzeitigen Treiber defekt sind, ist es wichtig dass diese zuerst vollständig entfernt werden.
:::

### nvwgf2umx.dll / nvwgf2um.dll

Die Nvidia-Treiber auf deinem System stürzen ab. Gehe zur Nvidia-Website, lade die neuesten Treiber dort herunter und installiere sie:

* [Nvidia GeForce](https://www.nvidia.com/Download/index.aspx)

::: tip
Bitte beachten
Während der Installation sollte die Auswahl "Eine saubere Neuinstallation durchführen" ausgewählt werden. Alternativ kannst du auch deine derzeitigen Treiber erst deinstallieren bevor du die neuen Treiber installierst. Falls deine derzeitigen Treiber defekt sind, ist es wichtig dass diese zuerst vollständig entfernt werden.
:::

### igdumd64.dll / igd10umd64.dll / igdumdx32.dll / igd10umd32.dll

Die Intel-Grafikkartentreiber auf deinem System stürzen ab. Besuche die Intel-Website, lade die neuesten Treiber herunter und installiere diese:

* [Intel Graphics](https://downloadcenter.intel.com/product/80939/Graphics-Drivers)

### RZChromaSDK.dll / RzChromaSDK64.dll

Diese Art von Abstürzen werden von Razer Chroma verursacht, welches Teil von **Razer Synapse** ist. Normalerweise wird dies von einer fehlerhaften Installation von Razer Synapse verursacht. In den meisten Fällen behebt eine saubere Neuinstallation von Razer Synapse diese Art von Abstürzen:

**Saubere Neuinstallation von Razer-Software**

::: warning
Stelle sicher, dass Wallpaper Engine ausgeschaltet ist während Razer Synapse neu installiert wird.
:::

1. Schalte Wallpaper Engine vollständig ab falls es läuft (Rechtsklick auf das Wallpaper Engine-Symbol neben der Windows-Uhr und dann **Beenden** auswählen)
2. Deinstalliere jegliche Razer-Software von deinem Computer über die Windows-Systemsteuerung
3. Lade die neueste Version der Razer-Software von der offiziellen Website herunter und installiere diese:

* [Razer Synapse 3 herunterladen](https://www.razer.com/synapse-3)

4. Starte danach deinen Computer neu, ohne Wallpaper Engine vorher erneut zu starten.

**Neuinstallation löst das Problem nicht**

Falls das Problem nicht durch eine Neuinstallation von Razer Synapse gelöst werden kann, liegt wahrscheinlich ein Problem in Razer Synapse selbst vor. In der Vergangenheit wurde dies beispielsweise durch fehlerhafte Razer Synapse-Updates verursacht. Versuche das LED-Plugin (*"iCUE & Chroma SDK"*) im Reiter **Plugins** in den Wallpaper Engine-Einstellungen abzuschalten, bis das Problem in einem Razer Synapse-Update behoben wurde.

Falls die Abstürze selbst nach einer sauberen Neuinstallation von Razer Synapse fortbestehen, kontaktiere bitte den Kundendienst von Razer direkt und informiere sie über die Abstürze. Falls sie dir nicht mit deinem Problem helfen können, kannst du uns natürlich trotzdem gerne kontaktieren. Wir können das Problem von unserer Seite aus angucken und unsere Analyse an das Razer Synapse-Team weiterleiten. Trotzdem sollte Razer der erste Ansprechpartner sein bei Abstürzen dieser Art.

### MMDEvAPI.dll

Diese Art von Absturz tritt auf, wenn fehlerhafte Audio-Software auf deinem System installiert ist. Dies wird normalerweise durch Software zur "Soundverbesserung" verursacht, besonders durch Software welche auf einigen Notebooks vorinstalliert mitgeliefert wird. Diese Art von Anwendungen verursachen oft Abstürze, da sie mir Windows in einer fehlerhaften Weise interagieren. Suche auf deinem System nach "Sonic Studio" oder "Nahimic" und aktualisiere diese wenn möglich. Falls du kein Update für diese Art von Anwendung finden kannst, kannst du sie auch deinstallieren, da sie nicht notwendig für die Audiowiedergabe auf deinem System sind.

### fraps32.dll

Der Absturz wurde von Fraps, einer Anwendung zum anzeigen von FPS und Aufnehmen von Bildschirmaufnahmen, verursacht. Fraps wurde seit 2013 nicht mehr aktualisiert und ist eine sehr veraltete Anwendung. Bitte verwende eine Alternative zu Fraps, da es sich hierbei um einen Fehler in Fraps handelt, welcher wahrscheinlich niemals behoben wird, da die Software nicht weiter entwickelt wird.

## Absturzfehler 0xc000007b

Dies bedeutet, dass ein Windows-Modul defekt ist - normalerweise ist DirectX in diesem Fall beschädigt. Versuche diese Dateien zu löschen:

* C:\Windows\SysWOW64\d3dx9_43.dll
* C:\Windows\System32\d3dx9_43.dll

Installiere diese nun neu mit dem DirectX 9-Installationsprogramm: *C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\_CommonRedist\DirectX\Jun2010\dxsetup.exe* (Der genaue Ort der Datei kann anders sein, wenn dein wallpaper_engine-Installationspfad an einem anderen Ort liegt).

Falls dieser Fehler weiterhin auftritt, kann das Problem den Ursprung in einem ähnliches DirectX-Modul haben, welches ebenfalls beschädigt wurde. Dies bedeutet normalerweise, dass deine Windows-Installation tiefere Probleme hat, welche zunächst repariert werden müssen, bevor du Wallpaper Engine ausführen kannst.