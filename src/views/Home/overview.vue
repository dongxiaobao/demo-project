<template>
  <div class="over-view">
    <header class="header">
      <img src="@/assets/banner1.png" alt="" class="banner" />
    </header>
    <!-- 文字内容区域 -->
    <main class="mian">
      <section class="section-left">
        <p class="title">Latest from Bridge</p>
       <Article></Article>
      </section>
      <section class="section-right">
        <p class="title">Upcoming Events</p>
        <div class="work-shop">
          <div class="left">
            <img
              src="@/assets/federated_analysis.jpg"
              alt=""
              class="left-img"
            />
          </div>
          <div class="right">
            <p class="title-top">Federated data analysis workshop</p>
            <p class="desc-1">Feb 26, 2023</p>
            <p class="desc-1">CTICC, Cape Town, South Africa</p>
          </div>
          
        </div>
        <p class="title-2"> Past Webinars</p>
            <Webinars></Webinars>
      </section>
    </main>
    <div class="line-wrap"></div>
    <!-- partners -->
    <Parteners></Parteners>
  </div>
</template>

<script setup>
import Article from '@/components/Article.vue'
import Webinars from '@/components/Webinars.vue'
import Parteners from '@/components/Parteners.vue'

</script>

<style lang="scss">
.over-view {
  min-width: 1200px;
  text-align: left;
  .header {
    width: 100%;
    height: 695px;
    background-color: #f5f5f5;
    text-align: center;
    .banner {
      width: 1200px;
      height: 695px;
    }
  }
  .mian {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    padding: 35px 0px;
    .section-left {
      flex: 1.5;
      border-right: 1px solid #ddd;
      .title {
        font-size: 30px;
        line-height: 1.5;
        color: #4a4a4a;
      }
    }
    .section-right {
      flex: 1;
      padding-left: 20px;
      .title {
        font-size: 30px;
        line-height: 1.5;
        color: #4a4a4a;
        padding: 17px;
      }
      .work-shop {
        padding: 17px;
        display: flex;
        .left {
          margin-right: 20px;
          .left-img {
            height: 77px;
          }
        }
        .right {
          flex: 1;
          .title-top {
            font-size: 30px;
            line-height: 1.5;
            color: #222;
          }
          .desc-1 {
            font-size: 13px;
            line-height: 1.5;
            color: #222;
          }
        }
      }
      .title-2{
        padding: 17px;
        font-size: 15px;
        font-weight: 600;
        color: #c72b39;
      }
    }
  }
  .line-wrap{
    width: 950px;
    height: 1px;
    color: rgba(176,176,176,.5);
    background-color: rgba(176,176,176,.5);
    margin: 20px auto;
  }
}
</style>
