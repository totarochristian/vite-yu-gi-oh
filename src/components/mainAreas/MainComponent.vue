<template>
  <main class="p-4">
    <SearchBarComponent />
  </main>
</template>

<script>
import SearchBarComponent from '../subAreas/main/SearchBarComponent.vue';
  export default {
    name: "MainComponent",
    components: {
      SearchBarComponent
    }
  }
</script>

<style lang="scss" scoped>

</style>