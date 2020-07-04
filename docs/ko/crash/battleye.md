---
tags:
  - 작동 중단
  - 닫기
  - nvidia
  - battleye
---

# Wallpaper Engine을 종료하는 BattlEye 안티 치트
If Wallpaper Engine closes silently when you start specific games then this is most likely caused by the BattlEye anti-cheat used by numerous multiplayer games. BattlEye를 사용하는 것으로 알려진 게임:

* 포트나이트
* 배틀그라운드 (PUBG)
* 레인보우 식스 시즈
* 이스케이프 프롬 타르코프
* *기타 등등...*

BattlEye는 일부 시스템에서 실수로 Wallpaper Engine (및 기타 응용프로그램)을 닫습니다. 이것은 Wallpaper Engine의 버그나 작동 중단이 아닙니다. Wallpaper Engine은 게임 또는 시스템의 소프트웨어와 상호작용하지 않아도 BattleEye에 의해 종료됩니다.

## Nvidia 짧은 대기 시간 모드
Most users affected by this have the *Ultra-Low Latency Mode* enabled in the Nvidia graphics drivers. If you have an Nvidia graphics card and suffer from this issue, open the Nvidia Control Panel and disable ultra-low latency mode to fix this issue. Select *"Manage 3D settings"* -> *"Global Settings"* -> *"Low Latency Mode"* and change this setting to *Off*. Click *Apply* and restart your computer. Afterwards, BattlEye will not terminate Wallpaper Engine by mistake anymore.

## Contacting BattlEye Support
If the steps above do not fix your issues with a BattlEye-powered multiplayer game, you will need to reach out to BattlEye directly:

* [BattlEye Support](https://www.battleye.com/contact/)

On some systems, BattlEye will terminate Wallpaper Engine for no apparent reason and this is not something we can prevent as BattlEye is a rather intrusive anti-cheat which is able to terminate any application on your computer without notifying you. In these cases, the BattlEye developers will need to investigate the issue on your system as its a faulty behavior in their software.