<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p.mb-5(data-aos="fade-right") Una compañía debe tener muy claro su portafolio si quiere lograr el posicionamiento de la marca y de sus productos, así como las ventas que requiere para crecer y convertirse, con el tiempo en una organización prospera. Por lo anterior, se invita a revisar el siguiente video introductorio, el cual contextualiza sobre esta temática:
    
    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/DWjhZ4fNVuk" title="Portafolio de productos y servicios" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p.mb-4(data-aos="fade-right") En este orden de cambios en las ventas en poblaciones de bajos recursos, no solo el sistema bancario ha tenido que modificar sus servicios, sino que el #[em marketing] y la publicidad se ven obligados a anunciar la posibilidad inmediata de consumo, en la dinámica del crédito fácil para productos que antes, ni se habían imaginado; por ejemplo, la compra de motos o vehículos de baja gama. Estos elementos motivan una alta competencia de las compañías por la captación de este mercado, ofreciendo alternativas que las haga atractivas y diferenciales, en calidad, precio y servicio. Por eso, estos anuncios deben hacer parte del portafolio, incluyendo el consumo masivo, el crédito fácil y el #[em marketing for low income people] (ayuda a las personas a comprar con un bajo pago inicial).
    p.mb-5(data-aos="fade-right") Es decir, que, aunque hay productos que no están dirigidos en forma exclusiva a la población de bajos recursos, sus condiciones si se incluyen en sus portafolios, si se quiere que se posicionen rápidamente en los balances contables de la compañía.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
