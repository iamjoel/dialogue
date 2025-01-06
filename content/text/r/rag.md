---
title: RAG
---

![[RAG From Scratch](https://github.com/langchain-ai/rag-from-scratch)](resource/rag-workflow.png)

## 解决的问题
检索增强生成 (简称 RAG) 将检索方法与深度学习进步相结合，通过动态集成最新外部信息来解决大型语言模型 (LLMs) 的静态限制。

简单来说，就是支持从私域数据中(LLM 中不包换的数据)检索信息。从而确保生成内容的准确性。本质就是检索信息。

## 局限性

召回率的问题：

### 多跳的问题
多跳的问题指：内容跨越很多分段时，召回不了问题。比如：
  1. 总结xx书的第二章的内容。分段中，并没有语意和这类似的分段。实际是要把第二章中所有的分段都取出后做总结。
  2. 报告编写的数据整理环节，比如要从一堆报表中找出企业近三年的复合增长率，要和竞对比较发展情况等。

可以用意图识别来分解问题，然后再召回。

为了更好的效果，会有很多不同的匹配的召回方式：
1. Parent(任意子内容被匹配到，召回父分段), Summary(总结内容被匹配到，召回对应的被终结的分段), QA(问题被匹配到，召回对应的答案分段)
2. KG(实体关系被匹配到，召回对应抽取实体的分段)

还有一个策略：提取问题中的限定词作为筛选条件从数据库中筛数据。[MultiHop-RAG](https://github.com/mxpoliakov/Multi-Meta-RAG)， [Multi-Meta-RAG：langchain点名，评论爆吹的新研究](https://mp.weixin.qq.com/s/Jf3qdFR-o_A4FXwmOOZ3pg)

### 路由的问题
> 文件一多，会有一些特别相似的区块。比如：公司2021年的财报和2022年的财报中某项数据，有时候只在文件名和一些大标题才有年份，就造成了chunking之后失去年份等关键信息，造成最终结果的错误。
> 解决方案：在文件处理时收录元数据，如标题、时间、区域等。然后在检索的时候，首先对问题进行拆解，识别年份等关键信息，直接路由到相应的年份知识库或目录进行检索。
> [LLM企业应用落地场景中的问题一览 ｜LLM ｜RAG ｜Agent ｜TorchV](https://mp.weixin.qq.com/s/NvRyRXxhBKT-LSyYZ1llqg)

## 长 Context LLM
RAG 可能部分会被 Long Context 技术所取代。即把整个文档作为 Context 丢给 LLM。

不会被替代的场景如：企业对信息安全会更敏感，不想把全量原始数据传给 LLM。[更多](../t/technological-ripple-effect-rag-and-long-context-cognitive-conflict.md)

## RAG 和 长 Context LLM 中的使用
[Unifying RAG and long context LLMs](../u/unifying-rag-and-long-context-LLMs.md)

## 工具库
### [R2R](https://www.sciphi.ai/)
> SciPhi Cloud is powered by R2R, the Supabase for RAG.
Start your AI application with vector search, authentication,
hybrid search, advanced RAG, observability, and more.

[GitHub](https://github.com/SciPhi-AI/R2R) [文档](https://r2r-docs.sciphi.ai/walkthrough)

功能：
* 📁 Multimodal Support: Ingest files ranging from .txt, .pdf, .json to .png, .mp3, and more.
* 🔍 Hybrid Search: Combine semantic and keyword search with reciprocal rank fusion for enhanced relevancy.
* 🔗 Graph RAG: Automatically extract relationships and build knowledge graphs.
* 🗂️ App Management: Efficiently manage documents and users with full authentication.
* 🔭 Observability: Observe and analyze your RAG engine performance.
* 🧩 Configurable: Provision your application using intuitive configuration files.
* 🔌 Extensibility: Develop your application further with easy builder + factory pattern.
* 🖥️ Dashboard: Use the R2R Dashboard, an open-source React+Next.js app with optional authentication, to interact with R2R via GUI.

## 资源
* [MCP](https://www.anthropic.com/news/model-context-protocol) Claude 出的给 LLM 提供连接本地数据的协议。
  * https://modelcontextprotocol.io/quickstart#complex-operations
* [A Survey on Retrieval-Augmented Text Generation for Large Language
Models](./resource/a-survey-on-rag-for-llm.md)
* [阿里RAG新框架R4：增强检索器-重排序-响应器，5个知识密集任务上都超过Self-RAG等！](https://mp.weixin.qq.com/s/Lsom93jtIr4Pv7DjpQuiDQ) R4：Reinforced Retriever-Reorder-Responder（增强检索器-重排序-响应器）
* [LLM企业应用落地场景中的问题一览 ｜LLM ｜RAG ｜Agent ｜TorchV](https://mp.weixin.qq.com/s/NvRyRXxhBKT-LSyYZ1llqg)
* GraphRAG: [Implementing ‘From Local to Global’ GraphRAG with Neo4j and LangChain: Constructing the Graph](https://neo4j.com/developer-blog/global-graphrag-neo4j-langchain/) 抽取实体和关系。
  * 对应论文: https://arxiv.org/abs/2404.16130
