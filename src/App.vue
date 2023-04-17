<template>
  <HeaderComponent />
  <MainComponent />
</template>

<script>
  import { store } from './data/store';
  import axios from 'axios';
  import HeaderComponent from './components/mainAreas/HeaderComponent.vue';
  import MainComponent from './components/mainAreas/MainComponent.vue';
  export default {
    name: "App",
    data(){
      return{
        store
      }
    },
    components: {
      HeaderComponent,
      MainComponent
    }
    ,
    methods: {
      StartLoadOperations(){
        axios.get(store.baseUrl).then((res) => {
          store.cardsList = res.data.data;
          store.loadOperationsEnded = true;
        });
      }
    },
    mounted(){
      this.StartLoadOperations();
    }
  }
</script>

<style lang="scss" scoped>

</style>