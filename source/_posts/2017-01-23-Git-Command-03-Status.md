---
title: 'Git Command #03 狀態查詢'
date: 2017-01-23 23:48:45
tags: 
    - Git
categories: 
    - Git
    - Command
---
# git status
- `git status`
    - 列出當前 **工作目錄** 的詳細狀態
    - 可查詢 **目前最新版** 與 **索引** 兩者之間的差異，觀察哪些檔案會儲存到下一個 Commit 物件 ( 下一個版本 ) 中
- `git status -s`
    - 可查詢較精簡的版本

<!-- more -->

---

# git cat-file
 - `git cat-file -p [Object]`
    - 查詢 **指定物件** 的內容

 - `git cat-file -t [Object]`
    - 查詢 **指定物件** 的類型

---

# git ls-files
 - `git ls-files`
    - 列出目前在 **索引** 中的所有檔案
- `git ls-files -u`
    - 列出目前 **Unmerged** 的檔案

---

# git diff
- `git diff`
    - 比對 **工作目錄** 與 **索引** 之間的差異
    - 可在執行 `git add .` 之前，透過該指令查看檔案變更的差異
- `git diff [Commit]`
    - 比對 **工作目錄** 與 **指定版本** 之間的差異
    - 常用 `git diff HEAD`，用來比對 **工作目錄** 與 **當前分支最新版** 的差異，該方法不會比對索引狀態
- `git diff --cached [Commit]`
    - 比對 **當前索引狀態** 與 **指定版本** 之間的差異
    - 常用 `git diff --cached HEAD`，用來比對 **當前索引狀態** 與 **當前分支最新版** 的差異，該方法不會比對工作目錄
- `git diff [Commit] [Commit]`
    - 比對 **兩個版本** 之間的差異
    - 常用 `git diff HEAD^ HEAD`，用來比對 **前一版** 與 **最新版** 之間的差異

---

# git log
 - `git log`
    - 列出版本的歷史紀錄
    - `git log [-Number]`
        - 限制版本歷史紀錄的輸出筆數
    - `git log --pretty=oneline`
        - 列出較精簡的版本歷史紀錄
        - `git log --pretty=oneline --abbrev-commit`
            - 僅輸出部分的物件絕對名稱

---

# git show
- `git show [Commit]`
    - 查詢該版本的變更紀錄
- `git show-ref`
    - 列出所有參照名稱 ( 一般參照、符號參照 )
    - 僅顯示 **.git/refs** 目錄下的參照


---

# git fsck
 - `git fsck`
    - 檢查 Git 的檔案系統是否完整
