import path from "path";

import { defineConfig } from "vite";
import { isVue2 } from "vue-demi";
import fs from "fs-extra";
import { viteCommonjs } from "@originjs/vite-plugin-commonjs";

import pkg from "./package.json";

// https://vitejs.dev/config/e
export default defineConfig(async ({ mode }) => {
  const vuePlugin = isVue2
    ? (await import("vite-plugin-vue2")).createVuePlugin()
    : (await import("@vitejs/plugin-vue")).default();
  const globals = {
    vue: "Vue",
    "vue-demi": "VueDemi",
    "@vueuse/core": "VueUse",
    "lodash-es": "_",
    lodash: "_"
  };
  const external = Object.keys(globals);
  if (mode === "production") {
    fs.removeSync("dist");
    fs.removeSync("es");
    fs.removeSync("lib");
  }
  return {
    plugins: [vuePlugin, viteCommonjs()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        "~": path.resolve(__dirname, "packages"),
        [pkg.name]: path.resolve(__dirname, "packages")
      }
    },
    test: {
      globals: true,
      environment: "jsdom"
    },
    optimizeDeps: {
      exclude: external
    },
    build: {
      lib: {
        entry: path.resolve(__dirname, "packages/index.ts"),
        name: pkg.upperName
      },
      rollupOptions: {
        external,
        output: [
          {
            globals,
            entryFileNames: "[name].js",
            format: "umd",
            dir: "dist"
          },
          {
            preserveModules: true,
            preserveModulesRoot: path.resolve(__dirname, "packages"),
            entryFileNames: "[name].js",
            format: "es",
            dir: "es"
          },
          {
            exports: "named",
            preserveModules: true,
            preserveModulesRoot: path.resolve(__dirname, "packages"),
            entryFileNames: "[name].js",
            format: "cjs",
            dir: "lib"
          }
        ]
      }
    }
  };
});
