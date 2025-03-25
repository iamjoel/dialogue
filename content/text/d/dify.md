---
title: Dify
tags: dify, open-source
---

> The Innovation Engine for Generative AI Applications
> 将不确定交给 agent，将确定性交给 Dify。

[官网](https://dify.ai/) [GitHub](https://github.com/langgenius/dify) [G2](https://www.g2.com/products/dify-ai/reviews) [Dify 101](https://dify101.com/)

帮助开发者更容易的构建 AI 应用。功能
* 集成 LLM。支持一堆 LLM。
  * 语意缓存。
  * 敏感词过滤。
* 基于 LLM 的编排。
* RAG。
  * 分段策略：
    * 纯文本：句子的语意 或 自定义分隔符。
    * Excel：每行是一个分段。
  * 多路召回。
  * Rerank：召回后的结果重排。
* Agent 模式。Function Call 和 reACT 模式。
* Workflow。灵活的变量使用（在很多输入框可以使用变量；变量在一条线上是全局的），副作用是连线不能体现变量直接的输入，输出关系。
  * DSL 的导出和导入。
* Ops: 日志 和 Tracing。
* WebAPP。

用户体验好。做原型很方便。

基于 Dify 的：
* 微信机器人： 微秘书。
* 咸鱼上收费部署 Dify 的(49元 一次)。

## 用例
* [在 Dify 的 Workflow 中实现功能路由](dify-chatflow-action-route.md)
* [Dify 1.0 新版插件介绍](dify-1.0-plugin.md)
