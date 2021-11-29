## 모바일 페어링 문제 해결

모바일 기기를 컴퓨터에 페어링할 수 없다면 높은 확률로 방화벽 또는 로컬 네트워크 설정의 문제입니다. 다음 절차를 따라 가능한 문제 원인들을 확인하세요.

* **핸드폰과 컴퓨터가 같은 로컬 네트워크에 연결되어 있는지 확인**
  * Your computer does not need wifi, it is still the same network even if it is connected through a network cable.
* **방화벽이 Wallpaper Engine이 로컬 네트워크와 통신하지 못하도록 막고 있는지 확인**
  * Wallpaper Engine sends a multi-casts on the network ports 7884 (UDP) and 7889 (TCP), make sure no firewall is blocking this.
* **기기 간의 통신을 방해할 수 있는 컴퓨터와 모바일 기기의 모든 VPN 또는 프록시 소프트웨어를 비활성화하세요.**
* **네트워크 공유기가 기기들이 서로 통신하지 못하도록 막고 있는지 확인**
    * 공유기가 기기 간의 통신을 차단하고 있는지 확인하세요.
    * 라우터 설정에서 **UPnP**(**"Universal Plug and Play"**)를 활성화하세요.
* **Windows 및 모바일 기기의 Wallpaper Engine이 최신 버전이며 실행 중인지 확인**

## Windows Firewall

Especially if your mobile device can find your computer but fails to connect to it, it's almost definitely caused by a firewall on your computer. When you first launch Wallpaper Engine, it will prompt you to grant it permission to your network. If you closed this window or did not specifically allow **ui32.exe** to communicate with your network, the Windows firewall will block Wallpaper Engine. Make sure to allow **ui32.exe** to communicate as shown in this screenshot:

![Windows Firewall Permissions](/img/faq/windows_defender.png)

Wallpaper Engine will automatically suggest firewall fixes if it detects any problems. This process is somewhat reliable but in some cases you may still need to manually clear any blocks you may have created in the past by accident.

If you have not granted Wallpaper Engine these permissions, the Windows firewall will automatically block Wallpaper Engine. Open the Windows firewall settings, then click on **Allow an app through firewall**. Search for an entry called **ui32** and either delete it or make sure both check marks in the *Private* and *Public* column are enabled, then confirm your changes and restart Wallpaper Engine.

Make sure to look for **ui32** or **Wallpaper Engine UI** - you may find entries called just **Wallpaper Engine** but these are irrelevant here.

**Please note:** This section is specifically only about the built-in Windows firewall, if you use any other antivirus app or firewall, you need to make sure Wallpaper Engine is not being blocked by them.

### 백업 해결책: 직접 배경화면 파일(.mpkg) 불러오기

컴퓨터와 모바일 기기 간의 연결을 고치는 것이 불가능할 때도 직접 모바일 기기로 배경화면을 옮길 수 있습니다. 우선, Wallpaper Engine에서 내보내고자 하는 배경화면을 선택한 후 오른쪽 클릭하고, **모바일 기기로 전송**을 누른 다음 **.mpkg 내보내기**를 클릭하세요.

<video width="100%" controls autoplay loop>
  <source src="/videos/mobile_export.mp4" type="video/mp4">
  브라우저가 비디오 태그를 지원하지 않습니다.
</video>

Wallpaper Engine이 배경화면의 .mpkg 파일을 생성하고 나면 해당 파일을 USB로 모바일 기기에 옮기거나 SD 카드에 파일을 복사하여 모바일 기기로 파일을 옮길 수 있습니다. 또는 모바일 기기의 파일 공유 서비스를 사용하여 메시지 서비스 또는 이메일로 자신에게 보낼 수도 있습니다.(파일 크기에 제약이 있을 수 있습니다)

파일을 모바일 기기로 옮긴 후, 모바일 기기에서 Wallpaper Engine을 실행하고 **파일 불러오기** 기능을 사용하세요. 파일을 넣은 디렉토리에서 .mpkg 파일을 선택하여 앱으로 직접 불러오세요.