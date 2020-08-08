# 将音频可视化工具限制为音乐播放器

由于音频在 Windows 中的工作方式，Wallpaper Engine 本身不可能将音频可视化工具限制为您选择的音乐播放器。 不过，您可使用第三方软件创建*虚设*音频设备来实现该操作。 本指南将说明设置此类虚设音频设备的一种方法，以及如何配置 Windows 10 和 Wallpaper Engine 以使此设置正常工作。

请记住，我们对任何虚设音频设备不提供支持，并且不能保证其会正常工作，这是一个非常高级的设置，远远超出了 Wallpaper Engine 提供的功能。 本指南仅为想进一步自定义系统的用户提供友好帮助。

::: 警告：请注意 本指南仅适用于 Windows 10 的更新版本。 Windows 的较早版本可能缺少某些功能，因此无法遵循本指南。
:::

### 安装虚设音频设备

我们建议您使用免费 **VB-CABLE 虚拟音频设备**，可通过以下网站下载：

* [虚拟音频设备下载](https://www.vb-audio.com/Cable/)

下载并解压存档文件，然后使用 **VBCABLE_Setup.exe** 或 **VBCABLE_Setup_x64.exe**，根据您的 Windows 10 版本安装 32 位或 64 位音频设备。 右键单击，然后选择*以管理员身份运行*，确保以管理员权限启动设置文件。 请按照设置说明进行操作，确保音频设备成功安装。

### 设置 Windows 和 Wallpaper Engine

以下任意步骤如需帮助，请查看下方视频，该视频完整显示了 Windows 10（英语界面）上的所有步骤。

1. 使用稍后要用于 Wallpaper Engine 的软件开始播放音乐
2. 右键单击 Windows 托盘中时钟旁边的音频图标，然后选择**打开声音设置**。
3. Scroll down to the bottom of the page that opens and click on **App volume and device preferences**.
4. A list of all applications playing audio will be shown. Find your music player and in the **Output** column, change the option from **Default** to **CABLE Input (VB-Audio Virtual Cable)**. Your audio player should immediately turn quiet, this is to be expected.
5. Go back to the main page of the Windows sound settings and in the upper right corner, select **Sound Control Panel**.
6. A small window will appear, navigate to the **Recording** tab, then right-click on the **CABLE Output** audio device and select **Properties**.
7. Another window will appear, click on the **Listen** tab and select **Listen to this device**. Click on **Apply** and **OK** and the music from your music player should return.
8. Windows is now properly configured, open up the **Wallpaper Engine settings** and in the **General** tab, change the **Audio recording device** to **CABLE Input (VB-Audio Virtual Cable)**. Wallpaper Engine should now start reacting to the music from your music player but will ignore any other application on your computer.

*Video showcasing all the steps described above:*

<video width="100%" controls>
  <source src="/videos/audioinputdevice.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
