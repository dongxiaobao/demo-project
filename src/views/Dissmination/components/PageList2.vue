<!--
 * @Author: yanbao dong
 * @Date: 2023-03-27 18:07:41
 * @LastEditors: yanbao dong
 * @LastEditTime: 2023-03-28 11:24:19
 * @Description: file content
-->
<template>
  <div class="PageList-2-wrap">
        <header class="header-title">
      <p class="tex-title">
        Source of selected Powerpoint slides: Dr. Nicole Valentine, Senior Technical Officer, World Health Organization.
      </p>
    </header>
    <main class="main-pic">
           <div class="pdf-box">
        <!-- <p class="header-title">
          Selected Powerpoint Slides from the President Lecture
        </p> -->
        <div class="pdf" @click="toPdf">
          <div class="left">
            <img src="@/assets/Webinars/pdf-icon.jpg" alt="" class="pdf-logo" />
          </div>
          <div class="right">
            <p class="">SDH 0322.pdf</p>
            <p class="k-b">1.51 MB</p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
const toPdf = ()=>{
  window.open('/bridge/pdf/SDH-0322.pdf')
}
</script>

<style lang="scss">
.PageList-2-wrap {
  text-align: left;
  .tex-title {
    font-size: 22px;
    line-height: 1.5;
    // font-weight: 600;
    color: #222;
    margin-bottom: 20px;
  }
  .main-pic {
      .pdf-box {
      margin-top: 50px;
      .header-title {
        margin-bottom: 10px;
      }
      .pdf {
        display: flex;
        padding: 20px;
        background: #f3f5f7;
        border-radius: 4px;
        align-items: center;
        cursor: pointer;
        .left {
          width: 50px;
          height: 50px;
          margin-right: 20px;
          .pdf-logo {
            width: 100%;
          }
        }
        .right {
          .k-b {
            font-size: 12px;
            color: #00000066;
          }
        }
      }
    }
  }
}
</style>
