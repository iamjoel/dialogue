---
title: Astro
description: Astro is the web framework for building content-driven websites like blogs, marketing, and e-commerce.
tags: frontend, CMS
---
[官网](https://astro.build/)
> Astro is the web framework for building content-driven websites like blogs, marketing, and e-commerce.

在 ThoughtWorks 在 2024/04 的技术雷达中，Astro 被评为试验。
> Astro 框架在社区中越来越受欢迎。我们的团队已经使用 Astro 构建了诸如博客和营销网站之类的内容驱动型
网站。Astro 是一个多页面应用程序框架，它在服务器上渲染 HTML 并最小化通过网络发送的 JavaScript 。我
们认为不错的一点是，尽管 Astro 鼓励仅发送 HTML，但它支持在适当的情况下选择性地使用您选择的前端
JavaScript 框架编写的活动组件。它通过其岛屿架构实现这一点。岛屿是单页内的交互区域，在这里所需的
JavaScript 仅在需要时才被下载。通过这种方式，网站的大部分区域被转换为快速的静态 HTML，而 JavaScript
部分则优化为并行加载。我们的团队既喜欢其页面渲染性能，也喜欢其构建速度。Astro 组件语法是 HTML 的
简单扩展，学习曲线相当平缓。

## 亮点
* [性能比 [Next.js](../n/next.md), Gatsby 等框架 好。][1]

## 技术
### 特性
* 支持 [React](../../frontend/content/react/readme.md), [Vue](../../frontend/content/vue.md)
* 支持服务端渲染。
* [Astro Island](https://docs.astro.build/zh-cn/concepts/islands/) 标注出没有交互的组件（类似客户端组件），会被直接在服务端加载。
* [内置对 Markdown 和 MDX 对处理](https://docs.astro.build/en/guides/markdown-content/)。

### [设计理念](https://docs.astro.build/en/concepts/why-astro/#design-principles)
1. Content-driven: Astro was designed to showcase your content.
2. Server-first: Websites run faster when they render HTML on the server. 
3. Fast by default: It should be impossible to build a slow website in Astro.
4. Easy to use: You don’t need to be an expert to build something with Astro.
5. Developer-focused: You should have the resources you need to be successful.

## 生态
* 支持 100+ [应用类型模版](https://astro.build/themes/)。包含 Blogs, Marketing, Agencies(机构官网),E-commerce 等。部分模版是收费的。

## 链接
* [文档](https://docs.astro.build/zh-cn/)

## 引用
1. [1]: [Astro](https://astro.build/)
