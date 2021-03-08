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

### Exemplo de atalho: abrir um wallpaper numa janela

O seguinte exemplo permite-lhe abrir qualquer quantidade de wallpapers numa janela através de um atalho do Windows. Pode repetir este processo para abrir qualquer quantidade de wallpapers numa janela diferente, o que poderá ser útil para streamers que querem utilizar o Wallpaper Engine para qualquer tipo de ecrã inativo ou animação.

Primeiro, vá ao diretório `wallpaper_engine` e clique com o botão direito em `wallpaper32.exe` ou `wallpaper64.exe` e passe o rato sobre `Enviar para` e depois `Ambiente de trabalho (criar atalho)` para criar um novo atalho para o processo do Wallpaper Engine no sue ambiente de trabalho. Em seguida, procure o seu novo atalho e mude-lhe o nome para algo apropriado para a sua utilização. Depois clique nele com o botão direito e selecione **Propriedades**.

![Propriedades do atalho do Wallpaper Engine](/img/faq/target.gif)

Deverá ver o separador **Atalhos** com uma linha chamada **Alvo**. Neste momento, esta linha aponta apenas para o Wallpaper Engine. Agora tem de editá-lo e adicionar o comando `openWallpaper` com o caminho completo para o seu wallpaper e o parâmetro `playInWindow` tal como é apresentado no exemplo abaixo (poderá querer copiar/colar e ajustá-lo às suas necessidades):

```bash
"C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\wallpaper64.exe" -control openWallpaper -file "C:\Program Files (x86)\Steam\steamapps\workshop\content\431960\123456789\scene.pkg" -playInWindow "Wallpaper #1" -width 1920 -height 1080
```

Quando configurar este comando, confirme o seguinte:

* Certifique-se de que o caminho para o seu wallpaper32.exe / wallpaper64.exe se mantém correto. O exemplo acima utiliza o diretório Steam predefinido.
* Certifique-se de que utiliza o caminho correto para o seu wallpaper. O exemplo acima utiliza uma Workshop ID **123456789** de exemplo, deve mudá-la para que o seu wallpaper funcione. Também pode apontar para qualquer ficheiro suportado do seu computador.
  * Pode encontar o caminho completo de qualquer wallpaper clicando nele com o botão direito no Wallpaper Engine e selecionando **Abrir no Explorer**. Para wallpapers do tipo Cena, em geral deve apontar para o ficheiro *project.json*, para wallpapers de vídeo isto provavelmente será um ficheiro *.mp4* e para wallpapers web encontrará um ficheiro chamado *index.html*.
* Dê um nome único à sua janela. O exemplo supra utiliza o nome **Wallpaper #1**. **Se pretender abrir várias janelas, basta atribuir um nome único a cada uma.**
* Também poderá querer ajustar a resolução, o exemplo supra utiliza 1920x1080 (Full HD). Mude os parâmetros `width` and `height` da forma apropriada.

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

### Open Profile

Applies an existing profile by name to all displays that was created and saved in Wallpaper Engine's display menu.

``` powershell
-control openProfile -profile <string>
```

* **profile:** Name of the profile you have created in Wallpaper Engine.

### Apply Wallpaper Settings

Applies wallpaper properties on-the-fly to a given wallpaper or all wallpapers. This allows you to dynamically change any settings that belong to a wallpaper while the program is running without opening the wallpaper browser and manually changing them. You can find a list of available properties in the browser easily by clicking on **Share JSON** on the right-side when selecting any wallpaper in the browser.

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

