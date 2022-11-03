---
sidebarDepth: 3
sidebar: auto
---

# 配置

## 基本配置

### base

- 类型: `string`
- 默认值: `/`

部署站点的基础路径，如果你想让你的网站部署到一个子路径下，你将需要设置它。如 GitHub pages，如果你想将你的网站部署到 `https://foo.github.io/bar/`，那么 `base` 应该被设置成 `"/bar/"`，它的值应当总是以斜杠开始，并以斜杠结束。

`base` 将会作为前缀自动地插入到所有以 `/` 开始的其他选项的链接中，所以你只需要指定一次。

**参考:**

- [Base URL](../guide/assets.md#基础路径)
- [部署指南 > GitHub Pages](../guide/deploy.md#github-pages)

### title

- 类型: `string`
- 默认值: `undefined`

网站的标题，它将会被用作所有页面标题的前缀，同时，默认主题下，它将显示在导航栏（navbar）上。

### description

- 类型: `string`
- 默认值: `undefined`

网站的描述，它将会以 `<meta>` 标签渲染到当前页面的 HTML 中。

### head

- 类型: `Array`
- 默认值: `[]`

额外的需要被注入到当前页面的 HTML `<head>` 中的标签，每个标签都可以以 `[tagName, { attrName: attrValue }, innerHTML?]` 的格式指定，举个例子，增加一个自定义的 favicon：

``` js
module.exports = {
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ]
}
```

### host

- 类型: `string`
- 默认值: `'0.0.0.0'`

指定用于 dev server 的主机名。

### port

- 类型: `number`
- 默认值: `8080`

指定 dev server 的端口。

### temp

- Type: `string`
- Default: `/path/to/@vuepress/core/.temp`

指定客户端文件的临时目录。

### dest

- 类型: `string`
- 默认值: `.vuepress/dist`

指定 `vuepress build` 的输出目录。如果传入的是相对路径，则会基于 `process.cwd()` 进行解析。

### locales

- 类型: `{ [path: string]: Object }`
- 默认值: `undefined`

提供多语言支持的语言配置。具体细节请查看 [多语言支持](../guide/i18n.md)。

### shouldPrefetch

- 类型: `Function`
- 默认值: `() => true`

一个函数，用来控制对于哪些文件，是需要生成 `<link rel="prefetch">` 资源提示的。请参考 [shouldPrefetch](https://ssr.vuejs.org/zh/api/#shouldprefetch)。

### cache

- 类型: `boolean|string`
- 默认值: `true`

VuePress 默认使用了 [cache-loader](https://github.com/webpack-contrib/cache-loader)  来大大地加快 webpack 的编译速度。

此选项可以用于指定 cache 的路径，同时也可以通过设置为 `false` 来在每次构建之前删除 cache。

::: tip
这个选项也可以通过命令行来使用：
```bash
vuepress dev docs --cache .cache # 设置 cache 路径
vuepress dev docs --no-cache     # 在每次构建前删除 cache
```
:::

### extraWatchFiles

- 类型: `Array`
- 默认值: `[]`

指定额外的需要被监听的文件。

你可以监听任何想监听的文件，文件变动将会触发 `vuepress` 重新构建，并实时更新。

``` js
module.exports = {
  extraWatchFiles: [
    '.vuepress/foo.js', // 使用相对路径
    '/path/to/bar.js'   // 使用绝对路径
  ]
}
```

### patterns

- Type: `Array`
- Default: `['**/*.md', '**/*.vue']`

Specify which pattern of files you want to be resolved.

## Styling

### palette.styl

如果要对[默认预设](https://github.com/vuejs/vuepress/blob/master/packages/@vuepress/core/lib/client/style/config.styl)的样式进行简单的替换，或者定义一些变量供以后使用，你可以创建一个 `.vuepress/styles/palette.styl` 文件。

你可以调整的一些变量如下:

``` stylus
// 颜色
$accentColor = #3eaf7c
$textColor = #2c3e50
$borderColor = #eaecef
$codeBgColor = #282c34
$arrowBgColor = #ccc
$badgeTipColor = #42b983
$badgeWarningColor = darken(#ffe564, 35%)
$badgeErrorColor = #DA5961

// 布局
$navbarHeight = 3.6rem
$sidebarWidth = 20rem
$contentWidth = 740px
$homePageWidth = 960px

// 响应式变化点
$MQNarrow = 959px
$MQMobile = 719px
$MQMobileNarrow = 419px
```

::: danger
你应该**只在**这个文件中定义变量。因为 `palette.styl` 将在根的 stylus 配置文件的末尾引入，作为配置，它将被多个文件使用，所以一旦你在这里写了样式，你的样式就会被多次复制。
:::

### index.styl

VuePress 提供了一种添加额外样式的简便方法。你可以创建一个 `.vuepress/styles/index.styl` 文件。这是一个 [Stylus](http://stylus-lang.com/) 文件，但你也可以使用正常的 CSS 语法。

```stylus
.content {
  font-size 30px
}
```

::: warning
由于背后的行为，不论是在 `palette.styl` 或是 `index.styl` ，都不能透过 [@import / @require](https://stylus-lang.com/docs/import.html) 從**相对路径**引用一般的 `.css` 样式表。
:::

::: details 那如果你非得要 import / require 一般的 `.css` 样式表呢？

使用**绝对路径**。

1. 从 npm package 引用档案：

``` stylus
@require '~my-css-package/style.css'
```

2. 引用本地档案：

因为已经有 [alias](../plugin/option-api.html#alias) 这个选项，使用 webpack 别名会是最简单的方式，举例如下：

```js
// config.js
 alias: {
    'styles': path.resolve(__dirname, './styles')
  }
```

