# Leistungsprobleme / Niedrige FPS in einigen Spielen oder Anwendungen

Standardmäßig pausiert Wallpaper Engine sich selbst, wenn du ein Spiel startest. Du kannst dieses Verhalten im Reiter **Leistung** in den Einstellungen von Wallpaper Engine konfigurieren.

Wenn du Leistungsprobleme in einzelnen Spielen oder Anwendungen hast, kannst du diese Verhalten weiter anpassen. Normalerweise liegen Leistungsprobleme daran, dass dein System kein RAM oder Video RAM (der Speicher deiner Grafikkarte) mehr hat. Du kannst Wallpaper Engine so einstellen, dass es jeglichen Speicher frei gibt, wenn du ein Spiel startest. Ändere dazu die Einstellung **Andere Anwendung vollbild** auf **Stoppen (Speicher freigeben)** im Reiter **Leistung** in den Einstellungen von Wallpaper Engine.

## Anwendungsregeln

Wenn du ein Problem nur mit einem bestimmten Spiel oder einer bestimmten Anwendung hast, kannst du auch Sonderregeln für diese Fälle anlegen, indem du eine **Anwendungsregel** erstellst:

1. Öffne den Reiter **Leistung** in den Einstellungen von Wallpaper Engine
2. Klicke auf die Schaltfläche **Bearbeiten** neben **Anwendungsregeln**
3. Im Fenster was dann angezeigt wird, klicke auf **Neue Regel erstellen**
4. Erstelle eine neue Regel mit den folgenden Einstellungen:
    * **Anwendungsname:** "game.exe" *(ersetze dies mit der tatsächlichen .exe des jeweiligen Spiels)*
    * **Bedingung:** "Ist gestartet"
    * **Hintergrund-Wiedergabe:** "Stopp (Speicher freigeben)"
5. Bestätige dies mit einem Klick auf **Erstellen**

Wallpaper Engine entfernt nun alle Hintergründe aus dem Arbeitsspeicher, wenn die von dir konfigurierte *.exe* gestartet wird.

## Konflikte mit Bildschirmaufnahme-Programmen oder Overlays

Wenn du Anwendungen zum Streamen von Spielen, zum Aufnehmen von Spielen oder Software mit sogenannten In-Game-Overlays verwendest, stelle sicher, dass diese nicht fäschlicherweise Wallpaper Engine im Hintergrund aufnehmen. Dies kann auch auftreten, wenn du die Funktionen zum Streamen von Spielen deiner Grafikkartentreiber verwendest (beispielsweise Nvidia ShadowPlay, Nvidia Share oder AMD ReLive).
