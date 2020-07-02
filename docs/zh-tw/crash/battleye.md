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

BattlEye 會錯誤關閉 Wallpaper Engine (以及其他應用程式)，並非 Wallpaper Engine 出現錯誤或當機。 即使 Wallpaper Engine 並未與系統上的遊戲或軟體互動，BattleEye 也會主動終止 Wallpaper Engine。

## Nvidia 低延遲模式
受此問題影響的大部分使用者均在 Nvidia 顯示卡驅動程式中啟用了*超低延遲模式*。 如果您的 Nvidia 顯示卡出現此問題，請開啟 Nvidia 控制面板，停用超低延遲模式，應可解決此問題。 選取 *「管理 3D 設定」* -> *「廣域設定」* -> *「低延遲模式」*，並將此設定變更為*關閉*。 點選*套用*並重新啟動電腦。 之後，BattlEye 就不會錯誤終止 Wallpaper Engine。

## 聯絡 BattlEye 支援部門
如果上述步驟皆無法解決搭載 BattlEye 的多人遊戲，您必須直接聯絡 BattlEye：

* [BattlEye 支援](https://www.battleye.com/contact/)

在某些系統上，BattlEye 會無故終止 Wallpaper Engine，由於其為極具侵入性的反作弊系統，得以在不發出通知的情況下終止電腦任何應用程式，我們無法防止。 在這類情況下，BattlEye 開發人員將需要調查您的系統問題，以修正此錯誤行為。