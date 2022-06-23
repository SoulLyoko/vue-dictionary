import path from "path";

import { defineConfig } from "vitepress";
import { mdDemoTransform } from "./plugins/md-demo-transform";
import pkg from "../../package.json";

const Guide = [
  { text: "Start", link: "/guide/start" },
  { text: "Changelog", link: "/guide/changelog" }
];
const Components = [
  {
    text: "Components",
    children: [
      { text: "Dict", link: "/components/dict/demo/index" },
      { text: "Select", link: "/components/select/demo/index" }
    ]
  }
];

export default defineConfig({
  base: `/${pkg.name}/`,
  lang: "zh-CN",
  title: pkg.upperName,
  description: pkg.description,
  themeConfig: {
    docsDir: "packages",
    repo: "SoulLyoko/vue-dictionary",
    nav: [
      { text: "Guide", link: Guide[0].link },
      { text: "Components", link: Components[0].children[0].link }
    ],
    sidebar: {
      "/guide": Guide,
      "/components": Components
    }
  },
  vite: {
    plugins: [mdDemoTransform() as any],
    resolve: {
      alias: {
        "@": path.join(__dirname, "../../src"),
        "~": path.join(__dirname, "../../packages"),
        [pkg.name]: path.resolve(__dirname, "../../packages")
      }
    }
  }
});
