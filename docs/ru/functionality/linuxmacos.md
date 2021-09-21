# Wallpaper Engine на Linux, Mac или Mac OS

На данный момент Wallpaper Engine доступен на Windows и Android, и в ближайшее время мы не планируем портировать программу на другие платформы.

Мы полностью понимаем, что пользователи могут предпочитать и другие операционные системы, но сделать Wallpaper Engine доступным на всех возможных платформах — очень непростая задача. Ядро Wallpaper Engine писалось на основе абсолютно уникальных программных решений, поэтому объем работы, который придется проделать для создания полноценного порта на другие платформы, совершенно громадный.

У некоторых пользователей может возникнуть вопрос: как же тогда некоторые разработчики без заметных усилий портируют свои игры и приложения на Mac и Linux? Ответ заключается в том, что эти программы разработаны на базе широко используемых игровых движков вроде Unity или Unreal Engine, в случае которых от индивидуального разработчика не требуется сверхусилий для переноса продукта на другие платформы. Однако, в случае настраиваемых приложений наподобие Wallpaper Engine это работает совсем по-другому: поскольку такой функционал предполагает тесное сотрудничество с операционной системой, для корректной работы программа должна быть «заточена» под конкретную систему. В случае Linux все еще более сложно, поскольку необходимо обеспечить совместимость программы с каждым популярным оконным менеджером, которые значительно различаются между собой в зависимости от сборки.

Ситуация такова, что в настоящее время нам экономически не выгодно добавлять поддержку Linux или Mac OS. Если вы заглянете в результаты [Опроса Steam об оборудовании и ПО пользователей](https://store.steampowered.com/hwsurvey), вы увидите, что меньше 1% пользователей Steam используют Linux. И опять же, этот процент дробится еще сильнее, если брать во внимание различные сборки Linux. Чаще всего используется сборка Ubuntu, на которую приходятся ничтожно малые 0,25% пользователей.

Как мы уже объясняли выше, портирование Wallpaper Engine на другую операционную систему потребует колоссальных временных затрат, кроме того оно еще и значительно увеличит стоимость текущего обслуживания. В сравнении с потраченным нами временем использоваться такой порт будет сравнительно крошечной группой пользователей. Мы должны направить время и энергию на обновления и платформы, которые принесут пользу большинству людей, к примеру тем 96% пользователям Steam с Windows.

Тем не менее, мы внимательно следим за официальной статистикой Steam. Мы открыты идеям портирования, и если ситуация в Steam изменится, мы несомненно изучим этот вопрос и попытаемся найти возможность организовать порты на другие платформы, как только это станет реально.

## Почему мы создали бесплатное приложение для Android до поддержки Linux или Mac OS

Большинство наших текущих пользователей использует устройства Android, но не Linux или Mac OS. Вот почему портирование на Android было единственным рациональным шагом, когда дело дошло до расширения количества платформ. By creating a free Android app as a new feature, we think we created a large improvement for the a vast number of our users.

Part of the work that went into the Android port can also be reused for Linux and OSX at a later point in time, slightly reducing the big hurdles we face supporting those operating systems. While creating the Android companion app was already a huge task for us, it was still significantly more achievable than a Linux or OSX port, where the full browsing and editing experience needs to be supported as well.

## What about support for iPhones and iPads?

Apple's mobile operating system iOS currently does not support real dynamic live wallpapers like Android does. The possibilities for live wallpapers on iOS are very limiting since iOS does not allow for true live wallpapers. There is some limited support for very basic short animated wallpapers in the form of *Live Photos* but the format is very restrictive and the vast majority of Wallpaper Engine wallpapers aren't really compatible with it in a way that we deem acceptable.