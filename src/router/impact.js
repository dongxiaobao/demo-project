const databsets = () => import("@/views/Impact/databsets.vue");
const publications = () => import("@/views/Impact/publications.vue");
const scientficImpact = () => import("@/views/Impact/scientficImpact.vue");

const impact = [
  {
    path: "/databsets",
    name: "databsets",
    component: databsets,
    meta: {
      title: "Impact",
      keepAlive: true,
    },
  },
  {
    path: "/publications",
    name: "publications",
    component: publications,
    meta: {
      title: "publications",
      keepAlive: true,
    },
  },
  {
    path: "/scientficImpact",
    name: "scientficImpact",
    component: scientficImpact,
    meta: {
      title: "scientficImpact",
      keepAlive: true,
    },
  },
];
export default impact;
