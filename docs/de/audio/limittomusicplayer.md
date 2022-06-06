# Audio-Visualisierer auf Musik-Programme beschränken

Durch grundlegende Beschränkungen in der Art, Audio-Wiedergabe in Windows funktioniert, ist es nicht möglich, dass Wallpaper Engine selbst Audio-Visualisierungen auf ein bestimmtes Programm beschränkt. Nichtsdestotrotz ist es möglich dies umzusetzen. Es können Anwendungen von Drittanbietern verwendet werden, um ein *virtuelles* Audio-Gerät zu erstellen. Diese Anleitung erklärt einen Weg, wie ein solches imitiertes Audio-Gerät eingerichtet werden kann und wie Windows 10 und Wallpaper Engine konfiguriert werden können, um diese Funktionalität lauffähig zu machen.

An dieser Stelle ein kurzer Hinweis dazu, dass wir keine Unterstützung für virtuelle Audio-Geräte anbieten und nicht garantieren können, dass diese Anleitung funktionieren wird. Es handelt sich hierbei um eine sehr erweiterte Vorgehensweise, die den normalen Nutzungsrahmen von Wallpaper Engine sprengt. Wir bieten diese Anleitung nur als freundlich-gemeinte Hilfe für Nutzer an, welche besonders weit mit der Konfiguration ihres Systems gehen wollen.

::: warning
Achtung
Diese Anleitung funktioniert nur auf aktuellen Versionen von Windows 10. Älteren Windows-Versionen können einige Features fehlen, was es unmöglich macht dieser Anleitung zu folgen. 
:::

### Installation eines virtuellen Audio-Geräts

Wir empfehlen die Nutzung des kostenlosen **VB-CABLE Virtual Audio Device**, welches auf der folgenden Website heruntergeladen werden kann:

* [Virtuelles Audio-Gerät herunterladen](https://www.vb-audio.com/Cable/)

Zunächst muss die Archiv-Datei heruntergeladen und extrahiert werden. Daraufhin muss die Installation für entweder das 32-Bit- oder 64-Bit-Audio-Gerät gestartet werden, je nachdem welche Version von Windows 10 installiert ist. Dies geschieht über entweder **VBCABLE_Setup.exe** oder **VBCABLE_Setup_x64.exe**. Es ist wichtig, dass das Setup mit Administrator-Rechten ausgeführt wird. Dies geschieht durch einen Rechtsklick auf die Setup-Datei und dann *Als Administrator ausführen*. Daraufhin muss den Anweisungen des Setups gefolgt werden, bis angezeigt wird, dass das Audio-Gerät erfolgreich installiert wurde.

### Windows und Wallpaper Engine einrichten

Schaue das Video unten an, welche alle erforderlichen Schritte auf Windows 10 (Englisches Interface) vom Start bis zum Ende zeigt, falls du Hilfe mit irgendwelchen der untenstehenden Schritten benötigst.

1. Starte die Ton-Wiedergabe mit der Software, welche du später in Verbindung mit Wallpaper Engine nutzen möchtest.
2. Rechtsklicke auf das Audio-Icon neben der Windows-Uhr und wähle **Sound-Einstellungen öffnen**.
3. Gehe zum Ende der Seite die sich öffnet und klicke auf **App-Lautstärke- und Geräteeinstellungen**.
4. Eine Liste mit allen Anwendungen, welche Ton abspielen sollte nun angezeigt werden. Finde deine Software zur Ton-Wiedergabe in der Liste und ändere die Einstellung der Spalte **Ausgabe**, setz die Option von **Standard** auf **CABLE Input (VB-Audio Virtual Cable)**. Deine Audio-Wiedergabe sollte sofort aufhören, dies ist zu erwarten und normal.
5. Gehe zurück zur Hauptseite der Windows-Soundeinstellungen und in der oberen rechten Ecke, klicke auf **Sound-Systemsteuerung**.
6. Ein kleines Fenster wird erscheinen, navigiere zum Reiter **Aufnahme**, dann rechtsklicke auf das **CABLE Output**-Audio-Gerät und wähle **Eigenschaften** aus.
7. Ein weiteres Fenster wird erscheinen, klicke auf den Reiter **Abhören** und wähle dann **Dieses Gerät als Wiedergabequelle verwenden**. Klicke auf **Anwenden** und **OK**, daraufhin sollte die Musik deines Musik-Wiedergabeprogramms wieder zurückkehren.
8. Windows ist nun korrekt eingerichtet. Öffne im nächsten Schritt die **Wallpaper Engine-Einstellungen** und im Reiter **Allgemein**, ändere das **Gerät für Tonaufnahmen** auf **CABLE Input (VB-Audio Virtual Cable)**. Wallpaper Engine sollte nun anfangen auf die Musik deines Musik-Wiedergabeprogramms zu reagieren, gleichzeitig aber alle anderen Anwendungen auf deinem Computer ignorieren.

*Video, welches alle oben beschriebenen Schritte zeigt:*

<video width="100%" controls>
  <source src="/videos/audioinputdevice.mp4" type="video/mp4">
  Dein Browser unterstützt das Video-Tag nicht.
</video>
