<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.align-items-center.mr-4 
      .col-lg-7.col-12.pr-4(data-aos="fade-right")
        p Apreciado aprendiz, bienvenido a esta experiencia de aprendizaje, donde se presentarán una serie de conceptos fundamentales acerca de una organización. A lo largo de este documento, comenzará a familiarizarse con los tipos de organización y cuáles son los tipos de estructuras organizacionales. Además, aprenderá las generalidades de sistemas de producción y la importancia de una matriz de requisitos legales para una compañía en Colombia. Sumado a lo anterior, conocerá, de forma general, cuáles son los principales sectores económicos que hay en el país y las metas de ahorro de energía asociadas a dichos sectores.
        p Para la elaboración de este componente, se abordaron varios autores conocidos en #[span.clase-intro-text contexto de la organización y requisitos normativos,] de quienes se han citado y referenciado conceptos y ejemplos para los fines educativos de esta materia, en el entendido de que el conocimiento es social y, por lo tanto, es para ser usado por quienes necesitan adquirirlo. Se espera que este documento sea útil para todos aquellos, aprendices y lectores en general, que estén interesados en acercarse a asuntos básicos de la #[span.clase-intro-text gestión eficiente de la energía].
      .col-lg-5.col-12(data-aos="fade-left")
        img(src="@/assets/curso/temas/intro.png", alt="alt")

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
