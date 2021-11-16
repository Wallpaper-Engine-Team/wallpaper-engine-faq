# 預覽圖像/搜尋結果未顯示

如果您無法在 Wallpaper Engine 中看見已解除安裝的桌布出現預覽圖像，通常表示防火牆或安全軟體阻擋 Wallpaper Engine 存取 Steam 圖像伺服器。

## 測試與 Steam 圖像伺服器的連線

首先，測試是否可以從電腦連線至 Steam 圖像伺服器。 在網頁瀏覽器中開啟以下連結，以測試連線：

* [**點選此處以測試 STEAM 圖像伺服器**](https://steamuserimages-a.akamaihd.net/ugc/1796366854776537259/C541D485E7156010D92284B082D13A2377FD1F8F/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false)

您點選上方連結時，應該會看到一條訊息顯示 **OK**，並顯示**綠色的勾勾**。

### 我看得到 OK 訊息

如果你點選上方測試連結時看見 **OK** 訊息：

* 這絕對代表只有 Wallpaper Engine 受到電腦上某種安全軟體阻擋。 可設定任何防毒應用程式、防火牆或網路加速器應用程式，忽略 Wallpaper Engine，尤其是屬於 Wallpaper Engine 的 **ui32.exe** 處理序。

### 我看不到 OK 訊息

如果你點選上方測試連結時看**不**見 **OK** 訊息，這代表整個電腦、甚至整個網路都無法從 Steam 圖像伺服器下載圖像。 原因可能是：

* 防毒應用程式、防火牆或網路加速器應用程式徹底阻擋 Steam 圖像伺服器連線至電腦上所有應用程式。
* 網路路由器不知為何設定錯誤。 Take a closer look at the firewall settings of your router and other advanced router settings that may play a role here.
    * You can easily test if your router is at fault by connecting your computer to a wifi hotspot through your smartphone. If you start seeing preview images while connected to a mobile wifi hotspot, the problem is definitely in your network router or in the network of your internet service provider.
    * Your internet service provider may also be blocking the Steam image servers or there is a temporary connection issue. This is very rare but it can happen, try again later.