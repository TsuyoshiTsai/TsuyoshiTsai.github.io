---
title: 'Git Overview #17 分支 - 進階'
date: 2017-01-17 00:18:49
tags:
    - Git
    - Git Overview
    - Learn-Git-in-30-days
categories:
    - Git
---
# 概述
{% post_link Git-05-分支 "Git #05 分支" %} 中的分支僅限於本地分支，加上遠端儲存庫後，分支系統可以被拆成四種概念，且本地與遠端之間的關係會變得稍微複雜一些。
<!-- more -->

---

# 種類

### 1. 遠端追蹤分支
- 位於遠端，目的是追蹤分支的變化情形
- 通常無法存取

### 2. 本地追蹤分支
- 位於本地端    
- 使用 `git clone` 將遠端儲存庫複製回來後，也會一併載回遠端追蹤分支，並建立對應的同名本地追蹤分支
- 執行 `git branch -a` 指令時，列出的紅色部分就是本地追蹤分支

### 3. 本地分支
- 位於本地端，目的是用作開發用途
- 有主題分支 ( Topic Branch ) 及開發分支 ( Development Branch ) 的別稱
- 執行 `git branch` 會列出所有本地分支
- 執行 `git branch -a` 指令時，列出的綠色部分就是本地分支

### 4. 遠端分支
- 位於遠端
- 通常無法在本地端直接存取

---

# 遠端參照設定
使用 `git remote add [RemoteName] [URL]` 建立遠端儲存庫的參照後，這些設定資訊會被存放在 **.git/config** 中，內容範例如下：


```
[remote "jquery"]
    url = https://github.com/jquery/jquery.git
    fetch = +refs/heads/*:refs/remotes/jquery/*
```


 - `[remote "jquery"]`
代表要以 jquery 這個參照名稱代表遠端儲存庫的 URL 位址


 - `url = https://github.com/jquery/jquery.git`
代表該遠端儲存庫的 URL 位址


 - `fetch = +refs/heads/*:refs/remotes/jquery/*`
代表該遠端儲存庫指令的參照名稱規格

---

# 對應設定
執行 `git push` 指令時，會自動將目前所在分支推送到設定的遠端分支，可以在 **.git/config** 中設定本地分支與遠端儲存庫的對應關係，以下是執行 `git clone` 後，Git 自動建立的預設設定：


```
[branch "master"]
    remote = origin
    merge = refs/heads/master
```


 - `[branch "master"]`
代表被設定的本地分支

 - `remote = origin`
代表本地分支要推送的遠端儲存庫參照

 - `merge = refs/heads/master`
代表推送時，將與本次變更合併的遠端分支

---

# 參照名稱規格 ( refspec )
定義執行 `git fetch` 指令時要取回哪些遠端分支的物件。

```
+refs/heads/*:refs/remotes/jquery/*
```

 - `+`
代表傳輸資料時，不會特別使用安全機制


 - `refs/heads/*`
「來源參照規格」，代表遠端儲存庫的 **遠端分支**，`*` 星號代表 `refs/heads/` 該路徑下所有的遠端參照


 - `:`
區隔「來源分支」與「目的分支」

 - `refs/remotes/origin/*`
「目的參照規格」，代表本地儲存庫的 **本地追蹤分支**，`*` 星號代表 `refs/remotes/origin/` 該路徑下所有的本地參照


`git fetch` 可取得遠端儲存庫的相關物件，它會先透過 URL 連到遠端儲存庫，取出「來源參照規格」的遠端分支，再放入「目的參照規格」的本地追蹤分支。

---

# Reference
{% post_link Git-Command-05-分支操作 "Git Command #05 分支操作" %}