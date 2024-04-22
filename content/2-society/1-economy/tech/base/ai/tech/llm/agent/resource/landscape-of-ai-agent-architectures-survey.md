---
title: The Landscape of Emerging AI Agent Architectures for Reasoning, Planning, and Tool Calling
---

## 基础信息
* 论文地址：[The Landscape of Emerging AI Agent Architectures for Reasoning, Planning, and Tool Calling: A Survey](https://arxiv.org/abs/2404.11584)
* 发布时间: 2024/04/17
* 重点：调查 AI Agent 在增强推理、规划和工具执行能力。以此，为 AI Agent 未来的设计提出参考意见。

## 概览
> This survey paper examines the recent advancements in AI agent implementations, with a focus on their ability to achieve complex goals that require enhanced reasoning, planning, and tool execution capabilities. The primary objectives of this work are to a) communicate the current capabilities and limitations of existing AI agent implementations, b) share insights gained from our observations of these systems in action, and c) suggest important considerations for future developments in AI agent design. We achieve this by providing overviews of single-agent and multi-agent architectures, identifying key patterns and divergences in design choices, and evaluating their overall impact on accomplishing a provided goal. Our contribution outlines key themes when selecting an agentic architecture, the impact of leadership on agent systems, agent communication styles, and key phases for planning, execution, and reflection that enable robust AI agent systems.
> 本调查论文研究了人工智能代理实现的最新进展，重点关注它们实现需要增强推理、规划和工具执行能力的复杂目标的能力。这项工作的主要目标是 a) 传达现有 AI 代理实现的当前功能和局限性，b) 分享我们从对这些系统实际运行的观察中获得的见解，以及 c) 为 AI 代理设计的未来发展提出重要考虑因素。我们通过提供单代理和多代理架构的概述、识别设计选择中的关键模式和分歧以及评估它们对实现所提供目标的总体影响来实现这一目标。我们的贡献概述了选择代理架构时的关键主题、领导力对代理系统的影响、代理沟通方式以及实现强大的人工智能代理系统的规划、执行和反思的关键阶段。

## 现有 AI 代理的能力
1. 单代理和多代理架构都展现出了在复杂任务上的良好表现,能够通过推理、规划和工具调用完成目标。
2. 一些代理系统引入了反馈机制、任务分解、迭代改进等技术,提高了问题求解能力。
3. 多代理系统可以通过明确的角色分工、团队动态优化等方式,更高效地协同完成任务。

## 局限性
1. 对于单代理系统,如果推理和改进能力不强,可能会陷入执行循环,难以取得进展。
2. 多代理系统中,代理间冗余的对话可能会干扰任务执行。垂直架构中,如果领导代理没有传递足够信息,也会影响团队表现。
3. 现有的代理评估基准缺乏统一性,很多基于小型人工数据集,覆盖的任务范围有限,与真实应用场景差异较大,评判代理实际性能的效果不佳。
4. 当前代理系统使用的语言模型存在偏见,代理继承了这些偏见,可能导致有害内容或不可靠的推理结果

## AI 代理设计的未来发展有哪些重要考虑因素
根据这篇综述文章,AI代理设计的未来发展有以下几个重要考虑因素:

1. 单代理和多代理架构的选择。根据具体应用场景的不同,选择适合的单代理或多代理架构。单代理适合任务明确、流程清晰的场合;多代理适合需要协作、任务可并行的情况。选对架构可以优化系统性能。
2. 引入反馈、分解、迭代等机制。人类监督反馈可以提高代理输出的可靠性和可解释性。将复杂任务分解为子任务,通过迭代改进的方式去解决,可以增强代理的问题求解能力。
3. 优化多代理系统的协作。在多代理系统中,要建立清晰的领导结构,动态优化团队组成,设计智能的信息共享机制,减少冗余对话,提高协作效率。
4. 开发更全面、更贴近实际的评估基准。现有代理评估基准存在统一性不足、任务范围有限、偏离真实应用等问题。未来需要开发覆盖更广泛任务的基准,引入客观量化指标,并更多地反映实际应用需求,全面评估代理系统的性能。
5. 消除语言模型和代理系统的偏见。要研究有效的策略,减轻当前语言模型中存在的偏见在代理系统中的影响,提高代理输出内容的可靠性和公平性。
6. 探索新的技术方向。如引入强化学习、图神经网络等AI技术,改进代理的推理、规划与学习能力,开发出功能更强大、更高效、适用性更广的新一代代理系统。

综上,未来AI代理设计除了要在架构选择、功能机制上做出针对性优化外,还应重视评估基准的完善,消除模型偏见,并积极吸收和探索前沿技术,不断推动代理系统的进步和发展,更好地服务于实际应用需求。

## 单 Agent 和 多 Agent 架构
在社区中，当前存在关于单智能体系统还是多智能体系统是否最适合解决复杂任务的争论。当问题得到明确定义并且来自其他人的反馈时，单代理架构会表现出色。当需要协作和多个不同的执行路径时，多代理架构往往会更加繁荣。


### 多 Agent 架构
多代理架构可以拥有各种复杂程度的组织。它们可分为：垂直和水平。这两个类别代表了一个范围的两端，大多数现有架构都介于这两个极端之间。

垂直架构。在这种结构中，一个代理充当领导者，其他代理直接向他们报告。根据架构的不同，报告代理可能只与主导代理进行通信。或者，可以通过所有代理之间的共享对话来定义领导者。垂直架构的定义特征包括拥有主导代理和协作代理之间明确的分工。

水平架构。在这种结构中，所有代理都被平等对待，并且是有关任务的小组讨论的一部分。代理之间的通信发生在共享线程中，每个代理都可以看到来自其他代理的所有消息。代理还可以自愿完成某些任务或调用工具，这意味着他们不需要由领导代理分配。水平架构通常用于协作、反馈和小组讨论是任务整体成功的关键的任务。

## 规划能力
规划需要很强的推理能力，通常分为五种主要方法之一：任务分解、多计划选择、外部模块辅助规划、反思和细化以及记忆增强规划。

大多数代理模式都有一个专用的计划步骤，该步骤会调用其中一项或多项技术来在执行任何操作之前创建计划。例如，Plan Like a Graph (PLaG) 是一种将计划表示为有向图的方法，其中多个步骤并行执行 [15, 33]。对于包含许多受益于异步执行的独立子任务的任务，与其他方法相比，这可以显着提高性能。
