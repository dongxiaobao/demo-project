<!--
 * @Author: yanbao dong
 * @Date: 2023-02-16 22:45:37
 * @LastEditors: yanbao dong
 * @LastEditTime: 2023-03-27 17:05:02
 * @Description: file content
-->
<template>
  <div class="webinars">
    <header class="header-box">
      <p class="title-page">{{ topic }}</p>
    </header>
    <main class="main-box">
      <Webinars1></Webinars1>
      <Webinars2></Webinars2>
      <Webinars3></Webinars3>
    </main>
  </div>
</template>

<script setup>
import { ref } from "vue";
let topic = ref("WEBINARS");
import Webinars1 from './components/Webinars1.vue'
import Webinars2 from './components/Webinars2.vue'
import Webinars3 from './components/Webinars3.vue'
</script>

<style lang="scss">
.webinars {
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
