<!--
 * @Author: yanbao dong
 * @Date: 2023-01-06 09:48:42
 * @LastEditors: yanbao dong
 * @LastEditTime: 2023-01-10 19:09:03
 * @Description: file content
-->
<template>
  <div class="informationAndTechnology">
    <header class="header-box">
      <p class="title-page">{{ topic }}</p>
    </header>
    <main class="main-box">
      <p class="text-1 title">
        The pandemic's unprecedented scale paralyzed Hong Kong’s existing
        healthcare systems. At the height of the pandemic, Hong Kong has
        suffered from a salient medical resource shortage and unequal
        distribution across social strata.  Even though the smartphone
        penetration rate reached 92.1% in 2020 in Hong Kong, the elderly, the
        poor, and women fell significantly behind in accessing digital health
        services. Such inequality can be conceptualized as a four-level digital
        divide, including digital access, literacy, impact, and representation.
      </p>
      <section class="content-box">
        <div class="left-box">
          <p class="text-1">
        Digital inequality has posed a significant barrier to resilience
        building. There is a strong need to uncover the digital health
        disparities in relation to social disparities and to support
        policymaking for vulnerable targets. On the macro level, a strong
        Information & Technology infrastructure will build a resilient system to
        help individuals, communities, regulators, and stakeholders efficiently
        respond to future crises.
      </p>
        </div>
        <div class="right-box">
         
         <p class="img-1">
        <img class="peitu" src="@/assets/pageImg/information.jpeg" alt="" />
     
      </p>
        </div>
      </section>
     
   
    </main>
  </div>
</template>

<script setup>
import { ref } from "vue";
let topic = ref("Information & Technology ");
</script>

<style lang="scss">
.informationAndTechnology {
  min-width: 1200px;
  text-align: left;
  font-size: 20px;
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
    padding: 90px 30px;
      .title {
     
    }
    .img-1 {
      margin-bottom: 30px;
      text-align: center;
      .peitu {
        height: 300px;
      }
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
    .content-box {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-right: 10px;
      .left-box {
        margin-right: 30px;
        flex: 1;
      }
      .right-box {
        // width: 300px;
        .img-1 {
          .peitu {
            height: 250px;
          }
        }
      }
    }
  }
}
</style>
