---
sidebarDepth: 2
---

# Controlos da linha de comandos

Pode controlar o Wallpaper Engine com argumentos de linha de comandos. Isto permite-lhe aceder à maior parte das funcionalidades da aplicação através de um atalho, uma macro binding ou qualquer tipo de script auto-gerado ou código à sua escolha. Por exemplo, pode pausar ou parar todos wallpapers, mudar wallpapers ou até mudar definições dos wallpapers em execução.

Certifique-se de que o Wallpaper Engine já está a ser executado e depois envie-lhe um comando executando o processo principal do programa, *wallpaper32.exe* (ou *wallpaper64.exe* se esiver a usar a versão 64 Bits da aplicação), com qualquer dos argumentos de comando listados neste guia. Pode encontrar os executáveis no diretório de instalação `wallpaper_engine`.

Todos os comandos são emitidos como valor para o parâmetro `-control`. Por exemplo, o comando pausa pode ser executado desta forma:

``` powershell
wallpaper32.exe -control pause
```

Certifique-se de que utiliza o caratere de aspas duplas **"** para cadeias que contenham espaços:

``` powershell
wallpaper32.exe -control openWallpaper -file "C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\projects\myprojects\myWallpaper\project.json"
```

## Visão geral dos comandos

### Pausa

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

### Sem som

Silencia todos os wallpapers.

``` powershell
-control mute
```

### Com som

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

* **playlist:** Nome da lista de reprodução que criou e juardou no Wallpaper Engine.
* **location *(opcional)*:** Identificador interno do monitor. Pode encontrá-los no ficheiro config.json e são gerados pelo seu PC.
* **monitor *(opcional)*:** Index do monitor no qual carregar a lista de reprodução, começa por 0.

### Aplicar definições do wallpaper

Aplica propriedades do wallpaper no momento, para um determinado wallpaper ou para todos os wallpapers. Isto permite-lhe mudar de forma dinâmica quaisquer definições que pertençam a um wallpaper enquanto o programa está a ser executado sem abrir o browser de wallpapers e mudando-os manualmente. Poderá encontrar uma facilmente lista de propriedades disponíveis no browser clicando em **Partilhar JSON** do lado direito quando seleciona qualquer wallpaper no browser.

``` powershell
-control applyProperties -properties <JSON> [-location <string>] [-monitor <number>]
```

* **properties:** Properties defined as **JSON** string to be applied. The string must be specially escaped with `RAW~(` and `)~END` as delimiters - see examples below!
* **location *(optional)*:** Internal identifier of the monitor or the window name you specified.
* **monitor *(optional)*:** Index of the monitor to update the properties on, begins with 0.

Example of changing a wallpaper setting named `rate` to 10:

``` cpp 
-control applyProperties -properties RAW~({"rate":10})~END
```

Example of changing a wallpaper scheme color setting to red (`"1 0 0"` represents *RGB* values):

``` cpp
-control applyProperties -properties RAW~({"schemecolor":"1 0 0"})~END
```

### Hide Desktop Icons

Hides the desktop icons.

``` powershell
-control hideIcons
```

### Show Desktop Icons

Shows the desktop icons.

``` powershell
-control showIcons
```

