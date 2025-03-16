---
title: OpenAI
---

> OpenAI 的 API 设计哲学: 交付能力，而非抽象(Ship capabilities, not abstractions)。

推理模型，文本生成模型，文本转音频模型，文本转视频模型，图像识别模型，Embedding 模型。

## [Responses API](#responses-api)
25/03/11 发布。Responses API 是对 Chat Completions API 的升级。

Responses API⁠ 内置了[网络搜索](https://platform.openai.com/docs/guides/tools-web-search)、[文件搜索](https://platform.openai.com/docs/guides/tools-file-search)和[计算机使用（computer use）](https://platform.openai.com/docs/guides/tools-computer-use)能力。以后应该会更多。

API 中传入工具， LLM 自行决定使用哪些工具。工具可能会被多次使用。

**文件搜索**是从指定的文件里检索。这些文件要在之前上传过。从这些文件里做 RAG。

**计算机使用(CUA​)**  是一款结合多模态理解和强化学习推理的 AI 智能体，能够像人类一样操作图形用户界面（GUI）。达到了 SOTA 的水平。

## CUA
CUA 是 Computer-Using Agent 的简称。

CUA 融合了 ​GPT-4o 的视觉能力 和 ​强化学习驱动的推理能力，可识别屏幕截图中的按钮、菜单等元素，并通过虚拟鼠标和键盘执行点击、输入等操作。其核心目标是实现无需依赖特定操作系统或网络 API 的灵活交互，覆盖浏览器操作、网页填写、软件控制等场景。

### 运行流程
CUA 的运作流程分为三个阶段：
1. **​感知（Perception）**​：通过截取屏幕截图获取当前环境状态，作为模型上下文输入。
2. **​推理（Reasoning）**​：利用思维链（Chain-of-Thought）结合历史操作和当前截图，动态规划下一步行动。
3. **​执行（Action）**​：模拟人类操作执行点击、滚动等指令，敏感操作（如输入密码）会主动请求用户确认。


## [Agents SDK](#agents-sdk)
> Agents SDK 允许您以轻量级、易于使用的包构建具有非常少抽象的代理人工智能应用程序。它是我们之前针对代理进行的实验 Swarm 的生产级升级。

[Agents SDK](https://openai.github.io/openai-agents-python/) 是多智能体的编排的 SDK。

### Handoff
一个 Agent 可以根据情况，将任务下发(Handoff) 给其他更合适的 Agent。
```python
french_agent = Agent(
    name="french_agent",
    instructions="You only speak French",
)

spanish_agent = Agent(
    name="spanish_agent",
    instructions="You only speak Spanish",
)

english_agent = Agent(
    name="english_agent",
    instructions="You only speak English",
)

# 去做路由的 Agent
triage_agent = Agent(
    name="triage_agent",
    instructions="Handoff to the appropriate agent based on the language of the request.",
    handoffs=[french_agent, spanish_agent, english_agent],
)
```

## Guardrails
> 围栏(Guardrails)与您的代理并行运行，使您能够对用户输入进行检查和验证。例如，假设您有一个使用非常智能（因此缓慢/昂贵）的模型来帮助处理客户请求的代理。您不希望恶意用户要求模型帮助他们完成数学作业。因此，您可以运行一个使用快速/便宜模型的围栏。如果围栏检测到恶意使用，它可以立即引发错误，这会停止昂贵模型的运行，并为您节省时间和金钱。

有输入围栏和输出围栏。

## [GPT-4o](https://openai.com/index/hello-gpt-4o/)
> We’re announcing GPT-4o, our new flagship model that can reason across audio, vision, and text in real time.

### 特性
GPT-4o 是 OpenAI 推出的新模型，可以实时跨越音频、视觉和文本进行聊天。简单来说，可以进行实时的视频聊天：
1. 延迟很低。和正常人类的聊天的延迟差不多（短至232毫秒、平均320毫秒的时间内响应音频输入）。
2. 可以随时打断 AI 的回答：AI 在回答时，如果用户有新的问题， AI 会停下来，回答新的问题。
3. 可以理解人的(语气中带的)感情。 [Hume AI](../h/hume-ai.md) 压力山大。
4. 表达感情。输出的可以带语调的，比如唱歌啥的。
5. 输出的多模态：文字，图片，语音。

4o 中的 o 是 Omni的缩写，也就是“全能”的意思。

费用上也降低了(价格打5折，速度提高一倍，单位时间调用次数足足是原来的5倍)。非付费用户也可以用。

2024/05/13(美国时间) 发布的。

### 技术
如何做到回复的低延迟？
在GPT-4o之前，ChatGPT语音模式由三个独立模型组成，语音转文本→GPT3.5/GPT-4→文本转语音。整个系统的延迟足足有2.8秒（GPT-3.5）和5.4秒（GPT-4），而且丢失了大量的信息，它无法直接感受音调、多个说话者或背景噪音，也无法输出笑声、唱歌声，或表达情感。

GPT-4o则是跨文本、视觉和音频端到端训练的新模型，这意味着所有输入和输出都由同一个神经网络处理。

### 参考
* [GPT-4o深夜炸场！AI实时视频通话丝滑如人类，Plus功能免费可用，奥特曼：《她》来了](https://mp.weixin.qq.com/s/cAeLgg46Wq81rhgsJp0l4Q)
* [直播回放](https://www.youtube.com/watch?v=DQacCB9tDaw)

## Sora
[通俗易懂地解释OpenAI Sora视频生成的特点有哪些？Sora与此前的Stable Video Diffusion、Runway Gen2、Pika等有什么区别？OpenAI Sora的缺点是什么？](https://www.datalearner.com/blog/1051708185278059)


| 能力项                 | OpenAI Sora                      | 其它模型                     |
| ---------------------- | -------------------------------- | ---------------------------- |
| 视频时长               | 60秒                             | 最多十几秒                   |
| 视频长宽比             | 1920x1080与1080x1920之间任意尺寸 | 固定尺寸,如16:9, 9:16, 1:1等 |
| 视频清晰度             | 1080P upscale之后达到4K          | 文本生成视频                 |
| 文本生成视频           | 支持                             | 支持                         |
| 图片生成视频           | 支持                             | 支持                         |
| 视频生成视频           | 支持                             | 支持                         |
| 文本编辑视频           | 支持                             | 支持                         |
| 扩展视频               | 向前/向后扩展                    | 仅支持向后扩展               |
| 视频连接               | 支持                             | 不支持                       |
| 真实世界模拟           | 支持                             | 支持                         |
| 运动相机模拟           | 强                               | 弱                           |
| 依赖关系进行建模       | 强                               | 弱                           |
| 影响世界状态(世界交互) | 强                               | 弱                           |
| 人工过程(数字世界)模拟 | 支持                             | 不支持                       |

## GPT-4

## GPT-4V
带视觉(version)的功能。
