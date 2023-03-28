<template>
  <div class="subProjects">
    <header class="header-box">
      <p class="title-page">{{ topic }}</p>
    </header>
    <main class="main-box">
      <p class="text-1">
        The <span class="weight">BRIDGE project</span>, through six sub-projects
        (SP), draws on diverse methodological strengths, including interviews
        and focus groups, surveys, experiments, big data analytics, and
        econometrics, to construct a cross-disciplinary and multi-level
        framework to bridge existing social divides in Hong Kong and cultivate
        resilience.
      </p>
      <div class="box-1">
        <div class="section" v-for="(item, index) in list1" :key="index">
          <p class="bgd">
            <img :src="item.imgSrc" alt="" class="bgd-img" />
          </p>
          <p class="title-box">
            {{ item.title }}
          </p>
          <p class="content" v-html="item.content"></p>
          <p class="read-more" @click="toPageMore(index)">VIEW PROJECT</p>
        </div>
      </div>
      <div class="box-1">
        <div class="section" v-for="(item, index) in list2" :key="index">
          <p class="bgd">
            <img :src="item.imgSrc" alt="" class="bgd-img" />
          </p>
          <p class="title-box">
            {{ item.title }}
          </p>
          <p class="content" v-html="item.content"></p>
          <p class="read-more" @click="toViewProject(index)">VIEW PROJECT</p>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from "vue";
let topic = ref("Sub-projects");
import img1 from "@/assets/subProjects/sub-pro-01.png";
import img2 from "@/assets/subProjects/sub-pro-02.png";
import img3 from "@/assets/subProjects/sub-pro-03.png";
import img4 from "@/assets/subProjects/sub-pro-04.png";
import img5 from "@/assets/subProjects/sub-pro-05.png";
import img6 from "@/assets/subProjects/sub-pro-06.png";
const list1 = ref([
  {
    imgSrc: img1,
    title: "Mapping the Social Pulse During and After the Pandemic (SP #1)",
    content:
      "This project identifies dilemma-preference gaps among different stakeholders via longitudinal analysis of policies and public opinion represented in news, social media,search and mobility data. ",
    link: "",
  },
  {
    imgSrc: img2,
    title:
      "Tracking Individuals’ Resilience Building via a Trust-Based Mechanism (SP#2)",
    content:
      "This project provides population-representative evidence on policy compliance, individual resilience. It adopts a process perspective and aims to unfold the stages of an underlying resilience- building mechanism. ",
    link: "",
  },
  {
    imgSrc: img3,
    title:
      "Social Distrust, Expatriate Emigration, and Economic Resilience  (SP#3)",
    content:
      "This project complements other sub-projects by focusing on hard-to-survey demographics, notably skilled expatriates. It explicitly measures expatriate emigration with quantitative rental transaction data.",
    link: "",
  },
]);
const list2 = ref([
  {
    imgSrc: img4,
    title: "A Trend Survey of Digital Health and Social Disparities (SP#4)",
    content:
      "Parallel to and complement with SP2 and SP3, this project addresses the issue of health and social disparity, and serves as another mechanism in “mechanism analysis phrase” the Gap Management Model.",
    link: "",
  },
  {
    imgSrc: img5,
    title:
      "Developing Guidelines for Balanced Communication and Decision Making (SP#5)",
    content:
      "With a qualitative approach to contextualize and complement other SP’s findings, this project seeks in-depth insights from individuals of various backgrounds and generate solutions for bridging the identified gaps.",
    link: "",
  },
  {
    imgSrc: img6,
    title: "Experimental Investigations on Communication Strategies (SP#6)",
    content:
      "This project offers solutions from a communication perspective for building a more resilient society. It will inform the design for the other sub-projects. It will also produce communication strategies and protocos for practical uses.",
    link: "",
  },
]);
import { useRouter } from "vue-router";
const router = useRouter();
const toPageMore = (params) => {
  if (params === 0) {
    router.push({
      path: "/subProject/SP1",
    });
    return;
  }
  router.push({
    path: "/subProject/details",
    query: {
      id: params + 1,
    },
  });
};
const toViewProject = (params) => {
  router.push({
    path: "/subProject/details",
    query: {
      id: params + 4,
    },
  });
};
</script>

<style lang="scss">
.subProjects {
  min-width: 1200px;
  text-align: left;
  line-height: 1.5;
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
    .weight {
      font-weight: 600;
    }
    .text-1 {
      margin-bottom: 30px;
      font-size: 20px;
      line-height: 1.5;
      .weight {
        font-weight: 600;
      }
      .underline {
        text-decoration: underline;
      }
    }
    .box-1 {
      display: flex;
      justify-content: space-between;
      margin-bottom: 30px;
    }
    .section {
      width: 300px;
      background: rgb(167, 219, 251);
      height: 600px;
      position: relative;
      &:nth-child(2) {
        .title-box {
        }
      }
      .bgd {
        width: 300px;

        display: flex;
        align-items: center;
        justify-content: center;
        .bgd-img {
          width: 100%;
          height: 200px;
        }
      }
      .title-box {
        color: #000;
        font-size: 20px;
        line-height: 1.5;
        font-weight: 600;
        margin: 25px 0 25px;
        padding: 0 20px;
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
