<template>
  <div class="page-box">
    <header class="header-box">
      <p class="title-page">{{ topic }}</p>
    </header>
    <main class="main">
      <p class="top-content-box">
        {{ pageTitle }}
      </p>
      <div class="img-box">
        <img :src="imgSrc" alt="" class="page-img" />
      </div>
      <div class="details-box">
        <p class="content-first">{{ contentFirst }}</p>
        <p class="goals">{{ contentFirstDesc }}</p>
        <ul class="details">
          <li class="li-list" v-for="(item, index) in contentList" key="index">
            <div class="left"></div>
            <div class="right" v-html="item.contentItem"></div>
          </li>
        </ul>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps({
  contentList: {
    type: Array,
    default() {
      return [];
    },
  },
  topic: {
    type: String,
    default: "",
  },
  pageTitle: {
    type: String,
    default: "",
  },
  imgSrc: {
    type: String,
    default: "",
  },
  contentFirst: {
    type: String,
    default: "",
  },
  contentFirstDesc: {
    type: String,
    default: "",
  },
});
</script>
<style lang="scss">
.page-box {
  min-width: 1200px;
  margin: 0 auto;
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
  .main {
    width: 1200px;
    margin: 0 auto;
    padding: 90px 30px;
    .top-content-box {
      font-size: 16px;
      line-height: 1.5;
      margin-bottom: 16px;
      color: #222;
      font-weight: 600;
    }
    .img-box {
      margin-top: 40px;
      text-align: center;
      .page-img {
        width: 100%;
      }
    }
    .details-box {
      margin-top: 40px;
      .content-first {
        font-size: 16px;
        line-height: 1.5;
        margin-bottom: 16px;
        color: #222;
      }
      
      .goals{
        font-size: 16px;
      line-height: 1.5;
      margin-bottom: 16px;
      color: #222;
      font-weight: 600; 
      }
      .details {
        font-size: 16px;
        line-height: 1.5;
        margin-bottom: 16px;
        color: #222;
        .li-list{
            display: flex;
            .left{
                width: 10px;
                height: 10px;
                border-radius: 5px;
                background-color: #222;
                margin-right: 10px;
                margin-top: 7px;
            }
            .right{
                flex: 1;
            }
        }
      }
    }
  }
}
</style>
