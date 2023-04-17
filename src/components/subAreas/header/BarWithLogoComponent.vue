<template>
  <header>
    <div class="w-100 h-100 px-3 py-1 d-flex justify-content-center align-items-center gap-3">
      <img src="/images/logo.svg" alt="Logo Yu-Gi-Oh Api">
    </div>
  </header>
</template>

<script>
  export default {
    name: "BarWithLogoComponent"
  }
</script>

<style lang="scss" scoped>
  header{
    img:last-child{
      height: 100%;
      width: auto;
      object-position: center;
      object-fit: contain;
      margin-top: 2rem;
    }
  }
</style>