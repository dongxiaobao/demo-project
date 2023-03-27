<template>
  <div class="partners">
    <header class="header-box">
      <p class="title-page">{{ topic }}</p>
    </header>
    <main class="main-box">

      <header class="title">
        In our mission to connect our beneficiaries and stakeholders with timely support for resilience, growth and equality, the BRIDGE team has established partnerships with the following organizations.
      </header>
      <p class="img-box">
        <img class="img-bgd" src="@/assets/Partner/partner-01.png" alt="">
      </p>
    </main>
  </div>
</template>

<script setup>
import { ref } from "vue";
let topic = ref("PARTNERS");
</script>

<style lang="scss">
.partners {
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
    .title{
       font-size: 22px;
        font-weight: 600;
        color: #222;
        line-height: 1.5;
    }
    .img-box{
      width: 100%;
      margin-top: 30px;
      .img-bgd{
        width: 100%;
      }
    }
  }
}
</style>
