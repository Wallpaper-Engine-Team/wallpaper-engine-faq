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

1. 如果您启用了自动启动功能： 打开 Wallpaper Engine 设置，然后关闭 Wallpaper Engine 设置中**常规**选项卡顶部的自动启动。
2. 打开 Steam 并右键单击 Wallpaper Engine，然后单击**管理**，接着单击**卸载**。
3. 导航到 Wallpaper Engine 安装目录并彻底删除剩余的 `wallpaper_engine` 目录。 默认情况下，它位于此处：

* `C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine`

如果您将 Wallpaper Engine 安装在了其他目录中，请在其中查找 `wallpaper_engine` 目录。 确保完全删除该文件夹，以清除任何不可见的防病毒文件锁定或损坏的文件。

您现在可以重新安装 Wallpaper Engine。 如果您想从头开始，请参阅下一节来了解如何完全重置所有壁纸订阅，但在大多数情况下这不是必需的。

## 重置所有 Steam 创意工坊订阅

如果您遇到与 Steam 下载壁纸相关的问题，您可以尝试完全重置 Steam 创意工坊订阅。 在极少数情况下，这有助于解决应用程序中不可见的损坏创意工坊订阅。 如果您发现 Steam 不断重新下载您的所有壁纸，或者 Steam 不断下载过去已从 Steam 创意工坊中删除的壁纸，您可以尝试完全重置。

请遵照以下步骤操作：

1. 关闭 Steam。 **可选：** 先卸载 Wallpaper Engine。
2. 打开 Wallpaper Engine Steam 创意工坊网站并登录您的 Steam 帐户：

* [Wallpaper Engine 的 Steam 创意工坊](https://steamcommunity.com/app/431960/workshop/)

3. 在右侧，将鼠标悬停在**您的文件**上，然后将鼠标悬停在**订阅的项目**上。
4. 您将看到一个包含您的订阅的页面。 单击右侧的**全部取消订阅**按钮，以清除您所有的创意工坊订阅（包括任何隐藏的损坏订阅）。
5. **重新启动 Steam**，您的订阅现在已重置。
