# Обложка альбома и функция медиа

Wallpaper Engine дает возможность добавлять различные элементы на обои, которые используются как обложка альбома, название песни, название альбома и пр. В этом руководстве вы найдете решения типичных проблем, связанных с данной функцией.

::: warning
Обратите внимание
Данная статья рассказывает о конкретной функции, которая нужна при создании обложек альбомов и прочего, связанного с песнями. Если у вас есть проблемы с визуализаторами аудио или вы хотите ограничить визуализацию звука, обратите внимание на соответствующие статьи:

* [Ограничить визуализацию звука только проигрывателями музыки](/audio/limittomusicplayer)
* [Не работают визуализаторы аудио / звук не обнаружен](/audio/audiodetection)
:::

<video width="100%" controls autoplay loop>
  <source src="/videos/media_controls.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

*Wallpaper Engine takes the album cover and song data from the Windows media overlay, shown in the upper left corner.*

## Enabling Album Cover & Media Data Feature

In order for this feature to work, you need to make sure that these conditions are met:

1. You are using Windows 10 or newer.
2. You have enabled the **Media integration support** option in the **General** tab of the Wallpaper Engine settings.
3. Your media player provides media data to the Windows media overlay (depicted above). More details below.
4. Your audio files contain album covers and media data (song title, artist name, album name, etc.)

### Configuring your Media Player

Most modern media players support the Windows media overlay that is needed for this feature to function. Sometimes you need to enable it first. Open the settings of your media player and look for the appropriate option (sometimes also hidden away in the advanced settings). The option usually mentions a *"media overlay"* or *"media hotkeys"*. If you are unsure, do a web search including the name of your media player and words like *"media overlay"*.

## Excluding Apps like Web Browsers from Album Cover Feature

If you notice that your web browser or another app on your system starts interfering with the album cover feature, you can add it to the media blocklist. Open the **General** tab of the Wallpaper Engine settings, navigate to the **Windows** section and click on the **Edit** button next to the **Media blocklist** option. Make sure the app in question is interfering with the album cover feature, it should now appear as a suggestion in the blocklist. Click on the **Block** button next to the app, it should now stop interfering with the album cover feature.