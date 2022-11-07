const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  outputDir: "docs",
  publicPath: "/special-char.ts/",
  transpileDependencies: true,
});
