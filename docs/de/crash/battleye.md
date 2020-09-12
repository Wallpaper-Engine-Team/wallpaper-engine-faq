---
tags:
  - crash
  - absturz
  - nvidia
  - battleye
---

# BattlEye Anti-Cheat schließt Wallpaper Engine
Wenn Wallpaper Engine beim Start von ausgewählten Spielen geschlossen wird, ist dies höchstwahrscheinlich auf den BattlEye Anti-Cheat zurückzuführen, welcher von zahlreichen Multiplayer-Spielen verwendet wird. Bekannte Spiele, welche BattlEye nutzen, sind:

* Fortnite
* Playerunknown's Battleground (PUBG)
* Rainbow Six Siege
* Escape from Tarkov
* *Und weitere...*

BattlEye schließt Wallpaper Engine (und andere Anwendungen) fälschlicherweise auf einigen System, es handelt sich dabei um keinen Bug oder Crash in Wallpaper Engine selbst. Wallpaper Engine wird von BattlEye geschlossen, auch wenn Wallpaper Engine unter keinen Umständen mit Spielen oder anderer Software auf deinem System interagiert.

## Nvidia-Modus für niedrige Latenz
Die meisten Nutzer, welche von diesem Problem betroffen sind, haben den *Modus für niedrige Latenz* in den Nvidia-Grafikkartentreibern aktiviert. Falls du eine Nvidia-Grafikkarte besitzt und von diesem Problem betroffen bist, öffne die Nvidia-Treibereinstellungen und deaktiviere den Modus für niedrige Latenz, um dieses Problem zu lösen. Wähle *"3D-Einstellungen anpassen"* -> *"Globale Einstellungen"* -> *"Modus für niedrige Latenz"* und setze diese Einstellung auf *Aus*. Klicke auf *Anwenden* und starte deinen Computer neu. Daraufhin wird BattlEye Wallpaper Engine nicht mehr fälschlicherweise terminieren.

## Kontakt mit dem BattlEye-Kundenservice aufnehmen
Falls die oben beschriebenen Schritte deine Probleme mit BattlEye-gestützten Multiplayer-Spielen nicht behebt, musst du selbst Kontakt mit BattlEye aufnehmen:

* [BattlEye-Kundenservice](https://www.battleye.com/contact/)

Auf einigen Systemen terminiert BattlEye Wallpaper Engine ohne einen ersichtlichen Grund. Dies ist nichts was wir verhindern können, da BattlEye ein Anti-Cheat-Programm ist, welches sehr tief in Windows eingreift und alle Anwendungen auf deinem Computer beenden kann, ohne dich darüber in Kenntnis zu setzen. In these cases, the BattlEye developers will need to investigate the issue on your system as its a faulty behavior in their software.