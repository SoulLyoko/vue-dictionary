import { execSync } from "child_process";

import packageJson from "../package.json";

export function getVueVersion() {
  const vue = packageJson.devDependencies.vue;
  const version = vue.match(/\d{1,}/)?.[0];
  return version as "2" | "3";
}

export function switch2() {
  if (getVueVersion() != "2") {
    execSync("yarn add vue@2.6.14 -D");
    execSync("yarn add @vue/test-utils@1.3.0 -D");
    execSync("vue-demi-switch 2");
  }
}

export function switch3() {
  if (getVueVersion() != "3") {
    execSync("yarn add vue -D");
    execSync("yarn add @vue/test-utils -D");
    execSync("vue-demi-switch 3");
  }
}
