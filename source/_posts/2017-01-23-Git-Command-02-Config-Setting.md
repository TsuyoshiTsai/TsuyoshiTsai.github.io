---
title: 'Git Command #02 Config Setting'
date: 2017-01-23 23:48:34
tags:
    - Git
    - Git Command
categories:
    - Git
---
### 一般操作
 - `git config --list`
    - 列出 Git for Windows 已設定的所有選項
    - `git config --list --system`
        - 僅列出系統層級的選項
    - `git config --list --global`
        - 僅列出使用者層級的選項
    - `git config --list --local`
        - 僅列出儲存區層級的選項

<!-- more -->

 - `git config [ConfigSection.ConfigName]`
    - 取得特定選項的值


 - `git config [ConfigSection.ConfigName] [ConfigValue]`
    - 設定特定選項的值


 - `git config --unset --system/global/local [ConfigSection.ConfigName]`
    - 刪除特定選項的值


### 常用設定
 - `git config --global alias.[Alias] [GitCommand]`
    - 設定 [Alias] 為 [GitCommand] 的別名，以利快速執行指令
    - `git config --global alias.co checkout`
    - `git config --global alias.ci commit`
    - `git config --global alias.st status`
    - `git config --global alias.br branch`
 

 - `git config --global core.editor notepad.exe/"EditorDir"`
    - 改變執行 `git commit` 時打開的預設編輯器為記事本或指定路徑的編輯器


 - `git config --edit --system/global/local`
    - 直接開啟編輯設定檔


 - `git config --global help.autocorrect 1`
    - 開啟自動修正錯誤參數的功能


 - `git config --local/global commit.template "TemplateDir"`
    - 指定自訂 Commit 版本說明的範本路徑位置
    - `--local` 參數需在有 `git init` 過的專案目錄中執行，且會將設定存在儲存區層級
    - `--global` 參數不限定執行的目錄，會將設定存在使用者層級
    - 可以兩者皆設定，Git 會自動依照套用順序執行，所以 local 會覆蓋 global 的設定