/*
 * @Author: yanbao dong
 * @Date: 2023-01-04 21:30:47
 * @LastEditors: yanbao dong
 * @LastEditTime: 2023-01-13 14:14:30
 * @Description: file content
 */
import { createRouter, createWebHashHistory } from "vue-router";

import home from "./home.js";
import bridge from "./bridge";
import dissmination from "./dissmination";
import howWeWork from "./howWeWork";
import impact from "./impact";
import other from './other'

const routes = [...home, ...bridge, ...dissmination, ...howWeWork, ...impact,...other];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    // debugger;
    // 对于是 h5-smartfund-wrap 元素的滚动
    document.getElementById("app").scrollTop = 0;
    return { top: 0 };
  },
});



export default router;
