const newsEvents = () => import("@/views/Dissmination/newsEvents.vue");
const socialMedia = () => import("@/views/Dissmination/socialMedia.vue");
const webinars = () => import("@/views/Dissmination/webinars.vue");

const dissmination = [
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
    path: "/socialMedia",
    name: "socialMedia",
    component: socialMedia,
    meta: {
      title: "socialMedia",
      keepAlive: true,
    },
  },
  {
    path: "/webinars",
    name: "webinars",
    component: webinars,
    meta: {
      title: "webinars",
      keepAlive: true,
    },
  },
];
export default dissmination;
