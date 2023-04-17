<template>
  <main class="p-4 d-flex flex-column justify-content-start align-items-center gap-3">
    <SearchBarComponent v-show="loadOperationsEnded" />
    <CardListComponent v-show="loadOperationsEnded" />
  </main>
</template>

<script>
import SearchBarComponent from '../subAreas/main/SearchBarComponent.vue';
import CardListComponent from '../subAreas/main/CardsListComponent.vue'
  export default {
    name: "MainComponent",
    components: {
      SearchBarComponent,
      CardListComponent
    },
    props:{
      loadOperationsEnded: Boolean
    }
  }
</script>

<style lang="scss" scoped>

</style>