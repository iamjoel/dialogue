---
title: Manus
tags: AI, 工具
---

[官网](https://manus.im/)

《聊聊“全网在要邀请码”的“全球首款”通用AI Agent: Manus》

昨晚，Monika 团队发布了新产品：[Manus](https://manus.im/)，好称“全球首款通用 AI Agent”。

看官方的产品演示，能感觉到惊艳的效果：分解任务，调用工具，最后达成目标。官网上也有几十个用例：规划旅行，分析亚马逊的财报，互动课程制作等。


它在 GAIA 中达到到了 SOTA 水平。 GAIA 是评估通用人工智能助手解决现实世界问题的基准测试。


我的看法：
1. Manus 看起来很强大。但现在还没很多用户真实的使用它(需要邀请码。我没用邀请码也进去了，但提问后一直在 Loading)，所以并不知道真实的效果。就像 [MetaGPT](https://github.com/geekan/MetaGPT) 之类的多 Agent 框架，曾经很火，但实际效果并没那么好。
2. Manus 即使很强大，用好它还需要好的问题：清晰明确，且聚焦的问题。
3. 一轮对话成本的问题。

## 开源方案
* [OpenManus](https://github.com/mannaandpoem/OpenManus) MetaGPT 搞的。 调用的本地的工具：PythonExecute，FileSaver，BrowserUseTool， GoogleSearch。[只用三小时，几个 00 后尝试复刻了 Manus](https://mp.weixin.qq.com/s/5-cvB992Cg3alGE_ac7S0Q)
  