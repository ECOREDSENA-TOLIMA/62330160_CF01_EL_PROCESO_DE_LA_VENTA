<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
export default {
  name: 'ActividadDidactica',
  data: () => ({
    cuestionario: {
      tema: 'Portafolio de productos y servicios',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> identificar los procedimientos relacionados con la imagen y el manual de identidad corporativa, de acuerdo al funcionamiento de la empresa Industria Panificadora Cholita.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto: '¿Qué es el portafolio de productos de una compañía?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un conjunto de estrategias de promoción de ventas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El catálogo de productos y servicios que ofrece una compañía.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La lista de productos descontinuados.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un plan para mejorar la comunicación interna.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Cuál es un ejemplo de un producto de "comparación uniforme"?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Un televisor de alta gama.', esCorrecta: false },
            { id: 'b', texto: 'Un coche de lujo.', esCorrecta: false },
            {
              id: 'c',
              texto:
                'Un par de zapatos con características similares en precio y diseño.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Un pastel artesanal con receta única.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: '¿Qué aspecto define un "producto táctico"?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Es el producto más caro de la compañía.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Es un producto diseñado para contrarrestar estrategias de la competencia.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Es un producto que no genera muchas ventas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Es un producto con un empaque atractivo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Qué elemento forma parte de la imagen corporativa?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Estrategias de ventas.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Logotipos, tipografías y colores corporativos. ',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Manuales internos de producción.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El proceso de creación de productos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Qué función cumple el embalaje de un producto?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Almacenar temporalmente productos para su distribución.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Aumentar el precio del producto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Mejorar la calidad del producto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Hacer que el producto sea más ligero.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: '¿Qué es una "extensión de línea"?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La eliminación de productos no rentables.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La mejora o variación de productos dentro de la misma categoría.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'El lanzamiento de un nuevo producto en una categoría diferente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La fusión de dos líneas de producto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué significa el término "mejora hacia abajo" en una línea de productos?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Introducir productos de menor calidad en la línea existente.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Disminuir el precio de los productos actuales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Sustituir productos existentes por otros más caros.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Expandir el negocio hacia mercados más exigentes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Cuál es una característica de los productos de "especialidad"?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Son productos básicos que se compran por necesidad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Tienen características únicas y un precio más elevado.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Son productos que se consumen rápidamente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Se venden en grandes cantidades.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: '¿Qué tipo de producto puede ser considerado "novedoso"?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un producto que copia a otro en el mercado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Un producto con un sustituto directo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Un producto que no tiene sustituto y es innovador.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Un producto que tiene un precio más accesible.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: '¿Qué representa el "valor de la marca" para una compañía?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El costo de producción de la marca.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La relación emocional y de confianza entre el cliente y la marca.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La cantidad de logotipos utilizados por la compañía.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El precio de venta de los productos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado:
        '¡Excelente! Los términos relacionados denotan el buen conocimiento que posee, con respecto a la imagen e identidad corporativa de la marca.',
      mensaje_final_reprobado:
        '¡Lo siento! Algunos términos no fueron relacionados adecuadamente. Pero no se desanime y vuelva a intentarlo.',
    },
  }),
}
</script>
