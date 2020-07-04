# 統合型および専用GPUのデスクトップのパフォーマンスが悪い（dwm.exe）

BIOSからデスクトップPCの統合型GPUを有効にし、一方で専用GPUをインストールしていると、*dwm.exe*のCPU使用率が高くなってパフォーマンスが低下することがあります。 可能ならば統合型GPUは有効にせず、モニターを専用GPUにつないでください。 独立したグラフィックスソリューションを両方同時に使うとデスクトップのウィンドウマネージャのハードウェアアクセラレーションが壊れます。すべてのモニターをメインのグラフィックスカードにつなぐことが重要です。 これはWallpaper Engineのバグや問題ではありません。これは、すべてのモニターがメインのグラフィックスカードにつながっていないハードウェア設定で、あらゆるマルチモニターソフトウェアに影響する問題です。

Nvidia Optimusテクノロジーや類似のテクノロジーがないと、Windowsは強制的に壁紙イメージを一つのGPUから別のGPUにコピーします。これは非常に時間のかかる操作です。 実際、2つのGPUが共有するアクションはすべてこの影響を受けます。これはゲームウィンドウを2つのモニター間で移動するときも同じです。

これは、Nvidia OptimusのノートPCやSLI/CrossfireのようなマルチGPUセットアップのハードウェア構成には関係がありません。 この場合は、正しく動作する物理的なソリューションが存在します。

## Nvidia SLI / Nvidia Optimus / AMD CrossFireのないデスクトップでセカンダリGPUを使用するとパフォーマンスが悪い

Many users assume that switching Wallpaper Engine to a secondary GPU will increase the overall system performance. However, this is merely a common misconception and the overall system performance will actually degrade.

Wallpaper Engine creates wallpapers which are part of the desktop which means they are part of the Windows Explorer process. Therefore, Wallpaper Engine must use the same GPU as Windows Explorer. If this is not the case, then Windows has to force both GPUs to cooperate in order to render an image for your monitors. This has to be done by the processor which ultimately means the overall computer performance degrades significantly and often takes much more performance than the wallpapers themselves. Some proper multi-GPU technologies (Nvidia SLI, Nvidia Optimus, AMD CrossFire) solve this problem on a hardware-level but this is not applicable in cases where you use an Nvidia GPU and an Intel on-board graphics card, for example.

You can still change the GPU of your choice in your graphics card drivers or in your overall system settings, however we strongly advise against doing this as the outcome is not an increase in system performance.