<template>
  <div class="team">
    <!-- <p>
      1)PC: Prof. Yi-Hui Christine HUANG (CityU) 
      2)Co-PIs: Prof. David
      Shu-Cheong HUI (CUHK), Prof. Richard WALKER (CityU), Prof. Tse-Chun LIN
      (HKU), Prof. Crystal Li JIANG (CityU), Prof. Fen LIN (CityU), Prof. Ye SUN
      (CityU), Prof. Qingpeng ZHANG (CityU), Prof. Yue DAI (CityU), Prof.
      Xiaohui WANG (CityU)
    </p> -->
    <section class="hoster">
      <img
        src="@/assets/team/Yi-Hui_Christine_Huang.jpeg"
        alt=""
        class="hoster-img"
      />
      <p class="text-user-info">Prof. Yi-Hui Christine HUANG (CityU)</p>
      <p class="description"></p>
    </section>
    <section class="section">
      <div class="user-list" v-for="(item, index) in userList1" :key="index">
        <img :src="item.img" alt="" class="user-img" :class="'img-user-'+index" />
        <p class="text-user-info">
          {{ item.userInfo }}
        </p>
        <!-- <p class="description">
          {{ item.description }}
        </p> -->
      </div>
    </section>
  </div>
</template>

<script setup>
import { teamList1, teamList2 } from "@/config/team";
import { ref } from "vue";
let userList1 = ref([]);
userList1.value = teamList1;
let userList2 = ref([]);
userList2.value = teamList2;
</script>

<style lang="scss">
.team {
  min-width: 1200px;
  padding-top: 50px;
  .hoster {
    width: 1200px;
    margin: 0 auto;
    text-align: center;
    .hoster-img {
      width: 150px;
      margin-bottom: 20px;
    }
    .text-user-info{
      font-size: 18px;
      line-height: 1.5;
      font-weight: 700;
      color:#222;
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
        &.img-user-0{

        }
        &.img-user-1{
          margin-bottom: 20px;
        }
        &.img-user-2{
          width: 180px;
          margin-top: 20px;
          margin-bottom: 46px;
        }
        &.img-user-3{}
        &.img-user-4{
          margin-bottom: 45px;
        }
        &.img-user-5{
          width: 180px;
          margin-top: 10px;
          margin-bottom: 45px;
        }
        &.img-user-6{
          width: 160px;
          margin-bottom: 20px;
        }
        &.img-user-8{
          width: 180px;
          margin-top: 10px;
          margin-bottom: 35px;
        }
      }
      .text-user-info{
      font-size: 18px;
      line-height: 1.5;
      font-weight: 700;
      color:#222;
    }
    }
  }
}
</style>
