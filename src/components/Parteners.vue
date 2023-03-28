<!--
 * @Author: yanbao dong
 * @Date: 2023-01-04 21:30:47
 * @LastEditors: yanbao dong
 * @LastEditTime: 2023-03-28 17:57:48
 * @Description: file content
-->
<template>
  <div class="carousel-box">
    <p class="title-par">Our Partners</p>
    <div class="box-list">
      <div class="box-item" v-for="(item, index) in list" :key="index">
        <img
          @click="toPage(item.name)"
          :src="item.imgSrc"
          alt=""
          class="img-partner"
          :class="item.className"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import partner1 from "@/assets/partner-4.png";
import partner2 from "@/assets/partner-5.png";
import partner3 from "@/assets/partner-6.png";
import partner4 from "@/assets/partner-1.png";
import partner5 from "@/assets/partner-2.png";
import partner6 from "@/assets/partner-3.png";
import partner7 from "@/assets/partner-7.jpg";
import partner8 from "@/assets/partner-8.png";
import partner9 from "@/assets/partner-9.png";
import partner10 from "@/assets/partner-10.png";
import partner11 from "@/assets/partner-11.png";
import partner12 from "@/assets/partner-12.jpg";
import partner13 from "@/assets/partner-13.png";
// import partner14 from "@/assets/partner-14.jpg";
// import partner15 from "@/assets/partner-15.png";
// import partner16 from "@/assets/partner-18.jpg";
import partner17 from "@/assets/partner-16.png";
// import partner18 from "@/assets/partner-17.png";
const list = ref([
  {
    name: "https://www.cityu.edu.hk/",
    imgSrc: partner1,
    className: "img-1",
  },
  {
    name: "https://www.cityu.edu.hk/class/",
    imgSrc: partner2,
    className: "img-2",
  },
  {
    name: "https://www.cityu.edu.hk/com/",
    imgSrc: partner3,
    className: "img-3",
  },
  {
    name: "https://www.cityu.edu.hk/lamp/",
    imgSrc: partner4,
    className: "img-4",
  },
  {
    name: "http://www.cityu.edu.hk/cpal/",
    imgSrc: partner5,
    className: "img-5",
  },
  {
    name: "https://www.aecair.org/",
    imgSrc: partner6,
    className: "img-6",
  },
  {
    name: "http://www.hkyps.com/",
    imgSrc: partner7,
    className: "img-7",
  },
  {
    name: "http://www.hkauw.org/",
    imgSrc: partner8,
    className: "img-8",
  },
  {
    name: "https://www.scmp.com/",
    imgSrc: partner9,
    className: "img-9",
  },
  {
    name: "https://www.yzzk.com/",
    imgSrc: partner10,
    className: "img-10",
  },
  {
    name: "https://www.intellisia.org/",
    imgSrc: partner11,
    className: "img-11",
  },
  {
    name: "https://prpa.com.hk/",
    imgSrc: partner12,
    className: "img-12",
  },
  {
    name: "https://www.plan.org.hk/en/home/",
    imgSrc: partner13,
    className: "img-13",
  },
  // {
  //   name: "https://www.nphk.hk/",
  //   imgSrc: partner14,
  //   className: "img-14",
  // },
  // {
  //   name: "http://www.hkcivicassn.org/",
  //   imgSrc: partner15,
  //   className: "img-15",
  // },
  // {
  //   name: "https://soco.org.hk/",
  //   imgSrc: partner16,
  //   className: "img-16",
  // },
  {
    name: "https://www.aka.org.hk/",
    imgSrc: partner17,
    className: "img-17",
  },
  // {
  //   name: "https://hknasfwork.wixsite.com/website",
  //   imgSrc: partner18,
  //   className: "img-18",
  // },
]);
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
    flex-wrap: wrap;
    .box-item {
      text-align: center;
      img {
        width: 150px;
        cursor: pointer;
      }
      .img-1 {
        width: 200px;
        margin-bottom: 30px;
      }
      .img-2 {
        width: 400px;
        margin-bottom: 30px;
      }
      .img-3 {
        width: 400px;
        margin-bottom: 30px;
      }
      .img-4 {
        width: 460px;
      }
      .img-5 {
        width: 400px;
      }
      .img-6 {
        width: 200px;
      }
      .img-7 {
        width: 250px;
      }
      .img-8 {
        width: 250px;
      }
      .img-9 {
        width: 250px;
      }
      .img-10 {
        width: 250px;
      }
      .img-11 {
        width: 250px;
      }
      .img-12 {
        width: 250px;
      }
      .img-13 {
        width: 250px;
      }
      .img-14 {
        width: 220px;
      }
      .img-15 {
        width: 250px;
      }
      .img-16 {
        width: 250px;
      }
      .img-17 {
        width: 250px;
      }
      .img-18 {
        width: 250px;
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
