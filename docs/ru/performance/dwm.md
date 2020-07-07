# Desktops with Integrated and Dedicated GPU Perform Poorly (dwm.exe)

Если на вашем настольном компьютере в BIOS включена интегрированная видеокарта при установленной дискретной, вы можете столкнуться с проблемами в работе *dwm.exe* — низкой производительностью и высокой загрузкой ЦП. Если это возможно, не включайте интегрированную видеокарту и подключите мониторы к дискретной. Using both independent graphics solutions at the same time will break hardware acceleration of the desktop window manager, it's important that all monitors are plugged into your main graphics card. This is not a bug or issue in Wallpaper Engine, it is problem that affects all mulit-monitor software with hardware setups where not all monitors are plugged into the main graphics card.

Без технологии Nvidia Optimus или ей подобных, система Windows будет вынуждена копировать изображение на обоях с одной видеокарты на другую, а это очень медленный процесс. На самом деле, любое ваше действие, которое будет затрагивать обе видеокарты, будет менее продуктивным из-за этого феномена. Это то же самое, что расположить окно с видеоигрой прямо между двумя мониторами.

This is unrelated to hardware built for multi-GPU setups like Nvidia Optimus laptops or SLI/Crossfire. They have a physical solution to make this work correctly.

## Poor Performance using Secondary GPU on Desktop without Nvidia SLI / Nvidia Optimus / AMD CrossFire

Many users assume that switching Wallpaper Engine to a secondary GPU will increase the overall system performance. However, this is merely a common misconception and the overall system performance will actually degrade.

Wallpaper Engine creates wallpapers which are part of the desktop which means they are part of the Windows Explorer process. Therefore, Wallpaper Engine must use the same GPU as Windows Explorer. If this is not the case, then Windows has to force both GPUs to cooperate in order to render an image for your monitors. This has to be done by the processor which ultimately means the overall computer performance degrades significantly and often takes much more performance than the wallpapers themselves. Some proper multi-GPU technologies (Nvidia SLI, Nvidia Optimus, AMD CrossFire) solve this problem on a hardware-level but this is not applicable in cases where you use an Nvidia GPU and an Intel on-board graphics card, for example.

You can still change the GPU of your choice in your graphics card drivers or in your overall system settings, however we strongly advise against doing this as the outcome is not an increase in system performance.