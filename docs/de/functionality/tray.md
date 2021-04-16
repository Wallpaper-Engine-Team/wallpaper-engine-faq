# Taskleistensymbol von Wallpaper Engine verstecken

Es ist möglich, das Taskleistensymbol von Wallpaper Engine zu verstecken, indem ein Schlüssel in der Windows-Registry angelegt wird, welcher Wallpaper Engine mitteilt, dass es das Symbol neben der Windows-Uhr verstecken soll.

::: warning
Wir empfehlen diesen Schritt nicht, außer du bist dir absolut sicher, dass dich das Symbol in der Taskleiste so viel nervt, dass du ganz bewusst die Nachteile die durch das Verstecken des Taskleistensymbols in Kauf nimmst.
:::

Sobald das Icon in der Taskleiste versteckt ist, kannst du Wallpaper Engine nur noch deaktivieren, indem du es über den Windows Task Manager terminierst. Du bist dann auch nur in der Lage die Benutzeroberfläche über Steam oder durch das Anklicken der .exe-Dateien zu öffnen, was unter Umständen relativ lästig sein und für Verwirrung sorgen kann.

Wenn du trotzdem fortfahren möchtest und das Taskleistensymbol verstecken möchtest, kannst du dies wie folgt tun:

Um den Schlüssel in der Windows-Registry anzulegen, öffne das Startmenü von Windows und tippe "regedit.exe", was den "Registry-Editor" öffnet.

1. Navigiere zum folgenden Verzeichnis in der Registry: *HKEY_CURRENT_USER\Software\WallpaperEngine*
2. Mache einen Rechtsklick auf das *WallpaperEngine* Verzeichnis in der Registry und wähle *Neu* und dann *DWORD-Wert (32 Bit)* aus.
3. Gib dem Eintrag den folgenden Namen: *hideTrayIcon*
4. Stelle sicher, dass der Name korrekt ist, achte darauf dass es keine Leerzeichen gibt und der Name genau wie oben geschrieben wird.
5. Doppelklicke auf den Schlüssel in der Registry und gibt es den Wert: *1*
6. Starte Wallpaper Engine nun neu, die Anwendung sollte nun kein Icon mehr in der Taskleiste neben der Windows-Uhr haben.

Du kannst diesen Prozess Rückgängig machen, indem du *hideTrayIcon* auf *0* setzt oder es vollständig löschst, gefolgt von einem Neustart von Wallpaper Engine. 