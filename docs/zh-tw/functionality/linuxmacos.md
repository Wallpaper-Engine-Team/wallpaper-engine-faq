# Linux 或 Mac OS 上的 Wallpaper Engine

Wallpaper Engine 目前僅適用於 Windows 和 Android，近期也沒有支援其他平台的計畫。

我們確實知道使用者可能希望本應用程式支援個人喜好的作業系統，但要使 Wallpaper Engine 支援各項平台，實際上並非一蹴可幾。 Wallpaper Engine 基本上是完全自訂編寫的軟體解決方案，要將此程式完整轉移到其他平台，實在是偌大工程。

有些使用者可能想知道，為何某些開發商看似能輕鬆將其遊戲和應用程式轉移至 Mac 與 Linux 上，答案是，這些作品建立在廣泛使用的遊戲引擎上，例如 Unity 或 Unreal Engine，個別開發商無須再投入重大資源，即可支援更多平台。 不過，這些情況並不適用於 Wallpaper Engine 這類自訂的終端使用者應用程式，因為本程式與作業系統互動密切，確實需要針對各作業系統量身訂做，才能使其正常運作。 如果是 Linux 系統，另還需要使此程式適用於各種熱門顯示管理器，但這些顯示管理器彼此發佈版本差異顯著。

The situation is simply that it's not economically viable for us to add support for Linux or Mac OS at this time. 如果您檢視 [Steam 硬體調查](https://store.steampowered.com/hwsurvey)，會發現只有不到 1% 的 Steam 使用者使用 Linux。 而且這些使用者的 Linux 還要進一步區分發佈版本，主要為 Ubuntu，其人數僅佔總數的 0.25%。

As explained above, the time needed to port Wallpaper Engine to another operating system is immense and it will also increase the costs of on-going maintenance work significantly, while the possible user group benefiting of the large amount of time we would spend on this is comparatively very tiny. We should focus our time and energy on updates and platforms that benefit the most people, like the 96% of Steam users who use Windows.

Yet we are always keeping a close eye on the official Steam statistics and if the situation on Steam changes we are definitely open to look into figuring out how we could support more platforms in the future if it becomes viable.

## Why we created a free Android app before supporting Linux or Mac OS

A lot of our existing users use Android devices, far more than who use Linux or Mac OS devices. This is why supporting Android was the only rational next step when it comes to adding support for more platforms. By creating a free Android app as a new feature, we think we created a large improvement for the a vast number of our users.

Part of the work that went into the Android port can also be reused for Linux and OSX at a later point in time, slightly reducing the big hurdles we face supporting those operating systems. While creating the Android companion app was already a huge task for us, it was still significantly more achievable than a Linux or OSX port, where the full browsing and editing experience needs to be supported as well.

## What about support for iPhones and iPads?

Apple's mobile operating system iOS currently does not support real dynamic live wallpapers like Android does. The possibilities for live wallpapers on iOS are very limiting since iOS does not allow for true live wallpapers. There is some limited support for very basic short animated wallpapers in the form of *Live Photos* but the format is very restrictive and the vast majority of Wallpaper Engine wallpapers aren't really compatible with it in a way that we deem acceptable.