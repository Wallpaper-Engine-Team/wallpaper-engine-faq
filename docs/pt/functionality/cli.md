---
sidebarDepth: 2
---

# Controlos da linha de comandos

Pode controlar o Wallpaper Engine com argumentos de linha de comandos. Isto permite-lhe aceder à maior parte das funcionalidades da aplicação através de um atalho, uma macro binding ou qualquer tipo de script auto-gerado ou código à sua escolha. Por exemplo, pode pausar ou parar todos wallpapers, mudar wallpapers ou até mudar definições dos wallpapers em execução.

Certifique-se de que o Wallpaper Engine já está a ser executado e depois envie-lhe um comando executando o processo principal do programa, *wallpaper32.exe* (ou *wallpaper64.exe* se estiver a usar a versão 64 Bits da aplicação), com qualquer dos argumentos de comando listados neste guia. Pode encontrar os executáveis no diretório de instalação `wallpaper_engine`.

Todos os comandos são emitidos como valor para o parâmetro `-control`. Por exemplo, o comando pausa pode ser executado desta forma:

``` powershell
wallpaper32.exe -control pause
```

Certifique-se de que utiliza o caractere de aspas duplas **"** para cadeias que contenham espaços:

``` powershell
wallpaper32.exe -control openWallpaper -file "C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\projects\myprojects\myWallpaper\project.json"
```

### Shortcut example: Opening a wallpaper in a window

The following example allows you to open any number of wallpapers in a window through a Windows shortcut. You can repeat this process to open any number of wallpapers in a separate window which may be useful for streamers who want to utilize Wallpaper Engine for any type of idle screen or animation.

First, go to the `wallpaper_engine` directory and right-click on either `wallpaper32.exe` or `wallpaper64.exe` and hover over `Send to` and then `Desktop (create shortcut)` to create a new shortcut to the Wallpaper Engine process on your desktop. Next, find your new shortcut and rename it to fit your use-case. Afterwards, right-click on it, then select **Properties**.

![Wallpaper Engine shortcut properties](/img/faq/target.gif)

You should see the **Shortcut** tab with a line called **Target**. This line will currently just point to Wallpaper Engine. You now need to edit it to add the `openWallpaper` command with the full path to your wallpaper and the `playInWindow` parameter as shown in the example below (you may want to copy-paste it and adjust it to fit your needs):

```bash
"C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\wallpaper64.exe" -control openWallpaper -file "C:\Program Files (x86)\Steam\steamapps\workshop\content\431960\123456789\scene.pkg" -playInWindow "Wallpaper #1" -width 1920 -height 1080
```

Check the following things when configuring this command:

* Make sure the path to your wallpaper32.exe / wallpaper64.exe stays correct. The example above uses the default Steam directory.
* Make sure to use the correct path to your wallpaper. The example above uses an example Workshop ID **123456789**, you must change this in order for your wallpaper to work. You can also point at any supported file on your computer.
  * You can find the full path of any wallpaper by right-clicking on it in Wallpaper Engine and selecting **Open in Explorer**. For Scene type wallpapers, you generally want to point at the *project.json* file, for video wallpapers this will likely be an *.mp4* file and for web wallpapers you will find a file called *index.html*.
* Give your window a unique name. The example above uses **Wallpaper #1** as a name. **If you want to open multiple windows, simply assign each of them a unique name.**
* You may also want to adjust the resolution, the example above uses 1920x1080 (Full HD). Change the `width` and `height` parameters accordingly.

## Visão geral dos comandos

### Pausar

Faz pausa em todos os wallpapers.

``` powershell
-control pause
```

### Parar

Para todos os wallpapers.

``` powershell
-control stop
```

### Reproduzir

Retoma todos os wallpapers a partir de pausa ou parados.

``` powershell
-control play
```

### Silenciar

Silencia todos os wallpapers.

``` powershell
-control mute
```

### Reativar som

Ativa o som de todos os wallpapers.

``` powershell
-control unmute
```

### Abrir wallpaper

Carrega um novo wallpaper para um dado monitor ou para o primeiro monitor, caso nenhum tenha sido especificado. Pode utilizar o parâmetro `location` ou `monitor` para escolher o monitor no qual irá carregar o wallpaper, ou abrir um wallpaper numa janela com o parâmetro `playInWindow`.

``` powershell
-control openWallpaper -file <string> [-location <string>] [-monitor <number>]
        [-playInWindow <string>] [-width <number>] [-height <number>]
        [-x <number>] [-y <number>] [-preset <string>]
```

* **file:** Caminho para o project.json do wallpaper que pretende abrir ou o caminho direto para o ficheiro do wallpaper (.mp4 etc).
* **location *(opcional)*:** Identificador interno do monitor. Pode encontrá-los no ficheiro config.json e são gerados pelo seu PC.
* **monitor *(opcional)*:** Index do monitor no qual carregar o wallpaper, começa por 0.
* **preset *(opcional)*:** Nome do programa local a carregar, o programa local deve ter sido criado e guardado anteriormente por si.
* **playInWindow *(opcional)*:** Nome da janela se pretende abrir/controlar vários wallpapers numa janela.
  * **width *(opcional)*:** largura da janela.
  * **height *(opcional)*:** Altura da janela.
  * **x *(opcional)*:** Posição horizontal da janela.
  * **y *(opcional)*:** Posição vertical da janela.

### Wallpaper seguinte

Salta para o wallpaper seguinte de um dado monitor ou todos os monitores, caso nenhum tenha sido especificado.

``` powershell
-control nextWallpaper [-location <string>] [-monitor <number>]
```

### Remover wallpaper

Remove um wallpaper de um monitor ou janela especificados ou remove todos os wallpapers.

``` powershell
-control closeWallpaper [-location <string>] [-monitor <number>]
```

* **location *(opcional)*:** Identificador interno do monitor ou nome da janela que especificou.
* **monitor *(opcional)*:** Index do monitor do qual fechar o wallpaper, começa por 0.

### Abrir lista de reprodução

Carrega um novo wallpaper para um dado monitor ou para o primeiro monitor, caso nenhum tenha sido especificado. Pode utilizar o parâmetro location ou monitor para escolher o monitor no qual irá carregar o wallpaper.

``` powershell
-control openPlaylist -playlist <string> [-location <string>] [-monitor <number>]
```

* **playlist:** Nome da lista de reprodução que criou e guardou no Wallpaper Engine.
* **location *(opcional)*:** Identificador interno do monitor. Pode encontrá-los no ficheiro config.json e são gerados pelo seu PC.
* **monitor *(opcional)*:** Index do monitor no qual carregar a lista de reprodução, começa por 0.

### Aplicar definições do wallpaper

Aplica propriedades do wallpaper no momento, para um determinado wallpaper ou para todos os wallpapers. Isto permite-lhe mudar de forma dinâmica quaisquer definições que pertençam a um wallpaper enquanto o programa está a ser executado sem abrir o browser de wallpapers e mudando-os manualmente. Poderá encontrar uma facilmente lista de propriedades disponíveis no browser clicando em **Partilhar JSON** do lado direito quando seleciona qualquer wallpaper no browser.

``` powershell
-control applyProperties -properties <JSON> [-location <string>] [-monitor <number>]
```

* **properties:** Propriedades definidas como cadeia **JSON** a ser aplicada. A cadeia deve ser especialmente terminado com `RAW~(` e `)~END` como delimitadores - veja os exemplos abaixo!
* **location *(opcional)*:** Identificador interno do monitor ou nome da janela que especificou.
* **monitor *(opcional)*:** Index do monitor no qual atualizar as propriedades, começa por 0.

Exemplo de mudar uma definição de wallpaper com o nome `rate` para 10:

``` cpp 
-control applyProperties -properties RAW~({"rate":10})~END
```

Exemplo de mudar a definição de esquema de cores de um wallpaper para vermelho (`"1 0 0"` representa *RGB* valores):

``` cpp
-control applyProperties -properties RAW~({"schemecolor":"1 0 0"})~END
```

### Ocultar ícones do desktop

Oculta os ícones do desktop.

``` powershell
-control hideIcons
```

### Mostrar ícones do desktop

Mostra os ícones do desktop.

``` powershell
-control showIcons
```

