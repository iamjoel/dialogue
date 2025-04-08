---
title: 生成代码
description: LLM 生成代码
---

## 在 Cursor 中，用 Figma MCP + Claude 3.7 生成高可用的前端代码
**高可用**指代码不用怎么改可以直接用在项目里。具体包括:
1. 技术栈。用的第三方库(包括版本)与 `package.json` 里定义的一致。React/Vue, Typescript, Tailwind, 图标库等。
2. 代码风格。与 ESlint 定义一致。
3. 复用项目中已有的组件。
4. 颜色变量。因为项目支持多套皮肤，所以颜色值都需要用变量。
5. 多语言。
6. 代码可维护。

试了下，在 [Dify 的前端项目](https://github.com/langgenius/dify/tree/main/web)下生成代码，效果还不错。基本能满足上面的要求。

Prompt:
```text
用 MCP Server: Figma MCP 实现 Figma 里的 UI:  [Figma 的 url]。

要求:
1. 技术栈: 使用 @package.json 里的第三方库。图标用 @remixicon/react 里的。
2. 尽可能复用 @app/components/base 下的组件。
3. 颜色用 @themes/tailwind-theme-var-define.ts 里定义的。 因为这些变量在 tailwind 里配置过了，所以直接用可以。用 text-text-primary 而不是 text-[--color-text-primary]。
4. 引用路径用 @ 开头。
5. 文本内容直接写出来，而不是按属性传入。写中英文的 i18n 即可。 英文路径: @i18n/en-US/app.ts 中文路径: @i18n/zh-Hans/app.ts。
6. 写可维护的代码。代码要模块化。如果功能比较复杂，拆成若干个小组件。代码中的注释用英文。

代码写入 @目标文件
```

说明: 
1. 第一条中，写 图标用 `@remixicon/react` 里的，是因为项目了还有了图标库: `@heroicons/react`。
2. 代码风格这块没有要求。因为 Cursor 生成的代码风格不一致后会自动修。
3. @开头的项目中的文件路径。
4. 可维护的代码这块，并没有拆组件。

MCP Sever 用的是: [Framelink Figma MCP Server](https://github.com/GLips/Figma-Context-MCP)。


TODO: 找个合适的导出 Figma 给 LLM 用的。[Figma to JSON](https://www.figma.com/community/plugin/1422317902846277686/figma-to-json) 还不够好。

## 工具
* Copilot, Cursor, Windsurf, Trae。
* [Same](https://same.new/) 根据网站，生成对应代码。