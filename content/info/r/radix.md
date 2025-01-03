---
title: Radix
tag: suggestion, open-source
---
[官网](https://www.radix-ui.com/)
> An open source component library optimized for fast development, easy maintenance, and accessibility. Just import and go—no configuration required.
> 一个开源组件库，针对快速开发、易于维护和可访问性进行了优化。 只需导入即可运行——无需配置。

其他框架的： [Radix Vue](./radix-vue.md)，[Radix Svelte](https://radix-svelte.com/)。

[WorkOS](../../../scenario/auth/workos.md) 做的。

做的超级赞：
1. 功能强大（可访问性，下拉支持 Portal 等常见业务功能都支持）。
2. 开发者体验好。可以灵活配置组件可能变化的内容（组件的设计做的很好），还可以单独装某个组件包。 高质量。

架构感觉也做的不错：
1. [primitives](https://github.com/radix-ui/primitives)
1. [themes](https://github.com/radix-ui/themes)
1. [colors](https://github.com/radix-ui/colors)
1. [icons](https://github.com/radix-ui/icons)

Theme 来提供配置UI的配置：
```tsx
import '@radix-ui/themes/styles.css';
import { Theme, Button } from '@radix-ui/themes'

export default () => (
  <Theme>
    <Button>Hey 👋</Button>
  </Theme>
)
```

架构和组件设计值得好好研究下。

## 灵活性
不带样式的，完全自定义。

把可能会自定义的部分，都开放出来了。

## 样式的设计
大部分组件都支持 className 和 style 属性。

组件状态的控制。会有属性 `[data-state=xxx]`，比如 `[data-state="open"]`，`[data-state="closed"]`。

## 其他
对组件部分有统一的术语。

组件：
* Root: 组件根节点。
* Trigger: 触发弹出的组件。
* Content: 弹出的内容。
* Overlay: 遮罩。
* Portal: 弹出。

属性：
* asChild: 为 true 时，将该组件的功能传递到子元素上。如：
```jsx
<Tooltip.Trigger asChild>
  <a href="https://www.radix-ui.com/">Radix UI</a>
</Tooltip.Trigger>
```

## 疑问
Trigger 并不支持自定义触发事件类型，只能是 click 或 hover。 这个可以控制吗？

