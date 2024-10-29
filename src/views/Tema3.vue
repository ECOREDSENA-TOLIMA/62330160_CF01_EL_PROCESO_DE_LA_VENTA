<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 La línea de productos
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-down")
      .col-lg-5.col-6.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema3/img_1.png', alt='')
      .col-lg-7.col-12
        p Una línea como un grupo de productos están relacionados entre sí, porque funcionan de manera similar (satisfacción del consumidor), se venden al mismo tipo de cliente y su comercialización es manejada a través de los mismos canales. Para el ejemplo, se tomará la línea de productos: panadería, producto: pan tajado, beneficio principal: sabor a fruta, consumidor: grupo familiar.
        ul.lista-ul.ul-color-a
          li 
            i.fas.fa-folder
            p.mb-0 Línea de producto: panadería. 
          li 
            i.fas.fa-folder
            p.mb-0 Producto: pan tajado frutal. 
          li 
            i.fas.fa-folder
            p.mb-0 Beneficio principal: sabor a fruta. 
          li 
            i.fas.fa-folder
            p.mb-0 Consumidor: grupo familiar, pertenecientes a grupo social medio o medio alto.

        .cajon.color-primario.p-4.mb-4
          p.mb-0 Dentro del ejercicio se encuentran productos semejantes como los de las marcas registradas Bimbo – Comapan – Mamá Inés – Marcas propias de los supermercados, en relación a que son pan tajado, pero si se va más al detalle, su beneficio principal es su sabor a fruta, encontrando que su competidor directo sería la marca registrada Bimbo.

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-12
        ul.lista-ul--color.lista-title
          li.mb-0.px-3.py-1
            i.fas.fa-certificate(style="top:3px")
            h4.mb-0 Amplitud de la línea
    
    p.mb-4(data-aos="fade-right") Si la organización quiere que su posicionamiento sea como una organización con muchos productos, buscando con ello una alta participación de mercado, ofrecerá línea de productos más amplia, esta visión tiene como ventaja que, si alguno de ellos deja de ser rentable, puede ser remplazado por otro o simplemente sale del mercado.
    p.mb-5(data-aos="fade-right") En contraposición, aquellas organizaciones que manejan líneas de productos más estrechas buscan una alta rentabilidad en su línea.

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.mb-5.p-3.p-sm-4.p-md-5(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img_2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las compañías tienden a ampliar su línea de productos de modo sistemático de dos maneras: expandiéndola y complementándola.
          br
          br
          | En el ejemplo previo, la organización es de línea estrecha y a futuro se podrá expandir sacando al mercado diferente sabores frutales de pan integral y en el lanzamiento del producto se maneja solo el pan blanco tajado con sabor a naranja.

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-12
        ul.lista-ul--color.lista-title
          li.mb-0.px-3.py-1
            i.fas.fa-certificate(style="top:3px")
            h4.mb-0 Extensión de la línea

    p.mb-4(data-aos="fade-right") Cuando un producto incluye una mejora, un precio más económico, unas variaciones en sabores, en color y presentación o en un diseño de empaque funcional, es lo que se denomina extensión de línea, manejada siempre por una misma familia de marca; cuando una compañía decide una extensión, esta puede ampliarse hacia abajo, arriba o en ambos sentidos.
    p.mb-5(data-aos="fade-right") A continuación, una explicación al respecto:

    .row.mb-4.justify-content-center.align-items-center
      .col-12(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido(data-aos="zoom-in-right")
          p.pb-0.mb-0 <b>Tabla 1. </b> <em>Extensión en línea</em>
        .tabla-b.color-acento-contenido.mb-5
          table
            thead
              tr.text-center.bg-header-table
                th Estrategia
                th Razones
                th Riesgos
            tbody
              tr
                th.text-center(style="width:25%") Ampliar hacia abajo
                td 
                  ul.lista-ul.mb-0
                    li
                      i.lista-ul__vineta
                      | Crecimiento lento en la parte superior.
                    li
                      i.lista-ul__vineta
                      | Crecimiento acelerado en la parte inferior.
                    li
                      i.lista-ul__vineta
                      | Objetivo de la compañía: crecer llegando a más segmentos.
                    li
                      i.lista-ul__vineta
                      | Cubrir una necesidad evitando así la entrada de competidores de su misma línea.
                td 
                  ul.lista-ul.mb-0
                    li
                      i.lista-ul__vineta
                      | Compañías del extremo inferior atacan a la organización.
                    li
                      i.lista-ul__vineta
                      | Ejecutivos de la organización que no están de acuerdo en vender productos de baja calidad.
                    li
                      i.lista-ul__vineta
                      | Riesgo de que los consumidores asocien los productos de menor calidad a los ya existentes.
              tr
                th.text-center Ampliar hacia abajo
                td 
                  ul.lista-ul.mb-0
                    li.mb-0
                      i.lista-ul__vineta
                      | Crecimiento lento en la parte inferior.
                    li.mb-0
                      i.lista-ul__vineta
                      | Crecimiento alto en la parte superior.
                    li.mb-0
                      i.lista-ul__vineta
                      | Ataque de la competencia.
                    li.mb-0
                      i.lista-ul__vineta
                      | No hay mucha competencia en la parte superior.
                    li.mb-0
                      i.lista-ul__vineta
                      | Cubrir un hueco y complementar la línea.
                td 
                  ul.lista-ul.mb-0
                    li.mb-0
                      i.lista-ul__vineta
                      | Organizaciones de la parte superior atacan a la compañía.
                    li.mb-0
                      i.lista-ul__vineta
                      | Ejecutivos de la organización que no estén suficientemente preparados para prestar sus servicios y asesorías en la parte superior.
                    li.mb-0
                      i.lista-ul__vineta
                      | Riesgo de que los consumidores no crean que la organización está preparada para producir productos de calidad superior.

    p.mb-5(data-aos="fade-right") Para ejemplificar lo anterior, se detallan algunos ejemplos: 

    .row.justify-content-center.align-items-center.mb-4
      .col-12.col-lg-10.d-none.d-sm-none.d-lg-block(data-aos="zoom-in-down")
        ImagenInfografica.color-acento-botones.mb-4
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema3/info-2A.svg', alt='')
          .tarjeta.color-morado.p-3(x="87%" y="35%" numero="+")
            p En el ejercicio, si una vez posicionado en el mercado se quisiera ampliar la línea hacia arriba y decidiera entrar al mercado de los chocolates finos.
          .tarjeta.color-morado.p-3(x="87%" y="59%" numero="+")
            p Cuando las compañías se encuentran en la categoría media, pude ampliar su línea en ambos sentidos.
          .tarjeta.color-morado.p-3(x="87%" y="81%" numero="+")
            p En el ejercicio, si una vez posicionado en el mercado se quisiera ampliar la línea hacia abajo y decidiera entrar al mercado del pan corriente (croissant - pan queso - pan hojaldrado).
      .col-12.d-block.d-lg-none
        .row 
          .col-12.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/info-2B.svg', alt='')

    .row.fondo-1.p-md-5.p-4.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-down")
      .col-12.col-lg-8.mb-5
        .row.align-items-center.cajon.color-secundario.p-4
          .col-md-2.col-10
            figure
              img(src='@/assets/curso/temas/tema3/img_3.svg', alt='')
          .col-md-10.col-12 
            h5 Para el caso
            p La compañía se encuentra en la línea media; por lo tanto, Industria Panificadora Cholita, puede extenderse en ambos sentidos.
      .col-12.col-lg-8.mb-5.mb-lg-0
        ul.lista-ul--color.lista-title.mb-4
          li.mb-0.px-3.py-1
            i.fas.fa-certificate(style="top:3px")
            h4.mb-0 Decisión sobre la línea de producto
        p Una línea puede ampliarse añadiendo nuevos productos dentro de la misma categoría, pero, esta decisión debe ser muy bien fundamentada mediante un estudio de mercado, donde el nuevo producto tenga características diferenciarías que lo posicionen sin ningún problema, ya que por buscar ganancias adicionales, complacer a los distribuidores, aprovechar la infraestructura de producción y alejar a la competencia, el resultado puede generar confusión al consumidor y simplemente un producto puede sacar a otro.
      
        ul.lista-ul.mb-0
          li 
            i.fas.fa-certificate
            b.mb-2(style="color:#3C5756") Decisión sobre la presentación de la línea
        p Cuando una compañía decide lanzar una línea por estrategia, selecciona uno o dos productos de esta para presentarla, para este caso, se decidió lanzar al mercado el producto: “Pan tajado fruticas con sabor a naranja producido por la Industria Panificadora Cholita”.
      .col-8.col-lg-4
        figure
          img(src='@/assets/curso/temas/tema3/img_4.png', alt='')
        

</template>

<script>
export default {
  name: 'Tema3',
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
