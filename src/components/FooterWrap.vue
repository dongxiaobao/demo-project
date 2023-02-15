<template>
  <div class="footer-wrap">
    <div class="wrap">
      <div class="footer-box-1">
        <p class="title-wrap-footer">Get In Touch</p>
        <p class="contact-1">
          Email:
          <a href="mailto:info@bridgehk.org">info@bridgehk.org</a>
        </p>
        <p class="contact-2">
          Keep up to date with all our latest news and events on:
          <span class="item-1"></span>
          <span class="item-2"></span>
          <span class="item-3"></span>
        </p>
      </div>
      <div class="footer-box-2">
        <p class="title-wrap-footer">QUICk Links</p>
        <p class="link-1" @click="goPage('1')">TEAM</p>
        <p class="link-1" @click="goPage('2')">PARTNERS</p>
        <p class="link-1" @click="goPage('3')">RELATED PROJECTS</p>
        <p class="link-1" @click="goPage('4')">SCIENTIFIC IMPACT</p>
        <p class="link-1" @click="goPage('5')">NEWS & EVENTS</p>
      </div>
      <div class="footer-box-3">
        <p class="title-wrap-footer">How do we work</p>
        <p class="link-1" @click="goPage('6')">ROADMAP</p>
        <p class="link-1" @click="goPage('7')">SUB PROJECTS</p>
        <p class="link-1" @click="goPage('8')">DELIVERABLES</p>
      </div>
      <div class="footer-box-4"></div>
    </div>
  </div>
</template>

<script setup>
import {  useRouter } from "vue-router";
const router = useRouter();
const goPage = (params) => {
  const pathMap = {
    1: "/team",
    2: "/partners",
    3: "/relatedProjects",
    4: "/scientificImpact",
    5: "/newsEvents",
    6: "/roadmap",
    7: "/subProjects",
    8: "/deliverables",
  };
  router.push({
    path: pathMap[params],
  });
};
</script>

<style lang="scss">
.footer-wrap {
  margin-top: 20px;
  background: #f5f5f5;
  min-width: 1200px;
  padding-top: 50px;
  text-align: left;
  .wrap {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    .footer-box-1 {
      flex: 2;
      .contact-1 {
        color: #1d1b1bbf;
        color: 13px;
        line-height: 1.5;
        margin: 13px 0;
      }
      .contact-2 {
        color: #1d1b1bbf;
        font-size: 13px;
        line-height: 1.5;
        width: 280px;
        .item-1 {
          display: inline-block;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1px solid #222;
          background: url(@/assets/icon/tuite.png) no-repeat center;
          background-size: 60%;
          margin-left: 10px;
          vertical-align: middle;
          background-color: #fff;
          cursor: pointer;
          border-radius: 50%;
          border: 1px solid #222;
          &:hover {
            // background-color: #55acee;
          }
        }
        .item-2 {
          display: inline-block;
          width: 36px;
          height: 36px;
          background: url(@/assets/icon/linkedin.png) no-repeat center;
          background-size: 50%;
          background-color: #fff;
          cursor: pointer;
          border-radius: 60%;
          border: 1px solid rgba(29, 27, 27, 0.75);
          margin-left: 10px;
          vertical-align: middle;
          &:hover {
            // background-color: #55acee;
          }
        }
        .item-3 {
          display: inline-block;
          width: 36px;
          height: 36px;
          background: url(@/assets/icon/youtube.png) no-repeat center;
          background-size: 50%;
          background-color: #fff;
          margin-left: 10px;
          vertical-align: middle;
          cursor: pointer;
          border-radius: 50%;
          border: 1px solid #222;
          &:hover {
            // background-color: #55acee;
          }
        }
      }
    }
    .footer-box-2 {
      flex: 2;
      .link-1 {
        color: #1d1b1bbf;
        color: 13px;
        line-height: 1.5;
        margin-bottom: 10px;
        cursor: pointer;
      }
    }
    .footer-box-3 {
      flex: 2;
      .link-1 {
        color: #1d1b1bbf;
        color: 13px;
        line-height: 1.5;
        margin-bottom: 10px;
        cursor: pointer;
      }
    }
    .footer-box-4 {
      //   flex: 3;
    }
    .title-wrap-footer {
      color: #0f6fb8;
      font-size: 16px;
      line-height: 1.5;
      margin-bottom: 15px;
      font-weight: 600;
    }
  }
}
</style>
