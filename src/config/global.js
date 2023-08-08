export default {
  global: {
    componenteFormativo: 'Contexto de la organización y requisitos normativos',
    descripcionCurso:
      'En este componente, se estudiarán generalidades de los diferentes tipos de organizaciones y sistemas de producción que existen. El aprendiz conocerá cuáles son las actividades económicas en Colombia y cuál es su clasificación internacional. Además, llegará a la comprensión de las metas en términos de eficiencia energética de dichas actividades. Finalmente, entenderá cómo las compañías compilan las obligaciones legales que deben cumplir.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
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
        titulo: 'Teoría de la organización y estructuras organizacionales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto de organización',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Tipos de organización',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Límites de la organización',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Concepto de estructura organizacional',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo:
              'Centralización vs. descentralización y especialización del trabajo',
            hash: 't_1_5',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Sistemas y modelos de producción industrial',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Concepto de sistemas de producción industrial',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Diagramas de flujo o de proceso',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Actividades económicas en Colombia',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Sectores económicos',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Actividades económicas',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Cadenas de valor o cadenas globales de valor',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Agentes económicos',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo:
              'Código CIIU (Clasificación Industrial Internacional Uniforme)',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo:
          'Objetivos y metas sectoriales del Programa de Uso Racional y Eficiente de la Energía (PROURE) en Colombia',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Sector transporte',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Sector industrial',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Sector comercial, público y de servicios (terciario)',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Residencial',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo:
          'Identificación de requisitos normativos y legales de acuerdo con la organización',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Normatividad para crear una matriz de requisitos legales',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Elaborar la matriz de requisitos legales',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Cumplimiento de la matriz legal',
            hash: 't_5_3',
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
        icono: 'fas fa-download',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_011.pdf',
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
      tema: '1.4. Concepto de estructura organizacional',
      referencia:
        'Growp. (2017). <em>La estructura organizacional.</em> [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=NpsflJIWNIg',
    },
    {
      tema:
        '1.5. Centralización vs. Descentralización y especialización del trabajo',
      referencia:
        'Maquera, C. (2017). <em>La especialización del trabajo.</em> [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=JDIqEYZAlSA ',
    },
    {
      tema: '2.1. Concepto de sistemas de producción industrial',
      referencia:
        'Collazo, I. (2019). <em>Tipos de sistemas de producción.</em> [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=pAe6LqJzkdA ',
    },
    {
      tema: '3.5 Código CIIU (Clasificación Industrial Internacional Uniforme)',
      referencia:
        'Tributi. (2021). <em>Actividades económicas válidas 2021 - Códigos CIIU.</em>',
      tipo: 'Página web',
      link:
        'https://www.tributi.com/ayuda/actividades-economicas-validas-2020-codigos-ciiu',
    },
    {
      tema:
        '5. Identificación de requisitos normativos y legales de acuerdo con la organización',
      referencia:
        'Decreto 1072 de 2015. [Ministerio del Trabajo]. Por medio del cual se expide el Decreto Único Reglamentario del Sector Trabajo. Mayo 28 de 2015. ',
      tipo: 'Decreto',
      link:
        'https://www.mintrabajo.gov.co/documents/20147/0/DUR+Sector+Trabajo+Actualizado+a+15+de+abril++de+2016.pdf/a32b1dcf-7a4e-8a37-ac16-c121928719c8',
    },
  ],
  glosario: [
    {
      termino: 'CIIU',
      significado: 'sigla de Clasificación Industrial Internacional Uniforme.',
    },
    {
      termino: 'Matriz de requisitos legales',
      significado:
        'compilación de los requisitos normativos exigibles a la empresa, acorde con las actividades propias e inherentes de su actividad productiva, los cuales dan los lineamientos normativos y técnicos para desarrollar el Sistema de Gestión de la Seguridad y Salud en el Trabajo (SG-SST), el cual deberá actualizarse en la medida que sean emitidas nuevas disposiciones aplicables (Aliados en Tecnología y Calidad S.A.S, 2020).',
    },
    {
      termino: 'MME',
      significado: 'sigla del Ministerio de Minas y Energía.',
    },
    {
      termino: 'Organización',
      significado:
        'es una colectividad de personas que tienen objetivos comunes e interactúan en función de un sistema.',
    },
    {
      termino: 'Sistema de producción',
      significado:
        'es un conjunto de elementos relacionados y organizados en los que interactúan insumos (materia prima, materiales), personas (haciendo uso de sus capacidades individuales), maquinaria y equipo, y estilos de liderazgo, para la elaboración de bienes y/o servicios destinados para la venta.',
    },
    {
      termino: 'UPME',
      significado: 'sigla de Unidad de Planeación Minero-Energética.',
    },
  ],
  referencias: [
    {
      referencia:
        'Aliados en Tecnología y Calidad SAS. [ATCAL]. (s. f.). <em>¿Cómo hacer la matriz legal de forma fácil y sencilla para las mipymes?</em> ',
      link: 'https://www.implementandosgi.com/deio/matriz-legal-para-mipymes/ ',
    },
    {
      referencia:
        'Collazo, I. (2019). <em>Tipos de sistemas de producción </em> [Video]. YouTube. ',
      link: 'https://www.youtube.com/watch?v=pAe6LqJzkdA',
    },
    {
      referencia:
        'EAE Business School. (2021). <em>Sistemas y modelos de producción industrial. Retos en Supply Chain. </em>',
      link: 'https://retos-operaciones-logistica.eae.es/1595/',
    },
    {
      referencia:
        'Ecopetrol S.A. (2014). <em>Marcas homologadas. </em> Portal web de Ecopetrol. ',
      link:
        'https://www.ecopetrol.com.co/wps/portal/Home/es/GruposInteres/GestionDeAbastecimiento/RelacionamientoConProveedore/Marcashomologadas',
    },
    {
      referencia:
        'Ecopetrol S.A. (2020). <em>Organigrama.</em> Portal web de Ecopetrol. ',
      link:
        'https://www.ecopetrol.com.co/wps/portal/Home/es/NuestraEmpresa/QuienesSomos/EstructuraOrganizacional',
    },
    {
      referencia:
        'Growp. (2017). <em>La estructura organizacional.</em> [Video]. YouTube. ',
      link: 'https://www.youtube.com/watch?v=NpsflJIWNIg',
    },
    {
      referencia:
        'Gutiérrez, H. (2010). <em>Calidad total y productividad.</em> McGraw-Hill Educación. ',
      link:
        'https://clea.edu.mx/biblioteca/files/original/56cf64337c2fcc05d6a9120694e36d82.pdf',
    },
    {
      referencia:
        'Maquera, C. (2017). <em>La especialización del trabajo.</em> [Video]. YouTube. ',
      link: 'https://www.youtube.com/watch?v=JDIqEYZAlSA',
    },
    {
      referencia:
        'Quintero, Y. y León, D. (2018). <em>Cadenas globales de valor en Colombia: un análisis desde el sector cuero, calzado y marroquinería.</em> Universidad de La Salle. ',
      link:
        'https://ciencia.lasalle.edu.co/cgi/viewcontent.cgi?article=1268&context=finanzas_comercio',
    },
    {
      referencia:
        'Reina, M., Zuluaga, S. y Rozo, M. (2006). <em>El sistema económico. </em> Banco de la República de Colombia. ',
      link:
        'https://www.banrep.gov.co/sites/default/files/publicaciones/archivos/guia_1_el_sistema_economico.pdf',
    },
    {
      referencia:
        'Robbins, S. y Coulter, M. (2014). <em>Administración.</em> Pearson Educación.',
      link: '',
    },
    {
      referencia:
        'Secretaría General de la Alcaldía Mayor de Bogotá. (2014). <em>Noveno Lineamiento. Matriz de cumplimiento legal (normograma) y procedimiento de evaluación periódica de lo legal.</em> ',
      link:
        'https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=62097&dt=S',
    },
    {
      referencia:
        'Unidad de Planeación Minero Energética [UPME]. (2021). <em>Programa de uso racional y eficiente de la energía - PROURE.</em> Gov.co. ',
      link: 'https://www1.upme.gov.co/DemandayEficiencia/Paginas/PROURE.aspx',
    },
    {
      referencia:
        'Unidad de Planeación Minero Energética [UPME]. (2016). Plan de acción indicativo de eficiencia energética 2017-2022. Ministerio de Minas y Energía.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de línea de producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Linda Díaz Rivera',
          cargo: 'Consultora',
          centro: 'Global Green Growth Institute (GGGI)',
        },
        {
          nombre: 'Carolina Arias',
          cargo: 'Diseñadora Instruccional',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Revisora Metodológica y Pedagógica',
          centro: 'Regional Distrito Capital - Centro de diseño y metrología',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor Pedagógico',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Darío González',
          cargo: 'Corrector de Estilo',
          centro: 'Regional Tolima - Centro Agropecuario La Granja',
        },
        {
          nombre: 'Juan Gilberto Giraldo Cortés',
          cargo: 'Diseñador Instruccional',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'María Inés Machado López',
          cargo: 'Metodóloga',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'José Yobani Penagos Mora',
          cargo: 'Diseñador Web',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oscar Daniel Espitia Marin',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboard e Ilustración',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Producción Audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Animador',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Francisco Javier Vásquez Suarez',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
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
