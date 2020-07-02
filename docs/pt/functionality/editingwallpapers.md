# Editar wallpapers transferidos

Em geral, o Wallpaper Engine não suporta a edição de wallpapers transferidos. No entanto, normalmente é possível editar wallpapers consoante o seu tipo (pode encontrar o tipo por baixo da imagem de prévisualização à direita) com a ajuda de aplicações de terceiros.

Tenha sempre em mente que pode ser necessário ter os direitos do(s) autor(es) original(is) para poder republicar o seu trabalho. Quando em dúvioda, contacte os autores originais antes de o publicar na Steam Workshop.

[[toc]]

## Como encontro os ficheiros originais de um wallpaper?

Clique com o botão direito num wallpaper no separador "instalado" e selecione "Abrir no Explorer".

## Como editar wallpapers de diversos tipos

### Wallpapers de cena

Os wallpapers de cena são embalados num ficheiro .pkg que não é imediatamente editável porque lhe faltam todos os dados relacionados com o projeto. Tentar abrir um ficheiro .pkg esultará no erro "Wallpapers empacotados não podem ser abertos". Uma analogia seria que os ficheiros .jpeg também não incluem dados do projeto do Photoshop - isto fica sempre no sistema do autor original.

#### Unofficial Community Scene Unpacker

No entanto, os membros da comundiade criaram uma ferramenta de desempacotar de wallpapers de cena, o que lhe permite desempacotar ficheiros de Cena e usá-los como ponto de partida para os seuys próprios wallpapers. Para mais informações visite este website:

* [https://wetranslate.thiscould.work/scene.pkg/](https://wetranslate.thiscould.work/scene.pkg/)

Continuará a ser necessário ter um ficheiro project.json válido. Para criar um basta criar um novo wallpaper vazio no editor, fechar o Wallpaper Engine e depois desempacotar o wallpaper transferido e copiar-colar o seu conteúdo no novo diretório do projeto.

Se quiser edfitar um dos seus próprios wallpapers para o quel tenha perdido ficheiros anteriores do projeto, consulte a secção *Atualizar um projeto perdido* mais abaixo para obter mais informações acerca das modificaçõesq ue será necessário fazer ao projet.json, para que possa implementar as atualizações nos seus wallpapers existentes.

::: aviso Atenção Não oferecemos assistência oficial para esta ferramenta e não garantimos que funcione corretamente. If you have any problems with or questions about the unpacker, please get in touch with the original creators. :::

### Web wallpapers

Web-based wallpapers are HTML and JavaScript-based. You can go to the source files as described in the section above and use these files as a basis for your own web-based wallpaper.

### Video wallpapers

Video-based wallpapers are video files. You can find the video file as described in the section above and then use a third-party video editing application of your choice to modify the video.

### Application wallpapers

Generally, application wallpapers cannot be edited. Application wallpapers are usually compiled programs which means you do not have access to the source code. If you really want to change application-based wallpapers, try contacting the author of the wallpaper and see if they are willing to help.

## Updating a lost project

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

Add this line at the top right after `{`:

```json
    "workshopid" : "12345678",
```
So that it looks like:

```json{2}
{
    "workshopid" : "12345678",
    "description" : "Cool description",
    "file" : "scene.json",
    [...]
```

**Replace the number 12345678 with the ID of your submission! You can find this ID in the URL of your existing upload:**

![https://steamcommunity.com/sharedfiles/filedetails/?id=12345678](./workshopid.png)
