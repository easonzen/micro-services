const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: (config) => {
    config.output.filename = "js/app.js";
    config.output.libraryTarget = "system";
  },
});
