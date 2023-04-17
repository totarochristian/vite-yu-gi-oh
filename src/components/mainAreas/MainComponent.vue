<template>
  <main class="p-4 d-flex flex-column justify-content-start align-items-center gap-3">
    <SearchBarComponent />
    <CardListComponent />
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
    }
  }
</script>

<style lang="scss" scoped>

</style>