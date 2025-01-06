---
title: Wikilinks
tags: knowledge management
---
Wikilinks(维基链接)是由早期的互联网维基率先推出的，它使跨页面编写链接变得更加容易，而无需每次都编写 Markdown 或 HTML 链接。

## 语法
### 链接指向
* `[[Path to file]]` ：生成指向 Path to file.md （或 Path-to-file.md ）的链接，其中包含文本 Path to file
* `[[Path to file | Here's the title override]]` ：生成一个带有文本 Here's the title override 的链接 Path to file.md
* `[[Path to file#anchor|Anchor]]` ：生成指向文件中 Path to file.md 锚点 Anchor 的链接
* `[[Path to file#^block-ref|^block-ref]]` ：生成指向文件中 Path to file.md 特定块 block-ref 的链接

## 嵌入
在链接指向的前面加上 `!` ，可以将链接或图片嵌入到当前文档中。