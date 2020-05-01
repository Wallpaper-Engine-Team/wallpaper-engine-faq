# Wallpaper Engine autostart

## How do I make Wallpaper Engine launch when my computer boots?

Go to the Wallpaper Engine settings and navigate to the "General" tab. At the top, you can enable autostart.

## What is the difference between "High-Priority" autostart and the normal autostart?

When you select the high-priority option, Wallpaper Engine will register a Windows service. This means that Wallpaper Engine will start before other programs you have configured to autostart. It will not affect the performance of the application in any other way.

The downside to using high-priority autostart is that it can be less reliable, mainly due to the fact that some antivirus will overreact and block Wallpaper Engine from starting in this mode because they misidentify this as malicious behavior.

## I have enabled autostart but it is not working, what can I do?

If you are using high-priority autostart, try to switch to normal autostart by unticking the high-priority option. As explained above, high-priority mode starts quicker but is less reliable for various reasons, mainly because it is sometimes blocked by antivirus software.

If you are using normal-priority autostart and the autostart is not working, try changing the autostart to high-priority and see if the problem goes away.

If neither high-priority or normal-priority autostart work, check the antivirus software you have installed on your system. Some antivirus and firewall applications sometimes block Wallpaper Engine from autostarting. Your antivirus software likely has a "whitelist" feature which allows you to ignore certain folders or applications, make sure to whitelist the wallpaper_engine install directory and all executables in it.

Another rare cause can be that if you (or an application on your system) set the Wallpaper Engine .exe files to be run as admin only then auto start cannot work either, you will need to remove the admin setting and toggle autostart off and back on.

If autostart does not work, the answer virtually always is somehow related to overzealous antivirus software. If you have antivirus or firewall applications installed, please double-check all their settings and security levels. 