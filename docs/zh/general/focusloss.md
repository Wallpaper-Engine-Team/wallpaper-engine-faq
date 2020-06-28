# 播放列表导致焦点丢失/游戏最小化

如果您的播放列表包含 **Web** 类壁纸，而且您在玩游戏时遇到焦点丢失的问题，请务必在其他应用程序全屏显示时暂停播放列表。 方法是在播放列表设置中**关闭****允许壁纸在暂停时更换**选项，或者从播放列表中删除 Web 壁纸。

Chromium itself - which is the software used to display "Web" type wallpapers - is stealing the focus of your current window when loading a new wallpaper so we cannot fix this issue easily unfortunately.