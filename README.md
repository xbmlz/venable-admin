# venable-admin

<p align='center'>
  <img src='https://raw.githubusercontent.com/xbmlz/venable-admin/main/public/logo.svg' alt='Hexo-theme-maple' width='120'/>
</p>

<h1 align="center">VEnable Admin</h1>


<p align="center">
πA modern vue admin. It is based on vue3.x and TypeScript. It's so fast!
</p>

<p align="center">
  <a href="https://xbmlz.github.io/venable-admin/">Live Demo</a>
</a>

<p align="center">
  π§Work in progressπ§
</a>

## Features

- β‘οΈ [Vite3](https://cn.vitejs.dev/), [Vue3](https://cn.vuejs.org/), [pnpm](https://pnpm.io/), [turbo](https://turbo.build/) - Fast and modern

- π¦ Components auto importing

- π [State Management via Pinia](https://pinia.vuejs.org/)

- π [Arco Design](https://arco.design/vue)

- π¨ [UnoCSS](https://github.com/antfu/unocss) - the instant on-demand atomic CSS engine

- π [Use icons from any icon sets with classes](https://github.com/antfu/unocss/tree/main/packages/preset-icons)

- π [Markdown Support](https://github.com/antfu/vite-plugin-vue-markdown)

- π₯ Use the [new `<script setup>` syntax](https://github.com/vuejs/rfcs/pull/227)

- π₯ [APIs auto importing](https://github.com/antfu/unplugin-auto-import) - use Composition API and others directly

- π¦Ύ TypeScript, of course


## Try it now!

> VEnable requires Node >=14.18

### Clone to local

If you prefer to do it manually with the cleaner git history

```bash
npx degit xbmlz/venable-admin my-app
cd my-app
pnpm i # If you don't have pnpm installed, run: npm install -g pnpm
```

## Usage

### Development

Just run and visit http://localhost:5173

```bash
pnpm turbo dev
```

### Build

To build the App, run

```bash
pnpm turbo build
```

And you will see the generated file in `dist` that ready to be served.
