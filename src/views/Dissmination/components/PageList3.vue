<!--
 * @Author: yanbao dong
 * @Date: 2023-03-27 18:07:41
 * @LastEditors: yanbao dong
 * @LastEditTime: 2023-03-27 18:08:57
 * @Description: file content
-->
<template>
  <div class="PageList-3-wrap">
    <header class="header-title">
      <p class="tex-title">
        (3) Prof Huang Delivered Opening Remarks in the Workshop on Social
        Determinant of Health <br />
      </p>
    </header>
    <main class="main-pic">
      <div class="text-box">
        <p class="top">Opening Remarks:</p>
        <p class="top-2">
          Good afternoon everyone, I hope you are doing well.<br /><br />
          I am Christine Huang, the Associate Dean of College of Liberal Arts
          and Social Sciences.<br /><br />
          It is my pleasure to welcome each and every one of you for joining the
          Social Determinants of Health Workshop today.<br /><br />
          It is easy for us to overlook and underestimate the significance of
          social and economic determinants of health – determinants that are
          shaped by policies and politics, culture and history, and the
          behaviour of markets. <br /><br />
          Yet the COVID pandemic has shown all of us just how important social
          and economic issues are to the timely identification and resolution of
          health threats. This is an intriguing new initiative for the
          Department of Public and International Studies, one that reaffirms and
          gives prominence to these critical issues. <br /><br />
          Colleagues in the College of Liberal Arts and Social Sciences at City
          University have had an ongoing research agenda in health policy for
          several years:<br /><br />
          1. In the Department of Social and Behavioural Sciences, work is
          carried out into areas of health provisions for the aged; <br />
          2. In Communication and Media, our colleagues work on health
          communication;<br />
          3. In English, there is ongoing research on topics of health literacy
          and promotion; <br />
          4. In Public and International Affairs, they work on Global Health.
          <br /><br />
          Three years ago, in recognition of the importance of these research
          efforts, the College created a One Health research cluster that acts
          as a lodestone for research collaboration, public awareness, and
          community outreach. <br /><br />
          This cluster parallels the efforts of City University in placing One
          Health as a key strategic focus. At this workshop, we look forward to
          your collective insights and unique ideas as to how this might be
          explored and developed further.<br /><br />
          Now without further ado, let us commence the workshop!<br /><br />
          Thank you.
        </p>
      </div>

      <div class="img-box">
        <img src="@/assets/Webinars/page-list-2.jpeg" alt="" class="img-user" />
      </div>
      <div class="img-box">
        <img src="@/assets/Webinars/page-list-3.jpeg" alt="" class="img-user" />
      </div>
      <div class="img-box">
        <img src="@/assets/Webinars/page-list-4.jpeg" alt="" class="img-user" />
      </div>
      <div class="img-box">
        <img src="@/assets/Webinars/page-list-5.jpeg" alt="" class="img-user" />
      </div>
    </main>
  </div>
</template>

<script setup>
const toPdf = () => {
  window.open("/pdf/P-Lecture-for-STG.pdf");
};
</script>

<style lang="scss">
.PageList-3-wrap {
  text-align: left;
  .tex-title {
    font-size: 22px;
    line-height: 1.5;
    font-weight: 600;
    color: #222;
    margin-bottom: 20px;
  }
  .main-pic {
    .img-box {
      text-align: center;
      .img-user {
        margin-bottom: 20px;
        cursor: pointer;
        width: 1000px;
      }
    }
    .text-box {
      .top {
        font-weight: 600;
        margin-bottom: 20px;
      }
      .top-1 {
        font-size: 22px;
        font-weight: 600;
        color: #222;
        line-height: 1.5;
      }
      .top-2 {
        margin-bottom: 20px;
        .font-bold {
          font-weight: 600;
          line-height: 1.5;
        }
      }
    }
  }
}
</style>
