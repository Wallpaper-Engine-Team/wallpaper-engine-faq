# Linux veya Mac OS'de Wallpaper Engine

Wallpaper Engine an itibariyle Windows ve Android üzerinde bulunur ve henüz diğer platformları destekleme planları yapılmamaktadır.

Elbette kullanıcıların, kişisel olarak tercih ettikleri diğer işletim sistemlerinin de desteklenmesini sağlamamızı istediklerinin farkındayız ancak Wallpaper Engine'i olası tüm platformlar üzerinde desteklenir hâle getirmek o kadar da basit bir konu değil. Wallpaper Engine'in özünü tamamen özel yazılım çözümü oluşturur ve tamamen başka platformlara taşınması çok büyük bir iş demektir.

Bazı kullanıcılar oyun ve uygulama geliştiricilerinin ürünlerini Mac ve Linux'a nasıl bu kadar kolay taşıdıklarını merak ediyor olabilir: Bu başlıklar büyük oranda Unity ya da Unreal Engine gibi, bireysel geliştiricilerden daha fazla platformu desteklemek için çok önemli şeyler istemeyen video oyunu altyapılarına dayalıdır. Bununla birlikte, Wallpaper Engine gibi özel uygulamalar için aynı aynı şey geçerli değildir; Wallpaper Engine işletim sistemiyle yakın bir etkileşim iinde olduğundan dolayı düzgün çalıışması için her işletim sistemine özel olarak uyarlanması gerekir. Linux söz konusu olduğunda ise konu daha da ileri gider ve dağıtımlar arasında önemli ölçüde farklılık gösteren tüm popüler ekran yöneticileriyle çalışacak hâle getirilmesi gerekir.

Durum basit bir ifade ile henüz Linux veya Mac OS için destek sağlamamız için ekonomik açıdan uyugn değil. [Steam donanım anketinde](https://store.steampowered.com/hwsurvey) Steam kullanıcılarının %1'inin bile Linux kullanmadığını görebilirsiniz. Linux'un farklı dağıtımlarında kullanıcı sayısı iyice düşer; en fazla kullanıcıya sahip Ubuntu bile kullanıcıların sadece %0.25'i tarafından tercih edilmektedir.

As explained above, the time needed to port Wallpaper Engine to another operating system is immense and it will also increase the costs of on-going maintenance work significantly, while the possible user group benefiting of the large amount of time we would spend on this is comparatively very tiny. We should focus our time and energy on updates and platforms that benefit the most people, like the 96% of Steam users who use Windows.

Yet we are always keeping a close eye on the official Steam statistics and if the situation on Steam changes we are definitely open to look into figuring out how we could support more platforms in the future if it becomes viable.

## Why we created a free Android app before supporting Linux or Mac OS

A lot of our existing users use Android devices, far more than who use Linux or Mac OS devices. This is why supporting Android was the only rational next step when it comes to adding support for more platforms. By creating a free Android app as a new feature, we think we created a large improvement for the a vast number of our users.

Part of the work that went into the Android port can also be reused for Linux and OSX at a later point in time, slightly reducing the big hurdles we face supporting those operating systems. While creating the Android companion app was already a huge task for us, it was still significantly more achievable than a Linux or OSX port, where the full browsing and editing experience needs to be supported as well.

## What about support for iPhones and iPads?

Apple's mobile operating system iOS currently does not support real dynamic live wallpapers like Android does. The possibilities for live wallpapers on iOS are very limiting since iOS does not allow for true live wallpapers. There is some limited support for very basic short animated wallpapers in the form of *Live Photos* but the format is very restrictive and the vast majority of Wallpaper Engine wallpapers aren't really compatible with it in a way that we deem acceptable.