<template>
  <div id="cardsList" class="w-100 h-100 d-flex justify-content-center align-items-center flex-wrap">
    <div class="card col-12 col-sm-6 col-md-4 col-lg-2 p-3" v-for="(card,index) in store.cardsList">
      <img :src="card.card_images[0].image_url" :alt="'Carta ' + card.name">
      <h5>{{ card.name }}</h5>
      <h5>{{ card.archetype }}</h5>
    </div>
  </div>
</template>

<script>
  import { store } from '../../../data/store';
  export default {
    name: "CardListComponent",
    data(){
      return {
        store
      }
    }
  }
</script>

<style lang="scss" scoped>
  .card{
    img{
      width: 100%;
      height: auto;
    }
  }
</style>