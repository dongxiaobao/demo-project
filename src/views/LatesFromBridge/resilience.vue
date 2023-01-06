<!--
 * @Author: yanbao dong
 * @Date: 2023-01-06 09:47:35
 * @LastEditors: yanbao dong
 * @LastEditTime: 2023-01-06 10:26:10
 * @Description: file content
-->
<template>
  <div class="resilience">
    <header class="header-box">
      <p class="title-page">{{ topic }}</p>
    </header>
    <main class="main-box">
      <p class="text-1">
        Recovering from the COVID-19 pandemic and building resilience for future
        health crises has become the new mission for Hong Kong Society.
        Resilience is an individual’s, a community’s, and a society’s ability to
        endure the impacts of external shocks. It is normal for people to
        experience downturns, but what matters the most is that they can
        withstand adversity and bounce back quickly.
      </p>
      <p class="img-1">[插图]</p>
      <p class="text-1">
        Resilience is not some capacity you naturally have. People need help
        learning to develop resilience when facing stressful events. Family,
        social groups, organizations, communities, and other stakeholders must
        provide timely and effective support. Governments and regulators should
        develop and maintain supportive social systems to facilitate efficient
        problem-solving, coordinated acts, and resource allocations
      </p>
      <p class="title-1">Resilience vs. Robustness</p>
      <p class="text-1">
        In contrast to robustness, which refers to “the ability to resist shocks
        without adapting,” resilience denotes “the capacity to withstand shocks
        dynamically”. While a robust society can withstand most shocks and
        maintain normal operations, it becomes brittle when facing extreme
        shocks like a pandemic. In addition, a resilient society is more likely
        to adapt flexibly through adaptation and transformation.
      </p>
      <p class="title-1">Resilience Building</p>
      <p class="text-1">
        Resilience is frequently viewed as an interactive process that involves
        <span class="weight"> adaptation </span> to or
        <span class="weight">transformation </span> in response to crises and
        disruptive events. Adaptation and transformation are two crucial aspects
        of resilience. More specifically, adaptation means people maintain
        important elements of their life as a means of coping with disruptive
        events, while transformation emphasizes the modification of one’s daily
        life to fit a new circumstance. Existing literature portrays both terms
        in a positive light and frequently as aspirational objectives.
        Adaptation is typically perceived as intentional, driven by deliberate
        behavior. Transformation may be forced, autonomous, or intentional. 
      </p>
    </main>
  </div>
</template>

<script setup>
import { ref } from "vue";
let topic = ref("Resilience");
</script>

<style lang="scss">
.resilience {
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
    .img-1 {
      margin-bottom: 30px;
    }
    .weight {
      font-weight: 600;
    }
    .text-1 {
      margin-bottom: 30px;
      .weight {
        font-weight: 600;
      }
    }
    .title-1 {
      font-weight: 600;
      color: #222;
      margin-bottom: 30px;
    }
  }
}
</style>
