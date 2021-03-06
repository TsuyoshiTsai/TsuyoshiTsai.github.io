---
title: 'Git Overview #04 儲存庫、工作目錄、物件、索引'
date: 2016-12-29 01:35:45
tags: 
    - Git
    - Learn Git in 30 days
categories: 
    - Git
    - Overview
---
# 概述
Git 儲存庫的運作，是將工作目錄裡的變化，透過更新索引的方式，將資料寫入成 Git 物件。 

<!-- more -->

---

# 儲存庫 ( Repository )
 - 記錄所有版本資訊的地方
 - 放在工作目錄的 **.git** 資料夾底下

---

# 工作目錄 ( Working Directory )
 - 開發專案的地方
 - Git 的相關操作會在此進行
 - 紀錄版本歷史的 Git 版本庫目錄

---

# 物件 ( Object )
### 功能
保存儲存庫中的所有檔案與版本記錄
 
### 特性 
 - 是不可變的 ( Immutable ) 的檔案類型
 - 透過內容產生 SHA1 雜湊值，依照該雜湊值命名
 - 所有物件皆會以 zlib 演算法進行壓縮
 - 每隔一段時間，Git 會自動將老舊的物件封裝，以改善檔案存取效率
 - 封裝時會利用差異壓縮演算法自動計算 Blob 之間的變化，並將差異存放在 **.git/objects/pack** 資料夾下，此做法可以節省硬碟空間的消耗
 - 存放在物件儲存區 ( Object Storage ) 中，預設位置在 **.git/objects** 資料夾底下
 

### 類型
 - **Tree**
    - 記錄特定資料夾下的檔案，及該檔案對應的 Blob 物件檔名
    - 透過提交版本，產生 Tree 物件
    - 可多層次包含其他 Tree
    - 在特定版本下某個資料夾的快照 ( Snapshot )
 - **Blob**
    - 即為原本的檔案內容
    - 透過將檔案加入索引，產生 Blob 物件
    - 將原本的「檔案內容」進行 SHA1 雜湊運算產生 HashId，並以該 HashId 為檔名
 - **Commit**
    - 一個物件代表 Git 的一次提交 ( 版本 )
    - 透過提交版本，產生 Commit 物件
    - 記錄版本的相關訊息，如 Tree 物件、提交時間、版本說明等
    - 除第一個 Commit 物件外，皆會記錄上一層的 Commit 物件名稱
 - **Tag**
    - 用來關聯特定的 Tree、Blob、Commit 物件
    - 常被使用於替特定版本的 Commit 物件標示易懂的名稱

---

# 索引 ( Index、Stage )
### 別名
索引在國外文章中，有許多別名，以下指的皆是索引：
 - Index
 - Cache
 - Directory Cache
 - Current Directory Cache
 - Staging Area
 - Staged Files


### 功能
保存要進儲存庫之前的工作目錄狀態；記錄要被提交到下一個版本的檔案。若想提交版本進儲存庫，需先更新索引。

### 特性
 - 是可變的 ( Mutable ) 的檔案類型
 - 是介於物件儲存區 ( Object Storage ) 與工作目錄 ( Working Directory ) 之間的媒介

 
### 狀態
 - **Untracked**
    未追蹤，代表尚未被加入 Git 儲存庫的檔案

 - **Unmodified**
    未修改，代表檔案第一次被加入，或是檔案內容與 HEAD 內容一致

 - **Modified**
    已修改，代表檔案已被編輯，或是檔案內容與 HEAD 內容不一致
    
 - **Staged**
    已被加入索引，代表執行 Commit 時會將該檔案加進 Git 儲存庫
