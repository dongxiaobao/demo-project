<template>
  <div class="team">
    <header class="header-box">
      <p class="title-page">{{ topic }}</p>
    </header>
    <main class="main-box">
      <p class="box-1">Project Coordinator</p>
      <section class="hoster">
        <img
          src="@/assets/team/Yi-Hui_Christine_Huang.jpeg"
          alt=""
          class="hoster-img"
        />
        <p class="text-user-info">Yi-Hui Christine HUANG (CityU)</p>
        <p class="description">Chair Professor of Communication and Media</p>
      </section>
      <p class="box-1">Co-Principal Investigator</p>
      <section class="section">
        <div class="user-list" v-for="(item, index) in userList1" :key="index">
          <img
            :src="item.img"
            alt=""
            class="user-img"
            :class="'img-user-' + index"
          />
          <p class="text-user-info">
            {{ item.userInfo }}
          </p>
          <p class="description">
            {{ item.description }}
          </p>
        </div>
      </section>
      <p class="box-1">Advisory Committee Members</p>
      <section class="section section-3">
        <div class="user-list" v-for="(item, index) in userList2" :key="index">
          <img
            :src="item.img"
            alt=""
            class="user-img"
            :class="'img-user-' + index"
          />
          <p class="text-user-info">
            {{ item.userInfo }}
          </p>
          <p class="description">
            {{ item.description }}
          </p>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { teamList1, teamList2 } from "@/config/team";
import { ref } from "vue";

let topic = ref("TEAM");
let userList1 = ref([]);
userList1.value = teamList1;
let userList2 = ref([]);
userList2.value = teamList2;
</script>

<style lang="scss">
.team {
  min-width: 1200px;
  .header-box {
    height: 144px;
    width: 100%;
    background: url(@/assets/page-bc.jpg) no-repeat top center;
    background-size: cover;
    text-align: left;
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
    .box-1 {
      font-size: 30px;
      line-height: 1.5;
      color: #4a4a4a;
      font-weight: 600;
      margin-bottom: 40px;
      text-align: left;
    }
  }
  .hoster {
    width: 1200px;
    margin: 0 auto 40px;
    text-align: center;
    .hoster-img {
      width: 200px;
      margin-bottom: 20px;
    }
    .text-user-info {
      font-size: 18px;
      line-height: 1.5;
      font-weight: 700;
      color: #222;
    }
  }
  .section {
    width: 1200px;
    display: flex;
    margin: 40px auto;
    text-align: left;
    flex-wrap: wrap;
    .user-list {
      width: 33.33%;
      margin-bottom: 70px;
      .user-img {
        width: 150px;
        margin-bottom: 20px;
        &.img-user-0 {
          margin-bottom: 44px;
        }
        &.img-user-1 {
          margin-bottom: 20px;
        }
        &.img-user-2 {
          width: 180px;
          margin-bottom: 53px;
          margin-right: 20px;
        }
        &.img-user-3 {
        }
        &.img-user-4 {
        }
        &.img-user-5 {
          margin-bottom: 30px;
          margin-right: 20px;
        }
        &.img-user-6 {
          width: 180px;
          margin-top: 10px;
          margin-bottom: 40px;
        }
        &.img-user-7 {
          width: 180px;
          margin-top: 10px;
          margin-bottom: 31px;
        }
        &.img-user-8 {
          width: 160px;
          margin-right: 20px;
        }
      }
      .text-user-info {
        font-size: 18px;
        line-height: 1.5;
        font-weight: 700;
        color: #222;
        padding-right: 20px;
      }

      &:nth-child(1) {
        padding-right: 100px;
      }
      &:nth-child(4) {
        padding-right: 100px;
      }
      &:nth-child(7) {
        padding-right: 100px;
      }
      &:nth-child(2) {
        text-align: center;
        .text-user-info {
          padding-right: 20px;
        }
        .description {
          text-align: left;
          padding: 0 50px 0 82px;
        }
      }
      &:nth-child(3) {
        text-align: right;
        .text-user-info {
          padding-right: 20px;
        }
        .description {
          text-align: left;
          padding-left: 190px;
        }
      }
      &:nth-child(6) {
        text-align: right;
        .text-user-info {
          padding-right: 20px;
        }
        .description {
          text-align: left;
          padding-left: 190px;
        }
      }
      &:nth-child(9) {
        text-align: right;
        .text-user-info {
          padding: 0;
        }
        .description {
          text-align: left;
          padding-left: 190px;
        }
      }
      &:nth-child(5) {
        text-align: center;
        .text-user-info {
          padding: 0;
        }
        .description {
          text-align: left;
          padding: 0 50px 0 82px;
        }
      }
      &:nth-child(8) {
        text-align: center;
        .text-user-info {
          padding: 0;
        }
        .description {
          text-align: left;
          padding: 0 50px 0 82px;
        }
      }
    }
    &.section-3 {
      .user-list {
        width: 33.33%;
        margin-bottom: 70px;
        .user-img {
          &.img-user-0 {
            width: 180px;
            // margin-top: 10px;
            margin-bottom: 31px;
          }
          &.img-user-1 {
            width: 163px;
            // margin-top: 10px;
            margin-bottom: 22px;
          }
        }
      }
    }
  }
}
</style>
