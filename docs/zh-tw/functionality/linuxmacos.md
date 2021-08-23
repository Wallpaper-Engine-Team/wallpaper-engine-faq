# Wallpaper Engine on Linux or Mac OS

Wallpaper Engine is currently only available on Windows and Android and there are no immediate plans to support other platforms at this time.

我們當然知道使用者希望本應用程式支援更多作業系統，不過開發工作並不簡單。 Wallpaper Engine 基本上是完全自訂編寫的軟體解決方案，要將此程式完整轉移到其他平台，實在是莫大工程。

有些使用者可能想知道，為何某些開發商看似能輕鬆將其遊戲和應用程式轉移至 Mac 與 Linux 上，答案是，這些作品建立在廣泛使用的遊戲引擎上，例如 Unity 或 Unreal Engine，個別開發商無須再投入重大資源，即可支援更多平台。 不過，這些情況對於 Wallpaper Engine 這類終端使用者應用程式並不適用，因為本程式與作業系統互動密切，確實需要針對各作業系統量身訂做，才能使其正常運作。 如果是 Linux 系統，另還需要使此程式適用於各種熱門顯示管理器，但這些顯示管理器彼此發佈版本差異顯著，甚至同一管理器的各版本差異也很顯著。

儘管理論上轉移作業可行，但事實就是目前對 Linux 或 Mac OS 的支援以經濟方面來看並不可行。 如果您檢視 [Steam 硬體調查](https://store.steampowered.com/hwsurvey)，會發現只有不到 1% 的 Steam 使用者使用 Linux。 而且這些使用者的 Linux 還要進一步區分發佈版本，主要為 Ubuntu，其人數僅佔總數的 0.25%。

如上所述，要將 Wallpaper Engine 轉移至其他作業系統必須大費周章，也會使持續進行的維護作業成本大量增加，但可能受益的使用者群體相對少數。 我們寧願將時間與精力集中在 Windows 系統，為超過 96% 的使用者改善效能。

不過，我們一直在密切注意 Steam 的官方統計資料，如果 Steam 現狀產生變化，我們當然會開始考慮如何在可行的情況下支援更多平台。

## How was support for Android devices made possible?

We always look at ways we can create the biggest benefit for a large group of our users. Taking into account the spread of Android devices across different regions of the world and comparing it to our user base, we estimate that at least 70% of our users own an Android device. This is a huge contrast to Linux or Mac OS, as these platforms combined just make up a tiny fraction compared to Android's global market share.

One useful thing about Android compared to Linux, for example, is that the live wallpaper feature is more or less standardized across all devices, which makes development much easier. We still hit quite a few significant hurdles when porting the app to Android, but after months of work were able to reach a stable state that would work well across various device families.

Again, what we considered important here is the large number of our existing users would benefit from this port, as we spent months on creating the Android version and continue to provide maintenance for it for years to come, which is a significant time investment to make.

## What about support for iPhones and iPads?

Unfortunately, Apple's mobile operating system iOS currently does not support real dynamic live wallpapers like Android does. The possibilities for live wallpapers on iOS are very limiting since iOS does not allow for true live wallpapers. There is some limited support for very basic short animated wallpapers in the form of *Live Photos* but the format is very restrictive and the vast majority of Wallpaper Engine wallpapers aren't really compatible with it in a way that we deem acceptable.