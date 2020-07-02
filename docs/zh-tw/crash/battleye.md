---
tags:
  - 當機
  - 關閉
  - nvidia
  - battleye
---

# BattlEye 反作弊程式終止 Wallpaper Engine
如果您開啟特定遊戲後，Wallpaper Engine 默默關閉，很可能是由於多人遊戲常使用的 BattlEye 反作弊程式。 已知採用 BattlEye 的遊戲包括：

* 《要塞英雄》
* 《絕地求生》 (PUBG)
* 《虹彩六號：圍攻行動》
* Escape from Tarkov
* *還有更多…*

BattlEye 會不小心關閉 Wallpaper Engine (以及其他應用程式)，並非 Wallpaper Engine 出現錯誤或當機。 即使 Wallpaper Engine 並未與系統上的遊戲或軟體互動，BattleEye 也會主動終止 Wallpaper Engine。

## Nvidia 低延遲模式
受此問題影響的大部分使用者均在 Nvidia 顯示卡驅動程式中啟用了*超低延遲模式*。 如果您的 Nvidia 顯示卡出現此問題，請開啟 Nvidia 控制面板，停用超低延遲模式，應可解決此問題。 Select *"Manage 3D settings"* -> *"Global Settings"* -> *"Low Latency Mode"* and change this setting to *Off*. Click *Apply* and restart your computer. Afterwards, BattlEye will not terminate Wallpaper Engine by mistake anymore.

## 聯絡 BattlEye 支援部門
If the steps above do not fix your issues with a BattlEye-powered multiplayer game, you will need to reach out to BattlEye directly:

* [BattlEye 支援](https://www.battleye.com/contact/)

On some systems, BattlEye will terminate Wallpaper Engine for no apparent reason and this is not something we can prevent as BattlEye is a rather intrusive anti-cheat which is able to terminate any application on your computer without notifying you. In these cases, the BattlEye developers will need to investigate the issue on your system as its a faulty behavior in their software.