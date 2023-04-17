<template>
  <header>
    <div class="w-100 h-100 px-3 py-1 d-flex align-items-center gap-3">
      <img src="/images/logo.png" alt="Logo Yu-Gi-Oh Api">
      <h2>Yu-Gi-Oh Api</h2>
    </div>
  </header>
</template>

<script>
  export default {
    name: "HeaderComponent"
  }
</script>

<style lang="scss" scoped>
  header{
    height: 70px;
    img{
      height: 100%;
      width: auto;
      object-position: center;
      object-fit: contain;
    }
  }
</style>