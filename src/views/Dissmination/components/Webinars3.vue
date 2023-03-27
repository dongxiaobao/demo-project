<!--
 * @Author: yanbao dong
 * @Date: 2023-03-27 17:03:29
 * @LastEditors: yanbao dong
 * @LastEditTime: 2023-03-27 18:05:14
 * @Description: file content
-->
<template>
  <div class="Webinars-3-wrap">
    <header class="header-title">
      <p class="tex-title">
        (3) Prof Huang Delivered Opening Remarks in the Workshop on Social
        Determinant of Health
      </p>
    </header>
    <main class="main-pic">
      <div class="img-box">
        <img
          src="@/assets/Webinars/Webinars-3.jpeg"
          alt=""
          class="img-user"
          @click="toDetailPage"
        />
      </div>
    </main>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const toDetailPage = () => {
  router.push({
    path: "/webinarsDetails",
    query: {
      id: 3,
    },
  });
};
</script>

<style lang="scss">
.Webinars-3-wrap {

  text-align: left;
  margin-top: 60px;
  .tex-title {
    font-size: 22px;
    line-height: 1.5;
    font-weight: 600;
    color: #222;
    margin-bottom: 20px;
  }
  .main-pic {
   
    .img-box {
      .img-user {
        margin-bottom: 20px;
        cursor: pointer;
        width: 900px;
      }
    }
    .text-box {
      .top-1 {
        font-size: 22px;
        font-weight: 600;
        color: #222;
        line-height: 1.5;
        //  margin-bottom: 20px;
      }
      .top-2 {
        margin-bottom: 20px;
      }
    }
  }
}
</style>
