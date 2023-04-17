<template>
  <main class="p-4 d-flex flex-column align-items-center gap-3" :class="{'justify-content-center': !store.loadOperationsEnded}">
    <SearchBarComponent v-show="store.loadOperationsEnded" />
    <ResultInfoComponent v-show="store.loadOperationsEnded" />
    <CardListComponent v-show="store.loadOperationsEnded" />
    <LoaderComponent v-show="!store.loadOperationsEnded" />
  </main>
</template>

<script>
  import { store } from '../../data/store';
  import SearchBarComponent from '../subAreas/main/SearchBarComponent.vue';
  import ResultInfoComponent from '../subAreas/main/ResultInfoComponent.vue';
  import CardListComponent from '../subAreas/main/CardsListComponent.vue'
  import LoaderComponent from '../subAreas/main/LoaderComponent.vue';
  export default {
    name: "MainComponent",
    components: {
      SearchBarComponent,
      ResultInfoComponent,
      CardListComponent,
      LoaderComponent
    },
    data(){
      return {
        store
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>