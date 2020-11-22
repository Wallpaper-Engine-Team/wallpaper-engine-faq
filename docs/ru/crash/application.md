---
tags:
  - mdmp
---

# Аварийное завершение работы Wallpaper Engine

Wallpaper Engine — тщательно тестируемая и хорошо продуманная программа с миллионами пользователей, поэтому сбои достаточно редко бывают вызваны именно внутренними ошибками. Если в сообщении об аварийном завершении работы упомянуты файлы **.dll**, пожалуйста, пройдитесь по приведенному ниже списку и попробуйте найти конкретный файл **.dll**, который приводит к сбоям в вашем случае:

[[toc]]

::: tip
Согласно отчетам от пользователей, практически во всех случаях аварийного завершения работы причиной сбоя являются неисправные драйверы видеокарты, антивирусы или ошибки в других неисправных программах, которые дестабилизируют работу компьютера.
:::

## Аварийное завершение работы Wallpaper Engine: быстрое решение

Если вы не уверены, что стало причиной сбоя в работе Wallpaper Engine, пожалуйста, проведите чистую переустановку драйверов видеокарты. Это значит, что сначала нужно удалить драйверы и после их полной деинсталляции заново установить последнюю версию. Некоторые драйверы предлагают опцию «Выполнить чистую установку» в разделе расширенных настроек. Обязательно выберите эту опцию, чтобы автоматически удалить все остаточные файлы, связанные с неисправными драйверами. Последние версии драйверов от основных производителей видеокарт можно скачать по ссылкам:

* [Nvidia GeForce](https://www.nvidia.com/Download/index.aspx)
* [AMD Radeon](https://www.amd.com/support)
* [Intel Graphics](https://downloadcenter.intel.com/product/80939/Graphics-Drivers)

Если у вас установлен антивирус, обязательно добавьте Wallpaper Engine в исключения в его настройках (этот пункт не касается Windows Defender). В некоторых случаях после этого бывает необходимо переустановить Wallpaper Engine, поскольку антивирус может нарушать целостность некоторых файлов или блокировать их без возможности восстановления. Make sure your antivirus app ignores the *wallpaper_engine* directory and especially all .exe files:

* *wallpaper_engine/wallpaper32.exe*
* *wallpaper_engine/wallpaper64.exe*
* *wallpaper_engine/launcher.exe*
* *wallpaper_engine/bin/webwallpaper32.exe*
* *wallpaper_engine/bin/ui32.exe*

Также обязательно проведите проверку целостности файлов Wallpaper Engine с помощью Steam:

* [Steam Support: проверка целостности файлов игры](https://support.steampowered.com/kb_article.php?ref=2037-QEUH-3335)

In severe cases, you may need to uninstall Wallpaper Engine and manually delete the *wallpaper_engine* directory and then reinstall the app once your antivirus app has been configured to be less strict.

## Аварийное завершение работы после гибернации / спящего режима

Если Wallpaper Engine аварийно завершает работу после гибернации системы, это значит, что у Windows возникают сложности с одновременным восстановлением драйверов видеокарты и Wallpaper Engine. Гибернация в Windows — не самый надежный процесс. Чтобы обойти эту проблему, включите в Wallpaper Engine опцию **Безопасный старт после гибернации**. С ней после гибернации системы Wallpaper Engine пытается автоматически перезапуститься, не рассчитывая на правильную работу Windows.

## Wallpaper Engine has crashed / Error code "0xC0000005"

This error message is almost always caused by **antivirus applications** or **faulty drivers**. If you are using an antivirus application it is very likely the reason for this crash even if no activity was reported by your antivirus app. Please make sure to configure it so that it ignores the *wallpaper_engine* installation directory and all important Wallpaper Engine executables. See the *Wallpaper Engine Crash Quick Fix Attempt* section above for more detailed information.

If you do not have an antivirus app installed, please reinstall all important drivers and try switching to the 64 Bit version of Wallpaper Engine (or 32 Bit version if you have already used the 64 Bit version).

In some cases, this can also be caused by other applications interfering with Wallpaper Engine in an unusual way. This mainly concerns apps that inject code into Wallpaper Engine or alter your Windows installation significantly in some way.

!["0xC0000005" Wallpaper Engine crash message](/img/faq/0xC0000005.png)

## Сбои Wallpaper Engine, вызванные сторонними программами

### KERNELBASE.dll / ntdll.dll

В данном случае сбой произошел в самом ядре Windows. Обычно причиной подобного сбоя являются антивирусные программы или неисправные драйверы видеокарты. Подробную информацию по решению этой проблемы см. в разделе «Быстрое решение» выше. Также подобный сбой может быть вызван неисправностями в самой системе. Восстановить потенциально неисправные файлы Windows можно с помощью средства проверки системных файлов Microsoft:

* [Средство проверки системных файлов Microsoft](https://support.microsoft.com/ru-ru/help/929833/use-the-system-file-checker-tool-to-repair-missing-or-corrupted-system)

### d3d11.dll

В данном случае сбой произошел в DirectX. Обычно причиной подобного сбоя являются антивирусные программы или неисправные драйверы видеокарты. Подробную информацию по решению этой проблемы см. в разделе «Быстрое решение» выше. Также подобный сбой может быть вызван неисправностями в самой системе. Восстановить потенциально неисправные файлы Windows можно с помощью средства проверки системных файлов Microsoft:

* [Средство проверки системных файлов Microsoft](https://support.microsoft.com/en-us/help/929833/use-the-system-file-checker-tool-to-repair-missing-or-corrupted-system)

### mfplat.dll

В данном случае сбой произошел в Windows Media Foundation. Причиной подобного сбоя могут быть неисправные драйверы видеокарты, но чаще проблема связана с неисправными или отсутствующими видеокодеками в системе. В этом видео мы рассказываем, как устранить такие сбои:

[Видео](/noshow/notplaying.html)

### AudioSes.dll

В данном случае сбои в работе обычно бывают вызваны проблемами в самой системе Windows. Попробуйте переустановить последнюю версию драйверов звуковой карты — это может решить проблему. Кроме того, попробуйте на вкладке *Производительность* настроек Wallpaper Engine для опции *Другое приложение воспроизводит аудио* выбрать значение *Продолжать работу*.

### atiumdag.dll / atiumd64.dll

* [AMD Radeon](https://www.amd.com/support)

::: tip
Обратите внимание Перед переустановкой установите флажок «Выполнить чистую установку» или удалите текущую версию драйверов вручную. Если драйверы на вашем компьютере неисправны, важно полностью удалить их перед установкой новой версии.
:::

### nvwgf2umx.dll

В работе драйверов Nvidia происходят сбои. Перейдите на сайт Nvidia, загрузите последнюю версию драйверов и установите ее:

* [Nvidia GeForce](https://www.nvidia.com/Download/index.aspx)

::: tip
Обратите внимание Перед переустановкой установите флажок «Выполнить чистую установку» или удалите текущую версию драйверов вручную. Если драйверы на вашем компьютере неисправны, важно полностью удалить их перед установкой новой версии.
:::

### igdumd64.dll / igd10umd64.dll / igdumdx32.dll / igd10umd32.dll

В работе драйверов Intel происходят сбои. Перейдите на сайт Intel, загрузите последнюю версию драйверов и установите ее:

* [Intel Graphics](https://downloadcenter.intel.com/product/80939/Graphics-Drivers)

### RZChromaSDK.dll / RzChromaSDK64.dll

These types of crashes are caused by Razer Chroma which is part of **Razer Synapse**. Usually, this is caused by a faulty installation of Razer Synapse. In most cases, a clean reinstallation of Razer Synapse fixes these types of crashes:

**Clean reinstallation of all Razer software**

::: warning
Make sure Wallpaper Engine is turned off while reinstalling Razer Synapse.
:::

1. Turn off Wallpaper Engine completely if it is running (right-click on the icon in the Windows tray and then select **Quit**)
2. Uninstall all Razer software from your computer through Windows
3. Download the latest version of Razer's software suite from their website and install it:

* [Download Razer Synapse 3](https://www.razer.com/synapse-3)

4. Afterwards restart your computer without restarting Wallpaper Engine beforehand.

**Reinstallation does not fix the problem**

If the issue is not resolved by a reinstallation of Razer Synapse, there may be an underlying issue with Razer Synapse itself, in the past this has been caused by faulty Razer Synapse updates. Try turning off the LED Plugin (*"iCUE & Chroma SDK"*) in the **Plugins** tab of the Wallpaper Engine settings until this problem is fixed in a future Razer Synapse update.

If the crashes persist even after a clean reinstallation of Razer Synapse, please contact Razer support directly and inform them about the crashes. If they are unable to help, please reach out to us for technical support - we can look into these crashes and forward our findings to the Razer Synapse development team as well though Razer should be the main contact for this specific crash.

### MMDEvAPI.dll

Сбои подобного типа происходят по причине неисправности ПО, обрабатывающего на вашем компьютере звук. Обычно аварийное завершение работы связано с программами для улучшения качества звука, которые предустанавливаются на многие ноутбуки. Подобные программы часто приводят к сбоям в работе системы, поскольку плохо взаимодействуют с Windows. Поищите на вашем компьютере программы Sonic Studio и Nahimic и обновите их. Если вы не найдете обновлений для этих программ, их можно просто удалить, поскольку они не являются необходимыми для нормального воспроизведения звука.

### fraps32.dll

Сбой был вызван Fraps — программой для подсчета количества кадров в секунду (FPS) и захвата видео с экрана. Обновления для Fraps не выпускались с 2013 года, и в целом эта программа очень сильно устарела. Пожалуйста, воспользуйтесь альтернативными программами: к аварийному завершению работы приводит ошибка в Fraps, которая, возможно, никогда не будет исправлена, поскольку разработка этой утилиты заброшена.

## Crash error 0xc000007b

Это сообщение означает, что один из модулей Windows был поврежден. Обычно в таких случаях оказывается неисправен сам DirectX. Попробуйте вручную удалить эти файлы:

* C:\Windows\SysWOW64\d3dx9_43.dll
* C:\Windows\System32\d3dx9_43.dll

Затем установите их заново с помощью инструмента установки DirectX 9: *C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\_CommonRedist\DirectX\Jun2010\dxsetup.exe* (точное расположение файлов будет зависеть от того, где у вас находится каталог установки wallpaper_engine).

Если вы ошибка продолжает возникать, это значит, что поврежден еще и другой модуль DirectX. Обычно это указывает на более серьезные проблемы в самой системе Windows, без исправления которых Wallpaper Engine работать не будет.