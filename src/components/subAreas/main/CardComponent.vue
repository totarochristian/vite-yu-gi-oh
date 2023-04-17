<template>
  <div class="cardElem col-12 col-sm-6 col-md-4 col-lg-2 p-3">
    <img :src="card.card_images[0].image_url" :alt="'Carta ' + card.name">
    <div class="description">
      <h5 class="text-center text-uppercase fw-bold pt-3">{{ card.name }}</h5>
      <h5 class="text-center">{{ card.archetype }}</h5>
    </div>
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
  @import '../../../assets/styles/partial/variables';
  .cardElem{
    .description{
      margin-top: 1rem;
      padding: 1rem;
      border-radius: 20px;
      background-color: $cardBackgroundColor;
      color: $cardColor;
      word-break: break-all;
    }
    img{
      width: 100%;
      height: auto;
      border-radius: 15px;
      position: relative;
      animation: UpAndDown 1.5s linear infinite;
      &:hover {
        cursor: pointer;
        animation-play-state: paused;
      }
    }
  }
  @keyframes UpAndDown {
    0%, 100% {
      bottom: 0;
    }
    50% {
      bottom: 10px;
    }
  }
</style>