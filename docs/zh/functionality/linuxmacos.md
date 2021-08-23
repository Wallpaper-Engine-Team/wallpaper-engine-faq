# Wallpaper Engine on Linux or Mac OS

Wallpaper Engine is currently only available on Windows and Android and there are no immediate plans to support other platforms at this time.

尽管知道用户希望我们支持更多的操作系统，但这绝非易事。 Wallpaper Engine 的核心是个完全自定义编写的软件解决方案，将其完全移植到其他平台需要进行大量工作。

有些用户可能会好奇，为何某些游戏和应用程序就能被其开发商看似很轻松地移植到 Mac 和 Linux：答案是这些游戏和应用程序基于广泛使用的视频游戏引擎（例如 Unity 或 Unreal Engine），各家开发商无需再做任何重大工作，即可添加对更多平台的支持。 但这些情况对于 Wallpaper Engine 这样的最终用户应用程序均不适用 — 因为该应用程序与操作系统紧密交互，所以确实需要针对各个特定的操作系统对其量身定制，才能使其正常工作。 就 Linux 而言，除此之外，您还必须使该应用程序适用于各种热门显示管理器，而这些显示管理器在各发行版之间存在很大差异，甚至某种程度上，在各发行版的各个版本之间也存在很大差异。

尽管从理论上讲所有这些都是可行的，但事实很简单，目前添加对 Linux 或 Mac 操作系统的支持在经济上并不可行。 如果查看 [Steam 硬件调查](https://store.steampowered.com/hwsurvey)，您会发现只有不到 1% 的 Steam 用户使用 Linux。 而就这些用户还要进一步细分到 Linux 的各个发行版（主要是 Ubuntu，而其用户数量仅占 Steam 用户总数的 0.25%）。

如上所述，将 Wallpaper Engine 移植到其他操作系统，不但需要花费大量时间，还会显著增加持续维护工作的成本，而可能从中受益的用户群体相对较小。 我们宁愿将时间和精力集中在为超过 96% 的 Steam 用户改进 Windows 版本上。

但我们一直在密切关注 Steam 的官方统计数据，如果 Steam 的状况发生变化，我们肯定会开始考虑如何在未来可行的情况下支持更多平台。

## How was support for Android devices made possible?

We always look at ways we can create the biggest benefit for a large group of our users. Taking into account the spread of Android devices across different regions of the world and comparing it to our user base, we estimate that at least 70% of our users own an Android device. This is a huge contrast to Linux or Mac OS, as these platforms combined just make up a tiny fraction compared to Android's global market share.

One useful thing about Android compared to Linux, for example, is that the live wallpaper feature is more or less standardized across all devices, which makes development much easier. We still hit quite a few significant hurdles when porting the app to Android, but after months of work were able to reach a stable state that would work well across various device families.

Again, what we considered important here is the large number of our existing users would benefit from this port, as we spent months on creating the Android version and continue to provide maintenance for it for years to come, which is a significant time investment to make.

## What about support for iPhones and iPads?

Unfortunately, Apple's mobile operating system iOS currently does not support real dynamic live wallpapers like Android does. The possibilities for live wallpapers on iOS are very limiting since iOS does not allow for true live wallpapers. There is some limited support for very basic short animated wallpapers in the form of *Live Photos* but the format is very restrictive and the vast majority of Wallpaper Engine wallpapers aren't really compatible with it in a way that we deem acceptable.