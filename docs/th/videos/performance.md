# วิดีโอค้าง / กระตุก / ประสิทธิภาพการทำงานไม่ดี

สาเหตุของปัญหานี้อาจเป็นเพราะฮาร์ดแวร์ไม่มีประสิทธิภาพเพียงพอที่จะแสดงบางวิดีโออย่างถูกต้อง วิดีโอวอลเปเปอร์กับเครื่องเล่นวิดีโอมาตรฐานนั้นไม่สามารถนำมาเปรียบเทียบกันได้ วิดีโอวอลเปเปอร์จะต้องมีไอคอนและอาจขยายไปหลายหน้าจอ นอกจากนี้ยังใช้ตัวถอดรหัสวิดีโอของ GPU ตามค่าเริ่มต้นเพื่อลดการใช้งาน CPU ให้น้อยที่สุด

## Background recording hooks
It could also come from any kind of driver features to record applications like ReLive, Shadow Play/Nvidia Share or Windows GameDVR. Try disabling them and see if it makes a difference, then exclude Wallpaper Engine from them. Also make sure no other recording/overlay programs load themselves into Wallpaper Engine and slow down rendering.

You can try to use our scan tool to determine if any programs with know recording hooks are installed but it does not catch everything, especially common recording hooks like the ones coming with Nvidia GeForce Experience:

* [เครื่องมือสแกน Wallpaper Engine](/debug/scantool.html)

## Dynamic Super Resolution (DSR) / GPU Scaling
Driver level hacks like GPU Scaling/DSR could cause issues as well, try disabling them and if that helps, disable them for Wallpaper Engine specifically.

## Bad performance in dwm.exe in systems with multiple GPUs / multiple screens
If you have enabled the integrated GPU on your desktop PC in the BIOS although a dedicated graphics card is installed, you can experience bad performance and high CPU usage of DWM.exe. If possible, do not enable your integrated GPU. **It's very important to plug all your monitors into your dedicated graphics card.** Using both GPUs at the same time will break hardware acceleration of the desktop window manager. Without Nvidia Optimus technology or similar, Windows will be forced to copy the wallpaper image from one GPU to the other - a slow operation. In fact any shared action between your GPUs will suffer from this, it is the same as moving a game window right between both monitors.

This specific issue does not affect hardware built for multi-GPU setups like laptops with Nvidia Optimus or proper Nvidia SLI / AMD Crossfire setups with a hardware bridge.