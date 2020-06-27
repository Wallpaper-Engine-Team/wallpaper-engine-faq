# Linux、Mac 或 Android 平台的 Wallpaper Engine

Wallpaper Engine 目前仅适用于 Windows，近期也没有支持其他平台的计划。

尽管知道用户希望我们支持更多的操作系统，但这绝非易事。 Wallpaper Engine 的核心是个完全自定义编写的软件解决方案，将其完全移植到其他平台需要进行大量工作。

有些用户可能会好奇，为何某些游戏和应用程序就能被其开发商看似很轻松地移植到 Mac 和 Linux：答案是这些游戏和应用程序基于广泛应用的视频游戏引擎（例如 Unity 或 Unreal Engine），各家开发商无需再做任何重要的工作，即可添加对更多平台的支持。 However, none of this applies when it comes to an end-user application like Wallpaper Engine - since it's an application which interacts closely with the operating system, it really needs to be tailored to each specific operating system to make it work properly. In the case of Linux, it goes even further and must be made to work with every popular display manager which differ significantly between distributions and partially even between releases of distributions.

While all of this would in theory be possible, the simple truth is that it's not economically viable to add support for Linux or Mac OS at this point. If you take a look at the [Steam hardware survey](https://store.steampowered.com/hwsurvey), you can see that less than 1% of Steam users use Linux. And again, this is split up even further into different distributions of Linux, mostly Ubuntu which comes in at a mere 0.25% of users.

As explained above, the time needed to port Wallpaper Engine to another operating system is immense and it will also increase the costs of on-going maintenance work significantly, while the possible user group benefiting of this is comparatively tiny. We would much rather focus our time and energy on improving the Windows version for over 96% of Steam users.

However, we are keeping a close eye on the official Steam statistics and if the situation on Steam changes we are definitely open to look into figuring out how we could support more platforms in the future if it becomes viable. 