---
tags:
  - 가동 중지 시간
  - 서버
  - 다운로드
  - 진행률
  - 창작마당
  - 연결
---

# Steam 배경화면 다운로드 문제

**모든 다운로드는 Steam이 수행한다는 것**을 유의하세요. Wallpaper Engine은 Steam의 다운로드 상태만 표시할 뿐이고, 모든 다운로드 문제는 Steam과 관련되어 있으며, Wallpaper Engine과는 직접적인 관계가 없습니다. 이 가이드는 다운로드와 관련된 일반적인 문제를 모두 포함하고 있으며, 많은 경우 초기 문제 원인은 지나치게 열성적인 바이러스 백신 응용프로그램이나 차단된 네트워크 포트입니다.

Steam 다운로드 관련 문제가 발생하면, 바이러스 백신 응용프로그램이 Steam을 차단하지 않고, 네트워크 라우터의 방화벽을 포함한 모든 방화벽에서 필요한 포트가 모두 열려있는지 확인하세요.

::: 팁 스마트폰의 모바일 핫스팟으로 전환하여 배경화면을 다운로드해보면, 네트워크 라우터가 Steam 다운로드를 차단하고 있는지 쉽게 확인할 수 있습니다. :::

## 배경화면 다운로드가 0% 또는 100% (또는 다른 퍼센트)에서 중단
Steam은 다운로드를 완료하지 않고 파일을 식별하지 않습니다. 다운로드가 한동안 중단되면 잠시 기다리고, 그래도 여전히 Steam 다운로드가 작동하지 않으면 다음 방법을 시도해 보세요:

* Steam 옵션에서 Steam의 다운로드 캐시를 제거하세요:
  * [Clear Steam Download cache](https://support.steampowered.com/kb_article.php?ref=3134-TIAL-4638)
* Afterwards verify the files of Wallpaper Engine in Steam:
  * [Verify Wallpaper Engine files](https://support.steampowered.com/kb_article.php?ref=2037-QEUH-3335)
* If all downloads are still stuck: **Turn off Steam** and afterwards **delete the contents** of this directory:
  * `C:\Program Files (x86)\Steam\steamapps\workshop\downloads`
    * If you have an anti-virus application installed, make sure that it's specifically excluding this directory
    * **Note:** `C:\Program Files (x86)\Steam` is the default Steam path, if you have installed it somewhere else, check there.
* Restart Steam. Do not start any games. Check in the Steam download tab for progress and resume any paused downloads.

::: details Click here to see more possible solutions if the steps above did not fix your download problems
* Make sure no anti-virus or firewall is blocking Steam. Exclude the whole Steam directory in your anti-virus app settings.
* Unsubscribe the wallpapers that fail to download and subscribe to them again after restarting Steam.
* Choose a different content server in Steam's settings. The option can be found in the "Downloads" tab of the Steam settings.
* Make sure you did not restrict Steam downloads in the **Steam settings** based on time, bandwidth, being in-app.
* Open the 'Downloads' tab in Steam (Library -> Downloads). Look for paused downloads. If you can see any, click on 'Resume'.
* Right-click Wallpaper Engine in Steam, then Properties, then select **Allow Background Downloads**.
* Make sure you do not have pending game updates in Steam, it could pause or disable wallpaper downloads.
* Try again after waiting at least for a day in case there are Steam server issues.
* **As a last resort**, try to re-install Wallpaper Engine to clear any broken Steam files (this will re-download all wallpapers!). :::

::: tip Steam servers go offline every week for maintenance at a fixed time:

* United States West Coast: **Tuesday at 4 pm (UTC - 7)**
* Same time in Central Europe: **Wednesday at 1 am (UTC + 1)**
* Same time in China: **Wednesday at 8 am (UTC + 8)**

If you are reading this while it is roughly this time of the week, it may be that the servers are temporarily offline. Wait one or two hours and try again. :::

## Steam: "Missing Downloaded Files" error

Steam is unable to download some files, this can be due to anti-virus applications blocking Steam or just absolutely random. It can usually be fixed this way:

* Turn off Steam.
* Delete the contents of this directory: `C:\Program Files (x86)\Steam\steamapps\workshop\downloads`
* Delete the contents of this directory: `C:\Program Files (x86)\Steam\steamapps\downloading\431960`
  * **Note:** `C:\Program Files (x86)\Steam` is the default Steam path, if you have installed it somewhere else, check there.
* Start Steam and verify the Wallpaper Engine files:
  * [Verify Wallpaper Engine files](https://support.steampowered.com/kb_article.php?ref=2037-QEUH-3335)

If you have an antivirus-app installed: Configure an exception for this directory to prevent it from blocking Steam's Workshop downloads: `C:\Program Files (x86)\Steam\steamapps\workshop\downloads`

#### Related article: [Steam re-downloading all wallpapers](/steam/redownload)