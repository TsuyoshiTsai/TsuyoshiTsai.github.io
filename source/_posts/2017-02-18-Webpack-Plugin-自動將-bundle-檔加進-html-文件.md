---
title: Webpack Plugin - 自動將 bundle 檔加進 html 文件
date: 2017-02-18 16:45:17
tags:
    - Webpack
    - Webpack Plugin
categories:
    - Webpack
---
### 1. 安裝 Plugin
{% codeblock install Plugins %}
npm i -D html-webpack-plugin
{% endcodeblock %}

<!-- more -->

### 2. 設定 webpack.config.js
在 webpack.config.js 中加入 HtmlWebpackPlugin 變數，並在 plugins 陣列中實體化該物件
{% codeblock webpack.config.js lang:javascript %}
var HtmlWebpackPlugin = require('html-webpack-plugin');
plugins: [
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src/index.html'),
        filename: 'index.html',
        inject: true
    })
    ...
]
{% endcodeblock %}

### 3. 自動產生 html 文件
直接在 shell 執行 `webpack` 即可。

### Remind
若有設定 publicPath，自動產生的 `<script>` 的 src 會指向該位址。

---

# 使用版本
{% codeblock package.json lang:javascript %}
"devDependencies": {  
    "html-webpack-plugin": "^2.28.0"
}
{% endcodeblock %}

---

# Reference
[webpack 插件： html-webpack-plugin] (http://www.cnblogs.com/haogj/p/5160821.html)

