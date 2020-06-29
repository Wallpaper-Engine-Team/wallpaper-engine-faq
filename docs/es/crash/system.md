---
tags:
  - hardware
  - bsod
  - pantalla azul
---

# Fallo del sistema
Wallpaper Engine no puede causar que falle el sistema completo, pues no afecta a otros programas. Si el sistema sufre algún fallo, pantalla azul u otros programas se cierran mientras Wallpaper Engine está activo, es probable que sea por alguno de estos motivos:

* El hardware que necesita Wallpaper Engine está dañado.
* Alguno de los controladores que necesita Wallpaper Engine funciona mal o está dañado.
* Tiene instalado algún software intrusivo que afecta a los controladores o a Windows mientras está activo Wallpaper Engine.

Wallpaper Engine no instala ningún controlador, no sustituye archivos del sistema ni hace nada peligroso o cuestionable que podría dar lugar a un fallo del sistema o a que se cierre otro programa.

Cualquier fallo que tenga Wallpaper Engine solo podría causar que se cerrara el propio programa en el peor de los casos, pero es imposible que haga que falle su sistema u otros programas. This is impossible, Microsoft has designed Windows this way and Wallpaper Engine adheres to this.

## Finding the cause of system crashes
Wallpaper Engine needs this from your PC: 3D acceleration, video acceleration, audio. You can try to isolate what is wrong with the PC by using different wallpaper types. For example, if you only have issues with 'video' type wallpapers, the issue might be coming from the video decoding hardware on your graphics card. It won't be used by Windows alone and most games don't use it, so you wouldn't experience issues with it in games.

If it's a blue screen you are getting, web-search the error code. There will be a lot of results on the web that may help since it is a global system problem.

Any kind of overlay and recording program can cause problems, that includes Geforce Experience, try removing all of that.

Try the scan tool which will check if any well known and confirmed conflicting application is running: [Click here](/debug/scantool.html).