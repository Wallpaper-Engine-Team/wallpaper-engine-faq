# Yüksek GPU kullanımı yanılgısı

Windows Görev Yöneticisi, çoğu durumda gerçek GPU kullanımını göstermez ve bu da kafa karışıklığına neden olur. GPU kullanımı, grafik kartının *güç durumunu* ve saat hızını yoksayarak bunu son derece yanlış hâle getirir ve genellikle çok daha fazla GPU kullanımı gösterir. Gerçek GPU kullanımını görmek için GPU-Z gibi bir araç kullanın:

* [GPU-Z'yi indirin](https://www.techpowerup.com/gpuz/)

## Gerçek GPU yükünüzü bulma

GPU-Z'yi yükledikten sonra GPU saat hızını ve GPU Yükünü görmek için "Algılayıcılar" sekmesini kontrol edin:

![Gerçek GPU kullanımı](./gpuz.png)

Ekran görüntüsündeki *GPU yükünün* %24 olduğuna dikkat edin. Ancak üst kısımda grafik kartının 202.5 MHz'de ve düşük güç durumunda olduğunu görebilirsiniz. "Kullanım" %24 olarak gösterilmesine rağmen bu en iyi senaryodur. 1823 mhz'lik maksimum saat hızına dayalı gerçek kullanım yalnızca **%2.6**'dır *(%24 * 202.5 MHz / 1823 MHz)*.

Örneğin bir kartta 100 Mhz ila 2000 Mhz arasında saat hızları olabilir. Görev yöneticisi %50 gösteriyorsa bu durumda **100 MHz'in %50'si veya 2000 MHz'in %50'si olması arasında büyük bir fark vardır**.

::: ipucu Özetlemek gerekirse: GPU yüküne bakarken GPU saat hızını göz önünde bulundurmak önemlidir. 100 MHz'in %50'si 2000 MHz'in %5'inden daha iyidir. :::

GPU performansını artırmak istiyorsanız:

* Geforce Experience dâhil olmak üzere, yer paylaşımı ve kayıt araçlarını devre dışı bırakın veya silin.
* Kare hızı ayarını düşürün ve MSAA'yı devre dışı bırakın (kaliteli 2D sahne duvar kâğıtlarını etkilemez).
    * Sabit kare hızları ve kaliteleri olduğu için bu işlem videoların performansını etkilemez.
    * Video duvar kâğıtlarının çözünürlük ve kare hızları bunları kontrol edecektir. GPU yükünü azaltmak için daha düşük FPS'ye sahip videolar kullanın
* Monitörlerinizi aynı GPU veya Windows'a bağlamak, bunları birleştirmeye çalışırken kötü bir performans ortaya çıkaracaktır.