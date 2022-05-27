# DOCX loader for unplugin

[![NPM version](https://img.shields.io/npm/v/unplugin-docx?color=a1b858&label=)](https://www.npmjs.com/package/unplugin-docx)

简体中文 | [English](./README.md)

通过[`mammoth`](https://github.com/mwilliamson/mammoth.js)，将如引入的`docx`文件当做纯`html`字符串

## 动机

开发软件中，经常需要添加一些隐私、用户协议的内容到页面中，而法务提供的往往是word文档。这时候就需要我们先将其转化成`html`，然后再写入模板中。因此编写了该插件自动做转化这个过程。

（PS: 比较适合纯文本的word）

## 安装

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

实例: [`playground/`](./playground/)

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

> 该模块可以同时作用于 Nuxt 2， [Nuxt Vite](https://github.com/nuxt/vite)

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

## 配置

查看[mammoth.convertToHtml's options](https://github.com/mwilliamson/mammoth.js#mammothconverttohtmlinput-options)了解更改配置相关内容

## 使用

我们可以直接引入`docx`文件，将其当做一个纯的`htm`l字符串

```ts
import html from './demo.docx'

document.getElementById('app')!.innerHTML = html
```

> :warning: 
>
> 如果你使用的是`TypeScript`, 你还需要做如下声明：

```ts
declare module '*.docx' {
  const content: string
  export default content
}
```

## 致谢

- [Mammoth](https://github.com/mwilliamson/mammoth.js)
