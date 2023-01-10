<template>
  <div class="sp-1">
    <header class="header-box">
      <p class="title-page">{{ topic }}</p>
    </header>
    <main class="main-box">
      <p class="title">Hong Kong Social Pulse Database</p>
      <p class="title-1">
        ● Preliminary Results：How Are Media Attention Shaped by the Pandemic？
      </p>
      <p class="html-box">
        <iframe
          :src="src"
          frameborder="0"
          style="width: 1200px; height: 600px"
        ></iframe>
      </p>
      <p class="gif-pic">
        <img src="@/assets/pageImg/media_attention.gif" alt="" class="gif" />
      </p>
    </main>
  </div>
</template>

<script setup>
import { ref } from "vue";
let topic = ref("SP#1");
let src = ref("./charts.html");
</script>

<style lang="scss">
.sp-1 {
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
    .title {
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 30px;
    }
    .title-1 {
      margin-bottom: 30px;
    }
    .gif-pic {
      margin-top: 30px;
      width: 1200px;
      .gif {
        width: 100%;
      }
    }
  }
}
</style>
