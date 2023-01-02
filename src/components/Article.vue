<template>
  <div class="article">
    <div class="section" v-for="(item, index) in list" :key="index">
      <p class="bgd" :class="'bgd-' + index"></p>
      <p class="time-box">
        {{ item.time }}
      </p>
      <p class="title-box">
        {{ item.title }}
      </p>
      <p class="content" v-html="item.content"></p>
      <p class="read-more">
          Read More
          <el-icon :size="15"><Right /></el-icon>
      </p>
    </div>
  </div>
  <footer class="footer">
        <p class="line"></p>
        <p class="text">
            VIEW POSTS
        </p>
    </footer>
</template>

<script setup>
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.jpg";
import {  ElIcon } from "element-plus";
import { Right } from "@element-plus/icons-vue";
import { ref } from "vue";
let list = ref([
  {
    img: image1,
    time: "Feb 7, 2022",
    title: "A CINECA deliverable describes the ELIXIR Passport Broker ",
    content: `<p class="">In the <a href="https://www.cineca-project.eu/blog-all/passport-is-the-glue-between-the-researcher-data-and-computing"><span style="text-decoration:underline">Passport is the glue between the researcher, data and computing</span></a> blog post I introduced GA4GH Passports as an enabler of “the bring compute to data” paradigm. CINECA WP2 also contributed to <a href="https://doi.org/10.1016/j.xgen.2021.100030"><span style="text-decoration:underline">GA4GH Passport standard for Digital identity and access permissions</span></a> publication in Cell Genomics in autumn 2021.</p>`,
  },
  {
    img: image2,
    time: "Jul 13, 2021",
    title: "Joint Variant genotyping use case",
    content: `<p class="">Recently WP4 has delivered a simple demonstrator pipeline to perform a federated joint variant genotyping analysis. The goal of this use case is to demonstrate how a simple metric (in this case, allele frequency) can be computed in a federated manner, without requiring ever collecting the individual level data in a central location.</p>`,
  },
]);
</script>

<style lang="scss">
.article {
  display: flex;
  justify-content: space-between;
  .section {
    .bgd {
      width: 325px;
      height: 195px;
      margin: 40px 0 10px;
      &.bgd-0 {
        background: url(@/assets/image1.png) center;
        background-size: cover;
      }
      &.bgd-1 {
        background: url(@/assets/image2.jpg) center;
        background-size: cover;
      }
    }
    .time-box {
      font-size: 13px;
      line-height: 1.5;
      color: #222;
      margin-bottom: 10px;
      padding-right: 10px;
    }
    .title-box {
      color: #c72b39;
      font-size: 20px;
      line-height: 1.5;
      margin-bottom: 10px;
      padding-right: 15px;
    }
    .content{
        color: #222;
      font-size: 14px;
      line-height: 1.5;
      margin-bottom: 10px;
      padding-right: 20px;
    }
    .read-more{
        color: #222;
      font-size: 14px;
      line-height: 1.5;
      margin-bottom: 10px;
      padding-right: 20px;
      display: flex;
      align-items: center;
      .el-icon{
          margin-left: 5px;
      }
    }
  }
}
.footer{
    text-align: right;
    padding-right: 30px;
    position: relative;
    margin-bottom: 150px;
    .line{
        position: absolute;
        height: 2px;
        width: 130px;
        right: 30px;
        background:  #e37263;
    }
    .text{
        font-size: 12px;
        font-weight: 600;
        line-height: 1.5;
        color: #e37263;
        cursor: pointer;
        padding-top: 6px;
    }
}
</style>
