<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Proceso de desarrollo

    .row.mb-4.justify-content-center.align-items-center(data-aos="fade-right")
      .col-12 
        figure
          img(src='@/assets/curso/temas/tema5/img_1.png', alt='')
    
    p.mb-5(data-aos="fade-right") El desarrollo de productos consiste en introducir o adicionar valor a sus características, a fin de que cambien o incrementen sus características, para satisfacer las necesidades y deseos de quienes los consuman.

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-down")
      .col-lg-2.col-md-3.col-6.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema5/img_2.svg', alt='')
      .col-lg-10.col-md-10.col-12
        .cajon.color-primario.p-4.mb-4
          p.mb-0 Dentro del comportamiento normal de mercadeo, toda organización debe tener en cuenta que, con los cambios continuos de la competencia, los comportamientos del consumidor y el mismo comportamiento de los productos, debe ser la prioridad y la filosofía #[b el innovar], ya que esto permitirá crecer en un mercado de continua evolución.

    Separador
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.1 Diseño de nuevos productos

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-down")
      .col-lg-5.col-10.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema5/img_3.png', alt='')
      .col-lg-7.col-12
        p.mb-4 Este diseño en toda organización es un trabajo continuo, que parte de darle nuevos usos a los productos ya existentes y posicionarlos en otros mercados, de crear nuevos productos para extender una línea. Cuando se colocan en el mercado, se le conoce como lanzamiento y este proceso no debe abarcar más de seis meses, tiempo suficiente para que consumidores e intermediarios lo conozcan.
        p.mb-4 Definitivamente este proceso tendrá éxito, si está soportado por un continuo estudio del mercado, donde, a través de encuestas dirigidas a consumidores e intermediarios, se puedan encontrar las respuestas para desarrollar productos que satisfagan las necesidades del consumidor y que cumpla con unos requerimientos especiales en cuanto a envase o manipulación para los intermediarios.
        .cajon.color-primario.p-4.mb-4
          p.mb-0 Siempre que se piense en productos nuevos, debe ir de la mano con los objetivos generales de la compañía y un uso eficaz y responsable de los recursos.
    
    Separador
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.2 Estrategia de desarrollo de nuevos productos

    p.mb-5(data-aos="fade-right") El gran reto está en generar cambios rápidos que satisfagan gustos y tecnología, que coloquen a la compañía en una mejor posición que la competencia; los clientes esperan mejores e innovadores productos y para ello, las compañías tienen dos caminos:

    .tarjeta.color-primario-a4.p-4.mb-5(data-aos="zoom-in-down")
      LineaTiempoE.color-acento-contenido
        .row.align-items-center(titulo="01" subtitulo="")
          .col-lg-2.col-4.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/temas/tema5/sl1-a.svg', alt='')
          .col-lg-10
            p Desarrollar nuevos productos a través de su departamento de investigación y desarrollo.
        .row.align-items-center(titulo="01" subtitulo="")
          .col-lg-2.col-4.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/temas/tema5/sl1-b.svg', alt='')
          .col-lg-10
            p Adquisición de una patente para desarrollar un producto propiedad de un tercero. Este proceso pone un gran dilema a la hora de tomar decisiones, ya que los costos de un departamento de investigación y desarrollo son muy altos. Las grandes organizaciones han encontrado la solución adquiriendo marcas ya existentes, en lugar de crearlas o simplemente, copiando a la competencia.

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-12
        ul.lista-ul--color.lista-title
          li.mb-0.px-3.py-1
            i.fas.fa-certificate(style="top:3px")
            h4.mb-0 Etapas para el desarrollo de nuevos productos 
    
    p.mb-5(data-aos="fade-right") Las etapas que se deben seguir en el proceso para la creación de nuevos productos son las siguientes:

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-down")
      .col-lg-9.col-12
        LineaTiempoD.color-acento-botones
          div(numero="a" titulo="Generación de ideas") 
            p Estas ideas parten de la recolección de información sistemática en las siguientes fuentes:
            div.p-4.tarjeta-white
              ul.lista-ul.ul-color-a
                li 
                  i.fas.fa-folder
                  p.mb-0 #[b Fuentes internas:] información dentro de la organización (ejecutivos - vendedores - personal de producción - personal general).
                li 
                  i.fas.fa-folder
                  p.mb-0 #[b Clientes:] mediante encuestas se detectan necesidades y deseos de los consumidores.
                li 
                  i.fas.fa-folder
                  p.mb-0 #[b Competencia:] hace referencia al estudio continuo de lo que está haciendo la competencia, a través de la publicidad y otras comunicaciones.
                li 
                  i.fas.fa-folder
                  p.mb-0 #[b Distribuidores - Proveedores:] por estar tan cerca de los consumidores, conocen información de primera mano sobre problemas, soluciones y posibilidades de nuevos productos.
                li 
                  i.fas.fa-folder
                  p.mb-0 #[b Otras fuentes:] publicaciones, seminarios comerciales, agencias de publicidad, estudios de investigación; son las fuentes de más continua consulta.
          div(numero="b" titulo="Filtrado de ideas") 
            p Detecta las buenas y desecha las que no sirve, este proceso se lleva a cabo en cabeza de los vendedores o ejecutivos.
          div(numero="c" titulo="Desarrollo y verificación de conceptos") 
            p Luego del proceso de filtrado, la idea se convierte en un concepto, que no es más que una versión detallada de la idea y esta, posteriormente se convierte en una imagen, que es la manera en que el consumidor percibe el producto real o potencial.
          div(numero="d" titulo="Desarrollo de la estrategia de mercadotecnia") 
            p Cuando se habla de la estrategia de mercadotecnia, se hace referencia a los objetivos, a la directriz de la empresa y los planes de acción que se llevarán a cabo, para cumplir con una meta establecida. Lo clave está en definir el grupo objetivo al que va a ir dirigido esta estrategia, así como el producto que se desea posicionar en ese segmento del mercado. Para el ejemplo de #[b Pan Fruticas de Industria Panificadora Cholita], consta de tres partes:
            div.p-4.tarjeta-white
              ul.lista-ul.ul-color-a
                li 
                  i.fas.fa-folder
                  p.mb-0 #[b Mercado meta:] hogares.
                li 
                  i.fas.fa-folder
                  p.mb-0 #[b Posicionamiento:] pan tajado con sabor a frutas.
                li 
                  i.fas.fa-folder
                  p.mb-0 #[b Ventas:] para los primeros seis meses lograr una participación de un 10 % en el segmento de este producto.
          div(numero="e" titulo="Análisis comercial") 
            p Una vez que se ha elegido el producto que se va a desarrollar, así como su estrategia de mercadeo, se analiza también la proyección de ventas y su relación directa con los beneficios para la compañía. Para llevar a cabo esta etapa, se apoya en la historia de ventas de productos similares.
          div(numero="f" titulo="Desarrollo del producto") 
            p Se desarrolla una o más versiones físicas para encontrar el prototipo que satisfaga al consumidor en su desempeño o uso y que los costos presupuestados sean los adecuados.
          div(numero="g" titulo="Pruebas de mercado") 
            p Desarrollado ese prototipo, se pasa a la etapa de prueba, se lleva a cabo en el punto de venta, mediante prueba de producto para saber si finalmente cumple con las expectativas del consumidor potencial. La compañía utiliza estas pruebas, para observar la reacción de los consumidores y distribuidores ante el manejo, uso y compra del producto.
          div(numero="h" titulo="Comercialización") 
            p Hace referencia a la puesta en marcha de todo el proceso de producción del producto, así como su comercialización en el punto de venta, apoyado por una estrategia de publicidad y comunicación adecuada, que llegue al consumidor potencial y posicione el producto o servicio.
      .col-lg-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/tema5/img_4.png', alt='')




</template>

<script>
export default {
  name: 'Tema5',
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
