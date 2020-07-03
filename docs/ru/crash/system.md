---
tags:
  - hardware
  - bsod
  - blue screen
---

# Аварийное завершение работы или зависание системы
Программа Wallpaper Engine не влияет на другие программы и сама по себе не может стать причиной аварийного завершения работы системы. Если во время работы Wallpaper Engine вы сталкиваетесь с аварийными завершениями работы системы или посторонних программ, зависанием, синими экранами, скорее всего причина заключается в одной из следующих проблем:

* Аппаратное обеспечение, которое требуется для работы Wallpaper Engine, неисправно.
* Драйвер для одной из комплектующих аппаратного обеспечения, которое требуется для работы Wallpaper Engine, работает с ошибками или неисправен.
* На компьютере установлены программы, которые агрессивно вмешиваются в системные процессы и нарушают работу драйверов или Windows при запущенной Wallpaper Engine.

Wallpaper Engine не устанавливает никаких драйверов, не заменяет системные файлы и не совершает опасных или сомнительных действий, которые могут привести к аварийному завершению работы системы или посторонних программ.

Ошибка в Wallpaper Engine в самом худшем случае может привести исключительно к сбою работы самой Wallpaper Engine. Ни одна ошибка в Wallpaper Engine не может вызвать аварийное завершение работы всей системы или посторонних программ. Это просто невозможно: архитектура Windows не позволяет подобного, и эти правила распространяются и на Wallpaper Engine.

## Аварийное завершение работы системы: поиск причины
Для работы Wallpaper Engine требуются три элемента — 3D ускорение, ускорение видео и звук. You can try to isolate what is wrong with the PC by using different wallpaper types. For example, if you only have issues with 'video' type wallpapers, the issue might be coming from the video decoding hardware on your graphics card. It won't be used by Windows alone and most games don't use it, so you wouldn't experience issues with it in games.

If it's a blue screen you are getting, web-search the error code. There will be a lot of results on the web that may help since it is a global system problem.

Any kind of overlay and recording program can cause problems, that includes Geforce Experience, try removing all of that.

Try the scan tool which will check if any well known and confirmed conflicting application is running: [Click here](/debug/scantool.html).