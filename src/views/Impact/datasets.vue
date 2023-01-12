<template>
  <div class="datasets">
    <header class="header-box">
      <p class="title-page">{{ topic }}</p>
    </header>
    <main class="main-box">DATASETS</main>
  </div>
</template>

<script setup>
import { ref } from "vue";
let topic = ref("DATASETS");
</script>

<style lang="scss">
.datasets {
  min-width: 1200px;
  text-align: left;
  .header-box {
    height: 144px;
    width: 100%;
    background: url(@/assets/page-bc.jpg) no-repeat top center;
    background-size: cover;
    .title-page {
      width: 1200px;
      margin: 0 auto;
      height: 100%;
      padding-top: 48px;
      font-size: 40px;
      line-height: 1.5;
      color: #fff;
      font-weight: 600;
    }
  }
  .main-box {
    width: 1200px;
    margin: 0 auto;
    padding: 90px 30px;
  }
}
</style>
