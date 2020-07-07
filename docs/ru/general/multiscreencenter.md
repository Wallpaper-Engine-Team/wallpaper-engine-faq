# Центрирование обоев под мониторы с разным разрешением

Если вы хотите воспроизводить одни и те же обои на нескольких мониторах с разным разрешением, обои будут вести себя в соответствии с выбранным разрешением, не принимая во внимание физический размер мониторов. Windows does not account for the physical size, only the size in pixels is relevant.

Imagine you would center a single, normal window like Steam between your monitors. You cannot scale one side up or down without affecting the other monitor. This is exactly how a wallpaper works too. Live wallpapers are not static images, so they cannot be cut up and stitched together continuously like it would be possible with an image.

Take a screenshot of your entire desktop in Windows or through Wallpaper Engine and examine it, you will see that the wallpaper is centered according to that, the resolution of your monitors controls the center. 