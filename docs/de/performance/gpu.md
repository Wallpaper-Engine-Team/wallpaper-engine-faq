# Verwirrung über hohe Grafikkartenauslastung

Der Windows Task Manager zeigt nicht die tatsächliche GPU-Auslastung an, was oft für Verwirrung sorgen kann. Die GPU-Auslastung ignoriert die tatsächliche *Leistungsaufnahme und Taktrate* der Grafikkarte, was zu einer extrem inakkuraten und oft viel zu hohen Angabe der GPU-Auslastung führt. Um die tatsächliche Auslastung deiner Grafikkarte zu sehen, nutze ein Tool wie GPU-Z:

* [GPU-Z herunterladen](https://www.techpowerup.com/gpuz/)

## Herausfinden der tatsächlichen GPU-Auslastung

Sobald du GPU-Z installiert hast, überprüfe den Reiter "Sensoren" und schaue dir die GPU-Taktrate und GPU-Auslastung an:

![Tatsächliche GPU-Auslastung](./gpuz.png)

Beachte wie im Screenshot die GPU-Auslastung (*GPU load*) im Screenshot bei 24% liegt. In der oberen Zeile jedoch, kann man sehen, dass die Grafikkarte in ihrem Energiesparmodus ist und nur mit 202,5 MHz taktet. Dabei handelt es sich um das bestmögliche Szenario, auch wenn die Auslastung mit 24% angegeben wird. Die tatsächliche Auslastung basierend auf der maximalen Taktrate von 1823 MHz liegt bei nur **2,6%** *(24% * 202,5 MHz / 1823 MHz)*.

Eine Karte kann beispielsweise ihre Taktrate zwischen 100 Mhz und 200 Mhz regulieren. Wenn der Task Manager nun eine Auslastung von 50% anzeigt, **so macht es einen riesigen Unterschied, ob dies 50% von 100 MHz oder 50% von 2000 MHz sind**.

::: tip
Zusammenfassend: Es ist wichtig, die GPU-Taktrate im Kopf zu behalten, wenn du die Auslastung deiner Grafikkarte bestimmen willst. 50% von 100 MHz ist besser als 5% von 2000 MHz.
:::

Wenn du die Leistung deiner GPU verbessern willst kannst du die folgenden Dinge probieren:

* Deaktiviere oder lösche alle Arten von Overlays und Aufnahmeprogrammen, inklusive Nvidia GeForce Experience und AMD ReLive.
* Senke die Einstellung "Bilder pro Sekunde" und deaktiviere die Einstellung "Kantenglättung" (dies hat keinen Effekt auf 2D-Hintergründe).
    * Dies beeinflusst nicht die Qualität von Videos, diese haben eine fixe Bildwiederholungsrate und Qualität.
    * Die Auflösung und Bildwiederholungsrate von Video-Hintergründen beeinflussen die Leistung, nutze Videos mit niedrigere Bildwiederholungsrate um die GPU-Auslastung zu verringern.
* Verbinde alle Bildschirme mit der gleichen Grafikkarte, ansonsten hat Windows Probleme damit, das Gesamtbild zu synchronisieren.