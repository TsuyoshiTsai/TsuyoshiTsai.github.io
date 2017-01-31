---
title: 'Git Overview #07 相對名稱'
date: 2016-12-29 01:36:24
tags: 
    - Git
    - Git Overview
    - Learn-Git-in-30-days
categories:
    - Git
---
# 功能
 - 以特定 Commit 物件的相對位置，找到其他 Commit 物件

---

# 表示法
 - [Object]~[Number]
    - 代表第 Number 個上層 Commit 物件
    - HEAD~1 可找到 HEAD 的上一層 Commit 物件
    - HEAD~3 可找到 HEAD 的上三層 Commit 物件

<!-- more -->

 - [Object]^\[Number]
    - 擁有多個上層 Commit 物件時，要代表第 Number 個第一代的上層 Commit 物件
    - HEAD^1 可找到 HEAD 的第一個第一代的上層 Commit 物件
    - HEAD^3 可找到 HEAD 的第三個第一代的上層 Commit 物件 ( 需在有分支合併的情況下才能這麼做 )


-  [Object]^\[Number1]~[Number2]
    - 代表第 Number1 個第一代的第 Number2 層 Commit 物件
    - HEAD^1~1 可找到 HEAD 的第一個第一代的上一層 Commit 物件
    - HEAD^1~3 可找到 HEAD 的第一個第一代的上三層 Commit 物件
    - HEAD^3~1 可找到 HEAD 的第三個第一代的上一層 Commit 物件 ( 需在有分支合併的情況下才能這麼做 )
    - HEAD^3~3 可找到 HEAD 的第三個第一代的上三層 Commit 物件 ( 需在有分支合併的情況下才能這麼做 )

---

# 詳細說明
```
G   H   I   J
 \ /     \ /
  D   E   F
   \  |  / \
    \ | /   |
     \|/    |
      B     C
       \   /
        \ /
         A

A =      = A^0
B = A^   = A^1     = A~1
C = A^2  = A^2
D = A^^  = A^1^1   = A~2
E = B^2  = A^^2
F = B^3  = A^^3
G = A^^^ = A^1^1^1 = A~3
H = D^2  = B^^2    = A^^^2  = A~2^2
I = F^   = B^3^    = A^^3^
J = F^2  = B^3^2   = A^^3^2
```

---

# 圖解

{% img /images/git-node.png %}
 
---

# Reference
[What's the difference between HEAD^ and HEAD~ in Git?] [Ref 01]

[Ref 01]: http://stackoverflow.com/questions/2221658/whats-the-difference-between-head-and-head-in-git