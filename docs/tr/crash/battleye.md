---
tags:
  - çökme
  - kapat
  - nvidia
  - battleye
---

# BattlEye hile karşıtı sisteminin Wallpaper Engine'i sonlandırması
Belirli oyunları başlattığınızda Wallpaper Engine sessizce kapanıyorsa bunun sebebi büyük olasılıkla çok oyunculu oyunların kullandığı aBattlEye hile karşıtı sistemdir. BattlEye kullandığı bilinen bazı oyunlar şunlardır:

* Fortnite
* Playerunknown's Battleground (PUBG)
* Rainbow Six Siege
* Escape from Tarkov
* *Ve daha birçoğu...*

BattlEye, bazı sistemlerde Wallpaper Engine'i (ve diğer uygulamaları) yanlışlıkla kapatır. Bu Wallpaper Engine kaynaklı bir hata veya çökme değildir. Wallpaper Engine sisteminizdeki oyunlar veya yazılımlarla etkileşime girmiyor olsa da BattleEye tarafından aktif olarak sonlandırılır.

## Nvidia Düşük Gecikme Modu
Bundan etkilenen çoğu kullanıcı, Nvidia grafik sürücülerindeki *Ultra Düşük Gecikme Modu*'nu etkinleştirmiştir. Eğer Nvidia grafik kartınız varsa ve bu sorunu yaşıyorsanız sorunu düzeltmek için Nvidia Kontrol Panelini açın ve ultra düşük gecikme modunu devre dışı bırakın. *"3D ayarlarını yönet"* -> *"Genel Ayarlar"* -> *"Düşük Gecikme Modu"* seçeneklerine gidin ve bu ayarı *Kapalı* olarak değiştirin. *Uygula*'ya tıklayın ve bilgisayarınızı yeniden başlatın. Sonrasında BattlEye, Wallpaper Engine'i yanlışlıkla sonlandırmayacaktır.

## BattlEye Desteğiyle İletişim
If the steps above do not fix your issues with a BattlEye-powered multiplayer game, you will need to reach out to BattlEye directly:

* [BattlEye Support](https://www.battleye.com/contact/)

On some systems, BattlEye will terminate Wallpaper Engine for no apparent reason and this is not something we can prevent as BattlEye is a rather intrusive anti-cheat which is able to terminate any application on your computer without notifying you. In these cases, the BattlEye developers will need to investigate the issue on your system as its a faulty behavior in their software.