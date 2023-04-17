<template>
  <div class="card col-12 col-sm-6 col-md-4 col-lg-2 p-3">
    <img :src="card.card_images[0].image_url" :alt="'Carta ' + card.name">
    <h5 class="text-center text-uppercase fw-bold pt-3">{{ card.name }}</h5>
    <h5 class="text-center">{{ card.archetype }}</h5>
  </div>
</template>

<script>
  export default {
    name: "CardComponent",
    props:{
      card: Object
    }
  }
</script>

<style lang="scss" scoped>

</style>