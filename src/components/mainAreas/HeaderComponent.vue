<template>
  <BarWithLogoComponent />
  <JumbotronComponent />
  <TitleComponent />
</template>

<script>
import BarWithLogoComponent from '../subAreas/header/BarWithLogoComponent.vue';
import JumbotronComponent from '../subAreas/header/JumbotronComponent.vue';
import TitleComponent from '../subAreas/header/TitleComponent.vue';
  export default {
    name: "HeaderComponent",
    components:{
      BarWithLogoComponent,
      JumbotronComponent,
      TitleComponent
    }
  }
</script>

<style lang="scss" scoped>
  
</style>