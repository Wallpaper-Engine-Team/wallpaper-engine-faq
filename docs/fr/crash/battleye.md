---
tags:
  - crash
  - close
  - nvidia
  - battleye
---

# BattlEye anti-cheat terminating Wallpaper Engine
If Wallpaper Engine closes silently when you start specific games then this is most likely caused by the aBattlEye anti-cheat used by numerous multiplayer games. Known games that use BattlEye are:

* Fortnite
* Playerunknown's Battleground (PUBG)
* Rainbow Six Siege
* Escape from Tarkov
* *And more...*

BattlEye closes Wallpaper Engine (and other applications) by mistake on some systems, this is not a bug or a crash in Wallpaper Engine. Wallpaper Engine gets actively terminated by BattleEye even though Wallpaper Engine does not interact with games or software on your system.

## Nvidia Low-Latency Mode
Most users affected by this have the *Ultra-Low Latency Mode* enabled in the Nvidia graphics drivers. If you have an Nvidia graphics card and suffer from this issue, open the Nvidia Control Panel and disable ultra-low latency mode to fix this issue. Select *"Manage 3D settings"* -> *"Global Settings"* -> *"Low Latency Mode"* and change this setting to *Off*. Click *Apply* and restart your computer. Afterwards, BattlEye will not terminate Wallpaper Engine by mistake anymore.

## Contacting BattlEye Support
If the steps above do not fix your issues with a BattlEye-powered multiplayer game, you will need to reach out to BattlEye directly:

* [BattlEye Support](https://www.battleye.com/contact/)

On some systems, BattlEye will terminate Wallpaper Engine for no apparent reason and this is not something we can prevent as BattlEye is a rather intrusive anti-cheat which is able to terminate any application on your computer without notifying you. In these cases, the BattlEye developers will need to investigate the issue on your system as its a faulty behavior in their software.