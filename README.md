# DOCX loader for unplugin

[![NPM version](https://img.shields.io/npm/v/unplugin-docx?color=a1b858&label=)](https://www.npmjs.com/package/unplugin-docx)

English | [简体中文](./README.zh-CN.md)

use [`mammoth`](https://github.com/mwilliamson/mammoth.js) convert docx to html

## Motivation

In developing software, it is often necessary to add some privacy and user agreement contents to the page, and the legal affairs are often provided as word documents. This time we need to convert it to `html` first, and then write it into the template. So the plugin is written to automatically do the conversion process.

(PS: more suitable for plain text word)

## Install

```bash
npm i unplugin-docx
```

<details>
<summary>Vite</summary><br>

```ts
// vite.config.ts
import Docx from 'unplugin-docx/vite'

export default defineConfig({
  plugins: [
    Docx({ /* options */ }),
  ],
})
```

Example: [`playground/`](./playground/)

<br></details>

<details>
<summary>Rollup</summary><br>

```ts
// rollup.config.js
import Docx from 'unplugin-docx/rollup'

export default {
  plugins: [
    Docx({ /* options */ }),
  ],
}
```

<br></details>


<details>
<summary>Webpack</summary><br>

```ts
// webpack.config.js
module.exports = {
  /* ... */
  plugins: [
    require('unplugin-docx/webpack')({ /* options */ })
  ]
}
```

<br></details>

<details>
<summary>Nuxt</summary><br>

```ts
// nuxt.config.js
export default {
  buildModules: [
    ['unplugin-docx/nuxt', { /* options */ }],
  ],
}
```

> This module works for both Nuxt 2 and [Nuxt Vite](https://github.com/nuxt/vite)

<br></details>

<details>
<summary>Vue CLI</summary><br>

```ts
// vue.config.js
module.exports = {
  configureWebpack: {
    plugins: [
      require('unplugin-docx/webpack')({ /* options */ }),
    ],
  },
}
```

<br></details>

## Configuration

Pefer to the [mammoth.convertToHtml's options](https://github.com/mwilliamson/mammoth.js#mammothconverttohtmlinput-options) for detail.

## Usage

we can import `docx` as plain HTML

```ts
import html from './demo.docx'

document.getElementById('app')!.innerHTML = html
```

> :warning: 
>
> if you use `TypeScript`, you should declear `*.docx` module like below

```ts
declare module '*.docx' {
  const content: string
  export default content
}
```

## Thanks

- [Mammoth](https://github.com/mwilliamson/mammoth.js)
