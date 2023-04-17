<template>
  <HeaderComponent />
  <MainComponent />
</template>

<script>
  import store from './data/store';
  import HeaderComponent from './components/mainAreas/HeaderComponent.vue';
  import MainComponent from './components/mainAreas/MainComponent.vue';
  export default {
    name: "App",
    components: {
      HeaderComponent,
      MainComponent
    }
  },
  methods: {
    StartLoadOperations(){

    }
  },
  mounted: {
    StartLoadOperations();
  }
</script>

<style lang="scss" scoped>

</style>