<!--
 * @Author: yanbao dong
 * @Date: 2023-01-04 21:30:47
 * @LastEditors: yanbao dong
 * @LastEditTime: 2023-01-06 11:05:21
 * @Description: file content
-->
<template>
  <div class="carousel-box">
    <p class="title-par">Our Partners</p>
    <div class="box-list">
      <div class="box-item">
        <img
          @click="toPage('https://www.cityu.edu.hk/')"
          src="@/assets/partner-4.png"
          alt=""
          class="img-1 img-partner"
        />
      </div>

      <div class="box-item">
        <img
          @click="toPage('https://www.cityu.edu.hk/class/')"
          src="@/assets/partner-5.png"
          alt=""
          class="img-2 img-partner"
        />
      </div>
      <div class="box-item">
        <img
          @click="toPage('https://www.aecair.org/')"
          src="@/assets/partner-3.png"
          alt=""
          class="img-6 img-partner"
        />
      </div>
      <div class="box-item">
        <img
          @click="toPage('https://www.cityu.edu.hk/com/')"
          src="@/assets/partner-6.png"
          alt=""
          class="img-3 img-partner"
        />
      </div>
      <div class="box-item">
        <img
          @click="toPage('https://www.cityu.edu.hk/lamp/')"
          src="@/assets/partner-1.png"
          alt=""
          class="img-4 img-partner"
        />
      </div>
      <div class="box-item">
        <img
          @click="toPage('http://www.cityu.edu.hk/cpal/')"
          src="@/assets/partner-2.png"
          alt=""
          class="img-5 img-partner"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
const toPage = (url) => {
  window.open(url);
};
</script>
<style lang="scss">
.carousel-box {
  width: 1200px;
  margin: 40px auto;
  .title-par {
    font-size: 30px;
    line-height: 1.5;
    color: #4a4a4a;
    font-weight: 600;
    margin-bottom: 25px;
  }
  .box-list {
    margin-top: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .box-item {
      margin-bottom: 40px;
      text-align: center;
      img {
        width: 150px;
        cursor: pointer;
        margin-bottom: 20px;
      }
      .img-1 {
        // width: 400px;
      }
      .img-2 {
        // width: 600px;
      }
      .img-3 {
        // width: 600px;
      }
      .img-4 {
        // width: 600px;
      }
      .img-5 {
        // width: 600px;
      }
      .img-6 {
        // width: 500px;
      }
      p {
        cursor: pointer;
        color: #222;
        font-size: 14px;
        line-height: 1.5;
      }
    }
  }
}
</style>
