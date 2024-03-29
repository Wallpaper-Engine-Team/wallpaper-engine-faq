# 업로드가 45%에서 중단되었습니다

Steam은 사실상 업로드 진행률 45%에서 Steam 서버로 파일 업로드를 시작합니다. Wallpaper Engine 콘텐츠를 Steam 창작마당에 게시하려는데 45%에서 중단되면, Steam이 Steam 서버에 파일을 업로드할 수 없다는 뜻입니다. 방화벽이나 바이러스 백신 응용 프로그램이 Steam의 파일 업로드를 차단하는지 확인하세요. 그리고 Steam 네트워크 포트의 공식 가이드도 참조하시기 바랍니다:

* [Steam에 포트 필요](https://support.steampowered.com/kb_article.php?ref=8571-GLVN-8711)

이것은 항상 네트워크 문제로, Steam과 Steam 서버의 온전한 소통을 차단하는 원인을 조사해야 합니다.

또한 라우터 또는 방화벽이 Steam 서버의 IP 주소 범위를 차단하고 있지 않으며, IP 직접 연결이 가능한지 확인하세요. 모든 차단 목록에서 `208.64.200.0`~`208.64.203.255`의 IP 주소 범위를 제외하세요.

::: tip
이 네트워크 문제는 네트워크 라우터의 방화벽 때문에 발생할 수도 있습니다. 네트워크 라우터가 Steam의 업로드를 차단하는지 확인하세요. 모바일 와이파이 핫스팟을 통해 업로드가 가능한 경우, 컴퓨터의 소프트웨어가 아니라 라우터의 문제입니다.
:::