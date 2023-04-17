<template>
  <span class="badge bg-black px-4 py-2"><h3>Numero di carte trovate: {{ store.cardsList.length }}</h3></span>
</template>

<script>
  import { store } from '../../../data/store';
  export default {
    name: "ResultInfoComponent",
    data(){
      return {
        store
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>