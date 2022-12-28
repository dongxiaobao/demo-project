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
    <section class="section">
      <div class="user-list" v-for="(item, index) in userList1" :key="index">
        <img :src="item.img" alt="" class="user-img" />
        <p class="text-user-info">
          {{ item.userInfo }}
        </p>
        <p class="description">
          {{ item.description }}
        </p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { teamList1,teamList2 } from "@/config/team";
import { ref } from "vue";
let userList1 = ref([]);
userList1.value = teamList1;
let userList2 = ref([]);
userList2.value = teamList2;
</script>

<style lang="scss">
.team {
  min-width: 1200px;
  .section {
    width: 1200px;
    display: flex;
    margin: 0 auto;
    text-align: left;
    flex-wrap: wrap;
    .user-list {
      width: 33.33%;
      margin-bottom: 20px;
      .user-img{
        height: 100px;
      }
    }
  }
}
</style>
