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
        axios.get(store.baseUrl+store.endpointCards).then((res) => {
          store.cardsList = res.data.data;

          axios.get(store.baseUrl+store.endpointArchetypes).then((res) =>{
            store.archetypesList = res.data;
          })

          store.loadOperationsEnded = true;
          console.log("Operazioni di caricamento concluse!");
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