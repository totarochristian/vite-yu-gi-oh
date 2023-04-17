<template>
  <span class="badge bg-secondary"><h3>Numero di carte trovate: {{ store.cardsList.length }}</h3></span>
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