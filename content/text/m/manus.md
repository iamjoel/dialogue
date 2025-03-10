---
title: Manus
tags: AI, 工具
---

[官网](https://manus.im/)

《聊聊“全网在要邀请码”的“全球首款”通用AI Agent: Manus》

昨晚，Monika 团队发布了新产品：[Manus](https://manus.im/)，好称“全球首款通用 AI Agent”。

看官方的产品演示，能感觉到惊艳的效果：分解任务，调用工具，最后达成目标。官网上也有几十个用例：规划旅行，分析亚马逊的财报，互动课程制作等。

它在 [GAIA](https://openreview.net/forum?id=fibxvahvs3) 中达到到了 SOTA 水平。 GAIA 是评估通用人工智能助手解决现实世界问题的基准测试。

我的看法：
1. Manus 看起来很强大。但现在还没很多用户真实的使用它(需要邀请码。我没用邀请码也进去了，但提问后一直在 Loading)，所以并不知道真实的效果。就像 [MetaGPT](https://github.com/geekan/MetaGPT) 之类的多 Agent 框架，曾经很火，但实际效果并没那么好。
2. Manus 即使很强大，用好它还需要好的问题：清晰明确，且聚焦的问题。
3. 一轮对话成本的问题。

## 实现的反向工程
每个任务都被划分成了这三个阶段去执行：
1. 规划阶段：采用 OpenAI O1 一类的长思考模型跑一个一个规划 prompt，将用户的输入拆解成执行步骤，并且确定最后的产出。比如用户想要分析特斯拉股票，则最终的产物应该是一个包含其近期股价，市场占有率, SWOT 分析等数据的网页，并反向拆解获得这些信息需要做什么。  
2. 执行阶段：利用 Claude 3.7 的 computer use 的能力根据上一部的拆解，一个一个的去获取这些信息。比如在特斯拉这个例子中，Manus 会写一段代码，通过 API 去获取特斯拉的历史股价。  
3. 归纳阶段：通过 Claude 3.7 extended 这类模型的能力，将第二步搜集到的所有信息进行总结和归纳，并且产出最终产物。比如在特斯拉的例子中是一个包含各种信息的网页。 
> [Manus 到底是是技术突破还是营销泡沫？我用 467 道题跑了个分](https://mp.weixin.qq.com/s/Ir8wIl0P1D7S3bvbeyqHwQ) 


## 开源方案
* [OpenManus](https://github.com/mannaandpoem/OpenManus) MetaGPT 搞的。 调用的本地的工具：PythonExecute，FileSaver，BrowserUseTool， GoogleSearch。[只用三小时，几个 00 后尝试复刻了 Manus](https://mp.weixin.qq.com/s/5-cvB992Cg3alGE_ac7S0Q)
  