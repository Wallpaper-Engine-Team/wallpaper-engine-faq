# Linux 或 Mac OS 上的 Wallpaper Engine

Wallpaper Engine 目前僅適用於 Windows 和 Android，近期也沒有支援其他平台的計畫。

我們確實知道使用者可能希望本應用程式支援個人喜好的作業系統，但要使 Wallpaper Engine 支援各項平台，實際上並非一蹴可幾。 Wallpaper Engine 基本上是完全自訂編寫的軟體解決方案，要將此程式完整轉移到其他平台，實在是偌大工程。

有些使用者可能想知道，為何某些開發商看似能輕鬆將其遊戲和應用程式轉移至 Mac 與 Linux 上，答案是，這些作品建立在廣泛使用的遊戲引擎上，例如 Unity 或 Unreal Engine，個別開發商無須再投入重大資源，即可支援更多平台。 不過，這些情況並不適用於 Wallpaper Engine 這類自訂的終端使用者應用程式，因為本程式與作業系統互動密切，確實需要針對各作業系統量身訂做，才能使其正常運作。 如果是 Linux 系統，另還需要使此程式適用於各種熱門顯示管理器，但這些顯示管理器彼此發佈版本差異顯著。

有鑑於此，我們無法在合乎經濟效益的條件增加對 Linus 或 Mac OS 的支援。 如果您檢視 [Steam 硬體調查](https://store.steampowered.com/hwsurvey)，會發現只有不到 1% 的 Steam 使用者使用 Linux。 而且這些使用者的 Linux 還要進一步區分發佈版本，主要為 Ubuntu，其人數僅佔總數的 0.25%。

如上所述，要將 Wallpaper Engine 轉移至其他作業系統必須大費周章，也會使持續進行的維護作業成本大量增加，與我們預估投入的時間相比，可能受益的使用者群體相對少數。 我們反而應該將時間與精力投注在更新內容與平台，才可以讓大部分使用者受惠，例如那些使用 Windows 的 96% Steam 使用者。

不過，我們一直在密切注意 Steam 的官方統計資料，如果 Steam 現狀產生變化，我們當然會開始考慮如何在可行的情況下支援更多平台。

## Why we created a free Android app before supporting Linux or Mac OS

A lot of our existing users use Android devices, far more than who use Linux or Mac OS devices. This is why supporting Android was the only rational next step when it comes to adding support for more platforms. By creating a free Android app as a new feature, we think we created a large improvement for the a vast number of our users.

Part of the work that went into the Android port can also be reused for Linux and OSX at a later point in time, slightly reducing the big hurdles we face supporting those operating systems. While creating the Android companion app was already a huge task for us, it was still significantly more achievable than a Linux or OSX port, where the full browsing and editing experience needs to be supported as well.

## What about support for iPhones and iPads?

Apple's mobile operating system iOS currently does not support real dynamic live wallpapers like Android does. The possibilities for live wallpapers on iOS are very limiting since iOS does not allow for true live wallpapers. There is some limited support for very basic short animated wallpapers in the form of *Live Photos* but the format is very restrictive and the vast majority of Wallpaper Engine wallpapers aren't really compatible with it in a way that we deem acceptable.