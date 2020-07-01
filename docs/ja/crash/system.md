---
tags:
  - ハードウェア
  - bsod
  - ブルースクリーン
---

# システムクラッシュまたはシステムフリーズ
Wallpaper Engine だけでシステムをクラッシュさせることはできませんし、他のプログラムに影響を及ぼすことはありません。 Wallpaper Engine を起動しているときにシステムクラッシュ、システムフリーズ、ブルースクリーン、その他のプログラムのクラッシュが起きた場合、次のような原因が考えられます：

* Wallpaper Engine が必要とするハードウェアが壊れている。
* Wallpaper Engine が必要とするハードウェアのドライバーにバグがあるか、壊れている。
* Wallpaper Engine が起動しているときに、ドライバーまたは Windows に干渉する侵入的なソフトウェアがインストールされている。

Wallpaper Engine はいかなるドライバーもインストールせず、システムファイルを置き換えることはなく、システムクラッシュまたは他のプログラムのクラッシュにつながる危険な、あるいは疑わしい動作は何も行いません。

Wallpaper Engine にバグがあると、最悪の場合でも Wallpaper Engine そのものがクラッシュするだけで、Wallpaper Engine のバグがシステム全体や他のプログラムのクラッシュを起こすことはありません。 これは不可能なのです。Microsoft は Windows をそのように設計しており、Wallpaper Engine はそれを守っています。

## システムクラッシュの原因を見つける
Wallpaper Engine needs this from your PC: 3D acceleration, video acceleration, audio. You can try to isolate what is wrong with the PC by using different wallpaper types. For example, if you only have issues with 'video' type wallpapers, the issue might be coming from the video decoding hardware on your graphics card. It won't be used by Windows alone and most games don't use it, so you wouldn't experience issues with it in games.

If it's a blue screen you are getting, web-search the error code. There will be a lot of results on the web that may help since it is a global system problem.

Any kind of overlay and recording program can cause problems, that includes Geforce Experience, try removing all of that.

Try the scan tool which will check if any well known and confirmed conflicting application is running: [Click here](/debug/scantool.html).