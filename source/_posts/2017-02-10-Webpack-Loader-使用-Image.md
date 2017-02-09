---
title: Webpack Loader - 使用 Image
date: 2017-02-10 00:06:47
tags:
    - Webpack
    - Loader
categories:
    - Webpack
---
### 1. 安裝 Loader
{% codeblock install Loaders %}
npm i -D url-loader
         file-loader
{% endcodeblock %}

{% codeblock oneline %}
npm i -D url-loader file-loader
{% endcodeblock %}

<!-- more -->

### 2. 設定 webpack.config.js
在 webpack.config.js 的 output 中加入 publicPath，並在 module > loaders 陣列中新增一個物件
{% codeblock webpack.config.js %}
output: {
    publicPath: './dist/',
    ...
},
module: {
    loaders: [
        {
            test: /\.(jpe?g|png|gif|svg)$/i,
            loader: 'url-loader?limit=8192'
        }
        ...
    ]
}
{% endcodeblock %}

### 3. 使用 image
在 css 檔中使用 `url("FileName.ext")` 即可。
使用這兩個 loader 之前，在 css 中引用 `url()` 時會報錯。

### Remind
output 中的 path 是放置打包檔的目錄，需另外設定 publicPath 讓 file-loader 重新指定檔案路徑。
url-loader 是對 file-loader 的封裝，url-loader 將判斷檔案大小，如果小於 limit 的範圍，會轉成 base-64 引用檔案；如果超過 limit 的範圍，會直接轉用 file-loader 處理檔案。
file-lodaer 會將 Css 中的 `url("FileName.jpg")` 轉成 `require("./FileName.jpg")`。

---

# 使用版本
{% codeblock package.json lang:javascript %}
"devDependencies": {  
  "file-loader": "^0.10.0",
  "url-loader": "^0.5.7"
}
{% endcodeblock %}
