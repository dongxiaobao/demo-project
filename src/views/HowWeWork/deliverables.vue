<template>
  <div class="deliverables">
    <header class="header-box">
      <p class="title-page">{{ topic }}</p>
    </header>
    <main class="main-box">
      <section class="list-box" v-for="(item, index) in list" :key="index">
        <p class="title">{{ item.title }}</p>
        <div class="left-box" v-if="index==0">
            <div
              class="child-box"
              v-for="(child, childIndex) in item.contentList"
              :key="childIndex"
            >
              <p class="option-item">{{ child.item }}</p>
            </div>
          </div>
        <div class="content-box" v-if="index == 1">
          <div class="left-box">
            <div
              class="child-box"
              v-for="(child, childIndex) in item.contentList"
              :key="childIndex"
            >
              <p class="option-item">{{ child.item }}</p>
            </div>
          </div>
          <div class="right-box">
            <img class="right-img" src="@/assets/deliverable.jpeg" alt="" />
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref } from "vue";
let topic = ref("Deliverables");
const list = ref([
  {
    title: "D1. BRIDGE Databases",
    contentList: [
      {
        item: "a. Hong Kong Social Pulse Database ",
      },
      {
        item: "b. Trust and Resilience Survey Database ",
      },
      {
        item: "c. Digital Health Trend Survey Database ",
      },
    ],
  },
  {
    title: "D2. Annual BRIDGE Reports",
    contentList: [
      {
        item: "a. Hong Kong Social Pulse Report & Social Signal Model of Pandemic Resilience",
      },
      {
        item: "b. Trust and Resilience Index Report",
      },
      {
        item: "c. Technical Report on Hong Kong Expatriate Emigration & Global Talent Search Program",
      },
      {
        item: "d. Hong Kong Digital Health Trend Survey Report",
      },
      {
        item: "e. Interview Report on Opinion and Dilemma Preference Gaps among the public, government, and other stakeholders ",
      },
    ],
  },
  {
    title: "D3. Hong Kong e-Health Blueprint",
    contentList: [],
  },
  {
    title: "D4. Risk Policy Inventory and Customized Policy Guidelines",
    contentList: [],
  },
  {
    title:
      "D5. Risk Communication Strategy Guidelines and Communication Intervention Protocols",
    contentList: [],
  },
  {
    title:
      "D6. Series of Public Workshops, Seminars, News Releases, and Media Coverages and PhD graduations",
    contentList: [],
  },
  {
    title: "D7. Series of Academic Papers in Journals and Conference",
    contentList: [],
  },
]);
</script>

<style lang="scss">
.deliverables {
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
    .list-box {
      margin-bottom: 30px;
      .title {
        line-height: 1.5;
        margin-bottom: 10px;
        color: #222;
        font-weight: 600;
      }
      .child-box {
        .option-item {
          line-height: 1.5;
          color: #222;
        }
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
          width: 350px;
          .right-img {
            width: 350px;
          }
        }
      }
    }
  }
}
</style>
