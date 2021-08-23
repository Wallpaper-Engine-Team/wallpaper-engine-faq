# Wallpaper Engine on Linux or Mac OS

Wallpaper Engine is currently only available on Windows and Android and there are no immediate plans to support other platforms at this time.

Nous comprenons que les utilisateurs veulent que nous prenions en charge davantage de systèmes d'exploitation, mais ce n'est vraiment pas une mince affaire. Wallpaper Engine est une solution logicielle personnalisée et la quantité de travail nécessaire pour la porter entièrement sur d'autres plates-formes serait colossale.

Certains vont se demander comment certains jeux et applications ont été facilement portés sur Mac et Linux par leurs développeurs. C'est simple : ces titres sont basés sur des moteurs de jeux vidéo populaires, comme Unity ou Unreal Engine. Les développeurs n'ont alors plus grand-chose à faire pour rendre leur titre disponible sur plusieurs plateformes. Ce n'est pas le cas pour Wallpaper Engine. Notre application interagit étroitement avec le système d'exploitation. Elle doit s'adapter à chaque système d'exploitation spécifique avec lequel elle doit fonctionner. Dans le cas de Linux, c'est encore plus complexe : l'application doit pouvoir fonctionner avec tous les gestionnaires d'affichage qui diffèrent considérablement entre chaque version.

C'est faisable, en théorie. En revanche, le portage sur Linux ou Mac nous est financièrement impossible pour le moment. Si vous regardez les [sondages Steam (en anglais)](https://store.steampowered.com/hwsurvey), vous verrez que seul 1 % des utilisateurs Steam sont sous Linux. L'écart est encore plus grand entre les différentes versions de Linux, dont Ubuntu, la plus populaire, qui ne représente que 0,25 % des utilisateurs.

Le temps nécessaire pour porter Wallpaper Engine sur un autre système d'exploitation est donc trop important et entraînerait une hausse des coûts de maintenance actuels. C'est trop d'efforts pour des utilisateurs potentiels peu nombreux. Nous préférons donc nous consacrer à développer cette application pour Windows, le système d'exploitation de 96 % des utilisateurs de Steam.

Nous gardons quand même toujours un œil attentif sur les statistiques officielles de Steam. Si la situation change, nous sommes évidemment prêts à nous développer sur d'autres plateformes.

## How was support for Android devices made possible?

We always look at ways we can create the biggest benefit for a large group of our users. Taking into account the spread of Android devices across different regions of the world and comparing it to our user base, we estimate that at least 70% of our users own an Android device. This is a huge contrast to Linux or Mac OS, as these platforms combined just make up a tiny fraction compared to Android's global market share.

One useful thing about Android compared to Linux, for example, is that the live wallpaper feature is more or less standardized across all devices, which makes development much easier. We still hit quite a few significant hurdles when porting the app to Android, but after months of work were able to reach a stable state that would work well across various device families.

Again, what we considered important here is the large number of our existing users would benefit from this port, as we spent months on creating the Android version and continue to provide maintenance for it for years to come, which is a significant time investment to make.

## What about support for iPhones and iPads?

Unfortunately, Apple's mobile operating system iOS currently does not support real dynamic live wallpapers like Android does. The possibilities for live wallpapers on iOS are very limiting since iOS does not allow for true live wallpapers. There is some limited support for very basic short animated wallpapers in the form of *Live Photos* but the format is very restrictive and the vast majority of Wallpaper Engine wallpapers aren't really compatible with it in a way that we deem acceptable.