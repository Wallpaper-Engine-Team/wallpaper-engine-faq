# 업로드가 45%에서 중단되었습니다

Steam은 사실상 업로드 진행률 45%에서 Steam 서버로 파일 업로드를 시작합니다. Wallpaper Engine 콘텐츠를 Steam 창작마당에 게시하려는데 45%에서 중단되면, Steam이 Steam 서버에 파일을 업로드할 수 없다는 뜻입니다. 방화벽이나 바이러스 백신 응용 프로그램이 Steam의 파일 업로드를 차단하는지 확인하세요. 그리고 Steam 네트워크 포트의 공식 가이드도 참조하시기 바랍니다:

* [Steam에 포트 필요](https://support.steampowered.com/kb_article.php?ref=8571-GLVN-8711)

이것은 항상 네트워크 문제로, Steam과 Steam 서버의 온전한 소통을 차단하는 원인을 조사해야 합니다.

Also make sure that your router or a firewall is not blocking the IP address range of the Steam servers, make sure that direct IP connections are possible. Exclude the following IP address range from any block list: `208.64.200.0` - `208.64.203.255`.

::: tip
This network issue can also be caused by a firewall in your network router. Make sure that no network router is blocking Steam's upload. Try If  uploads work through a mobile wi-fi hotspot - in that case your router is likely at fault and not any software on your computer.
:::