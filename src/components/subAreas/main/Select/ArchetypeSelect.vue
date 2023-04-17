<template>
  <div class="d-flex flex-column">
    <label for="archetypeSelect" class="fs-3 text-light">Archetipo:</label>
    <select id="archetypeSelect" class="form-select" aria-label="Default select example" v-model="store.selectedArchetype" @change="LoadCards()">
      <option :value="archetype.archetype_name" v-for="archetype in store.archetypesList">{{ archetype.archetype_name }}</option>
    </select>
  </div>
</template>

<script>
  import { store } from '../../../../data/store';
  import axios from 'axios';
  export default {
    name: "CustomSelect",
    data(){
      return {
        store
      }
    },
    methods:{
      LoadCards(){
        store.loadOperationsEnded = false;
        axios.get(store.baseUrl+store.endpointCards+'?archetype='+store.selectedArchetype).then((res) => {
          store.cardsList = res.data.data;
          store.loadOperationsEnded = true;
        });
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>