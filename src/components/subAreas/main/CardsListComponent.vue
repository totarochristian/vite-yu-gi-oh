<template>
  <div id="cardsList" class="w-100 h-100 d-flex justify-content-center align-items-center flex-wrap">
    <CardComponent :card="card" v-for="(card,index) in store.cardsList"/>
  </div>
</template>

<script>
  import CardComponent from './CardComponent.vue';
  import { store } from '../../../data/store';
  export default {
    name: "CardListComponent",
    data(){
      return {
        store
      }
    },
    components:{
      CardComponent
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