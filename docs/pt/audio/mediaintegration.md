# Funcionalidade de Capa de Álbum e Dados Multimédia

O Wallpaper Engine permite que os criadores de wallpapers adicionem elementos especiais aos seus wallpapers que utilizem a capa do álbum, o título da canção, o nome do álbum e muito mais no wallpaper. Este guia explicará como resolver problemas comuns relacionados com esta funcionalidade.

::: warning
Atenção
Este artigo é sobre uma funcionalidade específica para wallpapers, para capas de álbuns e informações acerca de canções. Se está a ter dificuldades com visualizadores de áudio ou se pretende limitar os visualizadores de áudio ao seu media player, consulte, em vez disso, os artigos apropriados:

* [Limitar visualizadores de áudio a media players](/audio/limittomusicplayer)
* [Visualizadores de áudio não funcionam / nenhum som detetado](/audio/audiodetection)
:::

<video width="100%" controls autoplay loop>
  <source src="/videos/media_controls.mp4" type="video/mp4">
  O seu browser não suporta o tag vídeo.
</video>

*O Wallpaper Engine vai buscar a capa do álbum e os dados de canções ao media overlay do Windows, mostrado no canto superior esquerdo.*

## Ativar a funcionalidade de Capa de Álbum e Dados Multimédia

Para que esta funcionalidade funcione, deve certificar-se de que estas condições são satisfeitas:

1. Está a utilizar o Windows 10 ou mais recente.
2. Ativou a opção **Suporte para integração de multimédia** no separador **Gerais** das definições do Wallpaper Engine.
3. O seu media player proporciona dados de multimédia ao Windows media overlay (ilustrado acima). Mais detalhes abaixo.
4. Os seus ficheiros de áudio contêm capas de álbum e dados de multimédia (título da canção, nome dos artistas, nome do álbum, etc.)

### Configurar o seu Media Player

A maior parte dos media players suportam o Windows media overlay que é necessário para que esta funcionalidade funcione. Por vezes é necessário ativá-lo primeiro. Abra as definições do seu media player e procure a opção apropriada (por vezes, também está escondida nas definições avançadas). A opção costuma mencionar um *"media overlay"* ou *"atalhos para multimédia"*. Caso não tenha a certeza, faça uma pesquisa na web que inclua o nome do seu media player e palavras como *"media overlay"*.

## Excluir apps como Web Browsers da Funcionalidade de Capa do Álbum

Se reparar que o seu browser ou outra app do seu sistema começam a interferir com a funcionalidade de capa de álbum, pode adicioná-los à lista de bloqueio de multimédia. Abra o separador **Gerais** das definições do Wallpaper Engine, navegue para a secção **Windows** e clique no botão **Editar** ao lado da opção **Lista de bloqueio de multimédia**. Certifique-se de que a app em questão está a inteferir com a funcionalidade de capa de álbum. Ela agora deve aparecer como sugestão na lista de bloqueios. Clique no botão **Bloquear** ao lado da app. Ela deverá agora parar de interferir na funcionalidade de capa do álbum.