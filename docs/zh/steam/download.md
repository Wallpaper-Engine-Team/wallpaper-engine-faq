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
    * If you have an anti-virus application installed, make sure that it's specifically excluding this directory
    * **Note:** `C:\Program Files (x86)\Steam` is the default Steam path, if you have installed it somewhere else, check there.
* Restart Steam. Do not start any games. Check in the Steam download tab for progress and resume any paused downloads.

::: details Click here to see more possible solutions if the steps above did not fix your download problems
* Make sure no anti-virus or firewall is blocking Steam. Exclude the whole Steam directory in your anti-virus app settings.
* Unsubscribe the wallpapers that fail to download and subscribe to them again after restarting Steam.
* Choose a different content server in Steam's settings. The option can be found in the "Downloads" tab of the Steam settings.
* Make sure you did not restrict Steam downloads in the **Steam settings** based on time, bandwidth, being in-app.
* Open the 'Downloads' tab in Steam (Library -> Downloads). Look for paused downloads. If you can see any, click on 'Resume'.
* Right-click Wallpaper Engine in Steam, then Properties, then select **Allow Background Downloads**.
* Make sure you do not have pending game updates in Steam, it could pause or disable wallpaper downloads.
* Try again after waiting at least for a day in case there are Steam server issues.
* **As a last resort**, try to re-install Wallpaper Engine to clear any broken Steam files (this will re-download all wallpapers!). :::

::: tip Steam servers go offline every week for maintenance at a fixed time:

* United States West Coast: **Tuesday at 4 pm (UTC - 7)**
* Same time in Central Europe: **Wednesday at 1 am (UTC + 1)**
* Same time in China: **Wednesday at 8 am (UTC + 8)**

If you are reading this while it is roughly this time of the week, it may be that the servers are temporarily offline. Wait one or two hours and try again. :::

## Steam: "Missing Downloaded Files" error

Steam is unable to download some files, this can be due to anti-virus applications blocking Steam or just absolutely random. It can usually be fixed this way:

* Turn off Steam.
* Delete the contents of this directory: `C:\Program Files (x86)\Steam\steamapps\workshop\downloads`
* Delete the contents of this directory: `C:\Program Files (x86)\Steam\steamapps\downloading\431960`
  * **Note:** `C:\Program Files (x86)\Steam` is the default Steam path, if you have installed it somewhere else, check there.
* Start Steam and verify the Wallpaper Engine files:
  * [Verify Wallpaper Engine files](https://support.steampowered.com/kb_article.php?ref=2037-QEUH-3335)

If you have an antivirus-app installed: Configure an exception for this directory to prevent it from blocking Steam's Workshop downloads: `C:\Program Files (x86)\Steam\steamapps\workshop\downloads`

#### Related article: [Steam re-downloading all wallpapers](/steam/redownload)