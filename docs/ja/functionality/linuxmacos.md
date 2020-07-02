# Linux、Mac、AndroidでのWallpaper Engine

Wallpaper Engineは、現時点ではWindowsでのみ使用できます。他のプラットフォームを近々サポートする予定はありません。

他のOSをサポートして欲しいというみなさんのご要望は理解していますが、それは簡単なことではありません。 Wallpaper Engineのコアは完全にカスタムに書かれたソフトウェアソリューションで、これを他のプラットフォームに完全移植する際に生じる労力は莫大です。

デベロッパーが見たところ簡単にMacやLinuxに移植しているゲームやアプリケーションもあるじゃないか、と思われる方もあるでしょう。それに対する答えは、それらのタイトルはUnityやUnreal Engineなどの広く使われているビデオゲームエンジンをベースにしており、個別のデベロッパーが他のプラットフォームをサポートするために必要な作業はあまりないということです。 しかし、Wallpaper Engineなどのエンドユーザーアプリケーションの場合、それは全く当てはまりません。OSと密接に関わりを持つアプリケーションであるため、正しく動作するためには各OSに合わせる必要があるのです。 Linuxの場合はさらに課題が大きくなります。メジャーなディスプレイマネージャーそれぞれで動作しなければならず、それはディストリビューションによって、場合によってはディストリビューションのリリースによって大きな違いがあるからです。

これらは理論的には可能なのですが、単純に、現時点でLinuxやMac OSのサポートを追加しても採算が取れないという事実があります。 [Steam hardware survey](https://store.steampowered.com/hwsurvey)を見れば、Linuxを使うSteamユーザーは1%未満です。 And again, this is split up even further into different distributions of Linux, mostly Ubuntu which comes in at a mere 0.25% of users.

As explained above, the time needed to port Wallpaper Engine to another operating system is immense and it will also increase the costs of on-going maintenance work significantly, while the possible user group benefiting of this is comparatively tiny. We would much rather focus our time and energy on improving the Windows version for over 96% of Steam users.

However, we are keeping a close eye on the official Steam statistics and if the situation on Steam changes we are definitely open to look into figuring out how we could support more platforms in the future if it becomes viable. 