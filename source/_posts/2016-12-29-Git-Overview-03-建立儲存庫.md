---
title: 'Git Overview #03 建立儲存庫'
date: 2016-12-29 01:35:26
tags: 
    - Git
    - Git Overview
    - Learn-Git-in-30-days
categories:
    - Git
---
有三種建立儲存庫的方式：

### 1. 本機的本地儲存庫 ( Local Repository )
使用 GitHub for Windows 的 Git Shell 指令列工具操作

1. 建立目錄：
   `mkdir git-demo`

2. 進入該目錄：
   `cd git-demo`

3. 建立儲存庫 ( Repository )：
   預設的儲存庫會放在工作目錄中的 **.git** 底下
   `git init`

<!-- more -->

---

### 2. 本機的共用儲存庫 ( Shared Repository )
共用儲存庫是指建立 Git 儲存庫但不包含工作目錄 ( Working Directory )，大多使用直接的檔案存取，通常在 Linux 作業系統下較有機會使用到。

1. 建立目錄：
   `mkdir share-repo`

2. 進入該目錄：
   `cd share-repo`

3. 建立共用儲存庫
   該指令會在當前工作目錄建立所有 Git 儲存庫的相關檔案與資料夾，該目錄不能拿來直接做開發用途，且最好只透過 Git 指令操作該目錄
   `git init --bare`

---

### 3. GitHub 或其他 Git 平台的遠端儲存庫 ( Remote Repository )
與共用儲存庫幾乎一樣，差別在於遠端儲存庫大多使用 SSH, Git Protocol, HTTP 等協定遠端存取儲存庫。

1. 登入 GitHub，找到並選擇 New Repository

2. 設定專案相關資訊，點選 Create Repository
3. 取回遠端儲存庫有兩種方式
    1. 透過 Set up in Desktop 按鈕自動開啟 GitHub for Windows 工具
    2. 複製平台提供的儲存庫 URL，並在 Git Shell 上執行：`git clone [RepoUrl]`

---

> 註：`mkdir` 與 `cd` 都代表命令提示字元 ( Command Prompt，或稱終端機 Terminal ) 的指令。
[相關教學](https://carolhsu.gitbooks.io/django-girls-tutorial-traditional-chiness/content/intro_to_command_line/README.html)

---

### Reference
{% post_link Git-Command-01-初始化 "Git Command #01 初始化" %}