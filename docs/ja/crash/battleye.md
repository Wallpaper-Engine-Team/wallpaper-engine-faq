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

## Nvidia 低遅延モード
これに影響されるユーザーのほとんどは、Nvidia グラフィックスドライバーで *Ultra-低遅延モード* を有効にしています。 Nvidia グラフィックスカードをお持ちでこの問題に悩んでいる場合は、問題解消のために Nvidia コントロールパネルを開いて ultra-低遅延モードを無効にしてください。 *"3D設定の管理"* -> *"グローバル設定"* -> *"低遅延モード"* を選択し、この設定を *オフ* に変更します。 *適用* をクリックしてコンピューターを再起動します。 そのあとは、BattlEye が誤って Wallpaper Engine を終了させることはありません。

## BattlEye サポートへの問い合わせ
上記の方法で BattlEye を使用しているマルチプレイヤーゲームの問題が解消しない場合は、BattlEye に直接連絡していただく必要があります。

* [BattlEye サポート](https://www.battleye.com/contact/)

いくつかのシステムにおいては、BattlEye が特に理由もなく Wallpaper Engine を終了させます。私たちがこれを防ぐことはできません。BattlEye はやや図々しいアンチチートで、あなたに通知せず、あなたのコンピューター上のどんなアプリでも終了させることができるからです。 これらのケースについては、BattlEye の開発者がお使いのシステムの問題を調査する必要があります。これは彼らのソフトウェアの誤った振る舞いだからです。