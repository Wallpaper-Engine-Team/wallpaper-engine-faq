# Linux、Mac 或 Android 平台的 Wallpaper Engine

Wallpaper Engine 目前仅适用于 Windows，近期也没有支持其他平台的计划。

尽管知道用户希望我们支持更多的操作系统，但这绝非易事。 Wallpaper Engine 的核心是个完全自定义编写的软件解决方案，将其完全移植到其他平台需要进行大量工作。

有些用户可能会好奇，为何某些游戏和应用程序就能被其开发商看似很轻松地移植到 Mac 和 Linux：答案是这些游戏和应用程序基于广泛使用的视频游戏引擎（例如 Unity 或 Unreal Engine），各家开发商无需再做任何重大工作，即可添加对更多平台的支持。 但这些情况对于 Wallpaper Engine 这样的最终用户应用程序均不适用 — 因为该应用程序与操作系统紧密交互，所以确实需要针对各个特定的操作系统对其量身定制，才能使其正常工作。 就 Linux 而言，除此之外，您还必须使该应用程序适用于各种热门显示管理器，而这些显示管理器在各发行版之间存在很大差异，甚至某种程度上，在各发行版的各个版本之间也存在很大差异。

尽管从理论上讲所有这些都是可行的，但事实很简单，目前添加对 Linux 或 Mac 操作系统的支持在经济上并不可行。 如果查看 [Steam 硬件调查](https://store.steampowered.com/hwsurvey)，您会发现只有不到 1% 的 Steam 用户使用 Linux。 而就这些用户还要进一步细分到 Linux 的各个发行版，其中主要是 Ubuntu 发行版，而其用户数量仅占 Steam 用户的 0.25%。

As explained above, the time needed to port Wallpaper Engine to another operating system is immense and it will also increase the costs of on-going maintenance work significantly, while the possible user group benefiting of this is comparatively tiny. We would much rather focus our time and energy on improving the Windows version for over 96% of Steam users.

However, we are keeping a close eye on the official Steam statistics and if the situation on Steam changes we are definitely open to look into figuring out how we could support more platforms in the future if it becomes viable. 