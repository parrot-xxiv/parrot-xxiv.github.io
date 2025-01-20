import { defineConfig } from "vite";
import { sync } from "glob";

export default defineConfig({
  root: './src',
  publicDir: '../public',
  appType: 'mpa',
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: sync("./src/**/*.html".replace(/\\/g, "/")), // dynamic
      // input: {
      //     index: "./src/index.html",
      //     about: "./src/about.html",
      //     article: "./src/blog/article.html",
      // },
    },
  },
});
