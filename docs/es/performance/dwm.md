# Los sobremesa con GPU integrada y dedicada no funcionan bien (dwm.exe)

Si ha habilitado la GPU integrada en su ordenador de sobremesa en la BIOS a pesar de que tiene una GPU dedicada, puede darse el caso de que experimente un mal rendimiento y un alto uso de la CPU por parte de *dwm.exe*. Si es posible, no habilite la GPU integrada y conecte los monitores a la GPU dedicada. El uso de ambas soluciones gráficas a la vez dañará la aceleración hardware del gestor de ventanas de escritorio, por lo que es importante que conecte todos los monitores con la tarjeta gráfica principal. Esto no es un error ni un problema de Wallpaper Engine, sino que es un problema que afecta a todos los programas multimonitor cuando los monitores no están conectados a la tarjeta gráfica principal.

Without Nvidia Optimus technology or similar, Windows will be forced to copy the wallpaper image from one GPU to the other - a very slow operation. In fact any shared action between your GPUs will suffer from this, it is the same as moving a game window right between both monitors.

This is unrelated to hardware built for multi-GPU setups like Nvidia Optimus laptops or SLI/Crossfire. They have a physical solution to make this work correctly.

## Poor Performance using Secondary GPU on Desktop without Nvidia SLI / Nvidia Optimus / AMD CrossFire

Many users assume that switching Wallpaper Engine to a secondary GPU will increase the overall system performance. However, this is merely a common misconception and the overall system performance will actually degrade.

Wallpaper Engine creates wallpapers which are part of the desktop which means they are part of the Windows Explorer process. Therefore, Wallpaper Engine must use the same GPU as Windows Explorer. If this is not the case, then Windows has to force both GPUs to cooperate in order to render an image for your monitors. This has to be done by the processor which ultimately means the overall computer performance degrades significantly and often takes much more performance than the wallpapers themselves. Some proper multi-GPU technologies (Nvidia SLI, Nvidia Optimus, AMD CrossFire) solve this problem on a hardware-level but this is not applicable in cases where you use an Nvidia GPU and an Intel on-board graphics card, for example.

You can still change the GPU of your choice in your graphics card drivers or in your overall system settings, however we strongly advise against doing this as the outcome is not an increase in system performance.