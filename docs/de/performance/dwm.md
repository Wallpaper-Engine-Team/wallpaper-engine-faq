# Leistungsprobleme bei Desktop-Computern mit integrierter und dedizierter GPU (dwm.exe)

Wenn du die integrierte GPU deines Desktop-Computers im BIOS aktiviert hast und dazu eine Grafikkarte installiert hast, kannst unter Umständen Leistungsprobleme und eine hohe CPU-Auslastung mit *dwm.exe* feststellen. Wenn möglich, deaktiviere deine integrierte GPU und stecke stets alle Bildschirme in deine richtige Grafikkarte. Das Nutzen von beiden unabhängigen Grafikchips zur gleichen Zeit kann die Hardware-Beschleunigung des Fenster-Managers von Windows kaputt machen. Es ist wichtig, dass alle Bildschirme in die Hauptgrafikkarte eingesteckt sind. Es handelt sich dabei um keinen Bug oder Fehler in Wallpaper Engine, dies ist ein Problem was alle Multi-Monitor-Anwendungen betrifft, wenn nicht alle Bildschirme in die Hauptgrafikkarte eingesteckt sind.

Ohne Technologien wie Nvidia Optimus muss Windows den Hintergrund von einer GPU zur anderen kopieren - dabei handelt es sich um einen sehr langsamen Prozess. Diese Art von geteilter Interaktion zwischen deinen GPUs ist immer ein Problem, es ist das gleiche wie als würdest du das Fenster eines Spieles zwischen zwei verbundene Bildschirme schieben.

Auf Hardware, welche speziell für solche Fälle entwickelt wurde, ist dies jedoch kein Problem, speziell Laptops mit Nvidia Optimus oder Nvidia SLI / AMD CrossFire. Diese nutzen physische Hardware-Lösungen, um das Problem zu lösen.

## Schlechte Leistung durch das Nutzen einer zweiten GPU auf Desktop-Computern ohne Nvidia SLI / Nvidia Optimus / AMD CrossFire

Es ist ein verbreiteter Irrglaube, dass das Wechseln von Anwendungen wie Wallpaper Engine auf eine zweite GPU die Systemleistung erhöht. Dabei hat dies tatsächlich den gegenteiligen Effekt, da es die Systemleistung reduziert.

Wallpaper Engine erstellt Hintergründe als Teil des Desktops, was bedeutet, dass diese Teil des Windows Explorer Prozesses sind. Daher muss Wallpaper Engine die gleiche GPU wie der Windows Explorer verwenden. Wenn dies nicht der Fall ist, so muss Windows beide GPUs zwingen, sich unter einander abzusprechen um ein Bild für deine Bildschirme zu berechnen. Dies muss vom Prozessor gemacht werden, was letztendlich die gesamte Computer-Leistung schlechter macht und oft viel mehr Leistung benötigt, als das Berechnen der Hintergründe. Einige Multi-GPU-Lösungen (Nvidia SLI, Nvidia Optimus, AMD CrossFire) lösen dieses Problem auf Hardware-Ebene, aber dies ist nicht der Fall, wenn du beispielsweise einfach eine Nvidia GPU und eine Intel Onboard-Grafikkarte verwendest.

Du kannst trotzdem die GPU deiner Wahl in deinen Grafikkartentreibern oder in den allgemeinen Systemeinstellungen festlegen, trotzdem empfehlen wir dies nicht, da es nicht die Leistung verbessert.