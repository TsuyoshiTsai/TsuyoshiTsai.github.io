---
title: 'Git Command #07 標籤操作'
date: 2017-01-23 23:49:08
tags: 
    - Git
categories: 
    - Git
    - Command
---
# git tag
- `git tag`
    - 列出所有標籤
    - 包括輕量標籤與標示標籤，無法看出標籤類型


- `git tag [TagName]`
    - 建立輕量標籤


- `git tag [TagName] -a -m "LogMessage"`
    - 建立標示標籤，並加上說明
    - 與 `git commit` 一樣，所有標示標籤都必須加上說明
    - 該指令預設會將當前的 HEAD 版本建立成 Tag 物件


- `git tag [TagName] [Object]`
    - 將特定物件建立輕量標籤
    - 在指令後面加上 `-a -m "LogMessage"` 即可改為建立標示標籤


- `git tag [TagName] -d`
    - 刪除特定標籤

<!-- more -->

---

# git cat-file
 - `git cat-file -p [TagName]`
    - 查看標籤的內容

    
 - `git cat-file -t [TagName]`
    - 查看標籤的物件類型

---

# Reference
{% post_link Git-Command-04-物件操作 "Git Command #04 物件操作" %}