---
tags:
  - 崩溃
  - 关闭
  - Nvidia
  - battleye
---

# BattlEye 反作弊系统终止 Wallpaper Engine
如果 Wallpaper Engine 在您启动特定游戏时无提示关闭，最有可能导致这种情况的应该是被众多多人游戏采用的 BattlEye 反作弊系统。 已知采用 BattlEye 系统的游戏有：

* Fortnite
* Playerunknown's Battleground (PUBG)
* Rainbow Six Siege
* Escape from Tarkov
* *等等...*

BattlEye 会在某些系统上错误地关闭 Wallpaper Engine（和其他应用程序），这并非 Wallpaper Engine 中的错误或崩溃。 即使 Wallpaper Engine 不与系统上的游戏或软件交互，BattleEye 也会主动终止 Wallpaper Engine。

## Nvidia 低延迟模式
受此问题影响的大多数用户均在 Nvidia 显卡中启用了*超低延迟模式*。 如果您有 Nvidia 显卡并遇到此问题，请打开 Nvidia 控制面板，然后禁用超低延迟模式以解决此问题。 选择*“管理 3D 设置”* -> *“全局设置”* -> *“低延迟模式”*，然后将此设置更改为*关闭*。 单击*应用*，然后重新启动计算机。 Afterwards, BattlEye will not terminate Wallpaper Engine by mistake anymore.

## Contacting BattlEye Support
If the steps above do not fix your issues with a BattlEye-powered multiplayer game, you will need to reach out to BattlEye directly:

* [BattlEye Support](https://www.battleye.com/contact/)

On some systems, BattlEye will terminate Wallpaper Engine for no apparent reason and this is not something we can prevent as BattlEye is a rather intrusive anti-cheat which is able to terminate any application on your computer without notifying you. In these cases, the BattlEye developers will need to investigate the issue on your system as its a faulty behavior in their software.