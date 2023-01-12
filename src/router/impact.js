const datasets = () => import("@/views/Impact/datasets.vue");
const newsEvents = () => import("@/views/Dissmination/newsEvents.vue");
const scientificImpact = () => import("@/views/Impact/scientificImpact.vue");

const impact = [
  {
    path: "/datasets",
    name: "datasets",
    component: datasets,
    meta: {
      title: "Impact",
      keepAlive: true,
    },
  },

  {
    path: "/newsEvents",
    name: "newsEvents",
    component: newsEvents,
    meta: {
      title: "Dissmination",
      keepAlive: true,
    },
  },
  {
    path: "/scientificImpact",
    name: "scientificImpact",
    component: scientificImpact,
    meta: {
      title: "scientificImpact",
      keepAlive: true,
    },
  },
];
export default impact;
