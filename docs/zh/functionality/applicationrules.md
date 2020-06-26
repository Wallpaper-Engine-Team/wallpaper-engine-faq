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

此时将显示系统上所有正在运行的 .exe 文件的列表。 从列表中选择一个 .exe，或键入发生问题的 .exe 的确切名称。 您可以使用另外两个选项配置条件和行为。 请参阅下文内容，以了解更多信息和具体示例。

::: 提示 Wallpaper Engine 仅在意确切的 .exe 名称，位置则无关紧要，因此您只需在*应用程序名称*字段中键入任意 .exe 即可。 请务必确保 .exe 名称完全匹配，包括大写和小写字母。 :::

### 修复应用程序或游戏的性能问题

从列表中选择您希望具有特殊规则的程序的 .exe，或在**应用程序名称**字段中键入该 .exe 的名称。 然后，将**条件**设置为**运行时**，将**壁纸播放**设置为**停止（释放内存）**。 这意味着，Wallpaper Engine 将在应用程序或游戏启动时，完全移除内存中的所有壁纸，从而解决所有兼容性问题。

### 修复后台录制工具遇到的间歇性声音问题

从列表中选择您希望具有特殊规则的程序的 .exe，或在**应用程序名称**字段中键入该 .exe 的名称。 然后，将**条件**设置为**播放音频时**，将**壁纸播放**设置为**保持运行**。 这意味着，当相关应用程序播放或录制音频时，Wallpaper Engine 不会自行静音。 Windows does not differentiate between playing or recording audio, this is why Wallpaper Engine will constantly mute and unmute itself if you are recording it. Many game streaming applications can do this by accident and without your knowledge.

### Other behavior

Check out all possible conditions and wallpaper playback options for more types of application rules. You can also configure Wallpaper Engine to mute or pause when you launch a certain application.

::: tip You can also change these settings for all applications in the **Performance** tab of the Wallpaper Engine settings. If you are having performance issues in multiple games, for example, it may make sense to just change the **Other applications fullscreen** option to **Stop (free memory)** so that Wallpaper Engine will turn itself off when you launch any game or fullscreen application. :::