# ビデオのフリーズ / コマ落ち / パフォーマンスの悪さ

ハードウェアに、特定のビデオを正しく表示するだけのパワーがない可能性があります。 ビデオ壁紙は普通のビデオプレイヤーとは違います。アイコンとの関係を調整したり、複数画面への拡張の可能性に対応しなければなりません。 また、CPUの使用率を最小に抑えるため、デフォルトでGPUのビデオデコーダを使います。

## バックグラウンドの録画のフック
ReLive、Shadow Play/Nvidia Share、Windows GameDVRなどのアプリケーションで録画するためのドライバの機能による可能性もあります。 それらを無効にし、違いがあるかどうか確認してから、Wallpaper Engineをそれらから除外してみてください。 また、他の録画/オーバーレイプログラムがWallpaper Engineに自身をロードし、レンダリングの速度を低下させていないかどうか確かめてください。

You can try to use our scan tool to determine if any programs with know recording hooks are installed but it does not catch everything, especially common recording hooks like the ones coming with Nvidia GeForce Experience:

* [Wallpaper Engine Scan Tool](/debug/scantool.html)

## Dynamic Super Resolution (DSR) / GPU Scaling
Driver level hacks like GPU Scaling/DSR could cause issues as well, try disabling them and if that helps, disable them for Wallpaper Engine specifically.

## Bad performance in dwm.exe in systems with multiple GPUs / multiple screens
If you have enabled the integrated GPU on your desktop PC in the BIOS although a dedicated graphics card is installed, you can experience bad performance and high CPU usage of DWM.exe. If possible, do not enable your integrated GPU. **It's very important to plug all your monitors into your dedicated graphics card.** Using both GPUs at the same time will break hardware acceleration of the desktop window manager. Without Nvidia Optimus technology or similar, Windows will be forced to copy the wallpaper image from one GPU to the other - a slow operation. In fact any shared action between your GPUs will suffer from this, it is the same as moving a game window right between both monitors.

This specific issue does not affect hardware built for multi-GPU setups like laptops with Nvidia Optimus or proper Nvidia SLI / AMD Crossfire setups with a hardware bridge.