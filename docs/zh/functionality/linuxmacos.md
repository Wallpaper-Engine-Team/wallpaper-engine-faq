# Linux 或 Mac OS 平台上的 Wallpaper Engine

Wallpaper Engine 目前适用于 Windows 和 Android，近期没有支持其他平台的计划。

我们非常理解用户可能希望我们支持其个人偏好的其他操作系统，但让 Wallpaper Engine 适用于所有可能的平台确实不是一项简单的任务。 Wallpaper Engine 的核心是个完全自定义编写的软件解决方案，将其完全移植到其他平台需要进行大量工作。

有些用户可能会好奇，为何某些游戏和应用程序就能被其开发商看似很轻松地移植到 Mac 和 Linux：答案是这些游戏和应用程序基于广泛使用的视频游戏引擎（例如 Unity 或 Unreal Engine），各家开发商无需再做任何重大工作，即可添加对更多平台的支持。 但这些情况对于 Wallpaper Engine 这样的自定义应用程序均不适用 — 因为该应用程序与操作系统紧密交互，所以确实需要针对各个特定的操作系统对其量身定制，才能使其正常工作。 就 Linux 而言，除此之外，我们还必须使该应用程序适用于各种热门显示管理器，而这些显示管理器在各发行版之间存在很大差异。

目前的情况很简单，添加对 Linux 或 Mac OS 的支持对我们来说在经济上尚不可行。 如果查看 [Steam 硬件调查](https://store.steampowered.com/hwsurvey)，您会发现只有不到 1% 的 Steam 用户使用 Linux。 而就这些用户还要进一步细分到 Linux 的各个发行版（主要是 Ubuntu，而其用户数量仅占 Steam 用户总数的 0.25%）。

如上所述，将 Wallpaper Engine 移植到其他操作系统，不但需要花费大量时间，还会显著增加持续维护工作的成本，而可能从我们在这方面花费的大量时间中受益的用户群体相对来说非常小。 我们应该将时间和精力集中在使大多数人受益的更新和平台上，例如使用 Windows 的 Steam 用户（占总用户数的 96%）。

但我们一直在密切关注 Steam 的官方统计数据，如果 Steam 的状况发生变化，我们肯定会开始考虑如何在未来可行的情况下支持更多平台。

## 我们为何在支持 Linux 或 Mac OS 之前先创建免费 Android 应用程序

我们现有的用户中有许多人使用 Android 设备，其数量远远超过使用 Linux 或 Mac OS 设备的用户。 因此，就添加对更多平台的支持而言，支持 Android 是唯一合理的下一步。 By creating a free Android app as a new feature, we think we created a large improvement for the a vast number of our users.

Part of the work that went into the Android port can also be reused for Linux and OSX at a later point in time, slightly reducing the big hurdles we face supporting those operating systems. While creating the Android companion app was already a huge task for us, it was still significantly more achievable than a Linux or OSX port, where the full browsing and editing experience needs to be supported as well.

## What about support for iPhones and iPads?

Apple's mobile operating system iOS currently does not support real dynamic live wallpapers like Android does. The possibilities for live wallpapers on iOS are very limiting since iOS does not allow for true live wallpapers. There is some limited support for very basic short animated wallpapers in the form of *Live Photos* but the format is very restrictive and the vast majority of Wallpaper Engine wallpapers aren't really compatible with it in a way that we deem acceptable.