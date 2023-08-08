<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 4
      h1 Objetivos y metas sectoriales del Programa de Uso Racional y Eficiente de la Energía (PROURE) en Colombia

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/tema4-01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p Uno de los antecedentes más importantes en materia de eficiencia energética en Colombia es la creación del Programa de Uso Racional y Eficiente de la Energía – PROURE, el cual comprende las directrices de política pública orientadas a fomentar el uso eficiente de los recursos energéticos, comprendiendo desde su producción hasta el uso final, en las distintas actividades económicas del país. Ahora bien, las metas de ahorro de energía para estas actividades y diferentes sectores de la economía y las acciones estratégicas encaminadas a cumplirlas están definidas dentro del documento Plan de Acción Indicativo (PAI) PROURE#[sup 1], establecido para el periodo entre 2017 y 2022.
    .row.mb-4
      .col-12(data-aos="fade-right")
        p Puntualmente, los objetivos de eficiencia energética plasmados en el PAI-PROURE 2017-2022 son los siguientes:

    .tarjeta.tarjeta--gris.p-4(data-aos="fade-down")
      PasosB.color-acento-contenido
        .row
          .col-md-6.col-10.mb-4.mb-md-0
            p La eficiencia energética es considerada como un mecanismo para asegurar el abastecimiento energético, articulándose con esta estrategia por medio de nuevas tecnologías y buenos hábitos de consumo. 
            p Igualmente, se puede considerar como una forma de incrementar la competitividad y productividad nacional. 
          .col-md-6.col-10
            figure
              img(src='@/assets/curso/temas/tema4/tema4-24.png', alt='')
        .row
          .col-md-6.col-10.mb-4.mb-md-0
            p Actualmente, se consumen diversos recursos energéticos y, a través del mecanismo de eficiencia energética, se busca usar la menor cantidad posible de estos; son costosos, difíciles de producir y generan partículas y gases cuyo efecto es nocivo para el planeta y para el ser humano. 
          .col-md-6.col-10
            figure
              img(src='@/assets/curso/temas/tema4/tema4-25.png', alt='')
        .row
          .col-md-6.col-10.mb-4.mb-md-0
            p Hoy, se utilizan muchos recursos energéticos y la tecnología ha evolucionado para proveer una mejor calidad de vida. Sin embargo, muchos de los equipos usan más energía de la que deberían, lo que conlleva la necesidad de que a largo plazo los equipos sean más eficientes. 
          .col-md-6.col-10
            figure
              img(src='@/assets/curso/temas/tema4/tema4-26.png', alt='')
        .row
          .col-md-6.col-10.mb-4.mb-md-0
            p El Plan de Acción Indicativo - PAI presenta las medidas de eficiencia energética a implementarse en el corto y mediano plazo, además de los escenarios de largo plazo para el país.  
          .col-md-6.col-10
            figure
              img(src='@/assets/curso/temas/tema4/tema4-27.png', alt='')
        .row
          .col-md-6.col-10.mb-4.mb-md-0
            p Para finalizar, el objetivo principal del documento es precisar las estrategias para alcanzar las metas en materia de eficiencia energética, para asegurar la seguridad energética, cumplir con compromisos internacionales de desempeño ambiental y contribuir positivamente con la competitividad del país y la mejora en la calidad de vida de los colombianos. 
          .col-md-6.col-10
            figure
              img(src='@/assets/curso/temas/tema4/tema4-28.png', alt='')

    .row.mb-4
      .col-12(data-aos="fade-down")
        p.mt-5 #[sup 1]El PAI fue adoptado mediante la Resolución del Ministerio de Minas y Energía (MME) 41286 de 2016 para el desarrollo del PROURE.

    .row.justify-content-center.align-items-center.mb-4
      .col-12.titulo-sexto.color-acento-contenido.mt-2(data-aos="fade-right")
          p.titulo.pb-0.mb-0 <b>Tabla 1.</b> <i>Metas indicativas de Eficiencia Energética para el período entre 2017 y 2022</i>
      .col-12.px-0(data-aos="fade-left")
        .tabla-a.color-acento-contenido.mb-5
          table
            caption Nota. Tomada de UPME (2021).
            thead
              tr
                th(style="width:20%") Sector
                th Meta de ahorro (TJ)
                th Meta de ahorro (%)
            tbody
              tr
                td.td-uno-table.text-center Transporte
                td.td-dos-table.px-3.text-center 424.408
                td.td-dos-table.px-3.text-center 5.49%
              tr
                td.td-uno-table.text-center Industria
                td.td-dos-table.px-3.text-center 131.859
                td.td-dos-table.px-3.text-center 1.71%
              tr
                td.td-uno-table.text-center Terciario
                td.td-dos-table.px-3.text-center 87.289
                td.td-dos-table.px-3.text-center 1.13%
              tr
                td.td-uno-table.text-center Residencial
                td.td-dos-table.px-3.text-center 56.121
                td.td-dos-table.px-3.text-center 0.73%
              tr
                th.td-uno-table.text-center Total
                th.td-dos-table.px-3.text-center 699.678
                th.td-dos-table.px-3.text-center 9.05%

      .col-12.px-0(data-aos="fade-left")
        p El propósito de este componente es presentar de una manera general los objetivos y metas sectoriales del PROURE, de acuerdo con lo establecido en el Plan de Acción Indicativo (PAI). Como primer paso, observe el contexto actual del sistema energético nacional y sus principales necesidades:
        p En la siguiente figura, se muestra el Balance Energético Colombiano (BECO) del año 2015. Se observa que en la matriz energética#[sup 2], la energía útil estuvo representada por un 48%, mientras que las pérdidas fueron equivalentes al 52%. Esta proporción indica que es necesario realizar un cambio en términos de eficiencia energética en Colombia.
      
      .col-12-12.px-0.py-4.cajon-b.color-primario
          p #[sup 2]La matriz energética es una representación cuantitativa de todas las fuentes de energía que se utilizan en una zona geográfica, que puede ser un país, un continente o el mundo. Muestra los consumos de cada tipo de energía: combustibles fósiles (petróleo, gas, carbón), hidráulica, solar, eólica, biomasa, geotérmica, etc., que apliquen.

    .row.justify-content-center.align-items-center.tarjeta--azul-custom.mb-0.p-4.py-0
      .col-12.col-md-8
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          p.titulo.pb-0.mb-0 <b>Figura 6.</b> <i>Consumo energético BECO 2015</i> 
        figure(data-aos="fade-left")
          img(src='@/assets/curso/temas/tema4/tema4-02.svg')
          figcaption Nota. Tomada de UPME (2016).
      .col-12.mt-4
        p(data-aos="fade-left") El consumo de energía final en Colombia, de acuerdo con el balance de 2015, superó el millón de Terajulios (1.219.827 TJ). Respecto a dicho consumo, la mayor parte de la energía consumida fue por cuenta del sector transporte, como se observa en la siguiente figura:  
    .row.justify-content-center.align-items-center.mb-5.p-4.py-0
      .col-12.col-md-6
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          p.titulo.pb-0.mb-0 <b>Figura 7.</b> <i>Distribución de Consumo de Energía Final. Colombia - 2015</i> 
        figure(data-aos="fade-left")
          img(src='@/assets/curso/temas/tema4/tema4-29.svg')
          figcaption Nota. Tomada de UPME (2016).
      .col-12.col-md-6(data-aos="fade-right")
        p En esta figura, se observan los cuatro principales sectores consumidores del país: el sector transporte (41%), el industrial (29,4%), residencial (16,7%) y comercial y público o también llamado terciario (5,32%). 
        p En adelante, el interés de este documento se centra en estos cuatro grandes consumidores; se presentan las características del consumo de energía final por sector.

    Separador
    #t_4_1.titulo-segundo.color-acento-botones.mt-4(data-aos="fade-right")
      h2 4.1 Sector transporte

    .bloque-texto-g.bloque-texto-g--inverso.p-3.p-sm-4.p-md-5(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/tema4-03.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p El Balance Energético Colombiano (BECO) del año 2015 muestra que el transporte es el sector con mayor consumo de energía y, a su vez, el que genera mayor cantidad de emisiones de CO2. El consumo de energía en este sector está bastante influenciado por las características geográficas y demográficas del país. 
        br
        br
        | La población se concentra sobre todo en las ciudades principales, urbes que se encuentran muy alejadas entre sí y lejos de los principales puertos. Sumado a eso, la topografía nacional es muy cambiante. 
        br
        br
        | Por ejemplo, el trayecto desde el puerto de Buenaventura hasta Bogotá es de aproximadamente 520 km, recorrido en el cual se asciende hasta los 3.626 metros sobre el nivel mar (m.s.n.m). 

    .row.justify-content-center.align-items-center.mt-4.mb-4(data-aos="fade-left")
      div.d-flex.align-items-center.mb-4.mt-0.position-relative(style="z-index:1000 !important" data-aos="fade-right")    
        div.p-0.position-relative   
          img.mb-0.position-relative(src="@/assets/curso/temas/tema4/icon.svg")
        div.py-2.px-3.pe-5
          h4.mb-0 Consumo

          
    .row.justify-content-center.align-items-center.mb-4
      .col-md-4.col-12(data-aos="fade-left")
        img(src="@/assets/curso/temas/tema4/tema4-04.png", alt="alt")
      .col-md-8.col-12.pr-4(data-aos="fade-right")
        p A partir del balance realizado en 2015, se encontró un consumo final del sector transporte cercano a los 496.000 TJ, con los combustibles fósiles como principales energéticos. La gasolina a motor y el ACPM son los combustibles más usados en el transporte nacional, responsables de un 40% y 37% del consumo, respectivamente. 
        p La gasolina se consume principalmente en carros particulares, con un porcentaje aproximado del 83%. Mientras que el ACPM, con el 88% de participación, es mayormente usado en transporte de carga y transporte público para la comunidad en general. Por otro lado, la participación de la electricidad es del 1% del consumo, aproximadamente. Cabe mencionar que se utilizan también biocombustibles, como el alcohol carburante y el biodiesel, cuyo consumo de energía del sector transporte figura en el 2% y 5%, respectivamente.
      .col-12(data-aos="fade-right")
        p.mt-3 La participación de los energéticos anteriormente mencionados se muestra en las siguientes figuras: 

    .row.justify-content-center.align-items-center.mb-5.p-4.py-0
      .col-12.col-md-6
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          p.titulo.pb-0.mb-0 <b>Figura 8.</b> <i>Distribución del consumo por energético en el sector transporte - 2015</i> 
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema4/tema4-05.svg')
          figcaption Nota. Tomada de UPME (2016).
      .col-12.col-md-6(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido <b>Figura 9.</b> <i>Distribución del consumo de energía por modo de transporte - 2015</i> 
        figure.mt-md-4(data-aos="fade-left")
          img(src='@/assets/curso/temas/tema4/tema4-06.svg')
          figcaption.mt-md-4 Nota. Tomada de UPME (2016).
    .row 
      .col-12
        p El sector transporte comprende los subsectores aéreo, marítimo, ferroviario y carretero. El subsector de transporte por carretera es el que mayor participación tiene en el consumo energético del sector, con un 88%. 

    .row.justify-content-center.align-items-center.mt-4.mb-4(data-aos="fade-left")
      div.d-flex.align-items-center.mb-4.mt-0.position-relative(style="z-index:1000 !important" data-aos="fade-right")    
        div.p-0.position-relative   
          img.mb-0.position-relative(src="@/assets/curso/temas/tema4/icon.svg")
        div.py-2.px-3.pe-5
          h4.mb-0 Meta sectorial y acciones y medidas para el cumplimiento a 2022

    .row.justify-content-center.align-items-center.mb-4
      .col-md-7.col-12.pr-4(data-aos="fade-right")
        p Teniendo en cuenta el contexto antes mostrado, se formularon una serie de metas de eficiencia energética, que fueron trazadas a partir de los lineamientos de la nueva política en eficiencia energética formulada por el Ministerio de Minas y Energía, que se basa en la caracterización del sector hecho por la UPME en años anteriores. En la Tabla 1, se mostró el resumen de las metas sectoriales para el periodo 2017-2022, asociadas al consumo total de energía nacional. La meta de ahorro en el sector transporte es de 424.408 TJ (5.5%).
        p Para mejorar la eficiencia en el consumo de energía en el sector transporte, se necesita de una serie de acciones encaminadas primordialmente a reducir el consumo de combustibles fósiles, particularmente los líquidos, y a potenciar el uso de energéticos menos contaminantes, como el gas natural vehicular (GNV) o la electricidad.
      .col-md-5.col-12(data-aos="fade-left")
        img(src="@/assets/curso/temas/tema4/tema4-07.png", alt="alt")
      .col-12.mt-4(data-aos="fade-right")
        p Las acciones destacadas para el cumplimiento de metas del sector transporte son:
    
    .row.justify-content-center.align-items-center.mb-4
      .col-md-7(data-aos="fade-right")
        TabsC.color-primario
          .py-3.py-md-4(titulo="a. Medidas relacionadas con GNV")
            .row
              .col-12.mb-4.mb-md-0
                p Incrementar el uso de GNV en transporte público de pasajeros a nivel urbano e intermunicipal.

          .py-3.py-md-4(titulo="b. Medidas relacionadas con el uso de electricidad")
            .row
              .col-12
                p Reemplazar vehículos de motores de combustión del sector oficial, taxis de servicio público y vehículos para transporte de pasajeros por vehículos eléctricos e híbridos. 

      
    Separador
    #t_4_2.titulo-segundo.color-acento-botones.mt-4(data-aos="fade-right")
      h2 4.2 Sector industrial
    p(data-aos="fade-right") En Colombia, el sector industrial manufacturero está conformado por más de 4000 compañías, según los resultados del informe de la Superintendencia de Sociedades del 2014. Los códigos CIIU asignados a este sector van desde el número 10 al 31 y en la siguiente tabla se visualizan los códigos para los subsectores especificados en el sector industrial manufacturero: 

    .row.justify-content-center.align-items-center.mb-3
      .col-12.col-lg-8.col-md-10.titulo-sexto.color-acento-contenido.mt-2(data-aos="fade-right")
          p.titulo.pb-0.mb-0 <b>Tabla 2.</b> <i>Códigos CIIU especificados en el sector industrial manufacturero</i>
      .col-12.col-lg-8.col-md-10.px-0(data-aos="fade-left")
        .tabla-a.color-acento-contenido.mb-5
          table
            caption Nota. Tomada de UPME (2016).
            thead
              tr
                th(style="width:20%") CIIU
                th SUBSECTOR
            tbody
              tr
                td.td-uno-table 10
                td.td-dos-table.px-3 Elaboración de productos alimenticios.
              tr
                td.td-uno-table 11
                td.td-dos-table.px-3 Elaboración de bebidas.
              tr
                td.td-uno-table 12
                td.td-dos-table.px-3 Elaboración de productos de tabaco.
              tr
                td.td-uno-table 13
                td.td-dos-table.px-3 Fabricación de productos textiles.
              tr
                td.td-uno-table 14
                td.td-dos-table.px-3 Confección de prendas de vestir.
              tr
                td.td-uno-table 15 
                td.td-dos-table.px-3 Curtido y recurtido de cuero; fabricación de calzado; fabricación de artículos de viaje; maletas, bolsos de mano y artículos similares, y fabricación de artículos de talabartería y guarnicionería; adobo y teñido de pieles.
              tr
                td.td-uno-table 16
                td.td-dos-table.px-3 Transformación de la madera y fabricación de productos de madera y corcho; excepto muebles; fabricación de artículos de cestería y espartería.
              tr
                td.td-uno-table 17
                td.td-dos-table.px-3 Fabricación de papel, cartón y productos de papel y cartón.
              tr
                td.td-uno-table 18
                td.td-dos-table.px-3 Actividades de impresión y de producción de copias a partir de grabaciones originales.
              tr
                td.td-uno-table 19 
                td.td-dos-table.px-3 Coquización, fabricación de productos de la refinación del petróleo y actividad de mezcla de combustibles.
              tr
                td.td-uno-table 20
                td.td-dos-table.px-3 Fabricación de sustancias y productos químicos.
              tr
                td.td-uno-table 21
                td.td-dos-table.px-3 Fabricación de productos farmacéuticos, sustancias químicas medicinales y productos botánicos de uso farmacéutico.
              tr
                td.td-uno-table 22
                td.td-dos-table.px-3 Fabricación de productos de caucho y de plástico.
              tr
                td.td-uno-table 23
                td.td-dos-table.px-3 Fabricación de otros productos minerales no metálicos.
              tr
                td.td-uno-table 24
                td.td-dos-table.px-3 Fabricación de productos metalúrgicos básicos.
              tr
                td.td-uno-table 25
                td.td-dos-table.px-3 Fabricación de productos elaborados de metal, excepto maquinaria y equipo.
              tr
                td.td-uno-table 26
                td.td-dos-table.px-3 Fabricación de productos informáticos, electrónicos y ópticos.
              tr
                td.td-uno-table 27
                td.td-dos-table.px-3 Fabricación de aparatos y equipo eléctrico.
              tr
                td.td-uno-table 28
                td.td-dos-table.px-3 Fabricación de maquinaria y equipo n.c.p.
              tr
                td.td-uno-table 29
                td.td-dos-table.px-3 Fabricación de vehículos automotores, remolques y semirremolques.
              tr
                td.td-uno-table 30
                td.td-dos-table.px-3 Fabricación de otros tipos de equipo de transporte.
              tr
                td.td-uno-table 31
                td.td-dos-table.px-3 Fabricación de muebles, colchones y somieres.

	
    .row.justify-content-center.align-items-center.mt-0.mb-4(data-aos="fade-left")
      div.d-flex.align-items-center.mb-4.mt-0.position-relative(style="z-index:1000 !important" data-aos="fade-right")    
        div.p-0.position-relative   
          img.mb-0.position-relative(src="@/assets/curso/temas/tema4/icon.svg")
        div.py-2.px-3.pe-5
          h4.mb-0 Consumo

    .bloque-texto-g.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/tema4-08.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Dentro de los resultados del BECO 2015, el consumo del sector industrial se aproxima al 30% de la energía final nacional. Es el segundo sector que más consume (luego del sector transporte). Se destacan dentro de este consumo, la utilización de energía para fines térmicos, que resulta en un 83% del consumo total de la industria, por cuenta del uso de energéticos como el carbón mineral, gas natural y biomasa sólida. Por otra parte, el uso de energía eléctrica representa el 17% restante del consumo. Este puede ser por consumo directo de la red eléctrica o por autogeneración. 

    p(data-aos="fade-left") El comportamiento del consumo del sector industrial se observa en la siguiente figura: 

    .row.justify-content-center.align-items-center.tarjeta--azul-custom.mb-0.p-4.py-0
      .col-12.col-md-6
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          p.titulo.pb-0.mb-0 <b>Figura 10.</b> <i>Participación de consumo de energía en sector industrial por energético - 2014</i> 
        figure(data-aos="fade-left")
          img(src='@/assets/curso/temas/tema4/tema4-09.png')
          figcaption Nota. Tomada de UPME (2016).
      .col-12.mt-4
        p(data-aos="fade-left") Ahora bien, la caracterización de los usos de los principales energéticos consumidos por la industria se mostró en la anterior figura. En el caso de la energía eléctrica, esta utiliza el 17% de la energía final consumida por la industria. El principal responsable de este consumo, con alrededor del 76%, es el uso de energía eléctrica como fuerza motriz. Esto incluye procesos para bombear fluidos, comprimir aire, entre otros usos, que implican motorización eléctrica. Por otro lado, la caracterización también permitió observar un extenso uso de energía eléctrica en la generación de calor, especialmente en la industria de metales, plásticos y productos químicos. 
        p.mt-4(data-aos="fade-left") La participación de los usos de la electricidad se observa en las figuras a continuación:  

    .row.justify-content-center.align-items-center.tarjeta--azul-custom.mb-0.px-4.py-2
      .col-12.col-md-6
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          p.titulo.pb-0.mb-0 <b>Figura 11.</b> <i>Participación de consumo de energía en sector industrial por energético - 2014</i> 
        figure.mt-md-5(data-aos="fade-left")
          img(src='@/assets/curso/temas/tema4/tema4-10.png')
          figcaption Nota. Tomada de UPME (2016).
      .col-12.col-md-6
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          p.titulo.pb-0.mb-0 <b>Figura 12.</b> <i>Participación de los usos de la energía eléctrica en la industria</i> 
        figure(data-aos="fade-left")
          img(src='@/assets/curso/temas/tema4/tema4-11.png')
          figcaption Nota. Tomada de UPME (2016).

      .col-12
        p.mt-4.mb-4(data-aos="fade-left") A continuación, conocerá de manera breve y directa sobre el uso de combustibles:

    .tarjeta.tarjeta--azul.p-4.mb-5(data-aos="fade-right")
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center
          .col-md-6.col-12.mb-4.mb-md-0
            .row.justify-content-center.align-items-center
              .col-12.mb-4.mb-md-0
                h4 Consumo combustibles
                p Los combustibles sólidos, como carbón mineral, bagazo y coque, representan más del 45% de la energía total consumida, siendo utilizados principalmente para suministro de calor directo (39%) e indirecto (61%). Este último está asociado con procesos en calderas y cogeneración.
              .col-12.col-md-10
                figure
                  img(src='@/assets/curso/temas/tema4/tema4-12.svg', alt='')
          .col-md-6.col-12
            figure
              img(src='@/assets/curso/temas/tema4/tema4-13.png', alt='')

        .row.justify-content-center.align-items-center
          .col-md-6.col-12.mb-4.mb-md-0
            .row.justify-content-center.align-items-center
              .col-12.mb-4.mb-md-0
                h4 Consumo combustibles
                p Por su parte, los combustibles gaseosos, como el gas natural, se utilizan mayoritariamente para proveer calor indirecto y se utilizan en procesos en calderas. Su uso principal es en industrias como la de alimentos, papel, entre otras.
              .col-12.col-md-10
                figure
                  img(src='@/assets/curso/temas/tema4/tema4-14.svg', alt='')
          .col-md-6.col-12
            figure
              img(src='@/assets/curso/temas/tema4/tema4-15.png', alt='')
      
    p(data-aos="fade-right") El comportamiento del consumo antes presentado se observa en las siguientes figuras:

    .row.justify-content-center.align-items-center.tarjeta--azul-custom.mb-0.px-4.py-2
      .col-12.col-md-6
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          p.titulo.pb-0.mb-0 <b>Figura 13.</b> <i>Participación de los usos de los combustibles sólidos en la industria</i> 
        figure(data-aos="fade-left")
          img(src='@/assets/curso/temas/tema4/tema4-16.png')
          figcaption Nota. Tomada de UPME (2016).
      .col-12.col-md-6
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          p.titulo.pb-0.mb-0 <b>Figura 14.</b> <i>Participación de los usos del gas natural en la industria</i> 
        figure(data-aos="fade-left")
          img(src='@/assets/curso/temas/tema4/tema4-17.png')
          figcaption Nota. Tomada de UPME (2016).


    .row.justify-content-center.align-items-center.mt-5.mb-4(data-aos="fade-left")
      div.d-flex.align-items-center.mb-4.mt-0.position-relative(style="z-index:1000 !important" data-aos="fade-right")    
        div.p-0.position-relative   
          img.mb-0.position-relative(src="@/assets/curso/temas/tema4/icon.svg")
        div.py-2.px-3.pe-5
          h4.mb-0 Meta sectorial y acciones y medidas para cumplimiento en 2022

    p(data-aos="fade-left") La meta de ahorro que se estableció para el sector industrial es de 131.859 TJ (1.71 %). Teniendo en cuenta los resultados de la caracterización del consumo de energía en el sector industrial, se identificaron posibles medidas de eficiencia energética para el cumplimiento de esta meta. 
    p(data-aos="fade-left") Las acciones destacadas comprenden:


    .row.justify-content-center.align-items-center.mb-4
      .col-md-9(data-aos="fade-right")
        TabsC.color-primario
          .py-3.py-md-4(titulo="Medidas relacionadas con uso de electricidad")
            .row
              .col-12.mb-4.mb-md-0
                p Incluyen buenas prácticas de uso y mantenimiento relacionadas con las instalaciones eléctricas, acondicionamiento de aire, fuerza motriz, iluminación y sistemas de refrigeración y calentamiento. Se destacan: 
                ul.lista-ul
                  li.lista-ul__vineta.mb-0 Asegurar la operación de los sistemas de refrigeración conforme a las condiciones de diseño nominal y optimizar el funcionamiento de los sistemas actualmente instalados.
                  li.lista-ul__vineta.mb-0 Sustitución de motores antiguos y de eficiencias estándar por nuevos motores que sean más eficientes.
                  li.lista-ul__vineta.mb-0 Usar luz solar y artificial combinadas, de manera que se pueda usar la energía de forma más eficiente; y cambiar luminarias de baja eficiencia y obsoletas.
                  li.lista-ul__vineta Optimizar aislamientos térmicos en redes de servicio.

          .py-3.py-md-4(titulo="Medidas relacionadas con el uso de combustibles sólidos y de gas natural")
            .row
              .col-12
                p Incluyen principalmente buenas prácticas de uso y mantenimiento relacionadas con los sistemas de calentamiento directo e indirecto. Se destacan:
                ul.lista-ul
                  li.lista-ul__vineta.mb-0 Mejoramiento de aislamientos térmicos.
                  li.lista-ul__vineta.mb-0 Optimizar procesos de combustión.
                  li.lista-ul__vineta.mb-0 Reutilizar el calor residual de procesos de combustión.
                  li.lista-ul__vineta.mb-0 Implementar la cogeneración.
                  li.lista-ul__vineta.mb-0 Cambiar la tecnología utilizada en calderas convencionales y pirotubulares.

          .py-3.py-md-4(titulo="Medidas relacionadas con gestión de la energía")
            .row
              .col-12
                p Implementar un sistema de gestión de la energía.

    Separador
    #t_4_3.titulo-segundo.color-acento-botones.mt-4(data-aos="fade-right")
      h2 4.3 Sector comercial, público y de servicios (terciario)
    p(data-aos="fade-right") De acuerdo con el BECO realizado en 2014, el consumo del sector terciario es aproximadamente el 7% de la energía final de Colombia. Esto indica que no es un sector energético-intensivo; sin embargo, pese a esto, tiene potenciales oportunidades para uso eficiente de la energía. Hacen parte de este sector las entidades oficiales (públicas), establecimientos hoteleros y educativos, entre otros; y los códigos CIIU de los subsectores correspondientes son los códigos CIIU Revisión 3, comprendidos entre el 50 y el 93, observados en la siguiente tabla: 

    .row.justify-content-center.align-items-center.mb-3
      .col-12.col-lg-8.col-md-10.titulo-sexto.color-acento-contenido.mt-2(data-aos="fade-right")
          p.titulo.pb-0.mb-0 <b>Tabla 3.</b> <i>Códigos CIIU incluidos en el sector terciario</i>
      .col-12.col-lg-8.col-md-10.px-0(data-aos="fade-left")
        .tabla-a.color-acento-contenido.mb-5
          table
            caption Nota. Tomada de UPME (2016).
            thead
              tr
                th(style="width:20%") CIIU
                th SUBSECTOR
            tbody
              tr
                td.td-uno-table 50
                td.td-dos-table.px-3 Comercio, mantenimiento y reparación de vehículos automotores y motocicletas, sus partes, piezas y accesorios: comercio al por menor de combustibles y lubricantes para vehiculos automotores.
              tr
                td.td-uno-table 51
                td.td-dos-table.px-3 Comercio al por mayor y en comisión o por contrato, excepto el comercio de vehículos automotores y motocicletas; mantenimiento y reparación de maquinaria y equipo.
              tr
                td.td-uno-table 52
                td.td-dos-table.px-3 Comercio al por menor, excepto el comercio de vehículos automotores y motocicletas: reparación de efectos personales y enseres domésticos.
              tr
                td.td-uno-table 55
                td.td-dos-table.px-3 Hoteles, restaurantes, bares y similares.
              tr
                td.td-uno-table 63
                td.td-dos-table.px-3 Actividades complementarias y auxiliares al transporte; actividades de agencias de viajes.
              tr
                td.td-uno-table 64
                td.td-dos-table.px-3 Correo y telecomunicaciones.
              tr
                td.td-uno-table 65
                td.td-dos-table.px-3 Intermediación financiera, excepto los seguros y los fondos de pensiones y cesantías.
              tr
                td.td-uno-table 66
                td.td-dos-table.px-3 Financiación de planes de seguros y pensiones, excepto la seguridad social de afiliación obligatoria.
              tr
                td.td-uno-table 67
                td.td-dos-table.px-3 Actividades auxiliares de la intermediación financiera.
              tr
                td.td-uno-table 70
                td.td-dos-table.px-3 Actividades inmobiliarias.
              tr
                td.td-uno-table 71
                td.td-dos-table.px-3 Alquiler de maquinaria y equipo sin operarios y de efectos personales y enseres domésticos.
              tr
                td.td-uno-table 72
                td.td-dos-table.px-3 Informática y actividades conexas.
              tr
                td.td-uno-table 73
                td.td-dos-table.px-3 Investigación y desarrollo.
              tr
                td.td-uno-table 75
                td.td-dos-table.px-3 Administración pública y defensa; seguridad social de afiliación obligatoria.
              tr
                td.td-uno-table 80
                td.td-dos-table.px-3 Educación.
              tr
                td.td-uno-table 85
                td.td-dos-table.px-3 Servicios sociales y de salud.
              tr
                td.td-uno-table 91
                td.td-dos-table.px-3 Actividades de asociaciones.
              tr
                td.td-uno-table 92
                td.td-dos-table.px-3 Actividades de esparcimiento y actividades culturales y deportivas.
              tr
                td.td-uno-table 93
                td.td-dos-table.px-3 Otras actividades de servicios.

    .row.justify-content-center.align-items-center.mt-2.mb-4(data-aos="fade-left")
      div.d-flex.align-items-center.mb-4.mt-0.position-relative(style="z-index:1000 !important" data-aos="fade-right")    
        div.p-0.position-relative   
          img.mb-0.position-relative(src="@/assets/curso/temas/tema4/icon.svg")
        div.py-2.px-3.pe-5
          h4.mb-0 Consumo

    p(data-aos="fade-left") La caracterización hecha por la UPME de los usos de los principales energéticos consumidos por el sector terciario se muestra en la Figura 15. Se observa que los energéticos más usados son la energía eléctrica, gas natural y gas licuado de petróleo (GLP). La electricidad es principalmente consumida para iluminación (31 %), aire acondicionado (22.8 %) y refrigeración (13.9 %). El uso de gas natural es en aplicaciones de calor directo (cocción de alimentos, climatización de piscinas, calentamiento de agua doméstica, etc.) y de calor indirecto (esterilización y lavandería, en clínicas, hoteles, clubes, entre otros). #[span.clase-intro-text Por su parte, la distribución de los consumos se muestra en la Figura 16].

    .row.justify-content-center.align-items-center.tarjeta--azul-custom.mb-0.px-4.py-3
      .col-12.col-md-6
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          p.titulo.pb-0.mb-0 <b>Figura 15.</b> <i>Consumo de energía eléctrica, gas natural y GLP en el sector terciario</i> 
        figure(data-aos="fade-left")
          img(src='@/assets/curso/temas/tema4/tema4-18.png')
          figcaption Nota. Tomada de UPME (2016).
      .col-12.col-md-6
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          p.titulo.pb-0.mb-0 <b>Figura 16.</b> <i>Usos de la electricidad en el sector terciario</i> 
        figure(data-aos="fade-left")
          img(src='@/assets/curso/temas/tema4/tema4-19.png')
          figcaption Nota. Tomada de UPME (2016).

    .row.justify-content-center.align-items-center.mt-4.mb-4(data-aos="fade-left")
      div.d-flex.align-items-center.mb-4.mt-0.position-relative(style="z-index:1000 !important" data-aos="fade-right")    
        div.p-0.position-relative   
          img.mb-0.position-relative(src="@/assets/curso/temas/tema4/icon.svg")
        div.py-2.px-3.pe-5
          h4.mb-0 Meta sectorial y acciones y medidas para cumplimiento en 2022

    p(data-aos="fade-left") La meta de ahorro que se estableció para el sector comercial, público y de servicios es de 87.289 TJ (1.13%). A partir de los resultados de la caracterización del consumo de energía en el sector terciario, se identificaron posibles medidas de eficiencia energética para el cumplimiento de esta meta. 
    p(data-aos="fade-left") Las acciones destacadas comprenden:

    .row.justify-content-center.align-items-center.mb-4
      .col-md-9(data-aos="fade-right")
        TabsC.color-primario
          .py-3.py-md-4(titulo="Medidas relacionadas con uso de electricidad")
            .row
              .col-12.mb-4.mb-md-0
                p Incluyen: 
                ul.lista-ul
                  li.lista-ul__vineta.mb-0 Cambio de sistemas de iluminación y aire acondicionado.
                  li.lista-ul__vineta.mb-0 Utilizar equipos de medición inteligente.
                  li.lista-ul__vineta.mb-0 Implementar distritos térmicos.
                  li.lista-ul__vineta.mb-0 Adecuar los diseños de edificios y construcciones en general para que sean energéticamente más eficientes.
                  li.lista-ul__vineta Incorporar sistemas fotovoltaicos.

          .py-3.py-md-4(titulo="Medidas relacionadas con uso de gas natural")
            .row
              .col-12
                p.mb-4 Se relacionan principalmente con el aprovechamiento de calor residual en equipos de refrigeración.

    Separador
    #t_4_4.titulo-segundo.color-acento-botones.mt-0(data-aos="fade-right")
      h2 4.4 Residencial
    p(data-aos="fade-right") El sector residencial se caracteriza porque los principales usos de energía son en cocción, televisión, refrigeración e iluminación. Los energéticos que más se consumen en zonas urbanas son la electricidad (55%) y el gas natural (35%). En cambio, en áreas rurales, el principal energético es la leña (77%), seguido del GLP (14%). 

    .row.justify-content-center.align-items-center.mt-4.mb-4(data-aos="fade-left")
      div.d-flex.align-items-center.mb-4.mt-0.position-relative(style="z-index:1000 !important" data-aos="fade-right")    
        div.p-0.position-relative   
          img.mb-0.position-relative(src="@/assets/curso/temas/tema4/icon.svg")
        div.py-2.px-3.pe-5
          h4.mb-0 Consumo

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/tema4-20.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En este sector, se presentan importantes consumos de electricidad y gas natural, a nivel urbano, y de leña, a nivel rural. La distribución de los consumos de energía en el sector residencial urbano se muestra en las siguientes figuras. Se destaca la participación de la cocción con un 46%, mayormente con gas natural en zonas urbanas. Con respecto al uso de energía eléctrica, principalmente se utiliza en refrigeración (39%). En segundo lugar, se encuentra el consumo en la televisión (20%) y, finalmente, la iluminación (10%). 


    .row.justify-content-center.align-items-center.tarjeta--azul-custom.mb-0.px-4.py-4
      .col-12.col-md-6
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          p.titulo.pb-0.mb-0 <b>Figura 17.</b> <i>Consumo de energía en el sector residencial urbano - Colombia</i> 
        figure(data-aos="fade-left")
          img(src='@/assets/curso/temas/tema4/tema4-21.png')
          figcaption Nota. Tomada de UPME (2016).
      .col-12.col-md-6
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          p.titulo.pb-0.mb-0 <b>Figura 18.</b> <i>Consumo de energía eléctrica en el sector residencial urbano - Colombia</i> 
        figure(data-aos="fade-left")
          img(src='@/assets/curso/temas/tema4/tema4-22.png')
          figcaption Nota. Tomada de UPME (2016).

    p(data-aos="fade-right") Por otro lado, el consumo residencial en zonas rurales se caracteriza por el uso masivo de leña en estufas tradicionales y fogones abiertos. La eficiencia de estas estufas no supera el 10%, lo que representa un desafío en eficiencia energética. 

    .row.justify-content-center.align-items-center.mt-2.mb-4(data-aos="fade-left")
      div.d-flex.align-items-center.mb-2.mt-0.position-relative(style="z-index:1000 !important" data-aos="fade-right")    
        div.p-0.position-relative   
          img.mb-0.position-relative(src="@/assets/curso/temas/tema4/icon.svg")
        div.py-2.px-3.pe-5
          h4.mb-0 Meta sectorial y acciones y medidas para cumplimiento en 2022
    p(data-aos="fade-right") La meta de ahorro que se estableció para el sector comercial, público y de servicios es de 56.121 TJ (0.73%). A partir de los resultados de la caracterización del consumo de energía en el sector residencial, se identificaron posibles medidas de eficiencia energética para el cumplimiento de esta meta. 
    p(data-aos="fade-right") Las acciones destacadas comprenden: 

    .row.justify-content-center.align-items-center.mb-5
      .col-md-9(data-aos="fade-right")
        TabsC.color-primario
          .py-3.py-md-4(titulo="Medidas relacionadas con uso de electricidad")
            .row
              .col-12.mb-4.mb-md-0
                p Incluyen: 
                ul.lista-ul
                  li.lista-ul__vineta.mb-0 Reemplazar equipos de refrigeración doméstica de más de 10 años.
                  li.lista-ul__vineta.mb-0 Cambiar bombillas incandescentes por bombillas LED.
                  li.lista-ul__vineta.mb-0 Instalar sistemas solares fotovoltaicos para autoconsumo.
                  li.lista-ul__vineta.mb-0 Adecuar los diseños arquitectónicos de manera que permitan aprovechar la iluminación y ventilación naturales.
                  li.lista-ul__vineta Implementar sistemas solares térmicos para las duchas.

          .py-3.py-md-4(titulo="Medidas relacionadas con uso de gas natural")
            .row
              .col-12
                p Incluyen:
                ul.lista-ul
                  li.lista-ul__vineta.mb-0 Implementación de estufas mejoradas de leña y uso de GLP.

    p.mt-4(data-aos="fade-right") En resumen, las metas indicativas asociadas a cada uno de los sectores previamente examinados se muestran en la imagen:

    .row.justify-content-center.align-items-center.tarjeta--azul-custom.mb-0.px-4.py-4
      .col-12.col-md-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          p.titulo.pb-0.mb-0 <b>Figura 19.</b> <i>Consumo de energía en el sector residencial urbano - Colombia</i> 
        figure(data-aos="fade-left")
          img(src='@/assets/curso/temas/tema4/tema4-23.svg')
          figcaption Nota. Tomada de UPME (2021).


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
