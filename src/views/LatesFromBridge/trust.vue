<!--
 * @Author: yanbao dong
 * @Date: 2023-01-06 09:47:51
 * @LastEditors: yanbao dong
 * @LastEditTime: 2023-01-06 10:29:20
 * @Description: file content
-->
<template>
  <div class="trust">
    <header class="header-box">
      <p class="title-page">{{ topic }}</p>
    </header>
    <main class="main-box">
      <p class="text-1">
        Trust is a common concept we all hold. Trust is often defined as a
        relational concept, as “the willingness of a party to be vulnerable to
        the actions of another party”. Institutional trust is defined as trust
        people have in political, social, and economic institutions, which
        specifically includes trust between different parties (e.g., the
        government, medical agencies, experts, and the media)
      </p>
      <p class="img-1">[插图]</p>

      <p class="text-1">
        Trust plays a pivotal role in policy compliance and resilience building,
        especially during crises. Similarly, distrust was often at the root of
        failed policy. Trust shapes behavioral compliance through the legitimacy
        of institutions to implement certain policies and comply with the
        policies because the public has the belief that the institutions possess
        more resources than individuals to deal with the risks. Thus, people
        with more institutional trust will show less hesitancy and reactance to
        the policies designed to combat the pandemic During the COVID-19
        pandemic, institutional trust was considered essential at almost every
        stage, from vaccination intention to public compliance, adoption, and
        support for social-distancing measures. Similarly, distrust was often at
        the root of failed policy.
      </p>
    </main>
  </div>
</template>

<script setup>
import { ref } from "vue";
let topic = ref("Trust");
</script>

<style lang="scss">
.trust {
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
