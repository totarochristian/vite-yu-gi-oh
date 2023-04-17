<template>
  <div id="jumbotron" class="d-flex w-100 justify-content-center align-items-end overflow-hidden">
    <img src="/images/jumbo-center.webp" alt="Man in the center of the jumbotron">
  </div>
</template>

<script>
  export default {
    name: "JumbotronComponent"
  }
</script>

<style lang="scss" scoped>
  #jumbotron{
    height: 70vh;
    background-image: url("/images/jumbo-bg.webp");
  }
</style>