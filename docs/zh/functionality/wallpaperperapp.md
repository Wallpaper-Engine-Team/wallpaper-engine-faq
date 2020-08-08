# 根据应用程序选择壁纸

使用 Wallpaper Engine，您在系统中启动某个 .exe 时可以自动启动不同的壁纸。 例如，如果您希望在玩游戏时使用更少分散注意力的壁纸，或者在打开音乐播放器时自动启动音频可视化工具，则此功能可能很有用。

::: 提示 如果某些游戏或应用程序存在技术问题，则在启动某些 .exe 时，还可以使用应用程序规则禁用 Wallpaper Engine。 如果您想通过其他应用解决技术问题，请查看此指南：[修复特定应用程序或游戏的问题](/functionality/applicationrules.html)
:::

## 设置应用程序规则

在 Wallpaper Engine 设置的**性能**选项卡中，单击 **应用程序规则**部分的**编辑**按钮。 单击**创建新规则**，为您选择的 .exe 设置新一组壁纸。 In the **Application name** input field, enter the name of your .exe, make sure the name matches exactly, for example *musicplayer.exe*. Set the **Condition** to **Is running**. In the **Wallpaper playback** option you can select one of the following options:

* Load wallpaper
* Load playlist
* Load profile

What is important to note here is that **Load wallpaper** and **Load playlist** will both only load one wallpaper and span it across all screens. If you have multiple monitors and want to load independent wallpapers for each screen (or even different playlists on each screen), you need to use the **Load Profile** option. Read the following section for more infos on how to set this up.

### Setting up a multi-monitor profile

**Load Profile** in the application rules refers to mulit-monitor profiles which can be configured in the monitor overview (screen icon in the upper right corner of the interface). A profile is a snapshot of all your currently selected wallpapers and playlists across all your screens. Whenever a profile is loaded, all wallpapers and playlists will be placed according to the profile configuration.

Configure your wallpapers and playlists across all monitors the the way you want them to be, then click on the **Save profile** button in the monitor settings and save the current setup under a name of your choice. Keep in mind that any subsequent changes you make to your setup will not change the profile until you use the **Save profile** button again. You can set up multiple profiles and assign them to multiple apps at once. For example, you may create a **Music**, a **Gaming** and a **Movies** profile and then assign each profile to all .exe files that match these categories.

<video width="100%" controls autplay loop>
  <source src="/videos/apprules.mp4" type="video/mp4">
  您的浏览器不支持视频标签。
</video>