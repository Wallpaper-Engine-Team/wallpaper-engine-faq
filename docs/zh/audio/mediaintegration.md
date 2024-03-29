# 专辑封面和媒体数据功能

Wallpaper Engine 允许壁纸创建者向其壁纸添加特殊元素，这些元素将利用壁纸中的专辑封面、歌曲名称、专辑名称等。 本指南将解释如何解决有关此功能的常见问题。

::: warning
请注意
本文是关于专辑封面和歌曲信息的特定壁纸功能。 如果您在使用音频可视化工具时遇到问题，或者您想将音频可视化工具限制在您的媒体播放器中，请参阅相应的文章：

* [将音频可视化工具限制为音乐播放器](/audio/limittomusicplayer)
* [音频可视化工具不工作/未检测到声音](/audio/audiodetection)
:::

<video width="100%" controls autoplay loop>
  <source src="/videos/media_controls.mp4" type="video/mp4">
  您的浏览器不支持视频标签。
</video>

*Wallpaper Engine 从左上角显示的 Windows 媒体覆盖中获取专辑封面和歌曲数据。*

## 启用专辑封面和媒体数据功能

为了使此功能起作用，您需要确保满足以下条件：

1. 您使用的是 Windows 10 或更高版本。
2. 您已在 Wallpaper Engine 设置的**常规**选项卡中启用了**媒体集成支持**选项。
3. 您的媒体播放器将媒体数据提供给 Windows 媒体覆盖（如上所示）。 更多详情如下。
4. 您的音频文件包含专辑封面和媒体数据（歌曲名称、艺术家姓名、专辑名称等）

### 配置您的媒体播放器

大多数现代媒体播放器支持此功能运行所需的 Windows 媒体覆盖。 有时您需要先启用它。 打开媒体播放器的设置并寻找合适的选项（有时也隐藏在高级设置中）。 该选项通常提到*“媒体覆盖”*或*“媒体热键”*。 如果您不确定，请执行网络搜索，其中包括您的媒体播放器的名称和诸如*“媒体覆盖”*等词语。

## 从专辑封面功能中排除 Web 浏览器等应用程序

如果您注意到您的 Web 浏览器或系统上的其他应用程序开始干扰专辑封面功能，您可以将其添加到媒体阻止列表中。 打开 Wallpaper Engine 设置的**常规** 标签，导航到 **Windows** 部分并单击<strong x **媒体阻止列表**选项旁边的 **编辑**按钮。 确保有问题的应用程序干扰了专辑封面功能，它现在应该作为建议出现在阻止列表中。 单击应用程序旁边的**阻止**按钮，它现在应该停止干扰专辑封面功能。