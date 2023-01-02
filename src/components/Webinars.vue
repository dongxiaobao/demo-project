<template>
  <div class="webinars">
    <section class="content" v-for="(item, index) in list" :key="index">
      <div class="left-box">
        <p class="title-1">{{ item.title }}</p>
        <p class="title-2-2">{{ item.time }}</p>
        <p class="title-3">{{ item.content }}</p>
      </div>
      <div class="right-box">
        <img :src="item.img" alt="" class="right-img" />
      </div>
    </section>
    <p class="top-line"></p>
    <footer class="footer-web">
      <p class="text">View all Events</p>
      <p class="line"></p>
      <p class="text">View all webinars</p>
    </footer>
  </div>
</template>

<script setup>
import image1 from "@/assets/tab-1.jpg";
import image2 from "@/assets/tab-2.jpeg";
import { ref } from "vue";
let list = ref([
  {
    img: image1,
    time: "Nov 10, 2022",
    title:
      "Modular and reproducible workflows for federated molecular QTL analysis",
    content: `Webinars,WP2,CINECA webinar series`,
  },
  {
    img: image2,
    time: "May 18, 2022 – May 19, 2022",
    title: "Data Harmonization workshop",
    content: `WP3,WP6,Workshop`,
  },
  {
    img: image2,
    time: "Mar 31, 2022 WP3, Webinars",
    title:
      "Bringing it all together: human cohort standards, tools and applications",
    content: ``,
  },
]);
</script>

<style lang="scss">
.webinars {
  padding-left: 17px;
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 30px;
    cursor: pointer;
    .left-box {
      margin-right: 20px;
      .title-1 {
        font-size: 20px;
        line-height: 1.1;
        color: #222;
        margin-bottom: 6px;
      }
      .title-3 {
        font-size: 13px;
        line-height: 1.5;
        color: #222;
      }
      .title-2-2 {
        font-size: 13px;
        line-height: 1.5;
        color: #222;
      }
    }
    .right-box {
      width: 173px;
      .right-img {
        width: 173px;
        height: 88px;
      }
    }
  }
  .top-line {
    margin-top: 20px;
    margin-left: auto;
    width: 230px;
    background: #c72b39;
    height: 2px;
  }
  .footer-web {
    padding-top: 4px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .line {
      height: 15px;
      width: 2px;
      background: #222;
      margin: 0 10px;
    }
    .text {
      font-size: 12px;
      line-height: 1.5;
      color: #c72b39;
      font-weight: 600;
      cursor: pointer;
    }
  }
}
</style>
