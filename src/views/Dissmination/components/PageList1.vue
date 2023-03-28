<!--
 * @Author: yanbao dong
 * @Date: 2023-03-27 18:07:41
 * @LastEditors: yanbao dong
 * @LastEditTime: 2023-03-27 18:28:24
 * @Description: file content
-->
<template>
  <div class="PageList-1-wrap">
    <header class="header-title">
      <p class="tex-title">
        (1) The President’s Lecture Series: Excellence in Academia No.53:
        Strategic communication, trust and culture from a paradigmatic-shifting
        perspective
      </p>
    </header>
    <main class="main-pic">
      <div class="img-box">
        <img src="@/assets/Webinars/page-list-1.png" alt="" class="img-user" />
      </div>
      <div class="text-box">
        <p class="top-2">
          <span class="font-bold">Professor Christine Huang Yi-hui</span>, Chair
          Professor of Communication and Media and Associate Dean (Faculty and
          Research) of the College of Liberal Arts and Social Sciences at City
          University of Hong Kong (CityU), spoke at the latest talk in the
          President's Lecture Series, where she discussed the role and
          importance of trust and culture in strategic communication research.
        </p>
        <p class="top-2">
          In her lecture on 2 March titled “Strategic Communication, Trust and
          Culture: A Cultural and Paradigm-Shifting Perspective”, Professor
          Huang suggested that since 2000, strategic communication has evolved
          from communication management in the marketing context to relationship
          management between organisations and the public, and has gradually
          moved towards a trust management paradigm.
        </p>
        <p class="top-2">
          Professor Huang pointed out that Western strategic communication
          research in the past lacked localisation theory. Therefore, she added
          the Chinese cultural context of “face and favour” to the traditional
          Western concept of the “public-organisation relationship”, organically
          combining Western academic concepts with localisation practices in
          Chinese societies.
        </p>
        <p class="top-2">
          She cited several examples, including Taiwan's plan to build the
          fourth nuclear power plant, and proposed a Relational Orientation
          Framework for the study of Chinese society and culture, including
          structural relation-centred factors and rational relation-centred
          factors. This framework is a new interpretation of the Western
          dichotomy of “collectivism” and “individualism”.
        </p>
        <p class="top-2">
          Professor Huang also drew upon the example of COVID-19. According to
          16 data sets, consisting of more than 28,000 responses collected by
          her research team from mainland China, Hong Kong, Taiwan, the US and
          the UK, the public’s trust in organisations is based on their ability,
          benevolence and integrity. The team studied how these factors affect
          the public’s willingness to get vaccinated and their attitude towards
          anti-pandemic policies.
        </p>
        <p class="top-2">
          Professor Huang’s speech inspired enthusiastic responses and questions
          from the audience both onsite and online, with some asking her how
          scholars from mainland China should promote strategic communication
          research. She stressed the importance of being true to oneself and to
          all the information and clues one holds. “In the past, guanxi (or
          relationships) in Chinese culture was considered something that should
          remain covert,” she said. “However, I believe that being truthful (to
          oneself and to the information gathered), observant and enthusiastic
          are the prerequisites to facilitate theory construction.”
        </p>
        <p class="top-2">
          Professor Huang was elected as a Fellow of the International
          Communication Association (ICA) in 2021, the first female in the four
          places across the Strait to receive this honour. She graduated from
          University of Maryland, and her research interests include public
          relations and strategic communication management, crisis management,
          conflict resolution and negotiation, and cross-cultural communication,
          focusing on constructing models and theories of Chinese communication.
        </p>
      </div>
      <div class="pdf-box">
        <p class="header-title">
          Selected Powerpoint Slides from the President Lecture
        </p>
        <div class="pdf" @click="toPdf">
          <div class="left">
            <img src="@/assets/Webinars/pdf-icon.jpg" alt="" class="pdf-logo" />
          </div>
          <div class="right">
            <p class="">P Lecture for STG.pdf</p>
            <p class="k-b">677.83 KB</p>
          </div>
        </div>
      </div>
      <footer class="footer-box">
        <p class="text-1">News releases:</p>
        <p class="text-2">
          <a
            href="https://www.cityu.edu.hk/media/news/2023/03/13/strategic-communication-trust-and-culture-paradigmatic-shifting-perspective"
            >https://www.cityu.edu.hk/media/news/2023/03/13/strategic-communication-trust-and-culture-paradigmatic-shifting-perspective</a
          >
        </p>
        <p class="text-2">
          <a
            href="https://www.cityu.edu.hk/zh-hk/media/news/2023/03/13/strategic-communication-trust-and-culture-paradigmatic-shifting-perspective"
            >https://www.cityu.edu.hk/zh-hk/media/news/2023/03/13/strategic-communication-trust-and-culture-paradigmatic-shifting-perspective</a
          >
        </p>
        <p class="text-1">Recordings:</p>
        <p class="text-2">
          <a
            href="https://cityuhk-lms.ap.panopto.com/Panopto/Pages/Viewer.aspx?id=858d0e63-28ec-4231-9a98-afbe00647ab4"
            >https://cityuhk-lms.ap.panopto.com/Panopto/Pages/Viewer.aspx?id=858d0e63-28ec-4231-9a98-afbe00647ab4</a
          >
        </p>
      </footer>
    </main>
  </div>
</template>

<script setup>
const toPdf = ()=>{
  window.open('/bridge/pdf/P-Lecture-for-STG.pdf')
}
</script>

<style lang="scss">
.PageList-1-wrap {
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
      .top-1 {
        font-size: 22px;
        font-weight: 600;
        color: #222;
        line-height: 1.5;
        //  margin-bottom: 20px;
      }
      .top-2 {
        margin-bottom: 20px;
        .font-bold {
          font-weight: 600;
          line-height: 1.5;
        }
      }
    }
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
    .footer-box {
      margin-top: 50px;
      .text-1 {
        margin-top: 30px;
        font-weight: 600;
        margin-bottom: 20px;
      }
      .text-2 {
        margin-bottom: 10px;
        a {
          color: #1e6fff;
        }
      }
    }
  }
}
</style>
