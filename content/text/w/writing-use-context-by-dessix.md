---
title: 用 Dessix 根据自己的素材来写作
tags: Dessix 
---

在[上篇文章](./writing-for-primary-school-by-dessix.md)中，我们用 [Dessix](https://dessix.io/) 写了作文。但问题是，这样写出的作文情节是 LLM 编的。我们期望的是，根据自己的素材来写作文。

Dessix 可以很容易做到这功能。下面我们来看具体该怎么做。

假设，我们要写一篇作文叫 《我的爸爸》。我们在`人物`的文件夹下已经有了一些笔记：关于爸爸，妈妈和妹妹的。如下图所示：

执行下面的操作:
1. 点击 `人物` 文件夹。
2. 点击底部按钮 "Ask a Question" 来提问。
3. 输入问题: **从上下文中找出和爸爸相关的内容，写一篇作文《我的爸爸》**。

超级容易吧～

我解释下这背后的技术细节。当我们选中文件夹，点击文件夹提问时，Dessix 会执行 RAG 和生成的过程：根据问题的语意，从上下文中 (默认是当前文件夹中的所有笔记) 匹配出满足条件的笔记，然后把这些笔记给 LLM，最后 LLM 再根据要求生成满足条件的内容。

在 Dessix 中，提问时当前所有的上下文(笔记)都会横向打开。可以手动地把笔记从上下文中移除。

也可以将笔记加入上下文。

拓展一下，如果你是一个文字工作者，有很多的素材，用类似的做法，就可以快速地写出一篇文章。你学会了吗～

