---
title: 'Git Overview #12 版本日誌'
date: 2016-12-29 01:37:03
tags: 
    - Git
    - Git Overview
    - Learn-Git-in-30-days
categories:
    - Git
---
### 概述
在 Git 中做的所有版本變更，即使是復原的操作，都會被記錄下來，所以透過版本日誌的紀錄，能夠還原到任何狀態。簡言之，版本日誌就是參照變更的歷程記錄。無論對這些紀錄本身做任何操作，如修改或刪除，都不會影響物件儲存庫的內容。

<!-- more -->

### 產生 Reflog 的原則
只要透過指令修改參照的內容，或是變更分支的 HEAD 參照內容，就會建立 Reflog。因為修改 ref 而產生 log，所以指令名稱才稱為 reflog。


### 產生 Reflog 的動作
除以下動作外，每個分支、暫存版都會有自己的 Reflog，這些資料也都會存在 ***.git/logs/refs/*** 資料夾下。
- Commit
- Checkout
- Pull
- Push
- Merge
- Reset
- Clone
- Branch
- Rebase
- Stash


### Reflog 的過期時間
預設保存 90 天。若其中的 Commit 物件已不在分支上，則預設保留 30 天。

---

### Reference
{% post_link Git-Command-09-版本日誌 "Git Command #09 版本日誌" %}