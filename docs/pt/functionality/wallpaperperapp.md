# Selecionar wallpapers por aplicação

O Wallpaper Engine permite-lhe iniciar automaticamente wallpapers diferentes sempre que um determinado .exe for iniciado no seu sistema. Por exemplo, isto pode ser útil se quiser ter wallpapers que o distraiam menos quando estiver a jogar um jogo ou iniciar automaticamente um vizualizador de áudio quando inicia o seu leitor de música.

::: dica Se estiver a ter dificuldades com certos jogos ou aplicações, também pode usar as regras para aplicações para desativar o Wallpaper Engine quando um determindo .exe é iniciado. Se quiser resolver um problema técnico com outra aplicação consulte, em vez disso, este guia: [Corrigir erros com aplicações ou jogos específicos](/functionality/applicationrules.html)
:::

## Definir uma regra de aplicação

No separador **Desempenho** das definições do Wallpaper Engine, clique no botão **Editar** da secção **Regras para aplicações**. Clique em **Criar regra nova** para configurar um novo conjunto de wallpapers para um .exe de sua escolha. No campo de dados **Nome da aplicação** introduza o nome do seu .exe, certificando-se de que o nome é copiado com precisão, por exemplo *musicplayer.exe*. Defina a **Condição** para **Em execução**. Na opção **Reprodução do wallpaper** pode selecionar uma das seguintes opções:

* Carregar wallpaper
* Carregar lista de reprodução
* Carregar perfil

O que é important ter em conta aqui é que **Carregar wallpaper** e **Carregar lista de reprodução** carregarão apenas um wallpaper, que irá ocupar todos os ecrãs. Se tiver vários monitores e quiser carregar wallpapers independentes para cada ecrã (ou até listas de reprodução diferentes em cada ecrã), será necessário usar a opção **Carregar perfil**. Leia a secção seguinte para obter mais informações acerca de como configurar isto.

### Definir um perfil multimonitor

**Carregar perfil** nas regras das aplicações refere-se a perfis multimonitor que podem ser configurados na visão geral dos monitores (ícone do ecrã no canto superior direito do interface). Um perfil é um instantâneo de todos os seus wallpapers e listas de reprodução atualmente selecionados em todos os seus ecrãs. Whenever a profile is loaded, all wallpapers and playlists will be placed according to the profile configuration.

Configure your wallpapers and playlists across all monitors the the way you want them to be, then click on the **Save profile** button in the monitor settings and save the current setup under a name of your choice. Keep in mind that any subsequent changes you make to your setup will not change the profile until you use the **Save profile** button again. You can set up multiple profiles and assign them to multiple apps at once. For example, you may create a **Music**, a **Gaming** and a **Movies** profile and then assign each profile to all .exe files that match these categories.

<video width="100%" controls autplay loop>
  <source src="/videos/apprules.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>