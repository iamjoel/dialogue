---
title: 飞书多维表格
tags: suggestion
description: 可视化数据库，支持不同视图。
---

[官网](https://www.feishu.cn/)。中国版的 [AirTable](../a/airtable.md)。体验做的比 AirTable 好。

## 功能
* 需要做表关联，字段类型是设置成双向关联或单向关联。
* 对外的收集表单。数据汇总到内部的表格。表单的一些字段通过一些条件来显示和隐藏。
* 自动化。数据满足某个要求时，触发某个动作(发送飞书消息，发送HTTP请求，创建日程等)。
* 颗粒度很细的权限。

[API 列表](https://open.feishu.cn/document/server-docs/api-call-guide/server-api-list)。 对应的 [Node.js SDK](https://github.com/larksuite/node-sdk/blob/main/README.zh.md)

[插件](https://feishu.feishu.cn/docx/U3wodO5eqome3uxFAC3cl0qanIe)

## 一些列转化的 Action
预设了一些功能:
1. 分类。把文本匹配到分类。如 好评，差评。
2. 总结。
3. 智能标签。
4. 信息提取。抽取实体。
   1. 提取身份证中的关键信息。
5. 图片识别。
   1. 通用的识别。
   2. 识别文字。
   3. 身份证的识别。
   4. AI 点数。
6. 抓数据 + LLM。爬取网页，对爬取内容给 LLM 做转化。
7. 模型的接入。 可以在指令中引入一些列的内容。
   1. 自定义 AI 自动填充。
   2. DeepSeek R1。只能是火山引擎的账号。
   3. Kimi
8. 生成类的
   1. 生成图

