# 高 GPU 使用率迷思

大多數情況中，Windows 工作管理員不會顯示真正的 GPU 使用率，讓人容易因此混淆。 GPU 使用率忽略了*電源狀態*和顯示卡的時脈速率，因此極不準確，通常會顯示更高的 GPU 使用率。 若要檢視真正的 GPU 使用率，請使用 GPU-Z 這類的工具：

* [下載 GPU-Z](https://www.techpowerup.com/gpuz/)

## 找出實際的 GPU 負載

安裝 GPU-Z 之後，請使用「感測器」分頁檢視 GPU 時脈速率和 GPU 負載：

![Real GPU usage](./gpuz.png)

請注意，螢幕畫面中的 *GPU 負載*為 24%。 不過，最上方的顯示卡處於 202.5 MHz 的低電源狀態。 這是最理想的情況，雖然顯示出的「使用率」高達 24%。 以最大時脈速率 1823mhz 為標準，實際使用率僅 **2.6%***（24% * 202.5 MHz / 1823 MHz）*。

舉例來說，顯示卡的時脈速率可能介於 100 Mhz 和 2000 Mhz 之間。 工作管理員顯示使用率為 50% 時，那麼是** 100 MHz 的 50% 還是 2000 MHz 的 50% 就有很大差別了**。

::: 提示 結論：檢視 GPU 負載時，務必將 GPU 時脈速率納入考量。 100 MHz 的 50% 比 2000 MHz 的 5% 更理想。 :::

If you want to improve GPU performance:

* Disable or delete overlay and recording tools, including Geforce Experience.
* Lower the frame rate setting and disable MSAA (it does not affect the quality 2D scene wallpapers).
    * This won't influence the performance of videos, they have fixed frame rates and quality.
    * The resolution and frame rate of the video wallpapers will control these, use videos with lower FPS to reduce GPU load
* Connect your monitors to the same GPU or Windows will perform poorly while trying to merge them.