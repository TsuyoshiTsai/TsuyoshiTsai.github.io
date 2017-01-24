---
title: 'Git Overview #10 Config Setting'
date: 2016-12-29 01:36:40
tags: 
    - Git
    - Git Overview
    - Learn-Git-in-30-days
categories:
    - Git
---
# 儲存 Git Config 的三個地方
- 系統層級 ( `--system` )
    - 設定整台電腦，適用於本機所有使用者的預設值
    - 通常預設位置在 **C:/Program Files (x86)/Git/etc/.gitconfig** 這個檔案中
- 使用者層級 ( `--global` )
    - 設定目前登入的使用者
    - 通常預設位置在 **C:/Users/[Username]/.gitconfig** 這個檔案中
- 儲存區層級 ( `--local` )
    - 設定於特定專案中
    - 通常預設位置在 **/[WorkingDir]/.git/config** 這個檔案中

<!-- more -->

---

# 套用順序
Git 在執行時會依照以下順序套用：
1. 系統層級
2. 使用者層級
3. 儲存區層級 ( 優先權最高 )

---

# Reference
{% post_link Git-Command-02-Config-Setting "Git Command #02 Config Setting" %}