---
title: 'Git Overview #14 忽略清單'
date: 2017-01-09 00:52:42
tags: 
    - Git
    - Learn Git in 30 days
categories: 
    - Git
    - Overview
---
# 概述
有時不希望將工具產生的暫存或快取檔案被加入版本控管，為了排除這些檔案，可以使用忽略清單 ( .gitignore ) 的機制。

<!-- more -->

---

# 特性
- 可列出檔名或路徑
- 列在清單內的檔名或路徑不會出現在 `git status` 的結果中，也不會在 `git add` 時加入索引
- 僅限 **未追蹤 ( Untracked )** 的檔案會被忽略，**已追蹤 ( Tracked )** 的檔案不受忽略清單控制