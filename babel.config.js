/*
 * @Author: yanbao dong
 * @Date: 2023-01-12 20:14:02
 * @LastEditors: yanbao dong
 * @LastEditTime: 2023-01-17 09:25:25
 * @Description: file content
 */
module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  //加上这~
  plugins: [
    [
      "component",
      {
        libraryName: "element-ui",
        styleLibraryName: "theme-chalk",
      },
    ],
  ],
};
