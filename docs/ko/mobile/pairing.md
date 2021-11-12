# 모바일 기기와 Windows 페어링하기

자신의 모바일 기기와 컴퓨터를 무선으로 페어링하여 자신의 배경화면을 모바일 기기의 Wallpaper Engine 앱으로 전송할 수 있습니다.

It's not possible for the Android app to directly download wallpapers from the Workshop due to technical and legal limitations that prevent the Android app from directly connecting to the Workshop.

::: tip
If pairing does not work for you, see the **Backup Solution** section at the bottom of this page to learn how to create mobile wallpaper packages (**.mpkg**) and how to import them on your mobile device.
:::

[[toc]]

## 1. Install the free Wallpaper Engine Android Companion App

Before continuing, make sure to install the latest version of the Wallpaper Engine Android companion app.

공식 앱스토어 릴리스를 통해 앱을 설치할 것을 권장하지만, 저희 홈페이지에서도 직접 최신 앱을 다운로드할 수 있습니다. 다운로드 링크 및 추가 정보는 저희 Android 다운로드 페이지에서 확인하세요:

* [Android Wallpaper Engine 다운로드](https://www.wallpaperengine.io/android/)

For security reasons, we advise against installing the app from any sources not listed on our website.

## 2. Windows에서 Wallpaper Engine 준비

**Windows** 앱에서 사용자 인터페이스 우측 상단의 **모바일** 버튼을 클릭하세요. 모바일 기기 개요가 표시됩니다. 기기 개요에서 가장 아래에 있는 **새로운 기기 연결** 버튼을 클릭하세요. Wallpaper Engine will show you a 4-digit PIN that you can use to pair one mobile device in the next step.

<video width="100%" controls autoplay loop>
  <source src="/videos/mobile_pin.mp4" type="video/mp4">
  브라우저가 비디오 태그를 지원하지 않습니다.
</video>

## 3. 모바일 기기 연결

Wallpaper Engine 모바일 앱에서 화면 우측 하단의 **추가**를 누르고 **컴퓨터와 페어링**을 클릭하세요. Wallpaper Engine이 로컬 네트워크에서 실행 중인 Windows Wallpaper Engine을 검색합니다. 몇 초 후 자신의 Windows 컴퓨터가 나타나며, 클릭 시 연결할 수 있습니다. 처음으로 연결할 때는 4자리 PIN을 입력해야 합니다(위의 Windows 섹션 참조).

<video height="590px" style="display:block;margin:0 auto;" controls autoplay loop>
  <source src="/videos/mobile_connect.mp4" type="video/mp4">
  브라우저가 비디오 태그를 지원하지 않습니다.
</video>

PIN을 입력하고 나면 모바일 앱의 상태 바가 초록색으로 변하며, 어떤 컴퓨터와 연결되어 있는지 표시됩니다. Windows 앱에서는 **모바일** 버튼이 초록색으로 변하여 모바일 기기와 연결되었다는 것을 나타냅니다.

By default, Wallpaper Engine will now always automatically connect to your computer if you start Wallpaper Engine on your mobile device and your computer at the same time.

## 4. Transferring Wallpapers to Your Mobile Device

Once the connection has been established, the **Mobile** button in the upper right corner turns green.

You can now simply click on the **Send to Mobile Device** button on the right-hand side or right-click on any compatible wallpaper and select **Send to Mobile Device**, followed by selecting your device from the list.

#### Scene Wallpapers

Dynamic and interactive wallpapers that are of the **Scene** type will first be optimized for use on mobile phones and to ensure compatibility with mobile hardware. This process may take a short while. You will also be asked which quality option you would like to use, especially for high-resolution wallpapers, we recommend trying the **Balanced** option if you notice performance issues on your mobile device.

<video width="100%" controls autoplay loop>
  <source src="/videos/mobile_transfer.mp4" type="video/mp4">
  브라우저가 비디오 태그를 지원하지 않습니다.
</video>

::: tip
You can also transfer multiple wallpapers at the same time by clicking on multiple wallpapers while holding the CTRL key on your keyboard.
:::

## 모바일 페어링 문제 해결

모바일 기기를 컴퓨터에 페어링할 수 없다면 높은 확률로 방화벽 또는 로컬 네트워크 설정의 문제입니다. 다음 절차를 따라 가능한 문제 원인들을 확인하세요.

* 핸드폰과 컴퓨터가 같은 로컬 네트워크에 연결되어 있는지 확인
* 방화벽이 Wallpaper Engine이 로컬 네트워크와 통신하지 못하도록 막고 있는지 확인
* 네트워크 공유기가 기기들이 서로 통신하지 못하도록 막고 있는지 확인
    * Make sure your router is not blocking network traffic between devices.
    * Turn on **UPnP** (**"Universal Plug and Play"**) in your router settings.
* 기기 간의 통신을 방해할 수 있는 컴퓨터와 모바일 기기의 모든 VPN 또는 프록시 소프트웨어를 비활성화하세요.
* Windows 및 모바일 기기의 Wallpaper Engine이 최신 버전이며 실행 중인지 확인

### 백업 해결책: 직접 배경화면 파일(.mpkg) 불러오기

컴퓨터와 모바일 기기 간의 연결을 고치는 것이 불가능할 때도 직접 모바일 기기로 배경화면을 옮길 수 있습니다. 우선, Wallpaper Engine에서 내보내고자 하는 배경화면을 선택한 후 오른쪽 클릭하고, **모바일 기기로 전송**을 누른 다음 **.mpkg 내보내기**를 클릭하세요.

<video width="100%" controls autoplay loop>
  <source src="/videos/mobile_export.mp4" type="video/mp4">
  브라우저가 비디오 태그를 지원하지 않습니다.
</video>

Wallpaper Engine이 배경화면의 .mpkg 파일을 생성하고 나면 해당 파일을 USB로 모바일 기기에 옮기거나 SD 카드에 파일을 복사하여 모바일 기기로 파일을 옮길 수 있습니다. 또는 모바일 기기의 파일 공유 서비스를 사용하여 메시지 서비스 또는 이메일로 자신에게 보낼 수도 있습니다.(파일 크기에 제약이 있을 수 있습니다)

파일을 모바일 기기로 옮긴 후, 모바일 기기에서 Wallpaper Engine을 실행하고 **파일 불러오기** 기능을 사용하세요. 파일을 넣은 디렉토리에서 .mpkg 파일을 선택하여 앱으로 직접 불러오세요.