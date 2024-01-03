# [Radix](https://www.radix-ui.com/)
> An open source component library optimized for fast development, easy maintenance, and accessibility. Just import and go—no configuration required.

#open-source #推荐/使用 。 其他框架的： [Radix Vue](./radix-vue.md)，[Radix Svelte](https://radix-svelte.com/)。

[WorkOS](../../scenario/auth/workos.md) 做的。

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