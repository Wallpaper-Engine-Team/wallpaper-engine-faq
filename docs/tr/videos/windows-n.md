# Windows N: mfplat.dll eksik

Windows N'de medya özellikleri bulunmaz! Windows sürümünüz ve derleme numaranız için doğru Medya Özellik Paketi'ni yüklemelisiniz:

#### Windows 10'un son sürümleri
Güncel Windows 10 sürümleri için Windows ayarlar aracılığıyla Media Feature Pack'i kurabilirsiniz. **Windows Settings**'i açın ve sonra şu konuma gidin:

*Uygulamalar> Uygulamalar ve Özellikler > İsteğe Bağlı Özellikler > Bir Özellik Ekle*

İsteğe bağlı özelliklerin bir listesi belirir, uygun İsteğe Bağlı Özelliklerden **Media Fature Pack**'i arayın, kurun ve bilgisayarınızı yeniden başlatın. Bu konuda daha fazla yardım almak ve daha fazla bilgi için lütfen Microsoft İnternet Sitesini ziyaret edin: [Windows 10 N için Media Feature Pack](https://support.microsoft.com/en-us/help/4516397/media-feature-pack-for-windows-10-n-november-2019).

#### Outdated Windows 10 (May 2019 update or older):
Older versions of Windows 10 require you to manually download the Media Feature Pack for your exact version of Windows 10:
  * [Medya Özellik Paketi indirme](https://www.microsoft.com/en-us/software-download/mediafeaturepack) (sayfanın sadece İngilizcesi mevcuttur)

#### Windows 7:
  * Windows 7 is not supported by Microsoft anymore. You need update **KB968211** to add media features but Microsoft has removed the download page for it. Try upgrading to Windows 10 or reinstall a normal Windows 7 with media features.

**x64 ve x86 sürümlerini indirmeyi unutmayın.**

Hâlâ aynı hatayı veriyorsa **yanlış sürümü indirmişsiniz demektir**, doğru sürümünü indirip PC'nizi yeniden başlatmayı deneyin. Hiçbir şey çalışmıyorsa ve mfplat.dll hâlâ eksikse sistem dosyalarınız hatalı olabilir, sistemi bir önceki haline getirip Windows'u yeniden yüklemeyi deneyin.

:::warning
Unutmayın Microsoft'un Windows 10'a getirdiği her büyük güncellemede medya özellik paketini yeniden yüklemeniz gerekir. Bunu istemiyorsanız Windows'un normal bir sürümüne geçebilirsiniz; diğer sürümler bu özelliklerle birlikte gelirler!

**Windows N'in tüm meselesi medya özelliğine sahip olmamasıdır. Bunu istemiyorsanız Windows N kullanmamalısınız.**
:::