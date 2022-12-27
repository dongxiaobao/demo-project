const Overview = () => import("@/views/Home/overview.vue");

const home = [
  {
    path: "/",
    name: "",
    component: Overview,
    meta: {
      title: "首页",
      keepAlive: true,
    },
  },
  {
    path: "/overview",
    name: "overview",
    component: Overview,
    meta: {
      title: "首页",
      keepAlive: true,
    },
  },
];
export default home;
