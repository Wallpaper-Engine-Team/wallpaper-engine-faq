# 높은 GPU 사용 오해

The Windows Task Manager does not show the real GPU usage in most cases which is the cause for a lot of confusion. The GPU usage ignores the *power state* and clock rate of the graphics card which makes it extremely inaccurate and usually shows a much higher GPU usage. To see the real GPU, usage, use a tool like GPU-Z:

* [GPU-Z 다운로드](https://www.techpowerup.com/gpuz/)

## 실제 GPU 로드 확인

GPU-Z를 설치했으면, "센서" 탭에서 GPU 클록 속도와 GPU 로드를 확인하세요:

![Real GPU usage](./gpuz.png)

스크린샷의 *GPU 로드*는 24%입니다. 그러나 상단에서 그래픽 카드가 202.5MHz로 전원 상태가 낮다는 걸 확인할 수 있습니다. '사용'이 24%로 표시되었지만, 이것은 최상의 시나리오입니다. The actual usage based on the max clockrate of 1823mhz is only **2.6%** *(24% * 202.5 MHz / 1823 MHz)*.

A card could have clock rates between 100 Mhz and 2000 Mhz for example. If the task manager shows 50% then **it makes a big difference whether it is 50% of 100 MHz or 50% of 2000 MHz**.

::: tip To summarize: It's important to keep the GPU clock rate in mind when looking at the GPU load. 50% of 100 MHz is better than 5% of 2000 MHz. :::

If you want to improve GPU performance:

* Disable or delete overlay and recording tools, including Geforce Experience.
* Lower the frame rate setting and disable MSAA (it does not affect the quality 2D scene wallpapers).
    * This won't influence the performance of videos, they have fixed frame rates and quality.
    * The resolution and frame rate of the video wallpapers will control these, use videos with lower FPS to reduce GPU load
* Connect your monitors to the same GPU or Windows will perform poorly while trying to merge them.