# Desktops with Integrated and Dedicated GPU Perform Poorly (dwm.exe)

If you enabled the integrated GPU on your desktop PC in the BIOS although a dedicated GPU is installed, you may experience bad performance and high CPU usage of *dwm.exe*. If possible, do not enable your integrated GPU and plug your monitors into your dedicated GPU. Using both independent graphics solutions at the same time will break hardware acceleration of the desktop window manager, it's important that all monitors are plugged into your main graphics card. This is not a bug or issue in Wallpaper Engine, it is problem that affects all mulit-monitor software with hardware setups where not all monitors are plugged into the main graphics card.

Without Nvidia Optimus technology or similar, Windows will be forced to copy the wallpaper image from one GPU to the other - a very slow operation. In fact any shared action between your GPUs will suffer from this, it is the same as moving a game window right between both monitors.

This is unrelated to hardware built for multi-GPU setups like Nvidia Optimus laptops or SLI/Crossfire. 이게 정확히 작동하게 할 물리적 해결책이 있습니다.

## Nvidia SLI / Nvidia Optimus / AMD CrossFire 없이 바탕화면에 보조 GPU를 사용한 낮은 성능

많은 사용자가 Wallpaper Engine을 보조 GPU로 전환하면 전체적인 시스템 성능이 향상할 거라고 생각합니다. 그러나 이것은 흔한 오해로, 사실 전체 시스템 성능은 저하됩니다.

Wallpaper Engine은 바탕화면의 일부인 배경화면을 생성하는데, 이것은 Windows 탐색기 프로세스의 일부라는 뜻입니다. 그러므로 Wallpaper Engine은 Windows 탐색기와 같은 GPU를 사용해야 합니다. 이 경우가 아니라면, Windows는 모니터의 이미지를 렌더링하기 위해 모든 GPU가 협력하여 작동하도록 합니다. This has to be done by the processor which ultimately means the overall computer performance degrades significantly and often takes much more performance than the wallpapers themselves. Some proper multi-GPU technologies (Nvidia SLI, Nvidia Optimus, AMD CrossFire) solve this problem on a hardware-level but this is not applicable in cases where you use an Nvidia GPU and an Intel on-board graphics card, for example.

You can still change the GPU of your choice in your graphics card drivers or in your overall system settings, however we strongly advise against doing this as the outcome is not an increase in system performance.