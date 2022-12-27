const deliverables = () => import("@/views/HowWeWork/deliverables.vue");
const roadmap = () => import("@/views/HowWeWork/roadmap.vue");
const subProjects = () => import("@/views/HowWeWork/subProjects.vue");

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
];
export default HowWeWork;
