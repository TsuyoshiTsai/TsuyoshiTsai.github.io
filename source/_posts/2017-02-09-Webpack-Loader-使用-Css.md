---
title: Webpack Loader - 使用 Css
date: 2017-02-09 23:49:37
tags:
    - Webpack
    - Webpack Loader
categories:
    - Webpack
---
### 1. 安裝 Loader
{% codeblock install Loaders %}
npm i -D style-loader
         css-loader
{% endcodeblock %}

{% codeblock oneline %}
npm i -D style-loader css-loader
{% endcodeblock %}

<!-- more -->

### 2. 設定 webpack.config.js
在 webpack.config.js 的 module > loaders 陣列中新增一個物件
{% codeblock webpack.config.js %}
module: {    
    loaders: [
        {
            test: /\.css$/,
            loader: 'style-loader!css-loader'        
        }
        ...
    ]
}
{% endcodeblock %}

### 3. 使用 css
在欲使用 css 的 js 檔中加入
{% codeblock %}
import './[FileName].css';
{% endcodeblock %}

---

# 使用版本
{% codeblock package.json lang:javascript %}
"devDependencies": {  
  "css-loader": "^0.26.1",
  "style-loader": "^0.13.1"
}
{% endcodeblock %}