# 모바일 페어링 문제 해결

::: tip
위의 절차를 전부 따른 후에도 연결이 안 되나요? 페이지를 맨 아래까지 스크롤하면 USB 또는 기타 수단으로 배경화면을 가져오는 수동 백업 방법을 확인할 수 있습니다.
:::

모바일 기기를 컴퓨터에 페어링할 수 없다면 높은 확률로 방화벽 또는 로컬 네트워크 설정의 문제입니다. 다음 절차를 따라 가능한 문제 원인들을 확인하세요.

* **핸드폰과 컴퓨터가 같은 로컬 네트워크에 연결되어 있는지 확인**
  * 네트워크 케이블로 연결되어 있어도 같은 네트워크라면 컴퓨터에 Wi-Fi가 필요하지 않습니다.
* **방화벽이 Wallpaper Engine이 로컬 네트워크와 통신하지 못하도록 막고 있는지 확인**
  * Wallpaper Engine uses the network ports 7884 (UDP) and 7889 (TCP), make sure no firewall is blocking them.
* **기기 간의 통신을 방해할 수 있는 컴퓨터와 모바일 기기의 모든 VPN 또는 프록시 소프트웨어를 비활성화하세요.**
* **네트워크 공유기가 기기들이 서로 통신하지 못하도록 막고 있는지 확인**
    * 공유기가 기기 간의 통신을 차단하고 있는지 확인하세요.
    * 라우터 설정에서 **UPnP**(**"Universal Plug and Play"**)를 활성화하세요.
* **Windows 및 모바일 기기의 Wallpaper Engine이 최신 버전이며 실행 중인지 확인**
* **If your computer never even becomes visible in the Android app:** It could be that a firewall is only blocking the broadcasts used to discover your device, you can attempt to directly enter the IP address of your computer. Navigate to the connection overview on your mobile device and click on the three dots in the upper right corner, then select **Enter IP manually**. You can now try to manually input the IP address of your computer. Make sure Wallpaper Engine is running on your computer and that you have opened the **Connect New Device** overview, otherwise a connection is not possible.

### Windows 방화벽

특히 모바일 기기가 컴퓨터를 인식하지만 연결할 수가 없다면, 컴퓨터의 방화벽으로 인한 문제일 가능성이 매우 높습니다. Wallpaper Engine을 처음 실행하면 네트워크 권한을 요청할 것입니다. 해당 창을 껐거나 **ui23.exe** 프로그램에 네트워크 연결 권한을 내리지 않았다면, Windows 방화벽이 Wallpaper Engine을 차단할 것입니다. 다음 스크린샷에 나온 대로 **ui23.exe** 프로그램에 연결 권한을 부여해야 합니다.

![Windows 방화벽 권한](/img/faq/windows_defender.png)

Wallpaper Engine은 문제를 감지하면 자동으로 방화벽 설정 변경을 제안합니다. 이 절차는 안정적이지만, 과거에 우연히 생성했던 차단을 직접 제거해야 하는 경우도 있습니다.

Wallpaper에 해당 권한들을 부여하지 않았다면, Windows 방화벽이 자동으로 Wallpaper Engine을 차단할 것입니다. Windows 방화벽 설정을 열고 **방화벽에서 앱 허용**을 클릭하세요. **ui32**라는 항목을 찾은 다음 제거하거나 *개인* 및 *고용* 열 둘 다에 체크 표시가 되어 있는지 확인하세요. 그다음 변경 사항을 저장한 후 Wallpaper Engine을 재시작하세요.

**ui32** 혹은 **Wallpaper Engine UI**를 찾아보세요. **Wallpaper Engine**라고만 되어 있는 항목도 있을 수 있지만, 이 경우에는 해당 항목은 관계가 없습니다.

**참고:** 이 섹션은 Windows 내장 방화벽에만 적용되므로, 기타 안티 바이러스 프로그램 또는 방화벽을 사용할 경우 해당 프로그램이 Wallpaper Engine을 차단하고 있지 않은지 확인해야 합니다.

## 백업 해결책: 직접 배경화면 파일(.mpkg) 불러오기

컴퓨터와 모바일 기기 간의 연결을 고치는 것이 불가능할 때도 직접 모바일 기기로 배경화면을 옮길 수 있습니다. 우선, Wallpaper Engine에서 내보내고자 하는 배경화면을 선택한 후 오른쪽 클릭하고, **모바일 기기로 전송**을 누른 다음 **.mpkg 내보내기**를 클릭하세요.

<video width="100%" controls autoplay loop>
  <source src="/videos/mobile_export.mp4" type="video/mp4">
  브라우저가 비디오 태그를 지원하지 않습니다.
</video>

Wallpaper Engine이 배경화면의 .mpkg 파일을 생성하고 나면 해당 파일을 USB로 모바일 기기에 옮기거나 SD 카드에 파일을 복사하여 모바일 기기로 파일을 옮길 수 있습니다. 또는 모바일 기기의 파일 공유 서비스를 사용하여 메시지 서비스 또는 이메일로 자신에게 보낼 수도 있습니다.(파일 크기에 제약이 있을 수 있습니다)

파일을 모바일 기기로 옮긴 후, 모바일 기기에서 Wallpaper Engine을 실행하고 **파일 불러오기** 기능을 사용하세요. 파일을 넣은 디렉토리에서 .mpkg 파일을 선택하여 앱으로 직접 불러오세요.

::: danger
모바일 기기의 **다운로드** 폴더에 .mpkg 파일을 내려놓아야 합니다. Android는 앱의 파일 접근을 허용하는 데 매우 엄격합니다. 기기에서 .mpkg 파일을 찾거나 열 수 없을 경우 다른 디렉토리에 저장해보세요. 이 경우 **다운로드** 폴더가 가장 안전합니다.
:::