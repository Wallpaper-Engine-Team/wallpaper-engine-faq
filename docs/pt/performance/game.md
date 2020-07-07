# Problemas de desempenho / baixo FPS com certos jogos ou aplicações

Por predefinição, o Wallpaper Engine coloca-se a su próprio em pausa enquanto o utilizador está a jogar. Pode configurar este comportamento no separador **Desempenho** das definições do Wallpaper Engine.

Se está a ter problemas de desempenho com jogos ou aplicações individuais, pode modificar ainda mais este comportamento. Normalmente, problemas de desempenho significam que o seu sistema está a ficar sem RAM ou Video RAM (a memória da sua placa gráfica). Pode configurar o Wallpaper Engine de forma a libertar qualquer memória quando o utilziador está dentro do jogo mudando a opção **Outra aplicação em ecrã completo** para **Parar (lib. memória)** no separador **Desempenho** das definições do Wallpaper Engine.

## Regra para aplicação

Se só tiver problemas com um jogo ou software específico, também pode contigurar isto apenas para o software que lhe está a dar problemas criando uma **Regra para aplicação**:

1. Abra o separador **Desempenho** nas definições do Wallpaper Engine
2. Clique no botão **Editar** ao lado de **Regras da aplicação**
3. Na janela sobreposta que aparece, clique em **Criar regra nova**
4. Crie uma regra nova com as seguintes definições:
    * **Noem da aplicação:** "game.exe" *(substitua isto pelo nome real do ficheiro .exe do seu jogo)*
    * **Condição:** "Em execução"
    * **Reprodução do wallpaper:** "Parar (lib. memória)"
5. Confirme clicando em **Criar**

O Wallpaper Engine irá remover completamente todos os wallpapers da memória quando o *.exe* que configurou for iniciado.

## Conflitos com ferramentas ou overlays de gravação do ecrã

Se estiv er a utilizar qualquer software de streaming de jogos ou gravação de jogos com overlays, certifique-se de que não estão a gravar o Wallpaper Engine acidentalmente em segundo plano. This can also be the case if you use any game streaming functionalities from your graphics card drivers (Nvidia ShadowPlay, Nvidia Share or AMD ReLive for example).
