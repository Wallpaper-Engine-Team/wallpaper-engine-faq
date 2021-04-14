# Heruntergeladene Hintergründe bearbeiten

Grundsätzlich unterstützt Wallpaper Engine das Bearbeiten von heruntergeladenen Hintergründen nicht. Nichtsdestotrotz ist es normalerweise trotzdem möglich Hintergründe zu mithilfe von Drittanbieter-Anwendungen editieren, je nachdem um welchen Art von Hintergrund es sich handelt (du kannst die Art des Hintergrunds rechts unter dem Vorschaubild finden).

Bitte beachte, dass du gegebenenfalls die Rechte der originalen Autoren einholen solltest, bevor du deren Werke erneut veröffentlichst. Im Zweifelsfall solltest du die ursprünglichen Autoren kontaktieren, bevor du deine Werke im Steam Workshop veröffentlichst.

[[toc]]

## Wie finde ich die Dateien eines Hintergrundes?

Rechtsklicke auf einen Hintergrund im Reiter "Installiert" und wähle "Im Dateimanager anzeigen" aus.

## Das Editieren der verschiedenen Hintergrundarten

### Szene-Hintergründe

Szene-Hintergründe werden in eine .pkg-Datei gepackt, welche nicht einfach so editiert werden können, da sie nicht alle Projekt-Dateien enthalten. Das Öffnen einer .pkg-Datei resultiert in der Fehlermeldung "Gepackte Hintergründe können nicht geöffnet werden.". Eine Analogie an dieser Stelle wäre, dass .jpeg-Bilddateien auch nicht mit ihren ursprünglichen Photoshop-Projektdateien ausgeliefert werden - diese bleiben immer nur auf dem System des Autors zurück.

#### Inoffizieller Szene-Unpacker aus der Community

Einige Mitglieder aus der Community haben ein inoffizielles Tool zum Auspacken von Szene-Hintergründen erstellt, welches es dir erlaubt, Szene-Files auszupacken und diese als Ausgangspunkt für deine eigenen Hintergründe zu verwenden. Schaue dir die folgende Website für weitere Informationen an:

* [https://wetranslate.thiscould.work/scene.pkg/](https://wetranslate.thiscould.work/scene.pkg/)

Du benötigst trotzdem noch eine valide project.json-Datei. Du kannst eine solche Datei erstellen, indem du einen neuen leeren Hintergrund im Editor erstellst, daraufhin Wallpaper Engine ausschaltest und dann den von dir heruntergeladenen Hintergrund auspackst und dessen Inhalte in das leere Projekt-Verzeichnis kopierst.

If you want to edit one of your own wallpapers that you have previously lost the project files for, see the *Updating a lost project* section below for more infos on what changes you need to make to the project.json so that you can push updates to your existing wallpapers.

::: warning
Please note We do not provide official support for this tool and do not guarantee that it works correctly. If you have any problems with or questions about the unpacker, please get in touch with the original creators.
:::

### Web wallpapers

Web-based wallpapers are HTML and JavaScript-based. You can go to the source files as described in the section above and use these files as a basis for your own web-based wallpaper.

### Video wallpapers

Video-based wallpapers are video files. You can find the video file as described in the section above and then use a third-party video editing application of your choice to modify the video.

### Application wallpapers

Generally, application wallpapers cannot be edited. Application wallpapers are usually compiled programs which means you do not have access to the source code. If you really want to change application-based wallpapers, try contacting the author of the wallpaper and see if they are willing to help.

## Ein eigenes verlorenes Projekt aktualisieren

If you deleted your project you can still overwrite it, but depending on the type of wallpaper you published, you may not be able to edit it anymore. Create a new wallpaper as usual and open its project directory with Edit -> Open in Explorer. Open the `project.json` file with a text editor, it will look something like this:

```json
{
    "description" : "Cool description",
    "file" : "scene.json",
    "general" : 
    {
        "properties" : 
        {
            "schemecolor" : 
            {
                "order" : 0,
                "text" : "ui_browse_properties_scheme_color",
                "type" : "color",
                "value" : "0.7647058823529411 0.3764705882352941 0.07450980392156863"
            }
        }
    },
    "preview" : "preview.jpg",
    "tags" : [ "Relaxing" ],
    "title" : "Cool title of your wallpaper",
    "type" : "scene",
    "visibility" : "private"
}
```

Füge diese Zeile oben direkt nach `{` ein:

```json
    "workshopid" : "12345678",
```
Der obere Teil sollte nun so aussehen:

```json{2}
{
    "workshopid" : "12345678",
    "description" : "Cool description",
    "file" : "scene.json",
    [...]
```

**Ersetze dabei die Nummer 12345678 mit deiner bestehenden Workshop-ID! Du kannst diese ID in der URL deines bereits existierenden Uploads finden:**

![https://steamcommunity.com/sharedfiles/filedetails/?id=12345678](./workshopid.png)
