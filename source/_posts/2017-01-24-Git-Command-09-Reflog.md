---
title: 'Git Command #09 版本日誌'
date: 2017-01-24 00:12:09
tags: 
    - Git
categories: 
    - Git
    - Command
---
# git reflog
- `git reflog`
    - 列出 reflog 清單


- `git reflog [Branch]`
    - 只顯示特定分支的 reflog

<!-- more -->
        
 - `git log -g`
    - 列出每個 reflog 中的內容


 - `git reflog delete [Ref@{Specifier}]`
    - 刪除特定 reflog

---

# git config
 - `git config --global/local gc.reflogExpire "Day"`
 - `git config --global/local gc.reflogExpireUnreachable "Day"`
    - 調整 reflog 過期的預設值
    - Day 可設定 [Number days]，如 30 days 可保留 30 天
    - Day 可設定 never 表示永不刪除紀錄

    
- `git config --local gc.[Branch].reflogExpire "Day"`
- `git config --local gc.[Branch].reflogExpireUnreachable "Day"`
    - 針對特定分支設定 reflog 過期時間


 - `git reflog expire --expire=now --all`
    -  清除所有 reflog