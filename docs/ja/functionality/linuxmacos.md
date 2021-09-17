# LinuxまたはMac OSとWallpaper Engine

Wallpaper EngineはWindowsならびにAndroid端末でサポートされており、他OSでのサポートは現在のところ予定されておりません。

他OSでの対応を望むユーザーからの要望は承知しておりますが、すべてのOSでWallpaper Engineを利用可能な状態にするには膨大な作業が伴うということをご理解いただければと思います。 Wallpaper Engineのコアは完全にカスタムに書かれたソフトウェアソリューションで、これを他のプラットフォームに完全移植する際に生じる労力は莫大です。

デベロッパーが見たところ簡単にMacやLinuxに移植しているゲームやアプリケーションもあるじゃないか、と思われる方もあるでしょう。それに対する答えは、それらのタイトルはUnityやUnreal Engineなどの広く使われているビデオゲームエンジンをベースにしており、個別のデベロッパーが他のプラットフォームをサポートするために必要な作業はあまりないということです。 しかしながら、Wallpaper Engineなどのカスタムアプリケーションはこの限りではありません。OSとの詳細に及ぶやり取りが発生するアプリケーションであるため、正しく作動させるために各OSに合わせた各調整が必要になるのが理由です。 Linuxの場合はさらに複雑で、ディストリビューション間で大きく異なる主要なディスプレイマネージャーすべてに対応する必要があります。

現時点においてLinuxまたはMacOSのサポート追加は、予算的な理由で実行が難しいという状況です。 [Steam hardware survey](https://store.steampowered.com/hwsurvey)を見れば、Linuxを使うSteamユーザーは1%未満です。 そしてここでもまた、これはLinuxのさまざまなディストリビューションに細分化されます。主にUbuntuですが、これはユーザーの0.25%にすぎません。

As explained above, the time needed to port Wallpaper Engine to another operating system is immense and it will also increase the costs of on-going maintenance work significantly, while the possible user group benefiting of the large amount of time we would spend on this is comparatively very tiny. We should focus our time and energy on updates and platforms that benefit the most people, like the 96% of Steam users who use Windows.

Yet we are always keeping a close eye on the official Steam statistics and if the situation on Steam changes we are definitely open to look into figuring out how we could support more platforms in the future if it becomes viable.

## Why we created a free Android app before supporting Linux or Mac OS

A lot of our existing users use Android devices, far more than who use Linux or Mac OS devices. This is why supporting Android was the only rational next step when it comes to adding support for more platforms. By creating a free Android app as a new feature, we think we created a large improvement for the a vast number of our users.

Part of the work that went into the Android port can also be reused for Linux and OSX at a later point in time, slightly reducing the big hurdles we face supporting those operating systems. While creating the Android companion app was already a huge task for us, it was still significantly more achievable than a Linux or OSX port, where the full browsing and editing experience needs to be supported as well.

## What about support for iPhones and iPads?

Apple's mobile operating system iOS currently does not support real dynamic live wallpapers like Android does. The possibilities for live wallpapers on iOS are very limiting since iOS does not allow for true live wallpapers. There is some limited support for very basic short animated wallpapers in the form of *Live Photos* but the format is very restrictive and the vast majority of Wallpaper Engine wallpapers aren't really compatible with it in a way that we deem acceptable.