<!--
 * @Author: yanbao dong
 * @Date: 2023-01-04 21:30:47
 * @LastEditors: yanbao dong
 * @LastEditTime: 2023-01-10 19:14:24
 * @Description: file content
-->
<template>
  <div class="newsEvents">
    <header class="header-box">
      <p class="title-page">{{ topic }}</p>
    </header>
    <main class="main-box">
      <div class="section" v-for="(item, index) in list" :key="index">
        <p class="bgd">
          <img :src="item.imgSrc" alt="" class="bgd-img" />
        </p>
        <p class="title-box">
          {{ item.title }}
        </p>
        <p class="content" v-html="item.content"></p>
        <p class="read-more" @click="readMore(item.link)">READ MORE</p>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from "vue";
let topic = ref("NEWS & EVENTS");
import img1 from "@/assets/news/news-01.png";
import img2 from "@/assets/news/news-02.png";
import img3 from "@/assets/news/news-03.png";
import img4 from "@/assets/news/news-04.png";
const list = ref([
  {
    imgSrc: img1,
    title:
      "CityU survey indicates background and trust in government affect citizens’ willingness to receive coronavirus vaccines",
    content:
      "A survey conducted by City University of Hong Kong (CityU) has revealed that only 38% of citizens are willing to get inoculated. Young people (aged between 20 and 24) are the least enthusiastic, with less than 30% indicating a willingness to get the jab.",
    link: "https://www.bbc.com/zhongwen/trad/chinese-news-56207032",
  },
  {
    imgSrc: img2,
    title:
      "CityU Survey: Nearly 60% respondents prefer the “0+7” quarantine arrangement for inbound travellers",
    content:
      "A research team led by Professor Christine Huang Yi-hui, Chair Professor of COM, conducted a poll in August, asking 1,042 local citizens aged above 20 about their opinions on the “3+4” isolation and quarantine policy.",
    link: "https://news.mingpao.com/pns/%e8%a6%81%e8%81%9e/article/20220922/s00001/1663783109544/%e5%9f%8e%e5%a4%a7%e8%aa%bf%e6%9f%a5-%e3%80%8c0-7%e3%80%8dvs-%e3%80%8c3-4%e3%80%8d-%e5%85%ad%e6%88%90%e5%b8%82%e6%b0%91%e6%92%90%e5%89%8d%e8%80%85",
  },
  {
    imgSrc: img3,
    title:
      'Majority of Hongkongers prefer "0+7” quarantine scheme, study shows',
    content:
      "A City University of Hong Kong survey has found that most people in Hong Kong prefer a reduction in the number of days required for inbound travelers to stay in quarantine hotels, with about 60 percent of respondents supporting the “0+7” model.  ",
    link: "https://www.thestandard.com.hk/breaking-news/section/4/194947/Majority-of-Hongkongers-preferred-%220+7%E2%80%9D-quarantine-scheme,-study-shows",
  },
  {
    imgSrc: img4,
    title: "Work for Your Dreams",
    content:
      "Professor Christine HUANG Yi-hui of CityU’s College of Liberal Arts and Social Sciences (CLASS) recalls a decorated career that has taken her from Taiwan to the US and now to Hong Kong",
    link: "https://www.scmp.com/presented/news/hong-kong/education/topics/digital-revolution/article/3146274/work-your-dreams",
  },
]);
const readMore = (link) => {
  window.open(link);
};
</script>

<style lang="scss">
.newsEvents {
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
    padding: 90px 0px;
    display: flex;
    justify-content: space-between;
    .section {
      width: 275px;
      background: rgb(167, 219, 251);
      height: 770px;
      position: relative;
      .bgd {
        width: 275px;
        height: 275px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #f3ebe1;
        .bgd-img {
          width: 100%;
        }
      }

      .title-box {
        color: #000;
        font-size: 20px;
        line-height: 1.5;
        font-weight: 600;
        margin: 25px 0 25px;
        padding: 0 20px;
        height: 180px;
      }
      .content {
        color: #222;
        font-size: 14px;
        line-height: 1.5;
        margin: 0 0 25px;
        padding: 0 20px;
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
        background: rgb(67, 160, 234);
        cursor: pointer;
      }
    }
  }
}
</style>
