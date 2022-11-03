# 使用插件

你可以通过在 `.vuepress/config.js` 中做一些配置来使用插件：

``` js
module.exports = {
  plugins: [
    require('./my-plugin.js')
  ]
}
```

## 使用来自依赖的插件

一个插件可以在以 `vuepress-plugin-xxx` 的形式发布到 npm，你可以这样使用它：

``` js
module.exports = {
  plugins: [ 'vuepress-plugin-xx' ]
}
```