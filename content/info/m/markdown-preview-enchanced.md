---
title: Markdown Preview Enhanced
tag: suggestion
---

[官网](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced)

## [支持特性](https://shd101wyy.github.io/markdown-preview-enhanced/#/zh-cn/)
* 自动编辑器及预览滑动同步
* 导入外部文件
* Code Chunk
* Pandoc
* Prince
* 电子书
* 幻灯片
* ==可扩展性==
* LaTeX 数学
* 导出 PDF, PNG, 以及 JPEG 凭借 Puppeteer
* 导出漂亮的 HTML（移动端支持）
* 编译到 GitHub Flavored Markdown
* 自定义预览 CSS
* TOC 生成
* 流程图 / 时序图 以及各种其他种类的图形
* 嵌入 LaTeX, 渲染 TikZ, Chemfig 等图形
* Task List (Github Flavored)
* 图片助手
* 脚注
* Front Matter
以及更多。。。

之前用的一个没这么强大的插件: [Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one)

## [Admonition](https://squidfunk.github.io/mkdocs-material/reference/admonitions/) [^1]
ss

!!! note Title
    Cool

!!! tip Title
    Cool

!!! success Title
    Cool

!!! question Title
    Cool

!!! danger Title
    Do not remove

!!! Warning Hehe
    Do not remove

!!! abstract Hehe
    Do not remove

!!! error Title
    **Cool**

!!! bug Title
    Cool

## 运行代码

可以在放一些文件里放一些常用的代码片段，然后在 Markdown 里运行。
```bash {cmd=true}
ls .
```

```javascript {cmd="node" .line-numbers}
const date = Date.now()
console.log(date.toString())
```

还可以用 [Plotly](https://plotly.com/) 画图表。

HTML

*[HTML]: Hyper Text Markup Language

## 注脚
[^1]: 说明
