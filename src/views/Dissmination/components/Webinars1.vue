<!--
 * @Author: yanbao dong
 * @Date: 2023-03-27 17:03:29
 * @LastEditors: yanbao dong
 * @LastEditTime: 2023-03-27 18:31:51
 * @Description: file content
-->
<template>
  <div class="Webinars-1-wrap">
    <header class="header-title">
      <p class="tex-title">
        (1) The President’s Lecture Series: Excellence in Academia No.53
      </p>
    </header>
    <main class="main-pic">
      <div class="img-box">
        <img
          src="@/assets/Webinars/Webinars-1.png"
          alt=""
          class="img-user"
          @click="toDetailPage"
        />
      </div>
      <div class="text-box">
        <p class="top-1">Title</p>
        <p class="top-2">
          Strategic communication, trust and culture from a
          paradigmatic-shifting perspective
        </p>
        <p class="top-1">Speaker</p>
        <p class="top-2">Yi-Hui Christine Huang</p>
        <p class="top-1">Abstract</p>
        <p class="top-2">
          This lecture adopted a paradigmatic-shift perspective to unfold the
          role of trust and culture in strategic communication. Multiple
          disciplines have emphasized trust but puzzles remain about how trust
          works and how to build it. Professor Huang recounted her research
          journey, including recent findings in the context of the COVID-19
          pandemic. Moreover, considering culture as a contextual factor,
          Professor Huang explored how trust is represented in risk/crisis
          communication, particularly in Chinese societies. Adopting a logic of
          meta-analysis, Professor Huang’s recent studies demonstrated that
          trust stood out as one of the most critical determinants of health
          behavior and outcomes in the context of COVID-19. Finally, Professor
          Huang described current opportunities and challenges for trust
          research.
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
  path:'/webinarsDetails',
  query:{
    id:1
  }
})
};
</script>

<style lang="scss">
.Webinars-1-wrap {
  text-align: left;
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
          line-height: 1.5;
      }
    }
  }
}
</style>
