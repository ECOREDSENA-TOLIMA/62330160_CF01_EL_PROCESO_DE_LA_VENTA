<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Contexto

    .row.mb-4.justify-content-center.align-items-center(data-aos="fade-right")
      .col-12 
        figure
          img(src='@/assets/curso/temas/tema1/img_1.png', alt='')

    .row.fondo-1.p-md-5.p-4.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-down")
      .col-12.mb-4
        p Los productos o servicios son creados para satisfacer las necesidades y expectativas de los clientes y es precisamente a ellos a quien va dirigido el portafolio, por eso debe estar centrado en el usuario y orientado al grupo objetivo. De ahí que la importancia de su estructura y diseño, es validado por el objetivo estratégico que persigue la compañía, tanto en su misión como en su visión.
      .col-8.col-lg-4.mb-4.mb-lg-2
        figure
          img(src='@/assets/curso/temas/tema1/img-2.svg', alt='')
      .col-12.col-lg-8
        ul.lista-ul--color.lista-title.mb-4
          li.mb-0.px-3.py-1
            i.fas.fa-certificate(style="top:3px")
            h4.mb-0 Objetivos
        p.mb-4 Se tienen los siguientes:
        ul.lista-ul.mb-0
          li 
            i.fas.fa-folder
            p.mb-2 Ofrecer información oportuna, completa y actualizada a los clientes (internos y externos), con el fin de mantener las interrelaciones existentes (cadena de valor), con sus clientes internos y externos, a través de un sistema de información.
          li 
            i.fas.fa-folder
            p.mb-2 Avalar dentro de la línea de bienes y servicios de la compañía, cada uno de los productos como único del catálogo, a través de la mezcla del plan promocional que maneja el equipo de ventas.
          li 
            i.fas.fa-folder
            p.mb-2 Garantizar que cada producto o servicio alcance la interrelación que existe con otros de la línea (cadena de valor) en su entrega final, permitiendo la simplificación y mejora del servicio.

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-12
        ul.lista-ul--color.lista-title
          li.mb-0.px-3.py-1
            i.fas.fa-certificate(style="top:3px")
            h4.mb-0 Estructura

    p.mb-5(data-aos="fade-right") Como desarrollo comunicacional para su estructura, se considera que contenga como mínimo los siguientes elementos:


    .row.justify-content-center.mb-5
      .col-12.col-lg-4.col-md-6.h-100.mb-md-3.mb-4(data-aos="fade-down")
        figure.mb-4
          img(src='@/assets/curso/temas/tema1/slid-1.svg', alt='')
        h4 Visión
        p Es una declaración a mediano y largo plazo, que ilustra el ideal en el que se quiere convertir la compañía a futuro.
      .col-12.col-lg-4.col-md-6.h-100.mb-md-3.mb-4(data-aos="fade-down")
        figure.mb-4
          img(src='@/assets/curso/temas/tema1/slid-2.svg', alt='')
        h4 Misión
        p Es un enunciado que describe la razón de ser de la compañía, que define lo que debe hacer y para quien lo va a hacer.
      .col-12.col-lg-4.col-md-6.h-100.mb-md-3.mb-4(data-aos="fade-down")
        figure.mb-4
          img(src='@/assets/curso/temas/tema1/slid-3.svg', alt='')
        h4 Imagen corporativa
        p Está definida por logotipos, elementos gráficos, imágenes, slogans, símbolos, escudos, colores y tipo de letra, entre otros elementos que van plasmados dentro del portafolio y le dan esa personalidad a la compañía y al producto.
      .col-12.col-lg-4.col-md-6.h-100.mb-md-3.mb-4(data-aos="fade-down")
        figure.mb-4
          img(src='@/assets/curso/temas/tema1/slid-4.svg', alt='')
        h4 Estrategia de servicio
        p Es la premisa que orienta los esfuerzos y la actividad de la organización, hacia las prioridades de los clientes (el cómo prestar el servicio).
      .col-12.col-lg-4.col-md-6.h-100.mb-md-3.mb-4(data-aos="fade-down")
        figure.mb-4
          img(src='@/assets/curso/temas/tema1/slid-5.svg', alt='')
        h4 Garantías y respaldos
        p Son las medidas que acuerda la organización para controlar la calidad de los productos y los servicios posventa como parte de la satisfacción del cliente.
      .col-12.col-lg-4.col-md-6.h-100.mb-md-3.mb-4(data-aos="fade-down")
        figure.mb-4
          img(src='@/assets/curso/temas/tema1/slid-6.svg', alt='')
        h4 La presentación de sus productos
        p Es la identificación de cada producto de la compañía a partir de la descripción de su ficha técnica.





</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
