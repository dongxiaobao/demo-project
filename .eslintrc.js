/*
 * @Author: yanbao dong
 * @Date: 2023-01-13 14:19:54
 * @LastEditors: yanbao dong
 * @LastEditTime: 2023-01-13 14:20:12
 * @Description: file content
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "eslint:recommended", "prettier"],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off"
  }
};
