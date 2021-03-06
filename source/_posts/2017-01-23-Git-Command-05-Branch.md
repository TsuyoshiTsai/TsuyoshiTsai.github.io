---
title: 'Git Command #05 分支操作'
date: 2017-01-23 23:48:56
tags: 
    - Git
categories: 
    - Git
    - Command
---
# git branch
- `git branch`
    - 列出所有本地分支
    - 不包含遠端分支
    - 可查看目前所在分支


- `git branch [Branch]`
    - 建立分支，但維持在目前的分支


- `git branch [Branch] [Reflog]`
    - 將特定 Reflog 建立分支，維持在目前分支
    

- `git branch -d [Branch]`
    - 刪除該分支
    - 無法刪除當前的分支


- `git branch -a`
    - 列出所有分支
    - 包含遠端分支

<!-- more -->

---

# git checkout
- `git checkout [Branch]`
    - 切換分支


- `git checkout -b [Branch]`
    - 建立分支，並切換到該新分支
    
    
- `git checkout [Branch] [File]`
    - 還原 Branch 中的 File
    - 該指令可重置被刪除及被更名的目錄或檔案
