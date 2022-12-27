const path = require("path");
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  publicPath: "./", //基本路径
  outputDir: "dist", //输出文件目录
  assetsDir: "static", //css js 等静态文件目录
  // lintOnSave: 'error', // 设置eslint报错时停止代码编译
  lintOnSave: false,
  productionSourceMap: false, // 不需要生产环境的 source map（减小dist文件大小，加速构建）
  chainWebpack: (config) => {
    // 移除 prefetch 插件(针对生产环境首屏请求数进行优化)
    config.plugins.delete("prefetch");
    // 移除 preload 插件(针对生产环境首屏请求数进行优化)
    config.plugins.delete("preload");
    // 第1个参数：别名，第2个参数：路径  （设置路径别名）
    config.resolve.alias
      .set("@", resolve("./src"))
      .set("@views", resolve("./src/views"))
      .set("@router", resolve("./src/router"))
      .set("@imgs", resolve("./src/imgs"))
      .set("@assets", resolve("./src/assets"))
      .set("@utils", resolve("./src/utils"));
  },
  // 配置打包 js、css文件为.gz格式，优化加载速度
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === "production") {
      return {
        plugins: [
          new CompressionPlugin({
            test: /\.js$|\.css/, // 匹配文件
            threshold: 10240, // 超过10kB的数据进行压缩
            deleteOriginalAssets: false, // 是否删除原文件 （原文件也建议发布到服务器以支持不兼容gzip的浏览器）
          }),
          AutoImport({
            resolvers: [ElementPlusResolver()],
          }),
          Components({
            resolvers: [ElementPlusResolver()],
          }),
        ],
        performance: {
          // 生产环境构建代码文件超出以下配置大小会在命令行中显示警告
          hints: "warning",
          // 入口起点的最大体积 整数类型（以字节为单位,默认值是：250000 (bytes)）
          maxEntrypointSize: 5000000,
          // 生成文件的最大体积 整数类型（以字节为单位,默认值是：250000 (bytes)）
          maxAssetSize: 3000000,
        },
      };
    }
  },
};
