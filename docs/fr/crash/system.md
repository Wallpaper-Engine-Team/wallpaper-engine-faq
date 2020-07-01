---
tags:
  - matériel
  - bsod
  - écran bleu
---

# Crash du système / Système gelé
Wallpaper Engine seul ne peut faire planter votre système et il n'affecte pas les autres programmes. Si vous rencontrez des problèmes avec votre système, comme des blocages ou des écrans bleus ou si d'autres programmes se bloquant pendant que Wallpaper Engine est en cours d'exécution, voici des pistes pour identifier le problème :

* Le matériel requis par Wallpaper Engine est défectueux.
* Un pilote du matériel requis par Wallpaper Engine est corrompu ou obsolète.
* Un logiciel intrusif interfère avec les pilotes ou avec Windows pendant que Wallpaper Engine est en cours d'exécution.

Wallpaper Engine n'installe aucun pilote, il ne touche pas aux fichiers système et il n'a aucune incidence sur les plantages du système ou d'un autre programme.

Un problème dans Wallpaper Engine peut entraîner un plantage de Wallpaper Engine dans le pire des cas, mais cela n'a aucune influence sur votre système ou d'autres programmes. C'est ainsi que Microsoft a conçu Windows et Wallpaper Engine obéit à ces règles.

## Trouver le problème
Wallpaper Engine n'a besoin que de ceci pour bien fonctionner : l'accélération 3D, l'accélération vidéo et l'audio. You can try to isolate what is wrong with the PC by using different wallpaper types. For example, if you only have issues with 'video' type wallpapers, the issue might be coming from the video decoding hardware on your graphics card. It won't be used by Windows alone and most games don't use it, so you wouldn't experience issues with it in games.

If it's a blue screen you are getting, web-search the error code. There will be a lot of results on the web that may help since it is a global system problem.

Any kind of overlay and recording program can cause problems, that includes Geforce Experience, try removing all of that.

Try the scan tool which will check if any well known and confirmed conflicting application is running: [Click here](/debug/scantool.html).