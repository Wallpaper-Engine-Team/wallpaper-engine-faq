# 完全重置 Wallpaper Engine

如果您在使用 Wallpaper Engine 时遇到技术问题，您可能需要对 Wallpaper Engine 安装进行完全重置。 请按照本指南中有关如何完全重置 Wallpaper Engine 的说明操作，包括损坏的壁纸订阅。

::: danger
如果您使用防病毒应用程序（Microsoft Defender 除外），请先阅读此内容

我们处理的绝大多数问题都是由防病毒应用程序错误地阻止 Wallpaper Engine 或 Steam 引起的。 防病毒应用程序通常造成以下问题：

* Wallpaper Engine 崩溃
* Wallpaper Engine 用户界面损坏或空白
* Wallpaper Engine 根本无法启动，但没有任何错误消息
* Wallpaper Engine 无法自行安装或更新
* 由损坏或无法访问的文件引起的各种其他问题

**如果您使用了防病毒应用程序，请确保该应用程序忽略您的 `wallpaper_engine` 安装目录，然后再继续执行此页面上列出的步骤。 检查您的防病毒设置以获取完全排除文件夹的方法。**

大多数防病毒应用程序可以在不通知您的情况下阻止 Wallpaper Engine 文件，并且某些 Wallpaper Engine 文件会被永久阻止。
:::

## 完全卸载 Wallpaper Engine

要完全卸载 Wallpaper Engine 以清除所有损坏的文件，请执行以下操作：

1. If you have enabled the automatic startup functionality: Open the Wallpaper Engine settings, turn off the automatic startup at the top of the **General** tab in the Wallpaper Engine settings.
2. Open Steam and right-click on Wallpaper Engine, then select click on **Manage**, followed by **Uninstall**.
3. Navigate to the Wallpaper Engine installation directory and delete the remaining `wallpaper_engine` directory entirely. by default, it is located here:

* `C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine`

If you have installed Wallpaper Engine in a different directory, please look for the `wallpaper_engine` directory there. Make sure the folder is entirely deleted to clear any invisible antivirus file locks or corrupted files.

You can now reinstall Wallpaper Engine. If you want to start from a clean slate, please read the next section on how to fully reset all your wallpaper subscriptions - this is not necessary in most cases.

## Resetting all Steam Workshop Subscriptions

If you are experiencing issues related to wallpaper downloads by Steam, you can try to do a full reset of your Steam Workshop subscriptions. In rare cases, this can help with broken Workshop subscriptions that are not visible in the app. If you notice that Steam keeps redownloading all your wallpapers or that Steam keeps downloading wallpapers that have been deleted from the Steam Workshop in the past, you can attempt a full reset.

请遵照以下步骤操作：

1. 关闭 Steam。 **Optional:** Uninstall Wallpaper Engine first.
2. Open the Wallpaper Engine Steam Workshop website and log in to your Steam account:

* [Steam Workshop for Wallpaper Engine](https://steamcommunity.com/app/431960/workshop/)

3. On the right-hand side, hover over **Your files** and then **Subscribed Items**.
4. You will be presented a page with your subscriptions. Click the **Unsubscribe From All** button on the right-hand side to clear all your Workshop subscription (including any hidden broken subscriptions).
5. **Restart Steam**, your subscriptions are now reset.
