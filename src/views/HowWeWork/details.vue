<!--
 * @Author: yanbao dong
 * @Date: 2023-03-28 18:05:20
 * @LastEditors: yanbao dong
 * @LastEditTime: 2023-03-28 18:31:11
 * @Description: file content
-->
<template>
  <div class="spDetails-1">
    <header class="header-box">
      <p class="title-page">{{ topic }}</p>
    </header>
    <main class="main-box">
      <p class="title">{{ title }}</p>
      <p class="title-1" v-if="id == 2">
        <img
          src="@/assets/subProjects/sp-details-21.png"
          alt=""
          class="img-show img-21"
        />
      </p>
      <p class="title-1" v-if="id == 2">
        <img
          src="@/assets/subProjects/sp-details-22.png"
          alt=""
          class="img-show img-22"
        />
      </p>
      <p class="title-1" v-if="id == 3">
        <img
          src="@/assets/subProjects/sp-details-03.png"
          alt=""
          class="img-show img-03"
        />
      </p>
      <p class="title-1" v-if="id == 4">
        <img
          src="@/assets/subProjects/sp-details-04.png"
          alt=""
          class="img-show img-04"
        />
      </p>
      <p class="title-1" v-if="id == 5">
        <img
          src="@/assets/subProjects/sp-details-05.png"
          alt=""
          class="img-show img-05"
        />
      </p>
      <p class="title-1" v-if="id == 6">
        <img
          src="@/assets/subProjects/sp-details-06.png"
          alt=""
          class="img-show img-06"
        />
      </p>
    </main>
  </div>
</template>

<script setup>
import { ref } from "vue";
let topic = ref("SP#1");
import { useRoute } from "vue-router";

const route = useRoute();
const id = ref(2);
id.value = route.query.id || 2;
const spMap = {
  2: "SP#2",
  3: "SP#3",
  4: "SP#4",
  5: "SP#5",
  6: "SP#6",
};
const title = ref("");
const titleMap = {
  2: "Figure SP2. Trust-based Resilience Building Framework",
  3: "Figure SP3. Illustration of the DiD Analysis",
  4: "Figure SP4. An Extended Digital Divide Model",
  5: "Table SP5. Key Tasks Overview",
  6: "Figure SP6. Design, Theoretical Framework, and Contributions of SP6",
};
topic.value = spMap[id.value];
title.value = titleMap[id.value];
</script>

<style lang="scss">
.spDetails-1 {
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
      .img-show{
        width: 100%;
      }
    }
   
  }
}
</style>
