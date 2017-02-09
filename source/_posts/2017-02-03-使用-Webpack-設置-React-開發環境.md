---
title: 使用 Webpack 設置 React 開發環境
date: 2017-02-03 15:03:20
tags:
    - React
    - Webpack    
categories:
    - Webpack
---
僅列出精簡的步驟，並另外補充其他教學中較少提及的相關知識。
流程與內容主要是參考這幾篇：
1. [React 開發環境設置與 Webpack 入門教學] [Ref 01]
2. [設定 React ES6 環境 採用 Webpack 和 Babel] [Ref 02]
1. [使用 webpack 模組化你的程式碼，讓人生更美好。系列] [Ref 03]
2. [React 和 Webpack 小书] [Ref 04]

[Ref 01]: https://github.com/kdchang/reactjs101/blob/master/Ch02/webpack-dev-enviroment.md
[Ref 02]: http://jason-wang.logdown.com/posts/605416
[Ref 03]: http://ithelp.ithome.com.tw/users/20069901/ironman/1074
[Ref 04]: https://hainuo.gitbooks.io/react-webpack-cookbook/content/index.html

<!-- more -->

### 1. 安裝 NodeJS 和 npm ( 目前版本的 Node 都會內建 npm )

### 2. 建立並進入開發目錄

### 3. 初始化模組配置文件 ( package.json )
{% codeblock %}
npm init
{% endcodeblock %}

### 4. 安裝 Webpack 與 Webpack Server
{% codeblock install webpack and server %}
npm i -D webpack
         webpack-dev-server
{% endcodeblock %}

{% codeblock oneline%}
npm i -D webpack webpack-dev-server
{% endcodeblock %}

### 5. 安裝 Babel
{% codeblock install babel %}
npm i -D babel-core
         babel-loader
         babel-preset-es2015
         babel-preset-react
{% endcodeblock %}

{% codeblock oneline%}
npm i -D babel-core babel-loader babel-preset-es2015 babel-preset-react
{% endcodeblock %}

### 6. 安裝 React
{% codeblock install react %}
npm i -S react
         react-dom
{% endcodeblock %}

{% codeblock oneline%}
npm i -S react react-dom
{% endcodeblock %}

### 7. 在開發目錄中建立 index.html
{% codeblock src/index.html lang:html %}
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>React Setup</title>
</head>
<body>
    <div id="root"></div>
    <script src="./dist/bundle.js"></script>
</body>
</html>
{% endcodeblock %}

### 8. 建立並進入 src 資料夾，並建立 index.js
在檔案中引入 React

{% codeblock src/index.js lang:javascript %}
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <h1>Hello, World!</h1>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
{% endcodeblock %}


### 9. 建立並設定 webpack.config.js
{% codeblock webpack.config.js lang:javascript%}
var path = require('path');

module.exports = {
    entry: path.resolve(__dirname, './src/index.js'),    
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /.js|jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    devServer: {
        inline: true,
        port: 8080,
    }
};
{% endcodeblock %}

### 10. 在 package.json 中設定指令別名
{% codeblock package.json lang:javascript %}
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "webpack-dev-server --devtool eval --progress --colors",
    "start-w": "webpack-dev-server --devtool eval --progress --colors --watch",
    "start-w-o": "webpack-dev-server --devtool eval --progress --colors --watch --open"    
  }
{% endcodeblock %}

### 11. 在 terminal 中執行指令檢測畫面
{% codeblock %}
  webpack
  npm run start-w-o
{% endcodeblock %}

---

# 使用版本
{% codeblock package.json lang:javascript %}
"devDependencies": {
  "babel-core": "^6.22.1",
  "babel-loader": "^6.2.10",
  "babel-preset-es2015": "^6.22.0",
  "babel-preset-react": "^6.22.0",
  "webpack": "^2.2.1",
  "webpack-dev-server": "^1.16.3"
},
"dependencies": {
  "react": "^15.4.2",
  "react-dom": "^15.4.2"
}
{% endcodeblock %}

---

# npm install 參數
當在安裝模組時，一般需先安裝模組本身，再將模組名稱與版本號手動寫進模組配置文件 ( package.json ) 中，npm 提供了一些參數，自動將安裝的模組及版本號存放進 package.json 文件中。日後若要在其他專案使用相同的模組，只要在有相同 package.json 文件的目錄下執行 `npm install` 指令即可。另 `install` 可簡寫為 `i`。

`-S`, `--save` 
- 將模組及版本號添加至 dependencies 中
- 產品依賴，配置產品發佈時會使用到的模組

`-D`, `--save-dev` 
- 將模組及版本號添加至 devDependencies 中
- 開發依賴，配置開發過程中會使用到的模組、測試框架等

其他參數參考以下連結：
1. [npm 安装参数中的 --save-dev 是什么意思] [ParaRef 01]
2. [npm-install] [ParaRef 02]
[ParaRef 01]: https://segmentfault.com/q/1010000000403629
[ParaRef 02]: https://docs.npmjs.com/cli/install