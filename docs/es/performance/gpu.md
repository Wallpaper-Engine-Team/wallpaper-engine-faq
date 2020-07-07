# Malentendido con alto consumo de GPU

El Administrador de tareas de Windows no muestra el verdadero uso de la GPU en la mayoría de los casos, lo que puede dar lugar a confusión. El consumo de GPU ignora el *consumo de energía* y la velocidad de reloj de la tarjeta gráfica, así que suele mostrar un consumo de GPU impreciso y bastante más alto de lo que es. Para ver el consumo real de la GPU, usa una herramienta como GPU-Z:

* [Descargar GPU-Z.](https://www.techpowerup.com/gpuz/)

## Averiguar la carga real de la GPU

Cuando hayas instalado GPU-Z, echa un vistazo a la pestaña «Sensors» para ver la velocidad de reloj y la carga de la GPU:

![Consumo real de la GPU](./gpuz.png)

Fíjate en que la *carga de la GPU* se encuentra a 24 % en la captura de pantalla. Sin embargo, justo arriba puedes ver que la tarjeta gráfica se encuentra a 202.5 MHz, es decir, en bajo consumo. Este es el mejor de los casos, a pesar de que el uso muestre un 24 %. El uso real basado en la velocidad de reloj de 1823MHz es tan solo **2,6 %** *(24 % * 202.5MHz / 1823 MHz)*.

La velocidad de reloj de la tarjeta puede estar entre 100 MHz y 2000 MHz, por ejemplo. Si el Administrador de tareas muestra más de 50 %, **la diferencia reside en si es el 50 % de 100 MHz o el 50 % de 2000 MHz**.

::: tip En resumen: es importante que tengas en mente la velocidad de reloj de la GPU al comprobar la carga de la GPU. 50 % de 100 MHz es mejor que 5 % de 2000 MHz. :::

Si quieres mejorar el rendimiento de la GPU:

* Deshabilita o elimina las herramientas superpuestas o de grabación, Geforce Experience incluido.
* Baja los fotogramas por segundo y deshabilita el MSAA (no afecta a la calidad de los fondos 2D de escena).
    * No afecta al rendimiento de los vídeos, ya que tienen unos fotogramas por segundo y una calidad fijos.
    * La resolución y los fotogramas por segundo de los fondos de vídeo lo controlan, así que usa vídeos con menos fotogramas por segundo para reducir la carga de la GPU.
* Conecta los monitores a la misma GPU o bajará el rendimiento de Windows cuando trate de unifircarlos.