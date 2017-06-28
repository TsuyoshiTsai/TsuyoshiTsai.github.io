---
title: 'Git Overview #18 Git on GitHub - Fork、Pull Request'
date: 2017-01-18 00:03:37
tags: 
    - Git
    - Learn Git in 30 days
categories: 
    - Git
    - Overview
---
# 概述
由於 Git 沒有特意強化權限控管的機制，這代表所有人都可以下載一個遠端儲存庫的完整版本，也有權限將變更推送到遠端儲存庫，這對共同開發而言並不是件好事，因此 GitHub 採用了 Fork 與 Pull Request 的方式讓使用者可以做到基本的權限控管。

<!-- more -->

---

# 權限設定
 - 在 GitHub 的 **個人帳戶** 上，所有合作者 ( Collaborators ) 都能自由地使用被授權的專案
 - 在 GitHub 的 **組織帳戶** 上，可以設定團隊 ( Teams )，並可以做較詳細的權限設定
    - Pull only
    - Push and Pull
    - Push, Pull and Administrative

---

# Fork
將專案複製到自己的帳號底下，並作為自己的遠端儲存庫任意使用。
 - 按下 Fork 按鈕後 GitHub 會自動在自己的帳號下建立該專案，並會在專案名稱下提示 fork from [Author/ProjectName]
 - 使用者會擁有該專案完整的歷史紀錄
 
---

# Pull Request
欲將被 Fork 的專案合併回作者的專案時，需向對方提出拉取要求。
 - 請專案作者對自己變更過的儲存庫使用 `git pull`，由於是向對方發出請求，故稱 Pull Request
 - 在操作 Pull Request 的過程中 GitHub 會自動比對兩個版本的差異