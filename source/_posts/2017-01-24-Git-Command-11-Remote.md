---
title: 'Git Command #11 遠端操作'
date: 2017-01-24 00:18:43
tags: 
    - Git
categories: 
    - Git
    - Command
---
一個工作目錄下的本地儲存庫，可以有多個遠端儲存庫。

 - `git clone [Repository URL]`
    - **複製** 遠端儲存庫到本機，並建立工作目錄與本地儲存庫


 - `git remote add [RemoteRefName] [URL]`
    - **新增** 遠端儲存庫到本機，並以 RemoteRefName 作為 URL 的別名


 - `git remote`
    - 列出遠端儲存庫時指定的名稱
    - `git remote -v`
        - 在指定名稱後方顯示該遠端的 URL

<!-- more -->

 - `git ls-remote`
    - 列出所有遠端分支與標籤名稱
    - `git ls-remote [RemoteRefName]`
        - 根據遠端參照名稱 ( RemoteRefName ) ，列出特定遠端儲存庫的遠端分支與標籤名稱


 - `git push`
    - **推送** 本地儲存庫中目前分支的所有物件到遠端儲存庫
    - `git push [RemoteRefName] [Branch]`
        - 將本地的分支上傳到遠端儲存庫
        - RemoteRefName 可直接指定遠端 URL
        - 如 `git push origin master` 是將本地的 master 分支上傳到 origin 指定之遠端儲存庫的 master 分支
        - 遠端儲存庫需開放寫入權限給使用者才能使用
    - `git push -u [RemoteRefName] [Branch]`
        - 加上 `-u` 參數，往後在 push/pull/fetch 時，會直接參照該特定分支存取內容


- `git pull`
    - **拉回** 遠端儲存庫的最新版，且 **會** 將遠端分支 (origin/master) 合併至本地分支 (master)
    - 該指令等同於 `git fetch` + `git merge origin/master`
    - `git pull [RemoteRefName] [Branch]`
        - 將遠端儲存庫的內容拉回，且合併至本地儲存庫
 

 - `git fetch`
    - **取回** 遠端儲存庫的最新版，但 **不會** 將遠端分支 (origin/master) 合併至本地分支 (master)
    - `git fetch [RemoteRefName] [Branch]`
        - 將遠端儲存庫的內容拉回，但不合併到本地儲存庫


 - `git merge origin/master`


 - **Reference**
    - [2.5 Git 基礎 - 與遠端協同工作] [Ref 01]
    - [3.5 Git 分支 - 遠端分支] [Ref 02]
    - [連猴子都能懂的 Git 入門指南 - 遠端操作] [Ref 03]

[Ref 01]: https://goo.gl/uGxEqD
[Ref 02]: https://goo.gl/xkO0LK
[Ref 03]: https://goo.gl/a5OhHp
