# 「不支援 DirectX 10」的當機
上網搜尋顯示卡的確切名稱，確保顯示卡確實支援 DirectX 10。 如果您的顯示卡較舊，硬體層級上不支援 DirectX 10，安裝 DirectX 10 後也無法解決此問題。

如果您的顯示卡確實提供支援，卻出現此錯誤，請重新安裝最新的驅動程式 (或舊版但更穩定的驅動程式)。 從個人電腦移除侵入性安全軟體，也許可以防止 Wallpaper Engine 存取顯示卡。

## Duet Display and other display extension software
Display extension software like DuetDisplay installs a fake graphics card which is not capable of the same features as a real graphics card. This can also be the cause for Wallpaper Engine to show this error as Wallpaper Engine requires a real graphics card with DirectX 10 support. Display extension software like DuetDisplay is not compatible with Wallpaper Engine and must be turned off.

