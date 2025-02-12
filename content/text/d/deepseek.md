---
title: DeepSeek
tags: LLM, AI
---

DeepSeek: 幻方旗下的大语言模型公司。幻方是一个做量化交易的公司。

牛逼的地方:
1. 搞出了 推理模型(R1)。首个训练出开源的推理模型的公司。对于如何训练出推理模型，OpenAI 几乎没有对外公布任何信息。
2. 模型的预训练成本和推理成本都有了大幅的降低。
3. [开源](https://github.com/deepseek-ai/DeepSeek-R1)。开源协议用了大气的 MIT 协议。


## 模型及测评
### DeepSeek V3
基座模型。2024年12月26日，发布并开源。对标 GPT 4o。

推理能力不错。不错的是，会展示推理过程。目前推理不足的是，缺少对推理过程的干涉：有时它的推理偏了，结果就不对了。如果能人工介入推理过程：修改偏的方向，或是在对的方向上再补充更多的上下文会控制更好。

### DeepSeek R1
推理模型。2025 年1月20日，发布并开源。对标 GPT o1。


### 文生图模型
Janus-Pro，JanusFlow 等。对标 DALL-E 3。


## 支持 DeepSeek 的平台
除了官方，支持 DeepSeek 的 API:  
* [硅基移动](https://siliconflow.cn/zh-cn/models)
* [OpenRouter](https://openrouter.ai/models?q=deepseek%20r1)。还提供了兼容 OpenAI API 的配置方案。

体验平台:   
* [秘塔AI搜索引擎](https://metaso.cn/) 启用长思考

还有很多。

## 使用案例
### [好奇宝宝的免费一对一老师](https://news.qq.com/rain/a/20250202A04TDL00)
Prompt: 
```
你是个循循善诱的科学老师：面对孩子的任何问题，会先澄清问题、搞明白孩子为什么这么问；再思考与之相关的知识点、提炼出关键问题；最后引导孩子观察相关现象、提出猜想并验证、最终才给出解释，并用拓展问题引出更多思考。
```

有意思的: [人机共生挑战第一期成果展](https://news.qq.com/rain/a/20250106A03BAI00)

## 如何训练自己的大模型
### [DeepSeek-R1复现方案解读之「Open-R1」](https://mp.weixin.qq.com/s/8Spvj_aPFOHmgZb2T4Y-IQ) 
> [Open-R1](https://github.com/huggingface/open-r1) 项目，这是一个旨在系统性地重构DeepSeek-R1的数据集及其训练流程、验证paper里的成果、推进开源推理模型发展。

1. 数据集。准备训练的数据集和推理数据集。
2. 模型训练。由于没有公开DeepSeek对DeepSeek-R1进行训练的代码，因此不清楚最佳超参数是什么，以及在不同模型家族和规模下它们之间有何差异。
3. Scaling Law：在训练推理模型时，计算资源与数据集之间存在怎样的权衡？

## 其他低预训练费用
李飞飞团队搞的 [s1: Simple test-time scaling](https://github.com/simplescaling/s1)。 16 块 H100 GPU，而且只花了 26min，蒸馏 Qwen2.5 - 32B 模型。

## 文章推荐
### [关于deepseek的一些普遍误读](https://mp.weixin.qq.com/s/Uc4mo5U9CxVuZ0AaaNNi5g)

## 术语
### 满血版
满血版和非满血版的主要区别在于参数数量和功能完整性。满血版通常指具有更全面功能和更高参数数量的模型，例如DeepSeek-R1满血版，它拥有671b参数，并支持联网搜索和长思考模式，能够更快速和准确地解决复杂问题。而非满血版，如早期的版本或参数量较少的模型，可能在功能上有所缩减，例如缺乏深度思考能力或不支持联网搜索。

此外，满血版模型通常提供更高的推理能力和更广泛的知识库，能够在处理大规模数据和复杂问题时表现出更优秀的性能。而非满血版本虽然简洁，但可能在处理需要深度思考和最新信息检索的任务时不够强大。

## 待阅读文章
* 训练原理方面
  * https://zhuanlan.zhihu.com/p/21961983559