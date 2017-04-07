---
title: JavaScript 中的約整誤差 ( Rounding Errors )
date: 2017-04-07 16:56:20
tags:
    - JavaScript
    - Rounding Errors
categories:
    - JavaScript
    - Number
---

JavaScript 中不存在整數，因其數字儲存格式為 64 位元的雙精度浮點數。當我們輸入數字時，通常使用的是十進位的浮點數 ( decimal floating-point numbers )，但在 JavaScript 引擎內部這些數字被表示為二進位的浮點數 ( binary floating-point numbers )。

我們可以透過觀察十進位浮點數及二進位浮點數能表示什麼樣子的小數，瞭解這個情況是如何發生的：
{% codeblock lang:javascript %}
> 0.1 + 0.2
0.30000000000000004
{% endcodeblock %}

<!-- more -->

在十進位系統中，所有小數都是尾數 m 除以 10 的次方的結果：
$${m \over 10^e}$$

二進位系統則是尾數 m 除以 2 的次方的結果：
$${m \over 2^e}$$

因此，如果要正確地表示十進位的數字，該數字也必須能適切地被轉換成二進位的數字 ( 分母裡面只有 2 )，以下是能同時以十進位與二進位表示的數字：

${0.5\_{dec} = {5 \over 10} = {1 \over 2} = 0.1\_{bin}}$

${0.75\_{dec} = {75 \over 100} = {3 \over 4} = 0.11\_{bin}}$

${0.125\_{dec} = {125 \over 1000} = {1 \over 8} = 0.001\_{bin}}$

如果分母中有除了 2 以外的數字，則無法精確地表示該數字，如：

${0.1\_{dec} = {1 \over 10} = {1 \over 2\times5}}$

${0.2\_{dec} = {2 \over 10} = {1 \over 5}}$


一般我們不會發現 0.1 是不精確的數字，但若乘以夠大的 10 的次方，其不精確之處就會顯現出來：
{% codeblock lang:javascript %}
> 0.1 * Math.pow(10, 24)
1.0000000000000001e+23

//eX 為「乘以 10 的 X 次方」的縮寫，如 5e2 為 500、5e-2 為 0.05。
{% endcodeblock %}


如果將兩個無法精確表示的數字相加，其結果的不精確之處則顯而易見，如一開始的例子：
{% codeblock lang:javascript %}
> 0.1 + 0.2
0.30000000000000004
{% endcodeblock %}

另外一個例子：
{% codeblock lang:javascript %}
> 0.1 + 1 - 1
0.10000000000000009
{% endcodeblock %}

因為 JavaScript 在運算數字的時候，會先將 0.1、0.2 這些十進位的浮點數轉換為二進位的浮點數，若以科學的方式表示：
<small>${0.1\_{bin} \approx 1.\underbrace{10011001\cdots10011010}\_{52}\times2^{-4}}$</small>

<small>${0.2\_{bin} \approx 1.\underbrace{10011001\cdots10011010}\_{52}\times2^{-3}}$</small>

將兩個數字相加後，得到的數字為：
<small>${10.\underbrace{01100110\cdots01100111}\_{52}\times2^{-3} = 1.\underbrace{00110011\cdots001100111}\_{53}\times2^{-2}}$</small>

由於約整後的尾數數量 ( 53 ) 已經超過其有效位數 ( 52 )，JS 會將其無條件進位：
<small>${1.\underbrace{00110011\cdots001100110100}\_{52}\times2^{-2}}$</small>

最後，JS 以二進位的方式儲存運算結果的值：
<small>${0 01111111101 0011001100110011001100110011001100110011001100110100}$</small>

但該值被轉換成供我們閱讀的十進位時，則為：
<small>${0.3000000000000000444089209850062616169452667236328125}$</small>

取其前 17 個小數位 ( 找不到來源，如有任何取位數的緣由參考請告知 )：
<small>${0.30000000000000004}$</small>

為什麼 0.1 + 0.2 的值不等於 0.3，因為 0.3 儲存的二進位數字被轉換成十進位時為：
<small>${0.299999999999999988897769753748434595763683319091796875}$</small>

詳請參閱 [The Internal Representation of Numbers] [iRef 01] 與 [Floating point according to the IEEE754] [iRef 02]。

[iRef 01]: http://speakingjs.com/es5/ch11.html#number_representation "Speaking JavaScript - The Internal Representation of Numbers"
[iRef 02]: https://medium.com/the-node-js-collection/javascripts-number-type-8d59199db1b6#7025 "JavaScript’s Number type in details - Floating point according to the IEEE754"

---

# 最佳實務

由於約整誤差的關係，不應該直接比較非整數，而是考量約整誤差，取一個上界 ( upper bound )，這樣的上界被稱作 [machine epsilon](http://en.wikipedia.org/wiki/Machine_epsilon "machine epsilon")。雙精度的標準 epsilon 值為 ${2^{-53}}$，我們可以自訂一個函式確保浮點數的精確性：
{% codeblock lang:javascript %}
//書上提供的方法
var EPSILON = Math.pow(2, -53);
function epsEqu(x, y) {
    return Math.abs(x - y) < EPSILON;
}

//經改良後的方法
if (!Math.hasOwnProperty('epsEqu')){
    Math.epsEqu = function(x, y) {
        return this.abs(x - y) < this.pow(2, -53);
    }
}
{% endcodeblock %}

測試：
{% codeblock lang:javascript %}
> 0.1 + 0.2 === 0.3
false

> Math.epsEqu(0.1 + 0.2, 0.3)
true
{% endcodeblock %}

---

# Reference
[Speaking JavaScript - Handling Rounding Errors] [Ref 01]
[JavaScript’s Number type in details] [Ref 02]

[Ref 01]: http://speakingjs.com/es5/ch11.html#rounding_errors "Speaking JavaScript - Handling Rounding Errors"
[Ref 02]: https://medium.com/the-node-js-collection/javascripts-number-type-8d59199db1b6 "JavaScript’s Number type in details"

<script type="text/x-mathjax-config">MathJax.Hub.Config({tex2jax: {inlineMath: [['$','$'], ['\\(','\\)']]}});</script>