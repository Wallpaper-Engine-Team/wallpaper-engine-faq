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

An dieser Stelle ist es wichtig zu beachten, dass **Hintergrund laden** und **Wiedergabeliste laden** beide jeweils nur einen Hintergrund über alle Bildschirme spannen. Falls du mehrere Bildschirme hast und für diese jeweils unabhängige Hintergründe laden möchtest (oder verschiedene Wiedergabelisten auf jedem Bildschirm nutzen willst), musst du die Option **Profil laden** nutzen. Lies dazu die folgende Sektion, um zu erfahren, wie du dies einrichten kannst.

### Aufsetzen eines Profils für mehrere Bildschirme

**Profil laden** in den Anwendungsregeln bezieht sich auf Multi-Monitor-Profile, welche in der Bildschirm-Übersicht erstellt werden können (Bildschirm-Symbol oben rechts in der Benutzeroberfläche). Ein Profil ist eine Aufzeichnung deiner derzeit ausgewählten Hintergründe und Wiedergabelisten auf allen Bildschirmen. Wenn ein Profil geladen wird, so werden alle Hintergründe und Wiedergabelisten geladen, wie sie im Profil hinterlegt worden.

Stelle deine Hintergründe und Wiedergabelisten auf allen Bildschirmen genau so ein, wie du sie haben möchtest, dann klicke auf **Profil speichern** in den Bildschirmeinstellungen und speichere die derzeitige Konfiguration unter einem Namen deiner Wahl. Bitte behalte im Hinterkopf, dass alle folgenden Einstellungen des Profils nicht gespeichert werden, bis du erneut auf **Profil speichern** klickst. Du kannst mehrere Profile erstellen und diese dann verschiedenen Anwendungen zuweisen. Konkret könntest du zum Beispiel ein Profil für **Musik**, ein Profil für **Gaming** und ein Profil für **Filme** anlegen und dann jeweils bestimmten .exe-Dateien zuordnen, die diesen Kategorien entsprechen.

<video width="100%" controls autplay loop>
  <source src="/videos/apprules.mp4" type="video/mp4">
  Dein Browser unterstützt das Video-Tag nicht.
</video>