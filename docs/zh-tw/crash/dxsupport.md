# 「不支援 DirectX 10」的當機
上網搜尋顯示卡的確切名稱，確保顯示卡確實支援 DirectX 10。 如果您的顯示卡較舊，硬體層級不支援 DirectX 10，安裝 DirectX 10 後也無法解決此問題。

如果您的顯示卡確實提供支援，卻出現此錯誤，請重新安裝最新的驅動程式 (或舊版但更穩定的驅動程式)。 從個人電腦移除侵入性安全軟體，也許可以防止 Wallpaper Engine 存取顯示卡。

## Duet 顯示器及其他顯示器擴充軟體
Display extension software like Duet Display installs a fake graphics card which is not capable of the same features as a real graphics card. 這也可能是 Wallpaper Engine 顯示此錯誤的原因，因為 Wallpaper Engine 需要使用支援 DirectX 10 的真實顯示卡。 「Duet 顯示卡」等顯示卡擴充軟體與 Wallpaper Engine 並不相容，必須關閉。

