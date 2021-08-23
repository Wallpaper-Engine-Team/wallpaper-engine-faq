# Wallpaper Engine on Linux or Mac OS

Wallpaper Engine is currently only available on Windows and Android and there are no immediate plans to support other platforms at this time.

Kullanıcıların başka işletim sistemlerini de desteklememizi istediğini biliyoruz fakat bu çok kolay bir iş değil. Wallpaper Engine'in özünü tamamen özel yazılım çözümü oluşturur ve tamamen başka platformlara taşınması çok büyük bir iş demektir.

Bazı kullanıcılar oyun ve uygulama geliştiricilerinin ürünlerini Mac ve Linux'a nasıl bu kadar kolay taşıdıklarını merak ediyor olabilir: Bu başlıklar büyük oranda Unity ya da Unreal Engine gibi, bireysel geliştiricilerden daha fazla platformu desteklemek için çok önemli şeyler istemeyen video oyunu altyapılarına dayalıdır. Wallpaper Engine gibi son kullanıcı uygulamaları için aynı şey geçerli değildir; Wallpaper Engine işletim sistemiyle yakın bir etkileşim içinde olduğundan düzgün çalışmak için her işletim sistemine ayrı uyarlanması gerekir. Linux söz konusu olduğunda konu daha da ileri gider ve dağıtımlar arasında önemli ölçüde, dağıtım sürümleri arasında da kısmen farklılık gösteren tüm popüler ekran yöneticileriyle çalışacak hâle getirilmelidir.

Teoride mümkün olsa da açıkçası bu noktada Linux veya Mac OS için destek eklemek ekonomik bir seçenek değildir. [Steam donanım anketinde](https://store.steampowered.com/hwsurvey) Steam kullanıcılarının %1'inin bile Linux kullanmadığını görebilirsiniz. Linux'un farklı dağıtımlarında kullanıcı sayısı iyice düşer; en fazla kullanıcıya sahip Ubuntu bile kullanıcıların sadece %0.25'i tarafından tercih edilmektedir.

Yukarıda da açıkladığımız gibi, Wallpaper Engine'in başka bir işletme sistemine bağlanması çok büyük zaman gerektirmekle birlikte süregelen bakım işlerinin maliyeti çok yüksek ve muhtemel kullanıcı sayısı çok düşüktür. Bizler bunun yerine tüm zamanımızı ve enerjimizi Steam kullanıcılarının %96'sı için Windows sürümünü geliştirmeye harcamayı tercih ediyoruz.

Yine de bir gözümüz Steam istatistiklerinde. Steam'deki durum değişirse biz de mutlaka gelecekte daha fazla platformu desteklemenin yollarını aramaya koyuluruz.

## How was support for Android devices made possible?

We always look at ways we can create the biggest benefit for a large group of our users. Taking into account the spread of Android devices across different regions of the world and comparing it to our user base, we estimate that at least 70% of our users own an Android device. This is a huge contrast to Linux or Mac OS, as these platforms combined just make up a tiny fraction compared to Android's global market share.

One useful thing about Android compared to Linux, for example, is that the live wallpaper feature is more or less standardized across all devices, which makes development much easier. We still hit quite a few significant hurdles when porting the app to Android, but after months of work were able to reach a stable state that would work well across various device families.

Again, what we considered important here is the large number of our existing users would benefit from this port, as we spent months on creating the Android version and continue to provide maintenance for it for years to come, which is a significant time investment to make.

## What about support for iPhones and iPads?

Unfortunately, Apple's mobile operating system iOS currently does not support real dynamic live wallpapers like Android does. The possibilities for live wallpapers on iOS are very limiting since iOS does not allow for true live wallpapers. There is some limited support for very basic short animated wallpapers in the form of *Live Photos* but the format is very restrictive and the vast majority of Wallpaper Engine wallpapers aren't really compatible with it in a way that we deem acceptable.