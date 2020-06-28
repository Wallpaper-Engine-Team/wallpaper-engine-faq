---
tags:
  - 下载
  - 重新下载
  - 已删除
  - 删除
---

# Steam 重新下载壁纸

Steam 的下载缓存已损坏，现在要重新下载所有文件（无特殊原因， 或因为 Steam 发生了崩溃，并非正常关闭）。 此问题并非 Wallpaper Engine 导致，因此无法在 Wallpaper Engine 中修复，Steam 上的所有创意工坊应用程序都可能受到此 Steam 错误的困扰。 如果频繁遇到此问题，请采取以下解决方法：

## 自动修复 Steam
我们构建了一个 Steam 自动修复程序，您可以用它促使 Steam 阻止该问题继续发生（希望如此）！ 请遵照以下步骤操作：
* 关闭 Steam
* 转到 `wallpaper_engine` 安装目录
  * 默认位置：`C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine`
* 运行 `wallpaper_engine\bin\steamredownloadfixer32.exe`
  * 如果该工具给您发送了任何错误消息，请给我们发送电子邮件，我们将研究能否对其进行改进
* 重新启动 Steam 并验证 Wallpaper Engine 的文件：
  * [验证 Wallpaper Engine 的文件](https://support.steampowered.com/kb_article.php?ref=2037-QEUH-3335)

遗憾的是，每当 Steam 下载缓存损坏时，您都必须重复此操作。 请记住，我们并未参与构建 Steam，因而无法自行修复 Steam。

## 重新安装 Steam

对于大多数经常受此 Steam 错误影响的用户而言，最可靠的长期修复方法似乎是重新安装 Steam，因为某些 Steam 文件可能只是在您的系统上损坏了。 请尝试完全重新安装 Steam：

1. 通过 Steam 卸载 Wallpaper Engine。
2. 卸载 Steam 本身，请务必遵循官方指南：
  * [卸载 Steam](https://support.steampowered.com/kb_article.php?ref=9609-OBMP-2526)
  * 请专门查看上方 Steam 支持文章中的“手动移除 Steam”部分，然后按照其中的说明备份 *steamapps* 目录，以确保您不必重新下载您的所有游戏。

## 将本地备份用作解决方法

If the issue continues happening to you, you can also make local backups of all wallpapers and then unsubscribe from all wallpapers. Steam will not redownload wallpapers that you are not subscribed to, so the work-around is to simply only rely on local backups. You can find our guide on how to create backups here:

* [Using wallpaper backups](/steam/backup)

Afterwards, simply unsubscribe from all wallpapers. Make sure to not delete any files manually, Steam must delete the wallpaper files itself or it will attempt to redownload the wallpapers again just to delete the files on its own.