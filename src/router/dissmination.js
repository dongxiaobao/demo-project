
const socialMedia = () => import("@/views/Dissmination/socialMedia.vue");
const webinars = () => import("@/views/Dissmination/webinars.vue");
const publications = () => import("@/views/Impact/publications.vue");
const references = () => import("@/views/Dissmination/references.vue");
const dissmination = [
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
  {
    path: "/references",
    name: "references",
    component: references,
    meta: {
      title: "references",
      keepAlive: true,
    },
  },
];
export default dissmination;
