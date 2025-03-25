---
title: LLM
tags: tech classify schema
---

> AI 会拉大精英和普通人的能力。 AI 解决复杂问题的能力越来越强。但普通人缺少发现问题和评判解决方案好坏的品味。

[LLM(大语言模型)](./llms.md) 本质是智力服务。LLM 能提升做事的效率。但用好 LLM 有难度。

主要内容:
1. 能力边界。
2. 原理剖析。
3. 能力拓展。
4. 应用场景。
5. 对人类的影响。
6. 未来趋势。
7. 资源。

## 1 能力边界
### 能力
推理能力: 数学推理。写代码。常识推理。
生成能力: 写文章，[生图](./llm-gen-image.md)，生视频，[生歌](./llm-gen-song.md)。 [导航](https://ai-kit.cn/)

LLM 训练的数据很多。它比人类看问题的视角更全面。

### Benchmark
* MMLU
* [Humanity's Last Exam](https://agi.safe.ai/) 难度比较高。位于人类知识前沿的多模态基准，旨在成为该类基准的最终封闭式学术基准，具有广泛的主题覆盖。
* [Elo](./llm-benchmark-elo.md) 由人类使用后打分。
* [GAIA](./llm-benchmark-gaia.md) 评估 Agent 解决现实世界问题。
* [OSWorld](https://os-world.github.io/) 评估 Agent 使用计算机的能力。

### 局限性
#### 1 幻觉
LLM 的幻觉是指，LLM 生成的想象出来的内容。不好的方面是：会误导用户。好的方面是：产生创造力的内容。

有办法可以减少幻觉的发生。

##### 幻觉的累积
做一个任务，多个步骤用到 LLM，那 LLM 的幻觉是在在累积。假设一个步骤的成功率是 90%，那 10 个步骤的成功率是 90% 的 10 次方，也就是 35% 左右。

#### 2 不能用外部的数据和工具
可以被解决。

如果使用联网搜索要注意: [需求转化为网络搜索关键字的局限性](./limit-of-splitting-keyword.md)

#### 3 感知能力
多模态。支持的模态还不够丰富。触觉，气味等等。

没有生存压力，也没有情感。

#### 4 Context 长度

#### 5 使用难度
用户很难说清楚的问题。

#### 6 其他
模型生成的内容比较啰嗦，怎么让其简洁也没用。


### 评估
性能评估: Context 长度，输出速度。

其他评估：费用， 合规(内容审核，安全性的审核)。

### 排行榜(LLM Leaderboard)
* [Vellum LLM Leaderboard](https://www.vellum.ai/llm-leaderboard) 包含开源和闭源模型。
* [Open LLM Leaderboard](https://huggingface.co/spaces/HuggingFaceH4/open_llm_leaderboard) 只有开源模型。

评估工具: [Language Model Evaluation Harness](https://github.com/EleutherAI/lm-evaluation-harness)

## 2 原理剖析
* 架构: Transform, MOE。
  * TODO: [注意力机制](./llm-attention-mechanism.md)
* 训练过程: 预训练，微调，后训练。

### 预训练
海量数据，海量计算。学习到的知识，存储在模型的参数中。 Embedding 的向量值是这个时候学来的。

### 微调
通过微调，LLM可以更好地适应特定的应用场景，如文本分类、情感分析、问答系统等。

### 后训练
后训练（Post-training）是指在预训练模型的基础上，针对特定任务或数据集进行的额外训练，以优化模型性能并使其更好地适应特定需求。以下是后训练的主要内容和步骤：  
1. 监督微调（SFT）：
使用特定任务的数据集对预训练模型进行微调，调整模型参数以更好地适应任务需求。
这种方法通常涉及在特定任务的数据集上进行训练，使得模型能够更好地适应新的任务或领域。
2. 参数高效微调（PEFT）：
更新模型参数的一小部分，同时保持其余部分不变，从而减少训练时间和计算资源的需求。
这种方法适用于资源有限的情况，如使用单个GPU进行微调。
3. 基于人类反馈的强化学习（RLHF）：
通过人类反馈构建奖励模型，使用强化学习技术对模型进行进一步优化。
这种方法可以提高模型的对齐度和生成质量。
4. 蒸馏技术（Distillation）：
将大型模型的知识转移到小型模型中，以提高小型模型的性能和效率。
这种方法常用于部署阶段，以减少模型的计算需求。
5. 数据合成和拒绝采样：
使用数据合成技术生成偏好数据，并通过拒绝采样技术选择高质量的数据进行训练。
这种方法可以提高模型的训练效率和效果。

模型支持 Function Call就是在后训练阶段做的。

### Transform
该架构的效果，依赖：**算法**，**数据** 和 **算力**。

数据：海量的数据。

算力：依赖英伟大高性能 GPU 的算力。 Scaling Law 。

## 3 能力拓展
LLM 只能用预训练的数据，也不能用外部的工具。能力拓展：
1. 数据层面
   1. [MCP](../m/mcp.md)
   2. RAG
2. 工具层面
   1. 使用工具。工具使用的规范。

## 4 应用场景
每个行业的知识工作者做的事，都或多或少的可以让 LLM 来做。如:
* 写作。
  * 金融：行业调研，行业分析。
  * 互联网：用户调研，营销文案，写代码。
  * 电商：商品文案。
  * 法律：诉状。
* 数据分析。
  * 金融：风险分析。
  * 互联网：用户的使用数据，用户画像。
  * 电商：选品，商品分析。
  * 法律：法律文书。
* 作图，视频，音频。
* 沟通类:
  * 智能客服。
  * AI 陪伴。
  * AI 教学。

### 我的应用
* [用 LLM 筛选新闻](./llm-filter-lastest-news.md)
* [用大语言模型来辅助解决复杂问题的技巧](./llm-solve-complex-problem-with-llm.md)
* [让 LLM 生成图文并茂的内容](./llm-mixed-image-out.md)
* 辅助学习

### 相关产品
* [基于 LLM 的 搜索](./llm-based-search.md)

## 5 对人类的影响
积极的影响: 
* [《机器之爱的恩典 - AI 如何让世界变得更好》 ](../m/machine-of-loving-grace.md)

对其他行业的影响:  
* 营销: [AIO](./llm-marketing-aio.md)
  
## 6 未来趋势
### 短期
模型层面:
1. [专有化模型是模型厂商的重点](../t/the-model-is-the-product.md) 擅长解决特定的复杂任务。


中间件 & 应用层面:
1. Agent 解决复杂问题的能力的提升。 [Manus](../m/manus.md) 之类会越来越多。
2. Chat 的回复里能输出组件。

### 长期
AGI。

## 7 资源
[新闻](./llm-news.md)

### 重点论文
* [Attention Is All You Need](https://arxiv.org/pdf/1706.03762) 注意力机制。
* [REAC T: SYNERGIZING REASONING AND ACTING IN
LANGUAGE MODELS](https://arxiv.org/pdf/2210.03629) 工具调用，ReAct 模式:
  
### 自媒体
* NLP 前沿
* 自媒体
  * 橘子的汽水铺
  * 归藏的 AI 工具箱
  * 数字生命卡兹克
  * 赛博禅心。大聪明
  * 通往 AGI 之路。 
  * 向阳乔木
  * AI产品黄叔
* 国内媒体
  * [机器之心](https://www.jiqizhixin.com/)
  * 极客公园
  * 量子位
  * [雷锋网](https://www.leiphone.com/)
