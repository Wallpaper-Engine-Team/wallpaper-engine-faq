# Linux、Mac 或 Android 上的 Wallpaper Engine

Wallpaper Engine 目前僅適用於 Windows，近期也沒有支援其他平台的計畫。

我們當然知道使用者希望本應用程式支援更多作業系統，不過開發工作並不簡單。 Wallpaper Engine 基本上是完全自訂編寫的軟體解決方案，要將此程式完整移植到其他平台實在工程浩大。

Some users might wonder how some games and applications have been seemingly easily ported to Mac and Linux by their developers: The answer to that is that these titles are based on widely used video game engines like Unity or Unreal Engine which do not require the individual developers to do anything significant to add support for more platforms. However, none of this applies when it comes to an end-user application like Wallpaper Engine - since it's an application which interacts closely with the operating system, it really needs to be tailored to each specific operating system to make it work properly. In the case of Linux, it goes even further and must be made to work with every popular display manager which differ significantly between distributions and partially even between releases of distributions.

While all of this would in theory be possible, the simple truth is that it's not economically viable to add support for Linux or Mac OS at this point. If you take a look at the [Steam hardware survey](https://store.steampowered.com/hwsurvey), you can see that less than 1% of Steam users use Linux. And again, this is split up even further into different distributions of Linux, mostly Ubuntu which comes in at a mere 0.25% of users.

As explained above, the time needed to port Wallpaper Engine to another operating system is immense and it will also increase the costs of on-going maintenance work significantly, while the possible user group benefiting of this is comparatively tiny. We would much rather focus our time and energy on improving the Windows version for over 96% of Steam users.

However, we are keeping a close eye on the official Steam statistics and if the situation on Steam changes we are definitely open to look into figuring out how we could support more platforms in the future if it becomes viable. 