# Editar wallpapers transferidos

Em geral, o Wallpaper Engine não suporta a edição de wallpapers transferidos. No entanto, normalmente é possível editar wallpapers consoante o seu tipo (pode encontrar o tipo por baixo da imagem de pré-visualização à direita) com a ajuda de aplicações de terceiros.

Tenha sempre em mente que pode ser necessário ter os direitos do(s) autor(es) original(is) para poder republicar o seu trabalho. Quando em dúvida, contacte os autores originais antes de o publicar na Steam Workshop.

[[toc]]

## Como encontro os ficheiros originais de um wallpaper?

Clique com o botão direito num wallpaper no separador "instalado" e selecione "Abrir no Explorer".

## Como editar wallpapers de diversos tipos

### Wallpapers de cena

Os wallpapers de cena são embalados num ficheiro .pkg que não é imediatamente editável porque lhe faltam todos os dados relacionados com o projeto. Tentar abrir um ficheiro .pkg resultará no erro "Wallpapers empacotados não podem ser abertos". Uma analogia seria que os ficheiros .jpeg também não incluem dados do projeto do Photoshop - isto fica sempre no sistema do autor original.

#### Unofficial Community Scene Unpacker

No entanto, os membros da comunidade criaram uma ferramenta de desempacotar de wallpapers de cena, o que lhe permite desempacotar ficheiros de Cena e usá-los como ponto de partida para os seus próprios wallpapers. Para mais informações visite este website:

* [https://wetranslate.thiscould.work/scene.pkg/](https://wetranslate.thiscould.work/scene.pkg/)

Continuará a ser necessário ter um ficheiro project.json válido. Para criar um basta criar um novo wallpaper vazio no editor, fechar o Wallpaper Engine e depois desempacotar o wallpaper transferido e copiar-colar o seu conteúdo no novo diretório do projeto.

Se quiser editar um dos seus próprios wallpapers para o qual tenha perdido ficheiros anteriores do projeto, consulte a secção *Atualizar um projeto perdido* mais abaixo para obter mais informações acerca das modificações que será necessário fazer ao projet.json, para que possa implementar as atualizações nos seus wallpapers existentes.

::: aviso Atenção Não oferecemos assistência oficial para esta ferramenta e não garantimos que funcione corretamente. Se tiver algum problema com o unpacker ou deseje fazer perguntas sobre ele, deve contactar os criadores originais. :::

### Wallpapers da web

Os wallpapers com base na web são baseados em HTML e JavaScript. Pode ir à fonte dos ficheiros, tal como é descrito na secção acima e usar estes ficheiros como base para o seu próprio wallpaper com base na web.

### Wallpapers de vídeo

Os wallpapers com base em vídeo são ficheiros de vídeo. Pode procurar o ficheiro de vídeo tal como é descrito na secção acima e usar uma aplicação de edição de vídeo de terceiros à sua escolha para modificar o vídeo.

### Wallpapers de aplicações

Em geral, os wallpapers de aplicações não podem ser editados. Os wallpapers de aplicações são normalmente programas compilados, o que significa que não tem acesso ao código de fonte. Se quiser mesmo modificar wallpapers com base em aplicações, deve contactar o autor do wallpaper e ver se ele está disposto a ajudar.

## Atualizar um projeto perdido

Se apagou o seu projeto continua a poder substituí-lo, mas consoante o tipo de wallpaper que publicou, pode já não ser possível editá-lo. Crie um novo wallpaper da forma habitual e abra o seu diretório de projeto com Edit -> Abrir no Explorer. Abra o ficheiro `project.json` com um editor de texto, ele terá sensivelmente este aspecto:

```json
{
    "description" : "Boa descrição",
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
    "tags" : [ "Relaxante" ],
    "title" : "Bom título para o seu wallpaper",
    "type" : "scene",
    "visibility" : "private"
}
```

Adicione esta linha no topo, logo a seguir a `{`:

```json
    "workshopid" : "12345678",
```
Para que tenha este aspecto:

```json{2}
{
    "workshopid" : "12345678",
    "description" : "Boa descrição",
    "file" : "scene.json",
    [...]
```

**Substitua o número 12345678 pela ID da sua candidatura! Pode encontrar esta ID no URL do seu upload existente:**

![https://steamcommunity.com/sharedfiles/filedetails/?id=12345678](./workshopid.png)
