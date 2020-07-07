# Завышенная оценка использования графического процессора

В большинстве случаев диспетчер задач Windows не показывает реальную загрузку графического процессора, и это часто приводит к путанице. При подсчете загрузки графического процессора не учитываются *режим работы* и тактовая частота видеокарты, что делает этот метод чрезвычайно неточным и обычно приводит к сильно завышенным оценкам. Чтобы узнать реальную загрузку графического процессора, используйте инструменты наподобии GPU-Z:

* [Скачать GPU-Z](https://www.techpowerup.com/gpuz/)

## Оцениваем реальную загрузку графического процессора

После установки GPU-Z, откройте вкладку «Датчики», чтобы узнать тактовую частоту и загрузку графического процессора:

![Real GPU usage](./gpuz.png)

Обратите внимание, что *загрузка процессора* на снимке экрана составляет 24%. Однако наверху можно увидеть, что видеокарта работает в режиме низкой мощности — 202.5 МГц. Это — наилучший вариант, несмотря на то что загрузка оценивается в 24%. Взяв за основу рассчета максимальную тактовую частоту видеокарты в 1823 МГц, вы увидите, что реальная загрузка составляет всего **2.6%** *(24% * 202.5 МГц / 1823 МГц)*.

A card could have clock rates between 100 Mhz and 2000 Mhz for example. If the task manager shows 50% then **it makes a big difference whether it is 50% of 100 MHz or 50% of 2000 MHz**.

::: tip To summarize: It's important to keep the GPU clock rate in mind when looking at the GPU load. 50% of 100 MHz is better than 5% of 2000 MHz. :::

If you want to improve GPU performance:

* Disable or delete overlay and recording tools, including Geforce Experience.
* Lower the frame rate setting and disable MSAA (it does not affect the quality 2D scene wallpapers).
    * This won't influence the performance of videos, they have fixed frame rates and quality.
    * The resolution and frame rate of the video wallpapers will control these, use videos with lower FPS to reduce GPU load
* Connect your monitors to the same GPU or Windows will perform poorly while trying to merge them.