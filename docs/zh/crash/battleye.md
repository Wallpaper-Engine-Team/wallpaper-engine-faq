---
tags:
  - 崩溃
  - 关闭
  - Nvidia
  - battleye
---

# BattlEye 反作弊系统终止 Wallpaper Engine
If Wallpaper Engine closes silently when you start specific games then this is most likely caused by the BattlEye anti-cheat used by numerous multiplayer games. 已知采用 BattlEye 系统的游戏有：

* Fortnite
* Playerunknown's Battleground (PUBG)
* Rainbow Six Siege
* Escape from Tarkov
* *等等...*

BattlEye 会在某些系统上错误地关闭 Wallpaper Engine（和其他应用程序），这并非 Wallpaper Engine 中的错误或崩溃。 即使 Wallpaper Engine 不与系统上的游戏或软件交互，BattleEye 也会主动终止 Wallpaper Engine。

## Nvidia 低延迟模式
受此问题影响的大多数用户均在 Nvidia 显卡中启用了*超低延迟模式*。 如果您有 Nvidia 显卡并遇到此问题，请打开 Nvidia 控制面板，然后禁用超低延迟模式以解决此问题。 选择*“管理 3D 设置”*->*“全局设置”*->*“低延迟模式”*，然后将此设置更改为*关闭*。 单击*应用*，然后重新启动计算机。 此后，BattlEye 就不会再错误地终止 Wallpaper Engine 了。

## 联系 BattlEye 支持部门
如果以上步骤无法解决依托 BattlEye 的多人游戏带来的问题，您需要直接与 BattlEye 联系：

* [BattlEye 支持部门](https://www.battleye.com/contact/)

在某些系统上，BattlEye 会无故终止 Wallpaper Engine，我们无法阻止这种情况，因为 BattlEye 是一种颇具侵入性的反作弊系统，可在不通知您的情况下，终止您计算机上的任何应用程序。 在这种情况下，BattlEye 需要调查您系统上的问题，因为该问题在其软件中属于错误行为。