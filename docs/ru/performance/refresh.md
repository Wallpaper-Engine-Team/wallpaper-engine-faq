# Неправильная частота обновления экрана монитора

При использовании некоторых операционных систем и аппаратного обеспечения, видеокарта может не справляться с одновременным изменением изображения на нескольких мониторах, если у них большой разброс в частоте обновления экрана. Microsoft has addressed this issue in the Windows 10 2004 Update (May 2020), please make sure you are using at least that version of Windows 10 or newer if you are having this problem.

Some common work-arounds:

* Set monitors to refresh rates that are a multiple of each other. For example, 120Hz and 60Hz instead of 144Hz and 60Hz.
* Use pausing/stopping options in Wallpaper Engine to make this less of a problem. Set it to pause on all monitors when playing games.
* If your system has an integrated GPU, use that for your 60Hz monitor, although this will likely decrease desktop performance overall, since your CPU now needs to make both GPUs work together!