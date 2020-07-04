# GPUの使用量が大きい場合の誤解

Windowsのタスクマネージャは、ほとんどの場合、実際のGPUの使用量を表示しません。これが多くの誤解の元になっています。 GPUの使用量は、グラフィックスカードの*電源の状態*とクロックレートを無視します。このため、数値が非常に不正確で、通常は実際よりもかなり大きなGPU使用量を表示します。 実際のGPU使用量を見るには、GPU-Zなどのツールをお使いください。

* [GPU-Zをダウンロードする](https://www.techpowerup.com/gpuz/)

## 実際のGPU使用量を知る

GPU-Zをインストールしたら、"Sensors"タブでGPUのクロックレートとGPUの負荷を確認します。

![Real GPU usage](./gpuz.png)

スクリーンショットの*GPU load*は24%です。 However, at the top you can see that the graphics card is in its low power state at 202.5 MHz. This is the best case scenario, although the 'usage' is displayed as 24%. The actual usage based on the max clockrate of 1823mhz is only **2.6%** *(24% * 202.5 MHz / 1823 MHz)*.

A card could have clock rates between 100 Mhz and 2000 Mhz for example. If the task manager shows 50% then **it makes a big difference whether it is 50% of 100 MHz or 50% of 2000 MHz**.

::: tip To summarize: It's important to keep the GPU clock rate in mind when looking at the GPU load. 50% of 100 MHz is better than 5% of 2000 MHz. :::

If you want to improve GPU performance:

* Disable or delete overlay and recording tools, including Geforce Experience.
* Lower the frame rate setting and disable MSAA (it does not affect the quality 2D scene wallpapers).
    * This won't influence the performance of videos, they have fixed frame rates and quality.
    * The resolution and frame rate of the video wallpapers will control these, use videos with lower FPS to reduce GPU load
* Connect your monitors to the same GPU or Windows will perform poorly while trying to merge them.