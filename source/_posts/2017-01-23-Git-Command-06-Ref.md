---
title: 'Git Command #06 參照操作'
date: 2017-01-23 23:49:02
tags: 
    - Git
categories: 
    - Git
    - Command
---
# git update-ref
 - `git update-ref [RefName] [Object]`
    - 以 RefName 建立 Object 的**一般參照**
    - 建議使用 refs/[RefName]

<!-- more -->

 - `git update-ref -d [RefName]`
    - 刪除 RefName 一般參照

---

# git rev-parse
 - `git rev-parse [RefName or RelativeName]`
    - 查詢 **參照名稱** 或 **相對名稱** 的絕對名稱
