# 모바일 기기와 Windows 페어링하기

자신의 모바일 기기와 컴퓨터를 무선으로 페어링하여 자신의 배경화면을 모바일 기기의 Wallpaper Engine 앱으로 전송할 수 있습니다. Steam만이 Steam 창작마당에서 배경화면 파일을 다운로드할 수 있기 때문에, Android 앱은 배경화면을 직접 다운로드할 수 없습니다.

::: tip
Should you run into any problems with pairing your mobile devices, you can still import wallpapers by manually exporting them as **.mpkg** files that the Wallpaper Engine mobile app uses.

See the **Backup Solution** section at the bottom of this page to learn how to create **.mpkg** and how to import them on your mobile device.
:::

### Windows에서 Wallpaper Engine 준비

In the **Windows** app, click on the **Mobile** button in the upper right corner of the user interface. The mobile device overview will open up. At the bottom device overview, click on the **Connect new Device** button. Wallpaper Engine will show you a 4-digit PIN that you can use to pair one mobile device.

![Mobile PIN](/img/faq/mobile_pin.gif)

### 모바일 기기 연결

In the Wallpaper Engine mobile companion app, click on **Add** in the lower right corner, followed by clicking on **Pair with Computer**. The Wallpaper Engine app will search your local network for running instances of Wallpaper Engine for Windows. Your Windows computer should appear after a few seconds, allowing you to connect to it by clicking on it. If you are connecting for the first time, you will be asked to enter the 4-digit PIN (see Windows section above). The PIN is an additional security measure to ensure unauthorized users cannot connect to your computer without your knowledge.

Once you have entered your PIN, the status bar in the mobile app turns green and shows which computer its connected to. On the Windows app, the **Mobile** button is also colored green now to indicate that a mobile connection is active.

![Mobile PIN](/img/faq/mobile_pair.gif)

## 모바일 페어링 문제 해결

If you cannot pair your mobile device to your computer, a firewall or local network setting is very likely at fault. Check the following possible problem sources:

* 핸드폰과 컴퓨터가 같은 로컬 네트워크에 연결되어 있는지 확인
* 방화벽이 Wallpaper Engine이 로컬 네트워크와 통신하지 못하도록 막고 있는지 확인
* Ensure your network router is not blocking your devices from communicating with each other.
    * Make sure your router is not blocking network traffic between devices.
    * Turn on **UPnP** (**"Universal Plug and Play"**) in your router settings.
* 기기 간의 통신을 방해할 수 있는 컴퓨터와 모바일 기기의 모든 VPN 또는 프록시 소프트웨어를 비활성화하세요.
* Windows 및 모바일 기기의 Wallpaper Engine이 최신 버전이며 실행 중인지 확인

## 백업 해결책: 직접 배경화면 파일(.mpkg) 불러오기

Should you be able unable to fix the connection between your computer and your mobile device, you can still manually transfer your wallpapers onto your mobile device. First, select the wallpapers you want to export in Wallpaper Engine, then right-click on them and select **Send to Mobile Device**, followed by clicking on **Export .mpkg**.

Once Wallpaper Engine has created the .mpkg files for your wallpapers, you can either transfer them to your mobile device by moving the files onto your mobile device via USB or by copying the files onto an SD card. Alternatively you can also use any file sharing service on your mobile device or send them to yourself via a messaging service or even via email (if the file size is not a problem).

Once the files are on your mobile device, open up Wallpaper Engine on your mobile device and use the **Import File** functionality to directly import the .mpkg files into the app by selecting them from the directory that you have placed them in.