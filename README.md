<div align="center">
<h3>VueDictionary</h3>
<span>一个后台管理系统通用的字典数据组件</span> 
<br>
<a  href="https://soullyoko.github.io/vue-dictionary/">文档 Docs</a>
</div>

# Directory

```bash
├── .github         # github workflows
├── .husky          # git hooks
├── packages        # lib source
├── scripts         # command scripts
├── src             # dev source
```

# Features

- Support Vue2 and Vue3 with [VueDemi](https://github.com/vueuse/vue-demi)
- Develop and build with [Vite](https://cn.vitejs.dev/)
- Unit Testing with [Vitest](https://cn.vitest.dev/)
- Docs with [VitePress](https://vitejs.cn/vitepress/)
- Auto CI, Deploy, Publish with GitHub Actions

# Try it

- Use this template
- Global rename `vue-dictionary` and `VueDictionary` to your own library name.
- Generate your github personal access token on https://github.com/settings/tokens (skip if you already have)
- Add your github personal access token named `ACCESS_TOKEN` (or any other name, it corresponds to `.github/workflows/deploy.yml#L21` to your repo `Setting>Secrets>Actions`
- Generate your npm access token (skip if you already have)
- Add your npm access token named `NPM_ACCESS_TOKEN` (or any other name, it corresponds to `.github/workflows/publish.yml#L21` to your repo `Setting>Secrets>Actions`

# Usage

## Development

### Install and run

```bash
yarn
yarn dev
```

### Other commands

```bash
yarn dev # dev on vue3
yarn dev:2 # dev on vue2
yarn docs:dev # dev docs
yarn test # test on vue3 in watch mode
yarn test:2 # test on vue2 without watch
yarn test:3 # test on vue3 without watch
yarn test:all # test both of vue2 and vue3 without watch
yarn test:coverage # use c8 for coverage
yarn switch:2 # switch packages and vue-demi to vue2
yarn switch:3 # switch packages and vue-demi to vue3
yarn release # release by choicing a version
yarn typecheck # run vue-tsc with noEmit
yarn changelog # generate changelog
yarn ci # ci
```

### Support Vue2 and Vue3

Examples: see `packages/components`

Do not use SFC(.vue) files, just use the function `h()` (encapsulated by h-demi) in `.ts` files, no jsx of course.

Don't forget to add `value,modelValue` to props options and add `input,update:modelValue` to emits options at the same time

## Build

```bash
yarn build
```

## Publish

Automatic publish to npm using `.github/workflows/publish.yml`, after running `yarn release` and push to origin.

If you want to publish manually, remove `publish.yml` and run

```bash
yarn release
yarn build
npm publish
```

## Deploy docs

Automatic deployment to gh-pages using `.github/workflows/deploy.yml`.

If you want to deploy manually, remove `deploy.yml` and run

```bash
yarn docs:build # packages/.vitepress/dist
```
