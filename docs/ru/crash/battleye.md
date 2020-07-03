---
tags:
  - crash
  - close
  - nvidia
  - battleye
---

# Античит BattlEye завершает работу Wallpaper Engine
Если Wallpaper Engine закрывается без уведомлений при запуске определенных игр, скорее всего это результат работы античита BattlEye, который применяется во множестве многопользовательских игр. BattlEye применяется в:

* Fortnite
* PlayerUnknown's Battleground (PUBG)
* Rainbow Six Siege
* Escape from Tarkov
* *И многих других играх...*

На некоторых компьютерах BattlEye закрывает Wallpaper Engine (и другие программы) по ошибке. Это не сбой в работе Wallpaper Engine. BattleEye завершает работу Wallpaper Engine, несмотря на то, что Wallpaper Engine не взаимодействует с играми или программами на вашем компьютере.

## Nvidia Low-Latency Mode
Most users affected by this have the *Ultra-Low Latency Mode* enabled in the Nvidia graphics drivers. If you have an Nvidia graphics card and suffer from this issue, open the Nvidia Control Panel and disable ultra-low latency mode to fix this issue. Select *"Manage 3D settings"* -> *"Global Settings"* -> *"Low Latency Mode"* and change this setting to *Off*. Click *Apply* and restart your computer. Afterwards, BattlEye will not terminate Wallpaper Engine by mistake anymore.

## Contacting BattlEye Support
If the steps above do not fix your issues with a BattlEye-powered multiplayer game, you will need to reach out to BattlEye directly:

* [BattlEye Support](https://www.battleye.com/contact/)

On some systems, BattlEye will terminate Wallpaper Engine for no apparent reason and this is not something we can prevent as BattlEye is a rather intrusive anti-cheat which is able to terminate any application on your computer without notifying you. In these cases, the BattlEye developers will need to investigate the issue on your system as its a faulty behavior in their software.