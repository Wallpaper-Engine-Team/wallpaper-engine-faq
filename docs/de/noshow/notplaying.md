---
tags:
  - activemovie window
  - active movie
  - schwarz
---

# Videos sind schwarz oder spielen nicht richtig ab

Wenn du ein schwarzes Bild oder andere Probleme mit der Wiedergabe von Hintergründen des Typs *Video* hast, so ist dies *immer* ein Problem mit deinen Grafikkartentreibern oder fehlerhaften Video-Codecs. Versuche die folgenden Schritte in der vorgegebenen Reihenfolge. Wenn du diese Anleitung von oben nach unten befolgst, sollte dein Problem gelöst werden:

::: warning
Bitte beachte Dieser Artikel handelt über den Fall, in dem **Hintergründe** von Wallpaper Engine schwarz sind oder nicht richtig abgespielt werden. Wenn die **Benutzeroberfläche von Wallpaper Engine schwarz ist**, musst du den folgenden Artikel lesen: [Benutzeroberfläche von Wallpaper Engine ist schwarz oder weiß](/interface/broken.html).
:::

## Saubere Neuinstallations der Grafikkartentreiber

Für die meisten Betroffenen werden Probleme mit Video-Hintergründen durch eine saubere Neuinstallations der Grafikkartentreiber gelöst. Dies betrifft beispielsweise Fälle wo der Hintergrund schwarz ist oder in einem separaten Fenster angezeigt wird (mit dem Titel **"ActiveMovie Window"**).

1. Lade die neuesten Grafikkartentreiber für deine Grafikkarte herunter (oder für alle Grafikkarten, wenn du zum Beispiel eine von Nvidia und eine von Intel hast):

* [Nvidia GeForce](https://www.nvidia.com/Download/index.aspx?lang=de-de)
* [AMD Radeon](https://www.amd.com/de/support)
* [Intel Graphics](https://downloadcenter.intel.com/product/80939/Graphics-Drivers)

2. Deinstalliere deine derzeitigen Grafikkartentreiber vollständige und lösche alle bestehenden Einstellungen wenn du danach gefragt wirst. Nvidia-Treiber haben beispielsweise auch eine Option zur "sauberen Neuinstallation" welche dies auch beinhaltet.

Du kannst außerdem [Display Driver Uninstaller ("DDU")](https://www.guru3d.com/files-details/display-driver-uninstaller-download.html) verwenden, wenn du dir unsicher bist, wie du dies am besten machen kannst.

3. Installiere die von dir in Schritt 1 heruntergeladenen Treiber.
4. Starte deinen PC neu und schaue ob es nun funktioniert.

::: tip
Es ist wichtig dass du eine saubere Neuinstallation machst - dies bedeutet, dass du deine derzeitigen Grafikkartentreiber und Treibereinstellungen vollständig löschst bevor du deine neuen Treiber installierst, ansonsten funktioniert der hier beschriebene Lösungsansatz nicht.
:::

## Codec Tweak Tool

Wenn es immer noch nicht funktioniert nach einer sauberen Neuinstallation der Grafikkartentreiber, versuche deine Video-Codecs zurückzusetzen:

* Lade das Codec Tweak Tool herunter: [Klicke hier](https://www.codecguide.com/download_other.htm)
* Stelle sicher, dass alle Optionen im Menü "Media Foundation" **nicht** aktiviert sind, dann wende die Einstellungen an:

![Deaktiviere alle Optionen in den Media Foundationen-Einstellungen](./codectweak.gif)

* Starte den PC neu und versuche die betroffenen Hintergründe erneut zu benutzen.

## Weitere Video-Codecs

Wenn die jeweiligen Video-Hintergründe immer noch nicht funktionieren nach den vorherigen Schritten, lade LAV herunter und nutze DirectShow, wie im folgenden Artikel beschrieben wird:

* [LAV und DirectShow nutzen](/videos/lav.html).
