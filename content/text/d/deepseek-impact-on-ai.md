---
title: 聊聊 DeepSeek 对 AI 行业的影响
---

2024年12月26日，DeepSeek 发布了 DeepSeek V3 并开源。V3 的性能对标 GPT 4o。今年1月20日，DeepSeek 发布了大模型 DeepSeek R1 并开源。R1 的性能对标 GPT o1。1月27日，DeepSeek 发布了文生图模型 Janus-Pro 和 JanusFlow 并开源。Janus-Pro-7B 对标 DALL-E 3。

没过几天， DeepSeek 开始爆火。1月27日，DeepSeek 超越 ChatGPT，登顶苹果 App Store 美国区免费APP下载排行榜。1月的最后一周时间，[DeepSeek 的用户增长数超过了 1 亿](https://mp.weixin.qq.com/s/FEI_O0oAYWU1Bm0_OohSSw)!

DeepSeek 为什么会这么火? 它会对 AI 行业带来哪些影响？我们下面来具体聊聊吧。

## 高性价比的一流大语言模型
DeepSeek R1 模型是推理模型，在数学、代码、自然语言推理等任务上的能力可与 GPT o1 媲美。价格方面，其 API 的价格只有 o1 的 1/30。R1 模型用思维链来思考问题。R1 会展示其思考过程。阅读其思考过程，往往惊叹于其思考的广度和深度，启发颇多。

DeepSeek R1 是在 DeepSeek V3 模型的基础上构建的。DeepSeek V3 没有推理能力，但优势是生成的速度快。推荐阅读: [DeepSeek R1 vs. V3：如何选择？](http://www.hubwiz.com/blog/deepseek-r1-vs-v3-how-to-choose/) 。

注: 推理模型是 OpenAI 发布 o1、o3 模型开创的新范式。这类模型不再是一次性输出，而是展示一个思考的过程。

## 开源且较低的训练成本
对于如何训练出推理模型，OpenAI 几乎没有对外公布任何信息。DeepSeek 可以说是首个复现成功的模型。并且，DeepSeek 通过混合专家（MoE）架构和优化技术，显著降低了训练和推理成本。    
1. 据每日经济新闻报道，DeepSeek V3 的预训练费用只有557.6万美元(算力成本)，仅是 OpenAI GPT-4o 模型训练成本的不到十分之一。
2. UC 伯克利博士生 Jiayi Pan 和另两位研究人员，在 CountDown 游戏中用不到 30 美元的成本复现了 DeepSeek R1-Zero 的 aha moment(指模型展示出反思能力)。项目地址：https://github.com/Jiayi-Pan/TinyZero。
3. 港科大的项目 [Simple Reinforcement Learning for Reasoning](https://github.com/hkust-nlp/simpleRL-reason) 以 Qwen2.5-Math-7B 作为基础模型，仅使用了 8000 个来自 MATH 的数据集，就复现了 aha moment。

可见，通过 [DeepSeek 的论文](https://arxiv.org/html/2501.12948) 里训练方法和其开源的模型权重，我们可以用较低的成本训练出自己的推理模型。虽然 DeepSeek 没有开源用于训练的数据集和代码，但 Hugging Face的 [Open R1](https://github.com/huggingface/open-r1) 项目补足了这块空白。对这块感兴趣的推荐阅读：[DeepSeek-R1复现方案解读之「Open-R1」](https://mp.weixin.qq.com/s/8Spvj_aPFOHmgZb2T4Y-IQ)。

DeepSeek 的开源协议用的是 MIT。MIT 协议支持免费商用、任意修改和衍生开发。使用者可以随意调整模型架构和训练流程。

## 对应用开发者的影响
**更多的开发者选择用 DeepSeek**。因为 DeepSeek R1 优秀的推理能力和高性价比。当然，由于太火爆了，DeepSeek 的服务并不稳定。但这只是暂时的。随着越来越多的云厂商提供 DeepSeek 的 API 服务，以及一些程序上的优化(比如用 Dify 支持的[模型负载功能](https://mp.weixin.qq.com/s/IebjxjwMYG3vMaCrblCyAg))， 使用 DeepSeek 会越来越稳定。

**大语言模型的应用范围变广**。比如:
1. 有些开发者以前不熟悉大语言模型，通过看到 DeepSeek 的惊艳能力，开始探索其潜力。
2. 有的场景，用以前的大语言模型，其准确率和精度达不到业务要求。因为 DeepSeek 的爆火，开始用 DeepSeek 来做重新尝试。
3. 有的场景，用之前的大语言模型太贵了，现在可以尝试用 DeepSeek 了。

## 对模型厂商的影响
DeepSeek 像一条“鲶鱼”，加速了模型厂商的迭代效率。  
1. R1发布后不久，Meta首席执行官马克·扎克伯格就宣布，Meta计划在2025年投入超600亿美元，加大对人工智能的投入。[据媒体1月27日报道，Meta成立了四个研究小组，专门研究DeepSeek的模型](https://www.thepaper.cn/newsDetail_forward_30042298)。其中两个小组研究其开发者如何降低训练和运行DeepSeek的成本，第三个小组研究训练模型可能使用了哪些数据，第四个小组研究基于 DeepSeek 模型属性重构其 LLaMA 模型的新技术。  
2. 1月31日，OpenAI 推出新一代高性价比推理模型o3-mini，这是OpenAI首个开放给免费用户的推理模型。2月3日，OpenAI推出了用于网页搜索文献研究的智能体Deep Research，专为自动化复杂的在线多步骤研究任务而设计。
3. 2月5日，谷歌宣布，其最新AI模型套件 Gemini 2.0 正式向所有用户开放使用。
4. 躺平的欧洲 AI 也爬起来了。瑞士《新苏黎世报》发表文章，题为《深度求索作为转折点：中国人工智能或许恰好能给欧洲带来关键优势》。文章说，长期以来，欧洲自认在人工智能竞赛中毫无胜算，因为欧洲无法像美国科技巨头那样筹集到巨额资金以建立强大算力。但欧洲和瑞士拥有在人工智能热潮中真正发挥作用所需的最重要资源：智力、训练有素的人才。深度求索模型表明，即使资金和计算能力有限，也能开发出优秀的人工智能模型，这为欧洲研究人员开辟了一条道路。

DeepSeek 也降低了模型厂商的进入门槛。一些中小公司可以基于 DeepSeek 做一些专有模型。

## 对算力厂商的影响
虽然，因为 DeepSeek 的爆火，[在 1 月 27 日，英伟达市值蒸发近 6000亿美元，规模创美股史上最大](https://wallstreetcn.com/articles/3740143)。但是，我觉得这只是短期的，毕竟不管是训练模型，还是运行模型的推理服务，仍然需要大量的算力。

## 最后
一句话总结，DeepSeek 加速了整个 AI 行业的迭代效率。

大家觉得 DeepSeek 下面还会放什么大招？ AGI 会在哪年到来？
