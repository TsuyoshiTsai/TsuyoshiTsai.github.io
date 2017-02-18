---
title: Webpack Plugin - 分離 html 文件中的樣式
date: 2017-02-18 16:47:38
tags:
    - Webpack
    - Webpack Plugin
categories:
    - Webpack
---
### 1. 安裝 Plugin
{% codeblock install Plugins %}
npm i -D extract-text-webpack-plugin
{% endcodeblock %}

<!-- more -->

### 2. 設定 webpack.config.js
在 webpack.config.js 中加入 ExtractTextPlugin 變數，並在 plugins 陣列中實體化該物件
{% codeblock webpack.config.js %}
var ExtractTextPlugin = require('extract-text-webpack-plugin');
plugins: [
    new CleanWebpackPlugin({ filename: "[name].css", allChunks: true })
    ...
]
{% endcodeblock %}

在 module > loaders 陣列中調整樣式相關檔案的物件，如：
{% codeblock webpack.config.js %}
module: {
    loaders: [        
        {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
        }
        ...
    ]
}
{% endcodeblock %}

---

# 使用版本
{% codeblock package.json lang:javascript %}
"devDependencies": {  
    "extract-text-webpack-plugin": "^2.0.0-rc.3"
}
{% endcodeblock %}