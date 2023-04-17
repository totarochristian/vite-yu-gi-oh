<template>
  <div id="searchBar" class="w-100 d-flex justify-content-center align-items-center">
    <ArchetypeSelect />
  </div>
</template>

<script>
  import ArchetypeSelect from './Select/ArchetypeSelect.vue';
  export default {
    name: "SearchBarComponent",
    components: {
      ArchetypeSelect
    }
  }
</script>

<style lang="scss" scoped>

</style>