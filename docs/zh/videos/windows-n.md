# Windows N：mfplat.dll 丢失

Windows N 不具备媒体功能！ 您需要针对特定的 Windows 版本和内部版本号，安装正确的媒体功能包：

#### 最新版本的 Windows 10
在最新版本的 Windows 10 上，您可以通过 Windows 设置安装媒体功能包。 打开 **Windows 设置**，然后导航到以下位置。

*应用程序 > 应用程序和功能 > 可选功能 > 添加功能*

此时将显示可选功能列表，在可用的可选功能列表中搜索**媒体功能包**，安装该媒体功能包，然后重新启动计算机。 如需其他帮助和更多相关信息，请访问微软网站：[适用于 Windows 10 N 的媒体功能包](https://support.microsoft.com/en-us/help/4516397/media-feature-pack-for-windows-10-n-november-2019)。

#### 过期版本的 Windows 10（2019 年 5 月更新或更旧版本）：
Older versions of Windows 10 require you to manually download the Media Feature Pack for your exact version of Windows 10:
  * [媒体功能包下载](https://www.microsoft.com/en-us/software-download/mediafeaturepack)（Microsoft 仅提供英语版页面）

#### Windows 7：
  * Windows 7 is not supported by Microsoft anymore. You need update **KB968211** to add media features but Microsoft has removed the download page for it. Try upgrading to Windows 10 or reinstall a normal Windows 7 with media features.

**确保安装 x64 和 x86 版本。**

如果仍然显示相同的错误，则说明**您安装了错误的版本**，请尝试安装正确的版本，并重新启动 PC。 如果没有任何作用，而且该文件依然缺失，那么您的系统文件可能存在缺陷，请尝试将系统还原到较早的状态，或重新安装 Windows。

:::warning
请注意 每当 Microsoft 发布 Windows 10 的重大更新时，您都必须再次安装媒体功能包。 如果您不希望这样做，请考虑切换到普通版 Windows，因为其他版本始终附带这些功能！

**Windows N 的全部意义就在于其不具备媒体功能。 因此，如果这不是您想要的，您就不应使用 Windows N。**
:::