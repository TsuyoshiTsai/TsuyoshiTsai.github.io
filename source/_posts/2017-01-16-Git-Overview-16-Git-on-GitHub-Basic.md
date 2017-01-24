---
title: 'Git Overview #16 Git on GitHub - Basic'
date: 2017-01-16 00:40:24
tags: 
- Git
- Git Overview
- Learn-Git-in-30-days
categories:
- Git
---
### 概述
使用版控軟體，最主要就是想透過遠端與其他人合作，而 GitHub 是目前全世界最大的開源專案平台，在此提供本地儲存庫與 GitHub 遠端儲存庫的溝通方式。
另外，在 GitHub 上建立 Git Repo 並不困難，便不多做贅述。

<!-- more -->

### 基本觀念
將本地變更推送至 GitHub 有以下幾種方式：

##### 1. GitHub **沒有** 版本，本地 **沒有** 版本
- 在 GitHub 建立沒有版本的儲存庫
- 透過 `git clone` 取得遠端儲存庫
- 建立版本並上傳

##### 2. GitHub **沒有** 版本，本地 **已有** 版本
- 在 GitHub 建立沒有版本的儲存庫
- 將現有的本地儲存庫上傳到指定的 GitHub 專案 

##### 3. GitHub **已有** 版本，本地 **沒有** 版本
- 在 GitHub 建立有初始化版本的儲存庫
- 透過 `git clone` 取得遠端儲存庫
- 建立版本並上傳 

##### 4. GitHub **已有** 版本，本地 **已有** 版本
- 在 GitHub 建立有初始化版本的儲存庫
- 將現有的本地儲存庫上傳到指定的 GitHub 專案


### 注意事項
1.、3. 是屬於需要取得遠端儲存庫的方式，因為前者是沒有版本的狀態，亦即沒有預設的 master 分支，所以會有兩種操作方式
 

2.、4. 是屬於將本地既有儲存庫合併至遠端的方式，因為後者在遠端上已有版本，若本地儲存庫也建立了初始化版本，將會發生衝突，所以兩者的操作方式也會不同
 
 
### 操作方式

##### 1. GitHub **沒有** 版本，本地 **沒有** 版本
- 直接使用 `git clone [URL]` 即可
- Git 會自動建立工作目錄
- 在本地端建立版本後，使用 `git push [RemoteRefName] [Branch]` 指令上傳至遠端
- 可在 push 後加上 `-u` 參數，設定本地分支追蹤遠端分支   

##### 2. GitHub **沒有** 版本，本地 **已有** 版本
- 在本地儲存庫使用 `git remote add [RemoteRefName] [URL]` 指令，建立遠端參照名稱
- 使用 `git push [RemoteRefName] [Branch]` 上傳至遠端
- 可在 push 後加上 `-u` 參數，設定本地分支追蹤遠端分支

##### 3. GitHub **已有** 版本，本地 **沒有** 版本
- 直接使用 `git clone [URL]` 即可
- Git 會自動建立工作目錄
- 在本地端建立版本後，使用 `git push [RemoteRefName] [Branch]` 指令上傳至遠端
- 不需加上 `-u` 參數，Git 會自動設定本地分支追蹤遠端分支

##### 4. GitHub **已有** 版本，本地 **已有** 版本
- 在本地儲存庫使用 `git remote add [RemoteRefName] [URL]` 指令，建立遠端參照名稱
- 若直接使用 `git push [RemoteRefName] [Branch]` 指令會被拒絕，因為兩個地方都已有版本，會產生衝突
- 可使用 `git pull [RemoteRefName] [Branch]` 指令，將遠端的內容拉回並合併至本地後，再 push 回遠端
- 或使用 `git fetch` 指令，將遠端的內容拉回，再自行使用 `git merge` 合併至本地，再 push 回遠端

---

### Reference
{% post_link Git-Command-11-遠端操作 "Git Command #11 遠端操作" %}