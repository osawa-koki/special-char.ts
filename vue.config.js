const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  outputDir: "dist",
  publicPath: "/special-char.ts/",
  transpileDependencies: true,
});
