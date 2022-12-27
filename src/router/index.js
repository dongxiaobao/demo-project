import { createRouter, createWebHashHistory } from "vue-router";

import home from "./home.js";
import bridge from "./bridge";
import dissmination from "./dissmination";
import howWeWork from "./howWeWork";
import impact from "./impact";

const routes = [...home, ...bridge, ...dissmination, ...howWeWork, ...impact];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // debugger;
    // 对于是 h5-smartfund-wrap 元素的滚动
    document.getElementById("app").scrollTop = 0;
    return { top: 0 };
  },
});

router.afterEach((to, from) => {});

export default router;
