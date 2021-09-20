# Linux 或 Mac OS 平台上的 Wallpaper Engine

Wallpaper Engine 目前适用于 Windows 和 Android，近期没有支持其他平台的计划。

我们非常理解用户可能希望我们支持其个人偏好的其他操作系统，但让 Wallpaper Engine 适用于所有可能的平台确实不是一项简单的任务。 Wallpaper Engine 的核心是个完全自定义编写的软件解决方案，将其完全移植到其他平台需要进行大量工作。

有些用户可能会好奇，为何某些游戏和应用程序就能被其开发商看似很轻松地移植到 Mac 和 Linux：答案是这些游戏和应用程序基于广泛使用的视频游戏引擎（例如 Unity 或 Unreal Engine），各家开发商无需再做任何重大工作，即可添加对更多平台的支持。 但这些情况对于 Wallpaper Engine 这样的自定义应用程序均不适用 — 因为该应用程序与操作系统紧密交互，所以确实需要针对各个特定的操作系统对其量身定制，才能使其正常工作。 In the case of Linux, it goes even further and must be made to work with every popular display manager which differ significantly between distributions.

The situation is simply that it's not economically viable for us to add support for Linux or Mac OS at this time. 如果查看 [Steam 硬件调查](https://store.steampowered.com/hwsurvey)，您会发现只有不到 1% 的 Steam 用户使用 Linux。 而就这些用户还要进一步细分到 Linux 的各个发行版（主要是 Ubuntu，而其用户数量仅占 Steam 用户总数的 0.25%）。

As explained above, the time needed to port Wallpaper Engine to another operating system is immense and it will also increase the costs of on-going maintenance work significantly, while the possible user group benefiting of the large amount of time we would spend on this is comparatively very tiny. We should focus our time and energy on updates and platforms that benefit the most people, like the 96% of Steam users who use Windows.

Yet we are always keeping a close eye on the official Steam statistics and if the situation on Steam changes we are definitely open to look into figuring out how we could support more platforms in the future if it becomes viable.

## Why we created a free Android app before supporting Linux or Mac OS

A lot of our existing users use Android devices, far more than who use Linux or Mac OS devices. This is why supporting Android was the only rational next step when it comes to adding support for more platforms. By creating a free Android app as a new feature, we think we created a large improvement for the a vast number of our users.

Part of the work that went into the Android port can also be reused for Linux and OSX at a later point in time, slightly reducing the big hurdles we face supporting those operating systems. While creating the Android companion app was already a huge task for us, it was still significantly more achievable than a Linux or OSX port, where the full browsing and editing experience needs to be supported as well.

## What about support for iPhones and iPads?

Apple's mobile operating system iOS currently does not support real dynamic live wallpapers like Android does. The possibilities for live wallpapers on iOS are very limiting since iOS does not allow for true live wallpapers. There is some limited support for very basic short animated wallpapers in the form of *Live Photos* but the format is very restrictive and the vast majority of Wallpaper Engine wallpapers aren't really compatible with it in a way that we deem acceptable.