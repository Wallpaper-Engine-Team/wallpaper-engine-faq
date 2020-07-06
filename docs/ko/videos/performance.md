# 비디오 중지 / 끊김 / 낮은 성능

하드웨어 낮은 성능으로 특정 비디오를 제대로 표시하지 못할 수 있습니다. A video wallpaper isn't comparable to standard video players, it must be composed with the icons as well and potentially stretches over multiple screens. 또한 기본값으로 GPU의 비디오 디코더를 사용하므로, CPU 사용량을 최소화합니다.

## 배경 기록 후크
It could also come from any kind of driver features to record applications like ReLive, Shadow Play/Nvidia Share or Windows GameDVR. Try disabling them and see if it makes a difference, then exclude Wallpaper Engine from them. Also make sure no other recording/overlay programs load themselves into Wallpaper Engine and slow down rendering.

You can try to use our scan tool to determine if any programs with know recording hooks are installed but it does not catch everything, especially common recording hooks like the ones coming with Nvidia GeForce Experience:

* [Wallpaper Engine 스캔 도구](/debug/scantool.html)

## 동적 초해상도(DSR) / GPU 조정
Driver level hacks like GPU Scaling/DSR could cause issues as well, try disabling them and if that helps, disable them for Wallpaper Engine specifically.

## 복수의 GPU / 복수의 화면 시스템의 dwm.exe 낮은 성능
전용 그래픽 카드가 설치되어 있지만 BIOS에서 바탕화면 PC에 통합 GPU를 활성화하면, 낮은 성능과 DWM.exe의 높은 CPU 사용을 경험하게 됩니다. 가능하면 통합 GPU는 비활성화하세요. **모든 모니터를 전용 그래픽 카드에 연결하는 것은 매우 중요합니다.**GPU를 동시에 사용하면 바탕화면 창 관리자의 하드웨어 가속에 손상을 줍니다. Nvidia Optimus 기술 또는 유사한 기술이 없으면, Windows는 하나의 GPU에서 다른 CPU로 배경화면 이미지를 복사하므로 작업 속도가 느립니다. 사실 GPU 간 공유되는 작업은 여기에 영향을 받으며, 이는 모니터 간 게임 창을 움직이는 것과 같습니다.

이 특정 문제는 Nvidia Optimus 노트북 또는 하드웨어 브리지의 적절한 Nvidia SLI / AMD Crossfire 설정과 같은 멀티 GPU 설정을 위해 제작된 하드웨어에는 영향을 주지 않습니다.