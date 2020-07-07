# Ideia errada de utilização elevada do GPU

Na maior parte dos casos, o Windows Task Manager não mostra a verdadeira utilização do GPU, o que provoca grande confusão. A utilização do GPU ignora o *power state* e o clock rate da placa gráfica, o que o torna extremamente impreciso e normalmente mostra uma utilização muito mais elevada do GPU. Para ver a verdadeira utilização do GPU, utilize uma ferramenta como o GPU-Z:

* [Transferir GPU-Z](https://www.techpowerup.com/gpuz/)

## Descobrir a sua verdadeira carga do GPU

Depois de instalart o GPU-Z, vá ao separador "Sensors" e veja o clock rate do GPU e GPU Load:

![Utilização real do GPU](./gpuz.png)

Repare que a *GPU load* na imagem é 24%. No entanto, no topo poderá ver que a placa gráfica está no seu power state mais baixo, a 202,5 MHz. Esta é a melhor situação, embora a 'utilização' seja apresentada como 24%. A utilização real, baseada no clockrate máximo de 1823mhz é apenas **2,6%** *(24% * 202,5 MHz / 1823 MHz)*.

Uma placa deve ter clock rates entre, por exemplo, 100 Mhz e 2000 Mhz. Se o task manager mostrar 50% então **faz uma grande diferença se é 50% de 100 MHz ou 50% de 2000 MHz**.

::: dica Resumindo: é important ter em conta o clock rate do GPU quando observa a carga do GPU. 50% de 100 MHz é melhor do que 5% de 2000 MHz. :::

Se quiser melhorar o desempenho do GPU:

* Desative ou apague ferramentas de overlay e gravação, incluindo a Geforce Experience.
* Baixe a definição de game e desative MSAA (não afeta a qualdiade dos wallpapers de cena 2D).
    * Isto não influenciará o desempenho de vídeos, pois eles têm frame rates e qualidade fixos.
    * A resolução e o frame rate dos wallpapers de vídeo irão controlá-los. Utilize vídeos com FPS mais baixo para reduzir a carga do GPU
* Ligue os seus monitore ao mesmo GPU ou o Windows terá um mai desempenho enquanto tenta fundi-los.