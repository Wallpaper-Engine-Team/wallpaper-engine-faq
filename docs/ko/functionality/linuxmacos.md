# Wallpaper Engine on Linux or Mac OS

Wallpaper Engine is currently only available on Windows and Android and there are no immediate plans to support other platforms at this time.

더 많은 운영 체제를 지원하길 바라는 사용자의 뜻은 충분히 이해하나, 그것은 그렇게 간단한 일이 아닙니다. Wallpaper Engine의 핵심은 완전한 사용자 지정 소프트웨어 솔루션으로, 다른 플랫폼으로 완벽하게 포팅하려면 그 작업량이 방대합니다.

일부 게임과 응용 프로그램의 경우 개발자가 쉽게 Mac과 Linux에 포팅하는 것처럼 보일 수도 있습니다. 그런 경우는 대부분 개발자가 특별한 작업을 하지 않아도 더 많은 플랫폼을 지원할 수 있는 Unity 또는 Unreal Engine과 같은 비디오 게임 엔진을 사용하기 때문입니다. 그러나 Wallpaper Engine과 같은 최종 사용자 응용 프로그램에는 적용할 수 없습니다. 운영 체제와 긴밀히 상호작용하는 응용 프로그램이므로, 제대로 작동하려면 각 운영 체제에 따라 맞춤 제작하여야 하기 때문입니다. Linux의 경우 한 걸음 더 나아가 모든 인기 있는 디스플레이 매니저와 협업해야 합니다. 이것은 배포간 큰 차이가 있고, 일부는 심지어 배포 출시에 따라 다르기도 합니다.

이론상으로는 모두 가능하지만, 현 시점에서 Linux나 Mac OS를 지원하는 일은 경제성 측면에서 실행이 어렵습니다. [Steam 하드웨어 설문조사](https://store.steampowered.com/hwsurvey)에서 Steam 사용자 중 Linux를 이용하는 사람은 1% 미만이라는 것을 알 수 있습니다. 게다가 이 수치는 다양한 Linux 배포 형태로 다시 나뉘며, 다수를 차지하는 Ubuntu 사용자는 0.25%에 불과합니다.

위에서 설명한 대로 Wallpaper Engine을 다른 운영 체제로 포팅하려면 매우 많은 시간이 필요하고, 진행 중인 유지관리 작업 비용이 크게 증가하는 반면, 그에 비해 사용자 그룹이 받을 수 있는 혜택은 미미합니다. Steam 사용자 중 96% 이상을 차지하는 Windows 버전의 향상에 시간과 에너지를 쏟고 싶습니다.

그러나 공식 Steam 통계를 지켜보고 있으며, Steam의 상황이 가시적으로 변화하면 더 많은 플랫폼을 지원할 방안을 찾아볼 것입니다.

## How was support for Android devices made possible?

We always look at ways we can create the biggest benefit for a large group of our users. Taking into account the spread of Android devices across different regions of the world and comparing it to our user base, we estimate that at least 70% of our users own an Android device. This is a huge contrast to Linux or Mac OS, as these platforms combined just make up a tiny fraction compared to Android's global market share.

One useful thing about Android compared to Linux, for example, is that the live wallpaper feature is more or less standardized across all devices, which makes development much easier. We still hit quite a few significant hurdles when porting the app to Android, but after months of work were able to reach a stable state that would work well across various device families.

Again, what we considered important here is the large number of our existing users would benefit from this port, as we spent months on creating the Android version and continue to provide maintenance for it for years to come, which is a significant time investment to make.

## What about support for iPhones and iPads?

Unfortunately, Apple's mobile operating system iOS currently does not support real dynamic live wallpapers like Android does. The possibilities for live wallpapers on iOS are very limiting since iOS does not allow for true live wallpapers. There is some limited support for very basic short animated wallpapers in the form of *Live Photos* but the format is very restrictive and the vast majority of Wallpaper Engine wallpapers aren't really compatible with it in a way that we deem acceptable.