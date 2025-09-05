const { defineConfig } = require("@vue/cli-service");
const webpack = require("webpack");

module.exports = defineConfig({
  transpileDependencies: [],
  devServer: {
    port: 3001,
  },
  chainWebpack: (config) => {
    // Delete Vue CLI's default (broken) ProgressPlugin
    config.plugins.delete("progress");

    // Add Webpack's built-in ProgressPlugin
    config.plugin("progress").use(webpack.ProgressPlugin);
  },
});
