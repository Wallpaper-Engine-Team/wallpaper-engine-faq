---
tags:
  - crash
  - close
  - nvidia
  - battleye
---

# Античит BattlEye завершает работу Wallpaper Engine
Если при запуске определенных игр Wallpaper Engine закрывается без уведомлений, скорее всего это результат работы античита BattlEye, который применяется во множестве многопользовательских игр. BattlEye применяется в:

* Fortnite
* PlayerUnknown's Battleground (PUBG)
* Rainbow Six Siege
* Escape from Tarkov
* *И многих других играх...*

На некоторых компьютерах BattlEye закрывает Wallpaper Engine (и другие программы) по ошибке. Это не сбой в работе Wallpaper Engine. BattleEye завершает работу Wallpaper Engine, несмотря на то, что Wallpaper Engine не взаимодействует с играми или программами на вашем компьютере.

## Nvidia: режим низкой задержки
Most users affected by this have the *Ultra-Low Latency Mode* enabled in the Nvidia graphics drivers. Если у вас стоит видеокарта Nvidia, и вы столкнулись с этой проблемой, откройте панель управления Nvidia и отключите режим ультра-низкой задержки, чтобы устранить сбои. Выберите *"Управление параметрами 3D"* -> *"Глобальные параметры"* -> *"Режим низкой задержки"* и переключите на *"Выкл"*. Нажмите на кнопку *"Применить"* и перегрузите компьютер. После этого BattlEye больше не будет по ошибке закрывать Wallpaper Engine.

## Обращение в техподдержку BattlEye
Если описанные выше шаги не решили проблему, связанную с многопользовательской игрой, в которой применяется BattlEye, вам необходимо напрямую связаться с поддержкой BattlEye:

* [Техподдержка BattlEye](https://www.battleye.com/contact/)

On some systems, BattlEye will terminate Wallpaper Engine for no apparent reason and this is not something we can prevent as BattlEye is a rather intrusive anti-cheat which is able to terminate any application on your computer without notifying you. In these cases, the BattlEye developers will need to investigate the issue on your system as its a faulty behavior in their software.