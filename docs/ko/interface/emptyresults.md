# 이미지 미리보기 / 검색 결과가 표시되지 않습니다

Wallpaper Engine에서 설치하지 않은 배경화면의 미리보기 이미지를 볼 수 없는 경우, 방화벽 또는 보안 소프트웨어가 Wallpaper Engine의 Steam 이미지 서버 접근을 차단하고 있을 가능성이 큽니다.

## Steam 이미지 서버와의 연결을 확인하세요

우선 자신의 컴퓨터에서 Steam 이미지 서버로 연결할 수 있는지 확인하세요. 다음 링크를 웹 브라우저에서 열어 연결을 확인하세요:

* [**여기를 눌러 Steam 이미지 서버를 테스트하세요**](https://steamuserimages-a.akamaihd.net/ugc/1796366854776537259/C541D485E7156010D92284B082D13A2377FD1F8F/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false)

위의 링크를 클릭했을 때 **OK**라는 메시지와 **초록색 체크 표시**가 보여야 합니다.

### OK 메시지가 보입니다

위의 테스트 링크를 클릭했을 때 **OK** 메시지가 보일 경우:

* This definitely means that only Wallpaper Engine is being blocked by some security software on your computer. Configure any antivirus, firewall or network accelerator app to ignore Wallpaper Engine, especially the **ui32.exe** process that belongs to Wallpaper Engine.

### I can NOT see the OK message

If you did **not** see the **OK** message when clicking the test link above, this means your entire computer or even your entire network is not able to load images from the Steam image servers. Reasons for this can be:

* An antivirus, firewall or network accelerator app is entirely blocking the connection to the Steam image servers for all applications on your computer.
* Your network router is somehow misconfigured. Take a closer look at the firewall settings of your router and other advanced router settings that may play a role here.
    * You can easily test if your router is at fault by connecting your computer to a wifi hotspot through your smartphone. If you start seeing preview images while connected to a mobile wifi hotspot, the problem is definitely in your network router or in the network of your internet service provider.
    * Your internet service provider may also be blocking the Steam image servers or there is a temporary connection issue. This is very rare but it can happen, try again later.