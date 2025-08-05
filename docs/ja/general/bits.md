# 32-Bitバージョンと64-Bitバージョン

We recommend using the 64-bit version of Wallpaper Engine since the 64-bit version can handle larger files (more than 2GB). Other than that, the two versions are the same and also deliver the same level of visual fidelity and performance.

In rare cases, switching to the 32-bit version may help you resolve issues with broken 64-bit Windows components, drivers, video codec packs and other app incompatibilities. This may help you fix specific Wallpaper Engine problems without resolving the underlying issue on your system.

::: warning
注意
「Web」タイプの壁紙は、常に32-Bitの実行ファイルで実行されます（webwallpaper32.exe）。 ユーザーインターフェースそのものにも同じことが言えます（ui32.exe）。 64-bitが適用されるのは、「シーン」または「ビデオ」の壁紙タイプを選択したときだけです。
:::

## 32-bitまたは64-bitで、Windowsの起動時にWallpaper Engineを自動起動するように設定する方法

First, completely turn off Wallpaper Engine via the tray icon (right-click on the Wallpaper Engine icon in the Windows tray, then select "Quit"). Do not skip this step, as Steam will otherwise not restart Wallpaper Engine and only bring the already running version to the foreground.

Once Wallpaper Engine is turned off, go to Steam and start either the 32-bit or 64-bit version, depending on which version you want to automatically start. Next, go to the Wallpaper Engine settings and at the top of the "General" tab, enable the automatic startup functionality. 既に有効になっている場合は、完全にオフにしてからもう一度オンにします。 これにより、使用中のバージョンがWindowsと同時に自動的に起動するように設定されます。