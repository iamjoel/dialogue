---
title: Fixie
---
> Fixie is the world's leading platform for building conversational AI Sidekicks that are designed to answer questions, take action, and live directly alongside your application.

简而言之，Fixie 是构建对话式 AI 应用的平台。 

创始人团队很牛逼。Fixie由来自Google和Apple的资深工程师、产品负责人和AI专家创立。它的主要创始人Matt Welsh（现担任首席架构师）是连续创业者，曾是哈佛大学计算机教授。

但感觉功能一般。

## TL;TR
1. Fixie 由两部分组成。AI.JSX 和 Fixie Platform：
  1. AI.JSX 类似 LangChain，提供底层 SDK。并且，AI.JSX 中也封装了 UI(SideKick,  ai-jsx/sidekick)。
  2.  Fixie Platform 提供了AI 应用的部署环境和文档(对应 Dify 中的数据集)管理。当然，能部署的应用仅限于用 AI.JSX 开发的 。
2. AI.JSX 用 JSX 来编排应用。在某些情况下，比用函数编排直观，容易理解。这个可以基于一些生产级的应用场景深度研究下。
3. 整理来说，Fixie 支持的功能比较塑料: 支持特性广度不及 LangChain，支持特性(如 RAG) 深度不如 Dify。

## 主要特性 
1. 调用，编排和调试 LLM。调用具体包括：
  1. 接入模型。支持模型供应商包括：OpenAI， Athropic,  Cohere 和 replicate-llama2。
  2. RAG。只是简单的分段，向量化，嵌入到向量数据库，然后比较相似度召回。
  3. 选择工具。
  4. 支持生成图像。用的是 OpenAI 的 Dalle 模型。
  5. 其他琐碎的功能：
    1. 设置 LLM 输出的格式。比如，按照 JSON 格式输出。
    2. 自然语言路由器(Using the Natural Language Router)。
    3. 用自定义 React 组件渲染 LLM 输出的内容。
2. UI。构建对话式 AI  的 UI。
3. 部署 AI 应用。交付物如下：
1 API 
 该应用是支持 Memory 的。但该 API 定义并没有要传 Conversation ID 的地方。
2 简陋的对话式 AI 应用。只能用于调试，没法投产(不支持会话历史记录)。
点 New会开始一个新会话。点 Debug 会显示 Conversation ID。

## 架构
Fixie 由两部分组成。AI.JSX 和 Fixie Platform：
1. AI.JSX 类似 LangChain，提供底层 SDK，包含：调用，编排，调试 LLM 的功能。并且，AI.JSX 中也封装了 UI(SideKick,  ai-jsx/sidekick)。
2.  Fixie Platform 提供了AI 应用的部署环境和文档管理。当然，能部署的应用仅限于用 AI.JSX 开发的 。

AI.JSX 是开源的。Fixie Platform 是闭源的。

## AI.JSX 使用 JSX 来编排 LLM 应用
AI.JSX 用 JSX 来编排应用。什么是 JSX 呢？
JSX，是一个 JavaScript 的语法扩展。JSX 可以很好地描述 UI 应该呈现出它应有交互的本质形式。

在 React 应用中会使用 JSX 。比如：
<Elem>
  {hasChild ? <Child name='xx' /> : null}
</Elem>

AI.JSX 为什么选择 JSX 呢，官方文档是怎么说的：
> In AI.JSX, we use JSX to handle both string composition (replacing prompt templates) and composition (chains). We think JSX is a superior abstraction for organizing LLM-based applications than because it offers:
> - A better set of primitives
> - that can be declaratively and explicitly composed
> - leading to an abstraction that's both easier to understand and more flexible
> 
> 在AI.JSX中，我们使用JSX来处理字符串组合（替换提示模板）和组合（链）。我们认为JSX是组织基于LLM的应用程序的上级抽象，因为它提供了：
> - 一组更好的原语
> - 可以声明地和显式地组合
> - 从而产生一种更容易理解和更灵活的抽象

如果把 Prompt 类比为 HTML，那么组成 Prompt 的节点就是 DOM 元素。用 JSX 很适合处理 DOM，那么是否也适合处理 Prompt 呢？
 
## 用 JSX 编排应用示例
### 1 Hello World
import * as AI from 'ai-jsx';
import { ChatCompletion, UserMessage, SystemMessage } from 'ai-jsx/core/completion';

const app = (
  <ChatCompletion>
    <SystemMessage>You are an friendly and helpful agent.</SystemMessage>
    <UserMessage>Write a Shakespearean sonnet about AI models.</UserMessage>
  </ChatCompletion>
);

const renderContext = AI.createRenderContext();
const response = await renderContext.render(app);
console.log(response);
上面的代码中，并没有显式的指定模型。此时，AI.JSX 会根据设置了哪个模型的 API Key 的环境变量，就用哪个模型。

### 2 链式调用 LLM

<Inline>
    <ChatCompletion>
      <UserMessage>Come up with the name of a mythical forest animal.</UserMessage>
    </ChatCompletion>
    {'\n\n'}
    {(conversation) => (
      <ChatCompletion>
        <UserMessage>Imagine a mythical forest animal called a "{conversation}". Tell me more about it.</UserMessage>
      </ChatCompletion>
    )}
    {'\n\n'}
    {(conversation) => (
      <ChatCompletion>
        <UserMessage>Now write a poem about this animal: {conversation}</UserMessage>
      </ChatCompletion>
    )}
  </Inline>

### 3 RAG
function GetChunk({ chunk }: { chunk: ScoredChunk }) {
  return chunk.chunk.content;
}

function App() {
  return (
    <>
      <DocsQA question="What was Hurricane Katrina?" corpus={corpus} chunkLimit={5} chunkFormatter={GetChunk} />
      {'\n\n'}
      <DocsQA question="Which dates did the storm occur?" corpus={corpus} chunkLimit={5} chunkFormatter={GetChunk} />
      {'\n\n'}
      <DocsQA
        question="Where were the strongest winds reported?"
        corpus={corpus}
        chunkLimit={5}
        chunkFormatter={GetChunk}
      />
    </>
  );
}
DocsQA 标签返回的内容是从文档(corpus)中查询到分段。

### 4 使用工具
const tools = {
  checkStockPrice: {
    description: 'Check the price of a stock.',
    parameters: {
      symbol: {
        description: 'The symbol of the stock to get price for.',
        type: 'string',
        required: true,
      },
    },
    func: checkStockPrice,
  },
  getHistoricalPrices: {
    description: 'Return historical prices for a stock.',
    parameters: {
      symbol: {
        description: 'The symbol of the stock to get price for.',
        type: 'string',
        required: true,
      },
    },
    func: getHistoricalPrices,
  },
};


return (
  <UseTools tools={tools}>
    <SystemMessage>You are an agent that can answer questions about stocks.</SystemMessage>
    <UserMessage>What is the current price for AAPL?</UserMessage>
  </UseTools>
)

5 设置 LLM 的输出格式
import z from 'zod';

const characterSchema = z.object({
  name: z.string(),
  class: z.string(),
  race: z.string(),
  weapons: z.array(z.string()),
  spells: z.array(z.string()),
});

const app = (
  // ...
  <JsonChatCompletion schema={characterSchema}>
    <UserMessage>{conversation}</UserMessage>
  </JsonChatCompletion>
  // ...
)
上面代码让 LLM 按指定的 JSON 格式输出，

### 6 以自定义 React 组件格式渲染 LLM 的输出
const genUIComponentNames = [ 'MyTable' ];
const genUIExamples = (
  return <>
    Whenever responding with tabular data, the {'<MyTable />'} component. Its interface is:
    {`
    interface MyTable {
      header: string
      columnNames: string[]
      rowData: string[][]
    }
    `}
  </>
);

const mySidekick = (
  <Sidekick
    systemMessage={systemMessage}
    tools={tools}
    genUIComponentNames={genUIComponentNames}
    genUIExamples={genUIExamples}
  />
);
该功能是用 Prompt 来实现的。

### 7 生成图片
import * as AI from 'ai-jsx';
import { ChatCompletion, SystemMessage, UserMessage } from 'ai-jsx/core/completion';
import { ImageGen } from 'ai-jsx/core/image-gen';

function RecipeWithImage(_: {}, { memo }: AI.ComponentContext) {
  const recipeTitle = memo(
    <ChatCompletion temperature={1}>
      <SystemMessage>You are a Michelin Star Head Chef</SystemMessage>
      <UserMessage>Come up with a title for an exotic sushi.</UserMessage>
    </ChatCompletion>
  );
  return (
    <>
      Recipe title: {recipeTitle}
      {'\n'}
      Recipe image link: <ImageGen>Sushi called "{recipeTitle}"</ImageGen>
    </>
  );
}

console.log(await AI.createRenderContext().render(<RecipeWithImage />));

### 8 自然语言路由器
function QuestionFilter(props: { children: AI.Node; question: string }) {
  return (
    <NaturalLanguageRouter query={props.question}>
      <Route when='The query is a simple question about an animal that can be answered with "yes" or "no."'>
        {props.children}
      </Route>
      <Route when="The query is not a simple yes-or-no question about an animal.">
        I'm sorry, but I can only accept yes/no questions about animals.
      </Route>
    </NaturalLanguageRouter>
  );
}

function QuestionAnswerer() {
  return <QuestionFilter question="Is a red panda a mammal?">This is a valid question.</QuestionFilter>;
}

更多示例见：
- [AI.JSX Tutorials](https://docs.ai-jsx.com/tutorials/aijsxTutorials/part1-completion)
- [Sidekicks Tutorial](https://docs.ai-jsx.com/tutorials/sidekickTutorial/part1-intro)
- [ai-jsx examples](https://github.com/fixie-ai/ai-jsx/tree/main/packages/examples)

TODO
- Fixie 的 Memory 的探究。文档中没有提到这块。需要去源码中找。