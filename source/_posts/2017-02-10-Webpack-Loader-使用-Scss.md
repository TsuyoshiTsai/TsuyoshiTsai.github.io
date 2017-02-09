---
title: Webpack Loader - 使用 Scss
date: 2017-02-10 00:00:55
tags:
    - Webpack
    - Webpack Loader
categories:
    - Webpack
---
### 1. 安裝 Loader
{% codeblock install Loaders %}
npm i -D node-sass
         sass-loader
{% endcodeblock %}

{% codeblock oneline %}
npm i -D node-sass sass-loader
{% endcodeblock %}

<!-- more -->

### 2. 設定 webpack.config.js
在 webpack.config.js 的 module > loaders 陣列中新增一個物件
{% codeblock webpack.config.js %}
module: {
    loaders: [
        {
            test: /\.scss$/,
            loader: 'style-loader!css-loader!sass-loader'
        }
        ...
    ]
}
{% endcodeblock %}

### 3. 使用 scss
在欲使用 scss 的 js 檔中加入
{% codeblock %}
import './[FileName].scss';
{% endcodeblock %}

### Remind
node-sass 為安裝 sass-loader 的必要套件。
需搭配 {% post_link Webpack Loader - 使用 Css "style-loader 與 css-loader" %} 一併使用。

---

# 使用版本
{% codeblock package.json lang:javascript %}
"devDependencies": {  
  "css-loader": "^0.26.1",
  "style-loader": "^0.13.1",
  "node-sass": "^4.5.0",
  "sass-loader": "^4.1.1"
}
{% endcodeblock %}