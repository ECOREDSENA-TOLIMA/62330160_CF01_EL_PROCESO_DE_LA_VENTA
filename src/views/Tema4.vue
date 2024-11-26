<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Mezcla de producto
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-down")
      .col-lg-4.col-8.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema4/img_1.png', alt='')
      .col-lg-8.col-12
        p.mb-4 Una compañía puede tener diversas líneas de producto que conforman una mezcla de producto, lo cual es simplemente el conjunto de todas las líneas y los productos de cada una. Para el caso Industria Panificadora Cholita, se podría definir que cuenta con dos líneas:
        .row.h-100.justify-content-center
          .col-md-6.col-lg.mb-3.mb-lg-0(data-aos="fade-down")
            .tarjeta-avatar
              img(src='@/assets/curso/temas/tema4/sl1-a.svg' alt='AvatarTop')
              .tarjeta.color-primario.w-100
                .p-4
                  h4.text-center Línea de panadería
                  p Pan tajado tradicional, pan fruticas, #[em croassan], pan sanduchero, pan perro, pan #[em baguette], pan integral, pan pizza, pan queso.
          .col-md-6.col-lg.mb-3.mb-lg-0(data-aos="fade-down")
            .tarjeta-avatar
              img(src='@/assets/curso/temas/tema4/sl1-b.svg' alt='AvatarTop')
              .tarjeta.color-primario.w-100
                .p-4
                  h4.text-center Línea chocolatería
                  p Chocolate fino, tradicional, clavos y canela, vainilla.

    p.mb-4(data-aos="fade-right") La mezcla de producto puede describirse según su amplitud, profundidad y consistencia.
    p.mb-5(data-aos="fade-right") Para el caso:

    .row.tarjeta--container.mb-5(data-aos="fade-right")
      .col-lg.tarjeta.color-primario-a1.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema4/sl2-a.svg', alt='')
        h4.text-center Amplitud
        p.mb-0 La mezcla de producto se refiere al número total de productos de la Industria Panificadora. (14 productos).
      .col-lg.tarjeta.color-primario-a2.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema4/sl2-b.svg', alt='')
        h4.text-center Profundidad
        p.mb-0 Hace referencia a cuántas versiones de cada producto se ofrecen dentro de la línea. (Plan tradicional: tamaño familiar - tamaño personal). Para cada producto se fabrica 3 presentaciones.
      .col-lg.tarjeta.color-primario-a3.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema4/sl2-c.svg', alt='')
        h4.text-center Consistencia
        p.mb-0 Hace referencia a que tan parecidas son las diversas líneas en cuanto a su uso final, sus características para la producción, canales de distribución y otros factores.

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-12
        ul.lista-ul--color.lista-title
          li.mb-0.px-3.py-1
            i.fas.fa-certificate(style="top:3px")
            h4.mb-0 Componentes de la mezcla 

    p.mb-5(data-aos="fade-right") En la mezcla de productos, es importante que la organización establezca el comportamiento de:

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-down")
      .col-lg-3.col-6.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema4/img_2.svg', alt='')
      .col-lg-9.col-12
        TabsA.color-acento-botones.mb-5
          .tarjeta.color-primario.p-4(titulo="Producto líder")
            h4 Producto líder
            p Es el producto que le genera mayores ganancias a la compañía. Ejemplo: el celular estrella de una empresa dedicada a la tecnología.
          .tarjeta.color-primario.p-4(titulo="Producto de atracción")
            h4 Producto de atracción
            p Es el producto diseñado para llegar a todo tipo de cliente y dentro de la línea es el que tiene un costo más económico. Ejemplo: el modelo económico de una empresa que comercializa televisores.
          .tarjeta.color-primario.p-4(titulo="Producto de estabilidad")
            h4 Producto de estabilidad
            p Hace referencia al producto que permita evitar fluctuaciones en ventas; se debe tener en cuenta las temporadas, las celebraciones y las ofertas. Ejemplo: la temporada escolar, la navidad, el día del niño.
          .tarjeta.color-primario.p-4(titulo="Producto táctico")
            h4 Producto táctico
            p Es aquel producto que la organización utiliza para asegurar su posición frente a la competencia. Ejemplo: cuando la competencia ataca con ofertas o cualquier estrategia de mercado, la organización saca al mercado un nuevo producto para contraatacar a la competencia.


</template>

<script>
export default {
  name: 'Tema4',
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
