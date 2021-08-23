# Wallpaper Engine on Linux or Mac OS

Wallpaper Engine is currently only available on Windows and Android and there are no immediate plans to support other platforms at this time.

他のOSをサポートして欲しいというみなさんのご要望は理解していますが、それは簡単なことではありません。 Wallpaper Engineのコアは完全にカスタムに書かれたソフトウェアソリューションで、これを他のプラットフォームに完全移植する際に生じる労力は莫大です。

デベロッパーが見たところ簡単にMacやLinuxに移植しているゲームやアプリケーションもあるじゃないか、と思われる方もあるでしょう。それに対する答えは、それらのタイトルはUnityやUnreal Engineなどの広く使われているビデオゲームエンジンをベースにしており、個別のデベロッパーが他のプラットフォームをサポートするために必要な作業はあまりないということです。 しかし、Wallpaper Engineなどのエンドユーザーアプリケーションの場合、それは全く当てはまりません。OSと密接に関わりを持つアプリケーションであるため、正しく動作するためには各OSに合わせる必要があるのです。 Linuxの場合はさらに課題が大きくなります。メジャーなディスプレイマネージャーそれぞれで動作しなければならず、それはディストリビューションによって、場合によってはディストリビューションのリリースによって大きな違いがあるからです。

これらは理論的には可能なのですが、単純に、現時点でLinuxやMac OSのサポートを追加しても採算が取れないという事実があります。 [Steam hardware survey](https://store.steampowered.com/hwsurvey)を見れば、Linuxを使うSteamユーザーは1%未満です。 そしてここでもまた、これはLinuxのさまざまなディストリビューションに細分化されます。主にUbuntuですが、これはユーザーの0.25%にすぎません。

上で説明したように、Wallpaper Engineを他のOSに移植するのに必要な時間は莫大で、しかも常に継続するメンテナンス作業のコストは大きく膨れ上がり、それに対して恩恵を受ける潜在的ユーザーグループは比較的小さくなります。 私たちはそれよりもむしろ、Steamユーザーの96%以上を占める人々のために、Windowsバージョンの向上に時間とエネルギーをさきたいと考えています。

しかし、私たちはSteamの公式データに常に注意し、状況の変化があれば、採算が取れる見込みの上でより多くのプラットフォームをサポートする方法を検討していきたいと思います。

## How was support for Android devices made possible?

We always look at ways we can create the biggest benefit for a large group of our users. Taking into account the spread of Android devices across different regions of the world and comparing it to our user base, we estimate that at least 70% of our users own an Android device. This is a huge contrast to Linux or Mac OS, as these platforms combined just make up a tiny fraction compared to Android's global market share.

One useful thing about Android compared to Linux, for example, is that the live wallpaper feature is more or less standardized across all devices, which makes development much easier. We still hit quite a few significant hurdles when porting the app to Android, but after months of work were able to reach a stable state that would work well across various device families.

Again, what we considered important here is the large number of our existing users would benefit from this port, as we spent months on creating the Android version and continue to provide maintenance for it for years to come, which is a significant time investment to make.

## What about support for iPhones and iPads?

Unfortunately, Apple's mobile operating system iOS currently does not support real dynamic live wallpapers like Android does. The possibilities for live wallpapers on iOS are very limiting since iOS does not allow for true live wallpapers. There is some limited support for very basic short animated wallpapers in the form of *Live Photos* but the format is very restrictive and the vast majority of Wallpaper Engine wallpapers aren't really compatible with it in a way that we deem acceptable.