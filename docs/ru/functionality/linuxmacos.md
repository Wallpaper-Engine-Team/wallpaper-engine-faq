# Wallpaper Engine на Linux, Mac или Mac OS

На данный момент Wallpaper Engine доступен на Windows и Android, и в ближайшее время мы не планируем портировать программу на другие платформы.

Мы полностью понимаем, что пользователи могут предпочитать и другие операционные системы, но сделать Wallpaper Engine доступным на всех возможных платформах — очень непростая задача. Ядро Wallpaper Engine писалось на основе абсолютно уникальных программных решений, поэтому объем работы, который придется проделать для создания полноценного порта на другие платформы, совершенно громадный.

У некоторых пользователей может возникнуть вопрос: как же тогда некоторые разработчики без заметных усилий портируют свои игры и приложения на Mac и Linux? Ответ заключается в том, что эти программы разработаны на базе широко используемых игровых движков вроде Unity или Unreal Engine, в случае которых от индивидуального разработчика не требуется сверхусилий для переноса продукта на другие платформы. Однако, в случае настраиваемых приложений наподобие Wallpaper Engine это работает совсем по-другому: поскольку такой функционал предполагает тесное сотрудничество с операционной системой, для корректной работы программа должна быть «заточена» под конкретную систему. В случае Linux все еще более сложно, поскольку необходимо обеспечить совместимость программы с каждым популярным оконным менеджером, которые значительно различаются между собой в зависимости от сборки.

Ситуация такова, что в настоящее время нам экономически не выгодно добавлять поддержку Linux или Mac OS. Если вы заглянете в результаты [Опроса Steam об оборудовании и ПО пользователей](https://store.steampowered.com/hwsurvey), вы увидите, что меньше 1% пользователей Steam используют Linux. И опять же, этот процент дробится еще сильнее, если брать во внимание различные сборки Linux. Чаще всего используется сборка Ubuntu, на которую приходятся ничтожно малые 0,25% пользователей.

As explained above, the time needed to port Wallpaper Engine to another operating system is immense and it will also increase the costs of on-going maintenance work significantly, while the possible user group benefiting of the large amount of time we would spend on this is comparatively very tiny. We should focus our time and energy on updates and platforms that benefit the most people, like the 96% of Steam users who use Windows.

Yet we are always keeping a close eye on the official Steam statistics and if the situation on Steam changes we are definitely open to look into figuring out how we could support more platforms in the future if it becomes viable.

## Why we created a free Android app before supporting Linux or Mac OS

A lot of our existing users use Android devices, far more than who use Linux or Mac OS devices. This is why supporting Android was the only rational next step when it comes to adding support for more platforms. By creating a free Android app as a new feature, we think we created a large improvement for the a vast number of our users.

Part of the work that went into the Android port can also be reused for Linux and OSX at a later point in time, slightly reducing the big hurdles we face supporting those operating systems. While creating the Android companion app was already a huge task for us, it was still significantly more achievable than a Linux or OSX port, where the full browsing and editing experience needs to be supported as well.

## What about support for iPhones and iPads?

Apple's mobile operating system iOS currently does not support real dynamic live wallpapers like Android does. The possibilities for live wallpapers on iOS are very limiting since iOS does not allow for true live wallpapers. There is some limited support for very basic short animated wallpapers in the form of *Live Photos* but the format is very restrictive and the vast majority of Wallpaper Engine wallpapers aren't really compatible with it in a way that we deem acceptable.