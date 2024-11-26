export default {
  global: {
    componenteFormativo: 'Portafolio de productos y servicios',
    descripcionCurso:
      'El término portafolio se puede definir como el conjunto de productos o servicios que puede ofrecer una compañía, a través de su desarrollo. Es considerado como una herramienta que posibilita la comunicación de la compañía con sus clientes, ofreciendo información específica, no solo de sus productos o servicios, sino de la forma de acceder a ellos y los términos de su negociación para cancelarlos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      // {
      //   clases: ['banner-principal-decorativo-2'],
      //   imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      // },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Contexto',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Categorización de productos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'La línea de productos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Mezcla de producto',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Proceso de desarrollo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Diseño de nuevos productos',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Estrategia de desarrollo de nuevos productos',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Imagen corporativa',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Manual imagen corporativa',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Simbología básica',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Normas para el buen uso de la marca',
            hash: 't_7_2',
          },
          {
            numero: '7.3',
            titulo: 'Aplicaciones de la marca',
            hash: 't_7_3',
          },
          {
            numero: '7.4',
            titulo: 'Empaque y embalaje',
            hash: 't_7_4',
          },
          {
            numero: '7.5',
            titulo: 'P.O.P.',
            hash: 't_7_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_01_62330160_DU.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1. Contexto',
      referencia:
        'Pérez, D. & Martínez, I. (2006). <em>3. El Producto. Concepto y Desarrollo.</em>',
      tipo: 'Libro web',
      link:
        'https://www.eoi.es/sites/default/files/savia/documents/componente45111.pdf',
    },
    {
      tema: '2. Categorización de productos',
      referencia:
        'Martínez, A. (2008). <em>Gestión Estratégica de Portafolio de Productos.</em>',
      tipo: 'Artículo web',
      link:
        'https://repository.uaeh.edu.mx/bitstream/bitstream/handle/123456789/16737/LECT168.pdf?sequence=1&isAllowed=y',
    },
  ],
  glosario: [
    {
      termino: 'Línea de productos',
      significado:
        'varios productos relacionados entre sí, pero de forma individual que se ofrecen a la venta.',
    },
    {
      termino: 'Logotipo',
      significado:
        'es un elemento gráfico que identifica a una entidad, ya sea pública o privada y lo que distingue a una marca.',
    },
    {
      termino: 'Logosímbolo',
      significado:
        'es la unión de la parte gráfica (símbolo) y la parte tipográfica (nombre). Es la auténtica representación de la identidad visual de una institución con la cual se posiciona el producto y se vende la imagen institucional. Es por ello que el logosímbolo debe ser inmodificable.',
    },
    {
      termino: 'Marca',
      significado:
        'es un título que concede el derecho exclusivo a la utilización de un signo para la identificación de un producto. Pueden ser marcas las palabras o combinaciones de palabras, imágenes, figuras, símbolos, gráficos, letras, cifras o formas tridimensionales.',
    },
    {
      termino: 'Mezcla de producto',
      significado:
        'también conocida como variedad de productos, se refiere al número total de líneas de productos que una organización ofrece a sus clientes.',
    },
    {
      termino: 'Tangible',
      significado: 'que se puede tocar o percibir por medio del tacto.',
    },
  ],
  referencias: [
    {
      referencia:
        'Blanco, T. & Sánchez, J. (2013). <em>Imagen Corporativa, Influencia en la gestión organizacional.</em> Madrid, España: ESIC Editorial.',
    },
    {
      referencia:
        'Bort, M. (2004). <em>Merchandising.</em> Madrid, España: ESIC Editorial.',
    },
    {
      referencia:
        'Chile. (1993). <em>Repertorio de legislación y jurisprudencia chilenas.</em> Chile: Editorial jurídica de Chile. ',
    },
    {
      referencia:
        'Díaz, de S. (1992). <em>La imagen corporativa.</em> Madrid, España: Ediciones Díaz de Santos, S.A. ',
    },
    {
      referencia:
        'Díaz, de S. (1995). <em>El diagnóstico de la organización.</em> Madrid, España: Edición Díaz de Santos. ',
    },
    {
      referencia:
        'Ferrell, O. & Hartline, M. (s.f.). <em>Estrategia de Marketing.</em> México, D.F.: CengageLearning Editores, S.A. de C.V., una compañía de CengageLearning, Inc. ',
    },
    {
      referencia:
        'Levy, A. (1998). <em>Marketing avanzado. Un enfoque sistémico y constructivista de lo estratégico y de lo táctico.</em> Barcelona, España: Ediciones Granica S.A. ',
    },
    {
      referencia:
        'Miner. (s.f.). <em>Catálogo de servicios de información tecnológica.</em> Madrid, España: Artes Gráfica Iris, S.A. ',
    },
    {
      referencia:
        'Sanz, M. & González. M. (s.f.). <em>Identidad Corporativa. Claves de la Comunicación Organizacional.</em> Madrid, España: ESIC Editorial. ',
    },
    {
      referencia:
        'Serrano, F. & Serrano, C. (2005). <em>Gestión, dirección y estrategia de producto.</em> Madrid, España: ESIC Editorial. ',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Santiago Lozada Garcés',
          cargo: 'Líder de la Línea de producción',
          centro: 'Dirección General SENA',
        },
        {
          nombre: 'Mercedes Useche Céspedes',
          cargo: 'Líder expertos temáticos',
          centro:
            'Centro de Gestión de Mercados y TIC - Regional Distrito Capital',
        },
        {
          nombre: 'Franci Paola Lozano Piraquivez',
          cargo: 'Experto temático',
          centro: 'Dirección General SENA',
        },
        {
          nombre: 'Juan José Botello Castellanos',
          cargo: 'Asesor pedagógico',
          centro:
            'Centro Industrial de Mantenimiento Integral - Regional Santander',
        },
        {
          nombre: 'Elsa Cristina Arenas Martínez',
          cargo: 'Asesor pedagógico',
          centro:
            'Centro Industrial de Mantenimiento Integral - Regional Santander',
        },
        {
          nombre: 'Zulma Yurany Vianchá Rodríguez',
          cargo: 'Líder de la Línea de producción',
          centro:
            'Centro de Desarrollo Agropecuario y Agroindustrial - Regional Boyacá',
        },
        {
          nombre: 'Jhon Jairo Buitrago Pastrana',
          cargo: 'Gestor de Curso',
          centro:
            'Centro de Gestión y Desarrollo Sostenible Sur Colombiano - Regional Huila',
        },
        {
          nombre: 'Janet Lucía Villalba Triana',
          cargo: 'Asesor pedagógico',
          centro:
            'Centro de Desarrollo Agropecuario y Agroindustrial - Regional Boyacá',
        },
        {
          nombre: 'Héctor Salinas Castellanos',
          cargo: 'Guionista',
          centro:
            'Centro de Desarrollo Agropecuario y Agroindustrial - Regional Boyacá',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'José Jaime Luis Tang Pinzón',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Luis Fernando Botero Mendoza',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Oscar Daniel Espitia Marín',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Diego Fernando Velasco Güiza',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Eduardo Rueda Peña',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
