---
tags:
  - 应用程序
  - 规则
  - 例外
  - 白名单
  - 黑名单
  - 滞后
  - 延迟
  - 游戏
  - 性能
  - 帧/秒
  - 崩溃
  - 声音
  - 音频
  - 间歇性
---

# 修复特定应用程序或游戏的问题

如果遇到特定应用程序或游戏的问题，您可以对 Wallpaper Engine 进行配置，例如使其在检测到出现问题的应用程序已启动或正在播放音频时以某种方式行事。

## 设置应用程序规则

在 Wallpaper Engine 设置的*性能*选项卡中，单击*应用程序规则*标签旁边的*编辑*按钮，将显示您已设置的所有自定义规则的概览。 通过单击*创建新规则*，您可以针对特定应用程序，设置 Wallpaper Engine 的特殊行为。

![Application Rules Overview](./applicationrule.gif)

此时将显示系统上所有正在运行的 .exe 文件的列表。 从列表中选择一个 .exe，或键入发生问题的 .exe 的确切名称。 You can configure the condition and the behavior with the two other options. See below for more infos and concrete examples.

::: tip Wallpaper Engine only cares about the exact .exe name, the location does not matter so you can just type any .exe into the *Application name* field. Just make sure the .exe name matches exactly, including uppercase and lowercase letters. :::

### Fixing performance problems with apps or games

Select the .exe of the program you want to have a special rule for from the list or type it into the **Application name** field. Afterwards, set **Condition** to **Is running** and **Wallpaper playback** to **Stop (free memory)**. This means Wallpaper Engine will completely remove all wallpapers from memory when the application or game is launched, which means any compatibility issues will be resolved.

### Fixing intermittent sound with background recording tools

Select the .exe of the program you want to have a special rule for from the list or type it into the **Application name** field. Afterwards, set **Condition** to **Is playing audio** and **Wallpaper playback** to **Keep running**. This means Wallpaper Engine will not mute itself when the application in question is playing or recording audio. Windows does not differentiate between playing or recording audio, this is why Wallpaper Engine will constantly mute and unmute itself if you are recording it. Many game streaming applications can do this by accident and without your knowledge.

### Other behavior

Check out all possible conditions and wallpaper playback options for more types of application rules. You can also configure Wallpaper Engine to mute or pause when you launch a certain application.

::: tip You can also change these settings for all applications in the **Performance** tab of the Wallpaper Engine settings. If you are having performance issues in multiple games, for example, it may make sense to just change the **Other applications fullscreen** option to **Stop (free memory)** so that Wallpaper Engine will turn itself off when you launch any game or fullscreen application. :::