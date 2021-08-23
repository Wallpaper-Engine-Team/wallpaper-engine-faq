# Wallpaper Engine on Linux or Mac OS

Wallpaper Engine is currently only available on Windows and Android and there are no immediate plans to support other platforms at this time.

Мы отлично понимаем, что пользователи хотели бы видеть поддержку большего количества платформ, но портирование — это очень непростая задача. Ядро Wallpaper Engine писалось на основе абсолютно уникальных программных решений, поэтому объем работы, который придется проделать для создания полноценного порта на другие платформы, совершенно громадный.

У некоторых пользователей может возникнуть вопрос: как же тогда некоторые разработчики без заметных усилий портируют свои игры и приложения на Mac и Linux? Ответ заключается в том, что эти программы разработаны на базе широко используемых игровых движков вроде Unity или Unreal Engine, в случае которых от индивидуального разработчика не требуется сверхусилий для переноса продукта на другие платформы. Однако, в случае пользовательских приложений наподобие Wallpaper Engine это работает совсем по-другому: поскольку такой функционал предполагает тесное сотрудничество с операционной системой, для корректной работы программа должна быть «заточена» под конкретную систему. В случае Linux все еще более сложно, поскольку необходимо обеспечить совместимость программы с каждым популярным оконным менеджером, которые значительно различаются между собой в зависимости от сборки, а частично даже в зависимости от версии сборки.

Теоретически в этом мире все возможно, но простая истина состоит в том, что на данный момент порт на Linux или Mac OS нерентабелен. Если вы заглянете в результаты [Опроса Steam об оборудовании и ПО пользователей](https://store.steampowered.com/hwsurvey), вы увидите, что меньше 1% пользователей Steam используют Linux. И опять же, этот процент дробится еще сильнее, если брать во внимание различные сборки Linux. Чаще всего используется сборка Ubuntu, на которую приходятся ничтожно малые 0,25% пользователей.

Как мы уже объясняли выше, портирование Wallpaper Engine на другую операционную систему потребует колоссальных временных затрат, кроме того оно еще и значительно увеличит стоимость текущего обслуживания. При этом использоваться такой порт будет сравнительно крошечной группой пользователей. Мы предпочитаем вкладывать свое время и силы в улучшение версии программы для Windows и работать на благо более чем 96% пользователей Steam.

Тем не менее, мы внимательно следим за официальной статистикой Steam. Мы открыты идеям портирования, и если ситуация в Steam изменится, мы несомненно изучим этот вопрос и попытаемся найти возможность организовать порты на другие платформы, как только это станет реально.

## How was support for Android devices made possible?

We always look at ways we can create the biggest benefit for a large group of our users. Taking into account the spread of Android devices across different regions of the world and comparing it to our user base, we estimate that at least 70% of our users own an Android device. This is a huge contrast to Linux or Mac OS, as these platforms combined just make up a tiny fraction compared to Android's global market share.

One useful thing about Android compared to Linux, for example, is that the live wallpaper feature is more or less standardized across all devices, which makes development much easier. We still hit quite a few significant hurdles when porting the app to Android, but after months of work were able to reach a stable state that would work well across various device families.

Again, what we considered important here is the large number of our existing users would benefit from this port, as we spent months on creating the Android version and continue to provide maintenance for it for years to come, which is a significant time investment to make.

## What about support for iPhones and iPads?

Unfortunately, Apple's mobile operating system iOS currently does not support real dynamic live wallpapers like Android does. The possibilities for live wallpapers on iOS are very limiting since iOS does not allow for true live wallpapers. There is some limited support for very basic short animated wallpapers in the form of *Live Photos* but the format is very restrictive and the vast majority of Wallpaper Engine wallpapers aren't really compatible with it in a way that we deem acceptable.