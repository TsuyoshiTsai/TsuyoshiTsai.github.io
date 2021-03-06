---
title: 'Git Command #01 初始化'
date: 2017-01-23 23:48:17
tags: 
    - Git
categories: 
    - Git
    - Command
---

# git init
- `git init`
    - 建立本地儲存庫
    - 會產生兩類文件
        1. 紀錄版本歷史的版本庫目錄
        2. 實際文件的拷貝 ( 工作目錄，Working Directory )
    - 預設的儲存庫會放在當前工作目錄的 **.git** 隱藏資料夾底下
- `git init --bare`
    - 建立共用儲存庫
    - 僅建立紀錄版本歷史的版本庫目錄
    - 該資料夾不能直接做開發用途，只能用來儲存 Git 的相關資訊
        
<!-- more -->

---

# Reference
- [git-init] [Ref 01]
- [git init 和 git init --bare 的区别？] [Ref 02]
- [GIT初始化--bare參數：使用git init & git init --bare的差異] [Ref 03]
- [What is the difference between “git init” and “git init --bare”?] [Ref 04]


[Ref 01]: http://blog.xuite.net/yctseng/notes/35377315-git-init
[Ref 02]: https://segmentfault.com/q/1010000004683286
[Ref 03]: http://diyland.biz/index.php?opt=detail&topic=12&id=16738
[Ref 04]: http://stackoverflow.com/questions/7861184/what-is-the-difference-between-git-init-and-git-init-bare