<!--
 * @Author: yanbao dong
 * @Date: 2023-03-27 17:03:29
 * @LastEditors: yanbao dong
 * @LastEditTime: 2023-03-27 18:05:06
 * @Description: file content
-->
<template>
  <div class="Webinars-2-wrap">
    <header class="header-title">
      <p class="tex-title">(2) Workshop on Social Determinant of Health</p>
    </header>
    <main class="main-pic">
      <div class="img-box">
        <img
          src="@/assets/Webinars/Webinars-2.png"
          alt=""
          class="img-user"
          @click="toDetailPage"
        />
      </div>
      <div class="text-box">
        <p class="top-1">Title</p>
        <p class="top-2">
          Workshop on Social Determinants of Health (SDH) coordinated by Prof.
          Alfred T. Ho Head, Department of Public & International Affairs, City
          University of Hong Kong on 9 March 2023.
        </p>
        <!-- <p class="top-1">Speaker</p>
        <p class="top-2">Yi-Hui Christine Huang</p> -->
        <p class="top-1">Abstract</p>
        <p class="top-2">
          As defined by World Health Organization, social determinants of health
          (SDH) are the non-medical factors that influence health outcomes. They
          are the conditions in which people are born, grow, work, live, and
          age, and the wider set of forces and systems shaping the conditions of
          daily life. These forces and systems include economic policies and
          systems, development agendas, social norms, social policies and
          political systems. On that basis, the workshop discussed various
          initiatives related to SDH at the international level, and various
          initiatives at the national and subnational levels. It also discussed
          the implications for Hong Kong.
        </p>
      </div>
    </main>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const toDetailPage = () => {
  router.push({
    path: "/webinarsDetails",
    query: {
      id: 2,
    },
  });
};
</script>

<style lang="scss">
.Webinars-2-wrap {
 
  text-align: left;
  margin-top: 60px;
  .tex-title {
    font-size: 22px;
    line-height: 1.5;
    font-weight: 600;
    color: #222;
    margin-bottom: 20px;
  }
  .main-pic {

    .img-box {
      .img-user {
        margin-bottom: 20px;
        cursor: pointer;
        width: 589px;
      }
    }
    .text-box {
      .top-1 {
        font-size: 22px;
        font-weight: 600;
        color: #222;
        line-height: 1.5;
        //  margin-bottom: 20px;
      }
      .top-2 {
        margin-bottom: 20px;
      }
    }
  }
}
</style>
