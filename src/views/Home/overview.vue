<template>
  <div class="over-view">
    <header class="header">
      <img src="@/assets/logo.png" alt="" class="banner" />
    </header>
    <!-- 文字内容区域 -->
    <main class="mian">
      <section class="section-left"></section>
      <section class="section-right"></section>
    </main>
    <!-- partners -->

  </div>
</template>

<script setup></script>

<style lang="scss">
.over-view {
  min-width: 1200px;
  text-align: left;
  .header {
    width: 100%;
    height: 695px;
    background-color: #f5f5f5;
    text-align: center;
    .banner {
      width: 1200px;
      height: 695px;
    }
  }
  .mian {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    height: 800px;
    .section-left {
      flex: 1.5;
      // background-color: grey;
    }
    .section-right {
      flex: 1;
      // background-color: orange;
    }
  }
}
</style>
