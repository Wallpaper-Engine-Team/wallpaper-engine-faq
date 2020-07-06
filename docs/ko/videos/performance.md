# 비디오 중지 / 끊김 / 낮은 성능

하드웨어 낮은 성능으로 특정 비디오를 제대로 표시하지 못할 수 있습니다. A video wallpaper isn't comparable to standard video players, it must be composed with the icons as well and potentially stretches over multiple screens. 또한 기본값으로 GPU의 비디오 디코더를 사용하므로, CPU 사용량을 최소화합니다.

## 배경 기록 후크
It could also come from any kind of driver features to record applications like ReLive, Shadow Play/Nvidia Share or Windows GameDVR. Try disabling them and see if it makes a difference, then exclude Wallpaper Engine from them. Also make sure no other recording/overlay programs load themselves into Wallpaper Engine and slow down rendering.

You can try to use our scan tool to determine if any programs with know recording hooks are installed but it does not catch everything, especially common recording hooks like the ones coming with Nvidia GeForce Experience:

* [Wallpaper Engine 스캔 도구](/debug/scantool.html)

## 동적 초해상도(DSR) / GPU 조정
Driver level hacks like GPU Scaling/DSR could cause issues as well, try disabling them and if that helps, disable them for Wallpaper Engine specifically.

## 복수의 GPU / 복수의 화면 시스템의 dwm.exe 낮은 성능
If you have enabled the integrated GPU on your desktop PC in the BIOS although a dedicated graphics card is installed, you can experience bad performance and high CPU usage of DWM.exe. 가능하면 통합 GPU는 비활성화하세요. **It's very important to plug all your monitors into your dedicated graphics card.** Using both GPUs at the same time will break hardware acceleration of the desktop window manager. Without Nvidia Optimus technology or similar, Windows will be forced to copy the wallpaper image from one GPU to the other - a slow operation. In fact any shared action between your GPUs will suffer from this, it is the same as moving a game window right between both monitors.

This specific issue does not affect hardware built for multi-GPU setups like laptops with Nvidia Optimus or proper Nvidia SLI / AMD Crossfire setups with a hardware bridge.