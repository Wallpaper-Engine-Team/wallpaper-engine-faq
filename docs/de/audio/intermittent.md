# Ton / Sounds geht wiederholt an und aus

Windows unterscheidet nicht zwischen Tonaufnahmen und Tonwiedergaben, daher signalisiert es Wallpaper Engine, dass ein anderes Programm derzeit Ton wiedergibt, während es in Wirklichkeit den Ton deines Computers aufnimmt.

Überprüfe den Reiter "Leistung" in den Einstellungen von Wallpaper Engine. Falls du die Option *"Andere Anwendung spielt Ton"* auf *"Stumm schalten"* gestellt hast und du feststellst, dass der Ton von Wallpaper Engine an und aus geht, dann ist es wahrscheinlich, dass eine Aufnahmeprogramm deinen Bildschirm und Ton im Hintergrund aufnimmt.

Um dieses Problem zu lösen, kannst du eines dieser drei Dinge tun:

* Stelle das Aufnahmeprogramm auf deinem Desktop aus oder konfiguriere es so, dass es Wallpaper Engine nicht fälschlicherweise aufnimmt.
    * Für viele Anwender ist der Ursprung des Problems **Nvidia Share / Nvidia GameStream / Nvidia ShadowPlay**, welche in den Einstellungen von **Nvidia GeForce Experience** ausgeschaltet werden können. Für AMD-Grafikkartennutzer kann **AMD ReLive** gleichermaßen für diese Probleme verantwortlich seine, welche Teil der AMD-Grafikkartentreiber sind. Überprüfe diese Anwendungen als erstes, wenn du dir unsicher bist, was möglicherweise deinen Desktop aufnimmt.
    * Falls du gar nicht weißt, welche Anwendung hierfür verantwortlich ist, überprüfe den Windows Soundmixer und schaue, welche Anwendungen derzeit auf die Audioausgabe zugreifen, dies kann hilfreich sein um schnell die richtige Anwendung ausfindig zu machen. Alternativ kannst du auch so viele Programme wie möglich ausschalten und im Windows Task Manager in der Prozessliste schauen, welche .exe-Dateien weiterhin aktiv sind wenn das Problem fortbesteht.
* Falls die Hintergrundaufnahmen absichtlich sind oder du diese nicht abschalten kannst, kannst du eine *Anwendungsregel* in den Einstellungen anlegen. Setze die "Bedingung" auf "Spielt Ton ab" und "Hintergrund-Wiedergabe" auf "Weiter ausführen":

![Anwendungsregeln können im Reiter "Leistung" der Wallpaper Engine-Einstellungen gefunden werden](./applicationrule.png)

Ersetze "some.exe" aus dem Video oben mit .exe-Dateien die du im Task Manager finden kannst, bis du die verantwortliche .exe gefunden hast.

* Sollten alle Versuche fehlschlagen, kannst du auch einfach die Einstellung "Andere Anwendung spielt Ton" auf "Weiter ausführen" stellen. Dies bedeutet jedoch, dass Wallpaper Engine sich nicht mehr automatisch stumm schalten wird, wenn du Musik hörst oder Videos guckst, die nicht im Vollbildmodus sind.
