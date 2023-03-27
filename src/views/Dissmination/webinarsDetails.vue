<!--
 * @Author: yanbao dong
 * @Date: 2023-03-27 17:50:51
 * @LastEditors: yanbao dong
 * @LastEditTime: 2023-03-27 18:16:32
 * @Description: file content
-->
<template>
  <div class="webinarsDetails-wrap">
    <header class="header-box">
      <!-- <p class="title-page">{{ topic }}</p> -->
    </header>
    <main class="main-box">
      <div class="webinarsDetails-box" v-show="id==1">
        <PageList1></PageList1>
      </div>
      <div class="webinarsDetails-box" v-show="id==2">
         <PageList2></PageList2>
      </div>
      <div class="webinarsDetails-box" v-show="id==3">
         <PageList3></PageList3>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
const router = useRouter();
const route = useRoute();
const id = ref(1);
id.value = route.query.id || 1;
console.log(id.value);
import PageList1 from './components/PageList1.vue'
import PageList2 from './components/PageList2.vue'
import PageList3 from './components/PageList3.vue'
</script>

<style lang="scss">
.webinarsDetails-wrap {
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
