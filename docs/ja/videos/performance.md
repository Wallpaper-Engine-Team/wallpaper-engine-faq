# ビデオのフリーズ / コマ落ち / パフォーマンスの悪さ

ハードウェアに、特定のビデオを正しく表示するだけのパワーがない可能性があります。 ビデオ壁紙は普通のビデオプレイヤーとは違います。アイコンとの関係を調整したり、複数画面への拡張の可能性に対応しなければなりません。 また、CPUの使用率を最小に抑えるため、デフォルトでGPUのビデオデコーダを使います。

## バックグラウンドの録画のフック
ReLive、Shadow Play/Nvidia Share、Windows GameDVRなどのアプリケーションで録画するためのドライバの機能による可能性もあります。 それらを無効にし、違いがあるかどうか確認してから、Wallpaper Engineをそれらから除外してみてください。 また、他の録画/オーバーレイプログラムがWallpaper Engineに自身をロードし、レンダリングの速度を低下させていないかどうか確かめてください。

Wallpaper Engineのスキャンツールを使って、既知のレコーディングフックを持つプログラムがインストールされているにもかかわらず、すべてを捉えていない可能性を検知することができます。特に、Nvidia GeForce Experienceに付いてくる普通のレコーディングフックを検知します。

* [Wallpaper Engine スキャンツール](/debug/scantool.html)

## Dynamic Super Resolution (DSR) / GPU Scaling
GPU Scaling/DSRなどのドライバレベルハックも問題を引き起こします。これらを無効にしてみてうまくいくようなら、Wallpaper Engineを指定して無効にします。

## 複数GPUや複数画面を持つシステムで、dwm.exeにおけるパフォーマンスの悪さ
BIOSからデスクトップPCの統合型GPUを有効にし、一方で専用GPUをインストールしていると、パフォーマンスの低下とDWM.exeのCPU使用率の高さを経験することがあります。 可能ならば、統合型GPUは有効にしないようにしてください。 **すべてのモニターを専用グラフィックスカードに接続することが重要です。**同時に両方のGPUを使うと、デスクトップウィンドウマネージャのハードウェアアクセラレーションを破損します。 Nvidia Optimusテクノロジーや類似のテクノロジーがないと、Windowsは強制的に壁紙イメージを一つのGPUから別のGPUにコピーします。これは時間のかかる操作です。 In fact any shared action between your GPUs will suffer from this, it is the same as moving a game window right between both monitors.

This specific issue does not affect hardware built for multi-GPU setups like laptops with Nvidia Optimus or proper Nvidia SLI / AMD Crossfire setups with a hardware bridge.