# Desktops with Integrated and Dedicated GPU Perform Poorly (dwm.exe)

전용 GPU가 설치되어 있지만 BIOS에서 바탕화면 PC에 통합 GPU를 활성화하면, 낮은 성능과 *dwm.exe*의 높은 CPU 사용을 경험하게 됩니다. 가능하면, 통합 GPU를 활성화하지 않고 모니터를 전용 GPU에 연결하는 게 좋습니다. 독립 그래픽 솔루션을 동시에 모두 사용하면, 바탕화면 창 관리자의 하드웨어 가속이 손상됩니다. 모든 모니터가 메인 그래픽 카드에 연결되어야 하는 것이 중요합니다. This is not a bug or issue in Wallpaper Engine, it is problem that affects all mulit-monitor software with hardware setups where not all monitors are plugged into the main graphics card.

Nvidia Optimus 기술 또는 유사한 기술이 없으면, Windows는 하나의 GPU에서 다른 CPU로 배경화면 이미지를 복사하므로, 작업 속도가 매우 느립니다. 사실 GPU 간 공유되는 작업은 이 영향을 받으며, 모니터 간 게임 창을 움직이는 것과 같습니다.

이것은 Nvidia Optimus 노트북 또는 SLI/Crossfire와 같은 멀티 GPU 설정을 위해 제작된 하드웨어와 관련이 없습니다. 여기에는 정확히 작동하게 할 물리적 해결책이 있습니다.

## Nvidia SLI / Nvidia Optimus / AMD CrossFire 없이 바탕화면에 보조 GPU를 사용한 낮은 성능

많은 사용자가 Wallpaper Engine을 보조 GPU로 전환하면 전체적인 시스템 성능이 향상할 거라고 생각합니다. 그러나 이것은 흔한 오해로, 사실 전체 시스템 성능은 저하됩니다.

Wallpaper Engine은 바탕화면의 일부인 배경화면을 생성하는데, 이것은 Windows 탐색기 프로세스의 일부라는 뜻입니다. 그러므로 Wallpaper Engine은 Windows 탐색기와 같은 GPU를 사용해야 합니다. 이 경우가 아니라면, Windows는 모니터의 이미지를 렌더링하기 위해 모든 GPU가 협력하여 작동하도록 합니다. This has to be done by the processor which ultimately means the overall computer performance degrades significantly and often takes much more performance than the wallpapers themselves. 일부 적절한 멀티 GPU 기술(Nvidia SLI, Nvidia Optimus, AMD CrossFire)은 하드웨어 차원에서 이 문제를 해결하지만, 예를 들어 Nvidia GPU와 Intel 온보드 그래픽 카드를 사용하는 경우에는 적용할 수 없습니다.

여전히 그래픽 카드 드라이버 또는 전체 시스템 설정에서 GPU를 변경할 수 있지만, 그 결과가 시스템 성능을 향상시키지 않으므로 절대 권장하지 않습니다.