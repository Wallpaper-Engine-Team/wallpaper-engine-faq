# Wallpaper Engine on Linux or Mac OS

Wallpaper Engine is currently only available on Windows and Android and there are no immediate plans to support other platforms at this time.

While we definitely understand that users want us to support more operating systems, it is really not a simple task. The core of Wallpaper Engine is a completely custom written software solution and the amount of work involved to fully port it to other platforms is enormous.

Some users might wonder how some games and applications have been seemingly easily ported to Mac and Linux by their developers: The answer to that is that these titles are based on widely used video game engines like Unity or Unreal Engine which do not require the individual developers to do anything significant to add support for more platforms. However, none of this applies when it comes to an end-user application like Wallpaper Engine - since it's an application which interacts closely with the operating system, it really needs to be tailored to each specific operating system to make it work properly. In the case of Linux, it goes even further and must be made to work with every popular display manager which differ significantly between distributions and partially even between releases of distributions.

While all of this would in theory be possible, the simple truth is that it's not economically viable to add support for Linux or Mac OS at this point. If you take a look at the [Steam hardware survey](https://store.steampowered.com/hwsurvey), you can see that less than 1% of Steam users use Linux. And again, this is split up even further into different distributions of Linux, mostly Ubuntu which comes in at a mere 0.25% of users.

As explained above, the time needed to port Wallpaper Engine to another operating system is immense and it will also increase the costs of on-going maintenance work significantly, while the possible user group benefiting of this is comparatively tiny. We would much rather focus our time and energy on improving the Windows version for over 96% of Steam users.

However, we are keeping a close eye on the official Steam statistics and if the situation on Steam changes we are definitely open to look into figuring out how we could support more platforms in the future if it becomes viable.

## How was support for Android devices made possible?

We always look at ways we can create the biggest benefit for a large group of our users. Taking into account the spread of Android devices across different regions of the world and comparing it to our user base, we estimate that at least 70% of our users own an Android device. This is a huge contrast to Linux or Mac OS, as these platforms combined just make up a tiny fraction compared to Android's global market share.

One useful thing about Android compared to Linux, for example, is that the live wallpaper feature is more or less standardized across all devices, which makes development much easier. We still hit quite a few significant hurdles when porting the app to Android, but after months of work were able to reach a stable state that would work well across various device families.

Again, what we considered important here is the large number of our existing users would benefit from this port, as we spent months on creating the Android version and continue to provide maintenance for it for years to come, which is a significant time investment to make.

## What about support for iPhones and iPads?

Unfortunately, Apple's mobile operating system iOS currently does not support real dynamic live wallpapers like Android does. The possibilities for live wallpapers on iOS are very limiting since iOS does not allow for true live wallpapers. There is some limited support for very basic short animated wallpapers in the form of *Live Photos* but the format is very restrictive and the vast majority of Wallpaper Engine wallpapers aren't really compatible with it in a way that we deem acceptable.