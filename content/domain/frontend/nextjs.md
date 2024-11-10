---
title: Next.js
---

开发一个 APP，只用 React 需要加很多额外的，如页面路由，服务端渲染(SEO，性能，安全(不泄露信息)等)。

## 功能
* [声明式路由](#声明式路由)
* [服务端渲染](#服务端渲染)
* [内置的性能优化](#内置的性能优化)
* 对生态的接入
  * 测试框架: Jest 等。
* [配置](#配置)

## [声明式路由](https://nextjs.org/docs/app/building-your-application/routing/defining-routes)

路由和文件路径一致。如:
| 文件路径 | URL | 说明 |
|---------|-----|------|
| `app/page.js` | `/` | 首页 |
| `app/about/page.js` | `/about` | 普通页面 |
| `app/blog/[slug]/page.js` | `/blog/post-1` | 动态路由 |
| `app/shop/[...slug]/page.js` | `/shop/a/b/c` | 捕获所有路由 |
| `app/products/[[...slug]]/page.js` | `/products` 或 `/products/a/b` | 可选的捕获所有路由 |
| `app/(marketing)/about/page.js` | `/about` | 路由分组，不影响 URL |
| `app/@modal/login/page.js` | - | 平行路由，用于模态框等 |
| `app/api/route.js` | `/api` | API 路由 |
| `app/not-found.js` | - | 404 页面 |
| `app/error.js` | - | 错误页面 |
| `app/loading.js` | - | 加载页面 |

### [Layout](https://nextjs.org/docs/app/building-your-application/routing/layouts-and-templates)
Layout 是多个页面共享的 UI。Layout 会在页面切换时保持状态。

Layout 的写法：
1. 在目录下创建 `layout.js` 文件。如 `app/layout.js` 是根布局，`app/blog/layout.js` 是 blog 目录下的布局。
2. 在 `layout.js` 中导出一个默认组件，接收 children 属性。children 是页面内容。

可以用路由组来实现同一个父路径下的不同 Layout。

### Template
Template 和 Layout 类似，也是多个页面共享的 UI。区别是：
1. Template 在页面切换时不会保持状态，每次切换都会重新创建。
2. Template 会为每个子页面创建一个新实例。这意味着，当导航发生时，组件将重新挂载，DOM 元素将重新创建，状态不会被保留，效果会重新运行。

Template 适用于:
* 需要在路由切换时重新挂载的功能，如进入动画。
* 需要每次都重置状态的功能。
* 需要每次都重新运行效果的功能。

Template 的写法：
1. 在目录下创建 `template.js` 文件。
2. 在 `template.js` 中导出一个默认组件，接收 children 属性。


## 服务端渲染
### 服务端组件
服务端组件有一些好处，比如调用接口比在客户端快，可以隐藏敏感信息，输出内容快，支持 SEO 。

服务端组件只会跑服务端。因此不支持用客户端中的 API。

### 客户端组件
客户端组件不仅在客户端中跑，也在会服务器端，只是在服务端不会跑客户端的业务逻辑。

如果列表要做 SEO，列表本身有很多客户端逻辑(比如滚动加载，点击item 展示详情，删除 item 刷新)时，在服务端组件获取列表数据，然后把这数据做为属性传给列表组件。列表组件做成客户端组件。列表组件只是用服务端的列表数据做完初始值，后面就直接改列表数据即可。遇到详情做 SEO 也是这么处理。

## 内置的性能优化


## 配置
### 环境变量
在 `.env` 中设置环境变量。

在服务端可以取环境变量。客户端拿不到。如果客户端也要拿，则通过设置在 `body` 的属性上。

### [Middleware](https://nextjs.org/docs/app/building-your-application/routing/middleware)
在 请求 返回前做一些事。比如： 鉴权，页面重定向，记 Log，设置跨域名 等。 在 `middleware.ts` 中配置。

### [错误处理](https://nextjs.org/docs/app/building-your-application/routing/error-handling)
错误分为 预期中的错误(expected errors) 和 预料之外的错误(uncaught exceptions)。

预期中的错误的处理：用 `try catch` 捕获处理错误。预料之外的错误用 `error.tsx` 和 `global-error.tsx`。 

## 优化
### [Standalone 模式](https://nextjs.org/docs/pages/api-reference/next-config-js/output)
可以减小 Next.js 构建出的产物大小。

> Next.js can automatically create a standalone folder that copies only the necessary files for a production deployment including select files in node_modules.

> Additionally, a minimal server.js file is also output which can be used instead of next start. This minimal server does not copy the public or .next/static folders by default as these should ideally be handled by a CDN instead, although these folders can be copied to the standalone/public and standalone/.next/static folders manually, after which server.js file will serve these automatically.

### 加快编译速度
用 Turbopack。 不支持 [Rspack](https://rspack.dev/)，

跳过一些包的编译。

## 资源
* [Recap: Next.js Conf 2024](https://vercel.com/blog/recap-next-js-conf-2024) Next.js 15 。