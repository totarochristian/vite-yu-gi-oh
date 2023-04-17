<template>
  <HeaderComponent />
  <MainComponent />
</template>

<script>
  import HeaderComponent from './components/mainAreas/HeaderComponent.vue';
  import MainComponent from './components/mainAreas/MainComponent.vue'
  export default {
    name: "App",
    components: {
      HeaderComponent,
      MainComponent
    }
  }
</script>

<style lang="scss" scoped>

</style>