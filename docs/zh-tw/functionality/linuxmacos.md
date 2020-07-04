# Linux、Mac 或 Android 上的 Wallpaper Engine

Wallpaper Engine 目前僅適用於 Windows，近期也沒有支援其他平台的計畫。

我們當然知道使用者希望本應用程式支援更多作業系統，不過開發工作並不簡單。 Wallpaper Engine 基本上是完全自訂編寫的軟體解決方案，要將此程式完整轉移到其他平台，實在是莫大工程。

有些使用者可能想知道，為何某些開發商看似能輕鬆將其遊戲和應用程式轉移至 Mac 與 Linux 上，答案是，這些作品建立在廣泛使用的遊戲引擎上，例如 Unity 或 Unreal Engine，個別開發商無須再投入重大資源，即可支援更多平台。 不過，這些情況對於 Wallpaper Engine 這類終端使用者應用程式並不適用，因為本程式與作業系統互動密切，確實需要針對各作業系統量身訂做，才能使其正常運作。 In the case of Linux, it goes even further and must be made to work with every popular display manager which differ significantly between distributions and partially even between releases of distributions.

While all of this would in theory be possible, the simple truth is that it's not economically viable to add support for Linux or Mac OS at this point. If you take a look at the [Steam hardware survey](https://store.steampowered.com/hwsurvey), you can see that less than 1% of Steam users use Linux. And again, this is split up even further into different distributions of Linux, mostly Ubuntu which comes in at a mere 0.25% of users.

As explained above, the time needed to port Wallpaper Engine to another operating system is immense and it will also increase the costs of on-going maintenance work significantly, while the possible user group benefiting of this is comparatively tiny. We would much rather focus our time and energy on improving the Windows version for over 96% of Steam users.

However, we are keeping a close eye on the official Steam statistics and if the situation on Steam changes we are definitely open to look into figuring out how we could support more platforms in the future if it becomes viable. 