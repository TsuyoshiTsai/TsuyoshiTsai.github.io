---
title: 'Git Command #10 重置與還原'
date: 2017-01-24 00:17:04
tags: 
    - Git
categories: 
    - Git
    - Command
---
# git reset
 - `git reset`
    - 還原到指定 Commit，此次之後的修改都會被退回
    - 該指令會讓分支回到指定版本
    - 取消 `git commit`，取消 `git  add`，保留工作目錄的變更狀態
    - 直接執行該指令可以重設當前工作目錄的版本及索引狀態，但保留實體狀態的變更


- `git reset --soft`
    - 取消 `git commit`，保留 `git add`，保留工作目錄的變更狀態
    - 重設當前工作目錄的版本，但保留索引狀態及實體狀態的變更
    - `git reset --soft "HEAD^"`
        - 刪除最近一次的版本紀錄，保留最後一次版本變更的內容


- `git reset --hard`
    - 取消 `git commit`，取消 `git add`，取消工作目錄的變更狀態
    - 重設當前工作目錄的版本、索引狀態及實體狀態的變更
    - 該指令可重置被刪除及被更名的目錄或檔案
    - 該指令會將所有檔案都還原
    - `git reset --hard "HEAD^"`
        - 將 HEAD 的位置指向前一版，刪除目前的最新版 ( 實際上該版本仍存在物件儲存區中 )
    - `git reset --hard ORIG_HEAD`
        - 還原到上一次的 Commit

<!-- more -->

---

# git revert
- `git revert`
    - 還原到指定 Commit，此次之前的修改都會被保留
    - 該指令會讓分支繼續成長


- `git revert [Commit]`
    - 還原到指定 Commit 的版本，並建立一個版本
    - 該指令實際上是將指定 Commit 版本與 HEAD 合併


- `git revert -n [Commit]`
    - 還原到指定 Commit 的版本，但不建立版本
    - `git revert --continue`
        - 還原到指定版本且完成變更後，需使用該指令建立版本，而非 `git commit`
    - `git revert --abort`
        - 放棄該次的還原，將所有變更返回至原本的狀態

---

# git cherry-pick
- `git cherry-pick`
    - 與 `git revert` 類似，但 revert 是套用相反的合併，cherry-pick 是套用相同變更的合併
    - 該指令建立的版本資訊 ( LogMessage、Author、Date ) 皆會與指定版本相同


- `git cherry-pick [Commit]`
    - 將指定 Commit 版本合併至目前分支的最新版，該指令會在目前分支建立一個版本


- `git cherry-pick [Commit] -x`
    - 加上該參數，可以在 Log 自動加上 cherry picked from commit [Commit] 的字樣


- `git cherry-pick [Commit] -e`
    - 加上該參數，可以在建立版本前先編輯訊息


- `git cherry-pick [Commit] -n`
    - 加上該參數，可以取消自動建立版本的功能
    - 需再以 `git commit` 建立版本，用自己的版本資訊做提交

---

# git rebase
- `git rebase`
    - 重新定義分支參考基準
    - 把特定分支的變更整合到當前分支
    - **Notice**
        - 使用該指令需確保工作目錄是乾淨的，且索引中不能有準備 commit 的檔案，否則會無法執行
        - 若分支是從遠端儲存庫 pull 回來的，使用該指令後將會無法把修改後的分支及版本 push 到遠端儲存庫

        
- `git rebase [Branch]`
    - 將 Branch 的變更作為當前分支的基礎，需再接著執行合併的操作
    1. `git merge [Branch]`
        - 會執行快轉機制 ( Fast-forward )
        - 合併時會將當前分支的 HEAD 參照名稱，直接調整成指定分支的 HEAD 版本
    2. `git merge [Branch] --no-ff`
        - 停用快轉機制
        - 會將指定分支建立一個分支，再將它合併回當前分支


- `git rebase [Commit] -i`
    - 可修改指定版本所在分支中的歷程記錄
    - 執行該指令會出現編輯器，可在任一版本前輸入以下指令對歷程記錄做調整
        - p, pick = use commit
            - 不做任何變更，直接 commit
        - r, reword = use commit, but edit the commit message
            - 跳出編輯器讓使用者修改版本訊息後再重新 commit
        - e, edit = use commit, but stop for amending
            - 暫停在指定版本，可編輯該版本
            - 編輯後可使用 `git commit --amend` 重新 commit 該版本
            - 也可以使用 `git add .` 及 `git commit` 以在暫停的指定版本後插入新版本
            - 最後需使用 `git rebase --continue` 讓 rebase 的動作繼續完成
        - s, squash = use commit, but meld into previous commit
            - 套用該指令的版本將會合併至上一個版本
            - **會**合併版本訊息
        - f, fixup = like "squash", but discard this commit's log message
            - 套用該指令的版本將會合併至上一個版本
            - **不會**合併版本訊息
            - 指定版本的訊息將會被丟棄，直接套用上一個版本的訊息
        - x, exec = run command (the rest of the line) using shell
            - 暫停在指定版本，可執行一條指令
        - d, drop = remove commit
            - 套用該指令的版本將會從歷程記錄中被移除

---

# Reference
[3.6 Git 分支 - 分支的衍合] [Ref 01]

[Ref 01]: https://goo.gl/8k7ucs