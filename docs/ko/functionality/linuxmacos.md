# Linux, Mac 또는 Android의 Wallpaper Engine

Wallpaper Engine은 현재 Windows에서만 이용할 수 있으며, 당장은 다른 플랫폼을 지원할 계획이 없습니다.

더 많은 운영 시스템을 지원하길 바라는 사용자의 뜻은 충분히 이해하나, 그것은 그렇게 간단한 일이 아닙니다. Wallpaper Engine의 핵심은 완전한 사용자 지정 소프트웨어 솔루션으로, 다른 플랫폼으로 완벽하게 포팅하는 작업량은 막대합니다.

일부 게임과 응용프로그램의 경우 개발자가 쉽게 Mac과 Linux에 포팅하는 것처럼 보일 수도 있습니다. 그런 경우는 대부분 더 많은 플랫폼을 지원하기 위해 개발자가 특별한 일을 하지 않아도 되는 Unity 또는 Unreal Engine과 같은 비디오 게임 엔진을 사용하기 때문입니다. 그러나 Wallpaper Engine과 같은 최종 사용자 응용프로그램에는 적용할 수 없습니다. 운영 시스템과 긴밀히 상호작용하는 응용프로그램이므로, 제대로 작동하려면 각 운영 시스템에 따라 맞춤 제작하여야 하기 때문입니다. In the case of Linux, it goes even further and must be made to work with every popular display manager which differ significantly between distributions and partially even between releases of distributions.

While all of this would in theory be possible, the simple truth is that it's not economically viable to add support for Linux or Mac OS at this point. If you take a look at the [Steam hardware survey](https://store.steampowered.com/hwsurvey), you can see that less than 1% of Steam users use Linux. And again, this is split up even further into different distributions of Linux, mostly Ubuntu which comes in at a mere 0.25% of users.

As explained above, the time needed to port Wallpaper Engine to another operating system is immense and it will also increase the costs of on-going maintenance work significantly, while the possible user group benefiting of this is comparatively tiny. Steam 사용자 중 96% 이상을 차지하는 Windows 버전의 향상에 시간과 에너지를 쏟고 싶습니다.

However, we are keeping a close eye on the official Steam statistics and if the situation on Steam changes we are definitely open to look into figuring out how we could support more platforms in the future if it becomes viable. 