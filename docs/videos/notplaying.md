# Black screen / videos not playing 

Black screens and other issues with wallpapers of the type "Video" are *always* caused by either faulty graphics card drivers or faulty video codecs. Try the following steps in the exact order. This solves the problem for 99% of users:

## Clean graphics card driver re-installation

For a very large number of people, a clean re-installation of the graphics card drivers, video playback issues including black screens are fixed. **It's important that the old drivers are uninstalled first.**

1. Download the latest graphics card drivers for your graphics card (or all of them if you have two, for example Nvidia and Intel):

* [Nvidia GeForce](https://www.nvidia.com/Download/index.aspx)
* [AMD Radeon](https://www.amd.com/support)
* [Intel Graphics](https://downloadcenter.intel.com/product/80939/Graphics-Drivers)

2. Uninstall your current graphics card drivers completely and delete all existing settings if asked. Nvidia drivers have a checkbox which says "Perform clean re-installation" which also works.

You can also use [Display Driver Uninstaller ("DDU")](https://www.guru3d.com/files-details/display-driver-uninstaller-download.html) if you are unsure on how to do that.

[b][u]Again: It's very important that you do a clean re-installation - this means your current graphics card drivers and driver settings have to be completely deleted before you install the new drivers, otherwise it will not work.[/u][/b]

3. Install the drivers you have just downloaded in step 1.
4. Restart your PC again, see if it works now.

## Codec Tweak Tool

5. If it does not work after this:

* Download the Codec Tweak Tool: [Click here](https://www.codecguide.com/download_other.htm)
* Apply these settings: http://i.imgur.com/KcQcmTX.png
* Restart the PC and try the affected wallpapers again.

## Additional video codecs

6. If it still does not work after this, download LAV and use DirectShow as described in this guide: [Click here](/videos/lav.html).