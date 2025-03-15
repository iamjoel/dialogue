---
title: Jina AI
tags: AI, Company, 开源
---

[Jina AI](https://jina.ai/) 是一家在 2020 年成立于德国的初创公司，专注于搜索领域的底座模型的研发。

## 产品
3 条主要产品线： Embeddings, Reranker 和 Reader。

### Embeddings
Embeddings 就是为多语言和多模态数据设计的向量化模型，将文本或图片转化成定长向量。

jina-embeddings-v3 是 24 年 9 月发布的。在发布当日在 Huggingface 的 MTEB 榜单上， v3 不仅是 1B 参数量下性能最好的，超过了 OpenAI 的 text-embedding-large 和 Cohere 的 v3 模型（这两家都是闭源模型），也比开源多语言模型的标杆 multilingual-e5-large-instruct 好上不少。

论文: [jina-embeddings-v3: Multilingual Embeddings With Task LoRA](https://arxiv.org/abs/2409.10173)

### Reranker
Reranker 是基于 query-documents 设计的精排模型，给定一个 query 和一堆文档，直接输入模型，然后根据 query 输出文档的相关性排序。

### Reader
Reader 主要目标是使用生成式小模型 (SLM) 实现单文档上的智能，比如数据清理过滤提取等等。

## 引用来源
* [独家 | 专访Jina AI肖涵博士：搜索的未来，藏在一堆小模型里](https://mp.weixin.qq.com/s/EQsgkQX8PtWTN69axJ7uOQ) 里面有一些有意思的观点：关于训练向量模型遇到的问题，技巧以及 [Scaling Law](../l/llm-scaling-law.md)。
  