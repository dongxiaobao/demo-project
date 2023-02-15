<!--
 * @Author: yanbao dong
 * @Date: 2023-01-02 19:19:22
 * @LastEditors: yanbao dong
 * @LastEditTime: 2023-01-13 14:16:06
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
      <p class="read-more" @click="readMore(index)">READ MORE</p>
    </div>
  </div>
</template>

<script setup>
import image1 from "@/assets/lates/article-01.jpeg";
import image2 from "@/assets/lates/article-02.jpeg";
import image3 from "@/assets/lates/article-03.jpeg";
import image4 from "@/assets/lates/article-04.jpeg";
import {  useRouter } from 'vue-router';
const router = useRouter();
;
import { ref } from "vue";
let list = ref([
  {
    img: image1,

    title: "Resilience ",
    content:'Resilience is the ability to withstand adversity and bounce back from difficult life events. Hong Kong is envisioned with a long-term goal of building a resilient society with capacity to bridge existing and emerging gaps so as to absorb future shocks. '
     
  },
  {
    img: image2,

    title: "Trust",
    content:'Trust also plays a pivotal role in policy compliance and resilience building, especially during crises. Similarly, distrust was often at the root of failed policy. '
     
  },
  {
    img: image3,

    title: "Communication",
    content:'People need help learning to develop resilience in the tressful world. At the same time, how people talk about crises provide informative insights of how people make sense of crises and regulate their behaviors.'
     
  },
  {
    img: image4,

    title: "Information & Technology",
    content:"Digital inequality has posed a significant barrier to resilience building. There is a strong need to uncover the digital health disparities in relation to social disparities and to support policymaking for vulnerable targets."
  }
]);
const readMore = (index)=>{
  const pathMap ={
    0:'/resilience',
    1:'/trust',
    2:'/communication',
    3:'/informationAndTechnology'
  }
    router.push({
      path:pathMap[index],
    });
}
</script>

<style lang="scss">
.article {
  display: flex;
  justify-content: space-between;
  .section {
    width: 275px;
    background: rgb(167,219,251);
    height: 550px;
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
      margin: 25px 5px 25px 25px;
      font-weight: 600;
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
      color: #222;
      font-weight: 600;
      background: rgb(67,160,234);
      cursor: pointer;
    }
  }
}
</style>
