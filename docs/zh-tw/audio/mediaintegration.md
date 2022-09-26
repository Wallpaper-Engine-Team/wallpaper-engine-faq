# 專輯封面和媒體資料功能

Wallpaper Engine 供桌布建立者得以為桌布增加特別元素，創作時將能善用桌布的專輯封面、歌曲名稱、專輯名稱等。 本指南將解釋如何解決與此功能有關的常見問題。

::: warning
請注意
本文將說明的是有關專輯封面和歌曲資訊的特定桌布功能。 若您使用音訊可視化工具時出現問題，或您想將音訊可視化工具限制至您的媒體播放器，請參見以下文章：

* [將音訊可視化工具限制至音樂播放器](/audio/limittomusicplayer)
* [音訊可視化工具無法運作/未偵測到音訊](/audio/audiodetection)
:::

<video width="100%" controls autoplay loop>
  <source src="/videos/media_controls.mp4" type="video/mp4">
  您的瀏覽器不支援視訊標籤。
</video>

*Wallpaper Engine 從左上角顯示的 Windows 媒體覆蓋取得專輯封面和歌曲資料。*

## 啟用專輯封面和媒體資料功能

In order for this feature to work, you need to make sure that these conditions are met:

1. You are using Windows 10 or newer.
2. You have enabled the **Media integration support** option in the **General** tab of the Wallpaper Engine settings.
3. Your media player provides media data to the Windows media overlay (depicted above). More details below.
4. Your audio files contain album covers and media data (song title, artist name, album name, etc.)

### Configuring your Media Player

Most modern media players support the Windows media overlay that is needed for this feature to function. Sometimes you need to enable it first. Open the settings of your media player and look for the appropriate option (sometimes also hidden away in the advanced settings). The option usually mentions a *"media overlay"* or *"media hotkeys"*. If you are unsure, do a web search including the name of your media player and words like *"media overlay"*.

## Excluding Apps like Web Browsers from Album Cover Feature

If you notice that your web browser or another app on your system starts interfering with the album cover feature, you can add it to the media blocklist. Open the **General** tab of the Wallpaper Engine settings, navigate to the **Windows** section and click on the **Edit** button next to the **Media blocklist** option. Make sure the app in question is interfering with the album cover feature, it should now appear as a suggestion in the blocklist. Click on the **Block** button next to the app, it should now stop interfering with the album cover feature.