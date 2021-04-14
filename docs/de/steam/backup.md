# Backup des Steam Workshops

Wenn Hintergründe von Steam aus irgendeinem Grund gelöscht werden, so löscht Steam diese ebenfalls von deinem PC. Wallpaper Engine kann dies nicht verhindern, aber wenn dies für dich ein Problem ist, kannst du Backups deiner Hintergründe anlegen.

Es gibt darüber hinaus auch ein Steam-Problem, bei welchem es alle Workshop-Dateien erneut herunterlädt, was sehr nervig sein kann, falls es sich um mehrere Gigabyte an Daten handelt. Das Erstellen von Backups und das Trennen der Hintergründe von Steam kann eine Lösung sein, wenn dies sehr oft auftritt.

# Erstellen eines Backups

Die folgende Anleitung erwartet, dass Steam und Wallpaper Engine im folgenden Verzeichnis installiert wurden: `C:\Programme (x86)\Steam\`. Sollten Steam und / oder Wallpaper Engine woanders installiert sein, stelle sicher, dass du die korrekten Verzeichnisse verwendest.

::: tip
**431960** ist die Steam-ID von Wallpaper Engine, Steam nutzt dieses Verzeichnis für alle Downloads für Wallpaper Engine.
:::

1. Finde den Ordner, in welchem Steam deine Hintergründe speichert, standardmäßig ist dies in `C:\Programme (x86)\Steam\steamapps\workshop\content\431960`
2. Kopiere den Ordner 431960 in das Installationsverzeichnis von Wallpaper Engine: `C:\Programme (x86)\Steam\steamapps\common\wallpaper_engine\projects\431960`
3. **Ändere den Namen** des Ordners `431960` in `backup`, sodass der vollständige Pfad nun wie folgt aussieht: `C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\projects\backup`
4. Das Verzeichnis `backup` enthält nun alle deine zuvor heruntergeladenen Hintergründe, alle jeweils in deren eigenen Unterverzeichnis (die Zahlen repräsentieren dabei die Identifikationsnummer des Hintergrunds im Steam Workshop)
5. Starte Wallpaper Engine nun neu und du solltest alle Hintergründe deines Backups nun sehen. Du kannst nun die doppelten und noch bei Steam abonnierten Hintergründe über die "Entfernen"-Funktion deabonnieren und nur noch deine persönliche Sicherheitskopie des Hintergrunds verwenden

::: warning Lösche das Steam Workshop-Verzeichnis **nicht** von Hand: `C:\Programme (x86)\Steam\steamapps\workshop\content\431960`. Dies kann Steam verwirren und dafür sorgen, dass es alle Hintergründe erneut herunterlädt. Du solltest einfach das Steam Workshop-Abo der Hintergründe entfernen und Steam die doppelten Dateien selbst löschen lassen.
:::