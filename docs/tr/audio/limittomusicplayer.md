# Ses görselleştiricilerini müzik çalarlarla sınırlama

Sesin Windows'taki çalışma şeklinden dolayı Wallpaper Engine'in ses görselleştiricilerini müzik çalar seçiminizle sınırlaması mümkün değildir. Ancak bunu gerçekleştirebilmek adına *sahte* bir ses cihazı oluşturmak için üçüncü taraf yazılım kullanabilirsiniz. Bu rehber, nasıl bu tür bir sahte ses cihazı kuracağınızı ve bu kurulumun düzgün çalışması için Windows 10 ve Wallpaper Engine'in nasıl yapılandırılacağını açıklar.

Herhangi bir sahte ses cihazı için destek sunmadığımızı ve bunun işe yarayacağını garanti etmediğimizi unutmayın. Bu, Wallpaper Engine'in sunduklarının çok ötesine geçen oldukça gelişmiş bir kurulumdur. Bu rehberi yalnızca sistemlerini özelleştirmek için elinden geleni yapmak etmek isteyen kullanıcılara dostça bir yardım olarak sunuyoruz.

::: warning
Lütfen unutmayın Bu rehber yalnızca Windows 10'un güncellenmiş sürümlerinde çalışır. Daha eski Windows sürümlerinde bazı özellikler eksik olabilir ve bu durum da rehbere uyulmasını imkânsız kılar.
:::

### Sahte bir ses cihazı kurma

Aşağıdaki siteden ücretsiz olarak indirebileceğiniz **VB-CABLE Virtual Audio Device** uygulamasını kullanmanızı öneririz:

* [Virtual Audio Device İndir](https://www.vb-audio.com/Cable/)

Arşiv dosyasını indirin ve çıkarın, sonrasında Windows 10 sürümünüze göre **VBCABLE_Setup.exe** veya **VBCABLE_Setup_x64.exe** dosyalarını kullanarak 32 Bit veya 64 Bit ses cihazını kurun. Kurulum dosyasına sağ tıklayıp *Yönetici olarak çalıştır* seçeneğini seçerek dosyayı yönetici haklarıyla başlattığınızdan emin olun. Kurulum talimatlarını izleyin ve ses cihazının başarıyla kurulduğundan emin olun.

### Windows ve Wallpaper Engine Kurulumu

Aşağıdaki adımlardan herhangi biriyle ilgili yardıma ihtiyacınız olursa baştan sona Windows 10'daki (İngilizce arayüz) tüm adımları gösteren aşağıdaki videoya göz atın.

1. Daha sonra Wallpaper Engine'de kullanmak istediğiniz yazılımı kullanarak müzik çalmaya başlayın
2. Windows tepsisindeki saatin yanında bulunan ses simgesine sağ tıklayın ve **Ses ayarlarını aç**'ı seçin.
3. Scroll down to the bottom of the page that opens and click on **App volume and device preferences**.
4. A list of all applications playing audio will be shown. Find your music player and in the **Output** column, change the option from **Default** to **CABLE Input (VB-Audio Virtual Cable)**. Your audio player should immediately turn quiet, this is to be expected.
5. Go back to the main page of the Windows sound settings and in the upper right corner, select **Sound Control Panel**.
6. A small window will appear, navigate to the **Recording** tab, then right-click on the **CABLE Output** audio device and select **Properties**.
7. Another window will appear, click on the **Listen** tab and select **Listen to this device**. Click on **Apply** and **OK** and the music from your music player should return.
8. Windows is now properly configured, open up the **Wallpaper Engine settings** and in the **General** tab, change the **Audio recording device** to **CABLE Input (VB-Audio Virtual Cable)**. Wallpaper Engine should now start reacting to the music from your music player but will ignore any other application on your computer.

*Video showcasing all the steps described above:*

<video width="100%" controls>
  <source src="/videos/audioinputdevice.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
