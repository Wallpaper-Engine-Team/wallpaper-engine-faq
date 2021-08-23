# Wallpaper Engine on Linux or Mac OS

Wallpaper Engine is currently only available on Windows and Android and there are no immediate plans to support other platforms at this time.

A pesar de que entendemos que los usuarios quieren que sea compatible con más sistemas operativos, no es una tarea sencilla. En esencia, Wallpaper Engine es un programa completamente personalizado y la cantidad de trabajo necesaria para hacerlo compatible con otras plataformas es titánica.

Algunos usuarios se preguntarán cómo es posible que sea tan fácil hacer que algunos juegos y aplicaciones sean compatibles con Mac y Linux. La respuesta es sencilla: son programas basados en motores como Unity o Unreal Engine, que no necesitan que los desarrolladores hagan nada sustancial para hacerlos compatibles con otras plataformas. Sin embargo, esto no sucede con un programa como Wallpaper Engine, ya que como interactúa con el sistema operativo, necesita adaptarse a la perfección a todos los sistemas operativos para que funcione correctamente. En el caso de Linux va incluso más allá, ya que tendría que funcionar con todos los gestores de pantalla habituales, que cambian bastante de distribución en distribución y algo entre los lanzamientos de las distribuciones.

Aunque, en teoría, sería posible, la verdad es que ahora mismo no es viable económicamente hacerlo compatible con Linux o Mac. Si echas un vistazo a [la encuesta de hardware de Steam](https://store.steampowered.com/hwsurvey), verás que menos de un 1 % de los usuarios utiliza Linux. Por si fuera poco, esa cantidad se divide incluso más entre distintas distribuciones de Linux, especialmente en Ubuntu, que cuenta tan solo con un 0,25 % de usuarios.

Tal y como hemos explicado, hace falta muchísimo tiempo para hacer que Wallpaper Engine sea compatible con otros sistemas operativos y, a mayores, aumentaría el precio del mantenimiento, pero solo beneficiaría a un grupo diminuto de usuarios. Preferimos centrar nuestro tiempo y nuestra energía en mejorar la versión de Windows para más del 96 % de usuarios de Steam.

Sin embargo, estamos atentos a las estadísticas de Steam y, en caso de que cambie la situación, estamos abiertos a investigar cómo hacer el programa compatible con más plataformas en el futuro si fuera sea viable.

## How was support for Android devices made possible?

We always look at ways we can create the biggest benefit for a large group of our users. Taking into account the spread of Android devices across different regions of the world and comparing it to our user base, we estimate that at least 70% of our users own an Android device. This is a huge contrast to Linux or Mac OS, as these platforms combined just make up a tiny fraction compared to Android's global market share.

One useful thing about Android compared to Linux, for example, is that the live wallpaper feature is more or less standardized across all devices, which makes development much easier. We still hit quite a few significant hurdles when porting the app to Android, but after months of work were able to reach a stable state that would work well across various device families.

Again, what we considered important here is the large number of our existing users would benefit from this port, as we spent months on creating the Android version and continue to provide maintenance for it for years to come, which is a significant time investment to make.

## What about support for iPhones and iPads?

Unfortunately, Apple's mobile operating system iOS currently does not support real dynamic live wallpapers like Android does. The possibilities for live wallpapers on iOS are very limiting since iOS does not allow for true live wallpapers. There is some limited support for very basic short animated wallpapers in the form of *Live Photos* but the format is very restrictive and the vast majority of Wallpaper Engine wallpapers aren't really compatible with it in a way that we deem acceptable.