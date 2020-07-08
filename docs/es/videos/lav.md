---
tags:
  - webm
  - vídeo
  - negro
  - codec
  - filtros
  - 4K
  - HEVC
  - mkv
  - mp4
---

# Usar LAV y DirectShow
Si tienes problemas con codecs de vídeo dañados o quieres usar otros formatos de vídeo en el equipo, puedes instalar LAV y habilitar DirectShow en la configuración de Wallpaper Engine. Esto permitirá que los **vídeos 4K y HEVC funcionen mejor en Windows 7** y se podrán abrir archivos **.mvk**.

Por motivos legales, no podemos hacer un paquete de descarga de LAV con Wallpaper Engine, por lo que tendrás que descargarlo tú. Tras instalar LAV, tendrás que configurar Wallpaper Engine para usar DirectShow:

## 1. Instalar LAV
* Descarga las versiones x86 **Y** x64 de LAV Filters:
  * Descarga #1: [Github](https://github.com/Nevcairiel/LAVFilters/releases).
  * Descarga #2: [Fosshub](https://www.fosshub.com/LAV-Filters.html).
* Instala LAV y asegúrate de que el usuario de Windows tiene permisos de administrador.
* Reinicia Wallpaper Engine.

## 2. Habilitar DirectShow
* Abre la configuración de «Wallpaper Engine» y dirígete a la etiqueta «General».
* Cambia la opción **Plataforma de vídeo preferida** a **LAV de DirectShow**.
* Reinicia el programa e intenta usar el fondo de vídeo otra vez.

## Habilitar aceleración de hardware de WebM
Si los vídeos se entrecortan al final de los fondos, puedes usar archivos .webm que no tengan el mismo problema. Te recomendamos habilitar la aceleración de hardware para los vídeos .webm, ya que reducirá el consumo de CPU y, aun así, permitirá que los fondos de vídeo estén en bucle sin que se notes demasiado el corte en el último fotograma. Esto es una continuación de los pasos mencionados anteriormente, así que asegúrate de haber instalado LAV y haber habilitado DirectShow como se explica en la sección anterior.
* Abre la configuración de «Wallpaper Engine» y dirígete a la etiqueta «General».
* Cambia la opción **Plataforma de WebM preferida** a **Nativo**.
* Reinicia el programa e intenta usar el fondo de vídeo otra vez.

Comprueba que aparece el icono de LAV en la bandeja del sistema y que el consumo de CPU es casi cero. Si es así, el contenido .webm cuenta ya con la aceleración de hardware. En caso de que no funcione, comprueba que has configurado bien todas las opciones y que LAV se ha instalado correctamente.