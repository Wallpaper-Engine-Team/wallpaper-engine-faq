# Video donuyor / takılıyor / kötü performans

Donanımınız videoyu düzgün görüntüleyecek kadar güçlü olmayabilir. Video duvar kâğıtları, standart video oynatıcılarla karşılaştırılamaz. Simgelerle oluşturulmaları ve uzayıp birden fazla ekranı doldurabilmeleri gerekir. Ayrıca CPU kullanımını en aza indirmek için varsayılan olarak GPU'nuzun video şifre çözücüsünü kullanır.

## Arka plan kaydı kancaları
ReLive, Shadow Play/Nvidia Share ya da Windows GameDVR gibi uygulamaları kaydetmek için gerekli sürücü özelliklerinden gelebilir. Devre dışı bırakıp bir fark olacak mı diye bakın, ardından Wallpaper Engine'i programlardan hariç tutun. Also make sure no other recording/overlay programs load themselves into Wallpaper Engine and slow down rendering.

You can try to use our scan tool to determine if any programs with know recording hooks are installed but it does not catch everything, especially common recording hooks like the ones coming with Nvidia GeForce Experience:

* [Wallpaper Engine Scan Tool](/debug/scantool.html)

## Dynamic Super Resolution (DSR) / GPU Scaling
Driver level hacks like GPU Scaling/DSR could cause issues as well, try disabling them and if that helps, disable them for Wallpaper Engine specifically.

## Bad performance in dwm.exe in systems with multiple GPUs / multiple screens
If you have enabled the integrated GPU on your desktop PC in the BIOS although a dedicated graphics card is installed, you can experience bad performance and high CPU usage of DWM.exe. If possible, do not enable your integrated GPU. **It's very important to plug all your monitors into your dedicated graphics card.** Using both GPUs at the same time will break hardware acceleration of the desktop window manager. Without Nvidia Optimus technology or similar, Windows will be forced to copy the wallpaper image from one GPU to the other - a slow operation. In fact any shared action between your GPUs will suffer from this, it is the same as moving a game window right between both monitors.

This specific issue does not affect hardware built for multi-GPU setups like laptops with Nvidia Optimus or proper Nvidia SLI / AMD Crossfire setups with a hardware bridge.