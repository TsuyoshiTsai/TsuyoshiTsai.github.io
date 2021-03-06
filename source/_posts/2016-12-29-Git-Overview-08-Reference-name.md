---
title: 'Git Overview #08 參照名稱'
date: 2016-12-29 01:36:29
tags: 
    - Git
    - Learn Git in 30 days
categories: 
    - Git
    - Overview
---
# 參照名稱 ( Ref )
### 功能
 - 參照名稱是物件的指標
 - Git 引擎或由使用者自行定義的名稱，用來指向特定 Git 物件
 - 可將其想成 Git 物件絕對名稱的別名 ( Alias )

<!-- more -->

### 特性
 - 參照名稱通常指向 Commit 物件，但也可以指向其他 Git 物件
 - 參照名稱只是檔案，且放在 **.git/refs** 資料夾下
    - 本地分支：**.git/refs/heads**
    - 遠端分支：**.git/refs/remotes**
    - 標　　籤：**.git/refs/tags**
 - 當輸入 **參照簡稱** 時，Git 會依照以下順序搜尋參照名稱，找到後立即回傳該檔案內容的 **物件絕對名稱**
    - **.git/<參照簡稱>**
    - **.git/refs/<參照簡稱>**
    - **.git/refs/tags/<參照簡稱;標籤名稱>**
    - **.git/refs/heads/<參照簡稱;本地分支名稱>**
    - **.git/refs/remotes/<參照簡稱>**
    - **.git/refs/remotes/<參照簡稱;遠端分支名稱>**

### 例子
 - HEAD
    - 指向當前工作目錄中分支的 **最新版**
 - BranchName
    - 分支名稱，對應到 Git 物件儲存庫中的 Commit 物件，預設指向分支的最新版本
 - TagName
    - 標籤名稱


---


# 符號參照名稱 ( Symref ) 
### 特性
 - 指向另一個一般參照，內容以 **ref:** 開頭

### 例子
 - HEAD
    - 指向當前工作目錄中分支的 **最新版**
    - 在當前分支執行 `git commit` 時，該符號參照也會一併更新成最新版本
 - ORIG_HEAD
    - HEAD 的 **前一版**
    - 常用來復原上一次的版本變更
 - FETCH_HEAD
    - 遠端儲存庫每個分支的 **最新版 ( HEAD )** 的絕對名稱
 - MERGE_HEAD
    - 合併來源的 Commit 物件的絕對名稱

---

# Reference
{% post_link Git-Command-06-參照操作 "Git Command #06 參照操作" %}