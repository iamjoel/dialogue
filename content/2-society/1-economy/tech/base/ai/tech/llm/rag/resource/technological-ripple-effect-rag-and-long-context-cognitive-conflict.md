---
title: 技术的涟漪效应：RAG与Long Context的认知冲突
---

## 基本信息
* 原文: [《技术的涟漪效应：RAG与Long Context的认知冲突》](https://quail.ink/orange/p/technological-ripple-effect-rag-and-long-context-cognitive-conflict)
* 作者: orange.ai
* 主要内容: RAG 和 Long Context 的认知冲突。Long Context 是否会取代 RAG。

## 核心内容
### Long Context 的优势
1. 用 Long Context 比 RAG 的召回效果好。Gemini 1.5 Pro。在“大海捞针”实验中达到了99.7%的召回率。


### Long Context 的劣势
1. 费用贵。价格高昂，一次十万字的问答，费用就超过了1元，无法很难进行商业化落地。当然，这个长期会降。

## RAG 的优势
1. 企业对信息安全会更敏感，不想把全量原始数据传给 LLM，即使你的 Context 大到可以不考虑内容上限；
2. 企业的知识库，内容类型和数量往往都很庞杂，需要前置的筛选过滤整理，也就是 RAG 中的前置内容获取和提取的过程；
3. RAG 中的前置内容获取和信息提取（文件 + 网络），形成知识库，是对 Long Context 更有效的信息输入；

