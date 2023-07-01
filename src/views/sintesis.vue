<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p El mapa conceptual aborda el tema principal del contexto de la organización y requisitos normativos. Se exploran los siguientes subtemas: la teoría de la organización y estructuras organizacionales, incluyendo el concepto de organización, los tipos de organización, los límites de la organización, el concepto de estructura organizacional y la centralización versus descentralización y especialización del trabajo. Además, se abordan los sistemas y modelos de producción industrial, que incluyen el concepto de sistemas de producción industrial y los diagramas de flujo o de proceso. También se analizan las actividades económicas en Colombia, como los sectores económicos, las actividades económicas, las cadenas de valor o cadenas globales de valor, los agentes económicos y el Código CIIU. Otro aspecto importante es la inclusión de los objetivos y metas sectoriales del Programa de Uso Racional y Eficiente de la Energía (PROURE) en Colombia, en sectores como el transporte, el sector industrial, el comercial, público y de servicios (terciario) y el residencial, especificando el consumo, las metas y las acciones para su cumplimiento en 2022. Por último, se aborda la identificación de requisitos normativos y legales, incluyendo la normatividad para crear una matriz de requisitos legales, la elaboración de la matriz y el cumplimiento de la misma.
    p.mb-5 A continuación, se muestra un mapa conceptual con los elementos más importantes desarrollados en este componente.

    .row.justify-content-center
      .col-12.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
