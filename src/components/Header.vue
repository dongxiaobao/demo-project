<template>
  <div class="header">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      :ellipsis="false"
      @select="handleSelect"
    >
      <el-menu-item index="0" class="left-logo">
        <img src="@/assets/logo.jpg" alt="" class="logo" />
        <span class="text-title">
          Building Resillience with<br />Information and Dialogues<br />for
          Growth and Equality
        </span>
      </el-menu-item>
      <div class="flex-grow" />
      <el-menu-item index="1" class="title-name">HOME</el-menu-item>
      <el-sub-menu index="2" class="title-name">
        <template #title>ABOUT BRIDGE</template>
        <el-menu-item index="2-1">TEAM</el-menu-item>
        <el-menu-item index="2-2">PARTNERS</el-menu-item>
        <el-menu-item index="2-3">RELATED PROJECTS</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="3" class="title-name">
        <template #title>HOW WE WORK</template>
        <el-menu-item index="3-1">ROADMAP</el-menu-item>
        <el-menu-item index="3-2">SUB PROJECTS</el-menu-item>
        <el-menu-item index="3-3">DELIVERABLES</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="4" class="title-name">
        <template #title>DISSEMINATION</template>
        <el-menu-item index="4-1">PUBLICATIONS</el-menu-item>
        <el-menu-item index="4-2">WEBINARS</el-menu-item>
        <el-menu-item index="4-3">SOCIAL MEDIA</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="5" class="title-name">
        <template #title>IMPACT</template>
        <el-menu-item index="5-1"> NEWS & EVENTS </el-menu-item>
        <el-menu-item index="5-2">SCIENTFIC IMPACT</el-menu-item>

        <el-menu-item index="5-3">DATABSETS</el-menu-item>
      </el-sub-menu>
      <div class="search-box">
        <div class="top-box">
          <span class="icon icon-1" @click="toPage('1')"></span>
          <span class="icon icon-2" @click="toPage('2')"></span>
          <span class="icon icon-3" @click="toPage('3')"></span>
          <span class="line"></span>
          <span class="text">Events</span>
          <span class="line"></span>
          <span class="text">Contacts</span>
        </div>
        <div class="center-box">
          <input type="text" class="search" />
          <el-icon :size="15"><Search /></el-icon>
        </div>
      </div>
    </el-menu>
  </div>
</template>

<script setup>
import { ElMenu, ElMenuItem, ElSubMenu, ElIcon } from "element-plus";
import "element-plus/es/components/menu/style/css";
import { Search } from "@element-plus/icons-vue";
import { useRoute, useRouter } from "vue-router";
const router = useRouter();
const route = useRoute();
import { ref } from "vue";

const activeIndex = ref("1");
let input1 = ref("");
const handleSelect = (key, keyPath) => {
  console.log(key, keyPath);
  if (key == 0) {
    router.push({
      path: "/overview",
    });
  } else if (key == "1") {
    router.push({
      path: "/overview",
    });
  } else if (key == "2-1") {
    router.push({
      path: "/team",
    });
  } else if (key == "2-2") {
    router.push({
      path: "/partners",
    });
  } else if (key == "2-3") {
    router.push({
      path: "/relatedProjects",
    });
  } else if (key == "3-1") {
    router.push({
      path: "/roadmap",
    });
  } else if (key == "3-2") {
    router.push({
      path: "/subProjects",
    });
  } else if (key == "3-3") {
    router.push({
      path: "/deliverables",
    });
  } else if (key == "4-1") {
    router.push({
      path: "/publications",
    });
  } else if (key == "4-2") {
    router.push({
      path: "/webinars",
    });
  } else if (key == "4-3") {
    router.push({
      path: "/socialMedia",
    });
  } else if (key == "5-1") {
    router.push({
      path: "/newsEvents",
    });
  } else if (key == "5-2") {
    router.push({
      path: "/scientificImpact",
    });
  } else if (key == "5-3") {
    router.push({
      path: "/datasets",
    });
  }
};
const toPage = (index) => {
  if (index == "1") {
    window.open(`https://twitter.com/?lang=en`);
  } else if (index == "2") {
    window.open(`https://www.linkedin.cn`);
  } else {
    window.open(`https://www.youtube.com`);
  }
};
</script>

<style lang="scss">
.header {
  min-width: 1200px;
  height: 120px;
  border-bottom: 1px solid #ddd;

  .el-menu {
    width: 1200px;
    margin: 0 auto;
    height: 120px;
    .left-logo {
      padding-left: 0;
      .text-title {
        margin-left: 20px;
        border-left: #5db4f7 1px solid;
        text-align: left;
        word-break: break-all !important;
        width: 210px;
        font-size: 17px;
        line-height: 28px;
        color: #5db4f7;
        height: 88px;
        padding-left: 7px;
      }
    }
    .logo {
      width: 153px;
      height: 55px;
    }
    .el-menu-item {
      // color: #49b4f7;
      &.is-active {
        border-bottom: none;
      }
    }
    .title-name {
      padding: 0 8px;
      height: 30px;
      margin: auto 0;
      font-size: 16px;
      line-height: 1.5;
      .el-sub-menu__title {
        padding: 0 10px;
        font-size: 16px;
        line-height: 1.5;
        border-bottom: none;
      }
      .el-icon {
        right: -10px;
      }
    }
  }
  .flex-grow {
    flex-grow: 1;
  }
  .search-box {
    width: 84px;
    padding-left: 20px;
    padding-top: 10px;
    .top-box {
      width: 207px;
      margin-left: -124px;
      height: 20px;
      display: flex;
      align-items: center;
      .icon {
        width: 16px;
        height: 16px;
        cursor: pointer;
      }
      .icon-1,
      .icon-2,
      .icon-3,
      .icon-4 {
        margin-right: 10px;
      }
      .icon-1 {
        background: url(@/assets/icon/tuite.png) no-repeat center;
        background-size: contain;
      }
      .icon-2 {
        background: url(@/assets/icon/linkedin.png) no-repeat center;
        background-size: contain;
      }
      .icon-3 {
        background: url(@/assets/icon/youtube.png) no-repeat center;
        background-size: contain;
        margin-right: 4px;
      }
      .text {
        font-size: 13px;
        cursor: pointer;
      }
      .line {
        width: 2px;
        height: 13px;
        margin: 0 4px;
        background: #222;
      }
    }
    .center-box {
      height: 25px;
      margin-top: 12px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .search {
        width: 50px;
        border-bottom: 1px solid rgba(29, 29, 29, 0.3);
      }
      .el-icon {
        cursor: pointer;
      }
    }
  }
}
</style>
