<!--
 * @Author: yanbao dong
 * @Date: 2023-01-04 21:30:47
 * @LastEditors: yanbao dong
 * @LastEditTime: 2023-01-10 18:50:13
 * @Description: file content
-->
<template>
  <div class="roadmap">
    <header class="header-box">
      <p class="title-page">{{ topic }}</p>
    </header>
    <main class="main-box">
      <p class="title">
        Hong Kong’s road to pandemic recovery needs to be envisioned with a
        long-term goal of building a
        <span class="to-resilient" @click="toResilient('resilience')"
          >resilient</span
        >
        society with the capacity to bridge existing and emerging gaps so as to
        absorb future shocks.
      </p>
      <p class="peitu">
        <img src="@/assets/pageImg/page-img-01.png" alt="" class="img-page" />
      </p>
      <p class="text-1 margin0">
        Our ultimate goal is to facilitate Hong Kong’s recovery from the
        COVID-19 pandemic, help it withstand future adverse shocks, and sustain
        economic growth and social equality.
      </p>
      <p class="title-weight">Goals:</p>
      <ul class="content-list">
        <li class="list-1">
          <p class="list-text-1">
            Develop and theorize a
            <span class="weight"> BRIDGE framework</span>, which includes
          </p>
          <p class="list-text-1">
            1)an typology of Dilemma-Preference Gaps; <br />
            2)a Three-Route Resilience Building Model:
            <span class="to-resilient" @click="toResilient('trust')">Trust</span
            >,
            <span class="to-resilient" @click="toResilient('communication')"
              >Communication</span
            >,
            <span
              class="to-resilient"
              @click="toResilient('informationAndTechnology')"
              >Information & Technology
            </span>
            <br />
            3)a Gap Management Model: Identification, Mechanism Analysis, and
            Solution.<br />
          </p>
        </li>
        <li class="list-1">
          <p class="list-text-1">
            Identify and monitor dilemma-preference gaps between the public and
            policymakers to aid policymaking and compliance. Some primary
            trade-offs observed in different Hong Kong populations include:
          </p>
          <div class="list-text-1 list-text-2">
            <div class="left">
              <p class="text-box">
                <span class="blank"></span>Risk avoidance vs. Tolerance <br />
                <span class="blank"></span>Collective good vs. Individual
                Rights<br />
                <span class="blank"></span>Public health vs. Economy
                Stability)<br />
              </p>
            </div>

            <div class="right">
              <img
                class="right-img"
                src="@/assets/pageImg/page-img-01-1.png"
                alt=""
              />
            </div>
          </div>
        </li>
        <li class="list-1">
          <p class="list-text-1">
            Formulate three resilience-building pathways by evaluating how
            information technology empowerment, institutional trust, and
            communication strategies work interdependently and in combination to
            build Hong Kong’s resilience.
          </p>
        </li>
        <li class="list-1">
          <p class="list-text-1">
            Construct an Individual Resilience Index to observe the change in
            Hong Kong’s resilience capacity. We define resilience capacity as an
            individual’s ability to endure the impacts of external shocks.
          </p>
        </li>
        <li class="list-1">
          <p class="list-text-1">
            Build practical guidelines, policy recommendations, and reference
            tools to aid efficient and effective policymaking processes in risk
            and crisis
          </p>
        </li>

        <li class="list-1">
          <p class="list-text-1">
            Create a free and open platform to synergize all efforts and
            synthesize the theoretical reflections, empirical findings,
            practical guidelines, and media coverage so various stakeholders can
            access the information they need.
          </p>
        </li>
      </ul>
    </main>
  </div>
</template>

<script setup>
import { ref } from "vue";
let topic = ref("Roadmap");

import { useRoute, useRouter } from "vue-router";
const router = useRouter();
const route = useRoute();
const toResilient = (params) => {
  const pathMap = {
    resilience: "/resilience",
    trust: "/trust",
    communication: "/communication",
    informationAndTechnology: "/informationAndTechnology",
  };
  router.push({
    path: pathMap[params],
  });
};
</script>

<style lang="scss">
.roadmap {
  min-width: 1200px;
  text-align: left;
  line-height: 1.5;
  font-size: 20px;
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
    .to-resilient {
      text-decoration: underline;
      cursor: pointer;
    }
    .title {
      font-size: 20px;
      font-weight: 600;
    }
    .peitu {
      text-align: center;
      .img-page {
        width: 100%;
      }
    }
    .text-1 {
      margin-top: 30px;
      &.margin0 {
        margin-top: 0;
      }
    }
    .title-weight {
      margin-top: 30px;
      font-weight: 600;
    }
    .blank {
      display: inline-block;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #222;
      margin-right: 10px;
      // margin-left: 40px;
    }
    .content-list {
      margin-top: 10px;
      list-style: disc;
      padding-left: 20px;
      .weight {
        font-weight: 600;
      }
      .list-1 {
        .list-text-1 {
          margin-bottom: 20px;
        }
        .list-text-2 {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 40px;
          .left {
            flex: 1;
          }
          .right {
            .right-img {
              width: 300px;
            }
          }
        }
      }
    }
  }
}
</style>
