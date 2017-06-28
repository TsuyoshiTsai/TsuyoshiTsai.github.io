---
title: 'Git Command #08 暫存工作目錄'
date: 2017-01-24 00:09:51
tags: 
    - Git
categories: 
    - Git
    - Command
---
# git stash
- `git stash (save)`
    - 建立暫存版
    - 僅包含已追蹤 ( tracked ) 的檔案
    - `git stash (save) -u`
        - 包含所有未追蹤 ( Untracked ) 及已追蹤 ( Tracked ) 的檔案
    - `git stash save -u "LogMessage"`
        - 該指令可以在建立暫存版的同時輸入版本說明

<!-- more -->

 - `git stash pop`
    - 將暫存版合併回現在的工作目錄
    - 預設會取回最近的一筆暫存版 ( stash@{0} )
    - 該指令執行完後 **會** 將被取回的 stash 分支刪除
    

 - `git stash apply`
    - 將暫存版合併回現在的工作目錄
    - 該指令執行完後 **不會** 將被取回的 stash 分支刪除


- `git stash pop/apply "Stash"`
    - 取回特定的暫存版
    - 如 `git stash pop/apply "stash@{1}"` 可取回 stash@{1} 的暫存版


 - `git stash list`
    - 列出目前的 stash 分支清單


 - `git stash drop "Stash"`
    - 刪除特定的暫存版


 - `git stash clear`
    - 刪除所有暫存版
