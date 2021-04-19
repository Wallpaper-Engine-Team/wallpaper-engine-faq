---
tags:
  - bildschirmschoner
  - standby
  - ruhemodus
  - energiesparmodus
---

# Standby / Ruhemodus / Bildschirmschoner funktionieren nicht

Windows aktiviert den Ruhemodus nicht, wenn ein Audio-Stream aktiv ist. Du kannst dieses Problem umgehen, indem du die Audio-Ausgabe im Reiter "Allgemein" in den Einstellungen von Wallpaper Engine deaktivierst, um Windows daran zu hindern, den Ruhemodus zu blockieren. Falls du weiterhin Audio-Ausgabe nutzen möchtest, folge den Schritten in dieser Anleitung, um zu erfahren wie dies konfiguriert werden kann.

## Anpassen der Windows-Energie-Einstellungen

Windows aktiviert den Ruhemodus nicht, wenn ein Audio-Stream aktiv ist. Du kannst dieses Problem umgehen, indem du die Audio-Ausgabe im Reiter "Allgemein" in den Einstellungen von Wallpaper Engine deaktivierst oder indem du Windows so einstellst, dass es auch mit aktiver Audio-Wiedergabe den Ruhemodus aktiviert:

1. Gehe zu den Einstellungen "Netzbetrieb und Energiesparen" von Windows, indem du es in die Windows-Suche eintippst.
2. Klicke auf "Zusätzliche Energieeinstellungen"
3. Klicke auf "Energiesparplaneinstellungen" neben dem Plan, welcher ausgewählt ist
4. Klicke auf "Erweiterte Energieeinstellungen ändern"
5. Scrolle nach unten und klappe die Sektion "Multimediaeinstellungen" aus
6. Setze "Bei der Freigabe von Medien" auf "Wechseln in den Modus "Abwesend" zulassen" (für Bildschirmschoner) **oder** "Der Computer kann in den Energiesparmodus wechseln" (für den Ruhemodus)

![Aktiviere "Der Computer kann in den Energiesparmodus wechseln"](./power.gif)

## Probleme mit dem Energiesparmodus beim Nutzen von Hintergründen des Typs "Web"

"Web"-Hintergründe nutzen einen Web-Browser ähnlich wie Google Chrome ("CEF"), welcher den Energiesparmodus unter Umständen blockieren kann. Bis das Problem im Browser behoben wurde, kannst du das Problem mit den folgenden Befehlen in der Windows-Konsole lösen.

1. Suche in Windows nach "cmd.exe", mache dann einen Rechtsklick darauf und wähle "Als Administrator ausführen" aus (dies ist sehr wichtig, ansonsten funktioniert die Lösung nicht!).
2. Tippe den befehl `powercfg /requests` ein, um alle Prozesse zu sehen, welche dein System daran hindern in den Ruhemodus zu gehen (und um so sicherzustellen, dass keine anderen Programme dies verursachen).
3. Tippe die folgenden drei Befehle eine, um deinem System zu erlauben in den Ruhemodus zu gehen, während Wallpaper Engine läuft:

```
powercfg /requestsoverride PROCESS webwallpaper32.exe AWAYMODE DISPLAY SYSTEM
powercfg /requestsoverride PROCESS wallpaper32.exe AWAYMODE DISPLAY SYSTEM
powercfg /requestsoverride PROCESS wallpaper64.exe AWAYMODE DISPLAY SYSTEM
```

Darüber hinaus kannst du noch die Einstellung **Bildschirm aus** im Reiter **Leistung** der Einstellungen von Wallpaper Engine auf *Stoppen (Speicher freigeben)* setzen und deinen Monitor ausschalten wenn du deinen Computer verlässt. Dadurch stopp Wallpaper Engine die Wiedergabe von Hintergründen wenn dein Bildschirm ausgeschaltet ist, wenn du deinen PC gerade nicht benutzt.