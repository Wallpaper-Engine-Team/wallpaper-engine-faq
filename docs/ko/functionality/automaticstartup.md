---
tags:
  - 자동시작
  - 실행
---

# 부팅 시 자동 실행

Wallpaper Engine 설정으로 이동한 뒤 "일반" 탭을 찾아, 컴퓨터를 시작할 때 Wallpaper Engine을 실행하도록 설정할 수 있습니다. 시스템을 부팅할 때마다 배경에서 응용프로그램이 조용히 실행되는 자동 시작 옵션을 상단에서 설정할 수 있습니다.

## "최우선"과 "일반" 시작 옵션의 차이는 무엇인가요?

최우선 옵션을 선택하면, Wallpaper Engine이 Windows 서비스를 등록합니다. 즉, Windows와 함께 자동으로 실행되도록 구성한 다른 프로그램보다 앞서 Wallpaper Engine이 시작됩니다. 이것은 응용프로그램의 성능에 영향을 주지 않습니다.

이 최우선 옵션의 단점은 안정성이 떨어지는 것입니다. 일부 바이러스 백신이 과잉 반응하면서 악의적 행동으로 잘못 판단하여 Wallpaper Engine을 이 모드에서 시작되는 것을 차단합니다.

## 자동 시작을 켰지만 작동하지 않습니다. 어떻게 해야 하나요?

*최우선* 옵션을 사용하고 있다면, 최우선 옵션을 해제하고 *일반* 자동 시작으로 전환해 보세요. 위에서 설명한 바와 같이 최우선 모드는 더 빠르게 시작하지만 여러 이유로 안정성이 떨어집니다. 대부분 가끔씩 바이러스 백신 소프트웨어가 차단하는 것이 그 이유입니다.

일반 옵션 모드를 사용하는데 앱이 Windows와 함께 실행되지 않으면, 옵션을 최우선으로 변경하여 문제를 확인해 보세요.

최우선과 일반 옵션 모두 작동하지 않으면, 시스템에 설치된 바이러스 백신 소프트웨어를 확인하세요. 일부 바이러스 백신과 방화벽 응용프로그램은 가끔 컴퓨터 부팅 시 Wallpaper Engine의 자동 실행을 차단합니다. 바이러스 백신 소프트웨어에는 "허용 목록" 기능이 있는 경우가 많으며, 이는 특정 폴더나 응용프로그램을 무시합니다. 허용 목록에 wallpaper_engine 설치 디렉토리와 모든 실행 파일을 추가하세요.

다른 드문 이유로는 사용자 (또는 시스템의 응용프로그램)가 Wallpaper Engine .exe 파일을 관리자로만 실행하도록 설정한 경우입니다. 그러면 자동으로 시작될 수 없으며, 관리자 설정을 제거하고 자동 시작 기능을 껐다가 켜야 합니다.

자동 시작이 작동하지 않으면, 사실상 지나치게 열성적인 바이러스 백신 소프트웨어와 관련이 있습니다. 바이러스 백신 또는 방화벽 응용프로그램이 설치되었으면, 해당 응용프로그램의 모든 설정과 보안 수준을 다시 확인하세요.

## Wallpaper Engine이 Windows와 시작하지만 (일부) 배경화면이 나타나지 않습니다

 컴퓨터를 시작한 뒤 Wallpaper Engine 아이콘이 시계 옆 Windows 트레이에 보이는지 확인하세요. 시스템 시작 후 아이콘이 보이지만 전체 또는 일부 모니터에 배경화면이 표시되지 않으면, 그래픽 카드 드라이버에 문제가 있는 것입니다. Essentially, your graphics card drivers keep assigning your monitors new identifiers which leads Wallpaper Engine to believe that you are trying to configure a new monitor. You can fix this by changing the *"Monitor identification"* option in the *General* tab of the Wallpaper Engine settings to *Layout* or *GDI*. We also recommend that you do a clean re-installation of your graphics card drivers in this case, as it's an indicator for an underlying problem with your Windows installation.

 ## 시스템이 시작될 때 Wallpaper Engine이 잘못된 배경화면을 지정합니다

 이전 섹션과 같은 문제입니다. 모니터가 여러 대이며 시작 시 배경 화면이 잘못된 모니터에 지정되면, Wallpaper Engine 설정에서 *일반* 탭의 *모니터 식별* 옵션을 *레이아웃* 또는 *GDI*로 변경하세요.