<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Categorización de productos

    .row.mb-5.justify-content-center.align-items-center(data-aos="fade-right")
      .col-12 
        figure
          img(src='@/assets/curso/temas/tema2/img_1.png', alt='')

    p.mb-4(data-aos="fade-right") Al producto lo definen todas sus características tangibles e intangibles (empaque color precio, etc.), que son observables por el grupo objetivo y que es lo que motiva para su compra, si su beneficio principal o promesa básica marcan la diferencia con respecto a su competencia.
    p.mb-5(data-aos="fade-right") Como lo es el caso del ejemplo “Industria Panificadora Cholita” (se tratará durante todo este componente formativo), sobre el cual se trabajará con su producto “pan tajado” con sabor a fruta, que a partir de este momento se considera un #[b nuevo] producto dentro de la línea de panadería.

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-12
        ul.lista-ul--color.lista-title
          li.mb-0.px-3.py-1
            i.fas.fa-certificate(style="top:3px")
            h4.mb-0 Categorización de productos nuevos

    p.mb-5(data-aos="fade-right") Se definen 3 conceptos de productos:

    .row.tarjeta--container.mb-5(data-aos="fade-right")
      .col-lg.tarjeta.color-primario-a1.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema2/sl1-a.svg', alt='')
        h4.text-center Novedosos
        p.mb-0 Pueden ser innovadores, los cuales en el momento no tienen sustituto (tratamiento para el fortalecimiento muscular); sin embargo, en este rango pueden incluirse productos que, sin ser novedosos, son diferentes a los productos de su misma línea.
      .col-lg.tarjeta.color-primario-a2.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema2/sl1-b.svg', alt='')
        h4.text-center Sustitutos
        p.mb-0 Son productos similares en su uso, aunque sus características se diferencian de los competidores de su misma línea y desempeñan las mismas funciones desde el punto de vista de los consumidores, independientemente de la industria que provengan. Por ejemplo, las arepas pueden sustituir al pan.
      .col-lg.tarjeta.color-primario-a3.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema2/sl1-c.svg', alt='')
        h4.text-center Imitación
        p.mb-0 Tienen un gran parecido con el original y aunque existen en el mercado, pueden ser nuevos para la compañía. Por ejemplo, las copias de las zapatillas que tiene la marca registrada Converse.

    p.mb-5(data-aos="fade-right") En el ejemplo previamente descrito “Cholita”, se puede definir de 2 maneras: 

    .row.h-100.justify-content-center.mb-5(data-aos="zoom-in-down")
      .col-12.col-xl-6.mb-xl-0.mb-5
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema2/sl2-a.svg' alt='')
          .tarjeta.color-primario-b2
            .p-4
              h4 Producto novedoso
              p Ya que, dentro de la línea de panadería en pan tajado, es el primero con sabor a fruta.
      .col-12.col-xl-6.mb-xl-0.mb-5
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema2/sl2-b.svg' alt='')
          .tarjeta.color-primario-b2
            .p-4
              h4 Producto sustituto
              p Ya que la competencia directa en la línea de panadería sería pan común y otra opción sería la arepa que puede llegar a reemplazarla.

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-12
        ul.lista-ul--color.lista-title
          li.mb-0.px-3.py-1
            i.fas.fa-certificate(style="top:3px")
            h4.mb-0 Tipo de bienes

    p.mb-4(data-aos="fade-right") A nivel de mercadeo se hace referencia a los bienes y servicios que las personas eligen para satisfacer sus necesidades; los primeros son tangibles, palpables, medibles (alimentos, vehículos, ropa, aparatos electrónicos o electrodomésticos) y los segundos son intangibles (salud, educación, bienestar, seguridad, respaldo).
    p.mb-5(data-aos="fade-right") De acuerdo con sus características tangibles y de durabilidad se pueden clasificar en tres grupos de productos así:

    .row.justify-content-center.align-items-center.mb-4
      .col-12.col-lg-10.d-none.d-sm-none.d-lg-block(data-aos="zoom-in-down")
        ImagenInfografica.color-acento-botones.mb-4
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema2/info-1A.svg', alt='')
          .tarjeta.color-morado.p-3(x="29%" y="39%" numero="+")
            p Son productos que pueden ser consumidos paulatinamente hasta acabarse (crema dental, azúcar, cereal).
          .tarjeta.color-morado.p-3(x="60.5%" y="39%" numero="+")
            p Se diferencian con el grupo anterior, porque su vida de utilidad no es tan corta (ropa, electrodomésticos, llantas de autos). En los servicios se pueden encontrar aquellos beneficios que no son solo momentáneos (reparación de un vehículo, corte y tintura de cabello).
          .tarjeta.color-morado.p-3(x="92%" y="39%" numero="+")
            p Son adquiridos por el cliente final para su consumo (computadores). Este rango de productos tiene una clasificación, de acuerdo con el hábito de compras, así:
          .tarjeta.color-morado.p-3(x="92%" y="56%" numero="+")
            p Son productos que pueden ser similares en cuanto a calidad, pero diferentes en precio, diseño y calidad de distribución (ropa). Algunos clientes preguntarán más por un diseño exclusivo, aunque la calidad de fabricación sea similar a la competencia.
          .tarjeta.color-morado.p-3(x="92%" y="72%" numero="+")
            p Son productos con una característica especial o de una marca propia, que lo hace más costoso para el consumidor; sin embargo, lo elige buscando un beneficio particular (autos, celulares, cañas de pescar). Sus puntos de venta son especializados y el cliente potencial mediante información lo ubica y lo compra. 
          .tarjeta.color-morado.p-3(x="92%" y="89%" numero="+")
            p Son adquiridos para ser procesados o manejarlos en el desarrollo de un negocio (compra de pieles de animales para ser procesadas como cuero y manufacturar artículos de cuero, como chaquetas y bolsos). 
      .col-12.d-block.d-lg-none
        .row 
          .col-12.mb-4
            figure
              img(src='@/assets/curso/temas/tema2/info-1B.svg', alt='')

    .tarjeta.color-acento-contenido-a.p-3.mb-5(data-aos="zoom-in-down")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema2/envio-mundial.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-1 Clasificación internacional de productos y servicios
              p Para esta clasificación, se tomó una información amplia de todos los productos y servicios que se manejan a nivel internacional, basado en la Clasificación de Niza, la cual se relaciona en el siguiente documento anexo.
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo_Clasificacion_intercaional_productos_servicios.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download





</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
