---
tags:
  - donanım
  - bsod
  - mavi ekran
---

# Sistemin çökmesi / Sistemin Donması
Wallpaper Engine tek başına sisteminizi çökertmez ve diğer programları etkilemez. Wallpaper Engine çalışırken sistem çökmeleri, sistem donmaları, mavi ekranlar veya diğer programlarda çökmeler yaşıyorsanız sebebi şunlardan biri olabilir:

* Wallpaper Engine için gerekli olan donanım bozuk.
* Wallpaper Engine'in bazı donanımlar için ihtiyaç duyduğu bir sürücü hatalı veya bozuk.
* Intrusive software is installed that messes with drivers or Windows while Wallpaper Engine is running.

Wallpaper Engine sürücü kurmaz, sistem dosyalarının yerini almaz ve sistem çökmesine veya başka bir programın çökmesine neden olabilecek tehlikeli veya kuşkulu herhangi bir eylem gerçekleştirmez.

Any bugs in Wallpaper Engine could only lead to a crash of Wallpaper Engine itself in the worst case, but no bug in Wallpaper Engine could crash your entire system or other programs. This is impossible, Microsoft has designed Windows this way and Wallpaper Engine adheres to this.

## Finding the cause of system crashes
Wallpaper Engine needs this from your PC: 3D acceleration, video acceleration, audio. You can try to isolate what is wrong with the PC by using different wallpaper types. For example, if you only have issues with 'video' type wallpapers, the issue might be coming from the video decoding hardware on your graphics card. It won't be used by Windows alone and most games don't use it, so you wouldn't experience issues with it in games.

If it's a blue screen you are getting, web-search the error code. There will be a lot of results on the web that may help since it is a global system problem.

Any kind of overlay and recording program can cause problems, that includes Geforce Experience, try removing all of that.

Try the scan tool which will check if any well known and confirmed conflicting application is running: [Click here](/debug/scantool.html).