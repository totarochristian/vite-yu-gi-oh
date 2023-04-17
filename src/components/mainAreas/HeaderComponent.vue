<template>
  <BarWithLogoComponent />
  <JumbotronComponent />
</template>

<script>
import BarWithLogoComponent from '../subAreas/header/BarWithLogoComponent.vue'
import JumbotronComponent from '../subAreas/header/JumbotronCOmponent.vue';
  export default {
    name: "HeaderComponent",
    components:{
      BarWithLogoComponent,
      JumbotronComponent
    }
  }
</script>

<style lang="scss" scoped>
  
</style>