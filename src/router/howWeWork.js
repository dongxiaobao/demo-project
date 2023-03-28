const deliverables = () => import("@/views/HowWeWork/deliverables.vue");
const roadmap = () => import("@/views/HowWeWork/roadmap.vue");
const subProjects = () => import("@/views/HowWeWork/subProjects.vue");
const sp1 = () => import("@/views/HowWeWork/sp1.vue");
const spDetails = () => import("@/views/HowWeWork/details.vue");
const HowWeWork = [
  {
    path: "/deliverables",
    name: "deliverables",
    component: deliverables,
    meta: {
      title: "How We Work",
      keepAlive: true,
    },
  },
  {
    path: "/roadmap",
    name: "roadmap",
    component: roadmap,
    meta: {
      title: "roadmap",
      keepAlive: true,
    },
  },
  {
    path: "/subProjects",
    name: "subProjects",
    component: subProjects,
    meta: {
      title: "subProjects",
      keepAlive: true,
    },
  },
  {
    path: "/subProject/SP1",
    name: "sp1",
    component: sp1,
    meta: {
      title: "sp1",
      keepAlive: true,
    },
  },
  {
    path: "/subProject/details",
    name: "spDetails",
    component: spDetails,
    meta: {
      title: "spDetails",
      keepAlive: true,
    },
  },
];
export default HowWeWork;
