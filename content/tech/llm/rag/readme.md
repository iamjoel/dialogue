---
title: RAG
---

![[RAG From Scratch](https://github.com/langchain-ai/rag-from-scratch)](resource/rag-workflow.png)

## 解决的问题
检索增强生成 (简称 RAG) 将检索方法与深度学习进步相结合，通过动态集成最新外部信息来解决大型语言模型 (LLMs) 的静态限制。

简单来说，就是支持从私域数据中(LLM 中不包换的数据)检索信息。从而确保生成内容的准确性。

## 局限性

召回率的问题：
1. 内容跨越很多分段时，召回不了问题。比如：总结xx书的第二章的内容。分段中，并没有语意和这类似的分段。实际是要把第二章中所有的分段都取出后做总结。

## 长 Context LLM
RAG 可能部分会被 Long Context 技术所取代。即把整个文档作为 Context 丢给 LLM。

不会被替代的场景如：企业对信息安全会更敏感，不想把全量原始数据传给 LLM。[更多](./resource/technological-ripple-effect-rag-and-long-context-cognitive-conflict.md)

## RAG 和 长 Context LLM 中的使用
[Unifying RAG and long context LLMs](./resource/unifying-rag-and-long-context-LLMs.md)

## 资源
* [A Survey on Retrieval-Augmented Text Generation for Large Language
Models](./resource/a-survey-on-rag-for-llm.md)

