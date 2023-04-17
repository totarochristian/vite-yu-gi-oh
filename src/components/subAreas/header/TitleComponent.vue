<template>
  <div id="title" class="w-100 d-flex flex-column justify-content-center align-items-center py-2 px-4">
    <h1>Sfoglia il catalogo</h1>
    <h2 class="text-center">Per diventare il miglior giocatore devi conoscere tutte le carte!</h2>
  </div>
</template>

<script>
  export default {
    name: "TitleComponent"
  }
</script>

<style lang="scss" scoped>
  @import '../../../assets/styles/partial/variables';
  #title{
    height: 20vh;
    background-image: linear-gradient(
        to bottom,
        rgb(0, 0, 0) 0%,
        rgba(0, 0, 0, 0) 40%,
        rgba(0, 0, 0, 0) 60%,
        rgb(0, 0, 0) 100%
    );
    h1{
      color: $titleH1Color;
    }
    h2{
      color: $titleH2Color;
    }
  }
</style>