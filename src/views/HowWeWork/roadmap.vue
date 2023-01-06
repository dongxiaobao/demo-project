<!--
 * @Author: yanbao dong
 * @Date: 2023-01-04 21:30:47
 * @LastEditors: yanbao dong
 * @LastEditTime: 2023-01-06 18:24:39
 * @Description: file content
-->
<template>
  <div class="roadmap">
    <PageBox
      :topic="topic"
      :contentFirstDesc="contentFirstDesc"
      :contentList="contentList"
      :contentFirst="contentFirst"
      :imgSrc="imgSrc"
      :pageTitle="pageTitle"
    ></PageBox>
  </div>
</template>

<script setup>
import PageBox from "@/components/PageBox.vue";
import image from "@/assets/pageImg/page-img-01.png";
import { ref } from "vue";
let topic = ref("Roadmap");
let contentFirstDesc = ref("Goals:");
let pageTitle = ref(
  "Hong Kong’s road to pandemic recovery needs to be envisioned with a long-term goal of building a resilient society with the capacity to bridge existing and emerging gaps so as to absorb future shocks."
);
let imgSrc = ref("");
imgSrc.value = image;
let contentFirst = ref(
  "Our ultimate goal is to facilitate Hong Kong’s recovery from the COVID-19 pandemic, help it withstand future adverse shocks, and sustain economic growth and social equality."
);

let contentList = ref([
  {
    contentItem:
      "Develop and theorize a BRIDGE framework, which includes 1) Dilemma-Preference Gaps; 2) a Three-Route Resilience Building Model: Information & Technology, Trust, and Communication; and 3) a Gap Management Model: Identification, Mechanism Analysis, and Solution (Figure 1) to build resilience in a post-COVID society.",
  },
  {
    contentItem:
      "Identify and monitor dilemma-preference gaps between the public and policymakers (namely, the different trade-offs each group prefers when confronted with risk avoidance vs. tolerance, collective good vs. individual rights, and public health vs. economy stability to aid policymaking and compliance). ",
  },
  {
    contentItem:
      "Formulate three resilience-building pathways by evaluating how information technology empowerment, institutional trust, and communication strategies work interdependently and in combination to build Hong Kong’s resilience.",
  },
  {
    contentItem:
      "Construct an Individual Resilience Index to observe the change in Hong Kong’s resilience capacity. We define resilience capacity as an individual’s ability to endure the impacts of external shocks.",
  },
  {
    contentItem:
      "Build practical guidelines, policy recommendations, and reference tools to aid efficient and effective policymaking processes in risk and crisis management.",
  },
  {
    contentItem:
      "Create a free and open platform to synergize all efforts and synthesize the theoretical reflections, empirical findings, practical guidelines, and media coverage so various stakeholders can access the information they need.",
  },
]);
</script>

<style lang="scss">
.roadmap {
  min-width: 1200px;
}
</style>
