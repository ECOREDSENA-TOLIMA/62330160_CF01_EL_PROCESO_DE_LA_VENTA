<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Imagen corporativa 

    p.mb-5(data-aos="fade-right") La imagen corporativa es, según Bort (2004) “la representación mental que tienen los públicos interesados y la sociedad en general de una organización, sus productos, directivos, métodos de gestión, etc. Conseguir una imagen positiva es difícil y costoso, pero resulta rentable, porque favorece muy sensiblemente a la organización que lo posee, beneficiándose los productos que fabrica o vende”.

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.mb-5.p-3.p-sm-4.p-md-5(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema6/img_1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En términos generales, es todo lo que rodea a una organización, es una de las herramientas más importantes para el reconocimiento por parte del grupo objetivo y su posicionamiento en la mente del consumidor, en todo lo que tenga que ver con los productos, la imagen como organización y respaldo de marca.
          br
          br
          | Cuando se habla de imagen corporativa, se hace referencia a una representación mental, que es individual para cada persona, es su representación mental del producto o de una organización y se soporta a través de sus experiencias o vivencias.

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 1. </b> <i>Imagen corporativa</i>
        figure
          img.d-none.d-sm-none.d-md-block(src='@/assets/curso/temas/tema6/fig-1a.png', alt='Figura que contiene un carnet con todos los aspectos que representan a la imagen corporativa de la Cholita.')  
          img.d-block.d-md-none(src='@/assets/curso/temas/tema6/fig-1b.png', alt='Figura que contiene un carnet con todos los aspectos que representan a la imagen corporativa de la Cholita.') 

    p.mb-5(data-aos="fade-right") De acuerdo a la imagen corporativa, se deben tener en cuenta los siguientes aspectos:


    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-down")
      .col-12.mb-4.mb-lg-0
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--gris-b")
          .row(titulo="Identidad corporativa")
            .col-12.col-lg-6.mb-4.mb-md-0
              p Es la razón de ser, es la representación que tiene un individuo de una organización partiendo de lo que es, de su esencia misma, en comparación al ser humano; cuando se habla de su genética, es como si se hiciese de su identidad corporativa.
              p Esta identidad corporativa se basa en los valores que tiene cada organización como son la honestidad, respeto, lealtad, responsabilidad y todo lo que soporte su labor, su trabajo, su relación con la comunidad y con el individuo mismo.
            .col-12.col-lg-6
              figure
                img(src='@/assets/curso/temas/tema6/sl1-a.png', alt='')
          .row(titulo="Diseño logotipo (<em>Restyling</em>) o actualización - Diseño papelería (<em>Rebranding</em>)")
            .col-12.col-lg-6.mb-4.mb-md-0
              p Para el caso y con respecto a la empresa que se viene trabajando en este componente formativo, la identidad corporativa abarca el diseño #[b Cholita] del logotipo y el diseño de toda la imagen corporativa, que en conjunto integra la representación visual de la organización.
              p Este trabajo requiere un estudio, ya que va a ser el vestido que se muestra a todos los individuos para que conozcan la organización, debe hablar de lo que se hace y se convertirá con el pasar el tiempo en el apellido diferencial para la competencia y lo más importante, para el grupo objetivo.
              p Cuando se habla de diseño de logotipo o actualización de uno ya existente, se hace del concepto #[em #[b Restyling]] y si se habla del diseño de toda la imagen corporativa, se hace referencia del concepto #[em #[b Rebrandin]].
            .col-12.col-lg-6
              figure
                img(src='@/assets/curso/temas/tema6/sl1-b.png', alt='')
          .row(titulo="Creación de la marca")
            .col-12.col-lg-6.mb-4.mb-md-0
              p Comúnmente, la marca es entendida como la identificación de una organización, sea por medio de un logo o logosímbolo que representa una dimensión social, la cual debe tener una identidad propia, que la distinga de los demás; además, debe expresar valores corporativos, su razón de ser y un concepto global de los productos de una organización.
            .col-12.col-lg-6
              figure
                img(src='@/assets/curso/temas/tema6/sl1-c.png', alt='')
          .row(titulo="Valor de la marca")
            .col-12.col-lg-6.mb-4.mb-md-0
              p No se puede asociar a un valor material, es la relación directa cliente - marca. En un mundo cada vez más competitivo, la marca juega un papel muy importante, ya que mueve estímulos pasionales, dándole al producto respaldo. El desarrollo visual de la marca con todas sus especificaciones, es lo que se conoce como portafolio de marca - identidad corporativa.
            .col-12.col-lg-6
              figure
                img(src='@/assets/curso/temas/tema6/sl1-d.png', alt='')

</template>

<script>
export default {
  name: 'Tema6',
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
