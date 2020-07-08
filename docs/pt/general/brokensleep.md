# Hibernação / Proteções de ecrã não funcionam

O Windows não hiberna com streams de áudio ativos abertos. Pode ultrapassar isto desativando a saída de áudio no separador "Geral" das definições do Wallpaper Engine para impedir que o Windows bloqueie a hibernação. Se quiser continuar a ter saída de áudio, siga as instruções deste guia para obter esse resultado.

## Mudar as definições de alimentação do Windows

O Windows não hiberna com streams de áudio ativos abertos. Pode ultrapassar isto desativando a saída de áudio no separador "Geral" das definições do Wallpaper Engine ou reconfigurando o seu Windows de forma a suspender com a reprodução de áudio ativada:

1. Vá às "Definições de energia e suspensão" do Windows escrevendo isto na pesquisa do Windows.
2. Clique em "Definições adicionais de energia"
3. Clique em "Alterar definições do esquema" ao lado do esquema que está selecionado
4. Clique em "Alterar definições avançadas de energia"
5. Desloque para baixo e expanda "Definições de multimédia"
6. Defina "Ao partilhar multimédia" como "Permitir que o computador entre no Modo Ausente" (proteção de ecrã) **ou** "Permitir suspensão do computador" (hibernação)

![Ativar "Permitir suspensão do computador"](./power.gif)

## Problemas de hibernação com wallpapers do tipo "Web"

Os wallpapers "Web" usam um browser semelhante ao Google Chrome ("CEF") que impedirá o modo de hibernação. Até isto ser corrigido no browser, pode ultrapassar isto com algumas instruções na linha de comandos.

1. Procure "cmd.exe" no Windows e clique nele com o botão direito e, em seguida, selecione "Executar como administrador" (é muito importante, caso contrário não funciona!).
2. Utilize o comendo `powercfg /requests` para visualizar todos os processos que estão a impedir o seu sistema de hibernar (veja também se a responsabilidade poderá ser de outros programas).
3. Use os três comandos seguintes para permitir que o seu sistema fique suspenso com o Wallpaoer Engine em execução:

```
powercfg /requestsoverride PROCESS webwallpaper32.exe AWAYMODE DISPLAY SYSTEM
powercfg /requestsoverride PROCESS wallpaper32.exe AWAYMODE DISPLAY SYSTEM
powercfg /requestsoverride PROCESS wallpaper64.exe AWAYMODE DISPLAY SYSTEM
```

Além disto, também pode definir a opção **Ecrã suspenso** no separador **Desempenho** das definições do Wallpaper Engine como *Parar (lib. memória)* e desligar o seu ecrã. Dessa forma, o Wallpaper Engine para toda a reprodução quando desliga o seu monitor e deixa o seu computador não vigiado.