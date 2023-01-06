/*
 * @Author: yanbao dong
 * @Date: 2023-01-06 09:45:46
 * @LastEditors: yanbao dong
 * @LastEditTime: 2023-01-06 10:06:02
 * @Description: file content
 */
const communication = () => import("@/views/LatesFromBridge/communication.vue");
const informationAndTechnology = () => import("@/views/LatesFromBridge/informationAndTechnology.vue");
const resilience = () => import("@/views/LatesFromBridge/resilience.vue");
const trust = () => import("@/views/LatesFromBridge/trust.vue");
const other = [
  {
    path: "/communication",
    name: "communication",
    component: communication,
    meta: {
      title: "communication",
      keepAlive: true,
    },
  },
  {
    path: "/informationAndTechnology",
    name: "informationAndTechnology",
    component: informationAndTechnology,
    meta: {
      title: "informationAndTechnology",
      keepAlive: true,
    },
  },
  {
    path: "/resilience",
    name: "resilience",
    component: resilience,
    meta: {
      title: "resilience",
      keepAlive: true,
    },
  },
  {
    path: "/trust",
    name: "trust",
    component: trust,
    meta: {
      title: "trust",
      keepAlive: true,
    },
  },
];
export default other;
