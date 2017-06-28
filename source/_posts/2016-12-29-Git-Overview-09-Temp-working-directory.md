---
title: 'Git Overview #09 暫存工作目錄'
date: 2016-12-29 01:36:35
tags: 
    - Git
    - Learn Git in 30 days
categories: 
    - Git
    - Overview
---
# 概述
工作目錄是目前進度的狀態；索引則是希望建立版本的狀態。當開發途中被要求臨時修改某項功能，但不希望動到未完成的檔案時，可以將工作目錄中的變更狀態使用 `git stash` 指令建立 stash 版本，或稱之為暫存版。

<!-- more -->

---

# 功能
- 解決開發過程中插單的問題
- 將目前的變更狀態暫存起來，先去解決其他更緊急的問題

---

# 工作目錄狀態
 - 新增檔案 ( 未列入追蹤 ) ( Untracked files )
 - 新增檔案 ( 已加入索引 ) ( Tracked/Staged files )
 - 修改檔案 ( 未加入索引 ) ( Tracked/Unstaged files )
 - 修改檔案 ( 已加入索引 ) ( Tracked/Staged files )
 - 刪除檔案 ( 未加入索引 ) ( Tracked/Unstaged files )
 - 刪除檔案 ( 已加入索引 ) ( Tracked/Staged files )
 
---

# 運作
建立暫存版的過程中， Git  會自動建立兩個分支、並個別建立版本，再將這兩個分支與 HEAD 版本合併成 stash 版本，以下為三個版本的內容：
 1. 工作目錄的 HEAD 版本
 2. 工作目錄中索引的內容
 3. 工作目錄中未追蹤的內容

建立暫存版後，Git  會自動產生暫存版的一般參照，並將變更的檔案還原成與 HEAD 的狀態相同，新增的檔案被刪除、修改的檔案被還原、刪除的檔案被加回。簡言之，就是使工作目錄的狀態與 HEAD 同步。
 
---

# Reference
{% post_link Git-Command-08-暫存工作目錄 "Git Command #08 暫存工作目錄" %}