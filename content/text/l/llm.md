---
title: LLM
tags: tech classify schema
---

LLM(大语言模型) 本质是智力服务。LLM 能提升做事的效率。但用好 LLM 有难度。

主要内容:
1. 能力边界。
2. 原理剖析。
3. 能力拓展。
4. 应用场景。
5. 未来趋势。
6. 资源。

## 1 能力边界
### 能力
推理能力: 数学推理。写代码。常识推理。

LLM 训练的数据很多。它比人类看问题的视角更全面。

### 局限性
#### 1 幻觉
LLM 的幻觉是指，LLM 生成的想象出来的内容。不好的方面是：会误导用户。好的方面是：产生创造力的内容。

有办法可以减少幻觉的发生。

#### 2 不能用外部的数据和工具
可以被解决。

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

### Transform
该架构的效果，依赖：**算法**，**数据** 和 **算力**。

数据：海量的数据。

算力：依赖英伟大高性能 GPU 的算力。 Scaling Law 。

## 3 能力拓展
LLM 只能用预训练的数据，也不能用外部的工具。能力拓展：
1. 数据层面
   1. MCP
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

## 5 未来趋势
### 短期
Chat 的回复里能输出组件。

### 长期
AGI。

## 6 资源
* NLP 前沿
* 自媒体
  * 橘子，归藏
* 国内媒体
  * [机器之心](https://www.jiqizhixin.com/)
  * 极客公园
  * 量子位
  * [雷锋网](https://www.leiphone.com/)
