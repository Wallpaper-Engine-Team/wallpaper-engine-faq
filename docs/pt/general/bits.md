# Versão de 32 bits e de 64 bits

A versão de 64 bits consegue lidar com ficheiros maiores (com mais de 2GB) mas utilizará sempre mais memória, não importa o tamanho dos ficheiros dos wallpapers. Por exemplo, com um wallpaper de vídeo normal, a versãod e 64 bits poderá usar cerca de 50 MB mais RAM do que a versão de 32 bits, de outra forma não há nada diferente ou melhorado.

::: dica Recomendamos que se fique pela versão de 32 bits, a não ser que tenha wallpapers enormes que bloqueariam a versão de 32 bits. A grande maioria dos utilizadores nunca irá deparar com este problema. :::

Também poderá optar pela versão de 64 bits quando o sistema de vídeo do seu PC tiver erros que só afetam programas de 32 bits. Caso alguma vez tenha instalado pacotes de codecs ou semelhante, eles poderão ter danificado de forma permanente o sistema de vídeo do Windows de 32 bits que o Wallpaper Engine utiliza. Se o sistema de 64 bits não for afetado, poderá tirar partido disso utilizando a versão para 64 bits do Wallpaper Engine e desta forma evitar ter de corrigir o que quer que esteja danificado.

::: aviso Nota Tenha em atenção que os wallpapers do tipo "Web" serão sempre executados com um executável de 32 bits (webwallpaper32.exe). O mesmo se aplica ao próprio interface para o utilizador (ui32.exe). 64 bits só se aplica quando seleciona wallpapers do tipo "Cena" ou "Vídeo". :::

## Como configuro o Wallpaper Engine de forma a iniciar automaticamente a versão de 32 ou 64 bits quando o Windows é iniciado?

First, completely turn off Wallpaper Engine via the tray icon (right-click on the Wallpaper Engine icon in the Windows tray -> "Quit"). This is important as Steam will otherwise not launch Wallpaper Engine and only bring the already running version to the foreground.

Once Wallpaper Engine is turned off, go to Steam and start either the 32 Bit or 64 Bit version, depending on which version you want to automatically start. Go to the Wallpaper Engine settings and at the top of the "General" tab, enable autostart. If it is already enabled, turn it off completely and then turn it back on. This will register the current version as the one which will be automatically started alongside Windows. 