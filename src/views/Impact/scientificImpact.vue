<!--
 * @Author: yanbao dong
 * @Date: 2023-03-27 19:47:38
 * @LastEditors: yanbao dong
 * @LastEditTime: 2023-03-28 18:33:44
 * @Description: file content
-->
<template>
  <div class="scientificImpact">
    <header class="header-box">
      <p class="title-page">{{ topic }}</p>
    </header>
    <main class="main-box">
      <p class="title">BRIDGE Project Highlights</p>
      <p class="title-1" >
        <img
          src="@/assets/scientificImpact/sc-01.png"
          alt=""
          class="img-show img-21"
        />
      </p>
    </main>
  </div>
</template>

<script setup>
import { ref } from "vue";
let topic = ref("SCIENTIFIC IMPACT");
</script>

<style lang="scss">
.scientificImpact {
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
      width: 100%;
      .img-show {
        width: 100%;
      }
    }
  }
}
</style>
