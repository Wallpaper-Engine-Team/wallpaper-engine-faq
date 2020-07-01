---
tags:
  - クラッシュ
  - 閉じる
  - nvidia
  - battleye
---

# BattlEye アンチチートが Wallpaper Engine を終了させる
Wallpaper Engine が、特定のゲームを起動したときに音もなく終了する場合は、多くのマルチプレイヤーゲームで使用されている BattlEye アンチチートが原因となっている可能性が高いです。 BattlEye を使用している既知のゲーム：

* Fortnite
* Playerunknown's Battleground (PUBG)
* Rainbow Six Siege
* Escape from Tarkov
* *その他…*

BattlEye はいくつかのシステムにおいて誤って Wallpaper Engine（およびその他のアプリケーション）を終了させます。これはバグでも Wallpaper Engine のクラッシュでもありません。 Wallpaper Engine は、システム上のゲームにもソフトウェアにも影響しないにもかかわらず、BattleEye に常に終了させられます。

## Nvidia Low-Latency Mode
これに影響されるユーザーのほとんどは、Nvidia グラフィックスドライバーで *Ultra-Low Latency Mode* を有効にしています。 Nvidia グラフィックスカードをお持ちでこの問題に悩んでいる場合は、問題解消のために Nvidia コントロールパネルを開いて ultra-low latency mode を無効にしてください。 Select *"Manage 3D settings"* -> *"Global Settings"* -> *"Low Latency Mode"* and change this setting to *Off*. Click *Apply* and restart your computer. Afterwards, BattlEye will not terminate Wallpaper Engine by mistake anymore.

## Contacting BattlEye Support
If the steps above do not fix your issues with a BattlEye-powered multiplayer game, you will need to reach out to BattlEye directly:

* [BattlEye Support](https://www.battleye.com/contact/)

On some systems, BattlEye will terminate Wallpaper Engine for no apparent reason and this is not something we can prevent as BattlEye is a rather intrusive anti-cheat which is able to terminate any application on your computer without notifying you. In these cases, the BattlEye developers will need to investigate the issue on your system as its a faulty behavior in their software.