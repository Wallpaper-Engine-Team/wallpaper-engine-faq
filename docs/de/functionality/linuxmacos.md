# Wallpaper Engine auf Linux oder Mac OS

Wallpaper Engine ist derzeit nur für Windows und Android erhältlich und es gibt derzeit keine Pläne, weitere Betriebssysteme zu unterstützen.

Wir verstehen auf jeden Fall das Verlangen nach einer breiteren Unterstützung für weitere Betriebssysteme, es handelt sich dabei aber um kein einfaches Unterfangen. Der Kern von Wallpaper Engine ist eine komplett eigens angefertigte Software-Lösung und das Portieren auf andere Plattformen stellt einen enormen Aufwand dar.

Dies führt oft dazu, dass wir gefragt werden, wie es sein kann, dass einige Spiele und Anwendungen anscheinend mühelos auf Mac OS und Linux portiert werden können: Die Antwort darauf ist, dass diese Titel auf weit-verbreiteten Computerspiele-Engines wie Unity oder Unreal Engine basieren, wodurch einzelne Entwickler keine großen Aufwand haben, ihr Spiel auf diesen Plattformen zum Laufen zu bringen. Dies trifft jedoch nicht auf eine Endnutzer-Anwendung wie Wallpaper Engine zu - da die Anwendung eng mit dem Betriebssystem zusammenarbeitet, muss sie genau an das Betriebssystem angepasst werden, damit sie richtig funktioniert. Im Falle von Linux geht dies noch einen Schritt weiter und man muss die Kompatibilität zu allen populären Benutzeroberflächen sichern, welche sich teilweise erheblich zwischen Distributionen und sogar zwischen verschiedenen Versionen von Distributionen unterscheiden.

All dies ist theoretisch möglich, aber letztendlich ist die Unterstützung für Linux und Mac OS derzeit nicht ökonomisch realisierbar. Beim Betrachten der [Steam Hardware-Umfrage](https://store.steampowered.com/hwsurvey) kann man sehen, dass derzeit weniger als 1% der Steam-Nutzer Linux verwenden. Und diese Zahl ist weiter in verschiedene Distributionen von Linux aufgeteilt, größtenteils Ubuntu was von gerade einmal 0,25% der Nutzer verwendet wird.

Wie oben erklärt, ist die benötigte Zeit um Wallpaper Engine auf einem anderen Betriebssystem lauffähig zu machen immens hoch und gleichzeitig werden so auch die Kosten zu Wartung signifikant erhöht - während die Nutzergruppe die davon profitiert relativ gesehen winzig ist. Wir möchten daher lieber unsere Zeit und Energie in die Verbesserung der Windows-Version für die restlichen 96% der Steam-Nutzer aufbringen.

Nichtsdestotrotz behalten wie die offiziellen Steam-Statistiken im Auge und wenn sich die Lage auf Steam verändert, sind wir definitiv offen dafür uns eine Portierung auf weitere Plattformen in Zukunft genauer anzusehen.

## How was support for Android devices made possible?

We always look at ways we can create the biggest benefit for a large group of our users. Taking into account the spread of Android devices across different regions of the world and comparing it to our user base, we estimate that at least 70% of our users own an Android device. This is a huge contrast to Linux or Mac OS, as these platforms combined just make up a tiny fraction compared to Android's global market share.

One useful thing about Android compared to Linux, for example, is that the live wallpaper feature is more or less standardized across all devices, which makes development much easier. We still hit quite a few significant hurdles when porting the app to Android, but after months of work were able to reach a stable state that would work well across various device families.

Again, what we considered important here is the large number of our existing users would benefit from this port, as we spent months on creating the Android version and continue to provide maintenance for it for years to come, which is a significant time investment to make.

## What about support for iPhones and iPads?

Unfortunately, Apple's mobile operating system iOS currently does not support real dynamic live wallpapers like Android does. The possibilities for live wallpapers on iOS are very limiting since iOS does not allow for true live wallpapers. There is some limited support for very basic short animated wallpapers in the form of *Live Photos* but the format is very restrictive and the vast majority of Wallpaper Engine wallpapers aren't really compatible with it in a way that we deem acceptable.