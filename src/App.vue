<!--
 * @Author: yanbao dong
 * @Date: 2023-01-12 20:14:02
 * @LastEditors: yanbao dong
 * @LastEditTime: 2023-03-27 16:55:49
 * @Description: file content
-->
<template>
  <Header></Header>
  <router-view v-slot="{ Component }">
    <transition class="transition" :name="transitionName">
      <keep-alive :max="1">
        <component
          v-if="route.meta.keepAlive"
          :is="Component"
          :key="route.fullPath"
        />
      </keep-alive>
    </transition>
    <transition class="transition" :name="transitionName">
      <component
        v-if="!route.meta.keepAlive"
        :is="Component"
        :key="route.path"
      />
    </transition>
  </router-view>
  <FooterWrap></FooterWrap>
</template>

<script setup>
import { ref } from 'vue';
import Header from '@/components/Header.vue'
import FooterWrap from '@/components/FooterWrap.vue'
import { useRoute } from 'vue-router';
const route = useRoute();
const transitionName = ref('');
</script>

<style lang="scss">
// @import '@/scss/reset.scss';
@import '@/scss/common.scss';
#app {
 width: 100%;
 text-align: center;
}
</style>
