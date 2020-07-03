---
tags:
  - mdmp
---

# Wallpaper Engine аварийно завершил работу

Wallpaper Engine — тщательно тестируемая и хорошо продуманная программа с миллионами пользователей, поэтому аварийное завершение работы достаточно редко бывает вызывано внутренними ошибками. Если в сообщении об аварийном завершении работы упомянуты **.dll** файлы, пожалуйста, пройдитесь по приведенному ниже списку и попробуйте найти конкретный **.dll** файл, который приводит к сбоям в вашем случае:

[[toc]]

::: Подсказка Практически во всех случаях, когда мы получаем от пользователей отчеты об аварийном завершении работы, причиной сбоя являются неисправные драйвера видеокарты, антивирусы или ошибки в других посторонних программах, которые дестабилизируют работу компьютера. :::

## Аварийное завершение работы Wallpaper Engine: быстрое решение

Если вы не уверены, что стало причиной сбоя в работе Wallpaper Engine, пожалуйста, проведите чистую переустановку драйверов видеокарты. Это значит, что сначала вам надо будет удалить драйвера, и, после того, как они будут полностью деинсталлированы, переустановить последнюю версию. Некоторые драйвера предлагают опцию "Провести чистую переустановку" в разделе расширенных настроек. Убедитесь, что эта опция выбрана, чтобы автоматически удалить все остаточные файлы, связанные с неисправными драйверами. Вы можете скачать последние версии драйверов от основных производителей видеокарт по ссылкам:

* [Nvidia GeForce](https://www.nvidia.com/Download/index.aspx)
* [AMD Radeon](https://www.amd.com/support)
* [Intel Graphics](https://downloadcenter.intel.com/product/80939/Graphics-Drivers)

Если у вас установлен антивирус, убедитесь, что Wallpaper Engine добавлен в исключения в разделе настроек (этот пункт не касается Windows Defender). В некоторых случаях после этого бывает необходимо переустановить Wallpaper Engine, поскольку антивирус может нарушать целостность некоторых файлов или блокировать их без возможности восстановления.

Также попробуйте провести проверку целостности файлов Wallpaper Engine с помощью Steam, чтобы убедиться, что они исправны:

* [Steam Support: проверка целостности файлов игры](https://support.steampowered.com/kb_article.php?ref=2037-QEUH-3335)

## Причиной аварийного завершения работы Wallpaper Engine скорее всего стало другое приложение

### KERNELBASE.dll / ntdll.dll

В данном случае речь сбой произошел в самом ядре Windows. Обычно причиной подобного сбоя являются антивирусные программы или неисправные драйвера видеокарты. Вы найдете подробную информацию по решению этой проблемы в разделе "быстрое решение" выше. Также подобный сбой может быть вызван неисправностями в самой системе. Воспользуйтесь инструментом Microsoft System File Checker, который восстановит потенциально неисправные файлы Windows:

* [Microsoft System File Checker Tool](https://support.microsoft.com/en-us/help/929833/use-the-system-file-checker-tool-to-repair-missing-or-corrupted-system)

### d3d11.dll

В данном случае сбой произошел в DirectX. Обычно причиной подобного сбоя являются антивирусные программы или неисправные драйвера видеокарты. Вы найдете подробную информацию по решению этой проблемы в разделе "быстрое решение" выше. Также подобный сбой может быть вызван неисправностями в самой системе. Воспользуйтесь инструментом Microsoft System File Checker, который восстановит потенциально неисправные файлы Windows:

* [Microsoft System File Checker Tool](https://support.microsoft.com/en-us/help/929833/use-the-system-file-checker-tool-to-repair-missing-or-corrupted-system)

### mfplat.dll

В данном случае сбой произошел в Windows Media Foundation. Причиной подобного сбоя могут быть неисправные драйвера видеокарты, но чаще проблема связана с неисправными или отсутствующими видеокодеками в системе. Посмотрите наше видео с руководством по решению данной проблемы, чтобы устранить сбои в работе программы:

[Кликните сюда](/noshow/notplaying.html)

### AudioSes.dll

В данном случае аварийное завершение работы обычно бывает вызвано проблемой в самой системе Windows. Попробуйте переустановить последнюю версию драйверов звуковой карты, это может решить проблему. Кроме того, вы можете устранить проблему, выбрав опцию *"Продолжать работу"* во вкладке *"Производительность"* вместо опции *"Другое приложение воспроизводит аудио"*.

### atiumdag.dll / atiumd64.dll

* [AMD Radeon](https://www.amd.com/support)

::: Подсказка Обратите внимание Перед переустановкой убедитесь, что у вас стоит галочка в пункте "Провести чистую переустановку" или удалите текущую версию драйверов вручную. Если драйвера на вашем компьютере неисправны, важно полностью удалить их перед установкой новой версии. :::

### nvwgf2umx.dll

В работе драйверов Nvidia происходят сбои. Перейдите на сайт Nvidia, загрузите последнюю версию драйверов и установите ее:

* [Nvidia GeForce](https://www.nvidia.com/Download/index.aspx)

::: Подсказка Обратите внимание Перед переустановкой убедитесь, что у вас стоит галочка в пункте "Провести чистую переустановку" или удалите текущую версию драйверов вручную. Если драйвера на вашем компьютере неисправны, важно полностью удалить их перед установкой новой версии. :::

### igdumd64.dll / igd10umd64.dll / igdumdx32.dll / igd10umd32.dll

В работе драйверов Intel происходят сбои. Перейдите на сайт Intel, загрузите последнюю версию драйверов и установите ее:

* [Intel Graphics](https://downloadcenter.intel.com/product/80939/Graphics-Drivers)


### MMDEvAPI.dll

Сбои подобного типа происходят по причине неисправности звукового программного обеспечения, установленного на вашем компьютере. This is usually caused by "sound enhancement" software, especially the ones pre-installed on various notebooks. This type of software will often cause crashes because they interact with Windows in a buggy way, try and look for "Sonic Studio" or "Nahimic" and update them. If you cannot find an update for these programs, you can also uninstall them as they are not necessary for your computer audio to function properly.

### fraps32.dll

The crash has been caused by the FPS monitor and screen recording app Fraps. Fraps has not received updates since 2013 and is a heavily outdated application. Please use an alternative to Fraps as this is a Fraps bug which may never be fixed as the software is abandoned.

## Crash error 0xc000007b

This means that a Windows module has been corrupted by something on your system - usually DirectX itself is broken in this case. Try manually deleting these files:

* C:\Windows\SysWOW64\d3dx9_43.dll
* C:\Windows\System32\d3dx9_43.dll

Now install them again with the DirectX 9 installer: *C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\_CommonRedist\DirectX\Jun2010\dxsetup.exe* (The exact location depends on where your wallpaper_engine installation directory is).

If you still get this error it might be another, similar DirectX module that has been broken by something. This usually indicates a bigger underlying issues with your Windows installation which you need to fix before you can run Wallpaper Engine.

## Crashing after Hibernation / Sleep

If Wallpaper Engine crashes after Windows hibernation, then Windows is failing to correctly restore your graphics card drivers and Wallpaper Engine together. Hibernation in Windows is simply not a reliable process. You can enable the option **Safe start after hibernation** in Wallpaper Engine to mitigate this issue. This option will attempt to automatically restart Wallpaper Engine instead of expecting Windows to correctly work after hibernation.