# 有关高 GPU 使用率的误解

大多数情况下，Windows 任务管理器并不显示真实的 GPU 使用率，因而造成了许多困惑。 GPU 使用率忽略了显卡的*电源状态*和时钟速率，这使其极为不准确，通常会显示高出许多的数值。 要查看真实的 GPU 使用率，请使用 GPU-Z 等工具：

* [下载 GPU-Z](https://www.techpowerup.com/gpuz/)

## 查明实际的 GPU 负载

安装 GPU-Z 以后，请查看“传感器”选项卡，了解 GPU 时钟速率和 GPU 负载：

![Real GPU usage](./gpuz.png)

请注意，屏幕截图中的 *GPU 负载*为 24%。 但您可在顶部看到，显卡处于 202.5 MHz 的低功耗状态。 这是最佳的案例场景，尽管“使用率”显示为 24%。 The actual usage based on the max clockrate of 1823mhz is only **2.6%** *(24% * 202.5 MHz / 1823 MHz)*.

A card could have clock rates between 100 Mhz and 2000 Mhz for example. If the task manager shows 50% then **it makes a big difference whether it is 50% of 100 MHz or 50% of 2000 MHz**.

::: tip To summarize: It's important to keep the GPU clock rate in mind when looking at the GPU load. 50% of 100 MHz is better than 5% of 2000 MHz. :::

If you want to improve GPU performance:

* Disable or delete overlay and recording tools, including Geforce Experience.
* Lower the frame rate setting and disable MSAA (it does not affect the quality 2D scene wallpapers).
    * This won't influence the performance of videos, they have fixed frame rates and quality.
    * The resolution and frame rate of the video wallpapers will control these, use videos with lower FPS to reduce GPU load
* Connect your monitors to the same GPU or Windows will perform poorly while trying to merge them.