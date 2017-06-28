---
title: Webpack Plugin - 自動加上 Css prefix
date: 2017-02-18 16:48:33
tags:
    - JavaScript
    - Webpack    
categories:
    - Webpack
    - Plugin
---
### 1. 安裝 Plugin
{% codeblock install Plugins %}
npm i -D postcss-loader
{% endcodeblock %}

<!-- more -->

### 2. 設定 webpack.config.js
在 webpack.config.js 中加入 postcss-loader
{% codeblock webpack.config.js lang:javascript %}
module: {
    loaders: [
        {
            test: /\.css$/,
            loader: 'style-loader!css-loader!postcss-loader'
        },
        {
            test: /\.scss$/,
            loader: 'style-loader!css-loader!postcss-loader!sass-loader'
        }
        ...
    ]
}
{% endcodeblock %}

### 3. 建立並設定 postcss.config.js
{% codeblock postcss.config.js lang:javascript %}
module.exports = {
    plugins: [
        require('autoprefixer')({ /* ...options */ })
    ]
}
{% endcodeblock %}

### Remind
webpack.config.js 中 postcss-loader 設定的順序必須在 css-loader 之後、sass-loader 之前。

---

# 使用版本
{% codeblock package.json lang:javascript %}
"devDependencies": {  
    "autoprefixer": "^6.7.2",
    "postcss-loader": "^1.2.2"
}
{% endcodeblock %}

---

# Reference
[postcss-loader](https://github.com/postcss/postcss-loader)

