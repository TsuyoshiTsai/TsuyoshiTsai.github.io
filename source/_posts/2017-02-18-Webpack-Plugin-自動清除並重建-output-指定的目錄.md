---
title: Webpack Plugin - 自動清除並重建 output 指定的目錄
date: 2017-02-18 16:47:00
tags:
    - Webpack
    - Webpack Plugin
categories:
    - Webpack
---
### 1. 安裝 Plugin
{% codeblock install Plugins %}
npm i -D clean-webpack-plugin
{% endcodeblock %}

<!-- more -->

### 2. 設定 webpack.config.js
在 webpack.config.js 中加入 CleanWebpackPlugin 變數，並在 plugins 陣列中實體化該物件
{% codeblock webpack.config.js %}
var CleanWebpackPlugin = require('clean-webpack-plugin');
plugins: [
    new CleanWebpackPlugin(['dist'])
    ...
]
{% endcodeblock %}

### 3. 自動重建目錄
直接在 shell 執行 `webpack` 即可。

---

# 使用版本
{% codeblock package.json lang:javascript %}
"devDependencies": {  
    "clean-webpack-plugin": "^0.1.15"
}
{% endcodeblock %}

---

# Reference
[html-webpack-plugin] (https://github.com/johnagan/clean-webpack-plugin)

