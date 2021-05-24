# 모바일 기기와 Windows 페어링하기

자신의 모바일 기기와 컴퓨터를 무선으로 페어링하여 자신의 배경화면을 모바일 기기의 Wallpaper Engine 앱으로 전송할 수 있습니다. Steam만이 Steam 창작마당에서 배경화면 파일을 다운로드할 수 있기 때문에, Android 앱은 배경화면을 직접 다운로드할 수 없습니다.

Should you run into any problems with pairing your mobile devices, you can still import wallpapers by manually exporting the **.mpkg** that the Wallpaper Engine mobile app uses to render wallpapers.

### Windows에서 Wallpaper Engine 준비

**Windows** 앱에서 사용자 인터페이스 우측 상단의 **모바일** 버튼을 클릭하세요. 모바일 기기 개요가 표시됩니다. 기기 개요에서 가장 아래에 있는 **새로운 기기 연결** 버튼을 클릭하세요. 모바일 기기와 페어링하기 위한 4자리 PIN이 표시됩니다.

![모바일 PIN](/img/faq/mobile_pin.gif)

### 모바일 기기 연결

Wallpaper Engine 모바일 앱에서 화면 우측 하단의 **추가**를 누르고 **컴퓨터와 페어링**을 클릭하세요. Wallpaper Engine이 로컬 네트워크에서 실행 중인 Windows Wallpaper Engine을 검색합니다. 몇 초 후 자신의 Windows 컴퓨터가 나타나며, 클릭 시 연결할 수 있습니다. 처음으로 연결할 때는 4자리 PIN을 입력해야 합니다(위의 Windows 섹션 참조). PIN은 인가받지 않은 사용자가 자신의 컴퓨터에 몰래 연결하는 것을 방지하는 추가 보안 조치입니다.

PIN을 입력하고 나면 모바일 앱의 상태 바가 초록색으로 변하며, 어떤 컴퓨터와 연결되어 있는지 표시됩니다. Windows 앱에서는 **모바일** 버튼이 초록색으로 변하여 모바일 기기와 연결되었다는 것을 나타냅니다.

![모바일 PIN](/img/faq/mobile_pair.gif)

## 모바일 페어링 문제 해결

모바일 기기를 컴퓨터에 페어링할 수 없다면 높은 확률로 방화벽 또는 로컬 네트워크 설정의 문제입니다. 다음 절차를 따라 가능한 문제 원인들을 확인하세요.

* 핸드폰과 컴퓨터가 같은 로컬 네트워크에 연결되어 있는지 확인
* 방화벽이 Wallpaper Engine이 로컬 네트워크와 통신하지 못하도록 막고 있는지 확인
* 네트워크 공유기가 기기들이 서로 통신하지 못하도록 막고 있는지 확인
* Disable any sort of VPN or proxy software on your computer and your mobile device which can interfere with the communication between your devices.
* Windows 및 모바일 기기의 Wallpaper Engine이 최신 버전이며 실행 중인지 확인

## Backup solution: Manually importing a Wallpaper File (.mpkg)

Should you be able unable to fix the connection between your computer and your mobile device, you can still manually transfer your wallpapers onto your mobile device. First, select the wallpapers you want to export in Wallpaper Engine, then right-click on them and select **Send to Mobile Device**, followed by clicking on **Export .mpkg**.

Once Wallpaper Engine has created the .mpkg files for your wallpapers, you can either transfer them to your mobile device by moving the files onto your mobile device via USB or by copying the files onto an SD card. Alternatively you can also use any file sharing service on your mobile device or send them to yourself via a messaging service or even via email (if the file size is not a problem).

Once the files are on your mobile device, open up Wallpaper Engine on your mobile device and use the **Import File** functionality to directly import the .mpkg files into the app by selecting them from the directory that you have placed them in.