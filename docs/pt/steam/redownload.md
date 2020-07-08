---
tags:
  - download
  - re-download
  - deleted
  - deletes
---

# Steam volta a transferir wallpapers

A cache de transferências do Steam foi quebrada e agora o Steam volta a transferir todos os ficheiros (por razão nenhuma ou o Steam bloqueia em vez de fechar corretamente). Isto não acontece devido ao Wallpaper Engine pelo que não pode ser corrigido no Wallpaper Engine. Todas as aplicações da Workshop no Steam podem sofrer deste mesmo erro do Steam. Se tem este problema frequentemente, há soluções indiretas:

## Corrigir o Steam automaticamente
Criámos um corretor automático para o Steam que pode usar para tentar fazer o Steam impedir que este problema continue a ocorrer (esperamos nós)! Siga estas instruções:
* Desative o Steam
* Vá ao diretório de instalação `wallpaper_engine`
  * Local predefinido: `C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine`
* Execute `wallpaper_engine\bin\steamredownloadfixer32.exe`
  * Se a ferramenta se der alguma mensagem de erro, envie-nos um email e investigaremos se é possível melhorá-la
* Reinicie o Steam e verifique os ficheiros do Wallpaper Engine:
  * [Verificar os ficheiros do Wallpaper Engine](https://support.steampowered.com/kb_article.php?ref=2037-QEUH-3335)

Infelizmente, terá de repetir isto sempre que a cache de transferências do Steam se avariar. Please keep in mind that we have not built Steam and cannot fix Steam ourselves.

## Reinstall Steam

The most reliable long-term fix for most users affected by this Steam bug regularly appears to be to reinstall Steam as some Steam files may simply be broken on your system. Try to reinstall Steam completely:

1. Uninstall Wallpaper Engine through Steam.
2. Uninstall Steam itself, make sure to follow the official guide:
  * [Uninstall Steam](https://support.steampowered.com/kb_article.php?ref=9609-OBMP-2526)
  * Specifically check the Manually Removing Steam section in the Steam Support article above and make a backup of your *steamapps* directory as described there to ensure you will not have to redownload all your games.

## Use local backups as a workaround

If the issue continues happening to you, you can also make local backups of all wallpapers and then unsubscribe from all wallpapers. Steam will not redownload wallpapers that you are not subscribed to, so the work-around is to simply only rely on local backups. You can find our guide on how to create backups here:

* [Using wallpaper backups](/steam/backup)

Afterwards, simply unsubscribe from all wallpapers. Make sure to not delete any files manually, Steam must delete the wallpaper files itself or it will attempt to redownload the wallpapers again just to delete the files on its own.