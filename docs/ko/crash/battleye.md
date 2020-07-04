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

## Nvidia 저 대기시간 모드
이것의 영향을 받는 대부분의 사용자는 Nvidia 그래픽 드라이버에서 *초저 대기 시간*을 사용합니다. Nvidia 그래픽 카드를 사용하는데 이러한 문제가 발생한다면, Nvidia 제어판을 열어 초저 대기시간 모드를 해제하여 이 문제를 해결하세요. *"3D 설정 관리"* -> *"글로벌 설정"* -> *"저 대기시간 모드"*를 선택한 뒤 이 설정을 *꺼짐*으로 변경하세요. Click *Apply* and restart your computer. Afterwards, BattlEye will not terminate Wallpaper Engine by mistake anymore.

## Contacting BattlEye Support
If the steps above do not fix your issues with a BattlEye-powered multiplayer game, you will need to reach out to BattlEye directly:

* [BattlEye Support](https://www.battleye.com/contact/)

On some systems, BattlEye will terminate Wallpaper Engine for no apparent reason and this is not something we can prevent as BattlEye is a rather intrusive anti-cheat which is able to terminate any application on your computer without notifying you. In these cases, the BattlEye developers will need to investigate the issue on your system as its a faulty behavior in their software.