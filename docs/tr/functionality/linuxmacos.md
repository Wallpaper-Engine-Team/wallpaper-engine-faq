# Linux veya Mac OS'de Wallpaper Engine

Wallpaper Engine an itibariyle Windows ve Android üzerinde bulunur ve henüz diğer platformları destekleme planları yapılmamaktadır.

Elbette kullanıcıların, kişisel olarak tercih ettikleri diğer işletim sistemlerinin de desteklenmesini sağlamamızı istediklerinin farkındayız ancak Wallpaper Engine'i olası tüm platformlar üzerinde desteklenir hâle getirmek o kadar da basit bir konu değil. Wallpaper Engine'in özünü tamamen özel yazılım çözümü oluşturur ve tamamen başka platformlara taşınması çok büyük bir iş demektir.

Bazı kullanıcılar oyun ve uygulama geliştiricilerinin ürünlerini Mac ve Linux'a nasıl bu kadar kolay taşıdıklarını merak ediyor olabilir: Bu başlıklar büyük oranda Unity ya da Unreal Engine gibi, bireysel geliştiricilerden daha fazla platformu desteklemek için çok önemli şeyler istemeyen video oyunu altyapılarına dayalıdır. Bununla birlikte, Wallpaper Engine gibi özel uygulamalar için aynı aynı şey geçerli değildir; Wallpaper Engine işletim sistemiyle yakın bir etkileşim iinde olduğundan dolayı düzgün çalıışması için her işletim sistemine özel olarak uyarlanması gerekir. Linux söz konusu olduğunda ise konu daha da ileri gider ve dağıtımlar arasında önemli ölçüde farklılık gösteren tüm popüler ekran yöneticileriyle çalışacak hâle getirilmesi gerekir.

Durum basit bir ifade ile henüz Linux veya Mac OS için destek sağlamamız için ekonomik açıdan uyugn değil. [Steam donanım anketinde](https://store.steampowered.com/hwsurvey) Steam kullanıcılarının %1'inin bile Linux kullanmadığını görebilirsiniz. Linux'un farklı dağıtımlarında kullanıcı sayısı iyice düşer; en fazla kullanıcıya sahip Ubuntu bile kullanıcıların sadece %0.25'i tarafından tercih edilmektedir.

Yukarıda da açıkladığımız gibi, Wallpaper Engine'in başka bir işletim sistemine bağlanması çok büyük bir zaman gerektirmekle beraber süregelen bakım işlerinin maliyet çok yüksek ve üzerinde harcanacak büyük miktarda zaman sonucu bundan yararlanacak olası kullanıcı sayısı oldukça düşüktür. Zaman ve enerjimizi, Windows kullanan Steam kullanıcılarının %96'sı gibi çoğunluğa faydalı güncellemeler ve platformalara odaklamalıyız.

Yine de bir gözümüz daima Steam istatistiklerinde. Steam'deki durum değişirse biz de mutlaka gelecekte daha fazla platformu desteklemenin yollarını aramaya koyulacağız.

## Neden Linux veya Mac OS'yi desteklemeden önce ücretsiz bir Android uygulaması yarattık

Mevcut kullanıcılarımız arasında Android cihazlar kullananların sayısı Linux veya Mac OS cihazları kullananlardan çok daha fazla. Bu nedenle Android'in desteklenmesi, ilave platformların desteklenmesi söz konusu olduğunda atılabilecek tek mantıklı adımdı. Yeni bir özellik bağlamında yeni bir ücretsiz Android uygulama yaratırken kullanıcılarımızın büyük bir kısmı çin büyük bir gelişme sağladığımızı düşündük.

Part of the work that went into the Android port can also be reused for Linux and OSX at a later point in time, slightly reducing the big hurdles we face supporting those operating systems. While creating the Android companion app was already a huge task for us, it was still significantly more achievable than a Linux or OSX port, where the full browsing and editing experience needs to be supported as well.

## What about support for iPhones and iPads?

Apple's mobile operating system iOS currently does not support real dynamic live wallpapers like Android does. The possibilities for live wallpapers on iOS are very limiting since iOS does not allow for true live wallpapers. There is some limited support for very basic short animated wallpapers in the form of *Live Photos* but the format is very restrictive and the vast majority of Wallpaper Engine wallpapers aren't really compatible with it in a way that we deem acceptable.