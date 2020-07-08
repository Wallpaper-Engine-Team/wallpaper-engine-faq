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

如果问题持续发生，您还可以对所有壁纸进行本地备份，然后取消订阅所有壁纸。 Steam 不会重新下载您未订阅的壁纸，因此这种解决方法无非就是完全依赖于本地备份。 您可以在此处找到有关如何创建备份的指南：

* [使用壁纸备份](/steam/backup)

然后，您只需取消订阅所有壁纸即可。 千万不要手动删除任何文件，Steam 必须自行删除壁纸文件，否则它将再次尝试重新下载壁纸，而只是为了自行删除这些文件。