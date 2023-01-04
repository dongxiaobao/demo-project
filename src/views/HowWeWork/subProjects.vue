<template>
  <div class="subProjects">
    <header class="header-box">
      <p class="title-page">{{ topic }}</p>
    </header>
    <main class="main-box">
      <p class="text-1">
        The <span class="weight">BRIDGE</span> project, through six sub-projects
        (SP), draws on diverse methodological strengths, including interviews
        and focus groups, surveys, experiments, big data analytics, and
        econometrics, to construct a cross-disciplinary and multi-level
        framework to bridge existing social divides in Hong Kong and cultivate
        resilience.
      </p>
      <p class="text-2">
        <span class="underline">SP #1 (Hong Kong Social Pulse Database)</span>
        provide a timely foundation for other SPs. SP#1 identifies
        dilemma-preference gaps among different stakeholders via longitudinal
        analysis of policies and public opinion represented in news, social
        media,search and mobility data. By analyzing the divergent public
        interest as well as the gap between public policy and public preference,
        SP#1 identify the gaps between different stakeholders and provide
        support for the
        <span class="weight"> Gap Management Model </span>.
      </p>
      <p class="picture-box"></p>
      <p class="text-3">
        SP#2 (Tracking Individuals’ Resilience Building Survey) provides
        population-representative evidence on policy compliance, individual
        resilience. This sub-project adopts a process perspective and aims to
        unfold the stages of an underlying resilience- building mechanism.This
        project will focus on the syndemic aspects revealed in SP#1. Its
        findings will identify the critical factors influencing the public’s
        policy compliance and institutional trust, which will serve as
        guidelines for designing interview protocols for the qualitative
        investigation in SP5 and experimental design in SP6.
      </p>
      <p class="text-3">
        SP#3 (Social Distrust, Expatriate Emigration, and Economic Resilience)
        complements other sub-projects by focusing on hard-to-survey
        demographics, notably skilled expatriates. It explicitly measures
        expatriate emigration with quantitative rental transaction data, thus
        filling the gap between the surveyable demographic and the overall
        population.
      </p>
      <p class="text-3">
        SP#4 (Digital Health and Social Disparities – A Trend Survey) provides
        population-representative evidence on digital health adoption (SP #4).
        Together with SP2 and 3, these projects construct three
        resilience-building pathways, and inform the potential solutions and
        tools for resilience buildings in SP#5 &6.
      </p>
      <p class="text-3">
        SP#5 (Guidelines for Balanced Communication and Decision Making) builds
        on notable patterns and gaps identified from the quantitative finding in
        other SPs to solicit qualitative data from stakeholders. SP#5 will
        inform the longitudinal survey design (SP #2 & SP #4) as well as the
        experimental design (SP #6) and provide more grounded, nuanced, and
        contextualized interpretations of the quantitative findings.
      </p>
      <p class="text-3">
        SP#6 (Experimental Investigations on Communication Strategies) offers
        solutions from a communication perspective for building a more resilient
        society. It will inform the design for the other sub-projects. It will
        also produce communication strategies and protocos for practical uses.
      </p>
    </main>
  </div>
</template>

<script setup>
import { ref } from "vue";
let topic = ref("Sub-projects");
</script>

<style lang="scss">
.subProjects {
  min-width: 1200px;
  text-align: left;
  .header-box {
    height: 144px;
    width: 100%;
    background: url(@/assets/page-bc.jpg) no-repeat top center;
    background-size: cover;
    .title-page {
      width: 1200px;
      margin: 0 auto;
      height: 100%;
      padding-top: 48px;
      font-size: 40px;
      line-height: 1.5;
      color: #fff;
      font-weight: 600;
    }
  }
  .main-box {
    width: 1200px;
    margin: 0 auto;
    padding: 90px 30px;
    .weight{
        font-weight: 600;
      }
    .text-1{
      margin-bottom: 30px;
      .weight{
        font-weight: 600;
      }
      .underline{
       text-decoration: underline;
      }
    }
    .text-2{
      margin-bottom: 30px;s
      .weight{
        font-weight: 600;
      }
      .underline{
       text-decoration: underline;
      }
    }
    .text-3{
      margin-bottom: 30px;
    }
  }
}
</style>
