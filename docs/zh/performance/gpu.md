# 有关高 GPU 使用率的误解

大多数情况下，Windows 任务管理器并不显示真实的 GPU 使用率，因而造成了许多困惑。 GPU 使用率忽略了显卡的*电源状态*和时钟速率，这使其极为不准确，通常会显示高出许多的数值。 要查看真实的 GPU 使用率，请使用 GPU-Z 等工具：

* [下载 GPU-Z](https://www.techpowerup.com/gpuz/)

## 查明实际的 GPU 负载

安装 GPU-Z 以后，请查看“传感器”选项卡，了解 GPU 时钟速率和 GPU 负载：

![Real GPU usage](./gpuz.png)

请注意，屏幕截图中的 *GPU 负载*为 24%。 但您可在顶部看到，显卡处于 202.5 MHz 的低功耗状态。 这是最佳的案例场景，尽管“使用率”显示为 24%。 基于 1823mhz 的最大时钟速率的实际使用率仅为 **2.6%***（24% × 202.5 MHz/1823 MHz）*。

例如，显卡的时钟速率可能介于 100 Mhz 和 2000 Mhz 之间。 如果任务管理器显示 50% 的使用率，那么**实际值到底是 100 MHz 的 50%，还是 2000 MHz 的 50%，会有很大的差别**。

::: 提示 总结一下：查看 GPU 负载时，请务必牢记 GPU 时钟速率。 100 MHz 的 50% 优于 2000 MHz 的 5%。 :::

如想提高 GPU 性能：

* 禁用或删除覆盖和录制工具，包括 Geforce Experience。
* 降低帧速率设置，禁用 MSAA（这不会影响 2D 场景壁纸的质量）。
    * 这不会影响视频的性能，因为它们具有固定的帧速率和质量。
    * 视频壁纸的分辨率和帧速率将控制这些设置，使用 FPS 较低的视频来减少 GPU 负载
* Connect your monitors to the same GPU or Windows will perform poorly while trying to merge them.