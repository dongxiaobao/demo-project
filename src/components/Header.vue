<template>
  <div class="header">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      :ellipsis="false"
      @select="handleSelect"
    >
      <el-menu-item index="0">LOGO</el-menu-item>
      <div class="flex-grow" />
      <el-menu-item index="1">HOME</el-menu-item>
      <el-sub-menu index="2">
        <template #title>ABOUT BRIDGE</template>
        <el-menu-item index="2-1">TEAM</el-menu-item>
        <el-menu-item index="2-2">PARTNERS</el-menu-item>
        <el-menu-item index="2-3">RELATED PROJECTS</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="3">
        <template #title>HOW WE WORK</template>
        <el-menu-item index="3-1">ROADMAP</el-menu-item>
        <el-menu-item index="3-2">SUB PROJECTS</el-menu-item>
        <el-menu-item index="3-3">DELIVERABLES</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="4">
        <template #title>DISSEMINATION</template>
        <el-menu-item index="4-1">NEWS & EVENTS</el-menu-item>
        <el-menu-item index="4-2">WEBINARS</el-menu-item>
        <el-menu-item index="4-3">SOCIAL MEDIA</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="5">
        <template #title>IMPACT</template>
        <el-menu-item index="5-1">SCIENTFIC IMPACT</el-menu-item>
        <el-menu-item index="5-2">PUBLICATIONS</el-menu-item>
        <el-menu-item index="5-3">DATABSETS</el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script setup>
import { ElMenu, ElMenuItem, ElSubMenu } from "element-plus";
import "element-plus/es/components/menu/style/css";
// import {meanList} from '@/config/menu.js'
import { useRoute, useRouter } from "vue-router";
const router = useRouter();
const route = useRoute();
import { ref } from "vue";

const activeIndex = ref("1");
const handleSelect = (key, keyPath) => {
  console.log(key, keyPath);
  if (key == 0) {
    router.push({
      path: "/overview",
    });
  }else if (key == '1') {
    router.push({
      path: "/overview",
    });
  }  else if (key == "2-1") {
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
      path: "/newsEvents",
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
      path: "/scientficImpact",
    });
  } else if (key == "5-2") {
    router.push({
      path: "/publications",
    });
  } else if (key == "5-3") {
    router.push({
      path: "/databsets",
    });
  }
};
</script>

<style lang="scss">
.header {
  min-width: 1200px;
  .el-menu {
    width: 1200px;
    margin: 0 auto;
  }
  .flex-grow {
    flex-grow: 1;
  }
}
</style>
