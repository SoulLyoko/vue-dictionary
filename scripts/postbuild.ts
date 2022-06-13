import fs from "fs";
import { execSync } from "child_process";

import { series, src, dest } from "gulp";
import autoprefixer from "gulp-autoprefixer";
import cleancss from "gulp-clean-css";
import gulpSass from "gulp-sass";
import sass from "sass";

function buildTypes() {
  console.log("Building types...");
  const run = outDir => `vue-tsc --project tsconfig.d.json --declaration --emitDeclarationOnly --outDir ${outDir}`;
  execSync(run("es"));
  execSync(run("lib"));
}
function buildStyles() {
  console.log("Building styles...");
  const common = () => src("packages/**/*.scss").pipe(gulpSass(sass).sync()).pipe(autoprefixer()).pipe(cleancss());
  const task1 = () => common().pipe(dest("es"));
  const task2 = () => common().pipe(dest("lib"));
  series(task1, task2)(err => !err && copyStyle());
}
function copyStyle() {
  fs.copyFileSync("lib/styles/index.css", "dist/index.css");
}
function copyGlobal() {
  fs.copyFileSync("packages/global.d.ts", "global.d.ts");
}

buildTypes();
buildStyles();
copyGlobal();
