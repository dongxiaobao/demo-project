<!--
 * @Author: yanbao dong
 * @Date: 2023-01-02 19:19:22
 * @LastEditors: yanbao dong
 * @LastEditTime: 2023-01-04 18:06:09
 * @Description: file content
-->
<template>
  <div class="article">
    <div class="section" v-for="(item, index) in list" :key="index">
      <p class="bgd">
        <img :src="item.img" alt="" class="bgd-img" />
      </p>
      <p class="title-box">
        {{ item.title }}
      </p>
      <p class="content" v-html="item.content"></p>
      <p class="read-more">READ MORE</p>
    </div>
  </div>
</template>

<script setup>
import image1 from "@/assets/lates/article-01.webp";
import image2 from "@/assets/lates/article-02.jpeg";
import image3 from "@/assets/lates/article-03.jpeg";
import image4 from "@/assets/lates/article-04.jpeg";

import { ref } from "vue";
let list = ref([
  {
    img: image1,

    title: "Resilience ",
    content:
      "A full-time masters programme taught by the OII and partner departments at Oxford. This multidisciplinary degree explores how to create and analyse data sets to understand important issues across the social sciences.",
  },
  {
    img: image2,

    title: "Trust",
    content:
      "A full-time masters programme taught by the OII and partner departments at Oxford. This multidisciplinary degree explores how to create and analyse data sets to understand important issues across the social sciences.",
  },
  {
    img: image3,

    title: "Communication",
    content:
      "A full-time masters programme taught by the OII and partner departments at Oxford. This multidisciplinary degree explores how to create and analyse data sets to understand important issues across the social sciences.",
  },
  {
    img: image4,

    title: "JInformation & Technology",
    content:
      " and partner departments at Oxford. This multidisciplinary degree explores how to create and analyse data sets to understand important issues across the social sciences.",
  },
]);
</script>

<style lang="scss">
.article {
  display: flex;
  justify-content: space-between;
  .section {
    width: 275px;
    background: #49b4f7;
    height: 500px;
    position: relative;
    .bgd {
      width: 275px;
      .bgd-img {
        width: 100%;
      }
    }

    .title-box {
      color: #000;
      font-size: 20px;
      line-height: 1.5;
      margin: 25px;
    }
    .content {
      color: #222;
      font-size: 14px;
      line-height: 1.5;
      margin: 0 25px 25px;
    }
    .read-more {
      position: absolute;
      font-size: 14px;
      line-height: 1.5;
      bottom: 20px;
      margin-left: 25px;
      display: inline-block;
      padding: 8px 30px;
      border-radius: 20px;
      color: #fff;
      font-weight: 600;
      background: blue;
      cursor: pointer;
    }
  }
}
</style>
