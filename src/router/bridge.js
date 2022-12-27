const partners = () => import("@/views/AboutBridge/partners.vue");
const relatedProjects = () => import("@/views/AboutBridge/relatedProjects.vue");
const team = () => import("@/views/AboutBridge/team.vue");

const bridge = [
  {
    path: "/partners",
    name: "partners",
    component: partners,
    meta: {
      title: "About bridge",
      keepAlive: true,
    },
  },
  {
    path: "/relatedProjects",
    name: "relatedProjects",
    component: relatedProjects,
    meta: {
      title: "relatedProjects",
      keepAlive: true,
    },
  },
  {
    path: "/team",
    name: "team",
    component: team,
    meta: {
      title: "team",
      keepAlive: true,
    },
  },
];
export default bridge;
