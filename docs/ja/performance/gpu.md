# GPUの使用量が大きい場合の誤解

Windowsのタスクマネージャは、ほとんどの場合、実際のGPUの使用量を表示しません。これが多くの誤解の元になっています。 GPUの使用量は、グラフィックスカードの*電源の状態*とクロックレートを無視します。このため、数値が非常に不正確で、通常は実際よりもかなり大きなGPU使用量を表示します。 実際のGPU使用量を見るには、GPU-Zなどのツールをお使いください。

* [GPU-Zをダウンロードする](https://www.techpowerup.com/gpuz/)

## 実際のGPU使用量を知る

GPU-Zをインストールしたら、"Sensors"タブでGPUのクロックレートとGPUの負荷を確認します。

![Real GPU usage](./gpuz.png)

スクリーンショットの*GPU load*は24%です。 しかし上部には、グラフィックスカードの電源状態が202.5 MHzという低さであることが表示されています。 これは想定されるベストな状態ですが、「使用量」は24%と表示されます。 最大クロックレートである1823mhzを元にした実際の使用量は、わずか**2.6%**です*（24% * 202.5 MHz / 1823 MHz）*。

例えばあるカードは、100 Mhz～2000 Mhzのクロックレートを持つ可能性があります。 タスクマネージャが50%と表示した場合、**100 MHzの50%と2000 MHzの50%では大違いです**。

::: tip 要約すると、GPUの負荷を見る場合にはGPUのクロックレートを念頭に置いておくことが重要なのです。 100 MHzの50%の方が2000 MHzの50%よりも良いのです。 :::

GPUのパフォーマンスを上げたい場合：

* Geforce Experienceを含め、オーバーレイと録画ツールを無効にするか、削除します。
* フレームレート設定を低くし、MSAAを無効にします（これによって2Dのシーン壁紙のクオリティが影響を受けることはありません）。
    * This won't influence the performance of videos, they have fixed frame rates and quality.
    * The resolution and frame rate of the video wallpapers will control these, use videos with lower FPS to reduce GPU load
* Connect your monitors to the same GPU or Windows will perform poorly while trying to merge them.