---
tags:
  - 停机时间
  - 服务器
  - 下载量
  - 进度
  - 创意工坊
  - 连接
---

# Steam 壁纸下载问题

请记住，**所有下载均由 Steam 执行**。 Wallpaper Engine 仅显示 Steam 的下载状态，所有下载问题均与 Steam 出现的问题有关，而与 Wallpaper Engine 没有直接关系。 本指南包含一系列最常见的下载问题，在许多情况下，问题最初的起因都是防病毒应用程序过于尽职或网络端口受阻。

如果您在 Steam 的下载方面遇到问题，请确保防病毒应用程序没有阻止 Steam，而且防火墙中的所有必要端口均已打开（包括网络路由器中的所有防火墙）。

::: 提示 您可以通过以下方法轻松检查网络路由器是否阻止 Steam 进行下载：切换到智能手机上的移动热点，然后尝试通过该热点下载壁纸。 :::

## 壁纸下载停滞在 0% 或 100%（或任何其他百分比）
Steam 尚未完成下载和验证文件。 如果下载停滞了一段时间，而且即使您等待了一段时间，Steam 下载仍无法正常工作，请尝试执行以下操作：

* 在 Steam 的选项中清除 Steam 的下载缓存：
  * [清除 Steam 的下载缓存](https://support.steampowered.com/kb_article.php?ref=3134-TIAL-4638)
* 然后，在 Steam 中验证 Wallpaper Engine 的文件：
  * [验证 Wallpaper Engine 的文件](https://support.steampowered.com/kb_article.php?ref=2037-QEUH-3335)
* 如果所有下载依然停滞：**关闭 Steam**，然后**删除以下目录的内容**：
  * `C:\Program Files (x86)\Steam\steamapps\workshop\downloads`
    * 如果安装了防病毒应用程序，请确保该应用程序专门排除此目录
    * **注意：**`C:\Program Files (x86)\Steam` 是 Steam 的默认路径，如果您将其安装在其他位置，请查看该位置。
* 重新启动 Steam。 不要启动任何游戏。 查看 Steam 中的“下载”选项卡，以了解下载进度，并继续任意暂停的下载。

::: 详细信息 如果上述步骤未能解决下载问题，请单击此处，查看更多可能的解决方案
* 请确保防病毒软件或防火墙并未阻止 Steam。 在防病毒应用程序的设置中，排除整个 Steam 目录。
* 取消订阅无法下载的壁纸，然后在重新启动 Steam 以后再次订阅它们。
* 在 Steam 的设置中，选择其他内容服务器。 该选项可在 Steam 设置的“下载”选项卡中找到。
* 请确保您未在 **Steam 设置**中，根据时间、带宽和是否在应用内限制 Steam 的下载。
* 在 Steam 中，打开“下载”选项卡（库 -> 下载）。 查找暂停的下载。 如有发现，单击“继续”。
* 在 Steam 中，右键单击 Wallpaper Engine，然后依次选择“属性”和**“允许后台下载”**。
* 请确保 Steam 中没有待处理的游戏更新，否则它可能会暂停或禁用壁纸下载。
* 等待至少一天后重试，以防 Steam 服务器出现问题。
* **作为最后的选择**，请尝试重新安装 Wallpaper Engine，以清除所有损坏的 Steam 文件（这将重新下载所有壁纸！）。 :::

::: 提示 Steam 服务器每周都会在固定时间离线以进行维护：

* 美国西海岸：**周二下午 4 点 (UTC - 7)**
* 中欧地区同一时间：**周三凌晨 1 点 (UTC + 1)**
* 中国同一时间：**周三上午 8 点 (UTC + 8)**

如果您是在本周的大约这个时间阅读本文，服务器可能暂时处于离线状态。 请等待一两个小时，然后重试。 :::

## Steam：“缺少已下载的文件”错误

Steam 无法下载某些文件，这可能是因为防病毒应用程序阻止了 Steam 或完全随机出现的问题。 通常可以通过以下方式解决：

* 关闭 Steam。
* 删除以下目录的内容：`C:\Program Files (x86)\Steam\steamapps\workshop\downloads`
* 删除以下目录的内容：`C:\Program Files (x86)\Steam\steamapps\downloading\431960`
  * **注意：**`C:\Program Files (x86)\Steam` 是 Steam 的默认路径，如果您将其安装在其他位置，请查看该位置。
* Start Steam and verify the Wallpaper Engine files:
  * [Verify Wallpaper Engine files](https://support.steampowered.com/kb_article.php?ref=2037-QEUH-3335)

If you have an antivirus-app installed: Configure an exception for this directory to prevent it from blocking Steam's Workshop downloads: `C:\Program Files (x86)\Steam\steamapps\workshop\downloads`

#### Related article: [Steam re-downloading all wallpapers](/steam/redownload)