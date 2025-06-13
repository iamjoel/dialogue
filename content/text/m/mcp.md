---
title: MCP
---

MCP(Model Context Protocol, 模型上下文协议) 是 Anthropic 推出的一项开放协议，它规范了大型语言模型与外部工具或资源的通信方式。MCP 服务器允许 Cline 等 AI 代理访问其他功能，例如网络搜索、文件操作、API 集成、数据库访问等。

MCP 服务本质就是一些服务列表(MCP 称是 Tool list[注1])。[示例](https://github.com/modelcontextprotocol/servers/tree/main/src/github)。 

[注1]: MCP 称其是 tools list 是和 LLM 的 Agent 可以自主调用 tool 的名词上对齐。MCP Server 提供的每个 tool 提供了足够的 Agent 调用工具的信息： 工具描述，每个参数的描述。

## 为什么要使用 MCP
官方是这么说的：
```
MCP helps you build agents and complex workflows on top of LLMs. LLMs frequently need to integrate with data and tools, and MCP provides:

* A growing list of pre-built integrations that your LLM can directly plug into
* The flexibility to switch between LLM providers and vendors(因为 tools 是在服务端提供的，LLM 是客户端调用的，解藕了。当然，服务端也可以调用 LLM)
Best practices for securing your data within your infrastructure
```
## 架构
MCP Server: MCP 服务器。提供服务。  
MCP Client: MCP 客户端。获取 MCP Server 的服务。客户端连接 MCP Server 是要靠代码配置的，如, Claude 客户端的配置:
```
{
  "mcpServers": {
    "mcp-server-chatsum": {
      "command": "path-to/bin/node or python",
      "args": ["path-to-mcp-server-file"],
      "env": {
        some config needed by MCP Server
      }
    }
  }
}
```

MCP 服务器需要在本地安装。 MCP 客户端通过 Server 的 url 或 入口的 js 来连。MCP 客户端如：Claude 的客户端，Cursor，windsurf(付费版才支持)。

## MCP Server 分类
1. 读取数据
   1. 网页访问。爬虫，无头浏览器之类。
   2. 读数据库。
   3. 读网盘，对象存储服务等。
   4. 搜索引擎 Exa，BraveSearch, Serpi(Google) 等。
   5. 指定的数据源。如:
      1. Context7 搜索开发文档。
      2. Framelink 读 Figma。
      3. 高德地图，企信宝等。
      4. 时间。
2. 自动化
   1. 浏览器自动化：playwright， Puppeteer
   2. 文件操作。Trea 之类的自动支持了。
   3. Git
3. 服务类的(与 LLM 做的有些会有些重合)
  1. 生图。
  2. 天气。

   

## Cursor 中使用尝试 MCP Server 的尝试
在 Cursor 和 Trea 里用 MCP Server 都很方便。用 VSCode 会出现时不时读不到工具的情况。


## [用 LLM 来帮助写 MCP Server](https://modelcontextprotocol.io/tutorials/building-mcp-with-llms)
官方提供了帮助 LLM 理解 MCP 的文档: https://modelcontextprotocol.io/llms-full.txt。

## 支持 MCP 的客户端
| Client                               | [Resources] | [Prompts] | [Tools] | [Sampling] | Roots | Notes                                                              |
| ------------------------------------ | ----------- | --------- | ------- | ---------- | ----- | ------------------------------------------------------------------ |
| [Claude Desktop App][Claude]         | ✅           | ✅         | ✅       | ❌          | ❌     | Full support for all MCP features                                  |
| [5ire][5ire]                         | ❌           | ❌         | ✅       | ❌          | ❌     | Supports tools.                                                    |
| [BeeAI Framework][BeeAI Framework]   | ❌           | ❌         | ✅       | ❌          | ❌     | Supports tools in agentic workflows.                               |
| [Cline][Cline]                       | ✅           | ❌         | ✅       | ❌          | ❌     | Supports tools and resources.                                      |
| [Continue][Continue]                 | ✅           | ✅         | ✅       | ❌          | ❌     | Full support for all MCP features                                  |
| [Cursor][Cursor]                     | ❌           | ❌         | ✅       | ❌          | ❌     | Supports tools.                                                    |
| [Emacs Mcp][Mcp.el]                  | ❌           | ❌         | ✅       | ❌          | ❌     | Supports tools in Emacs.                                           |
| [Firebase Genkit][Genkit]            | ⚠️           | ✅         | ✅       | ❌          | ❌     | Supports resource list and lookup through tools.                   |
| [GenAIScript][GenAIScript]           | ❌           | ❌         | ✅       | ❌          | ❌     | Supports tools.                                                    |
| [Goose][Goose]                       | ❌           | ❌         | ✅       | ❌          | ❌     | Supports tools.                                                    |
| [LibreChat][LibreChat]               | ❌           | ❌         | ✅       | ❌          | ❌     | Supports tools for Agents                                          |
| [mcp-agent][mcp-agent]               | ❌           | ❌         | ✅       | ⚠️          | ❌     | Supports tools, server connection management, and agent workflows. |
| [Roo Code][Roo Code]                 | ✅           | ❌         | ✅       | ❌          | ❌     | Supports tools and resources.                                      |
| [Sourcegraph Cody][Cody]             | ✅           | ❌         | ❌       | ❌          | ❌     | Supports resources through OpenCTX                                 |
| [Superinterface][Superinterface]     | ❌           | ❌         | ✅       | ❌          | ❌     | Supports tools                                                     |
| [TheiaAI/TheiaIDE][TheiaAI/TheiaIDE] | ❌           | ❌         | ✅       | ❌          | ❌     | Supports tools for Agents in Theia AI and the AI-powered Theia IDE |
| [Windsurf Editor][Windsurf]          | ❌           | ❌         | ✅       | ❌          | ❌     | Supports tools with AI Flow for collaborative development.         |
| [Zed][Zed]                           | ❌           | ✅         | ❌       | ❌          | ❌     | Prompts appear as slash commands                                   |
| \[OpenSumi]\[OpenSumi]               | ❌           | ❌         | ✅       | ❌          | ❌     | Supports tools in OpenSumi                                         |

[Claude]: https://claude.ai/download

[Cursor]: https://cursor.com

[Zed]: https://zed.dev

[Cody]: https://sourcegraph.com/cody

[Genkit]: https://github.com/firebase/genkit

[Continue]: https://github.com/continuedev/continue

[GenAIScript]: https://microsoft.github.io/genaiscript/reference/scripts/mcp-tools/

[Cline]: https://github.com/cline/cline

[LibreChat]: https://github.com/danny-avila/LibreChat

[TheiaAI/TheiaIDE]: https://eclipsesource.com/blogs/2024/12/19/theia-ide-and-theia-ai-support-mcp/

[Superinterface]: https://superinterface.ai

[5ire]: https://github.com/nanbingxyz/5ire

[BeeAI Framework]: https://i-am-bee.github.io/beeai-framework

[mcp-agent]: https://github.com/lastmile-ai/mcp-agent

[Mcp.el]: https://github.com/lizqwerscott/mcp.el

[Roo Code]: https://roocode.com

[Goose]: https://block.github.io/goose/docs/goose-architecture/#interoperability-with-extensions

[Windsurf]: https://codeium.com/windsurf

[Resources]: https://modelcontextprotocol.io/docs/concepts/resources

[Prompts]: https://modelcontextprotocol.io/docs/concepts/prompts

[Tools]: https://modelcontextprotocol.io/docs/concepts/tools

[Sampling]: https://modelcontextprotocol.io/docs/concepts/sampling

## 工具
* https://smithery.ai/
* [Composio](https://composio.dev/) MCP Server 可以跑这这里。这也处理了授权这块。
  
## 资源
* [官方文档](https://modelcontextprotocol.io/introduction)
* Servers
  * [Cline Marketplace](https://cline.bot/mcp-marketplace)
  * [MCP Servers](https://mcp.so/servers)
* [LangChain创始人激辩MCP： 这是行业新标准，还是昙花一现？](https://mp.weixin.qq.com/s/etvDsU422z8uiknCn6fw4A)