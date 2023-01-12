<!--
 * @Author: yanbao dong
 * @Date: 2023-01-06 09:48:04
 * @LastEditors: yanbao dong
 * @LastEditTime: 2023-01-10 19:08:38
 * @Description: file content
-->
<template>
  <div class="datasets">
    <header class="header-box">
      <p class="title-page">{{ topic }}</p>
    </header>
    <main class="main-box">
      <div class="left-box">
        <p class="text-1">
          People need help learning to develop resilience in the stressful
          world. At the same time, how people talk about crises provides
          informative insights of how people make sense of crises and regulate
          their behaviors.
        </p>
      </div>
      <div class="right-box">
        <section class="content-box">
          <div class="left-box">
            <p class="text-1">
              Systemic communication efforts (e.g., campaigns, health
              promotions, electronic word-of-mouth, etc.) can educate people
              about ways to improve skills and competencies for coping with
              stressors and foster mental preparedness for future shocks.
              Resilience orientation in public communication planning. For
              example, governments and regulators can prepare Policy guidelines
              and communication protocols for stakeholders, including how to
              embed persuasive messages in narrative storylines, choose the most
              effective message delivery source, mobilize electronic
              word-of-mouth to maximize positive outcomes, and tailor
              communication strategies to target different demographics.
            </p>
          </div>
          <div class="right-box">
            <p class="img-1">
              <img
                class="peitu"
                src="@/assets/pageImg/communication.jpeg"
                alt=""
              />
            </p>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from "vue";
let topic = ref("Communication");
</script>

<style lang="scss">
.datasets {
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
      margin-bottom: 30px;
      .left-box {
        margin-right: 30px;
        flex: 1;
      }
      .right-box {
        width: 350px;
        .img-1 {
          .peitu {
            width: 350px;
          }
        }
      }
    }
  }
}
</style>
