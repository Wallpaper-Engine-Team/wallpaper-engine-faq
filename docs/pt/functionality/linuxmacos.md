# Wallpaper Engine on Linux or Mac OS

Wallpaper Engine is currently only available on Windows and Android and there are no immediate plans to support other platforms at this time.

Apesar de compreendermos perfeitamente que os utilizadores queiram que ofereçamos suporte para mais sistemas operativos, isso não é de todo uma tarefa simples. O núcleo do Wallpaper Engine é uma solução de software completamente personalizada e a quantidade de trabalho envolvida na conversão para outras plataformas é gigantesca.

Alguns utilizadores poderão perguntar-se como é que alguns jogos e aplicações parecem ter sido convertidos com facilidade para Mac e Linux pelos seus criadores. A resposta para isso é que estes títulos se baseiam em motores de videojogos largamente utilizados como o Unity ou o Unreal Engine, motores estes que não requerem que criadores individuais façam algo significativo para adicionar suporte para mais plataformas. No entanto, nada disto se aplica quando se trata de uma aplicação "end-user" como o Wallpaper Engine - como é uma aplicação que interage estreitamente com o sistema operativo, para que funcione corretamente ela precisa de ser feita à medida para cada sistema operativo. No caso do Linux, isto vai ainda mais longe e deve ser programada de forma a funcionar com todos os gestores de ecrã mais populares, que divergem grandemente entre distribuições e parcialmente até entre releases e distribuições.

Embora na teoria tudo isto seja possível, a simples verdade é que neste momento não é economicamente viável adicionarmos suporte para Linux ou Mac OS. Se quiser consultar o [inquérito sobre hardware da Steam](https://store.steampowered.com/hwsurvey), poderá ver que menos de 1% dos utilizadores do Steam usam Linux. E mais uma vez, isto fragmenta-se ainda mais em diferentes distribuições de Linux, principalmente Ubuntu que tem uns meros 0,25% de utilizadores.

Tal como explicámos acima, o tempo necessário para converter o Wallpaper Engine para outro sistema operativo é gigantesco e aumentará significativamente também os custos dos trabalhos contínuos de manutenção, enquanto o grupo possível de utilizadores que beneficiariam disto é comparativamente minúsculo. Preferimos direcionar o nosso tempo e energia em melhorar a versão Windows para mais de 96% dos utilizadores do Steam.

No entanto, estamos atentos às estatísticas oficiais do Steam e se a situação no Steam se alterar, estamos certamente abertos a examinar a possibilidade de adicionarmos suporte para mais plataformas no futuro, caso isso se torne viável.

## How was support for Android devices made possible?

We always look at ways we can create the biggest benefit for a large group of our users. Taking into account the spread of Android devices across different regions of the world and comparing it to our user base, we estimate that at least 70% of our users own an Android device. This is a huge contrast to Linux or Mac OS, as these platforms combined just make up a tiny fraction compared to Android's global market share.

One useful thing about Android compared to Linux, for example, is that the live wallpaper feature is more or less standardized across all devices, which makes development much easier. We still hit quite a few significant hurdles when porting the app to Android, but after months of work were able to reach a stable state that would work well across various device families.

Again, what we considered important here is the large number of our existing users would benefit from this port, as we spent months on creating the Android version and continue to provide maintenance for it for years to come, which is a significant time investment to make.

## What about support for iPhones and iPads?

Unfortunately, Apple's mobile operating system iOS currently does not support real dynamic live wallpapers like Android does. The possibilities for live wallpapers on iOS are very limiting since iOS does not allow for true live wallpapers. There is some limited support for very basic short animated wallpapers in the form of *Live Photos* but the format is very restrictive and the vast majority of Wallpaper Engine wallpapers aren't really compatible with it in a way that we deem acceptable.