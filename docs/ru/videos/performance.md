# Видео зависает / проигрывается с запозданием / имеет низкую производительность

Причина этих проблем может заключаться в низкой мощности аппаратного обеспечения, которая не позволяет ему правильно проигрывать определенные видео. Видеообои нельзя сравнить с обычными видеоплеерами: помимо самого видео обои должны включать в себя иконки и теоретически могут быть растянуты на несколько экранов. Также они по умолчанию используют видеодекодер графического процессора, чтобы максимально сократить загрузку ЦП.

## Background recording hooks
Подобные проблемы могут быть также связаны работой драйверов, использующих любые технологии видеозахвата программ, например ReLive, Shadow Play/Nvidia Share и Windows GameDVR. Попробуйте отключить эти функции и проверьте, была ли решена проблема. Затем внесите Wallpaper Engine в список исключений. Также надо удостовериться, что никакие программы записи и программы, накладывающиеся поверх экрана не загружаются в Wallpaper Engine, тормозя воспроизведение видео.

Вы можете использовать наш инструмент сканирования, чтобы узнать, установлены ли на вашем компьютере программы, про которые достоверно известно, что они используют захватчики видео. Однако, он не всегда отлавливает все программы, в особенности часто не регистрируя распространенные захватчики видео, используемые, например, Nvidia GeForce Experience:

* [Инструмент сканирования Wallpaper Engine](/debug/scantool.html)

## Динамическое сверхразрешение (DSR) / Масштабирование ГП
Изменения настроек системы на уровне драйверов, например масштабирование средствами графического процессора и динамическое сверхразрешение, тоже могут вызывать проблемы. Попробуйте отключить эти опции и, если это поможет, отключите их для конкретно для Wallpaper Engine.

## Низкая производительность в dwm.exe в системах с несколькими графическими процессорами / несколькими экранами
If you have enabled the integrated GPU on your desktop PC in the BIOS although a dedicated graphics card is installed, you can experience bad performance and high CPU usage of DWM.exe. If possible, do not enable your integrated GPU. **It's very important to plug all your monitors into your dedicated graphics card.** Using both GPUs at the same time will break hardware acceleration of the desktop window manager. Without Nvidia Optimus technology or similar, Windows will be forced to copy the wallpaper image from one GPU to the other - a slow operation. In fact any shared action between your GPUs will suffer from this, it is the same as moving a game window right between both monitors.

This specific issue does not affect hardware built for multi-GPU setups like laptops with Nvidia Optimus or proper Nvidia SLI / AMD Crossfire setups with a hardware bridge.