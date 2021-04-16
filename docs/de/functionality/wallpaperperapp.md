# Auswählen von Hintergründen wenn eine Anwendung gestartet wird

Wallpaper Engine erlaubt es dir einen anderen Hintergrund zu laden, sobald eine bestimmte .exe auf deinem System gestartet wird. Dies kann beispielsweise nützlich sein wenn du weniger ablenkende Hintergründe haben möchtest, wenn du ein Spiel spielst oder kann automatisch einen Audio-Visualisierer starten wenn du deinen Musik-Wiedergabeprogramm startest.

::: tip
Wenn du technische Probleme mit bestimmten Spielen oder Anwendungen hast, kannst du auch Anwendungsregeln um Wallpaper Engine zu deaktivieren, wenn eine bestimmte .exe gestartet wird. Wenn du ein technisches Problem mit einer anderen App lösen willst, schaue dir diesen Artikel an: [Probleme mit bestimmten Anwendungen oder Spielen lösen](/functionality/applicationrules.html)
:::

## Erstellen einer Anwendungsregel

Im Reiter **Leistung** in den Einstellungen von Wallpaper Engine, klicke auf die Schaltfläche **Bearbeiten** in der Sektion über **Anwendungsregeln**. Klicke auf **Neue Regel erstellen** um eine Auswahl an Hintergründen für die .exe deiner Wahl zu erstellen. Gib im Eingabefeld **Anwendungsname** den Namen deiner .exe ein, stelle sicher, dass der Name genau gleich ist, zum Beispiel *musikprogramm.exe*. Setze die **Bedingung** auf **Ist gestartet**. In der Option **Hintergrund-Wiedergabe** kannst du nun eine der folgenden Auswahlmöglichkeiten treffen:

* Hintergrund laden
* Wiedergabeliste laden
* Profil laden

What is important to note here is that **Load wallpaper** and **Load playlist** will both only load one wallpaper and span it across all screens. If you have multiple monitors and want to load independent wallpapers for each screen (or even different playlists on each screen), you need to use the **Load Profile** option. Read the following section for more infos on how to set this up.

### Setting up a multi-monitor profile

**Load Profile** in the application rules refers to mulit-monitor profiles which can be configured in the monitor overview (screen icon in the upper right corner of the interface). A profile is a snapshot of all your currently selected wallpapers and playlists across all your screens. Whenever a profile is loaded, all wallpapers and playlists will be placed according to the profile configuration.

Configure your wallpapers and playlists across all monitors the the way you want them to be, then click on the **Save profile** button in the monitor settings and save the current setup under a name of your choice. Keep in mind that any subsequent changes you make to your setup will not change the profile until you use the **Save profile** button again. You can set up multiple profiles and assign them to multiple apps at once. For example, you may create a **Music**, a **Gaming** and a **Movies** profile and then assign each profile to all .exe files that match these categories.

<video width="100%" controls autplay loop>
  <source src="/videos/apprules.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>